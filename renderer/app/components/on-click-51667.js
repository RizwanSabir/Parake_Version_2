// app/components/on-click-51667.js — webpack module 51667
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useMeetingStartedDetector = function (e) {
  const t = (0, o.c)(23),
    {
      isLoggedIn: n,
      showMeetingStartNotificationOnly: f,
      isInLiveCallSession: h,
      onStartSession: m,
    } = e,
    g = (0, a.useRef)(null),
    y = (0, a.useRef)(null);
  let v;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = function (e) {
        (0, l.trackClientEvent)(
          c.mixpanelEvents.meetingDetector.status_changed,
          { action: e },
        );
      }),
      (t[0] = v))
    : (v = t[0]);
  const b = v;
  let S;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = function () {
        g.current = null;
      }),
      (t[1] = S))
    : (S = t[1]);
  const _ = S;
  let x;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = function () {
        g.current = null;
      }),
      (t[2] = x))
    : (x = t[2]);
  const w = x;
  let E;
  t[3] !== m || t[4] !== f
    ? ((E = function (e) {
        g.current &&
          ((0, p.dismissNotification)(g.current), (g.current = null));
        const t = e[0],
          n = (0, u.getMeetingAppName)(t?.bundleId ?? "");
        (g.current = (0, p.showNotification)((e) => {
          const { dismiss: t } = e;
          return {
            title: "Meeting started?",
            body: n,
            primaryAction: (0, r.jsx)(d.Button, {
              onClick: () => {
                b("started"), m("automatic"), t();
              },
              children: "Start session",
            }),
            secondaryAction: f
              ? (0, r.jsxs)(s.Tooltip, {
                  children: [
                    (0, r.jsx)(s.TooltipTrigger, {
                      render: (0, r.jsx)(d.Button, {
                        variant: "outline",
                        size: "icon",
                        className: "text-foreground shrink-0",
                        onClick: () => {
                          b("started_custom"), m("custom"), t();
                        },
                        children: (0, r.jsx)(i.Edit, {
                          className: "h-4 w-4",
                        }),
                      }),
                    }),
                    (0, r.jsx)(s.TooltipContent, {
                      children: "Start a custom session",
                    }),
                  ],
                })
              : void 0,
            onDismiss: _,
            onAutoClose: w,
          };
        })),
          b("detected");
      }),
      (t[3] = m),
      (t[4] = f),
      (t[5] = E))
    : (E = t[5]);
  const T = E;
  let k, C, I, A, O, R;
  t[6] !== h
    ? ((k = () => {
        h &&
          g.current &&
          ((0, p.dismissNotification)(g.current), (g.current = null));
      }),
      (C = [h]),
      (t[6] = h),
      (t[7] = k),
      (t[8] = C))
    : ((k = t[7]), (C = t[8])),
    (0, a.useEffect)(k, C),
    t[9] !== n || t[10] !== T
      ? ((I = () => {
          const e = window.electron.ipcRendererProxy.on(
            "main/on-meeting-detector-status-changed",
            (e) => {
              const { status: t, triggeringAudioInputProcesses: r } = e;
              if ("ended" === t)
                return (
                  (y.current = null),
                  void (
                    g.current &&
                    ((0, p.dismissNotification)(g.current), (g.current = null))
                  )
                );
              "started" === t &&
                (n
                  ? T(r)
                  : (y.current = {
                      status: t,
                      triggeringAudioInputProcesses: r,
                    }));
            },
          );
          return (
            window.electron.ipcRendererProxy.invoke(
              "renderer/meeting-detector-screen-ready",
            ),
            () => {
              e();
            }
          );
        }),
        (t[9] = n),
        (t[10] = T),
        (t[11] = I))
      : (I = t[11]),
    t[12] !== n || t[13] !== m || t[14] !== f
      ? ((A = [n, m, f]), (t[12] = n), (t[13] = m), (t[14] = f), (t[15] = A))
      : (A = t[15]),
    (0, a.useEffect)(I, A),
    t[16] !== n || t[17] !== T
      ? ((O = () => {
          if (!n || !y.current) return;
          const e = y.current;
          (y.current = null), T(e.triggeringAudioInputProcesses);
        }),
        (t[16] = n),
        (t[17] = T),
        (t[18] = O))
      : (O = t[18]),
    t[19] !== n || t[20] !== m || t[21] !== f
      ? ((R = [n, m, f]), (t[19] = n), (t[20] = m), (t[21] = f), (t[22] = R))
      : (R = t[22]),
    (0, a.useEffect)(O, R);
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(58055 /* app/components/tooltip */),
  l = n(87093 /* vendor/module-87093 */),
  c = n(22764 /* vendor/module-22764 */),
  u = n(62136 /* vendor/module-62136 */),
  d = n(99683 /* vendor/module-99683 */),
  p = n(60566 /* app/components/on-close-60566 */);
