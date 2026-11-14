// app/components/on-close-60566.js — webpack module 60566
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.NOTIFICATION_TOASTER_ID = void 0),
  (t.showNotification = function (e) {
    let n = null;
    const a = () => {
        null !== n && o.toast.dismiss(n);
      },
      s = e({ dismiss: a }),
      {
        title: l,
        body: c,
        primaryAction: u,
        secondaryAction: d,
        footer: p,
        duration: f = 1e4,
        onAutoClose: h,
        onDismiss: m,
      } = s;
    return (
      (n = o.toast.custom(
        () =>
          (0, r.jsx)(i.Notification, {
            title: l,
            body: c,
            primaryAction: u,
            secondaryAction: d,
            footer: p,
            duration: f,
            onClose: () => {
              m?.(), a();
            },
          }),
        {
          duration: f,
          toasterId: t.NOTIFICATION_TOASTER_ID,
          onDismiss: () => m?.(),
          onAutoClose: () => h?.(),
        },
      )),
      n
    );
  }),
  (t.dismissNotification = function (e) {
    o.toast.dismiss(e);
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(44572 /* vendor/module-44572 */),
  i = n(50341 /* app/components/notification */);
t.NOTIFICATION_TOASTER_ID = "notification-toaster";
