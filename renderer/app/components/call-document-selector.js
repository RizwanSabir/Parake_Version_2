// app/components/call-document-selector.js — webpack module 91379
// params: (e, t, n) = (module, exports, require)
t.CallDocumentSelector = function (e) {
  const t = (0, o.c)(31),
    {
      selectedDocumentIds: n,
      onChange: d,
      className: p,
      disabled: f,
      sheet: h,
    } = e,
    { apiConfig: m } = (0, c.useApiConfig)();
  let g;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = { limit: "all" }), (t[0] = g))
    : (g = t[0]);
  const {
    data: y,
    isLoading: v,
    isRefetching: b,
    error: S,
    refetch: _,
  } = u.api.callDocument.getMany.useQuery(g);
  let x;
  t[1] !== m
    ? ((x = () =>
        window.open(
          `${m.url}/dashboard/documents`,
          "_blank",
          "noopener,noreferrer",
        )),
      (t[1] = m),
      (t[2] = x))
    : (x = t[2]);
  const w = x,
    E = y?.data,
    T = !!S;
  let k, C, I, A, O, R, M, P, N;
  return (
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((k = (0, l.getSupportedExtensionsLabel)()), (t[3] = k))
      : (k = t[3]),
    t[4] !== w
      ? ((C = [
          {
            kind: "upload",
            label: "Add a document",
            description: k,
            onPress: w,
          },
        ]),
        (t[4] = w),
        (t[5] = C))
      : (C = t[5]),
    t[6] !== b
      ? ((I = b
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(s.Spinner, { className: "size-4" }),
                " Refreshing...",
              ],
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i.RefreshCw, { className: "size-4" }),
                " Refresh documents",
              ],
            })),
        (t[6] = b),
        (t[7] = I))
      : (I = t[7]),
    t[8] !== b || t[9] !== _
      ? ((A = () => {
          b || _();
        }),
        (t[8] = b),
        (t[9] = _),
        (t[10] = A))
      : (A = t[10]),
    t[11] !== I || t[12] !== A
      ? ((O = { label: I, onSelect: A, keepOpen: !0 }),
        (t[11] = I),
        (t[12] = A),
        (t[13] = O))
      : (O = t[13]),
    t[14] === Symbol.for("react.memo_cache_sentinel")
      ? ((R = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.Plus, { className: "size-4" }),
            " Add a document",
          ],
        })),
        (t[14] = R))
      : (R = t[14]),
    t[15] !== w
      ? ((M = { label: R, onSelect: w }), (t[15] = w), (t[16] = M))
      : (M = t[16]),
    t[17] !== M || t[18] !== O
      ? ((P = [O, M]), (t[17] = M), (t[18] = O), (t[19] = P))
      : (P = t[19]),
    t[20] !== p ||
    t[21] !== f ||
    t[22] !== v ||
    t[23] !== d ||
    t[24] !== n ||
    t[25] !== h ||
    t[26] !== P ||
    t[27] !== E ||
    t[28] !== T ||
    t[29] !== C
      ? ((N = (0, r.jsx)(a.CallDocumentSlot, {
          documents: E,
          isLoading: v,
          hasError: T,
          selectedDocumentIds: n,
          onChange: d,
          className: p,
          disabled: f,
          sheet: h,
          addMethods: C,
          menuActions: P,
        })),
        (t[20] = p),
        (t[21] = f),
        (t[22] = v),
        (t[23] = d),
        (t[24] = n),
        (t[25] = h),
        (t[26] = P),
        (t[27] = E),
        (t[28] = T),
        (t[29] = C),
        (t[30] = N))
      : (N = t[30]),
    N
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(24485 /* app/components/on-select-24485 */),
  s = n(15201 /* app/components/spinner */),
  l = n(65013 /* vendor/module-65013 */),
  c = n(8932 /* app/components/api-config-provider */),
  u = n(46998 /* app/components/trpcreact-provider */);
