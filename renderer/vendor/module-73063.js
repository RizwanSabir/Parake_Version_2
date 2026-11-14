// vendor/module-73063.js — webpack module 73063
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useCompositeItem = function (e = {}) {
    const {
        highlightItemOnHover: t,
        highlightedIndex: n,
        onHighlightedIndexChange: r,
      } = (0, a.useCompositeRootContext)(),
      { ref: l, index: c } = (0, s.useCompositeListItem)(e),
      u = n === c,
      d = o.useRef(null),
      p = (0, i.useMergedRefs)(l, d);
    return {
      compositeProps: {
        tabIndex: u ? 0 : -1,
        onFocus() {
          r(c);
        },
        onMouseMove() {
          const e = d.current;
          if (!t || !e) return;
          const n = e.hasAttribute("disabled") || "true" === e.ariaDisabled;
          u || n || e.focus();
        },
      },
      compositeRef: p,
      index: c,
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(12772 /* vendor/module-12772 */),
  a = n(35749 /* vendor/module-35749 */),
  s = n(33770 /* vendor/module-33770 */);
