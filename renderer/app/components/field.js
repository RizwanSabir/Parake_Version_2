// app/components/field.js — webpack module 98134
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Field = function (e) {
    const t = (0, i.c)(11);
    let n, r, a;
    t[0] !== e
      ? (({ className: n, orientation: a, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : ((n = t[1]), (r = t[2]), (a = t[3]));
    const l = void 0 === a ? "vertical" : a;
    let c, d;
    return (
      t[4] !== n || t[5] !== l
        ? ((c = (0, s.cn)(u({ orientation: l }), n)),
          (t[4] = n),
          (t[5] = l),
          (t[6] = c))
        : (c = t[6]),
      t[7] !== l || t[8] !== r || t[9] !== c
        ? ((d = (0, o.jsx)("div", {
            role: "group",
            "data-slot": "field",
            "data-orientation": l,
            className: c,
            ...r,
          })),
          (t[7] = l),
          (t[8] = r),
          (t[9] = c),
          (t[10] = d))
        : (d = t[10]),
      d
    );
  }),
  (t.FieldLabel = function (e) {
    const t = (0, i.c)(10);
    let n, r, a, c, u;
    return (
      t[0] !== e
        ? (({ className: n, variant: a, ...r } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a))
        : ((n = t[1]), (r = t[2]), (a = t[3])),
      t[4] !== n || t[5] !== a
        ? ((c = (0, s.cn)(d({ variant: a }), n)),
          (t[4] = n),
          (t[5] = a),
          (t[6] = c))
        : (c = t[6]),
      t[7] !== r || t[8] !== c
        ? ((u = (0, o.jsx)(l.Label, {
            "data-slot": "field-label",
            className: c,
            ...r,
          })),
          (t[7] = r),
          (t[8] = c),
          (t[9] = u))
        : (u = t[9]),
      u
    );
  }),
  (t.FieldDescription = function (e) {
    const t = (0, i.c)(8);
    let n, r, a, l;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((a = (0, s.cn)(
            "text-muted-foreground text-sm leading-5 font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
            "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
            "[&>a:hover]:text-foreground [&>a]:underline [&>a]:underline-offset-4",
            n,
          )),
          (t[3] = n),
          (t[4] = a))
        : (a = t[4]),
      t[5] !== r || t[6] !== a
        ? ((l = (0, o.jsx)("p", {
            "data-slot": "field-description",
            className: a,
            ...r,
          })),
          (t[5] = r),
          (t[6] = a),
          (t[7] = l))
        : (l = t[7]),
      l
    );
  }),
  (t.FieldError = function (e) {
    const t = (0, i.c)(15);
    let n, r, a, l, c;
    t[0] !== e
      ? (({ className: r, children: n, errors: a, ...l } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a),
        (t[4] = l))
      : ((n = t[1]), (r = t[2]), (a = t[3]), (l = t[4]));
    e: {
      if (n) {
        c = n;
        break e;
      }
      if (!a?.length) {
        c = null;
        break e;
      }
      if (1 === a.length && a[0]?.message) {
        c = a[0].message;
        break e;
      }
      let e, r;
      t[5] !== a ? ((e = a.map(p)), (t[5] = a), (t[6] = e)) : (e = t[6]),
        t[7] !== e
          ? ((r = (0, o.jsx)("ul", {
              className: "ml-4 flex list-disc flex-col gap-1",
              children: e,
            })),
            (t[7] = e),
            (t[8] = r))
          : (r = t[8]),
        (c = r);
    }
    const u = c;
    if (!u) return null;
    let d, f;
    return (
      t[9] !== r
        ? ((d = (0, s.cn)("text-error text-sm font-normal", r)),
          (t[9] = r),
          (t[10] = d))
        : (d = t[10]),
      t[11] !== u || t[12] !== l || t[13] !== d
        ? ((f = (0, o.jsx)("div", {
            role: "alert",
            "data-slot": "field-error",
            className: d,
            ...l,
            children: u,
          })),
          (t[11] = u),
          (t[12] = l),
          (t[13] = d),
          (t[14] = f))
        : (f = t[14]),
      f
    );
  }),
  (t.FieldGroup = function (e) {
    const t = (0, i.c)(8);
    let n, r, a, l;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((a = (0, s.cn)(
            "group/field-group @container/field-group flex w-full flex-col gap-7 [&>[data-slot=field-group]]:gap-4",
            n,
          )),
          (t[3] = n),
          (t[4] = a))
        : (a = t[4]),
      t[5] !== r || t[6] !== a
        ? ((l = (0, o.jsx)("div", {
            "data-slot": "field-group",
            className: a,
            ...r,
          })),
          (t[5] = r),
          (t[6] = a),
          (t[7] = l))
        : (l = t[7]),
      l
    );
  }),
  (t.FieldLegend = function (e) {
    const t = (0, i.c)(10);
    let n, r, a;
    t[0] !== e
      ? (({ className: n, variant: a, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : ((n = t[1]), (r = t[2]), (a = t[3]));
    const l = void 0 === a ? "legend" : a;
    let c, u;
    return (
      t[4] !== n
        ? ((c = (0, s.cn)(
            "mb-3 font-medium",
            "data-[variant=legend]:text-base",
            "data-[variant=label]:text-sm",
            n,
          )),
          (t[4] = n),
          (t[5] = c))
        : (c = t[5]),
      t[6] !== r || t[7] !== c || t[8] !== l
        ? ((u = (0, o.jsx)("legend", {
            "data-slot": "field-legend",
            "data-variant": l,
            className: c,
            ...r,
          })),
          (t[6] = r),
          (t[7] = c),
          (t[8] = l),
          (t[9] = u))
        : (u = t[9]),
      u
    );
  }),
  (t.FieldSeparator = function (e) {
    const t = (0, i.c)(14);
    let n, r, a;
    t[0] !== e
      ? (({ children: n, className: r, ...a } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : ((n = t[1]), (r = t[2]), (a = t[3]));
    const l = !!n;
    let u, d, p, f;
    return (
      t[4] !== r
        ? ((u = (0, s.cn)(
            "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
            r,
          )),
          (t[4] = r),
          (t[5] = u))
        : (u = t[5]),
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, o.jsx)(c.Separator, {
            className: "absolute inset-0 top-1/2",
          })),
          (t[6] = d))
        : (d = t[6]),
      t[7] !== n
        ? ((p =
            n &&
            (0, o.jsx)("span", {
              className:
                "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
              "data-slot": "field-separator-content",
              children: n,
            })),
          (t[7] = n),
          (t[8] = p))
        : (p = t[8]),
      t[9] !== a || t[10] !== l || t[11] !== u || t[12] !== p
        ? ((f = (0, o.jsxs)("div", {
            "data-slot": "field-separator",
            "data-content": l,
            className: u,
            ...a,
            children: [d, p],
          })),
          (t[9] = a),
          (t[10] = l),
          (t[11] = u),
          (t[12] = p),
          (t[13] = f))
        : (f = t[13]),
      f
    );
  }),
  (t.FieldSet = function (e) {
    const t = (0, i.c)(8);
    let n, r, a, l;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((a = (0, s.cn)(
            "flex flex-col gap-6",
            "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
            n,
          )),
          (t[3] = n),
          (t[4] = a))
        : (a = t[4]),
      t[5] !== r || t[6] !== a
        ? ((l = (0, o.jsx)("fieldset", {
            "data-slot": "field-set",
            className: a,
            ...r,
          })),
          (t[5] = r),
          (t[6] = a),
          (t[7] = l))
        : (l = t[7]),
      l
    );
  }),
  (t.FieldContent = function (e) {
    const t = (0, i.c)(8);
    let n, r, a, l;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((a = (0, s.cn)(
            "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
            n,
          )),
          (t[3] = n),
          (t[4] = a))
        : (a = t[4]),
      t[5] !== r || t[6] !== a
        ? ((l = (0, o.jsx)("div", {
            "data-slot": "field-content",
            className: a,
            ...r,
          })),
          (t[5] = r),
          (t[6] = a),
          (t[7] = l))
        : (l = t[7]),
      l
    );
  }),
  (t.FieldTitle = function (e) {
    const t = (0, i.c)(8);
    let n, r, a, l;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((a = (0, s.cn)(
            "flex w-fit items-center gap-2 text-sm leading-none font-medium group-data-[disabled=true]/field:opacity-50",
            n,
          )),
          (t[3] = n),
          (t[4] = a))
        : (a = t[4]),
      t[5] !== r || t[6] !== a
        ? ((l = (0, o.jsx)("div", {
            "data-slot": "field-title",
            className: a,
            ...r,
          })),
          (t[5] = r),
          (t[6] = a),
          (t[7] = l))
        : (l = t[7]),
      l
    );
  });
const o = n(31085 /* vendor/module-31085 */),
  i = n(54005 /* vendor/module-54005 */),
  a = n(1279 /* vendor/module-1279 */),
  s =
    (r(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */)),
  l = n(47856 /* app/components/label */),
  c = n(68571 /* app/components/separator */),
  u = (0, a.cva)(
    "group/field data-[invalid=true]:text-error flex w-full gap-2",
    {
      variants: {
        orientation: {
          vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
          horizontal: [
            "flex-row items-center",
            "[&>[data-slot=field-label]]:flex-auto [&>[data-slot=field-title]]:flex-auto",
            "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start",
          ],
          responsive: [
            "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto",
            "@md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:[&>[data-slot=field-title]]:flex-auto",
            "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
          ],
        },
      },
      defaultVariants: { orientation: "vertical" },
    },
  ),
  d = (0, a.cva)(
    "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-focus-visible:[&>[data-slot=field]]:outline-ring has-focus-visible:[&>[data-slot=field]]:outline-2 has-focus-visible:[&>[data-slot=field]]:outline-offset-2 has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:cursor-pointer has-[>[data-slot=field]]:flex-col [&>[data-slot=field]]:rounded-(--radius-surface) [&>[data-slot=field]]:border [&>[data-slot=field]]:border-border [&>[data-slot=field]]:bg-background [&>[data-slot=field]]:gap-4 [&>[data-slot=field]]:px-3 [&>[data-slot=field]]:py-4 [&_[data-slot=field-content]]:gap-1 [&_[data-slot=field-description]]:leading-none",
    {
      variants: {
        variant: {
          default: "has-data-[checked]:[&>[data-slot=field]]:border-foreground",
          destructive:
            "has-data-[checked]:[&>[data-slot=field]]:bg-error-foreground has-data-[checked]:[&>[data-slot=field]]:border-error dark:has-data-[checked]:[&>[data-slot=field]]:bg-error/10 has-data-[unchecked]:[&>[data-slot=field]]:border-error/50",
        },
      },
      defaultVariants: { variant: "default" },
    },
  );
function p(e, t) {
  return e?.message && (0, o.jsx)("li", { children: e.message }, t);
}
