// app/components/on-click-52353.js — webpack module 52353
// params: (e, t, n) = (module, exports, require)
t.SessionTypeChooser = function (e) {
  const t = (0, o.c)(133),
    {
      callCredits: n,
      freeSessionsLeft: g,
      freeSessionAllowed: y,
      timeLeftForFreeSession: v,
      onSelectPaid: b,
      onSelectFree: S,
      isActivating: _,
      purchasePath: x,
      isLoading: w,
      onBack: E,
      onExit: T,
      layout: k,
      mode: C,
    } = e,
    I = void 0 !== w && w,
    A = void 0 === k ? "stacked" : k;
  let O;
  t[0] !== e.freeMockAvailable || t[1] !== e.isMock || t[2] !== e.onSelectMock
    ? ((O = e.isMock
        ? {
            onSelectMock: e.onSelectMock,
            freeMockAvailable: e.freeMockAvailable,
          }
        : null),
      (t[0] = e.freeMockAvailable),
      (t[1] = e.isMock),
      (t[2] = e.onSelectMock),
      (t[3] = O))
    : (O = t[3]);
  const R = O,
    [M, P] = (0, a.useState)(null),
    [N, D] = (0, a.useState)(null),
    j = "interview" === C ? "interview" : "call",
    L = n >= s.SESSION_CREDIT_COST,
    F = L || I || !!x,
    U = g <= 0,
    B = x
      ? `${s.NO_FREE_SESSIONS_LEFT_NOTE} ${s.FREE_SESSIONS_RESET_NOTE}`
      : s.NO_FREE_SESSIONS_LEFT_NOTE,
    z = I || _ || U || !y,
    H = x?.url,
    V = x?.openInNewTab ? "_blank" : void 0,
    q = x?.openInNewTab ? "noopener noreferrer" : void 0;
  let G;
  t[4] !== H || t[5] !== V || t[6] !== q
    ? ((G = { href: H, target: V, rel: q }),
      (t[4] = H),
      (t[5] = V),
      (t[6] = q),
      (t[7] = G))
    : (G = t[7]);
  const W = G,
    $ = "cards" === A ? "split" : "card",
    Y = "cards" === A ? "size-5" : "size-4";
  let K;
  t[8] !== I
    ? ((K = (e) =>
        I
          ? void 0
          : (0, r.jsxs)(c.Badge, {
              variant: "secondary",
              shape: "corner",
              children: [e, " left"],
            })),
      (t[8] = I),
      (t[9] = K))
    : (K = t[9]);
  const Z = K;
  let Q;
  t[10] !== A
    ? ((Q = (e) =>
        (0, r.jsx)(d.Typography, {
          variant: "title-sm",
          render: (0, r.jsx)("h2", {}),
          className: (0, l.cn)("text-center", "stacked" !== A && "px-10"),
          children: e,
        })),
      (t[10] = A),
      (t[11] = Q))
    : (Q = t[11]);
  const J = Q;
  let X;
  t[12] !== _ || t[13] !== A || t[14] !== T
    ? ((X =
        "stacked" !== A &&
        T &&
        (0, r.jsx)(u.Button, {
          variant: "ghost",
          size: "icon",
          "aria-label": "Close",
          className: (0, l.cn)(
            "absolute top-2 z-10 group-data-[swipe-axis=y]/drawer-popup:top-7",
            "right-2 group-data-[swipe-axis=y]/drawer-popup:right-4",
          ),
          onClick: T,
          disabled: _,
          children: (0, r.jsx)(i.X, {}),
        })),
      (t[12] = _),
      (t[13] = A),
      (t[14] = T),
      (t[15] = X))
    : (X = t[15]);
  const ee = X;
  let te;
  t[16] !== _ || t[17] !== A || t[18] !== E
    ? ((te =
        "stacked" !== A &&
        E &&
        (0, r.jsx)(u.Button, {
          variant: "ghost",
          size: "icon",
          "aria-label": "Back",
          className: (0, l.cn)(
            "absolute top-2 z-10 group-data-[swipe-axis=y]/drawer-popup:top-7",
            "left-2 group-data-[swipe-axis=y]/drawer-popup:left-4",
          ),
          onClick: E,
          disabled: _,
          children: (0, r.jsx)(i.MoveLeft, {}),
        })),
      (t[16] = _),
      (t[17] = A),
      (t[18] = E),
      (t[19] = te))
    : (te = t[19]);
  const ne = te;
  let re;
  t[20] !== _ || t[21] !== A || t[22] !== E
    ? ((re =
        "stacked" === A &&
        E &&
        (0, r.jsxs)(u.Button, {
          variant: "outline",
          size: "xl",
          className: "w-full flex-row items-center gap-1",
          onClick: E,
          disabled: _,
          children: [(0, r.jsx)(i.ArrowLeft, { className: "size-4" }), " Back"],
        })),
      (t[20] = _),
      (t[21] = A),
      (t[22] = E),
      (t[23] = re))
    : (re = t[23]);
  const oe = re,
    ie = I
      ? "Loading..."
      : U
        ? "No free sessions left"
        : y
          ? "Start free"
          : `Available in ${v}`,
    ae = I || _ || !R?.freeMockAvailable,
    se = I
      ? "Loading..."
      : R?.freeMockAvailable
        ? "Start free"
        : "Already Used";
  let le;
  t[24] !== W || t[25] !== L || t[26] !== _ || t[27] !== I || t[28] !== M
    ? ((le = (e, t) =>
        I
          ? (0, r.jsx)(u.Button, {
              size: "xl",
              className: "w-full",
              loading: !0,
              children: "Loading...",
            })
          : L
            ? (0, r.jsx)(u.Button, {
                size: "xl",
                className: "w-full",
                onClick: e,
                disabled: _,
                loading: _ && M === t,
                children: `Start · ${s.SESSION_CREDIT_COST} credits`,
              })
            : (0, r.jsx)("a", {
                ...W,
                className: (0, l.cn)(
                  (0, u.buttonVariants)({ size: "xl" }),
                  "w-full",
                ),
                children: "Buy Credits",
              })),
      (t[24] = W),
      (t[25] = L),
      (t[26] = _),
      (t[27] = I),
      (t[28] = M),
      (t[29] = le))
    : (le = t[29]);
  const ce = le;
  if ("list" === A) {
    const e = R ? !ae : !z,
      n = L ? "paid" : e ? "free" : F ? "paid" : null,
      o = "free" !== N || e ? (N ?? n) : n,
      a = I
        ? null
        : R
          ? R.freeMockAvailable
            ? "1 left"
            : "Used"
          : U
            ? "None left"
            : y
              ? `${g} left`
              : `In ${v}`;
    let c;
    t[30] !== R || t[31] !== S
      ? ((c = () => {
          R ? (P("mockFree"), R.onSelectMock({ free: !0 })) : (P("free"), S());
        }),
        (t[30] = R),
        (t[31] = S),
        (t[32] = c))
      : (c = t[32]);
    const x = c;
    let w;
    t[33] !== R || t[34] !== b
      ? ((w = () => {
          R ? (P("mockPaid"), R.onSelectMock({ free: !1 })) : (P("paid"), b());
        }),
        (t[33] = R),
        (t[34] = b),
        (t[35] = w))
      : (w = t[35]);
    const E = w,
      k = I
        ? null
        : "free" === o
          ? R
            ? "One free mock per account, and it can't be extended."
            : `${s.FREE_SESSION_COOLDOWN_MINUTES}-minute wait between free sessions.`
          : "paid" === o
            ? R
              ? `Mock ${j}s run on a fixed clock and can't be extended. ${m}`
              : `Extends by ${s.MAX_CALL_DURATION_MINUTES} minutes when the timer runs out. ${h}`
            : null;
    let C;
    t[36] !== W ||
    t[37] !== o ||
    t[38] !== ie ||
    t[39] !== se ||
    t[40] !== L ||
    t[41] !== _ ||
    t[42] !== I ||
    t[43] !== R ||
    t[44] !== x ||
    t[45] !== E
      ? ((C = I
          ? (0, r.jsx)(u.Button, {
              size: "xl",
              className: "w-full",
              loading: !0,
              children: "Loading...",
            })
          : "free" === o
            ? (0, r.jsx)(u.Button, {
                size: "xl",
                className: "w-full",
                onClick: x,
                disabled: _,
                loading: _,
                children: R ? "Start free mock" : "Start free session",
              })
            : "paid" === o && L
              ? (0, r.jsx)(u.Button, {
                  size: "xl",
                  className: "w-full",
                  onClick: E,
                  disabled: _,
                  loading: _,
                  children: `Start ${R ? "mock" : "session"} · ${s.SESSION_CREDIT_COST} credit`,
                })
              : "paid" === o
                ? (0, r.jsx)("a", {
                    ...W,
                    className: (0, l.cn)(
                      (0, u.buttonVariants)({ size: "xl" }),
                      "w-full",
                    ),
                    children: "Buy Credits",
                  })
                : (0, r.jsx)(u.Button, {
                    size: "xl",
                    className: "w-full",
                    disabled: !0,
                    children: R ? se : ie,
                  })),
        (t[36] = W),
        (t[37] = o),
        (t[38] = ie),
        (t[39] = se),
        (t[40] = L),
        (t[41] = _),
        (t[42] = I),
        (t[43] = R),
        (t[44] = x),
        (t[45] = E),
        (t[46] = C))
      : (C = t[46]);
    const A = C,
      O = R ? "Start your mock session" : "Start your session";
    let M;
    t[47] !== J || t[48] !== O
      ? ((M = J(O)), (t[47] = J), (t[48] = O), (t[49] = M))
      : (M = t[49]);
    const H = F ? 2 : 1,
      V = R ? "Free mock" : "Free";
    let q;
    t[50] !== R
      ? ((q = R
          ? (0, s.mockDurationMinutes)(!0)
          : s.MAX_TRIAL_DURATION_MINUTES),
        (t[50] = R),
        (t[51] = q))
      : (q = t[51]);
    const G = `${q} min`,
      $ = !e;
    let Y, K, Z, Q, X, ee, te, re, oe, le;
    return (
      t[52] !== a || t[53] !== V || t[54] !== G || t[55] !== $
        ? ((Y = (0, r.jsx)(p.ChoiceTile, {
            value: "free",
            icon: i.Gift,
            name: V,
            figure: G,
            detail: a,
            disabled: $,
          })),
          (t[52] = a),
          (t[53] = V),
          (t[54] = G),
          (t[55] = $),
          (t[56] = Y))
        : (Y = t[56]),
      t[57] !== _ || t[58] !== I || t[59] !== R || t[60] !== F
        ? ((K =
            F &&
            (0, r.jsx)(p.ChoiceTile, {
              value: "paid",
              icon: i.Coins,
              name: R ? "Paid mock" : "Paid",
              figure: `${R ? (0, s.mockDurationMinutes)(!1) : s.MAX_CALL_DURATION_MINUTES} min`,
              detail: `${s.SESSION_CREDIT_COST} credit`,
              disabled: I || _,
            })),
          (t[57] = _),
          (t[58] = I),
          (t[59] = R),
          (t[60] = F),
          (t[61] = K))
        : (K = t[61]),
      t[62] !== o || t[63] !== H || t[64] !== Y || t[65] !== K
        ? ((Z = (0, r.jsxs)(p.ChoiceTiles, {
            ariaLabel: "Session type",
            value: o,
            onValueChange: D,
            columns: H,
            children: [Y, K],
          })),
          (t[62] = o),
          (t[63] = H),
          (t[64] = Y),
          (t[65] = K),
          (t[66] = Z))
        : (Z = t[66]),
      t[67] !== B || t[68] !== I || t[69] !== R || t[70] !== U
        ? ((Q =
            !R &&
            !I &&
            U &&
            (0, r.jsx)(d.Typography, {
              variant: "body",
              className: "text-muted-foreground text-center",
              children: B,
            })),
          (t[67] = B),
          (t[68] = I),
          (t[69] = R),
          (t[70] = U),
          (t[71] = Q))
        : (Q = t[71]),
      t[72] !== k
        ? ((X =
            k &&
            (0, r.jsx)(d.Typography, {
              variant: "body",
              className: "text-muted-foreground text-center",
              children: k,
            })),
          (t[72] = k),
          (t[73] = X))
        : (X = t[73]),
      t[74] !== Z || t[75] !== Q || t[76] !== X
        ? ((ee = (0, r.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [Z, Q, X],
          })),
          (t[74] = Z),
          (t[75] = Q),
          (t[76] = X),
          (t[77] = ee))
        : (ee = t[77]),
      t[78] !== F
        ? ((te =
            !F &&
            (0, r.jsx)(d.Typography, {
              variant: "body",
              className: "text-muted-foreground text-center",
              children: f.NO_PURCHASE_PATH_NOTICE,
            })),
          (t[78] = F),
          (t[79] = te))
        : (te = t[79]),
      t[80] !== _ || t[81] !== T
        ? ((re =
            T &&
            (0, r.jsx)(u.Button, {
              variant: "outline",
              size: "xl",
              className: "w-full",
              onClick: T,
              disabled: _,
              children: "Exit",
            })),
          (t[80] = _),
          (t[81] = T),
          (t[82] = re))
        : (re = t[82]),
      t[83] !== A || t[84] !== re
        ? ((oe = (0, r.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [A, re],
          })),
          (t[83] = A),
          (t[84] = re),
          (t[85] = oe))
        : (oe = t[85]),
      t[86] !== ne ||
      t[87] !== M ||
      t[88] !== ee ||
      t[89] !== te ||
      t[90] !== oe
        ? ((le = (0, r.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [ne, M, ee, te, oe],
          })),
          (t[86] = ne),
          (t[87] = M),
          (t[88] = ee),
          (t[89] = te),
          (t[90] = oe),
          (t[91] = le))
        : (le = t[91]),
      le
    );
  }
  let ue;
  t[92] !== A || t[93] !== F
    ? ((ue = (e) =>
        "cards" === A
          ? (0, r.jsx)(p.ChoiceSplit, {
              className: (0, l.cn)(
                "group-data-[swipe-axis=y]/drawer-popup:-mx-4 group-data-[swipe-axis=y]/drawer-popup:-mb-8",
                !F && "mb-0 group-data-[swipe-axis=y]/drawer-popup:mb-0",
              ),
              children: e,
            })
          : (0, r.jsx)("div", {
              className: "flex flex-col gap-3",
              children: e,
            })),
      (t[92] = A),
      (t[93] = F),
      (t[94] = ue))
    : (ue = t[94]);
  const de = ue,
    pe = "cards" === A ? "gap-6" : "gap-4";
  let fe;
  t[95] !== pe
    ? ((fe = (0, l.cn)("flex flex-col", pe)), (t[95] = pe), (t[96] = fe))
    : (fe = t[96]);
  const he = R ? "Start your mock session" : "Start your session";
  let me, ge, ye, ve, be;
  return (
    t[97] !== J || t[98] !== he
      ? ((me = J(he)), (t[97] = J), (t[98] = he), (t[99] = me))
      : (me = t[99]),
    t[100] !== Z ||
    t[101] !== z ||
    t[102] !== ie ||
    t[103] !== ae ||
    t[104] !== se ||
    t[105] !== g ||
    t[106] !== B ||
    t[107] !== Y ||
    t[108] !== _ ||
    t[109] !== I ||
    t[110] !== R ||
    t[111] !== U ||
    t[112] !== j ||
    t[113] !== S ||
    t[114] !== b ||
    t[115] !== ce ||
    t[116] !== M ||
    t[117] !== F ||
    t[118] !== $
      ? ((ge = R
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(p.ChoiceCard, {
                  surface: $,
                  icon: (0, r.jsx)(i.Gift, { className: Y }),
                  title: "Free mock",
                  fact: `${(0, s.mockDurationMinutes)(!0)} min · Free`,
                  corner: Z(R.freeMockAvailable ? 1 : 0),
                  description:
                    "One free mock per account, and it can't be extended.",
                  action: (0, r.jsx)(u.Button, {
                    variant: "outline",
                    size: "xl",
                    className: "w-full",
                    onClick: () => {
                      P("mockFree"), R.onSelectMock({ free: !0 });
                    },
                    disabled: ae,
                    loading: _ && "mockFree" === M,
                    children: se,
                  }),
                }),
                F &&
                  (0, r.jsx)(p.ChoiceCard, {
                    surface: $,
                    icon: (0, r.jsx)(i.Coins, { className: Y }),
                    title: "Paid mock",
                    fact: `${(0, s.mockDurationMinutes)(!1)} min · ${s.SESSION_CREDIT_COST} credit`,
                    description: `Mock ${j}s run on a fixed clock and can't be extended. ${m}`,
                    action: ce(() => {
                      P("mockPaid"), R.onSelectMock({ free: !1 });
                    }, "mockPaid"),
                  }),
              ],
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(p.ChoiceCard, {
                  surface: $,
                  icon: (0, r.jsx)(i.Gift, { className: Y }),
                  title: "Free session",
                  fact: `${s.MAX_TRIAL_DURATION_MINUTES} min · Free`,
                  corner: Z(g),
                  description:
                    !I && U
                      ? B
                      : `${s.FREE_SESSION_COOLDOWN_MINUTES}-minute wait between free sessions.`,
                  action: (0, r.jsx)(u.Button, {
                    variant: "outline",
                    size: "xl",
                    className: "w-full",
                    onClick: () => {
                      P("free"), S();
                    },
                    disabled: z,
                    loading: _ && "free" === M,
                    children: ie,
                  }),
                }),
                F &&
                  (0, r.jsx)(p.ChoiceCard, {
                    surface: $,
                    icon: (0, r.jsx)(i.Coins, { className: Y }),
                    title: "Paid session",
                    fact: `${s.MAX_CALL_DURATION_MINUTES} min · ${s.SESSION_CREDIT_COST} credit`,
                    description: `Auto-extends by ${s.MAX_CALL_DURATION_MINUTES} minutes when the timer reaches 0. ${h}`,
                    action: ce(() => {
                      P("paid"), b();
                    }, "paid"),
                  }),
              ],
            })),
        (t[100] = Z),
        (t[101] = z),
        (t[102] = ie),
        (t[103] = ae),
        (t[104] = se),
        (t[105] = g),
        (t[106] = B),
        (t[107] = Y),
        (t[108] = _),
        (t[109] = I),
        (t[110] = R),
        (t[111] = U),
        (t[112] = j),
        (t[113] = S),
        (t[114] = b),
        (t[115] = ce),
        (t[116] = M),
        (t[117] = F),
        (t[118] = $),
        (t[119] = ge))
      : (ge = t[119]),
    t[120] !== ge || t[121] !== de
      ? ((ye = de(ge)), (t[120] = ge), (t[121] = de), (t[122] = ye))
      : (ye = t[122]),
    t[123] !== F
      ? ((ve =
          !F &&
          (0, r.jsx)(d.Typography, {
            variant: "body",
            className: "text-muted-foreground text-center",
            children: f.NO_PURCHASE_PATH_NOTICE,
          })),
        (t[123] = F),
        (t[124] = ve))
      : (ve = t[124]),
    t[125] !== ne ||
    t[126] !== ee ||
    t[127] !== oe ||
    t[128] !== fe ||
    t[129] !== me ||
    t[130] !== ye ||
    t[131] !== ve
      ? ((be = (0, r.jsxs)("div", {
          className: fe,
          children: [ne, ee, me, ye, ve, oe],
        })),
        (t[125] = ne),
        (t[126] = ee),
        (t[127] = oe),
        (t[128] = fe),
        (t[129] = me),
        (t[130] = ye),
        (t[131] = ve),
        (t[132] = be))
      : (be = t[132]),
    be
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(46852 /* vendor/module-46852 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(92735 /* app/components/badge-variants */),
  u = n(66244 /* app/components/button-variants */),
  d = n(34483 /* app/components/typography-variants */),
  p = n(50993 /* app/components/choice-card */),
  f = n(77126 /* vendor/module-77126 */),
  h = `End within ${s.SHORT_END_RETURN_MINUTES} minutes of starting or extending and that credit comes back.`,
  m = `End within ${s.SHORT_END_RETURN_MINUTES} minutes of starting and the credit comes back.`;
