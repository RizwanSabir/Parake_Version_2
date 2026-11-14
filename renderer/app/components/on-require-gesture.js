// app/components/on-require-gesture.js — webpack module 39911
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LiveCallSessionScreen = function (e) {
  const t = (0, o.c)(13);
  let n;
  t[0] !== e.callSession.id || t[1] !== e.callSession.isLockedByOtherClient
    ? ((n = {
        initialIsLockedByOtherClient: e.callSession.isLockedByOtherClient,
        callSessionId: e.callSession.id,
      }),
      (t[0] = e.callSession.id),
      (t[1] = e.callSession.isLockedByOtherClient),
      (t[2] = n))
    : (n = t[2]);
  const {
    isLockedByOtherClient: i,
    lockVariant: a,
    claimLock: s,
  } = (0, f.useCallSessionLockGuard)(n);
  if (i) {
    let n, o;
    return (
      t[3] !== e
        ? ((n = () => e.exitSession()), (t[3] = e), (t[4] = n))
        : (n = t[4]),
      t[5] !== s ||
      t[6] !== a ||
      t[7] !== e.hasActivePlan ||
      t[8] !== e.isPlanLoading ||
      t[9] !== n
        ? ((o = (0, r.jsx)(k.LockedSessionShell, {
            lockVariant: a,
            onClaim: s,
            onCancel: n,
            hasActivePlan: e.hasActivePlan,
            isPlanLoading: e.isPlanLoading,
          })),
          (t[5] = s),
          (t[6] = a),
          (t[7] = e.hasActivePlan),
          (t[8] = e.isPlanLoading),
          (t[9] = n),
          (t[10] = o))
        : (o = t[10]),
      o
    );
  }
  let l;
  return (
    t[11] !== e
      ? ((l = (0, r.jsx)(le, { ...e })), (t[11] = e), (t[12] = l))
      : (l = t[12]),
    l
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(44572 /* vendor/module-44572 */),
  l = n(27089 /* app/components/on-click-27089 */),
  c = n(97867 /* app/components/theme-provider */),
  u = n(58055 /* app/components/tooltip */),
  d = n(34483 /* app/components/typography-variants */),
  p = n(27005 /* vendor/module-27005 */),
  f = n(76945 /* vendor/module-76945 */),
  h = n(6208 /* vendor/module-6208 */),
  m = n(51374 /* vendor/module-51374 */),
  g = n(69071 /* vendor/module-69071 */),
  y = n(66553 /* vendor/module-66553 */),
  v = n(41400 /* vendor/module-41400 */),
  b = n(29113 /* vendor/module-29113 */),
  S = n(23546 /* vendor/module-23546 */),
  _ = n(57135 /* vendor/module-57135 */),
  x = n(30964 /* vendor/module-30964 */),
  w = n(21699 /* app/components/activate-call-session-screen */),
  E = n(33318 /* app/components/on-record-sample */),
  T = n(86656 /* app/components/ended-or-expired-call-session-screen */),
  k = n(59176 /* app/components/locked-session-shell */),
  C = n(73486 /* app/components/on-click-73486 */),
  I = n(64945 /* app/components/top-bar */),
  A = n(66785 /* app/hooks/use-open-voice-profile */),
  O = n(47058 /* app/hooks/use-ai-messages-screen-size */),
  R = n(32973 /* vendor/module-32973 */),
  M = n(69146 /* app/hooks/use-audio-output-options */),
  P = n(41987 /* app/hooks/use-capture-snapshot */),
  N = n(51290 /* app/hooks/use-meeting-app-stamp */),
  D = n(27144 /* app/components/on-click-27144 */),
  j = n(55402 /* app/hooks/use-microphone-device-id */),
  L = n(17664 /* app/hooks/use-share-output-device-id */),
  F = n(83803 /* app/components/desktop-audio-notice-ui */),
  U = n(74920 /* app/lib/apply-brand-attribute */),
  B = n(37438 /* app/hooks/use-drag-handle */),
  z = n(63324 /* app/components/location-on-screen-provider */),
  H = n(12846 /* vendor/module-12846 */),
  V = n(11998 /* vendor/module-11998 */),
  q = n(27827 /* app/lib/start-27827 */),
  G = n(44825 /* vendor/module-44825 */),
  W = n(21693 /* app/components/shortcut */),
  $ = n(50272 /* app/lib/os-version-raw */),
  Y = n(71386 /* app/components/on-click-71386 */),
  K = n(43052 /* app/components/animated-listening-icon */),
  Z = n(63760 /* app/components/audio-control-button */),
  Q = n(36585 /* app/components/audio-device-select */),
  J = n(33702 /* app/components/on-click-33702 */),
  X = n(44504 /* app/components/audio-tap-dialog */),
  ee = n(43951 /* app/components/on-remove */),
  te = n(22210 /* app/components/combined-transcript-screen */),
  ne = n(98958 /* app/components/end-call-button */),
  re = n(11575 /* app/components/live-session-button */),
  oe = n(46866 /* app/components/minimized-combined-transcript-screen */),
  ie = n(80139 /* vendor/module-80139 */),
  ae = n(30590 /* app/components/session-timer */),
  se = n(87807 /* app/components/transparent-screen */);
function le({
  isAdmin: e,
  callSession: t,
  exitSession: n,
  hasActivePlan: o,
  isPlanLoading: f,
}) {
  function k(e) {
    "windows" === $.os &&
      window.electron.ipcRendererProxy.invoke(
        "renderer/set-is-window-focusable",
        e,
      );
  }
  (0, a.useEffect)(
    () => (
      k(!1),
      () => {
        k(!0);
      }
    ),
    [],
  );
  const [le, ue] = (0, a.useState)(!1),
    de = (0, U.useBrand)();
  function pe(e) {
    ue(e);
  }
  const [fe, he] = (0, a.useState)(!0),
    [me, ge] = (0, a.useState)(!0);
  function ye(e) {
    ge(e),
      window.electron.ipcRendererProxy.invoke(
        "renderer/set-is-transcription-minimized",
        e,
      );
  }
  (0, a.useEffect)(() => {
    window.electron.ipcRendererProxy
      .invoke("renderer/get-is-transcript-open")
      .then((e) => {
        "boolean" == typeof e && he(e);
      }),
      window.electron.ipcRendererProxy
        .invoke("renderer/get-is-transcription-minimized")
        .then((e) => {
          "boolean" == typeof e && ge(e);
        });
  }, []),
    (0, a.useEffect)(() => {
      const e = window.electron.ipcRendererProxy.on("main/focus-window", () => {
        pe(!1);
      });
      return () => {
        e();
      };
    }, []);
  const { data: ve } = (0, $.useVersion)(),
    be = (0, N.useMeetingAppStamp)({
      callSessionId: t.id,
      isActivated: !!t.activatedAt,
      stampedMeetingApp: t.meetingApp,
    }),
    { microphoneDeviceId: Se, setMicrophoneDeviceId: _e } = (0,
    j.useMicrophoneDeviceId)(),
    { shareOutputDeviceId: xe, setShareOutputDeviceId: we } = (0,
    L.useShareOutputDeviceId)(),
    Ee = (0, R.useAudioInputOptions)(),
    Te = (0, M.useAudioOutputOptions)(),
    ke = "win32" === window.electron.platform,
    [Ce, Ie] = (0, a.useState)(!1),
    [Ae, Oe] = (0, a.useState)(!1),
    [Re, Me] = (0, a.useState)(!1),
    Pe = (0, a.useRef)(() => !1),
    Ne = (0, A.useOpenVoiceProfile)(),
    {
      activateSession: De,
      isActivatingSession: je,
      restartPlanSession: Le,
      extendLimitedSession: Fe,
      isExtendingSession: Ue,
      autoExtendStatus: Be,
      isShareTranscribing: ze,
      isAutoAnswerSourceTranscribing: He,
      isShareMuted: Ve,
      shareTranscriptionError: qe,
      startingShareTranscription: Ge,
      startShareTranscription: We,
      stopShareTranscription: $e,
      restartShareTranscription: Ye,
      micOnly: Ke,
      enterMicOnly: Ze,
      leaveMicOnly: Qe,
      updateMetadata: Je,
      metadata: Xe,
      isMicrophoneTranscribing: et,
      isMicrophoneMuted: tt,
      isMicrophoneSilent: nt,
      micNeverHeard: rt,
      microphoneTranscriptionError: ot,
      startingMicrophoneTranscription: it,
      startMicrophoneTranscription: at,
      stopMicrophoneTranscription: st,
      restartMicrophoneTranscription: lt,
      aiMessages: ct,
      isSubmittedAiResponse: ut,
      isStreamingAiResponse: dt,
      isAwaitingAutoDetection: pt,
      isDraftingAnswer: ft,
      generateAiResponse: ht,
      generatingAiResponse: mt,
      clearAiMessages: gt,
      handleResponseCopied: yt,
      startAllTranscription: vt,
      stopAllTranscription: bt,
      captureScreenShot: St,
      isCapturingScreenShot: _t,
      combinedTranscript: xt,
      clearCombinedTranscript: wt,
      switchTranscriptionSettings: Et,
      updateAutoAnswer: Tt,
      updateLanguage: kt,
      isUpdatingAutoAnswer: Ct,
      autoExtendSetting: It,
      isUpdatingLanguage: At,
    } = (0, q.useRealtimeSupport)({
      callSessionId: t.id,
      initialCallSession: t,
      isMobile: !1,
      onAnswerBlocked: (e, t) => Pe.current(e, t),
      activateParams: {
        platform: "desktop-app",
        os: $.os,
        osVersion: $.osVersion,
        version: ve,
        meetingApp: be,
      },
      onRequireGesture: () => Kt(!0),
      onScreenRecordingPermissionDenied: () => Qt("screen-audio"),
      onMicrophonePermissionDenied: () => Qt("microphone"),
      onMicrophoneEvent: (e) => {
        "device-fallback" !== e.type || _e(null);
      },
      onShareEvent: (e) => {
        "device-fallback" !== e.type
          ? Me((0, V.afterShareSilenceEvent)(e).computerSilent)
          : ke && we(null);
      },
    }),
    Ot = (0, h.useMicFallback)({
      callSessionId: t.id,
      isActivated: !!t.activatedAt,
      isMock: t.isMock,
      autoAnswer: t.autoAnswer,
      platform: ke ? "windows" : "mac",
      callAppOpen: !!be,
      micOnly: Ke,
      combinedTranscript: xt,
      shareState: (0, _.shareCaptureState)({
        isStarting: Ge,
        isTranscribing: ze,
        isMuted: Ve,
        hasError: !!qe,
      }),
      computerSilent: Re,
      micNeverHeard: rt,
      offerDeclined: !!Xe.micOnlyOfferDeclined,
      micCheckShown: !!Xe.micCheckShown,
      canChooseMicDevice: Ee.length > 2,
      ui: F.desktopAudioNoticeUi,
      enterMicOnly: Ze,
      leaveMicOnly: Qe,
      chooseMicDevice: () => Ie(!0),
      chooseShareDevice: () => Oe(!0),
      restartShare: Ye,
      retryShare: () => {
        We();
      },
      openPermissionDialog: () => Qt("screen-audio"),
      isScreenPermissionMissing: async () =>
        !(
          await window.electron.ipcRendererProxy.invoke(
            "renderer/get-screen-recording-permission-status",
          )
        ).granted,
      answer: (e) => {
        qt({ kind: "ai-help", ...e });
      },
      updateMetadata: Je,
    });
  Pe.current = Ot.onAnswerBlocked;
  const Rt = (0, m.useMicOnlyVoicePrompt)({
    callSessionId: t.id,
    language: t.language,
    micOnly: Ke,
    answerCount: dt ? ct.length - 1 : ct.length,
    decided: Xe.voicePrompt,
    ui: F.desktopAudioNoticeUi,
    updateMetadata: Je,
    openRecorder: Ne,
  });
  (0, a.useEffect)(() => {
    t.isEndedOrExpired && Rt.offerAtCallEnd();
  }, [t.isEndedOrExpired]),
    (0, P.useCaptureSnapshot)({
      callSessionId: t.id,
      isActivated: !!t.activatedAt,
      isMock: t.isMock,
      combinedTranscript: xt,
      isShareStarting: Ge,
      isShareTranscribing: ze,
      isShareMuted: Ve,
      hasShareError: !!qe,
      meetingApp: be ?? null,
      shareOutputDeviceId: xe,
    });
  const Mt = (0, p.useAutoAnswerIndicatorStatus)({
      autoAnswer: t.autoAnswer,
      sourceTranscribing: He,
      isGenerating: ft,
      combinedTranscript: xt,
    }),
    Pt = (0, a.useRef)(null);
  (0, a.useEffect)(
    () =>
      window.electron.ipcRendererProxy.on("main/share-loopback-error", () => {
        (async () => {
          const e = await window.electron.ipcRendererProxy
            .invoke("renderer/list-output-devices")
            .catch(() => []);
          if (
            "retry-same-device" ===
            (0, H.decideShareLoopbackErrorAction)({
              pinnedDeviceId: xe,
              presentDeviceIds: e.map((e) => e.id),
              lastRetryAtMs: Pt.current,
              nowMs: Date.now(),
            })
          )
            return (Pt.current = Date.now()), void Ye();
          we(null), Ye();
        })();
      }),
    [Ye, we, xe],
  );
  const [Nt, Dt] = (0, a.useState)(null),
    jt = null !== Nt,
    { mutateAsync: Lt, isPending: Ft } = (0, y.useEndCallSession)({
      notify: s.toast.success,
      onEnded: () => n(),
      onError: () => Dt(null),
    });
  async function Ut() {
    Dt("end"), Rt.offerAtCallEnd(), await bt(), Lt({ callSessionId: t.id });
  }
  async function Bt() {
    Dt("leave"), t.activatedAt && Rt.offerAtCallEnd(), await bt(), n();
  }
  const [zt, Ht] = (0, a.useState)(!0);
  function Vt(e) {
    Ht(e);
  }
  function qt(e) {
    return Vt(!1), ht(e);
  }
  async function Gt({ triggeredUsingShortcut: e }) {
    let t;
    try {
      t = await St();
    } catch {
      return void s.toast.error("Failed to capture screenshot.");
    }
    qt({
      kind: "analyze-screen",
      triggeredUsingShortcut: e,
      screenshots: [t],
    });
  }
  (0, D.useMeetingEndedDetector)({
    callSessionId: t.id,
    onEndSession: Ut,
    isEndingSession: Ft || jt,
  }),
    (0, a.useEffect)(
      () => (
        window.electron.ipcRendererProxy.invoke(
          "renderer/set-is-live-call-session-screen-visible",
          { isVisible: !0, resetPrivateMode: !e },
        ),
        () => {
          window.electron.ipcRendererProxy.invoke(
            "renderer/set-is-live-call-session-screen-visible",
            { isVisible: !1, resetPrivateMode: !e },
          );
        }
      ),
      [],
    );
  const { locationOnScreen: Wt, showLocationSelectorScreen: $t } = (0,
  z.useLocationOnScreen)();
  (0, a.useEffect)(() => {
    const e = window.electron.ipcRendererProxy.on(
        "main/hide-live-call-session-screen-shortcut-pressed",
        () => {
          pe(!le);
        },
      ),
      n = window.electron.ipcRendererProxy.on(
        "main/primary-ai-message-shortcut-pressed",
        () => {
          t.activatedAt &&
            !t.isEndedOrExpired &&
            qt({ kind: "ai-help", triggeredUsingShortcut: !0 });
        },
      ),
      r = window.electron.ipcRendererProxy.on(
        "main/secondary-ai-message-shortcut-pressed",
        () => {
          t.activatedAt &&
            !t.isEndedOrExpired &&
            Gt({ triggeredUsingShortcut: !0 });
        },
      ),
      o = window.electron.ipcRendererProxy.on(
        "main/clear-transcript-shortcut-pressed",
        () => {
          t.activatedAt && !t.isEndedOrExpired && wt();
        },
      ),
      i = window.electron.ipcRendererProxy.on(
        "main/chat-shortcut-pressed",
        () => {
          t.activatedAt && !t.isEndedOrExpired && cn();
        },
      );
    return () => {
      e(), n(), r(), o(), i();
    };
  }, [t.activatedAt, t.isEndedOrExpired, qt, cn]);
  const [Yt, Kt] = (0, a.useState)(!1),
    [Zt, Qt] = (0, a.useState)(null),
    Jt = ze || et,
    Xt = je || Ge || it,
    [en, tn] = (0, a.useState)(!1);
  (0, a.useEffect)(() => {
    Jt && t.activatedAt && tn(!0);
  }, [Jt, t.activatedAt]);
  const [nn, rn] = (0, a.useState)(null),
    on = (0, ie.resolveLiveSessionStep)({
      hasActivePlan: o,
      isPlanLoading: f,
      isActivated: !!t.activatedAt,
      hasPickedSessionType: null !== nn,
      isEndedOrExpired: t.isEndedOrExpired,
      isTranscribing: Jt,
      hasConnectedOnce: en,
    });
  (0, c.useThemeScope)((0, ie.themeScopeForStep)(on));
  const [an, sn] = (0, a.useState)(!1);
  function ln(e) {
    sn(e), k(!!e);
  }
  function cn() {
    ln(!an);
  }
  const [un, dn] = (0, a.useState)(!1),
    pn = (0, v.useLogoSize)(),
    fn = Math.round(28 * pn.scale),
    [hn, mn] = (0, a.useState)(null),
    gn = (0, a.useRef)(null),
    yn = (0, a.useCallback)((e) => {
      if ((gn.current?.disconnect(), (gn.current = null), !e)) return;
      const t = new ResizeObserver(() => {
        mn(e.getBoundingClientRect().width);
      });
      t.observe(e), (gn.current = t);
    }, []);
  function vn() {
    var e;
    he((e = !fe)),
      window.electron.ipcRendererProxy.invoke(
        "renderer/set-is-transcript-open",
        e,
      );
  }
  const bn = (0, r.jsx)(K.AnimatedListeningIcon, {
      isMock: t.isMock,
      tooltipContent: "Hide",
      onClick: vn,
      isTranscribing: ze || et,
    }),
    Sn = (0, a.useRef)(null),
    {
      size: _n,
      setSize: xn,
      commitSize: wn,
    } = (0, O.useAiMessagesScreenSize)(Sn, hn),
    { debugMode: En } = (0, g.useAdminDebugMode)(e);
  if (le)
    return (0, r.jsx)(B.DraggableContent, {
      minimized: !0,
      children: (0, r.jsx)(K.AnimatedListeningIcon, {
        isMock: t.isMock,
        tooltipContent: (0, r.jsxs)("div", {
          className: "flex flex-row items-center gap-0.5",
          children: [
            de.name,
            " (",
            (0, r.jsx)(W.Shortcut, {
              shortcuts: [W.ShortcutKey, "H"],
            }),
            ")",
          ],
        }),
        onClick: () => pe(!1),
        minimized: !0,
        isTranscribing: ze || et,
        error: qe || ot || void 0,
      }),
    });
  let Tn;
  return (
    (Tn =
      "activate" === on
        ? (0, r.jsxs)(B.DraggableContent, {
            className: (0, b.cn)(
              "bg-sidebar rounded-window flex max-h-screen shrink-0 flex-col gap-1 overflow-y-hidden border p-1",
              G.SHELL_WIDTH_CLASS,
            ),
            children: [
              (0, r.jsx)(I.TopBar, {
                hasActivePlan: o,
                isPlanLoading: f,
                onMinimize: () => pe(!0),
              }),
              (0, r.jsx)(w.ActivateCallSessionScreen, {
                onBackClick: Bt,
                onSelect: rn,
                isPlanLoading: f,
                mode: t.mode,
                isMock: t.isMock,
              }),
            ],
          })
        : "ended" === on
          ? (0, r.jsxs)(B.DraggableContent, {
              className: (0, b.cn)(
                "bg-sidebar rounded-window flex max-h-screen shrink-0 flex-col gap-1 overflow-y-hidden border p-1",
                G.SHELL_WIDTH_CLASS,
              ),
              children: [
                (0, r.jsx)(I.TopBar, {
                  hasActivePlan: o,
                  isPlanLoading: f,
                  onMinimize: () => pe(!0),
                }),
                (0, r.jsx)(T.EndedOrExpiredCallSessionScreen, {
                  callSession: t,
                  onBackClick: Bt,
                  onStartAnotherMockClick: async function () {
                    Dt("leave"), await bt(), n("createMock");
                  },
                  onExtendClick: async () => {
                    t.isPlanSession
                      ? await Le({ callSessionId: t.id })
                      : await Fe({ callSessionId: t.id }),
                      await vt();
                  },
                  extendingSession: Ue,
                }),
              ],
            })
          : "connect" === on
            ? (0, r.jsxs)(B.DraggableContent, {
                className: (0, b.cn)(
                  "bg-sidebar rounded-window flex max-h-screen shrink-0 flex-col gap-1 overflow-y-hidden border p-1",
                  G.SHELL_WIDTH_CLASS,
                ),
                children: [
                  (0, r.jsx)(I.TopBar, {
                    hasActivePlan: o,
                    isPlanLoading: f,
                    onMinimize: () => pe(!0),
                  }),
                  (0, r.jsx)(E.ConnectCallSessionScreen, {
                    callSession: t,
                    onBackClick:
                      t.activatedAt || null === nn ? Bt : () => rn(null),
                    onConnect: async (e) => {
                      if (f) return;
                      if (
                        ("computer" === e && Ot.onShareTurnedOn(),
                        t.activatedAt)
                      )
                        return void (await vt({ audioSource: e }));
                      const n = !o && nn;
                      null !== n &&
                        (await vt({
                          audioSource: e,
                          activate: () => De(n),
                        }).catch(() => {}));
                    },
                    initialAudioSource: Ke ? "microphone" : "computer",
                    micDeviceId: Se ?? void 0,
                    pickedFree: nn,
                    connecting: Xt,
                    hasActivePlan: o,
                    isPlanLoading: f,
                  }),
                ],
              })
            : (0, r.jsxs)(B.DraggableContent, {
                "data-transparent": "true",
                className: (0, b.cn)(
                  "flex min-h-0 w-full flex-1 gap-1 overflow-y-clip",
                  Wt.startsWith("top") ? "flex-col" : "flex-col-reverse",
                  Wt.endsWith("center")
                    ? "items-center"
                    : Wt.endsWith("left")
                      ? "items-start"
                      : "items-end",
                ),
                children: [
                  (0, r.jsx)(B.DragTarget, {
                    children: (0, r.jsxs)(se.TransparentScreen, {
                      ref: yn,
                      className: "relative",
                      children: [
                        En && t.activatedAt
                          ? (0, r.jsx)(se.TransparentScreen, {
                              className: (0, b.cn)(
                                "absolute bottom-0",
                                Wt.endsWith("left")
                                  ? "left-full ml-2"
                                  : "right-full mr-2",
                              ),
                              children: (0, r.jsx)(l.SessionDebugPanel, {
                                callSession: t,
                                sideOffset: 8,
                                trigger: (0, r.jsx)(re.LiveSessionButton, {
                                  "aria-label": "Session debug",
                                  children: (0, r.jsx)(i.Bug, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                              }),
                            })
                          : null,
                        (0, r.jsxs)("div", {
                          "data-transparent": "true",
                          className: "flex flex-row items-center gap-5",
                          children: [
                            (0, r.jsxs)("div", {
                              "data-transparent": "true",
                              className: "flex flex-row items-center gap-2",
                              children: [
                                un
                                  ? (0, r.jsx)(K.AnimatedListeningIcon, {
                                      isMock: t.isMock,
                                      tooltipContent: "Transcript",
                                      onClick: vn,
                                      showLogo: !0,
                                      logoHeight: fn,
                                      isTranscribing: ze || et,
                                    })
                                  : !fe &&
                                    (0, r.jsx)(K.AnimatedListeningIcon, {
                                      isMock: t.isMock,
                                      tooltipContent: "Transcript",
                                      onClick: vn,
                                      isTranscribing: ze || et,
                                    }),
                                (0, r.jsxs)("div", {
                                  className: "flex flex-row items-center gap-1",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "flex flex-row items-center",
                                      children: [
                                        (0, r.jsx)(Z.AudioControlButton, {
                                          type: "share",
                                          isTranscribing: ze,
                                          isMuted: Ve,
                                          error: qe,
                                          starting: Ge,
                                          onStart: () => {
                                            Ot.onShareTurnedOn(), We();
                                          },
                                          onStop: () => {
                                            Ot.onShareTurnedOff(), $e();
                                          },
                                        }),
                                        ke &&
                                          !t.isMock &&
                                          (0, r.jsx)(Q.AudioDeviceSelect, {
                                            ariaLabel:
                                              "Select audio output to capture",
                                            options: Te,
                                            value: xe,
                                            onChange: (e) => (we(e), Ye()),
                                            disabled: Ge,
                                            open: Ae,
                                            onOpenChange: Oe,
                                          }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex flex-row items-center",
                                      children: [
                                        (0, r.jsx)(Z.AudioControlButton, {
                                          type: "microphone",
                                          isTranscribing: et,
                                          isMuted: tt,
                                          error: ot,
                                          starting: it,
                                          onStart: () => at(),
                                          onStop: st,
                                        }),
                                        nt &&
                                          (0, r.jsx)("div", {
                                            className: "px-1",
                                            children: (0, r.jsx)(d.Typography, {
                                              variant: "meta",
                                              className:
                                                "text-muted-foreground whitespace-nowrap",
                                              children: S.NO_SOUND_STATUS,
                                            }),
                                          }),
                                        (0, r.jsx)(Q.AudioDeviceSelect, {
                                          ariaLabel: "Select microphone",
                                          options: Ee,
                                          value: Se,
                                          onChange: (e) => (_e(e), lt()),
                                          disabled: it,
                                          open: Ce,
                                          onOpenChange: Ie,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              "data-transparent": "true",
                              className: "relative flex flex-col items-center",
                              children: (0, r.jsxs)("div", {
                                "data-transparent": "true",
                                className: "flex flex-row gap-1",
                                children: [
                                  (0, r.jsx)(re.LiveSessionButton, {
                                    disabled: "ai-help" === mt,
                                    shortcut: (0, r.jsx)(W.Shortcut, {
                                      noPlus: !0,
                                      shortcuts: [
                                        W.ShortcutKey,
                                        i.CornerDownLeft,
                                      ],
                                    }),
                                    onClick: () =>
                                      qt({
                                        kind: "ai-help",
                                        triggeredUsingShortcut: !1,
                                      }),
                                    children: "Answer",
                                  }),
                                  (0, r.jsx)(re.LiveSessionButton, {
                                    disabled: "analyze-screen" === mt,
                                    shortcut: (0, r.jsx)(W.Shortcut, {
                                      noPlus: !0,
                                      shortcuts: [
                                        W.ShortcutKey,
                                        W.ShiftKey,
                                        i.CornerDownLeft,
                                      ],
                                    }),
                                    onClick: () =>
                                      Gt({
                                        triggeredUsingShortcut: !1,
                                      }),
                                    children: "Screenshot",
                                  }),
                                  (0, r.jsx)(re.LiveSessionButton, {
                                    className:
                                      "border border-dashed border-black/24 dark:border-white/24",
                                    onMouseDown: cn,
                                    shortcut: (0, r.jsx)(W.Shortcut, {
                                      noPlus: !0,
                                      shortcuts: [
                                        W.ShortcutKey,
                                        W.ShiftKey,
                                        W.SpaceKey,
                                      ],
                                    }),
                                    children: "Chat",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              "data-transparent": "true",
                              className: "flex flex-row items-center gap-1",
                              children: [
                                (0, r.jsxs)(u.Tooltip, {
                                  children: [
                                    (0, r.jsx)(u.TooltipTrigger, {
                                      children: (0, r.jsx)(ce, {
                                        onClick: $t,
                                      }),
                                    }),
                                    (0, r.jsx)(u.TooltipContent, {
                                      children: (0, r.jsxs)("span", {
                                        className:
                                          "flex flex-row items-center gap-0.5",
                                        children: [
                                          "Hold and drag to move (",
                                          (0, r.jsx)(W.Shortcut, {
                                            shortcuts: [
                                              W.ShortcutKey,
                                              W.ShiftKey,
                                              i.Move,
                                            ],
                                          }),
                                          ")",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)(u.Tooltip, {
                                  children: [
                                    (0, r.jsx)(u.TooltipTrigger, {
                                      children: (0, r.jsx)(
                                        re.LiveSessionButton,
                                        {
                                          transparent: !0,
                                          onClick: () => pe(!0),
                                          children: (0, r.jsx)(i.Minimize2, {}),
                                        },
                                      ),
                                    }),
                                    (0, r.jsx)(u.TooltipContent, {
                                      className: "max-w-xs text-center",
                                      children: (0, r.jsxs)("span", {
                                        className:
                                          "flex flex-row items-center gap-0.5",
                                        children: [
                                          "Hide (",
                                          (0, r.jsx)(W.Shortcut, {
                                            shortcuts: [W.ShortcutKey, "H"],
                                          }),
                                          ")",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(ae.SessionTimer, {
                                  callSession: t,
                                  autoExtendStatus: Be,
                                  isExtendingSession: Ue,
                                  autoExtendSetting: It,
                                }),
                                (0, r.jsx)(C.MoreSelect, {
                                  hasActivePlan: o,
                                  isPlanLoading: f,
                                  liveSession: {
                                    callSession: t,
                                    onSettingsUpdate: (e) => {
                                      Et(e);
                                    },
                                    onLanguageChange: kt,
                                    isUpdatingLanguage: At,
                                    onAutoAnswerChange: Tt,
                                    isUpdatingAutoAnswer: Ct,
                                    autoExtend: It,
                                    showLogo: un,
                                    onShowLogoChange: dn,
                                    logoSize: {
                                      canEnlarge: pn.canEnlarge,
                                      canShrink: pn.canShrink,
                                      onEnlarge: pn.enlarge,
                                      onShrink: pn.shrink,
                                      onReset: pn.reset,
                                    },
                                  },
                                }),
                                (0, r.jsx)(ne.EndCallButton, {
                                  callSession: t,
                                  exitSession: Bt,
                                  endSession: Ut,
                                  isEndingSession: "end" === Nt,
                                  isExitingSession: "leave" === Nt,
                                  isExtendingSession: Ue,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  an &&
                    (0, r.jsx)(ee.ChatScreen, {
                      width: hn ?? void 0,
                      onClose: () => ln(!1),
                      onSend: ({ chatInput: e, screenshots: t }) => {
                        qt({
                          kind: (0, x.pickTriggerKind)({
                            chatInput: e,
                            screenshots: t,
                          }),
                          chatInput: e,
                          triggeredUsingShortcut: !1,
                          screenshots: t,
                        });
                      },
                      isSending:
                        "direct-message" === mt || "analyze-screen" === mt,
                      captureScreenShot: St,
                      isCapturingScreenShot: _t,
                    }),
                  me &&
                    fe &&
                    (0, r.jsx)(oe.MinimizedCombinedTranscriptScreen, {
                      combinedTranscript: xt,
                      isMicrophoneTranscribing: et,
                      isShareTranscribing: ze,
                      width: hn ?? void 0,
                      listeningIndicator: bn,
                      onUnMinimize: () => ye(!1),
                      onClear: wt,
                    }),
                  (0, r.jsxs)("div", {
                    "data-transparent": "true",
                    ref: Sn,
                    className: (0, b.cn)(
                      "flex w-full flex-1 flex-row gap-1 overflow-hidden",
                      Wt.endsWith("left") && "flex-row-reverse",
                      Wt.endsWith("center") ? "justify-center" : "justify-end",
                      Wt.startsWith("bottom") ? "items-end" : "items-start",
                    ),
                    children: [
                      !me &&
                        fe &&
                        (0, r.jsx)(te.CombinedTranscriptScreen, {
                          callSession: t,
                          combinedTranscript: xt,
                          isMicrophoneTranscribing: et,
                          isShareTranscribing: ze,
                          listeningIndicator: bn,
                          onLanguageChange: kt,
                          isUpdatingLanguage: At,
                          onMinimize: () => ye(!0),
                          onClear: wt,
                        }),
                      (0, r.jsx)(Y.AiMessagesScreen, {
                        aiMessages: ct,
                        onClearAiMessages: gt,
                        onResponseCopied: yt,
                        isSubmittedAiResponse: ut,
                        isStreamingAiResponse: dt,
                        isAwaitingAutoDetection: pt,
                        answerPanelStatus: Mt,
                        autoAnswer: t.autoAnswer,
                        onAutoAnswerChange: Tt,
                        isUpdatingAutoAnswer: Ct,
                        isMinimized: zt,
                        setIsMinimized: Vt,
                        width: _n.width,
                        height: _n.height,
                        onResize: xn,
                        onResizeEnd: wn,
                      }),
                    ],
                  }),
                ],
              })),
    (0, r.jsxs)(r.Fragment, {
      children: [
        Tn,
        (0, r.jsx)(X.AudioTapDialog, {
          open: Yt,
          setOpen: Kt,
          onAllow: () => {
            Kt(!1), We();
          },
          onDeny: () => {
            Kt(!1), Ot.onShareStartCancelled();
          },
        }),
        (0, r.jsx)(J.AudioPermissionDialog, {
          permission: Zt,
          onOpenChange: (e) => !e && Qt(null),
        }),
      ],
    })
  );
}
function ce(e) {
  const t = (0, o.c)(6),
    { onClick: n } = e,
    a = (0, B.useDragHandle)();
  let s, l, c;
  return (
    t[0] !== a
      ? ((s = (e) => a?.onPointerDown(e, "move_button")),
        (t[0] = a),
        (t[1] = s))
      : (s = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((l = (0, r.jsx)(i.Move, { className: "h-4 w-4" })), (t[2] = l))
      : (l = t[2]),
    t[3] !== n || t[4] !== s
      ? ((c = (0, r.jsx)(re.LiveSessionButton, {
          transparent: !0,
          onClick: n,
          onPointerDown: s,
          children: l,
        })),
        (t[3] = n),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
