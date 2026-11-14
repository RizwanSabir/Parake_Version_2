// app/components/trpcreact-provider.js — webpack module 46998
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.api = void 0),
  (t.TRPCReactProvider = function (e) {
    const t = (0, i.c)(12);
    let n;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((n =
          "undefined" == typeof window
            ? (0, h.createQueryClient)()
            : (m ??= (0, h.createQueryClient)())),
        (t[0] = n))
      : (n = t[0]);
    const r = n,
      { apiConfig: f } = (0, d.useApiConfig)(),
      v = (0, l.useRef)(f.url);
    let b, S, _;
    t[1] !== f.url
      ? ((b = () => {
          v.current !== f.url && ((v.current = f.url), r.clear());
        }),
        (S = [f.url, r]),
        (t[1] = f.url),
        (t[2] = b),
        (t[3] = S))
      : ((b = t[2]), (S = t[3])),
      (0, l.useEffect)(b, S),
      t[4] !== f.url
        ? ((_ = u.api.createClient({
            links: [
              (0, s.loggerLink)({ enabled: y }),
              (0, s.httpBatchLink)({
                transformer: c.default,
                url: `${f.url}/api/trpc`,
                maxURLLength: 4e3,
                headers: g,
                async fetch(e, t) {
                  const n = await (0, p.desktopFetch)(e, t),
                    r = n.headers.get("content-type");
                  if (r?.includes("text/html"))
                    throw new Error(
                      "Invalid bypass token. Please update it in API Environment settings.",
                    );
                  return n;
                },
              }),
            ],
          })),
          (t[4] = f.url),
          (t[5] = _))
        : (_ = t[5]);
    const x = _;
    let w, E;
    return (
      t[6] !== e.children || t[7] !== x
        ? ((w = (0, o.jsx)(u.api.Provider, {
            client: x,
            queryClient: r,
            children: e.children,
          })),
          (t[6] = e.children),
          (t[7] = x),
          (t[8] = w))
        : (w = t[8]),
      t[9] !== f.url || t[10] !== w
        ? ((E = (0, o.jsx)(
            a.QueryClientProvider,
            { client: r, children: w },
            f.url,
          )),
          (t[9] = f.url),
          (t[10] = w),
          (t[11] = E))
        : (E = t[11]),
      E
    );
  });
const o = n(31085 /* vendor/module-31085 */),
  i = n(54005 /* vendor/module-54005 */),
  a = n(24383 /* vendor/module-24383 */),
  s = n(21692 /* vendor/module-21692 */),
  l = n(14041 /* vendor/module-14041 */),
  c = r(n(87639 /* vendor/module-87639 */)),
  u = n(44189 /* vendor/module-44189 */);
Object.defineProperty(t, "api", {
  enumerable: !0,
  get: function () {
    return u.api;
  },
});
const d = n(8932 /* app/components/api-config-provider */),
  p = n(33445 /* app/lib/desktop-fetch */),
  f = n(34916 /* app/lib/get-os-data */),
  h = n(83169 /* app/lib/create-query-client */);
let m;
async function g() {
  return {
    "x-parakeet-request-source": "desktop-trpc",
    ...(await (0, f.getDesktopClientHeaders)()),
  };
}
function y(e) {
  return "down" === e.direction && e.result instanceof Error;
}
