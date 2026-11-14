// app/components/close.js — webpack module 55361
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        c.call(e, o) ||
          o === n ||
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(d, {
  Close: () => he,
  Content: () => de,
  Description: () => fe,
  Dialog: () => P,
  DialogClose: () => ee,
  DialogContent: () => G,
  DialogDescription: () => J,
  DialogOverlay: () => z,
  DialogPortal: () => U,
  DialogTitle: () => Z,
  DialogTrigger: () => D,
  Overlay: () => ue,
  Portal: () => ce,
  Root: () => se,
  Title: () => pe,
  Trigger: () => le,
  WarningProvider: () => re,
  createDialogScope: () => O,
}),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(96928 /* vendor/module-96928 */),
  h = n(95046 /* vendor/module-95046 */),
  m = n(56732 /* app/components/create-context */),
  g = n(86838 /* vendor/module-86838 */),
  y = n(68994 /* vendor/module-68994 */),
  v = n(56453 /* app/components/branch */),
  b = n(18614 /* app/components/focus-scope */),
  S = n(82423 /* vendor/module-82423 */),
  _ = n(99646 /* vendor/module-99646 */),
  x = n(76018 /* vendor/module-76018 */),
  w = n(32822 /* vendor/module-32822 */),
  E = n(25764 /* vendor/module-25764 */),
  T = n(24788 /* vendor/module-24788 */),
  k = n(17499 /* app/components/root */),
  C = n(31085 /* vendor/module-31085 */),
  I = "Dialog",
  [A, O] = (0, m.createContextScope)(I),
  [R, M] = A(I),
  P = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      s = p.useRef(null),
      l = p.useRef(null),
      [c, u] = (0, y.useControllableState)({
        prop: r,
        defaultProp: o ?? !1,
        onChange: i,
        caller: I,
      });
    return (0, C.jsx)(R, {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: (0, g.useId)(),
      titleId: (0, g.useId)(),
      descriptionId: (0, g.useId)(),
      open: c,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((e) => !e), [u]),
      modal: a,
      children: n,
    });
  };
P.displayName = I;
var N = "DialogTrigger",
  D = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = M(N, n),
      i = (0, h.useComposedRefs)(t, o.triggerRef);
    return (0, C.jsx)(x.Primitive.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": te(o.open),
      ...r,
      ref: i,
      onClick: (0, f.composeEventHandlers)(e.onClick, o.onOpenToggle),
    });
  });
D.displayName = N;
var j = "DialogPortal",
  [L, F] = A(j, { forceMount: void 0 }),
  U = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = M(j, t);
    return (0, C.jsx)(L, {
      scope: t,
      forceMount: n,
      children: p.Children.map(r, (e) =>
        (0, C.jsx)(_.Presence, {
          present: n || i.open,
          children: (0, C.jsx)(S.Portal, {
            asChild: !0,
            container: o,
            children: e,
          }),
        }),
      ),
    });
  };
U.displayName = j;
var B = "DialogOverlay",
  z = p.forwardRef((e, t) => {
    const n = F(B, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = M(B, e.__scopeDialog);
    return i.modal
      ? (0, C.jsx)(_.Presence, {
          present: r || i.open,
          children: (0, C.jsx)(V, { ...o, ref: t }),
        })
      : null;
  });
z.displayName = B;
var H = (0, k.createSlot)("DialogOverlay.RemoveScroll"),
  V = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = M(B, n);
    return (0, C.jsx)(E.RemoveScroll, {
      as: H,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: (0, C.jsx)(x.Primitive.div, {
        "data-state": te(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  q = "DialogContent",
  G = p.forwardRef((e, t) => {
    const n = F(q, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = M(q, e.__scopeDialog);
    return (0, C.jsx)(_.Presence, {
      present: r || i.open,
      children: i.modal
        ? (0, C.jsx)(W, { ...o, ref: t })
        : (0, C.jsx)($, { ...o, ref: t }),
    });
  });
G.displayName = q;
var W = p.forwardRef((e, t) => {
    const n = M(q, e.__scopeDialog),
      r = p.useRef(null),
      o = (0, h.useComposedRefs)(t, n.contentRef, r);
    return (
      p.useEffect(() => {
        const e = r.current;
        if (e) return (0, T.hideOthers)(e);
      }, []),
      (0, C.jsx)(Y, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: (0, f.composeEventHandlers)(
          e.onCloseAutoFocus,
          (e) => {
            e.preventDefault(), n.triggerRef.current?.focus();
          },
        ),
        onPointerDownOutside: (0, f.composeEventHandlers)(
          e.onPointerDownOutside,
          (e) => {
            const t = e.detail.originalEvent,
              n = 0 === t.button && !0 === t.ctrlKey;
            (2 === t.button || n) && e.preventDefault();
          },
        ),
        onFocusOutside: (0, f.composeEventHandlers)(e.onFocusOutside, (e) =>
          e.preventDefault(),
        ),
      })
    );
  }),
  $ = p.forwardRef((e, t) => {
    const n = M(q, e.__scopeDialog),
      r = p.useRef(!1),
      o = p.useRef(!1);
    return (0, C.jsx)(Y, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (t) => {
        e.onCloseAutoFocus?.(t),
          t.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (t) => {
        e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = !0),
            "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
        const i = t.target,
          a = n.triggerRef.current?.contains(i);
        a && t.preventDefault(),
          "focusin" === t.detail.originalEvent.type &&
            o.current &&
            t.preventDefault();
      },
    });
  }),
  Y = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...a
      } = e,
      s = M(q, n),
      l = p.useRef(null),
      c = (0, h.useComposedRefs)(t, l);
    return (
      (0, w.useFocusGuards)(),
      (0, C.jsxs)(C.Fragment, {
        children: [
          (0, C.jsx)(b.FocusScope, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, C.jsx)(v.DismissableLayer, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": te(s.open),
              ...a,
              ref: c,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(ie, { titleId: s.titleId }),
              (0, C.jsx)(ae, {
                contentRef: l,
                descriptionId: s.descriptionId,
              }),
            ],
          }),
        ],
      })
    );
  }),
  K = "DialogTitle",
  Z = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = M(K, n);
    return (0, C.jsx)(x.Primitive.h2, {
      id: o.titleId,
      ...r,
      ref: t,
    });
  });
Z.displayName = K;
var Q = "DialogDescription",
  J = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = M(Q, n);
    return (0, C.jsx)(x.Primitive.p, {
      id: o.descriptionId,
      ...r,
      ref: t,
    });
  });
J.displayName = Q;
var X = "DialogClose",
  ee = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = M(X, n);
    return (0, C.jsx)(x.Primitive.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: (0, f.composeEventHandlers)(e.onClick, () => o.onOpenChange(!1)),
    });
  });
function te(e) {
  return e ? "open" : "closed";
}
ee.displayName = X;
var ne = "DialogTitleWarning",
  [re, oe] = (0, m.createContext)(ne, {
    contentName: q,
    titleName: K,
    docsSlug: "dialog",
  }),
  ie = ({ titleId: e }) => {
    const t = oe(ne),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      p.useEffect(() => {
        e && document.getElementById(e);
      }, [n, e]),
      null
    );
  },
  ae = ({ contentRef: e, descriptionId: t }) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oe("DialogDescriptionWarning").contentName}}.`;
    return (
      p.useEffect(() => {
        const n = e.current?.getAttribute("aria-describedby");
        t && n && document.getElementById(t);
      }, [n, e, t]),
      null
    );
  },
  se = P,
  le = D,
  ce = U,
  ue = z,
  de = G,
  pe = Z,
  fe = J,
  he = ee;
