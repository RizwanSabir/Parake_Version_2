// vendor/module-22605.js — webpack module 22605
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(47720 /* vendor/module-47720 */),
  i = n(60467 /* vendor/module-60467 */),
  a = n(13111 /* vendor/module-13111 */),
  s = n(71417 /* vendor/module-71417 */),
  l = [],
  c = new Map(),
  u = new Map(),
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
  return a.addInpInstrumentationHandler(f);
}
const f = ({ metric: e }) => {
  if (null == e.value) return;
  const t = s.msToSec(e.value);
  if (t > 60) return;
  const n = e.entries.find((t) => t.duration === e.value && d[t.name]);
  if (!n) return;
  const { interactionId: i } = n,
    a = d[n.name],
    l = s.msToSec(r.browserPerformanceTimeOrigin() + n.startTime),
    u = r.getActiveSpan(),
    p = u ? r.getRootSpan(u) : void 0,
    f = null != i ? c.get(i) : void 0,
    h = f?.span || p,
    m = h
      ? r.spanToJSON(h).description
      : r.getCurrentScope().getScopeData().transactionName,
    g = f?.elementName || o.htmlTreeAsString(n.target),
    y = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${a}`,
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: n.duration,
    },
    v = s.startStandaloneWebVitalSpan({
      name: g,
      transaction: m,
      attributes: y,
      startTime: l,
    });
  v &&
    (v.addEvent("inp", {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e.value,
    }),
    v.end(l + t));
};
(t.INP_ENTRY_MAP = d),
  (t.MAX_PLAUSIBLE_INP_DURATION = 60),
  (t._onInp = f),
  (t._trackINP = p),
  (t.getCachedInteractionContext = function (e) {
    return null != e ? c.get(e) : void 0;
  }),
  (t.registerInpInteractionListener = function () {
    const e = Object.keys(d);
    function t(e) {
      const t = e.target;
      if (!t) return;
      const n = o.htmlTreeAsString(t),
        r = Math.round(e.timeStamp);
      if ((u.set(r, n), u.size > 50)) {
        const e = u.keys().next().value;
        void 0 !== e && u.delete(e);
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
        if (!a.isPerformanceEventTiming(e)) return;
        const t = e.interactionId;
        if (null == t) return;
        if (c.has(t)) return;
        const r = e.target
          ? o.htmlTreeAsString(e.target)
          : (function (e) {
              const t = Math.round(e.startTime);
              let n = u.get(t);
              if (!n)
                for (let e = -5; e <= 5; e++) {
                  const r = u.get(t + e);
                  if (r) {
                    n = r;
                    break;
                  }
                }
              return n || "<unknown>";
            })(e);
        if (l.length > 10) {
          const e = l.shift();
          c.delete(e);
        }
        l.push(t), c.set(t, { span: n, elementName: r });
      });
    };
    a.addPerformanceInstrumentationHandler("event", n),
      a.addPerformanceInstrumentationHandler("first-input", n);
  }),
  (t.startTrackingINP = function () {
    if (s.getBrowserPerformanceAPI() && r.browserPerformanceTimeOrigin()) {
      const e = p();
      return () => {
        e();
      };
    }
    return () => {};
  });
