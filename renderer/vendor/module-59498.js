// vendor/module-59498.js — webpack module 59498
// params: (e, t, r) = (module, exports, require)
r.d(t, { S: () => o });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "ArchitectureTokenBuilder");
    }
    constructor() {
      super(["architecture"]);
    }
  },
  a = class extends n.dg {
    static {
      (0, n.K2)(this, "ArchitectureValueConverter");
    }
    runCustomConverter(e, t, r) {
      if ("ARCH_ICON" === e.name) return t.replace(/[()]/g, "").trim();
      if ("ARCH_TEXT_ICON" === e.name) return t.replace(/["()]/g, "");
      if ("ARCH_TITLE" === e.name) {
        let e = t.replace(/^\[|]$/g, "").trim();
        return (
          ((e.startsWith('"') && e.endsWith('"')) ||
            (e.startsWith("'") && e.endsWith("'"))) &&
            ((e = e.slice(1, -1)),
            (e = e.replace(/\\"/g, '"').replace(/\\'/g, "'"))),
          e.trim()
        );
      }
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
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.wV, s);
  return t.ServiceRegistry.register(r), { shared: t, Architecture: r };
}
(0, n.K2)(o, "createArchitectureServices");
