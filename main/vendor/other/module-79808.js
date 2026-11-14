// vendor/other/module-79808.js — webpack module 79808
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.debounce = function (e, t, n) {
    let r, o, i;
    const s = n?.maxWait ? Math.max(n.maxWait, t) : 0,
      a = n?.setTimeoutImpl || setTimeout;
    function c() {
      return u(), (r = e()), r;
    }
    function u() {
      void 0 !== o && clearTimeout(o),
        void 0 !== i && clearTimeout(i),
        (o = i = void 0);
    }
    function l() {
      return (
        o && clearTimeout(o),
        (o = a(c, t)),
        s && void 0 === i && (i = a(c, s)),
        r
      );
    }
    return (
      (l.cancel = u),
      (l.flush = function () {
        return void 0 !== o || void 0 !== i ? c() : r;
      }),
      l
    );
  });
