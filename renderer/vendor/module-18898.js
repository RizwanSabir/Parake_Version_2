// vendor/module-18898.js — webpack module 18898
// params: (e, t, n) = (module, exports, require)
const r = n(45284 /* vendor/module-45284 */),
  o = n(94680 /* vendor/module-94680 */),
  i = ({ shape: e }) => e;
var a = r.__toESM(r.require_defineProperty(), 1),
  s = class extends Error {
    constructor(e) {
      super(
        (function (e) {
          return "message" in e ? String(e.message) : void 0;
        })(e),
      ),
        Object.assign(this, e);
    }
  };
function l(e) {
  if (e instanceof Error) return e;
  const t = typeof e;
  return "undefined" !== t && "function" !== t && null !== e
    ? "object" !== t
      ? new Error(String(e))
      : o.isObject(e)
        ? new s(e)
        : void 0
    : void 0;
}
function c(e) {
  if (e instanceof u) return e;
  if (e instanceof Error && "TRPCError" === e.name) return e;
  const t = new u({ code: "INTERNAL_SERVER_ERROR", cause: e });
  return e instanceof Error && e.stack && (t.stack = e.stack), t;
}
var u = class extends Error {
    constructor(e) {
      var t, n, r;
      const o = l(e.cause);
      super(
        null !==
          (t =
            null !== (n = e.message) && void 0 !== n
              ? n
              : null == o
                ? void 0
                : o.message) && void 0 !== t
          ? t
          : e.code,
        { cause: o },
      ),
        (0, a.default)(this, "cause", void 0),
        (0, a.default)(this, "code", void 0),
        (this.code = e.code),
        (this.name = "TRPCError"),
        (null !== (r = this.cause) && void 0 !== r) || (this.cause = o);
    }
  },
  d = r.__toESM(r.require_objectSpread2(), 1);
function p(e) {
  return "input" in e ? e : { input: e, output: e };
}
const f = {
  input: { serialize: (e) => e, deserialize: (e) => e },
  output: { serialize: (e) => e, deserialize: (e) => e },
};
function h(e, t) {
  return "error" in t
    ? (0, d.default)(
        (0, d.default)({}, t),
        {},
        { error: e.transformer.output.serialize(t.error) },
      )
    : "data" in t.result
      ? (0, d.default)(
          (0, d.default)({}, t),
          {},
          {
            result: (0, d.default)(
              (0, d.default)({}, t.result),
              {},
              { data: e.transformer.output.serialize(t.result.data) },
            ),
          },
        )
      : t;
}
function m(e, t) {
  return Array.isArray(t) ? t.map((t) => h(e, t)) : h(e, t);
}
var g = class extends Error {
  constructor() {
    super("Unable to transform response from server");
  }
};
function y(e, t) {
  let n;
  try {
    n = (function (e, t) {
      if ("error" in e) {
        const n = t.deserialize(e.error);
        return {
          ok: !1,
          error: (0, d.default)((0, d.default)({}, e), {}, { error: n }),
        };
      }
      return {
        ok: !0,
        result: (0, d.default)(
          (0, d.default)({}, e.result),
          (!e.result.type || "data" === e.result.type) && {
            type: "data",
            data: t.deserialize(e.result.data),
          },
        ),
      };
    })(e, t);
  } catch (e) {
    throw new g();
  }
  if (
    !(
      n.ok ||
      (o.isObject(n.error.error) && "number" == typeof n.error.error.code)
    )
  )
    throw new g();
  if (n.ok && !o.isObject(n.result)) throw new g();
  return n;
}
var v = r.__toESM(r.require_objectSpread2(), 1);
const b = "lazyMarker";
function S(e) {
  const t = Symbol();
  let n = t;
  return () => (n === t && (n = e()), n);
}
function _(e) {
  async function t() {
    const t = await e();
    if (w(t)) return t;
    const n = Object.values(t);
    if (1 !== n.length || !w(n[0]))
      throw new Error(
        "Invalid router module - either define exactly 1 export or return the router directly.\nExample: `lazy(() => import('./slow.js').then((m) => m.slowRouter))`",
      );
    return n[0];
  }
  return (t[b] = !0), t;
}
function x(e) {
  return "function" == typeof e && b in e;
}
function w(e) {
  return o.isObject(e) && o.isObject(e._def) && "router" in e._def;
}
const E = {
    _ctx: null,
    _errorShape: null,
    _meta: null,
    queries: {},
    mutations: {},
    subscriptions: {},
    errorFormatter: i,
    transformer: f,
  },
  T = ["then", "call", "apply"];
function k(e) {
  return function (t) {
    const n = new Set(Object.keys(t).filter((e) => T.includes(e)));
    if (n.size > 0)
      throw new Error(
        "Reserved words used in `router({})` call: " + Array.from(n).join(", "),
      );
    const r = o.emptyObject(),
      i = o.emptyObject();
    function a(e) {
      return {
        ref: e.ref,
        load: S(async () => {
          const t = await e.ref(),
            n = [...e.path, e.key],
            r = n.join(".");
          (e.aggregate[e.key] = s(t._def.record, n)), delete i[r];
          for (const [r, o] of Object.entries(t._def.lazy)) {
            const t = [...n, r].join(".");
            i[t] = a({
              ref: o.ref,
              path: n,
              key: r,
              aggregate: e.aggregate[e.key],
            });
          }
        }),
      };
    }
    function s(e, t = []) {
      const n = o.emptyObject();
      for (const [o, l] of Object.entries(null != e ? e : {})) {
        if (x(l)) {
          i[[...t, o].join(".")] = a({
            path: t,
            ref: l,
            key: o,
            aggregate: n,
          });
          continue;
        }
        if (w(l)) {
          n[o] = s(l._def.record, [...t, o]);
          continue;
        }
        if (!C(l)) {
          n[o] = s(l, [...t, o]);
          continue;
        }
        const e = [...t, o].join(".");
        if (r[e]) throw new Error(`Duplicate key: ${e}`);
        (r[e] = l), (n[o] = l);
      }
      return n;
    }
    const l = s(t),
      c = (0, v.default)(
        (0, v.default)({ _config: e, router: !0, procedures: r, lazy: i }, E),
        {},
        { record: l },
      );
    return (0, v.default)(
      (0, v.default)({}, l),
      {},
      { _def: c, createCaller: O()({ _def: c }) },
    );
  };
}
function C(e) {
  return "function" == typeof e;
}
async function I(e, t) {
  const { _def: n } = e;
  let r = n.procedures[t];
  for (; !r; ) {
    const e = Object.keys(n.lazy).find((e) => t.startsWith(e));
    if (!e) return null;
    const o = n.lazy[e];
    await o.load(), (r = n.procedures[t]);
  }
  return r;
}
async function A(e) {
  const { type: t, path: n } = e,
    r = await I(e.router, n);
  if (!r || !C(r) || (r._def.type !== t && !e.allowMethodOverride))
    throw new u({
      code: "NOT_FOUND",
      message: `No "${t}"-procedure on path "${n}"`,
    });
  if (
    r._def.type !== t &&
    e.allowMethodOverride &&
    "subscription" === r._def.type
  )
    throw new u({
      code: "METHOD_NOT_SUPPORTED",
      message: "Method override is not supported for subscriptions",
    });
  return r(e);
}
function O() {
  return function (e) {
    const { _def: t } = e;
    return function (n, i) {
      return r.createRecursiveProxy(async (r) => {
        const { path: a, args: s } = r,
          l = a.join(".");
        if (1 === a.length && "_def" === a[0]) return t;
        const d = await I(e, l);
        let p;
        try {
          if (!d)
            throw new u({
              code: "NOT_FOUND",
              message: `No procedure found on path "${a}"`,
            });
          return (
            (p = o.isFunction(n) ? await Promise.resolve(n()) : n),
            await d({
              path: l,
              getRawInput: async () => s[0],
              ctx: p,
              type: d._def.type,
              signal: null == i ? void 0 : i.signal,
              batchIndex: 0,
            })
          );
        } catch (e) {
          var f, h;
          throw (
            (null == i ||
              null === (f = i.onError) ||
              void 0 === f ||
              f.call(i, {
                ctx: p,
                error: c(e),
                input: s[0],
                path: l,
                type:
                  null !== (h = null == d ? void 0 : d._def.type) &&
                  void 0 !== h
                    ? h
                    : "unknown",
              }),
            e)
          );
        }
      });
    };
  };
}
function R(...e) {
  var t, n;
  const r = o.mergeWithoutOverrides({}, ...e.map((e) => e._def.record));
  return k({
    errorFormatter: e.reduce((e, t) => {
      if (
        t._def._config.errorFormatter &&
        t._def._config.errorFormatter !== i
      ) {
        if (e !== i && e !== t._def._config.errorFormatter)
          throw new Error("You seem to have several error formatters");
        return t._def._config.errorFormatter;
      }
      return e;
    }, i),
    transformer: e.reduce((e, t) => {
      if (t._def._config.transformer && t._def._config.transformer !== f) {
        if (e !== f && e !== t._def._config.transformer)
          throw new Error("You seem to have several transformers");
        return t._def._config.transformer;
      }
      return e;
    }, f),
    isDev: e.every((e) => e._def._config.isDev),
    allowOutsideOfServer: e.every((e) => e._def._config.allowOutsideOfServer),
    isServer: e.every((e) => e._def._config.isServer),
    $types:
      null === (t = e[0]) || void 0 === t ? void 0 : t._def._config.$types,
    sse: null === (n = e[0]) || void 0 === n ? void 0 : n._def._config.sse,
  })(r);
}
const M = Symbol();
function P(e) {
  return D(e.id, e.data);
}
function N(e) {
  return Array.isArray(e) && e[2] === M;
}
function D(e, t) {
  if ("" === e)
    throw new Error(
      "`id` must not be an empty string as empty string is the same as not setting the id at all",
    );
  return [e, t, M];
}
Object.defineProperty(t, "TRPCError", {
  enumerable: !0,
  get: function () {
    return u;
  },
}),
  Object.defineProperty(t, "callProcedure", {
    enumerable: !0,
    get: function () {
      return A;
    },
  }),
  Object.defineProperty(t, "createCallerFactory", {
    enumerable: !0,
    get: function () {
      return O;
    },
  }),
  Object.defineProperty(t, "createRouterFactory", {
    enumerable: !0,
    get: function () {
      return k;
    },
  }),
  Object.defineProperty(t, "defaultFormatter", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }),
  Object.defineProperty(t, "defaultTransformer", {
    enumerable: !0,
    get: function () {
      return f;
    },
  }),
  Object.defineProperty(t, "getCauseFromUnknown", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(t, "getDataTransformer", {
    enumerable: !0,
    get: function () {
      return p;
    },
  }),
  Object.defineProperty(t, "getProcedureAtPath", {
    enumerable: !0,
    get: function () {
      return I;
    },
  }),
  Object.defineProperty(t, "getTRPCErrorFromUnknown", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(t, "isTrackedEnvelope", {
    enumerable: !0,
    get: function () {
      return N;
    },
  }),
  Object.defineProperty(t, "lazy", {
    enumerable: !0,
    get: function () {
      return _;
    },
  }),
  Object.defineProperty(t, "mergeRouters", {
    enumerable: !0,
    get: function () {
      return R;
    },
  }),
  Object.defineProperty(t, "sse", {
    enumerable: !0,
    get: function () {
      return P;
    },
  }),
  Object.defineProperty(t, "tracked", {
    enumerable: !0,
    get: function () {
      return D;
    },
  }),
  Object.defineProperty(t, "transformResult", {
    enumerable: !0,
    get: function () {
      return y;
    },
  }),
  Object.defineProperty(t, "transformTRPCResponse", {
    enumerable: !0,
    get: function () {
      return m;
    },
  });
