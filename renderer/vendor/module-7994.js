// vendor/module-7994.js — webpack module 7994
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.Z$ = t.X_ = t.Y = t.B1 = t.cO = t.p8 = void 0),
  (t.coversCalls = a),
  (t.isPastDue = function (e) {
    return "past_due" === e?.status;
  });
const r = n(5735 /* vendor/module-5735 */),
  o = n(99314 /* vendor/module-99314 */),
  i = n(4249 /* vendor/module-4249 */);
r.Currency.INR, r.Currency.EUR;
function a(e) {
  return !0 === e?.isActive && "full" === e.tier;
}
(t.p8 = "resume_download"),
  t.p8,
  (t.cO = ["resume_maker", "headshots", "question_bank"]),
  (t.B1 = i.QUESTION_BANK_WITHDRAWN ? ["resume_maker", "headshots"] : t.cO),
  (t.Y = {
    resume_maker: "Resume Maker",
    headshots: "Headshots",
    question_bank: i.QUESTION_BANK_WITHDRAWN
      ? "Interview Questions"
      : "Question Bank",
  }),
  (t.X_ = [
    "subscription_weekly",
    "subscription_monthly",
    "subscription_yearly",
  ]),
  (t.Z$ = ["prepare_monthly", "prepare_yearly"]),
  t.X_,
  t.Z$;
(0, o.calculatePeriodSavings)(
  "custom_resume_maker_monthly",
  "custom_resume_maker_quarterly",
  3,
);
(0, o.calculatePeriodSavings)(
  "subscription_monthly",
  "subscription_yearly",
  12,
),
  i.QUESTION_BANK_WITHDRAWN,
  i.QUESTION_BANK_WITHDRAWN,
  (0, o.calculatePeriodSavings)("prepare_monthly", "prepare_yearly", 12),
  t.Y.resume_maker,
  t.Y.resume_maker,
  t.Y.headshots,
  t.Y.headshots,
  t.Y.question_bank,
  i.QUESTION_BANK_WITHDRAWN,
  t.Y.question_bank,
  i.QUESTION_BANK_WITHDRAWN;
