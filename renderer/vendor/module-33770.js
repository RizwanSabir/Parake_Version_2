// vendor/module-33770.js — webpack module 33770
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.IndexGuessBehavior = void 0),
  (t.useCompositeListItem = function (e = {}) {
    const {
        label: t,
        metadata: n,
        textRef: r,
        indexGuessBehavior: l,
        index: c,
      } = e,
      {
        register: u,
        unregister: d,
        subscribeMapChange: p,
        elementsRef: f,
        labelsRef: h,
        nextIndexRef: m,
      } = (0, a.useCompositeListContext)(),
      g = o.useRef(-1),
      [y, v] = o.useState(
        c ??
          (l === s.GuessFromOrder
            ? () => {
                if (-1 === g.current) {
                  const e = m.current;
                  (m.current += 1), (g.current = e);
                }
                return g.current;
              }
            : -1),
      ),
      b = o.useRef(null),
      S = o.useCallback(
        (e) => {
          if (
            ((b.current = e), -1 !== y && null !== e && ((f.current[y] = e), h))
          ) {
            const n = void 0 !== t;
            h.current[y] = n ? t : (r?.current?.textContent ?? e.textContent);
          }
        },
        [y, f, h, t, r],
      );
    return (
      (0, i.useIsoLayoutEffect)(() => {
        if (null != c) return;
        const e = b.current;
        return e
          ? (u(e, n),
            () => {
              d(e);
            })
          : void 0;
      }, [c, u, d, n]),
      (0, i.useIsoLayoutEffect)(() => {
        if (null == c)
          return p((e) => {
            const t = b.current ? e.get(b.current)?.index : null;
            null != t && v(t);
          });
      }, [c, p, v]),
      { ref: S, index: y }
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(38541 /* vendor/module-38541 */);
let s = (t.IndexGuessBehavior = (function (e) {
  return (
    (e[(e.None = 0)] = "None"),
    (e[(e.GuessFromOrder = 1)] = "GuessFromOrder"),
    e
  );
})({}));
