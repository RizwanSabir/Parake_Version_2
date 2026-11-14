// vendor/module-19623.js — webpack module 19623
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useInstructionsDraft = function (e) {
  const t = (0, r.c)(19),
    n = (0, o.useSelector)(e.store, s),
    [l, c] = (0, i.useState)("");
  let u;
  t[0] !== n ? ((u = n.trim()), (t[0] = n), (t[1] = u)) : (u = t[1]);
  const d = u.length,
    p = d > 0,
    f = d > a.limits.extraContext.max,
    h = l.length > 0;
  let m, g, y, v, b;
  return (
    t[2] !== l || t[3] !== n
      ? ((m = l !== n && l.trim().length <= a.limits.extraContext.max),
        (t[2] = l),
        (t[3] = n),
        (t[4] = m))
      : (m = t[4]),
    t[5] !== n ? ((g = () => c(n)), (t[5] = n), (t[6] = g)) : (g = t[6]),
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((y = () => c("")), (t[7] = y))
      : (y = t[7]),
    t[8] !== l || t[9] !== e
      ? ((v = () => e.setFieldValue("extraContext", l)),
        (t[8] = l),
        (t[9] = e),
        (t[10] = v))
      : (v = t[10]),
    t[11] !== l ||
    t[12] !== p ||
    t[13] !== f ||
    t[14] !== h ||
    t[15] !== m ||
    t[16] !== g ||
    t[17] !== v
      ? ((b = {
          draft: l,
          setDraft: c,
          hasInstructions: p,
          isSavedOverLimit: f,
          canClear: h,
          canSave: m,
          begin: g,
          clear: y,
          save: v,
        }),
        (t[11] = l),
        (t[12] = p),
        (t[13] = f),
        (t[14] = h),
        (t[15] = m),
        (t[16] = g),
        (t[17] = v),
        (t[18] = b))
      : (b = t[18]),
    b
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(51366 /* vendor/module-51366 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(45482 /* vendor/module-45482 */);
function s(e) {
  return e.values.extraContext;
}
