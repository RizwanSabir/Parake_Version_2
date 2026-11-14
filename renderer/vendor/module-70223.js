// vendor/module-70223.js — webpack module 70223
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useMixedToggleClickHandler = function (e) {
    const { enabled: t = !0, mouseDownAction: n, open: r } = e,
      s = o.useRef(!1);
    return o.useMemo(
      () =>
        t
          ? {
              onMouseDown: (e) => {
                (("open" === n && !r) || ("close" === n && r)) &&
                  ((s.current = !0),
                  (0, i.ownerDocument)(e.currentTarget).addEventListener(
                    "click",
                    () => {
                      s.current = !1;
                    },
                    { once: !0 },
                  ));
              },
              onClick: (e) => {
                s.current && ((s.current = !1), e.preventBaseUIHandler());
              },
            }
          : a.EMPTY_OBJECT,
      [t, n, r],
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(854 /* vendor/module-854 */),
  a = n(38340 /* vendor/module-38340 */);
