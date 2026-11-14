#!/usr/bin/env python3
"""Linux equivalent of ParakeetAI's mic-monitor-worker.js.

Original (Windows/macOS): every 1 s call native getActiveAudioInputProcesses(),
diff against the previous result keyed by "bundleId:pid:deviceUid", and post
{"type": "mic-update", processes, newlyDetectedProcesses, noLongerDetectedProcesses}
only when something changed.  On error it posts {"type": "error", message}.

Linux implementation: PulseAudio / PipeWire (pipewire-pulse) expose every
recording stream as a "source-output".  We read them with
`pactl --format=json list source-outputs`.

Output format (JSON lines on stdout) matches the original worker messages.
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from dataclasses import dataclass, asdict
from typing import Callable


@dataclass(frozen=True)
class AudioInputProcess:
    bundleId: str   # app identifier (flatpak/desktop id, else binary name)
    pid: int
    deviceUid: str  # name of the source being recorded from
    name: str = ""  # human readable app name (extra, not in the original)

    @property
    def key(self) -> str:
        return f"{self.bundleId}:{self.pid}:{self.deviceUid}"


def _pactl_json(*args: str) -> list:
    out = subprocess.run(
        ["pactl", "--format=json", *args],
        capture_output=True, text=True, timeout=5, check=True,
    ).stdout
    return json.loads(out or "[]")


def get_active_audio_input_processes(include_monitors: bool = False) -> list[AudioInputProcess]:
    """Apps currently recording audio.

    include_monitors=False ignores streams reading a ".monitor" source: those
    capture speaker output (loopback), not the microphone.
    Corked (paused) streams are ignored because they are not recording.
    """
    sources = {s["index"]: s["name"] for s in _pactl_json("list", "sources")}
    result: list[AudioInputProcess] = []
    for so in _pactl_json("list", "source-outputs"):
        if so.get("corked"):
            continue
        device = sources.get(so.get("source"), str(so.get("source")))
        if not include_monitors and device.endswith(".monitor"):
            continue
        props = so.get("properties", {})
        # PipeWire's own internal streams are not user apps
        if props.get("media.class") == "Stream/Input/Audio" and props.get("node.link-group"):
            pass
        pid_s = props.get("application.process.id", "0")
        result.append(AudioInputProcess(
            bundleId=props.get("application.id")
            or props.get("application.process.binary")
            or props.get("application.name", "unknown"),
            pid=int(pid_s) if str(pid_s).isdigit() else 0,
            deviceUid=device,
            name=props.get("application.name", ""),
        ))
    return result


class MicMonitor:
    """Polls every `interval` seconds and calls `on_message` like the worker's postMessage."""

    def __init__(self, on_message: Callable[[dict], None],
                 interval: float = 1.0, include_monitors: bool = False):
        self.on_message = on_message
        self.interval = interval
        self.include_monitors = include_monitors
        self._previous: dict[str, AudioInputProcess] = {}
        self._stop = False

    def stop(self) -> None:
        self._stop = True

    def poll_once(self) -> None:
        current_list = get_active_audio_input_processes(self.include_monitors)
        current = {p.key: p for p in current_list}
        new = [p for k, p in current.items() if k not in self._previous]
        gone = [p for k, p in self._previous.items() if k not in current]
        if new or gone:
            self.on_message({
                "type": "mic-update",
                "processes": [asdict(p) for p in current_list],
                "newlyDetectedProcesses": [asdict(p) for p in new],
                "noLongerDetectedProcesses": [asdict(p) for p in gone],
            })
            self._previous = current

    def run(self) -> int:
        try:
            self.poll_once()
            while not self._stop:
                time.sleep(self.interval)
                self.poll_once()
        except Exception as e:  # same behaviour as the original: report and exit 1
            self.on_message({"type": "error", "message": str(e)})
            return 1
        return 0


def main() -> int:
    ap = argparse.ArgumentParser(description="Watch which apps are using the microphone")
    ap.add_argument("--interval", type=float, default=1.0)
    ap.add_argument("--include-monitors", action="store_true",
                    help="also report streams recording speaker output (.monitor sources)")
    args = ap.parse_args()
    mon = MicMonitor(lambda m: print(json.dumps(m), flush=True),
                     args.interval, args.include_monitors)
    try:
        return mon.run()
    except KeyboardInterrupt:
        return 0


if __name__ == "__main__":
    sys.exit(main())
