// vendor/module-43976.js — webpack module 43976
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useScrollLock = function (e = !0, t = null) {
    (0, s.useIsoLayoutEffect)(() => {
      if (e) return h.acquire(t);
    }, [e, t]);
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(23504 /* vendor/module-23504 */),
  i = n(87177 /* vendor/module-87177 */),
  a = n(854 /* vendor/module-854 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(54807 /* vendor/module-54807 */),
  c = n(57569 /* vendor/module-57569 */),
  u = n(38340 /* vendor/module-38340 */);
let d = {},
  p = {},
  f = "";
const h = new (class {
  lockCount = 0;
  restore = null;
  timeoutLock = l.Timeout.create();
  timeoutUnlock = l.Timeout.create();
  acquire(e) {
    return (
      (this.lockCount += 1),
      1 === this.lockCount &&
        null === this.restore &&
        this.timeoutLock.start(0, () => this.lock(e)),
      this.release
    );
  }
  release = () => {
    (this.lockCount -= 1),
      0 === this.lockCount &&
        this.restore &&
        this.timeoutUnlock.start(0, this.unlock);
  };
  unlock = () => {
    0 === this.lockCount &&
      this.restore &&
      (this.restore?.(), (this.restore = null));
  };
  lock(e) {
    if (0 === this.lockCount || null !== this.restore) return;
    const t = (0, a.ownerDocument)(e).documentElement,
      n = (0, a.ownerWindow)(t).getComputedStyle(t).overflowY;
    if ("hidden" === n || "clip" === n) return void (this.restore = u.NOOP);
    const s =
      i.platform.os.ios ||
      !(function (e) {
        if ("undefined" == typeof document) return !1;
        const t = (0, a.ownerDocument)(e);
        return (
          (0, a.ownerWindow)(t).innerWidth - t.documentElement.clientWidth > 0
        );
      })(e);
    this.restore = s
      ? (function (e) {
          const t = (0, a.ownerDocument)(e),
            n = t.documentElement,
            o = t.body,
            i = (0, r.isOverflowElement)(n) ? n : o,
            s = {
              overflowY: i.style.overflowY,
              overflowX: i.style.overflowX,
            };
          return (
            Object.assign(i.style, {
              overflowY: "hidden",
              overflowX: "hidden",
            }),
            () => {
              Object.assign(i.style, s);
            }
          );
        })(e)
      : (function (e) {
          const t = (0, a.ownerDocument)(e),
            n = t.documentElement,
            s = t.body,
            l = (0, a.ownerWindow)(n);
          let u = 0,
            h = 0,
            m = !1;
          const g = c.AnimationFrame.create();
          if (i.platform.engine.webkit && 1 !== (l.visualViewport?.scale ?? 1))
            return () => {};
          function y() {
            const t = l.getComputedStyle(n),
              o = l.getComputedStyle(s),
              i = (t.scrollbarGutter || "").includes("both-edges")
                ? "stable both-edges"
                : "stable";
            (u = n.scrollTop),
              (h = n.scrollLeft),
              (d = {
                scrollbarGutter: n.style.scrollbarGutter,
                overflowY: n.style.overflowY,
                overflowX: n.style.overflowX,
              }),
              (f = n.style.scrollBehavior),
              (p = {
                position: s.style.position,
                height: s.style.height,
                width: s.style.width,
                boxSizing: s.style.boxSizing,
                overflowY: s.style.overflowY,
                overflowX: s.style.overflowX,
                scrollBehavior: s.style.scrollBehavior,
              });
            const c = n.scrollHeight > n.clientHeight,
              g = n.scrollWidth > n.clientWidth,
              y = "scroll" === t.overflowY || "scroll" === o.overflowY,
              v = "scroll" === t.overflowX || "scroll" === o.overflowX,
              b = Math.max(0, l.innerWidth - s.clientWidth),
              S = Math.max(0, l.innerHeight - s.clientHeight),
              _ = parseFloat(o.marginTop) + parseFloat(o.marginBottom),
              x = parseFloat(o.marginLeft) + parseFloat(o.marginRight),
              w = (0, r.isOverflowElement)(n) ? n : s;
            if (
              ((m = (function (e) {
                if (
                  "undefined" == typeof CSS ||
                  !CSS.supports ||
                  !CSS.supports("scrollbar-gutter", "stable") ||
                  "undefined" == typeof document
                )
                  return !1;
                const t = (0, a.ownerDocument)(e),
                  n = t.documentElement,
                  o = t.body,
                  i = (0, r.isOverflowElement)(n) ? n : o,
                  s = i.style.overflowY,
                  l = n.style.scrollbarGutter;
                (n.style.scrollbarGutter = "stable"),
                  (i.style.overflowY = "scroll");
                const c = i.offsetWidth;
                i.style.overflowY = "hidden";
                const u = i.offsetWidth;
                return (
                  (i.style.overflowY = s),
                  (n.style.scrollbarGutter = l),
                  c === u
                );
              })(e)),
              m)
            )
              return (
                (n.style.scrollbarGutter = i),
                (w.style.overflowY = "hidden"),
                void (w.style.overflowX = "hidden")
              );
            Object.assign(n.style, {
              scrollbarGutter: i,
              overflowY: "hidden",
              overflowX: "hidden",
            }),
              (c || y) && (n.style.overflowY = "scroll"),
              (g || v) && (n.style.overflowX = "scroll"),
              Object.assign(s.style, {
                position: "relative",
                height: _ || S ? `calc(100dvh - ${_ + S}px)` : "100dvh",
                width: x || b ? `calc(100vw - ${x + b}px)` : "100vw",
                boxSizing: "border-box",
                overflow: "hidden",
                scrollBehavior: "unset",
              }),
              (s.scrollTop = u),
              (s.scrollLeft = h),
              n.setAttribute("data-base-ui-scroll-locked", ""),
              (n.style.scrollBehavior = "unset");
          }
          function v() {
            Object.assign(n.style, d),
              Object.assign(s.style, p),
              m ||
                ((n.scrollTop = u),
                (n.scrollLeft = h),
                n.removeAttribute("data-base-ui-scroll-locked"),
                (n.style.scrollBehavior = f));
          }
          y();
          const b = (0, o.addEventListener)(l, "resize", function () {
            v(), g.request(y);
          });
          return () => {
            g.cancel(), v(), "function" == typeof l.removeEventListener && b();
          };
        })(e);
  }
})();
