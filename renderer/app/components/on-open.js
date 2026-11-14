// app/components/on-open.js — webpack module 42665
// params: (e, t, n) = (module, exports, require)
(t.CreateSessionDrillProvider = function (e) {
  const t = (0, o.c)(3),
    { drill: n, children: i } = e;
  let s;
  return (
    t[0] !== i || t[1] !== n
      ? ((s = (0, r.jsx)(a.Provider, { value: n, children: i })),
        (t[0] = i),
        (t[1] = n),
        (t[2] = s))
      : (s = t[2]),
    s
  );
}),
  (t.useCreateSessionDrill = function () {
    const e = (0, i.useContext)(a);
    if (!e)
      throw new Error(
        "useCreateSessionDrill must be used within a CreateSessionDrillProvider",
      );
    return e;
  }),
  (t.useDrillTitleRender = function () {
    return (0, i.useContext)(a)?.renderTitle;
  }),
  (t.useCreateSessionDrillOwner = function (e) {
    const t = (0, o.c)(13),
      [n, r] = (0, i.useState)(null),
      [a, l] = (0, i.useState)("forward"),
      [c, u] = (0, i.useState)(0);
    let d;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = (e) => r(e)), (t[0] = d))
      : (d = t[0]);
    const p = d;
    let f;
    t[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = () => {
          r(null), l("back"), u(s);
        }),
        (t[1] = f))
      : (f = t[1]);
    const h = f;
    let m, g;
    t[2] !== n
      ? ((m = (e) => ({
          open: n === e,
          onOpen: () => p(e),
          onClose: h,
        })),
        (t[2] = n),
        (t[3] = m))
      : (m = t[3]),
      t[4] !== e || t[5] !== n || t[6] !== m
        ? ((g = {
            screen: n,
            open: p,
            close: h,
            slot: m,
            renderTitle: e,
          }),
          (t[4] = e),
          (t[5] = n),
          (t[6] = m),
          (t[7] = g))
        : (g = t[7]);
    const y = g;
    let v;
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((v = (e) => {
          r(null), l(e);
        }),
        (t[8] = v))
      : (v = t[8]);
    const b = v;
    let S;
    return (
      t[9] !== a || t[10] !== y || t[11] !== c
        ? ((S = {
            drill: y,
            direction: a,
            screenReturns: c,
            travel: b,
          }),
          (t[9] = a),
          (t[10] = y),
          (t[11] = c),
          (t[12] = S))
        : (S = t[12]),
      S
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = (0, i.createContext)(null);
function s(e) {
  return e + 1;
}
