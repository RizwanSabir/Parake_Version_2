// vendor/other/module-54055.js — webpack module 54055
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(48420 /* vendor/other/module-48420 */),
  i = Symbol.for("sentry__originalRequestBody");
function s(e) {
  return new URLSearchParams(e).toString();
}
(t.ORIGINAL_REQ_BODY = i),
  (t.getBodyString = function (e, t = r.debug) {
    try {
      if ("string" == typeof e) return [e];
      if (e instanceof URLSearchParams) return [e.toString()];
      if (e instanceof FormData) return [s(e)];
      if (!e) return [void 0];
    } catch (n) {
      return (
        o.DEBUG_BUILD && t.error(n, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
      );
    }
    return (
      o.DEBUG_BUILD && t.log("Skipping network body because of body type", e),
      [void 0, "UNPARSEABLE_BODY_TYPE"]
    );
  }),
  (t.getFetchRequestArgBody = function (e = []) {
    if (e.length >= 2 && e[1] && "object" == typeof e[1] && "body" in e[1])
      return e[1].body;
    if (e.length >= 1 && e[0] instanceof Request) {
      const t = e[0][i];
      return void 0 !== t ? t : void 0;
    }
  }),
  (t.parseXhrResponseHeaders = function (e) {
    let t;
    try {
      t = e.getAllResponseHeaders();
    } catch (t) {
      return (
        o.DEBUG_BUILD &&
          r.debug.error(t, "Failed to get xhr response headers", e),
        {}
      );
    }
    return t
      ? t.split("\r\n").reduce((e, t) => {
          const [n, r] = t.split(": ");
          return r && (e[n.toLowerCase()] = r), e;
        }, {})
      : {};
  }),
  (t.serializeFormData = s);
