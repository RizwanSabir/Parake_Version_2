// vendor/module-53793.js — webpack module 53793
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useSessionModeFields = function (e) {
  const t = (0, r.c)(3);
  let n;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((n = new Map()), (t[0] = n))
    : (n = t[0]);
  const a = (0, o.useRef)(n);
  let s;
  return (
    t[1] !== e
      ? ((s = (t) => {
          const n = e.state.values;
          if (n.sessionMode === t) return;
          a.current.set(n.sessionMode, {
            title: n.title,
            description: n.description,
            companyDomain: n.companyDomain,
            resumeId: n.resumeId,
          });
          const r = a.current.get(t) ?? i;
          e.setFieldValue("sessionMode", t),
            e.setFieldValue("title", r.title),
            e.setFieldValue("description", r.description),
            e.setFieldValue("companyDomain", r.companyDomain),
            e.setFieldValue("resumeId", r.resumeId);
        }),
        (t[1] = e),
        (t[2] = s))
      : (s = t[2]),
    s
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = {
    title: "",
    description: "",
    companyDomain: "",
    resumeId: null,
  };
