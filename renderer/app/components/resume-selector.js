// app/components/resume-selector.js — webpack module 91753
// params: (e, t, n) = (module, exports, require)
t.ResumeSelector = function (e) {
  const t = (0, o.c)(18),
    { selectedResumeId: n, onResumeChange: l, disabled: c, sheet: u } = e,
    d = void 0 !== c && c,
    { apiConfig: p } = (0, a.useApiConfig)();
  let f;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((f = { limit: "all" }), (t[0] = f))
    : (f = t[0]);
  const {
    data: h,
    refetch: m,
    isRefetching: g,
  } = s.api.resume.getMany.useQuery(f);
  let y;
  t[1] !== p.url
    ? ((y = () =>
        window.open(
          `${p.url}/dashboard/resumes`,
          "_blank",
          "noopener,noreferrer",
        )),
      (t[1] = p.url),
      (t[2] = y))
    : (y = t[2]);
  const v = y;
  let b, S, _, x;
  return (
    t[3] !== h?.data
      ? ((b = h?.data ?? []), (t[3] = h?.data), (t[4] = b))
      : (b = t[4]),
    t[5] !== m
      ? ((S = () => {
          m();
        }),
        (t[5] = m),
        (t[6] = S))
      : (S = t[6]),
    t[7] !== g || t[8] !== S
      ? ((_ = { onRefresh: S, isRefreshing: g }),
        (t[7] = g),
        (t[8] = S),
        (t[9] = _))
      : (_ = t[9]),
    t[10] !== d ||
    t[11] !== l ||
    t[12] !== v ||
    t[13] !== n ||
    t[14] !== u ||
    t[15] !== b ||
    t[16] !== _
      ? ((x = (0, r.jsx)(i.ResumeSlot, {
          resumes: b,
          selectedResumeId: n,
          onResumeChange: l,
          disabled: d,
          sheet: u,
          onUpload: v,
          refresh: _,
        })),
        (t[10] = d),
        (t[11] = l),
        (t[12] = v),
        (t[13] = n),
        (t[14] = u),
        (t[15] = b),
        (t[16] = _),
        (t[17] = x))
      : (x = t[17]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(97115 /* app/components/resume-slot */),
  a = n(8932 /* app/components/api-config-provider */),
  s = n(46998 /* app/components/trpcreact-provider */);
