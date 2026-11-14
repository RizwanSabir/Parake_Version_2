// app/components/call-session-card.js — webpack module 51638
// params: (e, t, n) = (module, exports, require)
t.CallSessionCard = function (e) {
  const t = (0, o.c)(109),
    {
      session: n,
      title: a,
      logoUrl: C,
      onPrimaryAction: I,
      onTranscriptClick: A,
      menu: O,
      hideCredits: R,
      hoverable: M,
      bare: P,
      className: N,
    } = e,
    D = void 0 !== R && R,
    j = void 0 === M || M,
    L = void 0 !== P && P;
  let F;
  t[0] !== n
    ? ((F = (0, x.getSessionStatus)(n)), (t[0] = n), (t[1] = F))
    : (F = t[1]);
  const U = F,
    { canRejoin: B, msLeft: z } = (0, s.useRejoinCountdown)(n),
    H = "ended" === U ? A : I,
    V = (0, d.isBlank)(n.shortDescription) ? "" : n.shortDescription;
  let q, G, W, $, Y, K, Z, Q, J, X, ee, te, ne, re, oe;
  if (
    t[2] !== L ||
    t[3] !== B ||
    t[4] !== N ||
    t[5] !== V ||
    t[6] !== H ||
    t[7] !== D ||
    t[8] !== j ||
    t[9] !== C ||
    t[10] !== O ||
    t[11] !== z ||
    t[12] !== I ||
    t[13] !== A ||
    t[14] !== n ||
    t[15] !== U ||
    t[16] !== a
  ) {
    const e = (0, c.hasCallSessionTranscript)(n),
      o = n.saveTranscription;
    let s;
    t[28] !== D || t[29] !== n
      ? ((s = (function (e, t) {
          const n = [];
          null !== e.activatedAt &&
            n.push({
              key: "duration",
              node: (0, r.jsx)(v.CallSessionDuration, {
                session: e,
                variant: "body",
                lowTimeWarning: !0,
              }),
            });
          const o = (0, l.getCallSessionCreditsUsed)(e),
            i = e.isIntro
              ? "Introduction"
              : t
                ? null
                : e.isFreeSession
                  ? "Free Session"
                  : null === o
                    ? null
                    : `${o} Credit${1 === o ? "" : "s"}`;
          return (
            null !== i &&
              n.push({
                key: "usage",
                node: (0, r.jsx)(y.Typography, {
                  variant: "body",
                  children: i,
                }),
              }),
            n
          );
        })(n, D)),
        (t[28] = D),
        (t[29] = n),
        (t[30] = s))
      : (s = t[30]);
    const d = s;
    let R;
    (G = Boolean(H && j)),
      t[31] !== n
        ? ((R = (0, b.callSessionKindDisplay)(n)), (t[31] = n), (t[32] = R))
        : (R = t[32]);
    const { label: M, Icon: P } = R,
      F = k;
    (K = "group/card w-full rounded-3xl"), (q = g.Card), (X = H);
    const te = L
        ? "border-transparent bg-transparent pb-5"
        : "bg-session-card border-border pb-3",
      ne = H && "cursor-pointer",
      re = G && "overflow-visible",
      oe =
        H &&
        j &&
        "md:group-hover/card:border-session-border-hover md:has-[[data-slot=dropdown-menu-trigger][data-popup-open]]:border-session-border-hover group-has-[:focus-visible]/card:border-session-border-hover active:not-has-[:is(button,[data-card-press-exempt]):active]:scale-99 active:not-has-[:is(button,[data-card-press-exempt]):active]:duration-(--duration-exit-fast) md:delay-75 md:group-hover/card:delay-0 md:group-hover/card:duration-(--duration-fast)";
    t[33] !== N || t[34] !== te || t[35] !== ne || t[36] !== re || t[37] !== oe
      ? ((ee = (0, u.cn)(
          "relative w-full gap-3 rounded-[inherit] border px-2 pt-2 transition-[border-color,scale] duration-(--duration-slow) ease-(--ease-out-strong) motion-reduce:transition-none",
          te,
          ne,
          "has-[:focus-visible]:outline-ring has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2",
          re,
          oe,
          N,
        )),
        (t[33] = N),
        (t[34] = te),
        (t[35] = ne),
        (t[36] = re),
        (t[37] = oe),
        (t[38] = ee))
      : (ee = t[38]);
    const ie = L ? "gap-3 pb-1" : "bg-session-panel shadow-tray-rest",
      ae =
        H &&
        j &&
        "md:group-hover/card:bg-session-background-hover md:group-has-[[data-slot=dropdown-menu-trigger][data-popup-open]]/card:bg-session-background-hover group-has-[:focus-visible]/card:bg-session-background-hover md:group-hover/card:duration-(--duration-fast)",
      se =
        H &&
        !L &&
        "group-[:active:not(:has(:is(button,[data-card-press-exempt]):active))]/card:shadow-tray-press";
    let le, ce;
    t[39] !== ie || t[40] !== ae || t[41] !== se
      ? ((le = (0, u.cn)(
          "relative isolate flex w-full flex-col gap-4 overflow-hidden rounded-2xl p-3 text-left transition-[background-color,box-shadow] duration-(--duration-slow) ease-(--ease-out-strong) motion-reduce:transition-none",
          ie,
          ae,
          se,
        )),
        (t[39] = ie),
        (t[40] = ae),
        (t[41] = se),
        (t[42] = le))
      : (le = t[42]),
      t[43] !== H || t[44] !== j || t[45] !== C
        ? ((ce = H && j && (0, r.jsx)(f.CardSpotlight, { accentFrom: C })),
          (t[43] = H),
          (t[44] = j),
          (t[45] = C),
          (t[46] = ce))
        : (ce = t[46]);
    const ue = L ? "gap-3" : "gap-2";
    let de, pe, fe, he, me, ge, ye, ve;
    t[47] !== ue
      ? ((de = (0, u.cn)("flex w-full flex-col", ue)),
        (t[47] = ue),
        (t[48] = de))
      : (de = t[48]),
      t[49] !== n.createdAt
        ? ((pe = (0, r.jsx)(y.Typography, {
            variant: "overline",
            truncate: !0,
            render: (0, r.jsx)(h.LocalDate, {
              date: n.createdAt,
              disableTooltip: !0,
              className: "text-muted-foreground",
            }),
          })),
          (t[49] = n.createdAt),
          (t[50] = pe))
        : (pe = t[50]),
      t[51] !== L || t[52] !== V || t[53] !== C || t[54] !== a
        ? ((fe = L
            ? (0, r.jsxs)("div", {
                className: "flex w-full items-center gap-3",
                children: [
                  (0, r.jsx)(S.CompanyLogo, {
                    logoUrl: C,
                    title: a,
                    size: 48,
                    className: "rounded-xl p-2",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col pr-10",
                    children: [
                      (0, r.jsx)(y.Typography, {
                        variant: "title-sm",
                        className: "text-foreground h-6 truncate",
                        children: a,
                      }),
                      (0, r.jsx)(y.Typography, {
                        variant: "body",
                        className:
                          "text-muted-foreground min-h-[1lh] w-full truncate",
                        "aria-hidden": !V || void 0,
                        children: V,
                      }),
                    ],
                  }),
                ],
              })
            : (0, r.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex h-6 w-full items-center gap-2 pr-8",
                    children: [
                      (0, r.jsx)(S.CompanyLogo, {
                        logoUrl: C,
                        title: a,
                      }),
                      (0, r.jsx)(y.Typography, {
                        variant: "title-sm",
                        className: "text-foreground h-6 truncate",
                        children: a,
                      }),
                    ],
                  }),
                  (0, r.jsx)(y.Typography, {
                    variant: "body",
                    className:
                      "text-muted-foreground min-h-[1lh] w-full truncate",
                    "aria-hidden": !V || void 0,
                    children: V,
                  }),
                ],
              })),
          (t[51] = L),
          (t[52] = V),
          (t[53] = C),
          (t[54] = a),
          (t[55] = fe))
        : (fe = t[55]),
      t[56] !== de || t[57] !== pe || t[58] !== fe
        ? ((he = (0, r.jsxs)("div", {
            className: de,
            "data-spotlight-quiet": !0,
            children: [pe, fe],
          })),
          (t[56] = de),
          (t[57] = pe),
          (t[58] = fe),
          (t[59] = he))
        : (he = t[59]),
      t[60] !== P
        ? ((me = (0, r.jsx)(P, { className: "size-3" })),
          (t[60] = P),
          (t[61] = me))
        : (me = t[61]),
      t[62] !== L || t[63] !== me || t[64] !== M
        ? ((ge = (0, r.jsx)(w, { icon: me, label: M, soft: L })),
          (t[62] = L),
          (t[63] = me),
          (t[64] = M),
          (t[65] = ge))
        : (ge = t[65]),
      t[66] !== L || t[67] !== o
        ? ((ye =
            o &&
            (0, r.jsx)(w, {
              icon: (0, r.jsx)(i.MessagesSquare, {
                className: "size-3",
              }),
              label: "Transcript",
              soft: L,
            })),
          (t[66] = L),
          (t[67] = o),
          (t[68] = ye))
        : (ye = t[68]),
      t[69] !== ge || t[70] !== ye
        ? ((ve = (0, r.jsxs)("div", {
            className: "flex w-full flex-wrap items-end gap-1",
            children: [ge, ye],
          })),
          (t[69] = ge),
          (t[70] = ye),
          (t[71] = ve))
        : (ve = t[71]),
      t[72] !== le || t[73] !== ce || t[74] !== he || t[75] !== ve
        ? ((W = (0, r.jsxs)("div", {
            className: le,
            children: [ce, he, ve],
          })),
          (t[72] = le),
          (t[73] = ce),
          (t[74] = he),
          (t[75] = ve),
          (t[76] = W))
        : (W = t[76]),
      t[77] !== O
        ? (($ =
            O &&
            (0, r.jsx)("div", {
              "data-card-press-exempt": !0,
              className:
                "[&_[data-slot=dropdown-menu-trigger]:hover]:bg-session-control-hover absolute top-[15px] right-[15px]",
              onClick: T,
              children: O,
            })),
          (t[77] = O),
          (t[78] = $))
        : ($ = t[78]),
      t[79] !== L
        ? ((Y =
            L &&
            (0, r.jsx)("span", {
              "aria-hidden": !0,
              className:
                "bg-foreground/8 dark:bg-foreground/10 -mx-2.25 h-px shrink-0",
            })),
          (t[79] = L),
          (t[80] = Y))
        : (Y = t[80]);
    const be = L ? "pt-1 pr-3" : "pr-1";
    let Se, _e;
    t[81] !== be
      ? ((Z = (0, u.cn)(
          "flex w-full items-center justify-between gap-2 pl-3",
          be,
        )),
        (t[81] = be),
        (t[82] = Z))
      : (Z = t[82]),
      t[83] !== U
        ? ((Se = (0, r.jsx)(x.SessionStatusIndicator, { status: U })),
          (t[83] = U),
          (t[84] = Se))
        : (Se = t[84]),
      t[85] !== L || t[86] !== d
        ? ((_e = (0, r.jsx)("div", {
            className: "text-muted-foreground flex items-center gap-1.5",
            children: (0, r.jsx)(E, { items: d, soft: L }),
          })),
          (t[85] = L),
          (t[86] = d),
          (t[87] = _e))
        : (_e = t[87]),
      t[88] !== Se || t[89] !== _e
        ? ((Q = (0, r.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [Se, _e],
          })),
          (t[88] = Se),
          (t[89] = _e),
          (t[90] = Q))
        : (Q = t[90]),
      (J =
        "ended" !== U
          ? I &&
            (0, r.jsx)(m.Button, {
              size: L ? "lg" : "default",
              onClick: F(I),
              className: (0, u.cn)(
                G &&
                  "live" !== U &&
                  "md:pointer-fine:border-border md:pointer-fine:bg-session-card md:pointer-fine:text-foreground md:pointer-fine:before:bg-foreground md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:border-foreground md:pointer-fine:focus-visible:border-foreground motion-reduce:before:transition-none md:pointer-fine:relative md:pointer-fine:isolate md:pointer-fine:overflow-hidden md:pointer-fine:border md:pointer-fine:duration-(--duration-slow) md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:delay-150 md:pointer-fine:before:absolute md:pointer-fine:before:inset-0 md:pointer-fine:before:origin-left md:pointer-fine:before:scale-x-0 md:pointer-fine:before:transition-[scale,opacity] md:pointer-fine:before:duration-(--duration-slow) md:pointer-fine:before:ease-(--ease-in-out-soft) md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:before:scale-x-100 md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:before:delay-150 md:pointer-fine:hover:before:opacity-90 md:pointer-fine:focus-visible:before:scale-x-100",
                G && "live" !== U && "md:pointer-fine:shadow-none",
              ),
              children: (0, r.jsx)(y.Typography, {
                variant: "body",
                children: (0, r.jsx)("span", {
                  className: (0, u.cn)(
                    G &&
                      "live" !== U &&
                      "md:pointer-fine:text-blend-ink select-none md:pointer-fine:relative md:pointer-fine:mix-blend-difference",
                  ),
                  children: "live" === U ? "Join session" : "Start session",
                }),
              }),
            })
          : (0, r.jsxs)("div", {
              className: "flex items-center gap-1.5",
              children: [
                B &&
                  I &&
                  (0, r.jsx)(_.RejoinCountdownTooltip, {
                    msLeft: z,
                    children: (0, r.jsx)(m.Button, {
                      variant: "outline",
                      size: L ? "icon-lg" : "icon",
                      "aria-label": "Rejoin session",
                      onClick: F(I),
                      children: (0, r.jsx)(i.Undo2, {}),
                    }),
                  }),
                (0, r.jsx)(p.ButtonWithTooltip, {
                  variant: "outline",
                  size: L ? "lg" : "default",
                  className: (0, u.cn)(
                    "rounded-xl",
                    G &&
                      e &&
                      "md:pointer-fine:dark:bg-session-card md:pointer-fine:before:bg-foreground md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:border-foreground md:pointer-fine:focus-visible:border-foreground motion-reduce:before:transition-none md:pointer-fine:relative md:pointer-fine:isolate md:pointer-fine:overflow-hidden md:pointer-fine:duration-(--duration-slow) md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:delay-150 md:pointer-fine:before:absolute md:pointer-fine:before:inset-0 md:pointer-fine:before:origin-left md:pointer-fine:before:scale-x-0 md:pointer-fine:before:transition-[scale,opacity] md:pointer-fine:before:duration-(--duration-slow) md:pointer-fine:before:ease-(--ease-in-out-soft) md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:before:scale-x-100 md:pointer-fine:group-[:hover:not(:has([data-card-press-exempt]:hover))]/card:before:delay-150 md:pointer-fine:hover:before:opacity-90 md:pointer-fine:focus-visible:before:scale-x-100",
                    G && e && "md:pointer-fine:shadow-none",
                  ),
                  disabled: !e,
                  tooltip: e
                    ? void 0
                    : "Transcript was not saved for this call session",
                  onClick: F(A),
                  children: (0, r.jsx)(y.Typography, {
                    variant: "body",
                    children: (0, r.jsx)("span", {
                      className: (0, u.cn)(
                        G &&
                          e &&
                          "md:pointer-fine:text-blend-ink select-none md:pointer-fine:relative md:pointer-fine:mix-blend-difference",
                      ),
                      children: "View transcript",
                    }),
                  }),
                }),
              ],
            })),
      (t[2] = L),
      (t[3] = B),
      (t[4] = N),
      (t[5] = V),
      (t[6] = H),
      (t[7] = D),
      (t[8] = j),
      (t[9] = C),
      (t[10] = O),
      (t[11] = z),
      (t[12] = I),
      (t[13] = A),
      (t[14] = n),
      (t[15] = U),
      (t[16] = a),
      (t[17] = q),
      (t[18] = G),
      (t[19] = W),
      (t[20] = $),
      (t[21] = Y),
      (t[22] = K),
      (t[23] = Z),
      (t[24] = Q),
      (t[25] = J),
      (t[26] = X),
      (t[27] = ee);
  } else
    (q = t[17]),
      (G = t[18]),
      (W = t[19]),
      ($ = t[20]),
      (Y = t[21]),
      (K = t[22]),
      (Z = t[23]),
      (Q = t[24]),
      (J = t[25]),
      (X = t[26]),
      (ee = t[27]);
  return (
    t[91] !== Z || t[92] !== Q || t[93] !== J
      ? ((te = (0, r.jsxs)("div", {
          className: Z,
          children: [Q, J],
        })),
        (t[91] = Z),
        (t[92] = Q),
        (t[93] = J),
        (t[94] = te))
      : (te = t[94]),
    t[95] !== G
      ? ((ne =
          G &&
          (0, r.jsx)("span", {
            "aria-hidden": !0,
            "data-spotlight-edge": !0,
            className: "card-edge-light",
          })),
        (t[95] = G),
        (t[96] = ne))
      : (ne = t[96]),
    t[97] !== q ||
    t[98] !== W ||
    t[99] !== $ ||
    t[100] !== Y ||
    t[101] !== te ||
    t[102] !== ne ||
    t[103] !== X ||
    t[104] !== ee
      ? ((re = (0, r.jsxs)(q, {
          onClick: X,
          className: ee,
          children: [W, $, Y, te, ne],
        })),
        (t[97] = q),
        (t[98] = W),
        (t[99] = $),
        (t[100] = Y),
        (t[101] = te),
        (t[102] = ne),
        (t[103] = X),
        (t[104] = ee),
        (t[105] = re))
      : (re = t[105]),
    t[106] !== K || t[107] !== re
      ? ((oe = (0, r.jsx)("div", { className: K, children: re })),
        (t[106] = K),
        (t[107] = re),
        (t[108] = oe))
      : (oe = t[108]),
    oe
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(54384 /* vendor/module-54384 */),
  l = n(75613 /* vendor/module-75613 */),
  c = n(4339 /* vendor/module-4339 */),
  u = n(29113 /* vendor/module-29113 */),
  d = n(46556 /* vendor/module-46556 */),
  p = n(47276 /* vendor/module-47276 */),
  f = n(38255 /* app/components/card-spotlight */),
  h = n(76052 /* app/components/local-date */),
  m = n(66244 /* app/components/button-variants */),
  g = n(13998 /* app/components/card */),
  y = n(34483 /* app/components/typography-variants */),
  v = n(62464 /* vendor/module-62464 */),
  b = n(40054 /* vendor/module-40054 */),
  S = n(25984 /* app/components/on-load */),
  _ = n(83407 /* vendor/module-83407 */),
  x = n(89411 /* app/components/get-session-status */);
function w(e) {
  const t = (0, o.c)(8),
    { icon: n, label: i, soft: a } = e,
    s =
      void 0 !== a && a
        ? "bg-foreground/5 text-foreground dark:bg-foreground/8 border-transparent"
        : "border-border bg-background text-muted-foreground dark:bg-transparent";
  let l, c, d;
  return (
    t[0] !== s
      ? ((l = (0, u.cn)(
          "flex shrink-0 items-center justify-center gap-1.5 rounded-(--radius-tag) border py-1.5 pr-2.5 pl-2.5 text-xs leading-none",
          s,
        )),
        (t[0] = s),
        (t[1] = l))
      : (l = t[1]),
    t[2] !== i
      ? ((c = (0, r.jsx)(y.Typography, {
          variant: "label",
          children: i,
        })),
        (t[2] = i),
        (t[3] = c))
      : (c = t[3]),
    t[4] !== n || t[5] !== l || t[6] !== c
      ? ((d = (0, r.jsxs)("span", {
          "data-spotlight-quiet-box": !0,
          className: l,
          children: [n, c],
        })),
        (t[4] = n),
        (t[5] = l),
        (t[6] = c),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
function E(e) {
  const t = (0, o.c)(8),
    { items: n, soft: i } = e,
    s = void 0 !== i && i;
  if (0 === n.length) {
    let e;
    return (
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsx)(y.Typography, {
            variant: "body",
            children: "No usage yet",
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let l, c;
  if (t[1] !== n || t[2] !== s) {
    let e;
    t[4] !== s
      ? ((e = (e, t) =>
          (0, r.jsxs)(
            a.Fragment,
            {
              children: [
                t > 0 &&
                  (0, r.jsx)("span", {
                    className: (0, u.cn)(
                      "bg-border size-1 shrink-0 rounded-full",
                      s && "dark:bg-muted-foreground/50",
                    ),
                  }),
                e.node,
              ],
            },
            e.key,
          )),
        (t[4] = s),
        (t[5] = e))
      : (e = t[5]),
      (l = n.map(e)),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l);
  } else l = t[3];
  return (
    t[6] !== l
      ? ((c = (0, r.jsx)(r.Fragment, { children: l })), (t[6] = l), (t[7] = c))
      : (c = t[7]),
    c
  );
}
function T(e) {
  return e.stopPropagation();
}
function k(e) {
  return (t) => {
    t.stopPropagation(), e?.();
  };
}
