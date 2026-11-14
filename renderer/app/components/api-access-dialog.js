// app/components/api-access-dialog.js — webpack module 5467
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ApiAccessDialog = function (e) {
  const t = (0, o.c)(62),
    {
      open: n,
      environment: g,
      initialToken: y,
      onOpenChange: v,
      onCancel: b,
      onConfirm: S,
    } = e,
    _ = (0, s.useRef)(null),
    x = (0, s.useRef)(null),
    w = "custom" === g;
  let E;
  t[0] !== w
    ? ((E = l.z.object({
        token: l.z.string().trim().min(1, "Bypass token is required."),
        url: w
          ? l.z
              .string()
              .url({ message: "Enter a valid URL." })
              .refine(
                m,
                "URL must be a Vercel deployment (https://*.vercel.app).",
              )
              .refine(h, "URL must not end with a trailing slash.")
          : l.z.string(),
      })),
      (t[0] = w),
      (t[1] = E))
    : (E = t[1]);
  const T = E;
  let k, C, I, A;
  t[2] !== y
    ? ((k = { token: y, url: "" }), (t[2] = y), (t[3] = k))
    : (k = t[3]),
    t[4] !== T
      ? ((C = { onChangeAsync: T, onSubmitAsync: T }), (t[4] = T), (t[5] = C))
      : (C = t[5]),
    t[6] !== S
      ? ((I = (e) => {
          const { value: t } = e;
          S({ token: t.token.trim(), url: t.url.trim() });
        }),
        (t[6] = S),
        (t[7] = I))
      : (I = t[7]),
    t[8] !== k || t[9] !== C || t[10] !== I
      ? ((A = { defaultValues: k, validators: C, onSubmit: I }),
        (t[8] = k),
        (t[9] = C),
        (t[10] = I),
        (t[11] = A))
      : (A = t[11]);
  const O = (0, i.useForm)(A);
  let R, M;
  t[12] !== O || t[13] !== y || t[14] !== n
    ? ((R = () => {
        n && O.reset({ token: y, url: "" });
      }),
      (t[12] = O),
      (t[13] = y),
      (t[14] = n),
      (t[15] = R))
    : (R = t[15]),
    t[16] !== n ? ((M = [n]), (t[16] = n), (t[17] = M)) : (M = t[17]),
    (0, s.useEffect)(R, M);
  const {
    values: P,
    isValid: N,
    isSubmitting: D,
  } = (0, i.useSelector)(O.store, f);
  let j;
  t[18] !== w ||
  t[19] !== D ||
  t[20] !== N ||
  t[21] !== P.token ||
  t[22] !== P.url
    ? ((j = !P.token.trim() || (w && !P.url.trim()) || !N || D),
      (t[18] = w),
      (t[19] = D),
      (t[20] = N),
      (t[21] = P.token),
      (t[22] = P.url),
      (t[23] = j))
    : (j = t[23]);
  const L = j;
  let F, U;
  t[24] !== w
    ? ((F = () => (w ? x.current : _.current)), (t[24] = w), (t[25] = F))
    : (F = t[25]),
    t[26] === Symbol.for("react.memo_cache_sentinel")
      ? ((U = (0, r.jsx)(c.DialogTitle, {
          children: "Protected API access",
        })),
        (t[26] = U))
      : (U = t[26]);
  const B = w
    ? "Enter your bypass token and API URL to continue."
    : "Enter your bypass token to continue.";
  let z, H, V, q, G, W, $, Y, K, Z, Q, J, X;
  return (
    t[27] !== B
      ? ((z = (0, r.jsxs)(c.DialogHeader, {
          children: [U, (0, r.jsx)(c.DialogDescription, { children: B })],
        })),
        (t[27] = B),
        (t[28] = z))
      : (z = t[28]),
    t[29] !== O || t[30] !== w || t[31] !== P.url
      ? ((H =
          w &&
          (0, r.jsxs)("div", {
            className: "space-y-1.5",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "text-muted-foreground flex items-center gap-1.5 text-xs font-medium",
                children: [
                  (0, r.jsx)(a.Globe, { className: "h-3.5 w-3.5" }),
                  " API URL",
                  (0, r.jsxs)(u.Tooltip, {
                    children: [
                      (0, r.jsx)(u.TooltipTrigger, {
                        "aria-label": "API URL requirements",
                        children: (0, r.jsx)(a.CircleHelp, {
                          className: "text-muted-foreground h-3 w-3",
                        }),
                      }),
                      (0, r.jsx)(u.TooltipContent, {
                        side: "top",
                        children:
                          "Must be a Vercel deployment URL (https://*.vercel.app).",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(p.Input, {
                ref: x,
                value: P.url,
                onChange: (e) => O.setFieldValue("url", e.target.value),
                placeholder: "https://parakeetai-git-branch.vercel.app",
                className: "bg-background h-9",
              }),
            ],
          })),
        (t[29] = O),
        (t[30] = w),
        (t[31] = P.url),
        (t[32] = H))
      : (H = t[32]),
    t[33] === Symbol.for("react.memo_cache_sentinel")
      ? ((V = (0, r.jsx)(u.TooltipTrigger, {
          "aria-label": "Where to find bypass token",
          children: (0, r.jsx)(a.CircleHelp, {
            className: "text-muted-foreground h-3 w-3",
          }),
        })),
        (t[33] = V))
      : (V = t[33]),
    t[34] === Symbol.for("react.memo_cache_sentinel")
      ? ((q = (0, r.jsxs)("div", {
          className:
            "text-muted-foreground flex items-center gap-1.5 text-xs font-medium",
          children: [
            "Bypass token",
            (0, r.jsxs)(u.Tooltip, {
              children: [
                V,
                (0, r.jsxs)(u.TooltipContent, {
                  side: "top",
                  className: "max-w-xs text-center",
                  children: [
                    "You can find the bypass token",
                    " ",
                    (0, r.jsx)("a", {
                      href: "https://vercel.com/parakeetai/parakeetai/settings/deployment-protection#protection-bypass-for-automation",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline underline underline-offset-2",
                      children: "here",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
          ],
        })),
        (t[34] = q))
      : (q = t[34]),
    t[35] !== O
      ? ((G = (e) => O.setFieldValue("token", e.target.value)),
        (t[35] = O),
        (t[36] = G))
      : (G = t[36]),
    t[37] !== G || t[38] !== P.token
      ? ((W = (0, r.jsxs)("div", {
          className: "space-y-1.5",
          children: [
            q,
            (0, r.jsx)(p.Input, {
              ref: _,
              value: P.token,
              onChange: G,
              placeholder: "Bypass token",
              className: "bg-background h-9",
            }),
          ],
        })),
        (t[37] = G),
        (t[38] = P.token),
        (t[39] = W))
      : (W = t[39]),
    t[40] !== H || t[41] !== W
      ? (($ = (0, r.jsxs)("div", {
          className: "space-y-3",
          children: [H, W],
        })),
        (t[40] = H),
        (t[41] = W),
        (t[42] = $))
      : ($ = t[42]),
    t[43] !== b
      ? ((Y = (0, r.jsx)(d.Button, {
          variant: "outline",
          onClick: b,
          children: "Cancel",
        })),
        (t[43] = b),
        (t[44] = Y))
      : (Y = t[44]),
    t[45] !== O
      ? ((K = () => O.handleSubmit()), (t[45] = O), (t[46] = K))
      : (K = t[46]),
    t[47] !== L || t[48] !== K
      ? ((Z = (0, r.jsx)(d.Button, {
          onClick: K,
          disabled: L,
          children: "Confirm",
        })),
        (t[47] = L),
        (t[48] = K),
        (t[49] = Z))
      : (Z = t[49]),
    t[50] !== Y || t[51] !== Z
      ? ((Q = (0, r.jsxs)(c.DialogFooter, { children: [Y, Z] })),
        (t[50] = Y),
        (t[51] = Z),
        (t[52] = Q))
      : (Q = t[52]),
    t[53] !== z || t[54] !== $ || t[55] !== Q || t[56] !== F
      ? ((J = (0, r.jsxs)(c.DialogContent, {
          size: "sm",
          initialFocus: F,
          children: [z, $, Q],
        })),
        (t[53] = z),
        (t[54] = $),
        (t[55] = Q),
        (t[56] = F),
        (t[57] = J))
      : (J = t[57]),
    t[58] !== v || t[59] !== n || t[60] !== J
      ? ((X = (0, r.jsx)(c.Dialog, {
          open: n,
          onOpenChange: v,
          children: J,
        })),
        (t[58] = v),
        (t[59] = n),
        (t[60] = J),
        (t[61] = X))
      : (X = t[61]),
    X
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(51366 /* vendor/module-51366 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(14041 /* vendor/module-14041 */),
  l = n(511 /* vendor/module-511 */),
  c = n(98980 /* app/components/dialog */),
  u = n(58055 /* app/components/tooltip */),
  d = n(99683 /* vendor/module-99683 */),
  p = n(51371 /* vendor/module-51371 */);
function f(e) {
  return {
    values: e.values,
    isValid: e.isValid,
    isSubmitting: e.isSubmitting,
  };
}
function h(e) {
  return !e.endsWith("/");
}
function m(e) {
  return new URL(e).hostname.endsWith(".vercel.app");
}
