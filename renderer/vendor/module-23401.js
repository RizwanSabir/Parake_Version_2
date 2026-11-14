// vendor/module-23401.js — webpack module 23401
// params: (e, t, n) = (module, exports, require)
"use strict";
t.NoSearchResults = function (e) {
  const t = (0, o.c)(4),
    { title: n } = e;
  let l, c, u;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((l = (0, r.jsx)(i.SearchX, {})),
        (c = (0, r.jsx)(s.PixelIcon, { name: "search" })),
        (t[0] = l),
        (t[1] = c))
      : ((l = t[0]), (c = t[1])),
    t[2] !== n
      ? ((u = (0, r.jsx)(a.EmptyState, {
          icon: l,
          pixelIcon: c,
          title: n,
          description: "Try a different search term or check the spelling.",
        })),
        (t[2] = n),
        (t[3] = u))
      : (u = t[3]),
    u
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(34603 /* app/components/empty-state */),
  s = n(81774 /* app/components/pixel-icon */);
