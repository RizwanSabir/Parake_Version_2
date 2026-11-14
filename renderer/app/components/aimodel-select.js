// app/components/aimodel-select.js — webpack module 48141
// params: (e, t, n) = (module, exports, require)
t.AIModelSelect = function (e) {
  const t = (0, o.c)(37),
    {
      value: n,
      onValueChange: d,
      renderModelLogo: p,
      models: f,
      disabled: h,
      uncapped: m,
      children: g,
    } = e,
    [y, v] = (0, a.useState)(!1),
    b = (0, a.useRef)(!1);
  let S, _, x, w, E, T, k, C, I, A, O, R;
  if (
    t[0] !== g ||
    t[1] !== h ||
    t[2] !== f ||
    t[3] !== d ||
    t[4] !== p ||
    t[5] !== y ||
    t[6] !== m ||
    t[7] !== n
  ) {
    const e = f ? null : (0, l.aiModelPickerGroups)(n),
      o = null !== e && (y || !e.recommended.includes(n)),
      a = e ? [...e.recommended, ...e.advanced] : [...(f ?? [])];
    let O;
    t[18] !== p || t[19] !== n
      ? ((O = (e) => {
          const t = (0, s.aiModelPickerNote)(e);
          return (0, r.jsxs)(
            c.SelectItem,
            {
              value: e,
              hideIndicator: !0,
              children: [
                e === n
                  ? (0, r.jsx)(i.CheckIcon, {
                      className: "text-foreground size-4 shrink-0",
                    })
                  : p(e),
                (0, r.jsx)("span", { children: s.aiModelNameMap[e] }),
                t &&
                  (0, r.jsx)("span", {
                    className: "text-muted-foreground ml-auto pl-6",
                    children: t,
                  }),
              ],
            },
            e,
          );
        }),
        (t[18] = p),
        (t[19] = n),
        (t[20] = O))
      : (O = t[20]);
    const R = O;
    (_ = c.Select),
      (E = n),
      (T = a.map(u)),
      (k = h),
      t[21] !== d
        ? ((C = (e, t) => {
            if (e === l.ADVANCED_MODELS_PICKER_OPTION)
              return t.cancel(), (b.current = !0), void v(!0);
            d(e);
          }),
          (t[21] = d),
          (t[22] = C))
        : (C = t[22]),
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = (e, t) => {
            if (!e && b.current) return (b.current = !1), void t.cancel();
            e && v(!1);
          }),
          (t[23] = I))
        : (I = t[23]),
      (A = g),
      (S = c.SelectContent),
      (x = m ? void 0 : "max-h-70"),
      (w =
        null === e
          ? a.map(R)
          : (0, r.jsxs)(r.Fragment, {
              children: [
                e.recommended.map(R),
                (0, r.jsx)(c.SelectSeparator, {}),
                o
                  ? e.advanced.map(R)
                  : (0, r.jsxs)(c.SelectItem, {
                      value: l.ADVANCED_MODELS_PICKER_OPTION,
                      hideIndicator: !0,
                      children: [
                        (0, r.jsx)(i.PlusIcon, {
                          className: "size-4 shrink-0",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "text-muted-foreground in-data-[highlighted]:text-accent-foreground",
                          children: "Show more",
                        }),
                      ],
                    }),
              ],
            })),
      (t[0] = g),
      (t[1] = h),
      (t[2] = f),
      (t[3] = d),
      (t[4] = p),
      (t[5] = y),
      (t[6] = m),
      (t[7] = n),
      (t[8] = S),
      (t[9] = _),
      (t[10] = x),
      (t[11] = w),
      (t[12] = E),
      (t[13] = T),
      (t[14] = k),
      (t[15] = C),
      (t[16] = I),
      (t[17] = A);
  } else
    (S = t[8]),
      (_ = t[9]),
      (x = t[10]),
      (w = t[11]),
      (E = t[12]),
      (T = t[13]),
      (k = t[14]),
      (C = t[15]),
      (I = t[16]),
      (A = t[17]);
  return (
    t[24] !== S || t[25] !== x || t[26] !== w
      ? ((O = (0, r.jsx)(S, { className: x, children: w })),
        (t[24] = S),
        (t[25] = x),
        (t[26] = w),
        (t[27] = O))
      : (O = t[27]),
    t[28] !== _ ||
    t[29] !== E ||
    t[30] !== T ||
    t[31] !== k ||
    t[32] !== C ||
    t[33] !== I ||
    t[34] !== A ||
    t[35] !== O
      ? ((R = (0, r.jsxs)(_, {
          value: E,
          items: T,
          disabled: k,
          onValueChange: C,
          onOpenChange: I,
          children: [A, O],
        })),
        (t[28] = _),
        (t[29] = E),
        (t[30] = T),
        (t[31] = k),
        (t[32] = C),
        (t[33] = I),
        (t[34] = A),
        (t[35] = O),
        (t[36] = R))
      : (R = t[36]),
    R
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(68058 /* vendor/module-68058 */),
  l = n(44239 /* vendor/module-44239 */),
  c = n(9664 /* app/components/select-trigger-icon-class-name */);
function u(e) {
  return { value: e, label: s.aiModelNameMap[e] };
}
