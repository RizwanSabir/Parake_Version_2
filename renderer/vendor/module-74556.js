// vendor/module-74556.js — webpack module 74556
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useTypeahead = function (e, t) {
    const {
        listRef: n,
        elementsRef: r,
        activeIndex: p,
        onMatch: f,
        disabledIndices: h,
        onTyping: m,
        enabled: g = !0,
        resetMs: y = 750,
        selectedIndex: v = null,
      } = t,
      b = "rootStore" in e ? e.rootStore : e,
      S = b.useState("open"),
      _ = (0, s.useTimeout)(),
      x = o.useRef(""),
      w = o.useRef(v ?? p ?? -1),
      E = o.useRef(null),
      T = (0, a.useStableCallback)((e) => {
        function t(e) {
          return !(
            !(function (e) {
              const t = r?.current[e];
              return !t || (0, c.isElementVisible)(t);
            })(e) ||
            (null != h && (0, c.isListIndexDisabled)(l.EMPTY_ARRAY, e, h))
          );
        }
        function o(e, n, r = 0) {
          if (0 === e.length) return -1;
          const o = ((r % e.length) + e.length) % e.length,
            i = n.toLowerCase();
          for (let n = 0; n < e.length; n += 1) {
            const r = (o + n) % e.length,
              a = e[r];
            if (a?.toLowerCase().startsWith(i) && t(r)) return r;
          }
          return -1;
        }
        const i = n.current;
        if (
          (x.current.length > 0 &&
            " " === e.key &&
            ((0, d.stopEvent)(e), m?.(!0)),
          x.current.length > 0 &&
            " " !== x.current[0] &&
            -1 === o(i, x.current) &&
            " " !== e.key &&
            m?.(!1),
          null == i || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey)
        )
          return;
        S && " " !== e.key && ((0, d.stopEvent)(e), m?.(!0));
        const a = "" === x.current;
        a && (w.current = v ?? p ?? -1);
        const s = i.every(
          (e, n) => !e || !t(n) || e[0]?.toLowerCase() !== e[1]?.toLowerCase(),
        );
        s && x.current === e.key && ((x.current = ""), (w.current = E.current)),
          (x.current += e.key),
          _.start(y, () => {
            (x.current = ""), (w.current = E.current), m?.(!1);
          });
        const u = ((a ? (v ?? p ?? -1) : w.current) ?? 0) + 1,
          g = o(i, x.current, u);
        -1 !== g
          ? (f?.(g), (E.current = g))
          : " " !== e.key && ((x.current = ""), m?.(!1));
      }),
      k = (0, a.useStableCallback)((e) => {
        const t = e.relatedTarget,
          n = b.select("domReferenceElement"),
          r = b.select("floatingElement");
        (0, u.contains)(n, t) ||
          (0, u.contains)(r, t) ||
          (_.clear(), (x.current = ""), (w.current = E.current), m?.(!1));
      });
    (0, i.useIsoLayoutEffect)(() => {
      (S || null === v) &&
        (_.clear(), (E.current = null), "" !== x.current && (x.current = ""));
    }, [S, v, _]),
      (0, i.useIsoLayoutEffect)(() => {
        S && "" === x.current && (w.current = v ?? p ?? -1);
      }, [S, v, p]);
    const C = o.useMemo(() => ({ onKeyDown: T, onBlur: k }), [T, k]);
    return o.useMemo(() => (g ? { reference: C, floating: C } : {}), [g, C]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(54807 /* vendor/module-54807 */),
  l = n(38340 /* vendor/module-38340 */),
  c = n(50684 /* vendor/module-50684 */),
  u = n(80475 /* vendor/module-80475 */),
  d = n(76475 /* vendor/module-76475 */);
