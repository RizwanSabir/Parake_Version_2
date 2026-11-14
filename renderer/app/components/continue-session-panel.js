// app/components/continue-session-panel.js — webpack module 43771
// params: (e, t, n) = (module, exports, require)
t.ContinueSessionPanel = function (e) {
  const t = (0, o.c)(4);
  if (e.isMock) {
    let n;
    return (
      t[0] !== e
        ? ((n = (0, r.jsx)(h, { ...e })), (t[0] = e), (t[1] = n))
        : (n = t[1]),
      n
    );
  }
  let n;
  return (
    t[2] !== e
      ? ((n = (0, r.jsx)(f, { ...e })), (t[2] = e), (t[3] = n))
      : (n = t[3]),
    n
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(46852 /* vendor/module-46852 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(62852 /* vendor/module-62852 */),
  u = n(56211 /* app/components/dialog-prompt */),
  d = n(66244 /* app/components/button-variants */),
  p = n(77126 /* vendor/module-77126 */);
function f(e) {
  const t = (0, o.c)(33),
    {
      isPlanSession: n,
      isFreeSession: f,
      canContinue: h,
      isBusy: m,
      onContinue: g,
      purchasePath: y,
      isLoading: v,
      continueWindowEndsAt: b,
      onBack: S,
      backLabel: _,
      titleRender: x,
      bodyRender: w,
    } = e,
    E = void 0 !== v && v,
    T = void 0 === _ ? "Back" : _,
    k = (function (e) {
      const t = (0, o.c)(10);
      let n;
      t[0] !== e
        ? ((n = e?.getTime() ?? null), (t[0] = e), (t[1] = n))
        : (n = t[1]);
      const r = n;
      let i;
      t[2] !== r
        ? ((i = () => (null === r ? 0 : r - Date.now())),
          (t[2] = r),
          (t[3] = i))
        : (i = t[3]);
      const [s, l] = (0, a.useState)(i);
      let u, d, p;
      if (
        (t[4] !== r
          ? ((u = () => {
              if (null === r) return;
              const e = setInterval(() => {
                const t = r - Date.now();
                l(t), t <= 0 && clearInterval(e);
              }, 1e3);
              return l(r - Date.now()), () => clearInterval(e);
            }),
            (d = [r]),
            (t[4] = r),
            (t[5] = u),
            (t[6] = d))
          : ((u = t[5]), (d = t[6])),
        (0, a.useEffect)(u, d),
        null === r)
      ) {
        let e;
        return (
          t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { label: null, expired: !1 }), (t[7] = e))
            : (e = t[7]),
          e
        );
      }
      return (
        t[8] !== s
          ? ((p =
              s > 0
                ? { label: (0, c.formatCountdown)(s), expired: !1 }
                : { label: null, expired: !0 }),
            (t[8] = s),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    })(b),
    C = !E && !n && !h,
    I = f ? s.FREE_SESSION_EXTENSION_MINUTES : s.MAX_CALL_DURATION_MINUTES;
  let A;
  t[0] !== k.label
    ? ((A = k.label
        ? (0, r.jsxs)(r.Fragment, {
            children: [
              "You have",
              " ",
              (0, r.jsx)("span", {
                className: "text-foreground font-medium",
                children: k.label,
              }),
              " ",
              "left to extend",
            ],
          })
        : (0, r.jsx)(r.Fragment, {
            children: "You can still extend this session",
          })),
      (t[0] = k.label),
      (t[1] = A))
    : (A = t[1]);
  const O = A,
    R = n ? i.TimerOff : C ? i.Coins : i.Hourglass,
    M = n ? "Session Ended" : C ? "Out of Credits" : "Session expired";
  let P;
  t[2] !== k.expired ||
  t[3] !== k.label ||
  t[4] !== O ||
  t[5] !== I ||
  t[6] !== f ||
  t[7] !== n ||
  t[8] !== C ||
  t[9] !== y
    ? ((P = k.expired
        ? (0, r.jsxs)(r.Fragment, {
            children: [
              "The window to ",
              n ? "restart" : "extend",
              " this session has closed.",
            ],
          })
        : n
          ? (0, r.jsx)(r.Fragment, {
              children:
                "Restart to pick up where you left off. It's free on your plan, no credits used. Sessions end after a stretch of inactivity.",
            })
          : C
            ? y
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    "You're out of call credits. Extending adds ",
                    I,
                    " ",
                    "minutes for half a call credit. Buy more and you'll pick up where you left off.",
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    "You're out of call credits. Extending adds ",
                    I,
                    " ",
                    "minutes for half a call credit. ",
                    p.NO_PURCHASE_PATH_NOTICE,
                  ],
                })
            : f
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    O,
                    ". Add ",
                    s.FREE_SESSION_EXTENSION_MINUTES,
                    " minutes for",
                    " ",
                    s.SESSION_CREDIT_COST,
                    " credits to turn your ",
                    s.MAX_TRIAL_DURATION_MINUTES,
                    "-minute free trial into a ",
                    s.MAX_CALL_DURATION_MINUTES,
                    "-minute session. After that, it automatically extends by ",
                    s.MAX_CALL_DURATION_MINUTES,
                    " ",
                    "minutes for ",
                    s.SESSION_CREDIT_COST,
                    " credits while you’re active and have credits.",
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    k.label
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            "You have",
                            " ",
                            (0, r.jsx)("span", {
                              className: "text-foreground font-medium",
                              children: k.label,
                            }),
                            " ",
                            "to extend",
                          ],
                        })
                      : (0, r.jsx)(r.Fragment, {
                          children: "You can still extend",
                        }),
                    " ",
                    "for ",
                    s.MAX_CALL_DURATION_MINUTES,
                    " more minutes and pick up where you left off. If you don’t, Auto Extend will add ",
                    s.MAX_CALL_DURATION_MINUTES,
                    " ",
                    "minutes when the timer reaches 0, unless you’ve turned it off.",
                  ],
                })),
      (t[2] = k.expired),
      (t[3] = k.label),
      (t[4] = O),
      (t[5] = I),
      (t[6] = f),
      (t[7] = n),
      (t[8] = C),
      (t[9] = y),
      (t[10] = P))
    : (P = t[10]);
  const N = P;
  let D;
  t[11] !== k.expired ||
  t[12] !== m ||
  t[13] !== E ||
  t[14] !== n ||
  t[15] !== g ||
  t[16] !== C ||
  t[17] !== y
    ? ((D =
        E && !n
          ? (0, r.jsx)(d.Button, {
              size: "xl",
              className: "flex-1",
              loading: !0,
              children: "Loading...",
            })
          : C
            ? k.expired || !y
              ? null
              : (0, r.jsx)("a", {
                  href: y.url,
                  target: y.openInNewTab ? "_blank" : void 0,
                  rel: y.openInNewTab ? "noopener noreferrer" : void 0,
                  className: (0, l.cn)(
                    (0, d.buttonVariants)({ size: "xl" }),
                    "flex-1",
                  ),
                  children: "Buy Credits",
                })
            : (0, r.jsx)(d.Button, {
                size: "xl",
                className: "flex-1",
                onClick: g,
                loading: m,
                disabled: k.expired,
                children: n
                  ? "Restart Session"
                  : m
                    ? "Extend"
                    : `Extend · ${s.SESSION_CREDIT_COST} credits`,
              })),
      (t[11] = k.expired),
      (t[12] = m),
      (t[13] = E),
      (t[14] = n),
      (t[15] = g),
      (t[16] = C),
      (t[17] = y),
      (t[18] = D))
    : (D = t[18]);
  const j = D;
  let L, F, U;
  return (
    t[19] !== T || t[20] !== m || t[21] !== S
      ? ((L =
          S &&
          (0, r.jsx)(d.Button, {
            variant: "secondary",
            size: "xl",
            className: "flex-1",
            onClick: S,
            disabled: m,
            children: T,
          })),
        (t[19] = T),
        (t[20] = m),
        (t[21] = S),
        (t[22] = L))
      : (L = t[22]),
    t[23] !== j || t[24] !== L
      ? ((F = (0, r.jsxs)(r.Fragment, { children: [L, j] })),
        (t[23] = j),
        (t[24] = L),
        (t[25] = F))
      : (F = t[25]),
    t[26] !== R ||
    t[27] !== N ||
    t[28] !== w ||
    t[29] !== F ||
    t[30] !== M ||
    t[31] !== x
      ? ((U = (0, r.jsx)(u.DialogPrompt, {
          icon: R,
          title: M,
          titleRender: x,
          bodyRender: w,
          actions: F,
          children: N,
        })),
        (t[26] = R),
        (t[27] = N),
        (t[28] = w),
        (t[29] = F),
        (t[30] = M),
        (t[31] = x),
        (t[32] = U))
      : (U = t[32]),
    U
  );
}
function h(e) {
  const t = (0, o.c)(12),
    {
      onStartAnotherMock: n,
      onBack: a,
      backLabel: s,
      titleRender: l,
      bodyRender: c,
    } = e,
    p = void 0 === s ? "Back" : s;
  let f, h, m, g;
  return (
    t[0] !== p || t[1] !== a
      ? ((f =
          a &&
          (0, r.jsx)(d.Button, {
            variant: "secondary",
            size: "xl",
            className: "min-w-0 flex-1",
            onClick: a,
            children: p,
          })),
        (t[0] = p),
        (t[1] = a),
        (t[2] = f))
      : (f = t[2]),
    t[3] !== n
      ? ((h = (0, r.jsx)(d.Button, {
          size: "xl",
          className: "min-w-0 flex-1",
          onClick: n,
          children: "Start another mock",
        })),
        (t[3] = n),
        (t[4] = h))
      : (h = t[4]),
    t[5] !== f || t[6] !== h
      ? ((m = (0, r.jsxs)(r.Fragment, { children: [f, h] })),
        (t[5] = f),
        (t[6] = h),
        (t[7] = m))
      : (m = t[7]),
    t[8] !== c || t[9] !== m || t[10] !== l
      ? ((g = (0, r.jsx)(u.DialogPrompt, {
          icon: i.Bot,
          title: "Mock interview ended",
          titleRender: l,
          bodyRender: c,
          actions: m,
          children:
            "Your transcript and notes are saved. Mock interviews run on a fixed clock and can't be extended — start a new one whenever you want another run.",
        })),
        (t[8] = c),
        (t[9] = m),
        (t[10] = l),
        (t[11] = g))
      : (g = t[11]),
    g
  );
}
