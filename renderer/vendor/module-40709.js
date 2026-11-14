// vendor/module-40709.js — webpack module 40709
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */),
  a = n(68956 /* vendor/module-68956 */);
t.startProfileForSpan = function (e) {
  let t;
  a.isAutomatedPageLoadSpan(e) && (t = 1e3 * r.timestampInSeconds());
  const n = a.startJSSelfProfile();
  if (!n) return;
  o.DEBUG_BUILD &&
    r.debug.log(
      `[Profiling] started profiling span: ${r.spanToJSON(e).description}`,
    );
  const s = r.uuid4();
  let l = null;
  async function c() {
    if (e && n) {
      if (!l)
        return n
          .stop()
          .then((t) => {
            u && (i.WINDOW.clearTimeout(u), (u = void 0)),
              o.DEBUG_BUILD &&
                r.debug.log(
                  `[Profiling] stopped profiling of span: ${r.spanToJSON(e).description}`,
                ),
              t
                ? ((l = t), a.addProfileToGlobalCache(s, t))
                : o.DEBUG_BUILD &&
                  r.debug.log(
                    `[Profiling] profiler returned null profile for: ${r.spanToJSON(e).description}`,
                    "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                  );
          })
          .catch((e) => {
            o.DEBUG_BUILD &&
              r.debug.log("[Profiling] error while stopping profiler:", e);
          });
      o.DEBUG_BUILD &&
        r.debug.log(
          "[Profiling] profile for:",
          r.spanToJSON(e).description,
          "already exists, returning early",
        );
    }
  }
  r
    .getCurrentScope()
    .setContext("profile", { profile_id: s, start_timestamp: t }),
    a.PROFILED_ROOT_SPANS.add(e),
    a.setThreadAttributes(e);
  let u = i.WINDOW.setTimeout(() => {
    o.DEBUG_BUILD &&
      r.debug.log(
        "[Profiling] max profile duration elapsed, stopping profiling for:",
        r.spanToJSON(e).description,
      ),
      c();
  }, a.MAX_PROFILE_DURATION_MS);
  const d = e.end.bind(e);
  e.end = function () {
    return e
      ? (c().then(
          () => {
            d();
          },
          () => {
            d();
          },
        ),
        e)
      : d();
  };
};
