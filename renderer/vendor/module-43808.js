// vendor/module-43808.js — webpack module 43808
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useAnimationsFinished = function (e, t = !1, n = !0) {
    const r = (0, i.useAnimationFrame)();
    return (0, a.useStableCallback)((i, a = null) => {
      r.cancel();
      const c = (0, s.resolveRef)(e);
      if (null == c) return;
      const u = c,
        d = () => {
          o.flushSync(i);
        };
      if (
        "function" != typeof u.getAnimations ||
        globalThis.BASE_UI_ANIMATIONS_DISABLED
      )
        i();
      else {
        if (t) {
          const e = l.TransitionStatusDataAttributes.startingStyle;
          if (!u.hasAttribute(e)) return void r.request(p);
          const t = new MutationObserver(() => {
            u.hasAttribute(e) || (t.disconnect(), p());
          });
          return (
            t.observe(u, { attributes: !0, attributeFilter: [e] }),
            void a?.addEventListener("abort", () => t.disconnect(), {
              once: !0,
            })
          );
        }
        r.request(p);
      }
      function p() {
        Promise.all(u.getAnimations().map((e) => e.finished))
          .then(() => {
            a?.aborted || d();
          })
          .catch(() => {
            if (n) return void (a?.aborted || d());
            const e = u.getAnimations();
            !a?.aborted &&
              e.length > 0 &&
              e.some((e) => e.pending || "finished" !== e.playState) &&
              p();
          });
      }
    });
  });
var o = r(n(43144 /* vendor/module-43144 */)),
  i = n(57569 /* vendor/module-57569 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(888 /* vendor/module-888 */),
  l = n(44306 /* vendor/module-44306 */);
