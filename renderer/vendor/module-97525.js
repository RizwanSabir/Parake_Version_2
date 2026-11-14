// vendor/module-97525.js — webpack module 97525
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxTrigger = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(54807 /* vendor/module-54807 */),
  l = n(854 /* vendor/module-854 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(63917 /* vendor/module-63917 */),
  d = n(32118 /* vendor/module-32118 */),
  p = n(67631 /* vendor/module-67631 */),
  f = n(36826 /* vendor/module-36826 */),
  h = n(62527 /* vendor/module-62527 */),
  m = n(83470 /* vendor/module-83470 */),
  g = n(65200 /* vendor/module-65200 */),
  y = n(77814 /* vendor/module-77814 */),
  v = n(22877 /* vendor/module-22877 */),
  b = n(82063 /* vendor/module-82063 */),
  S = n(47797 /* vendor/module-47797 */),
  _ = n(62429 /* vendor/module-62429 */),
  x = n(42090 /* vendor/module-42090 */),
  w = n(38458 /* vendor/module-38458 */);
t.ComboboxTrigger = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      nativeButton: E = !0,
      disabled: T = !1,
      id: k,
      style: C,
      ...I
    } = e,
    {
      state: A,
      disabled: O,
      setTouched: R,
      setFocused: M,
      validationMode: P,
      validation: N,
    } = (0, h.useFieldRootContext)(),
    { labelId: D } = (0, m.useLabelableContext)(),
    j = (0, d.useComboboxRootContext)(),
    { filteredItems: L } = (0, d.useComboboxDerivedItemsContext)(),
    F = (0, i.useStore)(j, f.selectors.selectionMode),
    U = (0, i.useStore)(j, f.selectors.disabled),
    B = (0, i.useStore)(j, f.selectors.readOnly),
    z = (0, i.useStore)(j, f.selectors.required),
    H = (0, i.useStore)(j, f.selectors.mounted),
    V = (0, i.useStore)(j, f.selectors.popupSide),
    q = (0, i.useStore)(j, f.selectors.positionerElement),
    G = (0, i.useStore)(j, f.selectors.listElement),
    W = (0, i.useStore)(j, f.selectors.popupId),
    $ = (0, i.useStore)(j, f.selectors.triggerProps),
    Y = (0, i.useStore)(j, f.selectors.triggerElement),
    K = (0, i.useStore)(j, f.selectors.inputInsidePopup),
    Z = (0, i.useStore)(j, f.selectors.id),
    Q = (0, i.useStore)(j, f.selectors.labelId),
    J = (0, i.useStore)(j, f.selectors.open),
    X = (0, i.useStore)(j, f.selectors.selectedValue),
    ee = (0, i.useStore)(j, f.selectors.activeIndex),
    te = (0, i.useStore)(j, f.selectors.selectedIndex),
    ne = (0, i.useStore)(j, f.selectors.hasSelectedValue),
    re = (0, d.useComboboxFloatingContext)(),
    oe = (0, d.useComboboxInputValueContext)(),
    ie = (0, s.useTimeout)(),
    ae = O || U || T,
    se = 0 === L.length,
    le = H && q ? V : null;
  (0, _.useLabelableId)({ id: K ? k : void 0 });
  const ce = K ? (k ?? Z) : k,
    ue = (0, x.resolveAriaLabelledBy)(D, Q);
  let de;
  J && K ? (de = W ?? (0, w.getComboboxPopupId)(Z)) : J && (de = G?.id);
  const pe = o.useRef("");
  function fe(e) {
    pe.current = e.pointerType;
  }
  const he = re.useState("domReferenceElement");
  o.useEffect(() => {
    K && Y && Y !== he && re.set("domReferenceElement", Y);
  }, [Y, he, re, K]);
  const { reference: me } = (0, S.useTypeahead)(re, {
      enabled: !J && !B && !U && "single" === F,
      listRef: j.state.labelsRef,
      activeIndex: ee,
      selectedIndex: te,
      onMatch(e) {
        const t = j.state.valuesRef.current[e];
        void 0 !== t &&
          j.state.setSelectedValue(t, (0, v.createChangeEventDetails)("none"));
      },
    }),
    { reference: ge } = (0, S.useClick)(re, {
      enabled: !B && !U,
      event: "mousedown",
    }),
    { buttonRef: ye, getButtonProps: ve } = (0, u.useButton)({
      native: E,
      disabled: ae,
    }),
    be = {
      ...A,
      open: J,
      disabled: ae,
      popupSide: le,
      listEmpty: se,
      placeholder: "none" !== F && !ne,
    },
    Se = (0, a.useStableCallback)((e) => {
      j.set("triggerElement", e);
    });
  return (0, c.useRenderElement)("button", e, {
    ref: [t, ye, Se],
    state: be,
    props: [
      $,
      ge,
      me,
      {
        id: ce,
        tabIndex: K ? 0 : -1,
        role: K ? "combobox" : void 0,
        "aria-expanded": J ? "true" : "false",
        "aria-haspopup": K ? "dialog" : "listbox",
        "aria-controls": de,
        "aria-required": (K && z) || void 0,
        "aria-labelledby": ue,
        onPointerDown: fe,
        onPointerEnter: fe,
        onFocus() {
          M(!0), ae || B || ie.start(0, j.state.forceMount);
        },
        onBlur(e) {
          if (
            !(0, g.contains)(q, e.relatedTarget) &&
            (R(!0), M(!1), "onBlur" === P)
          ) {
            const e = "none" === F ? oe : X;
            N.commit(e);
          }
        },
        onMouseDown(e) {
          if (ae || B) return;
          if (
            (K || re.set("domReferenceElement", e.currentTarget),
            j.state.forceMount(),
            "touch" !== pe.current &&
              (j.state.inputRef.current?.focus(), K || e.preventDefault()),
            J)
          )
            return;
          const t = (0, l.ownerDocument)(e.currentTarget);
          K &&
            t.addEventListener(
              "mouseup",
              function (e) {
                if (!Y) return;
                const t = (0, g.getTarget)(e),
                  n = j.state.positionerElement,
                  r = j.state.listElement;
                if (
                  (0, g.contains)(Y, t) ||
                  (0, g.contains)(n, t) ||
                  (0, g.contains)(r, t) ||
                  t === Y
                )
                  return;
                const o = (0, y.getPseudoElementBounds)(Y),
                  i = e.clientX >= o.left - 2 && e.clientX <= o.right + 2,
                  a = e.clientY >= o.top - 2 && e.clientY <= o.bottom + 2;
                (i && a) ||
                  j.state.setOpen(
                    !1,
                    (0, v.createChangeEventDetails)("cancel-open", e),
                  );
              },
              { once: !0 },
            );
        },
        onKeyDown(e) {
          ae ||
            B ||
            ("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
            ((0, g.stopEvent)(e),
            j.state.setOpen(
              !0,
              (0, v.createChangeEventDetails)(
                b.REASONS.listNavigation,
                e.nativeEvent,
              ),
            ),
            j.state.inputRef.current?.focus());
        },
      },
      N ? N.getValidationProps(ae, I) : I,
      ve,
    ],
    stateAttributesMapping: p.triggerStateAttributesMapping,
  });
});
