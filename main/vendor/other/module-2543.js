// vendor/other/module-2543.js — webpack module 2543
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = "auto.firebase.orchestrion.functions",
  s = "__sentryFirebaseWrapped";
t.wrapFunctionsRegistration = function (e, t) {
  const n = e.arguments;
  if (!Array.isArray(n) || 0 === n.length) return;
  const a = "function" == typeof n[0] ? 0 : 1,
    c = n[a];
  "function" != typeof c ||
    c[s] ||
    (n[a] = (function (e, t) {
      const n = async function (...n) {
        const s =
            process.env.FUNCTION_TARGET || process.env.K_SERVICE || "unknown",
          a = {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: i,
            [r.FAAS_NAME]: s,
            [r.FAAS_TRIGGER]: t,
            "faas.provider": "firebase",
          };
        return (
          process.env.GCLOUD_PROJECT &&
            (a["cloud.project_id"] = process.env.GCLOUD_PROJECT),
          process.env.EVENTARC_CLOUD_EVENT_SOURCE &&
            (a["cloud.event_source"] = process.env.EVENTARC_CLOUD_EVENT_SOURCE),
          o.startSpanManual(
            {
              name: `firebase.function.${t}`,
              op: "function.firebase",
              kind: o.SPAN_KIND.SERVER,
              attributes: a,
            },
            async (t) => {
              try {
                const r = await e.apply(this, n);
                return t.end(), r;
              } catch (e) {
                throw (
                  (t.setStatus({ code: o.SPAN_STATUS_ERROR }),
                  o.captureException(e, {
                    mechanism: { type: i, handled: !1 },
                  }),
                  t.end(),
                  await o.flush(2e3),
                  e)
                );
              }
            },
          )
        );
      };
      return (n[s] = !0), n;
    })(c, t));
};
