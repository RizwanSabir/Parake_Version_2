// vendor/module-82447.js — webpack module 82447
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAnswerPreferencesSeen = function () {
  const e = r.api.useUtils(),
    { data: t } = r.api.user.get.useQuery(),
    n = r.api.user.markAnswerPreferencesOpened.useMutation(),
    o = !t || null !== t.answerPreferencesOpenedAt;
  return {
    hasOpened: o,
    markOpened: () => {
      o ||
        (e.user.get.setData(void 0, (e) =>
          e ? { ...e, answerPreferencesOpenedAt: new Date() } : e,
        ),
        n.mutate());
    },
  };
};
const r = n(44189 /* vendor/module-44189 */);
