// vendor/module-85263.js — webpack module 85263
// params: (e, t, n) = (module, exports, require)
"use strict";
t.usePersistedDeviceId = function (e, t) {
  const [n, o] = (0, r.useState)(null),
    i = (0, r.useRef)(!1);
  return (
    (0, r.useEffect)(() => {
      (async () => {
        const t = await e();
        i.current || o(t);
      })();
    }, []),
    [
      n,
      (e) => {
        (i.current = !0), o(e), t(e);
      },
      (e) => {
        (i.current = !0), o(e);
      },
    ]
  );
};
const r = n(14041 /* vendor/module-14041 */);
