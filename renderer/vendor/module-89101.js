// vendor/module-89101.js — webpack module 89101
// params: (e, t, r) = (module, exports, require)
r.d(t, { P: () => l });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "RailroadPegTokenBuilder");
    }
    constructor() {
      super(["railroad-peg-beta"]);
    }
  },
  a = (0, n.K2)((e) => {
    const t = e.slice(1, -1);
    let r = "";
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      if ("\\" === n && e + 1 < t.length) {
        e++;
        const n = t[e];
        switch (n) {
          case "n":
            r += "\n";
            break;
          case "r":
            r += "\r";
            break;
          case "t":
            r += "\t";
            break;
          default:
            r += n;
        }
        continue;
      }
      r += n;
    }
    return r;
  }, "decodeEscapedString"),
  s = class extends n.dg {
    static {
      (0, n.K2)(this, "RailroadPegValueConverter");
    }
    runConverter(e, t, r) {
      const n = super.runConverter(e, t, r);
      if ("TITLE" === e.name && "string" == typeof n) {
        const e = n.trim();
        if (
          (e.startsWith('"') && e.endsWith('"')) ||
          (e.startsWith("'") && e.endsWith("'"))
        )
          return a(e);
      }
      return n;
    }
    runCustomConverter(e, t, r) {
      if ("PEG_STRING" === e.name) return a(t);
    }
  },
  o = {
    parser: {
      TokenBuilder: (0, n.K2)(() => new i(), "TokenBuilder"),
      ValueConverter: (0, n.K2)(() => new s(), "ValueConverter"),
    },
  };
function l(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.dj, o);
  return t.ServiceRegistry.register(r), { shared: t, RailroadPeg: r };
}
(0, n.K2)(l, "createRailroadPegServices");
