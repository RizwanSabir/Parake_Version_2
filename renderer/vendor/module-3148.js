// vendor/module-3148.js — webpack module 3148
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.disableFocusInside = function (e) {
    b(e).forEach((e) => {
      (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
        e.setAttribute("tabindex", "-1");
    });
  }),
  (t.enableFocusInside = function (e) {
    const t = [];
    y(e, "[data-tabindex]", t),
      t.forEach((e) => {
        const t = e.dataset.tabindex;
        delete e.dataset.tabindex,
          t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
      });
  }),
  (t.focusable = v),
  (t.getNextTabbable = function (e) {
    return S((0, o.ownerDocument)(e).body, 1) || e;
  }),
  (t.getPreviousTabbable = function (e) {
    return S((0, o.ownerDocument)(e).body, -1) || e;
  }),
  (t.getTabbableAfterElement = function (e) {
    return _(e, 1);
  }),
  (t.getTabbableBeforeElement = function (e) {
    return _(e, -1);
  }),
  (t.isOutsideEvent = function (e, t) {
    const n = t || e.currentTarget,
      r = e.relatedTarget;
    return !r || !(0, i.contains)(n, r);
  }),
  (t.isTabbable = function (e) {
    return d(e) && f(e) >= 0;
  }),
  (t.tabbable = b);
var r = n(81339 /* vendor/module-81339 */),
  o = n(854 /* vendor/module-854 */),
  i = n(80475 /* vendor/module-80475 */),
  a = n(50684 /* vendor/module-50684 */);
function s(e) {
  const t = e.assignedSlot;
  if (t) return t;
  if (e.parentElement) return e.parentElement;
  const n = e.getRootNode();
  return (0, r.isShadowRoot)(n) ? n.host : null;
}
function l(e) {
  for (const t of Array.from(e.children))
    if ("summary" === (0, r.getNodeName)(t)) return t;
  return null;
}
function c(e, t) {
  const n = l(t);
  return !!n && (e === n || (0, i.contains)(n, e));
}
function u(e) {
  const t = e ? (0, r.getNodeName)(e) : "";
  return (
    null != e &&
    e.matches(
      'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]',
    ) &&
    ("summary" !== t ||
      (null != e.parentElement &&
        "details" === (0, r.getNodeName)(e.parentElement) &&
        l(e.parentElement) === e)) &&
    ("details" !== t || null == l(e)) &&
    ("input" !== t || "hidden" !== e.type)
  );
}
function d(e) {
  if (!u(e) || !e.isConnected || e.matches(":disabled")) return !1;
  for (let t = e; t; t = s(t)) {
    const n = t !== e,
      o = "slot" === (0, r.getNodeName)(t);
    if (t.hasAttribute("inert")) return !1;
    if (
      (n && "details" === (0, r.getNodeName)(t) && !t.open && !c(e, t)) ||
      t.hasAttribute("hidden") ||
      (!o && !p(t, n))
    )
      return !1;
  }
  return !0;
}
function p(e, t) {
  const n = (0, r.getComputedStyle)(e);
  return t ? "none" !== n.display : (0, a.isElementVisible)(e, n);
}
function f(e) {
  const t = e.tabIndex;
  if (t < 0) {
    const t = (0, r.getNodeName)(e);
    if (
      "details" === t ||
      "audio" === t ||
      "video" === t ||
      ((0, r.isHTMLElement)(e) && e.isContentEditable)
    )
      return 0;
  }
  return t;
}
function h(e) {
  if ("input" !== (0, r.getNodeName)(e)) return null;
  const t = e;
  return "radio" === t.type && "" !== t.name ? t : null;
}
function m(e) {
  if ((0, r.isHTMLElement)(e) && "slot" === (0, r.getNodeName)(e)) {
    const t = e.assignedElements({ flatten: !0 });
    if (t.length > 0) return t;
  }
  return (0, r.isHTMLElement)(e) && e.shadowRoot
    ? Array.from(e.shadowRoot.children)
    : Array.from(e.children);
}
function g(e, t) {
  m(e).forEach((e) => {
    u(e) && t.push(e), g(e, t);
  });
}
function y(e, t, n) {
  m(e).forEach((e) => {
    (0, r.isHTMLElement)(e) && e.matches(t) && n.push(e), y(e, t, n);
  });
}
function v(e) {
  const t = [];
  return g(e, t), t.filter(d);
}
function b(e) {
  const t = v(e);
  return t.filter(
    (e) =>
      f(e) >= 0 &&
      (function (e, t) {
        const n = h(e);
        if (!n) return !0;
        const r = t.find((e) => {
          const t = h(e);
          return t?.name === n.name && t.form === n.form && t.checked;
        });
        return r
          ? r === n
          : t.find((e) => {
              const t = h(e);
              return t?.name === n.name && t.form === n.form;
            }) === n;
      })(e, t),
  );
}
function S(e, t) {
  const n = b(e),
    r = n.length;
  if (0 === r) return;
  const a = (0, i.activeElement)((0, o.ownerDocument)(e)),
    s = n.indexOf(a);
  return n[-1 === s ? (1 === t ? 0 : r - 1) : s + t];
}
function _(e, t) {
  if (!e) return null;
  const n = b((0, o.ownerDocument)(e).body),
    r = n.length;
  if (0 === r) return null;
  const i = n.indexOf(e);
  return -1 === i ? null : n[(i + t + r) % r];
}
