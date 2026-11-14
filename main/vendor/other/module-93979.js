// vendor/other/module-93979.js — webpack module 93979
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = {
    INTERNAL: 0,
    SERVER: 1,
    CLIENT: 2,
    PRODUCER: 3,
    CONSUMER: 4,
  },
  r = {
    [n.INTERNAL]: "INTERNAL",
    [n.SERVER]: "SERVER",
    [n.CLIENT]: "CLIENT",
    [n.PRODUCER]: "PRODUCER",
    [n.CONSUMER]: "CONSUMER",
  };
(t.SPAN_KIND = n),
  (t.spanKindToName = function (e) {
    return r[e];
  });
