// app/components/on-click-90242.js — webpack module 90242
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CallDetailsBody = function (e) {
  const t = (0, o.c)(229),
    {
      form: n,
      resumes: N,
      disabled: D,
      modelSelectionSurface: j,
      languages: L,
      getLanguageLabel: F,
      isLoadingLanguages: U,
      languagesError: B,
      documents: z,
      isLoadingDocuments: H,
      scrapeJobPost: V,
      searchCompanies: q,
      getLogoUrl: G,
      renderModelLogo: W,
      loadPreviews: $,
      title: Y,
      videoTutorial: K,
      questionBankOptedOut: Z,
      questionBankVisible: Q,
      mock: J,
      renderResumeSelector: X,
      renderDocumentSelector: ee,
      renderFooter: te,
    } = e,
    ne = void 0 !== D && D,
    re = (0, i.useSelector)(n.store, P),
    [oe, ie] = (0, s.useState)(!1),
    [ae, se] = (0, s.useState)(!1),
    [le, ce] = (0, s.useState)(!1),
    [ue, de] = (0, s.useState)(!1),
    [pe, fe] = (0, s.useState)(!1),
    he = (0, M.useInstructionsDraft)(n),
    { hasOpened: me, markOpened: ge } = (0, l.useAnswerPreferencesSeen)(),
    ye = z?.length ?? 0;
  let ve, be;
  t[0] !== z
    ? ((ve = (e) => z?.find((t) => t.id === e)?.title), (t[0] = z), (t[1] = ve))
    : (ve = t[1]),
    t[2] !== ye || t[3] !== ve || t[4] !== re.selectedDocumentIds
      ? ((be = (0, f.getDocumentSelectionLabel)({
          selectedIds: re.selectedDocumentIds,
          totalCount: ye,
          getTitleById: ve,
        })),
        (t[2] = ye),
        (t[3] = ve),
        (t[4] = re.selectedDocumentIds),
        (t[5] = be))
      : (be = t[5]);
  const Se = be;
  let _e, xe;
  t[6] !== z || t[7] !== n
    ? ((_e = { form: n, documents: z, hasSavedSelection: !0 }),
      (t[6] = z),
      (t[7] = n),
      (t[8] = _e))
    : (_e = t[8]),
    (0, c.useSelectedDocumentsSync)(_e),
    t[9] !== ne || t[10] !== n || t[11] !== H || t[12] !== oe || t[13] !== J
      ? ((xe = {
          form: n,
          disabled: ne,
          isScraping: oe,
          isLoadingDocuments: H,
          mock: J,
        }),
        (t[9] = ne),
        (t[10] = n),
        (t[11] = H),
        (t[12] = oe),
        (t[13] = J),
        (t[14] = xe))
      : (xe = t[14]);
  const we = (0, R.useCallSessionDetailsGate)(xe);
  let Ee;
  t[15] !== N || t[16] !== re.resumeId
    ? ((Ee = re.resumeId ? N.find((e) => e.id === re.resumeId) : void 0),
      (t[15] = N),
      (t[16] = re.resumeId),
      (t[17] = Ee))
    : (Ee = t[17]);
  const Te = Ee;
  let ke;
  t[18] !== he
    ? ((ke = () => {
        he.begin(), de(!0);
      }),
      (t[18] = he),
      (t[19] = ke))
    : (ke = t[19]);
  const Ce = ke;
  let Ie;
  t[20] !== ge
    ? ((Ie = () => {
        ge(), fe(!0);
      }),
      (t[20] = ge),
      (t[21] = Ie))
    : (Ie = t[21]);
  const Ae = Ie;
  let Oe;
  t[22] !== n
    ? ((Oe = (e) => {
        n.setFieldValue("responseLength", e.responseLength),
          n.setFieldValue("responseFormat", e.responseFormat),
          n.setFieldValue("responseTone", e.responseTone),
          n.setFieldValue("useStarMethod", e.useStarMethod),
          n.setFieldValue("useFillerWords", e.useFillerWords);
      }),
      (t[22] = n),
      (t[23] = Oe))
    : (Oe = t[23]);
  const Re = Oe;
  let Me;
  t[24] !== he
    ? ((Me = () => {
        he.save(), de(!1);
      }),
      (t[24] = he),
      (t[25] = Me))
    : (Me = t[25]);
  const Pe = Me,
    Ne = "interview" === re.sessionMode;
  let De;
  t[26] !== re.extraContext
    ? ((De = re.extraContext.trim()), (t[26] = re.extraContext), (t[27] = De))
    : (De = t[27]);
  const je = De.length,
    Le = je > h.limits.extraContext.max;
  let Fe;
  t[28] !== Y
    ? ((Fe =
        null != Y &&
        (0, r.jsx)(S.DialogHeader, {
          children: (0, r.jsx)(S.DialogTitle, { children: Y }),
        })),
      (t[28] = Y),
      (t[29] = Fe))
    : (Fe = t[29]);
  const Ue = J && "hidden";
  let Be, ze;
  t[30] !== Ue
    ? ((Be = (0, p.cn)("flex flex-col gap-y-2", Ue)),
      (t[30] = Ue),
      (t[31] = Be))
    : (Be = t[31]),
    t[32] === Symbol.for("react.memo_cache_sentinel")
      ? ((ze = (0, r.jsx)(y.LabelWithTooltip, {
          tooltip:
            "Choose the type of session: Interview for interviews with company context and a resume, or Regular Call for general calls.",
          children: "Session Type",
        })),
        (t[32] = ze))
      : (ze = t[32]);
  const He = "regular_call" === re.sessionMode && K;
  let Ve, qe, Ge, We, $e, Ye, Ke, Ze, Qe;
  t[33] !== He
    ? ((Ve = (0, r.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [ze, He],
      })),
      (t[33] = He),
      (t[34] = Ve))
    : (Ve = t[34]),
    t[35] !== n
      ? ((qe = (e) => n.setFieldValue("sessionMode", e)),
        (t[35] = n),
        (t[36] = qe))
      : (qe = t[36]),
    t[37] === Symbol.for("react.memo_cache_sentinel")
      ? ((Ge = (0, r.jsx)(a.Briefcase, { className: "h-4 w-4" })), (t[37] = Ge))
      : (Ge = t[37]),
    t[38] !== ne
      ? ((We = (0, r.jsxs)(x.TabsTrigger, {
          value: "interview",
          className: "flex items-center gap-2",
          disabled: ne,
          children: [Ge, "Interview"],
        })),
        (t[38] = ne),
        (t[39] = We))
      : (We = t[39]),
    t[40] === Symbol.for("react.memo_cache_sentinel")
      ? (($e = (0, r.jsx)(a.Phone, { className: "h-4 w-4" })), (t[40] = $e))
      : ($e = t[40]),
    t[41] !== ne
      ? ((Ye = (0, r.jsxs)(x.TabsTrigger, {
          value: "regular_call",
          className: "flex items-center gap-2",
          disabled: ne,
          children: [$e, "Regular Call"],
        })),
        (t[41] = ne),
        (t[42] = Ye))
      : (Ye = t[42]),
    t[43] !== We || t[44] !== Ye
      ? ((Ke = (0, r.jsxs)(x.TabsList, {
          className: "grid w-full grid-cols-2",
          children: [We, Ye],
        })),
        (t[43] = We),
        (t[44] = Ye),
        (t[45] = Ke))
      : (Ke = t[45]),
    t[46] !== qe || t[47] !== Ke || t[48] !== re.sessionMode
      ? ((Ze = (0, r.jsx)(x.Tabs, {
          value: re.sessionMode,
          onValueChange: qe,
          className: "w-full",
          children: Ke,
        })),
        (t[46] = qe),
        (t[47] = Ke),
        (t[48] = re.sessionMode),
        (t[49] = Ze))
      : (Ze = t[49]),
    t[50] !== Be || t[51] !== Ve || t[52] !== Ze
      ? ((Qe = (0, r.jsxs)("div", {
          className: Be,
          children: [Ve, Ze],
        })),
        (t[50] = Be),
        (t[51] = Ve),
        (t[52] = Ze),
        (t[53] = Qe))
      : (Qe = t[53]);
  const Je = J?.presetPill;
  let Xe, et, tt;
  t[54] !== ne ||
  t[55] !== n ||
  t[56] !== G ||
  t[57] !== Ne ||
  t[58] !== J?.hideDescription ||
  t[59] !== J?.presetLocked ||
  t[60] !== V ||
  t[61] !== q ||
  t[62] !== re.companyDomain ||
  t[63] !== re.description ||
  t[64] !== re.title
    ? ((Xe = Ne
        ? (0, r.jsx)(I.InterviewCallDetails, {
            form: n,
            title: re.title,
            description: re.description,
            onScrapingChange: ie,
            scrapeJobPost: V,
            searchCompanies: q,
            companyDomain: re.companyDomain,
            getLogoUrl: G,
            disabled: ne || J?.presetLocked,
            hideDescription: J?.hideDescription,
          })
        : (0, r.jsx)(O.RegularCallDetails, {
            form: n,
            title: re.title,
            description: re.description,
            disabled: ne,
          })),
      (t[54] = ne),
      (t[55] = n),
      (t[56] = G),
      (t[57] = Ne),
      (t[58] = J?.hideDescription),
      (t[59] = J?.presetLocked),
      (t[60] = V),
      (t[61] = q),
      (t[62] = re.companyDomain),
      (t[63] = re.description),
      (t[64] = re.title),
      (t[65] = Xe))
    : (Xe = t[65]),
    t[66] === Symbol.for("react.memo_cache_sentinel")
      ? ((et = (0, r.jsx)("span", {
          className: "text-muted-foreground text-xs font-medium",
          children: "Context",
        })),
        (t[66] = et))
      : (et = t[66]),
    t[67] !== ne || t[68] !== Ne || t[69] !== Te
      ? ((tt =
          Ne &&
          (0, r.jsx)(C.ContextPillButton, {
            filled: !!Te,
            onClick: () => se(!0),
            disabled: ne,
            emptyLabel: "Resume",
            primary: !Te,
            filledIcon: (0, r.jsx)(a.UserRound, {
              className: "h-4 w-4 shrink-0",
            }),
            filledContent: Te?.title || "My Resume",
          })),
        (t[67] = ne),
        (t[68] = Ne),
        (t[69] = Te),
        (t[70] = tt))
      : (tt = t[70]);
  const nt = !!Se;
  let rt, ot, it;
  t[71] === Symbol.for("react.memo_cache_sentinel")
    ? ((rt = () => ce(!0)), (t[71] = rt))
    : (rt = t[71]),
    t[72] === Symbol.for("react.memo_cache_sentinel")
      ? ((ot = (0, r.jsx)(a.FileText, {
          className: "h-4 w-4 shrink-0",
        })),
        (t[72] = ot))
      : (ot = t[72]),
    t[73] !== ne || t[74] !== Se || t[75] !== nt
      ? ((it = (0, r.jsx)(C.ContextPillButton, {
          filled: nt,
          onClick: rt,
          disabled: ne,
          emptyLabel: "Documents",
          filledIcon: ot,
          filledContent: Se,
        })),
        (t[73] = ne),
        (t[74] = Se),
        (t[75] = nt),
        (t[76] = it))
      : (it = t[76]);
  const at = je > 0;
  let st, lt, ct, ut, dt;
  t[77] === Symbol.for("react.memo_cache_sentinel")
    ? ((st = (0, r.jsx)(a.PenLine, {
        className: "h-4 w-4 shrink-0",
      })),
      (t[77] = st))
    : (st = t[77]),
    t[78] !== je || t[79] !== Le
      ? ((lt = Le
          ? `Instructions (${je.toLocaleString("en-US")}/${h.limits.extraContext.max.toLocaleString("en-US")})`
          : `Instructions (${je} chars)`),
        (t[78] = je),
        (t[79] = Le),
        (t[80] = lt))
      : (lt = t[80]),
    t[81] !== ne || t[82] !== Le || t[83] !== Ce || t[84] !== at || t[85] !== lt
      ? ((ct = (0, r.jsx)(C.ContextPillButton, {
          filled: at,
          invalid: Le,
          onClick: Ce,
          disabled: ne,
          emptyLabel: "Instructions",
          filledIcon: st,
          filledContent: lt,
        })),
        (t[81] = ne),
        (t[82] = Le),
        (t[83] = Ce),
        (t[84] = at),
        (t[85] = lt),
        (t[86] = ct))
      : (ct = t[86]),
    t[87] !== tt || t[88] !== it || t[89] !== ct
      ? ((ut = (0, r.jsxs)("div", {
          className: "flex flex-col gap-y-2",
          children: [
            et,
            (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center gap-1.5",
              children: [tt, it, ct],
            }),
          ],
        })),
        (t[87] = tt),
        (t[88] = it),
        (t[89] = ct),
        (t[90] = ut))
      : (ut = t[90]),
    t[91] === Symbol.for("react.memo_cache_sentinel")
      ? ((dt = (0, r.jsx)("span", {
          className: "text-muted-foreground text-xs font-medium",
          children: "Output Settings",
        })),
        (t[91] = dt))
      : (dt = t[91]);
  const pt = !me;
  let ft, ht;
  t[92] === Symbol.for("react.memo_cache_sentinel")
    ? ((ft = (0, r.jsx)(a.MessageSquareText, {
        className: "h-4 w-4 shrink-0",
      })),
      (t[92] = ft))
    : (ft = t[92]),
    t[93] !== ne || t[94] !== Ae || t[95] !== pt
      ? ((ht = (0, r.jsx)(C.ContextPillButton, {
          filled: !0,
          primary: pt,
          onClick: Ae,
          disabled: ne,
          emptyLabel: "Answer Preferences",
          filledIcon: ft,
          filledContent: "Answer Preferences",
        })),
        (t[93] = ne),
        (t[94] = Ae),
        (t[95] = pt),
        (t[96] = ht))
      : (ht = t[96]);
  const mt = re.aiModel;
  let gt, yt;
  t[97] !== n ||
  t[98] !== j ||
  t[99] !== re.aiModel ||
  t[100] !== re.sessionMode
    ? ((gt = (e) => {
        (0, u.trackManualModelSelection)({
          model: e,
          previousModel: re.aiModel,
          surface: j,
          sessionMode: re.sessionMode,
        }),
          n.setFieldValue("aiModel", e);
      }),
      (t[97] = n),
      (t[98] = j),
      (t[99] = re.aiModel),
      (t[100] = re.sessionMode),
      (t[101] = gt))
    : (gt = t[101]),
    t[102] !== W || t[103] !== re.aiModel
      ? ((yt = W(re.aiModel)),
        (t[102] = W),
        (t[103] = re.aiModel),
        (t[104] = yt))
      : (yt = t[104]);
  const vt = d.aiModelNameMap[re.aiModel];
  let bt, St, _t, xt;
  t[105] !== yt || t[106] !== vt
    ? ((bt = (0, r.jsx)(_.SelectTrigger, {
        iconClassName: "opacity-100",
        className:
          "border-border bg-background dark:bg-background dark:hover:bg-background gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium shadow-none data-[size=default]:h-auto",
        children: (0, r.jsxs)("span", {
          className: "flex items-center gap-1.5",
          children: [yt, vt],
        }),
      })),
      (t[105] = yt),
      (t[106] = vt),
      (t[107] = bt))
    : (bt = t[107]),
    t[108] !== ne ||
    t[109] !== W ||
    t[110] !== gt ||
    t[111] !== bt ||
    t[112] !== re.aiModel
      ? ((St = (0, r.jsx)(E.AIModelSelect, {
          value: mt,
          disabled: ne,
          renderModelLogo: W,
          onValueChange: gt,
          children: bt,
        })),
        (t[108] = ne),
        (t[109] = W),
        (t[110] = gt),
        (t[111] = bt),
        (t[112] = re.aiModel),
        (t[113] = St))
      : (St = t[113]),
    t[114] !== L
      ? ((_t = L ?? []), (t[114] = L), (t[115] = _t))
      : (_t = t[115]),
    t[116] !== n
      ? ((xt = (e) => n.setFieldValue("language", e)),
        (t[116] = n),
        (t[117] = xt))
      : (xt = t[117]);
  const wt = ne || U || B;
  let Et, Tt, kt, Ct, It, At, Ot, Rt;
  t[118] === Symbol.for("react.memo_cache_sentinel")
    ? ((Et = (0, r.jsx)(a.Globe, { className: "h-4 w-4 shrink-0" })),
      (t[118] = Et))
    : (Et = t[118]),
    t[119] !== F || t[120] !== re.language
      ? ((Tt = F(re.language) ?? re.language),
        (t[119] = F),
        (t[120] = re.language),
        (t[121] = Tt))
      : (Tt = t[121]),
    t[122] !== Tt
      ? ((kt = (0, r.jsx)(b.ComboboxTrigger, {
          iconClassName: "opacity-100",
          className:
            "border-border bg-background dark:bg-background dark:hover:bg-background gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium shadow-none data-[size=default]:h-auto",
          children: (0, r.jsxs)("span", {
            className: "flex items-center gap-1.5",
            children: [Et, Tt],
          }),
        })),
        (t[122] = Tt),
        (t[123] = kt))
      : (kt = t[123]),
    t[124] !== _t ||
    t[125] !== xt ||
    t[126] !== wt ||
    t[127] !== kt ||
    t[128] !== re.language
      ? ((Ct = (0, r.jsx)(v.SearchableSelect, {
          value: re.language,
          options: _t,
          onValueChange: xt,
          disabled: wt,
          searchPlaceholder: "Search language",
          children: kt,
        })),
        (t[124] = _t),
        (t[125] = xt),
        (t[126] = wt),
        (t[127] = kt),
        (t[128] = re.language),
        (t[129] = Ct))
      : (Ct = t[129]),
    t[130] !== ht || t[131] !== St || t[132] !== Ct
      ? ((It = (0, r.jsxs)("div", {
          className: "flex flex-col gap-y-2",
          children: [
            dt,
            (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center gap-1.5",
              children: [ht, St, Ct],
            }),
          ],
        })),
        (t[130] = ht),
        (t[131] = St),
        (t[132] = Ct),
        (t[133] = It))
      : (It = t[133]),
    t[134] === Symbol.for("react.memo_cache_sentinel")
      ? ((At = (0, r.jsx)("span", {
          className: "text-muted-foreground text-xs font-medium",
          children: "Behavior",
        })),
        (t[134] = At))
      : (At = t[134]),
    t[135] !== n
      ? ((Ot = (e) => n.setFieldValue("autoAnswer", e)),
        (t[135] = n),
        (t[136] = Ot))
      : (Ot = t[136]),
    t[137] !== ne || t[138] !== Ot || t[139] !== re.autoAnswer
      ? ((Rt = (0, r.jsx)(k.CheckboxPillLabel, {
          checked: re.autoAnswer,
          disabled: ne,
          onCheckedChange: Ot,
          tooltip:
            "When enabled, the AI automatically detects when a question is asked and answers it. Otherwise you press the Answer button manually.",
          children: "Auto Answer",
        })),
        (t[137] = ne),
        (t[138] = Ot),
        (t[139] = re.autoAnswer),
        (t[140] = Rt))
      : (Rt = t[140]);
  const Mt = !!J || re.saveTranscription,
    Pt = !!J || ne;
  let Nt;
  t[141] !== n
    ? ((Nt = (e) => n.setFieldValue("saveTranscription", e)),
      (t[141] = n),
      (t[142] = Nt))
    : (Nt = t[142]);
  const Dt = J
    ? "Mock interviews are always saved so you can review the transcript and notes afterwards."
    : "Saves a transcript of the call to your dashboard. You must comply with applicable transcribing laws — many jurisdictions require consent from all parties being recorded.";
  let jt, Lt;
  t[143] !== Mt || t[144] !== Pt || t[145] !== Nt || t[146] !== Dt
    ? ((jt = (0, r.jsx)(k.CheckboxPillLabel, {
        checked: Mt,
        disabled: Pt,
        onCheckedChange: Nt,
        tooltip: Dt,
        children: "Save Transcript",
      })),
      (t[143] = Mt),
      (t[144] = Pt),
      (t[145] = Nt),
      (t[146] = Dt),
      (t[147] = jt))
    : (jt = t[147]),
    t[148] !== Rt || t[149] !== jt
      ? ((Lt = (0, r.jsxs)("div", {
          className: "flex flex-wrap items-center gap-1.5",
          children: [Rt, jt],
        })),
        (t[148] = Rt),
        (t[149] = jt),
        (t[150] = Lt))
      : (Lt = t[150]);
  const Ft = !!J;
  let Ut,
    Bt,
    zt,
    Ht,
    Vt,
    qt,
    Gt,
    Wt,
    $t,
    Yt,
    Kt,
    Zt,
    Qt,
    Jt,
    Xt,
    en,
    tn,
    nn,
    rn,
    on,
    an,
    sn,
    ln,
    cn,
    un,
    dn;
  return (
    t[151] !== Ne ||
    t[152] !== Z ||
    t[153] !== Q ||
    t[154] !== Ft ||
    t[155] !== re.saveTranscription
      ? ((Ut = (0, r.jsx)(A.QuestionBankContributionNotice, {
          isInterview: Ne,
          saveTranscription: re.saveTranscription,
          isMock: Ft,
          questionBankOptedOut: Z,
          questionBankVisible: Q,
        })),
        (t[151] = Ne),
        (t[152] = Z),
        (t[153] = Q),
        (t[154] = Ft),
        (t[155] = re.saveTranscription),
        (t[156] = Ut))
      : (Ut = t[156]),
    t[157] !== Lt || t[158] !== Ut
      ? ((Bt = (0, r.jsxs)("div", {
          className: "flex flex-col gap-y-2",
          children: [At, Lt, Ut],
        })),
        (t[157] = Lt),
        (t[158] = Ut),
        (t[159] = Bt))
      : (Bt = t[159]),
    t[160] !== Qe ||
    t[161] !== Je ||
    t[162] !== Xe ||
    t[163] !== ut ||
    t[164] !== It ||
    t[165] !== Bt
      ? ((zt = (0, r.jsxs)("div", {
          className: "flex flex-col gap-y-4",
          children: [Qe, Je, Xe, ut, It, Bt],
        })),
        (t[160] = Qe),
        (t[161] = Je),
        (t[162] = Xe),
        (t[163] = ut),
        (t[164] = It),
        (t[165] = Bt),
        (t[166] = zt))
      : (zt = t[166]),
    t[167] !== pe || t[168] !== $ || t[169] !== Re || t[170] !== re
      ? ((Ht = (0, r.jsx)(T.AnswerPreferencesDialog, {
          open: pe,
          onOpenChange: fe,
          value: re,
          onSave: Re,
          loadPreviews: $,
        })),
        (t[167] = pe),
        (t[168] = $),
        (t[169] = Re),
        (t[170] = re),
        (t[171] = Ht))
      : (Ht = t[171]),
    t[172] === Symbol.for("react.memo_cache_sentinel")
      ? ((Vt = (0, r.jsxs)(S.DialogHeader, {
          children: [
            (0, r.jsx)(S.DialogTitle, { children: "Instructions" }),
            (0, r.jsx)(S.DialogDescription, {
              children:
                "Add instructions for the AI to follow during the session.",
            }),
          ],
        })),
        (t[172] = Vt))
      : (Vt = t[172]),
    t[173] !== he
      ? ((qt = (e) => he.setDraft(e.target.value)),
        (t[173] = he),
        (t[174] = qt))
      : (qt = t[174]),
    t[175] !== he.draft || t[176] !== qt
      ? ((Gt = (0, r.jsx)(w.Textarea, {
          placeholder:
            "Add instructions for the AI to follow during the session.",
          value: he.draft,
          onChange: qt,
          className: "min-h-35",
        })),
        (t[175] = he.draft),
        (t[176] = qt),
        (t[177] = Gt))
      : (Gt = t[177]),
    t[178] !== he.draft || t[179] !== Gt
      ? ((Wt = (0, r.jsx)(g.FieldWithCount, {
          value: he.draft,
          limit: h.limits.extraContext,
          children: Gt,
        })),
        (t[178] = he.draft),
        (t[179] = Gt),
        (t[180] = Wt))
      : (Wt = t[180]),
    t[181] === Symbol.for("react.memo_cache_sentinel")
      ? (($t = () => de(!1)), (t[181] = $t))
      : ($t = t[181]),
    t[182] !== Pe
      ? ((Yt = (0, r.jsx)(m.DialogFooterButtons, {
          onCancel: $t,
          confirmLabel: "Save",
          onConfirm: Pe,
        })),
        (t[182] = Pe),
        (t[183] = Yt))
      : (Yt = t[183]),
    t[184] !== Wt || t[185] !== Yt
      ? ((Kt = (0, r.jsxs)(S.DialogContent, {
          children: [Vt, Wt, Yt],
        })),
        (t[184] = Wt),
        (t[185] = Yt),
        (t[186] = Kt))
      : (Kt = t[186]),
    t[187] !== ue || t[188] !== Kt
      ? ((Zt = (0, r.jsx)(S.Dialog, {
          open: ue,
          onOpenChange: de,
          children: Kt,
        })),
        (t[187] = ue),
        (t[188] = Kt),
        (t[189] = Zt))
      : (Zt = t[189]),
    t[190] === Symbol.for("react.memo_cache_sentinel")
      ? ((Qt = (0, r.jsxs)(S.DialogHeader, {
          children: [
            (0, r.jsx)(S.DialogTitle, { children: "Resume" }),
            (0, r.jsx)(S.DialogDescription, {
              children:
                "Select a resume to use for the interview. The AI will reference it when generating responses to provide more relevant suggestions.",
            }),
          ],
        })),
        (t[190] = Qt))
      : (Qt = t[190]),
    t[191] !== n
      ? ((Jt = (e) => n.setFieldValue("resumeId", e)),
        (t[191] = n),
        (t[192] = Jt))
      : (Jt = t[192]),
    t[193] !== ne || t[194] !== X || t[195] !== Jt || t[196] !== re.resumeId
      ? ((Xt = X({
          selectedResumeId: re.resumeId,
          onResumeChange: Jt,
          disabled: ne,
        })),
        (t[193] = ne),
        (t[194] = X),
        (t[195] = Jt),
        (t[196] = re.resumeId),
        (t[197] = Xt))
      : (Xt = t[197]),
    t[198] === Symbol.for("react.memo_cache_sentinel")
      ? ((en = (0, r.jsx)(m.DialogFooterButtons, {
          confirmLabel: "Done",
          onConfirm: () => se(!1),
        })),
        (t[198] = en))
      : (en = t[198]),
    t[199] !== Xt
      ? ((tn = (0, r.jsxs)(S.DialogContent, {
          children: [Qt, Xt, en],
        })),
        (t[199] = Xt),
        (t[200] = tn))
      : (tn = t[200]),
    t[201] !== ae || t[202] !== tn
      ? ((nn = (0, r.jsx)(S.Dialog, {
          open: ae,
          onOpenChange: se,
          children: tn,
        })),
        (t[201] = ae),
        (t[202] = tn),
        (t[203] = nn))
      : (nn = t[203]),
    t[204] === Symbol.for("react.memo_cache_sentinel")
      ? ((rn = (0, r.jsxs)(S.DialogHeader, {
          children: [
            (0, r.jsx)(S.DialogTitle, { children: "Documents" }),
            (0, r.jsx)(S.DialogDescription, {
              children:
                "Select documents to give the AI additional context during your session. The AI will reference these documents when generating responses, helping it provide more accurate and relevant answers.",
            }),
          ],
        })),
        (t[204] = rn))
      : (rn = t[204]),
    t[205] !== n
      ? ((on = (e) => {
          const { selectedIds: t, selectionMode: r } = e;
          n.setFieldValue("selectedDocumentIds", t),
            n.setFieldValue("documentSelectionMode", r);
        }),
        (t[205] = n),
        (t[206] = on))
      : (on = t[206]),
    t[207] !== ne ||
    t[208] !== ee ||
    t[209] !== on ||
    t[210] !== re.selectedDocumentIds
      ? ((an = ee({
          selectedDocumentIds: re.selectedDocumentIds,
          onChange: on,
          disabled: ne,
        })),
        (t[207] = ne),
        (t[208] = ee),
        (t[209] = on),
        (t[210] = re.selectedDocumentIds),
        (t[211] = an))
      : (an = t[211]),
    t[212] === Symbol.for("react.memo_cache_sentinel")
      ? ((sn = (0, r.jsx)(m.DialogFooterButtons, {
          confirmLabel: "Done",
          onConfirm: () => ce(!1),
        })),
        (t[212] = sn))
      : (sn = t[212]),
    t[213] !== an
      ? ((ln = (0, r.jsxs)(S.DialogContent, {
          children: [rn, an, sn],
        })),
        (t[213] = an),
        (t[214] = ln))
      : (ln = t[214]),
    t[215] !== le || t[216] !== ln
      ? ((cn = (0, r.jsx)(S.Dialog, {
          open: le,
          onOpenChange: ce,
          children: ln,
        })),
        (t[215] = le),
        (t[216] = ln),
        (t[217] = cn))
      : (cn = t[217]),
    t[218] !== we || t[219] !== te
      ? ((un = te(we)), (t[218] = we), (t[219] = te), (t[220] = un))
      : (un = t[220]),
    t[221] !== Fe ||
    t[222] !== zt ||
    t[223] !== Ht ||
    t[224] !== Zt ||
    t[225] !== nn ||
    t[226] !== cn ||
    t[227] !== un
      ? ((dn = (0, r.jsxs)(r.Fragment, {
          children: [Fe, zt, Ht, Zt, nn, cn, un],
        })),
        (t[221] = Fe),
        (t[222] = zt),
        (t[223] = Ht),
        (t[224] = Zt),
        (t[225] = nn),
        (t[226] = cn),
        (t[227] = un),
        (t[228] = dn))
      : (dn = t[228]),
    dn
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(51366 /* vendor/module-51366 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(14041 /* vendor/module-14041 */),
  l = n(82447 /* vendor/module-82447 */),
  c = n(41458 /* vendor/module-41458 */),
  u = n(9137 /* vendor/module-9137 */),
  d = n(68058 /* vendor/module-68058 */),
  p = n(29113 /* vendor/module-29113 */),
  f = n(22909 /* vendor/module-22909 */),
  h = n(45482 /* vendor/module-45482 */),
  m = n(47021 /* vendor/module-47021 */),
  g = n(7696 /* app/components/field-with-count */),
  y = n(63110 /* app/components/label-with-tooltip */),
  v = n(69853 /* app/components/searchable-select */),
  b = n(57577 /* app/components/combobox */),
  S = n(98980 /* app/components/dialog */),
  _ = n(9664 /* app/components/select-trigger-icon-class-name */),
  x = n(93432 /* app/components/tabs */),
  w = n(6826 /* app/components/textarea */),
  E = n(48141 /* app/components/aimodel-select */),
  T = n(46652 /* app/components/on-click-46652 */),
  k = n(82104 /* app/components/checkbox-pill-label */),
  C = n(23908 /* app/components/context-pill-button */),
  I = n(41047 /* app/components/on-click-41047 */),
  A = n(78086 /* app/components/question-bank-contribution-notice */),
  O = n(86300 /* app/components/regular-call-details */),
  R = n(70258 /* vendor/module-70258 */),
  M = n(19623 /* vendor/module-19623 */);
function P(e) {
  return {
    sessionMode: e.values.sessionMode,
    title: e.values.title,
    companyDomain: e.values.companyDomain,
    description: e.values.description,
    resumeId: e.values.resumeId,
    selectedDocumentIds: e.values.selectedDocumentIds,
    documentSelectionMode: e.values.documentSelectionMode,
    extraContext: e.values.extraContext,
    responseLength: e.values.responseLength,
    responseFormat: e.values.responseFormat,
    responseTone: e.values.responseTone,
    useStarMethod: e.values.useStarMethod,
    useFillerWords: e.values.useFillerWords,
    language: e.values.language,
    aiModel: e.values.aiModel,
    autoAnswer: e.values.autoAnswer,
    saveTranscription: e.values.saveTranscription,
  };
}
