// app/components/confirm-dialog.js — webpack module 16057
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
  (t.ConfirmDialog = function (e) {
    const t = (0, l.c)(41),
      {
        open: n,
        onOpenChange: r,
        title: o,
        description: i,
        confirmLabel: a,
        onConfirm: c,
        isPending: m,
        cancelLabel: g,
        variant: y,
        sideBySide: v,
      } = e,
      b = void 0 !== m && m,
      S = void 0 === g ? "Cancel" : g,
      _ = void 0 === y ? "delete" : y,
      {
        Icon: x,
        iconWrapperClassName: w,
        iconClassName: E,
        confirmVariant: T,
      } = h[_];
    let k, C, I, A, O, R, M, P, N;
    t[0] !== w
      ? ((k = (0, u.cn)("flex items-center rounded-(--radius-disc) p-3.5", w)),
        (t[0] = w),
        (t[1] = k))
      : (k = t[1]),
      t[2] !== E
        ? ((C = (0, u.cn)("size-7", E)), (t[2] = E), (t[3] = C))
        : (C = t[3]),
      t[4] !== E
        ? ((I = (0, u.cn)("size-6", E)), (t[4] = E), (t[5] = I))
        : (I = t[5]),
      t[6] !== x || t[7] !== C || t[8] !== I
        ? ((A = (0, s.jsx)(d.BrandIcon, {
            icon: x,
            className: C,
            pixelClassName: I,
          })),
          (t[6] = x),
          (t[7] = C),
          (t[8] = I),
          (t[9] = A))
        : (A = t[9]),
      t[10] !== k || t[11] !== A
        ? ((O = (0, s.jsx)("div", { className: k, children: A })),
          (t[10] = k),
          (t[11] = A),
          (t[12] = O))
        : (O = t[12]),
      t[13] !== o
        ? ((R = (0, s.jsx)(f.DialogTitle, { children: o })),
          (t[13] = o),
          (t[14] = R))
        : (R = t[14]),
      t[15] !== i
        ? ((M = (0, s.jsx)(f.DialogDescription, { children: i })),
          (t[15] = i),
          (t[16] = M))
        : (M = t[16]),
      t[17] !== M || t[18] !== R
        ? ((P = (0, s.jsxs)("div", {
            className: "flex w-full flex-col items-center gap-1 text-center",
            children: [R, M],
          })),
          (t[17] = M),
          (t[18] = R),
          (t[19] = P))
        : (P = t[19]),
      t[20] !== P || t[21] !== O
        ? ((N = (0, s.jsxs)("div", {
            className: "flex w-full flex-col items-center gap-5",
            children: [O, P],
          })),
          (t[20] = P),
          (t[21] = O),
          (t[22] = N))
        : (N = t[22]);
    const D = v ? "grid-cols-2 [&>*:first-child]:order-none" : void 0;
    let j, L, F, U, B;
    return (
      t[23] !== S
        ? ((j = (0, s.jsx)(f.DialogClose, {
            render: (0, s.jsx)(p.Button, {
              variant: "secondary",
              className: "h-11",
              children: S,
            }),
          })),
          (t[23] = S),
          (t[24] = j))
        : (j = t[24]),
      t[25] !== a || t[26] !== T || t[27] !== b || t[28] !== c
        ? ((L = (0, s.jsx)(p.Button, {
            variant: T,
            className: "h-11",
            loading: b,
            onClick: c,
            children: a,
          })),
          (t[25] = a),
          (t[26] = T),
          (t[27] = b),
          (t[28] = c),
          (t[29] = L))
        : (L = t[29]),
      t[30] !== D || t[31] !== j || t[32] !== L
        ? ((F = (0, s.jsxs)(f.DialogFooter, {
            layout: "stretch",
            className: D,
            children: [j, L],
          })),
          (t[30] = D),
          (t[31] = j),
          (t[32] = L),
          (t[33] = F))
        : (F = t[33]),
      t[34] !== N || t[35] !== F
        ? ((U = (0, s.jsxs)(f.DialogContent, {
            size: "sm",
            showCloseButton: !1,
            className: "flex flex-col items-center gap-6",
            children: [N, F],
          })),
          (t[34] = N),
          (t[35] = F),
          (t[36] = U))
        : (U = t[36]),
      t[37] !== r || t[38] !== n || t[39] !== U
        ? ((B = (0, s.jsx)(f.Dialog, {
            open: n,
            onOpenChange: r,
            children: U,
          })),
          (t[37] = r),
          (t[38] = n),
          (t[39] = U),
          (t[40] = B))
        : (B = t[40]),
      B
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(87952 /* vendor/module-87952 */),
  u =
    (a(n(14041 /* vendor/module-14041 */)), n(29113 /* vendor/module-29113 */)),
  d = n(69893 /* app/components/brand-icon */),
  p = n(66244 /* app/components/button-variants */),
  f = n(98980 /* app/components/dialog */),
  h = {
    delete: {
      Icon: c.Trash2,
      iconWrapperClassName: "bg-error/10",
      iconClassName: "text-error",
      confirmVariant: "destructive",
    },
    clear: {
      Icon: c.Eraser,
      iconWrapperClassName: "bg-accent",
      iconClassName: "text-foreground",
      confirmVariant: "default",
    },
    grant: {
      Icon: c.Gift,
      iconWrapperClassName: "bg-accent",
      iconClassName: "text-foreground",
      confirmVariant: "default",
    },
  };
