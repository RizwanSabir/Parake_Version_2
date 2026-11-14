// vendor/module-34035.js — webpack module 34035
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectTrigger = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(854 /* vendor/module-854 */),
  a = n(54807 /* vendor/module-54807 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(71740 /* vendor/module-71740 */),
  c = n(78207 /* vendor/module-78207 */),
  u = n(22370 /* vendor/module-22370 */),
  d = n(62527 /* vendor/module-62527 */),
  p = n(83470 /* vendor/module-83470 */),
  f = n(51146 /* vendor/module-51146 */),
  h = n(41128 /* vendor/module-41128 */),
  m = n(51909 /* vendor/module-51909 */),
  g = n(84557 /* vendor/module-84557 */),
  y = n(77814 /* vendor/module-77814 */),
  v = n(65200 /* vendor/module-65200 */),
  b = n(55327 /* vendor/module-55327 */),
  S = n(63917 /* vendor/module-63917 */),
  _ = n(22877 /* vendor/module-22877 */),
  x = n(82063 /* vendor/module-82063 */),
  w = n(62429 /* vendor/module-62429 */),
  E = n(42090 /* vendor/module-42090 */);
const T = {
  ...f.pressableTriggerOpenStateMapping,
  ...h.fieldValidityMapping,
  popupSide: (e) => (e ? { "data-popup-side": e } : null),
  value: () => null,
};
t.SelectTrigger = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      id: f,
      disabled: h = !1,
      nativeButton: k = !0,
      style: C,
      ...I
    } = e,
    {
      setTouched: A,
      setFocused: O,
      validationMode: R,
      state: M,
      disabled: P,
    } = (0, d.useFieldRootContext)(),
    { labelId: N } = (0, p.useLabelableContext)(),
    {
      store: D,
      setOpen: j,
      selectionRef: L,
      validation: F,
      readOnly: U,
      required: B,
      alignItemWithTriggerActiveRef: z,
      disabled: H,
    } = (0, u.useSelectRootContext)(),
    V = P || H || h,
    q = (0, c.useStore)(D, g.selectors.open),
    G = (0, c.useStore)(D, g.selectors.mounted),
    W = (0, c.useStore)(D, g.selectors.value),
    $ = (0, c.useStore)(D, g.selectors.triggerProps),
    Y = (0, c.useStore)(D, g.selectors.positionerElement),
    K = (0, c.useStore)(D, g.selectors.listElement),
    Z = (0, c.useStore)(D, g.selectors.popupSide),
    Q = (0, c.useStore)(D, g.selectors.id),
    J = (0, c.useStore)(D, g.selectors.labelId),
    X = (0, c.useStore)(D, g.selectors.hasSelectedValue),
    ee = G && Y ? Z : null,
    te = f ?? Q,
    ne = (0, E.resolveAriaLabelledBy)(N, J);
  (0, w.useLabelableId)({ id: te });
  const re = (0, l.useValueAsRef)(Y),
    oe = o.useRef(null),
    { getButtonProps: ie, buttonRef: ae } = (0, S.useButton)({
      disabled: V,
      native: k,
    }),
    se = (0, s.useStableCallback)((e) => {
      D.set("triggerElement", e);
    }),
    le = (0, a.useTimeout)(),
    ce = (0, a.useTimeout)(),
    ue = (0, a.useTimeout)();
  o.useEffect(() => {
    if (q)
      return (
        ue.start(400, () => {
          (L.current.allowUnselectedMouseUp = !0),
            (L.current.allowSelectedMouseUp = !0);
        }),
        () => {
          ue.clear();
        }
      );
    (L.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1,
      dragY: 0,
    }),
      ce.clear();
  }, [q, L, ce, ue]);
  const de = (0, b.mergeProps)(
      $,
      {
        id: te,
        role: "combobox",
        "aria-expanded": q ? "true" : "false",
        "aria-haspopup": "listbox",
        "aria-controls": q
          ? (K?.id ?? (0, v.getFloatingFocusElement)(Y)?.id)
          : void 0,
        "aria-labelledby": ne,
        "aria-readonly": U || void 0,
        "aria-required": B || void 0,
        tabIndex: V ? -1 : 0,
        onFocus(e) {
          O(!0),
            q &&
              z.current &&
              j(
                !1,
                (0, _.createChangeEventDetails)(x.REASONS.none, e.nativeEvent),
              ),
            le.start(0, () => {
              D.set("forceMount", !0);
            });
        },
        onBlur(e) {
          (0, v.contains)(Y, e.relatedTarget) ||
            (A(!0), O(!1), "onBlur" === R && F.commit(W));
        },
        onMouseDown(e) {
          if (q) return;
          const t = (0, i.ownerDocument)(e.currentTarget);
          function n(e) {
            if (!oe.current) return;
            const t = e.target;
            if (
              (0, v.contains)(oe.current, t) ||
              (0, v.contains)(re.current, t)
            )
              return;
            const n = (0, y.getPseudoElementBounds)(oe.current);
            (e.clientX >= n.left - 2 &&
              e.clientX <= n.right + 2 &&
              e.clientY >= n.top - 2 &&
              e.clientY <= n.bottom + 2) ||
              j(!1, (0, _.createChangeEventDetails)(x.REASONS.cancelOpen, e));
          }
          ce.start(0, () => {
            t.addEventListener("mouseup", n, { once: !0 });
          });
        },
      },
      I,
      ie,
    ),
    pe = F.getValidationProps(V, de);
  pe.role = "combobox";
  const fe = {
    ...M,
    open: q,
    disabled: V,
    value: W,
    readOnly: U,
    popupSide: ee,
    placeholder: !X,
  };
  return (0, m.useRenderElement)("button", e, {
    ref: [t, oe, ae, se],
    state: fe,
    stateAttributesMapping: T,
    props: pe,
  });
});
