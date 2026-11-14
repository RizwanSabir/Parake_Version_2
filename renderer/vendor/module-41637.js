// vendor/module-41637.js — webpack module 41637
// params: (e, t, n) = (module, exports, require)
"use strict";
t.usePingSession = function (e) {
  const t = (0, r.c)(4),
    { callSession: n } = e,
    { mutate: a } = i.api.callSession.ping.useMutation(),
    s =
      n &&
      !n.isEndedOrExpired &&
      n.isPlanSession &&
      !n.isFreeSession &&
      n.activatedAt
        ? n.id
        : null;
  let l, c;
  t[0] !== a || t[1] !== s
    ? ((l = () => {
        if (!s) return;
        a({ callSessionId: s });
        const e = setInterval(() => {
          a({ callSessionId: s });
        }, 15e3);
        return () => {
          clearInterval(e);
        };
      }),
      (c = [s, a]),
      (t[0] = a),
      (t[1] = s),
      (t[2] = l),
      (t[3] = c))
    : ((l = t[2]), (c = t[3])),
    (0, o.useEffect)(l, c);
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(44189 /* vendor/module-44189 */);
