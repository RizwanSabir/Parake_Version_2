// app/components/button-variants.js — webpack module 66244
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.buttonVariants = void 0),
  (t.Button = d),
  (t.inferNativeButton = p),
  (t.unwrapLazyRenderElement = h);
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(83864 /* vendor/module-83864 */),
  a = n(1279 /* vendor/module-1279 */),
  s = n(14041 /* vendor/module-14041 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(15201 /* app/components/spinner */),
  u = (0, a.cva)(
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-(--radius-button) text-sm font-medium transition-[scale,transform,color,background-color,border-color,box-shadow,opacity] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-ring aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error",
    {
      variants: {
        variant: {
          default:
            "bg-foreground text-background shadow-(--shadow-control) hover:bg-foreground/90",
          brand:
            "bg-primary text-primary-foreground-neutral shadow-(--shadow-control) hover:bg-primary/90",
          destructive:
            "bg-error text-error-foreground shadow-(--shadow-control) hover:bg-error/90 dark:bg-error",
          "destructive-outline":
            "border border-error/40 bg-background text-error shadow-(--shadow-control) hover:bg-error/10 dark:bg-input/30 dark:border-error/50 dark:hover:bg-error/15",
          outline:
            "border bg-background text-foreground shadow-(--shadow-control) hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          "outline-solid":
            "border bg-background text-foreground shadow-(--shadow-control) hover:bg-accent hover:text-accent-foreground dark:border-input",
          secondary:
            "bg-secondary text-secondary-foreground shadow-(--shadow-control) hover:bg-secondary/80",
          selected:
            "border border-ready-pill-stroke bg-ready-pill-background text-ready-pill-text shadow-(--shadow-control) hover:bg-ready-pill-background/80",
          ghost:
            "hover:bg-accent hover:[background-image:linear-gradient(var(--color-hover),var(--color-hover))] hover:text-accent-foreground disabled:text-muted-foreground",
          "ghost-muted":
            "text-muted-foreground hover:bg-accent hover:[background-image:linear-gradient(var(--color-hover),var(--color-hover))] hover:text-accent-foreground",
          glass:
            "border border-[0.5px] border-black/6 bg-neutral-100 text-neutral-900 shadow-(--shadow-control) hover:bg-neutral-200 dark:border-white/6 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-950",
          "glass-quiet":
            "border border-[0.5px] border-black/6 bg-neutral-100/60 text-neutral-900 shadow-(--shadow-control) hover:bg-neutral-200 dark:border-white/6 dark:bg-neutral-900/60 dark:text-white dark:hover:bg-neutral-950",
          row: "w-full justify-start rounded-none text-left font-normal select-none hover:bg-accent active:scale-100 disabled:text-muted-foreground",
          link: "text-foreground underline-offset-4 hover:underline disabled:text-muted-foreground",
          "link-muted":
            "text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
          "gold-foot":
            "bg-gold-card text-gold-card-ink relative isolate overflow-hidden rounded-none shadow-[inset_0_1px_0_var(--gold-ring)] hover:shadow-[inset_0_1px_0_var(--gold-ring-strong)] active:scale-100",
        },
        size: {
          default: "h-(--control-h-md) px-4 py-2 has-[>svg]:px-3",
          sm: "h-(--control-h-sm) gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-(--control-h-lg) px-6 has-[>svg]:px-4",
          xl: "h-(--control-h-xl) px-6 has-[>svg]:pl-3 has-[>svg]:pr-4",
          "2xl": "h-(--control-h-2xl) px-5",
          row: "h-auto gap-1 p-2",
          icon: "size-(--control-h-md)",
          "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
          "icon-control-sm": "size-(--control-h-sm)",
          "icon-lg":
            "size-(--control-h-lg) [&_svg:not([class*='size-'])]:size-5",
          "icon-xl":
            "size-(--control-h-xl) [&_svg:not([class*='size-'])]:size-5",
          trailing: "h-(--control-h-sm) gap-0 pl-2.5 pr-0 -mr-1.5",
        },
        focus: {
          ring: "",
          outline:
            "focus-visible:outline-foreground focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        focus: "ring",
      },
    },
  );
function d(e) {
  const t = (0, o.c)(41);
  let n, a, s, d, f, m, g, y, v, b, S, _, x, w, E;
  if (
    (t[0] !== e
      ? (({
          className: a,
          variant: b,
          size: v,
          focus: d,
          render: y,
          nativeButton: m,
          loading: f,
          disabled: s,
          children: n,
          ...g
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = a),
        (t[3] = s),
        (t[4] = d),
        (t[5] = f),
        (t[6] = m),
        (t[7] = g),
        (t[8] = y),
        (t[9] = v),
        (t[10] = b))
      : ((n = t[1]),
        (a = t[2]),
        (s = t[3]),
        (d = t[4]),
        (f = t[5]),
        (m = t[6]),
        (g = t[7]),
        (y = t[8]),
        (v = t[9]),
        (b = t[10])),
    t[11] !== n || t[12] !== f || t[13] !== m || t[14] !== y)
  ) {
    const e = h(y);
    let o;
    t[20] !== n || t[21] !== f
      ? ((o =
          void 0 !== n || f
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  n,
                  f &&
                    (0, r.jsx)(c.Spinner, {
                      "data-slot": "button-spinner",
                      className: "order-first",
                    }),
                ],
              })
            : void 0),
        (t[20] = n),
        (t[21] = f),
        (t[22] = o))
      : (o = t[22]),
      (_ = o),
      (S = i.Button),
      (x = "button"),
      (w = e),
      (E = m ?? p(e)),
      (t[11] = n),
      (t[12] = f),
      (t[13] = m),
      (t[14] = y),
      (t[15] = S),
      (t[16] = _),
      (t[17] = x),
      (t[18] = w),
      (t[19] = E);
  } else (S = t[15]), (_ = t[16]), (x = t[17]), (w = t[18]), (E = t[19]);
  const T = s || f;
  let k, C, I;
  return (
    t[23] !== a || t[24] !== d || t[25] !== f || t[26] !== v || t[27] !== b
      ? ((k = (0, l.cn)(
          u({ variant: b, size: v, focus: d, className: a }),
          f && "transform-gpu [&_img]:hidden [&_svg]:hidden",
        )),
        (t[23] = a),
        (t[24] = d),
        (t[25] = f),
        (t[26] = v),
        (t[27] = b),
        (t[28] = k))
      : (k = t[28]),
    t[29] !== _
      ? ((C = void 0 === _ ? {} : { children: _ }), (t[29] = _), (t[30] = C))
      : (C = t[30]),
    t[31] !== S ||
    t[32] !== f ||
    t[33] !== g ||
    t[34] !== x ||
    t[35] !== w ||
    t[36] !== E ||
    t[37] !== T ||
    t[38] !== k ||
    t[39] !== C
      ? ((I = (0, r.jsx)(S, {
          "data-slot": x,
          render: w,
          nativeButton: E,
          disabled: T,
          "aria-busy": f,
          className: k,
          ...g,
          ...C,
        })),
        (t[31] = S),
        (t[32] = f),
        (t[33] = g),
        (t[34] = x),
        (t[35] = w),
        (t[36] = E),
        (t[37] = T),
        (t[38] = k),
        (t[39] = C),
        (t[40] = I))
      : (I = t[40]),
    I
  );
}
function p(e) {
  if (!(0, s.isValidElement)(e)) return !0;
  const t = e.props.nativeButton;
  return "boolean" == typeof t ? t : "button" === e.type || e.type === d;
}
t.buttonVariants = u;
const f = Symbol.for("react.lazy");
function h(e) {
  const t = e?.$$typeof;
  if (t !== f) return e;
  const n = s.Children.toArray(e)[0];
  return (0, s.isValidElement)(n) ? n : e;
}
