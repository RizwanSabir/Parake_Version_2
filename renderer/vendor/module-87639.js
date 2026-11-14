// vendor/module-87639.js — webpack module 87639
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t),
  n.d(t, {
    SuperJSON: () => q,
    allowErrorProps: () => X,
    default: () => G,
    deserialize: () => $,
    parse: () => K,
    registerClass: () => Z,
    registerCustom: () => Q,
    registerSymbol: () => J,
    serialize: () => W,
    stringify: () => Y,
  });
class r {
  constructor() {
    (this.keyToValue = new Map()), (this.valueToKey = new Map());
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}
class o {
  constructor(e) {
    (this.generateIdentifier = e), (this.kv = new r());
  }
  register(e, t) {
    this.kv.getByValue(e) ||
      (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}
class i extends o {
  constructor() {
    super((e) => e.name), (this.classToAllowedProps = new Map());
  }
  register(e, t) {
    "object" == typeof t
      ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps),
        super.register(e, t.identifier))
      : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
}
function a(e, t) {
  Object.entries(e).forEach(([e, n]) => t(n, e));
}
function s(e, t) {
  return -1 !== e.indexOf(t);
}
function l(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t(r)) return r;
  }
}
class c {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return (function (e, t) {
      const n = (function (e) {
        if ("values" in Object) return Object.values(e);
        const t = [];
        for (const n in e) e.hasOwnProperty(n) && t.push(e[n]);
        return t;
      })(e);
      if ("find" in n) return n.find(t);
      const r = n;
      for (let e = 0; e < r.length; e++) {
        const n = r[e];
        if (t(n)) return n;
      }
    })(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
}
const u = (e) => void 0 === e,
  d = (e) =>
    "object" == typeof e &&
    null !== e &&
    e !== Object.prototype &&
    (null === Object.getPrototypeOf(e) ||
      Object.getPrototypeOf(e) === Object.prototype),
  p = (e) => d(e) && 0 === Object.keys(e).length,
  f = (e) => Array.isArray(e),
  h = (e) => e instanceof Map,
  m = (e) => e instanceof Set,
  g = (e) =>
    "Symbol" === ((e) => Object.prototype.toString.call(e).slice(8, -1))(e),
  y = (e) => e instanceof Error,
  v = (e) => "number" == typeof e && isNaN(e),
  b = (e) => e.replace(/\\/g, "\\\\").replace(/\./g, "\\."),
  S = (e) => e.map(String).map(b).join("."),
  _ = (e, t) => {
    const n = [];
    let r = "";
    for (let o = 0; o < e.length; o++) {
      let i = e.charAt(o);
      if (!t && "\\" === i) {
        const t = e.charAt(o + 1);
        if ("\\" === t) {
          (r += "\\"), o++;
          continue;
        }
        if ("." !== t) throw Error("invalid path");
      }
      "\\" !== i || "." !== e.charAt(o + 1)
        ? "." === i
          ? (n.push(r), (r = ""))
          : (r += i)
        : ((r += "."), o++);
    }
    const o = r;
    return n.push(o), n;
  };
function x(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r,
  };
}
const w = [
  x(
    u,
    "undefined",
    () => null,
    () => {},
  ),
  x(
    (e) => "bigint" == typeof e,
    "bigint",
    (e) => e.toString(),
    (e) => ("undefined" != typeof BigInt ? BigInt(e) : e),
  ),
  x(
    (e) => e instanceof Date && !isNaN(e.valueOf()),
    "Date",
    (e) => e.toISOString(),
    (e) => new Date(e),
  ),
  x(
    y,
    "Error",
    (e, t) => {
      const n = { name: e.name, message: e.message };
      return (
        "cause" in e && (n.cause = e.cause),
        t.allowedErrorProps.forEach((t) => {
          n[t] = e[t];
        }),
        n
      );
    },
    (e, t) => {
      const n = new Error(e.message, { cause: e.cause });
      return (
        (n.name = e.name),
        (n.stack = e.stack),
        t.allowedErrorProps.forEach((t) => {
          n[t] = e[t];
        }),
        n
      );
    },
  ),
  x(
    (e) => e instanceof RegExp,
    "regexp",
    (e) => "" + e,
    (e) => {
      const t = e.slice(1, e.lastIndexOf("/")),
        n = e.slice(e.lastIndexOf("/") + 1);
      return new RegExp(t, n);
    },
  ),
  x(
    m,
    "set",
    (e) => [...e.values()],
    (e) => new Set(e),
  ),
  x(
    h,
    "map",
    (e) => [...e.entries()],
    (e) => new Map(e),
  ),
  x(
    (e) => {
      return v(e) || (t = e) === 1 / 0 || t === -1 / 0;
      var t;
    },
    "number",
    (e) => (v(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity"),
    Number,
  ),
  x(
    (e) => 0 === e && 1 / e == -1 / 0,
    "number",
    () => "-0",
    Number,
  ),
  x(
    (e) => e instanceof URL,
    "URL",
    (e) => e.toString(),
    (e) => new URL(e),
  ),
];
function E(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r,
  };
}
const T = E(
    (e, t) => !!g(e) && !!t.symbolRegistry.getIdentifier(e),
    (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)],
    (e) => e.description,
    (e, t, n) => {
      const r = n.symbolRegistry.getValue(t[1]);
      if (!r) throw new Error("Trying to deserialize unknown symbol");
      return r;
    },
  ),
  k = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray,
  ].reduce((e, t) => ((e[t.name] = t), e), {}),
  C = E(
    (e) => ArrayBuffer.isView(e) && !(e instanceof DataView),
    (e) => ["typed-array", e.constructor.name],
    (e) => [...e],
    (e, t) => {
      const n = k[t[1]];
      if (!n) throw new Error("Trying to deserialize unknown typed array");
      return new n(e);
    },
  );
function I(e, t) {
  return !!e?.constructor && !!t.classRegistry.getIdentifier(e.constructor);
}
const A = E(
    I,
    (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)],
    (e, t) => {
      const n = t.classRegistry.getAllowedProps(e.constructor);
      if (!n) return { ...e };
      const r = {};
      return (
        n.forEach((t) => {
          r[t] = e[t];
        }),
        r
      );
    },
    (e, t, n) => {
      const r = n.classRegistry.getValue(t[1]);
      if (!r)
        throw new Error(
          `Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`,
        );
      return Object.assign(Object.create(r.prototype), e);
    },
  ),
  O = E(
    (e, t) => !!t.customTransformerRegistry.findApplicable(e),
    (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name],
    (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e),
    (e, t, n) => {
      const r = n.customTransformerRegistry.findByName(t[1]);
      if (!r) throw new Error("Trying to deserialize unknown custom value");
      return r.deserialize(e);
    },
  ),
  R = [A, T, O, C],
  M = (e, t) => {
    const n = l(R, (n) => n.isApplicable(e, t));
    if (n) return { value: n.transform(e, t), type: n.annotation(e, t) };
    const r = l(w, (n) => n.isApplicable(e, t));
    return r ? { value: r.transform(e, t), type: r.annotation } : void 0;
  },
  P = {};
w.forEach((e) => {
  P[e.annotation] = e;
});
const N = (e, t) => {
  if (t > e.size) throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; ) n.next(), t--;
  return n.next().value;
};
function D(e) {
  if (s(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (s(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (s(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
const j = (e, t, n) => {
    if ((D(t), 0 === t.length)) return n(e);
    let r = e;
    for (let e = 0; e < t.length - 1; e++) {
      const n = t[e];
      if (f(r)) r = r[+n];
      else if (d(r)) r = r[n];
      else if (m(r)) r = N(r, +n);
      else if (h(r)) {
        if (e === t.length - 2) break;
        const o = +n,
          i = 0 === +t[++e] ? "key" : "value",
          a = N(r, o);
        switch (i) {
          case "key":
            r = a;
            break;
          case "value":
            r = r.get(a);
        }
      }
    }
    const o = t[t.length - 1];
    if ((f(r) ? (r[+o] = n(r[+o])) : d(r) && (r[o] = n(r[o])), m(r))) {
      const e = N(r, +o),
        t = n(e);
      e !== t && (r.delete(e), r.add(t));
    }
    if (h(r)) {
      const e = +t[t.length - 2],
        i = N(r, e);
      switch (0 === +o ? "key" : "value") {
        case "key": {
          const e = n(i);
          r.set(e, r.get(i)), e !== i && r.delete(i);
          break;
        }
        case "value":
          r.set(i, n(r.get(i)));
      }
    }
    return e;
  },
  L = (e) => e < 1;
function F(e, t, n, r = []) {
  if (!e) return;
  const o = L(n);
  if (!f(e)) return void a(e, (e, i) => F(e, t, n, [...r, ..._(i, o)]));
  const [i, s] = e;
  s &&
    a(s, (e, i) => {
      F(e, t, n, [...r, ..._(i, o)]);
    }),
    t(i, r);
}
function U(e, t, n, r) {
  return (
    F(
      t,
      (t, n) => {
        e = j(e, n, (e) =>
          ((e, t, n) => {
            if (!f(t)) {
              const r = P[t];
              if (!r) throw new Error("Unknown transformation: " + t);
              return r.untransform(e, n);
            }
            switch (t[0]) {
              case "symbol":
                return T.untransform(e, t, n);
              case "class":
                return A.untransform(e, t, n);
              case "custom":
                return O.untransform(e, t, n);
              case "typed-array":
                return C.untransform(e, t, n);
              default:
                throw new Error("Unknown transformation: " + t);
            }
          })(e, t, r),
        );
      },
      n,
    ),
    e
  );
}
const B = (e, t, n, r, o = [], i = [], l = new Map()) => {
  const c =
    ((e) => "boolean" == typeof e)((v = e)) ||
    ((e) => null === e)(v) ||
    u(v) ||
    ((e) => "number" == typeof e && !isNaN(e))(v) ||
    ((e) => "string" == typeof e)(v) ||
    g(v);
  var v;
  if (!c) {
    !(function (e, t, n) {
      const r = n.get(e);
      r ? r.push(t) : n.set(e, [t]);
    })(e, o, t);
    const n = l.get(e);
    if (n) return r ? { transformedValue: null } : n;
  }
  if (!((e, t) => d(e) || f(e) || h(e) || m(e) || y(e) || I(e, t))(e, n)) {
    const t = M(e, n),
      r = t
        ? { transformedValue: t.value, annotations: [t.type] }
        : { transformedValue: e };
    return c || l.set(e, r), r;
  }
  if (s(i, e)) return { transformedValue: null };
  const S = M(e, n),
    _ = S?.value ?? e,
    x = f(_) ? [] : {},
    w = {};
  a(_, (s, c) => {
    if ("__proto__" === c || "constructor" === c || "prototype" === c)
      throw new Error(
        `Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`,
      );
    const u = B(s, t, n, r, [...o, c], [...i, e], l);
    (x[c] = u.transformedValue),
      f(u.annotations)
        ? (w[b(c)] = u.annotations)
        : d(u.annotations) &&
          a(u.annotations, (e, t) => {
            w[b(c) + "." + t] = e;
          });
  });
  const E = p(w)
    ? { transformedValue: x, annotations: S ? [S.type] : void 0 }
    : { transformedValue: x, annotations: S ? [S.type, w] : w };
  return c || l.set(e, E), E;
};
function z(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function H(e) {
  return "Array" === z(e);
}
function V(e, t = {}) {
  return H(e)
    ? e.map((e) => V(e, t))
    : (function (e) {
          if ("Object" !== z(e)) return !1;
          const t = Object.getPrototypeOf(e);
          return !!t && t.constructor === Object && t === Object.prototype;
        })(e)
      ? [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ].reduce(
          (n, r) => (
            "__proto__" === r ||
              (H(t.props) && !t.props.includes(r)) ||
              (function (e, t, n, r, o) {
                const i = {}.propertyIsEnumerable.call(r, t)
                  ? "enumerable"
                  : "nonenumerable";
                "enumerable" === i && (e[t] = n),
                  o &&
                    "nonenumerable" === i &&
                    Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    });
              })(n, r, V(e[r], t), e, t.nonenumerable),
            n
          ),
          {},
        )
      : e;
}
class q {
  constructor({ dedupe: e = !1 } = {}) {
    (this.classRegistry = new i()),
      (this.symbolRegistry = new o((e) => e.description ?? "")),
      (this.customTransformerRegistry = new c()),
      (this.allowedErrorProps = []),
      (this.dedupe = e);
  }
  serialize(e) {
    const t = new Map(),
      n = B(e, t, this, this.dedupe),
      r = { json: n.transformedValue };
    n.annotations && (r.meta = { ...r.meta, values: n.annotations });
    const o = (function (e, t) {
      const n = {};
      let r;
      return (
        e.forEach((e) => {
          if (e.length <= 1) return;
          t ||
            (e = e
              .map((e) => e.map(String))
              .sort((e, t) => e.length - t.length));
          const [o, ...i] = e;
          0 === o.length ? (r = i.map(S)) : (n[S(o)] = i.map(S));
        }),
        r ? (p(n) ? [r] : [r, n]) : p(n) ? void 0 : n
      );
    })(t, this.dedupe);
    return (
      o && (r.meta = { ...r.meta, referentialEqualities: o }),
      r.meta && (r.meta.v = 1),
      r
    );
  }
  deserialize(e, t) {
    const { json: n, meta: r } = e;
    let o = t?.inPlace ? n : V(n);
    return (
      r?.values && (o = U(o, r.values, r.v ?? 0, this)),
      r?.referentialEqualities &&
        (o = (function (e, t, n) {
          const r = L(n);
          function o(t, n) {
            const o = ((e, t) => {
              D(t);
              for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (m(e)) e = N(e, +r);
                else if (h(e)) {
                  const o = +r,
                    i = 0 === +t[++n] ? "key" : "value",
                    a = N(e, o);
                  switch (i) {
                    case "key":
                      e = a;
                      break;
                    case "value":
                      e = e.get(a);
                  }
                } else e = e[r];
              }
              return e;
            })(e, _(n, r));
            t.map((e) => _(e, r)).forEach((t) => {
              e = j(e, t, () => o);
            });
          }
          if (f(t)) {
            const [n, i] = t;
            n.forEach((t) => {
              e = j(e, _(t, r), () => e);
            }),
              i && a(i, o);
          } else a(t, o);
          return e;
        })(o, r.referentialEqualities, r.v ?? 0)),
      o
    );
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e), { inPlace: !0 });
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({ name: t, ...e });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
}
(q.defaultInstance = new q()),
  (q.serialize = q.defaultInstance.serialize.bind(q.defaultInstance)),
  (q.deserialize = q.defaultInstance.deserialize.bind(q.defaultInstance)),
  (q.stringify = q.defaultInstance.stringify.bind(q.defaultInstance)),
  (q.parse = q.defaultInstance.parse.bind(q.defaultInstance)),
  (q.registerClass = q.defaultInstance.registerClass.bind(q.defaultInstance)),
  (q.registerSymbol = q.defaultInstance.registerSymbol.bind(q.defaultInstance)),
  (q.registerCustom = q.defaultInstance.registerCustom.bind(q.defaultInstance)),
  (q.allowErrorProps = q.defaultInstance.allowErrorProps.bind(
    q.defaultInstance,
  ));
const G = q,
  W = q.serialize,
  $ = q.deserialize,
  Y = q.stringify,
  K = q.parse,
  Z = q.registerClass,
  Q = q.registerCustom,
  J = q.registerSymbol,
  X = q.allowErrorProps;
