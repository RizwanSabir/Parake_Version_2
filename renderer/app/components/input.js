// app/components/input.js — webpack module 91722
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
  (t.Input = function (e) {
    const t = (0, l.c)(12);
    let n, r, o, i;
    t[0] !== e
      ? (({ className: n, type: i, surface: o, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i))
      : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4]));
    const a =
      "bare" === o &&
      "rounded-none border-0 bg-transparent shadow-none dark:bg-transparent";
    let u, d;
    return (
      t[5] !== n || t[6] !== a
        ? ((u = (0, c.cn)(
            "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input phone:h-(--control-h-lg) phone:leading-normal flex h-(--control-h-md) w-full min-w-0 rounded-(--radius-control) border bg-transparent px-3 py-1 text-sm shadow-(--shadow-control) transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            "focus-visible:border-ring",
            "aria-invalid:border-error aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40",
            a,
            n,
          )),
          (t[5] = n),
          (t[6] = a),
          (t[7] = u))
        : (u = t[7]),
      t[8] !== r || t[9] !== u || t[10] !== i
        ? ((d = (0, s.jsx)("input", {
            type: i,
            "data-slot": "input",
            autoComplete: "off",
            className: u,
            ...r,
          })),
          (t[8] = r),
          (t[9] = u),
          (t[10] = i),
          (t[11] = d))
        : (d = t[11]),
      d
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */));
