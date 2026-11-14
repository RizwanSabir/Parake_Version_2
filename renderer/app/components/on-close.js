// app/components/on-close.js — webpack module 55329
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.StoreInspector = function (e) {
    const { store: t, title: n, additionalData: r, defaultOpen: a = !1 } = e,
      [s, l] = m.useState(a),
      c = m.useRef(null);
    return (0, k.jsxs)(m.Fragment, {
      children: [
        o ||
          (o = (0, k.jsx)("style", {
            href: "baseui-store-inspector",
            precedence: "default",
            children:
              "\n.baseui-store-inspector-trigger {\n  all: unset;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: oklch(0.651 0.078 264);\n}\n\n.baseui-store-inspector-trigger:hover,\n.baseui-store-inspector-trigger:focus-visible {\n opacity: 0.8;\n}\n\n.baseui-store-inspector-content {\n  background: #101010;\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  padding-bottom: 12px;\n  scrollbar-width: thin;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.baseui-store-inspector-content h3 {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.baseui-store-inspector-content pre {\n  margin: 0 0 16px 0;\n}\n\n.baseui-store-inspector-content pre:last-child {\n  margin-bottom: 0;\n}\n\n.baseui-store-inspector-root {\n  position: fixed;\n  background: oklch(0.34 0.036 264);\n  color: #fff;\n  z-index: 1000;\n  font-size: 12px;\n  padding: 8px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 50vw;\n  color-scheme: dark;\n  overflow: clip;\n  box-shadow:\n    0 10px 15px -3px oklch(12% 9% 264deg / 8%),\n    0 4px 6px -4px oklch(12% 9% 264deg / 8%);\n}\n\n.baseui-store-inspector-header {\n  display: flex;\n  align-items: center;\n  cursor: move;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: none;\n  padding: 4px 8px 8px 8px;\n  gap: 8px;\n\n  h2 {\n    font-size: 16px;\n    flex-grow: 1;\n  }\n}\n\n.baseui-store-inspector-header button {\n  all: unset;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n}\n\n.baseui-store-inspector-header button:hover,\n.baseui-store-inspector-header button:focus-visible {\n  opacity: 0.8;\n}\n\n.baseui-store-inspector-resize-handle {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  right: -4px;\n  bottom: -4px;\n  cursor: se-resize;\n  background: linear-gradient(135deg, transparent 50%, rgba(255, 255, 255, 0.25) 50%);\n  border-radius: 2px;\n}\n",
          })),
        (0, k.jsx)("button", {
          ref: c,
          className: "baseui-store-inspector-trigger",
          type: "button",
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation(), l((e) => !e);
          },
          title: "Toggle store inspector",
          "aria-hidden": !0,
          children: i || (i = (0, k.jsx)(M, {})),
        }),
        (0, k.jsx)(I, {
          anchorElement: c.current,
          open: s,
          store: t,
          title: n,
          additionalData: r,
          onClose: () => l(!1),
        }),
      ],
    });
  }),
  (t.StoreInspectorPanel = I);
var o,
  i,
  a,
  s,
  l,
  c,
  u,
  d,
  p,
  f,
  h,
  m = r(n(14041 /* vendor/module-14041 */)),
  g = r(n(43144 /* vendor/module-43144 */)),
  y = n(81339 /* vendor/module-81339 */),
  v = n(38592 /* vendor/module-38592 */),
  b = n(854 /* vendor/module-854 */),
  S = n(23504 /* vendor/module-23504 */),
  _ = n(80308 /* vendor/module-80308 */),
  x = n(4674 /* vendor/module-4674 */),
  w = n(57569 /* vendor/module-57569 */),
  E = n(57122 /* vendor/module-57122 */),
  T = n(54807 /* vendor/module-54807 */),
  k = n(31085 /* vendor/module-31085 */);
function C(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function I({
  anchorElement: e,
  store: t,
  title: n,
  additionalData: r,
  open: o,
  onClose: i,
}) {
  const u = (0, _.useForcedRerendering)(),
    d = (0, T.useTimeout)();
  (0, E.useIsoLayoutEffect)(
    () =>
      t.subscribe(() => {
        d.start(1, () => u());
      }),
    [t, u, d],
  );
  const p = (0, x.useStableCallback)(() => {
    const e = { state: t.state };
    Object.keys(t.context ?? {}).length > 0 && (e.context = t.context),
      void 0 !== r && (e.additionalData = r);
  });
  if ("undefined" == typeof document) return null;
  const f = (0, b.ownerDocument)(e),
    h = (0, k.jsxs)(O, {
      title: n ?? "Store Inspector",
      onClose: i,
      headerActions: (0, k.jsx)("button", {
        type: "button",
        onClick: p,
        title: "Log to console",
        children: a || (a = (0, k.jsx)(P, {})),
      }),
      children: [
        s || (s = (0, k.jsx)("h3", { children: "State" })),
        (0, k.jsx)("pre", {
          children: JSON.stringify(t.state, A(), 2),
        }),
        Object.keys(t.context ?? {}).length > 0 &&
          (0, k.jsxs)(m.Fragment, {
            children: [
              l || (l = (0, k.jsx)("h3", { children: "Context" })),
              (0, k.jsx)("pre", {
                children: JSON.stringify(t.context, A(), 2),
              }),
            ],
          }),
        void 0 !== r &&
          (0, k.jsxs)(m.Fragment, {
            children: [
              c ||
                (c = (0, k.jsx)("h3", {
                  children: "Additional data",
                })),
              (0, k.jsx)("pre", {
                children: JSON.stringify(r, A(), 2),
              }),
            ],
          }),
      ],
    });
  return o ? g.createPortal(h, f.body) : null;
}
function A() {
  const e = [];
  return function (t, n) {
    if ((0, y.isElement)(n))
      return `Element(${n.tagName.toLowerCase()}${n.id ? `#${n.id}` : ""})`;
    if (void 0 === n) return "[undefined]";
    if (n instanceof Map) return Array.from(n.entries());
    if (n instanceof Set) return Array.from(n);
    if ("object" != typeof n || null === n) return n;
    for (; e.length > 0 && e.at(-1) !== this; ) e.pop();
    return e.includes(n) ? "[circular reference]" : (e.push(n), n);
  };
}
function O({ title: e, onClose: t, children: n, headerActions: r }) {
  const o = m.useRef(null),
    i = m.useRef(null),
    a = m.useRef(null),
    s = (0, w.useAnimationFrame)(),
    [l, c] = m.useState(null),
    p = m.useRef(null),
    [f, h] = m.useState(null),
    g = m.useRef(null);
  (0, E.useIsoLayoutEffect)(() => {
    null == l && o.current && c({ left: 8, top: 8 });
  }, [l]);
  const y = (0, x.useStableCallback)((e) => {
      if (!i.current || !o.current) return;
      const t = C(e.nativeEvent);
      if (t && t.closest("button")) return;
      const n = l ?? { left: 8, top: 8 };
      p.current = {
        dragging: !0,
        startX: e.clientX,
        startY: e.clientY,
        startLeft: n.left,
        startTop: n.top,
      };
      try {
        i.current.setPointerCapture(e.pointerId);
      } catch {}
      e.preventDefault();
    }),
    _ = (0, x.useStableCallback)((e) => {
      if (i.current && e)
        try {
          i.current.releasePointerCapture(e.pointerId);
        } catch {}
      p.current && (p.current.dragging = !1);
    }),
    T = (0, x.useStableCallback)((e) => {
      const t = p.current;
      if (!t || !t.dragging) return;
      const n = t.startLeft + (e.clientX - t.startX),
        r = Math.max(0, t.startTop + (e.clientY - t.startY));
      s.request(() => {
        c({ left: n, top: r });
      });
    }),
    I = (0, x.useStableCallback)((e) => {
      if (!o.current) return;
      const t = o.current.getBoundingClientRect(),
        n = f ?? { width: t.width, height: t.height },
        r = l?.left ?? t.left,
        i = l?.top ?? t.top,
        a = (0, b.ownerWindow)(o.current),
        s = Math.max(100, a.innerWidth - r),
        c = Math.max(80, a.innerHeight - i);
      g.current = {
        resizing: !0,
        startX: e.clientX,
        startY: e.clientY,
        startWidth: n.width,
        startHeight: n.height,
        minWidth: 160,
        minHeight: 52,
        maxWidth: s,
        maxHeight: c,
      };
      try {
        e.currentTarget?.setPointerCapture?.(e.pointerId);
      } catch {}
      e.preventDefault();
    }),
    A = (0, x.useStableCallback)((e) => {
      const t = g.current;
      if (!t || !t.resizing) return;
      const n = e.clientX - t.startX,
        r = e.clientY - t.startY,
        o = Math.min(t.maxWidth, Math.max(t.minWidth, t.startWidth + n)),
        i = Math.min(t.maxHeight, Math.max(t.minHeight, t.startHeight + r));
      s.request(() => {
        h({ width: o, height: i });
      });
    }),
    O = (0, x.useStableCallback)((e) => {
      if (e)
        try {
          C(e)?.releasePointerCapture?.(e.pointerId);
        } catch {}
      g.current && (g.current.resizing = !1);
    });
  (0, E.useIsoLayoutEffect)(() => {
    const e = (0, b.ownerWindow)(o.current),
      t = (e) => {
        _(e), O(e);
      };
    return (0, v.mergeCleanups)(
      (0, S.addEventListener)(e, "pointermove", (e) => {
        T(e), A(e);
      }),
      (0, S.addEventListener)(e, "pointerup", t),
      (0, S.addEventListener)(e, "pointercancel", t),
    );
  }, []);
  const M = {};
  let P = null;
  o.current
    ? (P = (0, b.ownerWindow)(o.current))
    : "undefined" != typeof window && (P = window);
  const N = P ? Math.max(0, P.innerHeight - 16) : void 0;
  return (
    l
      ? ((M.top = l.top),
        (M.left = l.left),
        (M.right = "auto"),
        (M.position = "fixed"),
        null != f?.width && (M.width = f.width),
        null != f?.height && (M.height = f.height),
        (M.maxHeight = P ? Math.max(0, P.innerHeight - l.top - 8) : void 0))
      : (null != f?.width && (M.width = f.width),
        null != f?.height && (M.height = f.height),
        (M.maxHeight = N)),
    (0, k.jsxs)("div", {
      ref: o,
      className: "baseui-store-inspector-root",
      style: M,
      children: [
        (0, k.jsxs)("div", {
          ref: i,
          className: "baseui-store-inspector-header",
          onPointerDown: y,
          children: [
            (0, k.jsx)("h2", { children: e }),
            r,
            (0, k.jsx)("button", {
              type: "button",
              onClick: t,
              title: "Close window",
              children: u || (u = (0, k.jsx)(R, {})),
            }),
          ],
        }),
        (0, k.jsx)("div", {
          className: "baseui-store-inspector-content",
          children: n,
        }),
        (0, k.jsx)("div", {
          ref: a,
          onPointerDown: I,
          style: { position: "relative" },
          children:
            d ||
            (d = (0, k.jsx)("div", {
              className: "baseui-store-inspector-resize-handle",
            })),
        }),
      ],
    })
  );
}
function R() {
  return (
    p ||
    (p = (0, k.jsxs)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, k.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        (0, k.jsx)("path", { d: "m15 9-6 6" }),
        (0, k.jsx)("path", { d: "m9 9 6 6" }),
      ],
    }))
  );
}
function M() {
  return (
    f ||
    (f = (0, k.jsxs)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, k.jsx)("path", {
          d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        }),
        (0, k.jsx)("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
        (0, k.jsx)("path", {
          d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
        }),
        (0, k.jsx)("path", {
          d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
        }),
      ],
    }))
  );
}
function P() {
  return (
    h ||
    (h = (0, k.jsxs)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, k.jsx)("path", { d: "m7 11 2-2-2-2" }),
        (0, k.jsx)("path", { d: "M11 13h4" }),
        (0, k.jsx)("rect", {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
        }),
      ],
    }))
  );
}
