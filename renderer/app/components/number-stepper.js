// app/components/number-stepper.js — webpack module 33411
// params: (e, t, n) = (module, exports, require)
t.NumberStepper = function (e) {
  const t = (0, o.c)(40);
  let n, c, u, d, p, f;
  t[0] !== e
    ? (({ className: c, "aria-label": n, id: u, fill: p, onTint: f, ...d } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = c),
      (t[3] = u),
      (t[4] = d),
      (t[5] = p),
      (t[6] = f))
    : ((n = t[1]), (c = t[2]), (u = t[3]), (d = t[4]), (p = t[5]), (f = t[6]));
  const h = void 0 !== p && p,
    m = h && "flex w-full md:h-(--control-h-xl)",
    g = void 0 !== f && f ? "bg-card" : "dark:bg-input/30";
  let y;
  t[7] !== c || t[8] !== m || t[9] !== g
    ? ((y = (0, s.cn)(
        "ring-input inline-flex h-(--control-h-xl) items-stretch overflow-hidden rounded-(--radius-item) shadow-(--shadow-control) ring-1 ring-inset md:h-(--control-h-md)",
        m,
        g,
        c,
      )),
      (t[7] = c),
      (t[8] = m),
      (t[9] = g),
      (t[10] = y))
    : (y = t[10]);
  const v = h && "md:w-11";
  let b, S, _;
  t[11] !== v ? ((b = (0, s.cn)(l, v)), (t[11] = v), (t[12] = b)) : (b = t[12]),
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = (0, r.jsx)(a.Minus, {
          className: "size-4",
          "aria-hidden": "true",
        })),
        (t[13] = S))
      : (S = t[13]),
    t[14] !== b
      ? ((_ = (0, r.jsx)(i.NumberField.Decrement, {
          className: b,
          "aria-label": "Decrease",
          children: S,
        })),
        (t[14] = b),
        (t[15] = _))
      : (_ = t[15]);
  const x = h && "flex-1 justify-center";
  let w;
  t[16] !== x
    ? ((w = (0, s.cn)(
        "border-input has-[input:focus-visible]:bg-accent/60 flex items-center gap-1 border-x px-2 transition-colors",
        x,
      )),
      (t[16] = x),
      (t[17] = w))
    : (w = t[17]);
  const E = h
    ? "w-full text-base font-semibold"
    : "phone:leading-normal w-9 text-sm";
  let T, k, C;
  t[18] !== E
    ? ((T = (0, s.cn)(
        "text-foreground bg-transparent text-center tabular-nums outline-none",
        E,
      )),
      (t[18] = E),
      (t[19] = T))
    : (T = t[19]),
    t[20] !== n || t[21] !== u || t[22] !== T
      ? ((k = (0, r.jsx)(i.NumberField.Input, {
          id: u,
          "aria-label": n,
          className: T,
        })),
        (t[20] = n),
        (t[21] = u),
        (t[22] = T),
        (t[23] = k))
      : (k = t[23]),
    t[24] !== w || t[25] !== k
      ? ((C = (0, r.jsx)("span", { className: w, children: k })),
        (t[24] = w),
        (t[25] = k),
        (t[26] = C))
      : (C = t[26]);
  const I = h && "md:w-11";
  let A, O, R, M, P;
  return (
    t[27] !== I
      ? ((A = (0, s.cn)(l, I)), (t[27] = I), (t[28] = A))
      : (A = t[28]),
    t[29] === Symbol.for("react.memo_cache_sentinel")
      ? ((O = (0, r.jsx)(a.Plus, {
          className: "size-4",
          "aria-hidden": "true",
        })),
        (t[29] = O))
      : (O = t[29]),
    t[30] !== A
      ? ((R = (0, r.jsx)(i.NumberField.Increment, {
          className: A,
          "aria-label": "Increase",
          children: O,
        })),
        (t[30] = A),
        (t[31] = R))
      : (R = t[31]),
    t[32] !== C || t[33] !== R || t[34] !== y || t[35] !== _
      ? ((M = (0, r.jsxs)(i.NumberField.Group, {
          className: y,
          children: [_, C, R],
        })),
        (t[32] = C),
        (t[33] = R),
        (t[34] = y),
        (t[35] = _),
        (t[36] = M))
      : (M = t[36]),
    t[37] !== d || t[38] !== M
      ? ((P = (0, r.jsx)(i.NumberField.Root, {
          "data-slot": "number-stepper",
          ...d,
          children: M,
        })),
        (t[37] = d),
        (t[38] = M),
        (t[39] = P))
      : (P = t[39]),
    P
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(28724 /* vendor/module-28724 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(29113 /* vendor/module-29113 */),
  l =
    "text-muted-foreground hover:bg-accent hover:text-foreground flex h-full w-11 cursor-pointer items-center justify-center transition-colors outline-none focus-visible:bg-accent active:bg-accent disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 md:w-9";
