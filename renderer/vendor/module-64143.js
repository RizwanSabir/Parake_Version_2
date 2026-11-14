// vendor/module-64143.js — webpack module 64143
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCompanySearch = function ({
  searchCompanies: e,
  onSelect: t,
  initialQuery: n,
}) {
  const [a, s] = (0, o.useState)(n ?? ""),
    [l, c] = (0, o.useState)(!!n?.trim()),
    u = (0, i.useDebounce)(a, 300).trim(),
    { data: d, isFetching: p } = e.useQuery(
      { query: u },
      {
        enabled: u.length > 0,
        placeholderData: r.keepPreviousData,
        retry: !1,
        refetchOnWindowFocus: !1,
      },
    ),
    f = u ? (d ?? []) : [];
  return {
    results: f,
    isSearching: p,
    open: l && (p || f.length > 0),
    setOpen: c,
    search: (e) => {
      s(e), c(!!e.trim());
    },
    selectResult: (e) => {
      c(!1), t(e);
    },
  };
};
const r = n(24383 /* vendor/module-24383 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(50885 /* vendor/module-50885 */);
