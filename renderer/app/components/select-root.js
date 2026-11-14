// app/components/select-root.js — webpack module 76121
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectRoot = function (e) {
    const {
        id: t,
        value: n,
        defaultValue: r = null,
        onValueChange: L,
        open: F,
        defaultOpen: U = !1,
        onOpenChange: B,
        name: z,
        form: H,
        autoComplete: V,
        disabled: q = !1,
        readOnly: G = !1,
        required: W = !1,
        modal: $ = !0,
        actionsRef: Y,
        inputRef: K,
        onOpenChangeComplete: Z,
        items: Q,
        multiple: J = !1,
        itemToStringLabel: X,
        itemToStringValue: ee,
        isItemEqualToValue: te = A.defaultItemEquality,
        highlightItemOnHover: ne = !0,
        children: re,
      } = e,
      { clearErrors: oe } = (0, C.useFormContext)(),
      {
        setDirty: ie,
        setTouched: ae,
        setFocused: se,
        validityData: le,
        setFilled: ce,
        name: ue,
        disabled: de,
        validation: pe,
        validationMode: fe,
      } = (0, b.useFieldRootContext)(),
      he = (0, _.useLabelableId)({ id: t }),
      me = de || q,
      ge = ue ?? z,
      [ye, ve] = (0, d.useControlled)({
        controlled: n,
        default: J ? (r ?? g.EMPTY_ARRAY) : r,
        name: "Select",
        state: "value",
      }),
      [be, Se] = (0, d.useControlled)({
        controlled: F,
        default: U,
        name: "Select",
        state: "open",
      }),
      _e = o.useRef([]),
      xe = o.useRef([]),
      we = o.useRef(null),
      Ee = o.useRef(null),
      Te = o.useRef(0),
      ke = o.useRef(null),
      Ce = o.useRef([]),
      Ie = o.useRef(!1),
      Ae = o.useRef(null),
      Oe = o.useRef(null),
      Re = o.useRef({
        allowSelectedMouseUp: !1,
        allowUnselectedMouseUp: !1,
        dragY: 0,
      }),
      Me = o.useRef(!1),
      {
        mounted: Pe,
        setMounted: Ne,
        transitionStatus: De,
      } = (0, x.useTransitionStatus)(be),
      { openMethod: je, triggerProps: Le } = (0, M.useOpenInteractionType)(be),
      Fe = (0, s.useRefWithInit)(
        () =>
          new m.Store({
            id: he,
            labelId: void 0,
            modal: $,
            multiple: J,
            itemToStringLabel: X,
            itemToStringValue: ee,
            isItemEqualToValue: te,
            value: ye,
            open: be,
            mounted: Pe,
            transitionStatus: De,
            items: Q,
            forceMount: !1,
            openMethod: null,
            activeIndex: null,
            selectedIndex: null,
            popupProps: {},
            triggerProps: {},
            triggerElement: null,
            positionerElement: null,
            listElement: null,
            popupSide: null,
            scrollUpArrowVisible: !1,
            scrollDownArrowVisible: !1,
            hasScrollArrows: !1,
          }),
      ).current,
      Ue = (0, m.useStore)(Fe, w.selectors.activeIndex),
      Be = (0, m.useStore)(Fe, w.selectors.selectedIndex),
      ze = (0, m.useStore)(Fe, w.selectors.triggerElement),
      He = (0, m.useStore)(Fe, w.selectors.positionerElement),
      Ve = (0, c.usePreviousValue)(je),
      qe = je ?? Ve ?? null,
      Ge = o.useMemo(
        () => (J ? "" : (0, I.stringifyAsValue)(ye, ee)),
        [J, ye, ee],
      ),
      We = o.useMemo(
        () =>
          J && Array.isArray(ye)
            ? ye.map((e) => (0, I.stringifyAsValue)(e, ee))
            : (0, I.stringifyAsValue)(ye, ee),
        [J, ye, ee],
      ),
      $e = (0, h.useValueAsRef)(Fe.state.triggerElement),
      Ye = (0, f.useStableCallback)(() => We);
    (0, S.useRegisterFieldControl)($e, he, ye, Ye, !me, z);
    const Ke = o.useRef(ye),
      Ze = J
        ? Array.isArray(ye) && ye.length > 0
        : null != ye && "" !== (0, I.stringifyAsValue)(ye, ee);
    (0, p.useIsoLayoutEffect)(() => {
      ye !== Ke.current && Fe.set("forceMount", !0);
    }, [Fe, ye]),
      (0, p.useIsoLayoutEffect)(() => {
        ce(Ze);
      }, [Ze, ce]),
      (0, p.useIsoLayoutEffect)(
        function () {
          const e = Ce.current;
          let t;
          if (J) {
            const n = Array.isArray(ye) ? ye : [];
            if (0 === n.length) t = null;
            else {
              const r = n[n.length - 1],
                o = (0, A.findItemIndex)(e, r, te);
              t = -1 === o ? null : o;
            }
          } else {
            const n = (0, A.findItemIndex)(e, ye, te);
            t = -1 === n ? null : n;
          }
          null === t && (Oe.current = null), be || Fe.set("selectedIndex", t);
        },
        [Ze, J, be, ye, Ce, te, Fe, Oe],
      ),
      (0, R.useValueChanged)(ye, () => {
        oe(ge),
          ie(
            (function (e) {
              const t = le.initialValue;
              return Array.isArray(e) && Array.isArray(t)
                ? !(0, O.areArraysEqual)(e, t, (e, t) =>
                    (0, A.compareItemEquality)(e, t, te),
                  )
                : e !== t;
            })(ye),
          ),
          pe.change(ye);
      });
    const Qe = (0, f.useStableCallback)((e, t) => {
        B?.(e, t),
          t.isCanceled ||
            (Se(e),
            e ||
              (t.reason !== T.REASONS.focusOut &&
                t.reason !== T.REASONS.outsidePress) ||
              (ae(!0), se(!1), "onBlur" === fe && pe.commit(ye)));
      }),
      Je = (0, f.useStableCallback)(() => {
        Ne(!1), Fe.update({ activeIndex: null, openMethod: null }), Z?.(!1);
      });
    (0, k.useOpenChangeComplete)({
      enabled: !Y,
      open: be,
      ref: we,
      onComplete() {
        be || Je();
      },
    }),
      o.useImperativeHandle(Y, () => ({ unmount: Je }), [Je]);
    const Xe = (0, f.useStableCallback)((e, t) => {
        L?.(e, t), t.isCanceled || ve(e);
      }),
      et = (0, f.useStableCallback)(() => {
        const e = Fe.state.listElement || we.current;
        if (!e) return;
        const t = (0, P.getMaxScrollOffset)(e.scrollHeight, e.clientHeight),
          n = (0, P.normalizeScrollOffset)(e.scrollTop, t),
          r = n > 0,
          o = n < t;
        Fe.state.scrollUpArrowVisible !== r &&
          Fe.set("scrollUpArrowVisible", r),
          Fe.state.scrollDownArrowVisible !== o &&
            Fe.set("scrollDownArrowVisible", o);
      }),
      tt = (0, y.useFloatingRootContext)({
        open: be,
        onOpenChange: Qe,
        elements: { reference: ze, floating: He },
      }),
      nt = (0, y.useClick)(tt, {
        enabled: !G && !me,
        event: "mousedown",
      }),
      rt = (0, y.useDismiss)(tt),
      ot = (0, y.useListNavigation)(tt, {
        enabled: !G && !me,
        listRef: _e,
        activeIndex: Ue,
        selectedIndex: Be,
        disabledIndices: g.EMPTY_ARRAY,
        onNavigate(e) {
          (null !== e || be) && Fe.set("activeIndex", e);
        },
        focusItemOnHover: ne,
      }),
      it = (0, y.useTypeahead)(tt, {
        enabled: !G && !me && (be || !J),
        listRef: xe,
        activeIndex: Ue,
        selectedIndex: Be,
        disabledIndices: (e) => (0, u.isElementDisabled)(_e.current[e]),
        onMatch(e) {
          be
            ? Fe.set("activeIndex", e)
            : Xe(Ce.current[e], (0, E.createChangeEventDetails)("none"));
        },
        onTyping(e) {
          Ie.current = e;
        },
      }),
      at = o.useMemo(() => {
        const e = (0, D.mergeProps)(
          it.reference,
          ot.reference,
          rt.reference,
          nt.reference,
          Le,
        );
        return he && (e.id = he), e;
      }, [nt.reference, it.reference, ot.reference, rt.reference, Le, he]),
      st = o.useMemo(
        () =>
          (0, D.mergeProps)(
            N.FOCUSABLE_POPUP_PROPS,
            it.floating,
            ot.floating,
            rt.floating,
          ),
        [it.floating, ot.floating, rt.floating],
      ),
      lt = ot.item ?? g.EMPTY_OBJECT;
    (0, l.useOnFirstRender)(() => {
      Fe.update({ popupProps: st, triggerProps: at });
    }),
      (0, p.useIsoLayoutEffect)(() => {
        Fe.update({
          id: he,
          modal: $,
          multiple: J,
          value: ye,
          open: be,
          mounted: Pe,
          transitionStatus: De,
          popupProps: st,
          triggerProps: at,
          items: Q,
          itemToStringLabel: X,
          itemToStringValue: ee,
          isItemEqualToValue: te,
          openMethod: qe,
        });
      }, [Fe, he, $, J, ye, be, Pe, De, st, at, Q, X, ee, te, qe]);
    const ct = o.useMemo(
        () => ({
          store: Fe,
          name: ge,
          required: W,
          disabled: me,
          readOnly: G,
          multiple: J,
          highlightItemOnHover: ne,
          setValue: Xe,
          setOpen: Qe,
          listRef: _e,
          popupRef: we,
          scrollHandlerRef: Ee,
          handleScrollArrowVisibility: et,
          scrollArrowsMountedCountRef: Te,
          itemProps: lt,
          valueRef: ke,
          valuesRef: Ce,
          labelsRef: xe,
          typingRef: Ie,
          selectionRef: Re,
          firstItemTextRef: Ae,
          selectedItemTextRef: Oe,
          validation: pe,
          onOpenChangeComplete: Z,
          alignItemWithTriggerActiveRef: Me,
          initialValueRef: Ke,
        }),
        [Fe, ge, W, me, G, J, ne, Xe, Qe, lt, pe, Z, et],
      ),
      ut = (0, a.useMergedRefs)(K, pe.inputRef),
      dt = J && Array.isArray(ye) && ye.length > 0,
      pt = J ? void 0 : ge,
      ft = o.useMemo(
        () =>
          J && Array.isArray(ye) && ge
            ? ye.map((e) => {
                const t = (0, I.stringifyAsValue)(e, ee);
                return (0, j.jsx)(
                  "input",
                  {
                    type: "hidden",
                    form: H,
                    name: ge,
                    value: t,
                    disabled: me,
                  },
                  t,
                );
              })
            : null,
        [J, ye, H, ge, ee, me],
      );
    return (0, j.jsx)(v.SelectRootContext.Provider, {
      value: ct,
      children: (0, j.jsxs)(v.SelectFloatingContext.Provider, {
        value: tt,
        children: [
          re,
          (0, j.jsx)("input", {
            ...pe.getValidationProps(me, {
              onFocus() {
                Fe.state.triggerElement?.focus({ focusVisible: !0 });
              },
              onChange(e) {
                if (e.nativeEvent.defaultPrevented || me || G) return;
                const t = e.currentTarget.value,
                  n = (0, E.createChangeEventDetails)(
                    T.REASONS.none,
                    e.nativeEvent,
                  );
                Fe.set("forceMount", !0),
                  queueMicrotask(function () {
                    if (J) return;
                    const e = t.toLowerCase();
                    let r = Ce.current.findIndex(
                      (t) =>
                        (0, I.stringifyAsValue)(t, ee).toLowerCase() === e ||
                        (0, I.stringifyAsLabel)(t, X).toLowerCase() === e,
                    );
                    -1 === r &&
                      (r = Ce.current.findIndex((t, n) => {
                        const r = xe.current[n];
                        return null != r && r.toLowerCase() === e;
                      }));
                    const o = -1 === r ? void 0 : Ce.current[r];
                    null != o && Xe(o, n);
                  });
              },
            }),
            id: he && null == pt ? `${he}-hidden-input` : void 0,
            form: H,
            name: pt,
            autoComplete: V,
            value: Ge,
            disabled: me,
            required: W && !dt,
            readOnly: G,
            ref: ut,
            style: ge ? i.visuallyHiddenInput : i.visuallyHidden,
            tabIndex: -1,
            "aria-hidden": !0,
            suppressHydrationWarning: !0,
          }),
          ft,
        ],
      }),
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(38602 /* vendor/module-38602 */),
  a = n(12772 /* vendor/module-12772 */),
  s = n(16843 /* vendor/module-16843 */),
  l = n(30101 /* vendor/module-30101 */),
  c = n(85522 /* vendor/module-85522 */),
  u = n(3137 /* vendor/module-3137 */),
  d = n(95836 /* vendor/module-95836 */),
  p = n(57122 /* vendor/module-57122 */),
  f = n(4674 /* vendor/module-4674 */),
  h = n(71740 /* vendor/module-71740 */),
  m = n(78207 /* vendor/module-78207 */),
  g = n(38340 /* vendor/module-38340 */),
  y = n(47797 /* vendor/module-47797 */),
  v = n(22370 /* vendor/module-22370 */),
  b = n(62527 /* vendor/module-62527 */),
  S = n(85326 /* vendor/module-85326 */),
  _ = n(62429 /* vendor/module-62429 */),
  x = n(45796 /* vendor/module-45796 */),
  w = n(84557 /* vendor/module-84557 */),
  E = n(22877 /* vendor/module-22877 */),
  T = n(82063 /* vendor/module-82063 */),
  k = n(15586 /* vendor/module-15586 */),
  C = n(77982 /* vendor/module-77982 */),
  I = n(25411 /* vendor/module-25411 */),
  A = n(68323 /* vendor/module-68323 */),
  O = n(81268 /* vendor/module-81268 */),
  R = n(24422 /* vendor/module-24422 */),
  M = n(91988 /* vendor/module-91988 */),
  P = n(82764 /* vendor/module-82764 */),
  N = n(94661 /* vendor/module-94661 */),
  D = n(55327 /* vendor/module-55327 */),
  j = n(31085 /* vendor/module-31085 */);
