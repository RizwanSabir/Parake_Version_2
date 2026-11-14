// app/lib/fire-recheck.js — webpack module 58739
// params: (e, t, n) = (module, exports, require)
t.useAiMessages = function (
  {
    callSession: e,
    setHasChatActivitySinceLastExtension: t,
    combinedTranscriptRef: n,
    transcriptClearedAtRef: y,
    forceEndOfShareUtterance: v,
    forceEndOfMicrophoneUtterance: b,
    setTranscriptEntriesSaveState: S,
    setTranscriptEntryDetection: _,
    initialAiMessagesClearedAt: x,
    isMobile: w = !1,
    micOnlySinceRef: E,
    onAnswerBlocked: T,
    debugMode: k = !1,
    answerLatency: C,
  },
  I,
) {
  const {
      chatTransport: A,
      handleUnauthorized: O,
      handleClientUpdateRequired: R,
      trackEvent: M,
      showErrorToast: P,
      showInfoToast: N,
      partsToContent: D,
      hydrateTurn: j,
      collectPendingTranscriptEntries: L,
      callSessionLockBus: F,
    } = I,
    { mutate: U } = g.api.callSession.metadata.update.useMutation(),
    { data: B } = g.api.configuration.getVercelRegion.useQuery(),
    { data: z } = g.api.callSession.aiMessages.get.useQuery(
      { callSessionId: e?.id ?? "" },
      {
        enabled: !!e?.id,
        staleTime: 1 / 0,
        gcTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnMount: "always",
      },
    ),
    { mutate: H } = g.api.feedback.recordCopied.useMutation({
      meta: l.fireAndForgetMutationMeta,
    }),
    { mutate: V } = g.api.callSession.recordAnswerTiming.useMutation({
      meta: l.fireAndForgetMutationMeta,
    }),
    q = () => {
      const e = he.current?.requestSettled();
      e && V(e);
    },
    G = (0, i.useRef)(x ?? null),
    W = (0, i.useRef)(e);
  (0, i.useEffect)(() => {
    W.current = e;
  }, [e]);
  const $ = (0, i.useRef)(k);
  (0, i.useEffect)(() => {
    $.current = k;
  }, [k]);
  const Y = (0, i.useRef)(null),
    K = (0, i.useRef)(null),
    Z = (0, i.useRef)(!1),
    Q = (0, i.useRef)(0),
    J = (0, i.useRef)([]),
    X = (0, i.useRef)(null),
    ee = (0, i.useRef)({
      sent: 0,
      inFlight: 0,
      manualCooldown: 0,
      detectionErrorRetries: 0,
    }),
    te = (0, i.useRef)(0),
    ne = (0, i.useRef)(!1),
    re = (0, i.useRef)(null),
    oe = (0, i.useRef)("ready"),
    ie = (0, i.useRef)(null),
    ae = (0, i.useRef)(
      (0, d.createRecheckScheduler)({
        fireRecheck: () => {
          ie.current?.({
            kind: "auto-ai-help",
            autoTriggerSource: "recheck",
          });
        },
        getCooldownRemainingMs: () => {
          const e = re.current;
          return null === e ? 0 : 5e3 - (Date.now() - e);
        },
      }),
    ),
    se = (0, i.useRef)(null),
    le = (0, i.useRef)(!0),
    ce = (0, i.useRef)(null),
    ue = (0, i.useRef)(null),
    de = (0, i.useRef)(_);
  de.current = _;
  const [pe, fe] = (0, i.useState)(!1),
    he = (0, i.useRef)(C);
  he.current = C;
  const me = (0, i.useRef)(null),
    ge = (0, i.useRef)(null);
  var ye, ve;
  ge.current ??=
    ((ye = (0, p.withDetectionCapture)(ce, A.fetch)),
    (ve = {
      request: () => {
        const e = me.current;
        (me.current = null), e && he.current?.requestSent(e, Date.now());
      },
      response: () => he.current?.responseReceived(Date.now()),
    }),
    async (e, t) => {
      ve.request();
      const n = await ye(e, t);
      return ve.response(), n;
    });
  const be = () => {
      ue.current && (clearTimeout(ue.current), (ue.current = null));
    },
    Se = (e) => {
      if ((fe(!1), le.current)) return;
      (le.current = !0), be();
      const t = ce.current,
        n = se.current,
        r = t ? t.entryId : n;
      (se.current = null),
        n && n !== r && de.current?.(n, null),
        r &&
          de.current?.(
            r,
            (function (e, t) {
              if (null === e || void 0 === t) return e;
              switch (t) {
                case "detected":
                  return "question";
                case "no-question":
                  return "no-question";
                case "error":
                  return "error";
                case "empty":
                  return null;
              }
            })(e, t?.outcome),
          );
    };
  (0, i.useEffect)(() => be, []);
  const _e = (0, i.useRef)(new Set()),
    {
      messages: xe,
      sendMessage: we,
      stop: Ee,
      setMessages: Te,
      status: ke,
    } = (0, r.useChat)({
      transport: new o.DefaultChatTransport({
        api: A.apiUrl,
        headers: async () => ({
          "x-parakeet-request-source": A.requestSource,
          ...(A.getExtraHeaders ? await A.getExtraHeaders() : {}),
        }),
        fetch: ge.current,
        prepareSendMessagesRequest({ messages: e }) {
          const t = W.current;
          if (!t) throw new Error("Call session not loaded.");
          const r = e[e.length - 1],
            o = r?.metadata;
          if (!o?.trigger)
            throw new Error("No trigger found on the last message.");
          (Y.current = performance.now()),
            (K.current = null),
            (Z.current = !1),
            (X.current = o.trigger),
            (me.current = {
              auto: "auto-ai-help" === o.trigger.kind,
              recheck: "recheck" === o.trigger.autoTriggerSource,
            });
          const i = L(n.current);
          if (
            ((J.current = i.map((e) => e.id)),
            S(J.current, "inFlight"),
            "auto-ai-help" === o.trigger.kind)
          ) {
            const e = (function (e, t) {
              for (let n = e.length - 1; n >= 0; n--) {
                const r = e[n];
                if (!r?.completed || !r.content) continue;
                const { party: o } = (0, h.resolveSpeakerIdentity)(
                  { type: r.type, speaker: r.speaker ?? null },
                  t,
                );
                if ("assisted-user" !== o) return r.id;
              }
              return null;
            })(n.current, t.identifiedSpeakerLabel ?? null);
            (ce.current = null),
              (se.current = e),
              (le.current = !1),
              fe(!0),
              e && de.current?.(e, "detecting"),
              be(),
              (ue.current = setTimeout(() => Se(null), 3e4));
          } else (se.current = null), (le.current = !0), fe(!1);
          return {
            body: {
              callSessionId: t.id,
              pendingTranscriptEntries: i,
              trigger: o.trigger,
              sessionInfo: {
                transcriptClearedAt: y?.current ?? null,
                ...(E?.current ? { micOnlySince: E.current } : {}),
              },
              adminConfig: { debug: $.current },
            },
          };
        },
      }),
      onFinish: (t) => {
        q(), (ne.current = !1);
        const n = X.current;
        (X.current = null),
          t.isAbort ||
            "auto-ai-help" !== n?.kind ||
            "recheck" === n.autoTriggerSource ||
            "error" !== ce.current?.outcome ||
            ((ee.current.detectionErrorRetries += 1), ae.current.arm()),
          ae.current.onStreamSettled(),
          Se(t.isAbort ? null : "no-question"),
          J.current.length > 0 &&
            (S(J.current, t.isAbort ? "pending" : "saved"), (J.current = [])),
          !t.isAbort &&
            Y.current &&
            K.current &&
            e &&
            Math.random() < 0.05 &&
            M(a.mixpanelEvents.aiChatMessage.received, {
              distinct_id: e.userId,
              callSessionId: e.id,
              mode: e.mode,
              isMock: e.isMock,
              triggerKind: t.message.metadata?.trigger?.kind,
              aiModel: e.aiModel,
              contentLength: D(t.message.parts).length,
              screenshotCount: Q.current,
              responseTime: Math.round(performance.now() - Y.current),
              timeToFirstTokenNew: K.current - Y.current,
              vercelRegion: B,
            });
      },
      onError: (e) => {
        q(),
          (ne.current = !1),
          (X.current = null),
          ae.current.onStreamSettled(),
          Se(null),
          S(J.current, "pending"),
          (J.current = []),
          m.ServerError.isUnauthorized(e)
            ? O()
            : m.ServerError.isError(e, "CLIENT_UPDATE_REQUIRED")
              ? R()
              : (m.ServerError.isCallSessionLockedToOtherClient(e) &&
                  F.handle(e)) ||
                P(e);
      },
      experimental_throttle: 100,
    }),
    Ce = (0, i.useRef)(!1);
  (0, i.useEffect)(() => {
    if (Ce.current) return;
    if (!z) return;
    if (xe.length > 0) return void (Ce.current = !0);
    const e = G.current,
      t = z
        .filter((t) => !e || t.trigger.createdAt.getTime() > e.getTime())
        .flatMap((e) => j(e));
    t.length > 0 && Te(t), (Ce.current = !0);
  }, [z, xe.length, Te]),
    (oe.current = ke),
    (0, i.useEffect)(() => {
      const e = xe[xe.length - 1];
      if (
        ("streaming" === ke &&
          !K.current &&
          Y.current &&
          "assistant" === e?.role &&
          e?.parts?.length > 0 &&
          D(e.parts).length > 0 &&
          ((K.current = performance.now()),
          he.current?.firstText(Date.now(), e.metadata?.triggerId ?? null)),
        "streaming" === ke &&
          K.current &&
          !Z.current &&
          "assistant" === e?.role)
      ) {
        const t = (0, s.answerFieldsOf)(e.parts, { done: !1 });
        if (!t || (0, s.hasAnswerWords)(t)) {
          Z.current = !0;
          const e = he.current?.firstAnswerWord(Date.now());
          e && V(e);
        }
      }
    }, [ke, xe, V]),
    (0, i.useEffect)(() => {
      if (le.current) return;
      const e = xe[xe.length - 1];
      "assistant" === e?.role && D(e.parts).length > 0 && Se("question");
    }, [xe]);
  const [Ie, Ae] = (0, i.useState)(null),
    Oe = async () => {
      w ? await b() : await Promise.all([v(), b()]);
    },
    Re = async ({
      kind: r,
      chatInput: o,
      screenshots: i,
      triggeredUsingShortcut: a = !1,
      autoTriggerSource: s,
      acceptedMicOnly: l = !1,
    }) => {
      const u = "auto-ai-help" === r;
      if (u && !e?.autoAnswer) return;
      u || he.current?.notePress(Date.now());
      const d = () =>
        (0, c.judgeAnswerPress)(n.current, {
          isMobile: w,
          isMock: !!W.current?.isMock,
          micOnlySince: E?.current ?? null,
        });
      if ("ai-help" === r && !o && !i?.length && !l && "answer" !== d()) {
        const e = re.current;
        (re.current = Date.now()), await Oe();
        const t = d();
        if ("answer" !== t) {
          re.current = e;
          const n = T?.(t, { triggeredUsingShortcut: a });
          return void (n || N(c.NOTHING_HEARD_MESSAGE));
        }
      }
      if (u) {
        if (
          ne.current ||
          "submitted" === oe.current ||
          "streaming" === oe.current
        )
          return (ee.current.inFlight += 1), void ae.current.arm();
        const e = re.current;
        if (null !== e && Date.now() - e < 5e3)
          return (
            (ee.current.manualCooldown += 1),
            ae.current.arm(),
            void ae.current.onStreamSettled()
          );
        ae.current.cancel();
      } else (re.current = Date.now()), Se(null), ae.current.cancel();
      const p = ++te.current;
      t(!0), Ae(r), u || (Ee(), await Oe());
      try {
        (Y.current = null), (K.current = null);
        const e = [];
        if ((o && e.push({ type: "text", text: o }), i && i.length > 0))
          for (const t of i)
            e.push({ type: "file", url: t, mediaType: "image/jpeg" });
        if (te.current !== p) return;
        const t = {
          kind: r,
          triggeredUsingShortcut: a,
          isMobile: w || !!E?.current,
          parts: e,
          ...(s ? { autoTriggerSource: s } : {}),
        };
        (Q.current = i?.length ?? 0),
          (ne.current = !0),
          u && (ee.current.sent += 1),
          u && fe(!0),
          we({ parts: [], metadata: { trigger: t } });
      } finally {
        te.current === p && Ae(null);
      }
    };
  return (
    (ie.current = Re),
    (0, i.useEffect)(() => {
      const e = ae.current;
      return () => e.cancel();
    }, []),
    {
      aiMessages: (0, u.answersWithScreenshots)(xe),
      clearAiMessages: () => {
        ae.current.cancel(), Ee(), Te([]);
        const t = (0, f.serverNow)();
        (G.current = t),
          e?.id &&
            U({
              callSessionId: e.id,
              metadata: { aiMessagesClearedAt: t },
            });
      },
      generateAiResponse: Re,
      handleResponseCopied: (t) => {
        const n = t.metadata?.triggerId;
        n &&
          e &&
          (_e.current.has(n) ||
            (_e.current.add(n), H({ callSessionId: e.id, triggerId: n })));
      },
      generatingAiResponse: Ie,
      isSubmittedAiResponse: "submitted" === ke,
      isStreamingAiResponse: "streaming" === ke,
      isDraftingAnswer: ("submitted" === ke || "streaming" === ke) && !pe,
      isAwaitingAutoDetection: pe,
      stopAiResponse: Ee,
      cancelRecheck: () => ae.current.cancel(),
      getAutoTriggerCounts: () => ({ ...ee.current }),
    }
  );
};
const r = n(93735 /* vendor/module-93735 */),
  o = n(77902 /* vendor/module-77902 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(22764 /* vendor/module-22764 */),
  s = n(47171 /* vendor/module-47171 */),
  l = n(96241 /* vendor/module-96241 */),
  c = n(93384 /* vendor/module-93384 */),
  u = n(51229 /* vendor/module-51229 */),
  d = n(41509 /* vendor/module-41509 */),
  p = n(33386 /* app/lib/with-detection-capture */),
  f = n(72974 /* vendor/module-72974 */),
  h = n(77862 /* vendor/module-77862 */),
  m = n(353 /* vendor/module-353 */),
  g = n(44189 /* vendor/module-44189 */);
