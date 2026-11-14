// vendor/module-95567.js — webpack module 95567
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.value =
    t.unsafeWipe =
    t.redactedRegistry =
    t.proto =
    t.make =
    t.isRedacted =
    t.RedactedTypeId =
      void 0);
var r = u(n(92957 /* vendor/module-92957 */)),
  o = n(74109 /* vendor/module-74109 */),
  i = n(4001 /* vendor/module-4001 */),
  a = u(n(63101 /* vendor/module-63101 */)),
  s = n(96089 /* vendor/module-96089 */),
  l = n(54281 /* vendor/module-54281 */),
  c = n(84552 /* vendor/module-84552 */);
function u(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (u = function (e, t) {
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
const d = "effect/Redacted",
  p = (t.redactedRegistry = (0, i.globalValue)(
    "effect/Redacted/redactedRegistry",
    () => new WeakMap(),
  )),
  f = (t.RedactedTypeId = Symbol.for(d)),
  h = (t.proto = {
    [f]: { _A: (e) => e },
    pipe() {
      return (0, l.pipeArguments)(this, arguments);
    },
    toString: () => "<redacted>",
    toJSON: () => "<redacted>",
    [s.NodeInspectSymbol]: () => "<redacted>",
    [a.symbol]() {
      return (0, o.pipe)(
        a.hash(d),
        a.combine(a.hash(p.get(this))),
        a.cached(this),
      );
    },
    [r.symbol](e) {
      return m(e) && r.equals(p.get(this), p.get(e));
    },
  }),
  m = (e) => (0, c.hasProperty)(e, f);
(t.isRedacted = m),
  (t.make = (e) => {
    const t = Object.create(h);
    return p.set(t, e), t;
  }),
  (t.value = (e) => {
    if (p.has(e)) return p.get(e);
    throw new Error("Unable to get redacted value");
  }),
  (t.unsafeWipe = (e) => p.delete(e));
