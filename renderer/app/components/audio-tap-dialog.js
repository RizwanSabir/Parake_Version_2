// app/components/audio-tap-dialog.js — webpack module 44504
// params: (e, t, n) = (module, exports, require)
t.AudioTapDialog = function (e) {
  const t = (0, o.c)(24),
    { open: n, setOpen: c, onAllow: u, onDeny: d } = e;
  let p;
  t[0] !== c
    ? ((p = function (e) {
        c(e);
      }),
      (t[0] = c),
      (t[1] = p))
    : (p = t[1]);
  const f = p;
  let h;
  t[2] !== u || t[3] !== f
    ? ((h = () => {
        u(), f(!1);
      }),
      (t[2] = u),
      (t[3] = f),
      (t[4] = h))
    : (h = t[4]);
  const m = h;
  let g;
  t[5] !== d || t[6] !== f
    ? ((g = () => {
        d(), f(!1);
      }),
      (t[5] = d),
      (t[6] = f),
      (t[7] = g))
    : (g = t[7]);
  const y = g;
  let v, b, S, _, x, w, E;
  return (
    t[8] !== y || t[9] !== f
      ? ((v = (e) => (e ? f(!0) : y())), (t[8] = y), (t[9] = f), (t[10] = v))
      : (v = t[10]),
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = (0, r.jsx)(s.DialogTitle, {})),
        (S = (0, r.jsx)(s.DialogDescription, {})),
        (t[11] = b),
        (t[12] = S))
      : ((b = t[11]), (S = t[12])),
    t[13] !== y
      ? ((_ = (0, r.jsx)(l.Button, {
          type: "button",
          variant: "secondary",
          size: "xl",
          className: "flex-1",
          onClick: y,
          children: "Cancel",
        })),
        (t[13] = y),
        (t[14] = _))
      : (_ = t[14]),
    t[15] !== m
      ? ((x = (0, r.jsx)(l.Button, {
          type: "button",
          size: "xl",
          className: "flex-1",
          onClick: m,
          autoFocus: !0,
          children: "Enable",
        })),
        (t[15] = m),
        (t[16] = x))
      : (x = t[16]),
    t[17] !== _ || t[18] !== x
      ? ((w = (0, r.jsx)(s.DialogContent, {
          size: "sm",
          children: (0, r.jsx)(a.DialogPrompt, {
            icon: i.Mic,
            title: "Enable system audio recording",
            titleRender: b,
            bodyRender: S,
            actions: (0, r.jsxs)(r.Fragment, { children: [_, x] }),
            children: "Would you like to enable capturing system audio?",
          }),
        })),
        (t[17] = _),
        (t[18] = x),
        (t[19] = w))
      : (w = t[19]),
    t[20] !== n || t[21] !== v || t[22] !== w
      ? ((E = (0, r.jsx)(s.Dialog, {
          open: n,
          onOpenChange: v,
          children: w,
        })),
        (t[20] = n),
        (t[21] = v),
        (t[22] = w),
        (t[23] = E))
      : (E = t[23]),
    E
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(56211 /* app/components/dialog-prompt */),
  s = n(98980 /* app/components/dialog */),
  l = n(99683 /* vendor/module-99683 */);
