// vendor/module-82479.js — webpack module 82479
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(47720 /* vendor/module-47720 */),
  i = n(60467 /* vendor/module-60467 */),
  a = n(52928 /* vendor/module-52928 */),
  s = n(13111 /* vendor/module-13111 */),
  l = n(63319 /* vendor/module-63319 */),
  c = n(44084 /* vendor/module-44084 */),
  u = n(71417 /* vendor/module-71417 */),
  d = n(79111 /* vendor/module-79111 */),
  p = n(86881 /* vendor/module-86881 */),
  f = n(93695 /* vendor/module-93695 */),
  h = n(48420 /* vendor/module-48420 */),
  m = n(88516 /* vendor/module-88516 */);
let g,
  y,
  v = 0,
  b = {};
function S() {
  (g = void 0), (y = void 0), (b = {});
}
function _(e, t, n, o, i, a) {
  if (
    (function (e) {
      if ("measure" === e?.entryType)
        try {
          return "Components ⚛" === e.detail.devtools.track;
        } catch {
          return;
        }
    })(t)
  )
    return;
  if (
    ["mark", "measure"].includes(t.entryType) &&
    r.stringMatchesSomePattern(t.name, a)
  )
    return;
  const s = p.getNavigationEntry(!1),
    l = u.msToSec(s ? s.requestStart : 0),
    c = i + Math.max(n, l),
    d = i + n,
    f = d + o,
    h = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics",
    };
  c !== d &&
    ((h["sentry.browser.measure_happened_before_request"] = !0),
    (h["sentry.browser.measure_start_time"] = c)),
    (function (e, t) {
      try {
        const n = t.detail;
        if (!n) return;
        if ("object" == typeof n) {
          for (const [t, o] of Object.entries(n))
            if (o && r.isPrimitive(o))
              e[`sentry.browser.measure.detail.${t}`] = o;
            else if (void 0 !== o)
              try {
                e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(o);
              } catch {}
          return;
        }
        if (r.isPrimitive(n))
          return void (e["sentry.browser.measure.detail"] = n);
        try {
          e["sentry.browser.measure.detail"] = JSON.stringify(n);
        } catch {}
      } catch {}
    })(h, t),
    c <= f &&
      u.startAndEndSpan(e, c, f, {
        name: t.name,
        op: t.entryType,
        attributes: h,
      });
}
function x(e, t, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    w(e, t, r, n);
  }),
    w(e, t, "secureConnection", n, "TLS/SSL"),
    w(e, t, "fetch", n, "cache"),
    w(e, t, "domainLookup", n, "DNS"),
    (function (e, t, n) {
      const o = n + u.msToSec(t.requestStart),
        i = n + u.msToSec(t.responseEnd),
        a = n + u.msToSec(t.responseStart);
      t.responseEnd &&
        (u.startAndEndSpan(e, o, i, {
          op: "browser.request",
          name: t.name,
          attributes: {
            [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
          },
        }),
        u.startAndEndSpan(e, a, i, {
          op: "browser.response",
          name: t.name,
          attributes: {
            [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
          },
        }));
    })(e, t, n);
}
function w(e, t, n, o, i = n) {
  const a = (function (e) {
      return "secureConnection" === e
        ? "connectEnd"
        : "fetch" === e
          ? "domainLookupStart"
          : `${e}End`;
    })(n),
    s = t[a],
    l = t[`${n}Start`];
  l &&
    s &&
    u.startAndEndSpan(e, o + u.msToSec(l), o + u.msToSec(s), {
      op: `browser.${i}`,
      name: t.name,
      attributes: {
        [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
        ...("redirect" === n && null != t.redirectCount
          ? { "http.redirect_count": t.redirectCount }
          : {}),
      },
    });
}
function E(e, t, n, o, a, s, l) {
  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
    return;
  const d = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
  if (l?.includes(d)) return;
  const p = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics",
    },
    f = r.parseUrl(n);
  f.protocol && (p["url.scheme"] = f.protocol.split(":").pop()),
    f.host && (p["server.address"] = f.host),
    (p["url.same_origin"] = n.includes(i.WINDOW.location.origin)),
    (p[m.URL_FULL] = n),
    T(t, p, [
      ["responseStatus", "http.response.status_code"],
      ["transferSize", "http.response_transfer_size"],
      ["encodedBodySize", "http.response_content_length"],
      ["decodedBodySize", "http.decoded_response_content_length"],
      ["renderBlockingStatus", "resource.render_blocking_status"],
      ["deliveryType", "http.response_delivery_type"],
    ]);
  const h = { ...p, ...c.resourceTimingToSpanAttributes(t) },
    g = s + o,
    y = g + a;
  u.startAndEndSpan(e, g, y, {
    name: n.replace(i.WINDOW.location.origin, ""),
    op: d,
    attributes: h,
  });
}
function T(e, t, n) {
  n.forEach(([n, r]) => {
    const o = e[n];
    null != o &&
      (("number" == typeof o && o < 2147483647) || "string" == typeof o) &&
      (t[r] = o);
  });
}
(t._addMeasureSpans = _),
  (t._addNavigationSpans = x),
  (t._addResourceSpans = E),
  (t._setResourceRequestAttributes = T),
  (t.addPerformanceEntries = function (e, t) {
    const n = u.getBrowserPerformanceAPI(),
      o = r.browserPerformanceTimeOrigin();
    if (!n?.getEntries || !o) return;
    const {
        spanStreamingEnabled: a,
        ignorePerformanceApiSpans: s,
        ignoreResourceSpans: l,
      } = t,
      c = u.msToSec(o),
      d = n.getEntries(),
      { op: p, start_timestamp: f } = r.spanToJSON(e);
    d.slice(v).forEach((t) => {
      const n = u.msToSec(t.startTime),
        r = u.msToSec(Math.max(0, t.duration));
      if (!("navigation" === p && f && c + n < f))
        switch (t.entryType) {
          case "navigation":
            x(e, t, c);
            break;
          case "mark":
          case "paint":
          case "measure":
            _(e, t, n, r, c, s);
            break;
          case "resource":
            E(e, t, t.name, n, r, c, l);
        }
    }),
      (v = Math.max(d.length - 1, 0)),
      (function (e, t) {
        const n = i.WINDOW.navigator;
        if (!n) return;
        const o = n.connection;
        o &&
          (o.effectiveType &&
            e.setAttribute(
              t
                ? "network.connection.effective_type"
                : "effectiveConnectionType",
              o.effectiveType,
            ),
          o.type &&
            e.setAttribute(
              t ? "network.connection.type" : "connectionType",
              o.type,
            ),
          u.isMeasurementValue(o.rtt) &&
            (t
              ? e.setAttribute("network.connection.rtt", o.rtt)
              : "pageload" === r.spanToJSON(e).op &&
                r.setMeasurement("connection.rtt", o.rtt, "millisecond"))),
          u.isMeasurementValue(n.deviceMemory) &&
            (t
              ? e.setAttribute(
                  "device.memory.estimated_capacity",
                  n.deviceMemory,
                )
              : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)),
          u.isMeasurementValue(n.hardwareConcurrency) &&
            (t
              ? e.setAttribute("device.processor_count", n.hardwareConcurrency)
              : e.setAttribute(
                  "hardwareConcurrency",
                  String(n.hardwareConcurrency),
                ));
      })(e, a);
  }),
  (t.addWebVitalsToSpan = function (e, t) {
    const n = r.browserPerformanceTimeOrigin();
    if (!u.getBrowserPerformanceAPI()?.getEntries || !n) return void S();
    const {
        spanStreamingEnabled: i,
        recordClsOnPageloadSpan: a,
        recordLcpOnPageloadSpan: s,
      } = t,
      l = u.msToSec(n);
    if ("pageload" === r.spanToJSON(e).op) {
      if (
        ((function (e) {
          const t = p.getNavigationEntry(!1);
          if (!t) return;
          const { responseStart: n, requestStart: r } = t;
          r <= n &&
            (e["ttfb.requestTime"] = {
              value: n - r,
              unit: "millisecond",
            });
        })(b),
        i)
      ) {
        const t = (t, n, o) => {
          const i = o ?? `browser.web_vital.${t}.value`;
          e.setAttribute(i, n),
            h.DEBUG_BUILD &&
              r.debug.log(
                "Setting web vital attribute",
                { [i]: n },
                "on pageload span",
              );
        };
        ["ttfb", "fp", "fcp"].forEach((e) => {
          b[e] && t(e, b[e].value);
        }),
          b["ttfb.requestTime"] &&
            t(
              "ttfb.requestTime",
              b["ttfb.requestTime"].value,
              "browser.web_vital.ttfb.request_time",
            );
      } else
        a || delete b.cls,
          s || delete b.lcp,
          Object.entries(b).forEach(([t, n]) => {
            r.setMeasurement(t, n.value, n.unit, e);
          }),
          (function (e, t) {
            g &&
              t.recordLcpOnPageloadSpan &&
              (g.element &&
                e.setAttribute("lcp.element", o.htmlTreeAsString(g.element)),
              g.id && e.setAttribute("lcp.id", g.id),
              g.url && e.setAttribute("lcp.url", g.url.trim().slice(0, 200)),
              null != g.loadTime && e.setAttribute("lcp.loadTime", g.loadTime),
              null != g.renderTime &&
                e.setAttribute("lcp.renderTime", g.renderTime),
              e.setAttribute("lcp.size", g.size)),
              y?.sources &&
                t.recordClsOnPageloadSpan &&
                y.sources.forEach((t, n) =>
                  e.setAttribute(
                    `cls.source.${n + 1}`,
                    o.htmlTreeAsString(t.node),
                  ),
                );
          })(e, t);
      e.setAttribute(
        i ? "browser.performance.time_origin" : "performance.timeOrigin",
        l,
      ),
        e.setAttribute(
          i
            ? "browser.performance.navigation.activation_start"
            : "performance.activationStart",
          d.getActivationStart(),
        );
    }
    S();
  }),
  (t.startTrackingInteractions = function () {
    s.addPerformanceInstrumentationHandler("event", ({ entries: e }) => {
      const t = r.getActiveSpan();
      if (t)
        for (const n of e)
          if ("click" === n.name) {
            const e = u.msToSec(r.browserPerformanceTimeOrigin() + n.startTime),
              i = u.msToSec(n.duration),
              a = {
                name: o.htmlTreeAsString(n.target),
                op: `ui.interaction.${n.name}`,
                startTime: e,
                attributes: {
                  [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.ui.browser.metrics",
                },
              },
              s = r.getComponentName(n.target);
            s && (a.attributes["ui.component_name"] = s),
              u.startAndEndSpan(t, e, e + i, a);
          }
    });
  }),
  (t.startTrackingLongAnimationFrames = function () {
    const e = new PerformanceObserver((e) => {
      const t = r.getActiveSpan();
      if (t)
        for (const n of e.getEntries()) {
          if (!n.scripts[0]) continue;
          const e = u.msToSec(r.browserPerformanceTimeOrigin() + n.startTime),
            { start_timestamp: o, op: i } = r.spanToJSON(t);
          if ("navigation" === i && o && e < o) continue;
          const a = u.msToSec(n.duration),
            s = {
              [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
            },
            l = n.scripts[0],
            {
              invoker: c,
              invokerType: d,
              sourceURL: p,
              sourceFunctionName: f,
              sourceCharPosition: h,
            } = l;
          (s["browser.script.invoker"] = c),
            (s["browser.script.invoker_type"] = d),
            p && (s["code.filepath"] = p),
            f && (s["code.function"] = f),
            -1 !== h && (s["browser.script.source_char_position"] = h),
            u.startAndEndSpan(t, e, e + a, {
              name: "Main UI thread blocked",
              op: "ui.long-animation-frame",
              attributes: s,
            });
        }
    });
    e.observe({ type: "long-animation-frame", buffered: !0 });
  }),
  (t.startTrackingLongTasks = function () {
    s.addPerformanceInstrumentationHandler("longtask", ({ entries: e }) => {
      const t = r.getActiveSpan();
      if (!t) return;
      const { op: n, start_timestamp: o } = r.spanToJSON(t);
      for (const i of e) {
        const e = u.msToSec(r.browserPerformanceTimeOrigin() + i.startTime),
          a = u.msToSec(i.duration);
        ("navigation" === n && o && e < o) ||
          u.startAndEndSpan(t, e, e + a, {
            name: "Main UI thread blocked",
            op: "ui.long-task",
            attributes: {
              [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
            },
          });
      }
    });
  }),
  (t.startTrackingWebVitals = function ({
    recordClsStandaloneSpans: e,
    recordLcpStandaloneSpans: t,
    client: n,
  }) {
    const o = u.getBrowserPerformanceAPI();
    if (o && r.browserPerformanceTimeOrigin()) {
      o.mark && i.WINDOW.performance.mark("sentry-tracing-init");
      const r = t
          ? l.trackLcpAsStandaloneSpan(n)
          : !1 === t
            ? s.addLcpInstrumentationHandler(({ metric: e }) => {
                const t = e.entries[e.entries.length - 1];
                t &&
                  l.isValidLcpMetric(e.value) &&
                  ((b.lcp = { value: e.value, unit: "millisecond" }), (g = t));
              }, !0)
            : void 0,
        c = e
          ? a.trackClsAsStandaloneSpan(n)
          : !1 === e
            ? s.addClsInstrumentationHandler(({ metric: e }) => {
                const t = e.entries[e.entries.length - 1];
                t && ((b.cls = { value: e.value, unit: "" }), (y = t));
              }, !0)
            : void 0,
        u = s.addTtfbInstrumentationHandler(({ metric: e }) => {
          e.entries[e.entries.length - 1] &&
            (b.ttfb = { value: e.value, unit: "millisecond" });
        }),
        d = s.addPerformanceInstrumentationHandler(
          "paint",
          ({ entries: e }) => {
            const t = f.getVisibilityWatcher();
            for (const n of e) {
              const e = n.startTime < t.firstHiddenTime;
              "first-paint" === n.name &&
                e &&
                (b.fp = { value: n.startTime, unit: "millisecond" }),
                "first-contentful-paint" === n.name &&
                  e &&
                  (b.fcp = {
                    value: n.startTime,
                    unit: "millisecond",
                  });
            }
          },
        );
      return () => {
        u(), d(), r?.(), c?.();
      };
    }
    return () => {};
  });
