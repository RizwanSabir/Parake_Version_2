// vendor/other/module-93803.js — webpack module 93803
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(76403 /* vendor/other/module-76403 */),
  s = n(97190 /* vendor/other/module-97190 */),
  a = n(26434 /* vendor/other/module-26434 */),
  c = n(98050 /* vendor/other/module-98050 */),
  u = 100,
  l = 5e3;
(t.MIN_DELAY = u),
  (t.START_DELAY = l),
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
        p = l;
      function f(e) {
        d && clearTimeout(d),
          (d = c.safeUnref(
            setTimeout(async () => {
              d = void 0;
              const e = await o.shift();
              e &&
                (t("Attempting to send previously queued event"),
                (e[0].sent_at = new Date(s.safeDateNow()).toISOString()),
                g(e, !0).catch((e) => {
                  t("Failed to retry sending", e);
                }));
            }, e),
          ));
      }
      function h() {
        d || (f(p), (p = Math.min(2 * p, 36e5)));
      }
      async function g(e, s = !1) {
        if (
          !s &&
          i.envelopeContainsItemType(e, ["replay_event", "replay_recording"])
        )
          return await o.push(e), f(u), {};
        try {
          if (n.shouldSend && !1 === (await n.shouldSend(e)))
            throw new Error(
              "Envelope not sent because `shouldSend` callback returned false",
            );
          const t = await r.send(e);
          let o = u;
          if (t)
            if (t.headers?.["retry-after"])
              o = a.parseRetryAfterHeader(t.headers["retry-after"]);
            else if (t.headers?.["x-sentry-rate-limits"]) o = 6e4;
            else if ((t.statusCode || 0) >= 400) return t;
          return f(o), (p = l), t;
        } catch (r) {
          if (
            await ((c = e),
            (d = r),
            (g = p),
            !i.envelopeContainsItemType(c, ["client_report"]) &&
              (!n.shouldStore || n.shouldStore(c, d, g)))
          )
            return (
              s ? await o.unshift(e) : await o.push(e),
              h(),
              t("Error sending. Event queued.", r),
              {}
            );
          throw r;
        }
        var c, d, g;
      }
      return (
        n.flushAtStartup && h(),
        {
          send: g,
          flush: (e) => (void 0 === e && ((p = l), f(u)), r.flush(e)),
        }
      );
    };
  });
