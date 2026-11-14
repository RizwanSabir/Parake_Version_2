// vendor/other/module-88531.js — webpack module 88531
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(16240 /* vendor/other/module-16240 */),
  o = n(67697 /* vendor/other/module-67697 */),
  { mkdirpNative: i, mkdirpNativeSync: s } = n(
    41295 /* vendor/other/module-41295 */,
  ),
  { mkdirpManual: a, mkdirpManualSync: c } = n(
    48085 /* vendor/other/module-48085 */,
  ),
  { useNative: u, useNativeSync: l } = n(18862 /* vendor/other/module-18862 */),
  d = (e, t) => ((e = o(e)), (t = r(t)), u(t) ? i(e, t) : a(e, t));
(d.sync = (e, t) => ((e = o(e)), (t = r(t)), l(t) ? s(e, t) : c(e, t))),
  (d.native = (e, t) => i(o(e), r(t))),
  (d.manual = (e, t) => a(o(e), r(t))),
  (d.nativeSync = (e, t) => s(o(e), r(t))),
  (d.manualSync = (e, t) => c(o(e), r(t))),
  (e.exports = d);
