// vendor/module-21128.js — webpack module 21128
// params: (e, t, n) = (module, exports, require)
const r = n(50557 /* vendor/module-50557 */);
function o(e) {
  return (t) =>
    r.observable((n) => {
      let r = 0;
      return t.subscribe({
        next(t) {
          n.next(e(t, r++));
        },
        error(e) {
          n.error(e);
        },
        complete() {
          n.complete();
        },
      });
    });
}
function i(e) {
  return (e) => {
    let t = 0,
      n = null;
    const o = [];
    return r.observable(
      (r) => (
        t++,
        o.push(r),
        n ||
          (n = e.subscribe({
            next(e) {
              for (const n of o) {
                var t;
                null === (t = n.next) || void 0 === t || t.call(n, e);
              }
            },
            error(e) {
              for (const n of o) {
                var t;
                null === (t = n.error) || void 0 === t || t.call(n, e);
              }
            },
            complete() {
              for (const t of o) {
                var e;
                null === (e = t.complete) || void 0 === e || e.call(t);
              }
            },
          })),
        {
          unsubscribe() {
            t--,
              (function () {
                if (0 === t && n) {
                  const e = n;
                  (n = null), e.unsubscribe();
                }
              })();
            const e = o.findIndex((e) => e === r);
            e > -1 && o.splice(e, 1);
          },
        }
      ),
    );
  };
}
function a(e) {
  return (t) =>
    r.observable((n) =>
      t.subscribe({
        next(t) {
          var r;
          null === (r = e.next) || void 0 === r || r.call(e, t), n.next(t);
        },
        error(t) {
          var r;
          null === (r = e.error) || void 0 === r || r.call(e, t), n.error(t);
        },
        complete() {
          var t;
          null === (t = e.complete) || void 0 === t || t.call(e), n.complete();
        },
      }),
    );
}
const s = Symbol();
function l(e = (e, t) => e === t) {
  return (t) =>
    r.observable((n) => {
      let r = s;
      return t.subscribe({
        next(t) {
          (r !== s && e(r, t)) || ((r = t), n.next(t));
        },
        error(e) {
          n.error(e);
        },
        complete() {
          n.complete();
        },
      });
    });
}
const c = (e, t) =>
  e === t ||
  (!(!e || !t || "object" != typeof e || "object" != typeof t) &&
    Object.keys(e).length === Object.keys(t).length &&
    Object.entries(e).every(([e, n]) => c(n, t[e])));
function u() {
  return l(c);
}
function d(e) {
  let t = e;
  const n = [],
    o = r.observable(
      (e) => (
        ((e) => {
          void 0 !== t && e.next(t), n.push(e);
        })(e),
        () => {
          ((e) => {
            n.splice(n.indexOf(e), 1);
          })(e);
        }
      ),
    );
  return (
    (o.next = (e) => {
      if (t !== e) {
        t = e;
        for (const t of n) t.next(e);
      }
    }),
    (o.get = () => t),
    o
  );
}
Object.defineProperty(t, "behaviorSubject", {
  enumerable: !0,
  get: function () {
    return d;
  },
}),
  Object.defineProperty(t, "distinctUntilChanged", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(t, "distinctUntilDeepChanged", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "map", {
    enumerable: !0,
    get: function () {
      return o;
    },
  }),
  Object.defineProperty(t, "share", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }),
  Object.defineProperty(t, "tap", {
    enumerable: !0,
    get: function () {
      return a;
    },
  });
