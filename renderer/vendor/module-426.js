// vendor/module-426.js — webpack module 426
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.unsafeMake =
    t.unsafeGet =
    t.pick =
    t.omit =
    t.mergeAll =
    t.merge =
    t.make =
    t.isTag =
    t.isReference =
    t.isContext =
    t.getOrElse =
    t.getOption =
    t.get =
    t.empty =
    t.add =
    t.Tag =
    t.Reference =
    t.GenericTag =
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
})(n(31204 /* vendor/module-31204 */));
r.TagTypeId,
  r.ReferenceTypeId,
  (t.GenericTag = r.makeGenericTag),
  r.TypeId,
  (t.unsafeMake = r.makeContext),
  (t.isContext = r.isContext),
  (t.isTag = r.isTag),
  (t.isReference = r.isReference),
  (t.empty = r.empty),
  (t.make = r.make),
  (t.add = r.add),
  (t.get = r.get),
  (t.getOrElse = r.getOrElse),
  (t.unsafeGet = r.unsafeGet),
  (t.getOption = r.getOption),
  (t.merge = r.merge),
  (t.mergeAll = r.mergeAll),
  (t.pick = r.pick),
  (t.omit = r.omit),
  (t.Tag = r.Tag),
  (t.Reference = r.Reference);
