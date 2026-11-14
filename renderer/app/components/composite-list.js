// app/components/composite-list.js — webpack module 77144
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.CompositeList = function (e) {
    const { children: t, elementsRef: n, labelsRef: r, onMapChange: f } = e,
      h = (0, a.useStableCallback)(f),
      m = o.useRef(0),
      g = (0, i.useRefWithInit)(d).current,
      y = (0, i.useRefWithInit)(u).current,
      [v, b] = o.useState(0),
      S = o.useRef(v),
      _ = (0, a.useStableCallback)((e, t) => {
        y.set(e, t ?? null), (S.current += 1), b(S.current);
      }),
      x = (0, a.useStableCallback)((e) => {
        y.delete(e), (S.current += 1), b(S.current);
      }),
      w = o.useMemo(() => {
        const e = new Map();
        return (
          Array.from(y.keys())
            .filter((e) => e.isConnected)
            .sort(p)
            .forEach((t, n) => {
              const r = y.get(t) ?? {};
              e.set(t, { ...r, index: n });
            }),
          e
        );
      }, [y, v]);
    (0, s.useIsoLayoutEffect)(() => {
      if ("function" != typeof MutationObserver || 0 === w.size) return;
      const e = new MutationObserver((e) => {
        const t = new Set(),
          n = (e) => (t.has(e) ? t.delete(e) : t.add(e));
        e.forEach((e) => {
          e.removedNodes.forEach(n), e.addedNodes.forEach(n);
        }),
          0 === t.size && ((S.current += 1), b(S.current));
      });
      return (
        w.forEach((t, n) => {
          n.parentElement && e.observe(n.parentElement, { childList: !0 });
        }),
        () => {
          e.disconnect();
        }
      );
    }, [w]),
      (0, s.useIsoLayoutEffect)(() => {
        S.current === v &&
          (n.current.length !== w.size && (n.current.length = w.size),
          r && r.current.length !== w.size && (r.current.length = w.size),
          (m.current = w.size)),
          h(w);
      }, [h, w, n, r, v]),
      (0, s.useIsoLayoutEffect)(
        () => () => {
          n.current = [];
        },
        [n],
      ),
      (0, s.useIsoLayoutEffect)(
        () => () => {
          r && (r.current = []);
        },
        [r],
      );
    const E = (0, a.useStableCallback)(
      (e) => (
        g.add(e),
        () => {
          g.delete(e);
        }
      ),
    );
    (0, s.useIsoLayoutEffect)(() => {
      g.forEach((e) => e(w));
    }, [g, w]);
    const T = o.useMemo(
      () => ({
        register: _,
        unregister: x,
        subscribeMapChange: E,
        elementsRef: n,
        labelsRef: r,
        nextIndexRef: m,
      }),
      [_, x, E, n, r, m],
    );
    return (0, c.jsx)(l.CompositeListContext.Provider, {
      value: T,
      children: t,
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(16843 /* vendor/module-16843 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(38541 /* vendor/module-38541 */),
  c = n(31085 /* vendor/module-31085 */);
function u() {
  return new Map();
}
function d() {
  return new Set();
}
function p(e, t) {
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING ||
    n & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING ||
        n & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
}
