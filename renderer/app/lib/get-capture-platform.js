// app/lib/get-capture-platform.js — webpack module 96364
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.desktopVoicePlatform = function (e) {
    const { uploadFiles: t } = (0, o.genUploader)({
      url: `${e}/api/uploadthing`,
      package: "uploadthing/client",
      fetch: a.desktopFetch,
    });
    return {
      workletUrl: s.default,
      brandName: (0, i.getBrand)().name,
      privacyPolicyUrl: `${e}/privacy-policy`,
      getCapturePlatform: () => "desktopApp",
      uploadVoiceSample: (e, n) =>
        t("voiceSampleUploader", { files: [e], input: n }),
    };
  });
const o = n(5071 /* vendor/module-5071 */),
  i = n(74920 /* app/lib/apply-brand-attribute */),
  a = n(33445 /* app/lib/desktop-fetch */),
  s = r(n(59946 /* vendor/module-59946 */));
