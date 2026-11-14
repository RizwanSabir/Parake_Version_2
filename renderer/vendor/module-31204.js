// vendor/module-31204.js — webpack module 31204
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.unsafeGetReference =
    t.unsafeGet =
    t.pick =
    t.omit =
    t.mergeAll =
    t.merge =
    t.makeGenericTag =
    t.makeContext =
    t.make =
    t.isTag =
    t.isReference =
    t.isContext =
    t.getOrElse =
    t.getOption =
    t.get =
    t.empty =
    t.add =
    t.TypeId =
    t.TagTypeId =
    t.TagProto =
    t.Tag =
    t.STMTypeId =
    t.ReferenceTypeId =
    t.ReferenceProto =
    t.Reference =
    t.ContextProto =
      void 0);
var r = p(n(92957 /* vendor/module-92957 */)),
  o = n(74109 /* vendor/module-74109 */),
  i = n(4001 /* vendor/module-4001 */),
  a = p(n(63101 /* vendor/module-63101 */)),
  s = n(96089 /* vendor/module-96089 */),
  l = n(54281 /* vendor/module-54281 */),
  c = n(84552 /* vendor/module-84552 */),
  u = n(76102 /* vendor/module-76102 */),
  d = p(n(22894 /* vendor/module-22894 */));
function p(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (p = function (e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      a = { __proto__: null, default: e };
    if (null === e || ("object" != typeof e && "function" != typeof e))
      return a;
    if ((o = t ? r : n)) {
      if (o.has(e)) return o.get(e);
      o.set(e, a);
    }
    for (const t in e)
      "default" !== t &&
        {}.hasOwnProperty.call(e, t) &&
        ((i =
          (o = Object.defineProperty) &&
          Object.getOwnPropertyDescriptor(e, t)) &&
        (i.get || i.set)
          ? o(a, t, i)
          : (a[t] = e[t]));
    return a;
  })(e, t);
}
const f = (t.TagTypeId = Symbol.for("effect/Context/Tag")),
  h = (t.ReferenceTypeId = Symbol.for("effect/Context/Reference")),
  m = (t.STMTypeId = Symbol.for("effect/STM")),
  g = (t.TagProto = {
    ...u.EffectPrototype,
    _op: "Tag",
    [m]: u.effectVariance,
    [f]: { _Service: (e) => e, _Identifier: (e) => e },
    toString() {
      return (0, s.format)(this.toJSON());
    },
    toJSON() {
      return { _id: "Tag", key: this.key, stack: this.stack };
    },
    [s.NodeInspectSymbol]() {
      return this.toJSON();
    },
    of: (e) => e,
    context(e) {
      return E(this, e);
    },
  }),
  y = (t.ReferenceProto = { ...g, [h]: h });
(t.makeGenericTag = (e) => {
  const t = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const n = new Error();
  Error.stackTraceLimit = t;
  const r = Object.create(g);
  return (
    Object.defineProperty(r, "stack", { get: () => n.stack }), (r.key = e), r
  );
}),
  (t.Tag = (e) => () => {
    const t = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const n = new Error();
    function r() {}
    return (
      (Error.stackTraceLimit = t),
      Object.setPrototypeOf(r, g),
      (r.key = e),
      Object.defineProperty(r, "stack", { get: () => n.stack }),
      r
    );
  }),
  (t.Reference = () => (e, t) => {
    const n = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const r = new Error();
    function o() {}
    return (
      (Error.stackTraceLimit = n),
      Object.setPrototypeOf(o, y),
      (o.key = e),
      (o.defaultValue = t.defaultValue),
      Object.defineProperty(o, "stack", { get: () => r.stack }),
      o
    );
  });
const v = (t.TypeId = Symbol.for("effect/Context")),
  b = (t.ContextProto = {
    [v]: { _Services: (e) => e },
    [r.symbol](e) {
      if (_(e) && this.unsafeMap.size === e.unsafeMap.size) {
        for (const t of this.unsafeMap.keys())
          if (
            !e.unsafeMap.has(t) ||
            !r.equals(this.unsafeMap.get(t), e.unsafeMap.get(t))
          )
            return !1;
        return !0;
      }
      return !1;
    },
    [a.symbol]() {
      return a.cached(this, a.number(this.unsafeMap.size));
    },
    pipe() {
      return (0, l.pipeArguments)(this, arguments);
    },
    toString() {
      return (0, s.format)(this.toJSON());
    },
    toJSON() {
      return {
        _id: "Context",
        services: Array.from(this.unsafeMap).map(s.toJSON),
      };
    },
    [s.NodeInspectSymbol]() {
      return this.toJSON();
    },
  }),
  S = (e) => {
    const t = Object.create(b);
    return (t.unsafeMap = e), t;
  };
t.makeContext = S;
const _ = (e) => (0, c.hasProperty)(e, v);
(t.isContext = _), (t.isTag = (e) => (0, c.hasProperty)(e, f));
const x = (e) => (0, c.hasProperty)(e, h);
t.isReference = x;
const w = S(new Map());
t.empty = () => w;
const E = (e, t) => S(new Map([[e.key, t]]));
(t.make = E),
  (t.add = (0, o.dual)(3, (e, t, n) => {
    const r = new Map(e.unsafeMap);
    return r.set(t.key, n), S(r);
  }));
const T = (0, i.globalValue)(
    "effect/Context/defaultValueCache",
    () => new Map(),
  ),
  k = (e) => {
    if (T.has(e.key)) return T.get(e.key);
    const t = e.defaultValue();
    return T.set(e.key, t), t;
  };
t.unsafeGetReference = (e, t) =>
  e.unsafeMap.has(t.key) ? e.unsafeMap.get(t.key) : k(t);
const C = (t.unsafeGet = (0, o.dual)(2, (e, t) => {
  if (!e.unsafeMap.has(t.key)) {
    if (h in t) return k(t);
    throw ((e) => {
      const t = new Error(
        "Service not found" + (e.key ? `: ${String(e.key)}` : ""),
      );
      if (e.stack) {
        const n = e.stack.split("\n");
        if (n.length > 2) {
          const e = n[2].match(/at (.*)/);
          e && (t.message = t.message + ` (defined at ${e[1]})`);
        }
      }
      if (t.stack) {
        const e = t.stack.split("\n");
        e.splice(1, 3), (t.stack = e.join("\n"));
      }
      return t;
    })(t);
  }
  return e.unsafeMap.get(t.key);
}));
(t.get = C),
  (t.getOrElse = (0, o.dual)(3, (e, t, n) =>
    e.unsafeMap.has(t.key) ? e.unsafeMap.get(t.key) : x(t) ? k(t) : n(),
  )),
  (t.getOption = (0, o.dual)(2, (e, t) =>
    e.unsafeMap.has(t.key)
      ? d.some(e.unsafeMap.get(t.key))
      : x(t)
        ? d.some(k(t))
        : d.none,
  )),
  (t.merge = (0, o.dual)(2, (e, t) => {
    const n = new Map(e.unsafeMap);
    for (const [e, r] of t.unsafeMap) n.set(e, r);
    return S(n);
  })),
  (t.mergeAll = (...e) => {
    const t = new Map();
    for (const n of e) for (const [e, r] of n.unsafeMap) t.set(e, r);
    return S(t);
  }),
  (t.pick =
    (...e) =>
    (t) => {
      const n = new Set(e.map((e) => e.key)),
        r = new Map();
      for (const [e, o] of t.unsafeMap.entries()) n.has(e) && r.set(e, o);
      return S(r);
    }),
  (t.omit =
    (...e) =>
    (t) => {
      const n = new Map(t.unsafeMap);
      for (const t of e) n.delete(t.key);
      return S(n);
    });
