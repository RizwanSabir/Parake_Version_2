// vendor/other/module-54426.js — webpack module 54426
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */);
t.captureFeedback = function (e, t = {}, n = r.getCurrentScope()) {
  const {
      message: o,
      name: i,
      email: s,
      url: a,
      source: c,
      associatedEventId: u,
      tags: l,
    } = e,
    d = {
      contexts: {
        feedback: {
          contact_email: s,
          name: i,
          message: o,
          url: a,
          source: c,
          associated_event_id: u,
        },
      },
      type: "feedback",
      level: "info",
      tags: l,
    },
    p = n?.getClient() || r.getClient();
  return p && p.emit("beforeSendFeedback", d, t), n.captureEvent(d, t);
};
