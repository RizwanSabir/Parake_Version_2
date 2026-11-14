// vendor/module-51374.js — webpack module 51374
// params: (e, t, n) = (module, exports, require)
t.useMicOnlyVoicePrompt = function ({
  callSessionId: e,
  language: t,
  micOnly: n,
  answerCount: c,
  decided: u,
  ui: d,
  updateMetadata: p,
  openRecorder: f,
}) {
  const h = !!n && "connect" !== n.via,
    { data: m, isSuccess: g } = l.api.speakerEnrollment.list.useQuery(void 0, {
      enabled: h,
    }),
    y = g && "usable" !== (0, s.assessEnrollment)(m ?? [], t).verdict,
    [v, b] = (0, r.useState)(u),
    S = (0, r.useRef)(null),
    _ = (0, r.useRef)(!1),
    x = (0, r.useRef)(!1);
  return (
    (0, r.useEffect)(() => {
      if (!h) return void (S.current = null);
      if (((S.current ??= c), _.current || v || !y)) return;
      if (c <= S.current) return;
      (_.current = !0),
        (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.voice_card_shown, {
          callSessionId: e,
        });
      let t = !1;
      const n = (n) => {
          t ||
            ((t = !0),
            b(n),
            p({ voicePrompt: n }),
            (0, o.trackClientEvent)(
              i.mixpanelEvents.micFallback.voice_card_answered,
              { callSessionId: e, choice: n },
            ),
            d.dismiss(r));
        },
        r = d.show(a.VOICE_CARD, {
          primary: () => n("reminder"),
          secondary: () => n("dismissed"),
          close: () => n("dismissed"),
        });
    }, [h, c, y, v]),
    {
      offerAtCallEnd: () => {
        if (x.current || !y) return;
        const t = h && !_.current && !v;
        if ("reminder" !== v && !t) return;
        (x.current = !0),
          (0, o.trackClientEvent)(
            i.mixpanelEvents.micFallback.voice_reminder_shown,
            { callSessionId: e },
          );
        let n = !1;
        const r = (t) => {
            n ||
              ((n = !0),
              (0, o.trackClientEvent)(
                i.mixpanelEvents.micFallback.voice_reminder_answered,
                { callSessionId: e, choice: t },
              ),
              d.dismiss(s),
              "record" === t && f());
          },
          s = d.show(a.VOICE_REMINDER, {
            primary: () => r("record"),
            secondary: () => r("dismissed"),
            close: () => r("dismissed"),
          });
      },
    }
  );
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(87093 /* vendor/module-87093 */),
  i = n(22764 /* vendor/module-22764 */),
  a = n(23546 /* vendor/module-23546 */),
  s = n(57e3),
  l = n(44189 /* vendor/module-44189 */);
