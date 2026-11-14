// app/lib/is-dragging.js — webpack module 29833
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useDragToMove = function (e) {
  const t = (0, r.c)(13),
    { getToolbarRect: n } = e,
    {
      startDrag: s,
      updateDrag: c,
      endDrag: h,
      locationOnScreen: m,
      setHiddenForScreenMove: g,
    } = (0, i.useLocationOnScreen)(),
    y = (0, o.useRef)(m);
  let v;
  t[0] !== m
    ? ((v = () => {
        y.current = m;
      }),
      (t[0] = m),
      (t[1] = v))
    : (v = t[1]),
    (0, o.useLayoutEffect)(v);
  const b = (0, o.useRef)(null),
    S = (0, o.useRef)(null);
  let _;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = () => {
        S.current?.(), (S.current = null), (b.current = null);
      }),
      (t[2] = _))
    : (_ = t[2]);
  const x = _;
  let w, E, T;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((w = () => x), (E = [x]), (t[3] = w), (t[4] = E))
    : ((w = t[3]), (E = t[4])),
    (0, o.useEffect)(w, E),
    t[5] !== h || t[6] !== n || t[7] !== g || t[8] !== s || t[9] !== c
      ? ((T = (e, t) => {
          if (0 !== e.button) return;
          if (!(e.target instanceof Node && e.currentTarget.contains(e.target)))
            return;
          const r = e.currentTarget,
            o = n();
          if (!o) return;
          const i = { x: e.clientX, y: e.clientY },
            m = {
              startCursor: i,
              grabOffset: (0, a.grabOffset)(i, {
                left: o.left,
                top: o.top,
                width: o.width,
                height: o.height,
              }),
              toolbarSize: { width: o.width, height: o.height },
              dragging: !1,
              handleName: t,
            };
          (b.current = m), r.setPointerCapture(e.pointerId);
          let v = !1,
            _ = i;
          const x = (0, l.createScreenFollower)({
              setHidden: g,
              isDragging: () => b.current === m,
              redraw: (e, t) => {
                (_ = e), c(e, p(e, m.grabOffset, m.toolbarSize, t));
              },
            }),
            w = () => {
              v = !1;
              const e = b.current;
              e &&
                e.dragging &&
                (c(_, p(_, e.grabOffset, e.toolbarSize)), x.follow(_));
            },
            E = (e) => {
              const t = b.current;
              if (t) {
                if (((_ = { x: e.clientX, y: e.clientY }), !t.dragging)) {
                  if (!(0, u.wasDragged)(t.startCursor, _)) return;
                  return (
                    (t.dragging = !0),
                    void s({
                      cursor: _,
                      grabOffset: t.grabOffset,
                      toolbarSize: t.toolbarSize,
                      originalLocation: y.current,
                      initialLocation: p(_, t.grabOffset, t.toolbarSize),
                    })
                  );
                }
                v || ((v = !0), window.requestAnimationFrame(w));
              }
            },
            T = (t) => {
              const n = b.current;
              try {
                r.releasePointerCapture(e.pointerId);
              } catch {}
              const o = n?.dragging ?? !1,
                i = (e, r) =>
                  n && "drop" === t
                    ? {
                        ...f(e, n.grabOffset, n.toolbarSize, r),
                        handle: n.handleName,
                      }
                    : null;
              if ((O(), o)) {
                const e = "drop" === t ? x.landing(_) : null;
                e
                  ? e.then((e) => h(i(e.cursor, e.windowSize)))
                  : h(i(_, (0, d.windowSize)()));
                const n = (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    window.removeEventListener("click", n, !0),
                    clearTimeout(r);
                };
                window.addEventListener("click", n, !0);
                const r = window.setTimeout(() => {
                  window.removeEventListener("click", n, !0);
                }, 200);
              }
            },
            k = (e) => {
              (_ = { x: e.clientX, y: e.clientY }), T("drop");
            },
            C = () => T("cancel"),
            I = (e) => {
              "Escape" === e.key && T("cancel");
            },
            A = () => T("cancel"),
            O = () => {
              window.removeEventListener("pointermove", E),
                window.removeEventListener("pointerup", k),
                window.removeEventListener("pointercancel", C),
                window.removeEventListener("keydown", I),
                window.removeEventListener("blur", A),
                (b.current = null),
                (S.current = null);
            };
          (S.current = O),
            window.addEventListener("pointermove", E),
            window.addEventListener("pointerup", k),
            window.addEventListener("pointercancel", C),
            window.addEventListener("keydown", I),
            window.addEventListener("blur", A);
        }),
        (t[5] = h),
        (t[6] = n),
        (t[7] = g),
        (t[8] = s),
        (t[9] = c),
        (t[10] = T))
      : (T = t[10]);
  const k = T;
  let C;
  return (
    t[11] !== k
      ? ((C = { onPointerDown: k }), (t[11] = k), (t[12] = C))
      : (C = t[12]),
    C
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(63324 /* app/components/location-on-screen-provider */),
  a = n(26891 /* vendor/module-26891 */),
  s = n(29863 /* vendor/module-29863 */),
  l = n(33368 /* app/lib/create-screen-follower */),
  c = n(39009 /* vendor/module-39009 */),
  u = n(21007 /* vendor/module-21007 */),
  d = n(31855 /* vendor/module-31855 */);
function p(e, t, n, r = (0, d.windowSize)()) {
  return (0, s.locationFromPoint)((0, a.toolbarCenterFromCursor)(e, t, n), r);
}
function f(e, t, n, r) {
  const o = p(e, t, n, r),
    i = { left: e.x - t.x, top: e.y - t.y, ...n },
    { width: a, height: s } = r;
  return {
    location: o,
    offset: (0, c.offsetFromRect)(i, o, { width: a, height: s }),
    corner: { x: i.left / Math.max(1, a), y: i.top / Math.max(1, s) },
  };
}
