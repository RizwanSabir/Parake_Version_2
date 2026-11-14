// vendor/other/module-26776.js — webpack module 26776
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(15343 /* vendor/other/module-15343 */),
  i = "sentry-trace",
  s = "baggage",
  a = [i, s];
(t.MAX_MESSAGE_ATTRIBUTES = 10),
  (t.addPropagationFieldsToAttributeNames = function (e = []) {
    return r.uniq([...e, ...a]);
  }),
  (t.extractPropagationHeaders = function (e) {
    const t = e.MessageAttributes ?? {},
      n = t[i]?.StringValue ?? t[i]?.Value;
    if (n)
      return {
        sentryTrace: n,
        baggage: t[s]?.StringValue ?? t[s]?.Value,
      };
  }),
  (t.injectPropagationContext = function (e, t) {
    const n = e ?? {},
      i = Object.keys(t);
    if (Object.keys(n).length + i.length <= 10)
      for (const e of i) {
        const r = t[e];
        r && (n[e] = { DataType: "String", StringValue: r });
      }
    else
      o.DEBUG_BUILD &&
        r.debug.warn(
          "[orchestrion:aws-sdk] cannot set trace propagation on SQS/SNS message due to maximum amount of MessageAttributes",
        );
    return n;
  });
