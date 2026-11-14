// vendor/other/module-12099.js — webpack module 12099
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(27352 /* vendor/other/module-27352 */).GLOBAL_OBJ,
  s = a;
function a() {
  if (!("fetch" in i)) return !1;
  try {
    return new Headers(), new Request("data:,"), new Response(), !0;
  } catch {
    return !1;
  }
}
function c(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
(t.isNativeFunction = c),
  (t.supportsDOMError = function () {
    try {
      return new DOMError(""), !0;
    } catch {
      return !1;
    }
  }),
  (t.supportsDOMException = function () {
    try {
      return new DOMException(""), !0;
    } catch {
      return !1;
    }
  }),
  (t.supportsErrorEvent = function () {
    try {
      return new ErrorEvent(""), !0;
    } catch {
      return !1;
    }
  }),
  (t.supportsFetch = s),
  (t.supportsHistory = function () {
    return "history" in i && !!i.history;
  }),
  (t.supportsNativeFetch = function () {
    if ("string" == typeof EdgeRuntime) return !0;
    if (!a()) return !1;
    if (c(i.fetch)) return !0;
    let e = !1;
    const t = i.document;
    if (t && "function" == typeof t.createElement)
      try {
        const n = t.createElement("iframe");
        (n.hidden = !0),
          t.head.appendChild(n),
          n.contentWindow?.fetch && (e = c(n.contentWindow.fetch)),
          t.head.removeChild(n);
      } catch (e) {
        r.DEBUG_BUILD &&
          o.debug.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            e,
          );
      }
    return e;
  }),
  (t.supportsReferrerPolicy = function () {
    if (!a()) return !1;
    try {
      return new Request("_", { referrerPolicy: "origin" }), !0;
    } catch {
      return !1;
    }
  }),
  (t.supportsReportingObserver = function () {
    return "ReportingObserver" in i;
  });
