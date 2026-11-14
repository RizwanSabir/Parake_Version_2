// vendor/module-65382.js — webpack module 65382
// params: (e, t, n) = (module, exports, require)
t.ResponseThumbs = function (e) {
  const t = (0, o.c)(10),
    { triggerId: n, initialThumb: p, disabled: f } = e,
    h = void 0 !== f && f,
    [m, g] = (0, i.useState)(p ?? null),
    y = `feedback.rateResponse:${n}`;
  let v;
  t[0] !== y
    ? ((v = {
        onError: d,
        meta: l.fireAndForgetMutationMeta,
        scope: { id: y },
      }),
      (t[0] = y),
      (t[1] = v))
    : (v = t[1]);
  const b = c.api.feedback.rateResponse.useMutation(v);
  let S;
  t[2] !== b || t[3] !== m || t[4] !== n
    ? ((S = function (e) {
        if (!n || m === e) return;
        const t = null !== m;
        g(e),
          b.mutate({ triggerId: n, up: "up" === e }),
          (0, a.trackClientEvent)(s.mixpanelEvents.aiResponse.feedback, {
            triggerId: n,
            direction: e,
            switched: t,
          });
      }),
      (t[2] = b),
      (t[3] = m),
      (t[4] = n),
      (t[5] = S))
    : (S = t[5]);
  const _ = S,
    x = h || !n;
  let w;
  return (
    t[6] !== _ || t[7] !== m || t[8] !== x
      ? ((w = (0, r.jsx)(u.ThumbButtons, {
          selected: m,
          onSelect: _,
          disabled: x,
        })),
        (t[6] = _),
        (t[7] = m),
        (t[8] = x),
        (t[9] = w))
      : (w = t[9]),
    w
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(87093 /* vendor/module-87093 */),
  s = n(22764 /* vendor/module-22764 */),
  l = n(96241 /* vendor/module-96241 */),
  c = n(44189 /* vendor/module-44189 */),
  u = n(17871 /* app/components/on-click-17871 */);
function d(e) {}
