// vendor/other/module-77177.js — webpack module 77177
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = o.defineIntegration((e = {}) => ({
    name: "ChildProcess",
    setup() {
      r.channel("child_process").subscribe((t) => {
        o.isObjectLike(t) &&
          "process" in t &&
          (function (e, t) {
            let n,
              r = !1;
            e.on("spawn", () => {
              "/usr/bin/sw_vers" !== e.spawnfile
                ? ((n = { spawnfile: e.spawnfile }),
                  t.includeChildProcessArgs && (n.spawnargs = e.spawnargs))
                : (r = !0);
            })
              .on("exit", (e) => {
                r ||
                  ((r = !0),
                  null !== e &&
                    0 !== e &&
                    o.addBreadcrumb({
                      category: "child_process",
                      message: `Child process exited with code '${e}'`,
                      level: 0 === e ? "info" : "warning",
                      data: n,
                    }));
              })
              .on("error", (e) => {
                r ||
                  ((r = !0),
                  o.addBreadcrumb({
                    category: "child_process",
                    message: `Child process errored with '${e.message}'`,
                    level: "error",
                    data: n,
                  }));
              });
          })(t.process, e);
      }),
        r.channel("worker_threads").subscribe((t) => {
          o.isObjectLike(t) &&
            "worker" in t &&
            (function (e, t) {
              let n;
              e.on("online", () => {
                n = e.threadId;
              }).on("error", (e) => {
                !1 !== t.captureWorkerErrors
                  ? o.captureException(e, {
                      mechanism: {
                        type: "auto.child_process.worker_thread",
                        handled: !1,
                        data: { threadId: String(n) },
                      },
                    })
                  : o.addBreadcrumb({
                      category: "worker_thread",
                      message: `Worker thread errored with '${e.message}'`,
                      level: "error",
                      data: { threadId: n },
                    });
              });
            })(t.worker, e);
        });
    },
  }));
t.childProcessIntegration = i;
