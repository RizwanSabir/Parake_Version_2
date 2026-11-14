// vendor/other/module-32763.js — webpack module 32763
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(39053 /* vendor/other/module-39053 */),
  s = n(40709 /* vendor/other/module-40709 */),
  a = n(92282 /* vendor/other/module-92282 */),
  c = n(68956 /* vendor/other/module-68956 */),
  u = r.defineIntegration(() => ({
    name: "BrowserProfiling",
    setup(e) {
      const t = e.getOptions(),
        n = new a.UIProfiler();
      if (
        (c.hasLegacyProfiling(t) ||
          t.profileLifecycle ||
          (t.profileLifecycle = "manual"),
        c.hasLegacyProfiling(t) && !t.profilesSampleRate)
      )
        return void (
          o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Profiling disabled, no profiling options found.",
          )
        );
      const u = r.getActiveSpan(),
        l = u && r.getRootSpan(u);
      if (
        (c.hasLegacyProfiling(t) &&
          void 0 !== t.profileSessionSampleRate &&
          o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.",
          ),
        c.hasLegacyProfiling(t))
      )
        l &&
          c.isAutomatedPageLoadSpan(l) &&
          c.shouldProfileSpanLegacy(l) &&
          s.startProfileForSpan(l),
          e.on("spanStart", (e) => {
            const t = r.getRootSpan(e);
            e === t
              ? c.shouldProfileSpanLegacy(e) && s.startProfileForSpan(e)
              : c.PROFILED_ROOT_SPANS.has(t) && c.setThreadAttributes(e);
          }),
          e.on("beforeEnvelope", (e) => {
            if (!c.getActiveProfilesCount()) return;
            const t = c.findProfiledTransactionsFromEnvelope(e);
            if (!t.length) return;
            const n = [];
            for (const e of t) {
              const t = e?.contexts,
                i = t?.profile?.profile_id,
                s = t?.profile?.start_timestamp;
              if ("string" != typeof i) {
                o.DEBUG_BUILD &&
                  r.debug.log(
                    "[Profiling] cannot find profile for a span without a profile context",
                  );
                continue;
              }
              if (!i) {
                o.DEBUG_BUILD &&
                  r.debug.log(
                    "[Profiling] cannot find profile for a span without a profile context",
                  );
                continue;
              }
              t?.profile && delete t.profile;
              const a = c.takeProfileFromGlobalCache(i);
              if (!a) {
                o.DEBUG_BUILD &&
                  r.debug.log(
                    `[Profiling] Could not retrieve profile for span: ${i}`,
                  );
                continue;
              }
              const u = c.createProfilingEvent(i, s, a, e);
              u && n.push(u);
            }
            c.addProfilesToEnvelope(e, n);
          });
      else {
        const s = t.profileLifecycle;
        if (
          (e.on("startUIProfiler", () => n.start()),
          e.on("stopUIProfiler", () => n.stop()),
          "manual" === s)
        )
          n.initialize(e);
        else if ("trace" === s) {
          if (!r.hasSpansEnabled(t))
            return void (
              o.DEBUG_BUILD &&
              r.debug.warn(
                "[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.",
              )
            );
          n.initialize(e),
            l && n.notifyRootSpanActive(l),
            i.WINDOW.setTimeout(() => {
              const e = r.getActiveSpan(),
                t = e && r.getRootSpan(e);
              t && n.notifyRootSpanActive(t);
            }, 0);
        }
      }
    },
  }));
t.browserProfilingIntegration = u;
