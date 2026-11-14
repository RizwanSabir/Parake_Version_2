// vendor/module-45104.js — webpack module 45104
// params: (e, t, n) = (module, exports, require)
const r = n(94680 /* vendor/module-94680 */),
  o = ["query", "mutation", "subscription"];
function i(e) {
  if (!r.isObject(e)) throw new Error("Not an object");
}
function a(e) {
  if ("string" != typeof e) throw new Error("Invalid string");
}
function s(e, t) {
  i(e);
  const { id: n, jsonrpc: r, method: s, params: l } = e;
  if (
    ((function (e) {
      if (
        null !== e &&
        "number" == typeof e &&
        isNaN(e) &&
        "string" != typeof e
      )
        throw new Error("Invalid request id");
    })(n),
    (function (e) {
      if (void 0 !== e && "2.0" !== e) throw new Error("Must be JSONRPC 2.0");
    })(r),
    "subscription.stop" === s)
  )
    return { id: n, jsonrpc: r, method: s };
  !(function (e) {
    if (!o.includes(e)) throw new Error("Invalid procedure type");
  })(s),
    i(l);
  const { input: c, path: u, lastEventId: d } = l;
  return (
    a(u),
    void 0 !== d && a(d),
    {
      id: n,
      jsonrpc: r,
      method: s,
      params: {
        input: t.input.deserialize(c),
        path: u,
        lastEventId: d,
      },
    }
  );
}
Object.defineProperty(t, "parseTRPCMessage", {
  enumerable: !0,
  get: function () {
    return s;
  },
}),
  Object.defineProperty(t, "procedureTypes", {
    enumerable: !0,
    get: function () {
      return o;
    },
  });
