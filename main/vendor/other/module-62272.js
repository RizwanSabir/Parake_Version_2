// vendor/other/module-62272.js — webpack module 62272
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(e.exports = function (e, t, n, o) {
  n instanceof Function && ((o = n), (n = {}));
  const d = (async function (e, t, n = {}) {
    let o, d;
    "string" == typeof n && (n = { encoding: n });
    const p = i(h(() => d)),
      m = s.resolve(e);
    try {
      await (function (e) {
        return new Promise((t) => {
          l[e] || (l[e] = []), l[e].push(t), 1 === l[e].length && t();
        });
      })(m);
      const i = await u(r.realpath)(e).catch(() => e);
      if (((d = f(i)), !n.mode || !n.chown)) {
        const e = await u(r.stat)(i).catch(() => {});
        e &&
          (null == n.mode && (n.mode = e.mode),
          null == n.chown &&
            process.getuid &&
            (n.chown = { uid: e.uid, gid: e.gid }));
      }
      (o = await u(r.open)(d, "w", n.mode)),
        n.tmpfileCreated && (await n.tmpfileCreated(d)),
        a(t) && (t = c(t)),
        Buffer.isBuffer(t)
          ? await u(r.write)(o, t, 0, t.length, 0)
          : null != t &&
            (await u(r.write)(o, String(t), 0, String(n.encoding || "utf8"))),
        !1 !== n.fsync && (await u(r.fsync)(o)),
        await u(r.close)(o),
        (o = null),
        n.chown &&
          (await u(r.chown)(d, n.chown.uid, n.chown.gid).catch((e) => {
            if (!g(e)) throw e;
          })),
        n.mode &&
          (await u(r.chmod)(d, n.mode).catch((e) => {
            if (!g(e)) throw e;
          })),
        await u(r.rename)(d, i);
    } finally {
      o && (await u(r.close)(o).catch(() => {})),
        p(),
        await u(r.unlink)(d).catch(() => {}),
        l[m].shift(),
        l[m].length > 0 ? l[m][0]() : delete l[m];
    }
  })(e, t, n);
  return o && d.then(o, o), d;
}),
  (e.exports.sync = function (e, t, n) {
    "string" == typeof n ? (n = { encoding: n }) : n || (n = {});
    try {
      e = r.realpathSync(e);
    } catch (e) {}
    const o = f(e);
    if (!n.mode || !n.chown)
      try {
        const t = r.statSync(e);
        (n = Object.assign({}, n)).mode || (n.mode = t.mode),
          !n.chown && process.getuid && (n.chown = { uid: t.uid, gid: t.gid });
      } catch (e) {}
    let s;
    const u = h(o),
      l = i(u);
    let d = !0;
    try {
      if (
        ((s = r.openSync(o, "w", n.mode || 438)),
        n.tmpfileCreated && n.tmpfileCreated(o),
        a(t) && (t = c(t)),
        Buffer.isBuffer(t)
          ? r.writeSync(s, t, 0, t.length, 0)
          : null != t &&
            r.writeSync(s, String(t), 0, String(n.encoding || "utf8")),
        !1 !== n.fsync && r.fsyncSync(s),
        r.closeSync(s),
        (s = null),
        n.chown)
      )
        try {
          r.chownSync(o, n.chown.uid, n.chown.gid);
        } catch (e) {
          if (!g(e)) throw e;
        }
      if (n.mode)
        try {
          r.chmodSync(o, n.mode);
        } catch (e) {
          if (!g(e)) throw e;
        }
      r.renameSync(o, e), (d = !1);
    } finally {
      if (s)
        try {
          r.closeSync(s);
        } catch (e) {}
      l(), d && u();
    }
  }),
  (e.exports._getTmpname = f),
  (e.exports._cleanupOnExit = h);
const r = n(79896 /* external/fs */),
  o = n(33918 /* vendor/other/module-33918 */),
  i = n(67417 /* vendor/other/module-67417 */),
  s = n(16928 /* external/path */),
  a = n(78480 /* vendor/other/module-78480 */),
  c = n(42100 /* vendor/other/module-42100 */),
  { promisify: u } = n(39023 /* external/util */),
  l = {},
  d = (function () {
    try {
      return n(28167 /* external/worker_threads */).threadId;
    } catch (e) {
      return 0;
    }
  })();
let p = 0;
function f(e) {
  return (
    e +
    "." +
    o(__filename)
      .hash(String(process.pid))
      .hash(String(d))
      .hash(String(++p))
      .result()
  );
}
function h(e) {
  return () => {
    try {
      r.unlinkSync("function" == typeof e ? e() : e);
    } catch (e) {}
  };
}
function g(e) {
  return (
    "ENOSYS" === e.code ||
    !(
      (process.getuid && 0 === process.getuid()) ||
      ("EINVAL" !== e.code && "EPERM" !== e.code)
    )
  );
}
