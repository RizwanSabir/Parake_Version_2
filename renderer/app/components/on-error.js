// app/components/on-error.js — webpack module 65522
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LiveAnswerPreferencesDialog = function (e) {
  const t = (0, o.c)(18),
    { callSession: n, open: u, onOpenChange: d, loadPreviews: p } = e,
    { hasOpened: f, markOpened: h } = (0, a.useAnswerPreferencesSeen)(),
    m = (0, s.useUpdateLiveCallSession)(),
    g = l.api.useUtils();
  let y, v, b;
  t[0] !== h || t[1] !== u
    ? ((y = () => {
        u && h();
      }),
      (t[0] = h),
      (t[1] = u),
      (t[2] = y))
    : (y = t[2]),
    t[3] !== f || t[4] !== u
      ? ((v = [u, f]), (t[3] = f), (t[4] = u), (t[5] = v))
      : (v = t[5]),
    (0, i.useEffect)(y, v),
    t[6] !== n.id || t[7] !== m || t[8] !== g.callSession.get
      ? ((b = async (e) => {
          const t = { callSessionId: n.id };
          await g.callSession.get.cancel(t),
            g.callSession.get.setData(t, (t) => (t ? { ...t, ...e } : t)),
            m.mutate(
              { ...t, ...e },
              {
                onError: () => {
                  g.callSession.get.invalidate(t);
                },
              },
            );
        }),
        (t[6] = n.id),
        (t[7] = m),
        (t[8] = g.callSession.get),
        (t[9] = b))
      : (b = t[9]);
  const S = b;
  let _, x;
  return (
    t[10] !== S
      ? ((_ = (e) => {
          S(e);
        }),
        (t[10] = S),
        (t[11] = _))
      : (_ = t[11]),
    t[12] !== n || t[13] !== p || t[14] !== d || t[15] !== u || t[16] !== _
      ? ((x = (0, r.jsx)(c.AnswerPreferencesDialog, {
          open: u,
          onOpenChange: d,
          value: n,
          onSave: _,
          loadPreviews: p,
        })),
        (t[12] = n),
        (t[13] = p),
        (t[14] = d),
        (t[15] = u),
        (t[16] = _),
        (t[17] = x))
      : (x = t[17]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(82447 /* vendor/module-82447 */),
  s = n(553 /* vendor/module-553 */),
  l = n(44189 /* vendor/module-44189 */),
  c = n(46652 /* app/components/on-click-46652 */);
