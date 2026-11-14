// vendor/module-59295.js — webpack module 59295
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(4064 /* vendor/module-4064 */),
  i = r.__toESM(n(35e3));
var a = r.__toESM(o.require_defineProperty(), 1),
  s = r.__toESM(o.require_objectSpread2(), 1);
function l(e) {
  return e instanceof c;
}
var c = class e extends Error {
  constructor(t, n) {
    var r, o;
    const i = null == n ? void 0 : n.cause;
    super(t, { cause: i }),
      (0, a.default)(this, "cause", void 0),
      (0, a.default)(this, "shape", void 0),
      (0, a.default)(this, "data", void 0),
      (0, a.default)(this, "meta", void 0),
      (this.meta = null == n ? void 0 : n.meta),
      (this.cause = i),
      (this.shape =
        null == n || null === (r = n.result) || void 0 === r
          ? void 0
          : r.error),
      (this.data =
        null == n || null === (o = n.result) || void 0 === o
          ? void 0
          : o.error.data),
      (this.name = "TRPCClientError"),
      Object.setPrototypeOf(this, e.prototype);
  }
  static from(t, n = {}) {
    const r = t;
    return l(r)
      ? (n.meta &&
          (r.meta = (0, s.default)((0, s.default)({}, r.meta), n.meta)),
        r)
      : ((o = r),
        (0, i.isObject)(o) &&
        (0, i.isObject)(o.error) &&
        "number" == typeof o.error.code &&
        "string" == typeof o.error.message
          ? new e(
              r.error.message,
              (0, s.default)(
                (0, s.default)({}, n),
                {},
                { result: r, cause: n.cause },
              ),
            )
          : new e(
              "string" == typeof (a = r)
                ? a
                : (0, i.isObject)(a) && "string" == typeof a.message
                  ? a.message
                  : "Unknown error",
              (0, s.default)((0, s.default)({}, n), {}, { cause: r }),
            ));
    var o, a;
  }
};
Object.defineProperty(t, "TRPCClientError", {
  enumerable: !0,
  get: function () {
    return c;
  },
}),
  Object.defineProperty(t, "isTRPCClientError", {
    enumerable: !0,
    get: function () {
      return l;
    },
  });
