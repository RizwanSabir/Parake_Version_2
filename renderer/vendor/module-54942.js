// vendor/module-54942.js — webpack module 54942
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(95246 /* vendor/module-95246 */),
  s = n(82615 /* vendor/module-82615 */),
  l = n(75122 /* vendor/module-75122 */),
  c = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    /can't redefine non-configurable property "solana"/,
    /vv\(\)\.getRestrictions is not a function/,
    /Can't find variable: _AutofillCallbackHandler/,
    /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
    /^Java exception was raised during method invocation$/,
  ],
  u = o.defineIntegration((e = {}) => {
    let t;
    return {
      name: "EventFilters",
      setup(n) {
        const r = n.getOptions();
        t = p(e, r);
      },
      processEvent(n, o, c) {
        if (!t) {
          const n = c.getOptions();
          t = p(e, n);
        }
        return (function (e, t) {
          if (e.type) {
            if (
              "transaction" === e.type &&
              (function (e, t) {
                if (!t?.length) return !1;
                const n = e.transaction;
                return !!n && l.stringMatchesSomePattern(n, t);
              })(e, t.ignoreTransactions)
            )
              return (
                r.DEBUG_BUILD &&
                  i.debug.warn(
                    `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${s.getEventDescription(e)}`,
                  ),
                !0
              );
          } else {
            if (
              (function (e, t) {
                return (
                  !!t?.length &&
                  a
                    .getPossibleEventMessages(e)
                    .some((e) => l.stringMatchesSomePattern(e, t))
                );
              })(e, t.ignoreErrors)
            )
              return (
                r.DEBUG_BUILD &&
                  i.debug.warn(
                    `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${s.getEventDescription(e)}`,
                  ),
                !0
              );
            if (
              (function (e) {
                return (
                  !!e.exception?.values?.length &&
                  !e.message &&
                  !e.exception.values.some(
                    (e) =>
                      e.stacktrace || (e.type && "Error" !== e.type) || e.value,
                  )
                );
              })(e)
            )
              return (
                r.DEBUG_BUILD &&
                  i.debug.warn(
                    `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${s.getEventDescription(e)}`,
                  ),
                !0
              );
            if (
              (function (e, t) {
                if (!t?.length) return !1;
                const n = f(e);
                return !!n && l.stringMatchesSomePattern(n, t);
              })(e, t.denyUrls)
            )
              return (
                r.DEBUG_BUILD &&
                  i.debug.warn(
                    `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${s.getEventDescription(e)}.\nUrl: ${f(e)}`,
                  ),
                !0
              );
            if (
              !(function (e, t) {
                if (!t?.length) return !0;
                const n = f(e);
                return !n || l.stringMatchesSomePattern(n, t);
              })(e, t.allowUrls)
            )
              return (
                r.DEBUG_BUILD &&
                  i.debug.warn(
                    `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${s.getEventDescription(e)}.\nUrl: ${f(e)}`,
                  ),
                !0
              );
          }
          return !1;
        })(n, t)
          ? null
          : n;
      },
    };
  }),
  d = o.defineIntegration((e = {}) => ({
    ...u(e),
    name: "InboundFilters",
  }));
function p(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : c),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function f(e) {
  try {
    const t = [...(e.exception?.values ?? [])]
        .reverse()
        .find(
          (e) =>
            void 0 === e.mechanism?.parent_id && e.stacktrace?.frames?.length,
        ),
      n = t?.stacktrace?.frames;
    return n
      ? (function (e = []) {
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            if (
              n &&
              "<anonymous>" !== n.filename &&
              "[native code]" !== n.filename
            )
              return n.filename || null;
          }
          return null;
        })(n)
      : null;
  } catch {
    return (
      r.DEBUG_BUILD &&
        i.debug.error(
          `Cannot extract url for event ${s.getEventDescription(e)}`,
        ),
      null
    );
  }
}
(t.eventFiltersIntegration = u), (t.inboundFiltersIntegration = d);
