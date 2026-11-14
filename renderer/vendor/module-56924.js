// vendor/module-56924.js — webpack module 56924
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.maxTouchPoints = t.lowerUserAgent = t.lowerPlatform = void 0);
const {
  userAgent: n,
  platform: r,
  maxTouchPoints: o,
} = "undefined" == typeof navigator
  ? { userAgent: "", platform: "", maxTouchPoints: 0 }
  : {
      userAgent: navigator.userAgent,
      platform: navigator.platform ?? "",
      maxTouchPoints: navigator.maxTouchPoints ?? 0,
    };
(t.maxTouchPoints = o),
  (t.lowerUserAgent = n.toLowerCase()),
  (t.lowerPlatform = r.toLowerCase());
