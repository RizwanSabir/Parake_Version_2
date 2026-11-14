// vendor/other/module-80162.js — webpack module 80162
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromPromise,
  o = n(53690 /* vendor/other/module-53690 */),
  i = n(16928 /* external/path */),
  s = n(68777 /* vendor/other/module-68777 */),
  a = n(12565 /* vendor/other/module-12565 */),
  c = r(async function (e) {
    let t;
    try {
      t = await o.readdir(e);
    } catch {
      return s.mkdirs(e);
    }
    return Promise.all(t.map((t) => a.remove(i.join(e, t))));
  });
function u(e) {
  let t;
  try {
    t = o.readdirSync(e);
  } catch {
    return s.mkdirsSync(e);
  }
  t.forEach((t) => {
    (t = i.join(e, t)), a.removeSync(t);
  });
}
e.exports = {
  emptyDirSync: u,
  emptydirSync: u,
  emptyDir: c,
  emptydir: c,
};
