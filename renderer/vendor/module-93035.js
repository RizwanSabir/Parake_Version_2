// vendor/module-93035.js — webpack module 93035
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(76403 /* vendor/module-76403 */),
  a = n(28260 /* vendor/module-28260 */),
  s = n(26434 /* vendor/module-26434 */);
(t.DEFAULT_TRANSPORT_BUFFER_SIZE = 64),
  (t.createTransport = function (
    e,
    t,
    n = a.makePromiseBuffer(e.bufferSize || 64),
  ) {
    let l = {};
    return {
      send: function (c) {
        const u = [];
        if (
          (i.forEachEnvelopeItem(c, (t, n) => {
            const r = i.envelopeItemTypeToDataCategory(n);
            s.isRateLimited(l, r)
              ? e.recordDroppedEvent("ratelimit_backoff", r)
              : u.push(t);
          }),
          0 === u.length)
        )
          return Promise.resolve({});
        const d = i.createEnvelope(c[0], u),
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
                    (l = s.updateRateLimits(l, e)),
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
              if (e === a.SENTRY_BUFFER_FULL_ERROR)
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
