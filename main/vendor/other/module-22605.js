// vendor/other/module-22605.js — webpack module 22605
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(47720 /* vendor/other/module-47720 */),
  i = n(60467 /* vendor/other/module-60467 */),
  s = n(13111 /* vendor/other/module-13111 */),
  a = n(71417 /* vendor/other/module-71417 */),
  c = [],
  u = new Map(),
  l = new Map(),
  d = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press",
  };
function p() {
  return s.addInpInstrumentationHandler(f);
}
const f = ({ metric: e }) => {
  if (null == e.value) return;
  const t = a.msToSec(e.value);
  if (t > 60) return;
  const n = e.entries.find((t) => t.duration === e.value && d[t.name]);
  if (!n) return;
  const { interactionId: i } = n,
    s = d[n.name],
    c = a.msToSec(r.browserPerformanceTimeOrigin() + n.startTime),
    l = r.getActiveSpan(),
    p = l ? r.getRootSpan(l) : void 0,
    f = null != i ? u.get(i) : void 0,
    h = f?.span || p,
    g = h
      ? r.spanToJSON(h).description
      : r.getCurrentScope().getScopeData().transactionName,
    m = f?.elementName || o.htmlTreeAsString(n.target),
    _ = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${s}`,
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: n.duration,
    },
    S = a.startStandaloneWebVitalSpan({
      name: m,
      transaction: g,
      attributes: _,
      startTime: c,
    });
  S &&
    (S.addEvent("inp", {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e.value,
    }),
    S.end(c + t));
};
(t.INP_ENTRY_MAP = d),
  (t.MAX_PLAUSIBLE_INP_DURATION = 60),
  (t._onInp = f),
  (t._trackINP = p),
  (t.getCachedInteractionContext = function (e) {
    return null != e ? u.get(e) : void 0;
  }),
  (t.registerInpInteractionListener = function () {
    const e = Object.keys(d);
    function t(e) {
      const t = e.target;
      if (!t) return;
      const n = o.htmlTreeAsString(t),
        r = Math.round(e.timeStamp);
      if ((l.set(r, n), l.size > 50)) {
        const e = l.keys().next().value;
        void 0 !== e && l.delete(e);
      }
    }
    r.isBrowser() &&
      e.forEach((e) => {
        i.WINDOW.addEventListener(e, t, { capture: !0, passive: !0 });
      });
    const n = ({ entries: e }) => {
      const t = r.getActiveSpan(),
        n = t && r.getRootSpan(t);
      e.forEach((e) => {
        if (!s.isPerformanceEventTiming(e)) return;
        const t = e.interactionId;
        if (null == t) return;
        if (u.has(t)) return;
        const r = e.target
          ? o.htmlTreeAsString(e.target)
          : (function (e) {
              const t = Math.round(e.startTime);
              let n = l.get(t);
              if (!n)
                for (let e = -5; e <= 5; e++) {
                  const r = l.get(t + e);
                  if (r) {
                    n = r;
                    break;
                  }
                }
              return n || "<unknown>";
            })(e);
        if (c.length > 10) {
          const e = c.shift();
          u.delete(e);
        }
        c.push(t), u.set(t, { span: n, elementName: r });
      });
    };
    s.addPerformanceInstrumentationHandler("event", n),
      s.addPerformanceInstrumentationHandler("first-input", n);
  }),
  (t.startTrackingINP = function () {
    if (a.getBrowserPerformanceAPI() && r.browserPerformanceTimeOrigin()) {
      const e = p();
      return () => {
        e();
      };
    }
    return () => {};
  });
