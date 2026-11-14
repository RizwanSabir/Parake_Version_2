// app/components/dropdown-menu.js — webpack module 69287
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
  (t.DropdownMenu = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Menu.Root, {
            "data-slot": "dropdown-menu",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DropdownMenuPortal = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Menu.Portal, {
            "data-slot": "dropdown-menu-portal",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DropdownMenuTrigger = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Menu.Trigger, {
            "data-slot": "dropdown-menu-trigger",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DropdownMenuContent = function (e) {
    const t = (0, l.c)(18);
    let n, r, o, i, a, u;
    t[0] !== e
      ? (({
          className: r,
          sideOffset: a,
          side: i,
          align: u,
          alignOffset: n,
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
        (u = t[6]));
    const p = void 0 === a ? 4 : a,
      f = void 0 === u ? "start" : u;
    let h, m, g;
    return (
      t[7] !== r
        ? ((h = (0, d.cn)(
            "bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 phone:shadow-(--shadow-overlay) z-50 min-w-[8rem] origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-(--radius-popup) border p-1 shadow-(--shadow-popup) duration-(--duration-fast) ease-(--ease-out-strong) data-[closed]:duration-(--duration-exit-fast)",
            r,
          )),
          (t[7] = r),
          (t[8] = h))
        : (h = t[8]),
      t[9] !== o || t[10] !== h
        ? ((m = (0, s.jsx)(c.Menu.Popup, {
            "data-slot": "dropdown-menu-content",
            className: h,
            ...o,
          })),
          (t[9] = o),
          (t[10] = h),
          (t[11] = m))
        : (m = t[11]),
      t[12] !== f || t[13] !== n || t[14] !== i || t[15] !== p || t[16] !== m
        ? ((g = (0, s.jsx)(c.Menu.Portal, {
            children: (0, s.jsx)(c.Menu.Positioner, {
              sideOffset: p,
              side: i,
              align: f,
              alignOffset: n,
              className: "z-50 max-h-(--available-height)",
              children: m,
            }),
          })),
          (t[12] = f),
          (t[13] = n),
          (t[14] = i),
          (t[15] = p),
          (t[16] = m),
          (t[17] = g))
        : (g = t[17]),
      g
    );
  }),
  (t.DropdownMenuGroup = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Menu.Group, {
            "data-slot": "dropdown-menu-group",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DropdownMenuLabel = function (e) {
    const t = (0, l.c)(12);
    let n, r, o, i;
    t[0] !== e
      ? (({ className: n, inset: r, variant: i, ...o } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i))
      : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4]));
    const a = "select" === i && "text-muted-foreground text-xs";
    let u, p;
    return (
      t[5] !== n || t[6] !== a
        ? ((u = (0, d.cn)(
            "phone:p-3 phone:data-[inset]:pl-10 px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
            a,
            n,
          )),
          (t[5] = n),
          (t[6] = a),
          (t[7] = u))
        : (u = t[7]),
      t[8] !== r || t[9] !== o || t[10] !== u
        ? ((p = (0, s.jsx)(c.Menu.GroupLabel, {
            "data-slot": "dropdown-menu-label",
            "data-inset": r,
            className: u,
            ...o,
          })),
          (t[8] = r),
          (t[9] = o),
          (t[10] = u),
          (t[11] = p))
        : (p = t[11]),
      p
    );
  }),
  (t.DropdownMenuItem = function (e) {
    const t = (0, l.c)(12);
    let n, r, o, i;
    t[0] !== e
      ? (({ className: n, inset: r, variant: i, ...o } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i))
      : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4]));
    const a = void 0 === i ? "default" : i;
    let u, p;
    return (
      t[5] !== n
        ? ((u = (0, d.cn)(
            "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[variant=destructive]:text-error data-[variant=destructive]:data-[highlighted]:bg-error/10 dark:data-[variant=destructive]:data-[highlighted]:bg-error/20 data-[variant=destructive]:data-[highlighted]:text-error data-[variant=destructive]:*:[svg]:!text-error [&_svg:not([class*='text-'])]:text-muted-foreground phone:gap-3 phone:p-3 phone:data-[inset]:pl-10 relative flex cursor-default items-center gap-2 rounded-(--radius-menu-item) px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            n,
          )),
          (t[5] = n),
          (t[6] = u))
        : (u = t[6]),
      t[7] !== r || t[8] !== o || t[9] !== u || t[10] !== a
        ? ((p = (0, s.jsx)(c.Menu.Item, {
            "data-slot": "dropdown-menu-item",
            "data-inset": r,
            "data-variant": a,
            className: u,
            ...o,
          })),
          (t[7] = r),
          (t[8] = o),
          (t[9] = u),
          (t[10] = a),
          (t[11] = p))
        : (p = t[11]),
      p
    );
  }),
  (t.DropdownMenuCheckboxItem = function (e) {
    const t = (0, l.c)(13);
    let n, r, o, i, a, p, f;
    return (
      t[0] !== e
        ? (({ className: o, children: r, checked: n, ...i } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o),
          (t[4] = i))
        : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4])),
      t[5] !== o
        ? ((a = (0, d.cn)(
            "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground phone:gap-3 phone:py-3 phone:pr-3 phone:pl-10 relative flex cursor-default items-center gap-2 rounded-(--radius-menu-item) py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            o,
          )),
          (t[5] = o),
          (t[6] = a))
        : (a = t[6]),
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, s.jsx)("span", {
            className:
              "phone:left-3 pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: (0, s.jsx)(c.Menu.CheckboxItemIndicator, {
              "data-slot": "dropdown-menu-checkbox-item-indicator",
              children: (0, s.jsx)(u.CheckIcon, {
                className: "size-4",
              }),
            }),
          })),
          (t[7] = p))
        : (p = t[7]),
      t[8] !== n || t[9] !== r || t[10] !== i || t[11] !== a
        ? ((f = (0, s.jsxs)(c.Menu.CheckboxItem, {
            "data-slot": "dropdown-menu-checkbox-item",
            className: a,
            checked: n,
            ...i,
            children: [p, r],
          })),
          (t[8] = n),
          (t[9] = r),
          (t[10] = i),
          (t[11] = a),
          (t[12] = f))
        : (f = t[12]),
      f
    );
  }),
  (t.DropdownMenuRadioGroup = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Menu.RadioGroup, {
            "data-slot": "dropdown-menu-radio-group",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DropdownMenuRadioItem = function (e) {
    const t = (0, l.c)(11);
    let n, r, o, i, a, p;
    return (
      t[0] !== e
        ? (({ className: r, children: n, ...o } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o))
        : ((n = t[1]), (r = t[2]), (o = t[3])),
      t[4] !== r
        ? ((i = (0, d.cn)(
            "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground phone:gap-3 phone:py-3 phone:pr-10 phone:pl-3 relative flex cursor-default items-center gap-2 rounded-(--radius-menu-item) py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            r,
          )),
          (t[4] = r),
          (t[5] = i))
        : (i = t[5]),
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, s.jsx)("span", {
            className:
              "phone:right-3 pointer-events-none absolute right-2 flex size-3.5 items-center justify-center",
            children: (0, s.jsx)(c.Menu.RadioItemIndicator, {
              "data-slot": "dropdown-menu-radio-item-indicator",
              children: (0, s.jsx)(u.CheckIcon, {
                className: "size-4",
              }),
            }),
          })),
          (t[6] = a))
        : (a = t[6]),
      t[7] !== n || t[8] !== o || t[9] !== i
        ? ((p = (0, s.jsxs)(c.Menu.RadioItem, {
            "data-slot": "dropdown-menu-radio-item",
            className: i,
            ...o,
            children: [n, a],
          })),
          (t[7] = n),
          (t[8] = o),
          (t[9] = i),
          (t[10] = p))
        : (p = t[10]),
      p
    );
  }),
  (t.DropdownMenuSeparator = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, d.cn)(
            "bg-border phone:mx-2 phone:my-2 -mx-1 my-1 h-px",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)(c.Menu.Separator, {
            "data-slot": "dropdown-menu-separator",
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
  (t.DropdownMenuShortcut = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, d.cn)(
            "text-muted-foreground phone:text-sm ml-auto text-xs",
            n,
          )),
          (t[3] = n),
          (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)("span", {
            "data-slot": "dropdown-menu-shortcut",
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
  (t.DropdownMenuSub = function (e) {
    const t = (0, l.c)(4);
    let n, r;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((r = (0, s.jsx)(c.Menu.SubmenuRoot, {
            "data-slot": "dropdown-menu-sub",
            ...n,
          })),
          (t[2] = n),
          (t[3] = r))
        : (r = t[3]),
      r
    );
  }),
  (t.DropdownMenuSubTrigger = function (e) {
    const t = (0, l.c)(13);
    let n, r, o, i, a, p, f;
    return (
      t[0] !== e
        ? (({ className: r, inset: o, children: n, ...i } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = o),
          (t[4] = i))
        : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4])),
      t[5] !== r
        ? ((a = (0, d.cn)(
            "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground phone:gap-3 phone:p-3 phone:data-[inset]:pl-10 [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-(--radius-menu-item) px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            r,
          )),
          (t[5] = r),
          (t[6] = a))
        : (a = t[6]),
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, s.jsx)(u.ChevronRightIcon, {
            className: "ml-auto size-4",
          })),
          (t[7] = p))
        : (p = t[7]),
      t[8] !== n || t[9] !== o || t[10] !== i || t[11] !== a
        ? ((f = (0, s.jsxs)(c.Menu.SubmenuTrigger, {
            "data-slot": "dropdown-menu-sub-trigger",
            "data-inset": o,
            className: a,
            ...i,
            children: [n, p],
          })),
          (t[8] = n),
          (t[9] = o),
          (t[10] = i),
          (t[11] = a),
          (t[12] = f))
        : (f = t[12]),
      f
    );
  }),
  (t.DropdownMenuSubContent = function (e) {
    const t = (0, l.c)(14);
    let n, r, o, i;
    t[0] !== e
      ? (({ className: n, sideOffset: o, align: i, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i))
      : ((n = t[1]), (r = t[2]), (o = t[3]), (i = t[4]));
    const a = void 0 === o ? 0 : o,
      u = void 0 === i ? "start" : i;
    let p, f, h;
    return (
      t[5] !== n
        ? ((p = (0, d.cn)(
            "bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--transform-origin) overflow-hidden rounded-(--radius-popup) border p-1 shadow-(--shadow-overlay) duration-(--duration-fast) ease-(--ease-out-strong) data-[closed]:duration-(--duration-exit-fast)",
            n,
          )),
          (t[5] = n),
          (t[6] = p))
        : (p = t[6]),
      t[7] !== r || t[8] !== p
        ? ((f = (0, s.jsx)(c.Menu.Popup, {
            "data-slot": "dropdown-menu-sub-content",
            className: p,
            ...r,
          })),
          (t[7] = r),
          (t[8] = p),
          (t[9] = f))
        : (f = t[9]),
      t[10] !== u || t[11] !== a || t[12] !== f
        ? ((h = (0, s.jsx)(c.Menu.Portal, {
            children: (0, s.jsx)(c.Menu.Positioner, {
              sideOffset: a,
              align: u,
              className: "z-50",
              children: f,
            }),
          })),
          (t[10] = u),
          (t[11] = a),
          (t[12] = f),
          (t[13] = h))
        : (h = t[13]),
      h
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(32671 /* vendor/module-32671 */),
  u = n(87952 /* vendor/module-87952 */),
  d =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */));
