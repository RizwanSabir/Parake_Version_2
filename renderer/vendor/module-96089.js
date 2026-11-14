// vendor/module-96089.js — webpack module 96089
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.withRedactableContext =
    t.toStringUnknown =
    t.toJSON =
    t.symbolRedactable =
    t.stringifyCircular =
    t.redact =
    t.isRedactable =
    t.format =
    t.NodeInspectSymbol =
    t.Class =
    t.BaseProto =
      void 0);
var r = n(4001 /* vendor/module-4001 */),
  o = n(84552 /* vendor/module-84552 */);
const i = (t.NodeInspectSymbol = Symbol.for("nodejs.util.inspect.custom")),
  a = (e) => {
    try {
      if (
        (0, o.hasProperty)(e, "toJSON") &&
        (0, o.isFunction)(e.toJSON) &&
        0 === e.toJSON.length
      )
        return e.toJSON();
      if (Array.isArray(e)) return e.map(a);
    } catch {
      return {};
    }
    return p(e);
  };
t.toJSON = a;
const s = (e) => JSON.stringify(e, null, 2);
(t.format = s),
  (t.BaseProto = {
    toJSON() {
      return a(this);
    },
    [i]() {
      return this.toJSON();
    },
    toString() {
      return s(this.toJSON());
    },
  }),
  (t.Class = class {
    [i]() {
      return this.toJSON();
    }
    toString() {
      return s(this.toJSON());
    }
  }),
  (t.toStringUnknown = (e, t = 2) => {
    if ("string" == typeof e) return e;
    try {
      return "object" == typeof e ? l(e, t) : String(e);
    } catch {
      return String(e);
    }
  });
const l = (e, t) => {
  let n = [];
  const r = JSON.stringify(
    e,
    (e, t) =>
      "object" == typeof t && null !== t
        ? n.includes(t)
          ? void 0
          : n.push(t) &&
            (void 0 !== d.fiberRefs && u(t) ? t[c](d.fiberRefs) : t)
        : t,
    t,
  );
  return (n = void 0), r;
};
t.stringifyCircular = l;
const c = (t.symbolRedactable = Symbol.for("effect/Inspectable/Redactable")),
  u = (e) => "object" == typeof e && null !== e && c in e;
t.isRedactable = u;
const d = (0, r.globalValue)("effect/Inspectable/redactableState", () => ({
  fiberRefs: void 0,
}));
t.withRedactableContext = (e, t) => {
  const n = d.fiberRefs;
  d.fiberRefs = e;
  try {
    return t();
  } finally {
    d.fiberRefs = n;
  }
};
const p = (e) => (u(e) && void 0 !== d.fiberRefs ? e[c](d.fiberRefs) : e);
t.redact = p;
