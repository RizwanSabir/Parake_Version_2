// app/hooks/use-auto-detect-meetings.js — webpack module 97197
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAutoDetectMeetings = function (e) {
  const t = (0, r.c)(15),
    { hasActivePlan: n, isPlanLoading: a } = e,
    [s, l] = (0, o.useState)("unset");
  let c;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((c = { retry: !1 }), (t[0] = c))
    : (c = t[0]);
  const {
      data: u,
      isLoading: d,
      error: p,
    } = i.api.user.get.useQuery(void 0, c),
    { mutateAsync: f } = i.api.user.update.useMutation();
  let h;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((h = function (e) {
        l(e),
          window.electron.ipcRendererProxy.invoke(
            "renderer/set-auto-detect-meetings",
            e,
          );
      }),
      (t[1] = h))
    : (h = t[1]);
  const m = h;
  let g, y, v, b;
  return (
    t[2] !== n ||
    t[3] !== a ||
    t[4] !== d ||
    t[5] !== f ||
    t[6] !== u ||
    t[7] !== p
      ? ((g = () => {
          if (!d && !a) {
            if (n && !p && u)
              return null === u.autoDetectEnabled
                ? (m("disabled"), void f({ autoDetectEnabled: !1 }))
                : void m(u.autoDetectEnabled ? "enabled" : "disabled");
            m("unset");
          }
        }),
        (y = [u, d, a, n, p, f]),
        (t[2] = n),
        (t[3] = a),
        (t[4] = d),
        (t[5] = f),
        (t[6] = u),
        (t[7] = p),
        (t[8] = g),
        (t[9] = y))
      : ((g = t[8]), (y = t[9])),
    (0, o.useEffect)(g, y),
    t[10] !== f
      ? ((v = (e) => {
          m(e), f({ autoDetectEnabled: "enabled" === e });
        }),
        (t[10] = f),
        (t[11] = v))
      : (v = t[11]),
    t[12] !== s || t[13] !== v
      ? ((b = { autoDetectMeetings: s, setAutoDetectMeetings: v }),
        (t[12] = s),
        (t[13] = v),
        (t[14] = b))
      : (b = t[14]),
    b
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(46998 /* app/components/trpcreact-provider */);
