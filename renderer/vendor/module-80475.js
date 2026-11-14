// vendor/module-80475.js — webpack module 80475
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  Object.defineProperty(t, "activeElement", {
    enumerable: !0,
    get: function () {
      return a.activeElement;
    },
  }),
  Object.defineProperty(t, "contains", {
    enumerable: !0,
    get: function () {
      return a.contains;
    },
  }),
  (t.getFloatingFocusElement = function (e) {
    return e
      ? e.hasAttribute(i.FOCUSABLE_ATTRIBUTE)
        ? e
        : e.querySelector(`[${i.FOCUSABLE_ATTRIBUTE}]`) || e
      : null;
  }),
  Object.defineProperty(t, "getTarget", {
    enumerable: !0,
    get: function () {
      return a.getTarget;
    },
  }),
  (t.isEventTargetWithin = function (e, t) {
    if (null == t) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return null != n.target && t.contains(n.target);
  }),
  (t.isInteractiveElement = function (e) {
    return (
      null !=
      e?.closest(
        `button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${i.TYPEABLE_SELECTOR}`,
      )
    );
  }),
  (t.isRootElement = function (e) {
    return e.matches("html,body");
  }),
  (t.isTargetInsideEnabledTrigger = function (e, t) {
    if (!(0, r.isElement)(e)) return !1;
    const n = e;
    if (t.hasElement(n)) return !n.hasAttribute("data-trigger-disabled");
    for (const [, e] of t.entries())
      if ((0, a.contains)(e, n))
        return !e.hasAttribute("data-trigger-disabled");
    return !1;
  }),
  (t.isTypeableCombobox = function (e) {
    return !!e && "combobox" === e.getAttribute("role") && s(e);
  }),
  (t.isTypeableElement = s),
  (t.matchesFocusVisible = function (e) {
    if (!e || o.platform.env.jsdom) return !0;
    try {
      return e.matches(":focus-visible");
    } catch (e) {
      return !0;
    }
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(87177 /* vendor/module-87177 */),
  i = n(65930 /* vendor/module-65930 */),
  a = n(71934 /* vendor/module-71934 */);
function s(e) {
  return (0, r.isHTMLElement)(e) && e.matches(i.TYPEABLE_SELECTOR);
}
