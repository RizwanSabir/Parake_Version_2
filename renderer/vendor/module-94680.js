// vendor/module-94680.js — webpack module 94680
// params: (e, t) = (module, exports, require)
function n(e, ...t) {
  const n = Object.assign(i(), e);
  for (const e of t)
    for (const t in e) {
      if (t in n && n[t] !== e[t]) throw new Error(`Duplicate key ${t}`);
      n[t] = e[t];
    }
  return n;
}
function r(e) {
  return !!e && !Array.isArray(e) && "object" == typeof e;
}
function o(e) {
  return "function" == typeof e;
}
function i() {
  return Object.create(null);
}
const a = "function" == typeof Symbol && !!Symbol.asyncIterator;
function s(e) {
  return a && r(e) && Symbol.asyncIterator in e;
}
const l = (e) => e();
function c() {}
function u(e) {
  return e;
}
function d(e, t = "no additional info") {
  if (!e) throw new Error(`AssertionError: ${t}`);
}
function p(e = 0) {
  return new Promise((t) => setTimeout(t, e));
}
function f(e) {
  if ("function" == typeof AbortSignal.any) return AbortSignal.any(e);
  const t = new AbortController();
  for (const t of e) {
    if (t.aborted) {
      n();
      break;
    }
    t.addEventListener("abort", n, { once: !0 });
  }
  return t.signal;
  function n() {
    t.abort();
    for (const t of e) t.removeEventListener("abort", n);
  }
}
const h = {
    PARSE_ERROR: -32700,
    BAD_REQUEST: -32600,
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    BAD_GATEWAY: -32603,
    SERVICE_UNAVAILABLE: -32603,
    GATEWAY_TIMEOUT: -32603,
    UNAUTHORIZED: -32001,
    PAYMENT_REQUIRED: -32002,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNSUPPORTED_MEDIA_TYPE: -32015,
    UNPROCESSABLE_CONTENT: -32022,
    PRECONDITION_REQUIRED: -32028,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099,
  },
  m = {
    [-32700]: "PARSE_ERROR",
    [-32600]: "BAD_REQUEST",
    [-32603]: "INTERNAL_SERVER_ERROR",
    [-32001]: "UNAUTHORIZED",
    [-32002]: "PAYMENT_REQUIRED",
    [-32003]: "FORBIDDEN",
    [-32004]: "NOT_FOUND",
    [-32005]: "METHOD_NOT_SUPPORTED",
    [-32008]: "TIMEOUT",
    [-32009]: "CONFLICT",
    [-32012]: "PRECONDITION_FAILED",
    [-32013]: "PAYLOAD_TOO_LARGE",
    [-32015]: "UNSUPPORTED_MEDIA_TYPE",
    [-32022]: "UNPROCESSABLE_CONTENT",
    [-32028]: "PRECONDITION_REQUIRED",
    [-32029]: "TOO_MANY_REQUESTS",
    [-32099]: "CLIENT_CLOSED_REQUEST",
  },
  g = [
    h.BAD_GATEWAY,
    h.SERVICE_UNAVAILABLE,
    h.GATEWAY_TIMEOUT,
    h.INTERNAL_SERVER_ERROR,
  ];
Object.defineProperty(t, "TRPC_ERROR_CODES_BY_KEY", {
  enumerable: !0,
  get: function () {
    return h;
  },
}),
  Object.defineProperty(t, "TRPC_ERROR_CODES_BY_NUMBER", {
    enumerable: !0,
    get: function () {
      return m;
    },
  }),
  Object.defineProperty(t, "abortSignalsAnyPonyfill", {
    enumerable: !0,
    get: function () {
      return f;
    },
  }),
  Object.defineProperty(t, "assert", {
    enumerable: !0,
    get: function () {
      return d;
    },
  }),
  Object.defineProperty(t, "emptyObject", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }),
  Object.defineProperty(t, "identity", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "isAsyncIterable", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(t, "isFunction", {
    enumerable: !0,
    get: function () {
      return o;
    },
  }),
  Object.defineProperty(t, "isObject", {
    enumerable: !0,
    get: function () {
      return r;
    },
  }),
  Object.defineProperty(t, "mergeWithoutOverrides", {
    enumerable: !0,
    get: function () {
      return n;
    },
  }),
  Object.defineProperty(t, "noop", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(t, "retryableRpcCodes", {
    enumerable: !0,
    get: function () {
      return g;
    },
  }),
  Object.defineProperty(t, "run", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(t, "sleep", {
    enumerable: !0,
    get: function () {
      return p;
    },
  });
