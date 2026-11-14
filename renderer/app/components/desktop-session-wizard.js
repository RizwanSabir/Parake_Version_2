// app/components/desktop-session-wizard.js — webpack module 78254
// params: (e, t, n) = (module, exports, require)
"use strict";
t.DesktopSessionWizard = function (e) {
  const t = (0, o.c)(23),
    {
      ref: n,
      form: a,
      title: v,
      submitLabel: S,
      submitBlockedReason: _,
      hasSavedSelection: k,
      modelSelectionSurface: C,
      mock: I,
      onMockChange: A,
      disabled: O,
      isSubmitting: R,
      onCancel: M,
    } = e,
    P = (0, g.useBrand)(),
    { apiConfig: N } = (0, m.useApiConfig)(),
    D = (0, b.useAssetUrl)(),
    { resolvedTheme: j } = (0, l.useTheme)(),
    L = "dark" === j ? "dark" : void 0;
  let F, U, B, z;
  return (
    t[0] !== N.url || t[1] !== L
      ? ((F = (e) => (0, d.buildCompanyLogoUrl)(e, N.url, L)),
        (t[0] = N.url),
        (t[1] = L),
        (t[2] = F))
      : (F = t[2]),
    t[3] !== D
      ? ((U = (e, t) => {
          const n = void 0 === t ? 16 : t;
          return (0, r.jsx)("img", {
            src: D(h.aiModelLogoMap[e]),
            alt: h.aiModelNameMap[e],
            width: n,
            height: n,
            className: (0, u.cn)("shrink-0", (0, c.aiModelLogoClassName)(e)),
          });
        }),
        (t[3] = D),
        (t[4] = U))
      : (U = t[4]),
    t[5] !== P.id
      ? ((B =
          "codeboss" === P.id
            ? void 0
            : (0, r.jsx)(f.Button, {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "w-full",
                render: (0, r.jsxs)("a", {
                  href: (0, p.getVideoWatchUrl)("everydayCalls"),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [(0, r.jsx)(i.Video, {}), "View tutorial"],
                }),
              })),
        (t[5] = P.id),
        (t[6] = B))
      : (B = t[6]),
    t[7] !== O ||
    t[8] !== a ||
    t[9] !== k ||
    t[10] !== R ||
    t[11] !== I ||
    t[12] !== C ||
    t[13] !== M ||
    t[14] !== A ||
    t[15] !== n ||
    t[16] !== _ ||
    t[17] !== S ||
    t[18] !== F ||
    t[19] !== U ||
    t[20] !== B ||
    t[21] !== v
      ? ((z = (0, r.jsx)(s.CreateSessionWizard, {
          ref: n,
          form: a,
          title: v,
          mock: I,
          onMockChange: A,
          disabled: O,
          isSubmitting: R,
          submitLabel: S,
          submitBlockedReason: _,
          hasSavedSelection: k,
          modelSelectionSurface: C,
          onCancel: M,
          onNotice: T,
          getLogoUrl: F,
          renderModelLogo: U,
          loadPreviews: y.loadCategoryPreviews,
          renderResumeSelector: E,
          renderDocumentSelector: w,
          railActions: B,
          renderFrame: x,
        })),
        (t[7] = O),
        (t[8] = a),
        (t[9] = k),
        (t[10] = R),
        (t[11] = I),
        (t[12] = C),
        (t[13] = M),
        (t[14] = A),
        (t[15] = n),
        (t[16] = _),
        (t[17] = S),
        (t[18] = F),
        (t[19] = U),
        (t[20] = B),
        (t[21] = v),
        (t[22] = z))
      : (z = t[22]),
    z
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(78909 /* app/components/on-success-78909 */),
  l = n(97867 /* app/components/theme-provider */),
  c = n(68058 /* vendor/module-68058 */),
  u = n(29113 /* vendor/module-29113 */),
  d = n(313 /* vendor/module-313 */),
  p = n(27376 /* app/lib/get-video-watch-url */),
  f = n(99683 /* vendor/module-99683 */),
  h = n(88623 /* vendor/module-88623 */),
  m = n(8932 /* app/components/api-config-provider */),
  g = n(74920 /* app/lib/apply-brand-attribute */),
  y = n(13466 /* vendor/module-13466 */),
  v = n(44825 /* vendor/module-44825 */),
  b = n(36651 /* app/hooks/use-asset-url */),
  S = n(91379 /* app/components/call-document-selector */),
  _ = n(91753 /* app/components/resume-selector */);
function x(e) {
  const { rail: t, pane: n, screenOpen: o } = e;
  return (0, r.jsxs)("div", {
    className: "grid min-h-0 flex-1",
    style: {
      gridTemplateColumns: o
        ? "minmax(0, 1fr)"
        : `minmax(0, 14rem) ${v.SHELL_STEP_PANE_WIDTH}px`,
    },
    children: [
      t &&
        (0, r.jsx)("div", {
          className: "relative overflow-hidden",
          children: (0, r.jsx)("div", {
            className: "absolute inset-y-0 right-0 flex w-56",
            children: t,
          }),
        }),
      n,
    ],
  });
}
function w(e) {
  const { selectedDocumentIds: t, onChange: n, disabled: o, sheet: i } = e;
  return (0, r.jsx)(S.CallDocumentSelector, {
    selectedDocumentIds: t,
    onChange: n,
    disabled: o,
    sheet: i,
  });
}
function E(e) {
  const { selectedResumeId: t, onResumeChange: n, disabled: o, sheet: i } = e;
  return (0, r.jsx)(_.ResumeSelector, {
    selectedResumeId: t,
    onResumeChange: n,
    disabled: o,
    sheet: i,
  });
}
function T(e) {
  const { type: t, message: n } = e;
  return a.toast[t](n);
}
