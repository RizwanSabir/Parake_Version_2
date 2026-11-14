// vendor/other/module-40709.js — webpack module 40709
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(39053 /* vendor/other/module-39053 */),
  s = n(68956 /* vendor/other/module-68956 */);
t.startProfileForSpan = function (e) {
  let t;
  s.isAutomatedPageLoadSpan(e) && (t = 1e3 * r.timestampInSeconds());
  const n = s.startJSSelfProfile();
  if (!n) return;
  o.DEBUG_BUILD &&
    r.debug.log(
      `[Profiling] started profiling span: ${r.spanToJSON(e).description}`,
    );
  const a = r.uuid4();
  let c = null;
  async function u() {
    if (e && n) {
      if (!c)
        return n
          .stop()
          .then((t) => {
            l && (i.WINDOW.clearTimeout(l), (l = void 0)),
              o.DEBUG_BUILD &&
                r.debug.log(
                  `[Profiling] stopped profiling of span: ${r.spanToJSON(e).description}`,
                ),
              t
                ? ((c = t), s.addProfileToGlobalCache(a, t))
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
    .setContext("profile", { profile_id: a, start_timestamp: t }),
    s.PROFILED_ROOT_SPANS.add(e),
    s.setThreadAttributes(e);
  let l = i.WINDOW.setTimeout(() => {
    o.DEBUG_BUILD &&
      r.debug.log(
        "[Profiling] max profile duration elapsed, stopping profiling for:",
        r.spanToJSON(e).description,
      ),
      u();
  }, s.MAX_PROFILE_DURATION_MS);
  const d = e.end.bind(e);
  e.end = function () {
    return e
      ? (u().then(
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
