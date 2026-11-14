// vendor/module-68972.js — webpack module 68972
// params: (e, t, n) = (module, exports, require)
(t.VoicePlatformProvider = function (e) {
  const t = (0, o.c)(3),
    { platform: n, children: i } = e;
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
  (t.useVoicePlatform = function () {
    const e = (0, i.useContext)(a);
    if (!e) throw new Error("VoicePlatformProvider is missing");
    return e;
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = (0, i.createContext)(null);
