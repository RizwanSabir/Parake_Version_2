// app/components/separator-74422.js — webpack module 74422
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
Object.defineProperty(t, "__esModule", { value: !0 }), (t.Separator = void 0);
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = a(n(14041 /* vendor/module-14041 */)),
  u = n(68571 /* app/components/separator */),
  d = n(29113 /* vendor/module-29113 */),
  p = c.forwardRef((e, t) => {
    const n = (0, l.c)(12);
    let r, o, i;
    n[0] !== e
      ? (({ orientation: i, className: r, ...o } = e),
        (n[0] = e),
        (n[1] = r),
        (n[2] = o),
        (n[3] = i))
      : ((r = n[1]), (o = n[2]), (i = n[3]));
    const a = void 0 === i ? "vertical" : i,
      c = "horizontal" === a ? "h-0.5 w-4" : "h-4 w-0.5";
    let p, f;
    return (
      n[4] !== r || n[5] !== c
        ? ((p = (0, d.cn)("bg-black/12 dark:bg-white/12", c, r)),
          (n[4] = r),
          (n[5] = c),
          (n[6] = p))
        : (p = n[6]),
      n[7] !== a || n[8] !== o || n[9] !== t || n[10] !== p
        ? ((f = (0, s.jsx)(u.Separator, {
            ref: t,
            orientation: a,
            className: p,
            ...o,
          })),
          (n[7] = a),
          (n[8] = o),
          (n[9] = t),
          (n[10] = p),
          (n[11] = f))
        : (f = n[11]),
      f
    );
  });
(t.Separator = p), (p.displayName = "Separator");
