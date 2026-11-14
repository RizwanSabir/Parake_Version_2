// vendor/module-96404.js — webpack module 96404
// params: (e, t, r) = (module, exports, require)
r.d(t, { s: () => o });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "RailroadAbnfTokenBuilder");
    }
    constructor() {
      super(["railroad-abnf-beta"]);
    }
  },
  a = class extends n.dg {
    static {
      (0, n.K2)(this, "RailroadAbnfValueConverter");
    }
    runConverter(e, t, r) {
      const n = super.runConverter(e, t, r);
      if ("TITLE" === e.name && "string" == typeof n) {
        const e = n.trim();
        if (
          (e.startsWith('"') && e.endsWith('"')) ||
          (e.startsWith("'") && e.endsWith("'"))
        )
          return e.slice(1, -1);
      }
      return n;
    }
    runCustomConverter(e, t, r) {
      if ("ABNF_STRING" === e.name) return t.slice(1, -1);
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
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.oI, s);
  return t.ServiceRegistry.register(r), { shared: t, RailroadAbnf: r };
}
(0, n.K2)(o, "createRailroadAbnfServices");
