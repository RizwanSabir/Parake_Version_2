// vendor/module-77664.js — webpack module 77664
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
  CancelledError: () => g,
  canFetch: () => m,
  createRetryer: () => v,
  isCancelledError: () => y,
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
var c = n(35652 /* vendor/module-35652 */),
  u = n(71433 /* vendor/module-71433 */),
  d = n(94200 /* vendor/module-94200 */),
  p = n(89425 /* vendor/module-89425 */),
  f = n(26036 /* vendor/module-26036 */);
function h(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function m(e) {
  return "online" !== (e ?? "online") || u.onlineManager.isOnline();
}
var g = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent);
  }
};
function y(e) {
  return e instanceof g;
}
function v(e) {
  let t,
    n = !1,
    r = 0;
  const o = (0, d.pendingThenable)(),
    i = () => "pending" !== o.status,
    a = () =>
      c.focusManager.isFocused() &&
      ("always" === e.networkMode || u.onlineManager.isOnline()) &&
      e.canRun(),
    s = () => m(e.networkMode) && e.canRun(),
    l = (e) => {
      i() || (t?.(), o.resolve(e));
    },
    y = (e) => {
      i() || (t?.(), o.reject(e));
    },
    v = () =>
      new Promise((n) => {
        (t = (e) => {
          (i() || a()) && n(e);
        }),
          e.onPause?.();
      }).then(() => {
        (t = void 0), i() || e.onContinue?.();
      }),
    b = () => {
      if (i()) return;
      let t;
      const o = 0 === r ? e.initialPromise : void 0;
      try {
        t = o ?? e.fn();
      } catch (e) {
        t = Promise.reject(e);
      }
      Promise.resolve(t)
        .then(l)
        .catch((t) => {
          if (i()) return;
          const o = e.retry ?? (p.environmentManager.isServer() ? 0 : 3),
            s = e.retryDelay ?? h,
            l = "function" == typeof s ? s(r, t) : s,
            c =
              !0 === o ||
              ("number" == typeof o && r < o) ||
              ("function" == typeof o && o(r, t));
          !n && c
            ? (r++,
              e.onFail?.(r, t),
              (0, f.sleep)(l)
                .then(() => (a() ? void 0 : v()))
                .then(() => {
                  n ? y(t) : b();
                }))
            : y(t);
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: (t) => {
      if (!i()) {
        const n = new g(t);
        y(n), e.onCancel?.(n);
      }
    },
    continue: () => (t?.(), o),
    cancelRetry: () => {
      n = !0;
    },
    continueRetry: () => {
      n = !1;
    },
    canStart: s,
    start: () => (s() ? b() : v().then(b), o),
  };
}
