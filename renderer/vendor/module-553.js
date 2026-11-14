// vendor/module-553.js — webpack module 553
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useUpdateLiveCallSession = function () {
  const e = r.api.useUtils();
  return r.api.callSession.updateLive.useMutation({
    onSuccess: (t) => {
      e.callSession.get.setData({ callSessionId: t.id }, (e) =>
        e ? { ...e, ...t } : void 0,
      ),
        e.callSession.getMany.refetch(),
        e.callSession.getList.refetch();
    },
  });
};
const r = n(44189 /* vendor/module-44189 */);
