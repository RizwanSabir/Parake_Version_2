// vendor/module-15946.js — webpack module 15946
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(52889 /* vendor/module-52889 */),
  a = n(77481 /* vendor/module-77481 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(23295 /* vendor/module-23295 */),
  c = n(82615 /* vendor/module-82615 */),
  u = n(95418 /* vendor/module-95418 */),
  d = n(75715 /* vendor/module-75715 */),
  p = n(19410 /* vendor/module-19410 */),
  f = n(27352 /* vendor/module-27352 */);
function h(e, t) {
  const n = r.getCurrentScope(),
    i = r.getClient();
  if (i) {
    if (i.captureCheckIn) return i.captureCheckIn(e, t, n);
    o.DEBUG_BUILD &&
      s.debug.warn(
        "Cannot capture check-in. Client does not support sending check-ins.",
      );
  } else
    o.DEBUG_BUILD &&
      s.debug.warn("Cannot capture check-in. No client defined.");
  return c.uuid4();
}
function m() {
  const e = r.getIsolationScope(),
    t = r.getCurrentScope().getSession() || e.getSession();
  t && i.closeSession(t), g(), e.setSession();
}
function g() {
  const e = r.getIsolationScope(),
    t = r.getClient(),
    n = e.getSession();
  n && t && t.captureSession(n);
}
(t.addEventProcessor = function (e) {
  r.getIsolationScope().addEventProcessor(e);
}),
  (t.captureCheckIn = h),
  (t.captureEvent = function (e, t) {
    return r.getCurrentScope().captureEvent(e, t);
  }),
  (t.captureException = function (e, t) {
    return r
      .getCurrentScope()
      .captureException(e, u.parseEventHintOrCaptureContext(t));
  }),
  (t.captureMessage = function (e, t) {
    const n = "string" == typeof t ? t : void 0,
      o = "string" != typeof t ? { captureContext: t } : void 0;
    return r.getCurrentScope().captureMessage(e, n, o);
  }),
  (t.captureSession = function (e = !1) {
    e ? m() : g();
  }),
  (t.close = async function (e) {
    const t = r.getClient();
    return t
      ? t.close(e)
      : (o.DEBUG_BUILD &&
          s.debug.warn(
            "Cannot flush events and disable SDK. No client defined.",
          ),
        Promise.resolve(!1));
  }),
  (t.endSession = m),
  (t.flush = async function (e) {
    const t = r.getClient();
    return t
      ? t.flush(e)
      : (o.DEBUG_BUILD &&
          s.debug.warn("Cannot flush events. No client defined."),
        Promise.resolve(!1));
  }),
  (t.isEnabled = function () {
    const e = r.getClient();
    return !1 !== e?.getOptions().enabled && !!e?.getTransport();
  }),
  (t.isInitialized = function () {
    return !!r.getClient();
  }),
  (t.lastEventId = function () {
    return r.getIsolationScope().lastEventId();
  }),
  (t.setAttribute = function (e, t) {
    r.getIsolationScope().setAttribute(e, t);
  }),
  (t.setAttributes = function (e) {
    r.getIsolationScope().setAttributes(e);
  }),
  (t.setContext = function (e, t) {
    r.getIsolationScope().setContext(e, t);
  }),
  (t.setConversationId = function (e) {
    r.getIsolationScope().setConversationId(e);
  }),
  (t.setExtra = function (e, t) {
    r.getIsolationScope().setExtra(e, t);
  }),
  (t.setExtras = function (e) {
    r.getIsolationScope().setExtras(e);
  }),
  (t.setTag = function (e, t) {
    r.getIsolationScope().setTag(e, t);
  }),
  (t.setTags = function (e) {
    r.getIsolationScope().setTags(e);
  }),
  (t.setUser = function (e) {
    r.getIsolationScope().setUser(e);
  }),
  (t.startSession = function (e) {
    const t = r.getIsolationScope(),
      { user: n } = d.getCombinedScopeData(t, r.getCurrentScope()),
      { userAgent: o } = f.GLOBAL_OBJ.navigator || {},
      a = i.makeSession({
        user: n,
        ...(o && { userAgent: o }),
        ...e,
      }),
      s = t.getSession();
    return (
      "ok" === s?.status && i.updateSession(s, { status: "exited" }),
      m(),
      t.setSession(a),
      a
    );
  }),
  (t.withMonitor = function (e, t, n) {
    function o() {
      const r = h({ monitorSlug: e, status: "in_progress" }, n),
        o = p.timestampInSeconds();
      function i(t) {
        h({
          monitorSlug: e,
          status: t,
          checkInId: r,
          duration: p.timestampInSeconds() - o,
        });
      }
      let a;
      try {
        a = t();
      } catch (e) {
        throw (i("error"), e);
      }
      return l.isThenable(a)
        ? a.then(
            (e) => (i("ok"), e),
            (e) => {
              throw (i("error"), e);
            },
          )
        : (i("ok"), a);
    }
    return r.withIsolationScope(() =>
      n?.isolateTrace ? a.startNewTrace(o) : o(),
    );
  });
