// vendor/module-7445.js — webpack module 7445
// params: (e, t, n) = (module, exports, require)
"use strict";
t.selectPreview = function (e, t) {
  const n = (function (e) {
    return o.RESPONSE_TONE_SELECTABLE_VALUES.includes(e) ? e : "formal";
  })(t.responseTone);
  if (t.useFillerWords && (0, r.honorsFillerWords)(t.responseFormat)) {
    const r = (t.useStarMethod ? (e.starFillers ?? e.fillers) : e.fillers)[
      t.responseLength
    ][n];
    if (r) return r;
  }
  return (t.useStarMethod ? (e.star ?? e.base) : e.base)[t.responseFormat][
    t.responseLength
  ][n];
};
const r = n(37167 /* vendor/module-37167 */),
  o = n(44239 /* vendor/module-44239 */);
