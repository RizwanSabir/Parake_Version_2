// vendor/other/module-27891.js — webpack module 27891
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
e.exports = function (e) {
  function t(e) {
    let n,
      o,
      i,
      s = null;
    function a(...e) {
      if (!a.enabled) return;
      const r = a,
        o = Number(new Date()),
        i = o - (n || o);
      (r.diff = i),
        (r.prev = n),
        (r.curr = o),
        (n = o),
        (e[0] = t.coerce(e[0])),
        "string" != typeof e[0] && e.unshift("%O");
      let s = 0;
      (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
        if ("%%" === n) return "%";
        s++;
        const i = t.formatters[o];
        if ("function" == typeof i) {
          const t = e[s];
          (n = i.call(r, t)), e.splice(s, 1), s--;
        }
        return n;
      })),
        t.formatArgs.call(r, e),
        (r.log || t.log).apply(r, e);
    }
    return (
      (a.namespace = e),
      (a.useColors = t.useColors()),
      (a.color = t.selectColor(e)),
      (a.extend = r),
      (a.destroy = t.destroy),
      Object.defineProperty(a, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          null !== s
            ? s
            : (o !== t.namespaces && ((o = t.namespaces), (i = t.enabled(e))),
              i),
        set: (e) => {
          s = e;
        },
      }),
      "function" == typeof t.init && t.init(a),
      a
    );
  }
  function r(e, n) {
    const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
    return (r.log = this.log), r;
  }
  function o(e, t) {
    let n = 0,
      r = 0,
      o = -1,
      i = 0;
    for (; n < e.length; )
      if (r < t.length && (t[r] === e[n] || "*" === t[r]))
        "*" === t[r] ? ((o = r), (i = n), r++) : (n++, r++);
      else {
        if (-1 === o) return !1;
        (r = o + 1), i++, (n = i);
      }
    for (; r < t.length && "*" === t[r]; ) r++;
    return r === t.length;
  }
  return (
    (t.debug = t),
    (t.default = t),
    (t.coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e;
    }),
    (t.disable = function () {
      const e = [...t.names, ...t.skips.map((e) => "-" + e)].join(",");
      return t.enable(""), e;
    }),
    (t.enable = function (e) {
      t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
      const n = ("string" == typeof e ? e : "")
        .trim()
        .replace(/\s+/g, ",")
        .split(",")
        .filter(Boolean);
      for (const e of n)
        "-" === e[0] ? t.skips.push(e.slice(1)) : t.names.push(e);
    }),
    (t.enabled = function (e) {
      for (const n of t.skips) if (o(e, n)) return !1;
      for (const n of t.names) if (o(e, n)) return !0;
      return !1;
    }),
    (t.humanize = n(27250 /* vendor/other/module-27250 */)),
    (t.destroy = function () {}),
    Object.keys(e).forEach((n) => {
      t[n] = e[n];
    }),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {}),
    (t.selectColor = function (e) {
      let n = 0;
      for (let t = 0; t < e.length; t++)
        (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
      return t.colors[Math.abs(n) % t.colors.length];
    }),
    t.enable(t.load()),
    t
  );
};
