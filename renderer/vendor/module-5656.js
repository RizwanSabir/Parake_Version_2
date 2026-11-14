// vendor/module-5656.js — webpack module 5656
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useRequestAnimationFrameBatch = function (e) {
  const t = (0, r.c)(6),
    n = (0, o.useRef)(e);
  let a, s;
  t[0] !== e
    ? ((a = () => {
        n.current = e;
      }),
      (t[0] = e),
      (t[1] = a))
    : (a = t[1]),
    (0, o.useLayoutEffect)(a),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((s = []), (t[2] = s))
      : (s = t[2]);
  const l = (0, o.useRef)(s),
    c = (0, o.useRef)(null);
  let u;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
    const e = () => {
      c.current = null;
      const e = l.current;
      (l.current = []), 0 !== e.length && n.current((t) => e.reduce(i, t));
    };
    (u = (t) => {
      l.current.push(t),
        null === c.current && (c.current = requestAnimationFrame(e));
    }),
      (t[3] = u);
  } else u = t[3];
  const d = u;
  let p, f;
  return (
    t[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = () => () => {
          null !== c.current && cancelAnimationFrame(c.current),
            (l.current = []);
        }),
        (f = []),
        (t[4] = p),
        (t[5] = f))
      : ((p = t[4]), (f = t[5])),
    (0, o.useEffect)(p, f),
    d
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
function i(e, t) {
  return t(e);
}
