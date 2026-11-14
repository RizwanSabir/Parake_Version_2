// vendor/other/module-69176.js — webpack module 69176
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84018 /* vendor/other/module-84018 */),
  o = n(41538 /* vendor/other/module-41538 */),
  i = n(57694 /* vendor/other/module-57694 */),
  s = n(45674 /* vendor/other/module-45674 */),
  a = Object.prototype.hasOwnProperty,
  c =
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
  u = /[\x85\u2028\u2029]/,
  l = /[,\[\]{}]/,
  d = /^(?:!|!!|![0-9A-Za-z-]+!)$/,
  p = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
function f(e) {
  return Object.prototype.toString.call(e);
}
function h(e) {
  return 10 === e || 13 === e;
}
function g(e) {
  return 9 === e || 32 === e;
}
function m(e) {
  return 9 === e || 32 === e || 10 === e || 13 === e;
}
function _(e) {
  return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
}
function S(e) {
  if (e >= 48 && e <= 57) return e - 48;
  const t = 32 | e;
  return t >= 97 && t <= 102 ? t - 97 + 10 : -1;
}
function E(e) {
  return 120 === e ? 2 : 117 === e ? 4 : 85 === e ? 8 : 0;
}
function y(e) {
  return e >= 48 && e <= 57 ? e - 48 : -1;
}
function T(e) {
  switch (e) {
    case 48:
      return "\0";
    case 97:
      return "";
    case 98:
      return "\b";
    case 116:
    case 9:
      return "\t";
    case 110:
      return "\n";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 114:
      return "\r";
    case 101:
      return "";
    case 32:
      return " ";
    case 34:
      return '"';
    case 47:
      return "/";
    case 92:
      return "\\";
    case 78:
      return "";
    case 95:
      return " ";
    case 76:
      return "\u2028";
    case 80:
      return "\u2029";
    default:
      return "";
  }
}
function b(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : String.fromCharCode(
        55296 + ((e - 65536) >> 10),
        56320 + ((e - 65536) & 1023),
      );
}
function I(e, t, n) {
  "__proto__" === t
    ? Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: n,
      })
    : (e[t] = n);
}
const v = new Array(256),
  A = new Array(256);
for (let e = 0; e < 256; e++) (v[e] = T(e) ? 1 : 0), (A[e] = T(e));
function N(e, t) {
  (this.input = e),
    (this.filename = t.filename || null),
    (this.schema = t.schema || s),
    (this.onWarning = t.onWarning || null),
    (this.legacy = t.legacy || !1),
    (this.json = t.json || !1),
    (this.listener = t.listener || null),
    (this.maxDepth = "number" == typeof t.maxDepth ? t.maxDepth : 100),
    (this.maxTotalMergeKeys =
      "number" == typeof t.maxTotalMergeKeys ? t.maxTotalMergeKeys : 1e4),
    (this.implicitTypes = this.schema.compiledImplicit),
    (this.typeMap = this.schema.compiledTypeMap),
    (this.length = e.length),
    (this.position = 0),
    (this.line = 0),
    (this.lineStart = 0),
    (this.lineIndent = 0),
    (this.depth = 0),
    (this.totalMergeKeys = 0),
    (this.firstTabInLine = -1),
    (this.documents = []),
    (this.anchorMapTransactions = []);
}
function R(e, t) {
  const n = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart,
  };
  return (n.snippet = i(n)), new o(t, n);
}
function C(e, t) {
  throw R(e, t);
}
function O(e, t) {
  e.onWarning && e.onWarning.call(null, R(e, t));
}
function w(e, t, n) {
  const r = e.anchorMapTransactions;
  if (0 !== r.length) {
    const n = r[r.length - 1];
    a.call(n, t) ||
      (n[t] = {
        existed: a.call(e.anchorMap, t),
        value: e.anchorMap[t],
      });
  }
  e.anchorMap[t] = n;
}
function k(e) {
  return {
    position: e.position,
    line: e.line,
    lineStart: e.lineStart,
    lineIndent: e.lineIndent,
    firstTabInLine: e.firstTabInLine,
    tag: e.tag,
    anchor: e.anchor,
    kind: e.kind,
    result: e.result,
  };
}
function P(e, t) {
  (e.position = t.position),
    (e.line = t.line),
    (e.lineStart = t.lineStart),
    (e.lineIndent = t.lineIndent),
    (e.firstTabInLine = t.firstTabInLine),
    (e.tag = t.tag),
    (e.anchor = t.anchor),
    (e.kind = t.kind),
    (e.result = t.result);
}
const L = {
  YAML: function (e, t, n) {
    null !== e.version && C(e, "duplication of %YAML directive"),
      1 !== n.length && C(e, "YAML directive accepts exactly one argument");
    const r = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
    null === r && C(e, "ill-formed argument of the YAML directive");
    const o = parseInt(r[1], 10),
      i = parseInt(r[2], 10);
    1 !== o && C(e, "unacceptable YAML version of the document"),
      (e.version = n[0]),
      (e.checkLineBreaks = i < 2),
      1 !== i && 2 !== i && O(e, "unsupported YAML version of the document");
  },
  TAG: function (e, t, n) {
    let r;
    2 !== n.length && C(e, "TAG directive accepts exactly two arguments");
    const o = n[0];
    (r = n[1]),
      d.test(o) ||
        C(e, "ill-formed tag handle (first argument) of the TAG directive"),
      a.call(e.tagMap, o) &&
        C(
          e,
          'there is a previously declared suffix for "' + o + '" tag handle',
        ),
      p.test(r) ||
        C(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      r = decodeURIComponent(r);
    } catch (t) {
      C(e, "tag prefix is malformed: " + r);
    }
    e.tagMap[o] = r;
  },
};
function x(e, t, n, r) {
  if (t < n) {
    const o = e.input.slice(t, n);
    if (r)
      for (let t = 0, n = o.length; t < n; t += 1) {
        const n = o.charCodeAt(t);
        9 === n ||
          (n >= 32 && n <= 1114111) ||
          C(e, "expected valid JSON character");
      }
    else c.test(o) && C(e, "the stream contains non-printable characters");
    e.result += o;
  }
}
function M(e) {
  e.totalMergeKeys++,
    -1 !== e.maxTotalMergeKeys &&
      e.totalMergeKeys > e.maxTotalMergeKeys &&
      C(
        e,
        "merge keys exceeded maxTotalMergeKeys (" + e.maxTotalMergeKeys + ")",
      );
}
function D(e, t, n, o) {
  r.isObject(n) ||
    C(e, "cannot merge mappings; the provided source object is unacceptable"),
    M(e);
  const i = Object.keys(n);
  for (let r = 0, s = i.length; r < s; r += 1) {
    const s = i[r];
    M(e), a.call(t, s) || (I(t, s, n[s]), (o[s] = !0));
  }
}
function U(e, t, n, r, o, i, s, c, u) {
  if (Array.isArray(o))
    for (
      let t = 0, n = (o = Array.prototype.slice.call(o)).length;
      t < n;
      t += 1
    )
      Array.isArray(o[t]) &&
        C(e, "nested arrays are not supported inside keys"),
        "object" == typeof o &&
          "[object Object]" === f(o[t]) &&
          (o[t] = "[object Object]");
  if (
    ("object" == typeof o &&
      "[object Object]" === f(o) &&
      (o = "[object Object]"),
    (o = String(o)),
    null === t && (t = {}),
    "tag:yaml.org,2002:merge" === r)
  )
    if (Array.isArray(i)) {
      i.length > 100 && C(e, "abnormal merge sequence size");
      for (let r = 0, o = i.length; r < o; r += 1) D(e, t, i[r], n);
    } else D(e, t, i, n);
  else
    e.json ||
      a.call(n, o) ||
      !a.call(t, o) ||
      ((e.line = s || e.line),
      (e.lineStart = c || e.lineStart),
      (e.position = u || e.position),
      C(e, "duplicated mapping key")),
      I(t, o, i),
      delete n[o];
  return t;
}
function B(e) {
  const t = e.input.charCodeAt(e.position);
  10 === t
    ? e.position++
    : 13 === t
      ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++)
      : C(e, "a line break is expected"),
    (e.line += 1),
    (e.lineStart = e.position),
    (e.firstTabInLine = -1);
}
function G(e, t, n) {
  let r = 0,
    o = e.input.charCodeAt(e.position);
  for (; 0 !== o; ) {
    for (; g(o); )
      9 === o && -1 === e.firstTabInLine && (e.firstTabInLine = e.position),
        (o = e.input.charCodeAt(++e.position));
    if (t && 35 === o)
      do {
        o = e.input.charCodeAt(++e.position);
      } while (10 !== o && 13 !== o && 0 !== o);
    if (!h(o)) break;
    for (
      B(e), o = e.input.charCodeAt(e.position), r++, e.lineIndent = 0;
      32 === o;

    )
      e.lineIndent++, (o = e.input.charCodeAt(++e.position));
  }
  return (
    -1 !== n && 0 !== r && e.lineIndent < n && O(e, "deficient indentation"), r
  );
}
function F(e) {
  let t = e.position,
    n = e.input.charCodeAt(t);
  return !(
    (45 !== n && 46 !== n) ||
    n !== e.input.charCodeAt(t + 1) ||
    n !== e.input.charCodeAt(t + 2) ||
    ((t += 3), (n = e.input.charCodeAt(t)), 0 !== n && !m(n))
  );
}
function j(e, t) {
  1 === t ? (e.result += " ") : t > 1 && (e.result += r.repeat("\n", t - 1));
}
function H(e, t) {
  const n = e.tag,
    r = e.anchor,
    o = [];
  let i = !1;
  if (-1 !== e.firstTabInLine) return !1;
  null !== e.anchor && w(e, e.anchor, o);
  let s = e.input.charCodeAt(e.position);
  for (
    ;
    0 !== s &&
    (-1 !== e.firstTabInLine &&
      ((e.position = e.firstTabInLine),
      C(e, "tab characters must not be used in indentation")),
    45 === s) &&
    m(e.input.charCodeAt(e.position + 1));

  ) {
    if (((i = !0), e.position++, G(e, !0, -1) && e.lineIndent <= t)) {
      o.push(null), (s = e.input.charCodeAt(e.position));
      continue;
    }
    const n = e.line;
    if (
      (Y(e, t, 3, !1, !0),
      o.push(e.result),
      G(e, !0, -1),
      (s = e.input.charCodeAt(e.position)),
      (e.line === n || e.lineIndent > t) && 0 !== s)
    )
      C(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t) break;
  }
  return (
    !!i &&
    ((e.tag = n), (e.anchor = r), (e.kind = "sequence"), (e.result = o), !0)
  );
}
function W(e, t, n) {
  let r, o, i, s;
  const a = e.tag,
    c = e.anchor,
    u = {},
    l = Object.create(null);
  let d = null,
    p = null,
    f = null,
    h = !1,
    _ = !1;
  if (-1 !== e.firstTabInLine) return !1;
  null !== e.anchor && w(e, e.anchor, u);
  let S = e.input.charCodeAt(e.position);
  for (; 0 !== S; ) {
    h ||
      -1 === e.firstTabInLine ||
      ((e.position = e.firstTabInLine),
      C(e, "tab characters must not be used in indentation"));
    const E = e.input.charCodeAt(e.position + 1),
      y = e.line;
    if ((63 !== S && 58 !== S) || !m(E)) {
      if (
        ((o = e.line), (i = e.lineStart), (s = e.position), !Y(e, n, 2, !1, !0))
      )
        break;
      if (e.line === y) {
        for (S = e.input.charCodeAt(e.position); g(S); )
          S = e.input.charCodeAt(++e.position);
        if (58 === S)
          (S = e.input.charCodeAt(++e.position)),
            m(S) ||
              C(
                e,
                "a whitespace character is expected after the key-value separator within a block mapping",
              ),
            h && (U(e, u, l, d, p, null, o, i, s), (d = p = f = null)),
            (_ = !0),
            (h = !1),
            (r = !1),
            (d = e.tag),
            (p = e.result);
        else {
          if (!_) return (e.tag = a), (e.anchor = c), !0;
          C(e, "can not read an implicit mapping pair; a colon is missed");
        }
      } else {
        if (!_) return (e.tag = a), (e.anchor = c), !0;
        C(
          e,
          "can not read a block mapping entry; a multiline key may not be an implicit key",
        );
      }
    } else
      63 === S
        ? (h && (U(e, u, l, d, p, null, o, i, s), (d = p = f = null)),
          (_ = !0),
          (h = !0),
          (r = !0))
        : h
          ? ((h = !1), (r = !0))
          : C(
              e,
              "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line",
            ),
        (e.position += 1),
        (S = E);
    if (
      ((e.line === y || e.lineIndent > t) &&
        (h && ((o = e.line), (i = e.lineStart), (s = e.position)),
        Y(e, t, 4, !0, r) && (h ? (p = e.result) : (f = e.result)),
        h || (U(e, u, l, d, p, f, o, i, s), (d = p = f = null)),
        G(e, !0, -1),
        (S = e.input.charCodeAt(e.position))),
      (e.line === y || e.lineIndent > t) && 0 !== S)
    )
      C(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t) break;
  }
  return (
    h && U(e, u, l, d, p, null, o, i, s),
    _ && ((e.tag = a), (e.anchor = c), (e.kind = "mapping"), (e.result = u)),
    _
  );
}
function V(e) {
  let t,
    n,
    r = !1,
    o = !1,
    i = e.input.charCodeAt(e.position);
  if (33 !== i) return !1;
  null !== e.tag && C(e, "duplication of a tag property"),
    (i = e.input.charCodeAt(++e.position)),
    60 === i
      ? ((r = !0), (i = e.input.charCodeAt(++e.position)))
      : 33 === i
        ? ((o = !0), (t = "!!"), (i = e.input.charCodeAt(++e.position)))
        : (t = "!");
  let s = e.position;
  if (r) {
    do {
      i = e.input.charCodeAt(++e.position);
    } while (0 !== i && 62 !== i);
    e.position < e.length
      ? ((n = e.input.slice(s, e.position)),
        (i = e.input.charCodeAt(++e.position)))
      : C(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; 0 !== i && !m(i); )
      33 === i &&
        (o
          ? C(e, "tag suffix cannot contain exclamation marks")
          : ((t = e.input.slice(s - 1, e.position + 1)),
            d.test(t) ||
              C(e, "named tag handle cannot contain such characters"),
            (o = !0),
            (s = e.position + 1))),
        (i = e.input.charCodeAt(++e.position));
    (n = e.input.slice(s, e.position)),
      l.test(n) && C(e, "tag suffix cannot contain flow indicator characters");
  }
  n && !p.test(n) && C(e, "tag name cannot contain such characters: " + n);
  try {
    n = decodeURIComponent(n);
  } catch (t) {
    C(e, "tag name is malformed: " + n);
  }
  return (
    r
      ? (e.tag = n)
      : a.call(e.tagMap, t)
        ? (e.tag = e.tagMap[t] + n)
        : "!" === t
          ? (e.tag = "!" + n)
          : "!!" === t
            ? (e.tag = "tag:yaml.org,2002:" + n)
            : C(e, 'undeclared tag handle "' + t + '"'),
    !0
  );
}
function $(e) {
  let t = e.input.charCodeAt(e.position);
  if (38 !== t) return !1;
  null !== e.anchor && C(e, "duplication of an anchor property"),
    (t = e.input.charCodeAt(++e.position));
  const n = e.position;
  for (; 0 !== t && !m(t) && !_(t); ) t = e.input.charCodeAt(++e.position);
  return (
    e.position === n &&
      C(e, "name of an anchor node must contain at least one character"),
    (e.anchor = e.input.slice(n, e.position)),
    !0
  );
}
function Y(e, t, n, o, i) {
  let s,
    c,
    u,
    l,
    d,
    p = 1,
    f = !1,
    T = !1,
    I = null;
  e.depth >= e.maxDepth &&
    C(e, "nesting exceeded maxDepth (" + e.maxDepth + ")"),
    (e.depth += 1),
    null !== e.listener && e.listener("open", e),
    (e.tag = null),
    (e.anchor = null),
    (e.kind = null),
    (e.result = null);
  const N = (s = c = 4 === n || 3 === n);
  if (
    (o &&
      G(e, !0, -1) &&
      ((f = !0),
      e.lineIndent > t
        ? (p = 1)
        : e.lineIndent === t
          ? (p = 0)
          : e.lineIndent < t && (p = -1)),
    1 === p)
  )
    for (;;) {
      const n = e.input.charCodeAt(e.position),
        r = k(e);
      if (
        f &&
        ((33 === n && null !== e.tag) || (38 === n && null !== e.anchor))
      )
        break;
      if (!V(e) && !$(e)) break;
      null === I && (I = r),
        G(e, !0, -1)
          ? ((f = !0),
            (c = N),
            e.lineIndent > t
              ? (p = 1)
              : e.lineIndent === t
                ? (p = 0)
                : e.lineIndent < t && (p = -1))
          : (c = !1);
    }
  if ((c && (c = f || i), 1 === p || 4 === n))
    if (
      ((l = 1 === n || 2 === n ? t : t + 1),
      (d = e.position - e.lineStart),
      1 === p)
    )
      if (
        (c && (H(e, d) || W(e, d, l))) ||
        (function (e, t) {
          let n,
            r,
            o,
            i = !0;
          const s = e.tag;
          let a;
          const c = e.anchor;
          let u, l, d, p;
          const f = Object.create(null);
          let h,
            g,
            _,
            S = e.input.charCodeAt(e.position);
          if (91 === S) (u = 93), (p = !1), (a = []);
          else {
            if (123 !== S) return !1;
            (u = 125), (p = !0), (a = {});
          }
          for (
            null !== e.anchor && w(e, e.anchor, a),
              S = e.input.charCodeAt(++e.position);
            0 !== S;

          ) {
            if ((G(e, !0, t), (S = e.input.charCodeAt(e.position)), S === u))
              return (
                e.position++,
                (e.tag = s),
                (e.anchor = c),
                (e.kind = p ? "mapping" : "sequence"),
                (e.result = a),
                !0
              );
            i
              ? 44 === S && C(e, "expected the node content, but found ','")
              : C(e, "missed comma between flow collection entries"),
              (g = h = _ = null),
              (l = d = !1),
              63 === S &&
                m(e.input.charCodeAt(e.position + 1)) &&
                ((l = d = !0), e.position++, G(e, !0, t)),
              (n = e.line),
              (r = e.lineStart),
              (o = e.position),
              Y(e, t, 1, !1, !0),
              (g = e.tag),
              (h = e.result),
              G(e, !0, t),
              (S = e.input.charCodeAt(e.position)),
              (!d && e.line !== n) ||
                58 !== S ||
                ((l = !0),
                (S = e.input.charCodeAt(++e.position)),
                G(e, !0, t),
                Y(e, t, 1, !1, !0),
                (_ = e.result)),
              p
                ? U(e, a, f, g, h, _, n, r, o)
                : l
                  ? a.push(U(e, null, f, g, h, _, n, r, o))
                  : a.push(h),
              G(e, !0, t),
              (S = e.input.charCodeAt(e.position)),
              44 === S
                ? ((i = !0), (S = e.input.charCodeAt(++e.position)))
                : (i = !1);
          }
          C(e, "unexpected end of the stream within a flow collection");
        })(e, l)
      )
        T = !0;
      else {
        const t = e.input.charCodeAt(e.position);
        (null !== I &&
          N &&
          !c &&
          124 !== t &&
          62 !== t &&
          (function (e, t, n, r) {
            const o = k(e);
            return (
              (function (e) {
                e.anchorMapTransactions.push(Object.create(null));
              })(e),
              P(e, t),
              (e.tag = null),
              (e.anchor = null),
              (e.kind = null),
              (e.result = null),
              W(e, n, r) && "mapping" === e.kind
                ? ((function (e) {
                    const t = e.anchorMapTransactions.pop(),
                      n = e.anchorMapTransactions;
                    if (0 === n.length) return;
                    const r = n[n.length - 1],
                      o = Object.keys(t);
                    for (let e = 0, n = o.length; e < n; e += 1) {
                      const n = o[e];
                      a.call(r, n) || (r[n] = t[n]);
                    }
                  })(e),
                  !0)
                : ((function (e) {
                    const t = e.anchorMapTransactions.pop(),
                      n = Object.keys(t);
                    for (let r = n.length - 1; r >= 0; r -= 1) {
                      const o = t[n[r]];
                      o.existed
                        ? (e.anchorMap[n[r]] = o.value)
                        : delete e.anchorMap[n[r]];
                    }
                  })(e),
                  P(e, o),
                  !1)
            );
          })(e, I, I.position - I.lineStart, l)) ||
        (s &&
          (function (e, t) {
            let n,
              o,
              i = 1,
              s = !1,
              a = !1,
              c = t,
              u = 0,
              l = !1,
              d = e.input.charCodeAt(e.position);
            if (124 === d) n = !1;
            else {
              if (62 !== d) return !1;
              n = !0;
            }
            for (e.kind = "scalar", e.result = ""; 0 !== d; )
              if (
                ((d = e.input.charCodeAt(++e.position)), 43 === d || 45 === d)
              )
                1 === i
                  ? (i = 43 === d ? 3 : 2)
                  : C(e, "repeat of a chomping mode identifier");
              else {
                if (!((o = y(d)) >= 0)) break;
                0 === o
                  ? C(
                      e,
                      "bad explicit indentation width of a block scalar; it cannot be less than one",
                    )
                  : a
                    ? C(e, "repeat of an indentation width identifier")
                    : ((c = t + o - 1), (a = !0));
              }
            if (g(d)) {
              do {
                d = e.input.charCodeAt(++e.position);
              } while (g(d));
              if (35 === d)
                do {
                  d = e.input.charCodeAt(++e.position);
                } while (!h(d) && 0 !== d);
            }
            for (; 0 !== d; ) {
              for (
                B(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position);
                (!a || e.lineIndent < c) && 32 === d;

              )
                e.lineIndent++, (d = e.input.charCodeAt(++e.position));
              if ((!a && e.lineIndent > c && (c = e.lineIndent), h(d))) {
                u++;
                continue;
              }
              if (
                (a || 0 !== c || C(e, "missing indentation for block scalar"),
                e.lineIndent < c)
              ) {
                3 === i
                  ? (e.result += r.repeat("\n", s ? 1 + u : u))
                  : 1 === i && s && (e.result += "\n");
                break;
              }
              n
                ? g(d)
                  ? ((l = !0), (e.result += r.repeat("\n", s ? 1 + u : u)))
                  : l
                    ? ((l = !1), (e.result += r.repeat("\n", u + 1)))
                    : 0 === u
                      ? s && (e.result += " ")
                      : (e.result += r.repeat("\n", u))
                : (e.result += r.repeat("\n", s ? 1 + u : u)),
                (s = !0),
                (a = !0),
                (u = 0);
              const t = e.position;
              for (; !h(d) && 0 !== d; ) d = e.input.charCodeAt(++e.position);
              x(e, t, e.position, !1);
            }
            return !0;
          })(e, l)) ||
        (function (e, t) {
          let n,
            r,
            o = e.input.charCodeAt(e.position);
          if (39 !== o) return !1;
          for (
            e.kind = "scalar", e.result = "", e.position++, n = r = e.position;
            0 !== (o = e.input.charCodeAt(e.position));

          )
            if (39 === o) {
              if (
                (x(e, n, e.position, !0),
                (o = e.input.charCodeAt(++e.position)),
                39 !== o)
              )
                return !0;
              (n = e.position), e.position++, (r = e.position);
            } else
              h(o)
                ? (x(e, n, r, !0), j(e, G(e, !1, t)), (n = r = e.position))
                : e.position === e.lineStart && F(e)
                  ? C(
                      e,
                      "unexpected end of the document within a single quoted scalar",
                    )
                  : (e.position++, g(o) || (r = e.position));
          C(e, "unexpected end of the stream within a single quoted scalar");
        })(e, l) ||
        (function (e, t) {
          let n,
            r,
            o,
            i = e.input.charCodeAt(e.position);
          if (34 !== i) return !1;
          for (
            e.kind = "scalar", e.result = "", e.position++, n = r = e.position;
            0 !== (i = e.input.charCodeAt(e.position));

          ) {
            if (34 === i) return x(e, n, e.position, !0), e.position++, !0;
            if (92 === i) {
              if (
                (x(e, n, e.position, !0),
                (i = e.input.charCodeAt(++e.position)),
                h(i))
              )
                G(e, !1, t);
              else if (i < 256 && v[i]) (e.result += A[i]), e.position++;
              else if ((o = E(i)) > 0) {
                let t = o,
                  n = 0;
                for (; t > 0; t--)
                  (i = e.input.charCodeAt(++e.position)),
                    (o = S(i)) >= 0
                      ? (n = (n << 4) + o)
                      : C(e, "expected hexadecimal character");
                (e.result += b(n)), e.position++;
              } else C(e, "unknown escape sequence");
              n = r = e.position;
            } else
              h(i)
                ? (x(e, n, r, !0), j(e, G(e, !1, t)), (n = r = e.position))
                : e.position === e.lineStart && F(e)
                  ? C(
                      e,
                      "unexpected end of the document within a double quoted scalar",
                    )
                  : (e.position++, g(i) || (r = e.position));
          }
          C(e, "unexpected end of the stream within a double quoted scalar");
        })(e, l)
          ? (T = !0)
          : (function (e) {
                let t = e.input.charCodeAt(e.position);
                if (42 !== t) return !1;
                t = e.input.charCodeAt(++e.position);
                const n = e.position;
                for (; 0 !== t && !m(t) && !_(t); )
                  t = e.input.charCodeAt(++e.position);
                e.position === n &&
                  C(
                    e,
                    "name of an alias node must contain at least one character",
                  );
                const r = e.input.slice(n, e.position);
                return (
                  a.call(e.anchorMap, r) ||
                    C(e, 'unidentified alias "' + r + '"'),
                  (e.result = e.anchorMap[r]),
                  G(e, !0, -1),
                  !0
                );
              })(e)
            ? ((T = !0),
              (null === e.tag && null === e.anchor) ||
                C(e, "alias node should not have any properties"))
            : (function (e, t, n) {
                let r, o, i, s, a, c;
                const u = e.kind,
                  l = e.result;
                let d = e.input.charCodeAt(e.position);
                if (
                  m(d) ||
                  _(d) ||
                  35 === d ||
                  38 === d ||
                  42 === d ||
                  33 === d ||
                  124 === d ||
                  62 === d ||
                  39 === d ||
                  34 === d ||
                  37 === d ||
                  64 === d ||
                  96 === d
                )
                  return !1;
                if (63 === d || 45 === d) {
                  const t = e.input.charCodeAt(e.position + 1);
                  if (m(t) || (n && _(t))) return !1;
                }
                for (
                  e.kind = "scalar", e.result = "", r = o = e.position, i = !1;
                  0 !== d;

                ) {
                  if (58 === d) {
                    const t = e.input.charCodeAt(e.position + 1);
                    if (m(t) || (n && _(t))) break;
                  } else if (35 === d) {
                    if (m(e.input.charCodeAt(e.position - 1))) break;
                  } else {
                    if ((e.position === e.lineStart && F(e)) || (n && _(d)))
                      break;
                    if (h(d)) {
                      if (
                        ((s = e.line),
                        (a = e.lineStart),
                        (c = e.lineIndent),
                        G(e, !1, -1),
                        e.lineIndent >= t)
                      ) {
                        (i = !0), (d = e.input.charCodeAt(e.position));
                        continue;
                      }
                      (e.position = o),
                        (e.line = s),
                        (e.lineStart = a),
                        (e.lineIndent = c);
                      break;
                    }
                  }
                  i &&
                    (x(e, r, o, !1),
                    j(e, e.line - s),
                    (r = o = e.position),
                    (i = !1)),
                    g(d) || (o = e.position + 1),
                    (d = e.input.charCodeAt(++e.position));
                }
                return (
                  x(e, r, o, !1),
                  !!e.result || ((e.kind = u), (e.result = l), !1)
                );
              })(e, l, 1 === n) && ((T = !0), null === e.tag && (e.tag = "?")),
          null !== e.anchor && w(e, e.anchor, e.result);
      }
    else 0 === p && (T = c && H(e, d));
  if (null === e.tag) null !== e.anchor && w(e, e.anchor, e.result);
  else if ("?" === e.tag) {
    null !== e.result &&
      "scalar" !== e.kind &&
      C(
        e,
        'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
          e.kind +
          '"',
      );
    for (let t = 0, n = e.implicitTypes.length; t < n; t += 1)
      if (((u = e.implicitTypes[t]), u.resolve(e.result))) {
        (e.result = u.construct(e.result)),
          (e.tag = u.tag),
          null !== e.anchor && w(e, e.anchor, e.result);
        break;
      }
  } else if ("!" !== e.tag) {
    if (a.call(e.typeMap[e.kind || "fallback"], e.tag))
      u = e.typeMap[e.kind || "fallback"][e.tag];
    else {
      u = null;
      const t = e.typeMap.multi[e.kind || "fallback"];
      for (let n = 0, r = t.length; n < r; n += 1)
        if (e.tag.slice(0, t[n].tag.length) === t[n].tag) {
          u = t[n];
          break;
        }
    }
    u || C(e, "unknown tag !<" + e.tag + ">"),
      null !== e.result &&
        u.kind !== e.kind &&
        C(
          e,
          "unacceptable node kind for !<" +
            e.tag +
            '> tag; it should be "' +
            u.kind +
            '", not "' +
            e.kind +
            '"',
        ),
      u.resolve(e.result, e.tag)
        ? ((e.result = u.construct(e.result, e.tag)),
          null !== e.anchor && w(e, e.anchor, e.result))
        : C(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return (
    null !== e.listener && e.listener("close", e),
    (e.depth -= 1),
    null !== e.tag || null !== e.anchor || T
  );
}
function q(e) {
  const t = e.position;
  let n,
    r = !1;
  for (
    e.version = null,
      e.checkLineBreaks = e.legacy,
      e.tagMap = Object.create(null),
      e.anchorMap = Object.create(null);
    0 !== (n = e.input.charCodeAt(e.position)) &&
    (G(e, !0, -1),
    (n = e.input.charCodeAt(e.position)),
    !(e.lineIndent > 0 || 37 !== n));

  ) {
    (r = !0), (n = e.input.charCodeAt(++e.position));
    let t = e.position;
    for (; 0 !== n && !m(n); ) n = e.input.charCodeAt(++e.position);
    const o = e.input.slice(t, e.position),
      i = [];
    for (
      o.length < 1 &&
      C(e, "directive name must not be less than one character in length");
      0 !== n;

    ) {
      for (; g(n); ) n = e.input.charCodeAt(++e.position);
      if (35 === n) {
        do {
          n = e.input.charCodeAt(++e.position);
        } while (0 !== n && !h(n));
        break;
      }
      if (h(n)) break;
      for (t = e.position; 0 !== n && !m(n); )
        n = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(t, e.position));
    }
    0 !== n && B(e),
      a.call(L, o)
        ? L[o](e, o, i)
        : O(e, 'unknown document directive "' + o + '"');
  }
  G(e, !0, -1),
    0 === e.lineIndent &&
    45 === e.input.charCodeAt(e.position) &&
    45 === e.input.charCodeAt(e.position + 1) &&
    45 === e.input.charCodeAt(e.position + 2)
      ? ((e.position += 3), G(e, !0, -1))
      : r && C(e, "directives end mark is expected"),
    Y(e, e.lineIndent - 1, 4, !1, !0),
    G(e, !0, -1),
    e.checkLineBreaks &&
      u.test(e.input.slice(t, e.position)) &&
      O(e, "non-ASCII line breaks are interpreted as content"),
    e.documents.push(e.result),
    e.position === e.lineStart && F(e)
      ? 46 === e.input.charCodeAt(e.position) &&
        ((e.position += 3), G(e, !0, -1))
      : e.position < e.length - 1 &&
        C(e, "end of the stream or a document separator is expected");
}
function K(e, t) {
  (t = t || {}),
    0 !== (e = String(e)).length &&
      (10 !== e.charCodeAt(e.length - 1) &&
        13 !== e.charCodeAt(e.length - 1) &&
        (e += "\n"),
      65279 === e.charCodeAt(0) && (e = e.slice(1)));
  const n = new N(e, t),
    r = e.indexOf("\0");
  for (
    -1 !== r && ((n.position = r), C(n, "null byte is not allowed in input")),
      n.input += "\0";
    32 === n.input.charCodeAt(n.position);

  )
    (n.lineIndent += 1), (n.position += 1);
  for (; n.position < n.length - 1; ) q(n);
  return n.documents;
}
(e.exports.loadAll = function (e, t, n) {
  null !== t && "object" == typeof t && void 0 === n && ((n = t), (t = null));
  const r = K(e, n);
  if ("function" != typeof t) return r;
  for (let e = 0, n = r.length; e < n; e += 1) t(r[e]);
}),
  (e.exports.load = function (e, t) {
    const n = K(e, t);
    if (0 !== n.length) {
      if (1 === n.length) return n[0];
      throw new o("expected a single document in the stream, but found more");
    }
  });
