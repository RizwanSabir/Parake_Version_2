// vendor/module-12099.js — webpack module 12099
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(27352 /* vendor/module-27352 */).GLOBAL_OBJ,
  a = s;
function s() {
  if (!("fetch" in i)) return !1;
  try {
    return new Headers(), new Request("data:,"), new Response(), !0;
  } catch {
    return !1;
  }
}
function l(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
(t.isNativeFunction = l),
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
  (t.supportsFetch = a),
  (t.supportsHistory = function () {
    return "history" in i && !!i.history;
  }),
  (t.supportsNativeFetch = function () {
    if ("string" == typeof EdgeRuntime) return !0;
    if (!s()) return !1;
    if (l(i.fetch)) return !0;
    let e = !1;
    const t = i.document;
    if (t && "function" == typeof t.createElement)
      try {
        const n = t.createElement("iframe");
        (n.hidden = !0),
          t.head.appendChild(n),
          n.contentWindow?.fetch && (e = l(n.contentWindow.fetch)),
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
    if (!s()) return !1;
    try {
      return new Request("_", { referrerPolicy: "origin" }), !0;
    } catch {
      return !1;
    }
  }),
  (t.supportsReportingObserver = function () {
    return "ReportingObserver" in i;
  });
