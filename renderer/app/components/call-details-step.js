// app/components/call-details-step.js — webpack module 65575
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CallDetailsStep = function (e) {
  const t = (0, o.c)(43),
    {
      form: n,
      isLoading: a,
      isSubmitting: m,
      modelSelectionSurface: g,
      mock: C,
      submitLabel: I,
      submittingLabel: A,
      submitDisabled: O,
      submitDisabledTooltip: R,
    } = e,
    M = void 0 === I ? "Create session" : I,
    P = void 0 === A ? "Starting..." : A,
    N = void 0 !== O && O,
    D = (0, b.useBrand)(),
    j = (0, x.useAssetUrl)(),
    { apiConfig: L } = (0, v.useApiConfig)(),
    { resolvedTheme: F } = (0, l.useTheme)(),
    U = "dark" === F ? "dark" : void 0,
    {
      data: B,
      getLanguageLabel: z,
      isLoading: H,
      error: V,
    } = (0, c.useTranscriptionLanguages)();
  let q;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((q = { limit: "all" }), (t[0] = q))
    : (q = t[0]);
  const { data: G, isLoading: W } = _.api.callDocument.getMany.useQuery(q);
  let $;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? (($ = { limit: "all" }), (t[1] = $))
    : ($ = t[1]);
  const { data: Y } = _.api.resume.getMany.useQuery($),
    { data: K } = _.api.user.get.useQuery();
  let Z;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((Z = { onSuccess: k }), (t[2] = Z))
    : (Z = t[2]);
  const Q = _.api.callSession.scrapeJobPost.scrape.useMutation(Z),
    J = !!K?.questionBankOptedOutAt;
  let X, ee;
  t[3] !== K
    ? ((X = (0, f.canBrowseQuestionBank)(K)), (t[3] = K), (t[4] = X))
    : (X = t[4]),
    t[5] !== Y?.data
      ? ((ee = Y?.data ?? []), (t[5] = Y?.data), (t[6] = ee))
      : (ee = t[6]);
  const te = !!V,
    ne = G?.data;
  let re, oe, ie, ae, se, le;
  return (
    t[7] !== Q.isPending || t[8] !== Q.mutateAsync
      ? ((re = {
          mutateAsync: Q.mutateAsync,
          isPending: Q.isPending,
        }),
        (t[7] = Q.isPending),
        (t[8] = Q.mutateAsync),
        (t[9] = re))
      : (re = t[9]),
    t[10] !== L.url || t[11] !== U
      ? ((oe = (e) => (0, p.buildCompanyLogoUrl)(e, L.url, U)),
        (t[10] = L.url),
        (t[11] = U),
        (t[12] = oe))
      : (oe = t[12]),
    t[13] !== j
      ? ((ie = (e) =>
          (0, r.jsx)("img", {
            src: j(y.aiModelLogoMap[e]),
            alt: y.aiModelNameMap[e],
            width: 16,
            height: 16,
            className: (0, d.cn)("shrink-0", (0, u.aiModelLogoClassName)(e)),
          })),
        (t[13] = j),
        (t[14] = ie))
      : (ie = t[14]),
    t[15] !== D.id
      ? ((ae =
          "codeboss" === D.id
            ? void 0
            : (0, r.jsxs)("a", {
                href: (0, h.getVideoWatchUrl)("everydayCalls"),
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-muted-foreground flex cursor-pointer items-center gap-1 text-xs leading-none",
                children: [
                  (0, r.jsx)(i.Video, {
                    className: "h-3.5 w-3.5 shrink-0",
                  }),
                  "Video tutorial",
                ],
              })),
        (t[15] = D.id),
        (t[16] = ae))
      : (ae = t[16]),
    t[17] !== a ||
    t[18] !== m ||
    t[19] !== N ||
    t[20] !== R ||
    t[21] !== M ||
    t[22] !== P
      ? ((se = (e) => {
          const { canProceed: t, blockedReason: n } = e,
            o = m ? P : M;
          return (0, r.jsx)(w.StepFooter, {
            nextLabel: o,
            nextDisabled: !t || a || m || N,
            nextTooltip: n ?? (N ? R : void 0),
          });
        }),
        (t[17] = a),
        (t[18] = m),
        (t[19] = N),
        (t[20] = R),
        (t[21] = M),
        (t[22] = P),
        (t[23] = se))
      : (se = t[23]),
    t[24] !== n ||
    t[25] !== z ||
    t[26] !== a ||
    t[27] !== W ||
    t[28] !== H ||
    t[29] !== B ||
    t[30] !== C ||
    t[31] !== g ||
    t[32] !== te ||
    t[33] !== ne ||
    t[34] !== re ||
    t[35] !== oe ||
    t[36] !== ie ||
    t[37] !== ae ||
    t[38] !== se ||
    t[39] !== J ||
    t[40] !== X ||
    t[41] !== ee
      ? ((le = (0, r.jsx)(s.CallDetailsBody, {
          questionBankOptedOut: J,
          questionBankVisible: X,
          form: n,
          resumes: ee,
          disabled: a,
          modelSelectionSurface: g,
          mock: C,
          languages: B,
          getLanguageLabel: z,
          isLoadingLanguages: H,
          languagesError: te,
          documents: ne,
          isLoadingDocuments: W,
          scrapeJobPost: re,
          loadPreviews: S.loadCategoryPreviews,
          searchCompanies: _.api.callSession.searchCompanies,
          getLogoUrl: oe,
          renderModelLogo: ie,
          videoTutorial: ae,
          renderResumeSelector: T,
          renderDocumentSelector: E,
          renderFooter: se,
        })),
        (t[24] = n),
        (t[25] = z),
        (t[26] = a),
        (t[27] = W),
        (t[28] = H),
        (t[29] = B),
        (t[30] = C),
        (t[31] = g),
        (t[32] = te),
        (t[33] = ne),
        (t[34] = re),
        (t[35] = oe),
        (t[36] = ie),
        (t[37] = ae),
        (t[38] = se),
        (t[39] = J),
        (t[40] = X),
        (t[41] = ee),
        (t[42] = le))
      : (le = t[42]),
    le
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(90242 /* app/components/on-click-90242 */),
  l = n(97867 /* app/components/theme-provider */),
  c = n(94422 /* vendor/module-94422 */),
  u = n(68058 /* vendor/module-68058 */),
  d = n(29113 /* vendor/module-29113 */),
  p = n(313 /* vendor/module-313 */),
  f = n(4249 /* vendor/module-4249 */),
  h = n(27376 /* app/lib/get-video-watch-url */),
  m = n(91379 /* app/components/call-document-selector */),
  g = n(91753 /* app/components/resume-selector */),
  y = n(88623 /* vendor/module-88623 */),
  v = n(8932 /* app/components/api-config-provider */),
  b = n(74920 /* app/lib/apply-brand-attribute */),
  S = n(13466 /* vendor/module-13466 */),
  _ = n(46998 /* app/components/trpcreact-provider */),
  x = n(36651 /* app/hooks/use-asset-url */),
  w = n(51372 /* app/components/step-footer */);
function E(e) {
  const { selectedDocumentIds: t, onChange: n, disabled: o } = e;
  return (0, r.jsx)(m.CallDocumentSelector, {
    selectedDocumentIds: t,
    onChange: n,
    disabled: o,
  });
}
function T(e) {
  const { selectedResumeId: t, onResumeChange: n, disabled: o } = e;
  return (0, r.jsx)(g.ResumeSelector, {
    selectedResumeId: t,
    onResumeChange: n,
    disabled: o,
  });
}
function k() {
  a.toast.success("Interview post scraped successfully.");
}
