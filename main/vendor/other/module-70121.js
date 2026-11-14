// vendor/other/module-70121.js — webpack module 70121
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(15343 /* vendor/other/module-15343 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = (() => {
    try {
      return "true" === process.env.PRISMA_SHOW_ALL_TRACES;
    } catch {
      return !1;
    }
  })(),
  a = new r.LRUMap(1e3),
  c = [];
function u(e, t) {
  a.set(e, t);
}
function l(e, t) {
  const n = {
    ...t,
    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.prisma",
  };
  return (
    "prisma:engine:db_query" === e &&
      null == n[i.DB_SYSTEM] &&
      (n[i.DB_SYSTEM] = "prisma"),
    n
  );
}
function d(e, t) {
  const n = t["db.query.text"];
  return ("prisma:engine:db_query" !== e && "prisma:client:db_query" !== e) ||
    "string" != typeof n
    ? e
    : n;
}
function p(e, t, n, o) {
  if (h(e.name, o)) return;
  const i = l(e.name, e.attributes);
  r.startSpanManual(
    {
      name: d(e.name, i),
      attributes: i,
      kind: "client" === e.kind ? r.SPAN_KIND.CLIENT : r.SPAN_KIND.INTERNAL,
      startTime: e.startTime,
    },
    (r) => {
      n.set(e.id, r.spanContext().spanId),
        e.links &&
          r.addLinks(
            e.links.flatMap((e) => {
              const t = n.get(e);
              return t
                ? {
                    context: {
                      spanId: t,
                      traceId: r.spanContext().traceId,
                      traceFlags: r.spanContext().traceFlags,
                    },
                  }
                : [];
            }),
          );
      const i = t.filter((t) => t.parentId === e.id);
      for (const e of i) p(e, t, n, o);
      r.end(e.endTime);
    },
  );
}
function f(e, t) {
  let n;
  try {
    n = t();
  } catch (t) {
    throw (e.end(), t);
  }
  return null != (r = n) && "function" == typeof r.then
    ? n.then(
        (t) => (e.end(), t),
        (t) => {
          throw (e.end(), t);
        },
      )
    : (e.end(), n);
  var r;
}
function h(e, t) {
  return t.some((t) => ("string" == typeof t ? t === e : t.test(e)));
}
t.ActiveTracingHelper = class {
  constructor({ ignoreSpanTypes: e }) {
    this.ignoreSpanTypes = e;
  }
  isEnabled() {
    return !0;
  }
  getTraceParent(e) {
    const t = (e ?? r.getActiveSpan())?.spanContext();
    return t ? `00-${t.traceId}-${t.spanId}-0${t.traceFlags}` : "00-10-10-00";
  }
  dispatchEngineSpans(e) {
    const t = new Map(),
      n = e.filter((e) => null === e.parentId);
    for (const r of n) p(r, e, t, this.ignoreSpanTypes);
  }
  createEngineSpan(e) {
    c.push(...e.spans),
      (function () {
        let e = !0;
        for (; e; ) {
          e = !1;
          for (let t = c.length - 1; t >= 0; t--) {
            const n = c[t],
              o = a.get(n.parent_span_id);
            if (!o) continue;
            const i = l(n.name, n.attributes),
              s = r.startInactiveSpan({
                name: d(n.name, i),
                attributes: i,
                kind:
                  "client" === n.kind
                    ? r.SPAN_KIND.CLIENT
                    : r.SPAN_KIND.INTERNAL,
                startTime: n.start_time,
                parentSpan: o,
              });
            u(n.span_id, s),
              n.links &&
                s.addLinks(
                  n.links.flatMap((e) => {
                    const t = a.get(e.span_id);
                    return t ? [{ context: t.spanContext() }] : [];
                  }),
                ),
              s.end(n.end_time),
              c.splice(t, 1),
              (e = !0);
          }
        }
      })();
    const t = c.length - 1e3;
    t > 0 &&
      (o.DEBUG_BUILD &&
        r.debug.log(
          `[Prisma] Dropping ${t} unresolved v5 engine span(s) whose parent was never registered.`,
        ),
      c.splice(0, t));
  }
  getActiveContext() {
    return r.getActiveSpan();
  }
  runInChildSpan(e, t) {
    const n = "string" == typeof e ? { name: e } : e;
    if (n.internal && !s) return t();
    const o = `prisma:client:${n.name}`;
    if (h(o, this.ignoreSpanTypes)) return t();
    const i = r.getActiveSpan(),
      a = l(o, n.attributes),
      c = {
        name: d(o, a),
        attributes: a,
        kind: n.kind,
        links: n.links,
        startTime: n.startTime,
        parentSpan: i,
      };
    if (!1 === n.active) {
      const e = r.startInactiveSpan(c);
      return u(e.spanContext().spanId, e), f(e, () => t(e, i));
    }
    return r.startSpanManual(
      c,
      (e) => (u(e.spanContext().spanId, e), f(e, () => t(e, i))),
    );
  }
};
