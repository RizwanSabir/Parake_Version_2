// app/components/edit-live-call-session-dialog.js — webpack module 81359
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EditLiveCallSessionDialog = function (e) {
  const t = (0, o.c)(12),
    { open: n, setOpen: i, callSession: a, onSettingsUpdate: l } = e;
  let u, d, p, f;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = (0, r.jsx)(s.DialogHeader, {
          children: (0, r.jsx)(s.DialogTitle, {
            children: "Edit session",
          }),
        })),
        (t[0] = u))
      : (u = t[0]),
    t[1] !== a.language || t[2] !== l || t[3] !== i
      ? ((d = (e) => {
          e.language !== a.language && l({ newLanguage: e.language }), i(!1);
        }),
        (t[1] = a.language),
        (t[2] = l),
        (t[3] = i),
        (t[4] = d))
      : (d = t[4]),
    t[5] !== a || t[6] !== d
      ? ((p = (0, r.jsxs)(s.DialogContent, {
          children: [u, (0, r.jsx)(c, { callSession: a, onUpdated: d })],
        })),
        (t[5] = a),
        (t[6] = d),
        (t[7] = p))
      : (p = t[7]),
    t[8] !== n || t[9] !== i || t[10] !== p
      ? ((f = (0, r.jsx)(s.Dialog, {
          open: n,
          onOpenChange: i,
          children: p,
        })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = p),
        (t[11] = f))
      : (f = t[11]),
    f
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(93918 /* vendor/module-93918 */),
  s = n(98980 /* app/components/dialog */),
  l = n(65575 /* app/components/call-details-step */);
function c(e) {
  const t = (0, o.c)(13),
    { callSession: n, onUpdated: i } = e;
  let s;
  t[0] !== n || t[1] !== i
    ? ((s = {
        callSession: n,
        knownResumeIds: null,
        onNotice: u,
        onUpdated: i,
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = s))
    : (s = t[2]);
  const c = (0, a.useCallSessionEditor)(s),
    d = !!c.wizardProps.submitBlockedReason;
  let p, f;
  return (
    t[3] !== c.form ||
    t[4] !== c.isSubmitting ||
    t[5] !== c.wizardProps.mock ||
    t[6] !== c.wizardProps.modelSelectionSurface ||
    t[7] !== c.wizardProps.submitBlockedReason ||
    t[8] !== d
      ? ((p = (0, r.jsx)(l.CallDetailsStep, {
          form: c.form,
          isLoading: !1,
          isSubmitting: c.isSubmitting,
          modelSelectionSurface: c.wizardProps.modelSelectionSurface,
          mock: c.wizardProps.mock,
          submitLabel: "Update Session",
          submittingLabel: "Updating...",
          submitDisabled: d,
          submitDisabledTooltip: c.wizardProps.submitBlockedReason,
        })),
        (t[3] = c.form),
        (t[4] = c.isSubmitting),
        (t[5] = c.wizardProps.mock),
        (t[6] = c.wizardProps.modelSelectionSurface),
        (t[7] = c.wizardProps.submitBlockedReason),
        (t[8] = d),
        (t[9] = p))
      : (p = t[9]),
    t[10] !== c.handleSubmit || t[11] !== p
      ? ((f = (0, r.jsx)("form", {
          className: "flex w-full flex-col gap-y-4",
          onSubmit: c.handleSubmit,
          children: p,
        })),
        (t[10] = c.handleSubmit),
        (t[11] = p),
        (t[12] = f))
      : (f = t[12]),
    f
  );
}
function u(e) {
  const { type: t, message: n } = e;
  return i.toast[t](n);
}
