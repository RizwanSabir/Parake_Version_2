// vendor/module-24585.js — webpack module 24585
// params: (e, t) = (module, exports, require)
"use strict";
t.createEnrollmentAttempts = function () {
  let e = null;
  const t = () => {
    e?.retire(), (e = null);
  };
  return {
    begin: (n) => (
      t(),
      (e = (function (e) {
        let t = !1;
        const n = [],
          r = () => {
            for (; n.length > 0; ) n.pop()?.close();
          };
        return {
          take: {
            language: e,
            frames: [],
            sampleCount: 0,
            identifiers: null,
            stopPromise: null,
          },
          get isStale() {
            return t;
          },
          release: r,
          retire: () => {
            (t = !0), r();
          },
          async acquire(e, o, i) {
            const a = await o();
            return t
              ? (i(a), r(), null)
              : (n.push({ key: e, value: a, close: () => i(a) }), a);
          },
          async step(e) {
            const n = await e();
            return t ? null : n;
          },
          held(e) {
            const t = n.findLast((t) => t.key === e);
            return t ? t.value : null;
          },
          disown(e) {
            const t = n.findLastIndex((t) => t.key === e);
            t >= 0 && n.splice(t, 1);
          },
        };
      })(n)),
      e
    ),
    discard: t,
    current: () => e,
  };
};
