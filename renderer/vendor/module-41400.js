// vendor/module-41400.js — webpack module 41400
// params: (e, t, n) = (module, exports, require)
t.useLogoSize = function () {
  const e = (0, r.c)(11),
    [t, n] = (0, o.useState)(i.DEFAULT_LOGO_SCALE_INDEX);
  let l;
  e[0] !== t ? ((l = (0, i.logoScale)(t)), (e[0] = t), (e[1] = l)) : (l = e[1]);
  const c = t < i.LOGO_SCALES.length - 1,
    u = t > 0,
    d = t > i.DEFAULT_LOGO_SCALE_INDEX;
  let p, f, h, m;
  return (
    e[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = () => n(s)),
        (f = () => n(a)),
        (h = () => n(i.DEFAULT_LOGO_SCALE_INDEX)),
        (e[2] = p),
        (e[3] = f),
        (e[4] = h))
      : ((p = e[2]), (f = e[3]), (h = e[4])),
    e[5] !== t || e[6] !== l || e[7] !== c || e[8] !== u || e[9] !== d
      ? ((m = {
          scaleIndex: t,
          scale: l,
          canEnlarge: c,
          canShrink: u,
          isEnlarged: d,
          enlarge: p,
          shrink: f,
          reset: h,
        }),
        (e[5] = t),
        (e[6] = l),
        (e[7] = c),
        (e[8] = u),
        (e[9] = d),
        (e[10] = m))
      : (m = e[10]),
    m
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(92446 /* vendor/module-92446 */);
function a(e) {
  return (0, i.clampLogoScaleIndex)(e - 1);
}
function s(e) {
  return (0, i.clampLogoScaleIndex)(e + 1);
}
