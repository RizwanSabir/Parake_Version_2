// vendor/module-87782.js — webpack module 87782
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useButton = function (e = {}) {
    const {
        disabled: t = !1,
        focusableWhenDisabled: n,
        tabIndex: r = 0,
        native: i = !0,
        composite: p,
      } = e,
      f = o.useRef(null),
      h = (0, c.useCompositeRootContext)(!0),
      m = p ?? void 0 !== h,
      { props: g } = (0, u.useFocusableWhenDisabled)({
        focusableWhenDisabled: n,
        disabled: t,
        composite: m,
        tabIndex: r,
        isNativeButton: i,
      }),
      y = o.useCallback(() => {
        const e = f.current;
        d(e) &&
          m &&
          t &&
          void 0 === g.disabled &&
          e.disabled &&
          (e.disabled = !1);
      }, [t, g.disabled, m]);
    (0, s.useIsoLayoutEffect)(y, [y]);
    return {
      getButtonProps: o.useCallback(
        (e = {}) => {
          const {
            onClick: n,
            onMouseDown: r,
            onKeyUp: o,
            onKeyDown: a,
            onPointerDown: s,
            ...c
          } = e;
          return (0, l.mergeProps)(
            {
              onClick(e) {
                t ? e.preventDefault() : n?.(e);
              },
              onMouseDown(e) {
                t || r?.(e);
              },
              onKeyDown(e) {
                if (t) return;
                if (
                  ((0, l.makeEventPreventable)(e),
                  a?.(e),
                  e.baseUIHandlerPrevented)
                )
                  return;
                const r = e.target === e.currentTarget,
                  o = e.currentTarget,
                  s = d(o),
                  c = !i && ((u = o), Boolean("A" === u?.tagName && u?.href));
                var u;
                const p = r && (i ? s : !c),
                  f = "Enter" === e.key,
                  h = " " === e.key,
                  g = o.getAttribute("role"),
                  y =
                    g?.startsWith("menuitem") ||
                    "option" === g ||
                    "gridcell" === g;
                if (r && m && h) {
                  if (e.defaultPrevented && y) return;
                  return (
                    e.preventDefault(),
                    void (c || (i && s)
                      ? (o.click(), e.preventBaseUIHandler())
                      : p && (n?.(e), e.preventBaseUIHandler()))
                  );
                }
                p && (i || (!h && !f) || e.preventDefault(), !i && f && n?.(e));
              },
              onKeyUp(e) {
                t ||
                  ((0, l.makeEventPreventable)(e),
                  o?.(e),
                  e.target === e.currentTarget &&
                  i &&
                  m &&
                  d(e.currentTarget) &&
                  " " === e.key
                    ? e.preventDefault()
                    : e.baseUIHandlerPrevented ||
                      e.target !== e.currentTarget ||
                      i ||
                      m ||
                      " " !== e.key ||
                      n?.(e));
              },
              onPointerDown(e) {
                t ? e.preventDefault() : s?.(e);
              },
            },
            i ? { type: "button" } : { role: "button" },
            g,
            c,
          );
        },
        [t, g, m, i],
      ),
      buttonRef: (0, a.useStableCallback)((e) => {
        (f.current = e), y();
      }),
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(81339 /* vendor/module-81339 */),
  a = n(4674 /* vendor/module-4674 */),
  s =
    (n(71923 /* vendor/module-71923 */),
    n(23549 /* vendor/module-23549 */),
    n(57122 /* vendor/module-57122 */)),
  l = n(55327 /* vendor/module-55327 */),
  c = n(35749 /* vendor/module-35749 */),
  u = n(77944 /* vendor/module-77944 */);
function d(e) {
  return (0, i.isHTMLElement)(e) && "BUTTON" === e.tagName;
}
