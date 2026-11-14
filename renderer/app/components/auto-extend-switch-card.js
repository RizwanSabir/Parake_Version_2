// app/components/auto-extend-switch-card.js — webpack module 21221
// params: (e, t, n) = (module, exports, require)
t.AutoExtendSwitchCard = function (e) {
  const t = (0, o.c)(29),
    {
      isOn: n,
      onChange: a,
      isUpdating: f,
      hideHeader: h,
      inDrawer: m,
      onClose: g,
    } = e,
    y = void 0 !== f && f,
    v = void 0 !== h && h,
    b = void 0 !== m && m;
  let S;
  t[0] !== v || t[1] !== n || t[2] !== g
    ? ((S = v
        ? null
        : (0, r.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                  (0, r.jsx)(u.Typography, {
                    variant: "title-sm",
                    render: (0, r.jsx)("h2", {}),
                    children: d(n),
                  }),
                  g
                    ? (0, r.jsx)(l.Button, {
                        variant: "ghost",
                        size: "icon-sm",
                        className: "-mt-0.5 -mr-1",
                        onClick: g,
                        "aria-label": "Close",
                        children: (0, r.jsx)(i.X, {}),
                      })
                    : null,
                ],
              }),
              (0, r.jsx)(u.Typography, {
                variant: "body",
                className: "text-muted-foreground",
                children: p(n),
              }),
            ],
          })),
      (t[0] = v),
      (t[1] = n),
      (t[2] = g),
      (t[3] = S))
    : (S = t[3]);
  const _ = b
      ? "bg-accent-secondary h-15 w-full rounded-xl border py-2 pr-2 pl-4 text-left"
      : "hover:bg-accent h-11 gap-4 rounded-lg border px-3 md:h-10",
    x = y && "pointer-events-none opacity-50";
  let w, E;
  t[4] !== _ || t[5] !== x
    ? ((w = (0, s.cn)(
        "flex cursor-pointer items-center justify-between [&_svg]:shrink-0",
        _,
        x,
      )),
      (t[4] = _),
      (t[5] = x),
      (t[6] = w))
    : (w = t[6]),
    t[7] !== n || t[8] !== a
      ? ((E = () => a(!n)), (t[7] = n), (t[8] = a), (t[9] = E))
      : (E = t[9]);
  const T = b ? "size-5" : "size-4";
  let k, C, I, A, O, R, M;
  return (
    t[10] !== T
      ? ((k = (0, s.cn)("text-muted-foreground", T)), (t[10] = T), (t[11] = k))
      : (k = t[11]),
    t[12] !== k
      ? ((C = (0, r.jsx)(i.TimerReset, { className: k })),
        (t[12] = k),
        (t[13] = C))
      : (C = t[13]),
    t[14] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = (0, r.jsx)(u.Typography, {
          variant: "body",
          className: "font-medium",
          children: "Auto Extend",
        })),
        (t[14] = I))
      : (I = t[14]),
    t[15] !== C
      ? ((A = (0, r.jsxs)("span", {
          className: "flex items-center gap-2",
          children: [C, I],
        })),
        (t[15] = C),
        (t[16] = A))
      : (A = t[16]),
    t[17] !== n || t[18] !== y || t[19] !== a
      ? ((O = (0, r.jsx)(c.Switch, {
          checked: n,
          onCheckedChange: a,
          disabled: y,
          className: "pointer-events-none",
          "aria-label": "Auto Extend",
        })),
        (t[17] = n),
        (t[18] = y),
        (t[19] = a),
        (t[20] = O))
      : (O = t[20]),
    t[21] !== A || t[22] !== O || t[23] !== w || t[24] !== E
      ? ((R = (0, r.jsxs)("div", {
          className: w,
          onClick: E,
          children: [A, O],
        })),
        (t[21] = A),
        (t[22] = O),
        (t[23] = w),
        (t[24] = E),
        (t[25] = R))
      : (R = t[25]),
    t[26] !== R || t[27] !== S
      ? ((M = (0, r.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [S, R],
        })),
        (t[26] = R),
        (t[27] = S),
        (t[28] = M))
      : (M = t[28]),
    M
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(46852 /* vendor/module-46852 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(66244 /* app/components/button-variants */),
  c = n(88364 /* app/components/switch */),
  u = n(34483 /* app/components/typography-variants */);
function d(e) {
  return e
    ? "This session will automatically extend"
    : "This session will end soon";
}
function p(e) {
  return e
    ? `When the timer reaches 0, you'll get ${a.MAX_CALL_DURATION_MINUTES} more minutes for ${a.SESSION_CREDIT_COST} credit.`
    : "When the timer reaches 0, your session will end.";
}
