// app/components/infinite-scroll-trigger.js — webpack module 61685
// params: (e, t, n) = (module, exports, require)
t.InfiniteScrollTrigger = function (e) {
  const t = (0, o.c)(9),
    { hasNextPage: n, isFetchingNextPage: l, onLoadMore: c } = e,
    u = (0, i.useRef)(null);
  let d, p, f, h;
  return (
    t[0] !== n || t[1] !== l || t[2] !== c
      ? ((d = () => {
          const e = u.current;
          if (!e || !n || l) return;
          const t = new IntersectionObserver(
            (e) => {
              e.some(s) && c();
            },
            { rootMargin: "200px" },
          );
          return (
            t.observe(e),
            () => {
              t.disconnect();
            }
          );
        }),
        (p = [n, l, c]),
        (t[0] = n),
        (t[1] = l),
        (t[2] = c),
        (t[3] = d),
        (t[4] = p))
      : ((d = t[3]), (p = t[4])),
    (0, i.useEffect)(d, p),
    n
      ? (t[5] !== l
          ? ((f =
              l &&
              (0, r.jsx)(a.Spinner, {
                className: "text-muted-foreground",
                label: "Loading more",
              })),
            (t[5] = l),
            (t[6] = f))
          : (f = t[6]),
        t[7] !== f
          ? ((h = (0, r.jsx)("div", {
              ref: u,
              className: "flex w-full justify-center py-4",
              children: f,
            })),
            (t[7] = f),
            (t[8] = h))
          : (h = t[8]),
        h)
      : null
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(15201 /* app/components/spinner */);
function s(e) {
  return e.isIntersecting;
}
