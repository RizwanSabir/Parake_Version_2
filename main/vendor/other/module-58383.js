// vendor/other/module-58383.js — webpack module 58383
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(75569 /* vendor/other/module-75569 */),
  i = n(15280 /* vendor/other/module-15280 */);
(t.addNewStackLayer = (e) => {
  !1 === Array.isArray(e[o._LAYERS_STORE_PROPERTY]) &&
    Object.defineProperty(e, o._LAYERS_STORE_PROPERTY, {
      enumerable: !1,
      value: [],
    }),
    e[o._LAYERS_STORE_PROPERTY].push("/");
  const t = e[o._LAYERS_STORE_PROPERTY].length;
  return () => {
    t === e[o._LAYERS_STORE_PROPERTY].length
      ? e[o._LAYERS_STORE_PROPERTY].pop()
      : i.DEBUG_BUILD &&
        r.debug.warn("Connect: Trying to pop the stack multiple time");
  };
}),
  (t.generateRoute = (e) =>
    e[o._LAYERS_STORE_PROPERTY].reduce((e, t) => e.replace(/\/+$/, "") + t)),
  (t.replaceCurrentStackRoute = (e, t) => {
    t && e[o._LAYERS_STORE_PROPERTY].splice(-1, 1, t);
  });
