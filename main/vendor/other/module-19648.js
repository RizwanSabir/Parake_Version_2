// vendor/other/module-19648.js — webpack module 19648
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e) {
  if (e < 400 && e >= 100) return { code: 1 };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: 2, message: "unauthenticated" };
      case 403:
        return { code: 2, message: "permission_denied" };
      case 404:
        return { code: 2, message: "not_found" };
      case 409:
        return { code: 2, message: "already_exists" };
      case 413:
        return { code: 2, message: "failed_precondition" };
      case 429:
        return { code: 2, message: "resource_exhausted" };
      case 499:
        return { code: 2, message: "cancelled" };
      default:
        return { code: 2, message: "invalid_argument" };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: 2, message: "unimplemented" };
      case 503:
        return { code: 2, message: "unavailable" };
      case 504:
        return { code: 2, message: "deadline_exceeded" };
      default:
        return { code: 2, message: "internal_error" };
    }
  return { code: 2, message: "internal_error" };
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.SPAN_STATUS_ERROR = 2),
  (t.SPAN_STATUS_OK = 1),
  (t.SPAN_STATUS_UNSET = 0),
  (t.getSpanStatusFromHttpCode = n),
  (t.setHttpStatus = function (e, t) {
    e.setAttribute("http.response.status_code", t);
    const r = n(t);
    "unknown_error" !== r.message && e.setStatus(r);
  });
