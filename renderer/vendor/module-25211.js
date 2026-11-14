// vendor/module-25211.js — webpack module 25211
// params: (t, e, s) = (module, exports, require)
s.d(e, { P: () => a });
var i = s(8679 /* vendor/module-8679 */),
  n = s(27166 /* vendor/module-27166 */),
  r = s(79456 /* vendor/module-79456 */),
  a = (0, r.K)((t, e, s, r) => {
    t.attr("class", s);
    const { width: a, height: l, x: c, y: h } = o(t, e);
    (0, i.a$)(t, l, a, r);
    const d = u(c, h, a, l, e);
    t.attr("viewBox", d),
      n.R.debug(`viewBox configured: ${d} with padding: ${e}`);
  }, "setupViewPortForSVG"),
  o = (0, r.K)((t, e) => {
    const s = t.node()?.getBBox() || { width: 0, height: 0, x: 0, y: 0 };
    return {
      width: s.width + 2 * e,
      height: s.height + 2 * e,
      x: s.x,
      y: s.y,
    };
  }, "calculateDimensionsWithPadding"),
  u = (0, r.K)(
    (t, e, s, i, n) => `${t - n} ${e - n} ${s} ${i}`,
    "createViewBox",
  );
