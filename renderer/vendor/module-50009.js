// vendor/module-50009.js — webpack module 50009
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useCompositeRoot = function (e) {
    const {
        loopFocus: t = !0,
        orientation: n = "both",
        grid: r,
        onLoop: f,
        direction: h,
        highlightedIndex: m,
        onHighlightedIndexChange: g,
        rootRef: y,
        enableHomeAndEndKeys: v = !1,
        stopEventPropagation: b = !1,
        disabledIndices: S,
        modifierKeys: _ = p,
      } = e,
      [x, w] = o.useState(0),
      E = null != r,
      T = o.useRef(null),
      k = (0, s.useMergedRefs)(T, y),
      C = o.useRef([]),
      I = o.useRef(!1),
      A = m ?? x,
      O = (0, a.useStableCallback)((e, t = !1) => {
        if (((g ?? w)(e), t)) {
          const t = C.current[e];
          (0, c.scrollIntoViewIfNeeded)(T.current, t, h, n);
        }
      }),
      R = (0, a.useStableCallback)((e) => {
        if (0 === e.size || I.current) return;
        I.current = !0;
        const t = Array.from(e.keys()),
          r = t.find((e) => e?.hasAttribute(u.ACTIVE_COMPOSITE_ITEM)) ?? null,
          o = r ? t.indexOf(r) : -1;
        if (-1 !== o) O(o);
        else if ((0, c.isListIndexDisabled)(t, A, S)) {
          const e = (0, c.findNonDisabledListIndex)(t, {
            disabledIndices: S,
          });
          (0, c.isIndexOutOfListBounds)(t, e) || O(e);
        }
        (0, c.scrollIntoViewIfNeeded)(T.current, r, h, n);
      });
    (0, l.useIsoLayoutEffect)(() => {
      if (null == S || null != m || !I.current) return;
      const e = C.current;
      if ((0, c.isListIndexDisabled)(e, A, S)) {
        const t = (0, c.findNonDisabledListIndex)(e, {
          disabledIndices: S,
        });
        (0, c.isIndexOutOfListBounds)(e, t) || O(t);
      }
    }, [S, m, A, C, O]);
    const M = (0, a.useStableCallback)((e, t, n) => (f ? f(e, t, n, C) : n)),
      P = (0, a.useStableCallback)((e) => {
        const o = v ? c.COMPOSITE_KEYS : c.ARROW_KEYS;
        if (!o.has(e.key)) return;
        if (
          (function (e, t) {
            for (const n of c.MODIFIER_KEYS.values())
              if (!t.includes(n) && e.getModifierState(n)) return !0;
            return !1;
          })(e, _)
        )
          return;
        if (!T.current) return;
        const a = "rtl" === h,
          s = a ? c.ARROW_LEFT : c.ARROW_RIGHT,
          l = { horizontal: s, vertical: c.ARROW_DOWN, both: s }[n],
          u = a ? c.ARROW_RIGHT : c.ARROW_LEFT,
          p = { horizontal: u, vertical: c.ARROW_UP, both: u }[n],
          m = (0, d.getTarget)(e.nativeEvent);
        if (
          null != m &&
          (0, c.isNativeInput)(m) &&
          !(0, i.isElementDisabled)(m)
        ) {
          const t = m.selectionStart,
            n = m.selectionEnd,
            r = m.value ?? "";
          if (null == t || e.shiftKey || t !== n) return;
          if (e.key !== p && t < r.length) return;
          if (e.key !== l && t > 0) return;
        }
        let g = A;
        const y = (0, c.getMinListIndex)(C, S),
          x = (0, c.getMaxListIndex)(C, S);
        null != r &&
          (g = r({
            disabledIndices: S,
            elementsRef: C,
            event: e,
            highlightedIndex: A,
            loopFocus: t,
            maxIndex: x,
            minIndex: y,
            onLoop: M,
            orientation: n,
            rtl: a,
          }));
        const w = {
            horizontal: [s],
            vertical: [c.ARROW_DOWN],
            both: [s, c.ARROW_DOWN],
          }[n],
          k = {
            horizontal: [u],
            vertical: [c.ARROW_UP],
            both: [u, c.ARROW_UP],
          }[n],
          I = E
            ? o
            : {
                horizontal: v
                  ? c.HORIZONTAL_KEYS_WITH_EXTRA_KEYS
                  : c.HORIZONTAL_KEYS,
                vertical: v ? c.VERTICAL_KEYS_WITH_EXTRA_KEYS : c.VERTICAL_KEYS,
                both: o,
              }[n];
        v && (e.key === c.HOME ? (g = y) : e.key === c.END && (g = x)),
          g === A &&
            (w.includes(e.key) || k.includes(e.key)) &&
            (t && g === x && w.includes(e.key)
              ? ((g = y), f && (g = f(e, A, g, C)))
              : t && g === y && k.includes(e.key)
                ? ((g = x), f && (g = f(e, A, g, C)))
                : (g = (0, c.findNonDisabledListIndex)(C.current, {
                    startingIndex: g,
                    decrement: k.includes(e.key),
                    disabledIndices: S,
                  }))),
          g === A ||
            (0, c.isIndexOutOfListBounds)(C.current, g) ||
            (b && e.stopPropagation(),
            I.has(e.key) && e.preventDefault(),
            O(g, !0),
            queueMicrotask(() => {
              C.current[g]?.focus();
            }));
      });
    return {
      props: {
        ref: k,
        onFocus(e) {
          const t = T.current,
            n = (0, d.getTarget)(e.nativeEvent);
          t &&
            null != n &&
            (0, c.isNativeInput)(n) &&
            n.setSelectionRange(0, n.value.length ?? 0);
        },
        onKeyDown: P,
      },
      highlightedIndex: A,
      onHighlightedIndexChange: O,
      elementsRef: C,
      disabledIndices: S,
      onMapChange: R,
      relayKeyboardEvent: P,
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(3137 /* vendor/module-3137 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(12772 /* vendor/module-12772 */),
  l = n(57122 /* vendor/module-57122 */),
  c = n(30197 /* vendor/module-30197 */),
  u = n(8647 /* vendor/module-8647 */),
  d = n(65200 /* vendor/module-65200 */);
const p = [];
