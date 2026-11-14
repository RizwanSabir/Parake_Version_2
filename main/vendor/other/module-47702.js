// vendor/other/module-47702.js — webpack module 47702
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, {
  InstrumentationBase: () => ce,
  InstrumentationNodeModuleDefinition: () => le,
  isWrapped: () => ae,
  registerInstrumentations: () => y,
  safeExecuteInTheMiddle: () => se,
});
var r = n(7353 /* vendor/other/module-7353 */),
  o = n(36182 /* vendor/other/module-36182 */);
const i = new (class {
  getMeter(e, t, n) {
    return o.Dq;
  }
})();
var s = n(71895 /* vendor/other/module-71895 */),
  a = n(32535 /* vendor/other/module-32535 */);
const c = "metrics";
class u {
  constructor() {}
  static getInstance() {
    return this._instance || (this._instance = new u()), this._instance;
  }
  setGlobalMeterProvider(e) {
    return (0, s.$G)(c, e, a.K.instance());
  }
  getMeterProvider() {
    return (0, s.mS)(c) || i;
  }
  getMeter(e, t, n) {
    return this.getMeterProvider().getMeter(e, t, n);
  }
  disable() {
    (0, s.kv)(c, a.K.instance());
  }
}
const l = u.getInstance(),
  d = Symbol.for("io.opentelemetry.js.api.logs"),
  p = globalThis;
class f {
  emit(e) {}
  enabled() {
    return !1;
  }
}
const h = new f(),
  g = new (class {
    getLogger(e, t, n) {
      return new f();
    }
  })();
class m {
  constructor(e, t, n, r) {
    (this._provider = e),
      (this.name = t),
      (this.version = n),
      (this.options = r);
  }
  emit(e) {
    this._getLogger().emit(e);
  }
  enabled(e) {
    return this._getLogger().enabled(e);
  }
  _getLogger() {
    if (this._delegate) return this._delegate;
    const e = this._provider._getDelegateLogger(
      this.name,
      this.version,
      this.options,
    );
    return e ? ((this._delegate = e), this._delegate) : h;
  }
}
class _ {
  getLogger(e, t, n) {
    var r;
    return null !== (r = this._getDelegateLogger(e, t, n)) && void 0 !== r
      ? r
      : new m(this, e, t, n);
  }
  _getDelegate() {
    var e;
    return null !== (e = this._delegate) && void 0 !== e ? e : g;
  }
  _setDelegate(e) {
    this._delegate = e;
  }
  _getDelegateLogger(e, t, n) {
    var r;
    return null === (r = this._delegate) || void 0 === r
      ? void 0
      : r.getLogger(e, t, n);
  }
}
class S {
  constructor() {
    this._proxyLoggerProvider = new _();
  }
  static getInstance() {
    return this._instance || (this._instance = new S()), this._instance;
  }
  setGlobalLoggerProvider(e) {
    return p[d]
      ? this.getLoggerProvider()
      : ((p[d] = ((t = e), (n = g), (e) => (1 === e ? t : n))),
        this._proxyLoggerProvider._setDelegate(e),
        e);
    var t, n;
  }
  getLoggerProvider() {
    var e, t;
    return null !==
      (t = null === (e = p[d]) || void 0 === e ? void 0 : e.call(p, 1)) &&
      void 0 !== t
      ? t
      : this._proxyLoggerProvider;
  }
  getLogger(e, t, n) {
    return this.getLoggerProvider().getLogger(e, t, n);
  }
  disable() {
    delete p[d], (this._proxyLoggerProvider = new _());
  }
}
const E = S.getInstance();
function y(e) {
  const t = e.tracerProvider || r.u.getTracerProvider(),
    n = e.meterProvider || l.getMeterProvider(),
    o = e.loggerProvider || E.getLoggerProvider(),
    i = e.instrumentations?.flat() ?? [];
  return (
    (function (e, t, n, r) {
      for (let o = 0, i = e.length; o < i; o++) {
        const i = e[o];
        t && i.setTracerProvider(t),
          n && i.setMeterProvider(n),
          r && i.setLoggerProvider && i.setLoggerProvider(r),
          i.getConfig().enabled || i.enable();
      }
    })(i, t, n, o),
    () => {
      !(function (e) {
        e.forEach((e) => e.disable());
      })(i);
    }
  );
}
var T = n(16928 /* external/path */),
  b = n(39023 /* external/util */),
  I = n(2339 /* vendor/other/module-2339 */);
const v =
    /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
  A =
    /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
  N = {
    ">": [1],
    ">=": [0, 1],
    "=": [0],
    "<=": [-1, 0],
    "<": [-1],
    "!=": [-1, 1],
  };
function R(e, t, n, r) {
  if (t.includes("||")) {
    const o = t.trim().split("||");
    for (const t of o) if (C(e, t, n, r)) return !0;
    return !1;
  }
  if (t.includes(" - "))
    t = (function (e, t) {
      const n = j;
      return e.replace(n, (e, n, r, o, i, s, a, c, u, l, d, p) =>
        `${(n = O(r) ? "" : O(o) ? `>=${r}.0.0${t?.includePrerelease ? "-0" : ""}` : O(i) ? `>=${r}.${o}.0${t?.includePrerelease ? "-0" : ""}` : s ? `>=${n}` : `>=${n}${t?.includePrerelease ? "-0" : ""}`)} ${(c = O(u) ? "" : O(l) ? `<${+u + 1}.0.0-0` : O(d) ? `<${u}.${+l + 1}.0-0` : p ? `<=${u}.${l}.${d}-${p}` : t?.includePrerelease ? `<${u}.${l}.${+d + 1}-0` : `<=${c}`)}`.trim(),
      );
    })(t, r);
  else if (t.includes(" ")) {
    const o = t
      .trim()
      .replace(/\s{2,}/g, " ")
      .split(" ");
    for (const t of o) if (!C(e, t, n, r)) return !1;
    return !0;
  }
  return C(e, t, n, r);
}
function C(e, t, n, r) {
  if (
    ((t = (function (e, t) {
      return (
        (e = (function (e, t) {
          const n = W,
            r = t?.includePrerelease ? "-0" : "";
          return e.replace(n, (e, t, n, o, i) => {
            let s;
            return (
              (s = O(t)
                ? ""
                : O(n)
                  ? `>=${t}.0.0${r} <${+t + 1}.0.0-0`
                  : O(o)
                    ? "0" === t
                      ? `>=${t}.${n}.0${r} <${t}.${+n + 1}.0-0`
                      : `>=${t}.${n}.0${r} <${+t + 1}.0.0-0`
                    : i
                      ? "0" === t
                        ? "0" === n
                          ? `>=${t}.${n}.${o}-${i} <${t}.${n}.${+o + 1}-0`
                          : `>=${t}.${n}.${o}-${i} <${t}.${+n + 1}.0-0`
                        : `>=${t}.${n}.${o}-${i} <${+t + 1}.0.0-0`
                      : "0" === t
                        ? "0" === n
                          ? `>=${t}.${n}.${o}${r} <${t}.${n}.${+o + 1}-0`
                          : `>=${t}.${n}.${o}${r} <${t}.${+n + 1}.0-0`
                        : `>=${t}.${n}.${o} <${+t + 1}.0.0-0`),
              s
            );
          });
        })((e = e.trim()), t)),
        (e = (function (e, t) {
          const n = F;
          return e.replace(n, (e, n, r, o, i, s) => {
            const a = O(r),
              c = a || O(o),
              u = c || O(i),
              l = u;
            return (
              "=" === n && l && (n = ""),
              (s = t?.includePrerelease ? "-0" : ""),
              a
                ? (e = ">" === n || "<" === n ? "<0.0.0-0" : "*")
                : n && l
                  ? (c && (o = 0),
                    (i = 0),
                    ">" === n
                      ? ((n = ">="),
                        c
                          ? ((r = +r + 1), (o = 0), (i = 0))
                          : ((o = +o + 1), (i = 0)))
                      : "<=" === n &&
                        ((n = "<"), c ? (r = +r + 1) : (o = +o + 1)),
                    "<" === n && (s = "-0"),
                    (e = `${n + r}.${o}.${i}${s}`))
                  : c
                    ? (e = `>=${r}.0.0${s} <${+r + 1}.0.0-0`)
                    : u && (e = `>=${r}.${o}.0${s} <${r}.${+o + 1}.0-0`),
              e
            );
          });
        })(
          (e = (function (e) {
            const t = H;
            return e.replace(t, (e, t, n, r, o) => {
              let i;
              return (
                (i = O(t)
                  ? ""
                  : O(n)
                    ? `>=${t}.0.0 <${+t + 1}.0.0-0`
                    : O(r)
                      ? `>=${t}.${n}.0 <${t}.${+n + 1}.0-0`
                      : o
                        ? `>=${t}.${n}.${r}-${o} <${t}.${+n + 1}.0-0`
                        : `>=${t}.${n}.${r} <${t}.${+n + 1}.0-0`),
                i
              );
            });
          })(e)),
          t,
        )),
        (e = e.trim())
      );
    })(t, r)),
    t.includes(" "))
  )
    return R(e, t, n, r);
  {
    const r = (function (e) {
      if (!e) return {};
      const t = e.match(A);
      if (!t) return I.s.error(`Invalid range: ${e}`), { invalid: !0 };
      let n = t.groups.op;
      const r = t.groups.version,
        o = t.groups.prerelease,
        i = t.groups.build,
        s = r.split("."),
        a = o?.split(".");
      return (
        "==" === n && (n = "="),
        {
          op: n || "=",
          version: r,
          versionSegments: s,
          versionSegmentCount: s.length,
          prerelease: o,
          prereleaseSegments: a,
          prereleaseSegmentCount: a ? a.length : 0,
          build: i,
        }
      );
    })(t);
    return (
      n.push(r),
      (function (e, t) {
        if (t.invalid) return !1;
        if (!t.version || w(t.version)) return !0;
        let n = L(e.versionSegments || [], t.versionSegments || []);
        if (0 === n) {
          const r = e.prereleaseSegments || [],
            o = t.prereleaseSegments || [];
          n =
            r.length || o.length
              ? !r.length && o.length
                ? 1
                : r.length && !o.length
                  ? -1
                  : L(r, o)
              : 0;
        }
        return N[t.op]?.includes(n);
      })(e, r)
    );
  }
}
function O(e) {
  return !e || "x" === e.toLowerCase() || "*" === e;
}
function w(e) {
  return "*" === e || "x" === e || "X" === e;
}
function k(e) {
  const t = parseInt(e, 10);
  return isNaN(t) ? e : t;
}
function P(e, t) {
  if (w(e) || w(t)) return 0;
  const [n, r] = (function (e, t) {
    if (typeof e == typeof t) {
      if ("number" == typeof e) return [e, t];
      if ("string" == typeof e) return [e, t];
      throw new Error("Version segments can only be strings or numbers");
    }
    return [String(e), String(t)];
  })(k(e), k(t));
  return n > r ? 1 : n < r ? -1 : 0;
}
function L(e, t) {
  for (let n = 0; n < Math.max(e.length, t.length); n++) {
    const r = P(e[n] || "0", t[n] || "0");
    if (0 !== r) return r;
  }
  return 0;
}
const x = "[a-zA-Z0-9-]",
  M = "0|[1-9]\\d*",
  D = `(?:${M}|\\d*[a-zA-Z-]${x}*)`,
  U = `${x}+`,
  B = `${M}|x|X|\\*`,
  G = `[v=\\s]*(${B})(?:\\.(${B})(?:\\.(${B})(?:(?:-(${D}(?:\\.${D})*)))?(?:\\+(${U}(?:\\.${U})*))?)?)?`,
  F = new RegExp(`^((?:<|>)?=?)\\s*${G}$`),
  j = new RegExp(`^\\s*(${G})\\s+-\\s+(${G})\\s*$`),
  H = new RegExp(`^(?:~>?)${G}$`),
  W = new RegExp(`^(?:\\^)${G}$`);
let V = function () {}.bind();
function $(e, t, n) {
  const r = !!e[t] && Object.prototype.propertyIsEnumerable.call(e, t);
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: r,
    writable: !0,
    value: n,
  });
}
const Y = (e, t, n) => {
    if (!e || !e[t])
      return void V("no original function " + String(t) + " to wrap");
    if (!n) return V("no wrapper function"), void V(new Error().stack);
    const r = e[t];
    if ("function" != typeof r || "function" != typeof n)
      return void V("original object and wrapper must be functions");
    const o = n(r, t);
    return (
      $(o, "__original", r),
      $(o, "__unwrap", () => {
        e[t] === o && $(e, t, r);
      }),
      $(o, "__wrapped", !0),
      $(e, t, o),
      o
    );
  },
  q = (e, t, n) => {
    if (!e)
      return (
        V("must provide one or more modules to patch"),
        void V(new Error().stack)
      );
    Array.isArray(e) || (e = [e]),
      t && Array.isArray(t)
        ? e.forEach((e) => {
            t.forEach((t) => {
              Y(e, t, n);
            });
          })
        : V("must provide one or more functions to wrap on modules");
  },
  K = (e, t) => {
    if (!e || !e[t])
      return V("no function to unwrap."), void V(new Error().stack);
    const n = e[t];
    n.__unwrap
      ? n.__unwrap()
      : V(
          "no original to unwrap to -- has " +
            String(t) +
            " already been unwrapped?",
        );
  },
  X = (e, t) => {
    if (!e)
      return (
        V("must provide one or more modules to patch"),
        void V(new Error().stack)
      );
    Array.isArray(e) || (e = [e]),
      t && Array.isArray(t)
        ? e.forEach((e) => {
            t.forEach((t) => {
              K(e, t);
            });
          })
        : V("must provide one or more functions to unwrap on modules");
  };
function Z(e) {
  e &&
    e.logger &&
    ("function" != typeof e.logger
      ? V("new logger isn't a function, not replacing")
      : (V = e.logger));
}
(Z.wrap = Y), (Z.massWrap = q), (Z.unwrap = K), (Z.massUnwrap = X);
class z {
  _config = {};
  _tracer;
  _meter;
  _logger;
  _diag;
  instrumentationName;
  instrumentationVersion;
  constructor(e, t, n) {
    (this.instrumentationName = e),
      (this.instrumentationVersion = t),
      this.setConfig(n),
      (this._diag = I.s.createComponentLogger({ namespace: e })),
      (this._tracer = r.u.getTracer(e, t)),
      (this._meter = l.getMeter(e, t)),
      (this._logger = E.getLogger(e, t)),
      this._updateMetricInstruments();
  }
  _wrap = Y;
  _unwrap = K;
  _massWrap = q;
  _massUnwrap = X;
  get meter() {
    return this._meter;
  }
  setMeterProvider(e) {
    (this._meter = e.getMeter(
      this.instrumentationName,
      this.instrumentationVersion,
    )),
      this._updateMetricInstruments();
  }
  get logger() {
    return this._logger;
  }
  setLoggerProvider(e) {
    this._logger = e.getLogger(
      this.instrumentationName,
      this.instrumentationVersion,
    );
  }
  getModuleDefinitions() {
    const e = this.init() ?? [];
    return Array.isArray(e) ? e : [e];
  }
  _updateMetricInstruments() {}
  getConfig() {
    return this._config;
  }
  setConfig(e) {
    this._config = { enabled: !0, ...e };
  }
  setTracerProvider(e) {
    this._tracer = e.getTracer(
      this.instrumentationName,
      this.instrumentationVersion,
    );
  }
  get tracer() {
    return this._tracer;
  }
  _runSpanCustomizationHook(e, t, n, r) {
    if (e)
      try {
        e(n, r);
      } catch (e) {
        this._diag.error(
          "Error running span customization hook due to exception in handler",
          { triggerName: t },
          e,
        );
      }
  }
}
var J = n(2385 /* vendor/other/module-2385 */);
const Q = "/";
class ee {
  hooks = [];
  children = new Map();
}
class te {
  _trie = new ee();
  _counter = 0;
  insert(e) {
    let t = this._trie;
    for (const n of e.moduleName.split(Q)) {
      let e = t.children.get(n);
      e || ((e = new ee()), t.children.set(n, e)), (t = e);
    }
    t.hooks.push({ hook: e, insertedId: this._counter++ });
  }
  search(e, { maintainInsertionOrder: t, fullOnly: n } = {}) {
    let r = this._trie;
    const o = [];
    let i = !0;
    for (const t of e.split(Q)) {
      const e = r.children.get(t);
      if (!e) {
        i = !1;
        break;
      }
      n || o.push(...e.hooks), (r = e);
    }
    return (
      n && i && o.push(...r.hooks),
      0 === o.length
        ? []
        : 1 === o.length
          ? [o[0].hook]
          : (t && o.sort((e, t) => e.insertedId - t.insertedId),
            o.map(({ hook: e }) => e))
    );
  }
}
const ne = [
  "afterEach",
  "after",
  "beforeEach",
  "before",
  "describe",
  "it",
].every((e) => "function" == typeof global[e]);
class re {
  _moduleNameTrie = new te();
  static _instance;
  constructor() {
    this._initialize();
  }
  _initialize() {
    new J.Hook(null, { internals: !0 }, (e, t, n) => {
      const r = ((o = t), T.sep !== Q ? o.split(T.sep).join(Q) : o);
      var o;
      const i = this._moduleNameTrie.search(r, {
        maintainInsertionOrder: !0,
        fullOnly: void 0 === n,
      });
      for (const { onRequire: r } of i) e = r(e, t, n);
      return e;
    });
  }
  register(e, t) {
    const n = { moduleName: e, onRequire: t };
    return this._moduleNameTrie.insert(n), n;
  }
  static getInstance() {
    return ne ? new re() : (this._instance = this._instance ?? new re());
  }
}
var oe = n(93931 /* vendor/other/module-93931 */),
  ie = n(79896 /* external/fs */);
function se(e, t, n) {
  let r, o;
  try {
    o = e();
  } catch (e) {
    r = e;
  } finally {
    if ((t(r, o), r && !n)) throw r;
    return o;
  }
}
function ae(e) {
  return (
    "function" == typeof e &&
    "function" == typeof e.__original &&
    "function" == typeof e.__unwrap &&
    !0 === e.__wrapped
  );
}
class ce extends z {
  _modules;
  _hooks = [];
  _requireInTheMiddleSingleton = re.getInstance();
  _enabled = !1;
  constructor(e, t, n) {
    super(e, t, n);
    let r = this.init();
    r && !Array.isArray(r) && (r = [r]),
      (this._modules = r || []),
      this._config.enabled && this.enable();
  }
  _wrap = (e, t, n) => {
    if ((ae(e[t]) && this._unwrap(e, t), b.types.isProxy(e))) {
      const r = Y(Object.assign({}, e), t, n);
      return Object.defineProperty(e, t, { value: r }), r;
    }
    return Y(e, t, n);
  };
  _unwrap = (e, t) =>
    b.types.isProxy(e) ? Object.defineProperty(e, t, { value: e[t] }) : K(e, t);
  _massWrap = (e, t, n) => {
    e
      ? (Array.isArray(e) || (e = [e]),
        t && Array.isArray(t)
          ? e.forEach((e) => {
              t.forEach((t) => {
                this._wrap(e, t, n);
              });
            })
          : I.s.error("must provide one or more functions to wrap on modules"))
      : I.s.error("must provide one or more modules to patch");
  };
  _massUnwrap = (e, t) => {
    e
      ? (Array.isArray(e) || (e = [e]),
        t && Array.isArray(t)
          ? e.forEach((e) => {
              t.forEach((t) => {
                this._unwrap(e, t);
              });
            })
          : I.s.error("must provide one or more functions to wrap on modules"))
      : I.s.error("must provide one or more modules to patch");
  };
  _warnOnPreloadedModules() {
    const e = globalThis.require;
    e?.resolve &&
      e?.cache &&
      this._modules.forEach((t) => {
        const { name: n } = t;
        try {
          const t = e.resolve(n);
          e.cache[t]?.loaded &&
            this._diag.warn(
              `Module ${n} has been loaded before ${this.instrumentationName} so it might not work, please initialize it before requiring ${n}`,
            );
        } catch {}
      });
  }
  _extractPackageVersion(e) {
    try {
      const t = (0, ie.readFileSync)(T.join(e, "package.json"), {
          encoding: "utf8",
        }),
        n = JSON.parse(t).version;
      return "string" == typeof n ? n : void 0;
    } catch {
      I.s.warn("Failed extracting version", e);
    }
  }
  _onRequire(e, t, n, r) {
    if (!r)
      return "function" == typeof e.patch &&
        ((e.moduleExports = t), this._enabled)
        ? (this._diag.debug(
            "Applying instrumentation patch for nodejs core module on require hook",
            { module: e.name },
          ),
          e.patch(t))
        : t;
    const o = this._extractPackageVersion(r);
    if (((e.moduleVersion = o), e.name === n))
      return ue(e.supportedVersions, o, e.includePrerelease) &&
        "function" == typeof e.patch &&
        ((e.moduleExports = t), this._enabled)
        ? (this._diag.debug(
            "Applying instrumentation patch for module on require hook",
            { module: e.name, version: e.moduleVersion, baseDir: r },
          ),
          e.patch(t, e.moduleVersion))
        : t;
    const i = e.files ?? [],
      s = T.normalize(n);
    return i
      .filter(
        (t) => t.name === s && ue(t.supportedVersions, o, e.includePrerelease),
      )
      .reduce(
        (t, n) => (
          (n.moduleExports = t),
          this._enabled
            ? (this._diag.debug(
                "Applying instrumentation patch for nodejs module file on require hook",
                {
                  module: e.name,
                  version: e.moduleVersion,
                  fileName: n.name,
                  baseDir: r,
                },
              ),
              n.patch(t, e.moduleVersion))
            : t
        ),
        t,
      );
  }
  enable() {
    if (!this._enabled)
      if (((this._enabled = !0), this._hooks.length > 0))
        for (const e of this._modules) {
          "function" == typeof e.patch &&
            e.moduleExports &&
            (this._diag.debug(
              "Applying instrumentation patch for nodejs module on instrumentation enabled",
              { module: e.name, version: e.moduleVersion },
            ),
            e.patch(e.moduleExports, e.moduleVersion));
          for (const t of e.files)
            t.moduleExports &&
              (this._diag.debug(
                "Applying instrumentation patch for nodejs module file on instrumentation enabled",
                {
                  module: e.name,
                  version: e.moduleVersion,
                  fileName: t.name,
                },
              ),
              t.patch(t.moduleExports, e.moduleVersion));
        }
      else {
        this._warnOnPreloadedModules();
        for (const e of this._modules) {
          const t = (t, n, r) => {
              if (!r && T.isAbsolute(n)) {
                const e = T.parse(n);
                (n = e.name), (r = e.dir);
              }
              return this._onRequire(e, t, n, r);
            },
            n = (t, n, r) => this._onRequire(e, t, n, r),
            r = T.isAbsolute(e.name)
              ? new J.Hook([e.name], { internals: !0 }, n)
              : this._requireInTheMiddleSingleton.register(e.name, n);
          this._hooks.push(r);
          const o = new oe.Hook([e.name], { internals: !0 }, t);
          this._hooks.push(o);
        }
      }
  }
  disable() {
    if (this._enabled) {
      this._enabled = !1;
      for (const e of this._modules) {
        "function" == typeof e.unpatch &&
          e.moduleExports &&
          (this._diag.debug(
            "Removing instrumentation patch for nodejs module on instrumentation disabled",
            { module: e.name, version: e.moduleVersion },
          ),
          e.unpatch(e.moduleExports, e.moduleVersion));
        for (const t of e.files)
          t.moduleExports &&
            (this._diag.debug(
              "Removing instrumentation patch for nodejs module file on instrumentation disabled",
              {
                module: e.name,
                version: e.moduleVersion,
                fileName: t.name,
              },
            ),
            t.unpatch(t.moduleExports, e.moduleVersion));
      }
    }
  }
  isEnabled() {
    return this._enabled;
  }
}
function ue(e, t, n) {
  return void 0 === t
    ? e.includes("*")
    : e.some((e) =>
        (function (e, t, n) {
          if (
            !(function (e) {
              return "string" == typeof e && v.test(e);
            })(e)
          )
            return I.s.error(`Invalid version: ${e}`), !1;
          if (!t) return !0;
          t = t.replace(/([<>=~^]+)\s+/g, "$1");
          const r = (function (e) {
            const t = e.match(v);
            if (!t) return void I.s.error(`Invalid version: ${e}`);
            const n = t.groups.version,
              r = t.groups.prerelease,
              o = t.groups.build,
              i = n.split("."),
              s = r?.split(".");
            return {
              op: void 0,
              version: n,
              versionSegments: i,
              versionSegmentCount: i.length,
              prerelease: r,
              prereleaseSegments: s,
              prereleaseSegmentCount: s ? s.length : 0,
              build: o,
            };
          })(e);
          if (!r) return !1;
          const o = [],
            i = R(r, t, o, n);
          return i && !n?.includePrerelease
            ? (function (e, t) {
                return (
                  !e.prerelease ||
                  t.some((t) => t.prerelease && t.version === e.version)
                );
              })(r, o)
            : i;
        })(t, e, { includePrerelease: n }),
      );
}
class le {
  files;
  name;
  supportedVersions;
  patch;
  unpatch;
  constructor(e, t, n, r, o) {
    (this.files = o || []),
      (this.name = e),
      (this.supportedVersions = t),
      (this.patch = n),
      (this.unpatch = r);
  }
}
