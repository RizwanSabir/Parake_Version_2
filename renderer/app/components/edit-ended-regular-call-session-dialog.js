// app/components/edit-ended-regular-call-session-dialog.js — webpack module 60230
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EditEndedRegularCallSessionDialog = function (e) {
  const t = (0, o.c)(29),
    { callSession: n, open: u, setOpen: d } = e,
    p = c.api.useUtils();
  let f;
  t[0] !== d || t[1] !== p
    ? ((f = {
        onSuccess: (e) => {
          p.callSession.getMany.refetch(),
            p.callSession.getList.refetch(),
            p.callSession.get.invalidate({ callSessionId: e.id }),
            d(!1),
            i.toast.success("Session updated successfully.");
        },
      }),
      (t[0] = d),
      (t[1] = p),
      (t[2] = f))
    : (f = t[2]);
  const { mutateAsync: h, isPending: m } =
    c.api.callSession.updateEnded.useMutation(f);
  let g;
  t[3] !== m || t[4] !== d
    ? ((g = (e) => {
        (!e && m) || d(e);
      }),
      (t[3] = m),
      (t[4] = d),
      (t[5] = g))
    : (g = t[5]);
  const y = g;
  let v;
  t[6] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = (0, r.jsx)(l.Typography, {
        variant: "title-sm",
        render: (0, r.jsx)(s.DialogTitle, {}),
        children: "Edit session",
      })),
      (t[6] = v))
    : (v = t[6]);
  const b = n.isPlanSession ? "This call has ended." : "This call has expired.";
  let S, _, x, w, E, T, k;
  return (
    t[7] !== b
      ? ((S = (0, r.jsxs)(s.DialogHeader, {
          children: [
            v,
            (0, r.jsxs)(s.DialogDescription, {
              children: [
                b,
                " ",
                "Only the title and description can be edited.",
              ],
            }),
          ],
        })),
        (t[7] = b),
        (t[8] = S))
      : (S = t[8]),
    t[9] !== n.description || t[10] !== n.title
      ? ((_ = { title: n.title, description: n.description }),
        (t[9] = n.description),
        (t[10] = n.title),
        (t[11] = _))
      : (_ = t[11]),
    t[12] !== n.id || t[13] !== h
      ? ((x = async (e) => {
          await h({
            callSessionId: n.id,
            title: e.title,
            description: e.description,
          });
        }),
        (t[12] = n.id),
        (t[13] = h),
        (t[14] = x))
      : (x = t[14]),
    t[15] !== y ? ((w = () => y(!1)), (t[15] = y), (t[16] = w)) : (w = t[16]),
    t[17] !== m || t[18] !== _ || t[19] !== x || t[20] !== w
      ? ((E = (0, r.jsx)(a.EditEndedRegularCallSessionForm, {
          initialValues: _,
          onSubmit: x,
          onCancel: w,
          isSubmitting: m,
        })),
        (t[17] = m),
        (t[18] = _),
        (t[19] = x),
        (t[20] = w),
        (t[21] = E))
      : (E = t[21]),
    t[22] !== S || t[23] !== E
      ? ((T = (0, r.jsxs)(s.DialogContent, { children: [S, E] })),
        (t[22] = S),
        (t[23] = E),
        (t[24] = T))
      : (T = t[24]),
    t[25] !== u || t[26] !== y || t[27] !== T
      ? ((k = (0, r.jsx)(s.Dialog, {
          open: u,
          onOpenChange: y,
          children: T,
        })),
        (t[25] = u),
        (t[26] = y),
        (t[27] = T),
        (t[28] = k))
      : (k = t[28]),
    k
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(77786 /* app/components/edit-ended-regular-call-session-form */),
  s = n(98980 /* app/components/dialog */),
  l = n(34483 /* app/components/typography-variants */),
  c = n(46998 /* app/components/trpcreact-provider */);
