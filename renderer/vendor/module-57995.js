// vendor/module-57995.js — webpack module 57995
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.ANSWER_STYLE_STEPS = void 0),
  (t.optionMeta = function (e, t) {
    return e.options[t];
  });
const r = n(37167 /* vendor/module-37167 */),
  o = n(44239 /* vendor/module-44239 */);
t.ANSWER_STYLE_STEPS = [
  {
    field: "responseFormat",
    tab: "Format",
    heading: "How should answers be presented?",
    subheading: "Choose the format that fits how you want to answer.",
    values: o.RESPONSE_FORMAT_PRESENTATION_ORDER,
    options: r.responseFormatMeta,
  },
  {
    field: "responseLength",
    tab: "Length",
    heading: "How long should answers be?",
    subheading: "Shorter answers appear faster during live calls.",
    values: o.RESPONSE_LENGTH_VALUES,
    options: r.responseLengthMeta,
  },
  {
    field: "responseTone",
    tab: "Tone",
    heading: "How should the answers sound?",
    subheading: "Choose the tone used when generating answers.",
    values: o.RESPONSE_TONE_SELECTABLE_VALUES,
    options: r.responseToneMeta,
  },
];
