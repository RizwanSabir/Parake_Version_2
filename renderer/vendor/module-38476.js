// vendor/module-38476.js — webpack module 38476
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ClosePartProvider = function (e) {
    const { value: t, children: n } = e;
    return (0, s.jsx)(l.Provider, { value: t, children: n });
  }),
  (t.useClosePartCount = function () {
    const [e, t] = o.useState(0),
      n = (0, a.useStableCallback)(
        () => (
          t((e) => e + 1),
          () => {
            t((e) => Math.max(0, e - 1));
          }
        ),
      );
    return {
      context: o.useMemo(() => ({ register: n }), [n]),
      hasClosePart: e > 0,
    };
  }),
  (t.useClosePartRegistration = function () {
    const e = o.useContext(l);
    (0, i.useIsoLayoutEffect)(() => e?.register(), [e]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(31085 /* vendor/module-31085 */);
const l = o.createContext(void 0);
