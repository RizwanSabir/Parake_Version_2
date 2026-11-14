// vendor/module-32763.js — webpack module 32763
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */),
  a = n(40709 /* vendor/module-40709 */),
  s = n(92282 /* vendor/module-92282 */),
  l = n(68956 /* vendor/module-68956 */),
  c = r.defineIntegration(() => ({
    name: "BrowserProfiling",
    setup(e) {
      const t = e.getOptions(),
        n = new s.UIProfiler();
      if (
        (l.hasLegacyProfiling(t) ||
          t.profileLifecycle ||
          (t.profileLifecycle = "manual"),
        l.hasLegacyProfiling(t) && !t.profilesSampleRate)
      )
        return void (
          o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Profiling disabled, no profiling options found.",
          )
        );
      const c = r.getActiveSpan(),
        u = c && r.getRootSpan(c);
      if (
        (l.hasLegacyProfiling(t) &&
          void 0 !== t.profileSessionSampleRate &&
          o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.",
          ),
        l.hasLegacyProfiling(t))
      )
        u &&
          l.isAutomatedPageLoadSpan(u) &&
          l.shouldProfileSpanLegacy(u) &&
          a.startProfileForSpan(u),
          e.on("spanStart", (e) => {
            const t = r.getRootSpan(e);
            e === t
              ? l.shouldProfileSpanLegacy(e) && a.startProfileForSpan(e)
              : l.PROFILED_ROOT_SPANS.has(t) && l.setThreadAttributes(e);
          }),
          e.on("beforeEnvelope", (e) => {
            if (!l.getActiveProfilesCount()) return;
            const t = l.findProfiledTransactionsFromEnvelope(e);
            if (!t.length) return;
            const n = [];
            for (const e of t) {
              const t = e?.contexts,
                i = t?.profile?.profile_id,
                a = t?.profile?.start_timestamp;
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
              const s = l.takeProfileFromGlobalCache(i);
              if (!s) {
                o.DEBUG_BUILD &&
                  r.debug.log(
                    `[Profiling] Could not retrieve profile for span: ${i}`,
                  );
                continue;
              }
              const c = l.createProfilingEvent(i, a, s, e);
              c && n.push(c);
            }
            l.addProfilesToEnvelope(e, n);
          });
      else {
        const a = t.profileLifecycle;
        if (
          (e.on("startUIProfiler", () => n.start()),
          e.on("stopUIProfiler", () => n.stop()),
          "manual" === a)
        )
          n.initialize(e);
        else if ("trace" === a) {
          if (!r.hasSpansEnabled(t))
            return void (
              o.DEBUG_BUILD &&
              r.debug.warn(
                "[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.",
              )
            );
          n.initialize(e),
            u && n.notifyRootSpanActive(u),
            i.WINDOW.setTimeout(() => {
              const e = r.getActiveSpan(),
                t = e && r.getRootSpan(e);
              t && n.notifyRootSpanActive(t);
            }, 0);
        }
      }
    },
  }));
t.browserProfilingIntegration = c;
