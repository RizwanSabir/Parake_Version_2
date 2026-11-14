// app/components/combobox-chip.js — webpack module 56133
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxChip = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(78207 /* vendor/module-78207 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(84542 /* vendor/module-84542 */),
  c = n(32118 /* vendor/module-32118 */),
  u = n(33770 /* vendor/module-33770 */),
  d = n(47870 /* vendor/module-47870 */),
  p = n(65200 /* vendor/module-65200 */),
  f = n(36826 /* vendor/module-36826 */),
  h = n(22877 /* vendor/module-22877 */),
  m = n(82063 /* vendor/module-82063 */),
  g = n(96092 /* vendor/module-96092 */),
  y = n(31085 /* vendor/module-31085 */);
t.ComboboxChip = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: v, ...b } = e,
    S = (0, c.useComboboxRootContext)(),
    { setHighlightedChipIndex: _, chipsRef: x } = (0,
    l.useComboboxChipsContext)(),
    w = (0, g.useDirection)(),
    E = (0, a.useStore)(S, f.selectors.disabled),
    T = (0, a.useStore)(S, f.selectors.readOnly),
    k = (0, a.useStore)(S, f.selectors.selectedValue),
    { ref: C, index: I } = (0, u.useCompositeListItem)(),
    A = { disabled: E },
    O = (0, s.useRenderElement)("div", e, {
      ref: [t, C],
      state: A,
      props: [
        {
          tabIndex: -1,
          "aria-disabled": E || void 0,
          "aria-readonly": T || void 0,
          onKeyDown(e) {
            if (E || T) return;
            const t = (function (e) {
              let t = I;
              const n = "rtl" === w,
                r = n ? "ArrowRight" : "ArrowLeft",
                o = n ? "ArrowLeft" : "ArrowRight";
              if (e.key === r) e.preventDefault(), (t = I > 0 ? I - 1 : void 0);
              else if (e.key === o)
                e.preventDefault(),
                  (t = I < x.current.length - 1 ? I + 1 : void 0);
              else if ("Backspace" === e.key || "Delete" === e.key) {
                const n = I >= k.length - 1 ? k.length - 2 : I;
                (t = n >= 0 ? n : void 0),
                  (0, p.stopEvent)(e),
                  S.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: "keyboard",
                  }),
                  S.state.setSelectedValue(
                    k.filter((e, t) => t !== I),
                    (0, h.createChangeEventDetails)(
                      m.REASONS.none,
                      e.nativeEvent,
                    ),
                  );
              } else
                "Enter" === e.key || " " === e.key
                  ? ((0, p.stopEvent)(e), (t = void 0))
                  : "ArrowDown" === e.key || "ArrowUp" === e.key
                    ? ((0, p.stopEvent)(e),
                      S.state.setOpen(
                        !0,
                        (0, h.createChangeEventDetails)(
                          m.REASONS.listNavigation,
                          e.nativeEvent,
                        ),
                      ),
                      (t = void 0))
                    : 1 !== e.key.length ||
                      e.ctrlKey ||
                      e.metaKey ||
                      e.altKey ||
                      (t = void 0);
              return t;
            })(e);
            i.flushSync(() => {
              _(t);
            }),
              void 0 === t
                ? S.state.inputRef.current?.focus()
                : x.current[t]?.focus();
          },
        },
        b,
      ],
    }),
    R = o.useMemo(() => ({ index: I }), [I]);
  return (0, y.jsx)(d.ComboboxChipContext.Provider, {
    value: R,
    children: O,
  });
});
