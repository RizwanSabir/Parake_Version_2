// vendor/other/module-81731.js — webpack module 81731
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(48420 /* vendor/other/module-48420 */),
  i = n(60467 /* vendor/other/module-60467 */),
  s = {};
function a(e) {
  const t = s[e];
  if (t) return t;
  let n = i.WINDOW[e];
  if (r.isNativeFunction(n)) return (s[e] = n.bind(i.WINDOW));
  const a = i.WINDOW.document;
  if (a && "function" == typeof a.createElement)
    try {
      const t = a.createElement("iframe");
      (t.hidden = !0), a.head.appendChild(t);
      const r = t.contentWindow;
      r?.[e] && (n = r[e]), a.head.removeChild(t);
    } catch (t) {
      o.DEBUG_BUILD &&
        r.debug.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          t,
        );
    }
  return n ? (s[e] = n.bind(i.WINDOW)) : n;
}
(t.clearCachedImplementation = function (e) {
  s[e] = void 0;
}),
  (t.fetch = function (...e) {
    return a("fetch")(...e);
  }),
  (t.getNativeImplementation = a),
  (t.setTimeout = function (...e) {
    return a("setTimeout")(...e);
  });
