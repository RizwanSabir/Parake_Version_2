// vendor/module-55014.js — webpack module 55014
// params: (e, t, n) = (module, exports, require)
t.useSpeakerIdentification = function ({
  isMobile: e,
  micOnly: t,
  identifiesNow: n,
  callSessionId: u,
  reportLiveCallSessionError: d,
  onIdentificationSkipped: p,
}) {
  const f = c.api.useUtils();
  c.api.speakerEnrollment.list.useQuery(void 0, { enabled: e || t });
  const h = c.api.speakerEnrollment.attachToCallSession.useMutation({
      retry: 2,
      meta: s.handledErrorMutationMeta,
    }),
    m = c.api.speakerEnrollment.markStale.useMutation({
      meta: a.fireAndForgetMutationMeta,
      onSuccess: async () => {
        await f.speakerEnrollment.list.invalidate();
      },
    }),
    g = (0, r.useRef)(0),
    y = (0, r.useRef)(new Set()),
    v = async (e, t) => {
      g.current += 1;
      const n = g.current;
      try {
        const { identifiedSpeakerLabel: r } = await h.mutateAsync({
          callSessionId: e,
          speakersSupplied: t,
        });
        if (g.current !== n) return;
        t &&
          !r &&
          (0, o.trackClientEvent)(
            i.mixpanelEvents.speakerEnrollment.label_refused,
            { callSessionId: e },
          ),
          f.callSession.get.setData({ callSessionId: e }, (e) =>
            e ? { ...e, identifiedSpeakerLabel: r } : void 0,
          );
      } catch (e) {
        d({
          severity: "warning",
          source: "useSpeakerIdentification.record",
          reason: "speaker-enrollment-attach-failed",
          error: e instanceof Error ? e : new Error(String(e)),
        });
      }
    },
    b = (0, r.useRef)(new Set());
  return {
    startIdentified: async (t, r) => {
      const {
        speakers: a,
        observedUpdatedAt: s,
        skippedWithEnrolled: c,
      } = await (async (e) => {
        const t = {
          speakers: null,
          observedUpdatedAt: null,
          skippedWithEnrolled: null,
        };
        if (!n()) return t;
        try {
          const t = await f.speakerEnrollment.list.ensureData(),
            n = (0, l.assessEnrollment)(t, e),
            r = t.filter((e) => "active" === e.status).map((e) => e.language),
            o = "usable" !== n.verdict && "stale" !== n.verdict && r.length > 0;
          return {
            speakers: n.speakers,
            observedUpdatedAt:
              "usable" === n.verdict ? n.enrollment.updatedAt : null,
            skippedWithEnrolled: o ? r : null,
          };
        } catch (e) {
          return (
            d({
              severity: "warning",
              source: "useSpeakerIdentification.resolveSpeakers",
              reason: "speaker-enrollment-resolve-failed",
              error: e instanceof Error ? e : new Error(String(e)),
            }),
            t
          );
        }
      })(t.language);
      if (
        (c &&
          ((e, t) => {
            const n = `${e.callSessionId}:${e.language}`;
            b.current.has(n) ||
              (b.current.add(n),
              (0, o.trackClientEvent)(
                i.mixpanelEvents.speakerEnrollment.identification_skipped,
                {
                  callSessionId: e.callSessionId,
                  enrolledLanguages: t,
                  sessionLanguage: e.language,
                },
              ),
              p?.({
                enrolledLanguages: t,
                sessionLanguage: e.language,
              }));
          })(t, c),
        n())
      ) {
        if (!e) {
          if (y.current.has(t.language))
            return await v(t.callSessionId, !1), void (await r(null, null));
          null === a && y.current.add(t.language);
        }
        await v(t.callSessionId, null !== a), await r(a, s);
      } else await r(a, s);
    },
    handleIdentifiersIgnored: ({ language: e, observedUpdatedAt: t }) => {
      (0, o.trackClientEvent)(
        i.mixpanelEvents.speakerEnrollment.identifier_ignored,
        { callSessionId: u },
      ),
        t && m.mutate({ language: e, observedUpdatedAt: t }),
        n() && u && v(u, !1);
    },
  };
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(87093 /* vendor/module-87093 */),
  i = n(22764 /* vendor/module-22764 */),
  a = n(96241 /* vendor/module-96241 */),
  s = n(90375 /* vendor/module-90375 */),
  l = n(57e3),
  c = n(44189 /* vendor/module-44189 */);
