// vendor/module-94222.js — webpack module 94222
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useClientPoint = function (e, t = {}) {
    const { enabled: n = !0, axis: r = "both" } = t,
      d = "rootStore" in e ? e.rootStore : e,
      p = d.useState("open"),
      f = d.useState("floatingElement"),
      h = d.useState("domReferenceElement"),
      m = d.context.dataRef,
      g = o.useRef(!1),
      y = o.useRef(null),
      [v, b] = o.useState(),
      [S, _] = o.useState([]),
      x = (0, a.useStableCallback)((e) => {
        d.set("positionReference", e);
      }),
      w = (0, a.useStableCallback)((e, t, n) => {
        g.current ||
          (m.current.openEvent && !u(m.current.openEvent)) ||
          d.set(
            "positionReference",
            (function (e, t) {
              let n = null,
                r = null,
                o = !1;
              return {
                contextElement: e || void 0,
                getBoundingClientRect() {
                  const i = e?.getBoundingClientRect() || {
                      width: 0,
                      height: 0,
                      x: 0,
                      y: 0,
                    },
                    a = "x" === t.axis || "both" === t.axis,
                    s = "y" === t.axis || "both" === t.axis,
                    l =
                      ["mouseenter", "mousemove"].includes(
                        t.dataRef.current.openEvent?.type || "",
                      ) && "touch" !== t.pointerType;
                  let c = i.width,
                    u = i.height,
                    d = i.x,
                    p = i.y;
                  return (
                    null == n && t.x && a && (n = i.x - t.x),
                    null == r && t.y && s && (r = i.y - t.y),
                    (d -= n || 0),
                    (p -= r || 0),
                    (c = 0),
                    (u = 0),
                    !o || l
                      ? ((c = "y" === t.axis ? i.width : 0),
                        (u = "x" === t.axis ? i.height : 0),
                        (d = a && null != t.x ? t.x : d),
                        (p = s && null != t.y ? t.y : p))
                      : o &&
                        !l &&
                        ((u = "x" === t.axis ? i.height : u),
                        (c = "y" === t.axis ? i.width : c)),
                    (o = !0),
                    {
                      width: c,
                      height: u,
                      x: d,
                      y: p,
                      top: p,
                      right: d + c,
                      bottom: p + u,
                      left: d,
                    }
                  );
                },
              };
            })(n ?? h, {
              x: e,
              y: t,
              axis: r,
              dataRef: m,
              pointerType: v,
            }),
          );
      }),
      E = (0, a.useStableCallback)((e) => {
        p
          ? y.current || (w(e.clientX, e.clientY, e.currentTarget), _([]))
          : w(e.clientX, e.clientY, e.currentTarget);
      }),
      T = (0, c.isMouseLikePointerType)(v) ? f : p;
    o.useEffect(() => {
      if (!n) return void x(h);
      if (!T) return;
      function e() {
        y.current?.(), (y.current = null);
      }
      const t = (0, s.getWindow)(f);
      return (
        !m.current.openEvent || u(m.current.openEvent)
          ? (y.current = (0, i.addEventListener)(t, "mousemove", function (t) {
              const n = (0, l.getTarget)(t);
              (0, l.contains)(f, n) ? e() : w(t.clientX, t.clientY);
            }))
          : x(h),
        e
      );
    }, [T, n, f, m, h, d, w, x, S]),
      o.useEffect(
        () => () => {
          d.set("positionReference", null);
        },
        [d],
      ),
      o.useEffect(() => {
        n && !f && (g.current = !1);
      }, [n, f]),
      o.useEffect(() => {
        !n && p && (g.current = !0);
      }, [n, p]);
    const k = o.useMemo(() => {
      function e(e) {
        b(e.pointerType);
      }
      return {
        onPointerDown: e,
        onPointerEnter: e,
        onMouseMove: E,
        onMouseEnter: E,
      };
    }, [E]);
    return o.useMemo(() => (n ? { reference: k, trigger: k } : {}), [n, k]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(81339 /* vendor/module-81339 */),
  l = n(80475 /* vendor/module-80475 */),
  c = n(76475 /* vendor/module-76475 */);
function u(e) {
  return null != e && null != e.clientX;
}
