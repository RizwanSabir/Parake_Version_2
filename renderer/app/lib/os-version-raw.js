// app/lib/os-version-raw.js — webpack module 50272
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.osVersionRaw = t.osVersion = t.os = void 0),
  (t.useVersion = function () {
    const e = (0, r.c)(1);
    let t;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { queryKey: ["version"], queryFn: i }), (e[0] = t))
        : (t = e[0]),
      (0, o.useQuery)(t)
    );
  });
const r = n(54005 /* vendor/module-54005 */),
  o = n(24383 /* vendor/module-24383 */);
function i() {
  return window.electron.ipcRendererProxy.invoke("renderer/get-version");
}
const a = (0, n(34916 /* app/lib/get-os-data */).getOsData)();
(t.os = a.os), (t.osVersion = a.osVersion), (t.osVersionRaw = a.osVersionRaw);
