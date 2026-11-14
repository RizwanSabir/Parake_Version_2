// vendor/other/module-30541.js — webpack module 30541
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = n(93348 /* vendor/other/module-93348 */),
  l = n(12006 /* vendor/other/module-12006 */),
  d = n(18616 /* vendor/other/module-18616 */);
function p(e) {
  try {
    return e();
  } catch (e) {
    return void (
      s.DEBUG_BUILD &&
      o.debug.warn("[orchestrion:aws-sdk] error building span", e)
    );
  }
}
function f(e, t) {
  t &&
    (t.requestId && e.setAttribute(i._AWS_REQUEST_ID, t.requestId),
    t.httpStatusCode && e.setAttribute(i.HTTP_STATUS_CODE, t.httpStatusCode),
    t.extendedRequestId &&
      e.setAttribute(i.AWS_REQUEST_EXTENDED_ID, t.extendedRequestId));
}
const h = o.defineIntegration(() => {
  const e = new l.ServicesExtensions();
  return {
    name: "Aws",
    setupOnce() {
      if (!r.tracingChannel) return;
      const t = (t) =>
          p(() => {
            const n = t.arguments[0],
              r = n?.constructor?.name;
            if (!n || !r) return;
            const s = t.self?.config,
              a =
                s?.serviceId ??
                d.removeSuffixFromStringIfExists(
                  t.self?.constructor?.name || "AWS",
                  "Client",
                );
            n.input || (n.input = {});
            const c = d.normalizeV3Request(a, r, n.input, void 0),
              l = e.requestPreSpanHook(c),
              f = o.startInactiveSpan({
                name: l.spanName ?? `${c.serviceName}.${c.commandName}`,
                kind: l.spanKind ?? o.SPAN_KIND.CLIENT,
                op: l.spanOp || "rpc",
                attributes: {
                  [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: u.AWS_SDK_ORIGIN,
                  ...d.extractAttributesFromNormalizedRequest(c),
                  ...l.spanAttributes,
                },
              });
            let h;
            (t._sentryNormalizedRequest = c), (t._sentryRequestMetadata = l);
            try {
              h = s?.region?.();
            } catch {}
            const g = {
              settled: !1,
              promise: Promise.resolve(h)
                .then((e) => {
                  e && ((c.region = e), f.setAttribute(i.CLOUD_REGION, e));
                })
                .catch(() => {})
                .finally(() => {
                  g.settled = !0;
                }),
            };
            return (
              (t._sentryRegion = g), p(() => e.requestPostSpanHook(c, f)), f
            );
          }),
        n = {
          deferSpanEnd({ span: t, data: n, end: r }) {
            const o = n._sentryNormalizedRequest,
              i = n._sentryRequestMetadata;
            if (!o) return !1;
            const s = "error" in n;
            if (
              (p(() => {
                if (s) {
                  const e = n.error,
                    r = e?.$metadata;
                  return void f(t, {
                    requestId: e?.RequestId ?? r?.requestId,
                    httpStatusCode: r?.httpStatusCode,
                    extendedRequestId:
                      e?.extendedRequestId ?? r?.extendedRequestId,
                  });
                }
                const r = n.result;
                f(t, r?.$metadata);
                const i = {
                  data: r,
                  request: o,
                  requestId: r?.$metadata?.requestId,
                };
                e.responseHook(i, t);
              }),
              i?.isStream && !s)
            )
              return !0;
            const a = n._sentryRegion;
            return !(!a || a.settled || (a.promise.then(() => r()), 0));
          },
        },
        l = [
          a.CHANNELS.AWS_SMITHY_CORE_SEND,
          a.CHANNELS.AWS_SMITHY_CLIENT_SEND,
          a.CHANNELS.AWS_SDK_SMITHY_CLIENT_SEND,
        ];
      s.DEBUG_BUILD &&
        o.debug.log(
          `[orchestrion:aws-sdk] subscribing to channels "${l.join('", "')}"`,
        ),
        o.waitForTracingChannelBinding(() => {
          for (const e of l)
            c.bindTracingChannelToSpan(r.tracingChannel(e), t, n);
        });
    },
  };
});
t.awsChannelIntegration = h;
