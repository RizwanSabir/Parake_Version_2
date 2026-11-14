// vendor/other/module-2385.js — webpack module 2385
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(16928 /* external/path */),
  o = n(73339 /* external/module */),
  i = n(3680 /* vendor/other/module-3680 */)("require-in-the-middle"),
  s = n(79280 /* vendor/other/module-79280 */);
let a, c;
if (((e.exports = d), (e.exports.Hook = d), o.isBuiltin)) c = o.isBuiltin;
else {
  if (!o.builtinModules)
    throw new Error(
      "'require-in-the-middle' requires Node.js >=v9.3.0 or >=v8.10.0",
    );
  c = (e) =>
    !!e.startsWith("node:") ||
    (void 0 === a && (a = new Set(o.builtinModules)), a.has(e));
}
const u = /([/\\]index)?(\.js)?$/;
class l {
  constructor() {
    (this._localCache = new Map()),
      (this._kRitmExports = Symbol("RitmExports"));
  }
  has(e, t) {
    if (this._localCache.has(e)) return !0;
    if (t) return !1;
    {
      const t = n.c[e];
      return !(!t || !(this._kRitmExports in t));
    }
  }
  get(e, t) {
    const r = this._localCache.get(e);
    if (void 0 !== r) return r;
    if (!t) {
      const t = n.c[e];
      return t && t[this._kRitmExports];
    }
  }
  set(e, t, r) {
    r
      ? this._localCache.set(e, t)
      : e in n.c
        ? (n.c[e][this._kRitmExports] = t)
        : (i('non-core module is unexpectedly not in require.cache: "%s"', e),
          this._localCache.set(e, t));
  }
}
function d(e, t, a) {
  if (this instanceof d == 0) return new d(e, t, a);
  if (
    ("function" == typeof e
      ? ((a = e), (e = null), (t = null))
      : "function" == typeof t && ((a = t), (t = null)),
    "function" != typeof o._resolveFilename)
  )
    return;
  (this._cache = new l()),
    (this._unhooked = !1),
    (this._origRequire = o.prototype.require);
  const p = this,
    f = new Set(),
    h = !!t && !0 === t.internals,
    g = Array.isArray(e);
  function m(t, l) {
    const d = t[0],
      m = c(d);
    let _, S, E;
    if (m) {
      if (((_ = d), d.startsWith("node:"))) {
        const e = d.slice(5);
        c(e) && (_ = e);
      }
    } else {
      if (l)
        return (
          i("call to process.getBuiltinModule with unknown built-in id"),
          p._origGetBuiltinModule.apply(this, t)
        );
      try {
        _ = o._resolveFilename(d, this);
      } catch (e) {
        return (
          i(
            'Module._resolveFilename("%s") threw %j, calling original Module.require',
            d,
            e.message,
          ),
          p._origRequire.apply(this, t)
        );
      }
    }
    if (
      (i(
        "processing %s module require('%s'): %s",
        !0 === m ? "core" : "non-core",
        d,
        _,
      ),
      !0 === p._cache.has(_, m))
    )
      return (
        i("returning already patched cached module: %s", _), p._cache.get(_, m)
      );
    const y = f.has(_);
    !1 === y && f.add(_);
    const T = l
      ? p._origGetBuiltinModule.apply(this, t)
      : p._origRequire.apply(this, t);
    if (!0 === y)
      return (
        i(
          "module is in the process of being patched already - ignoring: %s",
          _,
        ),
        T
      );
    if ((f.delete(_), !0 === m)) {
      if (!0 === g && !1 === e.includes(_))
        return i("ignoring core module not on whitelist: %s", _), T;
      S = _;
    } else if (!0 === g && e.includes(_)) {
      const e = r.parse(_);
      (S = e.name), (E = e.dir);
    } else {
      const t = s(_);
      if (void 0 === t) return i("could not parse filename: %s", _), T;
      (S = t.name), (E = t.basedir);
      const o = (function (e) {
        const t = "/" !== r.sep ? e.path.split(r.sep).join("/") : e.path;
        return r.posix.join(e.name, t).replace(u, "");
      })(t);
      i(
        "resolved filename to module: %s (id: %s, resolved: %s, basedir: %s)",
        S,
        d,
        o,
        E,
      );
      let a = !1;
      if (g) {
        if (
          (!d.startsWith(".") && e.includes(d) && ((S = d), (a = !0)),
          !e.includes(S) && !e.includes(o))
        )
          return T;
        e.includes(o) && o !== S && ((S = o), (a = !0));
      }
      if (!a) {
        let e;
        try {
          e = n(51444 /* vendor/other/module-51444 */).resolve(S, {
            paths: [E],
          });
        } catch (e) {
          return i("could not resolve module: %s", S), p._cache.set(_, T, m), T;
        }
        if (e !== _) {
          if (!0 !== h)
            return (
              i("ignoring require of non-main module file: %s", e),
              p._cache.set(_, T, m),
              T
            );
          (S = S + r.sep + r.relative(E, _)),
            i("preparing to process require of internal file: %s", S);
        }
      }
    }
    p._cache.set(_, T, m), i("calling require hook: %s", S);
    const b = a(T, S, E);
    return p._cache.set(_, b, m), i("returning module: %s", S), b;
  }
  i("registering require hook"),
    (this._require = o.prototype.require =
      function (e) {
        return !0 === p._unhooked
          ? (i("ignoring require call - module is soft-unhooked"),
            p._origRequire.apply(this, arguments))
          : m.call(this, arguments, !1);
      }),
    "function" == typeof process.getBuiltinModule &&
      ((this._origGetBuiltinModule = process.getBuiltinModule),
      (this._getBuiltinModule = process.getBuiltinModule =
        function (e) {
          return !0 === p._unhooked
            ? (i(
                "ignoring process.getBuiltinModule call - module is soft-unhooked",
              ),
              p._origGetBuiltinModule.apply(this, arguments))
            : m.call(this, arguments, !0);
        }));
}
d.prototype.unhook = function () {
  (this._unhooked = !0),
    this._require === o.prototype.require
      ? ((o.prototype.require = this._origRequire),
        i("require unhook successful"))
      : i("require unhook unsuccessful"),
    void 0 !== process.getBuiltinModule &&
      (this._getBuiltinModule === process.getBuiltinModule
        ? ((process.getBuiltinModule = this._origGetBuiltinModule),
          i("process.getBuiltinModule unhook successful"))
        : i("process.getBuiltinModule unhook unsuccessful"));
};
