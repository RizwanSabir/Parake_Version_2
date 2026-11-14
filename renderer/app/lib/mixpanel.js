// app/lib/mixpanel.js — webpack module 40656
// params: (e, t, n) = (module, exports, require)
t.Mixpanel = function () {
  const e = (0, r.c)(14),
    { user: t, isLoading: n } = (0, l.useSessionUser)(),
    { data: u, isLoading: d } =
      s.api.configuration.getMixpanelConfig.useQuery(),
    { data: p, isLoading: f } = (0, c.useVersion)(),
    h = (0, o.useRef)(void 0);
  let m;
  e[0] !== p ||
  e[1] !== f ||
  e[2] !== d ||
  e[3] !== n ||
  e[4] !== u ||
  e[5] !== t
    ? ((m = () => {
        d ||
          n ||
          f ||
          !u ||
          ((0, i.initMixpanel)(
            u.token,
            {
              api_host: "https://api-eu.mixpanel.com",
              track_pageview: !0,
              persistence: "cookie",
            },
            {
              environment: u.environment,
              tracked_from: "desktop",
              app_version: p,
              brand: (0, a.getBrand)().id,
            },
          ),
          t?.id
            ? (0, i.identifyMixpanelUser)(t.id)
            : h.current && (0, i.resetMixpanelUser)(),
          (h.current = t?.id));
      }),
      (e[0] = p),
      (e[1] = f),
      (e[2] = d),
      (e[3] = n),
      (e[4] = u),
      (e[5] = t),
      (e[6] = m))
    : (m = e[6]);
  const g = t?.id;
  let y;
  return (
    e[7] !== p ||
    e[8] !== f ||
    e[9] !== d ||
    e[10] !== n ||
    e[11] !== u ||
    e[12] !== g
      ? ((y = [d, n, f, u, p, g]),
        (e[7] = p),
        (e[8] = f),
        (e[9] = d),
        (e[10] = n),
        (e[11] = u),
        (e[12] = g),
        (e[13] = y))
      : (y = e[13]),
    (0, o.useEffect)(m, y),
    null
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(87093 /* vendor/module-87093 */),
  a = n(74920 /* app/lib/apply-brand-attribute */),
  s = n(46998 /* app/components/trpcreact-provider */),
  l = n(50567 /* app/hooks/use-session-user */),
  c = n(50272 /* app/lib/os-version-raw */);
