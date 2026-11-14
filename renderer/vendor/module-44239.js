// vendor/module-44239.js — webpack module 44239
// params: (e, t) = (module, exports, require)
"use strict";
(t.DOCUMENT_SELECTION_MODE_VALUES =
  t.RESPONSE_TONE_SELECTABLE_VALUES =
  t.RESPONSE_FORMAT_PRESENTATION_ORDER =
  t.ADVANCED_MODELS_PICKER_OPTION =
  t.AI_MODEL_SELECTABLE_VALUES =
  t.j =
  t.AI_MODEL_RECOMMENDED_VALUES =
  t.RESPONSE_FORMAT_VALUES =
  t.RESPONSE_TONE_VALUES =
  t.RESPONSE_LENGTH_VALUES =
  t.AI_MODEL_VALUES =
  t.SESSION_MODE_VALUES =
    void 0),
  (t.aiModelPickerGroups = function (e) {
    const n = t.AI_MODEL_SELECTABLE_VALUES.includes(e);
    return {
      recommended: t.AI_MODEL_RECOMMENDED_VALUES,
      advanced: n ? t.j : [e, ...t.j],
    };
  }),
  (t.SESSION_MODE_VALUES = ["interview", "regular_call"]),
  (t.AI_MODEL_VALUES = [
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-5",
    "gpt-5-mini",
    "claude-sonnet-4-5",
    "claude-haiku-4-5",
    "cerebras-gpt-oss-120b",
    "gemini-3-1-flash-lite",
    "gemini-3-5-flash",
    "gemini-3-5-flash-lite",
    "gemini-3-6-flash",
    "gpt-5-6-luna",
    "gpt-5-6-terra",
    "claude-sonnet-5",
    "claude-opus-5",
    "gpt-5-6-sol",
  ]),
  (t.RESPONSE_LENGTH_VALUES = ["concise", "balanced", "detailed"]),
  (t.RESPONSE_TONE_VALUES = ["formal", "casual", "simple"]),
  (t.RESPONSE_FORMAT_VALUES = ["bullets", "balanced", "paragraph"]),
  (t.AI_MODEL_RECOMMENDED_VALUES = ["gemini-3-5-flash-lite", "gpt-5-6-luna"]),
  (t.j = [
    "gemini-3-6-flash",
    "gpt-5-6-terra",
    "claude-haiku-4-5",
    "claude-sonnet-5",
  ]),
  (t.AI_MODEL_SELECTABLE_VALUES = [...t.AI_MODEL_RECOMMENDED_VALUES, ...t.j]),
  (t.ADVANCED_MODELS_PICKER_OPTION = "advanced-models"),
  (t.RESPONSE_FORMAT_PRESENTATION_ORDER = ["paragraph", "balanced", "bullets"]),
  (t.RESPONSE_TONE_SELECTABLE_VALUES = ["simple", "formal"]),
  (t.DOCUMENT_SELECTION_MODE_VALUES = ["all", "none", "custom"]);
