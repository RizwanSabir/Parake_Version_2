// vendor/other/module-89684.js — webpack module 89684
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e, t) {
  let n = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const r = e[t];
    "." === r
      ? e.splice(t, 1)
      : ".." === r
        ? (e.splice(t, 1), n++)
        : n && (e.splice(t, 1), n--);
  }
  if (t) for (; n--; n) e.unshift("..");
  return e;
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r =
  /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function o(e) {
  const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
    n = r.exec(t);
  return n ? n.slice(1) : [];
}
function i(...e) {
  let t = "",
    r = !1;
  for (let n = e.length - 1; n >= -1 && !r; n--) {
    const o = n >= 0 ? e[n] : "/";
    o && ((t = `${o}/${t}`), (r = "/" === o.charAt(0)));
  }
  return (
    (t = n(
      t.split("/").filter((e) => !!e),
      !r,
    ).join("/")),
    (r ? "/" : "") + t || "."
  );
}
function s(e) {
  let t = 0;
  for (; t < e.length && "" === e[t]; t++);
  let n = e.length - 1;
  for (; n >= 0 && "" === e[n]; n--);
  return t > n ? [] : e.slice(t, n - t + 1);
}
function a(e) {
  const t = c(e),
    r = "/" === e.slice(-1);
  let o = n(
    e.split("/").filter((e) => !!e),
    !t,
  ).join("/");
  return o || t || (o = "."), o && r && (o += "/"), (t ? "/" : "") + o;
}
function c(e) {
  return "/" === e.charAt(0);
}
(t.basename = function (e, t) {
  let n = o(e)[2] || "";
  return (
    t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)),
    n
  );
}),
  (t.dirname = function (e) {
    const t = o(e),
      n = t[0] || "";
    let r = t[1];
    return n || r ? (r && (r = r.slice(0, r.length - 1)), n + r) : ".";
  }),
  (t.isAbsolute = c),
  (t.join = function (...e) {
    return a(e.join("/"));
  }),
  (t.normalizePath = a),
  (t.relative = function (e, t) {
    (e = i(e).slice(1)), (t = i(t).slice(1));
    const n = s(e.split("/")),
      r = s(t.split("/")),
      o = Math.min(n.length, r.length);
    let a = o;
    for (let e = 0; e < o; e++)
      if (n[e] !== r[e]) {
        a = e;
        break;
      }
    let c = [];
    for (let e = a; e < n.length; e++) c.push("..");
    return (c = c.concat(r.slice(a))), c.join("/");
  }),
  (t.resolve = i);
