// vendor/module-81731.js — webpack module 81731
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(48420 /* vendor/module-48420 */),
  i = n(60467 /* vendor/module-60467 */),
  a = {};
function s(e) {
  const t = a[e];
  if (t) return t;
  let n = i.WINDOW[e];
  if (r.isNativeFunction(n)) return (a[e] = n.bind(i.WINDOW));
  const s = i.WINDOW.document;
  if (s && "function" == typeof s.createElement)
    try {
      const t = s.createElement("iframe");
      (t.hidden = !0), s.head.appendChild(t);
      const r = t.contentWindow;
      r?.[e] && (n = r[e]), s.head.removeChild(t);
    } catch (t) {
      o.DEBUG_BUILD &&
        r.debug.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          t,
        );
    }
  return n ? (a[e] = n.bind(i.WINDOW)) : n;
}
(t.clearCachedImplementation = function (e) {
  a[e] = void 0;
}),
  (t.fetch = function (...e) {
    return s("fetch")(...e);
  }),
  (t.getNativeImplementation = s),
  (t.setTimeout = function (...e) {
    return s("setTimeout")(...e);
  });
