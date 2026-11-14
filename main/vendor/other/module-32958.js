// vendor/other/module-32958.js — webpack module 32958
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(58611 /* external/http */),
  o = n(65692 /* external/https */),
  { transform: i } = n(83748 /* vendor/other/module-83748 */),
  { removeStyles: s } = n(82501 /* vendor/other/module-82501 */),
  { toJSON: a, maxDepth: c } = n(62710 /* vendor/other/module-62710 */);
e.exports = function (e) {
  return Object.assign(t, {
    client: { name: "electron-application" },
    depth: 6,
    level: !1,
    requestOptions: {},
    transforms: [s, a, c],
    makeBodyFn: ({ message: e }) =>
      JSON.stringify({
        client: t.client,
        data: e.data,
        date: e.date.getTime(),
        level: e.level,
        scope: e.scope,
        variables: e.variables,
      }),
    processErrorFn({ error: n }) {
      e.processMessage(
        {
          data: [`electron-log: can't POST ${t.url}`, n],
          level: "warn",
        },
        { transports: ["console", "file"] },
      );
    },
    sendRequestFn({ serverUrl: e, requestOptions: t, body: n }) {
      const i = (e.startsWith("https:") ? o : r).request(e, {
        method: "POST",
        ...t,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": n.length,
          ...t.headers,
        },
      });
      return i.write(n), i.end(), i;
    },
  });
  function t(n) {
    if (!t.url) return;
    const r = t.makeBodyFn({
        logger: e,
        message: {
          ...n,
          data: i({ logger: e, message: n, transport: t }),
        },
        transport: t,
      }),
      o = t.sendRequestFn({
        serverUrl: t.url,
        requestOptions: t.requestOptions,
        body: Buffer.from(r, "utf8"),
      });
    o.on("error", (r) =>
      t.processErrorFn({
        error: r,
        logger: e,
        message: n,
        request: o,
        transport: t,
      }),
    );
  }
};
