// vendor/module-21692.js — webpack module 21692
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(84540 /* vendor/module-84540 */),
  i = n(4064 /* vendor/module-4064 */),
  a = n(59295 /* vendor/module-59295 */),
  s = n(18277 /* vendor/module-18277 */),
  l = n(82056 /* vendor/module-82056 */),
  c = n(15606 /* vendor/module-15606 */),
  u = n(44587 /* vendor/module-44587 */),
  d = n(49419 /* vendor/module-49419 */),
  p = n(15556 /* vendor/module-15556 */),
  f = r.__toESM(n(65566 /* vendor/module-65566 */)),
  h = r.__toESM(n(35e3)),
  m = r.__toESM(n(42904 /* vendor/module-42904 */)),
  g = r.__toESM(n(99341 /* vendor/module-99341 */));
var y = r.__toESM(i.require_defineProperty(), 1),
  v = r.__toESM(i.require_objectSpread2(), 1),
  b = class {
    constructor(e) {
      (0, y.default)(this, "links", void 0),
        (0, y.default)(this, "runtime", void 0),
        (0, y.default)(this, "requestId", void 0),
        (this.requestId = 0),
        (this.runtime = {}),
        (this.links = e.links.map((e) => e(this.runtime)));
    }
    $request(e) {
      var t;
      return o
        .createChain({
          links: this.links,
          op: (0, v.default)(
            (0, v.default)({}, e),
            {},
            {
              context: null !== (t = e.context) && void 0 !== t ? t : {},
              id: ++this.requestId,
            },
          ),
        })
        .pipe((0, f.share)());
    }
    async requestAsPromise(e) {
      try {
        const t = this.$request(e);
        return (await (0, f.observableToPromise)(t)).result.data;
      } catch (e) {
        throw a.TRPCClientError.from(e);
      }
    }
    query(e, t, n) {
      return this.requestAsPromise({
        type: "query",
        path: e,
        input: t,
        context: null == n ? void 0 : n.context,
        signal: null == n ? void 0 : n.signal,
      });
    }
    mutation(e, t, n) {
      return this.requestAsPromise({
        type: "mutation",
        path: e,
        input: t,
        context: null == n ? void 0 : n.context,
        signal: null == n ? void 0 : n.signal,
      });
    }
    subscription(e, t, n) {
      return this.$request({
        type: "subscription",
        path: e,
        input: t,
        context: n.context,
        signal: n.signal,
      }).subscribe({
        next(e) {
          switch (e.result.type) {
            case "state":
              var t;
              null === (t = n.onConnectionStateChange) ||
                void 0 === t ||
                t.call(n, e.result);
              break;
            case "started":
              var r;
              null === (r = n.onStarted) ||
                void 0 === r ||
                r.call(n, { context: e.context });
              break;
            case "stopped":
              var o;
              null === (o = n.onStopped) || void 0 === o || o.call(n);
              break;
            case "data":
            case void 0:
              var i;
              null === (i = n.onData) ||
                void 0 === i ||
                i.call(n, e.result.data);
          }
        },
        error(e) {
          var t;
          null === (t = n.onError) || void 0 === t || t.call(n, e);
        },
        complete() {
          var e;
          null === (e = n.onComplete) || void 0 === e || e.call(n);
        },
      });
    }
  };
const S = Symbol.for("trpc_untypedClient"),
  _ = {
    query: "query",
    mutate: "mutation",
    subscribe: "subscription",
  },
  x = (e) => _[e];
function w(e) {
  const t = (0, h.createRecursiveProxy)(({ path: t, args: n }) => {
    const r = [...t],
      o = x(r.pop()),
      i = r.join(".");
    return e[o](i, ...n);
  });
  return (0, h.createFlatProxy)((n) => (n === S ? e : t[n]));
}
function E(e) {
  return w(new b(e));
}
var T = r.__toESM(i.require_objectSpread2(), 1);
function k(e) {
  var t, n;
  const r = s.resolveHTTPLinkOptions(e),
    o = null !== (t = e.maxURLLength) && void 0 !== t ? t : 1 / 0,
    i = null !== (n = e.maxItems) && void 0 !== n ? n : 1 / 0;
  return () => {
    const t = (t) => ({
        validate(e) {
          if (o === 1 / 0 && i === 1 / 0) return !0;
          if (e.length > i) return !1;
          const n = e.map((e) => e.path).join(","),
            a = e.map((e) => e.input);
          return (
            s.getUrl(
              (0, T.default)(
                (0, T.default)({}, r),
                {},
                { type: t, path: n, inputs: a, signal: null },
              ),
            ).length <= o
          );
        },
        async fetch(n) {
          var o;
          const i = n.map((e) => e.path).join(","),
            l = n.map((e) => e.input),
            u = c.allAbortSignals(...n.map((e) => e.signal)),
            d = new AbortController(),
            p = s.fetchHTTPResponse(
              (0, T.default)(
                (0, T.default)({}, r),
                {},
                {
                  signal: c.raceAbortSignals(u, d.signal),
                  type: t,
                  contentTypeHeader: "application/json",
                  trpcAcceptHeader: "application/jsonl",
                  trpcAcceptHeaderKey:
                    null !== (o = e.streamHeader) && void 0 !== o
                      ? o
                      : "trpc-accept",
                  getUrl: s.getUrl,
                  getBody: s.getBody,
                  inputs: l,
                  path: i,
                  headers: () =>
                    e.headers
                      ? "function" == typeof e.headers
                        ? e.headers({ opList: n })
                        : e.headers
                      : {},
                },
              ),
            ),
            f = await p;
          if (!f.ok) {
            const e = await f.json();
            return (
              "error" in e &&
                (e.error = r.transformer.output.deserialize(e.error)),
              n.map(() => Promise.resolve({ json: e, meta: { response: f } }))
            );
          }
          const [m] = await (0, h.jsonlStreamConsumer)({
            from: f.body,
            deserialize: (e) => r.transformer.output.deserialize(e),
            formatError(e) {
              const t = e.error;
              return a.TRPCClientError.from({ error: t });
            },
            abortController: d,
          });
          return Object.keys(n).map(async (e) => {
            let t = await Promise.resolve(m[e]);
            if ("result" in t) {
              const e = await Promise.resolve(t.result);
              t = { result: { data: await Promise.resolve(e.data) } };
            }
            return { json: t, meta: { response: f } };
          });
        },
      }),
      n = {
        query: c.dataLoader(t("query")),
        mutation: c.dataLoader(t("mutation")),
      };
    return ({ op: e }) =>
      (0, f.observable)((t) => {
        if ("subscription" === e.type)
          throw new Error(
            "Subscriptions are unsupported by `httpBatchStreamLink` - use `httpSubscriptionLink` or `wsLink`",
          );
        let r;
        return (
          n[e.type]
            .load(e)
            .then((e) => {
              if (((r = e), !("error" in e.json)))
                return "result" in e.json
                  ? (t.next({
                      context: e.meta,
                      result: e.json.result,
                    }),
                    void t.complete())
                  : void t.complete();
              t.error(a.TRPCClientError.from(e.json, { meta: e.meta }));
            })
            .catch((e) => {
              t.error(
                a.TRPCClientError.from(e, {
                  meta: null == r ? void 0 : r.meta,
                }),
              );
            }),
          () => {}
        );
      });
  };
}
const C = k;
var I = r.__toESM(i.require_objectSpread2(), 1);
function A(e, t) {
  return t
    ? null != e && "object" != typeof e
      ? e
      : (0, I.default)(
          (0, I.default)({}, null != e ? e : {}),
          {},
          { lastEventId: t },
        )
    : e;
}
var O = r.__commonJS({
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
  R = r.__toESM(O(), 1);
async function M(e) {
  let t = await p.resultOf(e.url);
  if (e.connectionParams) {
    const n = await p.resultOf(e.connectionParams),
      r = t.includes("?") ? "&" : "?";
    t += r + "connectionParams=" + encodeURIComponent(JSON.stringify(n));
  }
  return t;
}
function P(e) {
  const t = u.getTransformer(e.transformer);
  return () =>
    ({ op: n }) =>
      (0, f.observable)((r) => {
        var o;
        const { type: i, path: l, input: u } = n;
        if ("subscription" !== i)
          throw new Error("httpSubscriptionLink only supports subscriptions");
        let d;
        const m = new AbortController(),
          g = c.raceAbortSignals(n.signal, m.signal),
          y = (0, h.sseStreamConsumer)({
            url: async () =>
              s.getUrl({
                transformer: t,
                url: await M(e),
                input: A(u, d),
                path: l,
                type: i,
                signal: null,
              }),
            init: () => p.resultOf(e.eventSourceOptions, { op: n }),
            signal: g,
            deserialize: (e) => t.output.deserialize(e),
            EventSource:
              null !== (o = e.EventSource) && void 0 !== o
                ? o
                : globalThis.EventSource,
          }),
          v = (0, f.behaviorSubject)({
            type: "state",
            state: "connecting",
            error: null,
          }),
          b = v.subscribe({
            next(e) {
              r.next({ result: e });
            },
          });
        return (
          (0, h.run)(async () => {
            var e,
              t = !1,
              n = !1;
            try {
              for (
                var o, i = (0, R.default)(y);
                (t = !(o = await i.next()).done);
                t = !1
              ) {
                const e = o.value;
                switch (e.type) {
                  case "ping":
                    break;
                  case "data":
                    const t = e.data;
                    let n;
                    t.id
                      ? ((d = t.id), (n = { id: t.id, data: t }))
                      : (n = { data: t.data }),
                      r.next({
                        result: n,
                        context: { eventSource: e.eventSource },
                      });
                    break;
                  case "connected":
                    r.next({
                      result: { type: "started" },
                      context: { eventSource: e.eventSource },
                    }),
                      v.next({
                        type: "state",
                        state: "pending",
                        error: null,
                      });
                    break;
                  case "serialized-error": {
                    const t = a.TRPCClientError.from({
                      error: e.error,
                    });
                    if (h.retryableRpcCodes.includes(e.error.code)) {
                      v.next({
                        type: "state",
                        state: "connecting",
                        error: t,
                      });
                      break;
                    }
                    throw t;
                  }
                  case "connecting": {
                    const t = v.get(),
                      n = e.event && a.TRPCClientError.from(e.event);
                    if (!n && "connecting" === t.state) break;
                    v.next({
                      type: "state",
                      state: "connecting",
                      error: n,
                    });
                    break;
                  }
                  case "timeout":
                    v.next({
                      type: "state",
                      state: "connecting",
                      error: new a.TRPCClientError(
                        `Timeout of ${e.ms}ms reached while waiting for a response`,
                      ),
                    });
                }
              }
            } catch (t) {
              (n = !0), (e = t);
            } finally {
              try {
                t && null != i.return && (await i.return());
              } finally {
                if (n) throw e;
              }
            }
            r.next({ result: { type: "stopped" } }),
              v.next({ type: "state", state: "idle", error: null }),
              r.complete();
          }).catch((e) => {
            r.error(a.TRPCClientError.from(e));
          }),
          () => {
            r.complete(), m.abort(), b.unsubscribe();
          }
        );
      });
}
const N = P;
var D = r.__toESM(i.require_objectSpread2(), 1),
  j = r.__commonJS({
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
  L = r.__commonJS({
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
  F = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(
      e,
      t,
    ) {
      var n = L();
      (t.exports = function (e) {
        return new n(e, 0);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  U = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(
      e,
      t,
    ) {
      var n = L();
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
  B = r.__toESM(j(), 1),
  z = r.__toESM(F(), 1),
  H = r.__toESM(U(), 1),
  V = r.__toESM(i.require_objectSpread2(), 1);
function q(e) {
  const t = u.getTransformer(e.transformer),
    n = (n) => {
      if (e.transformer) return n;
      if (void 0 === n) return n;
      const r = JSON.stringify(t.input.serialize(n));
      return JSON.parse(t.output.deserialize(r));
    };
  return () =>
    ({ op: t }) =>
      (0, f.observable)((r) => {
        let o;
        const i = new AbortController(),
          s = c.raceAbortSignals(t.signal, i.signal),
          l = c.abortSignalToPromise(s);
        l.catch(() => {});
        let u = t.input;
        async function d(n) {
          return (
            (u = n),
            (o = await e.createContext()),
            (0, h.callProcedure)({
              router: e.router,
              path: t.path,
              getRawInput: async () => n,
              ctx: o,
              type: t.type,
              signal: s,
              batchIndex: 0,
            })
          );
        }
        function p(n) {
          var r;
          (0, h.isAbortError)(n) ||
            null === (r = e.onError) ||
            void 0 === r ||
            r.call(e, {
              error: (0, m.getTRPCErrorFromUnknown)(n),
              type: t.type,
              path: t.path,
              input: u,
              ctx: o,
            });
        }
        function y(r) {
          if (a.isTRPCClientError(r)) return r;
          const i = (0, m.getTRPCErrorFromUnknown)(r),
            s = (0, m.getTRPCErrorShape)({
              config: e.router._def._config,
              ctx: o,
              error: i,
              input: u,
              path: t.path,
              type: t.type,
            });
          return a.TRPCClientError.from(
            { error: n(s) },
            { cause: r instanceof Error ? r : void 0 },
          );
        }
        return (
          (0, h.run)(async () => {
            switch (t.type) {
              case "query":
              case "mutation": {
                const e = await d(t.input);
                if (!(0, h.isAsyncIterable)(e)) {
                  r.next({ result: { data: n(e) } }), r.complete();
                  break;
                }
                r.next({
                  result: {
                    data: (0, H.default)(function* () {
                      try {
                        var t = (0, B.default)();
                        const o = t.a((0, h.iteratorResource)(e));
                        t.u(
                          (0, h.makeResource)({}, () => {
                            r.complete();
                          }),
                        );
                        try {
                          for (;;) {
                            const e = yield (0, z.default)(
                              Promise.race([o.next(), l]),
                            );
                            if (e.done) return n(e.value);
                            yield n(e.value);
                          }
                        } catch (e) {
                          throw (p(e), y(e));
                        }
                      } catch (e) {
                        t.e = e;
                      } finally {
                        yield (0, z.default)(t.d());
                      }
                    })(),
                  },
                });
                break;
              }
              case "subscription":
                try {
                  var e = (0, B.default)();
                  const i = (0, f.behaviorSubject)({
                      type: "state",
                      state: "connecting",
                      error: null,
                    }),
                    a = i.subscribe({
                      next(e) {
                        r.next({ result: e });
                      },
                    });
                  let s;
                  for (
                    e.u(
                      (0, h.makeResource)({}, async () => {
                        r.complete(),
                          i.next({
                            type: "state",
                            state: "idle",
                            error: null,
                          }),
                          a.unsubscribe();
                      }),
                    );
                    ;

                  )
                    try {
                      var o = (0, B.default)();
                      const e = await d(A(t.input, s));
                      if (!(0, h.isAsyncIterable)(e))
                        throw new Error("Expected an async iterable");
                      const a = o.a((0, h.iteratorResource)(e));
                      for (
                        r.next({ result: { type: "started" } }),
                          i.next({
                            type: "state",
                            state: "pending",
                            error: null,
                          });
                        ;

                      ) {
                        let e, t;
                        try {
                          e = await Promise.race([a.next(), l]);
                        } catch (e) {
                          if ((0, h.isAbortError)(e)) return;
                          const t = (0, m.getTRPCErrorFromUnknown)(e);
                          if (
                            !h.retryableRpcCodes.includes(
                              g.TRPC_ERROR_CODES_BY_KEY[t.code],
                            )
                          )
                            throw y(t);
                          p(t),
                            i.next({
                              type: "state",
                              state: "connecting",
                              error: y(t),
                            });
                          break;
                        }
                        if (e.done) return;
                        (0, m.isTrackedEnvelope)(e.value)
                          ? ((s = e.value[0]),
                            (t = {
                              id: e.value[0],
                              data: {
                                id: e.value[0],
                                data: e.value[1],
                              },
                            }))
                          : (t = { data: e.value }),
                          r.next({
                            result: (0, V.default)(
                              (0, V.default)({}, t),
                              {},
                              { data: n(t.data) },
                            ),
                          });
                      }
                    } catch (e) {
                      o.e = e;
                    } finally {
                      await o.d();
                    }
                  break;
                } catch (t) {
                  e.e = t;
                } finally {
                  e.d();
                }
            }
          }).catch((e) => {
            p(e), r.error(y(e));
          }),
          () => {
            i.abort();
          }
        );
      });
}
const G = q;
(t.TRPCClientError = a.TRPCClientError),
  (t.TRPCUntypedClient = b),
  (t.clientCallTypeToProcedureType = x),
  (t.createTRPCClient = E),
  (t.createTRPCClientProxy = w),
  (t.createTRPCProxyClient = E),
  (t.createTRPCUntypedClient = function (e) {
    return new b(e);
  }),
  (t.createWSClient = p.createWSClient),
  (t.experimental_localLink = G),
  (t.getFetch = s.getFetch),
  (t.getUntypedClient = function (e) {
    return e[S];
  }),
  (t.httpBatchLink = c.httpBatchLink),
  (t.httpBatchStreamLink = k),
  (t.httpLink = l.httpLink),
  (t.httpSubscriptionLink = P),
  (t.isFormData = l.isFormData),
  (t.isNonJsonSerializable = l.isNonJsonSerializable),
  (t.isOctetType = l.isOctetType),
  (t.isTRPCClientError = a.isTRPCClientError),
  (t.jsonEncoder = p.jsonEncoder),
  (t.loggerLink = d.loggerLink),
  (t.retryLink = function (e) {
    return () => (t) =>
      (0, f.observable)((n) => {
        let r, o, i;
        return (
          (function a(s) {
            const l = (function () {
              const e = t.op;
              return i
                ? (0, D.default)(
                    (0, D.default)({}, e),
                    {},
                    { input: A(e.input, i) },
                  )
                : e;
            })();
            r = t.next(l).subscribe({
              error(t) {
                var r, i;
                if (!e.retry({ op: l, attempts: s, error: t }))
                  return void n.error(t);
                const c =
                  null !==
                    (r =
                      null === (i = e.retryDelayMs) || void 0 === i
                        ? void 0
                        : i.call(e, s)) && void 0 !== r
                    ? r
                    : 0;
                c <= 0 ? a(s + 1) : (o = setTimeout(() => a(s + 1), c));
              },
              next(e) {
                (e.result.type && "data" !== e.result.type) ||
                  !e.result.id ||
                  (i = e.result.id),
                  n.next(e);
              },
              complete() {
                n.complete();
              },
            });
          })(1),
          () => {
            r.unsubscribe(), clearTimeout(o);
          }
        );
      });
  }),
  (t.splitLink = o.splitLink),
  (t.unstable_httpBatchStreamLink = C),
  (t.unstable_httpSubscriptionLink = N),
  (t.unstable_localLink = q),
  (t.wsLink = p.wsLink);
