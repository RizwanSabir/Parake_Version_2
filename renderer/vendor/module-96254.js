// vendor/module-96254.js — webpack module 96254
// params: (e, t, n) = (module, exports, require)
const r = n(45284 /* vendor/module-45284 */),
  o = n(94680 /* vendor/module-94680 */),
  i = n(18898 /* vendor/module-18898 */),
  a = n(50557 /* vendor/module-50557 */);
function s(e) {
  try {
    if (null === e) return null;
    if (!o.isObject(e)) throw new Error("Expected object");
    const t = Object.entries(e).filter(([e, t]) => "string" != typeof t);
    if (t.length > 0)
      throw new Error(
        `Expected connectionParams to be string values. Got ${t.map(([e, t]) => `${e}: ${typeof t}`).join(", ")}`,
      );
    return e;
  } catch (e) {
    throw new i.TRPCError({
      code: "PARSE_ERROR",
      message: "Invalid connection params shape",
      cause: e,
    });
  }
}
function l(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch (e) {
    throw new i.TRPCError({
      code: "PARSE_ERROR",
      message: "Not JSON-parsable query params",
      cause: e,
    });
  }
  return s(t);
}
var c = r.__toESM(r.require_objectSpread2(), 1);
function u(e) {
  var t, n;
  return null !== (t = e.get("trpc-accept")) && void 0 !== t
    ? t
    : (
          null === (n = e.get("accept")) || void 0 === n
            ? void 0
            : n.split(",").some((e) => "application/jsonl" === e.trim())
        )
      ? "application/jsonl"
      : null;
}
function d(e) {
  let t = null;
  const n = Symbol.for("@trpc/server/http/memo");
  let r = n;
  return {
    read: async () => {
      var o;
      return (
        r !== n ||
          ((null !== (o = t) && void 0 !== o) ||
            (t = e().catch((e) => {
              if (e instanceof i.TRPCError) throw e;
              throw new i.TRPCError({
                code: "BAD_REQUEST",
                message: e instanceof Error ? e.message : "Invalid input",
                cause: e,
              });
            })),
          (r = await t),
          (t = null)),
        r
      );
    },
    result: () => (r !== n ? r : void 0),
  };
}
const p = {
    isMatch(e) {
      var t;
      return !!(null === (t = e.headers.get("content-type")) || void 0 === t
        ? void 0
        : t.startsWith("application/json"));
    },
    async parse(e) {
      var t;
      const { req: n } = e,
        r = "1" === e.searchParams.get("batch"),
        a = e.maxBatchSize,
        s = r ? e.path.split(",") : [e.path];
      if (r && "number" == typeof a && s.length > a)
        throw new i.TRPCError({
          code: "BAD_REQUEST",
          message: "Batch call exceeds maximum size",
        });
      const p = d(async () => {
          let t;
          if ("GET" === n.method) {
            const n = e.searchParams.get("input");
            n && (t = JSON.parse(n));
          } else t = await n.json();
          if (void 0 === t) return o.emptyObject();
          if (!r) {
            const n = o.emptyObject();
            return (
              (n[0] = e.router._def._config.transformer.input.deserialize(t)), n
            );
          }
          if (!o.isObject(t))
            throw new i.TRPCError({
              code: "BAD_REQUEST",
              message: '"input" needs to be an object when doing a batch call',
            });
          const a = o.emptyObject();
          for (const n of s.keys()) {
            const r = t[n];
            void 0 !== r &&
              (a[n] = e.router._def._config.transformer.input.deserialize(r));
          }
          return a;
        }),
        f = await Promise.all(
          s.map(async (t, n) => {
            const r = await i.getProcedureAtPath(e.router, t);
            return {
              batchIndex: n,
              path: t,
              procedure: r,
              getRawInput: async () => {
                let t = (await p.read())[n];
                if ("subscription" === (null == r ? void 0 : r._def.type)) {
                  var i, a;
                  const n =
                    null !==
                      (i =
                        null !== (a = e.headers.get("last-event-id")) &&
                        void 0 !== a
                          ? a
                          : e.searchParams.get("lastEventId")) && void 0 !== i
                      ? i
                      : e.searchParams.get("Last-Event-Id");
                  if (n)
                    if (o.isObject(t))
                      t = (0, c.default)(
                        (0, c.default)({}, t),
                        {},
                        { lastEventId: n },
                      );
                    else {
                      var s;
                      (null !== (s = t) && void 0 !== s) ||
                        (t = { lastEventId: n });
                    }
                }
                return t;
              },
              result: () => {
                var e;
                return null === (e = p.result()) || void 0 === e
                  ? void 0
                  : e[n];
              },
            };
          }),
        ),
        h = new Set(
          f
            .map((e) => {
              var t;
              return null === (t = e.procedure) || void 0 === t
                ? void 0
                : t._def.type;
            })
            .filter(Boolean),
        );
      if (h.size > 1)
        throw new i.TRPCError({
          code: "BAD_REQUEST",
          message: `Cannot mix procedure types in call: ${Array.from(h).join(", ")}`,
        });
      const m =
          null !== (t = h.values().next().value) && void 0 !== t
            ? t
            : "unknown",
        g = e.searchParams.get("connectionParams");
      return {
        isBatchCall: r,
        accept: u(n.headers),
        calls: f,
        type: m,
        connectionParams: null === g ? null : l(g),
        signal: n.signal,
        url: e.url,
      };
    },
  },
  f = [
    p,
    {
      isMatch(e) {
        var t;
        return !!(null === (t = e.headers.get("content-type")) || void 0 === t
          ? void 0
          : t.startsWith("multipart/form-data"));
      },
      async parse(e) {
        const { req: t } = e;
        if ("POST" !== t.method)
          throw new i.TRPCError({
            code: "METHOD_NOT_SUPPORTED",
            message:
              "Only POST requests are supported for multipart/form-data requests",
          });
        const n = d(async () => await t.formData()),
          r = await i.getProcedureAtPath(e.router, e.path);
        return {
          accept: null,
          calls: [
            {
              batchIndex: 0,
              path: e.path,
              getRawInput: n.read,
              result: n.result,
              procedure: r,
            },
          ],
          isBatchCall: !1,
          type: "mutation",
          connectionParams: null,
          signal: t.signal,
          url: e.url,
        };
      },
    },
    {
      isMatch(e) {
        var t;
        return !!(null === (t = e.headers.get("content-type")) || void 0 === t
          ? void 0
          : t.startsWith("application/octet-stream"));
      },
      async parse(e) {
        const { req: t } = e;
        if ("POST" !== t.method)
          throw new i.TRPCError({
            code: "METHOD_NOT_SUPPORTED",
            message:
              "Only POST requests are supported for application/octet-stream requests",
          });
        const n = d(async () => t.body);
        return {
          calls: [
            {
              batchIndex: 0,
              path: e.path,
              getRawInput: n.read,
              result: n.result,
              procedure: await i.getProcedureAtPath(e.router, e.path),
            },
          ],
          isBatchCall: !1,
          accept: null,
          type: "mutation",
          connectionParams: null,
          signal: t.signal,
          url: e.url,
        };
      },
    },
  ];
async function h(e) {
  const t = (function (e) {
    const t = f.find((t) => t.isMatch(e));
    if (t) return t;
    if (!t && "GET" === e.method) return p;
    throw new i.TRPCError({
      code: "UNSUPPORTED_MEDIA_TYPE",
      message: e.headers.has("content-type")
        ? `Unsupported content-type "${e.headers.get("content-type")}`
        : "Missing content-type header",
    });
  })(e.req);
  return await t.parse(e);
}
function m(e) {
  return o.isObject(e) && "AbortError" === e.name;
}
function g(e = "AbortError") {
  throw new DOMException(e, "AbortError");
}
function y(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
var v = r.__toESM(r.require_defineProperty(), 1);
let b;
const S = new WeakMap(),
  _ = () => {};
b = Symbol.toStringTag;
var x,
  w,
  E,
  T,
  k = class e {
    constructor(e) {
      (0, v.default)(this, "promise", void 0),
        (0, v.default)(this, "subscribers", []),
        (0, v.default)(this, "settlement", null),
        (0, v.default)(this, b, "Unpromise"),
        (this.promise = "function" == typeof e ? new Promise(e) : e);
      const t = this.promise.then((e) => {
        const { subscribers: t } = this;
        (this.subscribers = null),
          (this.settlement = { status: "fulfilled", value: e }),
          null == t ||
            t.forEach(({ resolve: t }) => {
              t(e);
            });
      });
      "catch" in t &&
        t.catch((e) => {
          const { subscribers: t } = this;
          (this.subscribers = null),
            (this.settlement = { status: "rejected", reason: e }),
            null == t ||
              t.forEach(({ reject: t }) => {
                t(e);
              });
        });
    }
    subscribe() {
      let e, t;
      const { settlement: n } = this;
      if (null === n) {
        if (null === this.subscribers)
          throw new Error("Unpromise settled but still has subscribers");
        const n = (function () {
          let e, t;
          return {
            promise: new Promise((n, r) => {
              (e = n), (t = r);
            }),
            resolve: e,
            reject: t,
          };
        })();
        (this.subscribers = ((r = this.subscribers), (o = n), [...r, o])),
          (e = n.promise),
          (t = () => {
            null !== this.subscribers &&
              (this.subscribers = (function (e, t) {
                const n = e.indexOf(t);
                return -1 !== n
                  ? (function (e, t) {
                      return [...e.slice(0, t), ...e.slice(t + 1)];
                    })(e, n)
                  : e;
              })(this.subscribers, n));
          });
      } else {
        const { status: r } = n;
        (e =
          "fulfilled" === r
            ? Promise.resolve(n.value)
            : Promise.reject(n.reason)),
          (t = _);
      }
      var r, o;
      return Object.assign(e, { unsubscribe: t });
    }
    then(e, t) {
      const n = this.subscribe(),
        { unsubscribe: r } = n;
      return Object.assign(n.then(e, t), { unsubscribe: r });
    }
    catch(e) {
      const t = this.subscribe(),
        { unsubscribe: n } = t;
      return Object.assign(t.catch(e), { unsubscribe: n });
    }
    finally(e) {
      const t = this.subscribe(),
        { unsubscribe: n } = t;
      return Object.assign(t.finally(e), { unsubscribe: n });
    }
    static proxy(t) {
      const n = e.getSubscribablePromise(t);
      return void 0 !== n ? n : e.createSubscribablePromise(t);
    }
    static createSubscribablePromise(t) {
      const n = new e(t);
      return S.set(t, n), S.set(n, n), n;
    }
    static getSubscribablePromise(e) {
      return S.get(e);
    }
    static resolve(t) {
      const n =
        "object" == typeof t &&
        null !== t &&
        "then" in t &&
        "function" == typeof t.then
          ? t
          : Promise.resolve(t);
      return e.proxy(n).subscribe();
    }
    static async any(t) {
      const n = (Array.isArray(t) ? t : [...t]).map(e.resolve);
      try {
        return await Promise.any(n);
      } finally {
        n.forEach(({ unsubscribe: e }) => {
          e();
        });
      }
    }
    static async race(t) {
      const n = (Array.isArray(t) ? t : [...t]).map(e.resolve);
      try {
        return await Promise.race(n);
      } finally {
        n.forEach(({ unsubscribe: e }) => {
          e();
        });
      }
    }
    static async raceReferences(e) {
      const t = e.map(C);
      try {
        return await Promise.race(t);
      } finally {
        for (const e of t) e.unsubscribe();
      }
    }
  };
function C(e) {
  return k.proxy(e).then(() => [e]);
}
function I(e, t) {
  const n = e,
    r = n[Symbol.dispose];
  return (
    (n[Symbol.dispose] = () => {
      t(), null == r || r();
    }),
    n
  );
}
function A(e, t) {
  const n = e,
    r = n[Symbol.asyncDispose];
  return (
    (n[Symbol.asyncDispose] = async () => {
      await t(), await (null == r ? void 0 : r());
    }),
    n
  );
}
(null !== (w = (x = Symbol).dispose) && void 0 !== w) || (x.dispose = Symbol()),
  (null !== (T = (E = Symbol).asyncDispose) && void 0 !== T) ||
    (E.asyncDispose = Symbol());
const O = Symbol();
function R(e) {
  let t = null;
  return I(
    {
      start() {
        if (t) throw new Error("Timer already started");
        return new Promise((n) => {
          t = setTimeout(() => n(O), e);
        });
      },
    },
    () => {
      t && clearTimeout(t);
    },
  );
}
var M = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(
      e,
      t,
    ) {
      (t.exports = function () {
        var e =
            "function" == typeof SuppressedError
              ? SuppressedError
              : function (e, t) {
                  var n = Error();
                  return (
                    (n.name = "SuppressedError"),
                    (n.error = e),
                    (n.suppressed = t),
                    n
                  );
                },
          t = {},
          n = [];
        function r(e, t) {
          if (null != t) {
            if (Object(t) !== t)
              throw new TypeError(
                "using declarations can only be used with objects, functions, null, or undefined.",
              );
            if (e)
              var r =
                t[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
            if (
              void 0 === r &&
              ((r = t[Symbol.dispose || Symbol.for("Symbol.dispose")]), e)
            )
              var o = r;
            if ("function" != typeof r)
              throw new TypeError("Object is not disposable.");
            o &&
              (r = function () {
                try {
                  o.call(t);
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              n.push({ v: t, d: r, a: e });
          } else e && n.push({ d: t, a: e });
          return t;
        }
        return {
          e: t,
          u: r.bind(null, !1),
          a: r.bind(null, !0),
          d: function () {
            var r,
              o = this.e,
              i = 0;
            function a() {
              for (; (r = n.pop()); )
                try {
                  if (!r.a && 1 === i)
                    return (i = 0), n.push(r), Promise.resolve().then(a);
                  if (r.d) {
                    var e = r.d.call(r.v);
                    if (r.a) return (i |= 2), Promise.resolve(e).then(a, s);
                  } else i |= 1;
                } catch (e) {
                  return s(e);
                }
              if (1 === i)
                return o !== t ? Promise.reject(o) : Promise.resolve();
              if (o !== t) throw o;
            }
            function s(n) {
              return (o = o !== t ? new e(n, o) : n), a();
            }
            return a();
          },
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  P = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(
      e,
      t,
    ) {
      (t.exports = function (e, t) {
        (this.v = e), (this.k = t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  N = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(
      e,
      t,
    ) {
      var n = P();
      (t.exports = function (e) {
        return new n(e, 0);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  D = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(
      e,
      t,
    ) {
      var n = P();
      function r(e) {
        var t, r;
        function o(t, r) {
          try {
            var a = e[t](r),
              s = a.value,
              l = s instanceof n;
            Promise.resolve(l ? s.v : s).then(
              function (n) {
                if (l) {
                  var r = "return" === t ? "return" : "next";
                  if (!s.k || n.done) return o(r, n);
                  n = e[r](n).value;
                }
                i(a.done ? "return" : "normal", n);
              },
              function (e) {
                o("throw", e);
              },
            );
          } catch (e) {
            i("throw", e);
          }
        }
        function i(e, n) {
          switch (e) {
            case "return":
              t.resolve({ value: n, done: !0 });
              break;
            case "throw":
              t.reject(n);
              break;
            default:
              t.resolve({ value: n, done: !1 });
          }
          (t = t.next) ? o(t.key, t.arg) : (r = null);
        }
        (this._invoke = function (e, n) {
          return new Promise(function (i, a) {
            var s = {
              key: e,
              arg: n,
              resolve: i,
              reject: a,
              next: null,
            };
            r ? (r = r.next = s) : ((t = r = s), o(e, n));
          });
        }),
          "function" != typeof e.return && (this.return = void 0);
      }
      (r.prototype[
        ("function" == typeof Symbol && Symbol.asyncIterator) ||
          "@@asyncIterator"
      ] = function () {
        return this;
      }),
        (r.prototype.next = function (e) {
          return this._invoke("next", e);
        }),
        (r.prototype.throw = function (e) {
          return this._invoke("throw", e);
        }),
        (r.prototype.return = function (e) {
          return this._invoke("return", e);
        }),
        (t.exports = function (e) {
          return function () {
            return new r(e.apply(this, arguments));
          };
        }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  j = r.__toESM(M(), 1),
  L = r.__toESM(N(), 1),
  F = r.__toESM(D(), 1);
function U(e) {
  const t = e[Symbol.asyncIterator]();
  return t[Symbol.asyncDispose]
    ? t
    : A(t, async () => {
        var e;
        await (null === (e = t.return) || void 0 === e ? void 0 : e.call(t));
      });
}
function B(e, t) {
  return z.apply(this, arguments);
}
function z() {
  return (z = (0, F.default)(function* (e, t) {
    try {
      var n = (0, j.default)();
      const r = n.a(U(e));
      let o;
      const i = n.u(R(t.gracePeriodMs));
      let a = t.count,
        s = new Promise(() => {});
      for (;;) {
        if (
          ((o = yield (0, L.default)(k.race([r.next(), s]))),
          o === O && g(),
          o.done)
        )
          return o.value;
        yield o.value, 0 === --a && (s = i.start()), (o = null);
      }
    } catch (e) {
      n.e = e;
    } finally {
      yield (0, L.default)(n.d());
    }
  })).apply(this, arguments);
}
function H() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      (e = n), (t = r);
    }),
    resolve: e,
    reject: t,
  };
}
var V = r.__toESM(M(), 1),
  q = r.__toESM(N(), 1),
  G = r.__toESM(D(), 1);
function W(e) {
  const t = e[Symbol.asyncIterator]();
  return new ReadableStream({
    async cancel() {
      var e;
      await (null === (e = t.return) || void 0 === e ? void 0 : e.call(t));
    },
    async pull(e) {
      const n = await t.next();
      n.done ? e.close() : e.enqueue(n.value);
    },
  });
}
var $ = r.__toESM(M(), 1),
  Y = r.__toESM(N(), 1),
  K = r.__toESM(D(), 1);
const Z = Symbol("ping");
function Q(e, t) {
  return J.apply(this, arguments);
}
function J() {
  return (J = (0, K.default)(function* (e, t) {
    try {
      var n = (0, $.default)();
      const o = n.a(U(e));
      let i,
        a = o.next();
      for (;;)
        try {
          var r = (0, $.default)();
          const e = r.u(R(t));
          if (((i = yield (0, Y.default)(k.race([a, e.start()]))), i === O)) {
            yield Z;
            continue;
          }
          if (i.done) return i.value;
          (a = o.next()), yield i.value, (i = null);
        } catch (e) {
          r.e = e;
        } finally {
          r.d();
        }
    } catch (e) {
      n.e = e;
    } finally {
      yield (0, Y.default)(n.d());
    }
  })).apply(this, arguments);
}
var X = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(
      e,
      t,
    ) {
      function n(e) {
        function t(e) {
          if (Object(e) !== e)
            return Promise.reject(new TypeError(e + " is not an object."));
          var t = e.done;
          return Promise.resolve(e.value).then(function (e) {
            return { value: e, done: t };
          });
        }
        return (
          ((n = function (e) {
            (this.s = e), (this.n = e.next);
          }).prototype = {
            s: null,
            n: null,
            next: function () {
              return t(this.n.apply(this.s, arguments));
            },
            return: function (e) {
              var n = this.s.return;
              return void 0 === n
                ? Promise.resolve({ value: e, done: !0 })
                : t(n.apply(this.s, arguments));
            },
            throw: function (e) {
              var n = this.s.return;
              return void 0 === n
                ? Promise.reject(e)
                : t(n.apply(this.s, arguments));
            },
          }),
          new n(e)
        );
      }
      (t.exports = function (e) {
        var t,
          r,
          o,
          i = 2;
        for (
          "undefined" != typeof Symbol &&
          ((r = Symbol.asyncIterator), (o = Symbol.iterator));
          i--;

        ) {
          if (r && null != (t = e[r])) return t.call(e);
          if (o && null != (t = e[o])) return new n(t.call(e));
          (r = "@@asyncIterator"), (o = "@@iterator");
        }
        throw new TypeError("Object is not async iterable");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  ee = r.__toESM(N(), 1),
  te = r.__toESM(D(), 1),
  ne = r.__toESM(M(), 1),
  re = r.__toESM(X(), 1);
function oe(e) {
  return (
    (o.isObject(e) || o.isFunction(e)) &&
    "function" == typeof (null == e ? void 0 : e.then) &&
    "function" == typeof (null == e ? void 0 : e.catch)
  );
}
var ie = class extends Error {
  constructor(e) {
    super("Max depth reached at path: " + e.join(".")), (this.path = e);
  }
};
function ae() {
  return (
    (ae = (0, te.default)(function* (e) {
      const { data: t } = e;
      let n = 0;
      const r = (function () {
        let e = "idle",
          t = H();
        const n = [],
          r = new Set(),
          o = [];
        function i(n) {
          if ("pending" !== e) return;
          const i = (function (e, t) {
            const n = e[Symbol.asyncIterator]();
            let r = "idle";
            function o() {
              (r = "done"), (t = () => {});
            }
            return {
              pull: function () {
                "idle" === r &&
                  ((r = "pending"),
                  n
                    .next()
                    .then((e) => {
                      if (e.done)
                        return (
                          (r = "done"),
                          t({ status: "return", value: e.value }),
                          void o()
                        );
                      (r = "idle"), t({ status: "yield", value: e.value });
                    })
                    .catch((e) => {
                      t({ status: "error", error: e }), o();
                    }));
              },
              destroy: async () => {
                var e;
                o(),
                  await (null === (e = n.return) || void 0 === e
                    ? void 0
                    : e.call(n));
              },
            };
          })(n, (n) => {
            if ("pending" === e) {
              switch (n.status) {
                case "yield":
                  o.push([i, n]);
                  break;
                case "return":
                  r.delete(i);
                  break;
                case "error":
                  o.push([i, n]), r.delete(i);
              }
              t.resolve();
            }
          });
          r.add(i), i.pull();
        }
        return {
          add(t) {
            switch (e) {
              case "idle":
                n.push(t);
                break;
              case "pending":
                i(t);
            }
          },
          [Symbol.asyncIterator]: () =>
            (0, G.default)(function* () {
              try {
                var a = (0, V.default)();
                if ("idle" !== e) throw new Error("Cannot iterate twice");
                for (
                  e = "pending",
                    a.a(
                      A({}, async () => {
                        e = "done";
                        const n = [];
                        if (
                          (await Promise.all(
                            Array.from(r.values()).map(async (e) => {
                              try {
                                await e.destroy();
                              } catch (e) {
                                n.push(e);
                              }
                            }),
                          ),
                          (o.length = 0),
                          r.clear(),
                          t.resolve(),
                          n.length > 0)
                        )
                          throw new AggregateError(n);
                      }),
                    );
                  n.length > 0;

                )
                  i(n.shift());
                for (; r.size > 0; ) {
                  for (yield (0, q.default)(t.promise); o.length > 0; ) {
                    const [e, t] = o.shift();
                    switch (t.status) {
                      case "yield":
                        yield t.value, e.pull();
                        break;
                      case "error":
                        throw t.error;
                    }
                  }
                  t = H();
                }
              } catch (e) {
                a.e = e;
              } finally {
                yield (0, q.default)(a.d());
              }
            })(),
        };
      })();
      function i(e) {
        const t = n++,
          o = e(t);
        return r.add(o), t;
      }
      function a(t, n) {
        return i(
          (function () {
            var r = (0, te.default)(function* (r) {
              const o = l(n);
              o &&
                (t.catch((t) => {
                  var r;
                  null === (r = e.onError) ||
                    void 0 === r ||
                    r.call(e, { error: t, path: n });
                }),
                (t = Promise.reject(o)));
              try {
                const e = yield (0, ee.default)(t);
                yield [r, 0, u(e, n)];
              } catch (t) {
                var i, a;
                null === (i = e.onError) ||
                  void 0 === i ||
                  i.call(e, { error: t, path: n }),
                  yield [
                    r,
                    1,
                    null === (a = e.formatError) || void 0 === a
                      ? void 0
                      : a.call(e, { error: t, path: n }),
                  ];
              }
            });
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
      }
      function s(t, n) {
        return i(
          (function () {
            var r = (0, te.default)(function* (r) {
              try {
                var o = (0, ne.default)();
                const s = l(n);
                if (s) throw s;
                const c = o.a(U(t));
                try {
                  for (;;) {
                    const e = yield (0, ee.default)(c.next());
                    if (e.done) {
                      yield [r, 0, u(e.value, n)];
                      break;
                    }
                    yield [r, 1, u(e.value, n)];
                  }
                } catch (t) {
                  var i, a;
                  null === (i = e.onError) ||
                    void 0 === i ||
                    i.call(e, { error: t, path: n }),
                    yield [
                      r,
                      2,
                      null === (a = e.formatError) || void 0 === a
                        ? void 0
                        : a.call(e, { error: t, path: n }),
                    ];
                }
              } catch (e) {
                o.e = e;
              } finally {
                yield (0, ee.default)(o.d());
              }
            });
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
      }
      function l(t) {
        return e.maxDepth && t.length > e.maxDepth ? new ie(t) : null;
      }
      function c(t, n) {
        if (oe(t)) return [0, a(t, n)];
        if (o.isAsyncIterable(t)) {
          if (e.maxDepth && n.length >= e.maxDepth)
            throw new Error("Max depth reached");
          return [1, s(t, n)];
        }
        return null;
      }
      function u(e, t) {
        if (void 0 === e) return [[]];
        const n = c(e, t);
        if (n) return [[0], [null, ...n]];
        if (
          !1 === y((r = e)) ||
          (void 0 !== (i = r.constructor) &&
            (!1 === y((a = i.prototype)) ||
              !1 === a.hasOwnProperty("isPrototypeOf")))
        )
          return [[e]];
        var r, i, a;
        const s = o.emptyObject(),
          l = [];
        for (const [n, r] of Object.entries(e)) {
          const e = c(r, [...t, n]);
          e ? ((s[n] = 0), l.push([n, ...e])) : (s[n] = r);
        }
        return [[s], ...l];
      }
      const d = o.emptyObject();
      for (const [e, n] of Object.entries(t)) d[e] = u(n, [e]);
      yield d;
      let p = r;
      e.pingMs && (p = Q(r, e.pingMs));
      var f,
        h = !1,
        m = !1;
      try {
        for (
          var g, v = (0, re.default)(p);
          (h = !(g = yield (0, ee.default)(v.next())).done);
          h = !1
        ) {
          const e = g.value;
          yield e;
        }
      } catch (e) {
        (m = !0), (f = e);
      } finally {
        try {
          h && null != v.return && (yield (0, ee.default)(v.return()));
        } finally {
          if (m) throw f;
        }
      }
    })),
    ae.apply(this, arguments)
  );
}
function se(e) {
  let t = W(
    (function (e) {
      return ae.apply(this, arguments);
    })(e),
  );
  const { serialize: n } = e;
  return (
    n &&
      (t = t.pipeThrough(
        new TransformStream({
          transform(e, t) {
            e === Z ? t.enqueue(Z) : t.enqueue(n(e));
          },
        }),
      )),
    t
      .pipeThrough(
        new TransformStream({
          transform(e, t) {
            e === Z ? t.enqueue(" ") : t.enqueue(JSON.stringify(e) + "\n");
          },
        }),
      )
      .pipeThrough(new TextEncoderStream())
  );
}
var le = class extends Error {
  constructor(e) {
    super("Received error from server"), (this.data = e);
  }
};
function ce(e) {
  const t = new Map();
  return {
    getOrCreate: function (n) {
      let r = t.get(n);
      return (
        r ||
          ((r = (function () {
            let n;
            const r = new ReadableStream({
                start(e) {
                  n = e;
                },
              }),
              o = {
                enqueue: (e) => n.enqueue(e),
                close: () => {
                  n.close(),
                    i(),
                    Array.from(t.values()).every((e) => e.closed) && e.abort();
                },
                closed: !1,
                getReaderResource: () => {
                  const e = r.getReader();
                  return I(e, () => {
                    o.close(), e.releaseLock();
                  });
                },
                error: (e) => {
                  n.error(e), i();
                },
              };
            function i() {
              Object.assign(o, {
                closed: !0,
                close: () => {},
                enqueue: () => {},
                getReaderResource: null,
                error: () => {},
              });
            }
            return o;
          })()),
          t.set(n, r)),
        r
      );
    },
    cancelAll: function (e) {
      for (const n of t.values()) n.error(e);
    },
    closeAll: function () {
      for (const e of t.values()) e.close();
    },
  };
}
async function ue(e) {
  const { deserialize: t = (e) => e } = e;
  let n = (function (e) {
    const t = (function (e) {
      const t =
        "getReader" in e
          ? e.getReader()
          : ((n = e),
            {
              getReader: () =>
                new ReadableStream({
                  start(e) {
                    n.on("data", (t) => {
                      e.enqueue(t);
                    }),
                      n.on("end", () => {
                        e.close();
                      }),
                      n.on("error", (t) => {
                        e.error(t);
                      });
                  },
                }).getReader(),
            }).getReader();
      var n;
      let r = "";
      return new ReadableStream({
        async pull(e) {
          const { done: n, value: r } = await t.read();
          n ? e.close() : e.enqueue(r);
        },
        cancel: () => t.cancel(),
      })
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(
          new TransformStream({
            transform(e, t) {
              var n;
              r += e;
              const o = r.split("\n");
              r = null !== (n = o.pop()) && void 0 !== n ? n : "";
              for (const e of o) t.enqueue(e);
            },
          }),
        );
    })(e);
    let n = !1;
    return t.pipeThrough(
      new TransformStream({
        transform(e, t) {
          if (n) {
            const n = JSON.parse(e);
            t.enqueue(n);
          } else {
            const r = JSON.parse(e);
            t.enqueue(r), (n = !0);
          }
        },
      }),
    );
  })(e.from);
  t &&
    (n = n.pipeThrough(
      new TransformStream({
        transform(e, n) {
          n.enqueue(t(e));
        },
      }),
    ));
  let r = H();
  const i = ce(e.abortController);
  function a(t) {
    const [n, r, a] = t,
      l = i.getOrCreate(a);
    switch (r) {
      case 0:
        return o.run(async () => {
          try {
            var t = (0, ne.default)();
            const o = t.u(l.getReaderResource()),
              { value: i } = await o.read(),
              [a, c, u] = i;
            switch (c) {
              case 0:
                return s(u);
              case 1:
                var n, r;
                throw null !==
                  (n =
                    null === (r = e.formatError) || void 0 === r
                      ? void 0
                      : r.call(e, { error: u })) && void 0 !== n
                  ? n
                  : new le(u);
            }
          } catch (e) {
            t.e = e;
          } finally {
            t.d();
          }
        });
      case 1:
        return o.run(
          (0, te.default)(function* () {
            try {
              var t = (0, ne.default)();
              const o = t.u(l.getReaderResource());
              for (;;) {
                const { value: t } = yield (0, ee.default)(o.read()),
                  [i, a, l] = t;
                switch (a) {
                  case 1:
                    yield s(l);
                    break;
                  case 0:
                    return s(l);
                  case 2:
                    var n, r;
                    throw null !==
                      (n =
                        null === (r = e.formatError) || void 0 === r
                          ? void 0
                          : r.call(e, { error: l })) && void 0 !== n
                      ? n
                      : new le(l);
                }
              }
            } catch (e) {
              t.e = e;
            } finally {
              t.d();
            }
          }),
        );
    }
  }
  function s(e) {
    const [[t], ...n] = e;
    for (const e of n) {
      const [n] = e,
        r = a(e);
      if (null === n) return r;
      t[n] = r;
    }
    return t;
  }
  const l = (e) => {
    null == r || r.reject(e), (r = null), i.cancelAll(e);
  };
  return (
    n
      .pipeTo(
        new WritableStream({
          write(e) {
            if (r) {
              const t = e;
              for (const [n, r] of Object.entries(e)) {
                const e = s(r);
                t[n] = e;
              }
              return r.resolve(t), void (r = null);
            }
            const t = e,
              [n] = t;
            i.getOrCreate(n).enqueue(t);
          },
          close: () => {
            r &&
              (r.reject(new Error("Stream closed before head was received")),
              (r = null)),
              i.closeAll();
          },
          abort: l,
        }),
      )
      .catch((t) => {
        var n;
        null === (n = e.onError) || void 0 === n || n.call(e, { error: t }),
          l(t);
      }),
    [await r.promise]
  );
}
var de = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncGeneratorDelegate.js"(
      e,
      t,
    ) {
      var n = P();
      (t.exports = function (e) {
        var t = {},
          r = !1;
        function o(t, o) {
          return (
            (r = !0),
            (o = new Promise(function (n) {
              n(e[t](o));
            })),
            { done: !1, value: new n(o, 1) }
          );
        }
        return (
          (t[
            ("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"
          ] = function () {
            return this;
          }),
          (t.next = function (e) {
            return r ? ((r = !1), e) : o("next", e);
          }),
          "function" == typeof e.throw &&
            (t.throw = function (e) {
              if (r) throw ((r = !1), e);
              return o("throw", e);
            }),
          "function" == typeof e.return &&
            (t.return = function (e) {
              return r ? ((r = !1), e) : o("return", e);
            }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  pe = r.__toESM(X(), 1),
  fe = r.__toESM(N(), 1),
  he = r.__toESM(D(), 1),
  me = r.__toESM(de(), 1),
  ge = r.__toESM(M(), 1);
const ye = "ping",
  ve = "serialized-error",
  be = "connected",
  Se = "return";
function _e(e) {
  var t, n, r, a, s;
  const { serialize: l = o.identity } = e,
    c = {
      enabled:
        null !==
          (t = null === (n = e.ping) || void 0 === n ? void 0 : n.enabled) &&
        void 0 !== t &&
        t,
      intervalMs:
        null !==
          (r = null === (a = e.ping) || void 0 === a ? void 0 : a.intervalMs) &&
        void 0 !== r
          ? r
          : 1e3,
    },
    u = null !== (s = e.client) && void 0 !== s ? s : {};
  if (
    c.enabled &&
    u.reconnectAfterInactivityMs &&
    c.intervalMs > u.reconnectAfterInactivityMs
  )
    throw new Error(
      `Ping interval must be less than client reconnect interval to prevent unnecessary reconnection - ping.intervalMs: ${c.intervalMs} client.reconnectAfterInactivityMs: ${u.reconnectAfterInactivityMs}`,
    );
  function d() {
    return (d = (0, he.default)(function* () {
      yield { event: be, data: JSON.stringify(u) };
      let t,
        n,
        r = e.data;
      e.emitAndEndImmediately && (r = B(r, { count: 1, gracePeriodMs: 1 })),
        c.enabled &&
          c.intervalMs !== 1 / 0 &&
          c.intervalMs > 0 &&
          (r = Q(r, c.intervalMs));
      var o,
        a = !1,
        s = !1;
      try {
        for (
          var d, p = (0, pe.default)(r);
          (a = !(d = yield (0, fe.default)(p.next())).done);
          a = !1
        )
          (t = d.value),
            t !== Z
              ? ((n = i.isTrackedEnvelope(t)
                  ? { id: t[0], data: t[1] }
                  : { data: t }),
                (n.data = JSON.stringify(l(n.data))),
                yield n,
                (t = null),
                (n = null))
              : yield { event: ye, data: "" };
      } catch (e) {
        (s = !0), (o = e);
      } finally {
        try {
          a && null != p.return && (yield (0, fe.default)(p.return()));
        } finally {
          if (s) throw o;
        }
      }
    })).apply(this, arguments);
  }
  function p() {
    return (
      (p = (0, he.default)(function* () {
        try {
          yield* (0, me.default)(
            (0, pe.default)(
              (function () {
                return d.apply(this, arguments);
              })(),
            ),
          ),
            yield { event: Se, data: "" };
        } catch (r) {
          var t, n;
          if (m(r)) return;
          const o = i.getTRPCErrorFromUnknown(r),
            a =
              null !==
                (t =
                  null === (n = e.formatError) || void 0 === n
                    ? void 0
                    : n.call(e, { error: o })) && void 0 !== t
                ? t
                : null;
          yield { event: ve, data: JSON.stringify(l(a)) };
        }
      })),
      p.apply(this, arguments)
    );
  }
  const f = W(
    (function () {
      return p.apply(this, arguments);
    })(),
  );
  return f
    .pipeThrough(
      new TransformStream({
        transform(e, t) {
          "event" in e && t.enqueue(`event: ${e.event}\n`),
            "data" in e && t.enqueue(`data: ${e.data}\n`),
            "id" in e && t.enqueue(`id: ${e.id}\n`),
            "comment" in e && t.enqueue(`: ${e.comment}\n`),
            t.enqueue("\n\n");
        },
      }),
    )
    .pipeThrough(new TextEncoderStream());
}
async function xe(e) {
  try {
    var t = (0, ge.default)();
    const n = t.u(R(e.timeoutMs)),
      r = await k.race([e.promise, n.start()]);
    return r === O ? await e.onTimeout() : r;
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
function we(e) {
  const { deserialize: t = (e) => e } = e;
  let n = o.emptyObject();
  const r = e.signal;
  let i = null;
  const a = () =>
    new ReadableStream({
      async start(o) {
        const [a, s] = await Promise.all([e.url(), e.init()]),
          l = (i = new e.EventSource(a, s));
        o.enqueue({
          type: "connecting",
          eventSource: i,
          event: null,
        }),
          l.addEventListener(be, (e) => {
            const t = e,
              r = JSON.parse(t.data);
            (n = r),
              o.enqueue({
                type: "connected",
                options: r,
                eventSource: l,
              });
          }),
          l.addEventListener(ve, (e) => {
            const n = e;
            o.enqueue({
              type: "serialized-error",
              error: t(JSON.parse(n.data)),
              eventSource: l,
            });
          }),
          l.addEventListener(ye, () => {
            o.enqueue({ type: "ping", eventSource: l });
          }),
          l.addEventListener(Se, () => {
            l.close(), o.close(), (i = null);
          }),
          l.addEventListener("error", (e) => {
            l.readyState === l.CLOSED
              ? o.error(e)
              : o.enqueue({
                  type: "connecting",
                  eventSource: l,
                  event: e,
                });
          }),
          l.addEventListener("message", (e) => {
            const n = e,
              r = { data: t(JSON.parse(n.data)) };
            n.lastEventId && (r.id = n.lastEventId),
              o.enqueue({ type: "data", data: r, eventSource: l });
          });
        const c = () => {
          try {
            l.close(), o.close();
          } catch (e) {}
        };
        r.aborted ? c() : r.addEventListener("abort", c);
      },
      cancel() {
        null == i || i.close();
      },
    });
  return o.run(
    (0, he.default)(function* () {
      try {
        var e = (0, ge.default)();
        const t = e.a(
          (() => {
            let e = a(),
              t = e.getReader();
            async function n() {
              await t.cancel(), (i = null);
            }
            return A(
              {
                read: () => t.read(),
                async recreate() {
                  await n(), (e = a()), (t = e.getReader());
                },
              },
              n,
            );
          })(),
        );
        for (;;) {
          let e = t.read();
          const r = n.reconnectAfterInactivityMs;
          r &&
            (e = xe({
              promise: e,
              timeoutMs: r,
              onTimeout: async () => {
                const e = {
                  value: { type: "timeout", ms: r, eventSource: i },
                  done: !1,
                };
                return await t.recreate(), e;
              },
            }));
          const o = yield (0, fe.default)(e);
          if (o.done) return o.value;
          yield o.value;
        }
      } catch (t) {
        e.e = t;
      } finally {
        yield (0, fe.default)(e.d());
      }
    }),
  );
}
const Ee = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-cache, no-transform",
  "X-Accel-Buffering": "no",
  Connection: "keep-alive",
};
var Te = r.__toESM(D(), 1),
  ke = r.__toESM(r.require_objectSpread2(), 1);
function Ce(e) {
  return o.run(
    (0, Te.default)(function* () {
      throw e;
    }),
  );
}
const Ie = {
    mutation: ["POST"],
    query: ["GET"],
    subscription: ["GET"],
  },
  Ae = {
    mutation: ["POST"],
    query: ["GET", "POST"],
    subscription: ["GET", "POST"],
  };
function Oe(e) {
  var t, n, o;
  const {
    ctx: i,
    info: a,
    responseMeta: s,
    untransformedJSON: l,
    errors: c = [],
    headers: u,
  } = e;
  let d = l ? r.getHTTPStatusCode(l) : 200;
  const p = !l,
    f = p ? [] : Array.isArray(l) ? l : [l],
    h =
      null !==
        (t =
          null == s
            ? void 0
            : s({
                ctx: i,
                info: a,
                paths: null == a ? void 0 : a.calls.map((e) => e.path),
                data: f,
                errors: c,
                eagerGeneration: p,
                type:
                  null !==
                    (n =
                      null == a ||
                      null ===
                        (o = a.calls.find((e) => {
                          var t;
                          return null === (t = e.procedure) || void 0 === t
                            ? void 0
                            : t._def.type;
                        })) ||
                      void 0 === o ||
                      null === (o = o.procedure) ||
                      void 0 === o
                        ? void 0
                        : o._def.type) && void 0 !== n
                    ? n
                    : "unknown",
              })) && void 0 !== t
        ? t
        : {};
  if (h.headers)
    if (h.headers instanceof Headers)
      for (const [e, t] of h.headers.entries()) u.append(e, t);
    else
      for (const [e, t] of Object.entries(h.headers))
        if (Array.isArray(t)) for (const n of t) u.append(e, n);
        else "string" == typeof t && u.set(e, t);
  return h.status && (d = h.status), { status: d };
}
function Re(e) {
  return (
    !!o.isObject(e) &&
    (!!o.isAsyncIterable(e) ||
      Object.values(e).some(oe) ||
      Object.values(e).some(o.isAsyncIterable))
  );
}
async function Me(e) {
  var t, n, s, l, c, d;
  const { router: p, req: f } = e,
    m = new Headers([["vary", "trpc-accept, accept"]]),
    g = p._def._config,
    y = new URL(f.url);
  if ("HEAD" === f.method) return new Response(null, { status: 204 });
  const v =
      null ===
        (t =
          null !== (n = e.allowBatching) && void 0 !== n
            ? n
            : null === (s = e.batching) || void 0 === s
              ? void 0
              : s.enabled) ||
      void 0 === t ||
      t,
    b =
      null !== (l = e.allowMethodOverride) &&
      void 0 !== l &&
      l &&
      "POST" === f.method,
    S = await o.run(async () => {
      try {
        return [
          void 0,
          await h({
            req: f,
            path: decodeURIComponent(e.path),
            router: p,
            searchParams: y.searchParams,
            headers: e.req.headers,
            url: y,
            maxBatchSize: e.maxBatchSize,
          }),
        ];
      } catch (e) {
        return [i.getTRPCErrorFromUnknown(e), void 0];
      }
    }),
    _ = o.run(() => {
      let t;
      return {
        valueOrUndefined: () => {
          if (t) return t[1];
        },
        value: () => {
          const [e, n] = t;
          if (e) throw e;
          return n;
        },
        create: async (n) => {
          if (t)
            throw new Error(
              "This should only be called once - report a bug in tRPC",
            );
          try {
            const r = await e.createContext({ info: n });
            t = [void 0, r];
          } catch (e) {
            t = [i.getTRPCErrorFromUnknown(e), void 0];
          }
        },
      };
    }),
    x = b ? Ae : Ie,
    w = "application/jsonl" === u(f.headers),
    E =
      null ===
        (c = null === (d = g.sse) || void 0 === d ? void 0 : d.enabled) ||
      void 0 === c ||
      c;
  try {
    const [t, n] = S;
    if (t) throw t;
    if (n.isBatchCall && !v)
      throw new i.TRPCError({
        code: "BAD_REQUEST",
        message: "Batching is not enabled on the server",
      });
    if (w && !n.isBatchCall)
      throw new i.TRPCError({
        message: "Streaming requests must be batched (you can do a batch of 1)",
        code: "BAD_REQUEST",
      });
    await _.create(n);
    const s = n.calls.map(async (t) => {
      const r = t.procedure,
        a = (function (e) {
          const t = new AbortController();
          return {
            signal: o.abortSignalsAnyPonyfill([e, t.signal]),
            controller: t,
          };
        })(e.req.signal);
      try {
        if (e.error) throw e.error;
        if (!r)
          throw new i.TRPCError({
            code: "NOT_FOUND",
            message: `No procedure found on path "${t.path}"`,
          });
        if (!x[r._def.type].includes(f.method))
          throw new i.TRPCError({
            code: "METHOD_NOT_SUPPORTED",
            message: `Unsupported ${f.method}-request to ${r._def.type} procedure at path "${t.path}"`,
          });
        if ("subscription" === r._def.type) {
          var s;
          if (n.isBatchCall)
            throw new i.TRPCError({
              code: "BAD_REQUEST",
              message: "Cannot batch subscription calls",
            });
          if (null === (s = g.sse) || void 0 === s ? void 0 : s.maxDurationMs) {
            function l() {
              clearTimeout(p),
                a.signal.removeEventListener("abort", l),
                a.controller.abort();
            }
            const p = setTimeout(l, g.sse.maxDurationMs);
            a.signal.addEventListener("abort", l);
          }
        }
        return [
          void 0,
          {
            data: await r({
              path: t.path,
              getRawInput: t.getRawInput,
              ctx: _.value(),
              type: r._def.type,
              signal: a.signal,
              batchIndex: t.batchIndex,
            }),
            signal: "subscription" === r._def.type ? a.signal : void 0,
          },
        ];
      } catch (h) {
        var c, u, d;
        const m = i.getTRPCErrorFromUnknown(h),
          y = t.result();
        return (
          null === (c = e.onError) ||
            void 0 === c ||
            c.call(e, {
              error: m,
              path: t.path,
              input: y,
              ctx: _.valueOrUndefined(),
              type:
                null !==
                  (u =
                    null === (d = t.procedure) || void 0 === d
                      ? void 0
                      : d._def.type) && void 0 !== u
                  ? u
                  : "unknown",
              req: e.req,
            }),
          [m, void 0]
        );
      }
    });
    if (!n.isBatchCall) {
      const [t] = n.calls,
        [l, c] = await s[0];
      switch (n.type) {
        case "unknown":
        case "mutation":
        case "query": {
          if (
            (m.set("content-type", "application/json"),
            Re(null == c ? void 0 : c.data))
          )
            throw new i.TRPCError({
              code: "UNSUPPORTED_MEDIA_TYPE",
              message:
                "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink",
            });
          const o = l
              ? {
                  error: r.getErrorShape({
                    config: g,
                    ctx: _.valueOrUndefined(),
                    error: l,
                    input: t.result(),
                    path: t.path,
                    type: n.type,
                  }),
                }
              : { result: { data: c.data } },
            a = Oe({
              ctx: _.valueOrUndefined(),
              info: n,
              responseMeta: e.responseMeta,
              errors: l ? [l] : [],
              headers: m,
              untransformedJSON: [o],
            });
          return new Response(JSON.stringify(i.transformTRPCResponse(g, o)), {
            status: a.status,
            headers: m,
          });
        }
        case "subscription": {
          const s = o.run(() =>
              l
                ? Ce(l)
                : E
                  ? a.isObservable(c.data) || o.isAsyncIterable(c.data)
                    ? a.isObservable(c.data)
                      ? a.observableToAsyncIterable(c.data, e.req.signal)
                      : c.data
                    : Ce(
                        new i.TRPCError({
                          message: `Subscription ${t.path} did not return an observable or a AsyncGenerator`,
                          code: "INTERNAL_SERVER_ERROR",
                        }),
                      )
                  : Ce(
                      new i.TRPCError({
                        code: "METHOD_NOT_SUPPORTED",
                        message: 'Missing experimental flag "sseSubscriptions"',
                      }),
                    ),
            ),
            u = _e(
              (0, ke.default)(
                (0, ke.default)({}, g.sse),
                {},
                {
                  data: s,
                  serialize: (e) => g.transformer.output.serialize(e),
                  formatError(n) {
                    var o, a, s;
                    const l = i.getTRPCErrorFromUnknown(n.error),
                      c = null == t ? void 0 : t.result(),
                      u = null == t ? void 0 : t.path,
                      d =
                        null !==
                          (o =
                            null == t ||
                            null === (a = t.procedure) ||
                            void 0 === a
                              ? void 0
                              : a._def.type) && void 0 !== o
                          ? o
                          : "unknown";
                    return (
                      null === (s = e.onError) ||
                        void 0 === s ||
                        s.call(e, {
                          error: l,
                          path: u,
                          input: c,
                          ctx: _.valueOrUndefined(),
                          req: e.req,
                          type: d,
                        }),
                      r.getErrorShape({
                        config: g,
                        ctx: _.valueOrUndefined(),
                        error: l,
                        input: c,
                        path: u,
                        type: d,
                      })
                    );
                  },
                },
              ),
            );
          for (const [e, t] of Object.entries(Ee)) m.set(e, t);
          const d = Oe({
              ctx: _.valueOrUndefined(),
              info: n,
              responseMeta: e.responseMeta,
              errors: [],
              headers: m,
              untransformedJSON: null,
            }),
            p = null == c ? void 0 : c.signal;
          let f = u;
          if (p) {
            const e = u.getReader(),
              t = () => {
                e.cancel();
              };
            p.aborted ? t() : p.addEventListener("abort", t, { once: !0 }),
              (f = new ReadableStream({
                async pull(n) {
                  const r = await e.read();
                  r.done
                    ? (p.removeEventListener("abort", t), n.close())
                    : n.enqueue(r.value);
                },
                cancel: () => (p.removeEventListener("abort", t), e.cancel()),
              }));
          }
          return new Response(f, { headers: m, status: d.status });
        }
      }
    }
    if ("application/jsonl" === n.accept) {
      m.set("content-type", "application/json"),
        m.set("transfer-encoding", "chunked");
      const t = Oe({
          ctx: _.valueOrUndefined(),
          info: n,
          responseMeta: e.responseMeta,
          errors: [],
          headers: m,
          untransformedJSON: null,
        }),
        o = se(
          (0, ke.default)(
            (0, ke.default)({}, g.jsonl),
            {},
            {
              maxDepth: 1 / 0,
              data: s.map(async (t, o) => {
                const [i, s] = await t,
                  l = n.calls[o];
                var c, u;
                if (i)
                  return {
                    error: r.getErrorShape({
                      config: g,
                      ctx: _.valueOrUndefined(),
                      error: i,
                      input: l.result(),
                      path: l.path,
                      type:
                        null !==
                          (c =
                            null === (u = l.procedure) || void 0 === u
                              ? void 0
                              : u._def.type) && void 0 !== c
                          ? c
                          : "unknown",
                    }),
                  };
                const d = a.isObservable(s.data)
                  ? a.observableToAsyncIterable(s.data, e.req.signal)
                  : Promise.resolve(s.data);
                return { result: Promise.resolve({ data: d }) };
              }),
              serialize: (e) => g.transformer.output.serialize(e),
              onError: (t) => {
                var r, o;
                null === (r = e.onError) ||
                  void 0 === r ||
                  r.call(e, {
                    error: i.getTRPCErrorFromUnknown(t.error),
                    path: void 0,
                    input: void 0,
                    ctx: _.valueOrUndefined(),
                    req: e.req,
                    type:
                      null !== (o = null == n ? void 0 : n.type) && void 0 !== o
                        ? o
                        : "unknown",
                  });
              },
              formatError(e) {
                var t, o;
                const a = null == n ? void 0 : n.calls[e.path[0]],
                  s = i.getTRPCErrorFromUnknown(e.error),
                  l = null == a ? void 0 : a.result(),
                  c = null == a ? void 0 : a.path,
                  u =
                    null !==
                      (t =
                        null == a || null === (o = a.procedure) || void 0 === o
                          ? void 0
                          : o._def.type) && void 0 !== t
                      ? t
                      : "unknown";
                return r.getErrorShape({
                  config: g,
                  ctx: _.valueOrUndefined(),
                  error: s,
                  input: l,
                  path: c,
                  type: u,
                });
              },
            },
          ),
        );
      return new Response(o, { headers: m, status: t.status });
    }
    m.set("content-type", "application/json");
    const l = (await Promise.all(s)).map((e) => {
        const [t, n] = e;
        return t
          ? e
          : Re(n.data)
            ? [
                new i.TRPCError({
                  code: "UNSUPPORTED_MEDIA_TYPE",
                  message:
                    "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink",
                }),
                void 0,
              ]
            : e;
      }),
      c = l.map(([e, t], o) => {
        const i = n.calls[o];
        var a, s;
        return e
          ? {
              error: r.getErrorShape({
                config: g,
                ctx: _.valueOrUndefined(),
                error: e,
                input: i.result(),
                path: i.path,
                type:
                  null !==
                    (a =
                      null === (s = i.procedure) || void 0 === s
                        ? void 0
                        : s._def.type) && void 0 !== a
                    ? a
                    : "unknown",
              }),
            }
          : { result: { data: t.data } };
      }),
      u = l.map(([e]) => e).filter(Boolean),
      d = Oe({
        ctx: _.valueOrUndefined(),
        info: n,
        responseMeta: e.responseMeta,
        untransformedJSON: c,
        errors: u,
        headers: m,
      });
    return new Response(JSON.stringify(i.transformTRPCResponse(g, c)), {
      status: d.status,
      headers: m,
    });
  } catch (t) {
    var T;
    const [n, o] = S,
      a = _.valueOrUndefined(),
      {
        error: s,
        untransformedJSON: l,
        body: c,
      } = (function (e, t) {
        const { router: n, req: o, onError: a } = t.opts,
          s = i.getTRPCErrorFromUnknown(e);
        null == a ||
          a({
            error: s,
            path: t.path,
            input: t.input,
            ctx: t.ctx,
            type: t.type,
            req: o,
          });
        const l = {
            error: r.getErrorShape({
              config: n._def._config,
              error: s,
              type: t.type,
              path: t.path,
              input: t.input,
              ctx: t.ctx,
            }),
          },
          c = i.transformTRPCResponse(n._def._config, l);
        return {
          error: s,
          untransformedJSON: l,
          body: JSON.stringify(c),
        };
      })(t, {
        opts: e,
        ctx: _.valueOrUndefined(),
        type:
          null !== (T = null == o ? void 0 : o.type) && void 0 !== T
            ? T
            : "unknown",
      }),
      u = Oe({
        ctx: a,
        info: o,
        responseMeta: e.responseMeta,
        untransformedJSON: l,
        errors: [s],
        headers: m,
      });
    return new Response(c, { status: u.status, headers: m });
  }
}
Object.defineProperty(t, "Unpromise", {
  enumerable: !0,
  get: function () {
    return k;
  },
}),
  Object.defineProperty(t, "createDeferred", {
    enumerable: !0,
    get: function () {
      return H;
    },
  }),
  Object.defineProperty(t, "getAcceptHeader", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "getRequestInfo", {
    enumerable: !0,
    get: function () {
      return h;
    },
  }),
  Object.defineProperty(t, "isAbortError", {
    enumerable: !0,
    get: function () {
      return m;
    },
  }),
  Object.defineProperty(t, "isPromise", {
    enumerable: !0,
    get: function () {
      return oe;
    },
  }),
  Object.defineProperty(t, "iteratorResource", {
    enumerable: !0,
    get: function () {
      return U;
    },
  }),
  Object.defineProperty(t, "jsonlStreamConsumer", {
    enumerable: !0,
    get: function () {
      return ue;
    },
  }),
  Object.defineProperty(t, "jsonlStreamProducer", {
    enumerable: !0,
    get: function () {
      return se;
    },
  }),
  Object.defineProperty(t, "makeAsyncResource", {
    enumerable: !0,
    get: function () {
      return A;
    },
  }),
  Object.defineProperty(t, "makeResource", {
    enumerable: !0,
    get: function () {
      return I;
    },
  }),
  Object.defineProperty(t, "parseConnectionParamsFromString", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(t, "parseConnectionParamsFromUnknown", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(t, "resolveResponse", {
    enumerable: !0,
    get: function () {
      return Me;
    },
  }),
  Object.defineProperty(t, "sseHeaders", {
    enumerable: !0,
    get: function () {
      return Ee;
    },
  }),
  Object.defineProperty(t, "sseStreamConsumer", {
    enumerable: !0,
    get: function () {
      return we;
    },
  }),
  Object.defineProperty(t, "sseStreamProducer", {
    enumerable: !0,
    get: function () {
      return _e;
    },
  }),
  Object.defineProperty(t, "takeWithGrace", {
    enumerable: !0,
    get: function () {
      return B;
    },
  }),
  Object.defineProperty(t, "throwAbortError", {
    enumerable: !0,
    get: function () {
      return g;
    },
  });
