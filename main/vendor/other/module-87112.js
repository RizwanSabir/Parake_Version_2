// vendor/other/module-87112.js — webpack module 87112
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = new WeakMap(),
  r = new WeakMap();
function o(e) {
  let t = r.get(e);
  return t || ((t = []), r.set(e, t)), t;
}
function i(e) {
  return "string" == typeof e
    ? e
    : e instanceof RegExp || "number" == typeof e
      ? String(e)
      : void 0;
}
(t.getActualMatchedRoute = function (e, t) {
  const n = o(e);
  if (0 === n.length) return;
  const r = "string" == typeof e.originalUrl ? e.originalUrl : "";
  if (n.every((e) => "/" === e)) return "/" === r ? "/" : void 0;
  if ("*" === t) return t;
  if (
    t.includes("/") &&
    (t.includes(",") || t.includes("\\") || t.includes("*") || t.includes("["))
  )
    return t;
  const i = t.startsWith("/") ? t : `/${t}`;
  var s;
  return i.length > 0 &&
    (r === i || r.startsWith(i) || (s = i).includes(":") || s.includes("*"))
    ? i
    : void 0;
}),
  (t.getConstructedRoute = function (e) {
    const t = o(e);
    let n = "";
    for (const e of t)
      "/" !== e && "/*" !== e && (n += !n || n.endsWith("/") ? e : `/${e}`);
    return n.replace(/\/{2,}/g, "/");
  }),
  (t.getLayerPath = function (e) {
    const t = e[0];
    return Array.isArray(t) ? t.map((e) => i(e) ?? "").join(",") : i(t);
  }),
  (t.getLayerRegisteredPath = function (e) {
    return n.get(e);
  }),
  (t.popLayerPath = function (e) {
    o(e).pop();
  }),
  (t.pushLayerPath = function (e, t) {
    o(e).push(t);
  }),
  (t.setLayerRegisteredPath = function (e, t) {
    n.set(e, t);
  });
