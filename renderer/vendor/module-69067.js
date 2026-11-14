// vendor/module-69067.js — webpack module 69067
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useMenuItemCommonProps = function (e) {
    const {
        closeOnClick: t,
        highlighted: n,
        id: r,
        nodeId: l,
        store: c,
        typingRef: u,
        itemRef: d,
        itemMetadata: p,
      } = e,
      { events: f } = c.useState("floatingTreeRoot"),
      h = c.useState("open"),
      m = (0, s.useContextMenuRootContext)(!0),
      g = void 0 !== m;
    return o.useMemo(
      () => ({
        id: r,
        role: "menuitem",
        tabIndex: h && n ? 0 : -1,
        onKeyDown(e) {
          " " === e.key && u?.current && e.preventDefault();
        },
        onMouseMove(e) {
          l &&
            f.emit("itemhover", {
              nodeId: l,
              target: e.currentTarget,
            });
        },
        onClick(e) {
          t &&
            f.emit("close", {
              domEvent: e,
              reason: a.REASONS.itemPress,
            });
        },
        onMouseUp(e) {
          if (m) {
            const t = m.initialCursorPointRef.current;
            if (
              ((m.initialCursorPointRef.current = null),
              g &&
                t &&
                Math.abs(e.clientX - t.x) <= 1 &&
                Math.abs(e.clientY - t.y) <= 1)
            )
              return;
            if (g && !i.platform.os.mac && 2 === e.button) return;
          }
          !d.current ||
            !c.context.allowMouseUpTriggerRef.current ||
            (g && 2 !== e.button) ||
            (p && "regular-item" !== p.type) ||
            d.current.click();
        },
      }),
      [t, n, r, f, l, h, c, u, d, m, g, p],
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(87177 /* vendor/module-87177 */),
  a = n(82063 /* vendor/module-82063 */),
  s = n(87891 /* vendor/module-87891 */);
