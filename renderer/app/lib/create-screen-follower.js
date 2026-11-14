// app/lib/create-screen-follower.js — webpack module 33368
// params: (e, t, n) = (module, exports, require)
"use strict";
t.createScreenFollower = function ({ setHidden: e, isDragging: t, redraw: n }) {
  let u = 0,
    d = !1,
    p = null;
  const f = (t) => {
    (u += t ? 1 : -1), (0, r.flushSync)(() => e(u > 0));
  };
  async function h(e, t, n) {
    let r = !1;
    try {
      let o = await c(!1);
      if (o?.onOtherScreen && e()) {
        if ((f(!0), (r = !0), await s(), !e())) return;
        o = await c(!0);
      }
      if ((t(o), o?.moved)) {
        for (let e = 0; e < 30 && !l(o); e++) await a();
        n?.(), await s();
      }
    } finally {
      r && f(!1);
    }
  }
  return {
    follow: function e(r) {
      if (((p = r), d || !i(r, (0, o.windowSize)()))) return;
      d = !0;
      const a = r;
      h(
        t,
        (e) => {
          e?.moved && t() && ((p = e.cursor), n(e.cursor, e.windowSize));
        },
        () => {
          p && t() && n(p, (0, o.windowSize)());
        },
      )
        .catch(() => {})
        .finally(() => {
          d = !1;
          const n = p;
          null !== n &&
            (n.x !== a.x || n.y !== a.y) &&
            t() &&
            window.requestAnimationFrame(() => e(n));
        });
    },
    landing: function (e) {
      const t = (0, o.windowSize)();
      if (!d && !i(e, t)) return null;
      const n = { cursor: e, windowSize: t };
      return new Promise((e) => {
        h(
          () => !0,
          (t) => e(t ? { cursor: t.cursor, windowSize: t.windowSize } : n),
        ).catch(() => e(n));
      });
    },
  };
};
const r = n(43144 /* vendor/module-43144 */),
  o = n(31855 /* vendor/module-31855 */);
function i(e, t) {
  return e.x < 0 || e.y < 0 || e.x >= t.width || e.y >= t.height;
}
function a() {
  return new Promise((e) => window.requestAnimationFrame(() => e()));
}
async function s() {
  await a(), await a();
}
function l(e) {
  return (
    Math.abs(window.screenX - e.windowOrigin.x) < 1 &&
    Math.abs(window.screenY - e.windowOrigin.y) < 1 &&
    Math.abs(window.innerWidth - e.windowSize.width) < 1.5 &&
    Math.abs(window.innerHeight - e.windowSize.height) < 1.5
  );
}
function c(e) {
  return window.electron.ipcRendererProxy.invoke(
    "renderer/move-to-screen-at-cursor",
    e,
  );
}
