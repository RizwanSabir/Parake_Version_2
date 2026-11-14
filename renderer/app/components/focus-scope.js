// app/components/focus-scope.js — webpack module 18614
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        c.call(e, o) ||
          o === n ||
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(d, { FocusScope: () => S, Root: () => C }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(95046 /* vendor/module-95046 */),
  h = n(76018 /* vendor/module-76018 */),
  m = n(81374 /* vendor/module-81374 */),
  g = n(31085 /* vendor/module-31085 */),
  y = "focusScope.autoFocusOnMount",
  v = "focusScope.autoFocusOnUnmount",
  b = { bubbles: !1, cancelable: !0 },
  S = p.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...a
      } = e,
      [s, l] = p.useState(null),
      c = (0, m.useCallbackRef)(o),
      u = (0, m.useCallbackRef)(i),
      d = p.useRef(null),
      S = (0, f.useComposedRefs)(t, (e) => l(e)),
      w = p.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    p.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (w.paused || !s) return;
            const t = e.target;
            s.contains(t) ? (d.current = t) : E(d.current, { select: !0 });
          },
          t = function (e) {
            if (w.paused || !s) return;
            const t = e.relatedTarget;
            null !== t && (s.contains(t) || E(d.current, { select: !0 }));
          },
          n = function (e) {
            if (document.activeElement === document.body)
              for (const t of e) t.removedNodes.length > 0 && E(s);
          };
        document.addEventListener("focusin", e),
          document.addEventListener("focusout", t);
        const r = new MutationObserver(n);
        return (
          s && r.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", e),
              document.removeEventListener("focusout", t),
              r.disconnect();
          }
        );
      }
    }, [r, s, w.paused]),
      p.useEffect(() => {
        if (s) {
          T.add(w);
          const e = document.activeElement;
          if (!s.contains(e)) {
            const t = new CustomEvent(y, b);
            s.addEventListener(y, c),
              s.dispatchEvent(t),
              t.defaultPrevented ||
                ((function (e, { select: t = !1 } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if ((E(r, { select: t }), document.activeElement !== n))
                      return;
                })(
                  _(s).filter((e) => "A" !== e.tagName),
                  { select: !0 },
                ),
                document.activeElement === e && E(s));
          }
          return () => {
            s.removeEventListener(y, c),
              setTimeout(() => {
                const t = new CustomEvent(v, b);
                s.addEventListener(v, u),
                  s.dispatchEvent(t),
                  t.defaultPrevented || E(e ?? document.body, { select: !0 }),
                  s.removeEventListener(v, u),
                  T.remove(w);
              }, 0);
          };
        }
      }, [s, c, u, w]);
    const k = p.useCallback(
      (e) => {
        if (!n && !r) return;
        if (w.paused) return;
        const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          o = document.activeElement;
        if (t && o) {
          const t = e.currentTarget,
            [r, i] = (function (e) {
              const t = _(e);
              return [x(t, e), x(t.reverse(), e)];
            })(t);
          r && i
            ? e.shiftKey || o !== i
              ? e.shiftKey &&
                o === r &&
                (e.preventDefault(), n && E(i, { select: !0 }))
              : (e.preventDefault(), n && E(r, { select: !0 }))
            : o === t && e.preventDefault();
        }
      },
      [n, r, w.paused],
    );
    return (0, g.jsx)(h.Primitive.div, {
      tabIndex: -1,
      ...a,
      ref: S,
      onKeyDown: k,
    });
  });
function _(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        const t = "INPUT" === e.tagName && "hidden" === e.type;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function x(e, t) {
  for (const n of e) if (!w(n, { upTo: t })) return n;
}
function w(e, { upTo: t }) {
  if ("hidden" === getComputedStyle(e).visibility) return !0;
  for (; e; ) {
    if (void 0 !== t && e === t) return !1;
    if ("none" === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }
  return !1;
}
function E(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }),
      e !== n &&
        (function (e) {
          return e instanceof HTMLInputElement && "select" in e;
        })(e) &&
        t &&
        e.select();
  }
}
S.displayName = "FocusScope";
var T = (function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), (e = k(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = k(e, t)), e[0]?.resume();
    },
  };
})();
function k(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return -1 !== r && n.splice(r, 1), n;
}
var C = S;
