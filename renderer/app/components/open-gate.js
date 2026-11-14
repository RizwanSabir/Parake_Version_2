// app/components/open-gate.js — webpack module 1081
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAccountSharingGate = function ({ onUnblocked: e, enabled: t = !0 } = {}) {
  const [n, l] = (0, o.useState)(!1),
    [c, u] = (0, o.useState)("feature"),
    d = s.api.useUtils(),
    { data: p } = s.api.user.accountSharingStatus.useQuery(void 0, {
      enabled: t,
    }),
    f = p?.hold ?? null,
    h = !!f && (p?.selfUnlockAvailable ?? !1),
    m = (0, o.useRef)(e),
    g = (0, o.useRef)(!1);
  (0, o.useEffect)(() => {
    m.current = e;
  }),
    (0, o.useEffect)(() => {
      f
        ? (g.current = !0)
        : p && g.current && ((g.current = !1), m.current?.());
    }, [f, p]);
  const { mutate: y, isPending: v } =
    s.api.user.selfUnlockAccountSharingHold.useMutation({
      onSuccess: async () => {
        l(!1),
          i.toast.success("Account unblocked"),
          await d.user.accountSharingStatus.invalidate();
      },
    });
  return {
    hold: f,
    selfUnlockAvailable: h,
    get isBlocked() {
      return null !== f && f.liftsAt.getTime() > Date.now();
    },
    openGate: () => {
      u("feature"), l(!0);
    },
    openUnblock: () => {
      u("unblock"), l(!0);
    },
    gateDialog:
      f &&
      (0, r.jsx)(a.AccountSharingGateDialog, {
        open: n,
        onOpenChange: l,
        entry: c,
        liftsOn: f.liftsOn,
        selfUnlockAvailable: h,
        onConfirm: () => y(),
        pending: v,
      }),
  };
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(99545 /* vendor/module-99545 */),
  s = n(46998 /* app/components/trpcreact-provider */);
