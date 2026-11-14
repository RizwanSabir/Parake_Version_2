// app/components/app-warning.js — webpack module 51912
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
  i =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t,
          });
        }
      : function (e, t) {
          e.default = t;
        }),
  a =
    (this && this.__importStar) ||
    ((r = function (e) {
      return (
        (r =
          Object.getOwnPropertyNames ||
          function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t;
          }),
        r(e)
      );
    }),
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n = r(e), a = 0; a < n.length; a++)
          "default" !== n[a] && o(t, e, n[a]);
      return i(t, e), t;
    });
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.AppWarning = function (e) {
    const t = (0, l.c)(31);
    let n, r, o, i, a, d, p, f, h, m, g, y, v, b, S, _;
    return (
      t[0] !== e
        ? (({
            icon: n,
            title: d,
            description: i,
            actions: r,
            className: o,
            ...a
          } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o),
          (t[4] = i),
          (t[5] = a),
          (t[6] = d))
        : ((n = t[1]),
          (r = t[2]),
          (o = t[3]),
          (i = t[4]),
          (a = t[5]),
          (d = t[6])),
      t[7] !== o
        ? ((p = (0, c.cn)(
            "border-border bg-accent-warning @container border-b",
            o,
          )),
          (t[7] = o),
          (t[8] = p))
        : (p = t[8]),
      t[9] !== n
        ? ((f = (0, s.jsx)(n, {
            className: "text-foreground mt-0.5 size-4 shrink-0 @xl:mt-0",
          })),
          (t[9] = n),
          (t[10] = f))
        : (f = t[10]),
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, s.jsx)("p", {})), (t[11] = h))
        : (h = t[11]),
      t[12] !== d
        ? ((m = (0, s.jsx)(u.Typography, {
            variant: "title-sm",
            className: "leading-none",
            render: h,
            children: d,
          })),
          (t[12] = d),
          (t[13] = m))
        : (m = t[13]),
      t[14] !== i
        ? ((g = (0, s.jsx)(u.Typography, {
            variant: "body",
            className: "text-muted-foreground",
            children: i,
          })),
          (t[14] = i),
          (t[15] = g))
        : (g = t[15]),
      t[16] !== m || t[17] !== g
        ? ((y = (0, s.jsxs)("div", {
            className: "flex min-w-0 flex-col gap-1.5",
            children: [m, g],
          })),
          (t[16] = m),
          (t[17] = g),
          (t[18] = y))
        : (y = t[18]),
      t[19] !== f || t[20] !== y
        ? ((v = (0, s.jsxs)("div", {
            className: "flex min-w-0 items-start gap-3 @xl:items-center",
            children: [f, y],
          })),
          (t[19] = f),
          (t[20] = y),
          (t[21] = v))
        : (v = t[21]),
      t[22] !== r
        ? ((b =
            r &&
            (0, s.jsx)("div", {
              className:
                "flex shrink-0 flex-wrap items-center gap-2 @max-xl:*:flex-1",
              children: r,
            })),
          (t[22] = r),
          (t[23] = b))
        : (b = t[23]),
      t[24] !== v || t[25] !== b
        ? ((S = (0, s.jsxs)("div", {
            className:
              "flex flex-col gap-3 p-5 @xl:flex-row @xl:items-center @xl:justify-between",
            children: [v, b],
          })),
          (t[24] = v),
          (t[25] = b),
          (t[26] = S))
        : (S = t[26]),
      t[27] !== a || t[28] !== p || t[29] !== S
        ? ((_ = (0, s.jsx)("div", {
            "data-slot": "app-warning",
            className: p,
            ...a,
            children: S,
          })),
          (t[27] = a),
          (t[28] = p),
          (t[29] = S),
          (t[30] = _))
        : (_ = t[30]),
      _
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */)),
  u = n(34483 /* app/components/typography-variants */);
