// vendor/module-28260.js — webpack module 28260
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(35959 /* vendor/module-35959 */),
  o = n(98050 /* vendor/module-98050 */),
  i = Symbol.for("SentryBufferFullError");
(t.SENTRY_BUFFER_FULL_ERROR = i),
  (t.makePromiseBuffer = function (e = 100) {
    const t = new Set();
    function n(e) {
      t.delete(e);
    }
    return {
      get $() {
        return Array.from(t);
      },
      add: function (o) {
        if (!(t.size < e)) return r.rejectedSyncPromise(i);
        const a = o();
        return (
          t.add(a),
          a.then(
            () => n(a),
            () => n(a),
          ),
          a
        );
      },
      drain: function (e) {
        if (!t.size) return r.resolvedSyncPromise(!0);
        const n = Promise.allSettled(Array.from(t)).then(() => !0);
        if (!e) return n;
        const i = [
          n,
          new Promise((t) => o.safeUnref(setTimeout(() => t(!1), e))),
        ];
        return Promise.race(i);
      },
    };
  });
