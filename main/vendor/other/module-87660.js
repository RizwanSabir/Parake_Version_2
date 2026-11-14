// vendor/other/module-87660.js — webpack module 87660
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/other/module-58637 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(97190 /* vendor/other/module-97190 */),
  s = n(98050 /* vendor/other/module-98050 */),
  a = new WeakMap();
t.recordRequestSession = function (
  e,
  { requestIsolationScope: t, response: n, sessionFlushingDelayMS: c },
) {
  t.setSDKProcessingMetadata({ requestSession: { status: "ok" } }),
    n.once("close", () => {
      const n = t.getScopeData().sdkProcessingMetadata.requestSession;
      if (e && n) {
        o.DEBUG_BUILD &&
          r.debug.log(`Recorded request session with status: ${n.status}`);
        const t = new Date(i.safeDateNow());
        t.setSeconds(0, 0);
        const u = t.toISOString(),
          l = a.get(e),
          d = l?.[u] || { exited: 0, crashed: 0, errored: 0 };
        if (
          (d[
            { ok: "exited", crashed: "crashed", errored: "errored" }[n.status]
          ]++,
          l)
        )
          l[u] = d;
        else {
          o.DEBUG_BUILD && r.debug.log("Opened new request session aggregate.");
          const t = { [u]: d };
          a.set(e, t);
          const n = () => {
              clearTimeout(l), i(), a.delete(e);
              const n = Object.entries(t).map(([e, t]) => ({
                started: e,
                exited: t.exited,
                errored: t.errored,
                crashed: t.crashed,
              }));
              e.sendSession({ aggregates: n });
            },
            i = e.on("flush", () => {
              o.DEBUG_BUILD &&
                r.debug.log(
                  "Sending request session aggregate due to client flush",
                ),
                n();
            }),
            l = setTimeout(() => {
              o.DEBUG_BUILD &&
                r.debug.log(
                  "Sending request session aggregate due to flushing schedule",
                ),
                n();
            }, c);
          s.safeUnref(l);
        }
      }
    });
};
