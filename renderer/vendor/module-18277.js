// vendor/module-18277.js — webpack module 18277
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(4064 /* vendor/module-4064 */),
  i = n(44587 /* vendor/module-44587 */),
  a = (e) => "function" == typeof e;
function s(e) {
  if (e) return e;
  if ("undefined" != typeof window && a(window.fetch)) return window.fetch;
  if ("undefined" != typeof globalThis && a(globalThis.fetch))
    return globalThis.fetch;
  throw new Error("No fetch implementation found");
}
var l = r.__toESM(o.require_objectSpread2(), 1);
function c(e) {
  return {
    url: e.url.toString(),
    fetch: e.fetch,
    transformer: i.getTransformer(e.transformer),
    methodOverride: e.methodOverride,
  };
}
const u = { query: "GET", mutation: "POST", subscription: "PATCH" };
function d(e) {
  return "input" in e
    ? e.transformer.input.serialize(e.input)
    : (function (e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          t[n] = r;
        }
        return t;
      })(e.inputs.map((t) => e.transformer.input.serialize(t)));
}
const p = (e) => {
    const t = e.url.split("?");
    let n = t[0].replace(/\/$/, "") + "/" + e.path;
    const r = [];
    if (
      (t[1] && r.push(t[1]),
      "inputs" in e && r.push("batch=1"),
      "query" === e.type || "subscription" === e.type)
    ) {
      const t = d(e);
      void 0 !== t &&
        "POST" !== e.methodOverride &&
        r.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
    }
    return r.length && (n += "?" + r.join("&")), n;
  },
  f = (e) => {
    if ("query" === e.type && "POST" !== e.methodOverride) return;
    const t = d(e);
    return void 0 !== t ? JSON.stringify(t) : void 0;
  },
  h = (e) =>
    y(
      (0, l.default)(
        (0, l.default)({}, e),
        {},
        {
          contentTypeHeader: "application/json",
          getUrl: p,
          getBody: f,
        },
      ),
    );
var m = class extends Error {
  constructor() {
    const e = "AbortError";
    super(e), (this.name = e), (this.message = e);
  }
};
async function g(e) {
  var t, n;
  ((e) => {
    var t;
    if (null == e ? void 0 : e.aborted) {
      if (
        (null === (t = e.throwIfAborted) || void 0 === t || t.call(e),
        "undefined" != typeof DOMException)
      )
        throw new DOMException("AbortError", "AbortError");
      throw new m();
    }
  })(e.signal);
  const r = e.getUrl(e),
    o = e.getBody(e),
    i = null !== (t = e.methodOverride) && void 0 !== t ? t : u[e.type],
    a = await (async () => {
      const t = await e.headers();
      return Symbol.iterator in t ? Object.fromEntries(t) : t;
    })(),
    c = (0, l.default)(
      (0, l.default)(
        (0, l.default)(
          {},
          e.contentTypeHeader && "GET" !== i
            ? { "content-type": e.contentTypeHeader }
            : {},
        ),
        e.trpcAcceptHeader
          ? {
              [null !== (n = e.trpcAcceptHeaderKey) && void 0 !== n
                ? n
                : "trpc-accept"]: e.trpcAcceptHeader,
            }
          : void 0,
      ),
      a,
    );
  return s(e.fetch)(r, {
    method: i,
    signal: e.signal,
    body: o,
    headers: c,
  });
}
async function y(e) {
  const t = {},
    n = await g(e);
  t.response = n;
  const r = await n.json();
  return (t.responseJSON = r), { json: r, meta: t };
}
Object.defineProperty(t, "fetchHTTPResponse", {
  enumerable: !0,
  get: function () {
    return g;
  },
}),
  Object.defineProperty(t, "getBody", {
    enumerable: !0,
    get: function () {
      return f;
    },
  }),
  Object.defineProperty(t, "getFetch", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(t, "getUrl", {
    enumerable: !0,
    get: function () {
      return p;
    },
  }),
  Object.defineProperty(t, "httpRequest", {
    enumerable: !0,
    get: function () {
      return y;
    },
  }),
  Object.defineProperty(t, "jsonHttpRequester", {
    enumerable: !0,
    get: function () {
      return h;
    },
  }),
  Object.defineProperty(t, "resolveHTTPLinkOptions", {
    enumerable: !0,
    get: function () {
      return c;
    },
  });
