// app/lib/is-activated.js — webpack module 26241
// params: (e, t, n) = (module, exports, require)
t.useRealtimeSupport = function (
  {
    callSessionId: e,
    initialCallSession: t,
    isMobile: n,
    onAnswerBlocked: M,
    handlesActivationErrors: P = !1,
    activateParams: N,
  },
  {
    useShareTranscription: D,
    useMicrophoneTranscription: j,
    useAiMessages: L,
    coupleShareAndMicrophone: F,
    transcriptFlushTransport: U,
    audioProcessor: B,
    onSpeakerIdentificationSkipped: z,
    retryUserQuery: H,
  },
) {
  const V = S.api.useUtils(),
    q = (0, r.useRef)(t.activatedAt ?? null),
    G = async (e) => {
      const t = !!q.current;
      e.activatedAt && (q.current = e.activatedAt),
        V.callSession.get.setData({ callSessionId: e.id }, (t) =>
          t ? { ...t, ...e } : void 0,
        ),
        !t &&
          e.activatedAt &&
          V.callSession.getLiveCount.setData(void 0, (e) =>
            e ? { liveCount: e.liveCount + 1 } : e,
          ),
        V.callSession.getLiveCount.invalidate(),
        V.callSession.getMany.refetch(),
        V.callSession.getList.refetch(),
        await V.user.get.refetch();
    },
    { data: W, dataUpdatedAt: $ } = S.api.callSession.serverTime.useQuery(
      void 0,
      {
        gcTime: 0,
        retry: !1,
      },
    );
  (0, r.useEffect)(() => {
    W && (0, h.setServerClock)(W.now, $);
  }, [W, $]);
  const { data: Y } = S.api.user.get.useQuery(void 0, { retry: H }),
    { debugMode: K, setDebugMode: Z } = (0, _.useAdminDebugMode)(Y?.isAdmin),
    {
      data: Q,
      isLoading: J,
      isFetchedAfterMount: X,
      isError: ee,
    } = S.api.callSession.get.useQuery(
      { callSessionId: e },
      {
        refetchInterval: a.callSessionRefetchInterval,
        refetchIntervalInBackground: !0,
        refetchOnReconnect: "always",
        enabled: !!e,
        initialData: { ...t, isLockedByOtherClient: !1 },
      },
    );
  (0, I.usePingSession)({ callSession: Q }),
    Q?.activatedAt && !q.current && (q.current = Q.activatedAt);
  const te = () =>
      !!(
        (e
          ? V.callSession.get.getData({ callSessionId: e })?.isMock
          : void 0) ?? t.isMock
      ),
    ne = (0, C.useMockInterviewer)({ callSessionId: e, isMock: te }),
    re = (0, A.useReportLiveCallSessionError)({ callSessionId: e }),
    { mutateAsync: oe, isPending: ie } =
      S.api.callSession.status.activate.useMutation({
        onSuccess: G,
        meta: P ? u.handledErrorMutationMeta : void 0,
      }),
    { mutateAsync: ae } =
      S.api.callSession.generateSpeechmaticsApiKey.useMutation(),
    se = async () => {
      if (!e)
        throw new Error("Call session ID is required to mint Speechmatics key");
      return ae({ callSessionId: e });
    },
    le = async () => {
      if (!e) return null;
      const t = V.callSession.get.getData({ callSessionId: e });
      return t?.transcriptionVocabulary
        ? t.transcriptionVocabulary
        : (
            await V.callSession.get.fetch(
              { callSessionId: e },
              { staleTime: 0, retry: !1 },
            )
          ).transcriptionVocabulary;
    },
    ce = (e) => ({
      getSpeechmaticsApiKey: se,
      language: e,
      getAdditionalVocab: le,
    }),
    ue = (e) => {
      if (!q.current && !e?.activate)
        throw new Error(
          "Cannot start transcription before the session is activated",
        );
    },
    de = async (e, t) => {
      te() && e?.activate && !q.current && (await e.activate(), (e = void 0));
      const n = (0, w.createConnectGate)({
          isActivated: () => !!q.current,
          activate: e?.activate,
        }),
        r = await Promise.allSettled([
          t.required(n.captured).finally(n.abort),
          t.optional?.(n.follow),
        ]);
      if (n.activationError) throw n.activationError;
      for (const e of r) if ("rejected" === e.status) throw e.reason;
    },
    { mutateAsync: pe, isPending: fe } =
      S.api.callSession.status.extendLimitedSession.useMutation({
        onSuccess: G,
      }),
    { mutateAsync: he, isPending: me } =
      S.api.callSession.status.restartPlanSession.useMutation({
        onSuccess: G,
      }),
    ge = fe || me,
    ye = m.sessionMetadataSchema.safeParse((Q ?? t).metadata).data ?? {},
    ve = (0, r.useRef)(() => {}),
    be = (0, r.useRef)(() => {}),
    Se = (0, r.useRef)(() => {}),
    [_e, xe] = (0, r.useState)(() =>
      n || t.isMock || !ye.micOnly ? null : { ...ye.micOnly, restored: !0 },
    ),
    we = (0, r.useRef)(!!_e),
    Ee = (0, r.useRef)(_e?.since ?? null),
    Te = (e) => {
      (we.current = !!e), (Ee.current = e?.since ?? null), xe(e);
    },
    ke = !!_e,
    { mutate: Ce } = S.api.callSession.metadata.update.useMutation({
      meta: c.fireAndForgetMutationMeta,
      onError: (e, { callSessionId: t, metadata: n }) => {
        b.log.warn(e, {
          code: v.codes.liveCall.session_metadata_save_failed,
          callSessionId: t,
          fields: Object.keys(n),
        });
      },
    }),
    Ie = (t) => {
      e &&
        (V.callSession.get.setData({ callSessionId: e }, (e) =>
          e ? { ...e, metadata: { ...e.metadata, ...t } } : e,
        ),
        Ce({ callSessionId: e, metadata: t }));
    },
    [Ae, Oe] = (0, r.useState)({ silent: !1, everHeard: !1 }),
    [Re] = (0, r.useState)(d.createAnswerLatencyTracker),
    [Me] = (0, r.useState)(f.createMicOnlySummary),
    Pe = (e, t) =>
      (0, g.resolveSpeakerIdentity)(
        { type: t, speaker: e.speaker ?? null },
        Q?.identifiedSpeakerLabel ?? null,
      ).party,
    Ne = (e, t) => "assisted-user" === Pe(e, t),
    De = (e, t) => {
      void 0 === e.audioEndedAt ||
        Ne(e, t) ||
        Re.recordQuestionFinal({
          audioEndedAt: e.audioEndedAt,
          receivedAt: Date.now(),
          audioUnsentMs: e.audioUnsentMs,
          audioUnackedMs: e.audioUnackedMs,
        });
    },
    je = (0, r.useRef)({
      autoOff: 0,
      forcedEou: 0,
      fallbackTriggers: 0,
    }),
    Le = (0, r.useRef)(() => {}),
    [Fe] = (0, r.useState)(() => (0, p.createCallerTurn)((e) => Le.current(e))),
    Ue = (e, t) => {
      e.content.trim() && !Ne(e, t) && Fe.heard();
    },
    {
      addTranscriptToCombined: Be,
      addPartialTranscriptToCombined: ze,
      clearCombinedTranscript: He,
      combinedTranscript: Ve,
      combinedTranscriptRef: qe,
      transcriptClearedAtRef: Ge,
      handleEndOfShareUtterance: We,
      handleEndOfMicrophoneUtterance: $e,
      setEntriesSaveState: Ye,
      setEntryDetection: Ke,
    } = (0, T.useCombinedTranscript)({
      callSessionId: e,
      initialTranscriptClearedAt: ye.transcriptClearedAt,
      onEntriesCompleted: (e) => ve.current(e),
      onTerminalFlush: () => be.current(),
    }),
    Ze = (0, R.useTranscriptSaveQueue)({
      callSessionId: e,
      onSaveStateChange: Ye,
      transport: U,
    });
  (ve.current = Ze.enqueue),
    (be.current = () => {
      Ze.flushTerminal("awaited");
    });
  const Qe = (e) => {
      e ? (Fe.reset(), Se.current(!0)) : Fe.signalled();
    },
    Je = D({
      callSessionId: e,
      interviewer: n ? void 0 : ne,
      onAddTranscript: (e) => {
        n || (De(e, "share"), Ue(e, "share")),
          Be({ transcript: e, type: "share" });
      },
      onAddPartialTranscript: (e) => {
        n || Ue(e, "share"), ze({ transcript: e, type: "share" });
      },
      onEndOfUtterance: (e) => {
        We(), n || Qe(e);
      },
      onStopTranscription: () => {
        F &&
          !we.current &&
          (dt.cancelRecheck(), rt.stopTranscription(), dt.stopAiResponse());
      },
    }),
    [Xe, et] = (0, r.useState)(!1),
    tt = (0, O.useSpeakerIdentification)({
      isMobile: n,
      micOnly: ke,
      identifiesNow: () => n || we.current,
      callSessionId: e,
      reportLiveCallSessionError: re,
      onIdentificationSkipped: z,
    }),
    nt = () => {
      const e = qe.current.findLast(
        (e) => "microphone" === e.type || "combined" === e.type,
      );
      return e && !e.completed
        ? e.type
        : n || we.current
          ? "combined"
          : "microphone";
    },
    rt = j({
      isMobile: n,
      callSessionId: e,
      interviewer: n ? ne : void 0,
      onAddTranscript: (e) => {
        const t = nt();
        "combined" === t &&
          (De(e, t), Ue(e, t), e.content.trim() && Me.noteLine(Pe(e, t))),
          Be({ transcript: e, type: t });
      },
      onAddPartialTranscript: (e) => {
        const t = nt();
        "combined" === t && Ue(e, t), ze({ transcript: e, type: t });
      },
      onEndOfUtterance: (e) => {
        $e(), (n || we.current) && Qe(e);
      },
      onSpeakerIdIgnored: tt.handleIdentifiersIgnored,
      onSourceEvent: (e) => {
        "silence-detected" === e.type
          ? Oe((t) => ({
              silent: !0,
              everHeard: t.everHeard || e.everReceivedAudio,
            }))
          : "silence-ended" === e.type &&
            Oe((t) => ({
              silent: !1,
              everHeard: t.everHeard || "sound" === e.endedBy,
            }));
      },
    }),
    ot = (e) => ({ ...ce(e), speakerDiarization: n || we.current }),
    [it, at] = (0, r.useState)(!1),
    st = async (e) => {
      if (Q && !it && !rt.isTranscribing) {
        ue(e), at(!0);
        try {
          await de(e, {
            required: (e) =>
              tt.startIdentified(
                { callSessionId: Q.id, language: Q.language },
                (t, n) =>
                  rt.startTranscription({
                    ...ot(Q.language),
                    speakers: t,
                    enrollmentObservedUpdatedAt: n,
                    beforeConnect: e,
                  }),
              ),
          });
        } finally {
          at(!1);
        }
      }
    },
    lt =
      (Y?.callCredits ?? 0) >= s.SESSION_CREDIT_COST || (Q ?? t).isPlanSession,
    { autoExtendStatus: ct, setHasChatActivitySinceLastExtension: ut } = (0,
    E.useAutoExtendCreditSession)({
      canExtend: lt,
      callSession: Q,
      isShareTranscribing: Je.isTranscribing,
      isMicrophoneTranscribing: rt.isTranscribing,
      isExtendingSession: ge,
      extendLimitedSession: pe,
    }),
    dt = L({
      callSession: Q,
      setHasChatActivitySinceLastExtension: ut,
      combinedTranscriptRef: qe,
      transcriptClearedAtRef: Ge,
      forceEndOfShareUtterance: Je.forceEndOfUtterance,
      forceEndOfMicrophoneUtterance: rt.forceEndOfUtterance,
      setTranscriptEntriesSaveState: (e, t) => {
        "inFlight" === t
          ? Ze.markInFlight(e)
          : "saved" === t
            ? Ze.markSaved(e)
            : Ze.markPending(e);
      },
      setTranscriptEntryDetection: Ke,
      initialAiMessagesClearedAt: ye.aiMessagesClearedAt,
      isMobile: n,
      micOnlySinceRef: Ee,
      onAnswerBlocked: M,
      debugMode: K,
      answerLatency: Re,
    });
  (Se.current = (e, t = "autoEou") => {
    Q?.autoAnswer
      ? e
        ? (je.current.forcedEou += 1)
        : (Re.noteAutoCause(t),
          dt.generateAiResponse({
            kind: "auto-ai-help",
            autoTriggerSource: "autoIdle" === t ? "idle" : "eou",
          }))
      : (je.current.autoOff += 1);
  }),
    (Le.current = (e) => {
      "autoIdle" === e && (n || we.current ? $e() : We()),
        Q?.autoAnswer &&
          ("autoIdle" === e && (je.current.fallbackTriggers += 1),
          Se.current(!1, e));
    }),
    (0, r.useEffect)(() => () => Fe.reset(), [Fe]);
  const pt = (0, r.useRef)(!1),
    ft = (0, r.useRef)(() => {});
  ft.current = () => {
    if (pt.current) return;
    const r = je.current,
      o = dt.getAutoTriggerCounts(),
      { autoOff: i, ...a } = r;
    (Object.values(a).some((e) => e > 0) ||
      Object.values(o).some((e) => e > 0)) &&
      ((pt.current = !0),
      b.log.info("auto-answer trigger summary", {
        code: v.codes.liveCall.auto_answer_triggers,
        callSessionId: e ?? t.id,
        isMobile: n,
        combinedMic: we.current,
        autoAnswer: !!Q?.autoAnswer,
        lateEndOfUtterances: Fe.lateSignals(),
        ...r,
        ...o,
      }));
  };
  const ht = (0, r.useRef)(!1),
    mt = (0, r.useRef)(() => {});
  mt.current = () => {
    if (ht.current) return;
    const r = Re.summary();
    r &&
      ((ht.current = !0),
      b.log.info("answer latency summary", {
        code: v.codes.liveCall.answer_latency,
        callSessionId: e ?? t.id,
        isMobile: n,
        combinedMic: we.current,
        autoAnswer: !!Q?.autoAnswer,
        ...r,
      }));
  };
  const gt = (0, r.useRef)(!1),
    yt = (0, r.useRef)(() => {});
  (yt.current = () => {
    if (gt.current) return;
    const n = Me.build((0, h.serverNow)().getTime());
    n &&
      ((gt.current = !0),
      (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.session_summary, {
        callSessionId: e ?? t.id,
        hasVoiceLabel: !!Q?.identifiedSpeakerLabel,
        autoAnswer: !!Q?.autoAnswer,
        autoAnswersSent: dt.getAutoTriggerCounts().sent,
        ...n,
      }));
  }),
    (0, r.useEffect)(() => {
      Me.noteMode(_e, (0, h.serverNow)().getTime());
    }, [_e, Me]),
    (0, r.useEffect)(() => {
      Q?.isEndedOrExpired && (ft.current(), yt.current());
    }, [Q?.isEndedOrExpired]),
    (0, r.useEffect)(
      () => () => {
        ft.current(), mt.current(), yt.current();
      },
      [],
    );
  const vt = async () => {
      Q &&
        rt.isTranscribing &&
        (await tt.startIdentified(
          { callSessionId: Q.id, language: Q.language },
          (e, t) =>
            rt.restartSession({
              ...ot(Q.language),
              speakers: e,
              enrollmentObservedUpdatedAt: t,
            }),
        ));
    },
    bt = (0, r.useRef)(_e?.since ?? null);
  (0, r.useEffect)(() => {
    const t = _e?.since ?? null;
    t !== bt.current &&
      (!_e || (rt.isTranscribing && Q?.activatedAt)) &&
      ((bt.current = t),
      Ie({ micOnly: _e ? { since: _e.since, via: _e.via } : null }),
      _e &&
        (0, o.trackClientEvent)(i.mixpanelEvents.micFallback.mic_live, {
          callSessionId: e,
          via: _e.via,
          msSinceSwitch: (0, h.serverNow)().getTime() - _e.since.getTime(),
        }));
  }, [_e, rt.isTranscribing, Q?.activatedAt]),
    (0, r.useEffect)(() => {
      Q?.isEndedOrExpired &&
        (re({
          severity: "info",
          source: "useRealtimeSupport.isEndedOrExpired",
          reason: "session-expired",
          error: new Error("session-expired"),
        }),
        dt.cancelRecheck(),
        Promise.allSettled([
          Je.stopTranscription(),
          rt.stopTranscription(),
        ]).then(() => mt.current()),
        dt.stopAiResponse(),
        Ze.flushTerminal("awaited"));
    }, [Q?.isEndedOrExpired]);
  const St = X && !ee && !!Q?.isLockedByOtherClient;
  (0, r.useEffect)(() => {
    St &&
      (re({
        severity: "info",
        source: "useRealtimeSupport.isLockLost",
        reason: "session-taken-over",
        error: new Error("session-taken-over"),
      }),
      x.callSessionLockBus.handle(
        y.ServerError.callSessionLockedToOtherClient(),
      ));
  }, [St]),
    (0, r.useEffect)(() => {
      if (B)
        return (
          B.start().catch((e) => {
            re({
              severity: "error",
              source: "useRealtimeSupport.audioProcessor.start",
              reason: "audio-processor-start-failed",
              error: e,
            });
          }),
          () => {
            B.stop().catch((e) => {
              re({
                severity: "warning",
                source: "useRealtimeSupport.audioProcessor.stop",
                reason: "audio-processor-stop-failed",
                error: e,
              });
            });
          }
        );
    }, []),
    (0, k.useConnectivityTelemetry)({
      isShareTranscribing: Je.isTranscribing,
      isMicrophoneTranscribing: rt.isTranscribing,
      reportLiveCallSessionError: re,
    });
  const _t = (0, r.useRef)(!1);
  (0, r.useEffect)(() => {
    if (_t.current) return;
    if (!Je.isTranscribing && !rt.isTranscribing) return;
    _t.current = !0;
    const e = Q ?? t;
    (0, o.trackClientEvent)(i.mixpanelEvents.interviewSession.connected, {
      callSessionId: e.id,
      mode: e.mode,
      platform: N.platform,
      isMock: e.isMock,
    });
  }, [Je.isTranscribing, rt.isTranscribing]);
  const xt = async ({ newLanguage: t }) => {
      e &&
        (Je.isTranscribing || rt.isTranscribing) &&
        (te() &&
          (0, o.trackClientEvent)(
            i.mixpanelEvents.mockInterview.language_switched,
            { callSessionId: e, language: t },
          ),
        Je.isTranscribing && Je.restartSession({ ...ce(t) }),
        rt.isTranscribing &&
          tt.startIdentified({ callSessionId: e, language: t }, (e, n) =>
            rt.restartSession({
              ...ot(t),
              speakers: e,
              enrollmentObservedUpdatedAt: n,
            }),
          ));
    },
    wt = {
      onMutate: async ({ callSessionId: e, ...t }) => {
        await V.callSession.get.cancel({ callSessionId: e });
        const n = V.callSession.get.getData({ callSessionId: e });
        return (
          V.callSession.get.setData({ callSessionId: e }, (e) =>
            e ? { ...e, ...t } : e,
          ),
          { previous: n, id: e }
        );
      },
      onError: (e, t, n) => {
        n?.previous &&
          V.callSession.get.setData({ callSessionId: n.id }, n.previous);
      },
      onSuccess: (e) => {
        V.callSession.get.setData({ callSessionId: e.id }, (t) =>
          t ? { ...t, ...e } : void 0,
        ),
          V.callSession.getMany.refetch(),
          V.callSession.getList.refetch();
      },
    },
    Et = S.api.callSession.updateLive.useMutation(wt),
    Tt = S.api.callSession.updateLive.useMutation(wt),
    kt = S.api.callSession.updateLive.useMutation(wt),
    Ct = Q ?? t,
    It = (0, l.hasAutoExtendSwitch)(Ct)
      ? {
          value: Ct.autoExtend,
          onChange: (t) => {
            e && Tt.mutate({ callSessionId: e, autoExtend: t });
          },
          isUpdating: Tt.isPending,
        }
      : void 0;
  return {
    callSession: Q || t,
    isCallSessionLoading: J,
    activateSession: (t) => {
      if (!e) throw new Error("Call session ID is required");
      return oe({ callSessionId: e, free: t, ...N });
    },
    isActivatingSession: ie,
    restartPlanSession: he,
    extendLimitedSession: pe,
    isExtendingSession: ge,
    canExtend: lt,
    autoExtendStatus: ct,
    isShareTranscribing: Je.isTranscribing,
    isShareMuted: Je.isMuted,
    shareTranscriptionError: Je.displayError,
    startingShareTranscription: Xe,
    startShareTranscription: async () => {
      if (Q && !Xe && !Je.isTranscribing) {
        ue(), et(!0);
        try {
          await Je.startTranscription({ ...ce(Q.language) });
        } finally {
          et(!1);
        }
      }
    },
    stopShareTranscription: Je.stopTranscription,
    restartShareTranscription: async () => {
      Je.clearDisplayError?.(),
        Q &&
          Je.isTranscribing &&
          (await Je.restartSession(ce(Q.language), {
            reacquireStream: !0,
          }));
    },
    changeSharedTab: Je.changeSharedTab,
    videoStream: Je.videoStream,
    isMicrophoneTranscribing: rt.isTranscribing,
    isMicrophoneMuted: rt.isMuted,
    microphoneTranscriptionError: rt.displayError,
    startingMicrophoneTranscription: it,
    startMicrophoneTranscription: st,
    stopMicrophoneTranscription: rt.stopTranscription,
    restartMicrophoneTranscription: async () => {
      rt.clearDisplayError?.(),
        Q &&
          rt.isTranscribing &&
          (await tt.startIdentified(
            { callSessionId: Q.id, language: Q.language },
            (e, t) =>
              rt.restartSession(
                {
                  ...ot(Q.language),
                  speakers: e,
                  enrollmentObservedUpdatedAt: t,
                },
                { reacquireStream: !0 },
              ),
          ));
    },
    isMicrophoneSilent: Ae.silent && rt.isTranscribing && !rt.isMuted,
    micNeverHeard: Ae.silent && !Ae.everHeard,
    micOnly: _e,
    enterMicOnly: async (e) => {
      we.current ||
        n ||
        te() ||
        (Te({ since: (0, h.serverNow)(), via: e, restored: !1 }),
        Oe((e) => ({ ...e, silent: !1 })),
        Je.isTranscribing && (await Je.stopTranscription()),
        rt.isTranscribing ? await vt() : "share-off" !== e && (await st()));
    },
    leaveMicOnly: async () => {
      we.current && (Te(null), Oe((e) => ({ ...e, silent: !1 })), await vt());
    },
    updateMetadata: Ie,
    metadata: m.sessionMetadataSchema.safeParse((Q ?? t).metadata).data ?? {},
    startAllTranscription: async (e) => {
      if (Q)
        if (
          (ue(e),
          "microphone" !== e?.audioSource ||
            we.current ||
            Te({
              since: (0, h.serverNow)(),
              via: "connect",
              restored: !1,
            }),
          "computer" !== e?.audioSource && we.current)
        )
          await st(e);
        else {
          et(!0), at(!0);
          try {
            await de(e, {
              required: (e) =>
                Je.startTranscription({
                  ...ce(Q.language),
                  beforeConnect: e,
                }),
              optional: (e) =>
                tt.startIdentified(
                  { callSessionId: Q.id, language: Q.language },
                  (t, n) =>
                    rt.startTranscription({
                      ...ot(Q.language),
                      speakers: t,
                      enrollmentObservedUpdatedAt: n,
                      beforeConnect: e,
                    }),
                ),
            });
          } finally {
            et(!1), at(!1);
          }
        }
    },
    stopAllTranscription: async () => {
      dt.cancelRecheck(),
        Fe.reset(),
        await Promise.allSettled([
          Je.stopTranscription(),
          rt.stopTranscription(),
        ]),
        dt.stopAiResponse(),
        await Ze.flushTerminal("awaited");
    },
    captureScreenShot: Je.captureScreenShot,
    isCapturingScreenShot: Je.isCapturingScreenShot ?? !1,
    isAutoAnswerSourceTranscribing:
      n || ke ? rt.isTranscribing : Je.isTranscribing,
    ...dt,
    combinedTranscript: Ve,
    clearCombinedTranscript: He,
    switchTranscriptionSettings: xt,
    updateAutoAnswer: (t) => {
      e && Et.mutate({ callSessionId: e, autoAnswer: t });
    },
    updateLanguage: (t) => {
      e &&
        kt.mutate(
          { callSessionId: e, language: t },
          {
            onSuccess: (e) => {
              xt({ newLanguage: e.language });
            },
          },
        );
    },
    isUpdatingAutoAnswer: Et.isPending,
    autoExtendSetting: It,
    isUpdatingLanguage: kt.isPending,
    debugMode: K,
    setDebugMode: Z,
  };
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(87093 /* vendor/module-87093 */),
  i = n(22764 /* vendor/module-22764 */),
  a = n(33056 /* vendor/module-33056 */),
  s = n(46852 /* vendor/module-46852 */),
  l = n(3275 /* vendor/module-3275 */),
  c = n(96241 /* vendor/module-96241 */),
  u = n(90375 /* vendor/module-90375 */),
  d = n(39713 /* vendor/module-39713 */),
  p = n(83889 /* vendor/module-83889 */),
  f = n(64210 /* vendor/module-64210 */),
  h = n(72974 /* vendor/module-72974 */),
  m = n(64808 /* vendor/module-64808 */),
  g = n(77862 /* vendor/module-77862 */),
  y = n(353 /* vendor/module-353 */),
  v = n(29776 /* vendor/module-29776 */),
  b = n(37148 /* app/lib/set-telemetry-sdk */),
  S = n(44189 /* vendor/module-44189 */),
  _ = n(69071 /* vendor/module-69071 */),
  x = n(18799 /* vendor/module-18799 */),
  w = n(88355 /* vendor/module-88355 */),
  E = n(85619 /* vendor/module-85619 */),
  T = n(15008 /* vendor/module-15008 */),
  k = n(33875 /* vendor/module-33875 */),
  C = n(32103 /* vendor/module-32103 */),
  I = n(41637 /* vendor/module-41637 */),
  A = n(83475 /* vendor/module-83475 */),
  O = n(55014 /* vendor/module-55014 */),
  R = n(11935 /* vendor/module-11935 */);
