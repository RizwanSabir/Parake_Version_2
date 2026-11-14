// vendor/module-77944.js — webpack module 77944
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useFocusableWhenDisabled = function (e) {
    const {
        focusableWhenDisabled: t,
        disabled: n,
        composite: r = !1,
        tabIndex: i = 0,
        isNativeButton: a,
      } = e,
      s = r && !1 !== t,
      l = r && !1 === t;
    return {
      props: o.useMemo(() => {
        const e = {
          onKeyDown(e) {
            n && t && "Tab" !== e.key && e.preventDefault();
          },
        };
        return (
          r || ((e.tabIndex = i), !a && n && (e.tabIndex = t ? i : -1)),
          ((a && (t || s)) || (!a && n)) && (e["aria-disabled"] = n),
          !a || (t && !l) || (e.disabled = n),
          e
        );
      }, [r, n, t, s, l, a, i]),
    };
  });
var o = r(n(14041 /* vendor/module-14041 */));
