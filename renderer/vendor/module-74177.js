// vendor/module-74177.js — webpack module 74177
// params: (e, t, n) = (module, exports, require)
const r = n(45284 /* vendor/module-45284 */),
  o = n(94680 /* vendor/module-94680 */),
  i = n(18898 /* vendor/module-18898 */);
var a = r.__toESM(r.require_objectSpread2(), 1);
const s = "middlewareMarker";
function l() {
  function e(t) {
    return {
      _middlewares: t,
      unstable_pipe(n) {
        const r = "_middlewares" in n ? n._middlewares : [n];
        return e([...t, ...r]);
      },
    };
  }
  return function (t) {
    return e([t]);
  };
}
const c = () => ({ create: l() });
function u(e) {
  const t = async function (t) {
    let n;
    const r = await t.getRawInput();
    try {
      n = await e(r);
    } catch (e) {
      throw new i.TRPCError({ code: "BAD_REQUEST", cause: e });
    }
    const s =
      o.isObject(t.input) && o.isObject(n)
        ? (0, a.default)((0, a.default)({}, t.input), n)
        : n;
    return t.next({ input: s });
  };
  return (t._type = "input"), t;
}
function d(e) {
  const t = async function ({ next: t }) {
    const n = await t();
    if (!n.ok) return n;
    try {
      const t = await e(n.data);
      return (0, a.default)((0, a.default)({}, n), {}, { data: t });
    } catch (e) {
      throw new i.TRPCError({
        message: "Output validation failed",
        code: "INTERNAL_SERVER_ERROR",
        cause: e,
      });
    }
  };
  return (t._type = "output"), t;
}
var p = r.__toESM(r.require_defineProperty(), 1),
  f = class extends Error {
    constructor(e) {
      var t;
      super(null === (t = e[0]) || void 0 === t ? void 0 : t.message),
        (0, p.default)(this, "issues", void 0),
        (this.name = "SchemaError"),
        (this.issues = e);
    }
  };
function h(e) {
  const t = e,
    n = "~standard" in t;
  if ("function" == typeof t && "function" == typeof t.assert)
    return t.assert.bind(t);
  if ("function" == typeof t && !n) return t;
  if ("function" == typeof t.parseAsync) return t.parseAsync.bind(t);
  if ("function" == typeof t.parse) return t.parse.bind(t);
  if ("function" == typeof t.validateSync) return t.validateSync.bind(t);
  if ("function" == typeof t.create) return t.create.bind(t);
  if ("function" == typeof t.assert) return (e) => (t.assert(e), e);
  if (n)
    return async (e) => {
      const n = await t["~standard"].validate(e);
      if (n.issues) throw new f(n.issues);
      return n.value;
    };
  throw new Error("Could not find a validator fn");
}
var m = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(
      e,
      t,
    ) {
      (t.exports = function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  g = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(
      e,
      t,
    ) {
      var n = m();
      (t.exports = function (e, t) {
        if (null == e) return {};
        var r,
          o,
          i = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              t.includes(r) ||
                ({}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  y = r.__toESM(g(), 1),
  v = r.__toESM(r.require_objectSpread2(), 1);
const b = ["middlewares", "inputs", "meta"];
function S(e, t) {
  const { middlewares: n = [], inputs: r, meta: i } = t,
    a = (0, y.default)(t, b);
  return _(
    (0, v.default)(
      (0, v.default)({}, o.mergeWithoutOverrides(e, a)),
      {},
      {
        inputs: [...e.inputs, ...(null != r ? r : [])],
        middlewares: [...e.middlewares, ...n],
        meta:
          e.meta && i
            ? (0, v.default)((0, v.default)({}, e.meta), i)
            : null != i
              ? i
              : e.meta,
      },
    ),
  );
}
function _(e = {}) {
  const t = (0, v.default)({ procedure: !0, inputs: [], middlewares: [] }, e);
  return {
    _def: t,
    input(e) {
      const n = h(e);
      return S(t, { inputs: [e], middlewares: [u(n)] });
    },
    output(e) {
      const n = h(e);
      return S(t, { output: e, middlewares: [d(n)] });
    },
    meta: (e) => S(t, { meta: e }),
    use(e) {
      const n = "_middlewares" in e ? e._middlewares : [e];
      return S(t, { middlewares: n });
    },
    unstable_concat: (e) => S(t, e._def),
    concat: (e) => S(t, e._def),
    query: (e) =>
      x((0, v.default)((0, v.default)({}, t), {}, { type: "query" }), e),
    mutation: (e) =>
      x((0, v.default)((0, v.default)({}, t), {}, { type: "mutation" }), e),
    subscription: (e) =>
      x((0, v.default)((0, v.default)({}, t), {}, { type: "subscription" }), e),
    experimental_caller: (e) => S(t, { caller: e }),
  };
}
function x(e, t) {
  const n = S(e, {
      resolver: t,
      middlewares: [
        async function (e) {
          const n = await t(e);
          return { marker: s, ok: !0, data: n, ctx: e.ctx };
        },
      ],
    }),
    r = (0, v.default)(
      (0, v.default)({}, n._def),
      {},
      {
        type: e.type,
        experimental_caller: Boolean(n._def.caller),
        meta: n._def.meta,
        $types: null,
      },
    ),
    o = (function (e) {
      async function t(t) {
        if (!t || !("getRawInput" in t)) throw new Error(w);
        const n = await E(0, e, t);
        if (!n)
          throw new i.TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message:
              "No result from middlewares - did you forget to `return next()`?",
          });
        if (!n.ok) throw n.error;
        return n.data;
      }
      return (t._def = e), (t.procedure = !0), (t.meta = e.meta), t;
    })(n._def),
    a = n._def.caller;
  if (!a) return o;
  const l = async (...e) => await a({ args: e, invoke: o, _def: r });
  return (l._def = r), l;
}
const w =
  "\nThis is a client-only function.\nIf you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls\n".trim();
async function E(e, t, n) {
  try {
    const r = t.middlewares[e];
    return await r(
      (0, v.default)(
        (0, v.default)({}, n),
        {},
        {
          meta: t.meta,
          input: n.input,
          next(r) {
            var o;
            const i = r;
            return E(
              e + 1,
              t,
              (0, v.default)(
                (0, v.default)({}, n),
                {},
                {
                  ctx: (null == i ? void 0 : i.ctx)
                    ? (0, v.default)((0, v.default)({}, n.ctx), i.ctx)
                    : n.ctx,
                  input: i && "input" in i ? i.input : n.input,
                  getRawInput:
                    null !== (o = null == i ? void 0 : i.getRawInput) &&
                    void 0 !== o
                      ? o
                      : n.getRawInput,
                },
              ),
            );
          },
        },
      ),
    );
  } catch (e) {
    return { ok: !1, error: i.getTRPCErrorFromUnknown(e), marker: s };
  }
}
var T, k, C;
const I =
  "undefined" == typeof window ||
  "Deno" in window ||
  "test" ===
    (null === (T = globalThis.process) ||
    void 0 === T ||
    null === (T = T.env) ||
    void 0 === T
      ? void 0
      : T.NODE_ENV) ||
  !!(null === (k = globalThis.process) ||
  void 0 === k ||
  null === (k = k.env) ||
  void 0 === k
    ? void 0
    : k.JEST_WORKER_ID) ||
  !!(null === (C = globalThis.process) ||
  void 0 === C ||
  null === (C = C.env) ||
  void 0 === C
    ? void 0
    : C.VITEST_WORKER_ID);
var A = r.__toESM(r.require_objectSpread2(), 1);
const O = new (class e {
  context() {
    return new e();
  }
  meta() {
    return new e();
  }
  create(e) {
    var t, n, r, o, a, s;
    const c = (0, A.default)(
      (0, A.default)({}, e),
      {},
      {
        transformer: i.getDataTransformer(
          null !== (t = null == e ? void 0 : e.transformer) && void 0 !== t
            ? t
            : i.defaultTransformer,
        ),
        isDev:
          null !== (n = null == e ? void 0 : e.isDev) && void 0 !== n
            ? n
            : "production" !==
              (null === (r = globalThis.process) || void 0 === r
                ? void 0
                : r.env.NODE_ENV),
        allowOutsideOfServer:
          null !== (o = null == e ? void 0 : e.allowOutsideOfServer) &&
          void 0 !== o &&
          o,
        errorFormatter:
          null !== (a = null == e ? void 0 : e.errorFormatter) && void 0 !== a
            ? a
            : i.defaultFormatter,
        isServer:
          null !== (s = null == e ? void 0 : e.isServer) && void 0 !== s
            ? s
            : I,
        $types: null,
      },
    );
    var u;
    if (
      !(null !== (u = null == e ? void 0 : e.isServer) && void 0 !== u
        ? u
        : I) &&
      !0 !== (null == e ? void 0 : e.allowOutsideOfServer)
    )
      throw new Error(
        "You're trying to use @trpc/server in a non-server environment. This is not supported by default.",
      );
    return {
      _config: c,
      procedure: _({ meta: null == e ? void 0 : e.defaultMeta }),
      middleware: l(),
      router: i.createRouterFactory(c),
      mergeRouters: i.mergeRouters,
      createCallerFactory: i.createCallerFactory(),
    };
  }
})();
Object.defineProperty(t, "StandardSchemaV1Error", {
  enumerable: !0,
  get: function () {
    return f;
  },
}),
  Object.defineProperty(t, "createBuilder", {
    enumerable: !0,
    get: function () {
      return _;
    },
  }),
  Object.defineProperty(t, "createInputMiddleware", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "createMiddlewareFactory", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(t, "createOutputMiddleware", {
    enumerable: !0,
    get: function () {
      return d;
    },
  }),
  Object.defineProperty(t, "experimental_standaloneMiddleware", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(t, "getParseFn", {
    enumerable: !0,
    get: function () {
      return h;
    },
  }),
  Object.defineProperty(t, "initTRPC", {
    enumerable: !0,
    get: function () {
      return O;
    },
  }),
  Object.defineProperty(t, "isServerDefault", {
    enumerable: !0,
    get: function () {
      return I;
    },
  }),
  Object.defineProperty(t, "middlewareMarker", {
    enumerable: !0,
    get: function () {
      return s;
    },
  });
