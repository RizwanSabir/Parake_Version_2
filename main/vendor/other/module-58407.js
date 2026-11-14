// vendor/other/module-58407.js — webpack module 58407
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const t =
    /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i,
  n =
    /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i,
  r = {};
function o({ accelerator: e, event: t }, n) {
  switch (n) {
    case "command":
    case "cmd":
      return (function (e, t, n) {
        if ("darwin" !== process.platform) return r;
        if (t.metaKey) throw new Error("Double `Command` modifier specified.");
        return {
          event: Object.assign({}, t, { metaKey: !0 }),
          accelerator: e.slice(n.length),
        };
      })(e, t, n);
    case "super":
      return (function (e, t, n) {
        if (t.metaKey) throw new Error("Double `Super` modifier specified.");
        return {
          event: Object.assign({}, t, { metaKey: !0 }),
          accelerator: e.slice(n.length),
        };
      })(e, t, n);
    case "control":
    case "ctrl":
      return (function (e, t, n) {
        if (t.ctrlKey) throw new Error("Double `Control` modifier specified.");
        return {
          event: Object.assign({}, t, { ctrlKey: !0 }),
          accelerator: e.slice(n.length),
        };
      })(e, t, n);
    case "commandorcontrol":
    case "cmdorctrl":
      return (function (e, t, n) {
        if ("darwin" === process.platform) {
          if (t.metaKey)
            throw new Error("Double `Command` modifier specified.");
          return {
            event: Object.assign({}, t, { metaKey: !0 }),
            accelerator: e.slice(n.length),
          };
        }
        if (t.ctrlKey) throw new Error("Double `Control` modifier specified.");
        return {
          event: Object.assign({}, t, { ctrlKey: !0 }),
          accelerator: e.slice(n.length),
        };
      })(e, t, n);
    case "option":
    case "altgr":
    case "alt":
      return (function (e, t, n) {
        if ("option" === n && "darwin" !== process.platform) return r;
        if (t.altKey) throw new Error("Double `Alt` modifier specified.");
        return {
          event: Object.assign({}, t, { altKey: !0 }),
          accelerator: e.slice(n.length),
        };
      })(e, t, n);
    case "shift":
      return (function (e, t, n) {
        if (t.shiftKey) throw new Error("Double `Shift` modifier specified.");
        return {
          event: Object.assign({}, t, { shiftKey: !0 }),
          accelerator: e.slice(n.length),
        };
      })(e, t, n);
  }
}
function i({ accelerator: e, event: t }) {
  return { event: t, accelerator: e.trim().slice(1) };
}
const s = {
  0: "Digit0",
  1: "Digit1",
  2: "Digit2",
  3: "Digit3",
  4: "Digit4",
  5: "Digit5",
  6: "Digit6",
  7: "Digit7",
  8: "Digit8",
  9: "Digit9",
  "-": "Minus",
  "=": "Equal",
  Q: "KeyQ",
  W: "KeyW",
  E: "KeyE",
  R: "KeyR",
  T: "KeyT",
  Y: "KeyY",
  U: "KeyU",
  I: "KeyI",
  O: "KeyO",
  P: "KeyP",
  "[": "BracketLeft",
  "]": "BracketRight",
  A: "KeyA",
  S: "KeyS",
  D: "KeyD",
  F: "KeyF",
  G: "KeyG",
  H: "KeyH",
  J: "KeyJ",
  K: "KeyK",
  L: "KeyL",
  ";": "Semicolon",
  "'": "Quote",
  "`": "Backquote",
  "/": "Backslash",
  Z: "KeyZ",
  X: "KeyX",
  C: "KeyC",
  V: "KeyV",
  B: "KeyB",
  N: "KeyN",
  M: "KeyM",
  ",": "Comma",
  ".": "Period",
  "\\": "Slash",
  " ": "Space",
};
function a({ accelerator: e, event: t }, n) {
  if (n.length > 1 || t.key) throw new Error(`Unvalid keycode \`${n}\`.`);
  const r = n.toUpperCase() in s ? s[n.toUpperCase()] : null;
  return {
    event: Object.assign({}, t, { key: n }, r ? { code: r } : null),
    accelerator: e.trim().slice(n.length),
  };
}
const c = Object.assign(Object.create(null), {
  plus: "Add",
  space: "Space",
  tab: "Tab",
  backspace: "Backspace",
  delete: "Delete",
  insert: "Insert",
  return: "Return",
  enter: "Return",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  home: "Home",
  end: "End",
  pageup: "PageUp",
  pagedown: "PageDown",
  escape: "Escape",
  esc: "Escape",
  volumeup: "AudioVolumeUp",
  volumedown: "AudioVolumeDown",
  volumemute: "AudioVolumeMute",
  medianexttrack: "MediaTrackNext",
  mediaprevioustrack: "MediaTrackPrevious",
  mediastop: "MediaStop",
  mediaplaypause: "MediaPlayPause",
  printscreen: "PrintScreen",
});
for (let e = 1; e <= 24; e++) c[`f${e}`] = `F${e}`;
function u({ accelerator: e, event: t }, { code: n, key: r }) {
  if (t.code) throw new Error(`Duplicated keycode \`${r}\`.`);
  return {
    event: Object.assign({}, t, { key: r }, n ? { code: n } : null),
    accelerator: e.trim().slice((r && r.length) || 0),
  };
}
e.exports = {
  UNSUPPORTED: r,
  reduceModifier: o,
  reducePlus: i,
  reduceKey: a,
  reduceCode: u,
  toKeyEvent: function (e) {
    let s = { accelerator: e, event: {} };
    for (; "" !== s.accelerator; ) {
      const e = s.accelerator.match(t);
      if (e) {
        if (((s = o(s, e[0].toLowerCase())), s === r))
          return { unsupportedKeyForPlatform: !0 };
      } else if ("+" === s.accelerator.trim()[0]) s = i(s);
      else {
        const e = s.accelerator.match(n);
        if (!e) throw new Error(`Unvalid accelerator: "${s.accelerator}"`);
        {
          const t = e[0].toLowerCase();
          s = t in c ? u(s, { code: c[t], key: t }) : a(s, t);
        }
      }
    }
    return s.event;
  },
};
