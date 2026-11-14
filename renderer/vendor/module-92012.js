// vendor/module-92012.js — webpack module 92012
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.StructuralCommitPrototype =
    t.StructuralClass =
    t.StreamTypeId =
    t.SinkTypeId =
    t.EffectTypeId =
    t.EffectPrototype =
    t.CommitPrototype =
    t.Class =
    t.ChannelTypeId =
      void 0);
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
})(n(76102 /* vendor/module-76102 */));
(t.EffectTypeId = r.EffectTypeId),
  (t.StreamTypeId = r.StreamTypeId),
  (t.SinkTypeId = r.SinkTypeId),
  (t.ChannelTypeId = r.ChannelTypeId),
  (t.EffectPrototype = r.EffectPrototype),
  (t.CommitPrototype = r.CommitPrototype),
  (t.StructuralCommitPrototype = r.StructuralCommitPrototype);
const o = r.Base,
  i = r.StructuralBase;
(t.Class = class extends o {}), (t.StructuralClass = class extends i {});
