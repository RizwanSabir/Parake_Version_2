// vendor/module-76102.js — webpack module 76102
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.effectVariance =
    t.StructuralPrototype =
    t.StructuralCommitPrototype =
    t.StructuralBase =
    t.StreamTypeId =
    t.SinkTypeId =
    t.EffectTypeId =
    t.EffectPrototype =
    t.CommitPrototype =
    t.ChannelTypeId =
    t.Base =
      void 0);
var r = c(n(92957 /* vendor/module-92957 */)),
  o = c(n(63101 /* vendor/module-63101 */)),
  i = n(54281 /* vendor/module-54281 */),
  a = n(76027 /* vendor/module-76027 */),
  s = c(n(41174 /* vendor/module-41174 */)),
  l = c(n(48655 /* vendor/module-48655 */));
function c(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (c = function (e, t) {
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
const u = (t.EffectTypeId = Symbol.for("effect/Effect")),
  d = (t.StreamTypeId = Symbol.for("effect/Stream")),
  p = (t.SinkTypeId = Symbol.for("effect/Sink")),
  f = (t.ChannelTypeId = Symbol.for("effect/Channel")),
  h = (t.effectVariance = {
    _R: (e) => e,
    _E: (e) => e,
    _A: (e) => e,
    _V: l.getCurrentVersion(),
  }),
  m = (t.EffectPrototype = {
    [u]: h,
    [d]: h,
    [p]: {
      _A: (e) => e,
      _In: (e) => e,
      _L: (e) => e,
      _E: (e) => e,
      _R: (e) => e,
    },
    [f]: {
      _Env: (e) => e,
      _InErr: (e) => e,
      _InElem: (e) => e,
      _InDone: (e) => e,
      _OutErr: (e) => e,
      _OutElem: (e) => e,
      _OutDone: (e) => e,
    },
    [r.symbol](e) {
      return this === e;
    },
    [o.symbol]() {
      return o.cached(this, o.random(this));
    },
    [Symbol.iterator]() {
      return new a.SingleShotGen(new a.YieldWrap(this));
    },
    pipe() {
      return (0, i.pipeArguments)(this, arguments);
    },
  }),
  g = (t.StructuralPrototype = {
    [o.symbol]() {
      return o.cached(this, o.structure(this));
    },
    [r.symbol](e) {
      const t = Object.keys(this),
        n = Object.keys(e);
      if (t.length !== n.length) return !1;
      for (const n of t) if (!(n in e) || !r.equals(this[n], e[n])) return !1;
      return !0;
    },
  }),
  y = (t.CommitPrototype = { ...m, _op: s.OP_COMMIT }),
  v = (t.StructuralCommitPrototype = { ...y, ...g });
(t.Base = (function () {
  function e() {}
  return (e.prototype = y), e;
})()),
  (t.StructuralBase = (function () {
    function e() {}
    return (e.prototype = v), e;
  })());
