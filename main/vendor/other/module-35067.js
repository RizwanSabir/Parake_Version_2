// vendor/other/module-35067.js — webpack module 35067
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(23295 /* vendor/other/module-23295 */),
  i = n(68020 /* vendor/other/module-68020 */),
  s = n(12099 /* vendor/other/module-12099 */),
  a = n(19410 /* vendor/other/module-19410 */),
  c = n(27352 /* vendor/other/module-27352 */),
  u = n(64338 /* vendor/other/module-64338 */);
function l(e, t = !1) {
  (t && !s.supportsNativeFetch()) ||
    i.fill(c.GLOBAL_OBJ, "fetch", function (t) {
      return function (...n) {
        const s = new Error(),
          { method: l, url: d } = h(n),
          p = {
            args: n,
            fetchData: { method: l, url: d },
            startTimestamp: 1e3 * a.timestampInSeconds(),
            virtualError: s,
            headers: g(n),
          };
        return (
          e || u.triggerHandlers("fetch", { ...p }),
          t.apply(c.GLOBAL_OBJ, n).then(
            async (t) => (
              e
                ? e(t)
                : u.triggerHandlers("fetch", {
                    ...p,
                    endTimestamp: 1e3 * a.timestampInSeconds(),
                    response: t,
                  }),
              t
            ),
            (e) => {
              u.triggerHandlers("fetch", {
                ...p,
                endTimestamp: 1e3 * a.timestampInSeconds(),
                error: e,
              }),
                o.isError(e) &&
                  void 0 === e.stack &&
                  ((e.stack = s.stack),
                  i.addNonEnumerableProperty(e, "framesToPop", 1));
              const t = r.getClient(),
                n = t?.getOptions().enhanceFetchErrorMessages ?? "always";
              if (
                !1 !== n &&
                o.isError(e) &&
                "TypeError" === e.name &&
                ("Failed to fetch" === e.message ||
                  "Load failed" === e.message ||
                  "NetworkError when attempting to fetch resource." ===
                    e.message)
              )
                try {
                  const t = new URL(p.fetchData.url).host;
                  "always" === n
                    ? (e.message = `${e.message} (${t})`)
                    : i.addNonEnumerableProperty(
                        e,
                        "__sentry_fetch_url_host__",
                        t,
                      );
                } catch {}
              throw e;
            },
          )
        );
      };
    });
}
function d(e) {
  let t;
  try {
    t = e.clone();
  } catch {
    return;
  }
  !(async function (e, t) {
    if (e?.body) {
      const n = e.body,
        r = n.getReader(),
        o = setTimeout(() => {
          n.cancel().then(null, () => {});
        }, 9e4);
      let i = !0;
      for (; i; ) {
        let e;
        try {
          e = setTimeout(() => {
            n.cancel().then(null, () => {});
          }, 5e3);
          const { done: o } = await r.read();
          clearTimeout(e), o && (t(), (i = !1));
        } catch {
          i = !1;
        } finally {
          clearTimeout(e);
        }
      }
      clearTimeout(o), r.releaseLock(), n.cancel().then(null, () => {});
    }
  })(t, () => {
    u.triggerHandlers("fetch-body-resolved", {
      endTimestamp: 1e3 * a.timestampInSeconds(),
      response: e,
    });
  });
}
function p(e, t) {
  return o.isObjectLike(e) && !!e[t];
}
function f(e) {
  return "string" == typeof e
    ? e
    : e
      ? p(e, "url")
        ? e.url
        : e.toString
          ? e.toString()
          : ""
      : "";
}
function h(e) {
  if (0 === e.length) return { method: "GET", url: "" };
  if (2 === e.length) {
    const [t, n] = e;
    return {
      url: f(t),
      method: p(n, "method")
        ? String(n.method).toUpperCase()
        : o.isRequest(t) && p(t, "method")
          ? String(t.method).toUpperCase()
          : "GET",
    };
  }
  const t = e[0];
  return {
    url: f(t),
    method: p(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function g(e) {
  const [t, n] = e;
  try {
    if ("object" == typeof n && null !== n && "headers" in n && n.headers)
      return new Headers(n.headers);
    if (o.isRequest(t)) return new Headers(t.headers);
  } catch {}
}
(t.addFetchEndInstrumentationHandler = function (e) {
  const t = "fetch-body-resolved",
    n = u.addHandler(t, e);
  return u.maybeInstrument(t, () => l(d)), n;
}),
  (t.addFetchInstrumentationHandler = function (e, t) {
    const n = "fetch",
      r = u.addHandler(n, e);
    return u.maybeInstrument(n, () => l(void 0, t)), r;
  }),
  (t.parseFetchArgs = h);
