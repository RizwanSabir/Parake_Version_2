// app/hooks/use-ai-messages.js — webpack module 65563
// params: (e, t, n) = (module, exports, require)
t.useAiMessages = function (e) {
  const t = (0, r.c)(25),
    {
      callSession: n,
      setHasChatActivitySinceLastExtension: i,
      combinedTranscriptRef: b,
      transcriptClearedAtRef: S,
      forceEndOfShareUtterance: _,
      forceEndOfMicrophoneUtterance: x,
      setTranscriptEntriesSaveState: w,
      setTranscriptEntryDetection: E,
      initialAiMessagesClearedAt: T,
      isMobile: k,
      micOnlySinceRef: C,
      onAnswerBlocked: I,
      debugMode: A,
      answerLatency: O,
    } = e,
    R = void 0 !== A && A,
    M = (0, o.useQueryClient)(),
    { apiConfig: P } = (0, p.useApiConfig)(),
    N = P.url + "/api/chat";
  let D, j, L, F;
  t[0] !== N
    ? ((D = {
        apiUrl: N,
        requestSource: "desktop-chat",
        getExtraHeaders: h.getDesktopClientHeaders,
        fetch: f.desktopFetch,
      }),
      (t[0] = N),
      (t[1] = D))
    : (D = t[1]),
    t[2] !== M
      ? ((j = () => (0, y.handleUnauthorized)(M)), (t[2] = M), (t[3] = j))
      : (j = t[3]),
    t[4] !== P.url
      ? ((L = (e) => (0, d.turnToLiveMessages)(e, P.url)),
        (t[4] = P.url),
        (t[5] = L))
      : (L = t[5]),
    t[6] !== D || t[7] !== j || t[8] !== L
      ? ((F = {
          chatTransport: D,
          handleUnauthorized: j,
          handleClientUpdateRequired: m.handleClientUpdateRequired,
          trackEvent: l.trackClientEvent,
          showErrorToast: g.showErrorToast,
          showInfoToast: v,
          partsToContent: c.partsToContent,
          hydrateTurn: L,
          collectPendingTranscriptEntries: u.collectPendingTranscriptEntries,
          callSessionLockBus: a.callSessionLockBus,
        }),
        (t[6] = D),
        (t[7] = j),
        (t[8] = L),
        (t[9] = F))
      : (F = t[9]);
  const U = F;
  let B;
  return (
    t[10] !== O ||
    t[11] !== n ||
    t[12] !== b ||
    t[13] !== R ||
    t[14] !== x ||
    t[15] !== _ ||
    t[16] !== T ||
    t[17] !== k ||
    t[18] !== C ||
    t[19] !== I ||
    t[20] !== i ||
    t[21] !== w ||
    t[22] !== E ||
    t[23] !== S
      ? ((B = {
          callSession: n,
          setHasChatActivitySinceLastExtension: i,
          combinedTranscriptRef: b,
          transcriptClearedAtRef: S,
          forceEndOfShareUtterance: _,
          forceEndOfMicrophoneUtterance: x,
          setTranscriptEntriesSaveState: w,
          setTranscriptEntryDetection: E,
          initialAiMessagesClearedAt: T,
          isMobile: k,
          micOnlySinceRef: C,
          onAnswerBlocked: I,
          debugMode: R,
          answerLatency: O,
        }),
        (t[10] = O),
        (t[11] = n),
        (t[12] = b),
        (t[13] = R),
        (t[14] = x),
        (t[15] = _),
        (t[16] = T),
        (t[17] = k),
        (t[18] = C),
        (t[19] = I),
        (t[20] = i),
        (t[21] = w),
        (t[22] = E),
        (t[23] = S),
        (t[24] = B))
      : (B = t[24]),
    (0, s.useAiMessages)(B, U)
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(24383 /* vendor/module-24383 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(18799 /* vendor/module-18799 */),
  s = n(58739 /* app/lib/fire-recheck */),
  l = n(87093 /* vendor/module-87093 */),
  c = n(60508 /* vendor/module-60508 */),
  u = n(49960 /* vendor/module-49960 */),
  d = n(70506 /* vendor/module-70506 */),
  p = n(8932 /* app/components/api-config-provider */),
  f = n(33445 /* app/lib/desktop-fetch */),
  h = n(34916 /* app/lib/get-os-data */),
  m = n(86819 /* app/lib/handle-client-update-required */),
  g = n(95741 /* app/lib/show-error-toast */),
  y = n(83169 /* app/lib/create-query-client */);
function v(e) {
  return i.toast.info(e);
}
