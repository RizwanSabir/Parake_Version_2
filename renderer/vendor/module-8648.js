// vendor/module-8648.js — webpack module 8648
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.focusElementWithVisible = c),
  (t.useLabel = function (e = {}) {
    const {
        id: t,
        fallbackControlId: n,
        native: u = !1,
        setLabelId: d,
        focusControl: p,
      } = e,
      { controlId: f, setLabelId: h } = (0, l.useLabelableContext)(),
      m = (0, i.useStableCallback)((e) => {
        h(e), d?.(e);
      }),
      g = (0, s.useRegisteredLabelId)(t, m),
      y = f ?? n;
    function v(e) {
      const t = (0, a.getTarget)(e.nativeEvent);
      t?.closest("button,input,select,textarea") ||
        (!e.defaultPrevented && e.detail > 1 && e.preventDefault(),
        u ||
          (function (e) {
            if (p) return void p(e, y);
            if (!y) return;
            const t = (0, o.ownerDocument)(e.currentTarget).getElementById(y);
            (0, r.isHTMLElement)(t) && c(t);
          })(e));
    }
    return u
      ? { id: g, htmlFor: y ?? void 0, onMouseDown: v }
      : {
          id: g,
          onClick: v,
          onPointerDown(e) {
            e.preventDefault();
          },
        };
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(854 /* vendor/module-854 */),
  i = n(4674 /* vendor/module-4674 */),
  a = n(65200 /* vendor/module-65200 */),
  s = n(56419 /* vendor/module-56419 */),
  l = n(83470 /* vendor/module-83470 */);
function c(e) {
  e.focus({ focusVisible: !0 });
}
