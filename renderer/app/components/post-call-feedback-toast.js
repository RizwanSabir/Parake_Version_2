// app/components/post-call-feedback-toast.js — webpack module 24302
// params: (e, t, n) = (module, exports, require)
"use strict";
t.PostCallFeedbackToast = function (e) {
  const t = (0, o.c)(41),
    {
      callSessionId: n,
      mode: f,
      answerPostCall: h,
      openFeedbackForm: m,
      onClose: g,
    } = e,
    [y, v] = (0, i.useState)("question"),
    [b, S] = (0, i.useState)(!1),
    _ = (0, i.useRef)(!1);
  let x, w, E;
  t[0] !== n
    ? ((x = () => {
        (0, a.trackClientEvent)(s.mixpanelEvents.postCallFeedback.shown, {
          callSessionId: n,
          surface: u.DESKTOP_TOAST_SURFACE,
        });
      }),
      (w = [n]),
      (t[0] = n),
      (t[1] = x),
      (t[2] = w))
    : ((x = t[1]), (w = t[2])),
    (0, i.useEffect)(x, w),
    t[3] !== h || t[4] !== n || t[5] !== b || t[6] !== g
      ? ((E = function () {
          b ||
            (h("yes").catch(p),
            (0, a.trackClientEvent)(
              s.mixpanelEvents.postCallFeedback.answered,
              {
                callSessionId: n,
                value: "yes",
                surface: u.DESKTOP_TOAST_SURFACE,
              },
            ),
            v("thanks"),
            setTimeout(g, 2e3));
        }),
        (t[3] = h),
        (t[4] = n),
        (t[5] = b),
        (t[6] = g),
        (t[7] = E))
      : (E = t[7]);
  const T = E;
  let k;
  t[8] !== h || t[9] !== n || t[10] !== b || t[11] !== g || t[12] !== m
    ? ((k = async function (e) {
        if (!b) {
          S(!0),
            (0, a.trackClientEvent)(
              s.mixpanelEvents.postCallFeedback.answered,
              {
                callSessionId: n,
                value: e,
                surface: u.DESKTOP_TOAST_SURFACE,
              },
            );
          try {
            await h(e);
          } catch {}
          _.current ||
            ((0, a.trackClientEvent)(
              s.mixpanelEvents.postCallFeedback.toast_opened_web,
              {
                callSessionId: n,
                value: e,
                surface: u.DESKTOP_TOAST_SURFACE,
              },
            ),
            m(),
            g());
        }
      }),
      (t[8] = h),
      (t[9] = n),
      (t[10] = b),
      (t[11] = g),
      (t[12] = m),
      (t[13] = k))
    : (k = t[13]);
  const C = k;
  let I;
  t[14] !== n || t[15] !== g
    ? ((I = function () {
        (_.current = !0),
          (0, a.trackClientEvent)(s.mixpanelEvents.postCallFeedback.dismissed, {
            callSessionId: n,
            surface: u.DESKTOP_TOAST_SURFACE,
          }),
          g();
      }),
      (t[14] = n),
      (t[15] = g),
      (t[16] = I))
    : (I = t[16]);
  const A = I;
  if ("thanks" === y) {
    let e;
    return (
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsx)(c.Notification, {
            duration: 1 / 0,
            title: "Thanks, this helps improve your answers.",
          })),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  let O, R, M, P, N, D, j, L;
  return (
    t[18] !== f
      ? ((O = (0, l.postCallFeedbackQuestion)(f)), (t[18] = f), (t[19] = O))
      : (O = t[19]),
    t[20] !== b || t[21] !== T
      ? ((R = (0, r.jsx)(d.Button, {
          size: "sm",
          variant: "default",
          className: "flex-1",
          disabled: b,
          onClick: T,
          children: "Yes",
        })),
        (t[20] = b),
        (t[21] = T),
        (t[22] = R))
      : (R = t[22]),
    t[23] !== C
      ? ((M = () => {
          C("partially");
        }),
        (t[23] = C),
        (t[24] = M))
      : (M = t[24]),
    t[25] !== b || t[26] !== M
      ? ((P = (0, r.jsx)(d.Button, {
          size: "sm",
          variant: "outline",
          className: "flex-1",
          disabled: b,
          onClick: M,
          children: "Partially",
        })),
        (t[25] = b),
        (t[26] = M),
        (t[27] = P))
      : (P = t[27]),
    t[28] !== C
      ? ((N = () => {
          C("no");
        }),
        (t[28] = C),
        (t[29] = N))
      : (N = t[29]),
    t[30] !== b || t[31] !== N
      ? ((D = (0, r.jsx)(d.Button, {
          size: "sm",
          variant: "destructive",
          className: "flex-1",
          disabled: b,
          onClick: N,
          children: "No",
        })),
        (t[30] = b),
        (t[31] = N),
        (t[32] = D))
      : (D = t[32]),
    t[33] !== D || t[34] !== R || t[35] !== P
      ? ((j = (0, r.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [R, P, D],
        })),
        (t[33] = D),
        (t[34] = R),
        (t[35] = P),
        (t[36] = j))
      : (j = t[36]),
    t[37] !== A || t[38] !== j || t[39] !== O
      ? ((L = (0, r.jsx)(c.Notification, {
          duration: 1 / 0,
          title: O,
          footer: j,
          onClose: A,
        })),
        (t[37] = A),
        (t[38] = j),
        (t[39] = O),
        (t[40] = L))
      : (L = t[40]),
    L
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(87093 /* vendor/module-87093 */),
  s = n(22764 /* vendor/module-22764 */),
  l = n(18278 /* vendor/module-18278 */),
  c = n(50341 /* app/components/notification */),
  u = n(72992 /* vendor/module-72992 */),
  d = n(99683 /* vendor/module-99683 */);
function p() {}
