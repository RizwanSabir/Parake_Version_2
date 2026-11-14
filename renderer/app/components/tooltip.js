// app/components/tooltip.js — webpack module 58055
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
  (t.Tooltip = function (e) {
    const t = (0, l.c)(19);
    let n, r, o, i;
    t[0] !== e
      ? (({ open: r, defaultOpen: i, onOpenChange: n, ...o } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i))
      : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4]));
    const a = void 0 !== i && i,
      [d, f] = u.useState(a),
      h = r ?? d;
    let m, g;
    t[5] !== o
      ? ((m = () => {
          o.disabled || f(!0);
        }),
        (t[5] = o),
        (t[6] = m))
      : (m = t[6]),
      t[7] !== h || t[8] !== m
        ? ((g = { open: h, openFromTouch: m }),
          (t[7] = h),
          (t[8] = m),
          (t[9] = g))
        : (g = t[9]);
    const y = g;
    let v, b, S;
    return (
      t[10] !== n
        ? ((v = (e, t) => {
            f(e), n?.(e, t);
          }),
          (t[10] = n),
          (t[11] = v))
        : (v = t[11]),
      t[12] !== h || t[13] !== o || t[14] !== v
        ? ((b = (0, s.jsx)(c.Tooltip.Root, {
            "data-slot": "tooltip",
            open: h,
            onOpenChange: v,
            ...o,
          })),
          (t[12] = h),
          (t[13] = o),
          (t[14] = v),
          (t[15] = b))
        : (b = t[15]),
      t[16] !== y || t[17] !== b
        ? ((S = (0, s.jsx)(p.Provider, { value: y, children: b })),
          (t[16] = y),
          (t[17] = b),
          (t[18] = S))
        : (S = t[18]),
      S
    );
  }),
  (t.TooltipTrigger = function (e) {
    const t = (0, l.c)(15);
    let n, r, o;
    t[0] !== e
      ? (({ onPointerDown: r, onClick: n, ...o } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o))
      : ((n = t[1]), (r = t[2]), (o = t[3]));
    const i = u.useContext(p),
      a = u.useRef(null);
    let d, f, h;
    return (
      t[4] !== r || t[5] !== i
        ? ((d = (e) => {
            r?.(e),
              (a.current =
                "touch" === e.pointerType && i ? { wasOpen: i.open } : null);
          }),
          (t[4] = r),
          (t[5] = i),
          (t[6] = d))
        : (d = t[6]),
      t[7] !== n || t[8] !== o || t[9] !== i
        ? ((f = (e) => {
            n?.(e);
            const t = a.current;
            (a.current = null),
              !t ||
                t.wasOpen ||
                o.disabled ||
                (e.preventBaseUIHandler(), i?.openFromTouch());
          }),
          (t[7] = n),
          (t[8] = o),
          (t[9] = i),
          (t[10] = f))
        : (f = t[10]),
      t[11] !== o || t[12] !== d || t[13] !== f
        ? ((h = (0, s.jsx)(c.Tooltip.Trigger, {
            "data-slot": "tooltip-trigger",
            onPointerDown: d,
            onClick: f,
            ...o,
          })),
          (t[11] = o),
          (t[12] = d),
          (t[13] = f),
          (t[14] = h))
        : (h = t[14]),
      h
    );
  }),
  (t.TooltipContent = function (e) {
    const t = (0, l.c)(20);
    let n, r, o, i, a, u, p;
    t[0] !== e
      ? (({
          className: r,
          side: i,
          sideOffset: a,
          align: u,
          alignOffset: p,
          children: n,
          ...o
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i),
        (t[5] = a),
        (t[6] = u),
        (t[7] = p))
      : ((n = t[1]),
        (r = t[2]),
        (o = t[3]),
        (i = t[4]),
        (a = t[5]),
        (u = t[6]),
        (p = t[7]));
    const f = void 0 === i ? "top" : i,
      h = void 0 === a ? 4 : a,
      m = void 0 === u ? "center" : u,
      g = void 0 === p ? 0 : p;
    let y, v, b;
    return (
      t[8] !== r
        ? ((y = (0, d.cn)(
            "bg-foreground text-background data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-(--radius-item) px-3 py-1.5 text-xs duration-(--duration-fast) ease-(--ease-out-strong) has-data-[slot=kbd]:pr-1.5 data-closed:duration-(--duration-exit-fast) **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm",
            r,
          )),
          (t[8] = r),
          (t[9] = y))
        : (y = t[9]),
      t[10] !== n || t[11] !== o || t[12] !== y
        ? ((v = (0, s.jsx)(c.Tooltip.Popup, {
            "data-slot": "tooltip-content",
            className: y,
            ...o,
            children: n,
          })),
          (t[10] = n),
          (t[11] = o),
          (t[12] = y),
          (t[13] = v))
        : (v = t[13]),
      t[14] !== m || t[15] !== g || t[16] !== f || t[17] !== h || t[18] !== v
        ? ((b = (0, s.jsx)(c.Tooltip.Portal, {
            children: (0, s.jsx)(c.Tooltip.Positioner, {
              align: m,
              alignOffset: g,
              side: f,
              sideOffset: h,
              className: "isolate z-50",
              children: v,
            }),
          })),
          (t[14] = m),
          (t[15] = g),
          (t[16] = f),
          (t[17] = h),
          (t[18] = v),
          (t[19] = b))
        : (b = t[19]),
      b
    );
  }),
  (t.TooltipProvider = function (e) {
    const t = (0, l.c)(6);
    let n, r;
    t[0] !== e
      ? (({ delay: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r))
      : ((n = t[1]), (r = t[2]));
    const o = void 0 === r ? 0 : r;
    let i;
    return (
      t[3] !== o || t[4] !== n
        ? ((i = (0, s.jsx)(c.Tooltip.Provider, {
            "data-slot": "tooltip-provider",
            delay: o,
            ...n,
          })),
          (t[3] = o),
          (t[4] = n),
          (t[5] = i))
        : (i = t[5]),
      i
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(82155 /* vendor/module-82155 */),
  u = a(n(14041 /* vendor/module-14041 */)),
  d = n(29113 /* vendor/module-29113 */),
  p = u.createContext(null);
