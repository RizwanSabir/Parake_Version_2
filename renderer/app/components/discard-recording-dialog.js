// app/components/discard-recording-dialog.js — webpack module 22800
// params: (e, t, n) = (module, exports, require)
t.DiscardRecordingDialog = function (e) {
  const t = (0, o.c)(8),
    { open: n, onOpenChange: s, onLeave: l } = e;
  let c, u, d, p;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((c = (0, r.jsxs)("div", {
          className: "flex w-full flex-col items-center gap-1 text-center",
          children: [
            (0, r.jsx)(a.DialogTitle, {
              children: "Leave without saving?",
            }),
            (0, r.jsx)(a.DialogDescription, {
              children:
                "Your recording won't be saved, and you'll need to record your voice again.",
            }),
          ],
        })),
        (t[0] = c))
      : (c = t[0]),
    t[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = (0, r.jsx)(a.DialogClose, {
          render: (0, r.jsx)(i.Button, {
            variant: "secondary",
            size: "xl",
            children: "Keep voice",
          }),
        })),
        (t[1] = u))
      : (u = t[1]),
    t[2] !== l
      ? ((d = (0, r.jsxs)(a.DialogContent, {
          size: "sm",
          showCloseButton: !1,
          className: "flex flex-col gap-6",
          children: [
            c,
            (0, r.jsxs)(a.DialogFooter, {
              layout: "stretch",
              className: "grid-cols-2 [&>*:first-child]:order-none",
              children: [
                u,
                (0, r.jsx)(i.Button, {
                  size: "xl",
                  onClick: l,
                  children: "Leave",
                }),
              ],
            }),
          ],
        })),
        (t[2] = l),
        (t[3] = d))
      : (d = t[3]),
    t[4] !== s || t[5] !== n || t[6] !== d
      ? ((p = (0, r.jsx)(a.Dialog, {
          open: n,
          onOpenChange: s,
          children: d,
        })),
        (t[4] = s),
        (t[5] = n),
        (t[6] = d),
        (t[7] = p))
      : (p = t[7]),
    p
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(66244 /* app/components/button-variants */),
  a = n(98980 /* app/components/dialog */);
