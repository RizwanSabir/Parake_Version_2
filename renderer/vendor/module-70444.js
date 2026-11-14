// vendor/module-70444.js — webpack module 70444
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.FocusGuard = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(87177 /* vendor/module-87177 */),
  s = n(38602 /* vendor/module-38602 */),
  l = n(31085 /* vendor/module-31085 */);
t.FocusGuard = o.forwardRef(function (e, t) {
  const [n, r] = o.useState();
  (0, i.useIsoLayoutEffect)(() => {
    a.platform.screenReader.voiceOver &&
      a.platform.engine.webkit &&
      r("button");
  }, []);
  const c = { tabIndex: 0, role: n };
  return (0, l.jsx)("span", {
    ...e,
    ref: t,
    style: s.visuallyHidden,
    "aria-hidden": !n || void 0,
    ...c,
    "data-base-ui-focus-guard": "",
  });
});
