// vendor/module-37167.js — webpack module 37167
// params: (e, t) = (module, exports, require)
"use strict";
(t.responseToneMeta = t.responseFormatMeta = t.responseLengthMeta = void 0),
  (t.honorsFillerWords = function (e) {
    return "paragraph" === e;
  }),
  (t.sameResponseStyle = function (e, t) {
    return (
      e.responseLength === t.responseLength &&
      e.responseFormat === t.responseFormat &&
      e.responseTone === t.responseTone &&
      e.useStarMethod === t.useStarMethod &&
      e.useFillerWords === t.useFillerWords
    );
  }),
  (t.responseLengthMeta = {
    concise: {
      label: "Short",
      description: "Quick answer with only the essentials.",
    },
    balanced: {
      label: "Balanced",
      description: "Core answer with useful context.",
    },
    detailed: {
      label: "Long",
      description: "More explanation and supporting detail.",
    },
  }),
  (t.responseFormatMeta = {
    bullets: {
      label: "Bullet points",
      description: "Short bullets you can say in your own words.",
    },
    balanced: {
      label: "Script + bullets",
      description: "Opening line, then supporting bullets.",
    },
    paragraph: {
      label: "Full script",
      description: "An answer you can read word for word.",
    },
  }),
  (t.responseToneMeta = {
    formal: {
      label: "Formal",
      description: "Precise, professional wording.",
    },
    casual: {
      label: "Casual",
      description: "Relaxed and conversational.",
    },
    simple: {
      label: "Simple",
      description: "Plain words, no jargon.",
    },
  });
