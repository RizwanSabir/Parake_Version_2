// vendor/module-88623.js — webpack module 88623
// params: (e, t, n) = (module, exports, require)
"use strict";
t.aiModelLogoMap = t.aiModelNameMap = void 0;
const r = n(68058 /* vendor/module-68058 */);
var o = n(68058 /* vendor/module-68058 */);
Object.defineProperty(t, "aiModelNameMap", {
  enumerable: !0,
  get: function () {
    return o.aiModelNameMap;
  },
});
const i = {
  openai: "/integrations/ai-model-logo-openai.png",
  anthropic: "/integrations/ai-model-logo-anthropic.png",
  google: "/integrations/ai-model-logo-google.png",
};
t.aiModelLogoMap = Object.fromEntries(
  Object.keys(r.aiModelLogoKey).map((e) => [e, i[r.aiModelLogoKey[e]]]),
);
