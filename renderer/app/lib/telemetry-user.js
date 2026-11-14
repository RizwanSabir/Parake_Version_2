// app/lib/telemetry-user.js — webpack module 13126
// params: (e, t, n) = (module, exports, require)
t.TelemetryUser = function () {
  const e = (0, r.c)(6),
    { user: t, isLoading: n } = (0, a.useSessionUser)();
  let s;
  e[0] !== n || e[1] !== t
    ? ((s = () => {
        n || (0, i.setTelemetryUser)(t?.id ? { id: t.id } : null);
      }),
      (e[0] = n),
      (e[1] = t),
      (e[2] = s))
    : (s = e[2]);
  const l = t?.id;
  let c;
  return (
    e[3] !== n || e[4] !== l
      ? ((c = [n, l]), (e[3] = n), (e[4] = l), (e[5] = c))
      : (c = e[5]),
    (0, o.useEffect)(s, c),
    null
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(37148 /* app/lib/set-telemetry-sdk */),
  a = n(50567 /* app/hooks/use-session-user */);
