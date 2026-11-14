// vendor/other/module-93931.js — webpack module 93931
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(16928 /* external/path */),
  o = n(79280 /* vendor/other/module-79280 */),
  { fileURLToPath: i } = n(87016 /* external/url */),
  { MessageChannel: s } = n(28167 /* external/worker_threads */);
let { isBuiltin: a } = n(73339 /* external/module */);
a || (a = () => !0);
const {
  importHooks: c,
  specifiers: u,
  toHook: l,
} = n(8026 /* vendor/other/module-8026 */);
function d(e, t) {
  if (!(process.env.TURBOPACK ?? process.argv.includes("--turbo"))) return !1;
  const n = e.slice(0, e.lastIndexOf("-"));
  return t.endsWith(n);
}
function p(e) {
  c.push(e), l.forEach(([t, n, r]) => e(t, n, r));
}
function f(e) {
  const t = c.indexOf(e);
  t > -1 && c.splice(t, 1);
}
function h(e, t, n, r) {
  const o = e(t, n, r);
  o && o !== t && "default" in t && (t.default = o);
}
let g;
function m(e, t, n) {
  if (this instanceof m == 0) return new m(e, t, n);
  "function" == typeof e
    ? ((n = e), (e = null), (t = null))
    : "function" == typeof t && ((n = t), (t = null));
  const s = !!t && !0 === t.internals;
  g && Array.isArray(e) && g(e),
    (this._iitmHook = (t, c, l) => {
      const p = t;
      let f, g;
      if (p.startsWith("node:")) {
        const e = t.slice(5);
        a(e) && (t = e);
      } else if (p.startsWith("file://")) {
        const e = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        try {
          (f = i(t)), (t = f);
        } catch (e) {}
        if (((Error.stackTraceLimit = e), f)) {
          const e = o(f);
          e && ((t = e.name), (g = e.basedir));
        }
      }
      if (e)
        for (const o of e)
          if (f && o === f) h(n, c, f, void 0);
          else if (o === t)
            if (g) {
              if (g.endsWith(u.get(p)) || d(u.get(p), g)) h(n, c, t, g);
              else if (s) {
                const e = t + r.sep + r.relative(g, f);
                h(n, c, e, g);
              }
            } else h(n, c, t, g);
          else o === l && h(n, c, l, g);
      else h(n, c, t, g);
    }),
    p(this._iitmHook);
}
(m.prototype.unhook = function () {
  f(this._iitmHook);
}),
  (e.exports = m),
  (e.exports.Hook = m),
  (e.exports.addHook = p),
  (e.exports.removeHook = f),
  (e.exports.createAddHookMessageChannel = function () {
    const { port1: e, port2: t } = new s();
    let n,
      r = 0;
    return (
      (g = (t) => {
        r++, e.postMessage(t);
      }),
      e
        .on("message", () => {
          r--, n && r <= 0 && n();
        })
        .unref(),
      {
        registerOptions: {
          data: { addHookMessagePort: t, include: [] },
          transferList: [t],
        },
        addHookMessagePort: t,
        waitForAllMessagesAcknowledged: function () {
          const e = setInterval(() => {}, 1e3),
            t = new Promise((e) => {
              n = e;
            }).then(() => {
              clearInterval(e);
            });
          return 0 === r && n(), t;
        },
      }
    );
  });
