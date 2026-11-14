// vendor/module-23067.js — webpack module 23067
// params: (e, t, r) = (module, exports, require)
r.d(t, { $: () => s });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "PacketTokenBuilder");
    }
    constructor() {
      super(["packet"]);
    }
  },
  a = {
    parser: {
      TokenBuilder: (0, n.K2)(() => new i(), "TokenBuilder"),
      ValueConverter: (0, n.K2)(() => new n.Tm(), "ValueConverter"),
    },
  };
function s(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.p5, a);
  return t.ServiceRegistry.register(r), { shared: t, Packet: r };
}
(0, n.K2)(s, "createPacketServices");
