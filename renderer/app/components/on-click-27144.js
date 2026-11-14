// app/components/on-click-27144.js — webpack module 27144
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useMeetingEndedDetector = function (e) {
  const t = (0, o.c)(12),
    { callSessionId: n, onEndSession: d, isEndingSession: p } = e,
    f = (0, i.useRef)(null);
  let h;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((h = function (e) {
        (0, a.trackClientEvent)(
          s.mixpanelEvents.meetingDetector.end_status_changed,
          { action: e },
        );
      }),
      (t[0] = h))
    : (h = t[0]);
  const m = h;
  let g;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = function () {
        m("closed_manually"), (f.current = null);
      }),
      (t[1] = g))
    : (g = t[1]);
  const y = g;
  let v;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = function () {
        m("closed_timeout"), (f.current = null);
      }),
      (t[2] = v))
    : (v = t[2]);
  const b = v;
  let S, _, x, w;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = () => () => {
        f.current &&
          ((0, u.dismissNotification)(f.current), (f.current = null));
      }),
      (_ = []),
      (t[3] = S),
      (t[4] = _))
    : ((S = t[3]), (_ = t[4])),
    (0, i.useEffect)(S, _),
    t[5] !== p || t[6] !== d
      ? ((x = () => {
          const e = window.electron.ipcRendererProxy.on(
            "main/on-meeting-detector-status-changed",
            (e) => {
              const { status: t, triggeringAudioInputProcesses: n } = e;
              if ("ended" !== t) return;
              f.current &&
                ((0, u.dismissNotification)(f.current), (f.current = null));
              const o = n[0],
                i = (0, l.getMeetingAppName)(o?.bundleId ?? "");
              (f.current = (0, u.showNotification)((e) => {
                const { dismiss: t } = e;
                return {
                  title: "Meeting ended?",
                  body: i,
                  primaryAction: (0, r.jsx)(c.Button, {
                    className: "whitespace-nowrap",
                    disabled: p,
                    onClick: () => {
                      m("ended"), d(), t();
                    },
                    children: p ? "Ending..." : "End session",
                  }),
                  onDismiss: y,
                  onAutoClose: b,
                };
              })),
                m("detected");
            },
          );
          return () => {
            e();
          };
        }),
        (t[5] = p),
        (t[6] = d),
        (t[7] = x))
      : (x = t[7]),
    t[8] !== n || t[9] !== p || t[10] !== d
      ? ((w = [n, d, p]), (t[8] = n), (t[9] = p), (t[10] = d), (t[11] = w))
      : (w = t[11]),
    (0, i.useEffect)(x, w);
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(87093 /* vendor/module-87093 */),
  s = n(22764 /* vendor/module-22764 */),
  l = n(62136 /* vendor/module-62136 */),
  c = n(99683 /* vendor/module-99683 */),
  u = n(60566 /* app/components/on-close-60566 */);
