// vendor/other/module-52275.js — webpack module 52275
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */);
t.diagnoseSdkConnectivity = async function () {
  const e = r.getClient();
  if (!e) return "no-client-active";
  if (!e.getDsn()) return "no-dsn-configured";
  const t =
    e.getOptions().tunnel ||
    "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
  try {
    await r.suppressTracing(() =>
      fetch(t, {
        body: "{}",
        method: "POST",
        mode: "cors",
        credentials: "omit",
      }),
    );
  } catch {
    return "sentry-unreachable";
  }
};
