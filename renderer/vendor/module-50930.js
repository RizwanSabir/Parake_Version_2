// vendor/module-50930.js — webpack module 50930
// params: (e, t, r) = (module, exports, require)
r.d(t, { l: () => l });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "RailroadTokenBuilder");
    }
    constructor() {
      super(["railroad-beta"]);
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
      (0, n.K2)(this, "RailroadValueConverter");
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
      if ("RR_STRING" === e.name) return a(t);
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
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.Bi, o);
  return t.ServiceRegistry.register(r), { shared: t, Railroad: r };
}
(0, n.K2)(l, "createRailroadServices");
