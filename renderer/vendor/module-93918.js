// vendor/module-93918.js — webpack module 93918
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCallSessionEditor = function (e) {
  const t = (0, r.c)(44),
    {
      callSession: n,
      knownResumeIds: p,
      onNotice: f,
      onUpdated: h,
      offerMockTab: m,
    } = e,
    g = void 0 !== m && m,
    y = (0, a.useUpdateLiveCallSession)(),
    [v, b] = (0, i.useState)(n.isMock);
  let S;
  t[0] !== n
    ? ((S = (0, l.isPositionMock)(n)), (t[0] = n), (t[1] = S))
    : (S = t[1]);
  const _ = S;
  let x;
  t[2] !== n
    ? ((x = (0, c.canChangeMockFlag)(n)), (t[2] = n), (t[3] = x))
    : (x = t[3]);
  const w = !x;
  let E;
  t[4] !== v || t[5] !== _
    ? ((E = v ? { presetLocked: _, hideDescription: _ } : void 0),
      (t[4] = v),
      (t[5] = _),
      (t[6] = E))
    : (E = t[6]);
  const T = E;
  let k;
  t[7] !== n || t[8] !== p
    ? ((k = () => (0, s.formValuesFromCallSession)(n, p)),
      (t[7] = n),
      (t[8] = p),
      (t[9] = k))
    : (k = t[9]);
  const C = k;
  let I, A, O;
  t[10] !== C ? ((I = C()), (t[10] = C), (t[11] = I)) : (I = t[11]),
    t[12] !== n.id || t[13] !== v || t[14] !== f || t[15] !== h || t[16] !== y
      ? ((A = async (e) => {
          const t = await y.mutateAsync(
            (0, s.updateLiveInputFromFormValues)(n.id, e, {
              isMock: v,
            }),
          );
          f({
            type: "success",
            message: "Session updated successfully.",
          }),
            h(t);
        }),
        (t[12] = n.id),
        (t[13] = v),
        (t[14] = f),
        (t[15] = h),
        (t[16] = y),
        (t[17] = A))
      : (A = t[17]),
    t[18] !== T || t[19] !== f || t[20] !== I || t[21] !== A
      ? ((O = {
          defaultValues: I,
          onSubmit: A,
          onNotice: f,
          mock: T,
        }),
        (t[18] = T),
        (t[19] = f),
        (t[20] = I),
        (t[21] = A),
        (t[22] = O))
      : (O = t[22]);
  const { form: R, wizardRef: M } = (0, u.useCallSessionWizardForm)(O),
    P = (0, o.useStore)(R.store, d) && v === n.isMock,
    N = y.isPending;
  let D, j;
  t[23] !== R || t[24] !== N || t[25] !== P
    ? ((D = (e) => {
        e.preventDefault(), N || P || R.handleSubmit();
      }),
      (t[23] = R),
      (t[24] = N),
      (t[25] = P),
      (t[26] = D))
    : (D = t[26]),
    t[27] !== n.isMock || t[28] !== R || t[29] !== C
      ? ((j = () => {
          b(n.isMock), R.reset(C());
        }),
        (t[27] = n.isMock),
        (t[28] = R),
        (t[29] = C),
        (t[30] = j))
      : (j = t[30]);
  const L = N ? "Updating..." : "Update Session",
    F = P ? "No changes detected." : void 0,
    U = g ? b : void 0;
  let B, z;
  return (
    t[31] !== T || t[32] !== w || t[33] !== L || t[34] !== F || t[35] !== U
      ? ((B = {
          title: "Edit session",
          submitLabel: L,
          submitBlockedReason: F,
          hasSavedSelection: !0,
          modelSelectionSurface: "edit_session",
          mock: T,
          onMockChange: U,
          mockLocked: w,
        }),
        (t[31] = T),
        (t[32] = w),
        (t[33] = L),
        (t[34] = F),
        (t[35] = U),
        (t[36] = B))
      : (B = t[36]),
    t[37] !== R ||
    t[38] !== N ||
    t[39] !== j ||
    t[40] !== B ||
    t[41] !== D ||
    t[42] !== M
      ? ((z = {
          form: R,
          wizardRef: M,
          isSubmitting: N,
          handleSubmit: D,
          reseed: j,
          wizardProps: B,
        }),
        (t[37] = R),
        (t[38] = N),
        (t[39] = j),
        (t[40] = B),
        (t[41] = D),
        (t[42] = M),
        (t[43] = z))
      : (z = t[43]),
    z
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(51366 /* vendor/module-51366 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(553 /* vendor/module-553 */),
  s = n(87929 /* vendor/module-87929 */),
  l = n(92004 /* vendor/module-92004 */),
  c = n(58404 /* vendor/module-58404 */),
  u = n(58434 /* vendor/module-58434 */);
function d(e) {
  return e.isDefaultValue;
}
