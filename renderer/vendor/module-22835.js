// vendor/module-22835.js — webpack module 22835
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useAriaLabelledBy = function (e, t, n, r = !0, s) {
    const [l, c] = o.useState(),
      u = (0, a.useBaseUiId)(s ? `${s}-label` : void 0),
      d = e ?? t ?? l;
    return (
      (0, i.useIsoLayoutEffect)(() => {
        const o =
          e || t || !r
            ? void 0
            : (function (e, t) {
                const n = (function (e) {
                  if (!e) return;
                  const t = e.parentElement;
                  if (t && "LABEL" === t.tagName) return t;
                  const n = e.id;
                  if (n) {
                    const t = e.nextElementSibling;
                    if (t && t.htmlFor === n) return t;
                  }
                  const r = e.labels;
                  return r && r[0];
                })(e);
                if (n) return !n.id && t && (n.id = t), n.id || void 0;
              })(n.current, u);
        l !== o && c(o);
      }),
      d
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(33115 /* vendor/module-33115 */);
