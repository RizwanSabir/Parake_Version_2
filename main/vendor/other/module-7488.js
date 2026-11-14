// vendor/other/module-7488.js — webpack module 7488
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(22608 /* vendor/other/module-22608 */),
  o = n(96137 /* vendor/other/module-96137 */),
  [, i] = r.chromeStackLineParser,
  [, s] = o.nodeStackLineParser();
t.electronRendererStackParser = (e, t = 0) => {
  const n = [];
  for (const r of e.split("\n").slice(t)) {
    const e = i(r),
      t = s(r);
    if (
      (e && !1 !== t?.in_app
        ? n.push(e)
        : t && (void 0 === t.module && delete t.module, n.push(t)),
      n.length >= 50)
    )
      break;
  }
  return o.stripSentryFramesAndReverse(n);
};
