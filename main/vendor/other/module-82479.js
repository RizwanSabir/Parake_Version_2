// vendor/other/module-82479.js — webpack module 82479
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(47720 /* vendor/other/module-47720 */),
  i = n(60467 /* vendor/other/module-60467 */),
  s = n(52928 /* vendor/other/module-52928 */),
  a = n(13111 /* vendor/other/module-13111 */),
  c = n(63319 /* vendor/other/module-63319 */),
  u = n(44084 /* vendor/other/module-44084 */),
  l = n(71417 /* vendor/other/module-71417 */),
  d = n(79111 /* vendor/other/module-79111 */),
  p = n(86881 /* vendor/other/module-86881 */),
  f = n(93695 /* vendor/other/module-93695 */),
  h = n(48420 /* vendor/other/module-48420 */),
  g = n(88516 /* vendor/other/module-88516 */);
let m,
  _,
  S = 0,
  E = {};
function y() {
  (m = void 0), (_ = void 0), (E = {});
}
function T(e, t, n, o, i, s) {
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
    r.stringMatchesSomePattern(t.name, s)
  )
    return;
  const a = p.getNavigationEntry(!1),
    c = l.msToSec(a ? a.requestStart : 0),
    u = i + Math.max(n, c),
    d = i + n,
    f = d + o,
    h = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics",
    };
  u !== d &&
    ((h["sentry.browser.measure_happened_before_request"] = !0),
    (h["sentry.browser.measure_start_time"] = u)),
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
    u <= f &&
      l.startAndEndSpan(e, u, f, {
        name: t.name,
        op: t.entryType,
        attributes: h,
      });
}
function b(e, t, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    I(e, t, r, n);
  }),
    I(e, t, "secureConnection", n, "TLS/SSL"),
    I(e, t, "fetch", n, "cache"),
    I(e, t, "domainLookup", n, "DNS"),
    (function (e, t, n) {
      const o = n + l.msToSec(t.requestStart),
        i = n + l.msToSec(t.responseEnd),
        s = n + l.msToSec(t.responseStart);
      t.responseEnd &&
        (l.startAndEndSpan(e, o, i, {
          op: "browser.request",
          name: t.name,
          attributes: {
            [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
          },
        }),
        l.startAndEndSpan(e, s, i, {
          op: "browser.response",
          name: t.name,
          attributes: {
            [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
          },
        }));
    })(e, t, n);
}
function I(e, t, n, o, i = n) {
  const s = (function (e) {
      return "secureConnection" === e
        ? "connectEnd"
        : "fetch" === e
          ? "domainLookupStart"
          : `${e}End`;
    })(n),
    a = t[s],
    c = t[`${n}Start`];
  c &&
    a &&
    l.startAndEndSpan(e, o + l.msToSec(c), o + l.msToSec(a), {
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
function v(e, t, n, o, s, a, c) {
  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
    return;
  const d = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
  if (c?.includes(d)) return;
  const p = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics",
    },
    f = r.parseUrl(n);
  f.protocol && (p["url.scheme"] = f.protocol.split(":").pop()),
    f.host && (p["server.address"] = f.host),
    (p["url.same_origin"] = n.includes(i.WINDOW.location.origin)),
    (p[g.URL_FULL] = n),
    A(t, p, [
      ["responseStatus", "http.response.status_code"],
      ["transferSize", "http.response_transfer_size"],
      ["encodedBodySize", "http.response_content_length"],
      ["decodedBodySize", "http.decoded_response_content_length"],
      ["renderBlockingStatus", "resource.render_blocking_status"],
      ["deliveryType", "http.response_delivery_type"],
    ]);
  const h = { ...p, ...u.resourceTimingToSpanAttributes(t) },
    m = a + o,
    _ = m + s;
  l.startAndEndSpan(e, m, _, {
    name: n.replace(i.WINDOW.location.origin, ""),
    op: d,
    attributes: h,
  });
}
function A(e, t, n) {
  n.forEach(([n, r]) => {
    const o = e[n];
    null != o &&
      (("number" == typeof o && o < 2147483647) || "string" == typeof o) &&
      (t[r] = o);
  });
}
(t._addMeasureSpans = T),
  (t._addNavigationSpans = b),
  (t._addResourceSpans = v),
  (t._setResourceRequestAttributes = A),
  (t.addPerformanceEntries = function (e, t) {
    const n = l.getBrowserPerformanceAPI(),
      o = r.browserPerformanceTimeOrigin();
    if (!n?.getEntries || !o) return;
    const {
        spanStreamingEnabled: s,
        ignorePerformanceApiSpans: a,
        ignoreResourceSpans: c,
      } = t,
      u = l.msToSec(o),
      d = n.getEntries(),
      { op: p, start_timestamp: f } = r.spanToJSON(e);
    d.slice(S).forEach((t) => {
      const n = l.msToSec(t.startTime),
        r = l.msToSec(Math.max(0, t.duration));
      if (!("navigation" === p && f && u + n < f))
        switch (t.entryType) {
          case "navigation":
            b(e, t, u);
            break;
          case "mark":
          case "paint":
          case "measure":
            T(e, t, n, r, u, a);
            break;
          case "resource":
            v(e, t, t.name, n, r, u, c);
        }
    }),
      (S = Math.max(d.length - 1, 0)),
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
          l.isMeasurementValue(o.rtt) &&
            (t
              ? e.setAttribute("network.connection.rtt", o.rtt)
              : "pageload" === r.spanToJSON(e).op &&
                r.setMeasurement("connection.rtt", o.rtt, "millisecond"))),
          l.isMeasurementValue(n.deviceMemory) &&
            (t
              ? e.setAttribute(
                  "device.memory.estimated_capacity",
                  n.deviceMemory,
                )
              : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)),
          l.isMeasurementValue(n.hardwareConcurrency) &&
            (t
              ? e.setAttribute("device.processor_count", n.hardwareConcurrency)
              : e.setAttribute(
                  "hardwareConcurrency",
                  String(n.hardwareConcurrency),
                ));
      })(e, s);
  }),
  (t.addWebVitalsToSpan = function (e, t) {
    const n = r.browserPerformanceTimeOrigin();
    if (!l.getBrowserPerformanceAPI()?.getEntries || !n) return void y();
    const {
        spanStreamingEnabled: i,
        recordClsOnPageloadSpan: s,
        recordLcpOnPageloadSpan: a,
      } = t,
      c = l.msToSec(n);
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
        })(E),
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
          E[e] && t(e, E[e].value);
        }),
          E["ttfb.requestTime"] &&
            t(
              "ttfb.requestTime",
              E["ttfb.requestTime"].value,
              "browser.web_vital.ttfb.request_time",
            );
      } else
        s || delete E.cls,
          a || delete E.lcp,
          Object.entries(E).forEach(([t, n]) => {
            r.setMeasurement(t, n.value, n.unit, e);
          }),
          (function (e, t) {
            m &&
              t.recordLcpOnPageloadSpan &&
              (m.element &&
                e.setAttribute("lcp.element", o.htmlTreeAsString(m.element)),
              m.id && e.setAttribute("lcp.id", m.id),
              m.url && e.setAttribute("lcp.url", m.url.trim().slice(0, 200)),
              null != m.loadTime && e.setAttribute("lcp.loadTime", m.loadTime),
              null != m.renderTime &&
                e.setAttribute("lcp.renderTime", m.renderTime),
              e.setAttribute("lcp.size", m.size)),
              _?.sources &&
                t.recordClsOnPageloadSpan &&
                _.sources.forEach((t, n) =>
                  e.setAttribute(
                    `cls.source.${n + 1}`,
                    o.htmlTreeAsString(t.node),
                  ),
                );
          })(e, t);
      e.setAttribute(
        i ? "browser.performance.time_origin" : "performance.timeOrigin",
        c,
      ),
        e.setAttribute(
          i
            ? "browser.performance.navigation.activation_start"
            : "performance.activationStart",
          d.getActivationStart(),
        );
    }
    y();
  }),
  (t.startTrackingInteractions = function () {
    a.addPerformanceInstrumentationHandler("event", ({ entries: e }) => {
      const t = r.getActiveSpan();
      if (t)
        for (const n of e)
          if ("click" === n.name) {
            const e = l.msToSec(r.browserPerformanceTimeOrigin() + n.startTime),
              i = l.msToSec(n.duration),
              s = {
                name: o.htmlTreeAsString(n.target),
                op: `ui.interaction.${n.name}`,
                startTime: e,
                attributes: {
                  [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.ui.browser.metrics",
                },
              },
              a = r.getComponentName(n.target);
            a && (s.attributes["ui.component_name"] = a),
              l.startAndEndSpan(t, e, e + i, s);
          }
    });
  }),
  (t.startTrackingLongAnimationFrames = function () {
    const e = new PerformanceObserver((e) => {
      const t = r.getActiveSpan();
      if (t)
        for (const n of e.getEntries()) {
          if (!n.scripts[0]) continue;
          const e = l.msToSec(r.browserPerformanceTimeOrigin() + n.startTime),
            { start_timestamp: o, op: i } = r.spanToJSON(t);
          if ("navigation" === i && o && e < o) continue;
          const s = l.msToSec(n.duration),
            a = {
              [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
            },
            c = n.scripts[0],
            {
              invoker: u,
              invokerType: d,
              sourceURL: p,
              sourceFunctionName: f,
              sourceCharPosition: h,
            } = c;
          (a["browser.script.invoker"] = u),
            (a["browser.script.invoker_type"] = d),
            p && (a["code.filepath"] = p),
            f && (a["code.function"] = f),
            -1 !== h && (a["browser.script.source_char_position"] = h),
            l.startAndEndSpan(t, e, e + s, {
              name: "Main UI thread blocked",
              op: "ui.long-animation-frame",
              attributes: a,
            });
        }
    });
    e.observe({ type: "long-animation-frame", buffered: !0 });
  }),
  (t.startTrackingLongTasks = function () {
    a.addPerformanceInstrumentationHandler("longtask", ({ entries: e }) => {
      const t = r.getActiveSpan();
      if (!t) return;
      const { op: n, start_timestamp: o } = r.spanToJSON(t);
      for (const i of e) {
        const e = l.msToSec(r.browserPerformanceTimeOrigin() + i.startTime),
          s = l.msToSec(i.duration);
        ("navigation" === n && o && e < o) ||
          l.startAndEndSpan(t, e, e + s, {
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
    const o = l.getBrowserPerformanceAPI();
    if (o && r.browserPerformanceTimeOrigin()) {
      o.mark && i.WINDOW.performance.mark("sentry-tracing-init");
      const r = t
          ? c.trackLcpAsStandaloneSpan(n)
          : !1 === t
            ? a.addLcpInstrumentationHandler(({ metric: e }) => {
                const t = e.entries[e.entries.length - 1];
                t &&
                  c.isValidLcpMetric(e.value) &&
                  ((E.lcp = { value: e.value, unit: "millisecond" }), (m = t));
              }, !0)
            : void 0,
        u = e
          ? s.trackClsAsStandaloneSpan(n)
          : !1 === e
            ? a.addClsInstrumentationHandler(({ metric: e }) => {
                const t = e.entries[e.entries.length - 1];
                t && ((E.cls = { value: e.value, unit: "" }), (_ = t));
              }, !0)
            : void 0,
        l = a.addTtfbInstrumentationHandler(({ metric: e }) => {
          e.entries[e.entries.length - 1] &&
            (E.ttfb = { value: e.value, unit: "millisecond" });
        }),
        d = a.addPerformanceInstrumentationHandler(
          "paint",
          ({ entries: e }) => {
            const t = f.getVisibilityWatcher();
            for (const n of e) {
              const e = n.startTime < t.firstHiddenTime;
              "first-paint" === n.name &&
                e &&
                (E.fp = { value: n.startTime, unit: "millisecond" }),
                "first-contentful-paint" === n.name &&
                  e &&
                  (E.fcp = {
                    value: n.startTime,
                    unit: "millisecond",
                  });
            }
          },
        );
      return () => {
        l(), d(), r?.(), u?.();
      };
    }
    return () => {};
  });
