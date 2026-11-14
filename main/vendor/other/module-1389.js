// vendor/other/module-1389.js — webpack module 1389
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(66591 /* vendor/other/module-66591 */),
  i = n(97169 /* vendor/other/module-97169 */),
  s = (e) => "string" == typeof e && o.HapiLifecycleMethodNames.has(e);
(t.getExtMetadata = (e, t, n) => {
  let r = `ext - ${e}`;
  return (
    n && "method" !== n && (r = `ext - ${e} - ${n}`),
    t
      ? {
          attributes: {
            [i.AttributeNames.EXT_TYPE]: e,
            [i.AttributeNames.HAPI_TYPE]: o.HapiLayerType.EXT,
            [i.AttributeNames.PLUGIN_NAME]: t,
          },
          name: `${t}: ${r}`,
        }
      : {
          attributes: {
            [i.AttributeNames.EXT_TYPE]: e,
            [i.AttributeNames.HAPI_TYPE]: o.HapiLayerType.EXT,
          },
          name: r,
        }
  );
}),
  (t.getPluginFromInput = (e) =>
    "plugin" in e ? ("plugin" in e.plugin ? e.plugin.plugin : e.plugin) : e),
  (t.getPluginName = function (e) {
    return e.name ? e.name : e.pkg.name;
  }),
  (t.getRouteMetadata = (e, t) => {
    const n = { [r.HTTP_ROUTE]: e.path, [r.HTTP_METHOD]: e.method };
    let s;
    return (
      t
        ? ((n[i.AttributeNames.HAPI_TYPE] = o.HapiLayerType.PLUGIN),
          (n[i.AttributeNames.PLUGIN_NAME] = t),
          (s = `${t}: route - ${e.path}`))
        : ((n[i.AttributeNames.HAPI_TYPE] = o.HapiLayerType.ROUTER),
          (s = `route - ${e.path}`)),
      { attributes: n, name: s }
    );
  }),
  (t.isDirectExtInput = (e) =>
    Array.isArray(e) && e.length <= 3 && s(e[0]) && "function" == typeof e[1]),
  (t.isLifecycleExtEventObj = (e) => {
    const t = e?.type;
    return void 0 !== t && s(t);
  }),
  (t.isLifecycleExtType = s),
  (t.isPatchableExtMethod = (e) => !Array.isArray(e));
