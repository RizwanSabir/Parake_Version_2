// vendor/module-45284.js — webpack module 45284
// params: (e, t, n) = (module, exports, require)
var r = Object.create,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.getPrototypeOf,
  l = Object.prototype.hasOwnProperty,
  c = (e, t) =>
    function () {
      return t || (0, e[a(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  u = (e, t, n) => (
    (n = null != e ? r(s(e)) : {}),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (var s, c = a(t), u = 0, d = c.length; u < d; u++)
          (s = c[u]),
            l.call(e, s) ||
              void 0 === s ||
              o(e, s, {
                get: ((e) => t[e]).bind(null, s),
                enumerable: !(r = i(t, s)) || r.enumerable,
              });
      return e;
    })(
      !t && e && e.__esModule
        ? n
        : o(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  );
const d = n(94680 /* vendor/module-94680 */),
  p = () => {},
  f = (e) => {
    Object.freeze && Object.freeze(e);
  };
function h(e, t, n) {
  var r;
  const o = t.join(".");
  return (
    (null !== (r = n[o]) && void 0 !== r) ||
      (n[o] = new Proxy(p, {
        get(r, o) {
          if ("string" == typeof o && "then" !== o) return h(e, [...t, o], n);
        },
        apply(n, r, o) {
          const i = t[t.length - 1];
          if ("valueOf" === i || "toString" === i || "toJSON" === i)
            return `tRPC.proxy(${t.slice(0, -1).join(".")})`;
          let a = { args: o, path: t };
          return (
            "call" === i
              ? (a = {
                  args: o.length >= 2 ? [o[1]] : [],
                  path: t.slice(0, -1),
                })
              : "apply" === i &&
                (a = {
                  args: o.length >= 2 ? o[1] : [],
                  path: t.slice(0, -1),
                }),
            f(a.args),
            f(a.path),
            e(a)
          );
        },
      })),
    n[o]
  );
}
const m = (e) => h(e, [], d.emptyObject()),
  g = (e) =>
    new Proxy(p, {
      get(t, n) {
        if ("then" !== n) return e(n);
      },
    }),
  y = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
    UNPROCESSABLE_CONTENT: 422,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
  },
  v = {
    400: "BAD_REQUEST",
    401: "UNAUTHORIZED",
    402: "PAYMENT_REQUIRED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    405: "METHOD_NOT_SUPPORTED",
    408: "TIMEOUT",
    409: "CONFLICT",
    412: "PRECONDITION_FAILED",
    413: "PAYLOAD_TOO_LARGE",
    415: "UNSUPPORTED_MEDIA_TYPE",
    422: "UNPROCESSABLE_CONTENT",
    428: "PRECONDITION_REQUIRED",
    429: "TOO_MANY_REQUESTS",
    499: "CLIENT_CLOSED_REQUEST",
    500: "INTERNAL_SERVER_ERROR",
    501: "NOT_IMPLEMENTED",
    502: "BAD_GATEWAY",
    503: "SERVICE_UNAVAILABLE",
    504: "GATEWAY_TIMEOUT",
  };
function b(e) {
  var t;
  return null !== (t = y[e]) && void 0 !== t ? t : 500;
}
function S(e) {
  var t;
  return null !== (t = v[e]) && void 0 !== t ? t : "INTERNAL_SERVER_ERROR";
}
function _(e) {
  const t = Array.isArray(e) ? e : [e],
    n = new Set(
      t.map((e) => {
        var t;
        return "error" in e && d.isObject(e.error.data)
          ? "number" ==
            typeof (null === (t = e.error.data) || void 0 === t
              ? void 0
              : t.httpStatus)
            ? e.error.data.httpStatus
            : b(d.TRPC_ERROR_CODES_BY_NUMBER[e.error.code])
          : 200;
      }),
    );
  return 1 !== n.size ? 207 : n.values().next().value;
}
function x(e) {
  return b(e.code);
}
var w = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(
      e,
      t,
    ) {
      function n(e) {
        return (
          (t.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  E = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(
      e,
      t,
    ) {
      var n = w().default;
      (t.exports = function (e, t) {
        if ("object" != n(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, t || "default");
          if ("object" != n(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  T = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(
      e,
      t,
    ) {
      var n = w().default,
        r = E();
      (t.exports = function (e) {
        var t = r(e, "string");
        return "symbol" == n(t) ? t : t + "";
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  k = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(
      e,
      t,
    ) {
      var n = T();
      (t.exports = function (e, t, r) {
        return (
          (t = n(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  C = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(
      e,
      t,
    ) {
      var n = k();
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (t.exports = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(o), !0).forEach(function (t) {
                n(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : r(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  I = u(C(), 1);
function A(e) {
  const { path: t, error: n, config: r } = e,
    { code: o } = e.error,
    i = {
      message: n.message,
      code: d.TRPC_ERROR_CODES_BY_KEY[o],
      data: { code: o, httpStatus: x(n) },
    };
  return (
    r.isDev &&
      "string" == typeof e.error.stack &&
      (i.data.stack = e.error.stack),
    "string" == typeof t && (i.data.path = t),
    r.errorFormatter((0, I.default)((0, I.default)({}, e), {}, { shape: i }))
  );
}
Object.defineProperty(t, "HTTP_CODE_TO_JSONRPC2", {
  enumerable: !0,
  get: function () {
    return v;
  },
}),
  Object.defineProperty(t, "JSONRPC2_TO_HTTP_CODE", {
    enumerable: !0,
    get: function () {
      return y;
    },
  }),
  Object.defineProperty(t, "__commonJS", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(t, "__toESM", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "createFlatProxy", {
    enumerable: !0,
    get: function () {
      return g;
    },
  }),
  Object.defineProperty(t, "createRecursiveProxy", {
    enumerable: !0,
    get: function () {
      return m;
    },
  }),
  Object.defineProperty(t, "getErrorShape", {
    enumerable: !0,
    get: function () {
      return A;
    },
  }),
  Object.defineProperty(t, "getHTTPStatusCode", {
    enumerable: !0,
    get: function () {
      return _;
    },
  }),
  Object.defineProperty(t, "getHTTPStatusCodeFromError", {
    enumerable: !0,
    get: function () {
      return x;
    },
  }),
  Object.defineProperty(t, "getStatusCodeFromKey", {
    enumerable: !0,
    get: function () {
      return b;
    },
  }),
  Object.defineProperty(t, "getStatusKeyFromCode", {
    enumerable: !0,
    get: function () {
      return S;
    },
  }),
  Object.defineProperty(t, "require_defineProperty", {
    enumerable: !0,
    get: function () {
      return k;
    },
  }),
  Object.defineProperty(t, "require_objectSpread2", {
    enumerable: !0,
    get: function () {
      return C;
    },
  });
