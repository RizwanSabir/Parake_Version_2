// app/components/create-session-preferences-step.js — webpack module 86870
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CreateSessionPreferencesStep = function (e) {
  const t = (0, o.c)(212),
    {
      form: n,
      disabled: F,
      isMock: U,
      questionBankOptedOut: B,
      questionBankVisible: z,
      modelSelectionSurface: H,
      languages: V,
      getLanguageLabel: q,
      isLoadingLanguages: G,
      languagesError: W,
      renderModelLogo: $,
      loadPreviews: Y,
      onBack: K,
      onCancel: Z,
      submitLabel: Q,
      isSubmitting: J,
      submitBlockedReason: X,
    } = e,
    ee = void 0 !== F && F,
    te = void 0 !== U && U,
    ne = (0, T.useCreateSessionDrill)(),
    re = (0, i.useSelector)(n.store, L),
    [oe, ie] = (0, s.useState)(!1),
    [ae, se] = (0, s.useState)(!1),
    le = (0, M.useInstructionsDraft)(n),
    ce = ne.screen;
  let ue;
  t[0] !== ne
    ? ((ue = (e) => ne.open(e)), (t[0] = ne), (t[1] = ue))
    : (ue = t[1]);
  const de = ue,
    pe = ne.close,
    { hasOpened: fe, markOpened: he } = (0, l.useAnswerPreferencesSeen)();
  let me;
  t[2] !== q || t[3] !== re.language
    ? ((me = q(re.language) ?? re.language),
      (t[2] = q),
      (t[3] = re.language),
      (t[4] = me))
    : (me = t[4]);
  const ge = me,
    { hasInstructions: ye, isSavedOverLimit: ve } = le;
  let be;
  if (t[5] !== $ || t[6] !== re.aiModel) {
    const e = (0, d.aiModelPickerGroups)(re.aiModel),
      n = [...e.recommended, ...e.advanced];
    let r;
    t[8] !== $
      ? ((r = (e, t) => ({
          value: e,
          label: u.aiModelNameMap[e],
          leading: $(e, 24),
          note: (0, u.aiModelPickerNote)(e) ?? void 0,
          group: t,
        })),
        (t[8] = $),
        (t[9] = r))
      : (r = t[9]);
    const o = r,
      i = new Set(u.aiModelPickerBands.flatMap(j));
    let a;
    t[10] !== n || t[11] !== o
      ? ((a = (e) =>
          e.models.filter((e) => n.includes(e)).map((t) => o(t, e.heading))),
        (t[10] = n),
        (t[11] = o),
        (t[12] = a))
      : (a = t[12]),
      (be = [
        ...n.filter((e) => !i.has(e)).map((e) => o(e)),
        ...u.aiModelPickerBands.flatMap(a),
      ]),
      (t[5] = $),
      (t[6] = re.aiModel),
      (t[7] = be);
  } else be = t[7];
  const Se = be;
  let _e;
  t[13] !== n || t[14] !== H || t[15] !== re.aiModel || t[16] !== re.sessionMode
    ? ((_e = (e) => {
        (0, c.trackManualModelSelection)({
          model: e,
          previousModel: re.aiModel,
          surface: H,
          sessionMode: re.sessionMode,
        }),
          n.setFieldValue("aiModel", e);
      }),
      (t[13] = n),
      (t[14] = H),
      (t[15] = re.aiModel),
      (t[16] = re.sessionMode),
      (t[17] = _e))
    : (_e = t[17]);
  const xe = _e;
  let we;
  t[18] !== le
    ? ((we = () => {
        le.begin(), ie(!0);
      }),
      (t[18] = le),
      (t[19] = we))
    : (we = t[19]);
  const Ee = we;
  let Te;
  t[20] !== he
    ? ((Te = () => {
        he(), se(!0);
      }),
      (t[20] = he),
      (t[21] = Te))
    : (Te = t[21]);
  const ke = Te;
  let Ce;
  t[22] !== n
    ? ((Ce = (e) => {
        n.setFieldValue("responseLength", e.responseLength),
          n.setFieldValue("responseFormat", e.responseFormat),
          n.setFieldValue("responseTone", e.responseTone),
          n.setFieldValue("useStarMethod", e.useStarMethod),
          n.setFieldValue("useFillerWords", e.useFillerWords);
      }),
      (t[22] = n),
      (t[23] = Ce))
    : (Ce = t[23]);
  const Ie = Ce;
  let Ae;
  t[24] !== le
    ? ((Ae = () => {
        le.save(), ie(!1);
      }),
      (t[24] = le),
      (t[25] = Ae))
    : (Ae = t[25]);
  const Oe = Ae;
  if ("answerPreferences" === ce) {
    let e;
    return (
      t[26] !== pe || t[27] !== Y || t[28] !== Z || t[29] !== Ie || t[30] !== re
        ? ((e = (0, r.jsx)(E.AnswerPreferencesScreen, {
            value: re,
            onSave: Ie,
            onBack: pe,
            onClose: Z,
            loadPreviews: Y,
          })),
          (t[26] = pe),
          (t[27] = Y),
          (t[28] = Z),
          (t[29] = Ie),
          (t[30] = re),
          (t[31] = e))
        : (e = t[31]),
      e
    );
  }
  if ("language" === ce) {
    let e, o;
    return (
      t[32] !== pe || t[33] !== n
        ? ((e = (e) => {
            n.setFieldValue("language", e), pe();
          }),
          (t[32] = pe),
          (t[33] = n),
          (t[34] = e))
        : (e = t[34]),
      t[35] !== pe ||
      t[36] !== G ||
      t[37] !== V ||
      t[38] !== W ||
      t[39] !== e ||
      t[40] !== re.language
        ? ((o = (0, r.jsx)(f.LanguagePicker, {
            languages: V,
            isLoading: G,
            error: W,
            value: re.language,
            onSelect: e,
            onBack: pe,
          })),
          (t[35] = pe),
          (t[36] = G),
          (t[37] = V),
          (t[38] = W),
          (t[39] = e),
          (t[40] = re.language),
          (t[41] = o))
        : (o = t[41]),
      o
    );
  }
  if ("model" === ce) {
    let e, n;
    return (
      t[42] !== pe || t[43] !== xe
        ? ((e = (e) => {
            xe(e), pe();
          }),
          (t[42] = pe),
          (t[43] = xe),
          (t[44] = e))
        : (e = t[44]),
      t[45] !== pe || t[46] !== Se || t[47] !== e || t[48] !== re.aiModel
        ? ((n = (0, r.jsx)(C.CreateSessionOptionScreen, {
            title: "Select model",
            options: Se,
            value: re.aiModel,
            onSelect: e,
            onBack: pe,
          })),
          (t[45] = pe),
          (t[46] = Se),
          (t[47] = e),
          (t[48] = re.aiModel),
          (t[49] = n))
        : (n = t[49]),
      n
    );
  }
  if ("instructions" === ce) {
    const e = !le.canClear;
    let n;
    t[50] !== pe || t[51] !== Oe
      ? ((n = () => {
          Oe(), pe();
        }),
        (t[50] = pe),
        (t[51] = Oe),
        (t[52] = n))
      : (n = t[52]);
    const o = !le.canSave;
    let i, a;
    return (
      t[53] !== le.draft || t[54] !== le.setDraft
        ? ((i = (0, r.jsx)(A.InstructionsField, {
            value: le.draft,
            onChange: le.setDraft,
            fill: !0,
          })),
          (t[53] = le.draft),
          (t[54] = le.setDraft),
          (t[55] = i))
        : (i = t[55]),
      t[56] !== pe ||
      t[57] !== le.clear ||
      t[58] !== e ||
      t[59] !== n ||
      t[60] !== o ||
      t[61] !== i
        ? ((a = (0, r.jsx)(I.CreateSessionSheetScreen, {
            title: "AI instructions",
            onBack: pe,
            cancelLabel: "Clear",
            onCancel: le.clear,
            cancelDisabled: e,
            confirmLabel: "Save changes",
            onConfirm: n,
            confirmDisabled: o,
            children: i,
          })),
          (t[56] = pe),
          (t[57] = le.clear),
          (t[58] = e),
          (t[59] = n),
          (t[60] = o),
          (t[61] = i),
          (t[62] = a))
        : (a = t[62]),
      a
    );
  }
  let Re, Me;
  t[63] === Symbol.for("react.memo_cache_sentinel")
    ? ((Re = (0, r.jsx)(_.Typography, {
        variant: "label",
        className: "text-muted-foreground",
        children: "Session",
      })),
      (t[63] = Re))
    : (Re = t[63]),
    t[64] !== de
      ? ((Me = () => de("language")), (t[64] = de), (t[65] = Me))
      : (Me = t[65]);
  const Pe = ee || G || W,
    Ne = re.language;
  let De, je;
  t[66] !== V ? ((De = V ?? []), (t[66] = V), (t[67] = De)) : (De = t[67]),
    t[68] !== n
      ? ((je = (e) => n.setFieldValue("language", e)),
        (t[68] = n),
        (t[69] = je))
      : (je = t[69]);
  const Le = ee || G || W;
  let Fe, Ue, Be, ze, He;
  t[70] === Symbol.for("react.memo_cache_sentinel")
    ? ((Fe = (0, p.cn)(D, P)), (t[70] = Fe))
    : (Fe = t[70]),
    t[71] !== ge
      ? ((Ue = (0, r.jsx)(g.ComboboxTrigger, {
          size: "sm",
          className: Fe,
          "aria-label": "Language",
          children: (0, r.jsx)("span", {
            className: "min-w-0 truncate",
            title: ge,
            children: ge,
          }),
        })),
        (t[71] = ge),
        (t[72] = Ue))
      : (Ue = t[72]),
    t[73] !== De ||
    t[74] !== je ||
    t[75] !== Le ||
    t[76] !== Ue ||
    t[77] !== re.language
      ? ((Be = (0, r.jsx)(h.SearchableSelect, {
          value: Ne,
          options: De,
          onValueChange: je,
          disabled: Le,
          searchPlaceholder: "Search language",
          children: Ue,
        })),
        (t[73] = De),
        (t[74] = je),
        (t[75] = Le),
        (t[76] = Ue),
        (t[77] = re.language),
        (t[78] = Be))
      : (Be = t[78]),
    t[79] !== ge || t[80] !== Me || t[81] !== Pe || t[82] !== Be
      ? ((ze = (0, r.jsx)(R.SettingRow, {
          icon: a.Languages,
          title: "Select language",
          description: "Call language",
          onDrill: Me,
          drillDisabled: Pe,
          drillValue: ge,
          control: Be,
        })),
        (t[79] = ge),
        (t[80] = Me),
        (t[81] = Pe),
        (t[82] = Be),
        (t[83] = ze))
      : (ze = t[83]),
    t[84] !== de
      ? ((He = () => de("model")), (t[84] = de), (t[85] = He))
      : (He = t[85]);
  const Ve = u.aiModelNameMap[re.aiModel],
    qe = re.aiModel;
  let Ge, We;
  t[86] === Symbol.for("react.memo_cache_sentinel")
    ? ((Ge = (0, p.cn)("gap-2", D, P)), (t[86] = Ge))
    : (Ge = t[86]),
    t[87] !== $ || t[88] !== re.aiModel
      ? ((We = $(re.aiModel)), (t[87] = $), (t[88] = re.aiModel), (t[89] = We))
      : (We = t[89]);
  const $e = u.aiModelNameMap[re.aiModel],
    Ye = u.aiModelNameMap[re.aiModel];
  let Ke, Ze, Qe, Je, Xe;
  t[90] !== $e || t[91] !== Ye
    ? ((Ke = (0, r.jsx)("span", {
        className: "min-w-0 truncate",
        title: $e,
        children: Ye,
      })),
      (t[90] = $e),
      (t[91] = Ye),
      (t[92] = Ke))
    : (Ke = t[92]),
    t[93] !== We || t[94] !== Ke
      ? ((Ze = (0, r.jsx)(b.SelectTrigger, {
          size: "sm",
          className: Ge,
          "aria-label": "Model",
          children: (0, r.jsxs)("span", {
            className: "flex min-w-0 items-center gap-2",
            children: [We, Ke],
          }),
        })),
        (t[93] = We),
        (t[94] = Ke),
        (t[95] = Ze))
      : (Ze = t[95]),
    t[96] !== ee ||
    t[97] !== $ ||
    t[98] !== xe ||
    t[99] !== Ze ||
    t[100] !== re.aiModel
      ? ((Qe = (0, r.jsx)(x.AIModelSelect, {
          value: qe,
          renderModelLogo: $,
          disabled: ee,
          onValueChange: xe,
          children: Ze,
        })),
        (t[96] = ee),
        (t[97] = $),
        (t[98] = xe),
        (t[99] = Ze),
        (t[100] = re.aiModel),
        (t[101] = Qe))
      : (Qe = t[101]),
    t[102] !== ee || t[103] !== He || t[104] !== Ve || t[105] !== Qe
      ? ((Je = (0, r.jsx)(R.SettingRow, {
          icon: a.CircuitBoard,
          title: "Select model",
          description: "Speed and accuracy",
          onDrill: He,
          drillDisabled: ee,
          drillValue: Ve,
          control: Qe,
        })),
        (t[102] = ee),
        (t[103] = He),
        (t[104] = Ve),
        (t[105] = Qe),
        (t[106] = Je))
      : (Je = t[106]),
    t[107] !== he || t[108] !== de
      ? ((Xe = () => {
          he(), de("answerPreferences");
        }),
        (t[107] = he),
        (t[108] = de),
        (t[109] = Xe))
      : (Xe = t[109]);
  const et = fe ? "outline" : "default";
  let tt, nt, rt, ot;
  t[110] === Symbol.for("react.memo_cache_sentinel")
    ? ((tt = (0, r.jsx)(a.Settings, {})), (t[110] = tt))
    : (tt = t[110]),
    t[111] !== ee || t[112] !== ke || t[113] !== et
      ? ((nt = (0, r.jsxs)(m.Button, {
          type: "button",
          variant: et,
          size: "sm",
          className: N,
          onClick: ke,
          disabled: ee,
          "aria-label": "Configure answer preferences",
          children: [tt, "Configure"],
        })),
        (t[111] = ee),
        (t[112] = ke),
        (t[113] = et),
        (t[114] = nt))
      : (nt = t[114]),
    t[115] !== ee || t[116] !== Xe || t[117] !== nt
      ? ((rt = (0, r.jsx)(R.SettingRow, {
          icon: a.BotMessageSquare,
          title: "Answer Preferences",
          description: "Answer style and format",
          onDrill: Xe,
          drillDisabled: ee,
          control: nt,
        })),
        (t[115] = ee),
        (t[116] = Xe),
        (t[117] = nt),
        (t[118] = rt))
      : (rt = t[118]),
    t[119] !== le || t[120] !== de
      ? ((ot = () => {
          le.begin(), de("instructions");
        }),
        (t[119] = le),
        (t[120] = de),
        (t[121] = ot))
      : (ot = t[121]);
  const it = ye ? "Edit AI instructions" : "Add AI instructions";
  let at;
  t[122] !== ye
    ? ((at = ye ? (0, r.jsx)(a.Pen, {}) : (0, r.jsx)(a.Plus, {})),
      (t[122] = ye),
      (t[123] = at))
    : (at = t[123]);
  const st = ye ? "Edit" : "Add";
  let lt, ct, ut, dt, pt, ft;
  t[124] !== ee ||
  t[125] !== ve ||
  t[126] !== Ee ||
  t[127] !== it ||
  t[128] !== at ||
  t[129] !== st
    ? ((lt = (0, r.jsxs)(m.Button, {
        type: "button",
        variant: "outline",
        size: "sm",
        className: N,
        onClick: Ee,
        disabled: ee,
        "aria-invalid": ve,
        "aria-label": it,
        children: [at, st],
      })),
      (t[124] = ee),
      (t[125] = ve),
      (t[126] = Ee),
      (t[127] = it),
      (t[128] = at),
      (t[129] = st),
      (t[130] = lt))
    : (lt = t[130]),
    t[131] !== ee || t[132] !== ot || t[133] !== lt
      ? ((ct = (0, r.jsx)(R.SettingRow, {
          icon: a.Sparkles,
          title: "AI instructions",
          description: "Additional guidance",
          onDrill: ot,
          drillDisabled: ee,
          control: lt,
        })),
        (t[131] = ee),
        (t[132] = ot),
        (t[133] = lt),
        (t[134] = ct))
      : (ct = t[134]),
    t[135] !== ze || t[136] !== Je || t[137] !== rt || t[138] !== ct
      ? ((ut = (0, r.jsxs)("section", {
          className: "flex flex-col gap-3",
          children: [
            Re,
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-6",
              children: [ze, Je, rt, ct],
            }),
          ],
        })),
        (t[135] = ze),
        (t[136] = Je),
        (t[137] = rt),
        (t[138] = ct),
        (t[139] = ut))
      : (ut = t[139]),
    t[140] === Symbol.for("react.memo_cache_sentinel")
      ? ((dt = (0, r.jsx)(_.Typography, {
          variant: "label",
          className: "text-muted-foreground",
          children: "Extra",
        })),
        (t[140] = dt))
      : (dt = t[140]),
    t[141] !== n
      ? ((pt = (e) => n.setFieldValue("autoAnswer", e)),
        (t[141] = n),
        (t[142] = pt))
      : (pt = t[142]),
    t[143] !== ee || t[144] !== pt || t[145] !== re.autoAnswer
      ? ((ft = (0, r.jsx)(R.SettingRow, {
          icon: a.Zap,
          title: "Auto Answer",
          description: "Answers questions automatically",
          controlId: "create-session-auto-answer",
          control: (0, r.jsx)(S.Switch, {
            id: "create-session-auto-answer",
            checked: re.autoAnswer,
            onCheckedChange: pt,
            disabled: ee,
          }),
        })),
        (t[143] = ee),
        (t[144] = pt),
        (t[145] = re.autoAnswer),
        (t[146] = ft))
      : (ft = t[146]);
  const ht = te
      ? "Always saved for mock interviews"
      : "Consent may be required",
    mt = te || re.saveTranscription;
  let gt;
  t[147] !== n
    ? ((gt = (e) => n.setFieldValue("saveTranscription", e)),
      (t[147] = n),
      (t[148] = gt))
    : (gt = t[148]);
  const yt = te || ee;
  let vt, bt, St;
  t[149] !== mt || t[150] !== gt || t[151] !== yt
    ? ((vt = (0, r.jsx)(S.Switch, {
        id: "create-session-save-transcript",
        checked: mt,
        onCheckedChange: gt,
        disabled: yt,
      })),
      (t[149] = mt),
      (t[150] = gt),
      (t[151] = yt),
      (t[152] = vt))
    : (vt = t[152]),
    t[153] !== ht || t[154] !== vt
      ? ((bt = (0, r.jsx)(R.SettingRow, {
          icon: a.MessagesSquare,
          title: "Save transcript",
          description: ht,
          controlId: "create-session-save-transcript",
          control: vt,
        })),
        (t[153] = ht),
        (t[154] = vt),
        (t[155] = bt))
      : (bt = t[155]),
    t[156] !== ft || t[157] !== bt
      ? ((St = (0, r.jsxs)("div", {
          className: "flex flex-col gap-6",
          children: [ft, bt],
        })),
        (t[156] = ft),
        (t[157] = bt),
        (t[158] = St))
      : (St = t[158]);
  const _t = "interview" === re.sessionMode;
  let xt, wt, Et;
  t[159] !== te ||
  t[160] !== B ||
  t[161] !== z ||
  t[162] !== _t ||
  t[163] !== re.saveTranscription
    ? ((xt = (0, r.jsx)(O.QuestionBankContributionNotice, {
        isInterview: _t,
        saveTranscription: re.saveTranscription,
        isMock: te,
        questionBankOptedOut: B,
        questionBankVisible: z,
      })),
      (t[159] = te),
      (t[160] = B),
      (t[161] = z),
      (t[162] = _t),
      (t[163] = re.saveTranscription),
      (t[164] = xt))
    : (xt = t[164]),
    t[165] !== St || t[166] !== xt
      ? ((wt = (0, r.jsxs)("section", {
          className: "flex flex-col gap-3",
          children: [dt, St, xt],
        })),
        (t[165] = St),
        (t[166] = xt),
        (t[167] = wt))
      : (wt = t[167]),
    t[168] !== ut || t[169] !== wt
      ? ((Et = (0, r.jsxs)(v.ScrollArea, {
          className: "-mr-8 min-h-0 flex-1 max-sm:-mr-4",
          focusRing: !1,
          viewportClassName: "max-sm:scroll-fade-y",
          contentClassName:
            "flex min-h-full flex-col gap-10 pr-8 max-sm:py-4 max-sm:pr-4",
          children: [ut, wt],
        })),
        (t[168] = ut),
        (t[169] = wt),
        (t[170] = Et))
      : (Et = t[170]);
  const Tt = ee || J,
    kt = ee || ve || !!X,
    Ct = ve ? "Your AI instructions are over the character limit." : X;
  let It, At;
  t[171] !== J ||
  t[172] !== K ||
  t[173] !== Q ||
  t[174] !== Tt ||
  t[175] !== kt ||
  t[176] !== Ct
    ? ((It = (0, r.jsx)(k.CreateSessionFooter, {
        onBack: K,
        backLabel: "Back",
        nextLabel: Q,
        isSubmitStep: !0,
        backDisabled: Tt,
        nextDisabled: kt,
        nextTooltip: Ct,
        isSubmitting: J,
      })),
      (t[171] = J),
      (t[172] = K),
      (t[173] = Q),
      (t[174] = Tt),
      (t[175] = kt),
      (t[176] = Ct),
      (t[177] = It))
    : (It = t[177]),
    t[178] !== ae || t[179] !== Y || t[180] !== Ie || t[181] !== re
      ? ((At = (0, r.jsx)(w.AnswerPreferencesDialog, {
          open: ae,
          onOpenChange: se,
          value: re,
          onSave: Ie,
          loadPreviews: Y,
        })),
        (t[178] = ae),
        (t[179] = Y),
        (t[180] = Ie),
        (t[181] = re),
        (t[182] = At))
      : (At = t[182]);
  const Ot = ye ? "Edit AI instructions" : "Add AI instructions";
  let Rt, Mt, Pt, Nt;
  t[183] !== Ot
    ? ((Rt = (0, r.jsx)(y.DialogTitle, { children: Ot })),
      (t[183] = Ot),
      (t[184] = Rt))
    : (Rt = t[184]),
    t[185] === Symbol.for("react.memo_cache_sentinel")
      ? ((Mt = (0, r.jsx)(y.DialogDescription, {
          children:
            "Add notes or instructions the AI should use during this session, such as company context or answer style.",
        })),
        (t[185] = Mt))
      : (Mt = t[185]),
    t[186] !== Rt
      ? ((Pt = (0, r.jsxs)(y.DialogHeader, {
          align: "start",
          children: [Rt, Mt],
        })),
        (t[186] = Rt),
        (t[187] = Pt))
      : (Pt = t[187]),
    t[188] !== le.draft || t[189] !== le.setDraft
      ? ((Nt = (0, r.jsx)(A.InstructionsField, {
          value: le.draft,
          onChange: le.setDraft,
        })),
        (t[188] = le.draft),
        (t[189] = le.setDraft),
        (t[190] = Nt))
      : (Nt = t[190]);
  const Dt = !le.canClear;
  let jt;
  t[191] !== le.clear || t[192] !== Dt
    ? ((jt = (0, r.jsx)(m.Button, {
        type: "button",
        variant: "outline",
        disabled: Dt,
        onClick: le.clear,
        children: "Clear",
      })),
      (t[191] = le.clear),
      (t[192] = Dt),
      (t[193] = jt))
    : (jt = t[193]);
  const Lt = !le.canSave;
  let Ft, Ut, Bt, zt, Ht;
  return (
    t[194] !== Oe || t[195] !== Lt
      ? ((Ft = (0, r.jsx)(m.Button, {
          type: "button",
          disabled: Lt,
          onClick: Oe,
          children: "Save changes",
        })),
        (t[194] = Oe),
        (t[195] = Lt),
        (t[196] = Ft))
      : (Ft = t[196]),
    t[197] !== jt || t[198] !== Ft
      ? ((Ut = (0, r.jsxs)("div", {
          className: "flex items-center justify-end gap-2",
          children: [jt, Ft],
        })),
        (t[197] = jt),
        (t[198] = Ft),
        (t[199] = Ut))
      : (Ut = t[199]),
    t[200] !== Pt || t[201] !== Nt || t[202] !== Ut
      ? ((Bt = (0, r.jsxs)(y.DialogContent, {
          size: "lg",
          initialFocus: !1,
          className: "flex flex-col gap-6",
          children: [Pt, Nt, Ut],
        })),
        (t[200] = Pt),
        (t[201] = Nt),
        (t[202] = Ut),
        (t[203] = Bt))
      : (Bt = t[203]),
    t[204] !== oe || t[205] !== Bt
      ? ((zt = (0, r.jsx)(y.Dialog, {
          open: oe,
          onOpenChange: ie,
          children: Bt,
        })),
        (t[204] = oe),
        (t[205] = Bt),
        (t[206] = zt))
      : (zt = t[206]),
    t[207] !== Et || t[208] !== It || t[209] !== At || t[210] !== zt
      ? ((Ht = (0, r.jsxs)(r.Fragment, {
          children: [Et, It, At, zt],
        })),
        (t[207] = Et),
        (t[208] = It),
        (t[209] = At),
        (t[210] = zt),
        (t[211] = Ht))
      : (Ht = t[211]),
    Ht
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(51366 /* vendor/module-51366 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(14041 /* vendor/module-14041 */),
  l = n(82447 /* vendor/module-82447 */),
  c = n(9137 /* vendor/module-9137 */),
  u = n(68058 /* vendor/module-68058 */),
  d = n(44239 /* vendor/module-44239 */),
  p = n(29113 /* vendor/module-29113 */),
  f = n(95793 /* app/components/language-picker */),
  h = n(69853 /* app/components/searchable-select */),
  m = n(66244 /* app/components/button-variants */),
  g = n(57577 /* app/components/combobox */),
  y = n(98980 /* app/components/dialog */),
  v = n(11801 /* app/components/scroll-area */),
  b = n(9664 /* app/components/select-trigger-icon-class-name */),
  S = n(88364 /* app/components/switch */),
  _ = n(34483 /* app/components/typography-variants */),
  x = n(48141 /* app/components/aimodel-select */),
  w = n(46652 /* app/components/on-click-46652 */),
  E = n(21228 /* app/components/on-click-21228 */),
  T = n(42665 /* app/components/on-open */),
  k = n(29789 /* app/components/create-session-footer */),
  C = n(44687 /* app/components/create-session-option-screen */),
  I = n(50547 /* app/components/create-session-sheet-screen */),
  A = n(373 /* app/components/instructions-field */),
  O = n(78086 /* app/components/question-bank-contribution-notice */),
  R = n(78390 /* app/components/setting-row */),
  M = n(19623 /* vendor/module-19623 */),
  P = "max-w-50",
  N = "gap-2 pl-2.5 pr-3 text-xs has-[>svg]:pl-2.5 has-[>svg]:pr-3",
  D = "rounded-lg text-xs";
function j(e) {
  return e.models;
}
function L(e) {
  return {
    sessionMode: e.values.sessionMode,
    language: e.values.language,
    aiModel: e.values.aiModel,
    responseLength: e.values.responseLength,
    responseFormat: e.values.responseFormat,
    responseTone: e.values.responseTone,
    useStarMethod: e.values.useStarMethod,
    useFillerWords: e.values.useFillerWords,
    autoAnswer: e.values.autoAnswer,
    saveTranscription: e.values.saveTranscription,
  };
}
