// app/components/edit-call-session-screen.js — webpack module 90910
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EditCallSessionScreen = function (e) {
  const t = (0, o.c)(23),
    { callSessionId: n, onDone: s } = e;
  let f;
  t[0] !== n
    ? ((f = { callSessionId: n }), (t[0] = n), (t[1] = f))
    : (f = t[1]);
  const {
    data: g,
    isLoading: y,
    isError: v,
  } = p.api.callSession.get.useQuery(f);
  let b;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((b = { limit: "all" }), (t[2] = b))
    : (b = t[2]);
  const {
      data: S,
      isLoading: _,
      isSuccess: x,
    } = p.api.resume.getMany.useQuery(b),
    w = y || _;
  let E;
  t[3] !== g
    ? ((E = !!g && !(0, c.canEditCallSessionFully)(g)), (t[3] = g), (t[4] = E))
    : (E = t[4]);
  const T = E;
  let k, C;
  t[5] !== T || t[6] !== s
    ? ((k = () => {
        T && (a.toast.error("This session can no longer be edited."), s());
      }),
      (t[5] = T),
      (t[6] = s),
      (t[7] = k))
    : (k = t[7]),
    t[8] !== T ? ((C = [T]), (t[8] = T), (t[9] = C)) : (C = t[9]),
    (0, i.useEffect)(k, C);
  const I = v && !g;
  let A, O, R, M;
  return (
    t[10] !== I || t[11] !== s
      ? ((A = () => {
          I && (a.toast.error("This session could not be loaded."), s());
        }),
        (t[10] = I),
        (t[11] = s),
        (t[12] = A))
      : (A = t[12]),
    t[13] !== I ? ((O = [I]), (t[13] = I), (t[14] = O)) : (O = t[14]),
    (0, i.useEffect)(A, O),
    t[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((R = (0, u.cn)(
          "bg-card flex w-full flex-col overflow-hidden rounded-2xl border",
          d.SHELL_TAB_HEIGHT_CLASS,
        )),
        (t[15] = R))
      : (R = t[15]),
    t[16] !== g ||
    t[17] !== x ||
    t[18] !== w ||
    t[19] !== T ||
    t[20] !== s ||
    t[21] !== S?.data
      ? ((M = (0, r.jsx)("div", {
          children: (0, r.jsx)("div", {
            className: R,
            children:
              w || !g || T
                ? (0, r.jsx)("div", {
                    className:
                      "flex flex-1 flex-col items-center justify-center p-7",
                    children: (0, r.jsx)(l.Spinner, {
                      className: "text-muted-foreground h-6 w-6",
                    }),
                  })
                : (0, r.jsx)(m, {
                    callSession: g,
                    knownResumeIds: x ? (S?.data ?? []).map(h) : null,
                    onDone: s,
                  }),
          }),
        })),
        (t[16] = g),
        (t[17] = x),
        (t[18] = w),
        (t[19] = T),
        (t[20] = s),
        (t[21] = S?.data),
        (t[22] = M))
      : (M = t[22]),
    M
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(93918 /* vendor/module-93918 */),
  l = n(15201 /* app/components/spinner */),
  c = n(69687 /* vendor/module-69687 */),
  u = n(29113 /* vendor/module-29113 */),
  d = n(44825 /* vendor/module-44825 */),
  p = n(46998 /* app/components/trpcreact-provider */),
  f = n(78254 /* app/components/desktop-session-wizard */);
function h(e) {
  return e.id;
}
function m(e) {
  const t = (0, o.c)(13),
    { callSession: n, knownResumeIds: i, onDone: a } = e;
  let l;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((l = {
        callSession: n,
        knownResumeIds: i,
        onNotice: g,
        onUpdated: a,
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = l))
    : (l = t[3]);
  const {
    handleSubmit: c,
    wizardRef: u,
    form: d,
    wizardProps: p,
    isSubmitting: h,
  } = (0, s.useCallSessionEditor)(l);
  let m, y;
  return (
    t[4] !== d || t[5] !== h || t[6] !== a || t[7] !== p || t[8] !== u
      ? ((m = (0, r.jsx)(f.DesktopSessionWizard, {
          ref: u,
          form: d,
          ...p,
          isSubmitting: h,
          onCancel: a,
        })),
        (t[4] = d),
        (t[5] = h),
        (t[6] = a),
        (t[7] = p),
        (t[8] = u),
        (t[9] = m))
      : (m = t[9]),
    t[10] !== c || t[11] !== m
      ? ((y = (0, r.jsx)("form", {
          className: "flex min-h-0 flex-1 flex-col",
          onSubmit: c,
          children: m,
        })),
        (t[10] = c),
        (t[11] = m),
        (t[12] = y))
      : (y = t[12]),
    y
  );
}
function g(e) {
  const { type: t, message: n } = e;
  return a.toast[t](n);
}
