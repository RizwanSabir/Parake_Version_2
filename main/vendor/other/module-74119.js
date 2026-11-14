// vendor/other/module-74119.js — webpack module 74119
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = "Invoke";
t.LambdaServiceExtension = class {
  requestPreSpanHook(e) {
    const t = e.commandInput?.FunctionName,
      n = {};
    let i;
    return (
      e.commandName === s &&
        ((n[o.FAAS_INVOKED_NAME] = t),
        (n[o.FAAS_INVOKED_PROVIDER] = "aws"),
        (i = `${t} ${s}`)),
      { spanAttributes: n, spanKind: r.SPAN_KIND.CLIENT, spanName: i }
    );
  }
  requestPostSpanHook(e, t) {
    e.commandName === s &&
      e.commandInput &&
      (e.commandInput.ClientContext = (function (e, t) {
        try {
          const n = r.getTraceData({ span: t }),
            o = e ? JSON.parse(Buffer.from(e, "base64").toString("utf8")) : {},
            s = { ...o, custom: { ...o.custom, ...n } },
            a = Buffer.from(JSON.stringify(s)).toString("base64");
          return a.length > 3583
            ? (i.DEBUG_BUILD &&
                r.debug.warn(
                  "[orchestrion:aws-sdk] cannot set trace propagation on lambda invoke parameters due to ClientContext length limitations.",
                ),
              e)
            : a;
        } catch (t) {
          return (
            i.DEBUG_BUILD &&
              r.debug.log(
                "[orchestrion:aws-sdk] failed to set trace propagation on lambda ClientContext",
                t,
              ),
            e
          );
        }
      })(e.commandInput.ClientContext, t));
  }
  responseHook(e, t) {
    e.request.commandName === s &&
      (t.setAttribute(o.FAAS_EXECUTION, e.requestId),
      e.request.region &&
        t.setAttribute(o.FAAS_INVOKED_REGION, e.request.region));
  }
};
