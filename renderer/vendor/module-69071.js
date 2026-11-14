// vendor/module-69071.js — webpack module 69071
// params: (e, t, n) = (module, exports, require)
t.useAdminDebugMode = function (e) {
  const t = (0, r.c)(7),
    [n, l] = (0, o.useState)(!1);
  let c, u, d;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((c = () => {
        l(s());
        const e = () => l(s());
        return (
          window.addEventListener(a, e),
          window.addEventListener("storage", e),
          () => {
            window.removeEventListener(a, e),
              window.removeEventListener("storage", e);
          }
        );
      }),
      (u = []),
      (t[0] = c),
      (t[1] = u))
    : ((c = t[0]), (u = t[1])),
    (0, o.useEffect)(c, u),
    t[2] !== e
      ? ((d = (t) => {
          e &&
            (window.localStorage.setItem(i, t ? "1" : "0"),
            l(t),
            window.dispatchEvent(new Event(a)));
        }),
        (t[2] = e),
        (t[3] = d))
      : (d = t[3]);
  const p = d,
    f = !!e && n;
  let h;
  return (
    t[4] !== f || t[5] !== p
      ? ((h = { debugMode: f, setDebugMode: p }),
        (t[4] = f),
        (t[5] = p),
        (t[6] = h))
      : (h = t[6]),
    h
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = "adminDebugMode",
  a = "adminDebugMode:change";
function s() {
  return "undefined" != typeof window && "1" === window.localStorage.getItem(i);
}
