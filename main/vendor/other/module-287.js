// vendor/other/module-287.js — webpack module 287
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(14052 /* vendor/other/module-14052 */);
t.logAndExitProcess = function (e) {
  r.consoleSandbox(() => {});
  const t = r.getClient();
  if (void 0 === t)
    return (
      o.DEBUG_BUILD &&
        r.debug.warn(
          "No NodeClient was defined, we are exiting the process now.",
        ),
      void global.process.exit(1)
    );
  const n = t.getOptions(),
    i = n?.shutdownTimeout && n.shutdownTimeout > 0 ? n.shutdownTimeout : 2e3;
  t.close(i).then(
    (e) => {
      e ||
        (o.DEBUG_BUILD &&
          r.debug.warn(
            "We reached the timeout for emptying the request buffer, still exiting now!",
          )),
        global.process.exit(1);
    },
    (e) => {
      o.DEBUG_BUILD && r.debug.error(e);
    },
  );
};
