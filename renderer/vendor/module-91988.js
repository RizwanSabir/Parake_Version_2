// vendor/module-91988.js — webpack module 91988
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useOpenInteractionType = function (e) {
    const [t, n] = o.useState(null),
      r = c(e, n);
    return (
      (0, l.useValueChanged)(e, (t) => {
        t && !e && n(null);
      }),
      o.useMemo(() => ({ openMethod: t, triggerProps: r }), [t, r])
    );
  }),
  (t.useOpenMethodTriggerProps = c);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(96148 /* vendor/module-96148 */),
  s = n(87177 /* vendor/module-87177 */),
  l = n(24422 /* vendor/module-24422 */);
function c(e, t) {
  const n = (0, i.useStableCallback)((n, r) => {
      ("function" == typeof e ? e() : e) ||
        t(r || (s.platform.os.ios ? "touch" : ""));
    }),
    { onClick: r, onPointerDown: l } = (0, a.useEnhancedClickHandler)(n);
  return o.useMemo(() => ({ onClick: r, onPointerDown: l }), [r, l]);
}
