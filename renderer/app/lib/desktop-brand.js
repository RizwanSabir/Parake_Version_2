// app/lib/desktop-brand.js — webpack module 43286
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.DESKTOP_BRAND = t.BUILD_BRAND = void 0),
  (t.deepLinkScheme = function (e, t) {
    return (0, r.brandUrlScheme)(e.id, { local: !t });
  });
const r = n(81592 /* app/lib/brands */),
  o = {
    parakeetai: {
      appId: "org.parakeetai.ParakeetAI",
      packageName: "parakeetai-desktop",
      assets: [
        "branded-icon.*",
        "logo*.png",
        "permissions/*.png",
        "trayIcon/**",
      ],
      installerIcons: {
        mac: "assets/branded-icon.icns",
        win: "assets/branded-icon.ico",
      },
      trayIcon: "trayIcon",
      legacyDevSchemes: ["parakeetai", "parakeetai-dev"],
    },
    codeboss: {
      appId: "com.codeboss.CodeBoss",
      packageName: "codeboss-desktop",
      assets: ["codeboss/**"],
      installerIcons: {
        mac: "assets/codeboss/installer-icon.icns",
        win: "assets/codeboss/installer-icon.ico",
      },
      trayIcon: "codeboss/trayIcon",
      legacyDevSchemes: [],
    },
  };
(t.BUILD_BRAND = (0, r.resolveBuildBrand)("parakeetai")),
  (t.DESKTOP_BRAND = (function (e) {
    const t = r.BRANDS[e].desktopReleases;
    return {
      ...o[e],
      id: e,
      name: r.BRANDS[e].name,
      websiteHost: (0, r.brandDisplayDomain)(e),
      urlScheme: (0, r.brandUrlScheme)(e, { local: !1 }),
      updateFeed: t && { provider: "github", ...t },
    };
  })(t.BUILD_BRAND));
