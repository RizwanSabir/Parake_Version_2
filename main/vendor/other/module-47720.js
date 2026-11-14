// vendor/other/module-47720.js — webpack module 47720
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = {};
try {
  "undefined" != typeof Node &&
    (o.parentNode = Object.getOwnPropertyDescriptor(
      Node.prototype,
      "parentNode",
    ).get),
    "undefined" != typeof Element &&
      ((o.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName",
      ).get),
      (o.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get),
      (o.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className",
      ).get),
      (o.getAttribute = Element.prototype.getAttribute)),
    "undefined" != typeof HTMLElement &&
      (o.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset",
      ).get);
} catch {}
function i(e, t, n) {
  const r = o[t];
  if (r)
    try {
      return r.call(e, n);
    } catch {}
  const i = e[t];
  return "function" == typeof i ? i.call(e, n) : i;
}
function s(e, t) {
  const n = [],
    o = i(e, "tagName");
  if (!o) return "";
  if ("undefined" != typeof HTMLElement && e instanceof HTMLElement) {
    const t = i(e, "dataset");
    if (t) {
      if (t.sentryComponent) return t.sentryComponent;
      if (t.sentryElement) return t.sentryElement;
    }
  }
  n.push(o.toLowerCase());
  const s = t?.length
    ? t
        .filter((t) => i(e, "getAttribute", t))
        .map((t) => [t, i(e, "getAttribute", t)])
    : null;
  if (s?.length)
    s.forEach((e) => {
      n.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    const t = i(e, "id");
    t && n.push(`#${t}`);
    const o = i(e, "className");
    if (o && r.isString(o)) {
      const e = o.split(/\s+/);
      for (const t of e) n.push(`.${t}`);
    }
  }
  for (const t of ["aria-label", "type", "name", "title", "alt"]) {
    const r = i(e, "getAttribute", t);
    r && n.push(`[${t}="${r}"]`);
  }
  return n.join("");
}
t.htmlTreeAsString = function (e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n = e;
    const r = 5,
      o = [];
    let a = 0,
      c = 0;
    const u = " > ",
      l = u.length;
    let d;
    const p = Array.isArray(t) ? t : t.keyAttrs,
      f = (!Array.isArray(t) && t.maxStringLength) || 80;
    for (
      ;
      n &&
      a++ < r &&
      ((d = s(n, p)),
      !("html" === d || (a > 1 && c + o.length * l + d.length >= f)));

    )
      o.push(d), (c += d.length), (n = i(n, "parentNode"));
    return o.reverse().join(u);
  } catch {
    return "<unknown>";
  }
};
