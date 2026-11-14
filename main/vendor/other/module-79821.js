// vendor/other/module-79821.js — webpack module 79821
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(39053 /* vendor/other/module-39053 */);
t.showReportDialog = function (e = {}) {
  const t = i.WINDOW.document,
    n = t?.head || t?.body;
  if (!n)
    return void (
      o.DEBUG_BUILD &&
      r.debug.error("[showReportDialog] Global document not defined")
    );
  const s = r.getCurrentScope(),
    a = r.getClient(),
    c = a?.getDsn();
  if (!c)
    return void (
      o.DEBUG_BUILD && r.debug.error("[showReportDialog] DSN not configured")
    );
  const u = {
      ...e,
      user: { ...s.getUser(), ...e.user },
      eventId: e.eventId || r.lastEventId(),
    },
    l = i.WINDOW.document.createElement("script");
  (l.async = !0),
    (l.crossOrigin = "anonymous"),
    (l.src = r.getReportDialogEndpoint(c, u));
  const { onLoad: d, onClose: p } = u;
  if ((d && (l.onload = d), p)) {
    const e = (t) => {
      if ("__sentry_reportdialog_closed__" === t.data)
        try {
          p();
        } finally {
          i.WINDOW.removeEventListener("message", e);
        }
    };
    i.WINDOW.addEventListener("message", e);
  }
  n.appendChild(l);
};
