// app/components/on-primary-action.js — webpack module 23051
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CallSessionsList = function (e) {
  const t = (0, o.c)(70),
    { onSessionClick: n, onCreateClick: m, onEditClick: S } = e,
    { apiConfig: L } = (0, k.useApiConfig)(),
    F = (0, T.useAccountSharingGate)(),
    { resolvedTheme: U } = (0, f.useTheme)(),
    B = "dark" === U ? "dark" : void 0,
    [z, H] = (0, a.useState)(""),
    V = (0, y.useDebounce)(z);
  let q;
  t[0] !== V ? ((q = V.trim()), (t[0] = V), (t[1] = q)) : (q = t[1]);
  const G = q,
    [W, $] = (0, a.useState)("status");
  let Y, K, Z;
  t[2] !== G ? ((Y = { search: G }), (t[2] = G), (t[3] = Y)) : (Y = t[3]),
    t[4] !== W || t[5] !== Y
      ? ((K = { limit: 10, filter: Y, sort: W }),
        (t[4] = W),
        (t[5] = Y),
        (t[6] = K))
      : (K = t[6]),
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((Z = { refetchInterval: j }), (t[7] = Z))
      : (Z = t[7]);
  const {
    rows: Q,
    totalCount: J,
    isLoading: X,
    isError: ee,
    refetch: te,
    isRetrying: ne,
    hasNextPage: re,
    isFetchingNextPage: oe,
    fetchNextPage: ie,
  } = (0, v.useInfiniteListQuery)(I.api.callSession.getList, K, Z);
  (0, b.useRereadCallSessionListOnFocus)();
  const ae = "" !== G;
  let se;
  t[8] !== ee || t[9] !== X || t[10] !== ae || t[11] !== J
    ? ((se = (0, E.resolveListBodyState)({
        loading: X,
        error: ee,
        totalCount: J,
        isFiltered: ae,
      })),
      (t[8] = ee),
      (t[9] = X),
      (t[10] = ae),
      (t[11] = J),
      (t[12] = se))
    : (se = t[12]);
  const le = se;
  let ce,
    ue,
    de,
    pe,
    fe,
    he,
    me,
    ge,
    ye,
    ve,
    be,
    Se,
    _e,
    xe,
    we,
    Ee,
    Te,
    ke,
    Ce,
    Ie,
    Ae;
  if (
    (t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((ce = (0, r.jsx)(A.AccountSharingHoldNotice, {
          className: "-mx-4 -mt-4 shrink-0",
        })),
        (ue = (0, r.jsx)(R.PaymentFailedNotice, {
          className: "-mx-4 -mt-4 shrink-0 not-first:-mt-2",
        })),
        (t[13] = ce),
        (t[14] = ue))
      : ((ce = t[13]), (ue = t[14])),
    t[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((de = (e) => H(e.target.value)), (t[15] = de))
      : (de = t[15]),
    t[16] !== z
      ? ((pe = (0, r.jsx)(h.SearchInput, {
          placeholder: "Search by title or description",
          value: z,
          onChange: de,
        })),
        (t[16] = z),
        (t[17] = pe))
      : (pe = t[17]),
    t[18] === Symbol.for("react.memo_cache_sentinel")
      ? ((fe = (e) => $(e)), (t[18] = fe))
      : (fe = t[18]),
    t[19] !== W
      ? ((he = (0, r.jsx)(d.ListSortMenu, {
          value: W,
          label: "Sort sessions",
          options: _.CALL_SESSION_SORT_OPTIONS_WITH_STATUS,
          onChange: fe,
        })),
        (t[19] = W),
        (t[20] = he))
      : (he = t[20]),
    t[21] !== pe || t[22] !== he
      ? ((me = (0, r.jsxs)("div", {
          className: "flex shrink-0 items-center gap-1",
          children: [pe, he],
        })),
        (t[21] = pe),
        (t[22] = he),
        (t[23] = me))
      : (me = t[23]),
    t[24] === Symbol.for("react.memo_cache_sentinel")
      ? ((ge = (0, r.jsx)("div", {
          className: P,
          children: Array.from({ length: 10 }).map(D),
        })),
        (t[24] = ge))
      : (ge = t[24]),
    t[25] !== ne || t[26] !== te
      ? ((ye = (0, r.jsx)(N, {
          children: (0, r.jsx)(u.ListLoadError, {
            title: "Couldn't load sessions",
            onRetry: te,
            retrying: ne,
          }),
        })),
        (t[25] = ne),
        (t[26] = te),
        (t[27] = ye))
      : (ye = t[27]),
    t[28] === Symbol.for("react.memo_cache_sentinel")
      ? ((ve = (0, r.jsx)(N, {
          children: (0, r.jsx)(l.CallSessionsEmptyState, {
            tab: "all",
          }),
        })),
        (t[28] = ve))
      : (ve = t[28]),
    t[29] === Symbol.for("react.memo_cache_sentinel")
      ? ((be = (0, r.jsx)(N, {
          children: (0, r.jsx)(p.NoSearchResults, {
            title: "No sessions found",
          }),
        })),
        (t[29] = be))
      : (be = t[29]),
    t[30] !== ie
      ? ((Se = () => {
          ie();
        }),
        (t[30] = ie),
        (t[31] = Se))
      : (Se = t[31]),
    t[32] !== re || t[33] !== oe || t[34] !== Se
      ? ((_e = {
          hasNextPage: re,
          isFetchingNextPage: oe,
          onLoadMore: Se,
        }),
        (t[32] = re),
        (t[33] = oe),
        (t[34] = Se),
        (t[35] = _e))
      : (_e = t[35]),
    t[36] !== F ||
      t[37] !== L ||
      t[38] !== B ||
      t[39] !== S ||
      t[40] !== n ||
      t[41] !== Q)
  ) {
    let e;
    t[43] !== F || t[44] !== L || t[45] !== B || t[46] !== S || t[47] !== n
      ? ((e = (e) => {
          const t = (t) =>
              window.open(
                `${L.url}/dashboard/callSessions?callSession=${e.id}&pane=${t}`,
              ),
            o = () =>
              t((0, x.hasCallSessionTranscript)(e) ? "transcript" : "details");
          return (0, r.jsx)(
            s.CallSessionCard,
            {
              session: e,
              title: e.title,
              className: "shrink-0",
              hoverable: !1,
              onPrimaryAction: () => {
                e.activatedAt || !F.isBlocked
                  ? !e.isEndedOrExpired || e.isRecentlyEndedOrExpired
                    ? n(e.id)
                    : o()
                  : F.openGate();
              },
              onTranscriptClick: o,
              menu: (0, r.jsx)(O.CallSessionActionMenu, {
                callSession: e,
                onDetails: () => t("details"),
                onEdit: () => S(e.id),
              }),
              logoUrl: (0, w.buildCompanyLogoUrl)(e.companyDomain, L.url, B),
            },
            e.id,
          );
        }),
        (t[43] = F),
        (t[44] = L),
        (t[45] = B),
        (t[46] = S),
        (t[47] = n),
        (t[48] = e))
      : (e = t[48]),
      (xe = Q.map(e)),
      (t[36] = F),
      (t[37] = L),
      (t[38] = B),
      (t[39] = S),
      (t[40] = n),
      (t[41] = Q),
      (t[42] = xe);
  } else xe = t[42];
  return (
    t[49] !== le || t[50] !== ye || t[51] !== _e || t[52] !== xe
      ? ((we = (0, r.jsx)(c.ListBody, {
          state: le,
          className: P,
          loading: ge,
          error: ye,
          empty: ve,
          noResults: be,
          pagination: _e,
          children: xe,
        })),
        (t[49] = le),
        (t[50] = ye),
        (t[51] = _e),
        (t[52] = xe),
        (t[53] = we))
      : (we = t[53]),
    t[54] !== L || t[55] !== X
      ? ((Ee = X
          ? (0, r.jsxs)(M.Button, {
              disabled: !0,
              variant: "outline",
              className: "h-11 flex-1",
              children: [
                "Loading... ",
                (0, r.jsx)(g.Spinner, { className: "h-4 w-4" }),
              ],
            })
          : (0, r.jsx)(M.Button, {
              variant: "outline",
              className: "h-11 flex-1",
              render: (0, r.jsxs)("a", {
                href: L.url + "/dashboard/callSessions",
                target: "_blank",
                children: [
                  "View in Dashboard",
                  (0, r.jsx)(i.ArrowUpRight, {
                    className: "h-4 w-4",
                  }),
                ],
              }),
            })),
        (t[54] = L),
        (t[55] = X),
        (t[56] = Ee))
      : (Ee = t[56]),
    t[57] === Symbol.for("react.memo_cache_sentinel")
      ? ((Te = (0, r.jsx)(i.Plus, { className: "h-4 w-4" })), (t[57] = Te))
      : (Te = t[57]),
    t[58] !== m
      ? ((ke = (0, r.jsxs)(M.Button, {
          variant: "brand",
          className: "h-11 flex-1",
          onClick: m,
          children: [Te, "Create session"],
        })),
        (t[58] = m),
        (t[59] = ke))
      : (ke = t[59]),
    t[60] !== Ee || t[61] !== ke
      ? ((Ce = (0, r.jsxs)("div", {
          className:
            "relative -mx-4 -mt-2 flex shrink-0 items-center gap-2 border-t px-4 pt-4 shadow-[0_-1px_2px_-1px_rgb(0_0_0_/_0.015),0_-3px_6px_-3px_rgb(0_0_0_/_0.02),0_-8px_16px_-8px_rgb(0_0_0_/_0.025),0_-16px_28px_-16px_rgb(0_0_0_/_0.02)]",
          children: [Ee, ke],
        })),
        (t[60] = Ee),
        (t[61] = ke),
        (t[62] = Ce))
      : (Ce = t[62]),
    t[63] !== me || t[64] !== we || t[65] !== Ce
      ? ((Ie = (0, r.jsxs)("div", {
          className:
            "bg-card flex h-full w-full flex-col gap-2 overflow-hidden rounded-2xl border p-4",
          children: [ce, ue, me, we, Ce],
        })),
        (t[63] = me),
        (t[64] = we),
        (t[65] = Ce),
        (t[66] = Ie))
      : (Ie = t[66]),
    t[67] !== F.gateDialog || t[68] !== Ie
      ? ((Ae = (0, r.jsxs)("div", {
          className: C.SHELL_TAB_HEIGHT_CLASS,
          children: [Ie, F.gateDialog],
        })),
        (t[67] = F.gateDialog),
        (t[68] = Ie),
        (t[69] = Ae))
      : (Ae = t[69]),
    Ae
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(51638 /* app/components/call-session-card */),
  l = n(87567 /* vendor/module-87567 */),
  c = n(34766 /* vendor/module-34766 */),
  u = n(54670 /* vendor/module-54670 */),
  d = n(58847 /* app/components/on-click-58847 */),
  p = n(23401 /* vendor/module-23401 */),
  f = n(97867 /* app/components/theme-provider */),
  h = n(57583 /* app/components/search-input */),
  m = n(81817 /* app/components/skeleton */),
  g = n(15201 /* app/components/spinner */),
  y = n(50885 /* vendor/module-50885 */),
  v = n(48312 /* vendor/module-48312 */),
  b = n(63076 /* vendor/module-63076 */),
  S = n(28913 /* vendor/module-28913 */),
  _ = n(70323 /* vendor/module-70323 */),
  x = n(4339 /* vendor/module-4339 */),
  w = n(313 /* vendor/module-313 */),
  E = n(41303 /* vendor/module-41303 */),
  T = n(1081 /* app/components/open-gate */),
  k = n(8932 /* app/components/api-config-provider */),
  C = n(44825 /* vendor/module-44825 */),
  I = n(46998 /* app/components/trpcreact-provider */),
  A = n(34456 /* app/components/account-sharing-hold-notice */),
  O = n(11533 /* app/components/on-select-11533 */),
  R = n(71247 /* app/components/payment-failed-notice */),
  M = n(99683 /* vendor/module-99683 */),
  P =
    "scroll-fade [--scroll-fade-b-size:0px] no-scrollbar flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto";
function N(e) {
  const t = (0, o.c)(2),
    { children: n } = e;
  let i;
  return (
    t[0] !== n
      ? ((i = (0, r.jsx)("div", {
          className: "flex min-h-0 flex-1 flex-col justify-center",
          children: n,
        })),
        (t[0] = n),
        (t[1] = i))
      : (i = t[1]),
    i
  );
}
function D(e, t) {
  return (0, r.jsx)(
    m.Skeleton,
    { className: "h-[200px] w-full shrink-0 rounded-3xl" },
    t,
  );
}
function j(e) {
  return (0, S.callSessionListPollMs)(e, Date.now());
}
