// vendor/module-82225.js — webpack module 82225
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(39053 /* vendor/module-39053 */),
  i = r.defineIntegration(() => ({
    name: "CultureContext",
    preprocessEvent(e) {
      const t = a();
      t &&
        (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    },
    processSegmentSpan(e) {
      const t = a();
      t &&
        r.safeSetSpanJSONAttributes(e, {
          "culture.locale": t.locale,
          "culture.timezone": t.timezone,
          "culture.calendar": t.calendar,
        });
    },
  }));
function a() {
  try {
    const e = o.WINDOW.Intl;
    if (!e) return;
    const t = e.DateTimeFormat().resolvedOptions();
    return {
      locale: t.locale,
      timezone: t.timeZone,
      calendar: t.calendar,
    };
  } catch {
    return;
  }
}
t.cultureContextIntegration = i;
