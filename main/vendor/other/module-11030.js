// vendor/other/module-11030.js — webpack module 11030
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(79896 /* external/fs */),
  i = n(39023 /* external/util */),
  s = n(31189 /* vendor/other/module-31189 */),
  a = n(37689 /* vendor/other/module-37689 */),
  c = ["rename", "renameSync"],
  u = ["copyFile", "cp", "copyFileSync", "cpSync"],
  l = ["link", "linkSync"],
  d = ["mkdtemp", "mkdtempSync"],
  p = ["symlink", "symlinkSync"],
  f = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "exists",
    "mkdir",
    "lchown",
    "lstat",
    "lutimes",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "realpath.native",
    "rm",
    "rmdir",
    "stat",
    "truncate",
    "unlink",
    "utimes",
    "writeFile",
    "accessSync",
    "appendFileSync",
    "chmodSync",
    "chownSync",
    "existsSync",
    "lchownSync",
    "lstatSync",
    "lutimesSync",
    "opendirSync",
    "mkdirSync",
    "openSync",
    "readdirSync",
    "readFileSync",
    "readlinkSync",
    "realpathSync",
    "realpathSync.native",
    "rmdirSync",
    "rmSync",
    "statSync",
    "truncateSync",
    "unlinkSync",
    "utimesSync",
    "writeFileSync",
  ];
function h(e, t, n) {
  const o = {
    [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "file",
    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.file.fs",
  };
  return n.recordFilePaths
    ? ("string" == typeof t[0] && f.includes(e)
        ? (o.path_argument = t[0])
        : "string" == typeof t[0] && "string" == typeof t[1]
          ? p.includes(e)
            ? ((o.target_argument = t[0]), (o.path_argument = t[1]))
            : l.includes(e)
              ? ((o.existing_path_argument = t[0]),
                (o.new_path_argument = t[1]))
              : u.includes(e)
                ? ((o.src_argument = t[0]), (o.dest_argument = t[1]))
                : c.includes(e) &&
                  ((o.old_path_argument = t[0]), (o.new_path_argument = t[1]))
          : "string" == typeof t[0] &&
            d.includes(e) &&
            (o.prefix_argument = t[0]),
      o)
    : o;
}
function g(e, t) {
  return Object.assign(e, t);
}
const m = new WeakMap();
function _(e, t, n) {
  const r = e[t];
  if ("function" != typeof r) return;
  let o = m.get(e);
  o || ((o = new Set()), m.set(e, o)), o.has(t) || (o.add(t), (e[t] = n(r)));
}
function S(e, t, n) {
  return g(function (...o) {
    const i = h(e, o, n);
    return r.startSpan(
      { name: `fs.${e}`, onlyIfParent: !0, attributes: i },
      (e) => {
        try {
          return r.suppressTracing(() => t.apply(this, o));
        } catch (t) {
          throw (b(e, t, n), t);
        }
      },
    );
  }, t);
}
function E(e, t, n) {
  return g(function (...o) {
    const i = o.length - 1,
      s = o[i];
    if ("function" != typeof s) return t.apply(this, o);
    const a = h(e, o, n),
      c = r.startInactiveSpan({
        name: `fs.${e}`,
        onlyIfParent: !0,
        attributes: a,
      }),
      u = r.getActiveSpan();
    o[i] = function (...e) {
      const t = e[0];
      return (
        t && b(c, t, n),
        c.end(),
        u ? r.withActiveSpan(u, () => s.apply(this, e)) : s.apply(this, e)
      );
    };
    try {
      return r.suppressTracing(() => t.apply(this, o));
    } catch (e) {
      throw (b(c, e, n), c.end(), e);
    }
  }, t);
}
function y(e, t) {
  const n = "exists",
    o = g(function (...o) {
      const i = o.length - 1,
        s = o[i];
      if ("function" != typeof s) return e.apply(this, o);
      const a = h(n, o, t),
        c = r.startInactiveSpan({
          name: `fs.${n}`,
          onlyIfParent: !0,
          attributes: a,
        }),
        u = r.getActiveSpan();
      o[i] = function (...e) {
        return (
          c.end(),
          u ? r.withActiveSpan(u, () => s.apply(this, e)) : s.apply(this, e)
        );
      };
      try {
        return r.suppressTracing(() => e.apply(this, o));
      } catch (e) {
        throw (b(c, e, t), c.end(), e);
      }
    }, e),
    s = function (e) {
      return new Promise((t) => o(e, t));
    };
  return (
    Object.defineProperty(s, "name", { value: n }),
    Object.defineProperty(o, i.promisify.custom, { value: s }),
    o
  );
}
function T(e, t, n) {
  return g(async function (...o) {
    const i = h(e, o, n);
    return r.startSpan(
      { name: `fs.${e}`, onlyIfParent: !0, attributes: i },
      async (e) => {
        try {
          return await r.suppressTracing(() => t.apply(this, o));
        } catch (t) {
          throw (b(e, t, n), t);
        }
      },
    );
  }, t);
}
function b(e, t, n) {
  e.setStatus({
    code: r.SPAN_STATUS_ERROR,
    message: "internal_error",
  }),
    n.recordErrorMessagesAsSpanAttributes &&
      t instanceof Error &&
      e.setAttribute("fs_error", t.message);
}
t.enableFsInstrumentation = function (e = {}) {
  for (const t of s.SYNC_FUNCTIONS) {
    const { objectToPatch: n, functionNameToPatch: r } = a.indexFs(o, t);
    _(n, r, (n) => S(t, n, e));
  }
  for (const t of s.CALLBACK_FUNCTIONS) {
    const { objectToPatch: n, functionNameToPatch: r } = a.indexFs(o, t);
    _(n, r, "exists" === t ? (t) => y(t, e) : (n) => E(t, n, e));
  }
  const t = o.promises;
  for (const n of s.PROMISE_FUNCTIONS) _(t, n, (t) => T(n, t, e));
};
