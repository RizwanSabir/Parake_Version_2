// vendor/module-63101.js — webpack module 63101
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.symbol =
    t.structureKeys =
    t.structure =
    t.string =
    t.random =
    t.optimize =
    t.number =
    t.isHash =
    t.hash =
    t.combine =
    t.cached =
    t.array =
      void 0);
var r = n(74109 /* vendor/module-74109 */),
  o = n(4001 /* vendor/module-4001 */),
  i = n(84552 /* vendor/module-84552 */),
  a = n(76027 /* vendor/module-76027 */);
const s = (0, o.globalValue)(
    Symbol.for("effect/Hash/randomHashCache"),
    () => new WeakMap(),
  ),
  l = (t.symbol = Symbol.for("effect/Hash")),
  c = (e) => {
    if (!0 === a.structuralRegionState.enabled) return 0;
    switch (typeof e) {
      case "number":
        return h(e);
      case "bigint":
        return m(e.toString(10));
      case "boolean":
      case "symbol":
        return m(String(e));
      case "string":
        return m(e);
      case "undefined":
        return m("undefined");
      case "function":
      case "object":
        return null === e
          ? m("null")
          : e instanceof Date
            ? c(e.toISOString())
            : e instanceof URL
              ? c(e.href)
              : f(e)
                ? e[l]()
                : u(e);
      default:
        throw new Error(
          `BUG: unhandled typeof ${typeof e} - please report an issue at https://github.com/Effect-TS/effect/issues`,
        );
    }
  };
t.hash = c;
const u = (e) => (
  s.has(e) || s.set(e, h(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))),
  s.get(e)
);
t.random = u;
const d = (e) => (t) => (53 * t) ^ e;
t.combine = d;
const p = (e) => (3221225471 & e) | ((e >>> 1) & 1073741824);
t.optimize = p;
const f = (e) => (0, i.hasProperty)(e, l);
t.isHash = f;
const h = (e) => {
  if (e != e || e === 1 / 0) return 0;
  let t = 0 | e;
  for (t !== e && (t ^= 4294967295 * e); e > 4294967295; ) t ^= e /= 4294967295;
  return p(t);
};
t.number = h;
const m = (e) => {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (33 * t) ^ e.charCodeAt(--n);
  return p(t);
};
t.string = m;
const g = (e, t) => {
  let n = 12289;
  for (let o = 0; o < t.length; o++) n ^= (0, r.pipe)(m(t[o]), d(c(e[t[o]])));
  return p(n);
};
(t.structureKeys = g),
  (t.structure = (e) => g(e, Object.keys(e))),
  (t.array = (e) => {
    let t = 6151;
    for (let n = 0; n < e.length; n++) t = (0, r.pipe)(t, d(c(e[n])));
    return p(t);
  }),
  (t.cached = function () {
    if (1 === arguments.length) {
      const e = arguments[0];
      return function (t) {
        return (
          Object.defineProperty(e, l, {
            value: () => t,
            enumerable: !1,
          }),
          t
        );
      };
    }
    const e = arguments[0],
      t = arguments[1];
    return Object.defineProperty(e, l, { value: () => t, enumerable: !1 }), t;
  });
