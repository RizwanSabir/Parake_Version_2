// app/lib/apply-brand-attribute.js — webpack module 74920
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.applyBrandAttribute = function () {
    const e = (0, o.brandDataAttribute)(h.BUILD_BRAND);
    e && (document.documentElement.dataset.brand = e);
  }),
  (t.getBrand = g),
  (t.useBrand = function () {
    return g();
  });
const o = n(81592 /* app/lib/brands */),
  i = r(n(83116 /* vendor/module-83116 */)),
  a = r(n(11210 /* vendor/module-11210 */)),
  s = r(n(10506 /* vendor/module-10506 */)),
  l = r(n(47656 /* vendor/module-47656 */)),
  c = r(n(97434 /* vendor/module-97434 */)),
  u = r(n(42695 /* vendor/module-42695 */)),
  d = r(n(61649 /* vendor/module-61649 */)),
  p = r(n(74707 /* vendor/module-74707 */)),
  f = r(n(63137 /* vendor/module-63137 */)),
  h = n(43286 /* app/lib/desktop-brand */),
  m = {
    parakeetai: {
      ...o.BRANDS.parakeetai,
      logo: u.default,
      mark: c.default,
      permissionScreenshots: {
        "screen-audio": { macos: p.default, windows: null },
        microphone: { macos: d.default, windows: f.default },
      },
    },
    codeboss: {
      ...o.BRANDS.codeboss,
      logo: i.default,
      mark: a.default,
      permissionScreenshots: {
        "screen-audio": { macos: l.default, windows: null },
        microphone: { macos: s.default, windows: f.default },
      },
    },
  };
function g() {
  return m[h.BUILD_BRAND];
}
