// vendor/other/module-41302.js — webpack module 41302
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var n;
(t.IPCMode = void 0),
  ((n = t.IPCMode || (t.IPCMode = {}))[(n.Classic = 1)] = "Classic"),
  (n[(n.Protocol = 2)] = "Protocol"),
  (n[(n.Both = 3)] = "Both");
const r = "__sentry_message_port_message__";
(t.RENDERER_ID_HEADER = "sentry-electron-renderer-id"),
  (t.getMagicMessage = function () {
    return { [r]: !0 };
  }),
  (t.ipcChannelUtils = function (e) {
    return {
      createUrl: (t) => `${e}://${t}/sentry_key`,
      urlMatches: function (e, t) {
        return e.startsWith(this.createUrl(t));
      },
      createKey: (t) => `${e}.${t}`,
      namespace: e,
    };
  }),
  (t.isMagicMessage = function (e) {
    return !(!e || "object" != typeof e || !(r in e));
  });
