// vendor/module-31218.js — webpack module 31218
// params: (e, t, r) = (module, exports, require)
r.d(t, { f: () => o });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "PieTokenBuilder");
    }
    constructor() {
      super(["pie", "showData"]);
    }
  },
  a = class extends n.dg {
    static {
      (0, n.K2)(this, "PieValueConverter");
    }
    runCustomConverter(e, t, r) {
      if ("PIE_SECTION_LABEL" === e.name) return t.replace(/"/g, "").trim();
    }
  },
  s = {
    parser: {
      TokenBuilder: (0, n.K2)(() => new i(), "TokenBuilder"),
      ValueConverter: (0, n.K2)(() => new a(), "ValueConverter"),
    },
  };
function o(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.D_, s);
  return t.ServiceRegistry.register(r), { shared: t, Pie: r };
}
(0, n.K2)(o, "createPieServices");
