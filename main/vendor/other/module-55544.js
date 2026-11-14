// vendor/other/module-55544.js — webpack module 55544
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(92236 /* vendor/other/module-92236 */),
  i = n(7492 /* vendor/other/module-7492 */),
  s = n(23295 /* vendor/other/module-23295 */),
  a = n(8888 /* vendor/other/module-8888 */),
  c = ["trace", "debug", "info", "warn", "error", "fatal"],
  u = {
    silent: "trace",
    fatal: "fatal",
    error: "error",
    warn: "warn",
    log: "info",
    info: "info",
    success: "info",
    fail: "error",
    ready: "info",
    start: "info",
    box: "info",
    debug: "debug",
    trace: "trace",
    verbose: "debug",
    critical: "fatal",
    notice: "info",
  },
  l = {
    0: "fatal",
    1: "warn",
    2: "info",
    3: "info",
    4: "debug",
    5: "trace",
  };
t.createConsolaReporter = function (e = {}) {
  const t = new Set(e.levels ?? c),
    n = e.client;
  return {
    log(e) {
      const {
          type: c,
          level: d,
          message: p,
          args: f,
          tag: h,
          date: g,
          ...m
        } = e,
        _ = n || r.getClient();
      if (!_) return;
      const S = (function (e, t) {
        if ("verbose" === e) return "debug";
        if ("silent" === e) return "trace";
        if (e) {
          const t = u[e];
          if (t) return t;
        }
        if ("number" == typeof t) {
          const e = l[t];
          if (e) return e;
        }
        return "info";
      })(c, d);
      if (!t.has(S)) return;
      const { normalizeDepth: E = 3, normalizeMaxBreadth: y = 1e3 } =
          _.getOptions(),
        T = {};
      for (const [e, t] of Object.entries(m)) T[e] = a.normalize(t, E, y);
      (T["sentry.origin"] = "auto.log.consola"),
        h && (T["consola.tag"] = h),
        c && (T["consola.type"] = c),
        null != d && "number" == typeof d && (T["consola.level"] = d);
      const b = (function (e, t, n) {
        const {
            message: r,
            attributes: o,
            messageTemplate: s,
            messageParameters: c,
          } = e,
          u = {};
        if (s && c) {
          const e = i.createConsoleTemplateAttributes(s, c);
          for (const [r, o] of Object.entries(e))
            u[r] = r.startsWith("sentry.message.parameter.")
              ? a.normalize(o, t, n)
              : o;
        } else
          c &&
            c.length > 0 &&
            c.forEach((e, r) => {
              u[`sentry.message.parameter.${r}`] = a.normalize(e, t, n);
            });
        return {
          message: r,
          attributes: { ...a.normalize(o, t, n), ...u },
        };
      })(
        (function (e, t, n) {
          if (!e?.length) return { message: "" };
          const r = i.formatConsoleArgs(e, t, n),
            o = e[0];
          if (s.isPlainObject(o)) {
            const t = "string" == typeof e[1] ? 2 : 1;
            return {
              message: r,
              attributes: o,
              messageParameters: e.slice(t),
            };
          }
          {
            const t = e.slice(1),
              n =
                t.length > 0 &&
                "string" == typeof o &&
                !i.hasConsoleSubstitutions(o);
            return {
              message: r,
              messageTemplate: n ? o : void 0,
              messageParameters: n ? t : void 0,
            };
          }
        })(f, E, y),
        E,
        y,
      );
      b?.attributes && Object.assign(T, b.attributes),
        o._INTERNAL_captureLog({
          level: S,
          message: b?.message || p || (f && i.formatConsoleArgs(f, E, y)) || "",
          attributes: T,
        });
    },
  };
};
