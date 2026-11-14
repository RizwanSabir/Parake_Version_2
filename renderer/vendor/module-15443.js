// vendor/module-15443.js — webpack module 15443
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.windows = t.mac = t.linux = t.ios = t.apple = t.android = void 0);
var r = n(56924 /* vendor/module-56924 */);
const o = (t.ios =
    /^i(os$|p)/.test(r.lowerPlatform) ||
    ("macintel" === r.lowerPlatform && r.maxTouchPoints > 1)),
  i = "android",
  a = (t.android = r.lowerPlatform === i || r.lowerUserAgent.includes(i)),
  s = (t.mac = !o && r.lowerPlatform.startsWith("mac"));
(t.windows = r.lowerPlatform.startsWith("win")),
  (t.linux = !a && /^(linux|chrome os)/.test(r.lowerPlatform)),
  (t.apple = s || o);
