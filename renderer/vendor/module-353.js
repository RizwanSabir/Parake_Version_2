// vendor/module-353.js — webpack module 353
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.ServerError = t.Fi = void 0), (t.unwrapErrorMessage = u);
const r = n(42904 /* vendor/module-42904 */),
  o = n(53852 /* vendor/module-53852 */),
  i = "UNAUTHORIZED",
  a = "CALL_SESSION_LOCKED_TO_OTHER_CLIENT",
  s = "CLIENT_UPDATE_REQUIRED",
  l = "DUPLICATE_LEDGER_ENTRY",
  c = "MOCK_POOL_UNAVAILABLE";
function u(e) {
  try {
    const t = JSON.parse(e.message);
    if (t && "string" == typeof t.message) return t.message;
  } catch {}
  return e.message;
}
t.Fi = "Something went wrong. Please try again.";
class d extends r.TRPCError {
  appCode;
  httpStatus;
  constructor(e) {
    const { appCode: t, httpStatus: n, ...r } = e;
    super(r), (this.appCode = t), (this.httpStatus = n);
  }
  static unauthorized() {
    return new d({ code: "UNAUTHORIZED", message: i, appCode: i });
  }
  static callSessionLockedToOtherClient() {
    return new d({ code: "CONFLICT", message: a, appCode: a });
  }
  static clientUpdateRequired() {
    return new d({
      code: "CONFLICT",
      message: s,
      appCode: s,
      httpStatus: 426,
    });
  }
  static insufficientCredits() {
    return new d({
      code: "BAD_REQUEST",
      message: "Not enough call credits.",
      appCode: "INSUFFICIENT_CREDITS",
    });
  }
  static duplicateLedgerEntry() {
    return new d({ code: "CONFLICT", message: l, appCode: l });
  }
  static callSessionEnded() {
    return new d({
      code: "BAD_REQUEST",
      message: "Session already ended",
      appCode: "CALL_SESSION_ENDED",
    });
  }
  static accountSharingHold(e) {
    return new d({
      code: "FORBIDDEN",
      message: e,
      appCode: "ACCOUNT_SHARING_HOLD",
    });
  }
  static uploadLimitReached(e, t) {
    return new d({
      code: "FORBIDDEN",
      message: t,
      appCode: "resume" === e ? "RESUME_UPLOAD_LIMIT" : "DOCUMENT_UPLOAD_LIMIT",
    });
  }
  static mockQuestionPoolUnavailable() {
    return new d({
      code: "SERVICE_UNAVAILABLE",
      message:
        "Tailored mock interviews are temporarily unavailable. You have not been charged.",
      appCode: c,
    });
  }
  static mockQuestionPoolMissing() {
    return new d({
      code: "SERVICE_UNAVAILABLE",
      message:
        "This mock interview's questions are unavailable, so it can't continue.",
      appCode: c,
    });
  }
  static forbidden(e) {
    return new d({
      code: "FORBIDDEN",
      message: e ?? "You don't have permission to do that.",
    });
  }
  static rateLimited(e) {
    return new d({
      code: "TOO_MANY_REQUESTS",
      message: e ?? "Too many requests. Please try again later.",
    });
  }
  static badRequest(e) {
    return new d({
      code: "BAD_REQUEST",
      message: e ?? "Invalid request.",
    });
  }
  static notFound(e) {
    return new d({ code: "NOT_FOUND", message: e ?? "Not found." });
  }
  static conflict(e) {
    return new d({ code: "CONFLICT", message: e ?? "Conflict." });
  }
  static paymentRequired(e) {
    return new d({
      code: "PAYMENT_REQUIRED",
      message: e ?? "Payment required.",
    });
  }
  static methodNotSupported(e) {
    return new d({
      code: "METHOD_NOT_SUPPORTED",
      message: e ?? "Method not supported.",
    });
  }
  static timeout(e) {
    return new d({
      code: "TIMEOUT",
      message: e ?? "Request timed out.",
    });
  }
  static preconditionFailed(e) {
    return new d({
      code: "PRECONDITION_FAILED",
      message: e ?? "Precondition failed.",
    });
  }
  static payloadTooLarge(e) {
    return new d({
      code: "PAYLOAD_TOO_LARGE",
      message: e ?? "Payload too large.",
    });
  }
  static unsupportedMediaType(e) {
    return new d({
      code: "UNSUPPORTED_MEDIA_TYPE",
      message: e ?? "Unsupported media type.",
    });
  }
  static unprocessableContent(e) {
    return new d({
      code: "UNPROCESSABLE_CONTENT",
      message: e ?? "Unprocessable content.",
    });
  }
  static clientClosedRequest(e) {
    return new d({
      code: "CLIENT_CLOSED_REQUEST",
      message: e ?? "Request closed.",
    });
  }
  static internalServerError(e) {
    return new d({
      code: "INTERNAL_SERVER_ERROR",
      message: e ?? t.Fi,
    });
  }
  static notImplemented(e) {
    return new d({
      code: "NOT_IMPLEMENTED",
      message: e ?? "Not implemented.",
    });
  }
  static badGateway(e) {
    return new d({
      code: "BAD_GATEWAY",
      message: e ?? "Bad gateway.",
    });
  }
  static serviceUnavailable(e) {
    return new d({
      code: "SERVICE_UNAVAILABLE",
      message: e ?? "Service unavailable.",
    });
  }
  static gatewayTimeout(e) {
    return new d({
      code: "GATEWAY_TIMEOUT",
      message: e ?? "Gateway timed out.",
    });
  }
  static parseError(e) {
    return new d({
      code: "PARSE_ERROR",
      message: e ?? "Could not parse request.",
    });
  }
  static messageMatchesCode(e, t) {
    return u(e).includes(t);
  }
  static isError(e, t) {
    return (
      e.appCode === t ||
      e.data?.appCode === t ||
      ("string" == typeof e.message &&
        d.messageMatchesCode({ message: e.message }, t))
    );
  }
  static isUnauthorized(e) {
    return d.isError(e, "UNAUTHORIZED");
  }
  static isCallSessionLockedToOtherClient(e) {
    return d.isError(e, "CALL_SESSION_LOCKED_TO_OTHER_CLIENT");
  }
  toResponse() {
    const e = { message: this.message };
    return (
      this.appCode && (e.appCode = this.appCode),
      new Response(JSON.stringify(e), {
        status: this.httpStatus ?? (0, o.getHTTPStatusCodeFromError)(this),
        headers: { "Content-Type": "application/json" },
      })
    );
  }
}
t.ServerError = d;
