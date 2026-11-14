// vendor/other/module-31079.js — webpack module 31079
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58119 /* vendor/other/module-58119 */),
  o = n(76443 /* vendor/other/module-76443 */),
  i = n(75122 /* vendor/other/module-75122 */);
function s(e) {
  return e.includes(":") || e.includes("*");
}
const a = (e, t) => {
    const n = Array.isArray(t.handle?.stack) ? t.handle?.stack?.[0] : void 0;
    return n?.route?.path
      ? `${e}${n.route.path}`
      : n && Array.isArray(n?.handle?.stack)
        ? a(e, n)
        : e;
  },
  c = (e) =>
    "string" == typeof e
      ? e
      : e instanceof RegExp || "number" == typeof e
        ? String(e)
        : void 0,
  u = (e) => l(e?.Router?.prototype),
  l = (e) =>
    ("object" == typeof e || "function" == typeof e) &&
    !!e &&
    "route" in e &&
    "function" == typeof e.route;
(t.asErrorAndMessage = (e) =>
  e instanceof Error ? [e, e.message] : [String(e), String(e)]),
  (t.defaultShouldHandleError = function (e) {
    return (
      (function (e) {
        const t =
          e.status || e.statusCode || e.status_code || e.output?.statusCode;
        return t ? parseInt(t, 10) : 500;
      })(e) >= 500
    );
  }),
  (t.getActualMatchedRoute = function (e, t) {
    const n = r.getStoredLayers(e);
    if (0 === n.length) return;
    if (n.every((e) => "/" === e)) return "/" === e.originalUrl ? "/" : void 0;
    if ("*" === t) return t;
    if (
      t.includes("/") &&
      (t.includes(",") ||
        t.includes("\\") ||
        t.includes("*") ||
        t.includes("["))
    )
      return t;
    const o = t.startsWith("/") ? t : `/${t}`;
    return o.length > 0 &&
      (e.originalUrl === o || e.originalUrl.startsWith(o) || s(o))
      ? o
      : void 0;
  }),
  (t.getConstructedRoute = function (e) {
    const t = r.getStoredLayers(e);
    let n = "";
    for (const e of t)
      "/" !== e && "/*" !== e && (n += !n || n.endsWith("/") ? e : `/${e}`);
    return n.replace(/\/{2,}/g, "/");
  }),
  (t.getLayerMetadata = (e, t, n) => {
    if ("router" === t.name) {
      const r = a("", t) || n || e || "/";
      return {
        attributes: {
          [o.ATTR_EXPRESS_NAME]: r,
          [o.ATTR_EXPRESS_TYPE]: o.ExpressLayerType_ROUTER,
        },
        name: `router - ${r}`,
      };
    }
    return "bound dispatch" === t.name || "handle" === t.name
      ? {
          attributes: {
            [o.ATTR_EXPRESS_NAME]: (e || n) ?? "request handler",
            [o.ATTR_EXPRESS_TYPE]: o.ExpressLayerType_REQUEST_HANDLER,
          },
          name: "request handler" + (t.path ? ` - ${e || n}` : ""),
        }
      : {
          attributes: {
            [o.ATTR_EXPRESS_NAME]: t.name,
            [o.ATTR_EXPRESS_TYPE]: o.ExpressLayerType_MIDDLEWARE,
          },
          name: `middleware - ${t.name}`,
        };
  }),
  (t.getLayerPath = (e) => {
    const t = e[0];
    return Array.isArray(t) ? t.map((e) => c(e) || "").join(",") : c(t);
  }),
  (t.getRouterPath = a),
  (t.isExpressWithRouterPrototype = u),
  (t.isExpressWithoutRouterPrototype = (e) => l(e.Router) && !u(e)),
  (t.isLayerIgnored = (e, t, n) => {
    if (Array.isArray(n?.ignoreLayersType) && n?.ignoreLayersType?.includes(t))
      return !0;
    if (!Array.isArray(n?.ignoreLayers)) return !1;
    try {
      return i.stringMatchesSomePattern(e, n.ignoreLayers, !0);
    } catch {}
    return !1;
  }),
  (t.isRoutePattern = s);
