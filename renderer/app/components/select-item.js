// app/components/select-item.js — webpack module 34391
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectItem = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(78207 /* vendor/module-78207 */),
  s = n(22370 /* vendor/module-22370 */),
  l = n(33770 /* vendor/module-33770 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(68720 /* vendor/module-68720 */),
  d = n(84557 /* vendor/module-84557 */),
  p = n(63917 /* vendor/module-63917 */),
  f = n(22877 /* vendor/module-22877 */),
  h = n(82063 /* vendor/module-82063 */),
  m = n(68323 /* vendor/module-68323 */),
  g = n(76475 /* vendor/module-76475 */),
  y = n(31085 /* vendor/module-31085 */);
t.SelectItem = o.memo(
  o.forwardRef(function (e, t) {
    const {
        render: n,
        className: r,
        style: v,
        value: b = null,
        label: S,
        disabled: _ = !1,
        nativeButton: x = !1,
        ...w
      } = e,
      E = o.useRef(null),
      T = (0, l.useCompositeListItem)({
        label: S,
        textRef: E,
        indexGuessBehavior: l.IndexGuessBehavior.GuessFromOrder,
      }),
      {
        store: k,
        itemProps: C,
        setOpen: I,
        setValue: A,
        selectionRef: O,
        typingRef: R,
        valuesRef: M,
        multiple: P,
        selectedItemTextRef: N,
        disabled: D,
        readOnly: j,
      } = (0, s.useSelectRootContext)(),
      L = (0, a.useStore)(k, d.selectors.isActive, T.index),
      F = (0, a.useStore)(k, d.selectors.open),
      U = (0, a.useStore)(k, d.selectors.isSelected, b),
      B = (0, a.useStore)(k, d.selectors.isSelectedByFocus, T.index),
      z = (0, a.useStore)(k, d.selectors.isItemEqualToValue),
      H = T.index,
      V = -1 !== H,
      q = o.useRef(null);
    (0, i.useIsoLayoutEffect)(() => {
      if (!V) return;
      const e = M.current;
      return (
        (e[H] = b),
        () => {
          delete e[H];
        }
      );
    }, [V, H, b, M]),
      (0, i.useIsoLayoutEffect)(() => {
        if (!V) return;
        const e = k.state.value;
        let t = e;
        P && Array.isArray(e) && (t = e.length > 0 ? e[e.length - 1] : void 0),
          void 0 !== t &&
            (0, m.compareItemEquality)(b, t, z) &&
            (k.set("selectedIndex", H), E.current && (N.current = E.current));
      }, [V, H, P, z, k, b, N]);
    const G = o.useRef(null),
      W = o.useRef("mouse"),
      $ = o.useRef(!1),
      { getButtonProps: Y, buttonRef: K } = (0, p.useButton)({
        disabled: _,
        focusableWhenDisabled: !0,
        native: x,
        composite: !0,
      }),
      Z = { disabled: _, selected: U, highlighted: L };
    function Q() {
      O.current.dragY = 0;
    }
    const J = {
        role: "option",
        "aria-selected": U,
        tabIndex: F && L ? 0 : -1,
        onKeyDown(e) {
          (G.current = e.key),
            k.set("activeIndex", H),
            " " === e.key && R.current && e.preventDefault();
        },
        onClick(e) {
          const t = "click" === e.type && "touch" !== W.current,
            n = e.nativeEvent.pointerType,
            r =
              t && (0, g.isVirtualClick)(e.nativeEvent) && (void 0 !== n || L),
            o = t && !r && !$.current;
          ($.current = !1),
            ("keydown" === e.type && null === G.current) ||
              _ ||
              ("keydown" === e.type && " " === G.current && R.current) ||
              o ||
              ((G.current = null),
              (function (e) {
                if (D || j) return;
                const t = k.state.value;
                if (P) {
                  const n = Array.isArray(t) ? t : [],
                    r = U ? (0, m.removeItem)(n, b, z) : [...n, b];
                  A(r, (0, f.createChangeEventDetails)(h.REASONS.itemPress, e));
                } else
                  A(b, (0, f.createChangeEventDetails)(h.REASONS.itemPress, e)),
                    I(
                      !1,
                      (0, f.createChangeEventDetails)(h.REASONS.itemPress, e),
                    );
              })(e.nativeEvent));
        },
        onPointerEnter(e) {
          W.current = e.pointerType;
        },
        onPointerMove(e) {
          if ("mouse" === e.pointerType && 1 === e.buttons) {
            const t = O.current;
            (t.dragY += e.movementY),
              t.dragY ** 2 >= 64 && (t.allowUnselectedMouseUp = !0);
          }
        },
        onPointerDown(e) {
          (W.current = e.pointerType), ($.current = !0), Q();
        },
        onMouseUp() {
          if ((Q(), _ || "touch" === W.current)) return;
          if ($.current) return;
          const e = !O.current.allowSelectedMouseUp && U,
            t = !O.current.allowUnselectedMouseUp && !U;
          e || t || (($.current = !0), q.current?.click(), ($.current = !1));
        },
      },
      X = (0, c.useRenderElement)("div", e, {
        ref: [K, t, T.ref, q],
        state: Z,
        props: [C, J, w, Y],
      }),
      ee = o.useMemo(
        () => ({
          selected: U,
          index: H,
          textRef: E,
          selectedByFocus: B,
          hasRegistered: V,
        }),
        [U, H, E, B, V],
      );
    return (0, y.jsx)(u.SelectItemContext.Provider, {
      value: ee,
      children: X,
    });
  }),
);
