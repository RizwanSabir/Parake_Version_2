// app/components/combobox-input.js — webpack module 90601
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxInput = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(87177 /* vendor/module-87177 */),
  l = n(33115 /* vendor/module-33115 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(32118 /* vendor/module-32118 */),
  d = n(67631 /* vendor/module-67631 */),
  p = n(36826 /* vendor/module-36826 */),
  f = n(62527 /* vendor/module-62527 */),
  h = n(41128 /* vendor/module-41128 */),
  m = n(83470 /* vendor/module-83470 */),
  g = n(84542 /* vendor/module-84542 */),
  y = n(65200 /* vendor/module-65200 */),
  v = n(95350 /* vendor/module-95350 */),
  b = n(22877 /* vendor/module-22877 */),
  S = n(82063 /* vendor/module-82063 */),
  _ = n(96092 /* vendor/module-96092 */),
  x = n(42090 /* vendor/module-42090 */),
  w = n(91691 /* vendor/module-91691 */),
  E = n(31085 /* vendor/module-31085 */);
t.ComboboxInput = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
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
    } = (0, f.useFieldRootContext)(),
    { labelId: D } = (0, m.useLabelableContext)(),
    j = (0, g.useComboboxChipsContext)(),
    L = (0, v.useComboboxPositionerContext)(!0),
    F = Boolean(L),
    U = (0, u.useComboboxRootContext)(),
    { filteredItems: B } = (0, u.useComboboxDerivedItemsContext)(),
    z = (0, u.useComboboxInputValueContext)(),
    H = (0, _.useDirection)(),
    V = (0, i.useStore)(U, p.selectors.required),
    q = (0, i.useStore)(U, p.selectors.disabled),
    G = (0, i.useStore)(U, p.selectors.readOnly),
    W = (0, i.useStore)(U, p.selectors.name),
    $ = (0, i.useStore)(U, p.selectors.form),
    Y = (0, i.useStore)(U, p.selectors.selectionMode),
    K = (0, i.useStore)(U, p.selectors.autoHighlight),
    Z = (0, i.useStore)(U, p.selectors.inputProps),
    Q = (0, i.useStore)(U, p.selectors.triggerProps),
    J = (0, i.useStore)(U, p.selectors.open),
    X = (0, i.useStore)(U, p.selectors.mounted),
    ee = (0, i.useStore)(U, p.selectors.selectedValue),
    te = (0, i.useStore)(U, p.selectors.popupSide),
    ne = (0, i.useStore)(U, p.selectors.positionerElement),
    re = (0, i.useStore)(U, p.selectors.id),
    oe = (0, i.useStore)(U, p.selectors.inline),
    ie = (0, i.useStore)(U, p.selectors.modal),
    ae = Boolean(K),
    se = X && ne ? te : null,
    le = O || q || T,
    ce = 0 === B.length,
    ue = F || oe,
    de = !ue || ie,
    pe = (0, l.useBaseUiId)(k ?? (ue ? void 0 : re)),
    fe = (0, x.resolveAriaLabelledBy)(D, void 0),
    he = F ? h.DEFAULT_FIELD_STATE_ATTRIBUTES : A,
    [me, ge] = o.useState(null),
    ye = o.useRef(!1),
    ve = o.useRef(null),
    be = o.useRef(!1),
    Se = "none" === Y && !F,
    _e = (0, a.useStableCallback)((e) => {
      const t = F || U.state.inline;
      t &&
        !U.state.hasInputValue &&
        U.state.setInputValue(
          "",
          (0, b.createChangeEventDetails)(S.REASONS.none),
        ),
        U.update({
          inputElement: e,
          inputInsidePopup: t,
          inputOwnsFormValue: Se,
        });
    }),
    xe = F || !N ? I : N.getValidationProps(le, I),
    we = {
      ...he,
      open: J,
      disabled: le,
      readOnly: G,
      popupSide: se,
      listEmpty: ce,
    },
    Ee = (0, c.useRenderElement)("input", e, {
      state: we,
      ref: [t, U.state.inputRef, _e],
      props: [
        Z,
        Q,
        {
          type: "text",
          value: e.value ?? me ?? z,
          "aria-readonly": G || void 0,
          "aria-required": V || void 0,
          "aria-labelledby": fe,
          disabled: le,
          readOnly: G,
          required: "none" === Y ? V : void 0,
          form: $,
          ...(Se && W && { name: W }),
          id: pe,
          onFocus() {
            if ((M(!0), !oe || !be.current)) return;
            be.current = !1;
            const e = ve.current;
            null != e &&
              Object.hasOwn(U.state.valuesRef.current, e) &&
              U.state.setIndices({ activeIndex: e });
          },
          onBlur() {
            R(!0), M(!1);
            const e = U.state.activeIndex;
            if (
              (oe &&
                null !== e &&
                "always" !== K &&
                ((ve.current = e),
                (be.current = !0),
                U.state.setIndices({ activeIndex: null })),
              "onBlur" === P)
            ) {
              const e = "none" === Y ? z : ee;
              N.commit(e);
            }
          },
          onCompositionStart(e) {
            s.platform.os.android ||
              ((ye.current = !0), ge(e.currentTarget.value));
          },
          onCompositionEnd(e) {
            ye.current = !1;
            const t = e.currentTarget.value;
            ge(null),
              U.state.setInputValue(
                t,
                (0, b.createChangeEventDetails)(
                  S.REASONS.inputChange,
                  e.nativeEvent,
                ),
              );
          },
          onChange(e) {
            const t = e.nativeEvent.inputType,
              n = !t || "insertReplacementText" === t,
              r = ye.current || !n;
            if (ye.current) {
              const t = e.currentTarget.value;
              ge(t),
                "" !== t ||
                  U.state.openOnInputClick ||
                  U.state.inputInsidePopup ||
                  U.state.setOpen(
                    !1,
                    (0, b.createChangeEventDetails)(
                      S.REASONS.inputClear,
                      e.nativeEvent,
                    ),
                  );
              const n = t.trim(),
                o = ae && "" !== n;
              return (
                G ||
                  le ||
                  !n ||
                  (r &&
                    (U.state.setOpen(
                      !0,
                      (0, b.createChangeEventDetails)(
                        S.REASONS.inputChange,
                        e.nativeEvent,
                      ),
                    ),
                    ae ||
                      U.state.setIndices({
                        activeIndex: null,
                        selectedIndex: null,
                        type: U.state.keyboardActiveRef.current
                          ? "keyboard"
                          : "pointer",
                      }))),
                void (
                  J &&
                  null !== U.state.activeIndex &&
                  !o &&
                  U.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: U.state.keyboardActiveRef.current
                      ? "keyboard"
                      : "pointer",
                  })
                )
              );
            }
            const o = (0, b.createChangeEventDetails)(
              S.REASONS.inputChange,
              e.nativeEvent,
            );
            if ((U.state.setInputValue(e.currentTarget.value, o), o.isCanceled))
              return;
            const i = "" === e.currentTarget.value,
              a = (0, b.createChangeEventDetails)(
                S.REASONS.inputClear,
                e.nativeEvent,
              );
            i &&
              !U.state.inputInsidePopup &&
              ("single" === Y && U.state.setSelectedValue(null, a),
              U.state.openOnInputClick || U.state.setOpen(!1, a));
            const s = e.currentTarget.value.trim();
            G ||
              le ||
              !s ||
              (r &&
                (U.state.setOpen(
                  !0,
                  (0, b.createChangeEventDetails)(
                    S.REASONS.inputChange,
                    e.nativeEvent,
                  ),
                ),
                ae ||
                  U.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: U.state.keyboardActiveRef.current
                      ? "keyboard"
                      : "pointer",
                  }))),
              J &&
                null !== U.state.activeIndex &&
                !ae &&
                U.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: U.state.keyboardActiveRef.current
                    ? "keyboard"
                    : "pointer",
                });
          },
          onKeyDown(e) {
            if (le || G) return;
            if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
            U.state.keyboardActiveRef.current = !0;
            const t = e.currentTarget,
              n = t.scrollWidth - t.clientWidth,
              r = "rtl" === H;
            if ("Home" === e.key) {
              (0, y.stopEvent)(e);
              const n = s.platform.engine.gecko && r ? t.value.length : 0;
              return t.setSelectionRange(n, n), void (t.scrollLeft = 0);
            }
            if ("End" === e.key) {
              (0, y.stopEvent)(e);
              const o = s.platform.engine.gecko && r ? 0 : t.value.length;
              return (
                t.setSelectionRange(o, o), void (t.scrollLeft = r ? -n : n)
              );
            }
            if (!X && "Escape" === e.key) {
              const t =
                  "multiple" === Y && Array.isArray(ee)
                    ? 0 === ee.length
                    : null === ee,
                n = (0, b.createChangeEventDetails)(
                  S.REASONS.escapeKey,
                  e.nativeEvent,
                ),
                r = "multiple" === Y ? [] : null;
              return (
                U.state.setInputValue("", n),
                U.state.setSelectedValue(r, n),
                void (
                  t ||
                  U.state.inline ||
                  n.isPropagationAllowed ||
                  e.stopPropagation()
                )
              );
            }
            if (
              j &&
              "Backspace" === e.key &&
              "" === t.value &&
              void 0 === j.highlightedChipIndex &&
              Array.isArray(ee) &&
              ee.length > 0
            ) {
              const t = j.chipsRef.current.length,
                n = t > 0 ? t - 1 : ee.length - 1,
                r = ee.filter((e, t) => t !== n);
              return (
                U.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: U.state.keyboardActiveRef.current
                    ? "keyboard"
                    : "pointer",
                }),
                void U.state.setSelectedValue(
                  r,
                  (0, b.createChangeEventDetails)(
                    S.REASONS.none,
                    e.nativeEvent,
                  ),
                )
              );
            }
            const o = void 0 !== j?.highlightedChipIndex,
              i = (function (e) {
                if (!j) return;
                let t;
                const { highlightedChipIndex: n } = j,
                  r = j.chipsRef.current.length,
                  o = "rtl" === H,
                  i = o ? "ArrowRight" : "ArrowLeft",
                  a = o ? "ArrowLeft" : "ArrowRight";
                if (void 0 !== n) {
                  if (e.key === i)
                    e.preventDefault(), (t = n > 0 ? n - 1 : void 0);
                  else if (e.key === a)
                    e.preventDefault(), (t = n < r - 1 ? n + 1 : void 0);
                  else if ("Backspace" === e.key || "Delete" === e.key) {
                    e.preventDefault();
                    const r = n >= ee.length - 1 ? ee.length - 2 : n;
                    (t = r >= 0 ? r : void 0),
                      U.state.setIndices({
                        activeIndex: null,
                        selectedIndex: null,
                        type: "keyboard",
                      });
                  }
                  return t;
                }
                return (
                  e.key === i &&
                  0 === (e.currentTarget.selectionStart ?? 0) &&
                  ee.length > 0
                    ? (e.preventDefault(), (t = r > 0 ? r - 1 : void 0))
                    : "Backspace" === e.key &&
                      "" === e.currentTarget.value &&
                      ee.length > 0 &&
                      (U.state.setIndices({
                        activeIndex: null,
                        selectedIndex: null,
                        type: "keyboard",
                      }),
                      e.preventDefault()),
                  t
                );
              })(e);
            if (
              (j?.setHighlightedChipIndex(i),
              void 0 !== i
                ? j?.chipsRef.current[i]?.focus()
                : o && U.state.inputRef.current?.focus(),
              229 !== e.which && "Enter" === e.key && J)
            ) {
              const t = U.state.activeIndex,
                n = e.nativeEvent;
              if (null === t) {
                if (oe) return;
                return void U.state.setOpen(
                  !1,
                  (0, b.createChangeEventDetails)(S.REASONS.none, n),
                );
              }
              (0, y.stopEvent)(e);
              const r = U.state.listRef.current[t];
              r &&
                ((U.state.selectionEventRef.current = n),
                r.click(),
                (U.state.selectionEventRef.current = null));
            }
          },
          onPointerMove() {
            U.state.keyboardActiveRef.current = !1;
          },
          onPointerDown() {
            U.state.keyboardActiveRef.current = !1;
          },
        },
        xe,
      ],
      stateAttributesMapping: d.triggerStateAttributesMapping,
    }),
    Te = F
      ? (0, E.jsx)(f.FieldRootContext.Provider, {
          value: f.DEFAULT_FIELD_ROOT_CONTEXT,
          children: Ee,
        })
      : Ee;
  return (0, E.jsxs)(o.Fragment, {
    children: [
      J &&
        de &&
        (0, E.jsx)(w.ComboboxInternalDismissButton, {
          ref: U.state.startDismissRef,
        }),
      Te,
    ],
  });
});
