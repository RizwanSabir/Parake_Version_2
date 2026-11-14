// vendor/module-70323.js — webpack module 70323
// params: (e, t, n) = (module, exports, require)
"use strict";
t.rF = t.CALL_SESSION_SORT_OPTIONS_WITH_STATUS = t._N = t.dp = t.lz = void 0;
const r = n(8240 /* vendor/module-8240 */);
t.lz = {
  mode: ["mode_asc", "mode_desc"],
  duration: ["duration_desc", "duration_asc"],
  creditsUsed: ["credits_desc", "credits_asc"],
  transcript: ["transcript_desc", "transcript_asc"],
};
(t.dp = Object.values(t.lz).flat()),
  r.LIST_SORT_VALUES,
  t.dp,
  (t._N = r.LIST_SORT_OPTIONS.map((e) =>
    "title_asc" === e.value
      ? { ...e, label: "Title A – Z" }
      : "title_desc" === e.value
        ? { ...e, label: "Title Z – A" }
        : e,
  )),
  (t.CALL_SESSION_SORT_OPTIONS_WITH_STATUS = [
    { value: "status", label: "Status" },
    ...t._N,
  ]),
  (t.rF = { all: t._N, interview: t._N, regular: t._N, mock: t._N });
