// app/components/language-picker.js — webpack module 95793
// params: (e, t, n) = (module, exports, require)
t.LanguagePicker = function (e) {
  const t = (0, o.c)(20),
    {
      languages: n,
      isLoading: u,
      error: d,
      value: p,
      onSelect: f,
      onBack: h,
      onClose: m,
      renderTitle: g,
    } = e;
  if (u || d) {
    const e = d ? "text-error" : "text-muted-foreground";
    let n, o;
    t[0] !== e
      ? ((n = (0, i.cn)("text-center", e)), (t[0] = e), (t[1] = n))
      : (n = t[1]),
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, r.jsx)("span", { className: "pt-16" })), (t[2] = o))
        : (o = t[2]);
    const a = d
      ? "Couldn't load languages. Close and try again."
      : "Loading languages...";
    let u, p;
    return (
      t[3] !== n || t[4] !== a
        ? ((u = (0, r.jsx)(l.Typography, {
            className: n,
            render: o,
            children: a,
          })),
          (t[3] = n),
          (t[4] = a),
          (t[5] = u))
        : (u = t[5]),
      t[6] !== h || t[7] !== m || t[8] !== g || t[9] !== u
        ? ((p = (0, r.jsx)(s.CreateSessionSheetScreen, {
            title: c,
            onBack: h,
            onClose: m,
            renderTitle: g,
            children: u,
          })),
          (t[6] = h),
          (t[7] = m),
          (t[8] = g),
          (t[9] = u),
          (t[10] = p))
        : (p = t[10]),
      p
    );
  }
  let y, v;
  return (
    t[11] !== n ? ((y = n ?? []), (t[11] = n), (t[12] = y)) : (y = t[12]),
    t[13] !== h ||
    t[14] !== m ||
    t[15] !== f ||
    t[16] !== g ||
    t[17] !== y ||
    t[18] !== p
      ? ((v = (0, r.jsx)(a.CreateSessionOptionScreen, {
          title: c,
          options: y,
          value: p,
          onSelect: f,
          onBack: h,
          onClose: m,
          renderTitle: g,
          searchPlaceholder: "Search language",
        })),
        (t[13] = h),
        (t[14] = m),
        (t[15] = f),
        (t[16] = g),
        (t[17] = y),
        (t[18] = p),
        (t[19] = v))
      : (v = t[19]),
    v
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(44687 /* app/components/create-session-option-screen */),
  s = n(50547 /* app/components/create-session-sheet-screen */),
  l = n(34483 /* app/components/typography-variants */),
  c = "Select Language";
