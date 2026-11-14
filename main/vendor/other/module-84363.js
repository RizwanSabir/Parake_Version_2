// vendor/other/module-84363.js — webpack module 84363
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.newBaseUrl = function (e) {
  const t = new r.URL(e);
  return t.pathname.endsWith("/") || (t.pathname += "/"), t;
}),
  (t.newUrlFromBase = function (e, t, n = !1) {
    const o = new r.URL(e, t),
      i = t.search;
    return (
      null != i && 0 !== i.length
        ? (o.search = i)
        : n && (o.search = `noCache=${Date.now().toString(32)}`),
      o
    );
  }),
  (t.getChannelFilename = function (e) {
    return `${e}.yml`;
  });
const r = n(87016 /* external/url */);
