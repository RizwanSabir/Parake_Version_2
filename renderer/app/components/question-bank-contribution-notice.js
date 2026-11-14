// app/components/question-bank-contribution-notice.js — webpack module 78086
// params: (e, t, n) = (module, exports, require)
"use strict";
t.QuestionBankContributionNotice = function (e) {
  const t = (0, o.c)(7),
    { questionBankVisible: n, className: s, ...l } = e;
  if (
    !n ||
    !(function ({
      isInterview: e,
      saveTranscription: t,
      isMock: n,
      questionBankOptedOut: r,
    }) {
      return e && t && !n && !r;
    })(l)
  )
    return null;
  let c, u, d, p, f;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((c = (0, r.jsx)("p", {})), (t[0] = c))
      : (c = t[0]),
    t[1] !== s
      ? ((u = (0, i.cn)("text-muted-foreground text-xs", s)),
        (t[1] = s),
        (t[2] = u))
      : (u = t[2]),
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = (0, r.jsx)("span", {
          className: "phone:hidden",
          children:
            "Saved interview sessions also help build the Question Bank. Questions are rewritten and stripped of personal details first. You can turn this off in your profile, which also removes what past sessions contributed.",
        })),
        (p = (0, r.jsx)("span", {
          className: "phone:inline hidden",
          children:
            "Saved interviews add their questions to the Question Bank, anonymized. Opting out in Profile also removes past ones.",
        })),
        (t[3] = d),
        (t[4] = p))
      : ((d = t[3]), (p = t[4])),
    t[5] !== u
      ? ((f = (0, r.jsxs)(a.Typography, {
          render: c,
          className: u,
          children: [d, p],
        })),
        (t[5] = u),
        (t[6] = f))
      : (f = t[6]),
    f
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(34483 /* app/components/typography-variants */);
