// vendor/other/module-52860.js — webpack module 52860
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = n(76687 /* vendor/other/module-76687 */),
  u = n(2543 /* vendor/other/module-2543 */),
  l = [
    {
      channel: s.CHANNELS.FIREBASE_FIRESTORE_ADD_DOC,
      spanName: "addDoc",
      useParent: !1,
    },
    {
      channel: s.CHANNELS.FIREBASE_FIRESTORE_GET_DOCS,
      spanName: "getDocs",
      useParent: !1,
    },
    {
      channel: s.CHANNELS.FIREBASE_FIRESTORE_SET_DOC,
      spanName: "setDoc",
      useParent: !0,
    },
    {
      channel: s.CHANNELS.FIREBASE_FIRESTORE_DELETE_DOC,
      spanName: "deleteDoc",
      useParent: !0,
    },
  ],
  d = [
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_HTTP_REQUEST,
      triggerType: "http.request",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_HTTP_CALL,
      triggerType: "http.call",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_CREATED,
      triggerType: "firestore.document.created",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_UPDATED,
      triggerType: "firestore.document.updated",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_DELETED,
      triggerType: "firestore.document.deleted",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_WRITTEN,
      triggerType: "firestore.document.written",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_SCHEDULER,
      triggerType: "scheduler.scheduled",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_FINALIZED,
      triggerType: "storage.object.finalized",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_ARCHIVED,
      triggerType: "storage.object.archived",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_DELETED,
      triggerType: "storage.object.deleted",
    },
    {
      channel: s.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_METADATA_UPDATED,
      triggerType: "storage.object.metadataUpdated",
    },
  ],
  p = () => {};
function f(e) {
  try {
    return e();
  } catch (e) {
    return void (
      i.DEBUG_BUILD &&
      o.debug.warn("[orchestrion:firebase] error handling channel event", e)
    );
  }
}
t.instrumentFirebase = function () {
  for (const { channel: e, spanName: t, useParent: n } of l)
    a.bindTracingChannelToSpan(r.tracingChannel(e), (e) =>
      f(() => {
        const r = e.arguments[0];
        if (!r) return;
        const o = (n && r.parent) || r;
        return c.startFirestoreSpan(t, o);
      }),
    );
  for (const { channel: e, triggerType: t } of d)
    r.tracingChannel(e).subscribe({
      start: (e) => {
        f(() => u.wrapFunctionsRegistration(e, t));
      },
      end: p,
      asyncStart: p,
      asyncEnd: p,
      error: p,
    });
};
