// app/components/open-web.js — webpack module 87746
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useEarnCreditsToast = function () {
  const e = (0, o.c)(3),
    { apiConfig: t } = (0, u.useApiConfig)(),
    n = (0, d.useBrand)();
  let f;
  return (
    e[0] !== t || e[1] !== n
      ? ((f = {
          showEarnCreditsToast: function (e, o) {
            const u = (0, l.rewardedReviewCards)(o).filter(
              (e) => "codeboss" !== n.id || "app" !== e.kind,
            );
            if (0 === u.length) return;
            const d = `earn-credits-${e}`;
            i.toast.custom(
              () =>
                (0, r.jsx)(c.EarnCreditsToast, {
                  callSessionId: e,
                  cards: u,
                  platform: o.app.platform,
                  openWeb: () => {
                    window.open(
                      (function (e, t) {
                        return `${e}${a.POST_CALL_FEEDBACK_PATH}?callSession=${t}&pane=rewards&${s.EARN_CREDITS_OPENED_FROM_PARAM}=desktop_toast`;
                      })(t.url, e),
                      "_blank",
                    );
                  },
                  onClose: () => i.toast.dismiss(d),
                }),
              {
                id: d,
                duration: 1 / 0,
                toasterId: p.NOTIFICATION_TOASTER_ID,
              },
            );
          },
        }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = f))
      : (f = e[2]),
    f
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(70190 /* vendor/module-70190 */),
  s = n(8875 /* app/lib/earn-credits-opened-from-param */),
  l = n(34008 /* app/lib/rewarded-review-cards */),
  c = n(94885 /* app/components/earn-credits-toast */),
  u = n(8932 /* app/components/api-config-provider */),
  d = n(74920 /* app/lib/apply-brand-attribute */),
  p = n(60566 /* app/components/on-close-60566 */);
