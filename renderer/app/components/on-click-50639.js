// app/components/on-click-50639.js — webpack module 50639
// params: (e, t, n) = (module, exports, require)
"use strict";
t.showViewAiNotesNotification = function ({ apiUrl: e, callSessionId: t }) {
  const n = `${e}/dashboard/callSessions?callSession=${t}`;
  function c(e) {
    (0, o.isCallSessionSampled)(t) &&
      (0, i.trackClientEvent)(
        a.mixpanelEvents.aiNotesNotification.status_changed,
        {
          action: e,
          callSessionId: t,
          sampleRate: o.CALL_SESSION_SAMPLE_RATE,
        },
      );
  }
  (0, l.showNotification)(({ dismiss: e }) => ({
    title: "View your meeting notes!",
    primaryAction: (0, r.jsx)(s.Button, {
      className: "whitespace-nowrap",
      onClick: () => {
        c("clicked"), window.open(n, "_blank"), e();
      },
      children: "View Notes",
    }),
    onDismiss: () => c("dismissed_user"),
    onAutoClose: () => c("dismissed_timeout"),
  })),
    c("shown");
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(77063 /* vendor/module-77063 */),
  i = n(87093 /* vendor/module-87093 */),
  a = n(22764 /* vendor/module-22764 */),
  s = n(99683 /* vendor/module-99683 */),
  l = n(60566 /* app/components/on-close-60566 */);
