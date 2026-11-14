// app/components/api-config-provider.js — webpack module 8932
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.ApiConfigProvider = function (e) {
  const t = (0, o.c)(9),
    { children: n } = e,
    [l, c] = (0, i.useState)(a.getDefaultApiConfig),
    [u, d] = (0, i.useState)(!1);
  let p;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((p = async function (e) {
        await window.electron.ipcRendererProxy.invoke(
          "renderer/set-api-config",
          e,
        );
      }),
      (t[0] = p))
    : (p = t[0]);
  const f = p;
  let h;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((h = function (e) {
        c((t) =>
          t.environment === e.environment &&
          t.url === e.url &&
          t.bypassToken === e.bypassToken
            ? t
            : e,
        );
      }),
      (t[1] = h))
    : (h = t[1]);
  const m = h;
  let g, y, v, b;
  return (
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((g = () => {
          window.electron.ipcRendererProxy
            .invoke("renderer/get-api-config")
            .then((e) => {
              m(e), d(!0);
            });
          const e = window.electron.ipcRendererProxy.on(
            "main/api-config-changed",
            m,
          );
          return () => e();
        }),
        (y = []),
        (t[2] = g),
        (t[3] = y))
      : ((g = t[2]), (y = t[3])),
    (0, i.useEffect)(g, y),
    u
      ? (t[4] !== l
          ? ((v = { apiConfig: l, updateApiConfig: f }), (t[4] = l), (t[5] = v))
          : (v = t[5]),
        t[6] !== n || t[7] !== v
          ? ((b = (0, r.jsx)(s.Provider, { value: v, children: n })),
            (t[6] = n),
            (t[7] = v),
            (t[8] = b))
          : (b = t[8]),
        b)
      : null
  );
}),
  (t.useApiConfig = function () {
    const e = (0, i.useContext)(s);
    if (!e)
      throw new Error("useApiConfig must be used within ApiConfigProvider");
    return e;
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(54049 /* app/lib/api-urls */),
  s = (0, i.createContext)(null);
