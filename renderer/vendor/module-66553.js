// vendor/module-66553.js — webpack module 66553
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useEndCallSession = function ({ notify: e, onEnded: t, onError: n }) {
  const i = o.api.useUtils();
  return o.api.callSession.status.end.useMutation({
    onSuccess: async (n) => {
      n.shortEndReturn && e((0, r.shortEndReturnMessage)(n.shortEndReturn)),
        i.callSession.get.setData({ callSessionId: n.id }, (e) =>
          e ? { ...e, ...n } : void 0,
        ),
        i.callSession.getLiveCount.setData(void 0, (e) =>
          e ? { liveCount: Math.max(0, e.liveCount - 1) } : e,
        ),
        i.callSession.getLiveCount.invalidate(),
        await Promise.all([
          i.callSession.getMany.refetch(),
          i.callSession.getList.refetch(),
        ]),
        t?.(n);
    },
    onError: () => n?.(),
  });
};
const r = n(67948 /* vendor/module-67948 */),
  o = n(44189 /* vendor/module-44189 */);
