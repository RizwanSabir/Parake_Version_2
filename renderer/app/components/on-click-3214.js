// app/components/on-click-3214.js — webpack module 3214
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CreateSessionDetailsStep = function (e) {
  const t = (0, o.c)(81),
    {
      form: n,
      mock: w,
      disabled: E,
      scrape: T,
      onModeChange: k,
      onMockChange: C,
      mockLocked: I,
      searchCompanies: A,
      getLogoUrl: O,
      gate: R,
      renderResumeSelector: M,
      renderDocumentSelector: P,
      onCancel: N,
      onNext: D,
    } = e,
    j = void 0 !== E && E,
    L = void 0 !== I && I,
    F = (0, b.useCreateSessionDrill)(),
    [U, B] = (0, s.useState)(!1),
    [z, H] = (0, s.useState)(!1),
    V = U && R.missing.length > 0;
  let q;
  t[0] !== R || t[1] !== V
    ? ((q = (e) => V && R.missing.includes(e)),
      (t[0] = R),
      (t[1] = V),
      (t[2] = q))
    : (q = t[2]);
  const G = q,
    W = (0, i.useSelector)(n.store, x),
    {
      isScraping: $,
      pasteJobLink: Y,
      scrapeGeneration: K,
      autoSearchCompany: Z,
      settleCompany: Q,
    } = T,
    J = !0 === w?.presetLocked,
    X = !!C && !J,
    ee = X || (!w && !J),
    te = L && !w,
    ne = L && !!w,
    re = j || $ || J,
    oe = "interview" === W.sessionMode,
    ie = !0 === w?.hideDescription;
  let ae, se;
  t[3] !== n
    ? ((ae = (e) => n.setFieldValue("resumeId", e)), (t[3] = n), (t[4] = ae))
    : (ae = t[4]),
    t[5] !== j || t[6] !== F || t[7] !== M || t[8] !== ae || t[9] !== W.resumeId
      ? ((se = M({
          selectedResumeId: W.resumeId,
          onResumeChange: ae,
          disabled: j,
          sheet: F.slot("resume"),
        })),
        (t[5] = j),
        (t[6] = F),
        (t[7] = M),
        (t[8] = ae),
        (t[9] = W.resumeId),
        (t[10] = se))
      : (se = t[10]);
  const le = se;
  let ce, ue;
  t[11] !== n
    ? ((ce = (e) => {
        const { selectedIds: t, selectionMode: r } = e;
        n.setFieldValue("selectedDocumentIds", t),
          n.setFieldValue("documentSelectionMode", r);
      }),
      (t[11] = n),
      (t[12] = ce))
    : (ce = t[12]),
    t[13] !== j ||
    t[14] !== F ||
    t[15] !== P ||
    t[16] !== ce ||
    t[17] !== W.selectedDocumentIds
      ? ((ue = P({
          selectedDocumentIds: W.selectedDocumentIds,
          onChange: ce,
          disabled: j,
          sheet: F.slot("documents"),
        })),
        (t[13] = j),
        (t[14] = F),
        (t[15] = P),
        (t[16] = ce),
        (t[17] = W.selectedDocumentIds),
        (t[18] = ue))
      : (ue = t[18]);
  const de = ue;
  if ("resume" === F.screen) {
    let e;
    return (
      t[19] !== le
        ? ((e = (0, r.jsx)(r.Fragment, { children: le })),
          (t[19] = le),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  if ("documents" === F.screen) {
    let e;
    return (
      t[21] !== de
        ? ((e = (0, r.jsx)(r.Fragment, { children: de })),
          (t[21] = de),
          (t[22] = e))
        : (e = t[22]),
      e
    );
  }
  let pe;
  t[23] !== j ||
  t[24] !== $ ||
  t[25] !== w ||
  t[26] !== L ||
  t[27] !== te ||
  t[28] !== X ||
  t[29] !== C ||
  t[30] !== k ||
  t[31] !== ne ||
  t[32] !== Q ||
  t[33] !== ee ||
  t[34] !== W.sessionMode
    ? ((pe =
        ee &&
        (0, r.jsxs)("div", {
          className: "flex flex-col gap-2.5 sm:gap-2",
          children: [
            (0, r.jsx)(f.Label, { children: "Session Type" }),
            (0, r.jsx)(m.Tabs, {
              value: w ? "mock" : W.sessionMode,
              onValueChange: (e) => {
                Q(), C?.("mock" === e), k("mock" === e ? "interview" : e);
              },
              children: (0, r.jsxs)(m.TabsList, {
                className: (0, l.cn)(
                  "grid w-full",
                  X ? "grid-cols-3" : "grid-cols-2",
                ),
                children: [
                  (0, r.jsxs)(m.TabsTrigger, {
                    value: "interview",
                    className: "gap-2",
                    disabled: j || $ || ne,
                    children: [
                      (0, r.jsx)(u.BrandIcon, {
                        icon: a.BriefcaseBusiness,
                        pixelClassName: "size-3",
                      }),
                      "Interview",
                    ],
                  }),
                  (0, r.jsxs)(m.TabsTrigger, {
                    value: "regular_call",
                    className: "gap-2",
                    disabled: j || $ || ne,
                    children: [
                      (0, r.jsx)(u.BrandIcon, {
                        icon: a.PhoneCall,
                        pixelClassName: "size-3",
                      }),
                      "Regular",
                    ],
                  }),
                  X &&
                    (0, r.jsxs)(m.TabsTrigger, {
                      value: "mock",
                      className: "gap-2",
                      disabled: j || $ || te,
                      children: [
                        (0, r.jsx)(u.BrandIcon, {
                          icon: a.Bot,
                          pixelClassName: "size-3",
                        }),
                        "Mock",
                      ],
                    }),
                ],
              }),
            }),
            L &&
              X &&
              (0, r.jsx)(y.Typography, {
                className: "text-muted-foreground",
                children: w
                  ? "A mock interview that has started keeps its type."
                  : "A call that has started can no longer become a mock interview.",
              }),
          ],
        })),
      (t[23] = j),
      (t[24] = $),
      (t[25] = w),
      (t[26] = L),
      (t[27] = te),
      (t[28] = X),
      (t[29] = C),
      (t[30] = k),
      (t[31] = ne),
      (t[32] = Q),
      (t[33] = ee),
      (t[34] = W.sessionMode),
      (t[35] = pe))
    : (pe = t[35]);
  const fe = w?.presetPill;
  let he, me, ge, ye, ve, be, Se;
  t[36] !== Z ||
  t[37] !== j ||
  t[38] !== n ||
  t[39] !== O ||
  t[40] !== ie ||
  t[41] !== re ||
  t[42] !== oe ||
  t[43] !== G ||
  t[44] !== $ ||
  t[45] !== Y ||
  t[46] !== J ||
  t[47] !== K ||
  t[48] !== A ||
  t[49] !== Q ||
  t[50] !== W.companyDomain ||
  t[51] !== W.description ||
  t[52] !== W.title
    ? ((he = oe
        ? (0, r.jsxs)("div", {
            className: (0, l.cn)(
              "flex min-h-0 flex-col gap-3 sm:gap-4",
              !ie && "sm:flex-1",
            ),
            children: [
              !J &&
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, r.jsx)(y.Typography, {
                      className: "text-muted-foreground",
                      children:
                        "Have a link to the job post? Import the details automatically.",
                    }),
                    (0, r.jsxs)(p.Button, {
                      type: "button",
                      variant: "outline",
                      className: "w-full",
                      onClick: () => {
                        Y();
                      },
                      disabled: j,
                      loading: $,
                      children: [
                        (0, r.jsx)(u.BrandIcon, {
                          icon: a.Sparkles,
                          pixelClassName: "size-3",
                        }),
                        "Paste a job link",
                      ],
                    }),
                  ],
                }),
              (0, r.jsxs)("div", {
                className: (0, l.cn)(
                  "flex min-h-0 flex-col gap-4",
                  !ie && "sm:flex-1",
                ),
                children: [
                  (0, r.jsx)(d.FieldWithCount, {
                    label: (0, r.jsx)(f.Label, {
                      children: "Company",
                    }),
                    value: W.title,
                    limit: c.limits.sessionTitle,
                    children: (0, r.jsx)(
                      v.CompanyCombobox,
                      {
                        value: W.title,
                        onValueChange: (e) => {
                          Q(), n.setFieldValue("title", e);
                        },
                        onSelect: (e) => {
                          Q(),
                            n.setFieldValue("title", e.name),
                            n.setFieldValue("companyDomain", e.domain);
                        },
                        onClearDomain: () => {
                          Q(), n.setFieldValue("companyDomain", "");
                        },
                        selectedDomain: W.companyDomain,
                        getLogoUrl: O,
                        searchCompanies: A,
                        autoSearchOnMount: Z,
                        disabled: re,
                        placeholder: "Enter company name",
                        maxLength: c.limits.sessionTitle.max,
                        invalid: G("title"),
                      },
                      K,
                    ),
                  }),
                  !ie &&
                    (0, r.jsx)(d.FieldWithCount, {
                      className: "min-h-0 max-sm:flex-none sm:flex-1",
                      label: (0, r.jsx)(f.Label, {
                        children: "Job Description",
                      }),
                      value: W.description,
                      limit: c.limits.jobDescription,
                      children: (0, r.jsx)(g.Textarea, {
                        placeholder: "Enter job description",
                        value: W.description,
                        onChange: (e) =>
                          n.setFieldValue("description", e.target.value),
                        containerClassName:
                          "flex flex-col max-sm:h-21 sm:min-h-25 sm:flex-1",
                        className: "min-h-0 flex-1 resize-none",
                        disabled: re,
                        "aria-invalid": G("description") || void 0,
                        required: !0,
                      }),
                    }),
                ],
              }),
            ],
          })
        : (0, r.jsx)("div", {
            className: "flex min-h-0 flex-col gap-4 sm:flex-1",
            children: (0, r.jsx)(_.RegularCallDetails, {
              form: n,
              title: W.title,
              description: W.description,
              disabled: j,
            }),
          })),
      (t[36] = Z),
      (t[37] = j),
      (t[38] = n),
      (t[39] = O),
      (t[40] = ie),
      (t[41] = re),
      (t[42] = oe),
      (t[43] = G),
      (t[44] = $),
      (t[45] = Y),
      (t[46] = J),
      (t[47] = K),
      (t[48] = A),
      (t[49] = Q),
      (t[50] = W.companyDomain),
      (t[51] = W.description),
      (t[52] = W.title),
      (t[53] = he))
    : (he = t[53]),
    t[54] === Symbol.for("react.memo_cache_sentinel")
      ? ((me = (0, r.jsx)(y.Typography, {
          variant: "label",
          className: "text-muted-foreground",
          children: "Context",
        })),
        (t[54] = me))
      : (me = t[54]),
    t[55] !== oe || t[56] !== le
      ? ((ge = oe && (0, r.jsx)("div", { className: "min-w-0", children: le })),
        (t[55] = oe),
        (t[56] = le),
        (t[57] = ge))
      : (ge = t[57]),
    t[58] !== de
      ? ((ye = (0, r.jsx)("div", {
          className: "min-w-0",
          children: de,
        })),
        (t[58] = de),
        (t[59] = ye))
      : (ye = t[59]),
    t[60] !== ge || t[61] !== ye
      ? ((ve = (0, r.jsxs)("section", {
          className: "flex flex-col gap-6 max-sm:mt-2 sm:gap-3",
          children: [
            me,
            (0, r.jsxs)("div", {
              className: "grid gap-4 sm:grid-cols-2",
              children: [ge, ye],
            }),
          ],
        })),
        (t[60] = ge),
        (t[61] = ye),
        (t[62] = ve))
      : (ve = t[62]),
    t[63] !== he || t[64] !== ve || t[65] !== pe || t[66] !== fe
      ? ((be = (0, r.jsxs)(h.ScrollArea, {
          className: "-mr-8 min-h-0 flex-1 max-sm:-mr-4",
          focusRing: !1,
          viewportClassName: "max-sm:scroll-fade-y",
          contentClassName:
            "flex min-h-full flex-col gap-6 pr-8 max-sm:gap-4 max-sm:py-4 max-sm:pr-4",
          children: [pe, fe, he, ve],
        })),
        (t[63] = he),
        (t[64] = ve),
        (t[65] = pe),
        (t[66] = fe),
        (t[67] = be))
      : (be = t[67]),
    t[68] !== R.missing.length || t[69] !== D
      ? ((Se = () => {
          if (R.missing.length > 0) return B(!0), void H(!0);
          D();
        }),
        (t[68] = R.missing.length),
        (t[69] = D),
        (t[70] = Se))
      : (Se = t[70]);
  const _e = !!R.holdReason,
    xe = R.holdReason ?? (V ? R.missingReason : void 0),
    we = V ? z : void 0,
    Ee = V ? H : void 0;
  let Te, ke;
  return (
    t[71] !== N ||
    t[72] !== Se ||
    t[73] !== _e ||
    t[74] !== xe ||
    t[75] !== we ||
    t[76] !== Ee
      ? ((Te = (0, r.jsx)(S.CreateSessionFooter, {
          onBack: N,
          backLabel: "Cancel",
          nextLabel: "Next",
          onNext: Se,
          nextDisabled: _e,
          nextTooltip: xe,
          nextTooltipOpen: we,
          onNextTooltipOpenChange: Ee,
          hideBackOnMobile: !0,
        })),
        (t[71] = N),
        (t[72] = Se),
        (t[73] = _e),
        (t[74] = xe),
        (t[75] = we),
        (t[76] = Ee),
        (t[77] = Te))
      : (Te = t[77]),
    t[78] !== be || t[79] !== Te
      ? ((ke = (0, r.jsxs)(r.Fragment, { children: [be, Te] })),
        (t[78] = be),
        (t[79] = Te),
        (t[80] = ke))
      : (ke = t[80]),
    ke
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(51366 /* vendor/module-51366 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(14041 /* vendor/module-14041 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(45482 /* vendor/module-45482 */),
  u = n(69893 /* app/components/brand-icon */),
  d = n(7696 /* app/components/field-with-count */),
  p = n(66244 /* app/components/button-variants */),
  f = n(47856 /* app/components/label */),
  h = n(11801 /* app/components/scroll-area */),
  m = n(93432 /* app/components/tabs */),
  g = n(6826 /* app/components/textarea */),
  y = n(34483 /* app/components/typography-variants */),
  v = n(58784 /* app/components/on-click-58784 */),
  b = n(42665 /* app/components/on-open */),
  S = n(29789 /* app/components/create-session-footer */),
  _ = n(86300 /* app/components/regular-call-details */);
function x(e) {
  return {
    sessionMode: e.values.sessionMode,
    title: e.values.title,
    companyDomain: e.values.companyDomain,
    description: e.values.description,
    resumeId: e.values.resumeId,
    selectedDocumentIds: e.values.selectedDocumentIds,
    documentSelectionMode: e.values.documentSelectionMode,
  };
}
