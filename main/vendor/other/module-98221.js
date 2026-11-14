// vendor/other/module-98221.js — webpack module 98221
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function t(e, t) {
  for (const [n, r] of e) if (!c(t, r, n)) return !1;
  return !0;
}
function n(e) {
  return (
    "latest" === e && (e = ">=0"),
    e.match(/^([^\d+]*)(\d.*)$/) || [null, "", "*.*.*"]
  );
}
function r(e, t) {
  const n = e.slice(0);
  if (-1 === e[t]) return n;
  for (n[t++]++; t < 3; t++) n[t] = 0;
  return n;
}
function o(e) {
  return "x" === e || "X" === e || "*" === e || "latest" === e ? -1 : Number(e);
}
function i(e) {
  return /^\d+$/.test(e) ? Number(e) : e;
}
function s(e, t, n) {
  return -1 === n
    ? "<" !== e
    : "=" === e
      ? t === n
      : ">" === e
        ? t > n
        : ">=" === e
          ? t >= n
          : "<" === e
            ? t < n
            : "<=" === e && t <= n;
}
function a(e, t) {
  e = e.split("+")[0];
  const [n, r] = e.split("-"),
    s = n.split(".").map(o).slice(0, 3),
    a = Math.max(s.length - 1, 0);
  return (
    ">" === t
      ? ((t = ">="), s.push(0, 0, 0), s[a]++)
      : "" === t
        ? s.push(0, 0, 0)
        : s.push(-1, -1, -1),
    r ? [s.slice(0, 3).concat(r.split(".").map(i)), t] : [s.slice(0, 3), t]
  );
}
function c(e, t, n) {
  if (!s("=", e[0], t[0])) return s(n, e[0], t[0]);
  if (!s("=", e[1], t[1])) return s(n, e[1], t[1]);
  if (!s("=", e[2], t[2])) return s(n, e[2], t[2]);
  if (3 === e.length && 3 === t.length) return s(n, e[2], t[2]);
  if ("<" === n[0] && (3 === t.length || 3 === e.length)) return !1;
  if (">" === n[0]) {
    if (3 === e.length) return !0;
    if (3 === t.length) return !1;
  }
  for (let r = 3; r < Math.max(e.length, t.length); r++)
    if (s(n, e[r] || "", t[r] || "")) return !0;
  return !1;
}
e.exports = function (e, o) {
  const [i] = a(e, "");
  for (const e of (function (e) {
    const t = [];
    let o = [];
    const i = e.trim().split(/\s+/);
    for (let e = 0; e < i.length; e++) {
      const s = i[e];
      if ("-" === s) continue;
      if ("||" === s) {
        t.push(o), (o = []);
        continue;
      }
      if (/^[<>=~v^]+$/.test(s) && e + 1 < i.length) {
        i[e + 1] = s + i[e + 1];
        continue;
      }
      const c = n(s);
      let u = c[1] || "=";
      u.endsWith("v") && (u = u.slice(0, -1));
      let [l, d] = a(c[2], u);
      if (e + 2 < i.length && "-" === i[e + 1]) {
        const t = n(i[e + 2]);
        (i[e + 2] = "<=" + (-1 === t[2].indexOf("-") ? t[2] + ".*.*" : t[2])),
          (d = ">=");
      }
      if ("~" === d[0]) {
        const e = c[2].split("-")[0].split(".").length;
        o.push([">=", l]), o.push(["<", r(l, 1 === e ? 0 : 1)]);
      } else if ("^" === d[0]) {
        const e = 0 !== l[0] ? 0 : 0 !== l[1] ? 1 : 2;
        o.push([">=", l]), o.push(["<", r(l, 0 === e ? 0 : 1 === e ? 1 : 2)]);
      } else o.push([d.replace("~", "").replace("^", ""), l]);
    }
    return o.length && t.push(o), t;
  })(o))
    if (t(e, i)) return !0;
  return !1;
};
