// vendor/other/module-5039.js — webpack module 5039
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(53690 /* vendor/other/module-53690 */),
  o = n(16928 /* external/path */),
  i = n(39023 /* external/util */);
function s(e, t, n) {
  const o = n.dereference
    ? (e) => r.stat(e, { bigint: !0 })
    : (e) => r.lstat(e, { bigint: !0 });
  return Promise.all([
    o(e),
    o(t).catch((e) => {
      if ("ENOENT" === e.code) return null;
      throw e;
    }),
  ]).then(([e, t]) => ({ srcStat: e, destStat: t }));
}
function a(e, t) {
  return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
}
function c(e, t) {
  const n = o
      .resolve(e)
      .split(o.sep)
      .filter((e) => e),
    r = o
      .resolve(t)
      .split(o.sep)
      .filter((e) => e);
  return n.reduce((e, t, n) => e && r[n] === t, !0);
}
function u(e, t, n) {
  return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
e.exports = {
  checkPaths: function (e, t, n, r, l) {
    i.callbackify(s)(e, t, r, (r, i) => {
      if (r) return l(r);
      const { srcStat: s, destStat: d } = i;
      if (d) {
        if (a(s, d)) {
          const r = o.basename(e),
            i = o.basename(t);
          return "move" === n && r !== i && r.toLowerCase() === i.toLowerCase()
            ? l(null, { srcStat: s, destStat: d, isChangingCase: !0 })
            : l(new Error("Source and destination must not be the same."));
        }
        if (s.isDirectory() && !d.isDirectory())
          return l(
            new Error(
              `Cannot overwrite non-directory '${t}' with directory '${e}'.`,
            ),
          );
        if (!s.isDirectory() && d.isDirectory())
          return l(
            new Error(
              `Cannot overwrite directory '${t}' with non-directory '${e}'.`,
            ),
          );
      }
      return s.isDirectory() && c(e, t)
        ? l(new Error(u(e, t, n)))
        : l(null, { srcStat: s, destStat: d });
    });
  },
  checkPathsSync: function (e, t, n, i) {
    const { srcStat: s, destStat: l } = (function (e, t, n) {
      let o;
      const i = n.dereference
          ? (e) => r.statSync(e, { bigint: !0 })
          : (e) => r.lstatSync(e, { bigint: !0 }),
        s = i(e);
      try {
        o = i(t);
      } catch (e) {
        if ("ENOENT" === e.code) return { srcStat: s, destStat: null };
        throw e;
      }
      return { srcStat: s, destStat: o };
    })(e, t, i);
    if (l) {
      if (a(s, l)) {
        const r = o.basename(e),
          i = o.basename(t);
        if ("move" === n && r !== i && r.toLowerCase() === i.toLowerCase())
          return { srcStat: s, destStat: l, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (s.isDirectory() && !l.isDirectory())
        throw new Error(
          `Cannot overwrite non-directory '${t}' with directory '${e}'.`,
        );
      if (!s.isDirectory() && l.isDirectory())
        throw new Error(
          `Cannot overwrite directory '${t}' with non-directory '${e}'.`,
        );
    }
    if (s.isDirectory() && c(e, t)) throw new Error(u(e, t, n));
    return { srcStat: s, destStat: l };
  },
  checkParentPaths: function e(t, n, i, s, c) {
    const l = o.resolve(o.dirname(t)),
      d = o.resolve(o.dirname(i));
    if (d === l || d === o.parse(d).root) return c();
    r.stat(d, { bigint: !0 }, (r, o) =>
      r
        ? "ENOENT" === r.code
          ? c()
          : c(r)
        : a(n, o)
          ? c(new Error(u(t, i, s)))
          : e(t, n, d, s, c),
    );
  },
  checkParentPathsSync: function e(t, n, i, s) {
    const c = o.resolve(o.dirname(t)),
      l = o.resolve(o.dirname(i));
    if (l === c || l === o.parse(l).root) return;
    let d;
    try {
      d = r.statSync(l, { bigint: !0 });
    } catch (e) {
      if ("ENOENT" === e.code) return;
      throw e;
    }
    if (a(n, d)) throw new Error(u(t, i, s));
    return e(t, n, l, s);
  },
  isSrcSubdir: c,
  areIdentical: a,
};
