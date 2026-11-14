// app/hooks/use-open-voice-profile.js — webpack module 66785
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.useOpenVoiceProfile = void 0),
  (t.VoiceProfileDialogProvider = function (e) {
    const t = (0, o.c)(12),
      { children: n } = e,
      { apiConfig: p } = (0, c.useApiConfig)(),
      [f, h] = (0, i.useState)(!1);
    let m;
    t[0] !== p.url
      ? ((m = () => (0, u.desktopVoicePlatform)(p.url)),
        (t[0] = p.url),
        (t[1] = m))
      : (m = t[1]);
    const [g] = (0, i.useState)(m);
    let y, v, b, S, _;
    return (
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = () => h(!0)), (t[2] = y))
        : (y = t[2]),
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (0, r.jsxs)(l.DialogContent, {
            size: "md",
            className: "flex flex-col gap-4",
            children: [
              (0, r.jsx)(l.DialogTitle, {
                children: "Voice profile",
              }),
              (0, r.jsx)(s.VoiceProfileSection, {}),
            ],
          })),
          (t[3] = v))
        : (v = t[3]),
      t[4] !== f
        ? ((b = (0, r.jsx)(l.Dialog, {
            open: f,
            onOpenChange: h,
            children: v,
          })),
          (t[4] = f),
          (t[5] = b))
        : (b = t[5]),
      t[6] !== n || t[7] !== b
        ? ((S = (0, r.jsxs)(d.Provider, {
            value: y,
            children: [n, b],
          })),
          (t[6] = n),
          (t[7] = b),
          (t[8] = S))
        : (S = t[8]),
      t[9] !== g || t[10] !== S
        ? ((_ = (0, r.jsx)(a.VoicePlatformProvider, {
            platform: g,
            children: S,
          })),
          (t[9] = g),
          (t[10] = S),
          (t[11] = _))
        : (_ = t[11]),
      _
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(68972 /* vendor/module-68972 */),
  s = n(55373 /* app/components/on-click-55373 */),
  l = n(98980 /* app/components/dialog */),
  c = n(8932 /* app/components/api-config-provider */),
  u = n(96364 /* app/lib/get-capture-platform */),
  d = (0, i.createContext)(() => {});
t.useOpenVoiceProfile = () => (0, i.useContext)(d);
