// vendor/module-76027.js — webpack module 76027
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.structuralRegionState =
    t.structuralRegion =
    t.makeGenKind =
    t.isGeneratorFunction =
    t.isGenKind =
    t.internalCall =
    t.adapter =
    t.YieldWrapTypeId =
    t.YieldWrap =
    t.SingleShotGen =
    t.PCGRandom =
    t.GenKindTypeId =
    t.GenKindImpl =
      void 0),
  (t.yieldWrapGet = function (e) {
    if ("object" == typeof e && null !== e && d in e) return e[d]();
    throw new Error((0, i.getBugErrorMessage)("yieldWrapGet"));
  });
var r = n(74109 /* vendor/module-74109 */),
  o = n(4001 /* vendor/module-4001 */),
  i = n(47848 /* vendor/module-47848 */),
  a = n(84552 /* vendor/module-84552 */);
const s = (t.GenKindTypeId = Symbol.for("effect/Gen/GenKind"));
t.isGenKind = (e) => (0, a.isObject)(e) && s in e;
class l {
  value;
  constructor(e) {
    this.value = e;
  }
  get _F() {
    return r.identity;
  }
  get _R() {
    return (e) => e;
  }
  get _O() {
    return (e) => e;
  }
  get _E() {
    return (e) => e;
  }
  [s] = s;
  [Symbol.iterator]() {
    return new c(this);
  }
}
t.GenKindImpl = l;
class c {
  self;
  called = !1;
  constructor(e) {
    this.self = e;
  }
  next(e) {
    return this.called
      ? { value: e, done: !0 }
      : ((this.called = !0), { value: this.self, done: !1 });
  }
  return(e) {
    return { value: e, done: !0 };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new c(this.self);
  }
}
function u(e, t, n, r, o) {
  let i = (t + r) >>> 0;
  const a = (n + o) >>> 0;
  a >>> 0 < n >>> 0 && (i = (i + 1) | 0), (e[0] = i), (e[1] = a);
}
(t.SingleShotGen = c),
  (t.makeGenKind = (e) => new l(e)),
  (t.adapter = () =>
    function () {
      let e = arguments[0];
      for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
      return new l(e);
    }),
  (t.PCGRandom = class {
    _state;
    constructor(e, t, n, r) {
      return (
        (0, a.isNullable)(t) && (0, a.isNullable)(e)
          ? ((t = (4294967295 * Math.random()) >>> 0), (e = 0))
          : (0, a.isNullable)(t) && ((t = e), (e = 0)),
        (0, a.isNullable)(r) && (0, a.isNullable)(n)
          ? ((r = this._state ? this._state[3] : 4150755663),
            (n = this._state ? this._state[2] : 335903614))
          : (0, a.isNullable)(r) && ((r = n), (n = 0)),
        (this._state = new Int32Array([0, 0, n >>> 0, (1 | (r || 0)) >>> 0])),
        this._next(),
        u(this._state, this._state[0], this._state[1], e >>> 0, t >>> 0),
        this._next(),
        this
      );
    }
    getState() {
      return [this._state[0], this._state[1], this._state[2], this._state[3]];
    }
    setState(e) {
      (this._state[0] = e[0]),
        (this._state[1] = e[1]),
        (this._state[2] = e[2]),
        (this._state[3] = 1 | e[3]);
    }
    integer(e) {
      return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % e;
    }
    number() {
      return (
        (1 * (67108863 & this._next()) * 134217728 +
          1 * (134217727 & this._next())) /
        9007199254740992
      );
    }
    _next() {
      const e = this._state[0] >>> 0,
        t = this._state[1] >>> 0;
      !(function (e, t, n, r, o) {
        let i = (32557 * (n >>> 16)) >>> 0,
          a = (19605 * (65535 & n)) >>> 0,
          s = (32557 * (65535 & n)) >>> 0,
          l = (19605 * (n >>> 16) + ((a >>> 16) + (i >>> 16))) >>> 0;
        (a = (a << 16) >>> 0),
          (s = (s + a) >>> 0),
          s >>> 0 < a >>> 0 && (l = (l + 1) >>> 0),
          (i = (i << 16) >>> 0),
          (s = (s + i) >>> 0),
          s >>> 0 < i >>> 0 && (l = (l + 1) >>> 0),
          (l = (l + Math.imul(n, 1481765933)) >>> 0),
          (l = (l + Math.imul(t, o)) >>> 0),
          (e[0] = l),
          (e[1] = s);
      })(this._state, e, t, 0, 1284865837),
        u(
          this._state,
          this._state[0],
          this._state[1],
          this._state[2],
          this._state[3],
        );
      let n = e >>> 18,
        r = ((t >>> 18) | (e << 14)) >>> 0;
      (n = (n ^ e) >>> 0), (r = (r ^ t) >>> 0);
      const o = ((r >>> 27) | (n << 5)) >>> 0,
        i = e >>> 27;
      return ((o >>> i) | (o << (((-i >>> 0) & 31) >>> 0))) >>> 0;
    }
  });
const d = (t.YieldWrapTypeId = Symbol.for("effect/Utils/YieldWrap"));
t.YieldWrap = class {
  #e;
  constructor(e) {
    this.#e = e;
  }
  [d]() {
    return this.#e;
  }
};
const p = (t.structuralRegionState = (0, o.globalValue)(
  "effect/Utils/isStructuralRegion",
  () => ({ enabled: !1, tester: void 0 }),
));
t.structuralRegion = (e, t) => {
  const n = p.enabled,
    r = p.tester;
  (p.enabled = !0), t && (p.tester = t);
  try {
    return e();
  } finally {
    (p.enabled = n), (p.tester = r);
  }
};
const f = { effect_internal_function: (e) => e() },
  h =
    !0 ===
    f
      .effect_internal_function(() => new Error().stack)
      ?.includes("effect_internal_function"),
  m =
    ((t.internalCall = h
      ? f.effect_internal_function
      : (e) => {
          try {
            return e();
          } finally {
          }
        }),
    function* () {}.constructor);
t.isGeneratorFunction = (e) => (0, a.isObject)(e) && e.constructor === m;
