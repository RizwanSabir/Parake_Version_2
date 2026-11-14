// vendor/module-13466.js — webpack module 13466
// params: (e, t, n) = (module, exports, require)
"use strict";
t.loadCategoryPreviews = async function (e) {
  const t = e === r.STAR_PREVIEW_CATEGORY;
  return {
    base: x[e],
    star: t ? a.behavioralStar : null,
    fillers: w[e],
    starFillers: t ? s.behavioralStarFillers : null,
  };
};
const r = n(62656 /* vendor/module-62656 */),
  o = n(32900 /* vendor/module-32900 */),
  i = n(18925 /* vendor/module-18925 */),
  a = n(77888 /* vendor/module-77888 */),
  s = n(72209 /* vendor/module-72209 */),
  l = n(41917 /* vendor/module-41917 */),
  c = n(77622 /* vendor/module-77622 */),
  u = n(30967 /* vendor/module-30967 */),
  d = n(76352 /* vendor/module-76352 */),
  p = n(44897 /* vendor/module-44897 */),
  f = n(56578 /* vendor/module-56578 */),
  h = n(35194 /* vendor/module-35194 */),
  m = n(94075 /* vendor/module-94075 */),
  g = n(31484 /* vendor/module-31484 */),
  y = n(68581 /* vendor/module-68581 */),
  v = n(86950 /* vendor/module-86950 */),
  b = n(43231 /* vendor/module-43231 */),
  S = n(24180 /* vendor/module-24180 */),
  _ = n(96989 /* vendor/module-96989 */),
  x = {
    behavioral: o.behavioral,
    coding: l.coding,
    "experience-check": u.experienceCheck,
    "how-do-you": p.howDoYou,
    situational: h.situational,
    "system-design": g.systemDesign,
    "technical-knowledge": v.technicalKnowledge,
    "tell-me-about-yourself": S.tellMeAboutYourself,
  },
  w = {
    behavioral: i.behavioralFillers,
    coding: c.codingFillers,
    "experience-check": d.experienceCheckFillers,
    "how-do-you": f.howDoYouFillers,
    situational: m.situationalFillers,
    "system-design": y.systemDesignFillers,
    "technical-knowledge": b.technicalKnowledgeFillers,
    "tell-me-about-yourself": _.tellMeAboutYourselfFillers,
  };
