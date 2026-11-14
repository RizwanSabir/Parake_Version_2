// vendor/module-45796.js — webpack module 45796
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useTransitionStatus = function (e, t = !1, n = !1) {
    const [r, s] = o.useState(e && t ? "idle" : void 0),
      [l, c] = o.useState(e);
    return (
      e && !l && (c(!0), s("starting")),
      e || !l || "ending" === r || n || s("ending"),
      e || l || "ending" !== r || s(void 0),
      (0, i.useIsoLayoutEffect)(() => {
        if (!e && l && "ending" !== r && n) {
          const e = a.AnimationFrame.request(() => {
            s("ending");
          });
          return () => {
            a.AnimationFrame.cancel(e);
          };
        }
      }, [e, l, r, n]),
      (0, i.useIsoLayoutEffect)(() => {
        if (!e || t) return;
        const n = a.AnimationFrame.request(() => {
          s(void 0);
        });
        return () => {
          a.AnimationFrame.cancel(n);
        };
      }, [t, e]),
      (0, i.useIsoLayoutEffect)(() => {
        if (!e || !t) return;
        e && l && "idle" !== r && s("starting");
        const n = a.AnimationFrame.request(() => {
          s("idle");
        });
        return () => {
          a.AnimationFrame.cancel(n);
        };
      }, [t, e, l, r]),
      { mounted: l, setMounted: c, transitionStatus: r }
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(57569 /* vendor/module-57569 */);
