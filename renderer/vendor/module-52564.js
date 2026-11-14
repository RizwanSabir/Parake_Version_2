// vendor/module-52564.js — webpack module 52564
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAutoExtendPrompt = function (e) {
  const t = (0, r.c)(26),
    {
      callSessionId: n,
      expiresAt: u,
      clockTimeLeftMs: h,
      isAutoExtendArmed: m,
      autoExtend: g,
    } = e,
    y = `${n}:${u}`;
  let v;
  t[0] !== y ? ((v = () => l.has(y)), (t[0] = y), (t[1] = v)) : (v = t[1]);
  const b = (0, o.useSyncExternalStore)(d, v, f),
    S = m && null !== h && h < s.AUTO_EXTEND_PROMPT_THRESHOLD_MS,
    _ = S && !b,
    [x, w] = (0, o.useState)(null),
    E = x === y;
  let T, k, C, I, A, O, R, M;
  return (
    t[2] !== y || t[3] !== E || t[4] !== _
      ? ((T = () => {
          if (!_ || E) return;
          const e = setTimeout(() => p(y, !0), s.AUTO_EXTEND_PROMPT_DISMISS_MS);
          return () => clearTimeout(e);
        }),
        (k = [_, E, y]),
        (t[2] = y),
        (t[3] = E),
        (t[4] = _),
        (t[5] = T),
        (t[6] = k))
      : ((T = t[5]), (k = t[6])),
    (0, o.useEffect)(T, k),
    t[7] !== g || t[8] !== y || t[9] !== n || t[10] !== _
      ? ((C = () => {
          _ &&
            !c.has(y) &&
            (c.add(y),
            (0, i.trackClientEvent)(
              a.mixpanelEvents.callSession.auto_extend_prompt_shown,
              { callSessionId: n, autoExtend: g },
            ));
        }),
        (I = [_, y, n, g]),
        (t[7] = g),
        (t[8] = y),
        (t[9] = n),
        (t[10] = _),
        (t[11] = C),
        (t[12] = I))
      : ((C = t[11]), (I = t[12])),
    (0, o.useEffect)(C, I),
    t[13] !== y
      ? ((A = () => p(y, !0)), (t[13] = y), (t[14] = A))
      : (A = t[14]),
    t[15] !== y || t[16] !== _
      ? ((O = () => {
          _ || w(y), p(y, _);
        }),
        (t[15] = y),
        (t[16] = _),
        (t[17] = O))
      : (O = t[17]),
    t[18] !== y ? ((R = () => w(y)), (t[18] = y), (t[19] = R)) : (R = t[19]),
    t[20] !== S || t[21] !== _ || t[22] !== A || t[23] !== O || t[24] !== R
      ? ((M = {
          isPromptInPlay: S,
          isPromptOpen: _,
          closePrompt: A,
          togglePrompt: O,
          holdPrompt: R,
        }),
        (t[20] = S),
        (t[21] = _),
        (t[22] = A),
        (t[23] = O),
        (t[24] = R),
        (t[25] = M))
      : (M = t[25]),
    M
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(87093 /* vendor/module-87093 */),
  a = n(22764 /* vendor/module-22764 */),
  s = n(46852 /* vendor/module-46852 */),
  l = new Set(),
  c = new Set(),
  u = new Set();
function d(e) {
  return (
    u.add(e),
    () => {
      u.delete(e);
    }
  );
}
function p(e, t) {
  t ? l.add(e) : l.delete(e), u.forEach((e) => e());
}
function f() {
  return !1;
}
