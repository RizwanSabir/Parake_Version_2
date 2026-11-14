// app/components/logo.js — webpack module 55233
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Logo = function ({
    className: e,
    height: t = 32,
    noText: n,
    square: r,
    white: a,
    onClick: s,
  }) {
    const l = (0, d.useBrand)(),
      c = r ? p.square : n ? p.circle : a ? p.white : p.default,
      u = c === p.default ? p.defaultWhite : c,
      f = (n, r) =>
        (0, o.jsx)("img", {
          src: n.src,
          alt: l.name,
          draggable: !1,
          className: (0, i.cn)("w-auto select-none", e, r),
          style: {
            height: t,
            width: Math.round((n.width / n.height) * t),
          },
          onClick: s,
        });
    return "codeboss" === l.id
      ? c === p.circle
        ? (0, o.jsx)("span", {
            className: (0, i.cn)("flex items-center justify-center", e),
            style: { width: t, height: t },
            children: (0, o.jsx)("img", {
              src: l.mark,
              alt: l.name,
              draggable: !1,
              className: "w-auto select-none",
              style: { height: Math.round(t / 2) },
              onClick: s,
            }),
          })
        : r
          ? (0, o.jsx)("img", {
              src: l.mark,
              alt: l.name,
              draggable: !1,
              className: (0, i.cn)("h-auto select-none", e),
              style: { width: Math.round((c.width / c.height) * t) },
              onClick: s,
            })
          : (0, o.jsx)("span", {
              className: (0, i.cn)("inline-flex items-center", e),
              style: { height: t },
              children: (0, o.jsx)("img", {
                src: l.logo,
                alt: l.name,
                draggable: !1,
                className: "w-auto select-none",
                style: { height: Math.round(0.75 * t) },
                onClick: s,
              }),
            })
      : u === c
        ? f(c)
        : (0, o.jsxs)(o.Fragment, {
            children: [f(c, "dark:hidden"), f(u, "hidden dark:block")],
          });
  });
const o = n(31085 /* vendor/module-31085 */),
  i = n(29113 /* vendor/module-29113 */),
  a = r(n(97434 /* vendor/module-97434 */)),
  s = r(n(20997 /* vendor/module-20997 */)),
  l = r(n(45986 /* vendor/module-45986 */)),
  c = r(n(17543 /* vendor/module-17543 */)),
  u = r(n(42695 /* vendor/module-42695 */)),
  d = n(74920 /* app/lib/apply-brand-attribute */),
  p = {
    circle: { src: a.default, width: 256, height: 256 },
    square: { src: s.default, width: 256, height: 256 },
    white: { src: l.default, width: 1019, height: 256 },
    defaultWhite: { src: c.default, width: 4173, height: 1024 },
    default: { src: u.default, width: 1044, height: 256 },
  };
