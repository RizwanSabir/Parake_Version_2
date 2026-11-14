// vendor/sentry/session-tracking.js — webpack module 66383
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(10342 /* vendor/sentry/electron-constants */),
  a = n(25141 /* vendor/other/module-25141 */);
let c, u, l;
function d() {
  return (
    c ||
      ((c = new a.Store(s.getSentryCachePath(), "session", void 0)),
      (u = c.get().then((e) => (e ? r.makeSession(e) : e)))),
    c
  );
}
function p(e) {
  const t = { ...e };
  return delete t.toJSON, t;
}
async function f() {
  l && clearInterval(l);
  const e = r.getIsolationScope().getSession();
  e
    ? "ok" === e.status
      ? (r.debug.log("Ending session"), r.endSession())
      : r.debug.log("Session was already ended")
    : r.debug.log("No session"),
    await d().clear(),
    await o.flush(2e3);
}
const h = async (e) => {
  if (!e.defaultPrevented) {
    r.debug.log("[Session] Exit Handler"), e.preventDefault();
    try {
      await f();
    } catch (e) {
      r.debug.warn("[Session] Error ending session:", e);
    }
    i.app.exit();
  }
};
(t.checkPreviousSession = async function (e) {
  const t = r.getClient(),
    n = await u;
  if (n && t) {
    if ("ok" !== n.status) return void (u = void 0);
    const o = e ? "crashed" : "abnormal";
    r.debug.log(`Found previous ${o} session`);
    const i = r.makeSession(n);
    r.updateSession(i, {
      status: o,
      errors: (i.errors || 0) + 1,
      release: n.attrs?.release,
      environment: n.attrs?.environment,
    }),
      t.sendSession(i),
      (u = void 0);
  }
}),
  (t.endSession = f),
  (t.endSessionOnExit = function () {
    i.app.on("before-quit", () => {
      i.app.removeListener("will-quit", h), i.app.on("will-quit", h);
    });
  }),
  (t.previousSessionWasAbnormal = async function () {
    const e = r.getClient(),
      t = await u;
    if (t && e) {
      if ("ok" !== t.status) return void (u = void 0);
      r.debug.log("Found previous abnormal session");
      const n = r.makeSession(t);
      r.updateSession(n, {
        status: "abnormal",
        errors: (n.errors || 0) + 1,
        release: t.attrs?.release,
        environment: t.attrs?.environment,
      }),
        e.sendSession(n),
        (u = void 0);
    }
  }),
  (t.restorePreviousSession = function (e) {
    r.getIsolationScope().setSession(e);
  }),
  (t.sessionAnr = function () {
    l && clearInterval(l);
    const e = r.getIsolationScope().getSession();
    e &&
      "ok" === e.status &&
      (r.debug.log("Setting session as abnormal ANR"),
      r.updateSession(e, {
        status: "abnormal",
        abnormal_mechanism: "anr_foreground",
      }),
      r.captureSession());
  }),
  (t.sessionCrashed = function () {
    l && clearInterval(l), r.debug.log("Session Crashed");
    const e = r.getIsolationScope().getSession();
    if (e)
      if ("ok" === e.status) {
        r.debug.log("Setting session as crashed");
        const t = e.errors + 1;
        r.updateSession(e, { status: "crashed", errors: t }),
          r.captureSession();
      } else r.debug.log("Session already ended");
    else r.debug.log("No session to update");
  }),
  (t.setPreviousSessionAsCurrent = async function () {
    const e = await u,
      t = r.getIsolationScope(),
      n = t.getSession();
    return (
      e && ((u = void 0), "ok" === e.status && t.setSession(r.makeSession(e))),
      n
    );
  }),
  (t.startSession = function (e) {
    const t = r.startSession();
    e && r.captureSession(),
      d()
        .set(p(t))
        .catch(() => {}),
      (l = setInterval(async () => {
        const e = r.getIsolationScope().getSession();
        "ok" === e?.status && (await d().set(p(e)));
      }, 6e4));
  }),
  (t.unreportedDuringLastSession = async function (e) {
    if (!e) return !1;
    const t = await d().getModifiedDate();
    if (void 0 === t) return !1;
    const n = t.getTime(),
      r = e.getTime();
    return r > n - 2e3 && r < n + 6e4;
  });
