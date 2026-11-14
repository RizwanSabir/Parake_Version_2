// vendor/other/module-66774.js — webpack module 66774
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(92202 /* vendor/other/module-92202 */),
  o = n(75228 /* vendor/other/module-75228 */),
  i = n(88516 /* vendor/other/module-88516 */);
(t.getMiddlewareMetadata = (e, t, n, s) =>
  n
    ? {
        attributes: {
          [o.AttributeNames.KOA_NAME]: s?.toString(),
          [o.AttributeNames.KOA_TYPE]: r.KoaLayerType.ROUTER,
          [i.HTTP_ROUTE]: s?.toString(),
        },
        name: e._matchedRouteName || `router - ${s}`,
      }
    : {
        attributes: {
          [o.AttributeNames.KOA_NAME]: t.name ?? "middleware",
          [o.AttributeNames.KOA_TYPE]: r.KoaLayerType.MIDDLEWARE,
          [i.CODE_FUNCTION_NAME]: t.name ?? "middleware",
        },
        name: `middleware - ${t.name}`,
      }),
  (t.isLayerIgnored = (e, t) =>
    !(
      !Array.isArray(t?.ignoreLayersType) || !t?.ignoreLayersType?.includes(e)
    ));
