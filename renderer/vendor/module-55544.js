// vendor/module-55544.js — webpack module 55544
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(92236 /* vendor/module-92236 */),
  i = n(7492 /* vendor/module-7492 */),
  a = n(23295 /* vendor/module-23295 */),
  s = n(8888 /* vendor/module-8888 */),
  l = ["trace", "debug", "info", "warn", "error", "fatal"],
  c = {
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
  u = {
    0: "fatal",
    1: "warn",
    2: "info",
    3: "info",
    4: "debug",
    5: "trace",
  };
t.createConsolaReporter = function (e = {}) {
  const t = new Set(e.levels ?? l),
    n = e.client;
  return {
    log(e) {
      const {
          type: l,
          level: d,
          message: p,
          args: f,
          tag: h,
          date: m,
          ...g
        } = e,
        y = n || r.getClient();
      if (!y) return;
      const v = (function (e, t) {
        if ("verbose" === e) return "debug";
        if ("silent" === e) return "trace";
        if (e) {
          const t = c[e];
          if (t) return t;
        }
        if ("number" == typeof t) {
          const e = u[t];
          if (e) return e;
        }
        return "info";
      })(l, d);
      if (!t.has(v)) return;
      const { normalizeDepth: b = 3, normalizeMaxBreadth: S = 1e3 } =
          y.getOptions(),
        _ = {};
      for (const [e, t] of Object.entries(g)) _[e] = s.normalize(t, b, S);
      (_["sentry.origin"] = "auto.log.consola"),
        h && (_["consola.tag"] = h),
        l && (_["consola.type"] = l),
        null != d && "number" == typeof d && (_["consola.level"] = d);
      const x = (function (e, t, n) {
        const {
            message: r,
            attributes: o,
            messageTemplate: a,
            messageParameters: l,
          } = e,
          c = {};
        if (a && l) {
          const e = i.createConsoleTemplateAttributes(a, l);
          for (const [r, o] of Object.entries(e))
            c[r] = r.startsWith("sentry.message.parameter.")
              ? s.normalize(o, t, n)
              : o;
        } else
          l &&
            l.length > 0 &&
            l.forEach((e, r) => {
              c[`sentry.message.parameter.${r}`] = s.normalize(e, t, n);
            });
        return {
          message: r,
          attributes: { ...s.normalize(o, t, n), ...c },
        };
      })(
        (function (e, t, n) {
          if (!e?.length) return { message: "" };
          const r = i.formatConsoleArgs(e, t, n),
            o = e[0];
          if (a.isPlainObject(o)) {
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
        })(f, b, S),
        b,
        S,
      );
      x?.attributes && Object.assign(_, x.attributes),
        o._INTERNAL_captureLog({
          level: v,
          message: x?.message || p || (f && i.formatConsoleArgs(f, b, S)) || "",
          attributes: _,
        });
    },
  };
};
