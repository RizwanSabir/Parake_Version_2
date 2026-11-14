// vendor/other/module-15946.js — webpack module 15946
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(52889 /* vendor/other/module-52889 */),
  s = n(77481 /* vendor/other/module-77481 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(23295 /* vendor/other/module-23295 */),
  u = n(82615 /* vendor/other/module-82615 */),
  l = n(95418 /* vendor/other/module-95418 */),
  d = n(75715 /* vendor/other/module-75715 */),
  p = n(19410 /* vendor/other/module-19410 */),
  f = n(27352 /* vendor/other/module-27352 */);
function h(e, t) {
  const n = r.getCurrentScope(),
    i = r.getClient();
  if (i) {
    if (i.captureCheckIn) return i.captureCheckIn(e, t, n);
    o.DEBUG_BUILD &&
      a.debug.warn(
        "Cannot capture check-in. Client does not support sending check-ins.",
      );
  } else
    o.DEBUG_BUILD &&
      a.debug.warn("Cannot capture check-in. No client defined.");
  return u.uuid4();
}
function g() {
  const e = r.getIsolationScope(),
    t = r.getCurrentScope().getSession() || e.getSession();
  t && i.closeSession(t), m(), e.setSession();
}
function m() {
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
      .captureException(e, l.parseEventHintOrCaptureContext(t));
  }),
  (t.captureMessage = function (e, t) {
    const n = "string" == typeof t ? t : void 0,
      o = "string" != typeof t ? { captureContext: t } : void 0;
    return r.getCurrentScope().captureMessage(e, n, o);
  }),
  (t.captureSession = function (e = !1) {
    e ? g() : m();
  }),
  (t.close = async function (e) {
    const t = r.getClient();
    return t
      ? t.close(e)
      : (o.DEBUG_BUILD &&
          a.debug.warn(
            "Cannot flush events and disable SDK. No client defined.",
          ),
        Promise.resolve(!1));
  }),
  (t.endSession = g),
  (t.flush = async function (e) {
    const t = r.getClient();
    return t
      ? t.flush(e)
      : (o.DEBUG_BUILD &&
          a.debug.warn("Cannot flush events. No client defined."),
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
      s = i.makeSession({
        user: n,
        ...(o && { userAgent: o }),
        ...e,
      }),
      a = t.getSession();
    return (
      "ok" === a?.status && i.updateSession(a, { status: "exited" }),
      g(),
      t.setSession(s),
      s
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
      let s;
      try {
        s = t();
      } catch (e) {
        throw (i("error"), e);
      }
      return c.isThenable(s)
        ? s.then(
            (e) => (i("ok"), e),
            (e) => {
              throw (i("error"), e);
            },
          )
        : (i("ok"), s);
    }
    return r.withIsolationScope(() =>
      n?.isolateTrace ? s.startNewTrace(o) : o(),
    );
  });
