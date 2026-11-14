// vendor/module-51273.js — webpack module 51273
// params: (e, t, n) = (module, exports, require)
(t.Ei = t.RN = void 0),
  (t.useTranscriptionSession = function (
    {
      label: e,
      sourceBase: n,
      source: y,
      callSessionId: v,
      speakerDiarization: b,
      onAddTranscript: S,
      onAddPartialTranscript: _,
      onEndOfUtterance: x,
      acquireStream: w,
      onAfterStop: E,
      onAudio: T,
      recoveryBudget: k,
      reconnectBudget: C,
      flushPendingAudio: I,
      silenceWatchdog: A,
      onSpeakerIdIgnored: O,
    },
    R,
  ) {
    const {
        capturePlatform: M,
        showToastError: P,
        showToastWarning: N,
        createAudioRecorder: D,
        initializeSpeechmaticsSession: j,
        trackEvent: L,
      } = R,
      [F, U] = (0, r.useState)("STOPPED"),
      B = (0, r.useRef)("STOPPED");
    function z(e) {
      (B.current = e), U(e);
    }
    const [H, V] = (0, r.useState)(null);
    function q(e) {
      V(e), e && P(e);
    }
    const G = (0, r.useRef)(null),
      W = (0, r.useRef)(null),
      $ = (0, r.useRef)(0),
      Y = (0, r.useRef)(0),
      K = (0, r.useRef)(null),
      Z = (0, r.useRef)(null),
      Q = (0, r.useRef)(null),
      J = (0, r.useRef)(null),
      X = (0, r.useRef)({
        sendAudio: (e) => {
          const n = Q.current;
          if (!n) {
            const t = W.current;
            if (!t) return;
            return void t.sendAudio(e);
          }
          if (n.accepting)
            for (
              n.frames.push({ audio: e, at: Date.now() }),
                n.bytes += (0, a.audioBytes)(e);
              n.bytes > t.Ei && n.frames.length > 1;

            )
              n.bytes -= (0, a.audioBytes)(n.frames.shift()?.audio);
        },
      }),
      ee = (0, p.silencePolicyFor)(y),
      te = (0, r.useRef)(null);
    function ne(e) {
      A?.onSilenceDetected?.(e),
        L?.(o.mixpanelEvents.transcription.silence_detected, {
          callSessionId: v,
          source: y,
          thresholdMs: ee.thresholdMs,
          everReceivedAudio: e.everReceivedAudio,
          captureElapsedMs:
            null === te.current ? null : Date.now() - te.current,
        });
    }
    function re(e) {
      A?.onSilenceEnded?.(e.endedBy),
        L?.(o.mixpanelEvents.transcription.silence_ended, {
          callSessionId: v,
          source: y,
          durationMs: e.durationMs,
          endedBy: e.endedBy,
        });
    }
    const oe = (0, r.useRef)(ne);
    oe.current = ne;
    const ie = (0, r.useRef)(re);
    ie.current = re;
    const ae = (0, r.useRef)(!1);
    ae.current = A?.isMuted ?? !1;
    const se = (0, r.useRef)(null);
    se.current = A?.onSilenceDetected
      ? (se.current ??
        (0, p.createSilenceWatchdog)({
          ...ee,
          onSilenceDetected: (e) => oe.current(e),
          onSilenceEnded: (e) => ie.current(e),
        }))
      : null;
    const le = (0, f.useReportLiveCallSessionError)({
      callSessionId: v,
      speechmaticsClientRef: W,
      audioRecorderRef: Z,
      statusRef: B,
    });
    async function ce(e) {
      if ("open" === e.socketState)
        try {
          await I?.(e);
        } catch (e) {
          le({
            severity: "warning",
            source: `${n}.flushPendingAudio`,
            reason: "flush-pending-audio-failed",
            error: e,
          });
        }
      await e.forceEndOfUtterance();
    }
    const ue = (0, r.useRef)(!1),
      de = (0, r.useRef)([]),
      pe = (0, r.useRef)(null),
      fe = (0, r.useRef)(!1),
      he = () => de.current.some(({ action: e }) => "STOP" === e.action);
    function me(e) {
      return new Promise((t) => {
        const n = setTimeout(() => {
          (pe.current = null), t(!0);
        }, e);
        pe.current = () => {
          clearTimeout(n), (pe.current = null), t(!1);
        };
      });
    }
    function ge() {
      return new Promise((e) => {
        let t = !1;
        (pe.current = () => {
          (t = !0), (pe.current = null), e(null);
        }),
          _e().then(
            (n) => {
              t
                ? "open" === n.client.socketState &&
                  n.client.stopRecognition({ noTimeout: !0 }).catch(() => {})
                : ((pe.current = null), e({ opened: n }));
            },
            (n) => {
              t || ((pe.current = null), e({ failed: n }));
            },
          );
      });
    }
    const { recordChunkInterval: ye } = (0, h.useSpeechmaticsConnectionWatcher)(
      {
        status: F,
        statusRef: B,
        speechmaticsClientRef: W,
        reportLiveCallSessionError: le,
        queueAction: (e) => {
          be(e);
        },
        showToastWarning: N,
        source: y,
        capturePlatform: M,
        sourceBase: n,
      },
    );
    async function ve(e) {
      ue.current = !0;
      const t = B.current;
      try {
        if ("STARTING" === t && "STOP" !== e.action && he()) return;
        switch (e.action) {
          case "START":
            "RECORDING" !== t && "STARTING" !== t && (await Te(e.settings));
            break;
          case "RESTART":
            "STOPPED" !== t &&
              "STOPPING" !== t &&
              (await (async function (e, t = !1) {
                if (((G.current = e), t))
                  return (
                    se.current?.reset(Date.now(), "reacquire"),
                    await Ee(null, "reacquire-stream", {
                      silent: !0,
                      willRestart: !0,
                    }),
                    void (await Te(e))
                  );
                try {
                  if (!W.current)
                    throw new Error(
                      "No active transcription session to switch settings",
                    );
                  if (!Z.current)
                    throw new Error(
                      "No active audio recorder to switch settings",
                    );
                  z("STOPPING"),
                    (Q.current = {
                      frames: [],
                      bytes: 0,
                      accepting: !0,
                    }),
                    xe("performRestart"),
                    z("STOPPED"),
                    z("STARTING"),
                    we(await _e()),
                    z("RECORDING");
                } catch (e) {
                  await Ee({
                    displayMessage: (0, l.transcriptionStoppedMessage)(
                      y,
                      "start",
                      M,
                    ),
                    source: `${n}.performRestart`,
                    severity: "error",
                    error: e,
                    reason: "restart-failed",
                  });
                }
              })(e.settings, !0 === e.reacquireStream));
            break;
          case "STOP":
            "STOPPED" !== t &&
              "STOPPING" !== t &&
              (await Ee(e.error ?? null, e.reason));
            break;
          case "RECOVER_FULL":
            "STOPPED" !== t &&
              "STOPPING" !== t &&
              (await (async function (e, t) {
                const r = t ?? "auto-recover";
                le({
                  severity: "info",
                  source: `${n}.recoverFull.attempt`,
                  reason: r,
                  error: new Error(r),
                });
                const i = G.current;
                if (k && i && "RECORDING" === B.current) {
                  const a = k.tryConsume(Date.now());
                  if (a) {
                    if (
                      (N(
                        "microphone" === y
                          ? "Your microphone audio dropped. Reconnecting automatically…"
                          : "The call audio dropped. Reconnecting automatically…",
                        { id: `transcription-recovery-${y}` },
                      ),
                      await Ee(null, t ?? "auto-recover-stop", {
                        silent: !0,
                        willRestart: !0,
                      }),
                      (a.delayMs > 0 || he()) &&
                        (z("STARTING"), he() || !(await me(a.delayMs))))
                    )
                      return;
                    return (
                      await Te(i),
                      void L?.(
                        o.mixpanelEvents.transcription.auto_recovery_attempted,
                        {
                          callSessionId: v,
                          source: y,
                          sourceBase: n,
                          reason: r,
                          attempt: a.attempt,
                          delayMs: a.delayMs,
                          succeeded: "RECORDING" === B.current,
                        },
                      )
                    );
                  }
                  L?.(o.mixpanelEvents.transcription.auto_recovery_exhausted, {
                    callSessionId: v,
                    source: y,
                    sourceBase: n,
                    reason: r,
                  });
                  const s = e
                    ? {
                        ...e,
                        contextData: {
                          ...e.contextData,
                          recoveryExhausted: !0,
                        },
                      }
                    : null;
                  return void (await Ee(s, t));
                }
                await Ee(e, t);
              })(e.error ?? null, e.reason));
            break;
          case "RECONNECT":
            if (e.connection !== Y.current) break;
            "RECORDING" === t && C
              ? await (async function (e, t, r) {
                  const { reason: i } = e;
                  if (!G.current || !Z.current) return void (await Ee(e));
                  le({
                    severity: "info",
                    source: `${n}.reconnect.attempt`,
                    reason: i,
                    error: new Error(i),
                  }),
                    (Q.current = {
                      frames: [],
                      bytes: 0,
                      accepting: !0,
                    }),
                    (fe.current = !0),
                    xe("performReconnect"),
                    z("STARTING");
                  let a = null;
                  for (
                    let e = t.tryConsume(Date.now());
                    e;
                    e = t.tryConsume(Date.now())
                  ) {
                    if (he()) return;
                    if (e.delayMs > 0 && !(await me(e.delayMs))) return;
                    const t = await ge();
                    if (!t) return;
                    if (
                      (L?.(o.mixpanelEvents.transcription.reconnect_attempted, {
                        callSessionId: v,
                        source: y,
                        sourceBase: n,
                        reason: i,
                        errorType: r,
                        attempt: e.attempt,
                        delayMs: e.delayMs,
                        succeeded: "opened" in t,
                      }),
                      "opened" in t)
                    )
                      return we(t.opened), void z("RECORDING");
                    a = t.failed;
                  }
                  he() ||
                    (L?.(o.mixpanelEvents.transcription.reconnect_exhausted, {
                      callSessionId: v,
                      source: y,
                      sourceBase: n,
                      reason: i,
                      errorType: r,
                    }),
                    await Ee({
                      ...e,
                      contextData: {
                        ...e.contextData,
                        reconnectExhausted: !0,
                        lastAttemptError:
                          null === a ? null : (0, d.stringifyUnknownError)(a),
                      },
                    }));
                })(e.error, C, e.errorType)
              : "STOPPED" !== t && "STOPPING" !== t && (await Ee(e.error));
        }
      } catch (t) {
        if (
          (q(
            (0, l.transcriptionStoppedMessage)(
              y,
              (function (e) {
                return "START" === e || "RESTART" === e
                  ? "start"
                  : "unexpected";
              })(e.action),
              M,
            ),
          ),
          le({
            severity: "error",
            source: `${n}.processAction.${e.action}`,
            reason: "process-action-threw",
            error: t,
          }),
          "STOPPED" !== B.current)
        )
          try {
            await Ee(null, "process-action-threw", {
              suppressStopReport: !0,
            });
          } catch {
            z("STOPPED");
          }
      } finally {
        ue.current = !1;
        const e = de.current.shift();
        e && ve(e.action).then(e.onDone, e.onDone);
      }
    }
    function be(e) {
      const t =
        "RECONNECT" === e.action && void 0 === e.connection
          ? m({ ...e, connection: Y.current })
          : m(e);
      return (
        "STOP" === t.action &&
          (Q.current && (Q.current.accepting = !1), pe.current?.()),
        ue.current
          ? new Promise((e) => {
              de.current.push({ action: t, onDone: e });
            })
          : ve(t)
      );
    }
    const Se = () => "RECORDING" === B.current || "STOPPING" === B.current;
    async function _e() {
      const e = G.current;
      if (!e) throw new Error("No speechmatics settings found");
      const t = ++$.current,
        [r, o] = await Promise.all([e.getSpeechmaticsApiKey(), g(e)]);
      return {
        client: await j({
          speechmaticsApiKey: r,
          callSessionId: v,
          language: e.language,
          speakerDiarization: e.speakerDiarization ?? b,
          speakers: e.speakers,
          additionalVocab: o,
          onVocabularyRejected: (t) => {
            le({
              severity: "warning",
              source: `${n}.speechmatics.onVocabularyRejected`,
              reason: "speechmatics-vocabulary-rejected",
              error: new Error("speechmatics-vocabulary-rejected"),
              contextData: {
                speechmatics: { language: e.language, kind: t },
              },
            });
          },
          onAddTranscript: ({ audioEndSeconds: e, ...n }) => {
            if (!Se()) return;
            const r = J.current,
              o =
                void 0 !== e && r?.connection === t
                  ? r.client.capturedAt(1e3 * e)
                  : null;
            S(
              r && null !== o
                ? {
                    ...n,
                    audioEndedAt: o,
                    audioUnsentMs: r.client.unsentAudioMs,
                    audioUnackedMs: r.client.unackedAudioMs,
                  }
                : n,
            );
          },
          onAddPartialTranscript: (e) => {
            Se() && _(e);
          },
          onEndOfUtterance: (e) => {
            Se() && x(e);
          },
          onError: (e) => {
            be({
              action: "RECONNECT",
              connection: t,
              errorType: e.type,
              error: {
                displayMessage: (0, l.transcriptionStoppedMessage)(
                  y,
                  "service",
                  M,
                ),
                error: new Error(e.reason),
                source: `${n}.initializeSpeechmaticsSession.onError`,
                severity: "error",
                reason: "recognition-error",
                contextData: {
                  speechmatics: {
                    type: e.type,
                    reason: e.reason,
                    code: e.code,
                  },
                },
              },
            });
          },
          onWarning: (t) => {
            le({
              severity: "warning",
              source: `${n}.speechmatics.onWarning`,
              reason: "speechmatics-warning",
              error: new Error(`speechmatics-warning:${t.type}`),
              contextData: { speechmatics: t },
            }),
              (0, u.isSpeakerIdIgnoredWarning)(t) &&
                e.speakers?.length &&
                O?.({
                  language: e.language,
                  observedUpdatedAt: e.enrollmentObservedUpdatedAt ?? null,
                });
          },
          onServerEndedUnexpectedly: () => {
            "RECORDING" === B.current &&
              be({
                action: "RECONNECT",
                connection: t,
                error: {
                  displayMessage: (0, l.transcriptionStoppedMessage)(
                    y,
                    "service",
                    M,
                  ),
                  source: `${n}.speechmatics.onServerEndedUnexpectedly`,
                  severity: "error",
                  reason: "server-ended-unexpectedly",
                },
              });
          },
        }),
        connection: t,
      };
    }
    function xe(e) {
      const t = W.current;
      (W.current = null),
        t &&
          "open" === t.socketState &&
          t.stopRecognition({ noTimeout: !0 }).catch((t) => {
            le({
              severity: "warning",
              source: `${n}.${e}.stopRecognition`,
              reason: "stop-recognition-failed",
              error: t,
            });
          });
    }
    function we({ client: e, connection: t }) {
      (W.current = e),
        (Y.current = t),
        (fe.current = !1),
        (function (e) {
          e.addEventListener("socketStateChange", (t) => {
            const r = t.socketState;
            ("closing" !== r && "closed" !== r) ||
              "RECORDING" !== B.current ||
              e.wasStopped ||
              W.current !== e ||
              be({
                action: "RECONNECT",
                error: {
                  displayMessage: (0, l.transcriptionStoppedMessage)(
                    y,
                    "connection",
                    M,
                  ),
                  source: `${n}.socketStateChange.unexpectedClose`,
                  severity: "error",
                  reason: "socket-closed",
                  contextData: { socketStateAtChange: r },
                },
              });
          });
        })(e);
      const r = Q.current?.frames ?? [];
      (Q.current = null), (J.current = { client: e, connection: t });
      for (const { audio: t, at: n } of r) e.sendAudio(t, n);
    }
    async function Ee(e, t, r) {
      const o =
          e && void 0 === e.contextData?.occurredAt
            ? (0, d.stampErrorOccurrence)(e, {
                snapshot: i.connectivityService.getSnapshot(),
                occurredAt: new Date().toISOString(),
              })
            : e,
        a = !0 === r?.silent;
      try {
        if ((z("STOPPING"), (Q.current = null), (fe.current = !1), !o))
          try {
            W.current && (await ce(W.current));
          } catch (e) {
            le({
              severity: "warning",
              source: `${n}.performStop.forceEndOfUtterance`,
              reason: "force-eou-failed",
              error: e,
            });
          }
        Z.current && (Z.current.close(), (Z.current = null)),
          K.current &&
            (K.current.getTracks().forEach((e) => e.stop()),
            (K.current = null)),
          xe("performStop");
        try {
          await E?.({ willRestart: !0 === r?.willRestart });
        } catch (e) {
          le({
            severity: "warning",
            source: `${n}.performStop.onAfterStop`,
            reason: "on-after-stop-failed",
            error: e,
          });
        }
        if (((J.current = null), o)) {
          const { displayMessage: e, ...t } = o,
            n = t.error ?? new Error(t.reason ?? e);
          if ((le({ ...t, error: n }), !a)) {
            const r = (0, c.resolveUserFacingStopError)({
              reason: t.reason,
              displayMessage: e,
              contextData: t.contextData,
              error: n,
            });
            "offline" === r.kind
              ? (function (e, t) {
                  V(e), P(t, { id: c.OFFLINE_TOAST_ID });
                })(e, r.message)
              : q(r.message);
          }
        } else if (!0 !== r?.suppressStopReport) {
          const e = t ?? "user-initiated";
          le({
            severity: "info",
            source: `${n}.performStop`,
            reason: e,
            error: new Error(e),
          });
        }
      } catch (e) {
        le({
          severity: "warning",
          source: `${n}.performStop.unexpectedThrow`,
          reason: "perform-stop-threw",
          error: e,
        });
      } finally {
        a || (k?.reset(), C?.reset()), z("STOPPED");
      }
    }
    async function Te(e) {
      z("STARTING"), q(null), (G.current = e);
      const t = {
        reportLiveCallSessionError: le,
        statusRef: B,
        setDisplayError: q,
        capturePlatform: M,
        queueAction: (e) => {
          be(e);
        },
        setMediaStream: (e) => {
          K.current = e;
        },
      };
      let r;
      try {
        r = await w(t);
      } catch (e) {
        return void (await Ee({
          displayMessage: (0, l.transcriptionStoppedMessage)(y, "start", M),
          source: `${n}.performStart.acquireStream`,
          severity: "error",
          error: e,
          reason: "acquire-stream-threw",
        }));
      }
      if ("failure" !== r.kind)
        if (
          ((K.current = r.mediaStream),
          !e.beforeConnect || (await e.beforeConnect()))
        )
          try {
            const e = r.audioRecorderStream,
              t = r.createRecorder ?? ((t) => D({ stream: e, ...t }));
            Q.current = { frames: [], bytes: 0, accepting: !0 };
            const o = async (e) => {
              const t = null !== Q.current;
              if (t || "RECORDING" === B.current) {
                if (
                  ((t && !fe.current) ||
                    se.current?.observe((0, s.rmsLevel)(e), Date.now(), {
                      isMuted: ae.current,
                    }),
                  !t)
                ) {
                  const e = W.current;
                  if (!e || "open" !== e.socketState)
                    return void be({
                      action: "RECONNECT",
                      error: {
                        displayMessage: (0, l.transcriptionStoppedMessage)(
                          y,
                          "connection",
                          M,
                        ),
                        source: `${n}.performStart.audioRecorder.onAudio.socketNotOpen`,
                        severity: "error",
                        reason: "socket-not-open",
                      },
                    });
                }
                try {
                  await T({
                    audio: e,
                    speechmaticsClient: X.current,
                    recordChunkInterval: ye,
                  });
                } catch (e) {
                  be({
                    action: "STOP",
                    error: {
                      displayMessage: (0, l.transcriptionStoppedMessage)(
                        y,
                        "unexpected",
                        M,
                      ),
                      source: `${n}.performStart.audioRecorder.onAudio`,
                      severity: "error",
                      reason: "on-audio-frame-throw",
                      error: e,
                    },
                  });
                }
              }
            };
            (Z.current = await t({
              onError: (e) => {
                be({
                  action: "STOP",
                  error: {
                    displayMessage: (0, l.transcriptionStoppedMessage)(
                      y,
                      "unexpected",
                      M,
                    ),
                    source: `${n}.performStart.audioRecorder.onError`,
                    severity: "error",
                    error: new Error("audioworklet-processor-error"),
                    reason: "audioworklet-error",
                    contextData: {
                      event: {
                        type: e.type,
                        eventPhase: e.eventPhase,
                      },
                    },
                  },
                });
              },
              onAudio: (e) => {
                o(e);
              },
            })),
              Z.current.start(),
              we(await _e()),
              (te.current ??= Date.now()),
              se.current?.arm(Date.now()),
              z("RECORDING");
          } catch (e) {
            await Ee({
              displayMessage: (0, l.transcriptionStoppedMessage)(y, "start", M),
              source: `${n}.performStart`,
              severity: "error",
              error: e,
              reason: "start-failed",
            });
          }
        else await Ee(null, "connect-aborted", { silent: !0 });
      else
        await Ee(
          {
            displayMessage: r.displayMessage,
            source: r.source,
            severity: r.severity,
            error: r.error,
            reason: "acquire-stream-failed",
          },
          void 0,
          { silent: !0 === r.silent },
        );
    }
    return (
      (0, r.useEffect)(
        () => () => {
          be({ action: "STOP", reason: "unmount" });
        },
        [],
      ),
      (0, r.useEffect)(() => {
        "RECORDING" === F &&
          (k?.markRecording(Date.now()), C?.markRecording(Date.now()));
      }, [F, k, C]),
      {
        status: F,
        isTranscribing: "RECORDING" === F || "STARTING" === F,
        displayError: H,
        startTranscription: (e) => be({ action: "START", settings: e }),
        restartSession: (e, t) =>
          be({
            action: "RESTART",
            settings: e,
            reacquireStream: t?.reacquireStream,
          }),
        stopTranscription: () => be({ action: "STOP" }),
        forceEndOfUtterance: async () => {
          try {
            W.current && (await ce(W.current));
          } catch (e) {
            le({
              severity: "warning",
              source: `${n}.forceEndOfUtterance.fromCaller`,
              reason: "force-eou-failed-from-caller",
              error: e,
            });
          }
        },
        queueAction: be,
        getCurrentSettings: () => G.current,
        reportLiveCallSessionError: le,
        setDisplayError: q,
      }
    );
  });
const r = n(14041 /* vendor/module-14041 */),
  o = n(22764 /* vendor/module-22764 */),
  i = n(63506 /* vendor/module-63506 */),
  a = n(83341 /* vendor/module-83341 */),
  s = n(88193 /* vendor/module-88193 */),
  l = n(83817 /* vendor/module-83817 */),
  c = n(39752 /* vendor/module-39752 */),
  u = n(57e3),
  d = n(25642 /* vendor/module-25642 */),
  p = n(3010 /* vendor/module-3010 */),
  f = n(83475 /* vendor/module-83475 */),
  h = n(36938 /* vendor/module-36938 */);
function m(
  e,
  t = () => i.connectivityService.getSnapshot(),
  n = () => new Date().toISOString(),
) {
  const r = () => ({ snapshot: t(), occurredAt: n() });
  return "RECONNECT" === e.action
    ? { ...e, error: (0, d.stampErrorOccurrence)(e.error, r()) }
    : "STOP" !== e.action && "RECOVER_FULL" !== e.action
      ? e
      : e.error
        ? { ...e, error: (0, d.stampErrorOccurrence)(e.error, r()) }
        : e;
}
async function g(e) {
  if (!e.getAdditionalVocab) return null;
  let n;
  const r = new Promise((e) => {
    n = setTimeout(() => e(null), t.RN);
  });
  try {
    return await Promise.race([e.getAdditionalVocab().catch(() => null), r]);
  } finally {
    clearTimeout(n);
  }
}
(t.RN = 2e3),
  (t.Ei = 30 * a.AUDIO_CONFIG.sampleRate * Float32Array.BYTES_PER_ELEMENT);
