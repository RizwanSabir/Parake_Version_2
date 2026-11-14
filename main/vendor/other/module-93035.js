// vendor/other/module-93035.js — webpack module 93035
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(76403 /* vendor/other/module-76403 */),
  s = n(28260 /* vendor/other/module-28260 */),
  a = n(26434 /* vendor/other/module-26434 */);
(t.DEFAULT_TRANSPORT_BUFFER_SIZE = 64),
  (t.createTransport = function (
    e,
    t,
    n = s.makePromiseBuffer(e.bufferSize || 64),
  ) {
    let c = {};
    return {
      send: function (u) {
        const l = [];
        if (
          (i.forEachEnvelopeItem(u, (t, n) => {
            const r = i.envelopeItemTypeToDataCategory(n);
            a.isRateLimited(c, r)
              ? e.recordDroppedEvent("ratelimit_backoff", r)
              : l.push(t);
          }),
          0 === l.length)
        )
          return Promise.resolve({});
        const d = i.createEnvelope(u[0], l),
          p = (t) => {
            i.envelopeContainsItemType(d, ["client_report"])
              ? r.DEBUG_BUILD &&
                o.debug.warn(
                  `Dropping client report. Will not send outcomes (reason: ${t}).`,
                )
              : i.forEachEnvelopeItem(d, (n, r) => {
                  e.recordDroppedEvent(t, i.envelopeItemTypeToDataCategory(r));
                });
          };
        return n
          .add(() =>
            t({ body: i.serializeEnvelope(d) }).then(
              (e) =>
                413 === e.statusCode
                  ? (r.DEBUG_BUILD &&
                      o.debug.error(
                        "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits.",
                      ),
                    p("send_error"),
                    e)
                  : (r.DEBUG_BUILD &&
                      void 0 !== e.statusCode &&
                      (e.statusCode < 200 || e.statusCode >= 300) &&
                      o.debug.warn(
                        `Sentry responded with status code ${e.statusCode} to sent event.`,
                      ),
                    (c = a.updateRateLimits(c, e)),
                    e),
              (e) => {
                throw (
                  (p("network_error"),
                  r.DEBUG_BUILD &&
                    o.debug.error(
                      "Encountered error running transport request:",
                      e,
                    ),
                  e)
                );
              },
            ),
          )
          .then(
            (e) => e,
            (e) => {
              if (e === s.SENTRY_BUFFER_FULL_ERROR)
                return (
                  r.DEBUG_BUILD &&
                    o.debug.error(
                      "Skipped sending event because buffer is full.",
                    ),
                  p("queue_overflow"),
                  Promise.resolve({})
                );
              throw e;
            },
          );
      },
      flush: (e) => n.drain(e),
    };
  });
