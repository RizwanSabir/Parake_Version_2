// vendor/other/module-15679.js — webpack module 15679
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/other/module-23295 */),
  o = n(27352 /* vendor/other/module-27352 */).GLOBAL_OBJ;
function i(e, t) {
  const n = e,
    i = [];
  if (!n?.tagName) return "";
  if (o.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  i.push(n.tagName.toLowerCase());
  const s = t?.length
    ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)])
    : null;
  if (s?.length)
    s.forEach((e) => {
      i.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    n.id && i.push(`#${n.id}`);
    const e = n.className;
    if (e && r.isString(e)) {
      const t = e.split(/\s+/);
      for (const e of t) i.push(`.${e}`);
    }
  }
  for (const e of ["aria-label", "type", "name", "title", "alt"]) {
    const t = n.getAttribute(e);
    t && i.push(`[${e}="${t}"]`);
  }
  return i.join("");
}
(t.getComponentName = function (e, t = 5) {
  if (!o.HTMLElement) return null;
  let n = e;
  for (let e = 0; e < t; e++) {
    if (!n) return null;
    if (n instanceof HTMLElement) {
      if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
      if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    n = n.parentNode;
  }
  return null;
}),
  (t.getLocationHref = function () {
    try {
      return o.document.location.href;
    } catch {
      return "";
    }
  }),
  (t.htmlTreeAsString = function (e, t = {}) {
    if (!e) return "<unknown>";
    try {
      let n = e;
      const r = 5,
        o = [];
      let s = 0,
        a = 0;
      const c = " > ",
        u = c.length;
      let l;
      const d = Array.isArray(t) ? t : t.keyAttrs,
        p = (!Array.isArray(t) && t.maxStringLength) || 80;
      for (
        ;
        n &&
        s++ < r &&
        ((l = i(n, d)),
        !("html" === l || (s > 1 && a + o.length * u + l.length >= p)));

      )
        o.push(l), (a += l.length), (n = n.parentNode);
      return o.reverse().join(c);
    } catch {
      return "<unknown>";
    }
  });
