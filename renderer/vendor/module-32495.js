// vendor/module-32495.js — webpack module 32495
// params: (e, t, r) = (module, exports, require)
r.d(t, { W: () => l });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "RailroadEbnfTokenBuilder");
    }
    constructor() {
      super(["railroad-ebnf-beta"]);
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
      (0, n.K2)(this, "RailroadEbnfValueConverter");
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
      return "EBNF_STRING" === e.name
        ? a(t)
        : "EBNF_SPECIAL_SEQUENCE" === e.name
          ? t.slice(1, -1).trim()
          : void 0;
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
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.U4, o);
  return t.ServiceRegistry.register(r), { shared: t, RailroadEbnf: r };
}
(0, n.K2)(l, "createRailroadEbnfServices");
