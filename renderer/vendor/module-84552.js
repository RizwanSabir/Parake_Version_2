// vendor/module-84552.js — webpack module 84552
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.xor =
    t.tuple =
    t.struct =
    t.some =
    t.productMany =
    t.product =
    t.or =
    t.not =
    t.nor =
    t.nand =
    t.mapInput =
    t.isUnknown =
    t.isUndefined =
    t.isUint8Array =
    t.isTupleOfAtLeast =
    t.isTupleOf =
    t.isTruthy =
    t.isTagged =
    t.isSymbol =
    t.isString =
    t.isSet =
    t.isRegExp =
    t.isRecordOrArray =
    t.isRecord =
    t.isReadonlyRecord =
    t.isPropertyKey =
    t.isPromiseLike =
    t.isPromise =
    t.isObject =
    t.isNumber =
    t.isNullable =
    t.isNull =
    t.isNotUndefined =
    t.isNotNullable =
    t.isNotNull =
    t.isNever =
    t.isMap =
    t.isIterable =
    t.isFunction =
    t.isError =
    t.isDate =
    t.isBoolean =
    t.isBigInt =
    t.implies =
    t.hasProperty =
    t.every =
    t.eqv =
    t.compose =
    t.and =
    t.all =
      void 0);
var r = n(74109 /* vendor/module-74109 */);
(t.mapInput = (0, r.dual)(2, (e, t) => (n) => e(t(n)))),
  (t.isTupleOf = (0, r.dual)(2, (e, t) => e.length === t)),
  (t.isTupleOfAtLeast = (0, r.dual)(2, (e, t) => e.length >= t)),
  (t.isTruthy = (e) => !!e),
  (t.isSet = (e) => e instanceof Set),
  (t.isMap = (e) => e instanceof Map);
const o = (e) => "string" == typeof e;
t.isString = o;
const i = (e) => "number" == typeof e;
(t.isNumber = i),
  (t.isBoolean = (e) => "boolean" == typeof e),
  (t.isBigInt = (e) => "bigint" == typeof e);
const a = (e) => "symbol" == typeof e;
(t.isSymbol = a), (t.isPropertyKey = (e) => o(e) || i(e) || a(e));
const s = (t.isFunction = r.isFunction);
(t.isUndefined = (e) => void 0 === e),
  (t.isNotUndefined = (e) => void 0 !== e),
  (t.isNull = (e) => null === e),
  (t.isNotNull = (e) => null !== e),
  (t.isNever = (e) => !1),
  (t.isUnknown = (e) => !0);
const l = (e) => "object" == typeof e && null !== e;
t.isRecordOrArray = l;
const c = (e) => l(e) || s(e);
t.isObject = c;
const u = (t.hasProperty = (0, r.dual)(2, (e, t) => c(e) && t in e));
(t.isTagged = (0, r.dual)(2, (e, t) => u(e, "_tag") && e._tag === t)),
  (t.isNullable = (e) => null == e),
  (t.isNotNullable = (e) => null != e),
  (t.isError = (e) => e instanceof Error),
  (t.isUint8Array = (e) => e instanceof Uint8Array),
  (t.isDate = (e) => e instanceof Date),
  (t.isIterable = (e) => u(e, Symbol.iterator));
const d = (e) => l(e) && !Array.isArray(e);
(t.isRecord = d),
  (t.isReadonlyRecord = d),
  (t.isPromise = (e) =>
    u(e, "then") && "catch" in e && s(e.then) && s(e.catch)),
  (t.isPromiseLike = (e) => u(e, "then") && s(e.then)),
  (t.isRegExp = (e) => e instanceof RegExp),
  (t.compose = (0, r.dual)(2, (e, t) => (n) => e(n) && t(n))),
  (t.product =
    (e, t) =>
    ([n, r]) =>
      e(n) && t(r));
const p = (e) => (t) => {
  let n = 0;
  for (const r of e) {
    if (n >= t.length) break;
    if (!1 === r(t[n])) return !1;
    n++;
  }
  return !0;
};
(t.all = p),
  (t.productMany = (e, t) => {
    const n = p(t);
    return ([t, ...r]) => !1 !== e(t) && n(r);
  }),
  (t.tuple = (...e) => p(e)),
  (t.struct = (e) => {
    const t = Object.keys(e);
    return (n) => {
      for (const r of t) if (!e[r](n[r])) return !1;
      return !0;
    };
  }),
  (t.not = (e) => (t) => !e(t)),
  (t.or = (0, r.dual)(2, (e, t) => (n) => e(n) || t(n))),
  (t.and = (0, r.dual)(2, (e, t) => (n) => e(n) && t(n))),
  (t.xor = (0, r.dual)(2, (e, t) => (n) => e(n) !== t(n))),
  (t.eqv = (0, r.dual)(2, (e, t) => (n) => e(n) === t(n))),
  (t.implies = (0, r.dual)(2, (e, t) => (n) => !e(n) || t(n))),
  (t.nor = (0, r.dual)(2, (e, t) => (n) => !(e(n) || t(n)))),
  (t.nand = (0, r.dual)(2, (e, t) => (n) => !(e(n) && t(n)))),
  (t.every = (e) => (t) => {
    for (const n of e) if (!n(t)) return !1;
    return !0;
  }),
  (t.some = (e) => (t) => {
    for (const n of e) if (n(t)) return !0;
    return !1;
  });
