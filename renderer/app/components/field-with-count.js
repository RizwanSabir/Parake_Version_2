// app/components/field-with-count.js — webpack module 7696
// params: (e, t, n) = (module, exports, require)
"use strict";
t.FieldWithCount = function (e) {
  const t = (0, o.c)(20),
    {
      label: n,
      labelEnd: l,
      value: c,
      limit: u,
      className: d,
      description: p,
      children: f,
    } = e,
    h = u.max;
  let m;
  t[0] !== f || t[1] !== h
    ? ((m = (0, i.cloneElement)(f, { maxLength: h })),
      (t[0] = f),
      (t[1] = h),
      (t[2] = m))
    : (m = t[2]);
  const g = m;
  let y, v, b, S;
  return (
    t[3] !== d
      ? ((y = (0, a.cn)("group/count flex flex-col gap-2", d)),
        (t[3] = d),
        (t[4] = y))
      : (y = t[4]),
    t[5] !== n || t[6] !== l || t[7] !== h || t[8] !== c
      ? ((v =
          void 0 !== n &&
          (0, r.jsxs)("div", {
            className: "phone:pl-1 flex items-center justify-between",
            children: [
              n,
              void 0 !== l
                ? (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, r.jsx)(s, { value: c, max: h }), l],
                  })
                : (0, r.jsx)(s, { value: c, max: h }),
            ],
          })),
        (t[5] = n),
        (t[6] = l),
        (t[7] = h),
        (t[8] = c),
        (t[9] = v))
      : (v = t[9]),
    t[10] !== n || t[11] !== h || t[12] !== c
      ? ((b =
          void 0 === n &&
          (0, r.jsx)(s, { value: c, max: h, className: "self-end" })),
        (t[10] = n),
        (t[11] = h),
        (t[12] = c),
        (t[13] = b))
      : (b = t[13]),
    t[14] !== g || t[15] !== p || t[16] !== y || t[17] !== v || t[18] !== b
      ? ((S = (0, r.jsxs)("div", {
          className: y,
          children: [v, g, p, b],
        })),
        (t[14] = g),
        (t[15] = p),
        (t[16] = y),
        (t[17] = v),
        (t[18] = b),
        (t[19] = S))
      : (S = t[19]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */);
function s(e) {
  const t = (0, o.c)(11),
    { value: n, max: i, className: s } = e;
  if (n.length < 0.9 * i) return null;
  const l = n.length >= i ? "text-error" : "text-muted-foreground";
  let c, u, d, p;
  return (
    t[0] !== s || t[1] !== l
      ? ((c = (0, a.cn)(
          "hidden text-xs leading-none tabular-nums group-focus-within/count:inline",
          l,
          s,
        )),
        (t[0] = s),
        (t[1] = l),
        (t[2] = c))
      : (c = t[2]),
    t[3] !== n.length
      ? ((u = n.length.toLocaleString("en-US")), (t[3] = n.length), (t[4] = u))
      : (u = t[4]),
    t[5] !== i
      ? ((d = i.toLocaleString("en-US")), (t[5] = i), (t[6] = d))
      : (d = t[6]),
    t[7] !== c || t[8] !== u || t[9] !== d
      ? ((p = (0, r.jsxs)("span", {
          role: "status",
          className: c,
          children: [u, "/", d],
        })),
        (t[7] = c),
        (t[8] = u),
        (t[9] = d),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
