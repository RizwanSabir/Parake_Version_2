// vendor/other/module-55264.js — webpack module 55264
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(39053 /* vendor/other/module-39053 */),
  i = n(50131 /* vendor/other/module-50131 */);
function s(e) {
  return new Promise((t, n) => {
    (e.oncomplete = e.onsuccess = () => t(e.result)),
      (e.onabort = e.onerror = () => n(e.error));
  });
}
function a(e, t) {
  const n = indexedDB.open(e);
  n.onupgradeneeded = () => n.result.createObjectStore(t);
  const r = s(n);
  return (e) => r.then((n) => e(n.transaction(t, "readwrite").objectStore(t)));
}
function c(e) {
  return s(e.getAllKeys());
}
function u(e, t, n) {
  return e((e) =>
    c(e).then((r) => {
      if (!(r.length >= n))
        return e.put(t, Math.max(...r, 0) + 1), s(e.transaction);
    }),
  );
}
function l(e, t, n) {
  return e((e) =>
    c(e).then((r) => {
      if (!(r.length >= n))
        return e.put(t, Math.min(...r, 0) - 1), s(e.transaction);
    }),
  );
}
function d(e) {
  return e((e) =>
    c(e).then((t) => {
      const n = t[0];
      if (null != n)
        return s(e.get(n)).then(
          (t) => (e.delete(n), s(e.transaction).then(() => t)),
        );
    }),
  );
}
function p(e) {
  let t;
  function n() {
    return (
      null == t &&
        (t = a(e.dbName || "sentry-offline", e.storeName || "queue")),
      t
    );
  }
  return {
    push: async (t) => {
      try {
        const o = r.serializeEnvelope(t);
        await u(n(), o, e.maxQueueSize || 30);
      } catch {}
    },
    unshift: async (t) => {
      try {
        const o = r.serializeEnvelope(t);
        await l(n(), o, e.maxQueueSize || 30);
      } catch {}
    },
    shift: async () => {
      try {
        const e = await d(n());
        if (e) return r.parseEnvelope(e);
      } catch {}
    },
  };
}
(t.createStore = a),
  (t.makeBrowserOfflineTransport = function (e = i.makeFetchTransport) {
    return (function (e) {
      return (t) => {
        const n = e({ ...t, createStore: p });
        return (
          o.WINDOW.addEventListener("online", async (e) => {
            await n.flush();
          }),
          n
        );
      };
    })(r.makeOfflineTransport(e));
  }),
  (t.push = u),
  (t.shift = d),
  (t.unshift = l);
