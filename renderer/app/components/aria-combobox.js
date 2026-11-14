// app/components/aria-combobox.js — webpack module 30408
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.AriaCombobox = function (e) {
    const {
        id: t,
        onOpenChangeComplete: n,
        defaultSelectedValue: r = null,
        selectedValue: z,
        onSelectedValueChange: H,
        defaultInputValue: V,
        inputValue: q,
        open: G,
        defaultOpen: W = !1,
        selectionMode: $ = "none",
        onItemHighlighted: Y,
        name: K,
        form: Z,
        disabled: Q = !1,
        readOnly: J = !1,
        required: X = !1,
        inputRef: ee,
        grid: te = !1,
        items: ne,
        filteredItems: re,
        filter: oe,
        openOnInputClick: ie = !0,
        autoHighlight: ae = !1,
        keepHighlight: se = !1,
        highlightItemOnHover: le = !0,
        loopFocus: ce = !0,
        itemToStringLabel: ue,
        itemToStringValue: de,
        isItemEqualToValue: pe = j.defaultItemEquality,
        virtualized: fe = !1,
        inline: he = !1,
        fillInputOnItemPress: me = !0,
        modal: ge = !1,
        limit: ye = -1,
        autoComplete: ve = "list",
        formAutoComplete: be,
        locale: Se,
        submitOnItemClick: _e = !1,
      } = e,
      { clearErrors: xe } = (0, T.useFormContext)(),
      {
        setDirty: we,
        validityData: Ee,
        setFilled: Te,
        name: ke,
        disabled: Ce,
        setTouched: Ie,
        setFocused: Ae,
        validationMode: Oe,
        validation: Re,
      } = (0, w.useFieldRootContext)(),
      Me = (0, U.useDirection)(),
      Pe = (0, k.useLabelableId)({ id: t }),
      Ne = (0, I.useCoreFilter)({ locale: Se }),
      [De, je] = o.useState(!1),
      [Le, Fe] = o.useState(null),
      Ue = o.useRef([]),
      Be = o.useRef([]),
      ze = o.useRef(null),
      He = o.useRef(null),
      Ve = o.useRef(null),
      qe = o.useRef(null),
      Ge = o.useRef(null),
      We = o.useRef(!0),
      $e = o.useRef(!1),
      Ye = o.useRef(null),
      Ke = o.useRef(null),
      Ze = o.useRef(null),
      Qe = o.useRef(F.INITIAL_LAST_HIGHLIGHT),
      Je = o.useRef(null),
      Xe = o.useRef([]),
      et = o.useRef([]),
      tt = Ce || Q,
      nt = ke ?? K,
      rt = "multiple" === $,
      ot = "single" === $,
      it = void 0 !== q || void 0 !== V,
      at = void 0 !== ne,
      st = void 0 !== re;
    let lt;
    lt = "always" === ae ? "always" : !!ae && "input-change";
    const [ct, ut] = (0, i.useControlled)({
        controlled: z,
        default: rt ? (r ?? h.EMPTY_ARRAY) : r,
        name: "Combobox",
        state: "selectedValue",
      }),
      dt = o.useMemo(
        () =>
          null === oe
            ? () => !0
            : void 0 !== oe
              ? oe
              : ot && !De
                ? (0, C.createSingleSelectionCollatorFilter)(Ne, ue, ct)
                : (0, C.createCollatorItemFilter)(Ne, ue),
        [oe, ot, ct, De, Ne, ue],
      ),
      pt = (0, p.useRefWithInit)(() =>
        it ? (V ?? "") : ot ? (0, D.stringifyAsLabel)(ct, ue) : "",
      ).current,
      [ft, ht] = (0, i.useControlled)({
        controlled: q,
        default: pt,
        name: "Combobox",
        state: "inputValue",
      }),
      [mt, gt] = (0, i.useControlled)({
        controlled: G,
        default: W,
        name: "Combobox",
        state: "open",
      }),
      yt = (0, D.isGroupedItems)(ne),
      vt = Le ?? ("" === ft ? "" : String(ft).trim()),
      bt = ot ? (0, D.stringifyAsLabel)(ct, ue) : "",
      St =
        ot &&
        !De &&
        "" !== vt &&
        "" !== bt &&
        bt.length === vt.length &&
        Ne.contains(bt, vt),
      _t = St ? "" : vt,
      xt = at && st && St,
      wt = o.useMemo(
        () => (ne ? (yt ? ne.flatMap((e) => e.items) : ne) : h.EMPTY_ARRAY),
        [ne, yt],
      ),
      Et = o.useMemo(() => {
        if (re && !xt) return re;
        if (!ne) return h.EMPTY_ARRAY;
        if (yt) {
          const e = ne,
            t = [];
          let n = 0;
          for (const r of e) {
            if (ye > -1 && n >= ye) break;
            const e =
              "" === _t ? r.items : r.items.filter((e) => dt(e, _t, ue));
            if (0 === e.length) continue;
            const o = ye > -1 ? ye - n : 1 / 0,
              i = e.slice(0, o);
            if (i.length > 0) {
              const e = { ...r, items: i };
              t.push(e), (n += i.length);
            }
          }
          return t;
        }
        if ("" === _t) return ye > -1 ? wt.slice(0, ye) : wt;
        const e = [];
        for (const t of wt) {
          if (ye > -1 && e.length >= ye) break;
          dt(t, _t, ue) && e.push(t);
        }
        return e;
      }, [re, xt, ne, yt, _t, ye, dt, ue, wt]),
      Tt = o.useMemo(() => (yt ? Et.flatMap((e) => e.items) : Et), [Et, yt]),
      kt = (0, p.useRefWithInit)(
        () =>
          new f.Store({
            id: Pe,
            labelId: void 0,
            selectedValue: ct,
            open: mt,
            filter: dt,
            query: vt,
            items: ne,
            selectionMode: $,
            listRef: Ue,
            labelsRef: Be,
            popupRef: ze,
            emptyRef: Ge,
            inputRef: He,
            startDismissRef: Ve,
            endDismissRef: qe,
            keyboardActiveRef: We,
            chipsContainerRef: Ye,
            clearRef: Ke,
            valuesRef: Xe,
            allValuesRef: et,
            selectionEventRef: Ze,
            name: nt,
            form: Z,
            disabled: tt,
            readOnly: J,
            required: X,
            grid: te,
            isGrouped: yt,
            virtualized: fe,
            openOnInputClick: ie,
            itemToStringLabel: ue,
            isItemEqualToValue: pe,
            modal: ge,
            autoHighlight: lt,
            submitOnItemClick: _e,
            hasInputValue: it,
            mounted: !1,
            forceMounted: !1,
            transitionStatus: "idle",
            inline: he,
            activeIndex: null,
            selectedIndex: null,
            popupProps: {},
            inputProps: {},
            triggerProps: {},
            itemProps: h.EMPTY_OBJECT,
            positionerElement: null,
            listElement: null,
            popupId: void 0,
            triggerElement: null,
            inputElement: null,
            inputGroupElement: null,
            popupSide: null,
            openMethod: null,
            inputInsidePopup: !0,
            inputOwnsFormValue: "none" === $,
            onOpenChangeComplete: n || M.NOOP,
            setOpen: M.NOOP,
            setInputValue: M.NOOP,
            setSelectedValue: M.NOOP,
            setIndices: M.NOOP,
            onItemHighlighted: M.NOOP,
            handleSelection: M.NOOP,
            forceMount: M.NOOP,
            requestSubmit: M.NOOP,
          }),
      ).current,
      Ct = "none" === $ ? ft : ct,
      It = o.useMemo(
        () =>
          "none" === $
            ? Ct
            : Array.isArray(ct)
              ? ct.map((e) => (0, D.stringifyAsValue)(e, de))
              : (0, D.stringifyAsValue)(ct, de),
        [Ct, de, $, ct],
      ),
      At = (0, l.useStableCallback)(Y),
      Ot = (0, l.useStableCallback)(n),
      Rt = (0, f.useStore)(kt, _.selectors.activeIndex),
      Mt = (0, f.useStore)(kt, _.selectors.selectedIndex),
      Pt = (0, f.useStore)(kt, _.selectors.positionerElement),
      Nt = (0, f.useStore)(kt, _.selectors.listElement),
      Dt = (0, f.useStore)(kt, _.selectors.triggerElement),
      jt = (0, f.useStore)(kt, _.selectors.inputElement),
      Lt = (0, f.useStore)(kt, _.selectors.inputGroupElement),
      Ft = (0, f.useStore)(kt, _.selectors.inline),
      Ut = (0, f.useStore)(kt, _.selectors.inputInsidePopup),
      Bt = (0, f.useStore)(kt, _.selectors.inputOwnsFormValue),
      zt = (0, u.useValueAsRef)(Dt),
      {
        mounted: Ht,
        setMounted: Vt,
        transitionStatus: qt,
      } = (0, A.useTransitionStatus)(mt),
      { openMethod: Gt, triggerProps: Wt } = (0, O.useOpenInteractionType)(mt),
      $t = (0, l.useStableCallback)(() => It);
    (0, E.useRegisterFieldControl)(Ut ? zt : He, Pe, Ct, $t, !tt, K);
    const Yt = (0, l.useStableCallback)(() => {
        ne
          ? (Be.current = Tt.map((e) => (0, D.stringifyAsLabel)(e, ue)))
          : kt.set("forceMounted", !0);
      }),
      Kt = o.useRef(ct);
    (0, a.useIsoLayoutEffect)(() => {
      ct !== Kt.current && Yt();
    }, [Yt, ct]);
    const Zt = (0, l.useStableCallback)((e) => {
        kt.update(e);
        const t = e.type || "none";
        if (void 0 !== e.activeIndex)
          if (null === e.activeIndex)
            Qe.current !== F.INITIAL_LAST_HIGHLIGHT &&
              ((Qe.current = F.INITIAL_LAST_HIGHLIGHT),
              At(
                void 0,
                (0, v.createGenericEventDetails)(t, void 0, {
                  index: -1,
                }),
              ));
          else {
            const n = Xe.current[e.activeIndex];
            (Qe.current = { value: n, index: e.activeIndex }),
              At(
                n,
                (0, v.createGenericEventDetails)(t, void 0, {
                  index: e.activeIndex,
                }),
              );
          }
      }),
      Qt = (0, l.useStableCallback)((t, n) => {
        if (
          (($e.current = n.reason === b.REASONS.inputClear),
          e.onInputValueChange?.(t, n),
          !n.isCanceled)
        ) {
          if (n.reason === b.REASONS.inputChange) {
            const e = n.event,
              r = e.inputType;
            if (
              "compositionend" === e.type ||
              (null != r && "" !== r && "insertReplacementText" !== r)
            ) {
              const e = "" !== t.trim();
              e && je(!0),
                (Je.current = { hasQuery: e }),
                e &&
                  lt &&
                  null == kt.state.activeIndex &&
                  kt.set("activeIndex", 0);
            }
          }
          ht(t);
        }
      }),
      Jt = (0, l.useStableCallback)((t, n) => {
        if (
          mt !== t &&
          ("escape-key" === n.reason &&
            at &&
            0 === Tt.length &&
            !kt.state.emptyRef.current &&
            n.allowPropagation(),
          e.onOpenChange?.(t, n),
          !n.isCanceled &&
            (t &&
              rt &&
              Ut &&
              !Ft &&
              null !== Le &&
              (je(!1),
              Fe(null),
              "" !== ft &&
                Qt(
                  "",
                  (0, v.createChangeEventDetails)(
                    b.REASONS.inputClear,
                    n.event,
                  ),
                )),
            !t &&
              De &&
              (ot
                ? (Ft || Fe(vt), "" === vt && je(!1))
                : rt &&
                  (Ft || Fe(vt),
                  Ut && Zt({ activeIndex: null }),
                  (Ut && !Ft) ||
                    Qt(
                      "",
                      (0, v.createChangeEventDetails)(
                        b.REASONS.inputClear,
                        n.event,
                      ),
                    ))),
            gt(t),
            !t &&
              Ut &&
              (n.reason === b.REASONS.focusOut ||
                n.reason === b.REASONS.outsidePress) &&
              (Ie(!0), Ae(!1), "onBlur" === Oe)))
        ) {
          const e = "none" === $ ? ft : ct;
          Re.commit(e);
        }
      }),
      Xt = (0, l.useStableCallback)((e, t) => {
        H?.(e, t),
          t.isCanceled ||
            (ut(e),
            (("none" === $ && ze.current && me) ||
              (ot && !kt.state.inputInsidePopup)) &&
              Qt(
                (0, D.stringifyAsLabel)(e, ue),
                (0, v.createChangeEventDetails)(t.reason, t.event),
              ),
            ot &&
              null != e &&
              t.reason !== b.REASONS.inputChange &&
              De &&
              !Ft &&
              Fe(vt));
      }),
      en = (0, l.useStableCallback)((e, t) => {
        let n = t;
        if (void 0 === n) {
          if (null === Rt) return;
          n = Xe.current[Rt];
        }
        const r = (0, y.getTarget)(e),
          o = Ze.current ?? e;
        Ze.current = null;
        const i = (0, v.createChangeEventDetails)(b.REASONS.itemPress, o),
          a = r?.closest("a")?.getAttribute("href");
        if (a) a.startsWith("#") && Jt(!1, i);
        else if (rt) {
          const e = Array.isArray(ct) ? ct : [],
            t = (0, j.selectedValueIncludes)(e, n, kt.state.isItemEqualToValue)
              ? (0, j.removeItem)(e, n, kt.state.isItemEqualToValue)
              : [...e, n];
          if ((Xt(t, i), i.isCanceled)) return;
          if (!He.current || "" === He.current.value.trim()) return;
          kt.state.inputInsidePopup
            ? Qt(
                "",
                (0, v.createChangeEventDetails)(b.REASONS.inputClear, i.event),
              )
            : Jt(!1, i);
        } else {
          if ((Xt(n, i), i.isCanceled)) return;
          Jt(!1, i);
        }
      }),
      tn = (0, l.useStableCallback)(() => {
        if (!kt.state.submitOnItemClick) return;
        const e = Re.inputRef.current?.form ?? kt.state.inputElement?.form;
        e && "function" == typeof e.requestSubmit && e.requestSubmit();
      }),
      nn = (0, l.useStableCallback)(() => {
        if (
          (Vt(!1),
          Ot?.(!1),
          je(!1),
          Fe(null),
          Zt(
            "none" === $
              ? { activeIndex: null, selectedIndex: null }
              : { activeIndex: null },
          ),
          rt &&
            He.current &&
            "" !== He.current.value &&
            !$e.current &&
            Qt("", (0, v.createChangeEventDetails)(b.REASONS.inputClear)),
          ot)
        )
          if (kt.state.inputInsidePopup)
            He.current &&
              "" !== He.current.value &&
              Qt("", (0, v.createChangeEventDetails)(b.REASONS.inputClear));
          else {
            const e = (0, D.stringifyAsLabel)(ct, ue);
            if (He.current && He.current.value !== e) {
              const t = "" === e ? b.REASONS.inputClear : b.REASONS.none;
              Qt(e, (0, v.createChangeEventDetails)(t));
            }
          }
      }),
      rn = o.useMemo(
        () => (Ft && Pt ? { current: Pt.closest('[role="dialog"]') } : ze),
        [Ft, Pt],
      );
    (0, x.useOpenChangeComplete)({
      enabled: !e.actionsRef,
      open: mt,
      ref: rn,
      onComplete() {
        mt || nn();
      },
    }),
      o.useImperativeHandle(e.actionsRef, () => ({ unmount: nn }), [nn]),
      (0, a.useIsoLayoutEffect)(
        function () {
          if (mt || "none" === $) return;
          const e = ne ? wt : et.current;
          if (rt) {
            const t = Array.isArray(ct) ? ct : [],
              n = t[t.length - 1],
              r = (0, j.findItemIndex)(e, n, pe);
            Zt({ selectedIndex: -1 === r ? null : r });
          } else {
            const t = (0, j.findItemIndex)(e, ct, pe);
            Zt({ selectedIndex: -1 === t ? null : t });
          }
        },
        [mt, ct, ne, $, wt, rt, pe, Zt],
      ),
      (0, a.useIsoLayoutEffect)(() => {
        ne && ((Xe.current = Tt), (Ue.current.length = Tt.length));
      }, [ne, Tt]),
      (0, a.useIsoLayoutEffect)(() => {
        const e = Je.current;
        if (
          (e &&
            (e.hasQuery
              ? lt && kt.set("activeIndex", 0)
              : "always" === lt && kt.set("activeIndex", 0),
            (Je.current = null)),
          !mt && !Ft)
        )
          return;
        const t = at || st ? Tt : Xe.current,
          n = kt.state.activeIndex;
        if (null == n)
          return "always" === lt && t.length > 0
            ? void kt.set("activeIndex", 0)
            : void (
                Qe.current !== F.INITIAL_LAST_HIGHLIGHT &&
                ((Qe.current = F.INITIAL_LAST_HIGHLIGHT),
                kt.state.onItemHighlighted(
                  void 0,
                  (0, v.createGenericEventDetails)(b.REASONS.none, void 0, {
                    index: -1,
                  }),
                ))
              );
        if (n >= t.length)
          return (
            Qe.current !== F.INITIAL_LAST_HIGHLIGHT &&
              ((Qe.current = F.INITIAL_LAST_HIGHLIGHT),
              kt.state.onItemHighlighted(
                void 0,
                (0, v.createGenericEventDetails)(b.REASONS.none, void 0, {
                  index: -1,
                }),
              )),
            void kt.set("activeIndex", null)
          );
        const r = t[n],
          o = Qe.current.value,
          i =
            o !== F.NO_ACTIVE_VALUE &&
            (0, j.compareItemEquality)(r, o, kt.state.isItemEqualToValue);
        (Qe.current.index === n && i) ||
          ((Qe.current = { value: r, index: n }),
          kt.state.onItemHighlighted(
            r,
            (0, v.createGenericEventDetails)(b.REASONS.none, void 0, {
              index: n,
            }),
          ));
      }, [Rt, lt, st, at, Tt, Ft, mt, kt]),
      (0, a.useIsoLayoutEffect)(() => {
        Te(
          "none" !== $
            ? rt
              ? Array.isArray(ct) && ct.length > 0
              : null != ct
            : "" !== String(ft),
        );
      }, [Te, $, ft, ct, rt]),
      o.useEffect(() => {
        at && lt && 0 === Tt.length && Zt({ activeIndex: null });
      }, [at, lt, Tt.length, Zt]),
      (0, R.useValueChanged)(vt, () => {
        mt && "" !== vt && vt !== String(pt) && je(!0);
      }),
      (0, R.useValueChanged)(ct, () => {
        if (
          "none" !== $ &&
          (xe(nt),
          we(
            (function (e) {
              const t = Ee.initialValue;
              return Array.isArray(e) && Array.isArray(t)
                ? !(0, L.areArraysEqual)(e, t, (e, t) =>
                    (0, j.compareItemEquality)(e, t, pe),
                  )
                : e !== t;
            })(ct),
          ),
          Re.change(ct),
          ot && !it && !Ut)
        ) {
          const e = (0, D.stringifyAsLabel)(ct, ue);
          ft !== e && Qt(e, (0, v.createChangeEventDetails)(b.REASONS.none));
        }
      }),
      (0, R.useValueChanged)(ft, () => {
        "none" === $ && (xe(nt), we(ft !== Ee.initialValue), Re.change(ft));
      }),
      (0, R.useValueChanged)(ne, () => {
        if (!ot || it || Ut || De) return;
        const e = (0, D.stringifyAsLabel)(ct, ue);
        ft !== e && Qt(e, (0, v.createChangeEventDetails)(b.REASONS.none));
      });
    const on = (0, m.useFloatingRootContext)({
      open: !!Ft || mt,
      onOpenChange: Jt,
      elements: { reference: Ut ? Dt : jt, floating: Pt },
    });
    let an, sn;
    Ft || ((an = te ? "grid" : "listbox"), (sn = mt ? "true" : "false"));
    const ln = o.useMemo(() => {
        const e = null == jt || "INPUT" === jt?.tagName,
          t = e
            ? {
                autoComplete: "off",
                spellCheck: "false",
                autoCorrect: "off",
                autoCapitalize: "none",
              }
            : {};
        return (
          (e || mt) &&
            ((t.role = "combobox"),
            (t["aria-expanded"] = sn),
            (t["aria-haspopup"] = an),
            (t["aria-controls"] = mt ? Nt?.id : void 0),
            (t["aria-autocomplete"] = ve)),
          { reference: t, floating: { role: "presentation" } }
        );
      }, [jt, mt, sn, an, Nt?.id, ve]),
      cn = (0, m.useClick)(on, {
        enabled: !J && !tt && ie,
        event: "mousedown-only",
        toggle: !1,
        touchOpenDelay: Ut ? 0 : 100,
        reason: b.REASONS.inputPress,
      }),
      un = (0, m.useDismiss)(on, {
        enabled: !J && !tt && !Ft,
        outsidePressEvent: { mouse: "sloppy", touch: "intentional" },
        bubbles: !!Ft || void 0,
        outsidePress(e) {
          const t = (0, y.getTarget)(e);
          return !(
            (0, y.contains)(Dt, t) ||
            (0, y.contains)(Ke.current, t) ||
            (0, y.contains)(Ye.current, t) ||
            (0, y.contains)(Lt, t)
          );
        },
      }),
      dn = (0, m.useListNavigation)(on, {
        enabled: !J && !tt,
        id: Pe,
        listRef: Ue,
        activeIndex: Rt,
        selectedIndex: Mt,
        virtual: !0,
        loopFocus: ce,
        allowEscape: ce && !lt,
        focusItemOnOpen: !(De || ("none" === $ && !lt)) && "auto",
        focusItemOnHover: le,
        resetOnPointerLeave: !se,
        orientation: te ? "horizontal" : void 0,
        rtl: "rtl" === Me,
        disabledIndices: h.EMPTY_ARRAY,
        grid: te ? g.gridNavigation : void 0,
        onNavigate(e, t) {
          (t || mt) &&
            "ending" !== qt &&
            Zt(
              t
                ? {
                    activeIndex: e,
                    type: We.current ? "keyboard" : "pointer",
                  }
                : { activeIndex: e },
            );
        },
      }),
      pn = o.useMemo(
        () =>
          (0, N.mergeProps)(
            dn.reference,
            {
              onKeyDown(e) {
                !te ||
                  null != kt.state.activeIndex ||
                  ("ArrowLeft" !== e.key && "ArrowRight" !== e.key) ||
                  e.preventBaseUIHandler();
              },
            },
            un.reference,
            cn.reference,
            ln.reference,
          ),
        [dn.reference, un.reference, cn.reference, ln.reference, te, kt],
      ),
      fn = o.useMemo(
        () =>
          (0, N.mergeProps)(
            P.FOCUSABLE_POPUP_PROPS,
            dn.floating,
            un.floating,
            ln.floating,
          ),
        [dn.floating, un.floating, ln.floating],
      ),
      hn = o.useMemo(() => {
        const e = dn.item;
        return e ? { ...e, onFocus: void 0 } : h.EMPTY_OBJECT;
      }, [dn.item]);
    (0, s.useOnFirstRender)(() => {
      kt.update({
        inline: he,
        popupProps: fn,
        inputProps: pn,
        triggerProps: Wt,
        itemProps: hn,
        setOpen: Jt,
        setInputValue: Qt,
        setSelectedValue: Xt,
        setIndices: Zt,
        onItemHighlighted: At,
        handleSelection: en,
        forceMount: Yt,
        requestSubmit: tn,
      });
    }),
      (0, a.useIsoLayoutEffect)(() => {
        kt.update({
          id: Pe,
          selectedValue: ct,
          open: mt,
          mounted: Ht,
          transitionStatus: qt,
          items: ne,
          inline: he,
          popupProps: fn,
          inputProps: pn,
          triggerProps: Wt,
          openMethod: Gt,
          itemProps: hn,
          selectionMode: $,
          name: nt,
          form: Z,
          disabled: tt,
          readOnly: J,
          required: X,
          grid: te,
          isGrouped: yt,
          virtualized: fe,
          onOpenChangeComplete: Ot,
          openOnInputClick: ie,
          itemToStringLabel: ue,
          modal: ge,
          autoHighlight: lt,
          isItemEqualToValue: pe,
          submitOnItemClick: _e,
          hasInputValue: it,
          requestSubmit: tn,
          inputOwnsFormValue:
            "none" === $ && (he || !kt.state.inputInsidePopup),
        });
      }, [
        kt,
        Pe,
        ct,
        mt,
        Ht,
        qt,
        ne,
        fn,
        pn,
        hn,
        Gt,
        Wt,
        $,
        nt,
        tt,
        J,
        X,
        Re,
        te,
        yt,
        fe,
        Ot,
        ie,
        ue,
        ge,
        pe,
        _e,
        it,
        he,
        tn,
        lt,
        Z,
      ]);
    const mn = (0, c.useMergedRefs)(ee, Re.inputRef),
      gn = o.useMemo(
        () => ({
          query: vt,
          hasItems: at,
          filteredItems: Et,
          flatFilteredItems: Tt,
        }),
        [vt, at, Et, Tt],
      ),
      yn = o.useMemo(
        () => (Array.isArray(Ct) ? "" : (0, D.stringifyAsValue)(Ct, de)),
        [Ct, de],
      ),
      vn = rt && Array.isArray(ct) && ct.length > 0,
      bn = rt || ("none" === $ && Bt) ? void 0 : nt,
      Sn = o.useMemo(
        () =>
          rt && Array.isArray(ct) && nt
            ? ct.map((e) => {
                const t = (0, D.stringifyAsValue)(e, de);
                return (0, B.jsx)(
                  "input",
                  {
                    type: "hidden",
                    form: Z,
                    name: nt,
                    value: t,
                    disabled: tt,
                  },
                  t,
                );
              })
            : null,
        [rt, ct, Z, nt, de, tt],
      ),
      _n = (0, B.jsxs)(o.Fragment, {
        children: [
          e.children,
          (0, B.jsx)("input", {
            ...Re.getValidationProps(tt, {
              onFocus() {
                Ut ? Dt?.focus() : (He.current || Dt)?.focus();
              },
              onChange(e) {
                if (e.nativeEvent.defaultPrevented || tt || J) return;
                const t = e.currentTarget.value,
                  n = t.toLowerCase(),
                  r = (0, v.createChangeEventDetails)(
                    b.REASONS.none,
                    e.nativeEvent,
                  ),
                  o = () =>
                    Xe.current.findIndex(
                      (e) =>
                        (0, D.stringifyAsValue)(e, de).toLowerCase() === n ||
                        (0, D.stringifyAsLabel)(e, ue).toLowerCase() === n,
                    );
                ot && (Yt(), ne && -1 === o() && kt.set("forceMounted", !0)),
                  queueMicrotask(function () {
                    if (rt) return;
                    if ("none" === $) return void Qt(t, r);
                    let e = o();
                    -1 === e &&
                      (e = Xe.current.findIndex((e, t) => {
                        const r = Be.current[t];
                        return null != r && r.toLowerCase() === n;
                      }));
                    const i = -1 === e ? void 0 : Xe.current[e];
                    null != i && Xt?.(i, r);
                  });
              },
            }),
            id: Pe && null == bn ? `${Pe}-hidden-input` : void 0,
            form: Z,
            name: bn,
            autoComplete: be,
            disabled: tt,
            required: X && !vn,
            readOnly: J,
            value: yn,
            ref: mn,
            style: bn ? d.visuallyHiddenInput : d.visuallyHidden,
            tabIndex: -1,
            "aria-hidden": !0,
            suppressHydrationWarning: !0,
          }),
          Sn,
        ],
      });
    return (0, B.jsx)(S.ComboboxRootContext.Provider, {
      value: kt,
      children: (0, B.jsx)(S.ComboboxFloatingContext.Provider, {
        value: on,
        children: (0, B.jsx)(S.ComboboxHasItemsContext.Provider, {
          value: at,
          children: (0, B.jsx)(S.ComboboxDerivedItemsContext.Provider, {
            value: gn,
            children: (0, B.jsx)(S.ComboboxInputValueContext.Provider, {
              value: ft,
              children: _n,
            }),
          }),
        }),
      }),
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(95836 /* vendor/module-95836 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(30101 /* vendor/module-30101 */),
  l = n(4674 /* vendor/module-4674 */),
  c = n(12772 /* vendor/module-12772 */),
  u = n(71740 /* vendor/module-71740 */),
  d = n(38602 /* vendor/module-38602 */),
  p = n(16843 /* vendor/module-16843 */),
  f = n(78207 /* vendor/module-78207 */),
  h = n(38340 /* vendor/module-38340 */),
  m = n(47797 /* vendor/module-47797 */),
  g = n(32570 /* vendor/module-32570 */),
  y = n(65200 /* vendor/module-65200 */),
  v = n(22877 /* vendor/module-22877 */),
  b = n(82063 /* vendor/module-82063 */),
  S = n(32118 /* vendor/module-32118 */),
  _ = n(36826 /* vendor/module-36826 */),
  x = n(15586 /* vendor/module-15586 */),
  w = n(62527 /* vendor/module-62527 */),
  E = n(85326 /* vendor/module-85326 */),
  T = n(77982 /* vendor/module-77982 */),
  k = n(62429 /* vendor/module-62429 */),
  C = n(38458 /* vendor/module-38458 */),
  I = n(17539 /* vendor/module-17539 */),
  A = n(45796 /* vendor/module-45796 */),
  O = n(91988 /* vendor/module-91988 */),
  R = n(24422 /* vendor/module-24422 */),
  M = n(75224 /* vendor/module-75224 */),
  P = n(94661 /* vendor/module-94661 */),
  N = n(55327 /* vendor/module-55327 */),
  D = n(25411 /* vendor/module-25411 */),
  j = n(68323 /* vendor/module-68323 */),
  L = n(81268 /* vendor/module-81268 */),
  F = n(30411 /* vendor/module-30411 */),
  U = n(96092 /* vendor/module-96092 */),
  B = n(31085 /* vendor/module-31085 */);
