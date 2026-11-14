// app/components/drawer.js — webpack module 6207
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
  (t.Drawer = function (e) {
    const t = (0, l.c)(19);
    let n, r, o, i, a;
    t[0] !== e
      ? (({
          modal: o,
          showSwipeHandle: i,
          snapPoints: r,
          swipeDirection: a,
          ...n
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i),
        (t[5] = a))
      : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4]), (a = t[5]));
    const u = void 0 === o || o,
      d = void 0 !== i && i,
      p = void 0 === a ? "down" : a,
      f = null != r && r.length > 0;
    let m, g, y;
    return (
      t[6] !== f || t[7] !== u || t[8] !== d || t[9] !== p
        ? ((m = {
            hasSnapPoints: f,
            modal: u,
            showSwipeHandle: d,
            swipeDirection: p,
          }),
          (t[6] = f),
          (t[7] = u),
          (t[8] = d),
          (t[9] = p),
          (t[10] = m))
        : (m = t[10]),
      t[11] !== u || t[12] !== n || t[13] !== r || t[14] !== p
        ? ((g = (0, s.jsx)(c.Drawer.Root, {
            "data-slot": "drawer",
            modal: u,
            snapPoints: r,
            swipeDirection: p,
            ...n,
          })),
          (t[11] = u),
          (t[12] = n),
          (t[13] = r),
          (t[14] = p),
          (t[15] = g))
        : (g = t[15]),
      t[16] !== m || t[17] !== g
        ? ((y = (0, s.jsx)(h.Provider, { value: m, children: g })),
          (t[16] = m),
          (t[17] = g),
          (t[18] = y))
        : (y = t[18]),
      y
    );
  }),
  (t.DrawerPortal = m),
  (t.DrawerOverlay = g),
  (t.DrawerSwipeHandle = y),
  (t.DrawerTrigger = function (e) {
    const t = (0, l.c)(11);
    let n, r, o, i, a;
    return (
      t[0] !== e
        ? (({ render: o, nativeButton: n, ...r } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o))
        : ((n = t[1]), (r = t[2]), (o = t[3])),
      t[4] !== n || t[5] !== o
        ? ((i = n ?? (0, p.inferNativeButton)(o)),
          (t[4] = n),
          (t[5] = o),
          (t[6] = i))
        : (i = t[6]),
      t[7] !== r || t[8] !== o || t[9] !== i
        ? ((a = (0, s.jsx)(c.Drawer.Trigger, {
            "data-slot": "drawer-trigger",
            render: o,
            nativeButton: i,
            ...r,
          })),
          (t[7] = r),
          (t[8] = o),
          (t[9] = i),
          (t[10] = a))
        : (a = t[10]),
      a
    );
  }),
  (t.DrawerClose = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Drawer.Close, {
            "data-slot": "drawer-close",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DrawerContent = function (e) {
    const t = (0, l.c)(32);
    let n, r, o, i, a, p;
    t[0] !== e
      ? (({
          className: r,
          children: n,
          surface: i,
          fill: a,
          fullScreen: p,
          ...o
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i),
        (t[5] = a),
        (t[6] = p))
      : ((n = t[1]),
        (r = t[2]),
        (o = t[3]),
        (i = t[4]),
        (a = t[5]),
        (p = t[6]));
    const f = void 0 === i ? "background" : i,
      v = void 0 !== a && a,
      b = void 0 !== p && p,
      {
        hasSnapPoints: S,
        modal: _,
        showSwipeHandle: x,
        swipeDirection: w,
      } = (function () {
        const e = u.useContext(h);
        if (!e) throw new Error("useDrawer must be used within a Drawer.");
        return e;
      })(),
      E = "down" === w || "up" === w ? "y" : "x";
    let T;
    t[7] !== S || t[8] !== _
      ? ((T =
          !0 === _ && (0, s.jsx)(g, { "data-snap-points": S ? "" : void 0 })),
        (t[7] = S),
        (t[8] = _),
        (t[9] = T))
      : (T = t[9]);
    const k = S ? "" : void 0,
      C =
        "sidebar" === f
          ? "bg-sidebar [--drawer-bleed-background:var(--color-sidebar)]"
          : "bg-background",
      I = v
        ? "[--drawer-content-height:var(--drawer-content-max-height)]"
        : "[--drawer-content-height:var(--drawer-height,auto)]",
      A =
        b &&
        "pt-[env(safe-area-inset-top)] [--drawer-content-height:100dvh] data-[swipe-axis=y]:[--drawer-content-max-height:100dvh] data-[swipe-direction=down]:rounded-t-none data-[swipe-direction=down]:border-t-0";
    let O, R, M, P, N, D;
    return (
      t[10] !== r || t[11] !== C || t[12] !== I || t[13] !== A
        ? ((O = (0, d.cn)(
            "group/drawer-popup pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none select-none [interpolate-size:allow-keywords] data-[swipe-direction=down]:rounded-t-[3rem] data-[swipe-direction=down]:border-t data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b",
            C,
            "data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95",
            "after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-background)) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full",
            I,
            "data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]",
            A,
            "[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]",
            "data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-ending-style:will-change-transform data-nested-drawer-swiping:duration-0 data-nested-drawer-swiping:will-change-transform data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-swiping:will-change-transform data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
            "data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)",
            "data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row",
            "data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]",
            "data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]",
            "data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]",
            "data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]",
            r,
          )),
          (t[10] = r),
          (t[11] = C),
          (t[12] = I),
          (t[13] = A),
          (t[14] = O))
        : (O = t[14]),
      t[15] !== x
        ? ((R = x && (0, s.jsx)(y, {})), (t[15] = x), (t[16] = R))
        : (R = t[16]),
      t[17] !== n
        ? ((M = (0, s.jsx)(c.Drawer.Content, {
            "data-slot": "drawer-content",
            className:
              "flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none",
            children: n,
          })),
          (t[17] = n),
          (t[18] = M))
        : (M = t[18]),
      t[19] !== o ||
      t[20] !== E ||
      t[21] !== R ||
      t[22] !== M ||
      t[23] !== k ||
      t[24] !== O
        ? ((P = (0, s.jsxs)(c.Drawer.Popup, {
            "data-slot": "drawer-popup",
            "data-swipe-axis": E,
            "data-snap-points": k,
            className: O,
            ...o,
            children: [R, M],
          })),
          (t[19] = o),
          (t[20] = E),
          (t[21] = R),
          (t[22] = M),
          (t[23] = k),
          (t[24] = O),
          (t[25] = P))
        : (P = t[25]),
      t[26] !== _ || t[27] !== P
        ? ((N = (0, s.jsx)(c.Drawer.Viewport, {
            "data-slot": "drawer-viewport",
            "data-modal": _,
            className:
              "pointer-events-none fixed inset-0 z-50 select-none data-[modal=true]:pointer-events-auto",
            children: P,
          })),
          (t[26] = _),
          (t[27] = P),
          (t[28] = N))
        : (N = t[28]),
      t[29] !== N || t[30] !== T
        ? ((D = (0, s.jsxs)(m, {
            "data-slot": "drawer-portal",
            children: [T, N],
          })),
          (t[29] = N),
          (t[30] = T),
          (t[31] = D))
        : (D = t[31]),
      D
    );
  }),
  (t.DrawerHeader = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, d.cn)(
            "flex shrink-0 flex-col gap-2 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "drawer-header",
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
  (t.DrawerFooter = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, d.cn)("mt-auto flex shrink-0 flex-col gap-2 p-4", n)),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("div", {
            "data-slot": "drawer-footer",
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
  (t.DrawerTitle = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, d.cn)(
            (0, f.typographyVariants)({ variant: "title-sm" }),
            "text-foreground",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)(c.Drawer.Title, {
            "data-slot": "drawer-title",
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
  (t.DrawerDescription = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, d.cn)(
            (0, f.typographyVariants)({ variant: "body" }),
            "text-muted-foreground text-balance",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)(c.Drawer.Description, {
            "data-slot": "drawer-description",
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
  (t.DrawerVirtualKeyboardProvider = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Drawer.VirtualKeyboardProvider, {
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(95801 /* vendor/module-95801 */),
  u = a(n(14041 /* vendor/module-14041 */)),
  d = n(29113 /* vendor/module-29113 */),
  p = n(66244 /* app/components/button-variants */),
  f = n(34483 /* app/components/typography-variants */),
  h = u.createContext(null);
function m(e) {
  const t = (0, l.c)(4);
  let n, r;
  return (
    t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
    t[2] !== n
      ? ((r = (0, s.jsx)(c.Drawer.Portal, {
          "data-slot": "drawer-portal",
          ...n,
        })),
        (t[2] = n),
        (t[3] = r))
      : (r = t[3]),
    r
  );
}
function g(e) {
  const t = (0, l.c)(8);
  let n, r, o, i;
  return (
    t[0] !== e
      ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
      : ((n = t[1]), (r = t[2])),
    t[3] !== n
      ? ((o = (0, d.cn)(
          "fixed inset-0 z-50 min-h-dvh bg-black/25 opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-(--ease-drawer) select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-backdrop-filter:backdrop-blur-[2px] supports-[-webkit-touch-callout:none]:absolute",
          n,
        )),
        (t[3] = n),
        (t[4] = o))
      : (o = t[4]),
    t[5] !== r || t[6] !== o
      ? ((i = (0, s.jsx)(c.Drawer.Backdrop, {
          "data-slot": "drawer-overlay",
          className: o,
          ...r,
        })),
        (t[5] = r),
        (t[6] = o),
        (t[7] = i))
      : (i = t[7]),
    i
  );
}
function y(e) {
  const t = (0, l.c)(8);
  let n, r, o, i;
  return (
    t[0] !== e
      ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
      : ((n = t[1]), (r = t[2])),
    t[3] !== n
      ? ((o = (0, d.cn)(
          "relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 active:cursor-grabbing",
          "group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100",
          "group-data-[swipe-axis=y]/drawer-popup:h-4 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center",
          "group-data-[swipe-axis=x]/drawer-popup:h-full group-data-[swipe-axis=x]/drawer-popup:w-4 group-data-[swipe-axis=x]/drawer-popup:items-center",
          "group-data-[swipe-direction=down]/drawer-popup:items-end",
          "group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start",
          "group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=left]/drawer-popup:justify-start",
          "group-data-[swipe-direction=right]/drawer-popup:justify-end",
          "after:bg-border after:block after:shrink-0 after:rounded-full group-data-[swipe-axis=x]/drawer-popup:after:h-16 group-data-[swipe-axis=x]/drawer-popup:after:w-1 group-data-[swipe-axis=y]/drawer-popup:after:h-1 group-data-[swipe-axis=y]/drawer-popup:after:w-16",
          n,
        )),
        (t[3] = n),
        (t[4] = o))
      : (o = t[4]),
    t[5] !== r || t[6] !== o
      ? ((i = (0, s.jsx)("div", {
          "data-slot": "drawer-swipe-handle",
          "aria-hidden": "true",
          className: o,
          ...r,
        })),
        (t[5] = r),
        (t[6] = o),
        (t[7] = i))
      : (i = t[7]),
    i
  );
}
