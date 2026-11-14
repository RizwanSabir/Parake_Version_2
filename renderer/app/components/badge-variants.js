// app/components/badge-variants.js — webpack module 92735
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
  (t.badgeVariants = t.badgeTones = void 0),
  (t.Badge = function (e) {
    const t = (0, l.c)(20);
    let n, r, o, i, a, u, p, h, m, g;
    return (
      t[0] !== e
        ? (({
            className: n,
            shape: a,
            variant: u,
            highlighted: r,
            render: i,
            ...o
          } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o),
          (t[4] = i),
          (t[5] = a),
          (t[6] = u))
        : ((n = t[1]),
          (r = t[2]),
          (o = t[3]),
          (i = t[4]),
          (a = t[5]),
          (u = t[6])),
      t[7] !== i
        ? ((p = i ?? (0, s.jsx)("span", {})), (t[7] = i), (t[8] = p))
        : (p = t[8]),
      t[9] !== n || t[10] !== r || t[11] !== a || t[12] !== u
        ? ((h = (0, d.cn)(f({ shape: a, variant: u, highlighted: r }), n)),
          (t[9] = n),
          (t[10] = r),
          (t[11] = a),
          (t[12] = u),
          (t[13] = h))
        : (h = t[13]),
      t[14] !== o || t[15] !== h
        ? ((m = { "data-slot": "badge", className: h, ...o }),
          (t[14] = o),
          (t[15] = h),
          (t[16] = m))
        : (m = t[16]),
      t[17] !== p || t[18] !== m
        ? ((g = { render: p, props: m }), (t[17] = p), (t[18] = m), (t[19] = g))
        : (g = t[19]),
      (0, c.useRender)(g)
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(62038 /* vendor/module-62038 */),
  u = n(1279 /* vendor/module-1279 */),
  d =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */)),
  p = {
    muted: "border-border bg-muted text-muted-foreground",
    primary: "border-primary/40 bg-primary/15 text-primary",
    ready:
      "border-ready-pill-stroke bg-ready-pill-background text-ready-pill-text",
    warning: "border-warning/40 bg-warning/15 text-warning",
    error: "border-error/40 bg-error/15 text-error",
    gold: "border-transparent bg-gold-card shadow-gold-ring text-gold-ink",
  };
t.badgeTones = p;
const f = (0, u.cva)(
  "inline-flex items-center justify-center border px-2 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-ring aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error transition-[color,box-shadow,border-color] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-foreground text-background [a&]:hover:bg-foreground/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-error text-white [a&]:hover:bg-error/90 dark:bg-error/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ...p,
      },
      shape: {
        pill: "rounded-(--radius-item) py-0.5",
        corner:
          "rounded-none rounded-bl-(--radius-item) border-t-0 border-r-0 border-b-border border-l-border py-1",
      },
      highlighted: {
        true: "ring-foreground ring-1 transition-[background-color,box-shadow] duration-300",
        false: "transition-[background-color,box-shadow] duration-300",
      },
    },
    defaultVariants: { shape: "pill", variant: "default" },
  },
);
t.badgeVariants = f;
