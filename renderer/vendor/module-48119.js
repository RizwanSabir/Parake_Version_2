// vendor/module-48119.js — webpack module 48119
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useFloating = function (e = {}) {
    const { nodeId: t, externalTree: n } = e,
      r = (0, c.useFloatingRootContext)(e),
      u = e.rootContext || r,
      d = u.useState("referenceElement"),
      p = u.useState("floatingElement"),
      f = u.useState("domReferenceElement"),
      h = u.useState("open"),
      m = u.useState("floatingId"),
      [g, y] = o.useState(null),
      [v, b] = o.useState(void 0),
      [S, _] = o.useState(void 0),
      x = o.useRef(null),
      w = (0, l.useFloatingTree)(n),
      E = o.useMemo(
        () => ({ reference: d, floating: p, domReference: f }),
        [d, p, f],
      ),
      T = (0, a.useFloating)({
        ...e,
        elements: { ...E, ...(g && { reference: g }) },
      }),
      k = (0, s.isElement)(v) ? v : null,
      C = void 0 === S ? u.state.floatingElement : S;
    u.useSyncedValue("referenceElement", v ?? null),
      u.useSyncedValue("domReferenceElement", void 0 === v ? f : k),
      u.useSyncedValue("floatingElement", C);
    const I = o.useCallback(
        (e) => {
          const t = (0, s.isElement)(e)
            ? {
                getBoundingClientRect: () => e.getBoundingClientRect(),
                getClientRects: () => e.getClientRects(),
                contextElement: e,
              }
            : e;
          y(t), T.refs.setReference(t);
        },
        [T.refs],
      ),
      A = o.useCallback(
        (e) => {
          ((0, s.isElement)(e) || null === e) && ((x.current = e), b(e)),
            ((0, s.isElement)(T.refs.reference.current) ||
              null === T.refs.reference.current ||
              (null !== e && !(0, s.isElement)(e))) &&
              T.refs.setReference(e);
        },
        [T.refs, b],
      ),
      O = o.useCallback(
        (e) => {
          _(e), T.refs.setFloating(e);
        },
        [T.refs],
      ),
      R = o.useMemo(
        () => ({
          ...T.refs,
          setReference: A,
          setFloating: O,
          setPositionReference: I,
          domReference: x,
        }),
        [T.refs, A, O, I],
      ),
      M = o.useMemo(
        () => ({ ...T.elements, domReference: f }),
        [T.elements, f],
      ),
      P = o.useMemo(
        () => ({
          ...T,
          dataRef: u.context.dataRef,
          open: h,
          onOpenChange: u.setOpen,
          events: u.context.events,
          floatingId: m,
          refs: R,
          elements: M,
          nodeId: t,
          rootStore: u,
        }),
        [T, R, M, t, u, h, m],
      );
    return (
      (0, i.useIsoLayoutEffect)(() => {
        f && (x.current = f);
      }, [f]),
      (0, i.useIsoLayoutEffect)(() => {
        u.context.dataRef.current.floatingContext = P;
        const e = w?.nodesRef.current.find((e) => e.id === t);
        e && (e.context = P);
      }),
      o.useMemo(
        () => ({
          ...T,
          context: P,
          refs: R,
          elements: M,
          rootStore: u,
        }),
        [T, R, M, P, u],
      )
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(67728 /* vendor/module-67728 */),
  s = n(81339 /* vendor/module-81339 */),
  l = n(33406 /* vendor/module-33406 */),
  c = n(29696 /* vendor/module-29696 */);
