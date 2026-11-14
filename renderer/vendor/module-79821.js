// vendor/module-79821.js — webpack module 79821
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */);
t.showReportDialog = function (e = {}) {
  const t = i.WINDOW.document,
    n = t?.head || t?.body;
  if (!n)
    return void (
      o.DEBUG_BUILD &&
      r.debug.error("[showReportDialog] Global document not defined")
    );
  const a = r.getCurrentScope(),
    s = r.getClient(),
    l = s?.getDsn();
  if (!l)
    return void (
      o.DEBUG_BUILD && r.debug.error("[showReportDialog] DSN not configured")
    );
  const c = {
      ...e,
      user: { ...a.getUser(), ...e.user },
      eventId: e.eventId || r.lastEventId(),
    },
    u = i.WINDOW.document.createElement("script");
  (u.async = !0),
    (u.crossOrigin = "anonymous"),
    (u.src = r.getReportDialogEndpoint(l, c));
  const { onLoad: d, onClose: p } = c;
  if ((d && (u.onload = d), p)) {
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
  n.appendChild(u);
};
