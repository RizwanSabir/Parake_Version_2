// vendor/module-3010.js — webpack module 3010
// params: (e, t) = (module, exports, require)
"use strict";
(t.H5 = t.Cg = void 0),
  (t.silencePolicyFor = function (e) {
    return {
      thresholdMs: t.H5,
      disarmAfterFirstSound: "share" === e,
    };
  }),
  (t.createSilenceWatchdog = function ({
    thresholdMs: e,
    disarmAfterFirstSound: n,
    onSilenceDetected: r,
    onSilenceEnded: o,
  }) {
    let i = 0,
      a = !1,
      s = !1,
      l = !1,
      c = !1;
    function u(e, t) {
      s && ((s = !1), o?.({ durationMs: e - i, endedBy: t }));
    }
    return {
      arm(e) {
        (i = e), (a = !0), (s = !1);
      },
      reset(e, t) {
        u(e, t), (i = 0), (a = !1), (l = !1);
      },
      observe(o, d, p = { isMuted: !1 }) {
        if (a && !l)
          return p.isMuted
            ? (u(d, "mute"), void (i = d))
            : o >= t.Cg
              ? (u(d, "sound"), (c = !0), (i = d), void (n && (l = !0)))
              : void (
                  !s &&
                  d - i >= e &&
                  ((s = !0), r({ everReceivedAudio: c }))
                );
      },
    };
  }),
  (t.Cg = 3e-4),
  (t.H5 = 3e4);
