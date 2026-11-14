// vendor/sentry/renderer-stack-frames.js — webpack module 67838
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(7488 /* vendor/other/module-7488 */),
  a = n(10342 /* vendor/sentry/electron-constants */),
  c = r.createStackParser(
    r.nodeStackLineParser(o.createGetModuleFromFilename(i.app.getAppPath())),
  );
(t.captureRendererStackFrames = async function (e) {
  if (a.ELECTRON_MAJOR_VERSION < 34)
    throw new Error(
      "Electron >= 34 required to capture stack frames via `frame.collectJavaScriptCallStack()`",
    );
  if (e.isDestroyed()) return;
  const t = e.mainFrame,
    n = await t.collectJavaScriptCallStack();
  if (n) {
    if (!n.includes("Website owner has not opted in"))
      return s.electronRendererStackParser(n);
    r.debug.warn(
      "Could not collect renderer stack frames.\nA 'Document-Policy' header of 'include-js-call-stacks-in-crash-reports' must be set",
    );
  }
}),
  (t.defaultStackParser = c);
