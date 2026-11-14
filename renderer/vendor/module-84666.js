// vendor/module-84666.js — webpack module 84666
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { H: () => Et, r: () => Lt });
var i = r(79456 /* vendor/module-79456 */);
function o(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
(0, i.K)(o, "getDefaultExportFromCjs");
var n,
  a,
  s,
  l,
  h,
  c,
  d,
  u,
  p,
  g,
  f,
  y,
  m,
  x,
  C,
  b,
  k,
  w,
  S,
  T,
  B,
  v,
  _,
  A,
  F,
  L,
  M,
  $,
  E,
  O,
  D,
  I,
  K,
  q,
  P,
  R,
  z,
  N,
  W,
  j,
  H,
  U,
  Y,
  G,
  X = {},
  V = {},
  Z = {};
function Q() {
  if (n) return Z;
  function t(t) {
    return null == t;
  }
  function e(t) {
    return "object" == typeof t && null !== t;
  }
  function r(e) {
    return Array.isArray(e) ? e : t(e) ? [] : [e];
  }
  function o(t, e) {
    if (e) {
      const r = Object.keys(e);
      for (let i = 0, o = r.length; i < o; i += 1) {
        const o = r[i];
        t[o] = e[o];
      }
    }
    return t;
  }
  function a(t, e) {
    let r = "";
    for (let i = 0; i < e; i += 1) r += t;
    return r;
  }
  function s(t) {
    return 0 === t && Number.NEGATIVE_INFINITY === 1 / t;
  }
  return (
    (n = 1),
    (0, i.K)(t, "isNothing"),
    (0, i.K)(e, "isObject"),
    (0, i.K)(r, "toArray"),
    (0, i.K)(o, "extend"),
    (0, i.K)(a, "repeat"),
    (0, i.K)(s, "isNegativeZero"),
    (Z.isNothing = t),
    (Z.isObject = e),
    (Z.toArray = r),
    (Z.repeat = a),
    (Z.isNegativeZero = s),
    (Z.extend = o),
    Z
  );
}
function J() {
  if (s) return a;
  function t(t, e) {
    let r = "";
    const i = t.reason || "(unknown reason)";
    return t.mark
      ? (t.mark.name && (r += 'in "' + t.mark.name + '" '),
        (r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")"),
        !e && t.mark.snippet && (r += "\n\n" + t.mark.snippet),
        i + " " + r)
      : i;
  }
  function e(e, r) {
    Error.call(this),
      (this.name = "YAMLException"),
      (this.reason = e),
      (this.mark = r),
      (this.message = t(this, !1)),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack || "");
  }
  return (
    (s = 1),
    (0, i.K)(t, "formatError"),
    (0, i.K)(e, "YAMLException2"),
    (e.prototype = Object.create(Error.prototype)),
    (e.prototype.constructor = e),
    (e.prototype.toString = (0, i.K)(function (e) {
      return this.name + ": " + t(this, e);
    }, "toString")),
    (a = e)
  );
}
function tt() {
  if (h) return l;
  h = 1;
  const t = Q();
  function e(t, e, r, i, o) {
    let n = "",
      a = "";
    const s = Math.floor(o / 2) - 1;
    return (
      i - e > s && ((n = " ... "), (e = i - s + n.length)),
      r - i > s && ((a = " ..."), (r = i + s - a.length)),
      {
        str: n + t.slice(e, r).replace(/\t/g, "→") + a,
        pos: i - e + n.length,
      }
    );
  }
  function r(e, r) {
    return t.repeat(" ", r - e.length) + e;
  }
  function o(i, o) {
    if (((o = Object.create(o || null)), !i.buffer)) return null;
    o.maxLength || (o.maxLength = 79),
      "number" != typeof o.indent && (o.indent = 1),
      "number" != typeof o.linesBefore && (o.linesBefore = 3),
      "number" != typeof o.linesAfter && (o.linesAfter = 2);
    const n = /\r?\n|\r|\0/g,
      a = [0],
      s = [];
    let l,
      h = -1;
    for (; (l = n.exec(i.buffer)); )
      s.push(l.index),
        a.push(l.index + l[0].length),
        i.position <= l.index && h < 0 && (h = a.length - 2);
    h < 0 && (h = a.length - 1);
    let c = "";
    const d = Math.min(i.line + o.linesAfter, s.length).toString().length,
      u = o.maxLength - (o.indent + d + 3);
    for (let n = 1; n <= o.linesBefore && !(h - n < 0); n++) {
      const l = e(
        i.buffer,
        a[h - n],
        s[h - n],
        i.position - (a[h] - a[h - n]),
        u,
      );
      c =
        t.repeat(" ", o.indent) +
        r((i.line - n + 1).toString(), d) +
        " | " +
        l.str +
        "\n" +
        c;
    }
    const p = e(i.buffer, a[h], s[h], i.position, u);
    (c +=
      t.repeat(" ", o.indent) +
      r((i.line + 1).toString(), d) +
      " | " +
      p.str +
      "\n"),
      (c += t.repeat("-", o.indent + d + 3 + p.pos) + "^\n");
    for (let n = 1; n <= o.linesAfter && !(h + n >= s.length); n++) {
      const l = e(
        i.buffer,
        a[h + n],
        s[h + n],
        i.position - (a[h] - a[h + n]),
        u,
      );
      c +=
        t.repeat(" ", o.indent) +
        r((i.line + n + 1).toString(), d) +
        " | " +
        l.str +
        "\n";
    }
    return c.replace(/\n$/, "");
  }
  return (
    (0, i.K)(e, "getLine"),
    (0, i.K)(r, "padStart"),
    (0, i.K)(o, "makeSnippet"),
    (l = o)
  );
}
function et() {
  if (d) return c;
  d = 1;
  const t = J(),
    e = [
      "kind",
      "multi",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "representName",
      "defaultStyle",
      "styleAliases",
    ],
    r = ["scalar", "sequence", "mapping"];
  function o(t) {
    const e = {};
    return (
      null !== t &&
        Object.keys(t).forEach(function (r) {
          t[r].forEach(function (t) {
            e[String(t)] = r;
          });
        }),
      e
    );
  }
  function n(i, n) {
    if (
      ((n = n || {}),
      Object.keys(n).forEach(function (r) {
        if (-1 === e.indexOf(r))
          throw new t(
            'Unknown option "' +
              r +
              '" is met in definition of "' +
              i +
              '" YAML type.',
          );
      }),
      (this.options = n),
      (this.tag = i),
      (this.kind = n.kind || null),
      (this.resolve =
        n.resolve ||
        function () {
          return !0;
        }),
      (this.construct =
        n.construct ||
        function (t) {
          return t;
        }),
      (this.instanceOf = n.instanceOf || null),
      (this.predicate = n.predicate || null),
      (this.represent = n.represent || null),
      (this.representName = n.representName || null),
      (this.defaultStyle = n.defaultStyle || null),
      (this.multi = n.multi || !1),
      (this.styleAliases = o(n.styleAliases || null)),
      -1 === r.indexOf(this.kind))
    )
      throw new t(
        'Unknown kind "' +
          this.kind +
          '" is specified for "' +
          i +
          '" YAML type.',
      );
  }
  return (0, i.K)(o, "compileStyleAliases"), (0, i.K)(n, "Type2"), (c = n);
}
function rt() {
  if (p) return u;
  p = 1;
  const t = J(),
    e = et();
  function r(t, e) {
    const r = [];
    return (
      t[e].forEach(function (t) {
        let e = r.length;
        r.forEach(function (r, i) {
          r.tag === t.tag &&
            r.kind === t.kind &&
            r.multi === t.multi &&
            (e = i);
        }),
          (r[e] = t);
      }),
      r
    );
  }
  function o() {
    const t = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: { scalar: [], sequence: [], mapping: [], fallback: [] },
    };
    function e(e) {
      e.multi
        ? (t.multi[e.kind].push(e), t.multi.fallback.push(e))
        : (t[e.kind][e.tag] = t.fallback[e.tag] = e);
    }
    (0, i.K)(e, "collectType");
    for (let t = 0, r = arguments.length; t < r; t += 1)
      arguments[t].forEach(e);
    return t;
  }
  function n(t) {
    return this.extend(t);
  }
  return (
    (0, i.K)(r, "compileList"),
    (0, i.K)(o, "compileMap"),
    (0, i.K)(n, "Schema2"),
    (n.prototype.extend = (0, i.K)(function (i) {
      let a = [],
        s = [];
      if (i instanceof e) s.push(i);
      else if (Array.isArray(i)) s = s.concat(i);
      else {
        if (!i || (!Array.isArray(i.implicit) && !Array.isArray(i.explicit)))
          throw new t(
            "Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })",
          );
        i.implicit && (a = a.concat(i.implicit)),
          i.explicit && (s = s.concat(i.explicit));
      }
      a.forEach(function (r) {
        if (!(r instanceof e))
          throw new t(
            "Specified list of YAML types (or a single Type object) contains a non-Type object.",
          );
        if (r.loadKind && "scalar" !== r.loadKind)
          throw new t(
            "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.",
          );
        if (r.multi)
          throw new t(
            "There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.",
          );
      }),
        s.forEach(function (r) {
          if (!(r instanceof e))
            throw new t(
              "Specified list of YAML types (or a single Type object) contains a non-Type object.",
            );
        });
      const l = Object.create(n.prototype);
      return (
        (l.implicit = (this.implicit || []).concat(a)),
        (l.explicit = (this.explicit || []).concat(s)),
        (l.compiledImplicit = r(l, "implicit")),
        (l.compiledExplicit = r(l, "explicit")),
        (l.compiledTypeMap = o(l.compiledImplicit, l.compiledExplicit)),
        l
      );
    }, "extend")),
    (u = n)
  );
}
function it() {
  if (f) return g;
  f = 1;
  const t = et();
  return (g = new t("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: (0, i.K)(function (t) {
      return null !== t ? t : "";
    }, "construct"),
  }));
}
function ot() {
  if (m) return y;
  m = 1;
  const t = et();
  return (y = new t("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: (0, i.K)(function (t) {
      return null !== t ? t : [];
    }, "construct"),
  }));
}
function nt() {
  if (C) return x;
  C = 1;
  const t = et();
  return (x = new t("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: (0, i.K)(function (t) {
      return null !== t ? t : {};
    }, "construct"),
  }));
}
function at() {
  if (k) return b;
  k = 1;
  const t = rt();
  return (b = new t({ explicit: [it(), ot(), nt()] }));
}
function st() {
  if (S) return w;
  S = 1;
  const t = et();
  function e(t) {
    if (null === t) return !0;
    const e = t.length;
    return (
      (1 === e && "~" === t) ||
      (4 === e && ("null" === t || "Null" === t || "NULL" === t))
    );
  }
  function r() {
    return null;
  }
  function o(t) {
    return null === t;
  }
  return (
    (0, i.K)(e, "resolveYamlNull"),
    (0, i.K)(r, "constructYamlNull"),
    (0, i.K)(o, "isNull"),
    (w = new t("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: e,
      construct: r,
      predicate: o,
      represent: {
        canonical: (0, i.K)(function () {
          return "~";
        }, "canonical"),
        lowercase: (0, i.K)(function () {
          return "null";
        }, "lowercase"),
        uppercase: (0, i.K)(function () {
          return "NULL";
        }, "uppercase"),
        camelcase: (0, i.K)(function () {
          return "Null";
        }, "camelcase"),
        empty: (0, i.K)(function () {
          return "";
        }, "empty"),
      },
      defaultStyle: "lowercase",
    }))
  );
}
function lt() {
  if (B) return T;
  B = 1;
  const t = et();
  function e(t) {
    if (null === t) return !1;
    const e = t.length;
    return (
      (4 === e && ("true" === t || "True" === t || "TRUE" === t)) ||
      (5 === e && ("false" === t || "False" === t || "FALSE" === t))
    );
  }
  function r(t) {
    return "true" === t || "True" === t || "TRUE" === t;
  }
  function o(t) {
    return "[object Boolean]" === Object.prototype.toString.call(t);
  }
  return (
    (0, i.K)(e, "resolveYamlBoolean"),
    (0, i.K)(r, "constructYamlBoolean"),
    (0, i.K)(o, "isBoolean"),
    (T = new t("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: e,
      construct: r,
      predicate: o,
      represent: {
        lowercase: (0, i.K)(function (t) {
          return t ? "true" : "false";
        }, "lowercase"),
        uppercase: (0, i.K)(function (t) {
          return t ? "TRUE" : "FALSE";
        }, "uppercase"),
        camelcase: (0, i.K)(function (t) {
          return t ? "True" : "False";
        }, "camelcase"),
      },
      defaultStyle: "lowercase",
    }))
  );
}
function ht() {
  if (_) return v;
  _ = 1;
  const t = Q(),
    e = et();
  function r(t) {
    return (
      (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
    );
  }
  function o(t) {
    return t >= 48 && t <= 55;
  }
  function n(t) {
    return t >= 48 && t <= 57;
  }
  function a(t) {
    if (null === t) return !1;
    const e = t.length;
    let i = 0,
      a = !1;
    if (!e) return !1;
    let l = t[i];
    if ((("-" !== l && "+" !== l) || (l = t[++i]), "0" === l)) {
      if (i + 1 === e) return !0;
      if (((l = t[++i]), "b" === l)) {
        for (i++; i < e; i++) {
          if (((l = t[i]), "0" !== l && "1" !== l)) return !1;
          a = !0;
        }
        return a && isFinite(s(t));
      }
      if ("x" === l) {
        for (i++; i < e; i++) {
          if (!r(t.charCodeAt(i))) return !1;
          a = !0;
        }
        return a && isFinite(s(t));
      }
      if ("o" === l) {
        for (i++; i < e; i++) {
          if (!o(t.charCodeAt(i))) return !1;
          a = !0;
        }
        return a && isFinite(s(t));
      }
    }
    for (; i < e; i++) {
      if (!n(t.charCodeAt(i))) return !1;
      a = !0;
    }
    return !!a && isFinite(s(t));
  }
  function s(t) {
    let e = t,
      r = 1,
      i = e[0];
    if (
      (("-" !== i && "+" !== i) ||
        ("-" === i && (r = -1), (e = e.slice(1)), (i = e[0])),
      "0" === e)
    )
      return 0;
    if ("0" === i) {
      if ("b" === e[1]) return r * parseInt(e.slice(2), 2);
      if ("x" === e[1]) return r * parseInt(e.slice(2), 16);
      if ("o" === e[1]) return r * parseInt(e.slice(2), 8);
    }
    return r * parseInt(e, 10);
  }
  function l(t) {
    return s(t);
  }
  function h(e) {
    return (
      "[object Number]" === Object.prototype.toString.call(e) &&
      e % 1 == 0 &&
      !t.isNegativeZero(e)
    );
  }
  return (
    (0, i.K)(r, "isHexCode"),
    (0, i.K)(o, "isOctCode"),
    (0, i.K)(n, "isDecCode"),
    (0, i.K)(a, "resolveYamlInteger"),
    (0, i.K)(s, "parseYamlInteger"),
    (0, i.K)(l, "constructYamlInteger"),
    (0, i.K)(h, "isInteger"),
    (v = new e("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: a,
      construct: l,
      predicate: h,
      represent: {
        binary: (0, i.K)(function (t) {
          return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
        }, "binary"),
        octal: (0, i.K)(function (t) {
          return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
        }, "octal"),
        decimal: (0, i.K)(function (t) {
          return t.toString(10);
        }, "decimal"),
        hexadecimal: (0, i.K)(function (t) {
          return t >= 0
            ? "0x" + t.toString(16).toUpperCase()
            : "-0x" + t.toString(16).toUpperCase().slice(1);
        }, "hexadecimal"),
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"],
      },
    }))
  );
}
function ct() {
  if (F) return A;
  F = 1;
  const t = Q(),
    e = et(),
    r = new RegExp(
      "^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$",
    ),
    o = new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function n(t) {
    return (
      null !== t && !!r.test(t) && (!!isFinite(parseFloat(t, 10)) || o.test(t))
    );
  }
  function a(t) {
    let e = t.toLowerCase();
    const r = "-" === e[0] ? -1 : 1;
    return (
      "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)),
      ".inf" === e
        ? 1 === r
          ? Number.POSITIVE_INFINITY
          : Number.NEGATIVE_INFINITY
        : ".nan" === e
          ? NaN
          : r * parseFloat(e, 10)
    );
  }
  (0, i.K)(n, "resolveYamlFloat"), (0, i.K)(a, "constructYamlFloat");
  const s = /^[-+]?[0-9]+e/;
  function l(e, r) {
    if (isNaN(e))
      switch (r) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === e)
      switch (r) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === e)
      switch (r) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (t.isNegativeZero(e)) return "-0.0";
    const i = e.toString(10);
    return s.test(i) ? i.replace("e", ".e") : i;
  }
  function h(e) {
    return (
      "[object Number]" === Object.prototype.toString.call(e) &&
      (e % 1 != 0 || t.isNegativeZero(e))
    );
  }
  return (
    (0, i.K)(l, "representYamlFloat"),
    (0, i.K)(h, "isFloat"),
    (A = new e("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: n,
      construct: a,
      predicate: h,
      represent: l,
      defaultStyle: "lowercase",
    }))
  );
}
function dt() {
  return M
    ? L
    : ((M = 1), (L = at().extend({ implicit: [st(), lt(), ht(), ct()] })));
}
function ut() {
  return E ? $ : ((E = 1), ($ = dt()));
}
function pt() {
  if (D) return O;
  D = 1;
  const t = et(),
    e = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
    r = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$",
    );
  function o(t) {
    return null !== t && (null !== e.exec(t) || null !== r.exec(t));
  }
  function n(t) {
    let i = 0,
      o = null,
      n = e.exec(t);
    if ((null === n && (n = r.exec(t)), null === n))
      throw new Error("Date resolve error");
    const a = +n[1],
      s = +n[2] - 1,
      l = +n[3];
    if (!n[4]) return new Date(Date.UTC(a, s, l));
    const h = +n[4],
      c = +n[5],
      d = +n[6];
    if (n[7]) {
      for (i = n[7].slice(0, 3); i.length < 3; ) i += "0";
      i = +i;
    }
    n[9] &&
      ((o = 6e4 * (60 * +n[10] + +(n[11] || 0))), "-" === n[9] && (o = -o));
    const u = new Date(Date.UTC(a, s, l, h, c, d, i));
    return o && u.setTime(u.getTime() - o), u;
  }
  function a(t) {
    return t.toISOString();
  }
  return (
    (0, i.K)(o, "resolveYamlTimestamp"),
    (0, i.K)(n, "constructYamlTimestamp"),
    (0, i.K)(a, "representYamlTimestamp"),
    (O = new t("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: o,
      construct: n,
      instanceOf: Date,
      represent: a,
    }))
  );
}
function gt() {
  if (K) return I;
  K = 1;
  const t = et();
  function e(t) {
    return "<<" === t || null === t;
  }
  return (
    (0, i.K)(e, "resolveYamlMerge"),
    (I = new t("tag:yaml.org,2002:merge", { kind: "scalar", resolve: e }))
  );
}
function ft() {
  if (P) return q;
  P = 1;
  const t = et(),
    e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function r(t) {
    if (null === t) return !1;
    let r = 0;
    const i = t.length,
      o = e;
    for (let e = 0; e < i; e++) {
      const i = o.indexOf(t.charAt(e));
      if (!(i > 64)) {
        if (i < 0) return !1;
        r += 6;
      }
    }
    return r % 8 == 0;
  }
  function o(t) {
    const r = t.replace(/[\r\n=]/g, ""),
      i = r.length,
      o = e;
    let n = 0;
    const a = [];
    for (let t = 0; t < i; t++)
      t % 4 == 0 &&
        t &&
        (a.push((n >> 16) & 255), a.push((n >> 8) & 255), a.push(255 & n)),
        (n = (n << 6) | o.indexOf(r.charAt(t)));
    const s = (i % 4) * 6;
    return (
      0 === s
        ? (a.push((n >> 16) & 255), a.push((n >> 8) & 255), a.push(255 & n))
        : 18 === s
          ? (a.push((n >> 10) & 255), a.push((n >> 2) & 255))
          : 12 === s && a.push((n >> 4) & 255),
      new Uint8Array(a)
    );
  }
  function n(t) {
    let r = "",
      i = 0;
    const o = t.length,
      n = e;
    for (let e = 0; e < o; e++)
      e % 3 == 0 &&
        e &&
        ((r += n[(i >> 18) & 63]),
        (r += n[(i >> 12) & 63]),
        (r += n[(i >> 6) & 63]),
        (r += n[63 & i])),
        (i = (i << 8) + t[e]);
    const a = o % 3;
    return (
      0 === a
        ? ((r += n[(i >> 18) & 63]),
          (r += n[(i >> 12) & 63]),
          (r += n[(i >> 6) & 63]),
          (r += n[63 & i]))
        : 2 === a
          ? ((r += n[(i >> 10) & 63]),
            (r += n[(i >> 4) & 63]),
            (r += n[(i << 2) & 63]),
            (r += n[64]))
          : 1 === a &&
            ((r += n[(i >> 2) & 63]),
            (r += n[(i << 4) & 63]),
            (r += n[64]),
            (r += n[64])),
      r
    );
  }
  function a(t) {
    return "[object Uint8Array]" === Object.prototype.toString.call(t);
  }
  return (
    (0, i.K)(r, "resolveYamlBinary"),
    (0, i.K)(o, "constructYamlBinary"),
    (0, i.K)(n, "representYamlBinary"),
    (0, i.K)(a, "isBinary"),
    (q = new t("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: r,
      construct: o,
      predicate: a,
      represent: n,
    }))
  );
}
function yt() {
  if (z) return R;
  z = 1;
  const t = et(),
    e = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString;
  function o(t) {
    if (null === t) return !0;
    const i = [],
      o = t;
    for (let t = 0, n = o.length; t < n; t += 1) {
      const n = o[t];
      let a,
        s = !1;
      if ("[object Object]" !== r.call(n)) return !1;
      for (a in n)
        if (e.call(n, a)) {
          if (s) return !1;
          s = !0;
        }
      if (!s) return !1;
      if (-1 !== i.indexOf(a)) return !1;
      i.push(a);
    }
    return !0;
  }
  function n(t) {
    return null !== t ? t : [];
  }
  return (
    (0, i.K)(o, "resolveYamlOmap"),
    (0, i.K)(n, "constructYamlOmap"),
    (R = new t("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: o,
      construct: n,
    }))
  );
}
function mt() {
  if (W) return N;
  W = 1;
  const t = et(),
    e = Object.prototype.toString;
  function r(t) {
    if (null === t) return !0;
    const r = t,
      i = new Array(r.length);
    for (let t = 0, o = r.length; t < o; t += 1) {
      const o = r[t];
      if ("[object Object]" !== e.call(o)) return !1;
      const n = Object.keys(o);
      if (1 !== n.length) return !1;
      i[t] = [n[0], o[n[0]]];
    }
    return !0;
  }
  function o(t) {
    if (null === t) return [];
    const e = t,
      r = new Array(e.length);
    for (let t = 0, i = e.length; t < i; t += 1) {
      const i = e[t],
        o = Object.keys(i);
      r[t] = [o[0], i[o[0]]];
    }
    return r;
  }
  return (
    (0, i.K)(r, "resolveYamlPairs"),
    (0, i.K)(o, "constructYamlPairs"),
    (N = new t("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: r,
      construct: o,
    }))
  );
}
function xt() {
  if (H) return j;
  H = 1;
  const t = et(),
    e = Object.prototype.hasOwnProperty;
  function r(t) {
    if (null === t) return !0;
    const r = t;
    for (const t in r) if (e.call(r, t) && null !== r[t]) return !1;
    return !0;
  }
  function o(t) {
    return null !== t ? t : {};
  }
  return (
    (0, i.K)(r, "resolveYamlSet"),
    (0, i.K)(o, "constructYamlSet"),
    (j = new t("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: r,
      construct: o,
    }))
  );
}
function Ct() {
  return Y
    ? U
    : ((Y = 1),
      (U = ut().extend({
        implicit: [pt(), gt()],
        explicit: [ft(), yt(), mt(), xt()],
      })));
}
function bt() {
  if (G) return V;
  G = 1;
  const t = Q(),
    e = J(),
    r = tt(),
    o = Ct(),
    n = Object.prototype.hasOwnProperty,
    a =
      /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    s = /[\x85\u2028\u2029]/,
    l = /[,\[\]{}]/,
    h = /^(?:!|!!|![0-9A-Za-z-]+!)$/,
    c =
      /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
  function d(t) {
    return Object.prototype.toString.call(t);
  }
  function u(t) {
    return 10 === t || 13 === t;
  }
  function p(t) {
    return 9 === t || 32 === t;
  }
  function g(t) {
    return 9 === t || 32 === t || 10 === t || 13 === t;
  }
  function f(t) {
    return 44 === t || 91 === t || 93 === t || 123 === t || 125 === t;
  }
  function y(t) {
    if (t >= 48 && t <= 57) return t - 48;
    const e = 32 | t;
    return e >= 97 && e <= 102 ? e - 97 + 10 : -1;
  }
  function m(t) {
    return 120 === t ? 2 : 117 === t ? 4 : 85 === t ? 8 : 0;
  }
  function x(t) {
    return t >= 48 && t <= 57 ? t - 48 : -1;
  }
  function C(t) {
    switch (t) {
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
  function b(t) {
    return t <= 65535
      ? String.fromCharCode(t)
      : String.fromCharCode(
          55296 + ((t - 65536) >> 10),
          56320 + ((t - 65536) & 1023),
        );
  }
  function k(t, e, r) {
    "__proto__" === e
      ? Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: r,
        })
      : (t[e] = r);
  }
  (0, i.K)(d, "_class"),
    (0, i.K)(u, "isEol"),
    (0, i.K)(p, "isWhiteSpace"),
    (0, i.K)(g, "isWsOrEol"),
    (0, i.K)(f, "isFlowIndicator"),
    (0, i.K)(y, "fromHexCode"),
    (0, i.K)(m, "escapedHexLen"),
    (0, i.K)(x, "fromDecimalCode"),
    (0, i.K)(C, "simpleEscapeSequence"),
    (0, i.K)(b, "charFromCodepoint"),
    (0, i.K)(k, "setProperty");
  const w = new Array(256),
    S = new Array(256);
  for (let t = 0; t < 256; t++) (w[t] = C(t) ? 1 : 0), (S[t] = C(t));
  function T(t, e) {
    (this.input = t),
      (this.filename = e.filename || null),
      (this.schema = e.schema || o),
      (this.onWarning = e.onWarning || null),
      (this.legacy = e.legacy || !1),
      (this.json = e.json || !1),
      (this.listener = e.listener || null),
      (this.maxDepth = "number" == typeof e.maxDepth ? e.maxDepth : 100),
      (this.maxTotalMergeKeys =
        "number" == typeof e.maxTotalMergeKeys ? e.maxTotalMergeKeys : 1e4),
      (this.implicitTypes = this.schema.compiledImplicit),
      (this.typeMap = this.schema.compiledTypeMap),
      (this.length = t.length),
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
  function B(t, i) {
    const o = {
      name: t.filename,
      buffer: t.input.slice(0, -1),
      position: t.position,
      line: t.line,
      column: t.position - t.lineStart,
    };
    return (o.snippet = r(o)), new e(i, o);
  }
  function v(t, e) {
    throw B(t, e);
  }
  function _(t, e) {
    t.onWarning && t.onWarning.call(null, B(t, e));
  }
  function A(t, e, r) {
    const i = t.anchorMapTransactions;
    if (0 !== i.length) {
      const r = i[i.length - 1];
      n.call(r, e) ||
        (r[e] = {
          existed: n.call(t.anchorMap, e),
          value: t.anchorMap[e],
        });
    }
    t.anchorMap[e] = r;
  }
  function F(t) {
    t.anchorMapTransactions.push(Object.create(null));
  }
  function L(t) {
    const e = t.anchorMapTransactions.pop(),
      r = t.anchorMapTransactions;
    if (0 === r.length) return;
    const i = r[r.length - 1],
      o = Object.keys(e);
    for (let t = 0, r = o.length; t < r; t += 1) {
      const r = o[t];
      n.call(i, r) || (i[r] = e[r]);
    }
  }
  function M(t) {
    const e = t.anchorMapTransactions.pop(),
      r = Object.keys(e);
    for (let i = r.length - 1; i >= 0; i -= 1) {
      const o = e[r[i]];
      o.existed ? (t.anchorMap[r[i]] = o.value) : delete t.anchorMap[r[i]];
    }
  }
  function $(t) {
    return {
      position: t.position,
      line: t.line,
      lineStart: t.lineStart,
      lineIndent: t.lineIndent,
      firstTabInLine: t.firstTabInLine,
      tag: t.tag,
      anchor: t.anchor,
      kind: t.kind,
      result: t.result,
    };
  }
  function E(t, e) {
    (t.position = e.position),
      (t.line = e.line),
      (t.lineStart = e.lineStart),
      (t.lineIndent = e.lineIndent),
      (t.firstTabInLine = e.firstTabInLine),
      (t.tag = e.tag),
      (t.anchor = e.anchor),
      (t.kind = e.kind),
      (t.result = e.result);
  }
  (0, i.K)(T, "State"),
    (0, i.K)(B, "generateError"),
    (0, i.K)(v, "throwError"),
    (0, i.K)(_, "throwWarning"),
    (0, i.K)(A, "storeAnchor"),
    (0, i.K)(F, "beginAnchorTransaction"),
    (0, i.K)(L, "commitAnchorTransaction"),
    (0, i.K)(M, "rollbackAnchorTransaction"),
    (0, i.K)($, "snapshotState"),
    (0, i.K)(E, "restoreState");
  const O = {
    YAML: (0, i.K)(function (t, e, r) {
      null !== t.version && v(t, "duplication of %YAML directive"),
        1 !== r.length && v(t, "YAML directive accepts exactly one argument");
      const i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]);
      null === i && v(t, "ill-formed argument of the YAML directive");
      const o = parseInt(i[1], 10),
        n = parseInt(i[2], 10);
      1 !== o && v(t, "unacceptable YAML version of the document"),
        (t.version = r[0]),
        (t.checkLineBreaks = n < 2),
        1 !== n && 2 !== n && _(t, "unsupported YAML version of the document");
    }, "handleYamlDirective"),
    TAG: (0, i.K)(function (t, e, r) {
      let i;
      2 !== r.length && v(t, "TAG directive accepts exactly two arguments");
      const o = r[0];
      (i = r[1]),
        h.test(o) ||
          v(t, "ill-formed tag handle (first argument) of the TAG directive"),
        n.call(t.tagMap, o) &&
          v(
            t,
            'there is a previously declared suffix for "' + o + '" tag handle',
          ),
        c.test(i) ||
          v(t, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        i = decodeURIComponent(i);
      } catch (e) {
        v(t, "tag prefix is malformed: " + i);
      }
      t.tagMap[o] = i;
    }, "handleTagDirective"),
  };
  function D(t, e, r, i) {
    if (e < r) {
      const o = t.input.slice(e, r);
      if (i)
        for (let e = 0, r = o.length; e < r; e += 1) {
          const r = o.charCodeAt(e);
          9 === r ||
            (r >= 32 && r <= 1114111) ||
            v(t, "expected valid JSON character");
        }
      else a.test(o) && v(t, "the stream contains non-printable characters");
      t.result += o;
    }
  }
  function I(e, r, i, o) {
    t.isObject(i) ||
      v(e, "cannot merge mappings; the provided source object is unacceptable");
    const a = Object.keys(i);
    for (let t = 0, s = a.length; t < s; t += 1) {
      const s = a[t];
      -1 !== e.maxTotalMergeKeys &&
        ++e.totalMergeKeys > e.maxTotalMergeKeys &&
        v(
          e,
          "merge keys exceeded maxTotalMergeKeys (" + e.maxTotalMergeKeys + ")",
        ),
        n.call(r, s) || (k(r, s, i[s]), (o[s] = !0));
    }
  }
  function K(t, e, r, i, o, a, s, l, h) {
    if (Array.isArray(o))
      for (
        let e = 0, r = (o = Array.prototype.slice.call(o)).length;
        e < r;
        e += 1
      )
        Array.isArray(o[e]) &&
          v(t, "nested arrays are not supported inside keys"),
          "object" == typeof o &&
            "[object Object]" === d(o[e]) &&
            (o[e] = "[object Object]");
    if (
      ("object" == typeof o &&
        "[object Object]" === d(o) &&
        (o = "[object Object]"),
      (o = String(o)),
      null === e && (e = {}),
      "tag:yaml.org,2002:merge" === i)
    )
      if (Array.isArray(a))
        for (let i = 0, o = a.length; i < o; i += 1) I(t, e, a[i], r);
      else I(t, e, a, r);
    else
      t.json ||
        n.call(r, o) ||
        !n.call(e, o) ||
        ((t.line = s || t.line),
        (t.lineStart = l || t.lineStart),
        (t.position = h || t.position),
        v(t, "duplicated mapping key")),
        k(e, o, a),
        delete r[o];
    return e;
  }
  function q(t) {
    const e = t.input.charCodeAt(t.position);
    10 === e
      ? t.position++
      : 13 === e
        ? (t.position++, 10 === t.input.charCodeAt(t.position) && t.position++)
        : v(t, "a line break is expected"),
      (t.line += 1),
      (t.lineStart = t.position),
      (t.firstTabInLine = -1);
  }
  function P(t, e, r) {
    let i = 0,
      o = t.input.charCodeAt(t.position);
    for (; 0 !== o; ) {
      for (; p(o); )
        9 === o && -1 === t.firstTabInLine && (t.firstTabInLine = t.position),
          (o = t.input.charCodeAt(++t.position));
      if (e && 35 === o)
        do {
          o = t.input.charCodeAt(++t.position);
        } while (10 !== o && 13 !== o && 0 !== o);
      if (!u(o)) break;
      for (
        q(t), o = t.input.charCodeAt(t.position), i++, t.lineIndent = 0;
        32 === o;

      )
        t.lineIndent++, (o = t.input.charCodeAt(++t.position));
    }
    return (
      -1 !== r && 0 !== i && t.lineIndent < r && _(t, "deficient indentation"),
      i
    );
  }
  function R(t) {
    let e = t.position,
      r = t.input.charCodeAt(e);
    return !(
      (45 !== r && 46 !== r) ||
      r !== t.input.charCodeAt(e + 1) ||
      r !== t.input.charCodeAt(e + 2) ||
      ((e += 3), (r = t.input.charCodeAt(e)), 0 !== r && !g(r))
    );
  }
  function z(e, r) {
    1 === r ? (e.result += " ") : r > 1 && (e.result += t.repeat("\n", r - 1));
  }
  function N(t, e, r) {
    let i, o, n, a, s, l;
    const h = t.kind,
      c = t.result;
    let d = t.input.charCodeAt(t.position);
    if (
      g(d) ||
      f(d) ||
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
      const e = t.input.charCodeAt(t.position + 1);
      if (g(e) || (r && f(e))) return !1;
    }
    for (
      t.kind = "scalar", t.result = "", i = o = t.position, n = !1;
      0 !== d;

    ) {
      if (58 === d) {
        const e = t.input.charCodeAt(t.position + 1);
        if (g(e) || (r && f(e))) break;
      } else if (35 === d) {
        if (g(t.input.charCodeAt(t.position - 1))) break;
      } else {
        if ((t.position === t.lineStart && R(t)) || (r && f(d))) break;
        if (u(d)) {
          if (
            ((a = t.line),
            (s = t.lineStart),
            (l = t.lineIndent),
            P(t, !1, -1),
            t.lineIndent >= e)
          ) {
            (n = !0), (d = t.input.charCodeAt(t.position));
            continue;
          }
          (t.position = o), (t.line = a), (t.lineStart = s), (t.lineIndent = l);
          break;
        }
      }
      n && (D(t, i, o, !1), z(t, t.line - a), (i = o = t.position), (n = !1)),
        p(d) || (o = t.position + 1),
        (d = t.input.charCodeAt(++t.position));
    }
    return D(t, i, o, !1), !!t.result || ((t.kind = h), (t.result = c), !1);
  }
  function W(t, e) {
    let r,
      i,
      o = t.input.charCodeAt(t.position);
    if (39 !== o) return !1;
    for (
      t.kind = "scalar", t.result = "", t.position++, r = i = t.position;
      0 !== (o = t.input.charCodeAt(t.position));

    )
      if (39 === o) {
        if (
          (D(t, r, t.position, !0),
          (o = t.input.charCodeAt(++t.position)),
          39 !== o)
        )
          return !0;
        (r = t.position), t.position++, (i = t.position);
      } else
        u(o)
          ? (D(t, r, i, !0), z(t, P(t, !1, e)), (r = i = t.position))
          : t.position === t.lineStart && R(t)
            ? v(
                t,
                "unexpected end of the document within a single quoted scalar",
              )
            : (t.position++, p(o) || (i = t.position));
    v(t, "unexpected end of the stream within a single quoted scalar");
  }
  function j(t, e) {
    let r,
      i,
      o,
      n = t.input.charCodeAt(t.position);
    if (34 !== n) return !1;
    for (
      t.kind = "scalar", t.result = "", t.position++, r = i = t.position;
      0 !== (n = t.input.charCodeAt(t.position));

    ) {
      if (34 === n) return D(t, r, t.position, !0), t.position++, !0;
      if (92 === n) {
        if (
          (D(t, r, t.position, !0),
          (n = t.input.charCodeAt(++t.position)),
          u(n))
        )
          P(t, !1, e);
        else if (n < 256 && w[n]) (t.result += S[n]), t.position++;
        else if ((o = m(n)) > 0) {
          let e = o,
            r = 0;
          for (; e > 0; e--)
            (n = t.input.charCodeAt(++t.position)),
              (o = y(n)) >= 0
                ? (r = (r << 4) + o)
                : v(t, "expected hexadecimal character");
          (t.result += b(r)), t.position++;
        } else v(t, "unknown escape sequence");
        r = i = t.position;
      } else
        u(n)
          ? (D(t, r, i, !0), z(t, P(t, !1, e)), (r = i = t.position))
          : t.position === t.lineStart && R(t)
            ? v(
                t,
                "unexpected end of the document within a double quoted scalar",
              )
            : (t.position++, p(n) || (i = t.position));
    }
    v(t, "unexpected end of the stream within a double quoted scalar");
  }
  function H(t, e) {
    let r,
      i,
      o,
      n = !0;
    const a = t.tag;
    let s;
    const l = t.anchor;
    let h, c, d, u;
    const p = Object.create(null);
    let f,
      y,
      m,
      x = t.input.charCodeAt(t.position);
    if (91 === x) (h = 93), (u = !1), (s = []);
    else {
      if (123 !== x) return !1;
      (h = 125), (u = !0), (s = {});
    }
    for (
      null !== t.anchor && A(t, t.anchor, s),
        x = t.input.charCodeAt(++t.position);
      0 !== x;

    ) {
      if ((P(t, !0, e), (x = t.input.charCodeAt(t.position)), x === h))
        return (
          t.position++,
          (t.tag = a),
          (t.anchor = l),
          (t.kind = u ? "mapping" : "sequence"),
          (t.result = s),
          !0
        );
      n
        ? 44 === x && v(t, "expected the node content, but found ','")
        : v(t, "missed comma between flow collection entries"),
        (y = f = m = null),
        (c = d = !1),
        63 === x &&
          g(t.input.charCodeAt(t.position + 1)) &&
          ((c = d = !0), t.position++, P(t, !0, e)),
        (r = t.line),
        (i = t.lineStart),
        (o = t.position),
        ot(t, e, 1, !1, !0),
        (y = t.tag),
        (f = t.result),
        P(t, !0, e),
        (x = t.input.charCodeAt(t.position)),
        (!d && t.line !== r) ||
          58 !== x ||
          ((c = !0),
          (x = t.input.charCodeAt(++t.position)),
          P(t, !0, e),
          ot(t, e, 1, !1, !0),
          (m = t.result)),
        u
          ? K(t, s, p, y, f, m, r, i, o)
          : c
            ? s.push(K(t, null, p, y, f, m, r, i, o))
            : s.push(f),
        P(t, !0, e),
        (x = t.input.charCodeAt(t.position)),
        44 === x
          ? ((n = !0), (x = t.input.charCodeAt(++t.position)))
          : (n = !1);
    }
    v(t, "unexpected end of the stream within a flow collection");
  }
  function U(e, r) {
    let i,
      o,
      n = 1,
      a = !1,
      s = !1,
      l = r,
      h = 0,
      c = !1,
      d = e.input.charCodeAt(e.position);
    if (124 === d) i = !1;
    else {
      if (62 !== d) return !1;
      i = !0;
    }
    for (e.kind = "scalar", e.result = ""; 0 !== d; )
      if (((d = e.input.charCodeAt(++e.position)), 43 === d || 45 === d))
        1 === n
          ? (n = 43 === d ? 3 : 2)
          : v(e, "repeat of a chomping mode identifier");
      else {
        if (!((o = x(d)) >= 0)) break;
        0 === o
          ? v(
              e,
              "bad explicit indentation width of a block scalar; it cannot be less than one",
            )
          : s
            ? v(e, "repeat of an indentation width identifier")
            : ((l = r + o - 1), (s = !0));
      }
    if (p(d)) {
      do {
        d = e.input.charCodeAt(++e.position);
      } while (p(d));
      if (35 === d)
        do {
          d = e.input.charCodeAt(++e.position);
        } while (!u(d) && 0 !== d);
    }
    for (; 0 !== d; ) {
      for (
        q(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position);
        (!s || e.lineIndent < l) && 32 === d;

      )
        e.lineIndent++, (d = e.input.charCodeAt(++e.position));
      if ((!s && e.lineIndent > l && (l = e.lineIndent), u(d))) {
        h++;
        continue;
      }
      if (
        (s || 0 !== l || v(e, "missing indentation for block scalar"),
        e.lineIndent < l)
      ) {
        3 === n
          ? (e.result += t.repeat("\n", a ? 1 + h : h))
          : 1 === n && a && (e.result += "\n");
        break;
      }
      i
        ? p(d)
          ? ((c = !0), (e.result += t.repeat("\n", a ? 1 + h : h)))
          : c
            ? ((c = !1), (e.result += t.repeat("\n", h + 1)))
            : 0 === h
              ? a && (e.result += " ")
              : (e.result += t.repeat("\n", h))
        : (e.result += t.repeat("\n", a ? 1 + h : h)),
        (a = !0),
        (s = !0),
        (h = 0);
      const r = e.position;
      for (; !u(d) && 0 !== d; ) d = e.input.charCodeAt(++e.position);
      D(e, r, e.position, !1);
    }
    return !0;
  }
  function Y(t, e) {
    const r = t.tag,
      i = t.anchor,
      o = [];
    let n = !1;
    if (-1 !== t.firstTabInLine) return !1;
    null !== t.anchor && A(t, t.anchor, o);
    let a = t.input.charCodeAt(t.position);
    for (
      ;
      0 !== a &&
      (-1 !== t.firstTabInLine &&
        ((t.position = t.firstTabInLine),
        v(t, "tab characters must not be used in indentation")),
      45 === a) &&
      g(t.input.charCodeAt(t.position + 1));

    ) {
      if (((n = !0), t.position++, P(t, !0, -1) && t.lineIndent <= e)) {
        o.push(null), (a = t.input.charCodeAt(t.position));
        continue;
      }
      const r = t.line;
      if (
        (ot(t, e, 3, !1, !0),
        o.push(t.result),
        P(t, !0, -1),
        (a = t.input.charCodeAt(t.position)),
        (t.line === r || t.lineIndent > e) && 0 !== a)
      )
        v(t, "bad indentation of a sequence entry");
      else if (t.lineIndent < e) break;
    }
    return (
      !!n &&
      ((t.tag = r), (t.anchor = i), (t.kind = "sequence"), (t.result = o), !0)
    );
  }
  function X(t, e, r) {
    let i, o, n, a;
    const s = t.tag,
      l = t.anchor,
      h = {},
      c = Object.create(null);
    let d = null,
      u = null,
      f = null,
      y = !1,
      m = !1;
    if (-1 !== t.firstTabInLine) return !1;
    null !== t.anchor && A(t, t.anchor, h);
    let x = t.input.charCodeAt(t.position);
    for (; 0 !== x; ) {
      y ||
        -1 === t.firstTabInLine ||
        ((t.position = t.firstTabInLine),
        v(t, "tab characters must not be used in indentation"));
      const C = t.input.charCodeAt(t.position + 1),
        b = t.line;
      if ((63 !== x && 58 !== x) || !g(C)) {
        if (
          ((o = t.line),
          (n = t.lineStart),
          (a = t.position),
          !ot(t, r, 2, !1, !0))
        )
          break;
        if (t.line === b) {
          for (x = t.input.charCodeAt(t.position); p(x); )
            x = t.input.charCodeAt(++t.position);
          if (58 === x)
            (x = t.input.charCodeAt(++t.position)),
              g(x) ||
                v(
                  t,
                  "a whitespace character is expected after the key-value separator within a block mapping",
                ),
              y && (K(t, h, c, d, u, null, o, n, a), (d = u = f = null)),
              (m = !0),
              (y = !1),
              (i = !1),
              (d = t.tag),
              (u = t.result);
          else {
            if (!m) return (t.tag = s), (t.anchor = l), !0;
            v(t, "can not read an implicit mapping pair; a colon is missed");
          }
        } else {
          if (!m) return (t.tag = s), (t.anchor = l), !0;
          v(
            t,
            "can not read a block mapping entry; a multiline key may not be an implicit key",
          );
        }
      } else
        63 === x
          ? (y && (K(t, h, c, d, u, null, o, n, a), (d = u = f = null)),
            (m = !0),
            (y = !0),
            (i = !0))
          : y
            ? ((y = !1), (i = !0))
            : v(
                t,
                "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line",
              ),
          (t.position += 1),
          (x = C);
      if (
        ((t.line === b || t.lineIndent > e) &&
          (y && ((o = t.line), (n = t.lineStart), (a = t.position)),
          ot(t, e, 4, !0, i) && (y ? (u = t.result) : (f = t.result)),
          y || (K(t, h, c, d, u, f, o, n, a), (d = u = f = null)),
          P(t, !0, -1),
          (x = t.input.charCodeAt(t.position))),
        (t.line === b || t.lineIndent > e) && 0 !== x)
      )
        v(t, "bad indentation of a mapping entry");
      else if (t.lineIndent < e) break;
    }
    return (
      y && K(t, h, c, d, u, null, o, n, a),
      m && ((t.tag = s), (t.anchor = l), (t.kind = "mapping"), (t.result = h)),
      m
    );
  }
  function Z(t) {
    let e,
      r,
      i = !1,
      o = !1,
      a = t.input.charCodeAt(t.position);
    if (33 !== a) return !1;
    null !== t.tag && v(t, "duplication of a tag property"),
      (a = t.input.charCodeAt(++t.position)),
      60 === a
        ? ((i = !0), (a = t.input.charCodeAt(++t.position)))
        : 33 === a
          ? ((o = !0), (e = "!!"), (a = t.input.charCodeAt(++t.position)))
          : (e = "!");
    let s = t.position;
    if (i) {
      do {
        a = t.input.charCodeAt(++t.position);
      } while (0 !== a && 62 !== a);
      t.position < t.length
        ? ((r = t.input.slice(s, t.position)),
          (a = t.input.charCodeAt(++t.position)))
        : v(t, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; 0 !== a && !g(a); )
        33 === a &&
          (o
            ? v(t, "tag suffix cannot contain exclamation marks")
            : ((e = t.input.slice(s - 1, t.position + 1)),
              h.test(e) ||
                v(t, "named tag handle cannot contain such characters"),
              (o = !0),
              (s = t.position + 1))),
          (a = t.input.charCodeAt(++t.position));
      (r = t.input.slice(s, t.position)),
        l.test(r) &&
          v(t, "tag suffix cannot contain flow indicator characters");
    }
    r && !c.test(r) && v(t, "tag name cannot contain such characters: " + r);
    try {
      r = decodeURIComponent(r);
    } catch (e) {
      v(t, "tag name is malformed: " + r);
    }
    return (
      i
        ? (t.tag = r)
        : n.call(t.tagMap, e)
          ? (t.tag = t.tagMap[e] + r)
          : "!" === e
            ? (t.tag = "!" + r)
            : "!!" === e
              ? (t.tag = "tag:yaml.org,2002:" + r)
              : v(t, 'undeclared tag handle "' + e + '"'),
      !0
    );
  }
  function et(t) {
    let e = t.input.charCodeAt(t.position);
    if (38 !== e) return !1;
    null !== t.anchor && v(t, "duplication of an anchor property"),
      (e = t.input.charCodeAt(++t.position));
    const r = t.position;
    for (; 0 !== e && !g(e) && !f(e); ) e = t.input.charCodeAt(++t.position);
    return (
      t.position === r &&
        v(t, "name of an anchor node must contain at least one character"),
      (t.anchor = t.input.slice(r, t.position)),
      !0
    );
  }
  function rt(t) {
    let e = t.input.charCodeAt(t.position);
    if (42 !== e) return !1;
    e = t.input.charCodeAt(++t.position);
    const r = t.position;
    for (; 0 !== e && !g(e) && !f(e); ) e = t.input.charCodeAt(++t.position);
    t.position === r &&
      v(t, "name of an alias node must contain at least one character");
    const i = t.input.slice(r, t.position);
    return (
      n.call(t.anchorMap, i) || v(t, 'unidentified alias "' + i + '"'),
      (t.result = t.anchorMap[i]),
      P(t, !0, -1),
      !0
    );
  }
  function it(t, e, r, i) {
    const o = $(t);
    return (
      F(t),
      E(t, e),
      (t.tag = null),
      (t.anchor = null),
      (t.kind = null),
      (t.result = null),
      X(t, r, i) && "mapping" === t.kind ? (L(t), !0) : (M(t), E(t, o), !1)
    );
  }
  function ot(t, e, r, i, o) {
    let a,
      s,
      l,
      h,
      c,
      d = 1,
      u = !1,
      p = !1,
      g = null;
    t.depth >= t.maxDepth &&
      v(t, "nesting exceeded maxDepth (" + t.maxDepth + ")"),
      (t.depth += 1),
      null !== t.listener && t.listener("open", t),
      (t.tag = null),
      (t.anchor = null),
      (t.kind = null),
      (t.result = null);
    const f = (a = s = 4 === r || 3 === r);
    if (
      (i &&
        P(t, !0, -1) &&
        ((u = !0),
        t.lineIndent > e
          ? (d = 1)
          : t.lineIndent === e
            ? (d = 0)
            : t.lineIndent < e && (d = -1)),
      1 === d)
    )
      for (;;) {
        const r = t.input.charCodeAt(t.position),
          i = $(t);
        if (
          u &&
          ((33 === r && null !== t.tag) || (38 === r && null !== t.anchor))
        )
          break;
        if (!Z(t) && !et(t)) break;
        null === g && (g = i),
          P(t, !0, -1)
            ? ((u = !0),
              (s = f),
              t.lineIndent > e
                ? (d = 1)
                : t.lineIndent === e
                  ? (d = 0)
                  : t.lineIndent < e && (d = -1))
            : (s = !1);
      }
    if ((s && (s = u || o), 1 === d || 4 === r))
      if (
        ((h = 1 === r || 2 === r ? e : e + 1),
        (c = t.position - t.lineStart),
        1 === d)
      )
        if ((s && (Y(t, c) || X(t, c, h))) || H(t, h)) p = !0;
        else {
          const e = t.input.charCodeAt(t.position);
          (null !== g &&
            f &&
            !s &&
            124 !== e &&
            62 !== e &&
            it(t, g, g.position - g.lineStart, h)) ||
          (a && U(t, h)) ||
          W(t, h) ||
          j(t, h)
            ? (p = !0)
            : rt(t)
              ? ((p = !0),
                (null === t.tag && null === t.anchor) ||
                  v(t, "alias node should not have any properties"))
              : N(t, h, 1 === r) && ((p = !0), null === t.tag && (t.tag = "?")),
            null !== t.anchor && A(t, t.anchor, t.result);
        }
      else 0 === d && (p = s && Y(t, c));
    if (null === t.tag) null !== t.anchor && A(t, t.anchor, t.result);
    else if ("?" === t.tag) {
      null !== t.result &&
        "scalar" !== t.kind &&
        v(
          t,
          'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
            t.kind +
            '"',
        );
      for (let e = 0, r = t.implicitTypes.length; e < r; e += 1)
        if (((l = t.implicitTypes[e]), l.resolve(t.result))) {
          (t.result = l.construct(t.result)),
            (t.tag = l.tag),
            null !== t.anchor && A(t, t.anchor, t.result);
          break;
        }
    } else if ("!" !== t.tag) {
      if (n.call(t.typeMap[t.kind || "fallback"], t.tag))
        l = t.typeMap[t.kind || "fallback"][t.tag];
      else {
        l = null;
        const e = t.typeMap.multi[t.kind || "fallback"];
        for (let r = 0, i = e.length; r < i; r += 1)
          if (t.tag.slice(0, e[r].tag.length) === e[r].tag) {
            l = e[r];
            break;
          }
      }
      l || v(t, "unknown tag !<" + t.tag + ">"),
        null !== t.result &&
          l.kind !== t.kind &&
          v(
            t,
            "unacceptable node kind for !<" +
              t.tag +
              '> tag; it should be "' +
              l.kind +
              '", not "' +
              t.kind +
              '"',
          ),
        l.resolve(t.result, t.tag)
          ? ((t.result = l.construct(t.result, t.tag)),
            null !== t.anchor && A(t, t.anchor, t.result))
          : v(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
    }
    return (
      null !== t.listener && t.listener("close", t),
      (t.depth -= 1),
      null !== t.tag || null !== t.anchor || p
    );
  }
  function nt(t) {
    const e = t.position;
    let r,
      i = !1;
    for (
      t.version = null,
        t.checkLineBreaks = t.legacy,
        t.tagMap = Object.create(null),
        t.anchorMap = Object.create(null);
      0 !== (r = t.input.charCodeAt(t.position)) &&
      (P(t, !0, -1),
      (r = t.input.charCodeAt(t.position)),
      !(t.lineIndent > 0 || 37 !== r));

    ) {
      (i = !0), (r = t.input.charCodeAt(++t.position));
      let e = t.position;
      for (; 0 !== r && !g(r); ) r = t.input.charCodeAt(++t.position);
      const o = t.input.slice(e, t.position),
        a = [];
      for (
        o.length < 1 &&
        v(t, "directive name must not be less than one character in length");
        0 !== r;

      ) {
        for (; p(r); ) r = t.input.charCodeAt(++t.position);
        if (35 === r) {
          do {
            r = t.input.charCodeAt(++t.position);
          } while (0 !== r && !u(r));
          break;
        }
        if (u(r)) break;
        for (e = t.position; 0 !== r && !g(r); )
          r = t.input.charCodeAt(++t.position);
        a.push(t.input.slice(e, t.position));
      }
      0 !== r && q(t),
        n.call(O, o)
          ? O[o](t, o, a)
          : _(t, 'unknown document directive "' + o + '"');
    }
    P(t, !0, -1),
      0 === t.lineIndent &&
      45 === t.input.charCodeAt(t.position) &&
      45 === t.input.charCodeAt(t.position + 1) &&
      45 === t.input.charCodeAt(t.position + 2)
        ? ((t.position += 3), P(t, !0, -1))
        : i && v(t, "directives end mark is expected"),
      ot(t, t.lineIndent - 1, 4, !1, !0),
      P(t, !0, -1),
      t.checkLineBreaks &&
        s.test(t.input.slice(e, t.position)) &&
        _(t, "non-ASCII line breaks are interpreted as content"),
      t.documents.push(t.result),
      t.position === t.lineStart && R(t)
        ? 46 === t.input.charCodeAt(t.position) &&
          ((t.position += 3), P(t, !0, -1))
        : t.position < t.length - 1 &&
          v(t, "end of the stream or a document separator is expected");
  }
  function at(t, e) {
    (e = e || {}),
      0 !== (t = String(t)).length &&
        (10 !== t.charCodeAt(t.length - 1) &&
          13 !== t.charCodeAt(t.length - 1) &&
          (t += "\n"),
        65279 === t.charCodeAt(0) && (t = t.slice(1)));
    const r = new T(t, e),
      i = t.indexOf("\0");
    for (
      -1 !== i && ((r.position = i), v(r, "null byte is not allowed in input")),
        r.input += "\0";
      32 === r.input.charCodeAt(r.position);

    )
      (r.lineIndent += 1), (r.position += 1);
    for (; r.position < r.length - 1; ) nt(r);
    return r.documents;
  }
  function st(t, e, r) {
    null !== e && "object" == typeof e && void 0 === r && ((r = e), (e = null));
    const i = at(t, r);
    if ("function" != typeof e) return i;
    for (let t = 0, r = i.length; t < r; t += 1) e(i[t]);
  }
  function lt(t, r) {
    const i = at(t, r);
    if (0 !== i.length) {
      if (1 === i.length) return i[0];
      throw new e("expected a single document in the stream, but found more");
    }
  }
  return (
    (0, i.K)(D, "captureSegment"),
    (0, i.K)(I, "mergeMappings"),
    (0, i.K)(K, "storeMappingPair"),
    (0, i.K)(q, "readLineBreak"),
    (0, i.K)(P, "skipSeparationSpace"),
    (0, i.K)(R, "testDocumentSeparator"),
    (0, i.K)(z, "writeFoldedLines"),
    (0, i.K)(N, "readPlainScalar"),
    (0, i.K)(W, "readSingleQuotedScalar"),
    (0, i.K)(j, "readDoubleQuotedScalar"),
    (0, i.K)(H, "readFlowCollection"),
    (0, i.K)(U, "readBlockScalar"),
    (0, i.K)(Y, "readBlockSequence"),
    (0, i.K)(X, "readBlockMapping"),
    (0, i.K)(Z, "readTagProperty"),
    (0, i.K)(et, "readAnchorProperty"),
    (0, i.K)(rt, "readAlias"),
    (0, i.K)(it, "tryReadBlockMappingFromProperty"),
    (0, i.K)(ot, "composeNode"),
    (0, i.K)(nt, "readDocument"),
    (0, i.K)(at, "loadDocuments"),
    (0, i.K)(st, "loadAll2"),
    (0, i.K)(lt, "load2"),
    (V.loadAll = st),
    (V.load = lt),
    V
  );
}
(0, i.K)(Q, "requireCommon"),
  (0, i.K)(J, "requireException"),
  (0, i.K)(tt, "requireSnippet"),
  (0, i.K)(et, "requireType"),
  (0, i.K)(rt, "requireSchema"),
  (0, i.K)(it, "requireStr"),
  (0, i.K)(ot, "requireSeq"),
  (0, i.K)(nt, "requireMap"),
  (0, i.K)(at, "requireFailsafe"),
  (0, i.K)(st, "require_null"),
  (0, i.K)(lt, "requireBool"),
  (0, i.K)(ht, "requireInt"),
  (0, i.K)(ct, "requireFloat"),
  (0, i.K)(dt, "requireJson"),
  (0, i.K)(ut, "requireCore"),
  (0, i.K)(pt, "requireTimestamp"),
  (0, i.K)(gt, "requireMerge"),
  (0, i.K)(ft, "requireBinary"),
  (0, i.K)(yt, "requireOmap"),
  (0, i.K)(mt, "requirePairs"),
  (0, i.K)(xt, "requireSet"),
  (0, i.K)(Ct, "require_default"),
  (0, i.K)(bt, "requireLoader");
var kt,
  wt,
  St = {};
function Tt() {
  if (kt) return St;
  kt = 1;
  const t = Q(),
    e = J(),
    r = Ct(),
    o = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    a = 65279,
    s = {
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
    h = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function c(t, e) {
    if (null === e) return {};
    const r = {},
      i = Object.keys(e);
    for (let o = 0, a = i.length; o < a; o += 1) {
      let a = i[o],
        s = String(e[a]);
      "!!" === a.slice(0, 2) && (a = "tag:yaml.org,2002:" + a.slice(2));
      const l = t.compiledTypeMap.fallback[a];
      l && n.call(l.styleAliases, s) && (s = l.styleAliases[s]), (r[a] = s);
    }
    return r;
  }
  function d(r) {
    let i, o;
    const n = r.toString(16).toUpperCase();
    if (r <= 255) (i = "x"), (o = 2);
    else if (r <= 65535) (i = "u"), (o = 4);
    else {
      if (!(r <= 4294967295))
        throw new e(
          "code point within a string may not be greater than 0xFFFFFFFF",
        );
      (i = "U"), (o = 8);
    }
    return "\\" + i + t.repeat("0", o - n.length) + n;
  }
  function u(e) {
    (this.schema = e.schema || r),
      (this.indent = Math.max(1, e.indent || 2)),
      (this.noArrayIndent = e.noArrayIndent || !1),
      (this.skipInvalid = e.skipInvalid || !1),
      (this.flowLevel = t.isNothing(e.flowLevel) ? -1 : e.flowLevel),
      (this.styleMap = c(this.schema, e.styles || null)),
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
  function p(e, r) {
    const i = t.repeat(" ", r);
    let o = 0,
      n = "";
    const a = e.length;
    for (; o < a; ) {
      let t;
      const r = e.indexOf("\n", o);
      -1 === r
        ? ((t = e.slice(o)), (o = a))
        : ((t = e.slice(o, r + 1)), (o = r + 1)),
        t.length && "\n" !== t && (n += i),
        (n += t);
    }
    return n;
  }
  function g(e, r) {
    return "\n" + t.repeat(" ", e.indent * r);
  }
  function f(t, e) {
    for (let r = 0, i = t.implicitTypes.length; r < i; r += 1)
      if (t.implicitTypes[r].resolve(e)) return !0;
    return !1;
  }
  function y(t) {
    return 32 === t || 9 === t;
  }
  function m(t) {
    return (
      (t >= 32 && t <= 126) ||
      (t >= 161 && t <= 55295 && 8232 !== t && 8233 !== t) ||
      (t >= 57344 && t <= 65533 && t !== a) ||
      (t >= 65536 && t <= 1114111)
    );
  }
  function x(t) {
    return m(t) && t !== a && 13 !== t && 10 !== t;
  }
  function C(t, e, r) {
    const i = x(t),
      o = i && !y(t);
    return (
      ((r
        ? i
        : i && 44 !== t && 91 !== t && 93 !== t && 123 !== t && 125 !== t) &&
        35 !== t &&
        !(58 === e && !o)) ||
      (x(e) && !y(e) && 35 === t) ||
      (58 === e && o)
    );
  }
  function b(t) {
    return (
      m(t) &&
      t !== a &&
      !y(t) &&
      45 !== t &&
      63 !== t &&
      58 !== t &&
      44 !== t &&
      91 !== t &&
      93 !== t &&
      123 !== t &&
      125 !== t &&
      35 !== t &&
      38 !== t &&
      42 !== t &&
      33 !== t &&
      124 !== t &&
      61 !== t &&
      62 !== t &&
      39 !== t &&
      34 !== t &&
      37 !== t &&
      64 !== t &&
      96 !== t
    );
  }
  function k(t) {
    return !y(t) && 58 !== t;
  }
  function w(t, e) {
    const r = t.charCodeAt(e);
    let i;
    return r >= 55296 &&
      r <= 56319 &&
      e + 1 < t.length &&
      ((i = t.charCodeAt(e + 1)), i >= 56320 && i <= 57343)
      ? 1024 * (r - 55296) + i - 56320 + 65536
      : r;
  }
  function S(t) {
    return /^\n* /.test(t);
  }
  function T(t, e, r, i, o, n, a, s) {
    let l,
      h = 0,
      c = null,
      d = !1,
      u = !1;
    const p = -1 !== i;
    let g = -1,
      f = b(w(t, 0)) && k(w(t, t.length - 1));
    if (e || a)
      for (l = 0; l < t.length; h >= 65536 ? (l += 2) : l++) {
        if (((h = w(t, l)), !m(h))) return 5;
        (f = f && C(h, c, s)), (c = h);
      }
    else {
      for (l = 0; l < t.length; h >= 65536 ? (l += 2) : l++) {
        if (((h = w(t, l)), 10 === h))
          (d = !0),
            p && ((u = u || (l - g - 1 > i && " " !== t[g + 1])), (g = l));
        else if (!m(h)) return 5;
        (f = f && C(h, c, s)), (c = h);
      }
      u = u || (p && l - g - 1 > i && " " !== t[g + 1]);
    }
    return d || u
      ? r > 9 && S(t)
        ? 5
        : a
          ? 2 === n
            ? 5
            : 2
          : u
            ? 4
            : 3
      : !f || a || o(t)
        ? 2 === n
          ? 5
          : 2
        : 1;
  }
  function B(t, r, o, n, a) {
    t.dump = (function () {
      if (0 === r.length) return 2 === t.quotingType ? '""' : "''";
      if (!t.noCompatMode && (-1 !== l.indexOf(r) || h.test(r)))
        return 2 === t.quotingType ? '"' + r + '"' : "'" + r + "'";
      const s = t.indent * Math.max(1, o),
        c =
          -1 === t.lineWidth
            ? -1
            : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - s),
        d = n || (t.flowLevel > -1 && o >= t.flowLevel);
      function u(e) {
        return f(t, e);
      }
      switch (
        ((0, i.K)(u, "testAmbiguity"),
        T(r, d, t.indent, c, u, t.quotingType, t.forceQuotes && !n, a))
      ) {
        case 1:
          return r;
        case 2:
          return "'" + r.replace(/'/g, "''") + "'";
        case 3:
          return "|" + v(r, t.indent) + _(p(r, s));
        case 4:
          return ">" + v(r, t.indent) + _(p(A(r, c), s));
        case 5:
          return '"' + L(r) + '"';
        default:
          throw new e("impossible error: invalid scalar style");
      }
    })();
  }
  function v(t, e) {
    const r = S(t) ? String(e) : "",
      i = "\n" === t[t.length - 1];
    return (
      r +
      (!i || ("\n" !== t[t.length - 2] && "\n" !== t) ? (i ? "" : "-") : "+") +
      "\n"
    );
  }
  function _(t) {
    return "\n" === t[t.length - 1] ? t.slice(0, -1) : t;
  }
  function A(t, e) {
    const r = /(\n+)([^\n]*)/g;
    let i,
      o,
      n = (function () {
        let i = t.indexOf("\n");
        return (
          (i = -1 !== i ? i : t.length), (r.lastIndex = i), F(t.slice(0, i), e)
        );
      })(),
      a = "\n" === t[0] || " " === t[0];
    for (; (o = r.exec(t)); ) {
      const t = o[1],
        r = o[2];
      (i = " " === r[0]),
        (n += t + (a || i || "" === r ? "" : "\n") + F(r, e)),
        (a = i);
    }
    return n;
  }
  function F(t, e) {
    if ("" === t || " " === t[0]) return t;
    const r = / [^ ]/g;
    let i,
      o,
      n = 0,
      a = 0,
      s = 0,
      l = "";
    for (; (i = r.exec(t)); )
      (s = i.index),
        s - n > e &&
          ((o = a > n ? a : s), (l += "\n" + t.slice(n, o)), (n = o + 1)),
        (a = s);
    return (
      (l += "\n"),
      t.length - n > e && a > n
        ? (l += t.slice(n, a) + "\n" + t.slice(a + 1))
        : (l += t.slice(n)),
      l.slice(1)
    );
  }
  function L(t) {
    let e = "",
      r = 0;
    for (let i = 0; i < t.length; r >= 65536 ? (i += 2) : i++) {
      r = w(t, i);
      const o = s[r];
      !o && m(r)
        ? ((e += t[i]), r >= 65536 && (e += t[i + 1]))
        : (e += o || d(r));
    }
    return e;
  }
  function M(t, e, r) {
    let i = "";
    const o = t.tag;
    for (let o = 0, n = r.length; o < n; o += 1) {
      let n = r[o];
      t.replacer && (n = t.replacer.call(r, String(o), n)),
        (I(t, e, n, !1, !1) || (void 0 === n && I(t, e, null, !1, !1))) &&
          ("" !== i && (i += "," + (t.condenseFlow ? "" : " ")), (i += t.dump));
    }
    (t.tag = o), (t.dump = "[" + i + "]");
  }
  function $(t, e, r, i) {
    let o = "";
    const n = t.tag;
    for (let n = 0, a = r.length; n < a; n += 1) {
      let a = r[n];
      t.replacer && (a = t.replacer.call(r, String(n), a)),
        (I(t, e + 1, a, !0, !0, !1, !0) ||
          (void 0 === a && I(t, e + 1, null, !0, !0, !1, !0))) &&
          ((i && "" === o) || (o += g(t, e)),
          t.dump && 10 === t.dump.charCodeAt(0) ? (o += "-") : (o += "- "),
          (o += t.dump));
    }
    (t.tag = n), (t.dump = o || "[]");
  }
  function E(t, e, r) {
    let i = "";
    const o = t.tag,
      n = Object.keys(r);
    for (let o = 0, a = n.length; o < a; o += 1) {
      let a = "";
      "" !== i && (a += ", "), t.condenseFlow && (a += '"');
      const s = n[o];
      let l = r[s];
      t.replacer && (l = t.replacer.call(r, s, l)),
        I(t, e, s, !1, !1) &&
          (t.dump.length > 1024 && (a += "? "),
          (a +=
            t.dump +
            (t.condenseFlow ? '"' : "") +
            ":" +
            (t.condenseFlow ? "" : " ")),
          I(t, e, l, !1, !1) && ((a += t.dump), (i += a)));
    }
    (t.tag = o), (t.dump = "{" + i + "}");
  }
  function O(t, r, i, o) {
    let n = "";
    const a = t.tag,
      s = Object.keys(i);
    if (!0 === t.sortKeys) s.sort();
    else if ("function" == typeof t.sortKeys) s.sort(t.sortKeys);
    else if (t.sortKeys)
      throw new e("sortKeys must be a boolean or a function");
    for (let e = 0, a = s.length; e < a; e += 1) {
      let a = "";
      (o && "" === n) || (a += g(t, r));
      const l = s[e];
      let h = i[l];
      if (
        (t.replacer && (h = t.replacer.call(i, l, h)),
        !I(t, r + 1, l, !0, !0, !0))
      )
        continue;
      const c =
        (null !== t.tag && "?" !== t.tag) || (t.dump && t.dump.length > 1024);
      c && (t.dump && 10 === t.dump.charCodeAt(0) ? (a += "?") : (a += "? ")),
        (a += t.dump),
        c && (a += g(t, r)),
        I(t, r + 1, h, !0, c) &&
          (t.dump && 10 === t.dump.charCodeAt(0) ? (a += ":") : (a += ": "),
          (a += t.dump),
          (n += a));
    }
    (t.tag = a), (t.dump = n || "{}");
  }
  function D(t, r, i) {
    const a = i ? t.explicitTypes : t.implicitTypes;
    for (let s = 0, l = a.length; s < l; s += 1) {
      const l = a[s];
      if (
        (l.instanceOf || l.predicate) &&
        (!l.instanceOf ||
          ("object" == typeof r && r instanceof l.instanceOf)) &&
        (!l.predicate || l.predicate(r))
      ) {
        if (
          (i
            ? l.multi && l.representName
              ? (t.tag = l.representName(r))
              : (t.tag = l.tag)
            : (t.tag = "?"),
          l.represent)
        ) {
          const i = t.styleMap[l.tag] || l.defaultStyle;
          let a;
          if ("[object Function]" === o.call(l.represent))
            a = l.represent(r, i);
          else {
            if (!n.call(l.represent, i))
              throw new e(
                "!<" + l.tag + '> tag resolver accepts not "' + i + '" style',
              );
            a = l.represent[i](r, i);
          }
          t.dump = a;
        }
        return !0;
      }
    }
    return !1;
  }
  function I(t, r, i, n, a, s, l) {
    (t.tag = null), (t.dump = i), D(t, i, !1) || D(t, i, !0);
    const h = o.call(t.dump),
      c = n;
    n && (n = t.flowLevel < 0 || t.flowLevel > r);
    const d = "[object Object]" === h || "[object Array]" === h;
    let u, p;
    if (
      (d && ((u = t.duplicates.indexOf(i)), (p = -1 !== u)),
      ((null !== t.tag && "?" !== t.tag) || p || (2 !== t.indent && r > 0)) &&
        (a = !1),
      p && t.usedDuplicates[u])
    )
      t.dump = "*ref_" + u;
    else {
      if (
        (d && p && !t.usedDuplicates[u] && (t.usedDuplicates[u] = !0),
        "[object Object]" === h)
      )
        n && 0 !== Object.keys(t.dump).length
          ? (O(t, r, t.dump, a), p && (t.dump = "&ref_" + u + t.dump))
          : (E(t, r, t.dump), p && (t.dump = "&ref_" + u + " " + t.dump));
      else if ("[object Array]" === h)
        n && 0 !== t.dump.length
          ? (t.noArrayIndent && !l && r > 0
              ? $(t, r - 1, t.dump, a)
              : $(t, r, t.dump, a),
            p && (t.dump = "&ref_" + u + t.dump))
          : (M(t, r, t.dump), p && (t.dump = "&ref_" + u + " " + t.dump));
      else {
        if ("[object String]" !== h) {
          if ("[object Undefined]" === h) return !1;
          if (t.skipInvalid) return !1;
          throw new e("unacceptable kind of an object to dump " + h);
        }
        "?" !== t.tag && B(t, t.dump, r, s, c);
      }
      if (null !== t.tag && "?" !== t.tag) {
        let e = encodeURI("!" === t.tag[0] ? t.tag.slice(1) : t.tag).replace(
          /!/g,
          "%21",
        );
        (e =
          "!" === t.tag[0]
            ? "!" + e
            : "tag:yaml.org,2002:" === e.slice(0, 18)
              ? "!!" + e.slice(18)
              : "!<" + e + ">"),
          (t.dump = e + " " + t.dump);
      }
    }
    return !0;
  }
  function K(t, e) {
    const r = [],
      i = [];
    q(t, r, i);
    const o = i.length;
    for (let t = 0; t < o; t += 1) e.duplicates.push(r[i[t]]);
    e.usedDuplicates = new Array(o);
  }
  function q(t, e, r) {
    if (null !== t && "object" == typeof t) {
      const i = e.indexOf(t);
      if (-1 !== i) -1 === r.indexOf(i) && r.push(i);
      else if ((e.push(t), Array.isArray(t)))
        for (let i = 0, o = t.length; i < o; i += 1) q(t[i], e, r);
      else {
        const i = Object.keys(t);
        for (let o = 0, n = i.length; o < n; o += 1) q(t[i[o]], e, r);
      }
    }
  }
  function P(t, e) {
    const r = new u((e = e || {}));
    r.noRefs || K(t, r);
    let i = t;
    return (
      r.replacer && (i = r.replacer.call({ "": i }, "", i)),
      I(r, 0, i, !0, !0) ? r.dump + "\n" : ""
    );
  }
  return (
    (0, i.K)(c, "compileStyleMap"),
    (0, i.K)(d, "encodeHex"),
    (0, i.K)(u, "State"),
    (0, i.K)(p, "indentString"),
    (0, i.K)(g, "generateNextLine"),
    (0, i.K)(f, "testImplicitResolving"),
    (0, i.K)(y, "isWhitespace"),
    (0, i.K)(m, "isPrintable"),
    (0, i.K)(x, "isNsCharOrWhitespace"),
    (0, i.K)(C, "isPlainSafe"),
    (0, i.K)(b, "isPlainSafeFirst"),
    (0, i.K)(k, "isPlainSafeLast"),
    (0, i.K)(w, "codePointAt"),
    (0, i.K)(S, "needIndentIndicator"),
    (0, i.K)(T, "chooseScalarStyle"),
    (0, i.K)(B, "writeScalar"),
    (0, i.K)(v, "blockHeader"),
    (0, i.K)(_, "dropEndingNewline"),
    (0, i.K)(A, "foldString"),
    (0, i.K)(F, "foldLine"),
    (0, i.K)(L, "escapeString"),
    (0, i.K)(M, "writeFlowSequence"),
    (0, i.K)($, "writeBlockSequence"),
    (0, i.K)(E, "writeFlowMapping"),
    (0, i.K)(O, "writeBlockMapping"),
    (0, i.K)(D, "detectType"),
    (0, i.K)(I, "writeNode"),
    (0, i.K)(K, "getDuplicateReferences"),
    (0, i.K)(q, "inspectNode"),
    (0, i.K)(P, "dump2"),
    (St.dump = P),
    St
  );
}
function Bt() {
  if (wt) return X;
  wt = 1;
  const t = bt(),
    e = Tt();
  function r(t, e) {
    return function () {
      throw new Error(
        "Function yaml." +
          t +
          " is removed in js-yaml 4. Use yaml." +
          e +
          " instead, which is now safe by default.",
      );
    };
  }
  return (
    (0, i.K)(r, "renamed"),
    (X.Type = et()),
    (X.Schema = rt()),
    (X.FAILSAFE_SCHEMA = at()),
    (X.JSON_SCHEMA = dt()),
    (X.CORE_SCHEMA = ut()),
    (X.DEFAULT_SCHEMA = Ct()),
    (X.load = t.load),
    (X.loadAll = t.loadAll),
    (X.dump = e.dump),
    (X.YAMLException = J()),
    (X.types = {
      binary: ft(),
      float: ct(),
      map: nt(),
      null: st(),
      pairs: mt(),
      set: xt(),
      timestamp: pt(),
      bool: lt(),
      int: ht(),
      merge: gt(),
      omap: yt(),
      seq: ot(),
      str: it(),
    }),
    (X.safeLoad = r("safeLoad", "load")),
    (X.safeLoadAll = r("safeLoadAll", "loadAll")),
    (X.safeDump = r("safeDump", "dump")),
    X
  );
}
(0, i.K)(Tt, "requireDumper"), (0, i.K)(Bt, "requireJsYaml");
var vt = o(Bt()),
  {
    Type: _t,
    Schema: At,
    FAILSAFE_SCHEMA: Ft,
    JSON_SCHEMA: Lt,
    CORE_SCHEMA: Mt,
    DEFAULT_SCHEMA: $t,
    load: Et,
    loadAll: Ot,
    dump: Dt,
    YAMLException: It,
    types: Kt,
    safeLoad: qt,
    safeLoadAll: Pt,
    safeDump: Rt,
  } = vt;
