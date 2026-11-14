// vendor/sentry/offline-store.js — webpack module 22332
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(79896 /* external/fs */),
  i = n(16928 /* external/path */),
  s = n(10342 /* vendor/sentry/electron-constants */),
  a = n(25141 /* vendor/other/module-25141 */);
function c(e, t) {
  const n = Date.now() - 864e5 * t;
  return (e?.date?.getTime() || 0) < n;
}
function u(e) {
  const t = e[0];
  if ("string" == typeof t.sent_at) return new Date(t.sent_at);
}
t.createOfflineStore = function (e) {
  function t(...e) {
    r.debug.log("[Offline Store]:", ...e);
  }
  const n = {
      maxAgeDays: e.maxAgeDays || 30,
      maxQueueSize: e.maxQueueSize || 30,
      queuePath: e.queuePath || i.join(s.getSentryCachePath(), "queue"),
    },
    l = new a.Store(n.queuePath, "queue-v2", []);
  function d(e) {
    o.promises.unlink(i.join(n.queuePath, e)).catch(() => {});
  }
  function p(e) {
    for (; e[0] && c(e[0], n.maxAgeDays); ) {
      const n = e.shift();
      t("Removing stale envelope", n), d(n.id);
    }
  }
  async function f(e, s, a) {
    t(`${s}ing envelope into offline storage`);
    const c = r.uuid4();
    try {
      const t = r.serializeEnvelope(e);
      await o.promises.mkdir(n.queuePath, { recursive: !0 }),
        await o.promises.writeFile(i.join(n.queuePath, c), t);
    } catch (e) {
      t("Failed to save", e);
    }
    await l.update((t) =>
      "push" === s && (p(t), t.length >= n.maxQueueSize)
        ? (d(c), t)
        : (t[s]({ id: c, date: a || u(e) || new Date() }), t),
    );
  }
  let h;
  return {
    push: async (e) => {
      await f(e, "push");
    },
    unshift: async (e) => {
      await f(e, "unshift", h);
    },
    shift: async () => {
      let e;
      if (
        (t("Popping envelope from offline storage"),
        await l.update((t) => (p(t), (e = t.shift()), t)),
        e)
      )
        try {
          const t = await o.promises.readFile(i.join(n.queuePath, e.id));
          return d(e.id), (h = e.date), r.parseEnvelope(t);
        } catch (e) {
          t("Failed to read", e);
        }
    },
  };
};
