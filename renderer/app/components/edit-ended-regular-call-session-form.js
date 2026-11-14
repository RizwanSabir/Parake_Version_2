// app/components/edit-ended-regular-call-session-form.js — webpack module 77786
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EditEndedRegularCallSessionForm = function (e) {
  const t = (0, o.c)(56),
    { initialValues: n, onSubmit: s, onCancel: v, isSubmitting: b } = e;
  let S, _, x;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = { onChange: g, onSubmit: g }), (t[0] = S))
    : (S = t[0]),
    t[1] !== s
      ? ((_ = async (e) => {
          const { value: t } = e;
          await s(t);
        }),
        (t[1] = s),
        (t[2] = _))
      : (_ = t[2]),
    t[3] !== n || t[4] !== _
      ? ((x = { defaultValues: n, validators: S, onSubmit: _ }),
        (t[3] = n),
        (t[4] = _),
        (t[5] = x))
      : (x = t[5]);
  const w = (0, i.useForm)(x),
    { values: E, isDefaultValue: T } = (0, i.useSelector)(w.store, y);
  let k;
  t[6] !== w || t[7] !== n
    ? ((k = () => {
        w.reset(n);
      }),
      (t[6] = w),
      (t[7] = n),
      (t[8] = k))
    : (k = t[8]);
  const C = k;
  let I, A, O, R, M, P, N, D, j, L, F, U, B;
  t[9] !== C
    ? ((I = () => {
        C();
      }),
      (t[9] = C),
      (t[10] = I))
    : (I = t[10]),
    t[11] !== n.description || t[12] !== n.title
      ? ((A = [n.title, n.description]),
        (t[11] = n.description),
        (t[12] = n.title),
        (t[13] = A))
      : (A = t[13]),
    (0, a.useEffect)(I, A),
    t[14] !== w
      ? ((O = (e) => {
          e.preventDefault(), w.handleSubmit();
        }),
        (t[14] = w),
        (t[15] = O))
      : (O = t[15]),
    t[16] === Symbol.for("react.memo_cache_sentinel")
      ? ((R = (0, r.jsx)(u.LabelWithTooltip, {
          children: (0, r.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              "Call Title",
              " ",
              (0, r.jsx)("span", {
                className: "text-muted-foreground text-xs",
                children: "(Optional)",
              }),
            ],
          }),
        })),
        (t[16] = R))
      : (R = t[16]),
    t[17] !== w
      ? ((M = (e) => w.setFieldValue("title", e.target.value)),
        (t[17] = w),
        (t[18] = M))
      : (M = t[18]),
    t[19] !== M || t[20] !== E.title
      ? ((P = (0, r.jsx)(f.Input, {
          placeholder: "Feature request discussion...",
          value: E.title,
          onChange: M,
        })),
        (t[19] = M),
        (t[20] = E.title),
        (t[21] = P))
      : (P = t[21]),
    t[22] !== P || t[23] !== E.title
      ? ((N = (0, r.jsx)(c.FieldWithCount, {
          label: R,
          value: E.title,
          limit: l.limits.sessionTitle,
          className: "gap-y-1",
          children: P,
        })),
        (t[22] = P),
        (t[23] = E.title),
        (t[24] = N))
      : (N = t[24]),
    t[25] === Symbol.for("react.memo_cache_sentinel")
      ? ((D = (0, r.jsx)(u.LabelWithTooltip, {
          children: (0, r.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              "Description",
              " ",
              (0, r.jsx)("span", {
                className: "text-muted-foreground text-xs",
                children: "(Optional)",
              }),
            ],
          }),
        })),
        (t[25] = D))
      : (D = t[25]),
    t[26] !== w
      ? ((j = (e) => w.setFieldValue("description", e.target.value)),
        (t[26] = w),
        (t[27] = j))
      : (j = t[27]),
    t[28] !== j || t[29] !== E.description
      ? ((L = (0, r.jsx)(h.Textarea, {
          placeholder: "Discussing Q4 targets and partnership opportunities...",
          value: E.description,
          onChange: j,
          className: "max-h-[140px]",
        })),
        (t[28] = j),
        (t[29] = E.description),
        (t[30] = L))
      : (L = t[30]),
    t[31] !== L || t[32] !== E.description
      ? ((F = (0, r.jsx)(c.FieldWithCount, {
          label: D,
          value: E.description,
          limit: l.limits.jobDescription,
          className: "gap-y-1",
          children: L,
        })),
        (t[31] = L),
        (t[32] = E.description),
        (t[33] = F))
      : (F = t[33]),
    t[34] !== N || t[35] !== F
      ? ((U = (0, r.jsxs)("div", {
          className: "flex flex-col gap-y-4",
          children: [N, F],
        })),
        (t[34] = N),
        (t[35] = F),
        (t[36] = U))
      : (U = t[36]),
    t[37] !== v
      ? ((B = (0, r.jsx)(d.Button, {
          type: "button",
          variant: "outline",
          onClick: v,
          children: "Close",
        })),
        (t[37] = v),
        (t[38] = B))
      : (B = t[38]);
  const z = b || T || !w.state.isValid,
    H = b ? "Updating..." : "Update Session";
  let V;
  t[39] !== z || t[40] !== H
    ? ((V = (0, r.jsx)(m.TooltipTrigger, {
        render: (0, r.jsx)("span", {
          children: (0, r.jsx)(d.Button, {
            type: "submit",
            disabled: z,
            className: "w-full",
            children: H,
          }),
        }),
      })),
      (t[39] = z),
      (t[40] = H),
      (t[41] = V))
    : (V = t[41]);
  const q = !T;
  let G, W, $, Y, K;
  return (
    t[42] !== q
      ? ((G = (0, r.jsx)(m.TooltipContent, {
          hidden: q,
          children: "No changes detected.",
        })),
        (t[42] = q),
        (t[43] = G))
      : (G = t[43]),
    t[44] !== V || t[45] !== G
      ? ((W = (0, r.jsxs)(m.Tooltip, { children: [V, G] })),
        (t[44] = V),
        (t[45] = G),
        (t[46] = W))
      : (W = t[46]),
    t[47] !== B || t[48] !== W
      ? (($ = (0, r.jsxs)(p.DialogFooter, {
          className: "mt-2",
          children: [B, W],
        })),
        (t[47] = B),
        (t[48] = W),
        (t[49] = $))
      : ($ = t[49]),
    t[50] !== U || t[51] !== $
      ? ((Y = (0, r.jsxs)(r.Fragment, { children: [U, $] })),
        (t[50] = U),
        (t[51] = $),
        (t[52] = Y))
      : (Y = t[52]),
    t[53] !== Y || t[54] !== O
      ? ((K = (0, r.jsx)("form", {
          className: "flex min-w-0 flex-col gap-y-4",
          onSubmit: O,
          children: Y,
        })),
        (t[53] = Y),
        (t[54] = O),
        (t[55] = K))
      : (K = t[55]),
    K
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(51366 /* vendor/module-51366 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(511 /* vendor/module-511 */),
  l = n(45482 /* vendor/module-45482 */),
  c = n(7696 /* app/components/field-with-count */),
  u = n(63110 /* app/components/label-with-tooltip */),
  d = n(66244 /* app/components/button-variants */),
  p = n(98980 /* app/components/dialog */),
  f = n(91722 /* app/components/input */),
  h = n(6826 /* app/components/textarea */),
  m = n(58055 /* app/components/tooltip */),
  g = s.z.object({
    title: l.limits.sessionTitle.string("Title"),
    description: l.limits.jobDescription.string("Description"),
  });
function y(e) {
  return { values: e.values, isDefaultValue: e.isDefaultValue };
}
