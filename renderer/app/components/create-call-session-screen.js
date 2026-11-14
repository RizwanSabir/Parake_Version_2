// app/components/create-call-session-screen.js — webpack module 93639
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CreateCallSessionScreen = function (e) {
  const t = (0, o.c)(59),
    {
      onCreated: n,
      autoStarted: a,
      clearAutoStarted: b,
      onCancel: S,
      startAsMock: _,
    } = e,
    x = void 0 !== _ && _,
    w = m.api.useUtils();
  let E, T;
  t[0] !== w
    ? ((E = () => {
        const e = setInterval(() => {
          w.subscription.getState.refetch();
        }, 6e4);
        return () => clearInterval(e);
      }),
      (T = [w]),
      (t[0] = w),
      (t[1] = E),
      (t[2] = T))
    : ((E = t[1]), (T = t[2])),
    (0, i.useEffect)(E, T);
  const { data: k } = (0, g.useVersion)(),
    C = (0, f.useCurrentMeetingApp)();
  let I;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((I = { limit: 1 }), (t[3] = I))
    : (I = t[3]);
  const { data: A, isLoading: O } = m.api.callSession.getMany.useQuery(I);
  let R;
  t[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((R = { limit: "all" }), (t[4] = R))
    : (R = t[4]);
  const { data: M, isLoading: P } = m.api.resume.getMany.useQuery(R),
    N = A?.data?.[0] ?? null;
  let D;
  t[5] !== n || t[6] !== w
    ? ((D = {
        onSuccess: async (e) => {
          w.callSession.getMany.refetch(),
            w.callSession.getList.refetch(),
            w.user.get.refetch(),
            w.callSession.get.setData({ callSessionId: e.id }, e),
            await n(e.id);
        },
      }),
      (t[5] = n),
      (t[6] = w),
      (t[7] = D))
    : (D = t[7]);
  const j = m.api.callSession.create.useMutation(D),
    L = j.isPending;
  let F;
  t[8] !== P || t[9] !== N || t[10] !== M?.data || t[11] !== x
    ? ((F = (0, d.createSessionInitialValues)({
        lastSession: N,
        resumes: M?.data ?? (P ? void 0 : []),
        sessionMode: x ? "interview" : (N?.mode ?? "interview"),
      })),
      (t[8] = P),
      (t[9] = N),
      (t[10] = M?.data),
      (t[11] = x),
      (t[12] = F))
    : (F = t[12]);
  const U = F,
    [B, z] = (0, i.useState)(x);
  let H;
  t[13] !== B
    ? ((H = B ? { presetLocked: !1 } : void 0), (t[13] = B), (t[14] = H))
    : (H = t[14]);
  const V = H;
  let q, G;
  t[15] !== a || t[16] !== j || t[17] !== B || t[18] !== C || t[19] !== k
    ? ((q = async (e) => {
        await j.mutateAsync({
          ...(0, u.createInputFromFormValues)(e, { isMock: B }),
          createdFrom: "desktop-app",
          autoStarted: !!a,
          activationParameters: {
            platform: "desktop-app",
            os: g.os,
            osVersion: g.osVersion,
            version: k,
            meetingApp: C,
          },
        });
      }),
      (t[15] = a),
      (t[16] = j),
      (t[17] = B),
      (t[18] = C),
      (t[19] = k),
      (t[20] = q))
    : (q = t[20]),
    t[21] !== U || t[22] !== V || t[23] !== q
      ? ((G = {
          defaultValues: U,
          onSubmit: q,
          onNotice: v,
          mock: V,
        }),
        (t[21] = U),
        (t[22] = V),
        (t[23] = q),
        (t[24] = G))
      : (G = t[24]);
  const { form: W, wizardRef: $ } = (0, s.useCallSessionWizardForm)(G),
    Y = (0, l.useCreateSessionTitle)(W, B),
    K = O || P,
    [Z, Q] = (0, i.useState)(!1),
    [J, X] = (0, i.useState)(!1);
  let ee, te, ne, re, oe, ie, ae, se, le, ce;
  return (
    t[25] !== a ||
    t[26] !== A?.data?.[0] ||
    t[27] !== W ||
    t[28] !== U ||
    t[29] !== K
      ? ((ee = () => {
          if (!K && (W.reset(U), X(!0), a)) {
            const e = A?.data?.[0];
            "regular_call" === e?.mode && "automatic" === a && Q(!0);
          }
        }),
        (t[25] = a),
        (t[26] = A?.data?.[0]),
        (t[27] = W),
        (t[28] = U),
        (t[29] = K),
        (t[30] = ee))
      : (ee = t[30]),
    t[31] !== a || t[32] !== A || t[33] !== K
      ? ((te = [K, a, A]), (t[31] = a), (t[32] = A), (t[33] = K), (t[34] = te))
      : (te = t[34]),
    (0, i.useEffect)(ee, te),
    t[35] !== Z || t[36] !== W
      ? ((ne = () => {
          Z && W.handleSubmit();
        }),
        (re = [Z, W]),
        (t[35] = Z),
        (t[36] = W),
        (t[37] = ne),
        (t[38] = re))
      : ((ne = t[37]), (re = t[38])),
    (0, i.useEffect)(ne, re),
    t[39] !== b
      ? ((oe = () => () => {
          Q(!1), b();
        }),
        (t[39] = b),
        (t[40] = oe))
      : (oe = t[40]),
    t[41] === Symbol.for("react.memo_cache_sentinel")
      ? ((ie = []), (t[41] = ie))
      : (ie = t[41]),
    (0, i.useEffect)(oe, ie),
    t[42] === Symbol.for("react.memo_cache_sentinel")
      ? ((ae = (0, p.cn)(
          "bg-card flex w-full flex-col overflow-hidden rounded-2xl border",
          h.SHELL_TAB_HEIGHT_CLASS,
        )),
        (t[42] = ae))
      : (ae = t[42]),
    t[43] !== W || t[44] !== L
      ? ((se = (e) => {
          e.preventDefault(), L || W.handleSubmit();
        }),
        (t[43] = W),
        (t[44] = L),
        (t[45] = se))
      : (se = t[45]),
    t[46] !== Z ||
    t[47] !== W ||
    t[48] !== J ||
    t[49] !== K ||
    t[50] !== L ||
    t[51] !== V ||
    t[52] !== S ||
    t[53] !== Y ||
    t[54] !== $
      ? ((le =
          Z || K || !J
            ? (0, r.jsx)("div", {
                className:
                  "flex w-full flex-col items-center justify-center p-7",
                children: (0, r.jsx)(c.Spinner, {
                  className: "text-muted-foreground h-6 w-6",
                  label: "Loading session form",
                }),
              })
            : (0, r.jsx)(y.DesktopSessionWizard, {
                ref: $,
                form: W,
                mock: V,
                onMockChange: z,
                disabled: K,
                isSubmitting: L,
                submitLabel: L ? "Starting..." : Y,
                onCancel: S,
              })),
        (t[46] = Z),
        (t[47] = W),
        (t[48] = J),
        (t[49] = K),
        (t[50] = L),
        (t[51] = V),
        (t[52] = S),
        (t[53] = Y),
        (t[54] = $),
        (t[55] = le))
      : (le = t[55]),
    t[56] !== se || t[57] !== le
      ? ((ce = (0, r.jsx)("div", {
          children: (0, r.jsx)("form", {
            className: ae,
            onSubmit: se,
            children: le,
          }),
        })),
        (t[56] = se),
        (t[57] = le),
        (t[58] = ce))
      : (ce = t[58]),
    ce
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(58434 /* vendor/module-58434 */),
  l = n(17833 /* vendor/module-17833 */),
  c = n(15201 /* app/components/spinner */),
  u = n(87929 /* vendor/module-87929 */),
  d = n(64642 /* vendor/module-64642 */),
  p = n(29113 /* vendor/module-29113 */),
  f = n(36828 /* app/hooks/use-current-meeting-app */),
  h = n(44825 /* vendor/module-44825 */),
  m = n(46998 /* app/components/trpcreact-provider */),
  g = n(50272 /* app/lib/os-version-raw */),
  y = n(78254 /* app/components/desktop-session-wizard */);
function v(e) {
  const { type: t, message: n } = e;
  return a.toast[t](n);
}
