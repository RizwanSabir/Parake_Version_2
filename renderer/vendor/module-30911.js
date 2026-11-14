// vendor/module-30911.js — webpack module 30911
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useStore = function (e, t, n, r, o) {
    return c(e, t, n, r, o);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(58139 /* vendor/module-58139 */),
  a = n(37121 /* vendor/module-37121 */),
  s = n(83708 /* vendor/module-83708 */),
  l = n(39083 /* vendor/module-39083 */);
const c = (0, s.isReactVersionAtLeast)(19)
  ? function (e, t, n, r, a) {
      const s = (0, l.getInstance)();
      if (!s)
        return (function (e, t, n, r, a) {
          const s = o.useCallback(
            () => t(e.getSnapshot(), n, r, a),
            [e, t, n, r, a],
          );
          return (0, i.useSyncExternalStore)(e.subscribe, s, s);
        })(e, t, n, r, a);
      const c = s.syncIndex;
      let u;
      return (
        (s.syncIndex += 1),
        s.didInitialize
          ? ((u = s.syncHooks[c]),
            (u.store === e &&
              u.selector === t &&
              Object.is(u.a1, n) &&
              Object.is(u.a2, r) &&
              Object.is(u.a3, a)) ||
              (u.store !== e && (s.didChangeStore = !0),
              (u.store = e),
              (u.selector = t),
              (u.a1 = n),
              (u.a2 = r),
              (u.a3 = a),
              (u.value = t(e.getSnapshot(), n, r, a))))
          : ((u = {
              store: e,
              selector: t,
              a1: n,
              a2: r,
              a3: a,
              value: t(e.getSnapshot(), n, r, a),
            }),
            s.syncHooks.push(u)),
        u.value
      );
    }
  : function (e, t, n, r, o) {
      return (0, a.useSyncExternalStoreWithSelector)(
        e.subscribe,
        e.getSnapshot,
        e.getSnapshot,
        (e) => t(e, n, r, o),
      );
    };
(0, l.register)({
  before(e) {
    (e.syncIndex = 0),
      e.didInitialize ||
        ((e.syncTick = 1),
        (e.syncHooks = []),
        (e.didChangeStore = !0),
        (e.getSnapshot = () => {
          let t = !1;
          for (let n = 0; n < e.syncHooks.length; n += 1) {
            const r = e.syncHooks[n],
              o = r.selector(r.store.state, r.a1, r.a2, r.a3);
            Object.is(r.value, o) || ((t = !0), (r.value = o));
          }
          return t && (e.syncTick += 1), e.syncTick;
        }));
  },
  after(e) {
    e.syncHooks.length > 0 &&
      (e.didChangeStore &&
        ((e.didChangeStore = !1),
        (e.subscribe = (t) => {
          const n = new Set();
          for (const t of e.syncHooks) n.add(t.store);
          const r = [];
          for (const e of n) r.push(e.subscribe(t));
          return () => {
            for (const e of r) e();
          };
        })),
      (0, i.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
  },
});
