// vendor/module-94984.js — webpack module 94984
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.PREFERENCE_ICONS = void 0),
  (t.describePreference = function (e, t) {
    let n = (0, l.optionMeta)(e, t[e.field]).label;
    return (
      "responseFormat" !== e.field ||
        (t.useStarMethod && (n += " · STAR"),
        t.useFillerWords &&
          (0, u.honorsFillerWords)(t.responseFormat) &&
          (n += " · fillers")),
      n
    );
  }),
  (t.useAnswerPreferencesDraft = function (e) {
    const t = (0, r.c)(34),
      [n, o] = (0, i.useState)(e),
      [p, f] = (0, i.useState)(null),
      [h, m] = (0, i.useState)(null),
      [g, y] = (0, i.useState)(a.STAR_PREVIEW_CATEGORY),
      [v, b] = (0, i.useState)(null);
    let S;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = (e) => b(e)), (t[0] = S))
      : (S = t[0]);
    const _ = S;
    let x;
    t[1] !== p
      ? ((x = l.ANSWER_STYLE_STEPS.find((e) => e.field === p)),
        (t[1] = p),
        (t[2] = x))
      : (x = t[2]);
    const w = x;
    let E;
    t[3] !== e
      ? ((E = () => {
          o(e), f(null), m(null);
        }),
        (t[3] = e),
        (t[4] = E))
      : (E = t[4]);
    const T = E;
    let k;
    t[5] !== n
      ? ((k = (e) => {
          m(n), f(e);
        }),
        (t[5] = n),
        (t[6] = k))
      : (k = t[6]);
    const C = k;
    let I;
    t[7] !== h
      ? ((I = (e) => {
          !e && h && o(h), m(null), f(null);
        }),
        (t[7] = h),
        (t[8] = I))
      : (I = t[8]);
    const A = I;
    let O;
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((O = (e) => {
          o((t) => ({ ...t, useStarMethod: e })),
            e && y(a.STAR_PREVIEW_CATEGORY);
        }),
        (t[9] = O))
      : (O = t[9]);
    const R = O;
    let M;
    t[10] === Symbol.for("react.memo_cache_sentinel")
      ? ((M = (e) => o((t) => ({ ...t, useFillerWords: e }))), (t[10] = M))
      : (M = t[10]);
    const P = M;
    let N;
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((N = () => o(c.DEFAULT_RESPONSE_STYLE)), (t[11] = N))
      : (N = t[11]);
    const D = N;
    let j;
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((j = (e) => o((t) => ({ ...t, ...d(e) }))), (t[12] = j))
      : (j = t[12]);
    const L = j;
    let F;
    t[13] !== n
      ? ((F = (e) => {
          const t = d(e);
          return Object.keys(t).every((e) => n[e] === t[e]);
        }),
        (t[13] = n),
        (t[14] = F))
      : (F = t[14]);
    const U = F;
    let B, z, H, V;
    return (
      t[15] !== n
        ? ((B = (0, u.sameResponseStyle)(n, c.DEFAULT_RESPONSE_STYLE)),
          (t[15] = n),
          (t[16] = B))
        : (B = t[16]),
      t[17] !== n || t[18] !== e
        ? ((z = (0, u.sameResponseStyle)(n, e)),
          (t[17] = n),
          (t[18] = e),
          (t[19] = z))
        : (z = t[19]),
      t[20] !== n || t[21] !== v
        ? ((H = v ? (0, s.selectPreview)(v, n) : null),
          (t[20] = n),
          (t[21] = v),
          (t[22] = H))
        : (H = t[22]),
      t[23] !== U ||
      t[24] !== g ||
      t[25] !== n ||
      t[26] !== A ||
      t[27] !== C ||
      t[28] !== T ||
      t[29] !== w ||
      t[30] !== B ||
      t[31] !== z ||
      t[32] !== H
        ? ((V = {
            draft: n,
            setDraft: o,
            step: w,
            reset: T,
            openPreference: C,
            leavePreference: A,
            setStarMethod: R,
            setFillerWords: P,
            resetAll: D,
            resetAxis: L,
            atAxisDefaults: U,
            atDefaults: B,
            unchanged: z,
            category: g,
            setCategory: y,
            answer: H,
            handlePreviewsLoaded: _,
          }),
          (t[23] = U),
          (t[24] = g),
          (t[25] = n),
          (t[26] = A),
          (t[27] = C),
          (t[28] = T),
          (t[29] = w),
          (t[30] = B),
          (t[31] = z),
          (t[32] = H),
          (t[33] = V))
        : (V = t[33]),
      V
    );
  });
const r = n(54005 /* vendor/module-54005 */),
  o = n(87952 /* vendor/module-87952 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(62656 /* vendor/module-62656 */),
  s = n(7445 /* vendor/module-7445 */),
  l = n(57995 /* vendor/module-57995 */),
  c = n(64642 /* vendor/module-64642 */),
  u = n(37167 /* vendor/module-37167 */);
function d(e) {
  const t = { [e]: c.DEFAULT_RESPONSE_STYLE[e] };
  return "responseFormat" !== e
    ? t
    : {
        ...t,
        useStarMethod: c.DEFAULT_RESPONSE_STYLE.useStarMethod,
        useFillerWords: c.DEFAULT_RESPONSE_STYLE.useFillerWords,
      };
}
t.PREFERENCE_ICONS = {
  responseFormat: o.List,
  responseLength: o.Gauge,
  responseTone: o.Speech,
};
