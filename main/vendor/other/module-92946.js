// vendor/other/module-92946.js — webpack module 92946
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84018 /* vendor/other/module-84018 */),
  o = n(41538 /* vendor/other/module-41538 */),
  i = n(45674 /* vendor/other/module-45674 */),
  s = Object.prototype.toString,
  a = Object.prototype.hasOwnProperty,
  c = 65279,
  u = {
    0: "\\0",
    7: "\\a",
    8: "\\b",
    9: "\\t",
    10: "\\n",
    11: "\\v",
    12: "\\f",
    13: "\\r",
    27: "\\e",
    34: '\\"',
    92: "\\\\",
    133: "\\N",
    160: "\\_",
    8232: "\\L",
    8233: "\\P",
  },
  l = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF",
  ],
  d = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function p(e) {
  let t, n;
  const i = e.toString(16).toUpperCase();
  if (e <= 255) (t = "x"), (n = 2);
  else if (e <= 65535) (t = "u"), (n = 4);
  else {
    if (!(e <= 4294967295))
      throw new o(
        "code point within a string may not be greater than 0xFFFFFFFF",
      );
    (t = "U"), (n = 8);
  }
  return "\\" + t + r.repeat("0", n - i.length) + i;
}
function f(e) {
  (this.schema = e.schema || i),
    (this.indent = Math.max(1, e.indent || 2)),
    (this.noArrayIndent = e.noArrayIndent || !1),
    (this.skipInvalid = e.skipInvalid || !1),
    (this.flowLevel = r.isNothing(e.flowLevel) ? -1 : e.flowLevel),
    (this.styleMap = (function (e, t) {
      if (null === t) return {};
      const n = {},
        r = Object.keys(t);
      for (let o = 0, i = r.length; o < i; o += 1) {
        let i = r[o],
          s = String(t[i]);
        "!!" === i.slice(0, 2) && (i = "tag:yaml.org,2002:" + i.slice(2));
        const c = e.compiledTypeMap.fallback[i];
        c && a.call(c.styleAliases, s) && (s = c.styleAliases[s]), (n[i] = s);
      }
      return n;
    })(this.schema, e.styles || null)),
    (this.sortKeys = e.sortKeys || !1),
    (this.lineWidth = e.lineWidth || 80),
    (this.noRefs = e.noRefs || !1),
    (this.noCompatMode = e.noCompatMode || !1),
    (this.condenseFlow = e.condenseFlow || !1),
    (this.quotingType = '"' === e.quotingType ? 2 : 1),
    (this.forceQuotes = e.forceQuotes || !1),
    (this.replacer = "function" == typeof e.replacer ? e.replacer : null),
    (this.implicitTypes = this.schema.compiledImplicit),
    (this.explicitTypes = this.schema.compiledExplicit),
    (this.tag = null),
    (this.result = ""),
    (this.duplicates = []),
    (this.usedDuplicates = null);
}
function h(e, t) {
  const n = r.repeat(" ", t);
  let o = 0,
    i = "";
  const s = e.length;
  for (; o < s; ) {
    let t;
    const r = e.indexOf("\n", o);
    -1 === r
      ? ((t = e.slice(o)), (o = s))
      : ((t = e.slice(o, r + 1)), (o = r + 1)),
      t.length && "\n" !== t && (i += n),
      (i += t);
  }
  return i;
}
function g(e, t) {
  return "\n" + r.repeat(" ", e.indent * t);
}
function m(e) {
  return 32 === e || 9 === e;
}
function _(e) {
  return (
    (e >= 32 && e <= 126) ||
    (e >= 161 && e <= 55295 && 8232 !== e && 8233 !== e) ||
    (e >= 57344 && e <= 65533 && e !== c) ||
    (e >= 65536 && e <= 1114111)
  );
}
function S(e) {
  return _(e) && e !== c && 13 !== e && 10 !== e;
}
function E(e, t, n) {
  const r = S(e),
    o = r && !m(e);
  return (
    ((n
      ? r
      : r && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) &&
      35 !== e &&
      !(58 === t && !o)) ||
    (S(t) && !m(t) && 35 === e) ||
    (58 === t && o)
  );
}
function y(e, t) {
  const n = e.charCodeAt(t);
  let r;
  return n >= 55296 &&
    n <= 56319 &&
    t + 1 < e.length &&
    ((r = e.charCodeAt(t + 1)), r >= 56320 && r <= 57343)
    ? 1024 * (n - 55296) + r - 56320 + 65536
    : n;
}
function T(e) {
  return /^\n* /.test(e);
}
function b(e, t, n, r, i) {
  e.dump = (function () {
    if (0 === t.length) return 2 === e.quotingType ? '""' : "''";
    if (!e.noCompatMode && (-1 !== l.indexOf(t) || d.test(t)))
      return 2 === e.quotingType ? '"' + t + '"' : "'" + t + "'";
    const s = e.indent * Math.max(1, n),
      a =
        -1 === e.lineWidth
          ? -1
          : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s),
      f = r || (e.flowLevel > -1 && n >= e.flowLevel);
    switch (
      (function (e, t, n, r, o, i, s, a) {
        let u,
          l = 0,
          d = null,
          p = !1,
          f = !1;
        const h = -1 !== r;
        let g = -1,
          S =
            _((b = y(e, 0))) &&
            b !== c &&
            !m(b) &&
            45 !== b &&
            63 !== b &&
            58 !== b &&
            44 !== b &&
            91 !== b &&
            93 !== b &&
            123 !== b &&
            125 !== b &&
            35 !== b &&
            38 !== b &&
            42 !== b &&
            33 !== b &&
            124 !== b &&
            61 !== b &&
            62 !== b &&
            39 !== b &&
            34 !== b &&
            37 !== b &&
            64 !== b &&
            96 !== b &&
            (function (e) {
              return !m(e) && 58 !== e;
            })(y(e, e.length - 1));
        var b;
        if (t || s)
          for (u = 0; u < e.length; l >= 65536 ? (u += 2) : u++) {
            if (((l = y(e, u)), !_(l))) return 5;
            (S = S && E(l, d, a)), (d = l);
          }
        else {
          for (u = 0; u < e.length; l >= 65536 ? (u += 2) : u++) {
            if (((l = y(e, u)), 10 === l))
              (p = !0),
                h && ((f = f || (u - g - 1 > r && " " !== e[g + 1])), (g = u));
            else if (!_(l)) return 5;
            (S = S && E(l, d, a)), (d = l);
          }
          f = f || (h && u - g - 1 > r && " " !== e[g + 1]);
        }
        return p || f
          ? n > 9 && T(e)
            ? 5
            : s
              ? 2 === i
                ? 5
                : 2
              : f
                ? 4
                : 3
          : !S || s || o(e)
            ? 2 === i
              ? 5
              : 2
            : 1;
      })(
        t,
        f,
        e.indent,
        a,
        function (t) {
          return (function (e, t) {
            for (let n = 0, r = e.implicitTypes.length; n < r; n += 1)
              if (e.implicitTypes[n].resolve(t)) return !0;
            return !1;
          })(e, t);
        },
        e.quotingType,
        e.forceQuotes && !r,
        i,
      )
    ) {
      case 1:
        return t;
      case 2:
        return "'" + t.replace(/'/g, "''") + "'";
      case 3:
        return "|" + I(t, e.indent) + v(h(t, s));
      case 4:
        return (
          ">" +
          I(t, e.indent) +
          v(
            h(
              (function (e, t) {
                const n = /(\n+)([^\n]*)/g;
                let r,
                  o,
                  i = (function () {
                    let r = e.indexOf("\n");
                    return (
                      (r = -1 !== r ? r : e.length),
                      (n.lastIndex = r),
                      A(e.slice(0, r), t)
                    );
                  })(),
                  s = "\n" === e[0] || " " === e[0];
                for (; (o = n.exec(e)); ) {
                  const e = o[1],
                    n = o[2];
                  (r = " " === n[0]),
                    (i += e + (s || r || "" === n ? "" : "\n") + A(n, t)),
                    (s = r);
                }
                return i;
              })(t, a),
              s,
            ),
          )
        );
      case 5:
        return (
          '"' +
          (function (e) {
            let t = "",
              n = 0;
            for (let r = 0; r < e.length; n >= 65536 ? (r += 2) : r++) {
              n = y(e, r);
              const o = u[n];
              !o && _(n)
                ? ((t += e[r]), n >= 65536 && (t += e[r + 1]))
                : (t += o || p(n));
            }
            return t;
          })(t) +
          '"'
        );
      default:
        throw new o("impossible error: invalid scalar style");
    }
  })();
}
function I(e, t) {
  const n = T(e) ? String(t) : "",
    r = "\n" === e[e.length - 1];
  return (
    n +
    (!r || ("\n" !== e[e.length - 2] && "\n" !== e) ? (r ? "" : "-") : "+") +
    "\n"
  );
}
function v(e) {
  return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
}
function A(e, t) {
  if ("" === e || " " === e[0]) return e;
  const n = / [^ ]/g;
  let r,
    o,
    i = 0,
    s = 0,
    a = 0,
    c = "";
  for (; (r = n.exec(e)); )
    (a = r.index),
      a - i > t &&
        ((o = s > i ? s : a), (c += "\n" + e.slice(i, o)), (i = o + 1)),
      (s = a);
  return (
    (c += "\n"),
    e.length - i > t && s > i
      ? (c += e.slice(i, s) + "\n" + e.slice(s + 1))
      : (c += e.slice(i)),
    c.slice(1)
  );
}
function N(e, t, n, r) {
  let o = "";
  const i = e.tag;
  for (let i = 0, s = n.length; i < s; i += 1) {
    let s = n[i];
    e.replacer && (s = e.replacer.call(n, String(i), s)),
      (C(e, t + 1, s, !0, !0, !1, !0) ||
        (void 0 === s && C(e, t + 1, null, !0, !0, !1, !0))) &&
        ((r && "" === o) || (o += g(e, t)),
        e.dump && 10 === e.dump.charCodeAt(0) ? (o += "-") : (o += "- "),
        (o += e.dump));
  }
  (e.tag = i), (e.dump = o || "[]");
}
function R(e, t, n) {
  const r = n ? e.explicitTypes : e.implicitTypes;
  for (let i = 0, c = r.length; i < c; i += 1) {
    const c = r[i];
    if (
      (c.instanceOf || c.predicate) &&
      (!c.instanceOf || ("object" == typeof t && t instanceof c.instanceOf)) &&
      (!c.predicate || c.predicate(t))
    ) {
      if (
        (n
          ? c.multi && c.representName
            ? (e.tag = c.representName(t))
            : (e.tag = c.tag)
          : (e.tag = "?"),
        c.represent)
      ) {
        const n = e.styleMap[c.tag] || c.defaultStyle;
        let r;
        if ("[object Function]" === s.call(c.represent)) r = c.represent(t, n);
        else {
          if (!a.call(c.represent, n))
            throw new o(
              "!<" + c.tag + '> tag resolver accepts not "' + n + '" style',
            );
          r = c.represent[n](t, n);
        }
        e.dump = r;
      }
      return !0;
    }
  }
  return !1;
}
function C(e, t, n, r, i, a, c) {
  (e.tag = null), (e.dump = n), R(e, n, !1) || R(e, n, !0);
  const u = s.call(e.dump),
    l = r;
  r && (r = e.flowLevel < 0 || e.flowLevel > t);
  const d = "[object Object]" === u || "[object Array]" === u;
  let p, f;
  if (
    (d && ((p = e.duplicates.indexOf(n)), (f = -1 !== p)),
    ((null !== e.tag && "?" !== e.tag) || f || (2 !== e.indent && t > 0)) &&
      (i = !1),
    f && e.usedDuplicates[p])
  )
    e.dump = "*ref_" + p;
  else {
    if (
      (d && f && !e.usedDuplicates[p] && (e.usedDuplicates[p] = !0),
      "[object Object]" === u)
    )
      r && 0 !== Object.keys(e.dump).length
        ? ((function (e, t, n, r) {
            let i = "";
            const s = e.tag,
              a = Object.keys(n);
            if (!0 === e.sortKeys) a.sort();
            else if ("function" == typeof e.sortKeys) a.sort(e.sortKeys);
            else if (e.sortKeys)
              throw new o("sortKeys must be a boolean or a function");
            for (let o = 0, s = a.length; o < s; o += 1) {
              let s = "";
              (r && "" === i) || (s += g(e, t));
              const c = a[o];
              let u = n[c];
              if (
                (e.replacer && (u = e.replacer.call(n, c, u)),
                !C(e, t + 1, c, !0, !0, !0))
              )
                continue;
              const l =
                (null !== e.tag && "?" !== e.tag) ||
                (e.dump && e.dump.length > 1024);
              l &&
                (e.dump && 10 === e.dump.charCodeAt(0)
                  ? (s += "?")
                  : (s += "? ")),
                (s += e.dump),
                l && (s += g(e, t)),
                C(e, t + 1, u, !0, l) &&
                  (e.dump && 10 === e.dump.charCodeAt(0)
                    ? (s += ":")
                    : (s += ": "),
                  (s += e.dump),
                  (i += s));
            }
            (e.tag = s), (e.dump = i || "{}");
          })(e, t, e.dump, i),
          f && (e.dump = "&ref_" + p + e.dump))
        : ((function (e, t, n) {
            let r = "";
            const o = e.tag,
              i = Object.keys(n);
            for (let o = 0, s = i.length; o < s; o += 1) {
              let s = "";
              "" !== r && (s += ", "), e.condenseFlow && (s += '"');
              const a = i[o];
              let c = n[a];
              e.replacer && (c = e.replacer.call(n, a, c)),
                C(e, t, a, !1, !1) &&
                  (e.dump.length > 1024 && (s += "? "),
                  (s +=
                    e.dump +
                    (e.condenseFlow ? '"' : "") +
                    ":" +
                    (e.condenseFlow ? "" : " ")),
                  C(e, t, c, !1, !1) && ((s += e.dump), (r += s)));
            }
            (e.tag = o), (e.dump = "{" + r + "}");
          })(e, t, e.dump),
          f && (e.dump = "&ref_" + p + " " + e.dump));
    else if ("[object Array]" === u)
      r && 0 !== e.dump.length
        ? (e.noArrayIndent && !c && t > 0
            ? N(e, t - 1, e.dump, i)
            : N(e, t, e.dump, i),
          f && (e.dump = "&ref_" + p + e.dump))
        : ((function (e, t, n) {
            let r = "";
            const o = e.tag;
            for (let o = 0, i = n.length; o < i; o += 1) {
              let i = n[o];
              e.replacer && (i = e.replacer.call(n, String(o), i)),
                (C(e, t, i, !1, !1) ||
                  (void 0 === i && C(e, t, null, !1, !1))) &&
                  ("" !== r && (r += "," + (e.condenseFlow ? "" : " ")),
                  (r += e.dump));
            }
            (e.tag = o), (e.dump = "[" + r + "]");
          })(e, t, e.dump),
          f && (e.dump = "&ref_" + p + " " + e.dump));
    else {
      if ("[object String]" !== u) {
        if ("[object Undefined]" === u) return !1;
        if (e.skipInvalid) return !1;
        throw new o("unacceptable kind of an object to dump " + u);
      }
      "?" !== e.tag && b(e, e.dump, t, a, l);
    }
    if (null !== e.tag && "?" !== e.tag) {
      let t = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(
        /!/g,
        "%21",
      );
      (t =
        "!" === e.tag[0]
          ? "!" + t
          : "tag:yaml.org,2002:" === t.slice(0, 18)
            ? "!!" + t.slice(18)
            : "!<" + t + ">"),
        (e.dump = t + " " + e.dump);
    }
  }
  return !0;
}
function O(e, t) {
  const n = [],
    r = [];
  w(e, n, r);
  const o = r.length;
  for (let e = 0; e < o; e += 1) t.duplicates.push(n[r[e]]);
  t.usedDuplicates = new Array(o);
}
function w(e, t, n) {
  if (null !== e && "object" == typeof e) {
    const r = t.indexOf(e);
    if (-1 !== r) -1 === n.indexOf(r) && n.push(r);
    else if ((t.push(e), Array.isArray(e)))
      for (let r = 0, o = e.length; r < o; r += 1) w(e[r], t, n);
    else {
      const r = Object.keys(e);
      for (let o = 0, i = r.length; o < i; o += 1) w(e[r[o]], t, n);
    }
  }
}
e.exports.dump = function (e, t) {
  const n = new f((t = t || {}));
  n.noRefs || O(e, n);
  let r = e;
  return (
    n.replacer && (r = n.replacer.call({ "": r }, "", r)),
    C(n, 0, r, !0, !0) ? n.dump + "\n" : ""
  );
};
