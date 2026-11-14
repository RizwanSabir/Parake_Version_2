// app/components/typography-variants.js — webpack module 34483
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
  (t.typographyVariants = void 0),
  (t.Typography = function (e) {
    const t = (0, l.c)(20);
    let n, r, o, i, a, u, f, h, m, g;
    return (
      t[0] !== e
        ? (({
            className: n,
            variant: u,
            truncate: a,
            relative: o,
            render: i,
            ...r
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
        ? ((f = i ?? (0, s.jsx)("span", {})), (t[7] = i), (t[8] = f))
        : (f = t[8]),
      t[9] !== n || t[10] !== o || t[11] !== a || t[12] !== u
        ? ((h = (0, d.cn)(p({ variant: u, truncate: a, relative: o }), n)),
          (t[9] = n),
          (t[10] = o),
          (t[11] = a),
          (t[12] = u),
          (t[13] = h))
        : (h = t[13]),
      t[14] !== r || t[15] !== h
        ? ((m = { "data-slot": "typography", className: h, ...r }),
          (t[14] = r),
          (t[15] = h),
          (t[16] = m))
        : (m = t[16]),
      t[17] !== f || t[18] !== m
        ? ((g = { render: f, props: m }), (t[17] = f), (t[18] = m), (t[19] = g))
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
  p = (0, u.cva)("", {
    variants: {
      variant: {
        heading:
          "font-(family-name:--font-display) text-(length:--typography-heading-font-size) leading-(--typography-heading-line-height) font-(--typography-heading-font-weight)",
        title:
          "font-(family-name:--font-display) text-(length:--typography-title-font-size) leading-(--typography-title-line-height) font-(--typography-title-font-weight)",
        "title-sm":
          "font-(family-name:--font-display) text-(length:--typography-title-sm-font-size) leading-(--typography-title-sm-line-height) font-(--typography-title-sm-font-weight)",
        body: "text-(length:--typography-body-font-size) leading-(--typography-body-line-height)",
        meta: "font-(family-name:--font-ui) text-(length:--typography-meta-font-size) leading-(--typography-meta-line-height)",
        label:
          "font-(family-name:--font-ui) text-(length:--typography-label-font-size) leading-(--typography-label-line-height) font-(--typography-label-font-weight)",
        overline:
          "font-(family-name:--font-ui) text-(length:--typography-overline-font-size) leading-(--typography-overline-line-height) font-(--typography-overline-font-weight) uppercase",
        h1: "[font-family:var(--typography-h1-font-family)] [font-size:var(--typography-h1-font-size)] lg:[font-size:var(--typography-h1-font-size-lg)] [line-height:var(--typography-h1-line-height)] [font-weight:var(--typography-h1-font-weight)] [letter-spacing:var(--typography-h1-letter-spacing)]",
        h2: "[font-family:var(--typography-h2-font-family)] [font-size:var(--typography-h2-font-size)] [line-height:var(--typography-h2-line-height)] [font-weight:var(--typography-h2-font-weight)] [letter-spacing:var(--typography-h2-letter-spacing)]",
        h3: "[font-family:var(--typography-h3-font-family)] [font-size:var(--typography-h3-font-size)] [line-height:var(--typography-h3-line-height)] [font-weight:var(--typography-h3-font-weight)] [letter-spacing:var(--typography-h3-letter-spacing)]",
        h4: "[font-family:var(--typography-h4-font-family)] [font-size:var(--typography-h4-font-size)] [line-height:var(--typography-h4-line-height)] [font-weight:var(--typography-h4-font-weight)] [letter-spacing:var(--typography-h4-letter-spacing)]",
        p: "[font-family:var(--typography-p-font-family)] [font-size:var(--typography-p-font-size)] [line-height:var(--typography-p-line-height)] [font-weight:var(--typography-p-font-weight)] [letter-spacing:var(--typography-p-letter-spacing)]",
        blockquote:
          "[font-family:var(--typography-blockquote-font-family)] [font-size:var(--typography-blockquote-font-size)] [line-height:var(--typography-blockquote-line-height)] [font-weight:var(--typography-blockquote-font-weight)] [letter-spacing:var(--typography-blockquote-letter-spacing)] [font-style:var(--typography-blockquote-font-style)]",
        list: "[font-family:var(--typography-list-font-family)] [font-size:var(--typography-list-font-size)] [line-height:var(--typography-list-line-height)] [font-weight:var(--typography-list-font-weight)] [letter-spacing:var(--typography-list-letter-spacing)]",
        "inline-code":
          "[font-family:var(--typography-inline-code-font-family)] [font-size:var(--typography-inline-code-font-size)] [line-height:var(--typography-inline-code-line-height)] [font-weight:var(--typography-inline-code-font-weight)] [letter-spacing:var(--typography-inline-code-letter-spacing)]",
        lead: "[font-family:var(--typography-lead-font-family)] [font-size:var(--typography-lead-font-size)] [line-height:var(--typography-lead-line-height)] [font-weight:var(--typography-lead-font-weight)] [letter-spacing:var(--typography-lead-letter-spacing)]",
        large:
          "[font-family:var(--typography-large-font-family)] [font-size:var(--typography-large-font-size)] [line-height:var(--typography-large-line-height)] [font-weight:var(--typography-large-font-weight)] [letter-spacing:var(--typography-large-letter-spacing)]",
        small:
          "[font-family:var(--typography-small-font-family)] [font-size:var(--typography-small-font-size)] [line-height:var(--typography-small-line-height)] [font-weight:var(--typography-small-font-weight)] [letter-spacing:var(--typography-small-letter-spacing)]",
        table:
          "[font-family:var(--typography-table-font-family)] [font-size:var(--typography-table-font-size)] [font-weight:var(--typography-table-font-weight)] [letter-spacing:var(--typography-table-letter-spacing)]",
      },
      truncate: { true: "-my-0.5 block truncate py-0.5", false: "" },
      relative: { true: "", false: "" },
    },
    compoundVariants: [
      {
        variant: "title-sm",
        relative: !0,
        class: "text-[1em] leading-[1.5]",
      },
      {
        variant: "meta",
        relative: !0,
        class: "text-[0.875em] leading-none",
      },
      {
        variant: "label",
        relative: !0,
        class: "text-[0.75em] leading-none",
      },
    ],
    defaultVariants: { variant: "body", truncate: !1, relative: !1 },
  });
t.typographyVariants = p;
