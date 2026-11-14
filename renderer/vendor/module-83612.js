// vendor/module-83612.js — webpack module 83612
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.REGULAR_ITEM = void 0),
  (t.useMenuItem = function (e) {
    const {
        closeOnClick: t,
        disabled: n = !1,
        highlighted: r,
        id: c,
        store: u,
        typingRef: d = u.context.typingRef,
        nativeButton: p,
        itemMetadata: f,
        nodeId: h,
      } = e,
      m = u.useState("disabled"),
      g = n || m,
      y = o.useRef(null),
      { getButtonProps: v, buttonRef: b } = (0, a.useButton)({
        disabled: g,
        focusableWhenDisabled: !0,
        native: p,
        composite: !0,
      }),
      S = (0, l.useMenuItemCommonProps)({
        closeOnClick: t,
        highlighted: r,
        id: c,
        nodeId: h,
        store: u,
        typingRef: d,
        itemRef: y,
        itemMetadata: f,
      }),
      _ = o.useCallback(
        (e) =>
          (0, s.mergeProps)(
            S,
            {
              onMouseEnter() {
                "submenu-trigger" === f.type && f.setActive();
              },
            },
            e,
            v,
          ),
        [S, v, f],
      ),
      x = (0, i.useMergedRefs)(y, b);
    return o.useMemo(() => ({ getItemProps: _, itemRef: x }), [_, x]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(12772 /* vendor/module-12772 */),
  a = n(63917 /* vendor/module-63917 */),
  s = n(55327 /* vendor/module-55327 */),
  l = n(69067 /* vendor/module-69067 */);
t.REGULAR_ITEM = { type: "regular-item" };
