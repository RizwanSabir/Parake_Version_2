// vendor/module-88355.js — webpack module 88355
// params: (e, t) = (module, exports, require)
"use strict";
t.createConnectGate = function ({ isActivated: e, activate: t }) {
  let n = null,
    r = null;
  const o = () => {
    let e;
    return {
      outcome: new Promise((t) => {
        e = t;
      }),
      settle: e,
      closed: !1,
    };
  };
  let i = o();
  const a = () => (e() ? Promise.resolve(!0) : null);
  return {
    captured: () =>
      a() ||
      (r ??
        (() => {
          (n = null), i.closed && (i = o());
          const a = i,
            s = (async () => {
              if (e()) return !0;
              if (!t) return !1;
              try {
                return await t(), !0;
              } catch (e) {
                return (n = e), !1;
              }
            })();
          return (
            (r = s),
            a.settle(s),
            s.then(() => {
              r === s && (r = null), (a.closed = !0);
            }),
            s
          );
        })()),
    follow: () => a() ?? i.outcome,
    abort: () => {
      r || (i.settle(!1), (i.closed = !0));
    },
    get activationError() {
      return n;
    },
  };
};
