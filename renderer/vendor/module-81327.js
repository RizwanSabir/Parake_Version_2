// vendor/module-81327.js — webpack module 81327
// params: (e, t, r) = (module, exports, require)
r.d(t, { d: () => c });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "TreemapTokenBuilder");
    }
    constructor() {
      super(["treemap"]);
    }
  },
  a = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/,
  s = class extends n.dg {
    static {
      (0, n.K2)(this, "TreemapValueConverter");
    }
    runCustomConverter(e, t, r) {
      if ("NUMBER2" === e.name) return parseFloat(t.replace(/,/g, ""));
      if ("SEPARATOR" === e.name) return t.substring(1, t.length - 1);
      if ("STRING2" === e.name) return t.substring(1, t.length - 1);
      if ("INDENTATION" === e.name) return t.length;
      if ("ClassDef" === e.name) {
        if ("string" != typeof t) return t;
        const e = a.exec(t);
        if (e)
          return {
            $type: "ClassDefStatement",
            className: e[1],
            styleText: e[2] || void 0,
          };
      }
    }
  };
function o(e) {
  const t = e.validation.TreemapValidator,
    r = e.validation.ValidationRegistry;
  if (r) {
    const e = { Treemap: t.checkSingleRoot.bind(t) };
    r.register(e, t);
  }
}
(0, n.K2)(o, "registerValidationChecks");
var l = class {
    static {
      (0, n.K2)(this, "TreemapValidator");
    }
    checkSingleRoot(e, t) {
      let r;
      for (const n of e.TreemapRows)
        n.item &&
          (void 0 === r && void 0 === n.indent
            ? (r = 0)
            : (void 0 === n.indent ||
                (void 0 !== r && r >= parseInt(n.indent, 10))) &&
              t("error", "Multiple root nodes are not allowed in a treemap.", {
                node: n,
                property: "item",
              }));
    }
  },
  u = {
    parser: {
      TokenBuilder: (0, n.K2)(() => new i(), "TokenBuilder"),
      ValueConverter: (0, n.K2)(() => new s(), "ValueConverter"),
    },
    validation: {
      TreemapValidator: (0, n.K2)(() => new l(), "TreemapValidator"),
    },
  };
function c(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.XE, u);
  return t.ServiceRegistry.register(r), o(r), { shared: t, Treemap: r };
}
(0, n.K2)(c, "createTreemapServices");
