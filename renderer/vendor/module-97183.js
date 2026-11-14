// vendor/module-97183.js — webpack module 97183
// params: (e, t, r) = (module, exports, require)
r.d(t, { g: () => f });
var n = r(21471 /* vendor/module-21471 */),
  i = class extends n.mR {
    static {
      (0, n.K2)(this, "EventModelingTokenBuilder");
    }
    constructor() {
      super(["eventmodeling"]);
    }
  },
  a = new Set(["cmd", "command"]),
  s = new Set(["evt", "event"]),
  o = new Set(["rmo", "readmodel"]),
  l = new Set(["pcr", "processor"]),
  u = new Set(["ui"]);
function c(e) {
  const t = e.validation.EventModelingValidator,
    r = e.validation.ValidationRegistry;
  if (r) {
    const e = {
      EmTimeFrame: t.checkSourceFrameTypes.bind(t),
      EmResetFrame: t.checkSourceFrameTypes.bind(t),
    };
    r.register(e, t);
  }
}
(0, n.K2)(c, "registerValidationChecks");
var p = class {
    static {
      (0, n.K2)(this, "EventModelingValidator");
    }
    checkSourceFrameTypes(e, t) {
      0 !== e.sourceFrames.length &&
        (a.has(e.modelEntityType)
          ? this.validateSources(
              e,
              new Set([...u, ...l]),
              "command",
              "ui or processor",
              t,
            )
          : s.has(e.modelEntityType)
            ? this.validateSources(e, a, "event", "command", t)
            : o.has(e.modelEntityType)
              ? this.validateSources(e, s, "read model", "event", t)
              : l.has(e.modelEntityType)
                ? this.validateSources(e, o, "processor", "read model", t)
                : u.has(e.modelEntityType) &&
                  this.validateSources(e, o, "ui", "read model", t));
    }
    validateSources(e, t, r, n, i) {
      for (const a of e.sourceFrames) {
        const s = a.ref;
        void 0 === s ||
          t.has(s.modelEntityType) ||
          i(
            "error",
            `A ${r} can only receive input from a ${n}, not from '${s.modelEntityType}'.`,
            { node: e, property: "sourceFrames" },
          );
      }
    }
  },
  d = {
    parser: {
      TokenBuilder: (0, n.K2)(() => new i(), "TokenBuilder"),
      ValueConverter: (0, n.K2)(() => new n.Tm(), "ValueConverter"),
    },
    validation: {
      EventModelingValidator: (0, n.K2)(
        () => new p(),
        "EventModelingValidator",
      ),
    },
  };
function f(e = n.DD) {
  const t = (0, n.WQ)((0, n.uM)(e), n.sr),
    r = (0, n.WQ)((0, n.tG)({ shared: t }), n.x0, d);
  return t.ServiceRegistry.register(r), c(r), { shared: t, EventModel: r };
}
(0, n.K2)(f, "createEventModelingServices");
