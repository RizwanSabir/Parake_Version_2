// vendor/module-6208.js — webpack module 6208
// params: (e, t, n) = (module, exports, require)
t.useMicFallback = function ({
  callSessionId: e,
  isActivated: t,
  isMock: n,
  autoAnswer: f,
  platform: h,
  callAppOpen: m,
  micOnly: g,
  combinedTranscript: y,
  shareState: v,
  computerSilent: b,
  micNeverHeard: S,
  offerDeclined: _,
  micCheckShown: x,
  canChooseMicDevice: w,
  ui: E,
  enterMicOnly: T,
  leaveMicOnly: k,
  chooseMicDevice: C,
  chooseShareDevice: I,
  restartShare: A,
  retryShare: O,
  openPermissionDialog: R,
  isScreenPermissionMissing: M,
  answer: P,
  updateMetadata: N,
}) {
  const [D] = (0, r.useState)(() => Date.now()),
    j = (0, r.useRef)(t),
    L = (0, r.useRef)(l.emptyCaptureSnapshotTally),
    [F, U] = (0, r.useState)(() => (0, u.initialMicFallbackState)(_)),
    [B, z] = (0, r.useState)(0),
    H = (0, r.useRef)(null),
    V = (0, r.useRef)(null),
    q = (0, r.useRef)(null),
    G = (0, r.useRef)(null),
    W = (0, r.useRef)(x),
    $ = (0, r.useRef)(!1),
    Y = (0, r.useRef)(!1),
    K = (0, r.useRef)({ triggeredUsingShortcut: !1 }),
    Z = (0, r.useRef)(null),
    Q = () => {
      const { firstMicAtMs: t } = L.current;
      return {
        callSessionId: e,
        computerSound: p(b),
        autoAnswer: f,
        rejoined: j.current,
        msSinceFirstMic: null === t ? null : (0, d.serverNow)().getTime() - t,
      };
    },
    J = (t, n) =>
      (0, o.trackClientEvent)(i.mixpanelEvents.audioNotice.shown, {
        callSessionId: e,
        kind: t,
        moment: n,
        platform: h,
      }),
    X = (t, n) =>
      (0, o.trackClientEvent)(i.mixpanelEvents.audioNotice.action, {
        callSessionId: e,
        kind: t,
        action: n,
        platform: h,
      }),
    ee = () => {
      U((e) =>
        e.card && (0, c.isOffer)(e.card.message)
          ? { ...e, card: null, offerDeclined: !0 }
          : e,
      ),
        N({ micOnlyOfferDeclined: !0 });
    },
    te = (t, n) => {
      const r = Z.current;
      if (!r) return;
      let a = null;
      L.current.callShareLines > r.callShareLines
        ? (a = "heard")
        : g
          ? (a = "mic-only")
          : t >= r.dueAtMs
            ? (a = "silent")
            : n && (a = n),
        a &&
          ((Z.current = null),
          (0, o.trackClientEvent)(i.mixpanelEvents.audioNotice.fix_result, {
            callSessionId: e,
            kind: r.kind,
            result: a,
            msSinceAction: t - r.atMs,
            systemAudio: v,
            platform: h,
          }));
    };
  (0, r.useEffect)(() => {
    L.current = (0, l.tallyCaptureSnapshotLines)(
      L.current,
      y,
      (0, d.toServerMs)(D),
    );
    const t = (0, d.serverNow)().getTime();
    te(t);
    const { state: r, closedBy: a } = (0, u.nextMicFallbackState)(F, {
      nowMs: t,
      tally: L.current,
      isMock: n,
      micOnly: !!g,
      platform: h,
      callAppOpen: m,
      shareState: v,
    });
    if (r !== F) {
      if ("heard" === a || "call-app" === a) {
        const n = F.card;
        n &&
          (0, c.isOffer)(n.message) &&
          (0, o.trackClientEvent)(
            i.mixpanelEvents.micFallback.offer_withdrawn,
            { callSessionId: e, reason: a, msSinceShown: t - n.atMs },
          );
      }
      return void U(r);
    }
    const s = (0, u.nextMicFallbackCheckAtMs)(F, L.current);
    if (null === s || s <= t || g) return;
    const p = setTimeout(() => z((e) => e + 1), s - t);
    return () => clearTimeout(p);
  }, [y, D, n, g, m, v, F, B]),
    (0, r.useEffect)(() => {
      const t = F.card,
        n = V.current;
      if (n === t) return;
      const r = (0, d.serverNow)().getTime();
      if (n) {
        const a = ((e, t) => {
          const n = H.current;
          return (
            (H.current = null),
            (V.current = null),
            null !== n && E.dismiss(n),
            e - t.atMs
          );
        })(r, n);
        !t &&
          (0, c.isOffer)(n.message) &&
          F.offerDeclined &&
          (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.offer_declined, {
            callSessionId: e,
            msSinceShown: a,
          });
      }
      if (!t) return;
      V.current = t;
      const a = ((e, t) => {
        if ((0, c.isOffer)(e))
          return {
            primary: () => {
              X(e, "accept"),
                ((e) => {
                  const t = K.current,
                    n = "answer" === e ? "answer" : "offer";
                  U((e) => ({ ...e, card: null })),
                    T(n),
                    (q.current = E.toastSuccess(s.MIC_ONLY_CONFIRMATION)),
                    "answer" === e && P({ ...t, acceptedMicOnly: !0 });
                })(t);
            },
            secondary: () => {
              X(e, "decline"), ee();
            },
            close: () => ee(),
          };
        const n = () => U((e) => ({ ...e, card: null })),
          r = (t, n) => () => {
            X(e, t),
              n?.(),
              ((e) => {
                const t = (0, d.serverNow)().getTime();
                te(t, "superseded");
                const n = t + u.FIX_RECHECK_MS;
                (Z.current = {
                  kind: e,
                  atMs: t,
                  dueAtMs: n,
                  callShareLines: L.current.callShareLines,
                }),
                  U((e) => ({ ...e, card: null, recheckAtMs: n }));
              })(e);
          };
        return "fix-choose-device" === e
          ? { primary: r("choose-device", I), close: n }
          : "fix-restart" === e
            ? {
                primary: r("restart", () => {
                  A?.();
                }),
                close: n,
              }
            : { primary: r("retry", O), close: n };
      })(t.message, t.moment);
      var l, p;
      (H.current = E.show(
        ((l = t.message),
        (p = t.moment),
        "fix-retry" === l && "browser" === h
          ? s.RETRY_TAB_NOTICE
          : (0, s.computerAudioNotice)(l, p)),
        {
          ...a,
          close: () => {
            V.current === t && a.close();
          },
        },
      )),
        J(t.message, t.moment),
        (0, c.isOffer)(t.message)
          ? (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.offer_shown, {
              ...Q(),
              systemAudio: v,
              moment: t.moment,
            })
          : (Y.current = !0);
    }, [F.card, F.offerDeclined]),
    (0, r.useEffect)(() => {
      if (W.current || n || g || !S) return;
      const e = (0, u.micCheckDueAtMs)(L.current);
      if (null === e) return;
      const t = () => {
          W.current ||
            ((W.current = !0),
            N({ micCheckShown: !0 }),
            J("mic-check", "status"),
            (G.current = E.show(
              (0, s.micCheckNotice)(w),
              w
                ? {
                    primary: () => {
                      X("mic-check", "choose-device"),
                        null !== G.current && E.dismiss(G.current),
                        C?.();
                    },
                  }
                : {},
            )));
        },
        r = e - (0, d.serverNow)().getTime();
      if (r <= 0) return void t();
      const o = setTimeout(t, r);
      return () => clearTimeout(o);
    }, [S, g, n, y, w]),
    (0, r.useEffect)(() => {
      $.current &&
        ("recording" === v
          ? (($.current = !1), k())
          : "failed" === v && ($.current = !1));
    }, [v]);
  const ne = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      const t = ne.current;
      if (((ne.current = g), !t && g)) {
        if (g.restored)
          return void (0, o.trackClientEvent)(
            i.mixpanelEvents.micFallback.restored,
            {
              callSessionId: e,
              via: g.via,
              msSinceSwitch: (0, d.serverNow)().getTime() - g.since.getTime(),
            },
          );
        ($.current = !1),
          (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.switched_on, {
            ...Q(),
            via: g.via,
            callAppOpen: m,
            computerCarriedCall: L.current.callShareLines > 0,
            afterFixMessage: Y.current,
          });
      }
      t &&
        !g &&
        (null !== q.current && E.dismiss(q.current),
        (q.current = null),
        (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.turned_off, {
          callSessionId: e,
          reason: "share-on",
          msSinceSwitch: (0, d.serverNow)().getTime() - t.since.getTime(),
        }));
    }, [g]),
    (0, r.useEffect)(
      () => () => {
        (V.current = null),
          null !== H.current && E.dismiss(H.current),
          null !== q.current && E.dismiss(q.current),
          null !== G.current && E.dismiss(G.current);
      },
      [],
    ),
    {
      onShareTurnedOff: () => {
        if ((($.current = !1), n)) return;
        const e = !!F.card && (0, c.isOffer)(F.card.message) && !g;
        e &&
          (U((e) => ({ ...e, card: null })),
          (q.current = E.toastSuccess(s.MIC_ONLY_CONFIRMATION))),
          T(e ? "offer" : "share-off");
      },
      onShareTurnedOn: () => {
        $.current = !0;
      },
      onShareStartCancelled: () => {
        $.current = !1;
      },
      onAnswerBlocked: (e, t) => (
        (K.current = t),
        J(e, "answer"),
        "mic-silent" === e
          ? (E.toastInfo(
              w
                ? s.MIC_SILENT_ANSWER_MESSAGE.withPicker
                : s.MIC_SILENT_ANSWER_MESSAGE.withoutPicker,
            ),
            !0)
          : "only-you" === e
            ? (E.toastInfo(s.ONLY_YOU_MESSAGE), !0)
            : !n &&
              ((async () => {
                const t = (await M?.()) ?? !1,
                  n = (0, c.checkComputerAudio)({
                    platform: h,
                    moment: "answer",
                    shareState: v,
                    callAppOpen: m,
                    offerDeclined: F.offerDeclined,
                    micWordsEnough: "computer-audio-silent" === e,
                    screenPermissionMissing: t,
                  });
                "fix-permission" === n
                  ? (X(n, "shown"), R?.())
                  : n
                    ? ((e) => {
                        U((t) => ({
                          ...t,
                          card: {
                            message: e,
                            moment: "answer",
                            atMs: (0, d.serverNow)().getTime(),
                          },
                        }));
                      })(n)
                    : E.toastInfo(a.NOTHING_HEARD_MESSAGE);
              })(),
              !0)
      ),
    }
  );
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(87093 /* vendor/module-87093 */),
  i = n(22764 /* vendor/module-22764 */),
  a = n(93384 /* vendor/module-93384 */),
  s = n(23546 /* vendor/module-23546 */),
  l = n(57135 /* vendor/module-57135 */),
  c = n(35670 /* vendor/module-35670 */),
  u = n(1792 /* vendor/module-1792 */),
  d = n(72974 /* vendor/module-72974 */);
function p(e) {
  return null === e ? "unknown" : e ? "none" : "some";
}
