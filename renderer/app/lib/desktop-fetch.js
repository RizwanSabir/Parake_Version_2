// app/lib/desktop-fetch.js — webpack module 33445
// params: (e, t) = (module, exports, require)
"use strict";
(t.desktopFetch = void 0),
  (t.desktopFetch = (e, t) => {
    if (!t?.keepalive) return fetch(e, { ...t, credentials: "include" });
    if ("string" != typeof e && !(e instanceof URL))
      return Promise.reject(
        new TypeError("keepalive proxying supports URL inputs only"),
      );
    const n = t.body ?? null;
    if (null !== n && "string" != typeof n)
      return Promise.reject(
        new TypeError("keepalive proxying supports string bodies only"),
      );
    const r = {};
    return (
      new Headers(t.headers).forEach((e, t) => {
        r[t] = e;
      }),
      window.electron.ipcRendererProxy
        .invoke("renderer/keepalive-fetch", {
          url: String(e),
          method: t.method ?? "GET",
          headers: r,
          body: n,
        })
        .then(({ status: e }) => new Response(null, { status: e }))
    );
  });
