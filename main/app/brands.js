// app/brands.js — webpack module 38591
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.BRANDS = t.DEFAULT_BRAND = t.$K = void 0),
  (t.resolveBuildBrand = function (e) {
    if (!e) return t.DEFAULT_BRAND;
    if (
      (function (e) {
        return t.$K.some((t) => t === e);
      })(e)
    )
      return e;
    throw new Error(`BRAND must be one of ${t.$K.join(", ")}; got "${e}"`);
  }),
  (t.brandUrlScheme = function (e, { local: t }) {
    return t ? `${e}-local` : e;
  }),
  (t.brandOrigin = function (e, n, r = 3e3) {
    const o = t.BRANDS[e].domains[n];
    return "development" === n ? `http://${o}:${r}` : `https://${o}`;
  }),
  (t.brandDisplayDomain = function (e) {
    return t.BRANDS[e].domains.production.replace(/^www\./, "");
  }),
  (t.$K = ["parakeetai", "codeboss"]),
  (t.DEFAULT_BRAND = "parakeetai");
const n = "code-boss.com";
t.BRANDS = {
  parakeetai: {
    id: "parakeetai",
    name: "ParakeetAI",
    spokenAs: ["parakeet A I", "parakeet AI", "parakeet eye"],
    domains: {
      production: "www.parakeet-ai.com",
      staging: "staging.parakeet-ai.com",
      development: "localhost",
      aliases: ["parakeet-ai.com"],
    },
    searchIndexed: !0,
    darkOnly: !1,
    exclusivePaths: [
      "/logo/parakeetai-logos.zip",
      "/landing/privacy/dock/parakeet.svg",
      "/resume-template/template-parakeetai.png",
    ],
    rootFiles: {},
    desktopReleases: {
      owner: "parakeetai",
      repo: "parakeetai-desktop-releases",
    },
  },
  codeboss: {
    id: "codeboss",
    name: "CodeBoss",
    spokenAs: ["code boss"],
    domains: {
      production: `www.${n}`,
      staging: `staging.${n}`,
      development: "codeboss.localhost",
      aliases: [n, "www.codebossai.com", "codebossai.com"],
    },
    searchIndexed: !0,
    darkOnly: !0,
    exclusivePaths: [
      "/codeboss/logo.svg",
      "/codeboss/logo-ink.svg",
      "/codeboss/mark.svg",
      "/codeboss/og-image.png",
      "/codeboss/email-logo.png",
      "/codeboss/favicon.ico",
      "/codeboss/dashboard/dashboard-hero.webp",
      "/codeboss/dashboard/mobile-hero.webp",
      "/codeboss/onboarding/desktop-app.png",
      "/codeboss/onboarding/mobile/desktop-app.png",
    ],
    rootFiles: { "/favicon.ico": "/codeboss/favicon.ico" },
    desktopReleases: {
      owner: "parakeetai",
      repo: "codeboss-desktop-releases",
    },
  },
};
