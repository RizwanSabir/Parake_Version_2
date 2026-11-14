// vendor/module-79249.js — webpack module 79249
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useDeviceOptions = function (e, t, n) {
  const s = (0, r.c)(15),
    l = (0, o.useQueryClient)();
  let c, u, d, p;
  s[0] !== e ? ((c = [e]), (s[0] = e), (s[1] = c)) : (c = s[1]),
    s[2] !== n || s[3] !== t
      ? ((u = async () => n(await t())), (s[2] = n), (s[3] = t), (s[4] = u))
      : (u = s[4]),
    s[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = [a.SYSTEM_DEFAULT_OPTION]), (s[5] = d))
      : (d = s[5]),
    s[6] !== c || s[7] !== u
      ? ((p = {
          queryKey: c,
          queryFn: u,
          placeholderData: d,
          retry: !1,
        }),
        (s[6] = c),
        (s[7] = u),
        (s[8] = p))
      : (p = s[8]);
  const { data: f } = (0, o.useQuery)(p);
  let h, m, g;
  return (
    s[9] !== l || s[10] !== e
      ? ((h = () => {
          const t = () => {
            l.invalidateQueries({ queryKey: [e] }, { cancelRefetch: !0 });
          };
          return (
            navigator.mediaDevices.addEventListener("devicechange", t),
            () => navigator.mediaDevices.removeEventListener("devicechange", t)
          );
        }),
        (m = [l, e]),
        (s[9] = l),
        (s[10] = e),
        (s[11] = h),
        (s[12] = m))
      : ((h = s[11]), (m = s[12])),
    (0, i.useEffect)(h, m),
    s[13] !== f
      ? ((g = f ?? [a.SYSTEM_DEFAULT_OPTION]), (s[13] = f), (s[14] = g))
      : (g = s[14]),
    g
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(24383 /* vendor/module-24383 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(98479 /* vendor/module-98479 */);
