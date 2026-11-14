// vendor/module-51310.js — webpack module 51310
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createInlineMiddleware = function (e) {
    return {
      name: "inline",
      async fn(t) {
        const n = t.elements.reference;
        if ("function" != typeof n?.getClientRects) return {};
        const i = (function (e) {
            return "contextElement" in e && e.contextElement
              ? e.contextElement
              : (0, r.isElement)(e)
                ? e
                : void 0;
          })(n),
          c = e.current,
          u = c?.element === n || c?.element === i ? c : void 0,
          d = (function (e, t, n) {
            const { lines: r, fallback: i } = a(e.getClientRects());
            if (r.length < 2) return null;
            const c = n?.x,
              u = n?.y,
              d = t[0];
            if (null != n?.lineIndex && r[n.lineIndex])
              return l(r[n.lineIndex]);
            if (null != c && null != u) {
              const e = s(r, c, u);
              if (-1 !== e) return l(r[e]);
            }
            if (
              2 === r.length &&
              r[0].left > r[1].right &&
              null != c &&
              null != u
            )
              return i;
            if ("t" === d || "b" === d) {
              const e = r[0],
                t = r[r.length - 1],
                n = "t" === d ? e : t;
              return o(n.left, e.top, n.right, t.bottom);
            }
            const p = "l" === d;
            let f = r[0].left,
              h = r[0].right,
              m = p ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY,
              g = r[0],
              y = r[0];
            for (const e of r) {
              (f = Math.min(f, e.left)), (h = Math.max(h, e.right));
              const t = p ? e.left : e.right;
              (p && t < m) || (!p && t > m)
                ? ((m = t), (g = e), (y = e))
                : t === m && (y = e);
            }
            return o(f, g.top, h, y.bottom);
          })(n, t.placement, u);
        if (!d || "function" != typeof t.platform.getElementRects) return {};
        const p = await t.platform.getElementRects({
          reference: {
            contextElement: i,
            getBoundingClientRect: () => d,
          },
          floating: t.elements.floating,
          strategy: t.strategy,
        });
        return t.rects.reference.x === p.reference.x &&
          t.rects.reference.y === p.reference.y &&
          t.rects.reference.width === p.reference.width &&
          t.rects.reference.height === p.reference.height
          ? {}
          : { reset: { rects: p } };
      },
    };
  }),
  (t.getInlineRectTriggerProps = function (e, t) {
    function n(n) {
      t ||
        (function (t) {
          c(e, t.currentTarget, t.clientX, t.clientY);
        })(n);
    }
    return {
      onFocus() {
        e.current = void 0;
      },
      onMouseEnter: n,
      onMouseMove: n,
    };
  }),
  (t.updateInlineRectCoords = c);
var r = n(81339 /* vendor/module-81339 */);
function o(e, t, n, r) {
  return {
    left: e,
    top: t,
    right: n,
    bottom: r,
    x: e,
    y: t,
    width: n - e,
    height: r - t,
  };
}
function i(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom,
    width: e.width,
    height: e.height,
  };
}
function a(e) {
  const t = [];
  let n,
    r = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY,
    l = Number.NEGATIVE_INFINITY;
  for (const o of Array.from(e).sort((e, t) => e.top - t.top)) {
    if (
      ((r = Math.min(r, o.left)),
      (a = Math.min(a, o.top)),
      (s = Math.max(s, o.right)),
      (l = Math.max(l, o.bottom)),
      !n || o.top - n.top > n.height / 2)
    )
      t.push(i(o));
    else {
      const e = t[t.length - 1];
      (e.left = Math.min(e.left, o.left)),
        (e.right = Math.max(e.right, o.right)),
        (e.bottom = Math.max(e.bottom, o.bottom)),
        (e.width = e.right - e.left),
        (e.height = e.bottom - e.top);
    }
    n = o;
  }
  return { lines: t, fallback: o(r, a, s, l) };
}
function s(e, t, n) {
  return e.findIndex(
    (e) =>
      t > e.left - 2 && t < e.right + 2 && n > e.top - 2 && n < e.bottom + 2,
  );
}
function l(e) {
  return o(e.left, e.top, e.right, e.bottom);
}
function c(e, t, n, r) {
  const o = (function (e, t, n) {
    const { lines: r } = a(e.getClientRects());
    if (r.length < 2) return;
    const o = s(r, t, n);
    return {
      x: t,
      y: n,
      lineIndex: -1 === o ? void 0 : o,
      element: e,
    };
  })(t, n, r);
  return (e.current = o), o;
}
