// app/components/create-session-option-screen.js — webpack module 44687
// params: (e, t, n) = (module, exports, require)
t.CreateSessionOptionScreen = function (e) {
  const t = (0, o.c)(19),
    {
      title: n,
      options: c,
      value: u,
      onSelect: d,
      onBack: p,
      onClose: f,
      renderTitle: h,
      searchPlaceholder: m,
    } = e,
    [g, y] = (0, i.useState)("");
  let v, b;
  t[0] !== g || t[1] !== m
    ? ((v =
        m &&
        (0, r.jsx)("div", {
          className: "-mx-4 border-b pt-4 pb-3",
          children: (0, r.jsx)("div", {
            className: "px-4",
            children: (0, r.jsx)(s.SearchInput, {
              placeholder: m,
              value: g,
              onChange: (e) => y(e.target.value),
            }),
          }),
        })),
      (t[0] = g),
      (t[1] = m),
      (t[2] = v))
    : (v = t[2]),
    t[3] !== c || t[4] !== g
      ? ((b = "function" == typeof c ? c(g) : c),
        (t[3] = c),
        (t[4] = g),
        (t[5] = b))
      : (b = t[5]);
  const S = "function" == typeof c ? "" : g;
  let _, x;
  return (
    t[6] !== d || t[7] !== b || t[8] !== S || t[9] !== n || t[10] !== u
      ? ((_ = (0, r.jsx)(a.OptionList, {
          label: n,
          options: b,
          value: u,
          onSelect: d,
          query: S,
        })),
        (t[6] = d),
        (t[7] = b),
        (t[8] = S),
        (t[9] = n),
        (t[10] = u),
        (t[11] = _))
      : (_ = t[11]),
    t[12] !== p ||
    t[13] !== f ||
    t[14] !== h ||
    t[15] !== v ||
    t[16] !== _ ||
    t[17] !== n
      ? ((x = (0, r.jsx)(l.CreateSessionSheetScreen, {
          title: n,
          onBack: p,
          onClose: f,
          renderTitle: h,
          pinned: v,
          children: _,
        })),
        (t[12] = p),
        (t[13] = f),
        (t[14] = h),
        (t[15] = v),
        (t[16] = _),
        (t[17] = n),
        (t[18] = x))
      : (x = t[18]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(17218 /* app/components/on-click-17218 */),
  s = n(57583 /* app/components/search-input */),
  l = n(50547 /* app/components/create-session-sheet-screen */);
