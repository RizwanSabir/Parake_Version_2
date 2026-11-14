// app/components/on-click-58784.js — webpack module 58784
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CompanyCombobox = function (e) {
  const t = (0, o.c)(58),
    {
      value: n,
      onValueChange: p,
      onSelect: f,
      onClearDomain: h,
      selectedDomain: m,
      getLogoUrl: g,
      searchCompanies: y,
      disabled: v,
      placeholder: b,
      maxLength: S,
      autoSearchOnMount: _,
      invalid: x,
    } = e,
    w = _ ? n : void 0;
  let E;
  t[0] !== f || t[1] !== y || t[2] !== w
    ? ((E = { searchCompanies: y, onSelect: f, initialQuery: w }),
      (t[0] = f),
      (t[1] = y),
      (t[2] = w),
      (t[3] = E))
    : (E = t[3]);
  const {
      results: T,
      open: k,
      setOpen: C,
      isSearching: I,
      search: A,
      selectResult: O,
    } = (0, s.useCompanySearch)(E),
    R = (0, a.useRef)(!1);
  let M, P, N;
  t[4] !== _ || t[5] !== T || t[6] !== O
    ? ((M = () => {
        if (!_ || R.current) return;
        const e = T[0];
        e && ((R.current = !0), O(e));
      }),
      (P = [_, T, O]),
      (t[4] = _),
      (t[5] = T),
      (t[6] = O),
      (t[7] = M),
      (t[8] = P))
    : ((M = t[7]), (P = t[8])),
    (0, a.useEffect)(M, P),
    t[9] !== g || t[10] !== m
      ? ((N = m && g ? g(m) : void 0), (t[9] = g), (t[10] = m), (t[11] = N))
      : (N = t[11]);
  const D = N;
  let j;
  t[12] !== v || t[13] !== h || t[14] !== p || t[15] !== A || t[16] !== n
    ? ((j =
        n && !v
          ? (0, r.jsx)("button", {
              type: "button",
              "aria-label": "Clear company",
              className:
                "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 z-10 -translate-y-1/2",
              onClick: () => {
                (R.current = !0), p(""), h(), A("");
              },
              children: (0, r.jsx)(i.X, { className: "size-4" }),
            })
          : null),
      (t[12] = v),
      (t[13] = h),
      (t[14] = p),
      (t[15] = A),
      (t[16] = n),
      (t[17] = j))
    : (j = t[17]);
  const L = j;
  let F, U, B;
  t[18] !== O
    ? ((F = (e) => {
        e && O(e);
      }),
      (t[18] = O),
      (t[19] = F))
    : (F = t[19]),
    t[20] !== h || t[21] !== p || t[22] !== A
      ? ((U = (e, t) => {
          "input-change" === t.reason && ((R.current = !0), p(e), h(), A(e));
        }),
        (t[20] = h),
        (t[21] = p),
        (t[22] = A),
        (t[23] = U))
      : (U = t[23]),
    t[24] !== D
      ? ((B =
          D &&
          (0, r.jsx)("img", {
            src: D,
            alt: "",
            className:
              "absolute top-1/2 left-2 z-10 size-4 -translate-y-1/2 rounded-sm",
          })),
        (t[24] = D),
        (t[25] = B))
      : (B = t[25]);
  const z = D && "pl-8",
    H = n && "pr-8";
  let V;
  t[26] !== z || t[27] !== H
    ? ((V = (0, l.cn)(z, H)), (t[26] = z), (t[27] = H), (t[28] = V))
    : (V = t[28]);
  const q = x || void 0;
  let G, W, $, Y, K;
  return (
    t[29] !== A || t[30] !== n
      ? ((G = () => {
          n.trim() && A(n);
        }),
        (t[29] = A),
        (t[30] = n),
        (t[31] = G))
      : (G = t[31]),
    t[32] !== S || t[33] !== b || t[34] !== V || t[35] !== q || t[36] !== G
      ? ((W = (0, r.jsx)(c.ComboboxInput, {
          className: V,
          placeholder: b,
          maxLength: S,
          "aria-invalid": q,
          required: !0,
          onFocus: G,
        })),
        (t[32] = S),
        (t[33] = b),
        (t[34] = V),
        (t[35] = q),
        (t[36] = G),
        (t[37] = W))
      : (W = t[37]),
    t[38] !== L || t[39] !== W || t[40] !== B
      ? (($ = (0, r.jsxs)("div", {
          className: "relative",
          children: [B, W, L],
        })),
        (t[38] = L),
        (t[39] = W),
        (t[40] = B),
        (t[41] = $))
      : ($ = t[41]),
    t[42] !== g || t[43] !== I || t[44] !== h || t[45] !== k || t[46] !== C
      ? ((Y =
          k &&
          (0, r.jsx)(c.ComboboxContent, {
            children: I
              ? (0, r.jsxs)("div", {
                  className:
                    "text-muted-foreground phone:gap-3 phone:p-3 flex items-center gap-2 px-3 py-2 text-sm",
                  children: [
                    (0, r.jsx)(u.Spinner, {
                      className: "size-4 shrink-0",
                    }),
                    "Fetching suggestions…",
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(c.ComboboxList, {
                      children: (e) => {
                        const t = g?.(e.domain);
                        return (0, r.jsxs)(
                          c.ComboboxItem,
                          {
                            value: e,
                            children: [
                              t
                                ? (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: "size-4 shrink-0 rounded-sm",
                                  })
                                : (0, r.jsx)("span", {
                                    className: "size-4 shrink-0",
                                  }),
                              (0, r.jsx)("span", {
                                className: "truncate",
                                children: e.name,
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-muted-foreground phone:text-sm ml-auto truncate pl-2 text-xs",
                                children: e.domain,
                              }),
                            ],
                          },
                          e.domain,
                        );
                      },
                    }),
                    (0, r.jsx)("button", {
                      type: "button",
                      className:
                        "text-muted-foreground hover:bg-muted phone:rounded-lg phone:p-3 w-full px-3 py-2 text-left text-sm",
                      onClick: () => {
                        h(), C(!1);
                      },
                      children: "None of the above",
                    }),
                  ],
                }),
          })),
        (t[42] = g),
        (t[43] = I),
        (t[44] = h),
        (t[45] = k),
        (t[46] = C),
        (t[47] = Y))
      : (Y = t[47]),
    t[48] !== v ||
    t[49] !== k ||
    t[50] !== T ||
    t[51] !== C ||
    t[52] !== $ ||
    t[53] !== Y ||
    t[54] !== F ||
    t[55] !== U ||
    t[56] !== n
      ? ((K = (0, r.jsxs)(c.Combobox, {
          items: T,
          filter: null,
          inputValue: n,
          itemToStringLabel: d,
          open: k,
          onOpenChange: C,
          onValueChange: F,
          onInputValueChange: U,
          disabled: v,
          children: [$, Y],
        })),
        (t[48] = v),
        (t[49] = k),
        (t[50] = T),
        (t[51] = C),
        (t[52] = $),
        (t[53] = Y),
        (t[54] = F),
        (t[55] = U),
        (t[56] = n),
        (t[57] = K))
      : (K = t[57]),
    K
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(64143 /* vendor/module-64143 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(57577 /* app/components/combobox */),
  u = n(15201 /* app/components/spinner */);
function d(e) {
  return e?.name ?? "";
}
