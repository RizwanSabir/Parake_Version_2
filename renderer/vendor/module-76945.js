// vendor/module-76945.js — webpack module 76945
// params: (e, t, n) = (module, exports, require)
t.useCallSessionLockGuard = function (e) {
  const t = (0, r.c)(12),
    { initialIsLockedByOtherClient: n, callSessionId: c } = e,
    u = a.api.useUtils(),
    { mutateAsync: d } = a.api.callSession.takeOver.useMutation(),
    [p, f] = (0, o.useState)(n),
    [h, m] = (0, o.useState)("newcomer");
  let g;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = (e) =>
        !!i.ServerError.isCallSessionLockedToOtherClient(e) &&
        (m("displaced"), f(!0), !0)),
      (t[0] = g))
    : (g = t[0]);
  const y = g;
  let v, b, S;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = () => (
        s.callSessionLockBus.setHandler(y),
        () => s.callSessionLockBus.clearHandler(y)
      )),
      (b = [y]),
      (t[1] = v),
      (t[2] = b))
    : ((v = t[1]), (b = t[2])),
    (0, o.useEffect)(v, b),
    t[3] !== c || t[4] !== p || t[5] !== d || t[6] !== u
      ? ((S = async () => {
          c &&
            p &&
            (await d({ callSessionId: c }),
            await u.callSession.get.cancel({ callSessionId: c }),
            u.callSession.get.setData({ callSessionId: c }, l),
            f(!1));
        }),
        (t[3] = c),
        (t[4] = p),
        (t[5] = d),
        (t[6] = u),
        (t[7] = S))
      : (S = t[7]);
  const _ = S;
  let x;
  return (
    t[8] !== _ || t[9] !== p || t[10] !== h
      ? ((x = {
          isLockedByOtherClient: p,
          lockVariant: h,
          claimLock: _,
        }),
        (t[8] = _),
        (t[9] = p),
        (t[10] = h),
        (t[11] = x))
      : (x = t[11]),
    x
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(353 /* vendor/module-353 */),
  a = n(44189 /* vendor/module-44189 */),
  s = n(18799 /* vendor/module-18799 */);
function l(e) {
  return e ? { ...e, isLockedByOtherClient: !1 } : e;
}
