// vendor/module-92957.js — webpack module 92957
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.equals = s),
  (t.symbol = t.isEqual = t.equivalence = void 0);
var r = (function (e) {
    if ("function" == typeof WeakMap) {
      var t = new WeakMap();
      new WeakMap();
    }
    return (function (e) {
      if (e && e.__esModule) return e;
      var n,
        r,
        o = { __proto__: null, default: e };
      if (null === e || ("object" != typeof e && "function" != typeof e))
        return o;
      if ((n = t)) {
        if (n.has(e)) return n.get(e);
        n.set(e, o);
      }
      for (const t in e)
        "default" !== t &&
          {}.hasOwnProperty.call(e, t) &&
          ((r =
            (n = Object.defineProperty) &&
            Object.getOwnPropertyDescriptor(e, t)) &&
          (r.get || r.set)
            ? n(o, t, r)
            : (o[t] = e[t]));
      return o;
    })(e);
  })(n(63101 /* vendor/module-63101 */)),
  o = n(84552 /* vendor/module-84552 */),
  i = n(76027 /* vendor/module-76027 */);
const a = (t.symbol = Symbol.for("effect/Equal"));
function s() {
  return 1 === arguments.length
    ? (e) => l(e, arguments[0])
    : l(arguments[0], arguments[1]);
}
function l(e, t) {
  if (e === t) return !0;
  const n = typeof e;
  if (n !== typeof t) return !1;
  if ("object" === n || "function" === n) {
    if (null !== e && null !== t) {
      if (c(e) && c(t))
        return (
          !(r.hash(e) !== r.hash(t) || !e[a](t)) ||
          (!(
            !i.structuralRegionState.enabled || !i.structuralRegionState.tester
          ) &&
            i.structuralRegionState.tester(e, t))
        );
      if (e instanceof Date && t instanceof Date)
        return e.toISOString() === t.toISOString();
      if (e instanceof URL && t instanceof URL) return e.href === t.href;
    }
    if (i.structuralRegionState.enabled) {
      if (Array.isArray(e) && Array.isArray(t))
        return e.length === t.length && e.every((e, n) => l(e, t[n]));
      if (
        Object.getPrototypeOf(e) === Object.prototype &&
        Object.getPrototypeOf(e) === Object.prototype
      ) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (n.length === r.length) {
          for (const r of n)
            if (!(r in t) || !l(e[r], t[r]))
              return (
                !!i.structuralRegionState.tester &&
                i.structuralRegionState.tester(e, t)
              );
          return !0;
        }
      }
      return (
        !!i.structuralRegionState.tester && i.structuralRegionState.tester(e, t)
      );
    }
  }
  return (
    !(!i.structuralRegionState.enabled || !i.structuralRegionState.tester) &&
    i.structuralRegionState.tester(e, t)
  );
}
const c = (e) => (0, o.hasProperty)(e, a);
(t.isEqual = c), (t.equivalence = () => s);
