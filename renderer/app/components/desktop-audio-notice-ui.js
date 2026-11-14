// app/components/desktop-audio-notice-ui.js — webpack module 83803
// params: (e, t, n) = (module, exports, require)
"use strict";
t.desktopAudioNoticeUi = void 0;
const r = n(31085 /* vendor/module-31085 */),
  o = n(44572 /* vendor/module-44572 */),
  i = n(99683 /* vendor/module-99683 */),
  a = n(60566 /* app/components/on-close-60566 */);
t.desktopAudioNoticeUi = {
  show: (e, t) =>
    (0, a.showNotification)(() => ({
      title: e.title,
      body: e.body,
      duration: 1 / 0,
      onDismiss: t.close,
      footer:
        e.primary || e.secondary
          ? (0, r.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                e.primary &&
                  (0, r.jsx)(i.Button, {
                    size: "sm",
                    className: "flex-1",
                    onClick: t.primary,
                    children: e.primary,
                  }),
                e.secondary &&
                  (0, r.jsx)(i.Button, {
                    size: "sm",
                    variant: "outline",
                    className: "flex-1",
                    onClick: t.secondary,
                    children: e.secondary,
                  }),
              ],
            })
          : void 0,
    })),
  dismiss: a.dismissNotification,
  toastInfo: (e) => o.toast.info(e),
  toastSuccess: (e) => o.toast.success(e),
};
