// vendor/module-50684.js — webpack module 50684
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createGridCellMap = function (e, t, n) {
    const r = [];
    let o = 0;
    return (
      e.forEach(({ width: e, height: i }, a) => {
        let s = !1;
        for (n && (o = 0); !s; ) {
          const n = [];
          for (let r = 0; r < e; r += 1)
            for (let e = 0; e < i; e += 1) n.push(o + r + e * t);
          (o % t) + e <= t && n.every((e) => null == r[e])
            ? (n.forEach((e) => {
                r[e] = a;
              }),
              (s = !0))
            : (o += 1);
        }
      }),
      [...r]
    );
  }),
  (t.findNonDisabledListIndex = c),
  (t.getGridCellIndexOfCorner = function (e, t, n, r, o) {
    if (-1 === e) return -1;
    const i = n.indexOf(e),
      a = t[e];
    switch (o) {
      case "tl":
        return i;
      case "tr":
        return a ? i + a.width - 1 : i;
      case "bl":
        return a ? i + (a.height - 1) * r : i;
      case "br":
        return n.lastIndexOf(e);
      default:
        return -1;
    }
  }),
  (t.getGridCellIndices = function (e, t) {
    return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
  }),
  (t.getGridNavigatedIndex = function (
    e,
    {
      event: t,
      orientation: n,
      loopFocus: o,
      onLoop: d,
      rtl: p,
      cols: f,
      disabledIndices: h,
      minIndex: m,
      maxIndex: g,
      prevIndex: y,
      stopEvent: v = !1,
    },
  ) {
    let b,
      S = y;
    if (
      (t.key === a.ARROW_UP
        ? (b = "up")
        : t.key === a.ARROW_DOWN && (b = "down"),
      b)
    ) {
      const n = [],
        a = [];
      let s = !1,
        p = 0;
      {
        let t = null,
          r = -1;
        e.forEach((e, o) => {
          if (null == e) return;
          p += 1;
          const i = e.closest('[role="row"]');
          i && (s = !0),
            (i === t && -1 !== r) || ((t = i), (r += 1), (n[r] = [])),
            n[r].push(o),
            (a[o] = r);
        });
      }
      let _ = !1,
        x = 0;
      if (s)
        for (const e of n) {
          const t = e.length;
          t > x && (x = t), t !== f && (_ = !0);
        }
      const w = _ && p < e.length,
        E = x || f,
        T = (r) => {
          if (!_ || -1 === y) return;
          const i = a[y];
          if (null == i) return;
          const s = n[i].indexOf(y),
            l = "up" === r ? -1 : 1;
          for (let r = i + l, c = 0; c < n.length; c += 1, r += l) {
            if (r < 0 || r >= n.length) {
              if (!o || w) return;
              if (((r = r < 0 ? n.length - 1 : 0), d)) {
                const e = Math.min(s, n[r].length - 1),
                  o = n[r][e] ?? n[r][0],
                  i = d(t, y, o);
                r = a[i] ?? r;
              }
            }
            const i = n[r];
            for (let t = Math.min(s, i.length - 1); t >= 0; t -= 1) {
              const n = i[t];
              if (!u(e, n, h)) return n;
            }
          }
        },
        k = (t) => {
          if (!w || -1 === y) return;
          const n = y % E,
            i = "up" === t ? -E : E,
            a = g - (g % E),
            s = (0, r.floor)(g / E) + 1;
          for (let t = y - n + i, r = 0; r < s; r += 1, t += i) {
            if (t < 0 || t > g) {
              if (!o) return;
              t = t < 0 ? a : 0;
            }
            const r = Math.min(t + E - 1, g);
            for (let o = Math.min(t + n, r); o >= t; o -= 1)
              if (!u(e, o, h)) return o;
          }
        };
      v && (0, i.stopEvent)(t);
      const C = T(b) ?? k(b);
      if (void 0 !== C) S = C;
      else if (-1 === y) S = "up" === b ? g : m;
      else if (
        ((S = c(e, {
          startingIndex: y,
          amount: E,
          decrement: "up" === b,
          disabledIndices: h,
        })),
        o)
      ) {
        if ("up" === b && (y - E < m || S < 0)) {
          const e = y % E,
            n = g % E,
            r = g - (n - e);
          (S = n === e ? g : n > e ? r : r - E), d && (S = d(t, y, S));
        }
        "down" === b &&
          y + E > g &&
          ((S = c(e, {
            startingIndex: (y % E) - E,
            amount: E,
            disabledIndices: h,
          })),
          d && (S = d(t, y, S)));
      }
      l(e, S) && (S = y);
    }
    if ("both" === n) {
      const n = (0, r.floor)(y / f);
      t.key === (p ? a.ARROW_LEFT : a.ARROW_RIGHT) &&
        (v && (0, i.stopEvent)(t),
        y % f !== f - 1
          ? ((S = c(e, { startingIndex: y, disabledIndices: h })),
            o &&
              s(S, f, n) &&
              ((S = c(e, {
                startingIndex: y - (y % f) - 1,
                disabledIndices: h,
              })),
              d && (S = d(t, y, S))))
          : o &&
            ((S = c(e, {
              startingIndex: y - (y % f) - 1,
              disabledIndices: h,
            })),
            d && (S = d(t, y, S))),
        s(S, f, n) && (S = y)),
        t.key === (p ? a.ARROW_RIGHT : a.ARROW_LEFT) &&
          (v && (0, i.stopEvent)(t),
          y % f !== 0
            ? ((S = c(e, {
                startingIndex: y,
                decrement: !0,
                disabledIndices: h,
              })),
              o &&
                s(S, f, n) &&
                ((S = c(e, {
                  startingIndex: y + (f - (y % f)),
                  decrement: !0,
                  disabledIndices: h,
                })),
                d && (S = d(t, y, S))))
            : o &&
              ((S = c(e, {
                startingIndex: y + (f - (y % f)),
                decrement: !0,
                disabledIndices: h,
              })),
              d && (S = d(t, y, S))),
          s(S, f, n) && (S = y));
      const u = (0, r.floor)(g / f) === n;
      l(e, S) &&
        (o && u
          ? ((S =
              t.key === (p ? a.ARROW_RIGHT : a.ARROW_LEFT)
                ? g
                : c(e, {
                    startingIndex: y - (y % f) - 1,
                    disabledIndices: h,
                  })),
            d && (S = d(t, y, S)))
          : (S = y));
    }
    return S;
  }),
  (t.getMaxListIndex = function (e, t) {
    return c(e.current, {
      decrement: !0,
      startingIndex: e.current.length,
      disabledIndices: t,
    });
  }),
  (t.getMinListIndex = function (e, t) {
    return c(e.current, { disabledIndices: t });
  }),
  (t.isDifferentGridRow = s),
  (t.isElementVisible = p),
  (t.isHiddenByStyles = d),
  (t.isIndexOutOfListBounds = l),
  (t.isListIndexDisabled = u);
var r = n(28229 /* vendor/module-28229 */),
  o = n(81339 /* vendor/module-81339 */),
  i = n(76475 /* vendor/module-76475 */),
  a = n(65930 /* vendor/module-65930 */);
function s(e, t, n) {
  return Math.floor(e / t) !== n;
}
function l(e, t) {
  return t < 0 || t >= e.length;
}
function c(
  e,
  {
    startingIndex: t = -1,
    decrement: n = !1,
    disabledIndices: r,
    amount: o = 1,
  } = {},
) {
  let i = t;
  do {
    i += n ? -o : o;
  } while (i >= 0 && i <= e.length - 1 && u(e, i, r));
  return i;
}
function u(e, t, n) {
  if ("function" == typeof n ? n(t) : n?.includes(t)) return !0;
  const r = e[t];
  return (
    !!r &&
    (!p(r) ||
      (!n &&
        (r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled"))))
  );
}
function d(e) {
  return "hidden" === e.visibility || "collapse" === e.visibility;
}
function p(e, t = e ? (0, o.getComputedStyle)(e) : null) {
  return (
    !(!(e && e.isConnected && t) || d(t)) &&
    ("function" == typeof e.checkVisibility
      ? e.checkVisibility()
      : "none" !== t.display && "contents" !== t.display)
  );
}
