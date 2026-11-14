// vendor/module-79808.js — webpack module 79808
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.debounce = function (e, t, n) {
    let r, o, i;
    const a = n?.maxWait ? Math.max(n.maxWait, t) : 0,
      s = n?.setTimeoutImpl || setTimeout;
    function l() {
      return c(), (r = e()), r;
    }
    function c() {
      void 0 !== o && clearTimeout(o),
        void 0 !== i && clearTimeout(i),
        (o = i = void 0);
    }
    function u() {
      return (
        o && clearTimeout(o),
        (o = s(l, t)),
        a && void 0 === i && (i = s(l, a)),
        r
      );
    }
    return (
      (u.cancel = c),
      (u.flush = function () {
        return void 0 !== o || void 0 !== i ? l() : r;
      }),
      u
    );
  });
