// vendor/module-13650.js — webpack module 13650
// params: (e, t, r) = (module, exports, require)
r.d(t, { I: () => o });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.dg {
    static {
      (0, n.K2)(this, "TreeViewValueConverter");
    }
    runCustomConverter(e, t, r) {
      if ("INDENTATION" === e.name) return t?.length || 0;
      if ("QUOTED_NAME" === e.name) return t.substring(1, t.length - 1);
      if ("BARE_NAME" === e.name) return t.replace(/[\t ]+$/, "");
      if ("CLASS_ANNOTATION" === e.name) return t.trim().substring(3).trim();
      if ("ICON_ANNOTATION" === e.name) {
        const e = t.trim();
        return e.substring(5, e.length - 1);
      }
      return "DESC_ANNOTATION" === e.name
        ? t.trim().substring(2).trim()
        : void 0;
    }
  },
  a = class extends n.mR {
    static {
      (0, n.K2)(this, "TreeViewTokenBuilder");
    }
    constructor() {
      super(["treeView-beta"]);
    }
  },
  s = {
    parser: {
      TokenBuilder: (0, n.K2)(() => new a(), "TokenBuilder"),
      ValueConverter: (0, n.K2)(() => new i(), "ValueConverter"),
    },
  };
function o(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.CZ, s);
  return t.ServiceRegistry.register(r), { shared: t, TreeView: r };
}
(0, n.K2)(o, "createTreeViewServices");
