// app/components/on-press.js — webpack module 62564
// params: (e, t, n) = (module, exports, require)
t.SelectFileScreen = function (e) {
  const t = (0, o.c)(19),
    {
      title: n,
      files: s,
      onSelect: d,
      action: f,
      onBack: h,
      searchPlaceholder: m,
      emptyLabel: g,
    } = e,
    y = void 0 === g ? "Nothing here yet." : g,
    [v, b] = (0, a.useState)("");
  let S;
  if (t[0] !== s || t[1] !== v) {
    const e = v.trim().toLowerCase();
    (S = e ? s.filter((t) => t.label.toLowerCase().includes(e)) : s),
      (t[0] = s),
      (t[1] = v),
      (t[2] = S);
  } else S = t[2];
  const _ = S;
  let x, w, E, T;
  return (
    t[3] !== v || t[4] !== m
      ? ((x =
          m &&
          (0, r.jsx)("div", {
            className: "-mx-4 border-b pt-4 pb-3",
            children: (0, r.jsx)("div", {
              className: "px-4",
              children: (0, r.jsx)(l.SearchInput, {
                placeholder: m,
                value: v,
                onChange: (e) => b(e.target.value),
              }),
            }),
          })),
        (t[3] = v),
        (t[4] = m),
        (t[5] = x))
      : (x = t[5]),
    t[6] !== f
      ? ((w =
          f &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p, {
                icon: (0, r.jsx)(i.Upload, { className: "size-4.5" }),
                label: f.label,
                meta: f.description,
                onPress: f.onPress,
                trailing: (0, r.jsx)(i.ChevronRight, {
                  className: "text-muted-foreground size-5 shrink-0",
                }),
              }),
              (0, r.jsx)("div", {
                className: "bg-border my-1 h-px w-full shrink-0",
              }),
            ],
          })),
        (t[6] = f),
        (t[7] = w))
      : (w = t[7]),
    t[8] !== y || t[9] !== s || t[10] !== d || t[11] !== _
      ? ((E =
          0 === _.length
            ? (0, r.jsx)(c.Typography, {
                className: "text-muted-foreground",
                render: (0, r.jsx)("span", { className: "py-3" }),
                children: 0 === s.length ? y : "No matches.",
              })
            : (0, r.jsx)("div", {
                children: _.map((e) =>
                  (0, r.jsx)(
                    p,
                    {
                      icon: (0, r.jsx)(i.FileText, {
                        className: "size-4.5",
                      }),
                      label: e.label,
                      meta: e.meta,
                      disabled: e.disabled,
                      onPress: () => d(e.value),
                    },
                    e.value,
                  ),
                ),
              })),
        (t[8] = y),
        (t[9] = s),
        (t[10] = d),
        (t[11] = _),
        (t[12] = E))
      : (E = t[12]),
    t[13] !== h || t[14] !== x || t[15] !== w || t[16] !== E || t[17] !== n
      ? ((T = (0, r.jsxs)(u.CreateSessionSheetScreen, {
          title: n,
          onBack: h,
          list: !0,
          pinned: x,
          children: [w, E],
        })),
        (t[13] = h),
        (t[14] = x),
        (t[15] = w),
        (t[16] = E),
        (t[17] = n),
        (t[18] = T))
      : (T = t[18]),
    T
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(57583 /* app/components/search-input */),
  c = n(34483 /* app/components/typography-variants */),
  u = n(50547 /* app/components/create-session-sheet-screen */),
  d = n(5859 /* app/components/sheet-file-row */);
function p(e) {
  const t = (0, o.c)(12),
    { icon: n, label: i, meta: a, disabled: l, onPress: c, trailing: u } = e,
    p = void 0 !== l && l,
    f = p && "cursor-not-allowed opacity-50";
  let h, m, g;
  return (
    t[0] !== f
      ? ((h = (0, s.cn)(d.SHEET_FILE_ROW, f)), (t[0] = f), (t[1] = h))
      : (h = t[1]),
    t[2] !== n || t[3] !== i || t[4] !== a
      ? ((m = (0, r.jsx)(d.SheetFileRowBody, {
          icon: n,
          label: i,
          meta: a,
        })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a),
        (t[5] = m))
      : (m = t[5]),
    t[6] !== p || t[7] !== c || t[8] !== h || t[9] !== m || t[10] !== u
      ? ((g = (0, r.jsxs)("button", {
          type: "button",
          onClick: c,
          disabled: p,
          className: h,
          children: [m, u],
        })),
        (t[6] = p),
        (t[7] = c),
        (t[8] = h),
        (t[9] = m),
        (t[10] = u),
        (t[11] = g))
      : (g = t[11]),
    g
  );
}
