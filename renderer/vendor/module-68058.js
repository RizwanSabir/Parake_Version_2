// vendor/module-68058.js — webpack module 68058
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.aiModelPickerBands =
    t.aiModelLogoKey =
    t.aiModelTtftMs =
    t.aiModelNameMap =
      void 0),
  (t.speedLabel = i),
  (t.aiModelSpeedLabel = a),
  (t.aiModelPickerNote = function (e) {
    return e === r.DEFAULT_AI_MODEL
      ? "Recommended"
      : o.AI_MODEL_RECOMMENDED_VALUES.includes(e)
        ? "Fast"
        : a(e);
  }),
  (t.aiModelLogoClassName = function (e) {
    return s[t.aiModelLogoKey[e]];
  });
const r = n(64642 /* vendor/module-64642 */),
  o = n(44239 /* vendor/module-44239 */);
function i(e) {
  return e > 2400
    ? "Extremely Slow"
    : e > 1600
      ? "Very Slow"
      : e > 800
        ? "Slow"
        : void 0;
}
function a(e) {
  const n = t.aiModelTtftMs[e];
  return null == n ? void 0 : i(n);
}
(t.aiModelNameMap = {
  "gpt-4.1": "GPT-4.1",
  "gpt-4.1-mini": "GPT-4.1 Mini",
  "gpt-5": "GPT-5.6 Terra",
  "gpt-5-mini": "GPT-5.6 Luna",
  "claude-sonnet-4-5": "Claude Sonnet 5",
  "claude-haiku-4-5": "Claude 4.5 Haiku",
  "cerebras-gpt-oss-120b": "GPT OSS 120B (Cerebras)",
  "gemini-3-1-flash-lite": "Gemini 3.1 Flash Lite",
  "gemini-3-5-flash": "Gemini 3.5 Flash",
  "gemini-3-5-flash-lite": "Gemini 3.5 Flash Lite",
  "gemini-3-6-flash": "Gemini 3.6 Flash",
  "gpt-5-6-luna": "GPT-5.6 Luna",
  "gpt-5-6-terra": "GPT-5.6 Terra",
  "claude-sonnet-5": "Claude Sonnet 5",
  "claude-opus-5": "Claude Opus 5",
  "gpt-5-6-sol": "GPT-5.6 Terra",
}),
  (t.aiModelTtftMs = {
    "gpt-4.1": null,
    "gpt-4.1-mini": 448,
    "gpt-5": 506,
    "gpt-5-mini": 550,
    "claude-sonnet-4-5": 1774,
    "claude-haiku-4-5": 1208,
    "cerebras-gpt-oss-120b": null,
    "gemini-3-1-flash-lite": 387,
    "gemini-3-5-flash": null,
    "gemini-3-5-flash-lite": 474,
    "gemini-3-6-flash": 758,
    "gpt-5-6-luna": 550,
    "gpt-5-6-terra": 506,
    "claude-sonnet-5": 1774,
    "claude-opus-5": 1554,
    "gpt-5-6-sol": 506,
  }),
  (t.aiModelLogoKey = {
    "gpt-4.1": "openai",
    "gpt-4.1-mini": "openai",
    "gpt-5": "openai",
    "gpt-5-mini": "openai",
    "claude-sonnet-4-5": "anthropic",
    "claude-haiku-4-5": "anthropic",
    "cerebras-gpt-oss-120b": "openai",
    "gemini-3-1-flash-lite": "google",
    "gemini-3-5-flash": "google",
    "gemini-3-5-flash-lite": "google",
    "gemini-3-6-flash": "google",
    "gpt-5-6-luna": "openai",
    "gpt-5-6-terra": "openai",
    "claude-sonnet-5": "anthropic",
    "claude-opus-5": "anthropic",
    "gpt-5-6-sol": "openai",
  });
const s = { openai: "dark:invert", anthropic: "", google: "" };
t.aiModelPickerBands = [
  {
    heading: "Fastest",
    models: ["gemini-3-5-flash-lite", "gpt-5-6-luna", "gemini-3-6-flash"],
  },
  { heading: "Balanced", models: ["gpt-5-6-terra"] },
  {
    heading: "Most capable",
    models: ["claude-haiku-4-5", "claude-sonnet-5"],
  },
];
