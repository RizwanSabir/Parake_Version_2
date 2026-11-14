// app/components/on-click-17871.js — webpack module 17871
// params: (e, t, n) = (module, exports, require)
t.ThumbButtons = function (e) {
  const t = (0, o.c)(12),
    { selected: n, onSelect: c, disabled: u } = e,
    d = void 0 !== u && u,
    { touch: p, glass: f } = (0, l.useAnswerEnvironment)(),
    h = f && "gap-1";
  let m, g, y, v;
  return (
    t[0] !== h
      ? ((m = (0, a.cn)("flex items-center", h)), (t[0] = h), (t[1] = m))
      : (m = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((g = ["up", "down"]), (t[2] = g))
      : (g = t[2]),
    t[3] !== d || t[4] !== f || t[5] !== c || t[6] !== n || t[7] !== p
      ? ((y = g.map((e) => {
          const t = "up" === e ? i.ThumbsUp : i.ThumbsDown;
          return (0, r.jsx)(
            s.Button,
            {
              variant: f ? "glass-quiet" : "ghost",
              size: p ? "icon-xl" : f ? "icon-control-sm" : "icon",
              "aria-label":
                "up" === e ? "Helpful response" : "Unhelpful response",
              "aria-pressed": n === e,
              disabled: d,
              onClick: () => c(e),
              className: (0, a.cn)(
                n === e ? "text-foreground" : "text-muted-foreground",
              ),
              children: (0, r.jsx)(t, {
                className: (0, a.cn)(n === e && "fill-current"),
              }),
            },
            e,
          );
        })),
        (t[3] = d),
        (t[4] = f),
        (t[5] = c),
        (t[6] = n),
        (t[7] = p),
        (t[8] = y))
      : (y = t[8]),
    t[9] !== m || t[10] !== y
      ? ((v = (0, r.jsx)("span", { className: m, children: y })),
        (t[9] = m),
        (t[10] = y),
        (t[11] = v))
      : (v = t[11]),
    v
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(66244 /* app/components/button-variants */),
  l = n(97329 /* vendor/module-97329 */);
