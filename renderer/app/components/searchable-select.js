// app/components/searchable-select.js — webpack module 69853
// params: (e, t, n) = (module, exports, require)
t.SearchableSelect = function (e) {
  const t = (0, o.c)(24),
    {
      value: n,
      options: l,
      onValueChange: c,
      disabled: u,
      searchPlaceholder: d,
      matchTriggerWidth: p,
      children: f,
    } = e;
  let h;
  t[0] !== l
    ? ((h = (e) => l.find((t) => t.value === e)?.label ?? e),
      (t[0] = l),
      (t[1] = h))
    : (h = t[1]);
  const m = h;
  let g, y;
  t[2] !== l ? ((g = l.map(s)), (t[2] = l), (t[3] = g)) : (g = t[3]),
    t[4] !== c
      ? ((y = (e) => {
          null != e && c(e);
        }),
        (t[4] = c),
        (t[5] = y))
      : (y = t[5]);
  const v = p ? "max-h-70" : "max-h-70 w-72";
  let b, S, _, x, w, E;
  return (
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = (0, r.jsx)(a.SearchInput, {})), (t[6] = b))
      : (b = t[6]),
    t[7] !== d
      ? ((S = (0, r.jsx)("div", {
          className: "border-b p-1",
          children: (0, r.jsx)(i.ComboboxInput, {
            render: b,
            placeholder: d,
          }),
        })),
        (t[7] = d),
        (t[8] = S))
      : (S = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = (0, r.jsx)(i.ComboboxEmpty, {
          children: "No matches.",
        })),
        (t[9] = _))
      : (_ = t[9]),
    t[10] !== m
      ? ((x = (0, r.jsx)("div", {
          className: "flex min-h-0 flex-col p-1",
          children: (0, r.jsx)(i.ComboboxList, {
            className: "min-h-0 overflow-x-hidden overflow-y-auto",
            children: (e) =>
              (0, r.jsxs)(
                i.ComboboxItem,
                {
                  value: e,
                  variant: "select",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "absolute right-2 flex size-3.5 items-center justify-center",
                      children: (0, r.jsx)(i.ComboboxItemIndicator, {}),
                    }),
                    (0, r.jsx)("span", {
                      className: "pr-5",
                      children: m(e),
                    }),
                  ],
                },
                e,
              ),
          }),
        })),
        (t[10] = m),
        (t[11] = x))
      : (x = t[11]),
    t[12] !== v || t[13] !== S || t[14] !== x
      ? ((w = (0, r.jsxs)(i.ComboboxContent, {
          variant: "select",
          className: v,
          children: [S, _, x],
        })),
        (t[12] = v),
        (t[13] = S),
        (t[14] = x),
        (t[15] = w))
      : (w = t[15]),
    t[16] !== f ||
    t[17] !== u ||
    t[18] !== m ||
    t[19] !== g ||
    t[20] !== y ||
    t[21] !== w ||
    t[22] !== n
      ? ((E = (0, r.jsxs)(i.Combobox, {
          items: g,
          itemToStringLabel: m,
          value: n,
          onValueChange: y,
          disabled: u,
          children: [f, w],
        })),
        (t[16] = f),
        (t[17] = u),
        (t[18] = m),
        (t[19] = g),
        (t[20] = y),
        (t[21] = w),
        (t[22] = n),
        (t[23] = E))
      : (E = t[23]),
    E
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(57577 /* app/components/combobox */),
  a = n(57583 /* app/components/search-input */);
function s(e) {
  return e.value;
}
