// vendor/module-50557.js — webpack module 50557
// params: (e, t) = (module, exports, require)
function n(e) {
  return "object" == typeof e && null !== e && "subscribe" in e;
}
function r(e) {
  const t = {
    subscribe(t) {
      let n = null,
        r = !1,
        o = !1,
        i = !1;
      function a() {
        null !== n
          ? o || ((o = !0), "function" == typeof n ? n() : n && n.unsubscribe())
          : (i = !0);
      }
      return (
        (n = e({
          next(e) {
            var n;
            r || null === (n = t.next) || void 0 === n || n.call(t, e);
          },
          error(e) {
            var n;
            r ||
              ((r = !0),
              null === (n = t.error) || void 0 === n || n.call(t, e),
              a());
          },
          complete() {
            var e;
            r ||
              ((r = !0),
              null === (e = t.complete) || void 0 === e || e.call(t),
              a());
          },
        })),
        i && a(),
        { unsubscribe: a }
      );
    },
    pipe: (...e) => e.reduce(o, t),
  };
  return t;
}
function o(e, t) {
  return t(e);
}
function i(e) {
  const t = new AbortController();
  return new Promise((n, r) => {
    let o = !1;
    function i() {
      o || ((o = !0), a.unsubscribe());
    }
    t.signal.addEventListener("abort", () => {
      r(t.signal.reason);
    });
    const a = e.subscribe({
      next(e) {
        (o = !0), n(e), i();
      },
      error(e) {
        r(e);
      },
      complete() {
        t.abort(), i();
      },
    });
  });
}
function a(e, t) {
  const n = (function (e, t) {
      let n = null;
      const r = () => {
        null == n || n.unsubscribe(),
          (n = null),
          t.removeEventListener("abort", r);
      };
      return new ReadableStream({
        start(o) {
          (n = e.subscribe({
            next(e) {
              o.enqueue({ ok: !0, value: e });
            },
            error(e) {
              o.enqueue({ ok: !1, error: e }), o.close();
            },
            complete() {
              o.close();
            },
          })),
            t.aborted ? r() : t.addEventListener("abort", r, { once: !0 });
        },
        cancel() {
          r();
        },
      });
    })(e, t),
    r = n.getReader(),
    o = {
      async next() {
        const e = await r.read();
        if (e.done) return { value: void 0, done: !0 };
        const { value: t } = e;
        if (!t.ok) throw t.error;
        return { value: t.value, done: !1 };
      },
      return: async () => (await r.cancel(), { value: void 0, done: !0 }),
    };
  return { [Symbol.asyncIterator]: () => o };
}
Object.defineProperty(t, "isObservable", {
  enumerable: !0,
  get: function () {
    return n;
  },
}),
  Object.defineProperty(t, "observable", {
    enumerable: !0,
    get: function () {
      return r;
    },
  }),
  Object.defineProperty(t, "observableToAsyncIterable", {
    enumerable: !0,
    get: function () {
      return a;
    },
  }),
  Object.defineProperty(t, "observableToPromise", {
    enumerable: !0,
    get: function () {
      return i;
    },
  });
