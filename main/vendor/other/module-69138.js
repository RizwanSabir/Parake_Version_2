// vendor/other/module-69138.js — webpack module 69138
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(60261 /* vendor/other/module-60261 */),
  i = n(96137 /* vendor/other/module-96137 */);
function s(e) {
  return function (t) {
    return function (...n) {
      const r = "function" == typeof n[0] ? n[0] : n[1],
        o = "function" == typeof n[0] ? void 0 : n[0];
      if (!r) return t.call(this, ...n);
      const s = async function (...t) {
        const n =
            process.env.FUNCTION_TARGET || process.env.K_SERVICE || "unknown",
          o = {
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
              "auto.firebase.otel.functions",
            "faas.name": n,
            "faas.trigger": e,
            "faas.provider": "firebase",
          };
        return (
          process.env.GCLOUD_PROJECT &&
            (o["cloud.project_id"] = process.env.GCLOUD_PROJECT),
          process.env.EVENTARC_CLOUD_EVENT_SOURCE &&
            (o["cloud.event_source"] = process.env.EVENTARC_CLOUD_EVENT_SOURCE),
          i.startSpanManual(
            {
              name: `firebase.function.${e}`,
              op: "http.request",
              kind: i.SPAN_KIND.SERVER,
              attributes: o,
            },
            async (e) => {
              try {
                const n = await r.apply(this, t);
                return e.end(), n;
              } catch (t) {
                throw (
                  (e.setStatus({ code: i.SPAN_STATUS_ERROR }),
                  i.captureException(t, {
                    mechanism: {
                      type: "auto.firebase.otel.functions",
                      handled: !1,
                    },
                  }),
                  e.end(),
                  await i.flush(2e3),
                  t)
                );
              }
            },
          )
        );
      };
      return o ? t.call(this, o, s) : t.call(this, s);
    };
  };
}
function a(e, t) {
  const n = [
    "onSchedule",
    "onRequest",
    "onCall",
    "onObjectFinalized",
    "onObjectArchived",
    "onObjectDeleted",
    "onObjectMetadataUpdated",
    "onDocumentCreated",
    "onDocumentUpdated",
    "onDocumentDeleted",
    "onDocumentWritten",
    "onDocumentCreatedWithAuthContext",
    "onDocumentUpdatedWithAuthContext",
    "onDocumentDeletedWithAuthContext",
    "onDocumentWrittenWithAuthContext",
  ];
  for (const o of n) r.isWrapped(e[o]) && t(e, o);
  return e;
}
(t.patchFunctions = function (e, t, n) {
  const i = new r.InstrumentationNodeModuleDefinition("firebase-functions", e);
  return (
    [
      {
        name: "firebase-functions/lib/v2/providers/https.js",
        triggerType: "function",
      },
      {
        name: "firebase-functions/lib/v2/providers/firestore.js",
        triggerType: "firestore",
      },
      {
        name: "firebase-functions/lib/v2/providers/scheduler.js",
        triggerType: "scheduler",
      },
      {
        name: "firebase-functions/lib/v2/storage.js",
        triggerType: "storage",
      },
    ].forEach(({ name: r, triggerType: c }) => {
      i.files.push(
        new o.InstrumentationNodeModuleFile(
          r,
          e,
          (e) =>
            (function (e, t, n, r) {
              switch ((a(e, n), r)) {
                case "function":
                  t(e, "onRequest", s("http.request")),
                    t(e, "onCall", s("http.call"));
                  break;
                case "firestore":
                  t(e, "onDocumentCreated", s("firestore.document.created")),
                    t(e, "onDocumentUpdated", s("firestore.document.updated")),
                    t(e, "onDocumentDeleted", s("firestore.document.deleted")),
                    t(e, "onDocumentWritten", s("firestore.document.written")),
                    t(
                      e,
                      "onDocumentCreatedWithAuthContext",
                      s("firestore.document.created"),
                    ),
                    t(
                      e,
                      "onDocumentUpdatedWithAuthContext",
                      s("firestore.document.updated"),
                    ),
                    t(
                      e,
                      "onDocumentDeletedWithAuthContext",
                      s("firestore.document.deleted"),
                    ),
                    t(
                      e,
                      "onDocumentWrittenWithAuthContext",
                      s("firestore.document.written"),
                    );
                  break;
                case "scheduler":
                  t(e, "onSchedule", s("scheduler.scheduled"));
                  break;
                case "storage":
                  t(e, "onObjectFinalized", s("storage.object.finalized")),
                    t(e, "onObjectArchived", s("storage.object.archived")),
                    t(e, "onObjectDeleted", s("storage.object.deleted")),
                    t(
                      e,
                      "onObjectMetadataUpdated",
                      s("storage.object.metadataUpdated"),
                    );
              }
              return e;
            })(e, t, n, c),
          (e) => a(e, n),
        ),
      );
    }),
    i
  );
}),
  (t.patchV2Functions = s);
