// vendor/module-83475.js — webpack module 83475
// params: (e, t, n) = (module, exports, require)
t.useReportLiveCallSessionError = void 0;
const r = n(96241 /* vendor/module-96241 */),
  o = n(39752 /* vendor/module-39752 */),
  i = n(25642 /* vendor/module-25642 */),
  a = n(44189 /* vendor/module-44189 */);
t.useReportLiveCallSessionError = ({
  callSessionId: e,
  speechmaticsClientRef: t,
  audioRecorderRef: n,
  statusRef: s,
}) => {
  const { mutate: l } =
    a.api.callSession.reportLiveCallSessionError.useMutation({
      meta: r.fireAndForgetMutationMeta,
    });
  return ({
    source: r,
    error: a,
    expected: c,
    severity: u,
    reason: d,
    contextData: p,
  }) => {
    if (e)
      try {
        const f = {
            ...(0, i.buildTranscriptionContext)({
              reason: d,
              speechmaticsClient: t?.current ?? null,
              audioRecorder: n?.current ?? null,
              status: s?.current ?? null,
            }),
            ...p,
          },
          h = (0, o.resolveReportSeverity)({
            severity: u,
            reason: d,
            contextData: f,
          }),
          m = (0, i.unknownToReportFields)(a);
        l({
          source: r,
          ...m,
          callSessionId: e,
          expected: c,
          severity: h.severity,
          contextData: h.demotedFrom
            ? {
                ...f,
                offlineDemotion: {
                  from: h.demotedFrom,
                  to: h.severity,
                },
              }
            : f,
        });
      } catch (e) {}
  };
};
