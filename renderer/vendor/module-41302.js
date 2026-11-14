// vendor/module-41302.js — webpack module 41302
// params: (e, t) = (module, exports, require)
var n;
(t.QU = void 0),
  ((n = t.QU || (t.QU = {}))[(n.Classic = 1)] = "Classic"),
  (n[(n.Protocol = 2)] = "Protocol"),
  (n[(n.Both = 3)] = "Both");
(t.RENDERER_ID_HEADER = "sentry-electron-renderer-id"),
  (t.ipcChannelUtils = function (e) {
    return {
      createUrl: (t) => `${e}://${t}/sentry_key`,
      urlMatches: function (e, t) {
        return e.startsWith(this.createUrl(t));
      },
      createKey: (t) => `${e}.${t}`,
      namespace: e,
    };
  });
