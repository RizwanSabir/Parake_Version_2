// app/hooks/use-popup-viewport.js — webpack module 72856
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.usePopupViewport = function (e) {
    const { store: t, side: n, cssVars: r, children: y } = e,
      v = (0, h.useDirection)(),
      b = t.useState("activeTriggerElement"),
      S = t.useState("activeTriggerId"),
      _ = t.useState("open"),
      x = t.useState("payload"),
      w = t.useState("mounted"),
      E = t.useState("popupElement"),
      T = t.useState("positionerElement"),
      k = (0, l.usePreviousValue)(_ ? b : null),
      C = (function (e, t) {
        const [n, r] = o.useState(0),
          i = o.useRef(e),
          a = o.useRef(t),
          s = o.useRef(!1);
        return (
          (0, c.useIsoLayoutEffect)(() => {
            const n = i.current,
              o = a.current,
              l = t !== o;
            e !== n
              ? (r((e) => e + 1), (s.current = !l))
              : s.current && l && (r((e) => e + 1), (s.current = !1)),
              (i.current = e),
              (a.current = t);
          }, [e, t]),
          `${e ?? "current"}-${n}`
        );
      })(S, x),
      I = o.useRef(null),
      [A, O] = o.useState(null),
      [R, M] = o.useState(null),
      P = o.useRef(null),
      N = o.useRef(null),
      D = (0, p.useAnimationsFinished)(P, !0, !1),
      j = (0, s.useAnimationFrame)(),
      [L, F] = o.useState(null),
      [U, B] = o.useState(!1);
    (0, c.useIsoLayoutEffect)(
      () => (
        t.set("hasViewport", !0),
        () => {
          t.set("hasViewport", !1);
        }
      ),
      [t],
    );
    const z = (0, u.useStableCallback)(() => {
        P.current?.style.setProperty("animation", "none"),
          P.current?.style.setProperty("transition", "none"),
          N.current?.style.setProperty("display", "none");
      }),
      H = (0, u.useStableCallback)((e) => {
        P.current?.style.removeProperty("animation"),
          P.current?.style.removeProperty("transition"),
          N.current?.style.removeProperty("display"),
          e && F(e);
      }),
      V = o.useRef(null);
    (0, c.useIsoLayoutEffect)(() => {
      (_ && w) || (V.current = null);
    }, [_, w]),
      (0, c.useIsoLayoutEffect)(() => {
        if (b && k && b !== k && V.current !== b && I.current) {
          O(I.current), B(!0);
          const e = (function (e, t) {
            const n = e.getBoundingClientRect(),
              r = t.getBoundingClientRect(),
              o = n.left + n.width / 2,
              i = n.top + n.height / 2;
            return {
              horizontal: r.left + r.width / 2 - o,
              vertical: r.top + r.height / 2 - i,
            };
          })(k, b);
          M(e),
            j.request(() => {
              i.flushSync(() => {
                B(!1);
              }),
                D(() => {
                  O(null), F(null), (I.current = null);
                });
            }),
            (V.current = b);
        }
      }, [b, k, A, D, j]),
      (0, c.useIsoLayoutEffect)(() => {
        const e = P.current;
        if (!e) return;
        const t = (0, d.ownerDocument)(e).createElement("div");
        for (const n of Array.from(e.childNodes))
          t.appendChild(n.cloneNode(!0));
        I.current = t;
      });
    const q = null != A;
    let G;
    (G = q
      ? (0, m.jsxs)(o.Fragment, {
          children: [
            (0, m.jsx)(
              "div",
              {
                "data-previous": !0,
                inert: (0, a.inertValue)(!0),
                ref: N,
                style: {
                  ...(L
                    ? {
                        [r.popupWidth]: `${L.width}px`,
                        [r.popupHeight]: `${L.height}px`,
                      }
                    : null),
                  position: "absolute",
                },
                "data-ending-style": U ? void 0 : "",
              },
              "previous",
            ),
            (0, m.jsx)(
              "div",
              {
                "data-current": !0,
                ref: P,
                "data-starting-style": U ? "" : void 0,
                children: y,
              },
              C,
            ),
          ],
        })
      : (0, m.jsx)("div", { "data-current": !0, ref: P, children: y }, C)),
      (0, c.useIsoLayoutEffect)(() => {
        const e = N.current;
        e && A && e.replaceChildren(...Array.from(A.childNodes));
      }, [A]),
      (0, f.usePopupAutoResize)({
        popupElement: E,
        positionerElement: T,
        mounted: w,
        content: x,
        onMeasureLayout: z,
        onMeasureLayoutComplete: H,
        side: n,
        direction: v,
      });
    return {
      children: G,
      state: { activationDirection: g(R), transitioning: q },
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(9220 /* vendor/module-9220 */),
  s = n(57569 /* vendor/module-57569 */),
  l = n(85522 /* vendor/module-85522 */),
  c = n(57122 /* vendor/module-57122 */),
  u = n(4674 /* vendor/module-4674 */),
  d = n(854 /* vendor/module-854 */),
  p = n(43808 /* vendor/module-43808 */),
  f = n(28717 /* vendor/module-28717 */),
  h = n(90317 /* vendor/module-90317 */),
  m = n(31085 /* vendor/module-31085 */);
function g(e) {
  if (e)
    return `${y(e.horizontal, 5, "right", "left")} ${y(e.vertical, 5, "down", "up")}`;
}
function y(e, t, n, r) {
  return e > t ? n : e < -t ? r : "";
}
