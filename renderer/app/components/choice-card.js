// app/components/choice-card.js — webpack module 50993
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.ChoiceCard = function (e) {
  const t = (0, o.c)(26),
    {
      icon: n,
      title: i,
      fact: a,
      description: l,
      corner: c,
      action: d,
      surface: p,
      className: f,
    } = e,
    h = void 0 === p ? "card" : p,
    m = "card" === h ? "gap-2 rounded-xl border p-5" : "gap-1 p-6";
  let g, y, v, b, S;
  t[0] !== f || t[1] !== m
    ? ((g = (0, s.cn)(
        "relative flex flex-col items-center overflow-hidden text-center",
        m,
        f,
      )),
      (t[0] = f),
      (t[1] = m),
      (t[2] = g))
    : (g = t[2]),
    t[3] !== n
      ? ((y = (0, r.jsx)("span", { children: n })), (t[3] = n), (t[4] = y))
      : (y = t[4]),
    t[5] !== i
      ? ((v = (0, r.jsx)(u.Typography, {
          variant: "meta",
          className: "font-medium",
          children: i,
        })),
        (t[5] = i),
        (t[6] = v))
      : (v = t[6]),
    t[7] !== a
      ? ((b = a && (0, r.jsx)(u.Typography, { variant: "body", children: a })),
        (t[7] = a),
        (t[8] = b))
      : (b = t[8]),
    t[9] !== l
      ? ((S = (0, r.jsx)(u.Typography, {
          variant: "body",
          className: "text-muted-foreground",
          children: l,
        })),
        (t[9] = l),
        (t[10] = S))
      : (S = t[10]);
  const _ = "card" === h ? "pt-2" : "pt-4";
  let x, w, E, T;
  return (
    t[11] !== _
      ? ((x = (0, s.cn)("mt-auto w-full", _)), (t[11] = _), (t[12] = x))
      : (x = t[12]),
    t[13] !== d || t[14] !== x
      ? ((w = (0, r.jsx)("div", { className: x, children: d })),
        (t[13] = d),
        (t[14] = x),
        (t[15] = w))
      : (w = t[15]),
    t[16] !== c
      ? ((E =
          c &&
          (0, r.jsx)("span", {
            className: "absolute top-0 right-0 flex",
            children: c,
          })),
        (t[16] = c),
        (t[17] = E))
      : (E = t[17]),
    t[18] !== w ||
    t[19] !== E ||
    t[20] !== g ||
    t[21] !== y ||
    t[22] !== v ||
    t[23] !== b ||
    t[24] !== S
      ? ((T = (0, r.jsxs)("div", {
          className: g,
          children: [y, v, b, S, w, E],
        })),
        (t[18] = w),
        (t[19] = E),
        (t[20] = g),
        (t[21] = y),
        (t[22] = v),
        (t[23] = b),
        (t[24] = S),
        (t[25] = T))
      : (T = t[25]),
    T
  );
}),
  (t.ChoiceSplit = function (e) {
    const t = (0, o.c)(5),
      { children: n, className: i } = e;
    let a, l;
    return (
      t[0] !== i
        ? ((a = (0, s.cn)(
            "-mx-6 -mb-6 grid border-t sm:auto-cols-fr sm:grid-flow-col [&>*+*]:border-t sm:[&>*+*]:border-t-0 sm:[&>*+*]:border-l",
            i,
          )),
          (t[0] = i),
          (t[1] = a))
        : (a = t[1]),
      t[2] !== n || t[3] !== a
        ? ((l = (0, r.jsx)("div", { className: a, children: n })),
          (t[2] = n),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]),
      l
    );
  }),
  (t.ChoiceTiles = function (e) {
    const t = (0, o.c)(10),
      { value: n, onValueChange: i, ariaLabel: a, children: l, columns: u } = e,
      d = void 0 === u ? 2 : u;
    let p;
    t[0] !== i ? ((p = (e) => i(e)), (t[0] = i), (t[1] = p)) : (p = t[1]);
    const f = 2 === d && "grid-cols-2";
    let h, m;
    return (
      t[2] !== f
        ? ((h = (0, s.cn)("grid gap-3", f)), (t[2] = f), (t[3] = h))
        : (h = t[3]),
      t[4] !== a || t[5] !== l || t[6] !== p || t[7] !== h || t[8] !== n
        ? ((m = (0, r.jsx)(c.RadioGroup, {
            "aria-label": a,
            value: n,
            onValueChange: p,
            className: h,
            children: l,
          })),
          (t[4] = a),
          (t[5] = l),
          (t[6] = p),
          (t[7] = h),
          (t[8] = n),
          (t[9] = m))
        : (m = t[9]),
      m
    );
  }),
  (t.ChoiceTile = function (e) {
    const t = (0, o.c)(36),
      { value: n, icon: p, name: f, figure: h, detail: m, disabled: g } = e,
      y = void 0 !== g && g,
      v = (0, a.useId)(),
      b = h ? "text-muted-foreground" : "text-foreground";
    let S, _, x;
    t[0] !== b
      ? ((S = (0, s.cn)("flex items-center gap-1.5", b)),
        (t[0] = b),
        (t[1] = S))
      : (S = t[1]),
      t[2] !== p
        ? ((_ = (0, r.jsx)(p, {
            "aria-hidden": !0,
            className: "size-4 group-has-data-[checked]/field-label:hidden",
          })),
          (t[2] = p),
          (t[3] = _))
        : (_ = t[3]),
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (0, r.jsx)(i.CircleCheck, {
            "aria-hidden": !0,
            className:
              "fill-foreground text-background hidden size-4 group-has-data-[checked]/field-label:block",
          })),
          (t[4] = x))
        : (x = t[4]);
    const w = !h && "font-medium";
    let E, T, k, C;
    t[5] !== w ? ((E = (0, s.cn)(w)), (t[5] = w), (t[6] = E)) : (E = t[6]),
      t[7] !== f || t[8] !== E
        ? ((T = (0, r.jsx)(u.Typography, {
            variant: "meta",
            className: E,
            children: f,
          })),
          (t[7] = f),
          (t[8] = E),
          (t[9] = T))
        : (T = t[9]),
      t[10] !== S || t[11] !== _ || t[12] !== T
        ? ((k = (0, r.jsxs)("span", {
            className: S,
            children: [_, x, T],
          })),
          (t[10] = S),
          (t[11] = _),
          (t[12] = T),
          (t[13] = k))
        : (k = t[13]),
      t[14] !== h
        ? ((C =
            h &&
            (0, r.jsx)(u.Typography, {
              variant: "h3",
              render: (0, r.jsx)("span", {}),
              children: h,
            })),
          (t[14] = h),
          (t[15] = C))
        : (C = t[15]);
    const I = h ? "font-medium" : "text-muted-foreground";
    let A;
    t[16] !== I ? ((A = (0, s.cn)(I)), (t[16] = I), (t[17] = A)) : (A = t[17]);
    const O = m ?? " ";
    let R, M, P, N, D;
    return (
      t[18] !== A || t[19] !== O
        ? ((R = (0, r.jsx)(u.Typography, {
            variant: "meta",
            className: A,
            children: O,
          })),
          (t[18] = A),
          (t[19] = O),
          (t[20] = R))
        : (R = t[20]),
      t[21] !== C || t[22] !== R || t[23] !== k
        ? ((M = (0, r.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [k, C, R],
          })),
          (t[21] = C),
          (t[22] = R),
          (t[23] = k),
          (t[24] = M))
        : (M = t[24]),
      t[25] !== y || t[26] !== v || t[27] !== n
        ? ((P = (0, r.jsx)(d.VisuallyHidden, {
            children: (0, r.jsx)(c.RadioGroupItem, {
              id: v,
              value: n,
              disabled: y,
            }),
          })),
          (t[25] = y),
          (t[26] = v),
          (t[27] = n),
          (t[28] = P))
        : (P = t[28]),
      t[29] !== y || t[30] !== M || t[31] !== P
        ? ((N = (0, r.jsxs)(l.Field, {
            "data-disabled": y,
            children: [M, P],
          })),
          (t[29] = y),
          (t[30] = M),
          (t[31] = P),
          (t[32] = N))
        : (N = t[32]),
      t[33] !== v || t[34] !== N
        ? ((D = (0, r.jsx)(l.FieldLabel, {
            htmlFor: v,
            children: N,
          })),
          (t[33] = v),
          (t[34] = N),
          (t[35] = D))
        : (D = t[35]),
      D
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(98134 /* app/components/field */),
  c = n(8237 /* app/components/radio-group */),
  u = n(34483 /* app/components/typography-variants */),
  d = n(63020 /* app/components/visually-hidden */);
