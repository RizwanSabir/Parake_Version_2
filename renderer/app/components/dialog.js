// app/components/dialog.js — webpack module 98980
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
  (t.Dialog = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Dialog.Root, {
            "data-slot": "dialog",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DialogClose = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Dialog.Close, {
            "data-slot": "dialog-close",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DialogContent = function (e) {
    const t = (0, l.c)(24);
    let n, r, o, i, a, p, f;
    t[0] !== e
      ? (({
          className: r,
          children: n,
          showCloseButton: p,
          size: f,
          surface: a,
          fullScreenOnPhone: o,
          ...i
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i),
        (t[5] = a),
        (t[6] = p),
        (t[7] = f))
      : ((n = t[1]),
        (r = t[2]),
        (o = t[3]),
        (i = t[4]),
        (a = t[5]),
        (p = t[6]),
        (f = t[7]));
    const y = void 0 === p || p,
      v = void 0 === f ? "md" : f;
    let b;
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = (0, s.jsx)(m, {})), (t[8] = b))
      : (b = t[8]);
    const S = g[v],
      _ = "bare" === a && "border-none bg-transparent shadow-none",
      x = "media" === a && "rounded-lg border-none bg-transparent",
      w =
        "viewer" === a &&
        "inset-0 flex h-svh max-h-none w-full max-w-none translate-x-0 translate-y-0 items-center justify-center overflow-visible rounded-none border-none bg-transparent p-0 shadow-none sm:max-w-none",
      E =
        o &&
        "max-sm:data-[closed]:zoom-out-100 max-sm:data-[open]:zoom-in-100 max-sm:rounded-none max-sm:border-0";
    let T;
    t[9] !== r ||
    t[10] !== S ||
    t[11] !== _ ||
    t[12] !== x ||
    t[13] !== w ||
    t[14] !== E
      ? ((T = (0, d.cn)(
          "group/dialog bg-background fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] grid-cols-1 gap-6 overflow-y-auto rounded-(--radius-dialog) border p-6 shadow-(--shadow-overlay) focus-visible:outline-none",
          S,
          "data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 duration-(--duration-base) ease-(--ease-out-strong) data-[closed]:duration-(--duration-exit-base)",
          "motion-reduce:animate-none",
          _,
          x,
          w,
          E,
          r,
        )),
        (t[9] = r),
        (t[10] = S),
        (t[11] = _),
        (t[12] = x),
        (t[13] = w),
        (t[14] = E),
        (t[15] = T))
      : (T = t[15]);
    const k = y ? "" : void 0;
    let C, I;
    return (
      t[16] !== y
        ? ((C =
            y &&
            (0, s.jsxs)(c.Dialog.Close, {
              "data-slot": "dialog-close",
              className:
                "focus-ring data-[open]:bg-accent hover:text-muted-foreground absolute top-4 right-4 rounded-xs transition-colors after:absolute after:-inset-3.5 after:content-[''] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                (0, s.jsx)(u.XIcon, {}),
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            })),
          (t[16] = y),
          (t[17] = C))
        : (C = t[17]),
      t[18] !== n || t[19] !== i || t[20] !== k || t[21] !== C || t[22] !== T
        ? ((I = (0, s.jsxs)(h, {
            children: [
              b,
              (0, s.jsxs)(c.Dialog.Popup, {
                "data-slot": "dialog-content",
                className: T,
                "data-close-button": k,
                ...i,
                children: [n, C],
              }),
            ],
          })),
          (t[18] = n),
          (t[19] = i),
          (t[20] = k),
          (t[21] = C),
          (t[22] = T),
          (t[23] = I))
        : (I = t[23]),
      I
    );
  }),
  (t.DialogDescription = function (e) {
    const t = (0, l.c)(10);
    let n, r, o, i, a;
    return (
      t[0] !== e
        ? (({ className: n, tone: o, ...r } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o))
        : ((n = t[1]), (r = t[2]), (o = t[3])),
      t[4] !== n || t[5] !== o
        ? ((i = (0, d.cn)(
            (0, f.typographyVariants)({ variant: "body" }),
            "error" === o ? "text-error" : "text-muted-foreground",
            n,
          )),
          (t[4] = n),
          (t[5] = o),
          (t[6] = i))
        : (i = t[6]),
      t[7] !== r || t[8] !== i
        ? ((a = (0, s.jsx)(c.Dialog.Description, {
            "data-slot": "dialog-description",
            className: i,
            ...r,
          })),
          (t[7] = r),
          (t[8] = i),
          (t[9] = a))
        : (a = t[9]),
      a
    );
  }),
  (t.DialogFooter = function (e) {
    const t = (0, l.c)(11);
    let n, r, o;
    t[0] !== e
      ? (({ className: n, layout: o, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o))
      : ((n = t[1]), (r = t[2]), (o = t[3]));
    const i = void 0 === o ? "end" : o,
      a = "end" === i && "sm:flex sm:justify-end",
      c =
        "stretch" === i && "sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none";
    let u, p;
    return (
      t[4] !== n || t[5] !== a || t[6] !== c
        ? ((u = (0, d.cn)(
            "grid w-full grid-cols-1 gap-2 sm:items-center [&>*:first-child]:order-last sm:[&>*:first-child]:order-none",
            a,
            c,
            n,
          )),
          (t[4] = n),
          (t[5] = a),
          (t[6] = c),
          (t[7] = u))
        : (u = t[7]),
      t[8] !== r || t[9] !== u
        ? ((p = (0, s.jsx)("div", {
            "data-slot": "dialog-footer",
            className: u,
            ...r,
          })),
          (t[8] = r),
          (t[9] = u),
          (t[10] = p))
        : (p = t[10]),
      p
    );
  }),
  (t.DialogHeader = function (e) {
    const t = (0, l.c)(13);
    let n, r, o;
    t[0] !== e
      ? (({ className: n, align: o, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o))
      : ((n = t[1]), (r = t[2]), (o = t[3]));
    const i = void 0 === o ? "responsive" : o,
      a = "responsive" === i && "text-center sm:text-left",
      c = "center" === i && "text-center",
      u = "start" === i && "text-left";
    let p, f;
    return (
      t[4] !== n || t[5] !== a || t[6] !== c || t[7] !== u
        ? ((p = (0, d.cn)("flex flex-col gap-1", a, c, u, n)),
          (t[4] = n),
          (t[5] = a),
          (t[6] = c),
          (t[7] = u),
          (t[8] = p))
        : (p = t[8]),
      t[9] !== i || t[10] !== r || t[11] !== p
        ? ((f = (0, s.jsx)("div", {
            "data-slot": "dialog-header",
            "data-align": i,
            className: p,
            ...r,
          })),
          (t[9] = i),
          (t[10] = r),
          (t[11] = p),
          (t[12] = f))
        : (f = t[12]),
      f
    );
  }),
  (t.DialogOverlay = m),
  (t.DialogPortal = h),
  (t.DialogTitle = function (e) {
    const t = (0, l.c)(10);
    let n, r, o, i, a;
    return (
      t[0] !== e
        ? (({ className: n, inRow: r, ...o } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o))
        : ((n = t[1]), (r = t[2]), (o = t[3])),
      t[4] !== n || t[5] !== r
        ? ((i = (0, d.cn)(
            (0, f.typographyVariants)({ variant: "title-sm" }),
            "text-foreground",
            !r && [
              "group-data-[close-button]/dialog:pr-8",
              "group-data-[close-button]/dialog:in-data-[align=center]:pl-8",
              "max-sm:group-data-[close-button]/dialog:in-data-[align=responsive]:pl-8",
            ],
            n,
          )),
          (t[4] = n),
          (t[5] = r),
          (t[6] = i))
        : (i = t[6]),
      t[7] !== o || t[8] !== i
        ? ((a = (0, s.jsx)(c.Dialog.Title, {
            "data-slot": "dialog-title",
            className: i,
            ...o,
          })),
          (t[7] = o),
          (t[8] = i),
          (t[9] = a))
        : (a = t[9]),
      a
    );
  }),
  (t.DialogTrigger = function (e) {
    const t = (0, l.c)(16);
    let n, r, o, i, a, u, d, f;
    if (
      (t[0] !== e
        ? (({ render: o, nativeButton: n, ...r } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o))
        : ((n = t[1]), (r = t[2]), (o = t[3])),
      t[4] !== n || t[5] !== o)
    ) {
      const e = (0, p.unwrapLazyRenderElement)(o);
      (i = c.Dialog.Trigger),
        (a = "dialog-trigger"),
        (u = e),
        (d = n ?? (0, p.inferNativeButton)(e)),
        (t[4] = n),
        (t[5] = o),
        (t[6] = i),
        (t[7] = a),
        (t[8] = u),
        (t[9] = d);
    } else (i = t[6]), (a = t[7]), (u = t[8]), (d = t[9]);
    return (
      t[10] !== i || t[11] !== r || t[12] !== a || t[13] !== u || t[14] !== d
        ? ((f = (0, s.jsx)(i, {
            "data-slot": a,
            render: u,
            nativeButton: d,
            ...r,
          })),
          (t[10] = i),
          (t[11] = r),
          (t[12] = a),
          (t[13] = u),
          (t[14] = d),
          (t[15] = f))
        : (f = t[15]),
      f
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(77948 /* vendor/module-77948 */),
  u = n(87952 /* vendor/module-87952 */),
  d =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */)),
  p = n(66244 /* app/components/button-variants */),
  f = n(34483 /* app/components/typography-variants */);
function h(e) {
  const t = (0, l.c)(4);
  let n, r;
  return (
    t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
    t[2] !== n
      ? ((r = (0, s.jsx)(c.Dialog.Portal, {
          "data-slot": "dialog-portal",
          ...n,
        })),
        (t[2] = n),
        (t[3] = r))
      : (r = t[3]),
    r
  );
}
function m(e) {
  const t = (0, l.c)(10);
  let n, r, o;
  t[0] !== e
    ? (({ className: n, forceRender: o, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o))
    : ((n = t[1]), (r = t[2]), (o = t[3]));
  const i = void 0 === o || o;
  let a, u;
  return (
    t[4] !== n
      ? ((a = (0, d.cn)(
          "fixed inset-0 z-50 bg-black/25 backdrop-blur-[2px]",
          "data-[open]:animate-in data-[open]:fade-in-0 data-[open]:duration-(--duration-slow)",
          "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:duration-(--duration-base)",
          "ease-(--ease-out-strong)",
          n,
        )),
        (t[4] = n),
        (t[5] = a))
      : (a = t[5]),
    t[6] !== i || t[7] !== r || t[8] !== a
      ? ((u = (0, s.jsx)(c.Dialog.Backdrop, {
          "data-slot": "dialog-overlay",
          forceRender: i,
          className: a,
          ...r,
        })),
        (t[6] = i),
        (t[7] = r),
        (t[8] = a),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
const g = {
  sm: "sm:max-w-[405px]",
  md: "sm:max-w-lg",
  lg: "sm:max-w-2xl",
};
