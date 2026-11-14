// vendor/module-46263.js — webpack module 46263
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAudioChunkCombiner = function (e) {
  const t = (0, r.c)(10);
  let n;
  t[0] !== e
    ? ((n = void 0 === e ? {} : e), (t[0] = e), (t[1] = n))
    : (n = t[1]);
  const { chunkCount: a } = n,
    s = void 0 === a ? 5 : a;
  let l;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((l = []), (t[2] = l))
    : (l = t[2]);
  const c = (0, o.useRef)(l);
  let u;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = function () {
        c.current = [];
      }),
      (t[3] = u))
    : (u = t[3]);
  const d = u;
  let p;
  t[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((p = function (e) {
        const t = e.reduce(i, 0),
          n = new Float32Array(t);
        let r = 0;
        for (const t of e) n.set(t, r), (r += t.length);
        return n;
      }),
      (t[4] = p))
    : (p = t[4]);
  const f = p;
  let h;
  t[5] !== s
    ? ((h = function (e, t) {
        if ((c.current.push(e), c.current.length < s)) return;
        const n = c.current;
        (c.current = []), t(f(n));
      }),
      (t[5] = s),
      (t[6] = h))
    : (h = t[6]);
  const m = h;
  let g;
  t[7] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = function (e) {
        if (0 === c.current.length) return;
        const t = c.current;
        (c.current = []), e(f(t));
      }),
      (t[7] = g))
    : (g = t[7]);
  const y = g;
  let v;
  return (
    t[8] !== m
      ? ((v = { combine: m, flush: y, reset: d }), (t[8] = m), (t[9] = v))
      : (v = t[9]),
    v
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
function i(e, t) {
  return e + t.length;
}
