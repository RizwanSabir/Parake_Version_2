// vendor/module-26027.js — webpack module 26027
// params: (e, t, r) = (module, exports, require)
r.d(t, { J: () => s });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.dg {
    static {
      (0, n.K2)(this, "WardleyValueConverter");
    }
    runCustomConverter(e, t, r) {
      if ("LINK_LABEL" === e.name.toUpperCase()) return t.substring(1).trim();
    }
  },
  a = {
    parser: {
      ValueConverter: (0, n.K2)(() => new i(), "ValueConverter"),
    },
  };
function s(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.Xr, a);
  return t.ServiceRegistry.register(r), { shared: t, Wardley: r };
}
(0, n.K2)(s, "createWardleyServices");
