// app/hooks/use-meeting-app-stamp.js — webpack module 51290
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.y = void 0),
  (t.useMeetingAppStamp = function (e) {
    const n = (0, r.c)(16),
      { callSessionId: i, isActivated: a, stampedMeetingApp: d } = e,
      p = (0, l.useCurrentMeetingApp)(),
      f = (0, o.useRef)(a),
      h = (0, o.useRef)(!1),
      m = (0, o.useRef)(!1);
    let g;
    n[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((g = { meta: s.handledErrorMutationMeta }), (n[0] = g))
      : (g = n[0]);
    const { mutate: y } = c.api.callSession.stampMeetingApp.useMutation(g),
      v = (0, o.useRef)(p);
    let b;
    n[1] !== p
      ? ((b = () => {
          v.current = p;
        }),
        (n[1] = p),
        (n[2] = b))
      : (b = n[2]),
      (0, o.useLayoutEffect)(b);
    const S = (0, o.useRef)(void 0);
    let _, x, w, E, T, k;
    return (
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = () => () => clearTimeout(S.current)),
          (x = []),
          (n[3] = _),
          (n[4] = x))
        : ((_ = n[3]), (x = n[4])),
      (0, o.useEffect)(_, x),
      n[5] !== i || n[6] !== a || n[7] !== p || n[8] !== y || n[9] !== d
        ? ((w = () => {
            m.current ||
              (a &&
                !d &&
                p &&
                ((m.current = !0),
                (S.current = setTimeout(() => {
                  const e = v.current;
                  e && y({ callSessionId: i, meetingApp: e });
                }, t.y))));
          }),
          (E = [a, d, p, i, y]),
          (n[5] = i),
          (n[6] = a),
          (n[7] = p),
          (n[8] = y),
          (n[9] = d),
          (n[10] = w),
          (n[11] = E))
        : ((w = n[10]), (E = n[11])),
      (0, o.useEffect)(w, E),
      n[12] !== a || n[13] !== p
        ? ((T = () => {
            f.current ||
              h.current ||
              (a &&
                !p &&
                ((h.current = !0),
                window.electron.ipcRendererProxy
                  .invoke("renderer/get-unrecognized-meeting-apps")
                  .then(u)));
          }),
          (k = [a, p]),
          (n[12] = a),
          (n[13] = p),
          (n[14] = T),
          (n[15] = k))
        : ((T = n[14]), (k = n[15])),
      (0, o.useEffect)(T, k),
      p
    );
  });
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(87093 /* vendor/module-87093 */),
  a = n(22764 /* vendor/module-22764 */),
  s = n(90375 /* vendor/module-90375 */),
  l = n(36828 /* app/hooks/use-current-meeting-app */),
  c = n(46998 /* app/components/trpcreact-provider */);
function u(e) {
  e.slice(0, 3).forEach(d);
}
function d(e) {
  return (0, i.trackClientEvent)(
    a.mixpanelEvents.meetingDetector.unrecognized_app,
    { bundleId: e },
  );
}
t.y = 2e3;
