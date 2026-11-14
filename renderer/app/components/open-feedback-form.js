// app/components/open-feedback-form.js — webpack module 9319
// params: (e, t, n) = (module, exports, require)
"use strict";
t.usePostCallFeedbackToast = function () {
  const e = (0, o.c)(4),
    { apiConfig: t } = (0, d.useApiConfig)();
  let n;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((n = { onError: m, meta: s.fireAndForgetMutationMeta }), (e[0] = n))
    : (n = e[0]);
  const { mutateAsync: l } = h.api.feedback.answerPostCall.useMutation(n);
  let c;
  return (
    e[1] !== l || e[2] !== t
      ? ((c = {
          showPostCallFeedbackToast: function (e, n) {
            const o = `feedback-${e}`;
            i.toast.custom(
              () =>
                (0, r.jsx)(u.PostCallFeedbackToast, {
                  callSessionId: e,
                  mode: n,
                  answerPostCall: async (t) => {
                    await l({ callSessionId: e, value: t });
                  },
                  openFeedbackForm: () => {
                    window.open(
                      (function (e, t) {
                        const n = (0, a.setPostCallFeedbackParams)(
                          new URLSearchParams(),
                          {
                            callSessionId: t,
                            surface: f.DESKTOP_TOAST_SURFACE,
                          },
                        );
                        return `${e}${a.POST_CALL_FEEDBACK_PATH}?${n.toString()}`;
                      })(t.url, e),
                      "_blank",
                    );
                  },
                  onClose: () => i.toast.dismiss(o),
                }),
              {
                id: o,
                duration: 1 / 0,
                toasterId: p.NOTIFICATION_TOASTER_ID,
              },
            );
          },
        }),
        (e[1] = l),
        (e[2] = t),
        (e[3] = c))
      : (c = e[3]),
    c
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(70190 /* vendor/module-70190 */),
  s = n(96241 /* vendor/module-96241 */),
  l = n(29776 /* vendor/module-29776 */),
  c = n(37148 /* app/lib/set-telemetry-sdk */),
  u = n(24302 /* app/components/post-call-feedback-toast */),
  d = n(8932 /* app/components/api-config-provider */),
  p = n(60566 /* app/components/on-close-60566 */),
  f = n(72992 /* vendor/module-72992 */),
  h = n(46998 /* app/components/trpcreact-provider */);
function m(e) {
  c.log.warn(e, { code: l.codes.feedback.post_call_write_failed });
}
