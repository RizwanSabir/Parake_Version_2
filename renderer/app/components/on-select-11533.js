// app/components/on-select-11533.js — webpack module 11533
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CallSessionActionMenu = function (e) {
  const t = (0, o.c)(36),
    { callSession: n, onDetails: u, onEdit: v } = e,
    b = f.api.useUtils(),
    [S, _] = (0, a.useState)(!1),
    [x, w] = (0, a.useState)(!1);
  let E, T;
  t[0] !== n.id
    ? ((E = { callSessionId: n.id }), (t[0] = n.id), (t[1] = E))
    : (E = t[1]),
    t[2] !== x ? ((T = { enabled: x }), (t[2] = x), (t[3] = T)) : (T = t[3]);
  const { data: k } = f.api.callSession.get.useQuery(E, T);
  let C;
  t[4] !== n
    ? ((C = (0, d.canEditCallSessionFully)(n)), (t[4] = n), (t[5] = C))
    : (C = t[5]);
  const I = !C;
  let A;
  t[6] !== b
    ? ((A = {
        onSuccess: (e) => (
          e.shortEndReturn &&
            s.toast.success((0, p.shortEndReturnMessage)(e.shortEndReturn)),
          Promise.all([
            b.callSession.getMany.invalidate(),
            b.callSession.getList.invalidate(),
          ])
        ),
      }),
      (t[6] = b),
      (t[7] = A))
    : (A = t[7]);
  const { mutate: O, isPending: R } =
    f.api.callSession.status.end.useMutation(A);
  let M;
  t[8] !== b
    ? ((M = {
        onSuccess: async () => {
          await Promise.all([
            b.callSession.getMany.invalidate(),
            b.callSession.getList.invalidate(),
          ]),
            _(!1),
            s.toast.success("Session deleted", {
              icon: (0, r.jsx)(i.Trash2, {
                className: "text-error size-6",
              }),
            });
        },
      }),
      (t[8] = b),
      (t[9] = M))
    : (M = t[9]);
  const { mutate: P, isPending: N } = f.api.callSession.delete.useMutation(M),
    D = !!n.activatedAt && !n.isEndedOrExpired;
  let j;
  t[10] !== D ||
  t[11] !== n ||
  t[12] !== I ||
  t[13] !== O ||
  t[14] !== R ||
  t[15] !== u ||
  t[16] !== v ||
  t[17] !== b
    ? ((j = () => {
        const e = [];
        return (
          n.isEndedOrExpired &&
            e.push({
              key: "details",
              label: "Details",
              icon: i.Info,
              onSelect: u,
            }),
          (0, d.canEditCallSession)(n) &&
            e.push({
              key: "edit",
              label: "Edit",
              icon: i.Pen,
              onSelect: () => {
                if (!I) return v();
                b.callSession.get
                  .fetch({ callSessionId: n.id })
                  .then(() => w(!0))
                  .catch(y);
              },
            }),
          D
            ? e.push({
                key: "end",
                label: R ? "Ending..." : "End session",
                icon: i.PhoneOff,
                destructive: !0,
                disabled: R,
                onSelect: () => O({ callSessionId: n.id }),
              })
            : e.push({
                key: "delete",
                label: "Delete",
                icon: i.Trash2,
                destructive: !0,
                onSelect: () => _(!0),
              }),
          e
        );
      }),
      (t[10] = D),
      (t[11] = n),
      (t[12] = I),
      (t[13] = O),
      (t[14] = R),
      (t[15] = u),
      (t[16] = v),
      (t[17] = b),
      (t[18] = j))
    : (j = t[18]);
  const L = j;
  let F, U, B, z, H, V;
  return (
    t[19] === Symbol.for("react.memo_cache_sentinel")
      ? ((F = (0, r.jsx)(c.DropdownMenuTrigger, {
          render: (0, r.jsx)(m.Button, {
            variant: "ghost",
            size: "icon",
            "aria-label": "Session actions",
            children: (0, r.jsx)(i.EllipsisVertical, {
              className: "h-4 w-4",
            }),
          }),
        })),
        (t[19] = F))
      : (F = t[19]),
    t[20] !== L
      ? ((U = (0, r.jsxs)(c.DropdownMenu, {
          children: [
            F,
            (0, r.jsx)(c.DropdownMenuContent, {
              align: "end",
              children: L().map(g),
            }),
          ],
        })),
        (t[20] = L),
        (t[21] = U))
      : (U = t[21]),
    t[22] !== x || t[23] !== k
      ? ((B =
          x &&
          k &&
          (0, r.jsx)(h.EditEndedRegularCallSessionDialog, {
            callSession: k,
            open: !0,
            setOpen: w,
          })),
        (t[22] = x),
        (t[23] = k),
        (t[24] = B))
      : (B = t[24]),
    t[25] !== n.id || t[26] !== P
      ? ((z = () => P({ callSessionId: n.id })),
        (t[25] = n.id),
        (t[26] = P),
        (t[27] = z))
      : (z = t[27]),
    t[28] !== S || t[29] !== N || t[30] !== z
      ? ((H = (0, r.jsx)(l.ConfirmDialog, {
          open: S,
          onOpenChange: _,
          title: "Are you sure you want to delete this session?",
          description:
            "This action cannot be undone and you will lose all your information.",
          confirmLabel: "Delete session",
          isPending: N,
          onConfirm: z,
        })),
        (t[28] = S),
        (t[29] = N),
        (t[30] = z),
        (t[31] = H))
      : (H = t[31]),
    t[32] !== H || t[33] !== U || t[34] !== B
      ? ((V = (0, r.jsxs)(r.Fragment, { children: [U, B, H] })),
        (t[32] = H),
        (t[33] = U),
        (t[34] = B),
        (t[35] = V))
      : (V = t[35]),
    V
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(44572 /* vendor/module-44572 */),
  l = n(16057 /* app/components/confirm-dialog */),
  c = n(69287 /* app/components/dropdown-menu */),
  u = n(34483 /* app/components/typography-variants */),
  d = n(69687 /* vendor/module-69687 */),
  p = n(67948 /* vendor/module-67948 */),
  f = n(46998 /* app/components/trpcreact-provider */),
  h = n(60230 /* app/components/edit-ended-regular-call-session-dialog */),
  m = n(99683 /* vendor/module-99683 */);
function g(e) {
  const {
    key: t,
    label: n,
    icon: o,
    destructive: i,
    disabled: a,
    onSelect: s,
  } = e;
  return (0, r.jsxs)(
    c.DropdownMenuItem,
    {
      variant: i ? "destructive" : void 0,
      disabled: a,
      onClick: s,
      children: [
        (0, r.jsx)(u.Typography, {
          variant: "body",
          className: i ? "text-foreground" : void 0,
          children: n,
        }),
        (0, r.jsx)(o, { className: "ml-auto" }),
      ],
    },
    t,
  );
}
function y() {}
