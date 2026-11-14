// vendor/module-46783.js — webpack module 46783
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, {
  createNotifyManager: () => u,
  defaultScheduler: () => c,
  notifyManager: () => d,
}),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(97167 /* vendor/module-97167 */).systemSetTimeoutZero;
function u() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    o = c;
  const i = (r) => {
    t
      ? e.push(r)
      : o(() => {
          n(r);
        });
  };
  return {
    batch: (i) => {
      let a;
      t++;
      try {
        a = i();
      } finally {
        t--,
          t ||
            (() => {
              const t = e;
              (e = []),
                t.length &&
                  o(() => {
                    r(() => {
                      t.forEach((e) => {
                        n(e);
                      });
                    });
                  });
            })();
      }
      return a;
    },
    batchCalls:
      (e) =>
      (...t) => {
        i(() => {
          e(...t);
        });
      },
    schedule: i,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      o = e;
    },
  };
}
var d = u();
