// vendor/module-54670.js — webpack module 54670
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ListLoadError = function (e) {
  const t = (0, o.c)(13),
    {
      title: n,
      onRetry: c,
      retrying: u,
      description: d,
      retryLabel: p,
      retryingLabel: f,
    } = e,
    h = void 0 === d ? "Check your connection and try again." : d,
    m = void 0 === p ? "Try again" : p,
    g = void 0 === f ? "Trying again..." : f;
  let y, v;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((y = (0, r.jsx)(i.TriangleAlert, { className: "text-error" })),
      (v = (0, r.jsx)(s.PixelIcon, {
        name: "warning-diamond",
        className: "text-error",
      })),
      (t[0] = y),
      (t[1] = v))
    : ((y = t[0]), (v = t[1]));
  const b = u ? "animate-spin" : void 0;
  let S;
  t[2] !== b
    ? ((S = (0, r.jsx)(i.RotateCw, { className: b })), (t[2] = b), (t[3] = S))
    : (S = t[3]);
  const _ = u ? g : m;
  let x, w;
  return (
    t[4] !== c || t[5] !== u || t[6] !== S || t[7] !== _
      ? ((x = (0, r.jsxs)(l.Button, {
          variant: "ghost",
          onClick: c,
          disabled: u,
          children: [S, _],
        })),
        (t[4] = c),
        (t[5] = u),
        (t[6] = S),
        (t[7] = _),
        (t[8] = x))
      : (x = t[8]),
    t[9] !== h || t[10] !== x || t[11] !== n
      ? ((w = (0, r.jsx)(a.EmptyState, {
          icon: y,
          pixelIcon: v,
          title: n,
          description: h,
          action: x,
        })),
        (t[9] = h),
        (t[10] = x),
        (t[11] = n),
        (t[12] = w))
      : (w = t[12]),
    w
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(34603 /* app/components/empty-state */),
  s = n(81774 /* app/components/pixel-icon */),
  l = n(66244 /* app/components/button-variants */);
