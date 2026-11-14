// vendor/module-67593.js — webpack module 67593
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { StickToBottom: () => f, useStickToBottomContext: () => h });
var r = n(14041 /* vendor/module-14041 */);
const o = { damping: 0.7, stiffness: 0.05, mass: 1.25 },
  i = 1e3 / 60;
let a = !1;
globalThis.document?.addEventListener("mousedown", () => {
  a = !0;
}),
  globalThis.document?.addEventListener("mouseup", () => {
    a = !1;
  }),
  globalThis.document?.addEventListener("click", () => {
    a = !1;
  });
const s = (e = {}) => {
  const [t, n] = (0, r.useState)(!1),
    [o, s] = (0, r.useState)(!1 !== e.initial),
    [c, d] = (0, r.useState)(!1),
    p = (0, r.useRef)(null);
  p.current = e;
  const f = (0, r.useCallback)(() => {
      if (!a) return !1;
      const e = window.getSelection();
      if (!e || !e.rangeCount) return !1;
      const t = e.getRangeAt(0);
      return (
        t.commonAncestorContainer.contains(_.current) ||
        _.current?.contains(t.commonAncestorContainer)
      );
    }, []),
    h = (0, r.useCallback)((e) => {
      (g.isAtBottom = e), s(e);
    }, []),
    m = (0, r.useCallback)((e) => {
      (g.escapedFromLock = e), n(e);
    }, []),
    g = (0, r.useMemo)(() => {
      let n;
      return {
        escapedFromLock: t,
        isAtBottom: o,
        resizeDifference: 0,
        accumulated: 0,
        velocity: 0,
        listeners: new Set(),
        get scrollTop() {
          return _.current?.scrollTop ?? 0;
        },
        set scrollTop(e) {
          if (_.current) {
            const { scrollBehavior: t } = getComputedStyle(_.current);
            "auto" !== t && (_.current.style.scrollBehavior = "auto"),
              (_.current.scrollTop = e),
              (g.ignoreScrollToTop = _.current.scrollTop),
              "auto" !== t && (_.current.style.scrollBehavior = t);
          }
        },
        get targetScrollTop() {
          return _.current && x.current
            ? _.current.scrollHeight - 1 - _.current.clientHeight
            : 0;
        },
        get calculatedTargetScrollTop() {
          if (!_.current || !x.current) return 0;
          const { targetScrollTop: t } = this;
          if (!e.targetScrollTop) return t;
          if (n?.targetScrollTop === t) return n.calculatedScrollTop;
          const r = Math.max(
            Math.min(
              e.targetScrollTop(t, {
                scrollElement: _.current,
                contentElement: x.current,
              }),
              t,
            ),
            0,
          );
          return (
            (n = { targetScrollTop: t, calculatedScrollTop: r }),
            requestAnimationFrame(() => {
              n = void 0;
            }),
            r
          );
        },
        get scrollDifference() {
          return this.calculatedTargetScrollTop - this.scrollTop;
        },
        get isNearBottom() {
          return this.scrollDifference <= 70;
        },
      };
    }, []),
    y = (0, r.useCallback)(
      (e = {}) => {
        "string" == typeof e && (e = { animation: e }),
          e.preserveScrollPosition || h(!0);
        const t = Date.now() + (Number(e.wait) || 0),
          n = u(p.current, e.animation),
          { ignoreEscapes: r = !1 } = e;
        let o,
          a = g.calculatedTargetScrollTop;
        e.duration instanceof Promise
          ? e.duration.finally(() => {
              o = Date.now();
            })
          : (o = t + (e.duration ?? 0));
        const s = async () => {
          const e = new Promise(requestAnimationFrame).then(() => {
            if (!g.isAtBottom) return (g.animation = void 0), !1;
            const { scrollTop: l } = g,
              c = performance.now(),
              d = (c - (g.lastTick ?? c)) / i;
            if (
              (g.animation ||
                (g.animation = {
                  behavior: n,
                  promise: e,
                  ignoreEscapes: r,
                }),
              g.animation.behavior === n && (g.lastTick = c),
              f())
            )
              return s();
            if (t > Date.now()) return s();
            if (l < Math.min(a, g.calculatedTargetScrollTop)) {
              if (g.animation?.behavior === n) {
                if ("instant" === n)
                  return (g.scrollTop = g.calculatedTargetScrollTop), s();
                (g.velocity =
                  (n.damping * g.velocity + n.stiffness * g.scrollDifference) /
                  n.mass),
                  (g.accumulated += g.velocity * d),
                  (g.scrollTop += g.accumulated),
                  g.scrollTop !== l && (g.accumulated = 0);
              }
              return s();
            }
            return o > Date.now()
              ? ((a = g.calculatedTargetScrollTop), s())
              : ((g.animation = void 0),
                g.scrollTop < g.calculatedTargetScrollTop
                  ? y({
                      animation: u(p.current, p.current.resize),
                      ignoreEscapes: r,
                      duration: Math.max(0, o - Date.now()) || void 0,
                    })
                  : g.isAtBottom);
          });
          return e.then(
            (e) => (
              requestAnimationFrame(() => {
                g.animation || ((g.lastTick = void 0), (g.velocity = 0));
              }),
              e
            ),
          );
        };
        return (
          !0 !== e.wait && (g.animation = void 0),
          g.animation?.behavior === n ? g.animation.promise : s()
        );
      },
      [h, f, g],
    ),
    v = (0, r.useCallback)(() => {
      m(!0), h(!1);
    }, [m, h]),
    b = (0, r.useCallback)(
      ({ target: e }) => {
        if (e !== _.current) return;
        const { scrollTop: t, ignoreScrollToTop: n } = g;
        let { lastScrollTop: r = t } = g;
        (g.lastScrollTop = t),
          (g.ignoreScrollToTop = void 0),
          n && n > t && (r = n),
          d(g.isNearBottom),
          setTimeout(() => {
            if (g.resizeDifference || t === n) return;
            if (f()) return m(!0), void h(!1);
            const e = t > r,
              o = t < r;
            g.animation?.ignoreEscapes
              ? (g.scrollTop = r)
              : (o && (m(!0), h(!1)),
                e && m(!1),
                !g.escapedFromLock && g.isNearBottom && h(!0));
          }, 1);
      },
      [m, h, f, g],
    ),
    S = (0, r.useCallback)(
      ({ target: e, deltaY: t }) => {
        let n = e;
        for (; !["scroll", "auto"].includes(getComputedStyle(n).overflow); ) {
          if (!n.parentElement) return;
          n = n.parentElement;
        }
        n === _.current &&
          t < 0 &&
          _.current.scrollHeight > _.current.clientHeight &&
          !g.animation?.ignoreEscapes &&
          (m(!0), h(!1));
      },
      [m, h, g],
    ),
    _ = l((e) => {
      _.current?.removeEventListener("scroll", b),
        _.current?.removeEventListener("wheel", S),
        e?.addEventListener("scroll", b, { passive: !0 }),
        e?.addEventListener("wheel", S, { passive: !0 });
    }, []),
    x = l((e) => {
      if ((g.resizeObserver?.disconnect(), !e)) return;
      let t;
      (g.resizeObserver = new ResizeObserver(([e]) => {
        const { height: n } = e.contentRect,
          r = n - (t ?? n);
        if (
          ((g.resizeDifference = r),
          g.scrollTop > g.targetScrollTop && (g.scrollTop = g.targetScrollTop),
          d(g.isNearBottom),
          r >= 0)
        ) {
          const e = u(p.current, t ? p.current.resize : p.current.initial);
          y({
            animation: e,
            wait: !0,
            preserveScrollPosition: !0,
            duration: "instant" === e ? void 0 : 350,
          });
        } else g.isNearBottom && (m(!1), h(!0));
        (t = n),
          requestAnimationFrame(() => {
            setTimeout(() => {
              g.resizeDifference === r && (g.resizeDifference = 0);
            }, 1);
          });
      })),
        g.resizeObserver?.observe(e);
    }, []);
  return {
    contentRef: x,
    scrollRef: _,
    scrollToBottom: y,
    stopScroll: v,
    isAtBottom: o || c,
    isNearBottom: c,
    escapedFromLock: t,
    state: g,
  };
};
function l(e, t) {
  const n = (0, r.useCallback)((t) => ((n.current = t), e(t)), t);
  return n;
}
const c = new Map();
function u(...e) {
  const t = { ...o };
  let n = !1;
  for (const r of e)
    "instant" !== r
      ? "object" == typeof r &&
        ((n = !1),
        (t.damping = r.damping ?? t.damping),
        (t.stiffness = r.stiffness ?? t.stiffness),
        (t.mass = r.mass ?? t.mass))
      : (n = !0);
  const r = JSON.stringify(t);
  return c.has(r) || c.set(r, Object.freeze(t)), n ? "instant" : c.get(r);
}
const d = (0, r.createContext)(null),
  p = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
function f({
  instance: e,
  children: t,
  resize: n,
  initial: o,
  mass: i,
  damping: a,
  stiffness: l,
  targetScrollTop: c,
  contextRef: u,
  ...f
}) {
  const h = (0, r.useRef)(null),
    m = r.useCallback(
      (e, t) => {
        const n = E?.targetScrollTop ?? c;
        return n?.(e, t) ?? e;
      },
      [c],
    ),
    g = s({
      mass: i,
      damping: a,
      stiffness: l,
      resize: n,
      initial: o,
      targetScrollTop: m,
    }),
    {
      scrollRef: y,
      contentRef: v,
      scrollToBottom: b,
      stopScroll: S,
      isAtBottom: _,
      escapedFromLock: x,
      state: w,
    } = e ?? g,
    E = (0, r.useMemo)(
      () => ({
        scrollToBottom: b,
        stopScroll: S,
        scrollRef: y,
        isAtBottom: _,
        escapedFromLock: x,
        contentRef: v,
        state: w,
        get targetScrollTop() {
          return h.current;
        },
        set targetScrollTop(e) {
          h.current = e;
        },
      }),
      [b, _, v, y, S, x, w],
    );
  return (
    (0, r.useImperativeHandle)(u, () => E, [E]),
    p(() => {
      y.current &&
        "visible" === getComputedStyle(y.current).overflow &&
        (y.current.style.overflow = "auto");
    }, []),
    r.createElement(
      d.Provider,
      { value: E },
      r.createElement("div", { ...f }, "function" == typeof t ? t(E) : t),
    )
  );
}
function h() {
  const e = (0, r.useContext)(d);
  if (!e)
    throw new Error(
      "use-stick-to-bottom component context must be used within a StickToBottom component",
    );
  return e;
}
!(function (e) {
  e.Content = function ({ children: e, scrollClassName: t, ...n }) {
    const o = h();
    return r.createElement(
      "div",
      {
        ref: o.scrollRef,
        style: {
          height: "100%",
          width: "100%",
          scrollbarGutter: "stable both-edges",
        },
        className: t,
      },
      r.createElement(
        "div",
        { ...n, ref: o.contentRef },
        "function" == typeof e ? e(o) : e,
      ),
    );
  };
})(f || (f = {}));
