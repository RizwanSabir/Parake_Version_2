// app/components/on-click-27089.js — webpack module 27089
// params: (e, t, n) = (module, exports, require)
"use strict";
t.SessionDebugPanel = function (e) {
  const t = (0, o.c)(58),
    { callSession: n, trigger: c, side: f, sideOffset: m } = e,
    b = void 0 === f ? "top" : f,
    [A, R] = (0, i.useState)(!1),
    [M, P] = (0, i.useState)(65),
    N = (0, a.useNow)(A ? 1e3 : null).getTime(),
    D = u.api.useUtils();
  let j;
  t[0] !== D
    ? ((j = {
        onSuccess: (e) => {
          D.callSession.get.setData({ callSessionId: e.id }, (t) =>
            t ? { ...t, ...e } : void 0,
          );
        },
      }),
      (t[0] = D),
      (t[1] = j))
    : (j = t[1]);
  const {
    mutate: L,
    isPending: F,
    variables: U,
  } = u.api.admin.callSessionDebug.setSessionEnd.useMutation(j);
  let B;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((B = { onSuccess: I }), (t[2] = B))
    : (B = t[2]);
  const { mutate: z, isPending: H } =
    u.api.admin.callSessionDebug.restartSession.useMutation(B);
  let V;
  t[3] !== n.id || t[4] !== L
    ? ((V = function (e) {
        L({ callSessionId: n.id, target: e });
      }),
      (t[3] = n.id),
      (t[4] = L),
      (t[5] = V))
    : (V = t[5]);
  const q = V,
    G = F || H,
    W = F ? U?.target : void 0;
  let $;
  t[6] !== W
    ? (($ = (e) => "ended" === W?.kind && W.msAgo === e),
      (t[6] = W),
      (t[7] = $))
    : ($ = t[7]);
  const Y = $,
    K = (0, l.sessionClockEndsAt)(n)?.getTime() ?? null,
    Z = null === K ? null : K - N,
    Q = n.limitedSessionExpiresAt?.getTime() ?? null;
  let J;
  t[8] !== n
    ? ((J = (0, l.hasAutoExtendSwitch)(n)
        ? `${k(n)} session · Auto Extend ${n.autoExtend ? "on" : "off"}`
        : `${k(n)} session`),
      (t[8] = n),
      (t[9] = J))
    : (J = t[9]);
  const X = J,
    ee =
      null === Z
        ? void 0
        : Z <= 0
          ? "text-error"
          : Z < s.AUTO_EXTEND_PROMPT_THRESHOLD_MS
            ? "text-warning"
            : void 0;
  let te, ne, re, oe;
  t[10] !== c
    ? ((te = (0, r.jsx)(h.PopoverTrigger, { render: c })),
      (t[10] = c),
      (t[11] = te))
    : (te = t[11]),
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((ne = (0, r.jsxs)(y.TabsList, {
          variant: "line",
          children: [
            (0, r.jsx)(y.TabsTrigger, {
              variant: "line",
              value: "session",
              children: "Session",
            }),
            (0, r.jsx)(y.TabsTrigger, {
              variant: "line",
              value: "account",
              children: "Account",
            }),
          ],
        })),
        (t[12] = ne))
      : (ne = t[12]),
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((re = (0, r.jsx)("p", {})), (t[13] = re))
      : (re = t[13]),
    t[14] !== X
      ? ((oe = (0, r.jsx)(v.Typography, {
          variant: "label",
          render: re,
          className: "text-muted-foreground px-4 pt-3.5 pb-3",
          children: X,
        })),
        (t[14] = X),
        (t[15] = oe))
      : (oe = t[15]);
  const ie = C,
    ae = null === Q ? "None" : T(Q, N);
  let se;
  t[16] !== ie || t[17] !== ae
    ? ((se = (0, r.jsx)(ie, { label: "Real expiry", value: ae })),
      (t[16] = ie),
      (t[17] = ae),
      (t[18] = se))
    : (se = t[18]);
  const le = `${n.extended}×`;
  let ce;
  t[19] !== le
    ? ((ce = (0, r.jsx)(C, { label: "Extended", value: le })),
      (t[19] = le),
      (t[20] = ce))
    : (ce = t[20]);
  const ue = String(n.creditsUsed);
  let de, pe, fe;
  t[21] !== ue
    ? ((de = (0, r.jsx)(C, { label: "Credits used", value: ue })),
      (t[21] = ue),
      (t[22] = de))
    : (de = t[22]),
    t[23] !== n.isLimitedSession || t[24] !== M
      ? ((pe =
          n.isLimitedSession &&
          (0, r.jsxs)("div", {
            className: "px-4 pt-3",
            children: [
              (0, r.jsx)(v.Typography, {
                variant: "label",
                className: "text-muted-foreground",
                children: "Set clock to",
              }),
              (0, r.jsx)(g.Slider, {
                className: "mt-5",
                min: 0,
                max: S,
                step: 5,
                value: S - M,
                onValueChange: (e) => P(S - e),
                thumbLabel: E(M),
                "aria-label": "Clock time to set",
                children: (0, r.jsx)("div", {
                  className: "bg-warning/70 absolute inset-y-0 right-0",
                  style: { width: (_ / S) * 100 + "%" },
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "text-muted-foreground -mt-1 flex justify-between text-[11px] tabular-nums",
                children: [
                  (0, r.jsx)("span", { children: E(S) }),
                  (0, r.jsxs)("span", {
                    children: [E(_), " prompt"],
                  }),
                  (0, r.jsx)("span", { children: "0:00" }),
                ],
              }),
            ],
          })),
        (t[23] = n.isLimitedSession),
        (t[24] = M),
        (t[25] = pe))
      : (pe = t[25]),
    t[26] !== q ||
    t[27] !== G ||
    t[28] !== n.isLimitedSession ||
    t[29] !== M ||
    t[30] !== W?.kind
      ? ((fe =
          n.isLimitedSession &&
          (0, r.jsxs)(p.Button, {
            size: "xl",
            className: "col-span-2",
            disabled: G,
            loading: "clock" === W?.kind,
            onClick: () => q({ kind: "clock", msLeft: 1e3 * M }),
            children: ["Apply ", E(M)],
          })),
        (t[26] = q),
        (t[27] = G),
        (t[28] = n.isLimitedSession),
        (t[29] = M),
        (t[30] = W?.kind),
        (t[31] = fe))
      : (fe = t[31]);
  const he = Y(x.msAgo);
  let me, ge;
  t[32] !== q ? ((me = () => q(x)), (t[32] = q), (t[33] = me)) : (me = t[33]),
    t[34] !== G || t[35] !== he || t[36] !== me
      ? ((ge = (0, r.jsx)(p.Button, {
          size: "xl",
          variant: "outline",
          className: "px-3",
          disabled: G,
          loading: he,
          onClick: me,
          children: "End now",
        })),
        (t[34] = G),
        (t[35] = he),
        (t[36] = me),
        (t[37] = ge))
      : (ge = t[37]);
  const ye = Y(w.msAgo);
  let ve, be, Se, _e, xe, we;
  return (
    t[38] !== q ? ((ve = () => q(w)), (t[38] = q), (t[39] = ve)) : (ve = t[39]),
    t[40] !== G || t[41] !== ye || t[42] !== ve
      ? ((be = (0, r.jsx)(p.Button, {
          size: "xl",
          variant: "outline",
          className: "px-3",
          disabled: G,
          loading: ye,
          onClick: ve,
          title: "Ended, with 30 seconds left to continue",
          children: "Window 0:30",
        })),
        (t[40] = G),
        (t[41] = ye),
        (t[42] = ve),
        (t[43] = be))
      : (be = t[43]),
    t[44] !== n.id || t[45] !== z
      ? ((Se = () => z({ callSessionId: n.id })),
        (t[44] = n.id),
        (t[45] = z),
        (t[46] = Se))
      : (Se = t[46]),
    t[47] !== G || t[48] !== H || t[49] !== Se
      ? ((_e = (0, r.jsx)(p.Button, {
          size: "xl",
          variant: "outline",
          className: "col-span-2",
          disabled: G,
          loading: H,
          onClick: Se,
          title:
            "Back to before Connect: transcript and answers wiped, nothing refunded",
          children: "Restart session",
        })),
        (t[47] = G),
        (t[48] = H),
        (t[49] = Se),
        (t[50] = _e))
      : (_e = t[50]),
    t[51] !== fe || t[52] !== ge || t[53] !== be || t[54] !== _e
      ? ((xe = (0, r.jsxs)("div", {
          className: "grid grid-cols-2 gap-1.5 p-4 pt-3",
          children: [fe, ge, be, _e],
        })),
        (t[51] = fe),
        (t[52] = ge),
        (t[53] = be),
        (t[54] = _e),
        (t[55] = xe))
      : (xe = t[55]),
    t[56] !== n
      ? ((we = (0, r.jsx)(y.TabsContent, {
          value: "account",
          animated: !0,
          children: (0, r.jsx)(O, { callSession: n }),
        })),
        (t[56] = n),
        (t[57] = we))
      : (we = t[57]),
    (0, r.jsxs)(h.Popover, {
      open: A,
      onOpenChange: R,
      children: [
        te,
        (0, r.jsx)(h.PopoverContent, {
          side: b,
          sideOffset: m,
          align: "start",
          className: "w-80 overflow-hidden rounded-xl p-0",
          children: (0, r.jsxs)(y.Tabs, {
            defaultValue: "session",
            className: "gap-0",
            children: [
              ne,
              (0, r.jsxs)(d.AnimatedHeight, {
                children: [
                  (0, r.jsxs)(y.TabsContent, {
                    value: "session",
                    animated: !0,
                    children: [
                      oe,
                      (0, r.jsxs)("div", {
                        className: "bg-border grid grid-cols-2 gap-px border-y",
                        children: [
                          (0, r.jsx)(C, {
                            label: "Clock",
                            value: null === K ? "No limit" : T(K, N),
                            className: ee,
                          }),
                          se,
                          ce,
                          de,
                        ],
                      }),
                      pe,
                      xe,
                    ],
                  }),
                  we,
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(58176 /* vendor/module-58176 */),
  s = n(46852 /* vendor/module-46852 */),
  l = n(3275 /* vendor/module-3275 */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(44189 /* vendor/module-44189 */),
  d = n(36795 /* vendor/module-36795 */),
  p = n(66244 /* app/components/button-variants */),
  f = n(33411 /* app/components/number-stepper */),
  h = n(35973 /* app/components/popover */),
  m = n(69738 /* app/components/segmented-control */),
  g = n(58579 /* app/components/slider */),
  y = n(93432 /* app/components/tabs */),
  v = n(34483 /* app/components/typography-variants */),
  b = 6e4 * s.SESSION_RECENTLY_ENDED_WINDOW_MINUTES,
  S = 120,
  _ = s.AUTO_EXTEND_PROMPT_THRESHOLD_MS / 1e3,
  x = { kind: "ended", msAgo: 0 },
  w = { kind: "ended", msAgo: b - 3e4 };
function E(e) {
  const t = Math.floor(e / 3600),
    n = Math.floor((e % 3600) / 60),
    r = String(e % 60).padStart(2, "0");
  return t > 0 ? `${t}:${String(n).padStart(2, "0")}:${r}` : `${n}:${r}`;
}
function T(e, t) {
  const n = Math.floor(Math.abs(e - t) / 1e3);
  return e < t ? `-${E(n)}` : E(n);
}
function k(e) {
  return e.isMock
    ? "Mock"
    : e.isPlanSession
      ? "Plan"
      : e.isFreeSession
        ? "Free"
        : "Credit";
}
function C(e) {
  const t = (0, o.c)(10),
    { label: n, value: i, className: a } = e;
  let s, l, u, d;
  return (
    t[0] !== n
      ? ((s = (0, r.jsx)(v.Typography, {
          variant: "label",
          className: "text-muted-foreground",
          children: n,
        })),
        (t[0] = n),
        (t[1] = s))
      : (s = t[1]),
    t[2] !== a
      ? ((l = (0, c.cn)("leading-none font-semibold tabular-nums", a)),
        (t[2] = a),
        (t[3] = l))
      : (l = t[3]),
    t[4] !== l || t[5] !== i
      ? ((u = (0, r.jsx)(v.Typography, {
          variant: "title",
          className: l,
          children: i,
        })),
        (t[4] = l),
        (t[5] = i),
        (t[6] = u))
      : (u = t[6]),
    t[7] !== s || t[8] !== u
      ? ((d = (0, r.jsxs)("div", {
          className: "bg-popover flex flex-col gap-1.5 px-4 py-2.5",
          children: [s, u],
        })),
        (t[7] = s),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function I() {
  return window.location.reload();
}
const A = [0, s.SESSION_CREDIT_COST, 5];
function O(e) {
  const t = (0, o.c)(33),
    { callSession: n } = e,
    a = u.api.useUtils(),
    { data: l } = u.api.user.get.useQuery(),
    [c, d] = (0, i.useState)(null),
    [h, g] = (0, i.useState)(null);
  let y;
  t[0] !== a
    ? ((y = {
        onSuccess: async (e) => {
          a.callSession.get.setData({ callSessionId: e.id }, (t) =>
            t ? { ...t, ...e } : void 0,
          ),
            await a.user.get.invalidate(),
            d(null),
            g(null);
        },
      }),
      (t[0] = a),
      (t[1] = y))
    : (y = t[1]);
  const { mutate: b, isPending: S } =
    u.api.admin.callSessionDebug.setAccount.useMutation(y);
  if (!l) {
    let e;
    return (
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsx)(v.Typography, {
            variant: "body",
            className: "text-muted-foreground",
            render: (0, r.jsx)("span", { className: "block p-4" }),
            children: "Loading your account…",
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  const _ = null !== l.lifetimePurchasedAt,
    x = c ?? l.callCredits,
    w = h ?? _,
    E = x !== l.callCredits,
    T = w !== _,
    k =
      E && T
        ? "Save account"
        : E
          ? `Set balance to ${x}`
          : T
            ? w
              ? "Turn the plan on"
              : "Turn the plan off"
            : "No changes";
  let C;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((C = (0, r.jsx)(v.Typography, {
        variant: "label",
        className: "text-muted-foreground",
        children: "Plan",
      })),
      (t[3] = C))
    : (C = t[3]);
  const I = w ? "lifetime" : "credits";
  let O, R, M, P, N, D, j, L, F;
  t[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((O = (e) => g("lifetime" === e)), (t[4] = O))
    : (O = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((R = (0, r.jsx)(m.SegmentedControlItem, {
          value: "credits",
          children: "Credits",
        })),
        (M = (0, r.jsx)(m.SegmentedControlItem, {
          value: "lifetime",
          children: "Lifetime plan",
        })),
        (t[5] = R),
        (t[6] = M))
      : ((R = t[5]), (M = t[6])),
    t[7] !== I
      ? ((P = (0, r.jsxs)("div", {
          className: "flex flex-col gap-2 border-b px-4 py-3",
          children: [
            C,
            (0, r.jsxs)(m.SegmentedControl, {
              value: I,
              onValueChange: O,
              "aria-label": "Plan",
              children: [R, M],
            }),
          ],
        })),
        (t[7] = I),
        (t[8] = P))
      : (P = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((N = (0, r.jsx)(v.Typography, {
          variant: "label",
          className: "text-muted-foreground",
          children: "Credit balance",
        })),
        (t[9] = N))
      : (N = t[9]),
    t[10] !== l.callCredits
      ? ((D = (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            N,
            (0, r.jsxs)(v.Typography, {
              variant: "label",
              className: "text-muted-foreground tabular-nums",
              children: ["now ", l.callCredits],
            }),
          ],
        })),
        (t[10] = l.callCredits),
        (t[11] = D))
      : (D = t[11]),
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((j = (e) => d(e ?? 0)), (t[12] = j))
      : (j = t[12]),
    t[13] !== x
      ? ((L = (0, r.jsx)(f.NumberStepper, {
          fill: !0,
          value: x,
          onValueChange: j,
          min: 0,
          max: 100,
          step: s.SESSION_CREDIT_COST,
          "aria-label": "Credit balance",
        })),
        (t[13] = x),
        (t[14] = L))
      : (L = t[14]),
    t[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((F = (0, r.jsx)("div", {
          className: "grid grid-cols-3 gap-1.5",
          children: A.map((e) =>
            (0, r.jsx)(
              p.Button,
              {
                variant: "outline",
                size: "xl",
                className: "tabular-nums",
                onClick: () => d(e),
                children: e,
              },
              e,
            ),
          ),
        })),
        (t[15] = F))
      : (F = t[15]);
  const U = (!E && !T) || S;
  let B, z, H, V;
  return (
    t[16] !== n.id || t[17] !== x || t[18] !== w || t[19] !== b
      ? ((B = () =>
          b({
            callSessionId: n.id,
            callCredits: x,
            lifetimePlan: w,
          })),
        (t[16] = n.id),
        (t[17] = x),
        (t[18] = w),
        (t[19] = b),
        (t[20] = B))
      : (B = t[20]),
    t[21] !== S || t[22] !== k || t[23] !== U || t[24] !== B
      ? ((z = (0, r.jsx)(p.Button, {
          size: "xl",
          className: "mt-1",
          disabled: U,
          loading: S,
          onClick: B,
          children: k,
        })),
        (t[21] = S),
        (t[22] = k),
        (t[23] = U),
        (t[24] = B),
        (t[25] = z))
      : (z = t[25]),
    t[26] !== L || t[27] !== z || t[28] !== D
      ? ((H = (0, r.jsxs)("div", {
          className: "flex flex-col gap-2 px-4 py-3",
          children: [D, L, F, z],
        })),
        (t[26] = L),
        (t[27] = z),
        (t[28] = D),
        (t[29] = H))
      : (H = t[29]),
    t[30] !== H || t[31] !== P
      ? ((V = (0, r.jsxs)("div", {
          className: "flex flex-col",
          children: [P, H],
        })),
        (t[30] = H),
        (t[31] = P),
        (t[32] = V))
      : (V = t[32]),
    V
  );
}
