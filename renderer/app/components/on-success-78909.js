// app/components/on-success-78909.js — webpack module 78909
// params: (e, t, n) = (module, exports, require)
t.CreateSessionWizard = function (e) {
  const t = (0, o.c)(89),
    {
      ref: n,
      form: S,
      mock: _,
      onMockChange: x,
      mockLocked: w,
      disabled: E,
      isSubmitting: T,
      submitLabel: k,
      title: C,
      submitBlockedReason: I,
      hasSavedSelection: A,
      modelSelectionSurface: O,
      onCancel: R,
      onNotice: M,
      getLogoUrl: P,
      renderModelLogo: N,
      loadPreviews: D,
      renderResumeSelector: j,
      renderDocumentSelector: L,
      railActions: F,
      renderTitle: U,
      renderFrame: B,
      paneClassName: z,
    } = e,
    H = void 0 !== E && E,
    V = void 0 !== T && T,
    q = void 0 !== A && A,
    G = void 0 === O ? "create_form" : O,
    W = void 0 === B ? b : B,
    $ = (0, i.useRef)(null),
    [Y, K] = (0, i.useState)(0),
    Z = C ?? "Create session",
    {
      drill: Q,
      direction: J,
      screenReturns: X,
      travel: ee,
    } = (0, p.useCreateSessionDrillOwner)(U),
    te = null !== Q.screen,
    {
      data: ne,
      getLanguageLabel: re,
      isLoading: oe,
      error: ie,
    } = (0, a.useTranscriptionLanguages)();
  let ae;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((ae = { limit: "all" }), (t[0] = ae))
    : (ae = t[0]);
  const {
      data: se,
      isLoading: le,
      error: ce,
    } = u.api.callDocument.getMany.useQuery(ae),
    { data: ue } = u.api.user.get.useQuery();
  let de;
  t[1] !== M
    ? ((de = {
        onSuccess: () =>
          M({
            type: "success",
            message: "Interview post scraped successfully.",
          }),
      }),
      (t[1] = M),
      (t[2] = de))
    : (de = t[2]);
  const pe = u.api.callSession.scrapeJobPost.scrape.useMutation(de),
    fe = se?.data;
  let he, me, ge, ye, ve;
  t[3] !== ce || t[4] !== q
    ? ((he = q
        ? { hasSavedSelection: !0 }
        : { hasSavedSelection: !1, hasLibraryError: !!ce }),
      (t[3] = ce),
      (t[4] = q),
      (t[5] = he))
    : (he = t[5]),
    t[6] !== S || t[7] !== fe || t[8] !== he
      ? ((me = { form: S, documents: fe, ...he }),
        (t[6] = S),
        (t[7] = fe),
        (t[8] = he),
        (t[9] = me))
      : (me = t[9]),
    (0, s.useSelectedDocumentsSync)(me),
    t[10] !== pe.isPending || t[11] !== pe.mutateAsync
      ? ((ge = {
          mutateAsync: pe.mutateAsync,
          isPending: pe.isPending,
        }),
        (t[10] = pe.isPending),
        (t[11] = pe.mutateAsync),
        (t[12] = ge))
      : (ge = t[12]),
    t[13] !== M
      ? ((ye = (e) => M({ type: "error", message: e })),
        (t[13] = M),
        (t[14] = ye))
      : (ye = t[14]),
    t[15] !== S || t[16] !== ge || t[17] !== ye
      ? ((ve = { form: S, scrapeJobPost: ge, onPasteError: ye }),
        (t[15] = S),
        (t[16] = ge),
        (t[17] = ye),
        (t[18] = ve))
      : (ve = t[18]);
  const be = (0, g.useJobPostScrape)(ve),
    Se = (0, y.useSessionModeFields)(S);
  let _e;
  t[19] !== H ||
  t[20] !== S ||
  t[21] !== le ||
  t[22] !== _ ||
  t[23] !== be.isScraping
    ? ((_e = {
        form: S,
        disabled: H,
        isScraping: be.isScraping,
        isLoadingDocuments: le,
        mock: _,
      }),
      (t[19] = H),
      (t[20] = S),
      (t[21] = le),
      (t[22] = _),
      (t[23] = be.isScraping),
      (t[24] = _e))
    : (_e = t[24]);
  const xe = (0, m.useCallSessionDetailsGate)(_e);
  let we, Ee, Te;
  t[25] === Symbol.for("react.memo_cache_sentinel")
    ? ((we = () => {
        $.current && ($.current.scrollTop = 0);
      }),
      (t[25] = we))
    : (we = t[25]),
    t[26] !== Y ? ((Ee = [Y]), (t[26] = Y), (t[27] = Ee)) : (Ee = t[27]),
    (0, i.useEffect)(we, Ee),
    t[28] !== be || t[29] !== Y || t[30] !== ee
      ? ((Te = (e) => {
          ee(e > Y ? "forward" : "back"), be.settleCompany(), K(e);
        }),
        (t[28] = be),
        (t[29] = Y),
        (t[30] = ee),
        (t[31] = Te))
      : (Te = t[31]);
  const ke = Te;
  let Ce, Ie;
  t[32] !== ke
    ? ((Ce = () => ({ goToStep: ke })), (t[32] = ke), (t[33] = Ce))
    : (Ce = t[33]),
    (0, i.useImperativeHandle)(n, Ce),
    t[34] !== xe ||
    t[35] !== ke ||
    t[36] !== V ||
    t[37] !== R ||
    t[38] !== F ||
    t[39] !== U ||
    t[40] !== te ||
    t[41] !== Y ||
    t[42] !== Z
      ? ((Ie = te
          ? null
          : (0, r.jsx)(h.CreateSessionSidebar, {
              title: Z,
              description:
                "Enter the details & select what you need for this call.",
              steps: v,
              activeStep: Y,
              maxReachableStep: xe.canProceed ? v.length - 1 : Y,
              onStepSelect: V ? void 0 : ke,
              onBack: Y > 0 && !V ? () => ke(Y - 1) : void 0,
              blockedReason: xe.blockedReason,
              onClose: V ? void 0 : R,
              renderTitle: U,
              actions: F,
            })),
        (t[34] = xe),
        (t[35] = ke),
        (t[36] = V),
        (t[37] = R),
        (t[38] = F),
        (t[39] = U),
        (t[40] = te),
        (t[41] = Y),
        (t[42] = Z),
        (t[43] = Ie))
      : (Ie = t[43]);
  const Ae = Ie;
  let Oe;
  t[44] !== z
    ? ((Oe = (0, l.cn)(
        "flex min-h-0 flex-1 flex-col overflow-hidden p-8 pb-6",
        z,
      )),
      (t[44] = z),
      (t[45] = Oe))
    : (Oe = t[45]);
  const Re = `${Y}-${X}`,
    Me = "forward" === J ? "animate-drill-forward" : "animate-drill-back";
  let Pe, Ne, De, je;
  t[46] !== Me
    ? ((Pe = (0, l.cn)("flex min-h-0 flex-1 flex-col gap-6 max-sm:gap-0", Me)),
      (t[46] = Me),
      (t[47] = Pe))
    : (Pe = t[47]),
    t[48] !== xe ||
    t[49] !== H ||
    t[50] !== S ||
    t[51] !== re ||
    t[52] !== P ||
    t[53] !== ke ||
    t[54] !== oe ||
    t[55] !== V ||
    t[56] !== ne ||
    t[57] !== ie ||
    t[58] !== D ||
    t[59] !== _ ||
    t[60] !== w ||
    t[61] !== G ||
    t[62] !== R ||
    t[63] !== x ||
    t[64] !== L ||
    t[65] !== N ||
    t[66] !== j ||
    t[67] !== be ||
    t[68] !== Y ||
    t[69] !== I ||
    t[70] !== k ||
    t[71] !== Se ||
    t[72] !== ue
      ? ((Ne =
          0 === Y
            ? (0, r.jsx)(d.CreateSessionDetailsStep, {
                form: S,
                mock: _,
                disabled: H,
                scrape: be,
                onModeChange: Se,
                onMockChange: x,
                mockLocked: w,
                searchCompanies: u.api.callSession.searchCompanies,
                getLogoUrl: P,
                gate: xe,
                renderResumeSelector: j,
                renderDocumentSelector: L,
                onCancel: R,
                onNext: () => ke(1),
              })
            : (0, r.jsx)(f.CreateSessionPreferencesStep, {
                form: S,
                disabled: H || V,
                isMock: !!_,
                questionBankOptedOut: !!ue?.questionBankOptedOutAt,
                questionBankVisible: (0, c.canBrowseQuestionBank)(ue),
                modelSelectionSurface: G,
                languages: ne,
                getLanguageLabel: re,
                isLoadingLanguages: oe,
                languagesError: !!ie,
                renderModelLogo: N,
                loadPreviews: D,
                onBack: () => ke(0),
                onCancel: R,
                submitLabel: k,
                isSubmitting: V,
                submitBlockedReason: I,
              })),
        (t[48] = xe),
        (t[49] = H),
        (t[50] = S),
        (t[51] = re),
        (t[52] = P),
        (t[53] = ke),
        (t[54] = oe),
        (t[55] = V),
        (t[56] = ne),
        (t[57] = ie),
        (t[58] = D),
        (t[59] = _),
        (t[60] = w),
        (t[61] = G),
        (t[62] = R),
        (t[63] = x),
        (t[64] = L),
        (t[65] = N),
        (t[66] = j),
        (t[67] = be),
        (t[68] = Y),
        (t[69] = I),
        (t[70] = k),
        (t[71] = Se),
        (t[72] = ue),
        (t[73] = Ne))
      : (Ne = t[73]),
    t[74] !== Re || t[75] !== Pe || t[76] !== Ne
      ? ((De = (0, r.jsx)("div", { className: Pe, children: Ne }, Re)),
        (t[74] = Re),
        (t[75] = Pe),
        (t[76] = Ne),
        (t[77] = De))
      : (De = t[77]),
    t[78] !== Oe || t[79] !== De
      ? ((je = (0, r.jsx)("div", {
          ref: $,
          className: Oe,
          children: De,
        })),
        (t[78] = Oe),
        (t[79] = De),
        (t[80] = je))
      : (je = t[80]);
  const Le = je;
  let Fe, Ue;
  return (
    t[81] !== Le || t[82] !== Ae || t[83] !== W || t[84] !== te
      ? ((Fe = W({ rail: Ae, pane: Le, screenOpen: te })),
        (t[81] = Le),
        (t[82] = Ae),
        (t[83] = W),
        (t[84] = te),
        (t[85] = Fe))
      : (Fe = t[85]),
    t[86] !== Q || t[87] !== Fe
      ? ((Ue = (0, r.jsx)(p.CreateSessionDrillProvider, {
          drill: Q,
          children: Fe,
        })),
        (t[86] = Q),
        (t[87] = Fe),
        (t[88] = Ue))
      : (Ue = t[88]),
    Ue
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(94422 /* vendor/module-94422 */),
  s = n(41458 /* vendor/module-41458 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(4249 /* vendor/module-4249 */),
  u = n(44189 /* vendor/module-44189 */),
  d = n(3214 /* app/components/on-click-3214 */),
  p = n(42665 /* app/components/on-open */),
  f = n(86870 /* app/components/create-session-preferences-step */),
  h = n(79254 /* app/components/on-click-79254 */),
  m = n(70258 /* vendor/module-70258 */),
  g = n(13046 /* vendor/module-13046 */),
  y = n(53793 /* vendor/module-53793 */),
  v = ["Details", "Preferences"],
  b = ({ rail: e, pane: t }) =>
    (0, r.jsxs)("div", {
      className: "flex min-h-0 flex-1 flex-col sm:flex-row",
      children: [e, t],
    });
