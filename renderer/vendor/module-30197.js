// vendor/module-30197.js — webpack module 30197
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.VERTICAL_KEYS_WITH_EXTRA_KEYS =
    t.VERTICAL_KEYS =
    t.SHIFT =
    t.PAGE_UP =
    t.PAGE_DOWN =
    t.MODIFIER_KEYS =
    t.META =
    t.HORIZONTAL_KEYS_WITH_EXTRA_KEYS =
    t.HORIZONTAL_KEYS =
    t.HOME =
    t.END =
    t.CONTROL =
    t.COMPOSITE_KEYS =
    t.ARROW_UP =
    t.ARROW_RIGHT =
    t.ARROW_LEFT =
    t.ARROW_KEYS =
    t.ARROW_DOWN =
    t.ALT =
      void 0),
  Object.defineProperty(t, "findNonDisabledListIndex", {
    enumerable: !0,
    get: function () {
      return o.findNonDisabledListIndex;
    },
  }),
  Object.defineProperty(t, "getMaxListIndex", {
    enumerable: !0,
    get: function () {
      return o.getMaxListIndex;
    },
  }),
  Object.defineProperty(t, "getMinListIndex", {
    enumerable: !0,
    get: function () {
      return o.getMinListIndex;
    },
  }),
  Object.defineProperty(t, "isIndexOutOfListBounds", {
    enumerable: !0,
    get: function () {
      return o.isIndexOutOfListBounds;
    },
  }),
  Object.defineProperty(t, "isListIndexDisabled", {
    enumerable: !0,
    get: function () {
      return o.isListIndexDisabled;
    },
  }),
  (t.isNativeInput = function (e) {
    return (
      !(
        !(function (e) {
          return (0, r.isHTMLElement)(e) && "INPUT" === e.tagName;
        })(e) || null == e.selectionStart
      ) || !(!(0, r.isHTMLElement)(e) || "TEXTAREA" !== e.tagName)
    );
  }),
  (t.scrollIntoViewIfNeeded = function (e, t, n, r) {
    if (!e || !t || !t.scrollTo) return;
    let o = e.scrollLeft,
      i = e.scrollTop;
    const a = e.clientWidth < e.scrollWidth,
      s = e.clientHeight < e.scrollHeight;
    if (a && "vertical" !== r) {
      const r = v(e, t, "left"),
        i = b(e),
        a = b(t);
      "ltr" === n &&
        (r + t.offsetWidth + a.scrollMarginRight >
        e.scrollLeft + e.clientWidth - i.scrollPaddingRight
          ? (o =
              r +
              t.offsetWidth +
              a.scrollMarginRight -
              e.clientWidth +
              i.scrollPaddingRight)
          : r - a.scrollMarginLeft < e.scrollLeft + i.scrollPaddingLeft &&
            (o = r - a.scrollMarginLeft - i.scrollPaddingLeft)),
        "rtl" === n &&
          (r - a.scrollMarginRight < e.scrollLeft + i.scrollPaddingLeft
            ? (o = r - a.scrollMarginLeft - i.scrollPaddingLeft)
            : r + t.offsetWidth + a.scrollMarginRight >
                e.scrollLeft + e.clientWidth - i.scrollPaddingRight &&
              (o =
                r +
                t.offsetWidth +
                a.scrollMarginRight -
                e.clientWidth +
                i.scrollPaddingRight));
    }
    if (s && "horizontal" !== r) {
      const n = v(e, t, "top"),
        r = b(e),
        o = b(t);
      n - o.scrollMarginTop < e.scrollTop + r.scrollPaddingTop
        ? (i = n - o.scrollMarginTop - r.scrollPaddingTop)
        : n + t.offsetHeight + o.scrollMarginBottom >
            e.scrollTop + e.clientHeight - r.scrollPaddingBottom &&
          (i =
            n +
            t.offsetHeight +
            o.scrollMarginBottom -
            e.clientHeight +
            r.scrollPaddingBottom);
    }
    e.scrollTo({ left: o, top: i, behavior: "auto" });
  }),
  Object.defineProperty(t, "stopEvent", {
    enumerable: !0,
    get: function () {
      return o.stopEvent;
    },
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(65200 /* vendor/module-65200 */);
const i = (t.ARROW_UP = "ArrowUp"),
  a = (t.ARROW_DOWN = "ArrowDown"),
  s = (t.ARROW_LEFT = "ArrowLeft"),
  l = (t.ARROW_RIGHT = "ArrowRight"),
  c = (t.HOME = "Home"),
  u = (t.END = "End"),
  d =
    ((t.PAGE_UP = "PageUp"),
    (t.PAGE_DOWN = "PageDown"),
    (t.HORIZONTAL_KEYS = new Set([s, l]))),
  p =
    ((t.HORIZONTAL_KEYS_WITH_EXTRA_KEYS = new Set([s, l, c, u])),
    (t.VERTICAL_KEYS = new Set([i, a]))),
  f =
    ((t.VERTICAL_KEYS_WITH_EXTRA_KEYS = new Set([i, a, c, u])),
    (t.ARROW_KEYS = new Set([...d, ...p]))),
  h = ((t.COMPOSITE_KEYS = new Set([...f, c, u])), (t.SHIFT = "Shift")),
  m = (t.CONTROL = "Control"),
  g = (t.ALT = "Alt"),
  y = (t.META = "Meta");
function v(e, t, n) {
  const r = "left" === n ? "offsetLeft" : "offsetTop";
  let o = 0;
  for (; t.offsetParent && ((o += t[r]), t.offsetParent !== e); )
    t = t.offsetParent;
  return o;
}
function b(e) {
  const t = getComputedStyle(e);
  return {
    scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0,
  };
}
t.MODIFIER_KEYS = new Set([h, m, g, y]);
