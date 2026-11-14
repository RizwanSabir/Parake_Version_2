// vendor/module-80026.js — webpack module 80026
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82954 /* vendor/module-82954 */);
function o(e, t) {
  const n = r.parseStringToURLObject(e);
  return (
    !(!n || r.isURLObjectRelative(n)) &&
    !!t &&
    ((o = n.hostname) === (i = t.host) ||
      (i.length > 0 && o.endsWith(`.${i}`))) &&
    /(^|&|\?)sentry_key=/.test(n.search)
  );
  var o, i;
}
function i(e) {
  return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
}
t.isSentryRequestUrl = function (e, t) {
  const n = t?.getDsn(),
    r = t?.getOptions().tunnel;
  return (
    o(e, n) ||
    (function (e, t) {
      return !!t && i(e) === i(t);
    })(e, r)
  );
};
