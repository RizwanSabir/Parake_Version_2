// vendor/module-54426.js — webpack module 54426
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */);
t.captureFeedback = function (e, t = {}, n = r.getCurrentScope()) {
  const {
      message: o,
      name: i,
      email: a,
      url: s,
      source: l,
      associatedEventId: c,
      tags: u,
    } = e,
    d = {
      contexts: {
        feedback: {
          contact_email: a,
          name: i,
          message: o,
          url: s,
          source: l,
          associated_event_id: c,
        },
      },
      type: "feedback",
      level: "info",
      tags: u,
    },
    p = n?.getClient() || r.getClient();
  return p && p.emit("beforeSendFeedback", d, t), n.captureEvent(d, t);
};
