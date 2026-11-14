// vendor/module-3111.js — webpack module 3111
// params: (e, t, n) = (module, exports, require)
t.CopyButton = function (e) {
  const t = (0, o.c)(18),
    { text: n, label: u, iconOnly: d, onCopied: p } = e,
    f = void 0 === u ? "Copy" : u,
    h = void 0 !== d && d,
    { copy: m, touch: g, glass: y } = (0, c.useAnswerEnvironment)(),
    [v, b] = (0, a.useState)(!1);
  let S;
  t[0] !== m || t[1] !== p || t[2] !== n
    ? ((S = async function () {
        try {
          await m(n);
        } catch {
          return;
        }
        b(!0), setTimeout(() => b(!1), 1600), p?.();
      }),
      (t[0] = m),
      (t[1] = p),
      (t[2] = n),
      (t[3] = S))
    : (S = t[3]);
  const _ = S,
    x = y ? "glass-quiet" : h ? "ghost" : "outline",
    w = h ? (g ? "icon-xl" : y ? "icon-control-sm" : "icon") : g ? "xl" : "sm";
  let E;
  t[4] !== _
    ? ((E = () => {
        _();
      }),
      (t[4] = _),
      (t[5] = E))
    : (E = t[5]);
  const T = h ? (v ? "Copied" : f) : void 0,
    k = h && !v && "text-muted-foreground";
  let C, I;
  t[6] !== k ? ((C = (0, s.cn)(k)), (t[6] = k), (t[7] = C)) : (C = t[7]),
    t[8] !== v
      ? ((I = v ? (0, r.jsx)(i.Check, {}) : (0, r.jsx)(i.Copy, {})),
        (t[8] = v),
        (t[9] = I))
      : (I = t[9]);
  const A = !h && (v ? "Copied" : f);
  let O;
  return (
    t[10] !== I ||
    t[11] !== A ||
    t[12] !== x ||
    t[13] !== w ||
    t[14] !== E ||
    t[15] !== T ||
    t[16] !== C
      ? ((O = (0, r.jsxs)(l.Button, {
          variant: x,
          size: w,
          onClick: E,
          "aria-live": "polite",
          "aria-label": T,
          className: C,
          children: [I, A],
        })),
        (t[10] = I),
        (t[11] = A),
        (t[12] = x),
        (t[13] = w),
        (t[14] = E),
        (t[15] = T),
        (t[16] = C),
        (t[17] = O))
      : (O = t[17]),
    O
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(66244 /* app/components/button-variants */),
  c = n(97329 /* vendor/module-97329 */);
