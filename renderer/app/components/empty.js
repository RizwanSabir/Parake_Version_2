// app/components/empty.js — webpack module 8905
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
  (t.Empty = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, u.cn)(
            "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-(--radius-surface) border-dashed p-6 text-center text-balance",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "empty",
            className: o,
            ...r,
          })),
          (t[5] = r),
          (t[6] = o),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }),
  (t.EmptyHeader = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, u.cn)("flex max-w-sm flex-col items-center gap-2", n)),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "empty-header",
            className: o,
            ...r,
          })),
          (t[5] = r),
          (t[6] = o),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }),
  (t.EmptyTitle = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, u.cn)("text-sm font-medium tracking-tight", n)),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "empty-title",
            className: o,
            ...r,
          })),
          (t[5] = r),
          (t[6] = o),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }),
  (t.EmptyDescription = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, u.cn)(
            "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "empty-description",
            className: o,
            ...r,
          })),
          (t[5] = r),
          (t[6] = o),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }),
  (t.EmptyContent = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, u.cn)(
            "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "empty-content",
            className: o,
            ...r,
          })),
          (t[5] = r),
          (t[6] = o),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }),
  (t.EmptyMedia = function (e) {
    const t = (0, l.c)(11);
    let n, r, o;
    t[0] !== e
      ? (({ className: n, variant: o, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o))
      : ((n = t[1]), (r = t[2]), (o = t[3]));
    const i = void 0 === o ? "default" : o;
    let a, c;
    return (
      t[4] !== n || t[5] !== i
        ? ((a = (0, u.cn)(d({ variant: i, className: n }))),
          (t[4] = n),
          (t[5] = i),
          (t[6] = a))
        : (a = t[6]),
      t[7] !== r || t[8] !== a || t[9] !== i
        ? ((c = (0, s.jsx)("div", {
            "data-slot": "empty-icon",
            "data-variant": i,
            className: a,
            ...r,
          })),
          (t[7] = r),
          (t[8] = a),
          (t[9] = i),
          (t[10] = c))
        : (c = t[10]),
      c
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(1279 /* vendor/module-1279 */),
  u =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */)),
  d = (0, c.cva)(
    "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-transparent",
          icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4",
          glyph:
            "text-muted-foreground/70 size-7 [&_svg]:size-7 [&_svg]:stroke-[1.25]",
          pixel:
            "text-primary [display:var(--empty-glyph-pixel)]! [&_svg]:size-12",
        },
      },
      defaultVariants: { variant: "default" },
    },
  );
