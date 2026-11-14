// vendor/module-93803.js — webpack module 93803
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(76403 /* vendor/module-76403 */),
  a = n(97190 /* vendor/module-97190 */),
  s = n(26434 /* vendor/module-26434 */),
  l = n(98050 /* vendor/module-98050 */),
  c = 100,
  u = 5e3;
(t.MIN_DELAY = c),
  (t.START_DELAY = u),
  (t.makeOfflineTransport = function (e) {
    function t(...e) {
      r.DEBUG_BUILD && o.debug.log("[Offline]:", ...e);
    }
    return (n) => {
      const r = e(n);
      if (!n.createStore)
        throw new Error("No `createStore` function was provided");
      const o = n.createStore(n);
      let d,
        p = u;
      function f(e) {
        d && clearTimeout(d),
          (d = l.safeUnref(
            setTimeout(async () => {
              d = void 0;
              const e = await o.shift();
              e &&
                (t("Attempting to send previously queued event"),
                (e[0].sent_at = new Date(a.safeDateNow()).toISOString()),
                m(e, !0).catch((e) => {
                  t("Failed to retry sending", e);
                }));
            }, e),
          ));
      }
      function h() {
        d || (f(p), (p = Math.min(2 * p, 36e5)));
      }
      async function m(e, a = !1) {
        if (
          !a &&
          i.envelopeContainsItemType(e, ["replay_event", "replay_recording"])
        )
          return await o.push(e), f(c), {};
        try {
          if (n.shouldSend && !1 === (await n.shouldSend(e)))
            throw new Error(
              "Envelope not sent because `shouldSend` callback returned false",
            );
          const t = await r.send(e);
          let o = c;
          if (t)
            if (t.headers?.["retry-after"])
              o = s.parseRetryAfterHeader(t.headers["retry-after"]);
            else if (t.headers?.["x-sentry-rate-limits"]) o = 6e4;
            else if ((t.statusCode || 0) >= 400) return t;
          return f(o), (p = u), t;
        } catch (r) {
          if (
            await ((l = e),
            (d = r),
            (m = p),
            !i.envelopeContainsItemType(l, ["client_report"]) &&
              (!n.shouldStore || n.shouldStore(l, d, m)))
          )
            return (
              a ? await o.unshift(e) : await o.push(e),
              h(),
              t("Error sending. Event queued.", r),
              {}
            );
          throw r;
        }
        var l, d, m;
      }
      return (
        n.flushAtStartup && h(),
        {
          send: m,
          flush: (e) => (void 0 === e && ((p = u), f(c)), r.flush(e)),
        }
      );
    };
  });
