// vendor/module-28551.js — webpack module 28551
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t), n.d(t, { default: () => ii });
var r = n(19835 /* vendor/module-19835 */),
  o = n(36469 /* vendor/module-36469 */);
const i = /[#.]/g;
var a = n(61182 /* vendor/module-61182 */),
  s = n(46738 /* vendor/module-46738 */),
  l = n(10010 /* vendor/module-10010 */);
function c(e, t, n) {
  const r = n
    ? (function (e) {
        const t = new Map();
        for (const n of e) t.set(n.toLowerCase(), n);
        return t;
      })(n)
    : void 0;
  return function (n, o, ...a) {
    let s;
    if (null == n) {
      s = { type: "root", children: [] };
      const e = o;
      a.unshift(e);
    } else {
      s = (function (e, t) {
        const n = e || "",
          r = {};
        let o,
          a,
          s = 0;
        for (; s < n.length; ) {
          i.lastIndex = s;
          const e = i.exec(n),
            t = n.slice(s, e ? e.index : n.length);
          t &&
            (o
              ? "#" === o
                ? (r.id = t)
                : Array.isArray(r.className)
                  ? r.className.push(t)
                  : (r.className = [t])
              : (a = t),
            (s += t.length)),
            e && ((o = e[0]), s++);
        }
        return {
          type: "element",
          tagName: a || t || "div",
          properties: r,
          children: [],
        };
      })(n, t);
      const l = s.tagName.toLowerCase(),
        c = r ? r.get(l) : void 0;
      if (
        ((s.tagName = c || l),
        (function (e) {
          if (null === e || "object" != typeof e || Array.isArray(e)) return !0;
          if ("string" != typeof e.type) return !1;
          const t = e,
            n = Object.keys(e);
          for (const e of n) {
            const n = t[e];
            if (n && "object" == typeof n) {
              if (!Array.isArray(n)) return !0;
              const e = n;
              for (const t of e)
                if ("number" != typeof t && "string" != typeof t) return !0;
            }
          }
          return !(!("children" in e) || !Array.isArray(e.children));
        })(o))
      )
        a.unshift(o);
      else for (const [t, n] of Object.entries(o)) u(e, s.properties, t, n);
    }
    for (const e of a) d(s.children, e);
    return (
      "element" === s.type &&
        "template" === s.tagName &&
        ((s.content = { type: "root", children: s.children }),
        (s.children = [])),
      s
    );
  };
}
function u(e, t, n, r) {
  const i = (0, a.I)(e, n);
  let s;
  if (null != r) {
    if ("number" == typeof r) {
      if (Number.isNaN(r)) return;
      s = r;
    } else
      s =
        "boolean" == typeof r
          ? r
          : "string" == typeof r
            ? i.spaceSeparated
              ? (0, l.q)(r)
              : i.commaSeparated
                ? (0, o.q)(r)
                : i.commaOrSpaceSeparated
                  ? (0, l.q)((0, o.q)(r).join(" "))
                  : p(i, i.property, r)
            : Array.isArray(r)
              ? [...r]
              : "style" === i.property
                ? (function (e) {
                    const t = [];
                    for (const [n, r] of Object.entries(e))
                      t.push([n, r].join(": "));
                    return t.join("; ");
                  })(r)
                : String(r);
    if (Array.isArray(s)) {
      const e = [];
      for (const t of s) e.push(p(i, i.property, t));
      s = e;
    }
    "className" === i.property &&
      Array.isArray(t.className) &&
      (s = t.className.concat(s)),
      (t[i.property] = s);
  }
}
function d(e, t) {
  if (null == t);
  else if ("number" == typeof t || "string" == typeof t)
    e.push({ type: "text", value: String(t) });
  else if (Array.isArray(t)) for (const n of t) d(e, n);
  else {
    if ("object" != typeof t || !("type" in t))
      throw new Error("Expected node, nodes, or string, got `" + t + "`");
    "root" === t.type ? d(e, t.children) : e.push(t);
  }
}
function p(e, t, n) {
  if ("string" == typeof n) {
    if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
    if (
      (e.boolean || e.overloadedBoolean) &&
      ("" === n || (0, s.S)(n) === (0, s.S)(t))
    )
      return !0;
  }
  return n;
}
const f = c(r.qy, "div"),
  h = c(r.JW, "g", [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "solidColor",
    "textArea",
    "textPath",
  ]),
  m = "http://www.w3.org/1999/xhtml";
function g(e, t) {
  const n = (function (e, t) {
    switch (e.nodeType) {
      case 1:
        return (function (e, t) {
          const n = e.namespaceURI,
            r = "http://www.w3.org/2000/svg" === n ? h : f,
            o = n === m ? e.tagName.toLowerCase() : e.tagName,
            i = n === m && "template" === o ? e.content : e,
            a = e.getAttributeNames(),
            s = {};
          let l = -1;
          for (; ++l < a.length; ) s[a[l]] = e.getAttribute(a[l]) || "";
          return r(o, s, v(i, t));
        })(e, t);
      case 3:
        return (function (e) {
          return { type: "text", value: e.nodeValue || "" };
        })(e);
      case 8:
        return (function (e) {
          return { type: "comment", value: e.nodeValue || "" };
        })(e);
      case 9:
      case 11:
        return y(e, t);
      case 10:
        return { type: "doctype" };
      default:
        return;
    }
  })(e, t);
  return n && t.afterTransform && t.afterTransform(e, n), n;
}
function y(e, t) {
  return { type: "root", children: v(e, t) };
}
function v(e, t) {
  const n = e.childNodes,
    r = [];
  let o = -1;
  for (; ++o < n.length; ) {
    const e = g(n[o], t);
    void 0 !== e && r.push(e);
  }
  return r;
}
const b = new DOMParser();
var S = n(15186 /* vendor/module-15186 */);
const _ = function (e, t, n) {
    const r = (0, S.C)(n);
    if (!e || !e.type || !e.children) throw new Error("Expected parent node");
    if ("number" == typeof t) {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if ((t = e.children.indexOf(t)) < 0)
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (r(e.children[t], t, e)) return e.children[t];
  },
  x = function (e) {
    if (null == e) return E;
    if ("string" == typeof e)
      return (
        (t = e),
        w(function (e) {
          return e.tagName === t;
        })
      );
    var t;
    if ("object" == typeof e)
      return (function (e) {
        const t = [];
        let n = -1;
        for (; ++n < e.length; ) t[n] = x(e[n]);
        return w(function (...e) {
          let n = -1;
          for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
          return !1;
        });
      })(e);
    if ("function" == typeof e) return w(e);
    throw new Error("Expected function, string, or array as `test`");
  };
function w(e) {
  return function (t, n, r) {
    return Boolean(
      (function (e) {
        return (
          null !== e && "object" == typeof e && "type" in e && "tagName" in e
        );
      })(t) && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0),
    );
  };
}
function E(e) {
  return Boolean(
    e &&
      "object" == typeof e &&
      "type" in e &&
      "element" === e.type &&
      "tagName" in e &&
      "string" == typeof e.tagName,
  );
}
const T = /\n/g,
  k = /[\t ]+/g,
  C = x("br"),
  I = x(function (e) {
    return "td" === e.tagName || "th" === e.tagName;
  }),
  A = x("p"),
  O = x("tr"),
  R = x([
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    "rp",
    "script",
    "style",
    "template",
    "title",
    function (e) {
      return Boolean((e.properties || {}).hidden);
    },
    function (e) {
      return "dialog" === e.tagName && !(e.properties || {}).open;
    },
  ]),
  M = x([
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "caption",
    "center",
    "dd",
    "dialog",
    "dir",
    "dl",
    "dt",
    "div",
    "figure",
    "figcaption",
    "footer",
    "form,",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "li",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "plaintext",
    "pre",
    "section",
    "ul",
    "xmp",
  ]);
function P(e, t, n) {
  return "element" === e.type
    ? (function (e, t, n) {
        const r = j(e, n),
          o = e.children || [];
        let i,
          a,
          s = -1,
          l = [];
        if (R(e)) return l;
        for (
          C(e) || (O(e) && _(t, e, O))
            ? (a = "\n")
            : A(e)
              ? ((i = 2), (a = 2))
              : M(e) && ((i = 1), (a = 1));
          ++s < o.length;

        )
          l = l.concat(
            P(o[s], e, {
              whitespace: r,
              breakBefore: s ? void 0 : i,
              breakAfter: s < o.length - 1 ? C(o[s + 1]) : a,
            }),
          );
        return (
          I(e) && _(t, e, I) && l.push("\t"),
          i && l.unshift(i),
          a && l.push(a),
          l
        );
      })(e, t, n)
    : "text" === e.type
      ? "normal" === n.whitespace
        ? N(e, n)
        : (function (e) {
            return [String(e.value)];
          })(e)
      : [];
}
function N(e, t) {
  const n = String(e.value),
    r = [],
    o = [];
  let i = 0;
  for (; i <= n.length; ) {
    T.lastIndex = i;
    const e = T.exec(n),
      o = e && "index" in e ? e.index : n.length;
    r.push(
      D(
        n
          .slice(i, o)
          .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        0 !== i || t.breakBefore,
        o !== n.length || t.breakAfter,
      ),
    ),
      (i = o + 1);
  }
  let a,
    s = -1;
  for (; ++s < r.length; )
    8203 === r[s].charCodeAt(r[s].length - 1) ||
    (s < r.length - 1 && 8203 === r[s + 1].charCodeAt(0))
      ? (o.push(r[s]), (a = void 0))
      : r[s]
        ? ("number" == typeof a && o.push(a), o.push(r[s]), (a = 0))
        : (0 !== s && s !== r.length - 1) || o.push(0);
  return o;
}
function D(e, t, n) {
  const r = [];
  let o,
    i = 0;
  for (; i < e.length; ) {
    k.lastIndex = i;
    const n = k.exec(e);
    (o = n ? n.index : e.length),
      i || o || !n || t || r.push(""),
      i !== o && r.push(e.slice(i, o)),
      (i = n ? o + n[0].length : o);
  }
  return i === o || n || r.push(""), r.join(" ");
}
function j(e, t) {
  if ("element" === e.type) {
    const n = e.properties || {};
    switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return n.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return n.noWrap ? "nowrap" : t.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return t.whitespace;
}
class L extends Error {
  constructor(e, t) {
    var n,
      r,
      o = "KaTeX parse error: " + e,
      i = t && t.loc;
    if (i && i.start <= i.end) {
      var a = i.lexer.input;
      (n = i.start),
        (r = i.end),
        n === a.length
          ? (o += " at end of input: ")
          : (o += " at position " + (n + 1) + ": ");
      var s = a.slice(n, r).replace(/[^]/g, "$&̲");
      o +=
        (n > 15 ? "…" + a.slice(n - 15, n) : a.slice(0, n)) +
        s +
        (r + 15 < a.length ? a.slice(r, r + 15) + "…" : a.slice(r));
    }
    super(o),
      (this.name = "ParseError"),
      (this.position = void 0),
      (this.length = void 0),
      (this.rawMessage = void 0),
      Object.setPrototypeOf(this, L.prototype),
      (this.position = n),
      null != n && null != r && (this.length = r - n),
      (this.rawMessage = e);
  }
}
var F = /([A-Z])/g,
  U = (e) => e.replace(F, "-$1").toLowerCase(),
  B = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&#x27;",
  },
  z = /[&><"']/g,
  H = (e) => String(e).replace(z, (e) => B[e]),
  V = (e) =>
    "ordgroup" === e.type || "color" === e.type
      ? 1 === e.body.length
        ? V(e.body[0])
        : e
      : "font" === e.type
        ? V(e.body)
        : e,
  q = new Set(["mathord", "textord", "atom"]),
  G = (e) => q.has(V(e).type),
  W = {
    displayMode: {
      type: "boolean",
      description:
        "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
      cli: "-d, --display-mode",
    },
    output: {
      type: { enum: ["htmlAndMathml", "html", "mathml"] },
      description: "Determines the markup language of the output.",
      cli: "-F, --format <type>",
    },
    leqno: {
      type: "boolean",
      description: "Render display math in leqno style (left-justified tags).",
    },
    fleqn: {
      type: "boolean",
      description: "Render display math flush left.",
    },
    throwOnError: {
      type: "boolean",
      default: !0,
      cli: "-t, --no-throw-on-error",
      cliDescription:
        "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.",
    },
    errorColor: {
      type: "string",
      default: "#cc0000",
      cli: "-c, --error-color <color>",
      cliDescription:
        "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
      cliProcessor: (e) => "#" + e,
    },
    macros: {
      type: "object",
      cli: "-m, --macro <def>",
      cliDescription:
        "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
      cliDefault: [],
      cliProcessor: (e, t) => (t.push(e), t),
    },
    minRuleThickness: {
      type: "number",
      description:
        "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
      processor: (e) => Math.max(0, e),
      cli: "--min-rule-thickness <size>",
      cliProcessor: parseFloat,
    },
    colorIsTextColor: {
      type: "boolean",
      description:
        "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
      cli: "-b, --color-is-text-color",
    },
    strict: {
      type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"],
      description:
        "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
      cli: "-S, --strict",
      cliDefault: !1,
    },
    trust: {
      type: ["boolean", "function"],
      description: "Trust the input, enabling all HTML features such as \\url.",
      cli: "-T, --trust",
    },
    maxSize: {
      type: "number",
      default: 1 / 0,
      description:
        "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
      processor: (e) => Math.max(0, e),
      cli: "-s, --max-size <n>",
      cliProcessor: parseInt,
    },
    maxExpand: {
      type: "number",
      default: 1e3,
      description:
        "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
      processor: (e) => Math.max(0, e),
      cli: "-e, --max-expand <n>",
      cliProcessor: (e) => ("Infinity" === e ? 1 / 0 : parseInt(e)),
    },
    globalGroup: { type: "boolean", cli: !1 },
  };
function $(e, t, n, r) {
  var o = n[t];
  e[t] =
    void 0 !== o
      ? r.processor
        ? r.processor(o)
        : o
      : (function (e) {
          return void 0 !== e.default
            ? e.default
            : (function (e) {
                if ("string" != typeof e) return e.enum[0];
                switch (e) {
                  case "boolean":
                    return !1;
                  case "string":
                    return "";
                  case "number":
                    return 0;
                  case "object":
                    return {};
                  default:
                    throw new Error(
                      "Unexpected schema type; settings must declare an explicit default.",
                    );
                }
              })(Array.isArray(e.type) ? e.type[0] : e.type);
        })(r);
}
class Y {
  constructor(e) {
    for (var t of (void 0 === e && (e = {}),
    (this.displayMode = void 0),
    (this.output = void 0),
    (this.leqno = void 0),
    (this.fleqn = void 0),
    (this.throwOnError = void 0),
    (this.errorColor = void 0),
    (this.macros = void 0),
    (this.minRuleThickness = void 0),
    (this.colorIsTextColor = void 0),
    (this.strict = void 0),
    (this.trust = void 0),
    (this.maxSize = void 0),
    (this.maxExpand = void 0),
    (this.globalGroup = void 0),
    (e = e || {}),
    Object.keys(W))) {
      var n = W[t];
      n && $(this, t, e, n);
    }
  }
  reportNonstrict(e, t, n) {
    var r = this.strict;
    if (
      ("function" == typeof r && (r = r(e, t, n)),
      r && "ignore" !== r && (!0 === r || "error" === r))
    )
      throw new L(
        "LaTeX-incompatible input and strict mode is set to 'error': " +
          t +
          " [" +
          e +
          "]",
        n,
      );
  }
  useStrictBehavior(e, t, n) {
    var r = this.strict;
    if ("function" == typeof r)
      try {
        r = r(e, t, n);
      } catch (e) {
        r = "error";
      }
    return !(!r || "ignore" === r || (!0 !== r && "error" !== r));
  }
  isTrusted(e) {
    if ("url" in e && e.url && !e.protocol) {
      var t = ((e) => {
        var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
        return t
          ? ":" !== t[2]
            ? null
            : /^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])
              ? t[1].toLowerCase()
              : null
          : "_relative";
      })(e.url);
      if (null == t) return !1;
      e.protocol = t;
    }
    var n = "function" == typeof this.trust ? this.trust(e) : this.trust;
    return Boolean(n);
  }
}
class K {
  constructor(e, t, n) {
    (this.id = void 0),
      (this.size = void 0),
      (this.cramped = void 0),
      (this.id = e),
      (this.size = t),
      (this.cramped = n);
  }
  sup() {
    return Z[Q[this.id]];
  }
  sub() {
    return Z[J[this.id]];
  }
  fracNum() {
    return Z[X[this.id]];
  }
  fracDen() {
    return Z[ee[this.id]];
  }
  cramp() {
    return Z[te[this.id]];
  }
  text() {
    return Z[ne[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}
var Z = [
    new K(0, 0, !1),
    new K(1, 0, !0),
    new K(2, 1, !1),
    new K(3, 1, !0),
    new K(4, 2, !1),
    new K(5, 2, !0),
    new K(6, 3, !1),
    new K(7, 3, !0),
  ],
  Q = [4, 5, 4, 5, 6, 7, 6, 7],
  J = [5, 5, 5, 5, 7, 7, 7, 7],
  X = [2, 3, 4, 5, 6, 7, 6, 7],
  ee = [3, 3, 5, 5, 7, 7, 7, 7],
  te = [1, 1, 3, 3, 5, 5, 7, 7],
  ne = [0, 1, 2, 3, 2, 3, 2, 3],
  re = {
    DISPLAY: Z[0],
    TEXT: Z[2],
    SCRIPT: Z[4],
    SCRIPTSCRIPT: Z[6],
  },
  oe = [
    {
      name: "latin",
      blocks: [
        [256, 591],
        [768, 879],
      ],
    },
    { name: "cyrillic", blocks: [[1024, 1279]] },
    { name: "armenian", blocks: [[1328, 1423]] },
    { name: "brahmic", blocks: [[2304, 4255]] },
    { name: "georgian", blocks: [[4256, 4351]] },
    {
      name: "cjk",
      blocks: [
        [12288, 12543],
        [19968, 40879],
        [65280, 65376],
      ],
    },
    { name: "hangul", blocks: [[44032, 55215]] },
  ],
  ie = [];
function ae(e) {
  for (var t = 0; t < ie.length; t += 2)
    if (e >= ie[t] && e <= ie[t + 1]) return !0;
  return !1;
}
oe.forEach((e) => e.blocks.forEach((e) => ie.push(...e)));
var se = (e) => e + " " + e,
  le = {
    doubleleftarrow:
      "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
    doublerightarrow:
      "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
    leftarrow:
      "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
    leftbrace:
      "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
    leftbraceunder:
      "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
    leftgroup:
      "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
    leftgroupunder:
      "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
    leftharpoon:
      "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
    leftharpoonplus:
      "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
    leftharpoondown:
      "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
    leftharpoondownplus:
      "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
    lefthook:
      "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
    leftlinesegment: se("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
    leftbracketunder: se("M0 0 h120 V290 H399995 v120 H0z"),
    leftbracketover: se("M0 440 h120 V150 H399995 v-120 H0z"),
    leftmapsto: se("M40 281 V448H0V74H40V241H400000v40z"),
    leftToFrom:
      "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
    longequal: se("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
    midbrace:
      "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
    midbraceunder:
      "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
    oiintSize1:
      "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
    oiintSize2:
      "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
    oiiintSize1:
      "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
    oiiintSize2:
      "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
    rightarrow:
      "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
    rightbrace:
      "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
    rightbraceunder:
      "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
    rightgroup:
      "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
    rightgroupunder:
      "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
    rightharpoon:
      "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
    rightharpoonplus:
      "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
    rightharpoondown:
      "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
    rightharpoondownplus:
      "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
    righthook:
      "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
    rightlinesegment: se("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
    rightbracketunder: se("M399995 0 h-120 V290 H0 v120 H400000z"),
    rightbracketover: se("M399995 440 h-120 V150 H0 v-120 H399995z"),
    rightToFrom:
      "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
    twoheadleftarrow:
      "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
    twoheadrightarrow:
      "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
    tilde1:
      "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
    tilde2:
      "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
    tilde3:
      "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
    tilde4:
      "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
    vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
    widehat1:
      "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
    widehat2:
      "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
    widehat3:
      "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
    widehat4:
      "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
    widecheck1:
      "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
    widecheck2:
      "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
    widecheck3:
      "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
    widecheck4:
      "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
    baraboveleftarrow:
      "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
    rightarrowabovebar:
      "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
    baraboveshortleftharpoon:
      "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
    rightharpoonaboveshortbar:
      "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
    shortbaraboveleftharpoon:
      "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
    shortrightharpoonabovebar:
      "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z",
  };
class ce {
  constructor(e) {
    (this.children = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      (this.children = e),
      (this.classes = []),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = {});
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    for (
      var e = document.createDocumentFragment(), t = 0;
      t < this.children.length;
      t++
    )
      e.appendChild(this.children[t].toNode());
    return e;
  }
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  toText() {
    return this.children
      .map((e) => {
        if ("toText" in e) return e.toText();
        throw new Error(
          "Expected MathDomNode with toText, got " + e.constructor.name,
        );
      })
      .join("");
  }
}
var ue = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 1.00375,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 1.00375,
  },
  de = { ex: !0, em: !0, mu: !0 },
  pe = function (e) {
    return (
      "string" != typeof e && (e = e.unit), e in ue || e in de || "ex" === e
    );
  },
  fe = function (e, t) {
    var n;
    if (e.unit in ue)
      n = ue[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
    else if ("mu" === e.unit) n = t.fontMetrics().cssEmPerMu;
    else {
      var r;
      if (
        ((r = t.style.isTight() ? t.havingStyle(t.style.text()) : t),
        "ex" === e.unit)
      )
        n = r.fontMetrics().xHeight;
      else {
        if ("em" !== e.unit) throw new L("Invalid unit: '" + e.unit + "'");
        n = r.fontMetrics().quad;
      }
      r !== t && (n *= r.sizeMultiplier / t.sizeMultiplier);
    }
    return Math.min(e.number * n, t.maxSize);
  },
  he = function (e) {
    return +e.toFixed(4) + "em";
  },
  me = function (e) {
    return e.filter((e) => e).join(" ");
  },
  ge = function (e) {
    var t = "";
    for (var n of Object.keys(e)) {
      var r = e[n];
      void 0 !== r && (t += U(n) + ":" + r + ";");
    }
    return t;
  },
  ye = function (e, t, n) {
    if (
      ((this.classes = e || []),
      (this.attributes = {}),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = n || {}),
      t)
    ) {
      t.style.isTight() && this.classes.push("mtight");
      var r = t.getColor();
      r && (this.style.color = r);
    }
  },
  ve = function (e) {
    var t = document.createElement(e);
    for (var n of ((t.className = me(this.classes)),
    Object.assign(t.style, this.style),
    Object.keys(this.attributes)))
      t.setAttribute(n, this.attributes[n]);
    for (var r = 0; r < this.children.length; r++)
      t.appendChild(this.children[r].toNode());
    return t;
  },
  be = /[\s"'>/=\x00-\x1f]/,
  Se = function (e) {
    var t = "<" + e;
    this.classes.length && (t += ' class="' + H(me(this.classes)) + '"');
    var n = ge(this.style);
    for (var r of (n && (t += ' style="' + H(n) + '"'),
    Object.keys(this.attributes))) {
      if (be.test(r)) throw new L("Invalid attribute name '" + r + "'");
      t += " " + r + '="' + H(this.attributes[r]) + '"';
    }
    t += ">";
    for (var o = 0; o < this.children.length; o++)
      t += this.children[o].toMarkup();
    return t + "</" + e + ">";
  };
class _e {
  constructor(e, t, n, r) {
    (this.children = void 0),
      (this.attributes = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.width = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      (this.italic = void 0),
      ye.call(this, e, n, r),
      (this.children = t || []);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return ve.call(this, "span");
  }
  toMarkup() {
    return Se.call(this, "span");
  }
}
class xe {
  constructor(e, t, n, r) {
    (this.children = void 0),
      (this.attributes = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      ye.call(this, t, r),
      (this.children = n || []),
      this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return ve.call(this, "a");
  }
  toMarkup() {
    return Se.call(this, "a");
  }
}
class we {
  constructor(e, t, n) {
    (this.src = void 0),
      (this.alt = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      (this.alt = t),
      (this.src = e),
      (this.classes = ["mord"]),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = n);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    return (
      (e.src = this.src),
      (e.alt = this.alt),
      (e.className = "mord"),
      Object.assign(e.style, this.style),
      e
    );
  }
  toMarkup() {
    var e = '<img src="' + H(this.src) + '" alt="' + H(this.alt) + '"',
      t = ge(this.style);
    return t && (e += ' style="' + H(t) + '"'), e + "'/>";
  }
}
var Ee = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
class Te {
  constructor(e, t, n, r, o, i, a, s) {
    (this.text = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.italic = void 0),
      (this.skew = void 0),
      (this.width = void 0),
      (this.maxFontSize = void 0),
      (this.classes = void 0),
      (this.style = void 0),
      (this.text = e),
      (this.height = t || 0),
      (this.depth = n || 0),
      (this.italic = r || 0),
      (this.skew = o || 0),
      (this.width = i || 0),
      (this.classes = a || []),
      (this.style = s || {}),
      (this.maxFontSize = 0);
    var l = (function (e) {
      for (var t = 0; t < oe.length; t++)
        for (var n = oe[t], r = 0; r < n.blocks.length; r++) {
          var o = n.blocks[r];
          if (e >= o[0] && e <= o[1]) return n.name;
        }
      return null;
    })(this.text.charCodeAt(0));
    l && this.classes.push(l + "_fallback"),
      /[îïíì]/.test(this.text) && (this.text = Ee[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createTextNode(this.text),
      t = null;
    return (
      this.italic > 0 &&
        ((t = document.createElement("span")).style.marginRight = he(
          this.italic,
        )),
      this.classes.length > 0 &&
        ((t = t || document.createElement("span")).className = me(
          this.classes,
        )),
      Object.keys(this.style).length > 0 &&
        ((t = t || document.createElement("span")),
        Object.assign(t.style, this.style)),
      t ? (t.appendChild(e), t) : e
    );
  }
  toMarkup() {
    var e = !1,
      t = "<span";
    this.classes.length &&
      ((e = !0), (t += ' class="'), (t += H(me(this.classes))), (t += '"'));
    var n = "";
    this.italic > 0 && (n += "margin-right:" + he(this.italic) + ";"),
      (n += ge(this.style)) && ((e = !0), (t += ' style="' + H(n) + '"'));
    var r = H(this.text);
    return e ? ((t += ">"), (t += r), (t += "</span>")) : r;
  }
}
class ke {
  constructor(e, t) {
    (this.children = void 0),
      (this.attributes = void 0),
      (this.children = e || []),
      (this.attributes = t || {});
  }
  toNode() {
    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    for (var t of Object.keys(this.attributes))
      e.setAttribute(t, this.attributes[t]);
    for (var n = 0; n < this.children.length; n++)
      e.appendChild(this.children[n].toNode());
    return e;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of Object.keys(this.attributes))
      e += " " + t + '="' + H(this.attributes[t]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e + "</svg>";
  }
}
class Ce {
  constructor(e, t) {
    (this.pathName = void 0),
      (this.alternate = void 0),
      (this.pathName = e),
      (this.alternate = t);
  }
  toNode() {
    var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (
      this.alternate
        ? e.setAttribute("d", this.alternate)
        : e.setAttribute("d", le[this.pathName]),
      e
    );
  }
  toMarkup() {
    return this.alternate
      ? '<path d="' + H(this.alternate) + '"/>'
      : '<path d="' + H(le[this.pathName]) + '"/>';
  }
}
class Ie {
  constructor(e) {
    (this.attributes = void 0), (this.attributes = e || {});
  }
  toNode() {
    var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
    for (var t of Object.keys(this.attributes))
      e.setAttribute(t, this.attributes[t]);
    return e;
  }
  toMarkup() {
    var e = "<line";
    for (var t of Object.keys(this.attributes))
      e += " " + t + '="' + H(this.attributes[t]) + '"';
    return e + "/>";
  }
}
var Ae = {
    "AMS-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68889, 0, 0, 0.72222],
      66: [0, 0.68889, 0, 0, 0.66667],
      67: [0, 0.68889, 0, 0, 0.72222],
      68: [0, 0.68889, 0, 0, 0.72222],
      69: [0, 0.68889, 0, 0, 0.66667],
      70: [0, 0.68889, 0, 0, 0.61111],
      71: [0, 0.68889, 0, 0, 0.77778],
      72: [0, 0.68889, 0, 0, 0.77778],
      73: [0, 0.68889, 0, 0, 0.38889],
      74: [0.16667, 0.68889, 0, 0, 0.5],
      75: [0, 0.68889, 0, 0, 0.77778],
      76: [0, 0.68889, 0, 0, 0.66667],
      77: [0, 0.68889, 0, 0, 0.94445],
      78: [0, 0.68889, 0, 0, 0.72222],
      79: [0.16667, 0.68889, 0, 0, 0.77778],
      80: [0, 0.68889, 0, 0, 0.61111],
      81: [0.16667, 0.68889, 0, 0, 0.77778],
      82: [0, 0.68889, 0, 0, 0.72222],
      83: [0, 0.68889, 0, 0, 0.55556],
      84: [0, 0.68889, 0, 0, 0.66667],
      85: [0, 0.68889, 0, 0, 0.72222],
      86: [0, 0.68889, 0, 0, 0.72222],
      87: [0, 0.68889, 0, 0, 1],
      88: [0, 0.68889, 0, 0, 0.72222],
      89: [0, 0.68889, 0, 0, 0.72222],
      90: [0, 0.68889, 0, 0, 0.66667],
      107: [0, 0.68889, 0, 0, 0.55556],
      160: [0, 0, 0, 0, 0.25],
      165: [0, 0.675, 0.025, 0, 0.75],
      174: [0.15559, 0.69224, 0, 0, 0.94666],
      240: [0, 0.68889, 0, 0, 0.55556],
      295: [0, 0.68889, 0, 0, 0.54028],
      710: [0, 0.825, 0, 0, 2.33334],
      732: [0, 0.9, 0, 0, 2.33334],
      770: [0, 0.825, 0, 0, 2.33334],
      771: [0, 0.9, 0, 0, 2.33334],
      989: [0.08167, 0.58167, 0, 0, 0.77778],
      1008: [0, 0.43056, 0.04028, 0, 0.66667],
      8245: [0, 0.54986, 0, 0, 0.275],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8487: [0, 0.68889, 0, 0, 0.72222],
      8498: [0, 0.68889, 0, 0, 0.55556],
      8502: [0, 0.68889, 0, 0, 0.66667],
      8503: [0, 0.68889, 0, 0, 0.44445],
      8504: [0, 0.68889, 0, 0, 0.66667],
      8513: [0, 0.68889, 0, 0, 0.63889],
      8592: [-0.03598, 0.46402, 0, 0, 0.5],
      8594: [-0.03598, 0.46402, 0, 0, 0.5],
      8602: [-0.13313, 0.36687, 0, 0, 1],
      8603: [-0.13313, 0.36687, 0, 0, 1],
      8606: [0.01354, 0.52239, 0, 0, 1],
      8608: [0.01354, 0.52239, 0, 0, 1],
      8610: [0.01354, 0.52239, 0, 0, 1.11111],
      8611: [0.01354, 0.52239, 0, 0, 1.11111],
      8619: [0, 0.54986, 0, 0, 1],
      8620: [0, 0.54986, 0, 0, 1],
      8621: [-0.13313, 0.37788, 0, 0, 1.38889],
      8622: [-0.13313, 0.36687, 0, 0, 1],
      8624: [0, 0.69224, 0, 0, 0.5],
      8625: [0, 0.69224, 0, 0, 0.5],
      8630: [0, 0.43056, 0, 0, 1],
      8631: [0, 0.43056, 0, 0, 1],
      8634: [0.08198, 0.58198, 0, 0, 0.77778],
      8635: [0.08198, 0.58198, 0, 0, 0.77778],
      8638: [0.19444, 0.69224, 0, 0, 0.41667],
      8639: [0.19444, 0.69224, 0, 0, 0.41667],
      8642: [0.19444, 0.69224, 0, 0, 0.41667],
      8643: [0.19444, 0.69224, 0, 0, 0.41667],
      8644: [0.1808, 0.675, 0, 0, 1],
      8646: [0.1808, 0.675, 0, 0, 1],
      8647: [0.1808, 0.675, 0, 0, 1],
      8648: [0.19444, 0.69224, 0, 0, 0.83334],
      8649: [0.1808, 0.675, 0, 0, 1],
      8650: [0.19444, 0.69224, 0, 0, 0.83334],
      8651: [0.01354, 0.52239, 0, 0, 1],
      8652: [0.01354, 0.52239, 0, 0, 1],
      8653: [-0.13313, 0.36687, 0, 0, 1],
      8654: [-0.13313, 0.36687, 0, 0, 1],
      8655: [-0.13313, 0.36687, 0, 0, 1],
      8666: [0.13667, 0.63667, 0, 0, 1],
      8667: [0.13667, 0.63667, 0, 0, 1],
      8669: [-0.13313, 0.37788, 0, 0, 1],
      8672: [-0.064, 0.437, 0, 0, 1.334],
      8674: [-0.064, 0.437, 0, 0, 1.334],
      8705: [0, 0.825, 0, 0, 0.5],
      8708: [0, 0.68889, 0, 0, 0.55556],
      8709: [0.08167, 0.58167, 0, 0, 0.77778],
      8717: [0, 0.43056, 0, 0, 0.42917],
      8722: [-0.03598, 0.46402, 0, 0, 0.5],
      8724: [0.08198, 0.69224, 0, 0, 0.77778],
      8726: [0.08167, 0.58167, 0, 0, 0.77778],
      8733: [0, 0.69224, 0, 0, 0.77778],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8737: [0, 0.69224, 0, 0, 0.72222],
      8738: [0.03517, 0.52239, 0, 0, 0.72222],
      8739: [0.08167, 0.58167, 0, 0, 0.22222],
      8740: [0.25142, 0.74111, 0, 0, 0.27778],
      8741: [0.08167, 0.58167, 0, 0, 0.38889],
      8742: [0.25142, 0.74111, 0, 0, 0.5],
      8756: [0, 0.69224, 0, 0, 0.66667],
      8757: [0, 0.69224, 0, 0, 0.66667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8765: [-0.13313, 0.37788, 0, 0, 0.77778],
      8769: [-0.13313, 0.36687, 0, 0, 0.77778],
      8770: [-0.03625, 0.46375, 0, 0, 0.77778],
      8774: [0.30274, 0.79383, 0, 0, 0.77778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8778: [0.08167, 0.58167, 0, 0, 0.77778],
      8782: [0.06062, 0.54986, 0, 0, 0.77778],
      8783: [0.06062, 0.54986, 0, 0, 0.77778],
      8785: [0.08198, 0.58198, 0, 0, 0.77778],
      8786: [0.08198, 0.58198, 0, 0, 0.77778],
      8787: [0.08198, 0.58198, 0, 0, 0.77778],
      8790: [0, 0.69224, 0, 0, 0.77778],
      8791: [0.22958, 0.72958, 0, 0, 0.77778],
      8796: [0.08198, 0.91667, 0, 0, 0.77778],
      8806: [0.25583, 0.75583, 0, 0, 0.77778],
      8807: [0.25583, 0.75583, 0, 0, 0.77778],
      8808: [0.25142, 0.75726, 0, 0, 0.77778],
      8809: [0.25142, 0.75726, 0, 0, 0.77778],
      8812: [0.25583, 0.75583, 0, 0, 0.5],
      8814: [0.20576, 0.70576, 0, 0, 0.77778],
      8815: [0.20576, 0.70576, 0, 0, 0.77778],
      8816: [0.30274, 0.79383, 0, 0, 0.77778],
      8817: [0.30274, 0.79383, 0, 0, 0.77778],
      8818: [0.22958, 0.72958, 0, 0, 0.77778],
      8819: [0.22958, 0.72958, 0, 0, 0.77778],
      8822: [0.1808, 0.675, 0, 0, 0.77778],
      8823: [0.1808, 0.675, 0, 0, 0.77778],
      8828: [0.13667, 0.63667, 0, 0, 0.77778],
      8829: [0.13667, 0.63667, 0, 0, 0.77778],
      8830: [0.22958, 0.72958, 0, 0, 0.77778],
      8831: [0.22958, 0.72958, 0, 0, 0.77778],
      8832: [0.20576, 0.70576, 0, 0, 0.77778],
      8833: [0.20576, 0.70576, 0, 0, 0.77778],
      8840: [0.30274, 0.79383, 0, 0, 0.77778],
      8841: [0.30274, 0.79383, 0, 0, 0.77778],
      8842: [0.13597, 0.63597, 0, 0, 0.77778],
      8843: [0.13597, 0.63597, 0, 0, 0.77778],
      8847: [0.03517, 0.54986, 0, 0, 0.77778],
      8848: [0.03517, 0.54986, 0, 0, 0.77778],
      8858: [0.08198, 0.58198, 0, 0, 0.77778],
      8859: [0.08198, 0.58198, 0, 0, 0.77778],
      8861: [0.08198, 0.58198, 0, 0, 0.77778],
      8862: [0, 0.675, 0, 0, 0.77778],
      8863: [0, 0.675, 0, 0, 0.77778],
      8864: [0, 0.675, 0, 0, 0.77778],
      8865: [0, 0.675, 0, 0, 0.77778],
      8872: [0, 0.69224, 0, 0, 0.61111],
      8873: [0, 0.69224, 0, 0, 0.72222],
      8874: [0, 0.69224, 0, 0, 0.88889],
      8876: [0, 0.68889, 0, 0, 0.61111],
      8877: [0, 0.68889, 0, 0, 0.61111],
      8878: [0, 0.68889, 0, 0, 0.72222],
      8879: [0, 0.68889, 0, 0, 0.72222],
      8882: [0.03517, 0.54986, 0, 0, 0.77778],
      8883: [0.03517, 0.54986, 0, 0, 0.77778],
      8884: [0.13667, 0.63667, 0, 0, 0.77778],
      8885: [0.13667, 0.63667, 0, 0, 0.77778],
      8888: [0, 0.54986, 0, 0, 1.11111],
      8890: [0.19444, 0.43056, 0, 0, 0.55556],
      8891: [0.19444, 0.69224, 0, 0, 0.61111],
      8892: [0.19444, 0.69224, 0, 0, 0.61111],
      8901: [0, 0.54986, 0, 0, 0.27778],
      8903: [0.08167, 0.58167, 0, 0, 0.77778],
      8905: [0.08167, 0.58167, 0, 0, 0.77778],
      8906: [0.08167, 0.58167, 0, 0, 0.77778],
      8907: [0, 0.69224, 0, 0, 0.77778],
      8908: [0, 0.69224, 0, 0, 0.77778],
      8909: [-0.03598, 0.46402, 0, 0, 0.77778],
      8910: [0, 0.54986, 0, 0, 0.76042],
      8911: [0, 0.54986, 0, 0, 0.76042],
      8912: [0.03517, 0.54986, 0, 0, 0.77778],
      8913: [0.03517, 0.54986, 0, 0, 0.77778],
      8914: [0, 0.54986, 0, 0, 0.66667],
      8915: [0, 0.54986, 0, 0, 0.66667],
      8916: [0, 0.69224, 0, 0, 0.66667],
      8918: [0.0391, 0.5391, 0, 0, 0.77778],
      8919: [0.0391, 0.5391, 0, 0, 0.77778],
      8920: [0.03517, 0.54986, 0, 0, 1.33334],
      8921: [0.03517, 0.54986, 0, 0, 1.33334],
      8922: [0.38569, 0.88569, 0, 0, 0.77778],
      8923: [0.38569, 0.88569, 0, 0, 0.77778],
      8926: [0.13667, 0.63667, 0, 0, 0.77778],
      8927: [0.13667, 0.63667, 0, 0, 0.77778],
      8928: [0.30274, 0.79383, 0, 0, 0.77778],
      8929: [0.30274, 0.79383, 0, 0, 0.77778],
      8934: [0.23222, 0.74111, 0, 0, 0.77778],
      8935: [0.23222, 0.74111, 0, 0, 0.77778],
      8936: [0.23222, 0.74111, 0, 0, 0.77778],
      8937: [0.23222, 0.74111, 0, 0, 0.77778],
      8938: [0.20576, 0.70576, 0, 0, 0.77778],
      8939: [0.20576, 0.70576, 0, 0, 0.77778],
      8940: [0.30274, 0.79383, 0, 0, 0.77778],
      8941: [0.30274, 0.79383, 0, 0, 0.77778],
      8994: [0.19444, 0.69224, 0, 0, 0.77778],
      8995: [0.19444, 0.69224, 0, 0, 0.77778],
      9416: [0.15559, 0.69224, 0, 0, 0.90222],
      9484: [0, 0.69224, 0, 0, 0.5],
      9488: [0, 0.69224, 0, 0, 0.5],
      9492: [0, 0.37788, 0, 0, 0.5],
      9496: [0, 0.37788, 0, 0, 0.5],
      9585: [0.19444, 0.68889, 0, 0, 0.88889],
      9586: [0.19444, 0.74111, 0, 0, 0.88889],
      9632: [0, 0.675, 0, 0, 0.77778],
      9633: [0, 0.675, 0, 0, 0.77778],
      9650: [0, 0.54986, 0, 0, 0.72222],
      9651: [0, 0.54986, 0, 0, 0.72222],
      9654: [0.03517, 0.54986, 0, 0, 0.77778],
      9660: [0, 0.54986, 0, 0, 0.72222],
      9661: [0, 0.54986, 0, 0, 0.72222],
      9664: [0.03517, 0.54986, 0, 0, 0.77778],
      9674: [0.11111, 0.69224, 0, 0, 0.66667],
      9733: [0.19444, 0.69224, 0, 0, 0.94445],
      10003: [0, 0.69224, 0, 0, 0.83334],
      10016: [0, 0.69224, 0, 0, 0.83334],
      10731: [0.11111, 0.69224, 0, 0, 0.66667],
      10846: [0.19444, 0.75583, 0, 0, 0.61111],
      10877: [0.13667, 0.63667, 0, 0, 0.77778],
      10878: [0.13667, 0.63667, 0, 0, 0.77778],
      10885: [0.25583, 0.75583, 0, 0, 0.77778],
      10886: [0.25583, 0.75583, 0, 0, 0.77778],
      10887: [0.13597, 0.63597, 0, 0, 0.77778],
      10888: [0.13597, 0.63597, 0, 0, 0.77778],
      10889: [0.26167, 0.75726, 0, 0, 0.77778],
      10890: [0.26167, 0.75726, 0, 0, 0.77778],
      10891: [0.48256, 0.98256, 0, 0, 0.77778],
      10892: [0.48256, 0.98256, 0, 0, 0.77778],
      10901: [0.13667, 0.63667, 0, 0, 0.77778],
      10902: [0.13667, 0.63667, 0, 0, 0.77778],
      10933: [0.25142, 0.75726, 0, 0, 0.77778],
      10934: [0.25142, 0.75726, 0, 0, 0.77778],
      10935: [0.26167, 0.75726, 0, 0, 0.77778],
      10936: [0.26167, 0.75726, 0, 0, 0.77778],
      10937: [0.26167, 0.75726, 0, 0, 0.77778],
      10938: [0.26167, 0.75726, 0, 0, 0.77778],
      10949: [0.25583, 0.75583, 0, 0, 0.77778],
      10950: [0.25583, 0.75583, 0, 0, 0.77778],
      10955: [0.28481, 0.79383, 0, 0, 0.77778],
      10956: [0.28481, 0.79383, 0, 0, 0.77778],
      57350: [0.08167, 0.58167, 0, 0, 0.22222],
      57351: [0.08167, 0.58167, 0, 0, 0.38889],
      57352: [0.08167, 0.58167, 0, 0, 0.77778],
      57353: [0, 0.43056, 0.04028, 0, 0.66667],
      57356: [0.25142, 0.75726, 0, 0, 0.77778],
      57357: [0.25142, 0.75726, 0, 0, 0.77778],
      57358: [0.41951, 0.91951, 0, 0, 0.77778],
      57359: [0.30274, 0.79383, 0, 0, 0.77778],
      57360: [0.30274, 0.79383, 0, 0, 0.77778],
      57361: [0.41951, 0.91951, 0, 0, 0.77778],
      57366: [0.25142, 0.75726, 0, 0, 0.77778],
      57367: [0.25142, 0.75726, 0, 0, 0.77778],
      57368: [0.25142, 0.75726, 0, 0, 0.77778],
      57369: [0.25142, 0.75726, 0, 0, 0.77778],
      57370: [0.13597, 0.63597, 0, 0, 0.77778],
      57371: [0.13597, 0.63597, 0, 0, 0.77778],
    },
    "Caligraphic-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68333, 0, 0.19445, 0.79847],
      66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
      67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
      68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
      69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
      70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
      71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
      72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
      73: [0, 0.68333, 0.07382, 0, 0.54452],
      74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
      75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
      76: [0, 0.68333, 0, 0.13889, 0.68972],
      77: [0, 0.68333, 0, 0.13889, 1.2009],
      78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
      79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
      80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
      81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
      82: [0, 0.68333, 0, 0.08334, 0.8475],
      83: [0, 0.68333, 0.075, 0.13889, 0.60556],
      84: [0, 0.68333, 0.25417, 0, 0.54464],
      85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
      86: [0, 0.68333, 0.08222, 0, 0.61278],
      87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
      88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
      89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
      90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
      160: [0, 0, 0, 0, 0.25],
    },
    "Fraktur-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69141, 0, 0, 0.29574],
      34: [0, 0.69141, 0, 0, 0.21471],
      38: [0, 0.69141, 0, 0, 0.73786],
      39: [0, 0.69141, 0, 0, 0.21201],
      40: [0.24982, 0.74947, 0, 0, 0.38865],
      41: [0.24982, 0.74947, 0, 0, 0.38865],
      42: [0, 0.62119, 0, 0, 0.27764],
      43: [0.08319, 0.58283, 0, 0, 0.75623],
      44: [0, 0.10803, 0, 0, 0.27764],
      45: [0.08319, 0.58283, 0, 0, 0.75623],
      46: [0, 0.10803, 0, 0, 0.27764],
      47: [0.24982, 0.74947, 0, 0, 0.50181],
      48: [0, 0.47534, 0, 0, 0.50181],
      49: [0, 0.47534, 0, 0, 0.50181],
      50: [0, 0.47534, 0, 0, 0.50181],
      51: [0.18906, 0.47534, 0, 0, 0.50181],
      52: [0.18906, 0.47534, 0, 0, 0.50181],
      53: [0.18906, 0.47534, 0, 0, 0.50181],
      54: [0, 0.69141, 0, 0, 0.50181],
      55: [0.18906, 0.47534, 0, 0, 0.50181],
      56: [0, 0.69141, 0, 0, 0.50181],
      57: [0.18906, 0.47534, 0, 0, 0.50181],
      58: [0, 0.47534, 0, 0, 0.21606],
      59: [0.12604, 0.47534, 0, 0, 0.21606],
      61: [-0.13099, 0.36866, 0, 0, 0.75623],
      63: [0, 0.69141, 0, 0, 0.36245],
      65: [0, 0.69141, 0, 0, 0.7176],
      66: [0, 0.69141, 0, 0, 0.88397],
      67: [0, 0.69141, 0, 0, 0.61254],
      68: [0, 0.69141, 0, 0, 0.83158],
      69: [0, 0.69141, 0, 0, 0.66278],
      70: [0.12604, 0.69141, 0, 0, 0.61119],
      71: [0, 0.69141, 0, 0, 0.78539],
      72: [0.06302, 0.69141, 0, 0, 0.7203],
      73: [0, 0.69141, 0, 0, 0.55448],
      74: [0.12604, 0.69141, 0, 0, 0.55231],
      75: [0, 0.69141, 0, 0, 0.66845],
      76: [0, 0.69141, 0, 0, 0.66602],
      77: [0, 0.69141, 0, 0, 1.04953],
      78: [0, 0.69141, 0, 0, 0.83212],
      79: [0, 0.69141, 0, 0, 0.82699],
      80: [0.18906, 0.69141, 0, 0, 0.82753],
      81: [0.03781, 0.69141, 0, 0, 0.82699],
      82: [0, 0.69141, 0, 0, 0.82807],
      83: [0, 0.69141, 0, 0, 0.82861],
      84: [0, 0.69141, 0, 0, 0.66899],
      85: [0, 0.69141, 0, 0, 0.64576],
      86: [0, 0.69141, 0, 0, 0.83131],
      87: [0, 0.69141, 0, 0, 1.04602],
      88: [0, 0.69141, 0, 0, 0.71922],
      89: [0.18906, 0.69141, 0, 0, 0.83293],
      90: [0.12604, 0.69141, 0, 0, 0.60201],
      91: [0.24982, 0.74947, 0, 0, 0.27764],
      93: [0.24982, 0.74947, 0, 0, 0.27764],
      94: [0, 0.69141, 0, 0, 0.49965],
      97: [0, 0.47534, 0, 0, 0.50046],
      98: [0, 0.69141, 0, 0, 0.51315],
      99: [0, 0.47534, 0, 0, 0.38946],
      100: [0, 0.62119, 0, 0, 0.49857],
      101: [0, 0.47534, 0, 0, 0.40053],
      102: [0.18906, 0.69141, 0, 0, 0.32626],
      103: [0.18906, 0.47534, 0, 0, 0.5037],
      104: [0.18906, 0.69141, 0, 0, 0.52126],
      105: [0, 0.69141, 0, 0, 0.27899],
      106: [0, 0.69141, 0, 0, 0.28088],
      107: [0, 0.69141, 0, 0, 0.38946],
      108: [0, 0.69141, 0, 0, 0.27953],
      109: [0, 0.47534, 0, 0, 0.76676],
      110: [0, 0.47534, 0, 0, 0.52666],
      111: [0, 0.47534, 0, 0, 0.48885],
      112: [0.18906, 0.52396, 0, 0, 0.50046],
      113: [0.18906, 0.47534, 0, 0, 0.48912],
      114: [0, 0.47534, 0, 0, 0.38919],
      115: [0, 0.47534, 0, 0, 0.44266],
      116: [0, 0.62119, 0, 0, 0.33301],
      117: [0, 0.47534, 0, 0, 0.5172],
      118: [0, 0.52396, 0, 0, 0.5118],
      119: [0, 0.52396, 0, 0, 0.77351],
      120: [0.18906, 0.47534, 0, 0, 0.38865],
      121: [0.18906, 0.47534, 0, 0, 0.49884],
      122: [0.18906, 0.47534, 0, 0, 0.39054],
      160: [0, 0, 0, 0, 0.25],
      8216: [0, 0.69141, 0, 0, 0.21471],
      8217: [0, 0.69141, 0, 0, 0.21471],
      58112: [0, 0.62119, 0, 0, 0.49749],
      58113: [0, 0.62119, 0, 0, 0.4983],
      58114: [0.18906, 0.69141, 0, 0, 0.33328],
      58115: [0.18906, 0.69141, 0, 0, 0.32923],
      58116: [0.18906, 0.47534, 0, 0, 0.50343],
      58117: [0, 0.69141, 0, 0, 0.33301],
      58118: [0, 0.62119, 0, 0, 0.33409],
      58119: [0, 0.47534, 0, 0, 0.50073],
    },
    "Main-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.35],
      34: [0, 0.69444, 0, 0, 0.60278],
      35: [0.19444, 0.69444, 0, 0, 0.95833],
      36: [0.05556, 0.75, 0, 0, 0.575],
      37: [0.05556, 0.75, 0, 0, 0.95833],
      38: [0, 0.69444, 0, 0, 0.89444],
      39: [0, 0.69444, 0, 0, 0.31944],
      40: [0.25, 0.75, 0, 0, 0.44722],
      41: [0.25, 0.75, 0, 0, 0.44722],
      42: [0, 0.75, 0, 0, 0.575],
      43: [0.13333, 0.63333, 0, 0, 0.89444],
      44: [0.19444, 0.15556, 0, 0, 0.31944],
      45: [0, 0.44444, 0, 0, 0.38333],
      46: [0, 0.15556, 0, 0, 0.31944],
      47: [0.25, 0.75, 0, 0, 0.575],
      48: [0, 0.64444, 0, 0, 0.575],
      49: [0, 0.64444, 0, 0, 0.575],
      50: [0, 0.64444, 0, 0, 0.575],
      51: [0, 0.64444, 0, 0, 0.575],
      52: [0, 0.64444, 0, 0, 0.575],
      53: [0, 0.64444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0, 0.64444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0, 0.64444, 0, 0, 0.575],
      58: [0, 0.44444, 0, 0, 0.31944],
      59: [0.19444, 0.44444, 0, 0, 0.31944],
      60: [0.08556, 0.58556, 0, 0, 0.89444],
      61: [-0.10889, 0.39111, 0, 0, 0.89444],
      62: [0.08556, 0.58556, 0, 0, 0.89444],
      63: [0, 0.69444, 0, 0, 0.54305],
      64: [0, 0.69444, 0, 0, 0.89444],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0, 0, 0.81805],
      67: [0, 0.68611, 0, 0, 0.83055],
      68: [0, 0.68611, 0, 0, 0.88194],
      69: [0, 0.68611, 0, 0, 0.75555],
      70: [0, 0.68611, 0, 0, 0.72361],
      71: [0, 0.68611, 0, 0, 0.90416],
      72: [0, 0.68611, 0, 0, 0.9],
      73: [0, 0.68611, 0, 0, 0.43611],
      74: [0, 0.68611, 0, 0, 0.59444],
      75: [0, 0.68611, 0, 0, 0.90138],
      76: [0, 0.68611, 0, 0, 0.69166],
      77: [0, 0.68611, 0, 0, 1.09166],
      78: [0, 0.68611, 0, 0, 0.9],
      79: [0, 0.68611, 0, 0, 0.86388],
      80: [0, 0.68611, 0, 0, 0.78611],
      81: [0.19444, 0.68611, 0, 0, 0.86388],
      82: [0, 0.68611, 0, 0, 0.8625],
      83: [0, 0.68611, 0, 0, 0.63889],
      84: [0, 0.68611, 0, 0, 0.8],
      85: [0, 0.68611, 0, 0, 0.88472],
      86: [0, 0.68611, 0.01597, 0, 0.86944],
      87: [0, 0.68611, 0.01597, 0, 1.18888],
      88: [0, 0.68611, 0, 0, 0.86944],
      89: [0, 0.68611, 0.02875, 0, 0.86944],
      90: [0, 0.68611, 0, 0, 0.70277],
      91: [0.25, 0.75, 0, 0, 0.31944],
      92: [0.25, 0.75, 0, 0, 0.575],
      93: [0.25, 0.75, 0, 0, 0.31944],
      94: [0, 0.69444, 0, 0, 0.575],
      95: [0.31, 0.13444, 0.03194, 0, 0.575],
      97: [0, 0.44444, 0, 0, 0.55902],
      98: [0, 0.69444, 0, 0, 0.63889],
      99: [0, 0.44444, 0, 0, 0.51111],
      100: [0, 0.69444, 0, 0, 0.63889],
      101: [0, 0.44444, 0, 0, 0.52708],
      102: [0, 0.69444, 0.10903, 0, 0.35139],
      103: [0.19444, 0.44444, 0.01597, 0, 0.575],
      104: [0, 0.69444, 0, 0, 0.63889],
      105: [0, 0.69444, 0, 0, 0.31944],
      106: [0.19444, 0.69444, 0, 0, 0.35139],
      107: [0, 0.69444, 0, 0, 0.60694],
      108: [0, 0.69444, 0, 0, 0.31944],
      109: [0, 0.44444, 0, 0, 0.95833],
      110: [0, 0.44444, 0, 0, 0.63889],
      111: [0, 0.44444, 0, 0, 0.575],
      112: [0.19444, 0.44444, 0, 0, 0.63889],
      113: [0.19444, 0.44444, 0, 0, 0.60694],
      114: [0, 0.44444, 0, 0, 0.47361],
      115: [0, 0.44444, 0, 0, 0.45361],
      116: [0, 0.63492, 0, 0, 0.44722],
      117: [0, 0.44444, 0, 0, 0.63889],
      118: [0, 0.44444, 0.01597, 0, 0.60694],
      119: [0, 0.44444, 0.01597, 0, 0.83055],
      120: [0, 0.44444, 0, 0, 0.60694],
      121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
      122: [0, 0.44444, 0, 0, 0.51111],
      123: [0.25, 0.75, 0, 0, 0.575],
      124: [0.25, 0.75, 0, 0, 0.31944],
      125: [0.25, 0.75, 0, 0, 0.575],
      126: [0.35, 0.34444, 0, 0, 0.575],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.86853],
      168: [0, 0.69444, 0, 0, 0.575],
      172: [0, 0.44444, 0, 0, 0.76666],
      176: [0, 0.69444, 0, 0, 0.86944],
      177: [0.13333, 0.63333, 0, 0, 0.89444],
      184: [0.17014, 0, 0, 0, 0.51111],
      198: [0, 0.68611, 0, 0, 1.04166],
      215: [0.13333, 0.63333, 0, 0, 0.89444],
      216: [0.04861, 0.73472, 0, 0, 0.89444],
      223: [0, 0.69444, 0, 0, 0.59722],
      230: [0, 0.44444, 0, 0, 0.83055],
      247: [0.13333, 0.63333, 0, 0, 0.89444],
      248: [0.09722, 0.54167, 0, 0, 0.575],
      305: [0, 0.44444, 0, 0, 0.31944],
      338: [0, 0.68611, 0, 0, 1.16944],
      339: [0, 0.44444, 0, 0, 0.89444],
      567: [0.19444, 0.44444, 0, 0, 0.35139],
      710: [0, 0.69444, 0, 0, 0.575],
      711: [0, 0.63194, 0, 0, 0.575],
      713: [0, 0.59611, 0, 0, 0.575],
      714: [0, 0.69444, 0, 0, 0.575],
      715: [0, 0.69444, 0, 0, 0.575],
      728: [0, 0.69444, 0, 0, 0.575],
      729: [0, 0.69444, 0, 0, 0.31944],
      730: [0, 0.69444, 0, 0, 0.86944],
      732: [0, 0.69444, 0, 0, 0.575],
      733: [0, 0.69444, 0, 0, 0.575],
      915: [0, 0.68611, 0, 0, 0.69166],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0, 0, 0.89444],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0, 0, 0.76666],
      928: [0, 0.68611, 0, 0, 0.9],
      931: [0, 0.68611, 0, 0, 0.83055],
      933: [0, 0.68611, 0, 0, 0.89444],
      934: [0, 0.68611, 0, 0, 0.83055],
      936: [0, 0.68611, 0, 0, 0.89444],
      937: [0, 0.68611, 0, 0, 0.83055],
      8211: [0, 0.44444, 0.03194, 0, 0.575],
      8212: [0, 0.44444, 0.03194, 0, 1.14999],
      8216: [0, 0.69444, 0, 0, 0.31944],
      8217: [0, 0.69444, 0, 0, 0.31944],
      8220: [0, 0.69444, 0, 0, 0.60278],
      8221: [0, 0.69444, 0, 0, 0.60278],
      8224: [0.19444, 0.69444, 0, 0, 0.51111],
      8225: [0.19444, 0.69444, 0, 0, 0.51111],
      8242: [0, 0.55556, 0, 0, 0.34444],
      8407: [0, 0.72444, 0.15486, 0, 0.575],
      8463: [0, 0.69444, 0, 0, 0.66759],
      8465: [0, 0.69444, 0, 0, 0.83055],
      8467: [0, 0.69444, 0, 0, 0.47361],
      8472: [0.19444, 0.44444, 0, 0, 0.74027],
      8476: [0, 0.69444, 0, 0, 0.83055],
      8501: [0, 0.69444, 0, 0, 0.70277],
      8592: [-0.10889, 0.39111, 0, 0, 1.14999],
      8593: [0.19444, 0.69444, 0, 0, 0.575],
      8594: [-0.10889, 0.39111, 0, 0, 1.14999],
      8595: [0.19444, 0.69444, 0, 0, 0.575],
      8596: [-0.10889, 0.39111, 0, 0, 1.14999],
      8597: [0.25, 0.75, 0, 0, 0.575],
      8598: [0.19444, 0.69444, 0, 0, 1.14999],
      8599: [0.19444, 0.69444, 0, 0, 1.14999],
      8600: [0.19444, 0.69444, 0, 0, 1.14999],
      8601: [0.19444, 0.69444, 0, 0, 1.14999],
      8636: [-0.10889, 0.39111, 0, 0, 1.14999],
      8637: [-0.10889, 0.39111, 0, 0, 1.14999],
      8640: [-0.10889, 0.39111, 0, 0, 1.14999],
      8641: [-0.10889, 0.39111, 0, 0, 1.14999],
      8656: [-0.10889, 0.39111, 0, 0, 1.14999],
      8657: [0.19444, 0.69444, 0, 0, 0.70277],
      8658: [-0.10889, 0.39111, 0, 0, 1.14999],
      8659: [0.19444, 0.69444, 0, 0, 0.70277],
      8660: [-0.10889, 0.39111, 0, 0, 1.14999],
      8661: [0.25, 0.75, 0, 0, 0.70277],
      8704: [0, 0.69444, 0, 0, 0.63889],
      8706: [0, 0.69444, 0.06389, 0, 0.62847],
      8707: [0, 0.69444, 0, 0, 0.63889],
      8709: [0.05556, 0.75, 0, 0, 0.575],
      8711: [0, 0.68611, 0, 0, 0.95833],
      8712: [0.08556, 0.58556, 0, 0, 0.76666],
      8715: [0.08556, 0.58556, 0, 0, 0.76666],
      8722: [0.13333, 0.63333, 0, 0, 0.89444],
      8723: [0.13333, 0.63333, 0, 0, 0.89444],
      8725: [0.25, 0.75, 0, 0, 0.575],
      8726: [0.25, 0.75, 0, 0, 0.575],
      8727: [-0.02778, 0.47222, 0, 0, 0.575],
      8728: [-0.02639, 0.47361, 0, 0, 0.575],
      8729: [-0.02639, 0.47361, 0, 0, 0.575],
      8730: [0.18, 0.82, 0, 0, 0.95833],
      8733: [0, 0.44444, 0, 0, 0.89444],
      8734: [0, 0.44444, 0, 0, 1.14999],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.31944],
      8741: [0.25, 0.75, 0, 0, 0.575],
      8743: [0, 0.55556, 0, 0, 0.76666],
      8744: [0, 0.55556, 0, 0, 0.76666],
      8745: [0, 0.55556, 0, 0, 0.76666],
      8746: [0, 0.55556, 0, 0, 0.76666],
      8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
      8764: [-0.10889, 0.39111, 0, 0, 0.89444],
      8768: [0.19444, 0.69444, 0, 0, 0.31944],
      8771: [0.00222, 0.50222, 0, 0, 0.89444],
      8773: [0.027, 0.638, 0, 0, 0.894],
      8776: [0.02444, 0.52444, 0, 0, 0.89444],
      8781: [0.00222, 0.50222, 0, 0, 0.89444],
      8801: [0.00222, 0.50222, 0, 0, 0.89444],
      8804: [0.19667, 0.69667, 0, 0, 0.89444],
      8805: [0.19667, 0.69667, 0, 0, 0.89444],
      8810: [0.08556, 0.58556, 0, 0, 1.14999],
      8811: [0.08556, 0.58556, 0, 0, 1.14999],
      8826: [0.08556, 0.58556, 0, 0, 0.89444],
      8827: [0.08556, 0.58556, 0, 0, 0.89444],
      8834: [0.08556, 0.58556, 0, 0, 0.89444],
      8835: [0.08556, 0.58556, 0, 0, 0.89444],
      8838: [0.19667, 0.69667, 0, 0, 0.89444],
      8839: [0.19667, 0.69667, 0, 0, 0.89444],
      8846: [0, 0.55556, 0, 0, 0.76666],
      8849: [0.19667, 0.69667, 0, 0, 0.89444],
      8850: [0.19667, 0.69667, 0, 0, 0.89444],
      8851: [0, 0.55556, 0, 0, 0.76666],
      8852: [0, 0.55556, 0, 0, 0.76666],
      8853: [0.13333, 0.63333, 0, 0, 0.89444],
      8854: [0.13333, 0.63333, 0, 0, 0.89444],
      8855: [0.13333, 0.63333, 0, 0, 0.89444],
      8856: [0.13333, 0.63333, 0, 0, 0.89444],
      8857: [0.13333, 0.63333, 0, 0, 0.89444],
      8866: [0, 0.69444, 0, 0, 0.70277],
      8867: [0, 0.69444, 0, 0, 0.70277],
      8868: [0, 0.69444, 0, 0, 0.89444],
      8869: [0, 0.69444, 0, 0, 0.89444],
      8900: [-0.02639, 0.47361, 0, 0, 0.575],
      8901: [-0.02639, 0.47361, 0, 0, 0.31944],
      8902: [-0.02778, 0.47222, 0, 0, 0.575],
      8968: [0.25, 0.75, 0, 0, 0.51111],
      8969: [0.25, 0.75, 0, 0, 0.51111],
      8970: [0.25, 0.75, 0, 0, 0.51111],
      8971: [0.25, 0.75, 0, 0, 0.51111],
      8994: [-0.13889, 0.36111, 0, 0, 1.14999],
      8995: [-0.13889, 0.36111, 0, 0, 1.14999],
      9651: [0.19444, 0.69444, 0, 0, 1.02222],
      9657: [-0.02778, 0.47222, 0, 0, 0.575],
      9661: [0.19444, 0.69444, 0, 0, 1.02222],
      9667: [-0.02778, 0.47222, 0, 0, 0.575],
      9711: [0.19444, 0.69444, 0, 0, 1.14999],
      9824: [0.12963, 0.69444, 0, 0, 0.89444],
      9825: [0.12963, 0.69444, 0, 0, 0.89444],
      9826: [0.12963, 0.69444, 0, 0, 0.89444],
      9827: [0.12963, 0.69444, 0, 0, 0.89444],
      9837: [0, 0.75, 0, 0, 0.44722],
      9838: [0.19444, 0.69444, 0, 0, 0.44722],
      9839: [0.19444, 0.69444, 0, 0, 0.44722],
      10216: [0.25, 0.75, 0, 0, 0.44722],
      10217: [0.25, 0.75, 0, 0, 0.44722],
      10815: [0, 0.68611, 0, 0, 0.9],
      10927: [0.19667, 0.69667, 0, 0, 0.89444],
      10928: [0.19667, 0.69667, 0, 0, 0.89444],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Main-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.11417, 0, 0.38611],
      34: [0, 0.69444, 0.07939, 0, 0.62055],
      35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
      37: [0.05556, 0.75, 0.12861, 0, 0.94444],
      38: [0, 0.69444, 0.08528, 0, 0.88555],
      39: [0, 0.69444, 0.12945, 0, 0.35555],
      40: [0.25, 0.75, 0.15806, 0, 0.47333],
      41: [0.25, 0.75, 0.03306, 0, 0.47333],
      42: [0, 0.75, 0.14333, 0, 0.59111],
      43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
      44: [0.19444, 0.14722, 0, 0, 0.35555],
      45: [0, 0.44444, 0.02611, 0, 0.41444],
      46: [0, 0.14722, 0, 0, 0.35555],
      47: [0.25, 0.75, 0.15806, 0, 0.59111],
      48: [0, 0.64444, 0.13167, 0, 0.59111],
      49: [0, 0.64444, 0.13167, 0, 0.59111],
      50: [0, 0.64444, 0.13167, 0, 0.59111],
      51: [0, 0.64444, 0.13167, 0, 0.59111],
      52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      53: [0, 0.64444, 0.13167, 0, 0.59111],
      54: [0, 0.64444, 0.13167, 0, 0.59111],
      55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      56: [0, 0.64444, 0.13167, 0, 0.59111],
      57: [0, 0.64444, 0.13167, 0, 0.59111],
      58: [0, 0.44444, 0.06695, 0, 0.35555],
      59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
      61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
      63: [0, 0.69444, 0.11472, 0, 0.59111],
      64: [0, 0.69444, 0.09208, 0, 0.88555],
      65: [0, 0.68611, 0, 0, 0.86555],
      66: [0, 0.68611, 0.0992, 0, 0.81666],
      67: [0, 0.68611, 0.14208, 0, 0.82666],
      68: [0, 0.68611, 0.09062, 0, 0.87555],
      69: [0, 0.68611, 0.11431, 0, 0.75666],
      70: [0, 0.68611, 0.12903, 0, 0.72722],
      71: [0, 0.68611, 0.07347, 0, 0.89527],
      72: [0, 0.68611, 0.17208, 0, 0.8961],
      73: [0, 0.68611, 0.15681, 0, 0.47166],
      74: [0, 0.68611, 0.145, 0, 0.61055],
      75: [0, 0.68611, 0.14208, 0, 0.89499],
      76: [0, 0.68611, 0, 0, 0.69777],
      77: [0, 0.68611, 0.17208, 0, 1.07277],
      78: [0, 0.68611, 0.17208, 0, 0.8961],
      79: [0, 0.68611, 0.09062, 0, 0.85499],
      80: [0, 0.68611, 0.0992, 0, 0.78721],
      81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
      82: [0, 0.68611, 0.02559, 0, 0.85944],
      83: [0, 0.68611, 0.11264, 0, 0.64999],
      84: [0, 0.68611, 0.12903, 0, 0.7961],
      85: [0, 0.68611, 0.17208, 0, 0.88083],
      86: [0, 0.68611, 0.18625, 0, 0.86555],
      87: [0, 0.68611, 0.18625, 0, 1.15999],
      88: [0, 0.68611, 0.15681, 0, 0.86555],
      89: [0, 0.68611, 0.19803, 0, 0.86555],
      90: [0, 0.68611, 0.14208, 0, 0.70888],
      91: [0.25, 0.75, 0.1875, 0, 0.35611],
      93: [0.25, 0.75, 0.09972, 0, 0.35611],
      94: [0, 0.69444, 0.06709, 0, 0.59111],
      95: [0.31, 0.13444, 0.09811, 0, 0.59111],
      97: [0, 0.44444, 0.09426, 0, 0.59111],
      98: [0, 0.69444, 0.07861, 0, 0.53222],
      99: [0, 0.44444, 0.05222, 0, 0.53222],
      100: [0, 0.69444, 0.10861, 0, 0.59111],
      101: [0, 0.44444, 0.085, 0, 0.53222],
      102: [0.19444, 0.69444, 0.21778, 0, 0.4],
      103: [0.19444, 0.44444, 0.105, 0, 0.53222],
      104: [0, 0.69444, 0.09426, 0, 0.59111],
      105: [0, 0.69326, 0.11387, 0, 0.35555],
      106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
      107: [0, 0.69444, 0.11111, 0, 0.53222],
      108: [0, 0.69444, 0.10861, 0, 0.29666],
      109: [0, 0.44444, 0.09426, 0, 0.94444],
      110: [0, 0.44444, 0.09426, 0, 0.64999],
      111: [0, 0.44444, 0.07861, 0, 0.59111],
      112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
      113: [0.19444, 0.44444, 0.105, 0, 0.53222],
      114: [0, 0.44444, 0.11111, 0, 0.50167],
      115: [0, 0.44444, 0.08167, 0, 0.48694],
      116: [0, 0.63492, 0.09639, 0, 0.385],
      117: [0, 0.44444, 0.09426, 0, 0.62055],
      118: [0, 0.44444, 0.11111, 0, 0.53222],
      119: [0, 0.44444, 0.11111, 0, 0.76777],
      120: [0, 0.44444, 0.12583, 0, 0.56055],
      121: [0.19444, 0.44444, 0.105, 0, 0.56166],
      122: [0, 0.44444, 0.13889, 0, 0.49055],
      126: [0.35, 0.34444, 0.11472, 0, 0.59111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0.11473, 0, 0.59111],
      176: [0, 0.69444, 0, 0, 0.94888],
      184: [0.17014, 0, 0, 0, 0.53222],
      198: [0, 0.68611, 0.11431, 0, 1.02277],
      216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
      223: [0.19444, 0.69444, 0.09736, 0, 0.665],
      230: [0, 0.44444, 0.085, 0, 0.82666],
      248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
      305: [0, 0.44444, 0.09426, 0, 0.35555],
      338: [0, 0.68611, 0.11431, 0, 1.14054],
      339: [0, 0.44444, 0.085, 0, 0.82666],
      567: [0.19444, 0.44444, 0.04611, 0, 0.385],
      710: [0, 0.69444, 0.06709, 0, 0.59111],
      711: [0, 0.63194, 0.08271, 0, 0.59111],
      713: [0, 0.59444, 0.10444, 0, 0.59111],
      714: [0, 0.69444, 0.08528, 0, 0.59111],
      715: [0, 0.69444, 0, 0, 0.59111],
      728: [0, 0.69444, 0.10333, 0, 0.59111],
      729: [0, 0.69444, 0.12945, 0, 0.35555],
      730: [0, 0.69444, 0, 0, 0.94888],
      732: [0, 0.69444, 0.11472, 0, 0.59111],
      733: [0, 0.69444, 0.11472, 0, 0.59111],
      915: [0, 0.68611, 0.12903, 0, 0.69777],
      916: [0, 0.68611, 0, 0, 0.94444],
      920: [0, 0.68611, 0.09062, 0, 0.88555],
      923: [0, 0.68611, 0, 0, 0.80666],
      926: [0, 0.68611, 0.15092, 0, 0.76777],
      928: [0, 0.68611, 0.17208, 0, 0.8961],
      931: [0, 0.68611, 0.11431, 0, 0.82666],
      933: [0, 0.68611, 0.10778, 0, 0.88555],
      934: [0, 0.68611, 0.05632, 0, 0.82666],
      936: [0, 0.68611, 0.10778, 0, 0.88555],
      937: [0, 0.68611, 0.0992, 0, 0.82666],
      8211: [0, 0.44444, 0.09811, 0, 0.59111],
      8212: [0, 0.44444, 0.09811, 0, 1.18221],
      8216: [0, 0.69444, 0.12945, 0, 0.35555],
      8217: [0, 0.69444, 0.12945, 0, 0.35555],
      8220: [0, 0.69444, 0.16772, 0, 0.62055],
      8221: [0, 0.69444, 0.07939, 0, 0.62055],
    },
    "Main-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.12417, 0, 0.30667],
      34: [0, 0.69444, 0.06961, 0, 0.51444],
      35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
      37: [0.05556, 0.75, 0.13639, 0, 0.81777],
      38: [0, 0.69444, 0.09694, 0, 0.76666],
      39: [0, 0.69444, 0.12417, 0, 0.30667],
      40: [0.25, 0.75, 0.16194, 0, 0.40889],
      41: [0.25, 0.75, 0.03694, 0, 0.40889],
      42: [0, 0.75, 0.14917, 0, 0.51111],
      43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
      44: [0.19444, 0.10556, 0, 0, 0.30667],
      45: [0, 0.43056, 0.02826, 0, 0.35778],
      46: [0, 0.10556, 0, 0, 0.30667],
      47: [0.25, 0.75, 0.16194, 0, 0.51111],
      48: [0, 0.64444, 0.13556, 0, 0.51111],
      49: [0, 0.64444, 0.13556, 0, 0.51111],
      50: [0, 0.64444, 0.13556, 0, 0.51111],
      51: [0, 0.64444, 0.13556, 0, 0.51111],
      52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      53: [0, 0.64444, 0.13556, 0, 0.51111],
      54: [0, 0.64444, 0.13556, 0, 0.51111],
      55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      56: [0, 0.64444, 0.13556, 0, 0.51111],
      57: [0, 0.64444, 0.13556, 0, 0.51111],
      58: [0, 0.43056, 0.0582, 0, 0.30667],
      59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
      61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
      63: [0, 0.69444, 0.1225, 0, 0.51111],
      64: [0, 0.69444, 0.09597, 0, 0.76666],
      65: [0, 0.68333, 0, 0, 0.74333],
      66: [0, 0.68333, 0.10257, 0, 0.70389],
      67: [0, 0.68333, 0.14528, 0, 0.71555],
      68: [0, 0.68333, 0.09403, 0, 0.755],
      69: [0, 0.68333, 0.12028, 0, 0.67833],
      70: [0, 0.68333, 0.13305, 0, 0.65277],
      71: [0, 0.68333, 0.08722, 0, 0.77361],
      72: [0, 0.68333, 0.16389, 0, 0.74333],
      73: [0, 0.68333, 0.15806, 0, 0.38555],
      74: [0, 0.68333, 0.14028, 0, 0.525],
      75: [0, 0.68333, 0.14528, 0, 0.76888],
      76: [0, 0.68333, 0, 0, 0.62722],
      77: [0, 0.68333, 0.16389, 0, 0.89666],
      78: [0, 0.68333, 0.16389, 0, 0.74333],
      79: [0, 0.68333, 0.09403, 0, 0.76666],
      80: [0, 0.68333, 0.10257, 0, 0.67833],
      81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
      82: [0, 0.68333, 0.03868, 0, 0.72944],
      83: [0, 0.68333, 0.11972, 0, 0.56222],
      84: [0, 0.68333, 0.13305, 0, 0.71555],
      85: [0, 0.68333, 0.16389, 0, 0.74333],
      86: [0, 0.68333, 0.18361, 0, 0.74333],
      87: [0, 0.68333, 0.18361, 0, 0.99888],
      88: [0, 0.68333, 0.15806, 0, 0.74333],
      89: [0, 0.68333, 0.19383, 0, 0.74333],
      90: [0, 0.68333, 0.14528, 0, 0.61333],
      91: [0.25, 0.75, 0.1875, 0, 0.30667],
      93: [0.25, 0.75, 0.10528, 0, 0.30667],
      94: [0, 0.69444, 0.06646, 0, 0.51111],
      95: [0.31, 0.12056, 0.09208, 0, 0.51111],
      97: [0, 0.43056, 0.07671, 0, 0.51111],
      98: [0, 0.69444, 0.06312, 0, 0.46],
      99: [0, 0.43056, 0.05653, 0, 0.46],
      100: [0, 0.69444, 0.10333, 0, 0.51111],
      101: [0, 0.43056, 0.07514, 0, 0.46],
      102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
      103: [0.19444, 0.43056, 0.08847, 0, 0.46],
      104: [0, 0.69444, 0.07671, 0, 0.51111],
      105: [0, 0.65536, 0.1019, 0, 0.30667],
      106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
      107: [0, 0.69444, 0.10764, 0, 0.46],
      108: [0, 0.69444, 0.10333, 0, 0.25555],
      109: [0, 0.43056, 0.07671, 0, 0.81777],
      110: [0, 0.43056, 0.07671, 0, 0.56222],
      111: [0, 0.43056, 0.06312, 0, 0.51111],
      112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
      113: [0.19444, 0.43056, 0.08847, 0, 0.46],
      114: [0, 0.43056, 0.10764, 0, 0.42166],
      115: [0, 0.43056, 0.08208, 0, 0.40889],
      116: [0, 0.61508, 0.09486, 0, 0.33222],
      117: [0, 0.43056, 0.07671, 0, 0.53666],
      118: [0, 0.43056, 0.10764, 0, 0.46],
      119: [0, 0.43056, 0.10764, 0, 0.66444],
      120: [0, 0.43056, 0.12042, 0, 0.46389],
      121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
      122: [0, 0.43056, 0.12292, 0, 0.40889],
      126: [0.35, 0.31786, 0.11585, 0, 0.51111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.66786, 0.10474, 0, 0.51111],
      176: [0, 0.69444, 0, 0, 0.83129],
      184: [0.17014, 0, 0, 0, 0.46],
      198: [0, 0.68333, 0.12028, 0, 0.88277],
      216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
      223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
      230: [0, 0.43056, 0.07514, 0, 0.71555],
      248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
      338: [0, 0.68333, 0.12028, 0, 0.98499],
      339: [0, 0.43056, 0.07514, 0, 0.71555],
      710: [0, 0.69444, 0.06646, 0, 0.51111],
      711: [0, 0.62847, 0.08295, 0, 0.51111],
      713: [0, 0.56167, 0.10333, 0, 0.51111],
      714: [0, 0.69444, 0.09694, 0, 0.51111],
      715: [0, 0.69444, 0, 0, 0.51111],
      728: [0, 0.69444, 0.10806, 0, 0.51111],
      729: [0, 0.66786, 0.11752, 0, 0.30667],
      730: [0, 0.69444, 0, 0, 0.83129],
      732: [0, 0.66786, 0.11585, 0, 0.51111],
      733: [0, 0.69444, 0.1225, 0, 0.51111],
      915: [0, 0.68333, 0.13305, 0, 0.62722],
      916: [0, 0.68333, 0, 0, 0.81777],
      920: [0, 0.68333, 0.09403, 0, 0.76666],
      923: [0, 0.68333, 0, 0, 0.69222],
      926: [0, 0.68333, 0.15294, 0, 0.66444],
      928: [0, 0.68333, 0.16389, 0, 0.74333],
      931: [0, 0.68333, 0.12028, 0, 0.71555],
      933: [0, 0.68333, 0.11111, 0, 0.76666],
      934: [0, 0.68333, 0.05986, 0, 0.71555],
      936: [0, 0.68333, 0.11111, 0, 0.76666],
      937: [0, 0.68333, 0.10257, 0, 0.71555],
      8211: [0, 0.43056, 0.09208, 0, 0.51111],
      8212: [0, 0.43056, 0.09208, 0, 1.02222],
      8216: [0, 0.69444, 0.12417, 0, 0.30667],
      8217: [0, 0.69444, 0.12417, 0, 0.30667],
      8220: [0, 0.69444, 0.1685, 0, 0.51444],
      8221: [0, 0.69444, 0.06961, 0, 0.51444],
      8463: [0, 0.68889, 0, 0, 0.54028],
    },
    "Main-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.27778],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.77778],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.19444, 0.10556, 0, 0, 0.27778],
      45: [0, 0.43056, 0, 0, 0.33333],
      46: [0, 0.10556, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.64444, 0, 0, 0.5],
      49: [0, 0.64444, 0, 0, 0.5],
      50: [0, 0.64444, 0, 0, 0.5],
      51: [0, 0.64444, 0, 0, 0.5],
      52: [0, 0.64444, 0, 0, 0.5],
      53: [0, 0.64444, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0, 0.64444, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0, 0.64444, 0, 0, 0.5],
      58: [0, 0.43056, 0, 0, 0.27778],
      59: [0.19444, 0.43056, 0, 0, 0.27778],
      60: [0.0391, 0.5391, 0, 0, 0.77778],
      61: [-0.13313, 0.36687, 0, 0, 0.77778],
      62: [0.0391, 0.5391, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.77778],
      65: [0, 0.68333, 0, 0, 0.75],
      66: [0, 0.68333, 0, 0, 0.70834],
      67: [0, 0.68333, 0, 0, 0.72222],
      68: [0, 0.68333, 0, 0, 0.76389],
      69: [0, 0.68333, 0, 0, 0.68056],
      70: [0, 0.68333, 0, 0, 0.65278],
      71: [0, 0.68333, 0, 0, 0.78472],
      72: [0, 0.68333, 0, 0, 0.75],
      73: [0, 0.68333, 0, 0, 0.36111],
      74: [0, 0.68333, 0, 0, 0.51389],
      75: [0, 0.68333, 0, 0, 0.77778],
      76: [0, 0.68333, 0, 0, 0.625],
      77: [0, 0.68333, 0, 0, 0.91667],
      78: [0, 0.68333, 0, 0, 0.75],
      79: [0, 0.68333, 0, 0, 0.77778],
      80: [0, 0.68333, 0, 0, 0.68056],
      81: [0.19444, 0.68333, 0, 0, 0.77778],
      82: [0, 0.68333, 0, 0, 0.73611],
      83: [0, 0.68333, 0, 0, 0.55556],
      84: [0, 0.68333, 0, 0, 0.72222],
      85: [0, 0.68333, 0, 0, 0.75],
      86: [0, 0.68333, 0.01389, 0, 0.75],
      87: [0, 0.68333, 0.01389, 0, 1.02778],
      88: [0, 0.68333, 0, 0, 0.75],
      89: [0, 0.68333, 0.025, 0, 0.75],
      90: [0, 0.68333, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.27778],
      92: [0.25, 0.75, 0, 0, 0.5],
      93: [0.25, 0.75, 0, 0, 0.27778],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.31, 0.12056, 0.02778, 0, 0.5],
      97: [0, 0.43056, 0, 0, 0.5],
      98: [0, 0.69444, 0, 0, 0.55556],
      99: [0, 0.43056, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.55556],
      101: [0, 0.43056, 0, 0, 0.44445],
      102: [0, 0.69444, 0.07778, 0, 0.30556],
      103: [0.19444, 0.43056, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.55556],
      105: [0, 0.66786, 0, 0, 0.27778],
      106: [0.19444, 0.66786, 0, 0, 0.30556],
      107: [0, 0.69444, 0, 0, 0.52778],
      108: [0, 0.69444, 0, 0, 0.27778],
      109: [0, 0.43056, 0, 0, 0.83334],
      110: [0, 0.43056, 0, 0, 0.55556],
      111: [0, 0.43056, 0, 0, 0.5],
      112: [0.19444, 0.43056, 0, 0, 0.55556],
      113: [0.19444, 0.43056, 0, 0, 0.52778],
      114: [0, 0.43056, 0, 0, 0.39167],
      115: [0, 0.43056, 0, 0, 0.39445],
      116: [0, 0.61508, 0, 0, 0.38889],
      117: [0, 0.43056, 0, 0, 0.55556],
      118: [0, 0.43056, 0.01389, 0, 0.52778],
      119: [0, 0.43056, 0.01389, 0, 0.72222],
      120: [0, 0.43056, 0, 0, 0.52778],
      121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
      122: [0, 0.43056, 0, 0, 0.44445],
      123: [0.25, 0.75, 0, 0, 0.5],
      124: [0.25, 0.75, 0, 0, 0.27778],
      125: [0.25, 0.75, 0, 0, 0.5],
      126: [0.35, 0.31786, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.76909],
      167: [0.19444, 0.69444, 0, 0, 0.44445],
      168: [0, 0.66786, 0, 0, 0.5],
      172: [0, 0.43056, 0, 0, 0.66667],
      176: [0, 0.69444, 0, 0, 0.75],
      177: [0.08333, 0.58333, 0, 0, 0.77778],
      182: [0.19444, 0.69444, 0, 0, 0.61111],
      184: [0.17014, 0, 0, 0, 0.44445],
      198: [0, 0.68333, 0, 0, 0.90278],
      215: [0.08333, 0.58333, 0, 0, 0.77778],
      216: [0.04861, 0.73194, 0, 0, 0.77778],
      223: [0, 0.69444, 0, 0, 0.5],
      230: [0, 0.43056, 0, 0, 0.72222],
      247: [0.08333, 0.58333, 0, 0, 0.77778],
      248: [0.09722, 0.52778, 0, 0, 0.5],
      305: [0, 0.43056, 0, 0, 0.27778],
      338: [0, 0.68333, 0, 0, 1.01389],
      339: [0, 0.43056, 0, 0, 0.77778],
      567: [0.19444, 0.43056, 0, 0, 0.30556],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.62847, 0, 0, 0.5],
      713: [0, 0.56778, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.66786, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.75],
      732: [0, 0.66786, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.68333, 0, 0, 0.625],
      916: [0, 0.68333, 0, 0, 0.83334],
      920: [0, 0.68333, 0, 0, 0.77778],
      923: [0, 0.68333, 0, 0, 0.69445],
      926: [0, 0.68333, 0, 0, 0.66667],
      928: [0, 0.68333, 0, 0, 0.75],
      931: [0, 0.68333, 0, 0, 0.72222],
      933: [0, 0.68333, 0, 0, 0.77778],
      934: [0, 0.68333, 0, 0, 0.72222],
      936: [0, 0.68333, 0, 0, 0.77778],
      937: [0, 0.68333, 0, 0, 0.72222],
      8211: [0, 0.43056, 0.02778, 0, 0.5],
      8212: [0, 0.43056, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
      8224: [0.19444, 0.69444, 0, 0, 0.44445],
      8225: [0.19444, 0.69444, 0, 0, 0.44445],
      8230: [0, 0.123, 0, 0, 1.172],
      8242: [0, 0.55556, 0, 0, 0.275],
      8407: [0, 0.71444, 0.15382, 0, 0.5],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8465: [0, 0.69444, 0, 0, 0.72222],
      8467: [0, 0.69444, 0, 0.11111, 0.41667],
      8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
      8476: [0, 0.69444, 0, 0, 0.72222],
      8501: [0, 0.69444, 0, 0, 0.61111],
      8592: [-0.13313, 0.36687, 0, 0, 1],
      8593: [0.19444, 0.69444, 0, 0, 0.5],
      8594: [-0.13313, 0.36687, 0, 0, 1],
      8595: [0.19444, 0.69444, 0, 0, 0.5],
      8596: [-0.13313, 0.36687, 0, 0, 1],
      8597: [0.25, 0.75, 0, 0, 0.5],
      8598: [0.19444, 0.69444, 0, 0, 1],
      8599: [0.19444, 0.69444, 0, 0, 1],
      8600: [0.19444, 0.69444, 0, 0, 1],
      8601: [0.19444, 0.69444, 0, 0, 1],
      8614: [0.011, 0.511, 0, 0, 1],
      8617: [0.011, 0.511, 0, 0, 1.126],
      8618: [0.011, 0.511, 0, 0, 1.126],
      8636: [-0.13313, 0.36687, 0, 0, 1],
      8637: [-0.13313, 0.36687, 0, 0, 1],
      8640: [-0.13313, 0.36687, 0, 0, 1],
      8641: [-0.13313, 0.36687, 0, 0, 1],
      8652: [0.011, 0.671, 0, 0, 1],
      8656: [-0.13313, 0.36687, 0, 0, 1],
      8657: [0.19444, 0.69444, 0, 0, 0.61111],
      8658: [-0.13313, 0.36687, 0, 0, 1],
      8659: [0.19444, 0.69444, 0, 0, 0.61111],
      8660: [-0.13313, 0.36687, 0, 0, 1],
      8661: [0.25, 0.75, 0, 0, 0.61111],
      8704: [0, 0.69444, 0, 0, 0.55556],
      8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
      8707: [0, 0.69444, 0, 0, 0.55556],
      8709: [0.05556, 0.75, 0, 0, 0.5],
      8711: [0, 0.68333, 0, 0, 0.83334],
      8712: [0.0391, 0.5391, 0, 0, 0.66667],
      8715: [0.0391, 0.5391, 0, 0, 0.66667],
      8722: [0.08333, 0.58333, 0, 0, 0.77778],
      8723: [0.08333, 0.58333, 0, 0, 0.77778],
      8725: [0.25, 0.75, 0, 0, 0.5],
      8726: [0.25, 0.75, 0, 0, 0.5],
      8727: [-0.03472, 0.46528, 0, 0, 0.5],
      8728: [-0.05555, 0.44445, 0, 0, 0.5],
      8729: [-0.05555, 0.44445, 0, 0, 0.5],
      8730: [0.2, 0.8, 0, 0, 0.83334],
      8733: [0, 0.43056, 0, 0, 0.77778],
      8734: [0, 0.43056, 0, 0, 1],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.27778],
      8741: [0.25, 0.75, 0, 0, 0.5],
      8743: [0, 0.55556, 0, 0, 0.66667],
      8744: [0, 0.55556, 0, 0, 0.66667],
      8745: [0, 0.55556, 0, 0, 0.66667],
      8746: [0, 0.55556, 0, 0, 0.66667],
      8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8768: [0.19444, 0.69444, 0, 0, 0.27778],
      8771: [-0.03625, 0.46375, 0, 0, 0.77778],
      8773: [-0.022, 0.589, 0, 0, 0.778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8781: [-0.03625, 0.46375, 0, 0, 0.77778],
      8784: [-0.133, 0.673, 0, 0, 0.778],
      8801: [-0.03625, 0.46375, 0, 0, 0.77778],
      8804: [0.13597, 0.63597, 0, 0, 0.77778],
      8805: [0.13597, 0.63597, 0, 0, 0.77778],
      8810: [0.0391, 0.5391, 0, 0, 1],
      8811: [0.0391, 0.5391, 0, 0, 1],
      8826: [0.0391, 0.5391, 0, 0, 0.77778],
      8827: [0.0391, 0.5391, 0, 0, 0.77778],
      8834: [0.0391, 0.5391, 0, 0, 0.77778],
      8835: [0.0391, 0.5391, 0, 0, 0.77778],
      8838: [0.13597, 0.63597, 0, 0, 0.77778],
      8839: [0.13597, 0.63597, 0, 0, 0.77778],
      8846: [0, 0.55556, 0, 0, 0.66667],
      8849: [0.13597, 0.63597, 0, 0, 0.77778],
      8850: [0.13597, 0.63597, 0, 0, 0.77778],
      8851: [0, 0.55556, 0, 0, 0.66667],
      8852: [0, 0.55556, 0, 0, 0.66667],
      8853: [0.08333, 0.58333, 0, 0, 0.77778],
      8854: [0.08333, 0.58333, 0, 0, 0.77778],
      8855: [0.08333, 0.58333, 0, 0, 0.77778],
      8856: [0.08333, 0.58333, 0, 0, 0.77778],
      8857: [0.08333, 0.58333, 0, 0, 0.77778],
      8866: [0, 0.69444, 0, 0, 0.61111],
      8867: [0, 0.69444, 0, 0, 0.61111],
      8868: [0, 0.69444, 0, 0, 0.77778],
      8869: [0, 0.69444, 0, 0, 0.77778],
      8872: [0.249, 0.75, 0, 0, 0.867],
      8900: [-0.05555, 0.44445, 0, 0, 0.5],
      8901: [-0.05555, 0.44445, 0, 0, 0.27778],
      8902: [-0.03472, 0.46528, 0, 0, 0.5],
      8904: [0.005, 0.505, 0, 0, 0.9],
      8942: [0.03, 0.903, 0, 0, 0.278],
      8943: [-0.19, 0.313, 0, 0, 1.172],
      8945: [-0.1, 0.823, 0, 0, 1.282],
      8968: [0.25, 0.75, 0, 0, 0.44445],
      8969: [0.25, 0.75, 0, 0, 0.44445],
      8970: [0.25, 0.75, 0, 0, 0.44445],
      8971: [0.25, 0.75, 0, 0, 0.44445],
      8994: [-0.14236, 0.35764, 0, 0, 1],
      8995: [-0.14236, 0.35764, 0, 0, 1],
      9136: [0.244, 0.744, 0, 0, 0.412],
      9137: [0.244, 0.745, 0, 0, 0.412],
      9651: [0.19444, 0.69444, 0, 0, 0.88889],
      9657: [-0.03472, 0.46528, 0, 0, 0.5],
      9661: [0.19444, 0.69444, 0, 0, 0.88889],
      9667: [-0.03472, 0.46528, 0, 0, 0.5],
      9711: [0.19444, 0.69444, 0, 0, 1],
      9824: [0.12963, 0.69444, 0, 0, 0.77778],
      9825: [0.12963, 0.69444, 0, 0, 0.77778],
      9826: [0.12963, 0.69444, 0, 0, 0.77778],
      9827: [0.12963, 0.69444, 0, 0, 0.77778],
      9837: [0, 0.75, 0, 0, 0.38889],
      9838: [0.19444, 0.69444, 0, 0, 0.38889],
      9839: [0.19444, 0.69444, 0, 0, 0.38889],
      10216: [0.25, 0.75, 0, 0, 0.38889],
      10217: [0.25, 0.75, 0, 0, 0.38889],
      10222: [0.244, 0.744, 0, 0, 0.412],
      10223: [0.244, 0.745, 0, 0, 0.412],
      10229: [0.011, 0.511, 0, 0, 1.609],
      10230: [0.011, 0.511, 0, 0, 1.638],
      10231: [0.011, 0.511, 0, 0, 1.859],
      10232: [0.024, 0.525, 0, 0, 1.609],
      10233: [0.024, 0.525, 0, 0, 1.638],
      10234: [0.024, 0.525, 0, 0, 1.858],
      10236: [0.011, 0.511, 0, 0, 1.638],
      10815: [0, 0.68333, 0, 0, 0.75],
      10927: [0.13597, 0.63597, 0, 0, 0.77778],
      10928: [0.13597, 0.63597, 0, 0, 0.77778],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Math-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.44444, 0, 0, 0.575],
      49: [0, 0.44444, 0, 0, 0.575],
      50: [0, 0.44444, 0, 0, 0.575],
      51: [0.19444, 0.44444, 0, 0, 0.575],
      52: [0.19444, 0.44444, 0, 0, 0.575],
      53: [0.19444, 0.44444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0.19444, 0.44444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0.19444, 0.44444, 0, 0, 0.575],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0.04835, 0, 0.8664],
      67: [0, 0.68611, 0.06979, 0, 0.81694],
      68: [0, 0.68611, 0.03194, 0, 0.93812],
      69: [0, 0.68611, 0.05451, 0, 0.81007],
      70: [0, 0.68611, 0.15972, 0, 0.68889],
      71: [0, 0.68611, 0, 0, 0.88673],
      72: [0, 0.68611, 0.08229, 0, 0.98229],
      73: [0, 0.68611, 0.07778, 0, 0.51111],
      74: [0, 0.68611, 0.10069, 0, 0.63125],
      75: [0, 0.68611, 0.06979, 0, 0.97118],
      76: [0, 0.68611, 0, 0, 0.75555],
      77: [0, 0.68611, 0.11424, 0, 1.14201],
      78: [0, 0.68611, 0.11424, 0, 0.95034],
      79: [0, 0.68611, 0.03194, 0, 0.83666],
      80: [0, 0.68611, 0.15972, 0, 0.72309],
      81: [0.19444, 0.68611, 0, 0, 0.86861],
      82: [0, 0.68611, 0.00421, 0, 0.87235],
      83: [0, 0.68611, 0.05382, 0, 0.69271],
      84: [0, 0.68611, 0.15972, 0, 0.63663],
      85: [0, 0.68611, 0.11424, 0, 0.80027],
      86: [0, 0.68611, 0.25555, 0, 0.67778],
      87: [0, 0.68611, 0.15972, 0, 1.09305],
      88: [0, 0.68611, 0.07778, 0, 0.94722],
      89: [0, 0.68611, 0.25555, 0, 0.67458],
      90: [0, 0.68611, 0.06979, 0, 0.77257],
      97: [0, 0.44444, 0, 0, 0.63287],
      98: [0, 0.69444, 0, 0, 0.52083],
      99: [0, 0.44444, 0, 0, 0.51342],
      100: [0, 0.69444, 0, 0, 0.60972],
      101: [0, 0.44444, 0, 0, 0.55361],
      102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
      103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
      104: [0, 0.69444, 0, 0, 0.66759],
      105: [0, 0.69326, 0, 0, 0.4048],
      106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
      107: [0, 0.69444, 0.01852, 0, 0.6037],
      108: [0, 0.69444, 0.0088, 0, 0.34815],
      109: [0, 0.44444, 0, 0, 1.0324],
      110: [0, 0.44444, 0, 0, 0.71296],
      111: [0, 0.44444, 0, 0, 0.58472],
      112: [0.19444, 0.44444, 0, 0, 0.60092],
      113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
      114: [0, 0.44444, 0.03194, 0, 0.5287],
      115: [0, 0.44444, 0, 0, 0.53125],
      116: [0, 0.63492, 0, 0, 0.41528],
      117: [0, 0.44444, 0, 0, 0.68102],
      118: [0, 0.44444, 0.03704, 0, 0.56666],
      119: [0, 0.44444, 0.02778, 0, 0.83148],
      120: [0, 0.44444, 0, 0, 0.65903],
      121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
      122: [0, 0.44444, 0.04213, 0, 0.55509],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68611, 0.15972, 0, 0.65694],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0.03194, 0, 0.86722],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0.07458, 0, 0.84125],
      928: [0, 0.68611, 0.08229, 0, 0.98229],
      931: [0, 0.68611, 0.05451, 0, 0.88507],
      933: [0, 0.68611, 0.15972, 0, 0.67083],
      934: [0, 0.68611, 0, 0, 0.76666],
      936: [0, 0.68611, 0.11653, 0, 0.71402],
      937: [0, 0.68611, 0.04835, 0, 0.8789],
      945: [0, 0.44444, 0, 0, 0.76064],
      946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
      947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
      948: [0, 0.69444, 0.03819, 0, 0.52222],
      949: [0, 0.44444, 0, 0, 0.52882],
      950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
      951: [0.19444, 0.44444, 0.03704, 0, 0.6],
      952: [0, 0.69444, 0.03194, 0, 0.5618],
      953: [0, 0.44444, 0, 0, 0.41204],
      954: [0, 0.44444, 0, 0, 0.66759],
      955: [0, 0.69444, 0, 0, 0.67083],
      956: [0.19444, 0.44444, 0, 0, 0.70787],
      957: [0, 0.44444, 0.06898, 0, 0.57685],
      958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
      959: [0, 0.44444, 0, 0, 0.58472],
      960: [0, 0.44444, 0.03704, 0, 0.68241],
      961: [0.19444, 0.44444, 0, 0, 0.6118],
      962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
      963: [0, 0.44444, 0.03704, 0, 0.68588],
      964: [0, 0.44444, 0.13472, 0, 0.52083],
      965: [0, 0.44444, 0.03704, 0, 0.63055],
      966: [0.19444, 0.44444, 0, 0, 0.74722],
      967: [0.19444, 0.44444, 0, 0, 0.71805],
      968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
      969: [0, 0.44444, 0.03704, 0, 0.71782],
      977: [0, 0.69444, 0, 0, 0.69155],
      981: [0.19444, 0.69444, 0, 0, 0.7125],
      982: [0, 0.44444, 0.03194, 0, 0.975],
      1009: [0.19444, 0.44444, 0, 0, 0.6118],
      1013: [0, 0.44444, 0, 0, 0.48333],
      57649: [0, 0.44444, 0, 0, 0.39352],
      57911: [0.19444, 0.44444, 0, 0, 0.43889],
    },
    "Math-Italic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.43056, 0, 0, 0.5],
      49: [0, 0.43056, 0, 0, 0.5],
      50: [0, 0.43056, 0, 0, 0.5],
      51: [0.19444, 0.43056, 0, 0, 0.5],
      52: [0.19444, 0.43056, 0, 0, 0.5],
      53: [0.19444, 0.43056, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0.19444, 0.43056, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0.19444, 0.43056, 0, 0, 0.5],
      65: [0, 0.68333, 0, 0.13889, 0.75],
      66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
      67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
      68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
      69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
      70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
      71: [0, 0.68333, 0, 0.08334, 0.78625],
      72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
      74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
      75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
      76: [0, 0.68333, 0, 0.02778, 0.68056],
      77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
      78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
      79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
      81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
      82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
      83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
      84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
      85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
      86: [0, 0.68333, 0.22222, 0, 0.58333],
      87: [0, 0.68333, 0.13889, 0, 0.94445],
      88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
      89: [0, 0.68333, 0.22222, 0, 0.58056],
      90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
      97: [0, 0.43056, 0, 0, 0.52859],
      98: [0, 0.69444, 0, 0, 0.42917],
      99: [0, 0.43056, 0, 0.05556, 0.43276],
      100: [0, 0.69444, 0, 0.16667, 0.52049],
      101: [0, 0.43056, 0, 0.05556, 0.46563],
      102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
      103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
      104: [0, 0.69444, 0, 0, 0.57616],
      105: [0, 0.65952, 0, 0, 0.34451],
      106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
      107: [0, 0.69444, 0.03148, 0, 0.5206],
      108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
      109: [0, 0.43056, 0, 0, 0.87801],
      110: [0, 0.43056, 0, 0, 0.60023],
      111: [0, 0.43056, 0, 0.05556, 0.48472],
      112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
      113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
      114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
      115: [0, 0.43056, 0, 0.05556, 0.46875],
      116: [0, 0.61508, 0, 0.08334, 0.36111],
      117: [0, 0.43056, 0, 0.02778, 0.57246],
      118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
      119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
      120: [0, 0.43056, 0, 0.02778, 0.57153],
      121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
      122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
      916: [0, 0.68333, 0, 0.16667, 0.83334],
      920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      923: [0, 0.68333, 0, 0.16667, 0.69445],
      926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
      928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
      933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
      934: [0, 0.68333, 0, 0.08334, 0.66667],
      936: [0, 0.68333, 0.11, 0.05556, 0.61222],
      937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
      945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
      946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
      947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
      948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
      949: [0, 0.43056, 0, 0.08334, 0.46632],
      950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
      951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
      952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
      953: [0, 0.43056, 0, 0.05556, 0.35394],
      954: [0, 0.43056, 0, 0, 0.57616],
      955: [0, 0.69444, 0, 0, 0.58334],
      956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
      957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
      958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
      959: [0, 0.43056, 0, 0.05556, 0.48472],
      960: [0, 0.43056, 0.03588, 0, 0.57003],
      961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
      963: [0, 0.43056, 0.03588, 0, 0.57141],
      964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
      965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
      966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
      967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
      968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
      969: [0, 0.43056, 0.03588, 0, 0.62245],
      977: [0, 0.69444, 0, 0.08334, 0.59144],
      981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
      982: [0, 0.43056, 0.02778, 0, 0.82813],
      1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      1013: [0, 0.43056, 0, 0.05556, 0.4059],
      57649: [0, 0.43056, 0, 0.02778, 0.32246],
      57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
    },
    "SansSerif-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.36667],
      34: [0, 0.69444, 0, 0, 0.55834],
      35: [0.19444, 0.69444, 0, 0, 0.91667],
      36: [0.05556, 0.75, 0, 0, 0.55],
      37: [0.05556, 0.75, 0, 0, 1.02912],
      38: [0, 0.69444, 0, 0, 0.83056],
      39: [0, 0.69444, 0, 0, 0.30556],
      40: [0.25, 0.75, 0, 0, 0.42778],
      41: [0.25, 0.75, 0, 0, 0.42778],
      42: [0, 0.75, 0, 0, 0.55],
      43: [0.11667, 0.61667, 0, 0, 0.85556],
      44: [0.10556, 0.13056, 0, 0, 0.30556],
      45: [0, 0.45833, 0, 0, 0.36667],
      46: [0, 0.13056, 0, 0, 0.30556],
      47: [0.25, 0.75, 0, 0, 0.55],
      48: [0, 0.69444, 0, 0, 0.55],
      49: [0, 0.69444, 0, 0, 0.55],
      50: [0, 0.69444, 0, 0, 0.55],
      51: [0, 0.69444, 0, 0, 0.55],
      52: [0, 0.69444, 0, 0, 0.55],
      53: [0, 0.69444, 0, 0, 0.55],
      54: [0, 0.69444, 0, 0, 0.55],
      55: [0, 0.69444, 0, 0, 0.55],
      56: [0, 0.69444, 0, 0, 0.55],
      57: [0, 0.69444, 0, 0, 0.55],
      58: [0, 0.45833, 0, 0, 0.30556],
      59: [0.10556, 0.45833, 0, 0, 0.30556],
      61: [-0.09375, 0.40625, 0, 0, 0.85556],
      63: [0, 0.69444, 0, 0, 0.51945],
      64: [0, 0.69444, 0, 0, 0.73334],
      65: [0, 0.69444, 0, 0, 0.73334],
      66: [0, 0.69444, 0, 0, 0.73334],
      67: [0, 0.69444, 0, 0, 0.70278],
      68: [0, 0.69444, 0, 0, 0.79445],
      69: [0, 0.69444, 0, 0, 0.64167],
      70: [0, 0.69444, 0, 0, 0.61111],
      71: [0, 0.69444, 0, 0, 0.73334],
      72: [0, 0.69444, 0, 0, 0.79445],
      73: [0, 0.69444, 0, 0, 0.33056],
      74: [0, 0.69444, 0, 0, 0.51945],
      75: [0, 0.69444, 0, 0, 0.76389],
      76: [0, 0.69444, 0, 0, 0.58056],
      77: [0, 0.69444, 0, 0, 0.97778],
      78: [0, 0.69444, 0, 0, 0.79445],
      79: [0, 0.69444, 0, 0, 0.79445],
      80: [0, 0.69444, 0, 0, 0.70278],
      81: [0.10556, 0.69444, 0, 0, 0.79445],
      82: [0, 0.69444, 0, 0, 0.70278],
      83: [0, 0.69444, 0, 0, 0.61111],
      84: [0, 0.69444, 0, 0, 0.73334],
      85: [0, 0.69444, 0, 0, 0.76389],
      86: [0, 0.69444, 0.01528, 0, 0.73334],
      87: [0, 0.69444, 0.01528, 0, 1.03889],
      88: [0, 0.69444, 0, 0, 0.73334],
      89: [0, 0.69444, 0.0275, 0, 0.73334],
      90: [0, 0.69444, 0, 0, 0.67223],
      91: [0.25, 0.75, 0, 0, 0.34306],
      93: [0.25, 0.75, 0, 0, 0.34306],
      94: [0, 0.69444, 0, 0, 0.55],
      95: [0.35, 0.10833, 0.03056, 0, 0.55],
      97: [0, 0.45833, 0, 0, 0.525],
      98: [0, 0.69444, 0, 0, 0.56111],
      99: [0, 0.45833, 0, 0, 0.48889],
      100: [0, 0.69444, 0, 0, 0.56111],
      101: [0, 0.45833, 0, 0, 0.51111],
      102: [0, 0.69444, 0.07639, 0, 0.33611],
      103: [0.19444, 0.45833, 0.01528, 0, 0.55],
      104: [0, 0.69444, 0, 0, 0.56111],
      105: [0, 0.69444, 0, 0, 0.25556],
      106: [0.19444, 0.69444, 0, 0, 0.28611],
      107: [0, 0.69444, 0, 0, 0.53056],
      108: [0, 0.69444, 0, 0, 0.25556],
      109: [0, 0.45833, 0, 0, 0.86667],
      110: [0, 0.45833, 0, 0, 0.56111],
      111: [0, 0.45833, 0, 0, 0.55],
      112: [0.19444, 0.45833, 0, 0, 0.56111],
      113: [0.19444, 0.45833, 0, 0, 0.56111],
      114: [0, 0.45833, 0.01528, 0, 0.37222],
      115: [0, 0.45833, 0, 0, 0.42167],
      116: [0, 0.58929, 0, 0, 0.40417],
      117: [0, 0.45833, 0, 0, 0.56111],
      118: [0, 0.45833, 0.01528, 0, 0.5],
      119: [0, 0.45833, 0.01528, 0, 0.74445],
      120: [0, 0.45833, 0, 0, 0.5],
      121: [0.19444, 0.45833, 0.01528, 0, 0.5],
      122: [0, 0.45833, 0, 0, 0.47639],
      126: [0.35, 0.34444, 0, 0, 0.55],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0, 0, 0.55],
      176: [0, 0.69444, 0, 0, 0.73334],
      180: [0, 0.69444, 0, 0, 0.55],
      184: [0.17014, 0, 0, 0, 0.48889],
      305: [0, 0.45833, 0, 0, 0.25556],
      567: [0.19444, 0.45833, 0, 0, 0.28611],
      710: [0, 0.69444, 0, 0, 0.55],
      711: [0, 0.63542, 0, 0, 0.55],
      713: [0, 0.63778, 0, 0, 0.55],
      728: [0, 0.69444, 0, 0, 0.55],
      729: [0, 0.69444, 0, 0, 0.30556],
      730: [0, 0.69444, 0, 0, 0.73334],
      732: [0, 0.69444, 0, 0, 0.55],
      733: [0, 0.69444, 0, 0, 0.55],
      915: [0, 0.69444, 0, 0, 0.58056],
      916: [0, 0.69444, 0, 0, 0.91667],
      920: [0, 0.69444, 0, 0, 0.85556],
      923: [0, 0.69444, 0, 0, 0.67223],
      926: [0, 0.69444, 0, 0, 0.73334],
      928: [0, 0.69444, 0, 0, 0.79445],
      931: [0, 0.69444, 0, 0, 0.79445],
      933: [0, 0.69444, 0, 0, 0.85556],
      934: [0, 0.69444, 0, 0, 0.79445],
      936: [0, 0.69444, 0, 0, 0.85556],
      937: [0, 0.69444, 0, 0, 0.79445],
      8211: [0, 0.45833, 0.03056, 0, 0.55],
      8212: [0, 0.45833, 0.03056, 0, 1.10001],
      8216: [0, 0.69444, 0, 0, 0.30556],
      8217: [0, 0.69444, 0, 0, 0.30556],
      8220: [0, 0.69444, 0, 0, 0.55834],
      8221: [0, 0.69444, 0, 0, 0.55834],
    },
    "SansSerif-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.05733, 0, 0.31945],
      34: [0, 0.69444, 0.00316, 0, 0.5],
      35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
      36: [0.05556, 0.75, 0.11156, 0, 0.5],
      37: [0.05556, 0.75, 0.03126, 0, 0.83334],
      38: [0, 0.69444, 0.03058, 0, 0.75834],
      39: [0, 0.69444, 0.07816, 0, 0.27778],
      40: [0.25, 0.75, 0.13164, 0, 0.38889],
      41: [0.25, 0.75, 0.02536, 0, 0.38889],
      42: [0, 0.75, 0.11775, 0, 0.5],
      43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0.01946, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0.13164, 0, 0.5],
      48: [0, 0.65556, 0.11156, 0, 0.5],
      49: [0, 0.65556, 0.11156, 0, 0.5],
      50: [0, 0.65556, 0.11156, 0, 0.5],
      51: [0, 0.65556, 0.11156, 0, 0.5],
      52: [0, 0.65556, 0.11156, 0, 0.5],
      53: [0, 0.65556, 0.11156, 0, 0.5],
      54: [0, 0.65556, 0.11156, 0, 0.5],
      55: [0, 0.65556, 0.11156, 0, 0.5],
      56: [0, 0.65556, 0.11156, 0, 0.5],
      57: [0, 0.65556, 0.11156, 0, 0.5],
      58: [0, 0.44444, 0.02502, 0, 0.27778],
      59: [0.125, 0.44444, 0.02502, 0, 0.27778],
      61: [-0.13, 0.37, 0.05087, 0, 0.77778],
      63: [0, 0.69444, 0.11809, 0, 0.47222],
      64: [0, 0.69444, 0.07555, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0.08293, 0, 0.66667],
      67: [0, 0.69444, 0.11983, 0, 0.63889],
      68: [0, 0.69444, 0.07555, 0, 0.72223],
      69: [0, 0.69444, 0.11983, 0, 0.59722],
      70: [0, 0.69444, 0.13372, 0, 0.56945],
      71: [0, 0.69444, 0.11983, 0, 0.66667],
      72: [0, 0.69444, 0.08094, 0, 0.70834],
      73: [0, 0.69444, 0.13372, 0, 0.27778],
      74: [0, 0.69444, 0.08094, 0, 0.47222],
      75: [0, 0.69444, 0.11983, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0.08094, 0, 0.875],
      78: [0, 0.69444, 0.08094, 0, 0.70834],
      79: [0, 0.69444, 0.07555, 0, 0.73611],
      80: [0, 0.69444, 0.08293, 0, 0.63889],
      81: [0.125, 0.69444, 0.07555, 0, 0.73611],
      82: [0, 0.69444, 0.08293, 0, 0.64584],
      83: [0, 0.69444, 0.09205, 0, 0.55556],
      84: [0, 0.69444, 0.13372, 0, 0.68056],
      85: [0, 0.69444, 0.08094, 0, 0.6875],
      86: [0, 0.69444, 0.1615, 0, 0.66667],
      87: [0, 0.69444, 0.1615, 0, 0.94445],
      88: [0, 0.69444, 0.13372, 0, 0.66667],
      89: [0, 0.69444, 0.17261, 0, 0.66667],
      90: [0, 0.69444, 0.11983, 0, 0.61111],
      91: [0.25, 0.75, 0.15942, 0, 0.28889],
      93: [0.25, 0.75, 0.08719, 0, 0.28889],
      94: [0, 0.69444, 0.0799, 0, 0.5],
      95: [0.35, 0.09444, 0.08616, 0, 0.5],
      97: [0, 0.44444, 0.00981, 0, 0.48056],
      98: [0, 0.69444, 0.03057, 0, 0.51667],
      99: [0, 0.44444, 0.08336, 0, 0.44445],
      100: [0, 0.69444, 0.09483, 0, 0.51667],
      101: [0, 0.44444, 0.06778, 0, 0.44445],
      102: [0, 0.69444, 0.21705, 0, 0.30556],
      103: [0.19444, 0.44444, 0.10836, 0, 0.5],
      104: [0, 0.69444, 0.01778, 0, 0.51667],
      105: [0, 0.67937, 0.09718, 0, 0.23889],
      106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
      107: [0, 0.69444, 0.08336, 0, 0.48889],
      108: [0, 0.69444, 0.09483, 0, 0.23889],
      109: [0, 0.44444, 0.01778, 0, 0.79445],
      110: [0, 0.44444, 0.01778, 0, 0.51667],
      111: [0, 0.44444, 0.06613, 0, 0.5],
      112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
      113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
      114: [0, 0.44444, 0.10836, 0, 0.34167],
      115: [0, 0.44444, 0.0778, 0, 0.38333],
      116: [0, 0.57143, 0.07225, 0, 0.36111],
      117: [0, 0.44444, 0.04169, 0, 0.51667],
      118: [0, 0.44444, 0.10836, 0, 0.46111],
      119: [0, 0.44444, 0.10836, 0, 0.68334],
      120: [0, 0.44444, 0.09169, 0, 0.46111],
      121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
      122: [0, 0.44444, 0.08752, 0, 0.43472],
      126: [0.35, 0.32659, 0.08826, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0.06385, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.73752],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0.04169, 0, 0.23889],
      567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
      710: [0, 0.69444, 0.0799, 0, 0.5],
      711: [0, 0.63194, 0.08432, 0, 0.5],
      713: [0, 0.60889, 0.08776, 0, 0.5],
      714: [0, 0.69444, 0.09205, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0.09483, 0, 0.5],
      729: [0, 0.67937, 0.07774, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.73752],
      732: [0, 0.67659, 0.08826, 0, 0.5],
      733: [0, 0.69444, 0.09205, 0, 0.5],
      915: [0, 0.69444, 0.13372, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0.07555, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0.12816, 0, 0.66667],
      928: [0, 0.69444, 0.08094, 0, 0.70834],
      931: [0, 0.69444, 0.11983, 0, 0.72222],
      933: [0, 0.69444, 0.09031, 0, 0.77778],
      934: [0, 0.69444, 0.04603, 0, 0.72222],
      936: [0, 0.69444, 0.09031, 0, 0.77778],
      937: [0, 0.69444, 0.08293, 0, 0.72222],
      8211: [0, 0.44444, 0.08616, 0, 0.5],
      8212: [0, 0.44444, 0.08616, 0, 1],
      8216: [0, 0.69444, 0.07816, 0, 0.27778],
      8217: [0, 0.69444, 0.07816, 0, 0.27778],
      8220: [0, 0.69444, 0.14205, 0, 0.5],
      8221: [0, 0.69444, 0.00316, 0, 0.5],
    },
    "SansSerif-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.31945],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.75834],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.65556, 0, 0, 0.5],
      49: [0, 0.65556, 0, 0, 0.5],
      50: [0, 0.65556, 0, 0, 0.5],
      51: [0, 0.65556, 0, 0, 0.5],
      52: [0, 0.65556, 0, 0, 0.5],
      53: [0, 0.65556, 0, 0, 0.5],
      54: [0, 0.65556, 0, 0, 0.5],
      55: [0, 0.65556, 0, 0, 0.5],
      56: [0, 0.65556, 0, 0, 0.5],
      57: [0, 0.65556, 0, 0, 0.5],
      58: [0, 0.44444, 0, 0, 0.27778],
      59: [0.125, 0.44444, 0, 0, 0.27778],
      61: [-0.13, 0.37, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0, 0, 0.66667],
      67: [0, 0.69444, 0, 0, 0.63889],
      68: [0, 0.69444, 0, 0, 0.72223],
      69: [0, 0.69444, 0, 0, 0.59722],
      70: [0, 0.69444, 0, 0, 0.56945],
      71: [0, 0.69444, 0, 0, 0.66667],
      72: [0, 0.69444, 0, 0, 0.70834],
      73: [0, 0.69444, 0, 0, 0.27778],
      74: [0, 0.69444, 0, 0, 0.47222],
      75: [0, 0.69444, 0, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0, 0, 0.875],
      78: [0, 0.69444, 0, 0, 0.70834],
      79: [0, 0.69444, 0, 0, 0.73611],
      80: [0, 0.69444, 0, 0, 0.63889],
      81: [0.125, 0.69444, 0, 0, 0.73611],
      82: [0, 0.69444, 0, 0, 0.64584],
      83: [0, 0.69444, 0, 0, 0.55556],
      84: [0, 0.69444, 0, 0, 0.68056],
      85: [0, 0.69444, 0, 0, 0.6875],
      86: [0, 0.69444, 0.01389, 0, 0.66667],
      87: [0, 0.69444, 0.01389, 0, 0.94445],
      88: [0, 0.69444, 0, 0, 0.66667],
      89: [0, 0.69444, 0.025, 0, 0.66667],
      90: [0, 0.69444, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.28889],
      93: [0.25, 0.75, 0, 0, 0.28889],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.35, 0.09444, 0.02778, 0, 0.5],
      97: [0, 0.44444, 0, 0, 0.48056],
      98: [0, 0.69444, 0, 0, 0.51667],
      99: [0, 0.44444, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.51667],
      101: [0, 0.44444, 0, 0, 0.44445],
      102: [0, 0.69444, 0.06944, 0, 0.30556],
      103: [0.19444, 0.44444, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.51667],
      105: [0, 0.67937, 0, 0, 0.23889],
      106: [0.19444, 0.67937, 0, 0, 0.26667],
      107: [0, 0.69444, 0, 0, 0.48889],
      108: [0, 0.69444, 0, 0, 0.23889],
      109: [0, 0.44444, 0, 0, 0.79445],
      110: [0, 0.44444, 0, 0, 0.51667],
      111: [0, 0.44444, 0, 0, 0.5],
      112: [0.19444, 0.44444, 0, 0, 0.51667],
      113: [0.19444, 0.44444, 0, 0, 0.51667],
      114: [0, 0.44444, 0.01389, 0, 0.34167],
      115: [0, 0.44444, 0, 0, 0.38333],
      116: [0, 0.57143, 0, 0, 0.36111],
      117: [0, 0.44444, 0, 0, 0.51667],
      118: [0, 0.44444, 0.01389, 0, 0.46111],
      119: [0, 0.44444, 0.01389, 0, 0.68334],
      120: [0, 0.44444, 0, 0, 0.46111],
      121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
      122: [0, 0.44444, 0, 0, 0.43472],
      126: [0.35, 0.32659, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.66667],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0, 0, 0.23889],
      567: [0.19444, 0.44444, 0, 0, 0.26667],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.63194, 0, 0, 0.5],
      713: [0, 0.60889, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.67937, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.66667],
      732: [0, 0.67659, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.69444, 0, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0, 0, 0.66667],
      928: [0, 0.69444, 0, 0, 0.70834],
      931: [0, 0.69444, 0, 0, 0.72222],
      933: [0, 0.69444, 0, 0, 0.77778],
      934: [0, 0.69444, 0, 0, 0.72222],
      936: [0, 0.69444, 0, 0, 0.77778],
      937: [0, 0.69444, 0, 0, 0.72222],
      8211: [0, 0.44444, 0.02778, 0, 0.5],
      8212: [0, 0.44444, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
    },
    "Script-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.7, 0.22925, 0, 0.80253],
      66: [0, 0.7, 0.04087, 0, 0.90757],
      67: [0, 0.7, 0.1689, 0, 0.66619],
      68: [0, 0.7, 0.09371, 0, 0.77443],
      69: [0, 0.7, 0.18583, 0, 0.56162],
      70: [0, 0.7, 0.13634, 0, 0.89544],
      71: [0, 0.7, 0.17322, 0, 0.60961],
      72: [0, 0.7, 0.29694, 0, 0.96919],
      73: [0, 0.7, 0.19189, 0, 0.80907],
      74: [0.27778, 0.7, 0.19189, 0, 1.05159],
      75: [0, 0.7, 0.31259, 0, 0.91364],
      76: [0, 0.7, 0.19189, 0, 0.87373],
      77: [0, 0.7, 0.15981, 0, 1.08031],
      78: [0, 0.7, 0.3525, 0, 0.9015],
      79: [0, 0.7, 0.08078, 0, 0.73787],
      80: [0, 0.7, 0.08078, 0, 1.01262],
      81: [0, 0.7, 0.03305, 0, 0.88282],
      82: [0, 0.7, 0.06259, 0, 0.85],
      83: [0, 0.7, 0.19189, 0, 0.86767],
      84: [0, 0.7, 0.29087, 0, 0.74697],
      85: [0, 0.7, 0.25815, 0, 0.79996],
      86: [0, 0.7, 0.27523, 0, 0.62204],
      87: [0, 0.7, 0.27523, 0, 0.80532],
      88: [0, 0.7, 0.26006, 0, 0.94445],
      89: [0, 0.7, 0.2939, 0, 0.70961],
      90: [0, 0.7, 0.24037, 0, 0.8212],
      160: [0, 0, 0, 0, 0.25],
    },
    "Size1-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.35001, 0.85, 0, 0, 0.45834],
      41: [0.35001, 0.85, 0, 0, 0.45834],
      47: [0.35001, 0.85, 0, 0, 0.57778],
      91: [0.35001, 0.85, 0, 0, 0.41667],
      92: [0.35001, 0.85, 0, 0, 0.57778],
      93: [0.35001, 0.85, 0, 0, 0.41667],
      123: [0.35001, 0.85, 0, 0, 0.58334],
      125: [0.35001, 0.85, 0, 0, 0.58334],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.72222, 0, 0, 0.55556],
      732: [0, 0.72222, 0, 0, 0.55556],
      770: [0, 0.72222, 0, 0, 0.55556],
      771: [0, 0.72222, 0, 0, 0.55556],
      8214: [-99e-5, 0.601, 0, 0, 0.77778],
      8593: [1e-5, 0.6, 0, 0, 0.66667],
      8595: [1e-5, 0.6, 0, 0, 0.66667],
      8657: [1e-5, 0.6, 0, 0, 0.77778],
      8659: [1e-5, 0.6, 0, 0, 0.77778],
      8719: [0.25001, 0.75, 0, 0, 0.94445],
      8720: [0.25001, 0.75, 0, 0, 0.94445],
      8721: [0.25001, 0.75, 0, 0, 1.05556],
      8730: [0.35001, 0.85, 0, 0, 1],
      8739: [-0.00599, 0.606, 0, 0, 0.33333],
      8741: [-0.00599, 0.606, 0, 0, 0.55556],
      8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8748: [0.306, 0.805, 0.19445, 0, 0.47222],
      8749: [0.306, 0.805, 0.19445, 0, 0.47222],
      8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8896: [0.25001, 0.75, 0, 0, 0.83334],
      8897: [0.25001, 0.75, 0, 0, 0.83334],
      8898: [0.25001, 0.75, 0, 0, 0.83334],
      8899: [0.25001, 0.75, 0, 0, 0.83334],
      8968: [0.35001, 0.85, 0, 0, 0.47222],
      8969: [0.35001, 0.85, 0, 0, 0.47222],
      8970: [0.35001, 0.85, 0, 0, 0.47222],
      8971: [0.35001, 0.85, 0, 0, 0.47222],
      9168: [-99e-5, 0.601, 0, 0, 0.66667],
      10216: [0.35001, 0.85, 0, 0, 0.47222],
      10217: [0.35001, 0.85, 0, 0, 0.47222],
      10752: [0.25001, 0.75, 0, 0, 1.11111],
      10753: [0.25001, 0.75, 0, 0, 1.11111],
      10754: [0.25001, 0.75, 0, 0, 1.11111],
      10756: [0.25001, 0.75, 0, 0, 0.83334],
      10758: [0.25001, 0.75, 0, 0, 0.83334],
    },
    "Size2-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.65002, 1.15, 0, 0, 0.59722],
      41: [0.65002, 1.15, 0, 0, 0.59722],
      47: [0.65002, 1.15, 0, 0, 0.81111],
      91: [0.65002, 1.15, 0, 0, 0.47222],
      92: [0.65002, 1.15, 0, 0, 0.81111],
      93: [0.65002, 1.15, 0, 0, 0.47222],
      123: [0.65002, 1.15, 0, 0, 0.66667],
      125: [0.65002, 1.15, 0, 0, 0.66667],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1],
      732: [0, 0.75, 0, 0, 1],
      770: [0, 0.75, 0, 0, 1],
      771: [0, 0.75, 0, 0, 1],
      8719: [0.55001, 1.05, 0, 0, 1.27778],
      8720: [0.55001, 1.05, 0, 0, 1.27778],
      8721: [0.55001, 1.05, 0, 0, 1.44445],
      8730: [0.65002, 1.15, 0, 0, 1],
      8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8748: [0.862, 1.36, 0.44445, 0, 0.55556],
      8749: [0.862, 1.36, 0.44445, 0, 0.55556],
      8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8896: [0.55001, 1.05, 0, 0, 1.11111],
      8897: [0.55001, 1.05, 0, 0, 1.11111],
      8898: [0.55001, 1.05, 0, 0, 1.11111],
      8899: [0.55001, 1.05, 0, 0, 1.11111],
      8968: [0.65002, 1.15, 0, 0, 0.52778],
      8969: [0.65002, 1.15, 0, 0, 0.52778],
      8970: [0.65002, 1.15, 0, 0, 0.52778],
      8971: [0.65002, 1.15, 0, 0, 0.52778],
      10216: [0.65002, 1.15, 0, 0, 0.61111],
      10217: [0.65002, 1.15, 0, 0, 0.61111],
      10752: [0.55001, 1.05, 0, 0, 1.51112],
      10753: [0.55001, 1.05, 0, 0, 1.51112],
      10754: [0.55001, 1.05, 0, 0, 1.51112],
      10756: [0.55001, 1.05, 0, 0, 1.11111],
      10758: [0.55001, 1.05, 0, 0, 1.11111],
    },
    "Size3-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.95003, 1.45, 0, 0, 0.73611],
      41: [0.95003, 1.45, 0, 0, 0.73611],
      47: [0.95003, 1.45, 0, 0, 1.04445],
      91: [0.95003, 1.45, 0, 0, 0.52778],
      92: [0.95003, 1.45, 0, 0, 1.04445],
      93: [0.95003, 1.45, 0, 0, 0.52778],
      123: [0.95003, 1.45, 0, 0, 0.75],
      125: [0.95003, 1.45, 0, 0, 0.75],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1.44445],
      732: [0, 0.75, 0, 0, 1.44445],
      770: [0, 0.75, 0, 0, 1.44445],
      771: [0, 0.75, 0, 0, 1.44445],
      8730: [0.95003, 1.45, 0, 0, 1],
      8968: [0.95003, 1.45, 0, 0, 0.58334],
      8969: [0.95003, 1.45, 0, 0, 0.58334],
      8970: [0.95003, 1.45, 0, 0, 0.58334],
      8971: [0.95003, 1.45, 0, 0, 0.58334],
      10216: [0.95003, 1.45, 0, 0, 0.75],
      10217: [0.95003, 1.45, 0, 0, 0.75],
    },
    "Size4-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [1.25003, 1.75, 0, 0, 0.79167],
      41: [1.25003, 1.75, 0, 0, 0.79167],
      47: [1.25003, 1.75, 0, 0, 1.27778],
      91: [1.25003, 1.75, 0, 0, 0.58334],
      92: [1.25003, 1.75, 0, 0, 1.27778],
      93: [1.25003, 1.75, 0, 0, 0.58334],
      123: [1.25003, 1.75, 0, 0, 0.80556],
      125: [1.25003, 1.75, 0, 0, 0.80556],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.825, 0, 0, 1.8889],
      732: [0, 0.825, 0, 0, 1.8889],
      770: [0, 0.825, 0, 0, 1.8889],
      771: [0, 0.825, 0, 0, 1.8889],
      8730: [1.25003, 1.75, 0, 0, 1],
      8968: [1.25003, 1.75, 0, 0, 0.63889],
      8969: [1.25003, 1.75, 0, 0, 0.63889],
      8970: [1.25003, 1.75, 0, 0, 0.63889],
      8971: [1.25003, 1.75, 0, 0, 0.63889],
      9115: [0.64502, 1.155, 0, 0, 0.875],
      9116: [1e-5, 0.6, 0, 0, 0.875],
      9117: [0.64502, 1.155, 0, 0, 0.875],
      9118: [0.64502, 1.155, 0, 0, 0.875],
      9119: [1e-5, 0.6, 0, 0, 0.875],
      9120: [0.64502, 1.155, 0, 0, 0.875],
      9121: [0.64502, 1.155, 0, 0, 0.66667],
      9122: [-99e-5, 0.601, 0, 0, 0.66667],
      9123: [0.64502, 1.155, 0, 0, 0.66667],
      9124: [0.64502, 1.155, 0, 0, 0.66667],
      9125: [-99e-5, 0.601, 0, 0, 0.66667],
      9126: [0.64502, 1.155, 0, 0, 0.66667],
      9127: [1e-5, 0.9, 0, 0, 0.88889],
      9128: [0.65002, 1.15, 0, 0, 0.88889],
      9129: [0.90001, 0, 0, 0, 0.88889],
      9130: [0, 0.3, 0, 0, 0.88889],
      9131: [1e-5, 0.9, 0, 0, 0.88889],
      9132: [0.65002, 1.15, 0, 0, 0.88889],
      9133: [0.90001, 0, 0, 0, 0.88889],
      9143: [0.88502, 0.915, 0, 0, 1.05556],
      10216: [1.25003, 1.75, 0, 0, 0.80556],
      10217: [1.25003, 1.75, 0, 0, 0.80556],
      57344: [-0.00499, 0.605, 0, 0, 1.05556],
      57345: [-0.00499, 0.605, 0, 0, 1.05556],
      57680: [0, 0.12, 0, 0, 0.45],
      57681: [0, 0.12, 0, 0, 0.45],
      57682: [0, 0.12, 0, 0, 0.45],
      57683: [0, 0.12, 0, 0, 0.45],
    },
    "Typewriter-Regular": {
      32: [0, 0, 0, 0, 0.525],
      33: [0, 0.61111, 0, 0, 0.525],
      34: [0, 0.61111, 0, 0, 0.525],
      35: [0, 0.61111, 0, 0, 0.525],
      36: [0.08333, 0.69444, 0, 0, 0.525],
      37: [0.08333, 0.69444, 0, 0, 0.525],
      38: [0, 0.61111, 0, 0, 0.525],
      39: [0, 0.61111, 0, 0, 0.525],
      40: [0.08333, 0.69444, 0, 0, 0.525],
      41: [0.08333, 0.69444, 0, 0, 0.525],
      42: [0, 0.52083, 0, 0, 0.525],
      43: [-0.08056, 0.53055, 0, 0, 0.525],
      44: [0.13889, 0.125, 0, 0, 0.525],
      45: [-0.08056, 0.53055, 0, 0, 0.525],
      46: [0, 0.125, 0, 0, 0.525],
      47: [0.08333, 0.69444, 0, 0, 0.525],
      48: [0, 0.61111, 0, 0, 0.525],
      49: [0, 0.61111, 0, 0, 0.525],
      50: [0, 0.61111, 0, 0, 0.525],
      51: [0, 0.61111, 0, 0, 0.525],
      52: [0, 0.61111, 0, 0, 0.525],
      53: [0, 0.61111, 0, 0, 0.525],
      54: [0, 0.61111, 0, 0, 0.525],
      55: [0, 0.61111, 0, 0, 0.525],
      56: [0, 0.61111, 0, 0, 0.525],
      57: [0, 0.61111, 0, 0, 0.525],
      58: [0, 0.43056, 0, 0, 0.525],
      59: [0.13889, 0.43056, 0, 0, 0.525],
      60: [-0.05556, 0.55556, 0, 0, 0.525],
      61: [-0.19549, 0.41562, 0, 0, 0.525],
      62: [-0.05556, 0.55556, 0, 0, 0.525],
      63: [0, 0.61111, 0, 0, 0.525],
      64: [0, 0.61111, 0, 0, 0.525],
      65: [0, 0.61111, 0, 0, 0.525],
      66: [0, 0.61111, 0, 0, 0.525],
      67: [0, 0.61111, 0, 0, 0.525],
      68: [0, 0.61111, 0, 0, 0.525],
      69: [0, 0.61111, 0, 0, 0.525],
      70: [0, 0.61111, 0, 0, 0.525],
      71: [0, 0.61111, 0, 0, 0.525],
      72: [0, 0.61111, 0, 0, 0.525],
      73: [0, 0.61111, 0, 0, 0.525],
      74: [0, 0.61111, 0, 0, 0.525],
      75: [0, 0.61111, 0, 0, 0.525],
      76: [0, 0.61111, 0, 0, 0.525],
      77: [0, 0.61111, 0, 0, 0.525],
      78: [0, 0.61111, 0, 0, 0.525],
      79: [0, 0.61111, 0, 0, 0.525],
      80: [0, 0.61111, 0, 0, 0.525],
      81: [0.13889, 0.61111, 0, 0, 0.525],
      82: [0, 0.61111, 0, 0, 0.525],
      83: [0, 0.61111, 0, 0, 0.525],
      84: [0, 0.61111, 0, 0, 0.525],
      85: [0, 0.61111, 0, 0, 0.525],
      86: [0, 0.61111, 0, 0, 0.525],
      87: [0, 0.61111, 0, 0, 0.525],
      88: [0, 0.61111, 0, 0, 0.525],
      89: [0, 0.61111, 0, 0, 0.525],
      90: [0, 0.61111, 0, 0, 0.525],
      91: [0.08333, 0.69444, 0, 0, 0.525],
      92: [0.08333, 0.69444, 0, 0, 0.525],
      93: [0.08333, 0.69444, 0, 0, 0.525],
      94: [0, 0.61111, 0, 0, 0.525],
      95: [0.09514, 0, 0, 0, 0.525],
      96: [0, 0.61111, 0, 0, 0.525],
      97: [0, 0.43056, 0, 0, 0.525],
      98: [0, 0.61111, 0, 0, 0.525],
      99: [0, 0.43056, 0, 0, 0.525],
      100: [0, 0.61111, 0, 0, 0.525],
      101: [0, 0.43056, 0, 0, 0.525],
      102: [0, 0.61111, 0, 0, 0.525],
      103: [0.22222, 0.43056, 0, 0, 0.525],
      104: [0, 0.61111, 0, 0, 0.525],
      105: [0, 0.61111, 0, 0, 0.525],
      106: [0.22222, 0.61111, 0, 0, 0.525],
      107: [0, 0.61111, 0, 0, 0.525],
      108: [0, 0.61111, 0, 0, 0.525],
      109: [0, 0.43056, 0, 0, 0.525],
      110: [0, 0.43056, 0, 0, 0.525],
      111: [0, 0.43056, 0, 0, 0.525],
      112: [0.22222, 0.43056, 0, 0, 0.525],
      113: [0.22222, 0.43056, 0, 0, 0.525],
      114: [0, 0.43056, 0, 0, 0.525],
      115: [0, 0.43056, 0, 0, 0.525],
      116: [0, 0.55358, 0, 0, 0.525],
      117: [0, 0.43056, 0, 0, 0.525],
      118: [0, 0.43056, 0, 0, 0.525],
      119: [0, 0.43056, 0, 0, 0.525],
      120: [0, 0.43056, 0, 0, 0.525],
      121: [0.22222, 0.43056, 0, 0, 0.525],
      122: [0, 0.43056, 0, 0, 0.525],
      123: [0.08333, 0.69444, 0, 0, 0.525],
      124: [0.08333, 0.69444, 0, 0, 0.525],
      125: [0.08333, 0.69444, 0, 0, 0.525],
      126: [0, 0.61111, 0, 0, 0.525],
      127: [0, 0.61111, 0, 0, 0.525],
      160: [0, 0, 0, 0, 0.525],
      176: [0, 0.61111, 0, 0, 0.525],
      184: [0.19445, 0, 0, 0, 0.525],
      305: [0, 0.43056, 0, 0, 0.525],
      567: [0.22222, 0.43056, 0, 0, 0.525],
      711: [0, 0.56597, 0, 0, 0.525],
      713: [0, 0.56555, 0, 0, 0.525],
      714: [0, 0.61111, 0, 0, 0.525],
      715: [0, 0.61111, 0, 0, 0.525],
      728: [0, 0.61111, 0, 0, 0.525],
      730: [0, 0.61111, 0, 0, 0.525],
      770: [0, 0.61111, 0, 0, 0.525],
      771: [0, 0.61111, 0, 0, 0.525],
      776: [0, 0.61111, 0, 0, 0.525],
      915: [0, 0.61111, 0, 0, 0.525],
      916: [0, 0.61111, 0, 0, 0.525],
      920: [0, 0.61111, 0, 0, 0.525],
      923: [0, 0.61111, 0, 0, 0.525],
      926: [0, 0.61111, 0, 0, 0.525],
      928: [0, 0.61111, 0, 0, 0.525],
      931: [0, 0.61111, 0, 0, 0.525],
      933: [0, 0.61111, 0, 0, 0.525],
      934: [0, 0.61111, 0, 0, 0.525],
      936: [0, 0.61111, 0, 0, 0.525],
      937: [0, 0.61111, 0, 0, 0.525],
      8216: [0, 0.61111, 0, 0, 0.525],
      8217: [0, 0.61111, 0, 0, 0.525],
      8242: [0, 0.61111, 0, 0, 0.525],
      9251: [0.11111, 0.21944, 0, 0, 0.525],
    },
  },
  Oe = {
    slant: [0.25, 0.25, 0.25],
    space: [0, 0, 0],
    stretch: [0, 0, 0],
    shrink: [0, 0, 0],
    xHeight: [0.431, 0.431, 0.431],
    quad: [1, 1.171, 1.472],
    extraSpace: [0, 0, 0],
    num1: [0.677, 0.732, 0.925],
    num2: [0.394, 0.384, 0.387],
    num3: [0.444, 0.471, 0.504],
    denom1: [0.686, 0.752, 1.025],
    denom2: [0.345, 0.344, 0.532],
    sup1: [0.413, 0.503, 0.504],
    sup2: [0.363, 0.431, 0.404],
    sup3: [0.289, 0.286, 0.294],
    sub1: [0.15, 0.143, 0.2],
    sub2: [0.247, 0.286, 0.4],
    supDrop: [0.386, 0.353, 0.494],
    subDrop: [0.05, 0.071, 0.1],
    delim1: [2.39, 1.7, 1.98],
    delim2: [1.01, 1.157, 1.42],
    axisHeight: [0.25, 0.25, 0.25],
    defaultRuleThickness: [0.04, 0.049, 0.049],
    bigOpSpacing1: [0.111, 0.111, 0.111],
    bigOpSpacing2: [0.166, 0.166, 0.166],
    bigOpSpacing3: [0.2, 0.2, 0.2],
    bigOpSpacing4: [0.6, 0.611, 0.611],
    bigOpSpacing5: [0.1, 0.143, 0.143],
    sqrtRuleThickness: [0.04, 0.04, 0.04],
    ptPerEm: [10, 10, 10],
    doubleRuleSep: [0.2, 0.2, 0.2],
    arrayRuleWidth: [0.04, 0.04, 0.04],
    fboxsep: [0.3, 0.3, 0.3],
    fboxrule: [0.04, 0.04, 0.04],
  },
  Re = {
    Å: "A",
    Ð: "D",
    Þ: "o",
    å: "a",
    ð: "d",
    þ: "o",
    А: "A",
    Б: "B",
    В: "B",
    Г: "F",
    Д: "A",
    Е: "E",
    Ж: "K",
    З: "3",
    И: "N",
    Й: "N",
    К: "K",
    Л: "N",
    М: "M",
    Н: "H",
    О: "O",
    П: "N",
    Р: "P",
    С: "C",
    Т: "T",
    У: "y",
    Ф: "O",
    Х: "X",
    Ц: "U",
    Ч: "h",
    Ш: "W",
    Щ: "W",
    Ъ: "B",
    Ы: "X",
    Ь: "B",
    Э: "3",
    Ю: "X",
    Я: "R",
    а: "a",
    б: "b",
    в: "a",
    г: "r",
    д: "y",
    е: "e",
    ж: "m",
    з: "e",
    и: "n",
    й: "n",
    к: "n",
    л: "n",
    м: "m",
    н: "n",
    о: "o",
    п: "n",
    р: "p",
    с: "c",
    т: "o",
    у: "y",
    ф: "b",
    х: "x",
    ц: "n",
    ч: "n",
    ш: "w",
    щ: "w",
    ъ: "a",
    ы: "m",
    ь: "a",
    э: "e",
    ю: "m",
    я: "r",
  };
function Me(e, t, n) {
  if (!Ae[t]) throw new Error("Font metrics not found for font: " + t + ".");
  var r = e.charCodeAt(0),
    o = Ae[t][r];
  if (
    (!o && e[0] in Re && ((r = Re[e[0]].charCodeAt(0)), (o = Ae[t][r])),
    o || "text" !== n || (ae(r) && (o = Ae[t][77])),
    o)
  )
    return {
      depth: o[0],
      height: o[1],
      italic: o[2],
      skew: o[3],
      width: o[4],
    };
}
var Pe = {},
  Ne = { math: {}, text: {} };
function De(e, t, n, r, o, i) {
  (Ne[e][o] = { font: t, group: n, replace: r }),
    i && r && (Ne[e][r] = Ne[e][o]);
}
var je = "math",
  Le = "text",
  Fe = "main",
  Ue = "ams",
  Be = "accent-token",
  ze = "bin",
  He = "close",
  Ve = "inner",
  qe = "mathord",
  Ge = "op-token",
  We = "open",
  $e = "punct",
  Ye = "rel",
  Ke = "spacing",
  Ze = "textord";
De(je, Fe, Ye, "≡", "\\equiv", !0),
  De(je, Fe, Ye, "≺", "\\prec", !0),
  De(je, Fe, Ye, "≻", "\\succ", !0),
  De(je, Fe, Ye, "∼", "\\sim", !0),
  De(je, Fe, Ye, "⊥", "\\perp"),
  De(je, Fe, Ye, "⪯", "\\preceq", !0),
  De(je, Fe, Ye, "⪰", "\\succeq", !0),
  De(je, Fe, Ye, "≃", "\\simeq", !0),
  De(je, Fe, Ye, "∣", "\\mid", !0),
  De(je, Fe, Ye, "≪", "\\ll", !0),
  De(je, Fe, Ye, "≫", "\\gg", !0),
  De(je, Fe, Ye, "≍", "\\asymp", !0),
  De(je, Fe, Ye, "∥", "\\parallel"),
  De(je, Fe, Ye, "⋈", "\\bowtie", !0),
  De(je, Fe, Ye, "⌣", "\\smile", !0),
  De(je, Fe, Ye, "⊑", "\\sqsubseteq", !0),
  De(je, Fe, Ye, "⊒", "\\sqsupseteq", !0),
  De(je, Fe, Ye, "≐", "\\doteq", !0),
  De(je, Fe, Ye, "⌢", "\\frown", !0),
  De(je, Fe, Ye, "∋", "\\ni", !0),
  De(je, Fe, Ye, "∝", "\\propto", !0),
  De(je, Fe, Ye, "⊢", "\\vdash", !0),
  De(je, Fe, Ye, "⊣", "\\dashv", !0),
  De(je, Fe, Ye, "∋", "\\owns"),
  De(je, Fe, $e, ".", "\\ldotp"),
  De(je, Fe, $e, "⋅", "\\cdotp"),
  De(je, Fe, $e, "⋅", "·"),
  De(Le, Fe, Ze, "⋅", "·"),
  De(je, Fe, Ze, "#", "\\#"),
  De(Le, Fe, Ze, "#", "\\#"),
  De(je, Fe, Ze, "&", "\\&"),
  De(Le, Fe, Ze, "&", "\\&"),
  De(je, Fe, Ze, "ℵ", "\\aleph", !0),
  De(je, Fe, Ze, "∀", "\\forall", !0),
  De(je, Fe, Ze, "ℏ", "\\hbar", !0),
  De(je, Fe, Ze, "∃", "\\exists", !0),
  De(je, Fe, Ze, "∇", "\\nabla", !0),
  De(je, Fe, Ze, "♭", "\\flat", !0),
  De(je, Fe, Ze, "ℓ", "\\ell", !0),
  De(je, Fe, Ze, "♮", "\\natural", !0),
  De(je, Fe, Ze, "♣", "\\clubsuit", !0),
  De(je, Fe, Ze, "℘", "\\wp", !0),
  De(je, Fe, Ze, "♯", "\\sharp", !0),
  De(je, Fe, Ze, "♢", "\\diamondsuit", !0),
  De(je, Fe, Ze, "ℜ", "\\Re", !0),
  De(je, Fe, Ze, "♡", "\\heartsuit", !0),
  De(je, Fe, Ze, "ℑ", "\\Im", !0),
  De(je, Fe, Ze, "♠", "\\spadesuit", !0),
  De(je, Fe, Ze, "§", "\\S", !0),
  De(Le, Fe, Ze, "§", "\\S"),
  De(je, Fe, Ze, "¶", "\\P", !0),
  De(Le, Fe, Ze, "¶", "\\P"),
  De(je, Fe, Ze, "†", "\\dag"),
  De(Le, Fe, Ze, "†", "\\dag"),
  De(Le, Fe, Ze, "†", "\\textdagger"),
  De(je, Fe, Ze, "‡", "\\ddag"),
  De(Le, Fe, Ze, "‡", "\\ddag"),
  De(Le, Fe, Ze, "‡", "\\textdaggerdbl"),
  De(je, Fe, He, "⎱", "\\rmoustache", !0),
  De(je, Fe, We, "⎰", "\\lmoustache", !0),
  De(je, Fe, He, "⟯", "\\rgroup", !0),
  De(je, Fe, We, "⟮", "\\lgroup", !0),
  De(je, Fe, ze, "∓", "\\mp", !0),
  De(je, Fe, ze, "⊖", "\\ominus", !0),
  De(je, Fe, ze, "⊎", "\\uplus", !0),
  De(je, Fe, ze, "⊓", "\\sqcap", !0),
  De(je, Fe, ze, "∗", "\\ast"),
  De(je, Fe, ze, "⊔", "\\sqcup", !0),
  De(je, Fe, ze, "◯", "\\bigcirc", !0),
  De(je, Fe, ze, "∙", "\\bullet", !0),
  De(je, Fe, ze, "‡", "\\ddagger"),
  De(je, Fe, ze, "≀", "\\wr", !0),
  De(je, Fe, ze, "⨿", "\\amalg"),
  De(je, Fe, ze, "&", "\\And"),
  De(je, Fe, Ye, "⟵", "\\longleftarrow", !0),
  De(je, Fe, Ye, "⇐", "\\Leftarrow", !0),
  De(je, Fe, Ye, "⟸", "\\Longleftarrow", !0),
  De(je, Fe, Ye, "⟶", "\\longrightarrow", !0),
  De(je, Fe, Ye, "⇒", "\\Rightarrow", !0),
  De(je, Fe, Ye, "⟹", "\\Longrightarrow", !0),
  De(je, Fe, Ye, "↔", "\\leftrightarrow", !0),
  De(je, Fe, Ye, "⟷", "\\longleftrightarrow", !0),
  De(je, Fe, Ye, "⇔", "\\Leftrightarrow", !0),
  De(je, Fe, Ye, "⟺", "\\Longleftrightarrow", !0),
  De(je, Fe, Ye, "↦", "\\mapsto", !0),
  De(je, Fe, Ye, "⟼", "\\longmapsto", !0),
  De(je, Fe, Ye, "↗", "\\nearrow", !0),
  De(je, Fe, Ye, "↩", "\\hookleftarrow", !0),
  De(je, Fe, Ye, "↪", "\\hookrightarrow", !0),
  De(je, Fe, Ye, "↘", "\\searrow", !0),
  De(je, Fe, Ye, "↼", "\\leftharpoonup", !0),
  De(je, Fe, Ye, "⇀", "\\rightharpoonup", !0),
  De(je, Fe, Ye, "↙", "\\swarrow", !0),
  De(je, Fe, Ye, "↽", "\\leftharpoondown", !0),
  De(je, Fe, Ye, "⇁", "\\rightharpoondown", !0),
  De(je, Fe, Ye, "↖", "\\nwarrow", !0),
  De(je, Fe, Ye, "⇌", "\\rightleftharpoons", !0),
  De(je, Ue, Ye, "≮", "\\nless", !0),
  De(je, Ue, Ye, "", "\\@nleqslant"),
  De(je, Ue, Ye, "", "\\@nleqq"),
  De(je, Ue, Ye, "⪇", "\\lneq", !0),
  De(je, Ue, Ye, "≨", "\\lneqq", !0),
  De(je, Ue, Ye, "", "\\@lvertneqq"),
  De(je, Ue, Ye, "⋦", "\\lnsim", !0),
  De(je, Ue, Ye, "⪉", "\\lnapprox", !0),
  De(je, Ue, Ye, "⊀", "\\nprec", !0),
  De(je, Ue, Ye, "⋠", "\\npreceq", !0),
  De(je, Ue, Ye, "⋨", "\\precnsim", !0),
  De(je, Ue, Ye, "⪹", "\\precnapprox", !0),
  De(je, Ue, Ye, "≁", "\\nsim", !0),
  De(je, Ue, Ye, "", "\\@nshortmid"),
  De(je, Ue, Ye, "∤", "\\nmid", !0),
  De(je, Ue, Ye, "⊬", "\\nvdash", !0),
  De(je, Ue, Ye, "⊭", "\\nvDash", !0),
  De(je, Ue, Ye, "⋪", "\\ntriangleleft"),
  De(je, Ue, Ye, "⋬", "\\ntrianglelefteq", !0),
  De(je, Ue, Ye, "⊊", "\\subsetneq", !0),
  De(je, Ue, Ye, "", "\\@varsubsetneq"),
  De(je, Ue, Ye, "⫋", "\\subsetneqq", !0),
  De(je, Ue, Ye, "", "\\@varsubsetneqq"),
  De(je, Ue, Ye, "≯", "\\ngtr", !0),
  De(je, Ue, Ye, "", "\\@ngeqslant"),
  De(je, Ue, Ye, "", "\\@ngeqq"),
  De(je, Ue, Ye, "⪈", "\\gneq", !0),
  De(je, Ue, Ye, "≩", "\\gneqq", !0),
  De(je, Ue, Ye, "", "\\@gvertneqq"),
  De(je, Ue, Ye, "⋧", "\\gnsim", !0),
  De(je, Ue, Ye, "⪊", "\\gnapprox", !0),
  De(je, Ue, Ye, "⊁", "\\nsucc", !0),
  De(je, Ue, Ye, "⋡", "\\nsucceq", !0),
  De(je, Ue, Ye, "⋩", "\\succnsim", !0),
  De(je, Ue, Ye, "⪺", "\\succnapprox", !0),
  De(je, Ue, Ye, "≆", "\\ncong", !0),
  De(je, Ue, Ye, "", "\\@nshortparallel"),
  De(je, Ue, Ye, "∦", "\\nparallel", !0),
  De(je, Ue, Ye, "⊯", "\\nVDash", !0),
  De(je, Ue, Ye, "⋫", "\\ntriangleright"),
  De(je, Ue, Ye, "⋭", "\\ntrianglerighteq", !0),
  De(je, Ue, Ye, "", "\\@nsupseteqq"),
  De(je, Ue, Ye, "⊋", "\\supsetneq", !0),
  De(je, Ue, Ye, "", "\\@varsupsetneq"),
  De(je, Ue, Ye, "⫌", "\\supsetneqq", !0),
  De(je, Ue, Ye, "", "\\@varsupsetneqq"),
  De(je, Ue, Ye, "⊮", "\\nVdash", !0),
  De(je, Ue, Ye, "⪵", "\\precneqq", !0),
  De(je, Ue, Ye, "⪶", "\\succneqq", !0),
  De(je, Ue, Ye, "", "\\@nsubseteqq"),
  De(je, Ue, ze, "⊴", "\\unlhd"),
  De(je, Ue, ze, "⊵", "\\unrhd"),
  De(je, Ue, Ye, "↚", "\\nleftarrow", !0),
  De(je, Ue, Ye, "↛", "\\nrightarrow", !0),
  De(je, Ue, Ye, "⇍", "\\nLeftarrow", !0),
  De(je, Ue, Ye, "⇏", "\\nRightarrow", !0),
  De(je, Ue, Ye, "↮", "\\nleftrightarrow", !0),
  De(je, Ue, Ye, "⇎", "\\nLeftrightarrow", !0),
  De(je, Ue, Ye, "△", "\\vartriangle"),
  De(je, Ue, Ze, "ℏ", "\\hslash"),
  De(je, Ue, Ze, "▽", "\\triangledown"),
  De(je, Ue, Ze, "◊", "\\lozenge"),
  De(je, Ue, Ze, "Ⓢ", "\\circledS"),
  De(je, Ue, Ze, "®", "\\circledR"),
  De(Le, Ue, Ze, "®", "\\circledR"),
  De(je, Ue, Ze, "∡", "\\measuredangle", !0),
  De(je, Ue, Ze, "∄", "\\nexists"),
  De(je, Ue, Ze, "℧", "\\mho"),
  De(je, Ue, Ze, "Ⅎ", "\\Finv", !0),
  De(je, Ue, Ze, "⅁", "\\Game", !0),
  De(je, Ue, Ze, "‵", "\\backprime"),
  De(je, Ue, Ze, "▲", "\\blacktriangle"),
  De(je, Ue, Ze, "▼", "\\blacktriangledown"),
  De(je, Ue, Ze, "■", "\\blacksquare"),
  De(je, Ue, Ze, "⧫", "\\blacklozenge"),
  De(je, Ue, Ze, "★", "\\bigstar"),
  De(je, Ue, Ze, "∢", "\\sphericalangle", !0),
  De(je, Ue, Ze, "∁", "\\complement", !0),
  De(je, Ue, Ze, "ð", "\\eth", !0),
  De(Le, Fe, Ze, "ð", "ð"),
  De(je, Ue, Ze, "╱", "\\diagup"),
  De(je, Ue, Ze, "╲", "\\diagdown"),
  De(je, Ue, Ze, "□", "\\square"),
  De(je, Ue, Ze, "□", "\\Box"),
  De(je, Ue, Ze, "◊", "\\Diamond"),
  De(je, Ue, Ze, "¥", "\\yen", !0),
  De(Le, Ue, Ze, "¥", "\\yen", !0),
  De(je, Ue, Ze, "✓", "\\checkmark", !0),
  De(Le, Ue, Ze, "✓", "\\checkmark"),
  De(je, Ue, Ze, "ℶ", "\\beth", !0),
  De(je, Ue, Ze, "ℸ", "\\daleth", !0),
  De(je, Ue, Ze, "ℷ", "\\gimel", !0),
  De(je, Ue, Ze, "ϝ", "\\digamma", !0),
  De(je, Ue, Ze, "ϰ", "\\varkappa"),
  De(je, Ue, We, "┌", "\\@ulcorner", !0),
  De(je, Ue, He, "┐", "\\@urcorner", !0),
  De(je, Ue, We, "└", "\\@llcorner", !0),
  De(je, Ue, He, "┘", "\\@lrcorner", !0),
  De(je, Ue, Ye, "≦", "\\leqq", !0),
  De(je, Ue, Ye, "⩽", "\\leqslant", !0),
  De(je, Ue, Ye, "⪕", "\\eqslantless", !0),
  De(je, Ue, Ye, "≲", "\\lesssim", !0),
  De(je, Ue, Ye, "⪅", "\\lessapprox", !0),
  De(je, Ue, Ye, "≊", "\\approxeq", !0),
  De(je, Ue, ze, "⋖", "\\lessdot"),
  De(je, Ue, Ye, "⋘", "\\lll", !0),
  De(je, Ue, Ye, "≶", "\\lessgtr", !0),
  De(je, Ue, Ye, "⋚", "\\lesseqgtr", !0),
  De(je, Ue, Ye, "⪋", "\\lesseqqgtr", !0),
  De(je, Ue, Ye, "≑", "\\doteqdot"),
  De(je, Ue, Ye, "≓", "\\risingdotseq", !0),
  De(je, Ue, Ye, "≒", "\\fallingdotseq", !0),
  De(je, Ue, Ye, "∽", "\\backsim", !0),
  De(je, Ue, Ye, "⋍", "\\backsimeq", !0),
  De(je, Ue, Ye, "⫅", "\\subseteqq", !0),
  De(je, Ue, Ye, "⋐", "\\Subset", !0),
  De(je, Ue, Ye, "⊏", "\\sqsubset", !0),
  De(je, Ue, Ye, "≼", "\\preccurlyeq", !0),
  De(je, Ue, Ye, "⋞", "\\curlyeqprec", !0),
  De(je, Ue, Ye, "≾", "\\precsim", !0),
  De(je, Ue, Ye, "⪷", "\\precapprox", !0),
  De(je, Ue, Ye, "⊲", "\\vartriangleleft"),
  De(je, Ue, Ye, "⊴", "\\trianglelefteq"),
  De(je, Ue, Ye, "⊨", "\\vDash", !0),
  De(je, Ue, Ye, "⊪", "\\Vvdash", !0),
  De(je, Ue, Ye, "⌣", "\\smallsmile"),
  De(je, Ue, Ye, "⌢", "\\smallfrown"),
  De(je, Ue, Ye, "≏", "\\bumpeq", !0),
  De(je, Ue, Ye, "≎", "\\Bumpeq", !0),
  De(je, Ue, Ye, "≧", "\\geqq", !0),
  De(je, Ue, Ye, "⩾", "\\geqslant", !0),
  De(je, Ue, Ye, "⪖", "\\eqslantgtr", !0),
  De(je, Ue, Ye, "≳", "\\gtrsim", !0),
  De(je, Ue, Ye, "⪆", "\\gtrapprox", !0),
  De(je, Ue, ze, "⋗", "\\gtrdot"),
  De(je, Ue, Ye, "⋙", "\\ggg", !0),
  De(je, Ue, Ye, "≷", "\\gtrless", !0),
  De(je, Ue, Ye, "⋛", "\\gtreqless", !0),
  De(je, Ue, Ye, "⪌", "\\gtreqqless", !0),
  De(je, Ue, Ye, "≖", "\\eqcirc", !0),
  De(je, Ue, Ye, "≗", "\\circeq", !0),
  De(je, Ue, Ye, "≜", "\\triangleq", !0),
  De(je, Ue, Ye, "∼", "\\thicksim"),
  De(je, Ue, Ye, "≈", "\\thickapprox"),
  De(je, Ue, Ye, "⫆", "\\supseteqq", !0),
  De(je, Ue, Ye, "⋑", "\\Supset", !0),
  De(je, Ue, Ye, "⊐", "\\sqsupset", !0),
  De(je, Ue, Ye, "≽", "\\succcurlyeq", !0),
  De(je, Ue, Ye, "⋟", "\\curlyeqsucc", !0),
  De(je, Ue, Ye, "≿", "\\succsim", !0),
  De(je, Ue, Ye, "⪸", "\\succapprox", !0),
  De(je, Ue, Ye, "⊳", "\\vartriangleright"),
  De(je, Ue, Ye, "⊵", "\\trianglerighteq"),
  De(je, Ue, Ye, "⊩", "\\Vdash", !0),
  De(je, Ue, Ye, "∣", "\\shortmid"),
  De(je, Ue, Ye, "∥", "\\shortparallel"),
  De(je, Ue, Ye, "≬", "\\between", !0),
  De(je, Ue, Ye, "⋔", "\\pitchfork", !0),
  De(je, Ue, Ye, "∝", "\\varpropto"),
  De(je, Ue, Ye, "◀", "\\blacktriangleleft"),
  De(je, Ue, Ye, "∴", "\\therefore", !0),
  De(je, Ue, Ye, "∍", "\\backepsilon"),
  De(je, Ue, Ye, "▶", "\\blacktriangleright"),
  De(je, Ue, Ye, "∵", "\\because", !0),
  De(je, Ue, Ye, "⋘", "\\llless"),
  De(je, Ue, Ye, "⋙", "\\gggtr"),
  De(je, Ue, ze, "⊲", "\\lhd"),
  De(je, Ue, ze, "⊳", "\\rhd"),
  De(je, Ue, Ye, "≂", "\\eqsim", !0),
  De(je, Fe, Ye, "⋈", "\\Join"),
  De(je, Ue, Ye, "≑", "\\Doteq", !0),
  De(je, Ue, ze, "∔", "\\dotplus", !0),
  De(je, Ue, ze, "∖", "\\smallsetminus"),
  De(je, Ue, ze, "⋒", "\\Cap", !0),
  De(je, Ue, ze, "⋓", "\\Cup", !0),
  De(je, Ue, ze, "⩞", "\\doublebarwedge", !0),
  De(je, Ue, ze, "⊟", "\\boxminus", !0),
  De(je, Ue, ze, "⊞", "\\boxplus", !0),
  De(je, Ue, ze, "⋇", "\\divideontimes", !0),
  De(je, Ue, ze, "⋉", "\\ltimes", !0),
  De(je, Ue, ze, "⋊", "\\rtimes", !0),
  De(je, Ue, ze, "⋋", "\\leftthreetimes", !0),
  De(je, Ue, ze, "⋌", "\\rightthreetimes", !0),
  De(je, Ue, ze, "⋏", "\\curlywedge", !0),
  De(je, Ue, ze, "⋎", "\\curlyvee", !0),
  De(je, Ue, ze, "⊝", "\\circleddash", !0),
  De(je, Ue, ze, "⊛", "\\circledast", !0),
  De(je, Ue, ze, "⋅", "\\centerdot"),
  De(je, Ue, ze, "⊺", "\\intercal", !0),
  De(je, Ue, ze, "⋒", "\\doublecap"),
  De(je, Ue, ze, "⋓", "\\doublecup"),
  De(je, Ue, ze, "⊠", "\\boxtimes", !0),
  De(je, Ue, Ye, "⇢", "\\dashrightarrow", !0),
  De(je, Ue, Ye, "⇠", "\\dashleftarrow", !0),
  De(je, Ue, Ye, "⇇", "\\leftleftarrows", !0),
  De(je, Ue, Ye, "⇆", "\\leftrightarrows", !0),
  De(je, Ue, Ye, "⇚", "\\Lleftarrow", !0),
  De(je, Ue, Ye, "↞", "\\twoheadleftarrow", !0),
  De(je, Ue, Ye, "↢", "\\leftarrowtail", !0),
  De(je, Ue, Ye, "↫", "\\looparrowleft", !0),
  De(je, Ue, Ye, "⇋", "\\leftrightharpoons", !0),
  De(je, Ue, Ye, "↶", "\\curvearrowleft", !0),
  De(je, Ue, Ye, "↺", "\\circlearrowleft", !0),
  De(je, Ue, Ye, "↰", "\\Lsh", !0),
  De(je, Ue, Ye, "⇈", "\\upuparrows", !0),
  De(je, Ue, Ye, "↿", "\\upharpoonleft", !0),
  De(je, Ue, Ye, "⇃", "\\downharpoonleft", !0),
  De(je, Fe, Ye, "⊶", "\\origof", !0),
  De(je, Fe, Ye, "⊷", "\\imageof", !0),
  De(je, Ue, Ye, "⊸", "\\multimap", !0),
  De(je, Ue, Ye, "↭", "\\leftrightsquigarrow", !0),
  De(je, Ue, Ye, "⇉", "\\rightrightarrows", !0),
  De(je, Ue, Ye, "⇄", "\\rightleftarrows", !0),
  De(je, Ue, Ye, "↠", "\\twoheadrightarrow", !0),
  De(je, Ue, Ye, "↣", "\\rightarrowtail", !0),
  De(je, Ue, Ye, "↬", "\\looparrowright", !0),
  De(je, Ue, Ye, "↷", "\\curvearrowright", !0),
  De(je, Ue, Ye, "↻", "\\circlearrowright", !0),
  De(je, Ue, Ye, "↱", "\\Rsh", !0),
  De(je, Ue, Ye, "⇊", "\\downdownarrows", !0),
  De(je, Ue, Ye, "↾", "\\upharpoonright", !0),
  De(je, Ue, Ye, "⇂", "\\downharpoonright", !0),
  De(je, Ue, Ye, "⇝", "\\rightsquigarrow", !0),
  De(je, Ue, Ye, "⇝", "\\leadsto"),
  De(je, Ue, Ye, "⇛", "\\Rrightarrow", !0),
  De(je, Ue, Ye, "↾", "\\restriction"),
  De(je, Fe, Ze, "‘", "`"),
  De(je, Fe, Ze, "$", "\\$"),
  De(Le, Fe, Ze, "$", "\\$"),
  De(Le, Fe, Ze, "$", "\\textdollar"),
  De(je, Fe, Ze, "%", "\\%"),
  De(Le, Fe, Ze, "%", "\\%"),
  De(je, Fe, Ze, "_", "\\_"),
  De(Le, Fe, Ze, "_", "\\_"),
  De(Le, Fe, Ze, "_", "\\textunderscore"),
  De(je, Fe, Ze, "∠", "\\angle", !0),
  De(je, Fe, Ze, "∞", "\\infty", !0),
  De(je, Fe, Ze, "′", "\\prime"),
  De(je, Fe, Ze, "△", "\\triangle"),
  De(je, Fe, Ze, "Γ", "\\Gamma", !0),
  De(je, Fe, Ze, "Δ", "\\Delta", !0),
  De(je, Fe, Ze, "Θ", "\\Theta", !0),
  De(je, Fe, Ze, "Λ", "\\Lambda", !0),
  De(je, Fe, Ze, "Ξ", "\\Xi", !0),
  De(je, Fe, Ze, "Π", "\\Pi", !0),
  De(je, Fe, Ze, "Σ", "\\Sigma", !0),
  De(je, Fe, Ze, "Υ", "\\Upsilon", !0),
  De(je, Fe, Ze, "Φ", "\\Phi", !0),
  De(je, Fe, Ze, "Ψ", "\\Psi", !0),
  De(je, Fe, Ze, "Ω", "\\Omega", !0),
  De(je, Fe, Ze, "A", "Α"),
  De(je, Fe, Ze, "B", "Β"),
  De(je, Fe, Ze, "E", "Ε"),
  De(je, Fe, Ze, "Z", "Ζ"),
  De(je, Fe, Ze, "H", "Η"),
  De(je, Fe, Ze, "I", "Ι"),
  De(je, Fe, Ze, "K", "Κ"),
  De(je, Fe, Ze, "M", "Μ"),
  De(je, Fe, Ze, "N", "Ν"),
  De(je, Fe, Ze, "O", "Ο"),
  De(je, Fe, Ze, "P", "Ρ"),
  De(je, Fe, Ze, "T", "Τ"),
  De(je, Fe, Ze, "X", "Χ"),
  De(je, Fe, Ze, "¬", "\\neg", !0),
  De(je, Fe, Ze, "¬", "\\lnot"),
  De(je, Fe, Ze, "⊤", "\\top"),
  De(je, Fe, Ze, "⊥", "\\bot"),
  De(je, Fe, Ze, "∅", "\\emptyset"),
  De(je, Ue, Ze, "∅", "\\varnothing"),
  De(je, Fe, qe, "α", "\\alpha", !0),
  De(je, Fe, qe, "β", "\\beta", !0),
  De(je, Fe, qe, "γ", "\\gamma", !0),
  De(je, Fe, qe, "δ", "\\delta", !0),
  De(je, Fe, qe, "ϵ", "\\epsilon", !0),
  De(je, Fe, qe, "ζ", "\\zeta", !0),
  De(je, Fe, qe, "η", "\\eta", !0),
  De(je, Fe, qe, "θ", "\\theta", !0),
  De(je, Fe, qe, "ι", "\\iota", !0),
  De(je, Fe, qe, "κ", "\\kappa", !0),
  De(je, Fe, qe, "λ", "\\lambda", !0),
  De(je, Fe, qe, "μ", "\\mu", !0),
  De(je, Fe, qe, "ν", "\\nu", !0),
  De(je, Fe, qe, "ξ", "\\xi", !0),
  De(je, Fe, qe, "ο", "\\omicron", !0),
  De(je, Fe, qe, "π", "\\pi", !0),
  De(je, Fe, qe, "ρ", "\\rho", !0),
  De(je, Fe, qe, "σ", "\\sigma", !0),
  De(je, Fe, qe, "τ", "\\tau", !0),
  De(je, Fe, qe, "υ", "\\upsilon", !0),
  De(je, Fe, qe, "ϕ", "\\phi", !0),
  De(je, Fe, qe, "χ", "\\chi", !0),
  De(je, Fe, qe, "ψ", "\\psi", !0),
  De(je, Fe, qe, "ω", "\\omega", !0),
  De(je, Fe, qe, "ε", "\\varepsilon", !0),
  De(je, Fe, qe, "ϑ", "\\vartheta", !0),
  De(je, Fe, qe, "ϖ", "\\varpi", !0),
  De(je, Fe, qe, "ϱ", "\\varrho", !0),
  De(je, Fe, qe, "ς", "\\varsigma", !0),
  De(je, Fe, qe, "φ", "\\varphi", !0),
  De(je, Fe, ze, "∗", "*", !0),
  De(je, Fe, ze, "+", "+"),
  De(je, Fe, ze, "−", "-", !0),
  De(je, Fe, ze, "⋅", "\\cdot", !0),
  De(je, Fe, ze, "∘", "\\circ", !0),
  De(je, Fe, ze, "÷", "\\div", !0),
  De(je, Fe, ze, "±", "\\pm", !0),
  De(je, Fe, ze, "×", "\\times", !0),
  De(je, Fe, ze, "∩", "\\cap", !0),
  De(je, Fe, ze, "∪", "\\cup", !0),
  De(je, Fe, ze, "∖", "\\setminus", !0),
  De(je, Fe, ze, "∧", "\\land"),
  De(je, Fe, ze, "∨", "\\lor"),
  De(je, Fe, ze, "∧", "\\wedge", !0),
  De(je, Fe, ze, "∨", "\\vee", !0),
  De(je, Fe, Ze, "√", "\\surd"),
  De(je, Fe, We, "⟨", "\\langle", !0),
  De(je, Fe, We, "∣", "\\lvert"),
  De(je, Fe, We, "∥", "\\lVert"),
  De(je, Fe, He, "?", "?"),
  De(je, Fe, He, "!", "!"),
  De(je, Fe, He, "⟩", "\\rangle", !0),
  De(je, Fe, He, "∣", "\\rvert"),
  De(je, Fe, He, "∥", "\\rVert"),
  De(je, Fe, Ye, "=", "="),
  De(je, Fe, Ye, ":", ":"),
  De(je, Fe, Ye, "≈", "\\approx", !0),
  De(je, Fe, Ye, "≅", "\\cong", !0),
  De(je, Fe, Ye, "≥", "\\ge"),
  De(je, Fe, Ye, "≥", "\\geq", !0),
  De(je, Fe, Ye, "←", "\\gets"),
  De(je, Fe, Ye, ">", "\\gt", !0),
  De(je, Fe, Ye, "∈", "\\in", !0),
  De(je, Fe, Ye, "", "\\@not"),
  De(je, Fe, Ye, "⊂", "\\subset", !0),
  De(je, Fe, Ye, "⊃", "\\supset", !0),
  De(je, Fe, Ye, "⊆", "\\subseteq", !0),
  De(je, Fe, Ye, "⊇", "\\supseteq", !0),
  De(je, Ue, Ye, "⊈", "\\nsubseteq", !0),
  De(je, Ue, Ye, "⊉", "\\nsupseteq", !0),
  De(je, Fe, Ye, "⊨", "\\models"),
  De(je, Fe, Ye, "←", "\\leftarrow", !0),
  De(je, Fe, Ye, "≤", "\\le"),
  De(je, Fe, Ye, "≤", "\\leq", !0),
  De(je, Fe, Ye, "<", "\\lt", !0),
  De(je, Fe, Ye, "→", "\\rightarrow", !0),
  De(je, Fe, Ye, "→", "\\to"),
  De(je, Ue, Ye, "≱", "\\ngeq", !0),
  De(je, Ue, Ye, "≰", "\\nleq", !0),
  De(je, Fe, Ke, " ", "\\ "),
  De(je, Fe, Ke, " ", "\\space"),
  De(je, Fe, Ke, " ", "\\nobreakspace"),
  De(Le, Fe, Ke, " ", "\\ "),
  De(Le, Fe, Ke, " ", " "),
  De(Le, Fe, Ke, " ", "\\space"),
  De(Le, Fe, Ke, " ", "\\nobreakspace"),
  De(je, Fe, Ke, "", "\\nobreak"),
  De(je, Fe, Ke, "", "\\allowbreak"),
  De(je, Fe, $e, ",", ","),
  De(je, Fe, $e, ";", ";"),
  De(je, Ue, ze, "⊼", "\\barwedge", !0),
  De(je, Ue, ze, "⊻", "\\veebar", !0),
  De(je, Fe, ze, "⊙", "\\odot", !0),
  De(je, Fe, ze, "⊕", "\\oplus", !0),
  De(je, Fe, ze, "⊗", "\\otimes", !0),
  De(je, Fe, Ze, "∂", "\\partial", !0),
  De(je, Fe, ze, "⊘", "\\oslash", !0),
  De(je, Ue, ze, "⊚", "\\circledcirc", !0),
  De(je, Ue, ze, "⊡", "\\boxdot", !0),
  De(je, Fe, ze, "△", "\\bigtriangleup"),
  De(je, Fe, ze, "▽", "\\bigtriangledown"),
  De(je, Fe, ze, "†", "\\dagger"),
  De(je, Fe, ze, "⋄", "\\diamond"),
  De(je, Fe, ze, "⋆", "\\star"),
  De(je, Fe, ze, "◃", "\\triangleleft"),
  De(je, Fe, ze, "▹", "\\triangleright"),
  De(je, Fe, We, "{", "\\{"),
  De(Le, Fe, Ze, "{", "\\{"),
  De(Le, Fe, Ze, "{", "\\textbraceleft"),
  De(je, Fe, He, "}", "\\}"),
  De(Le, Fe, Ze, "}", "\\}"),
  De(Le, Fe, Ze, "}", "\\textbraceright"),
  De(je, Fe, We, "{", "\\lbrace"),
  De(je, Fe, He, "}", "\\rbrace"),
  De(je, Fe, We, "[", "\\lbrack", !0),
  De(Le, Fe, Ze, "[", "\\lbrack", !0),
  De(je, Fe, He, "]", "\\rbrack", !0),
  De(Le, Fe, Ze, "]", "\\rbrack", !0),
  De(je, Fe, We, "(", "\\lparen", !0),
  De(je, Fe, He, ")", "\\rparen", !0),
  De(Le, Fe, Ze, "<", "\\textless", !0),
  De(Le, Fe, Ze, ">", "\\textgreater", !0),
  De(je, Fe, We, "⌊", "\\lfloor", !0),
  De(je, Fe, He, "⌋", "\\rfloor", !0),
  De(je, Fe, We, "⌈", "\\lceil", !0),
  De(je, Fe, He, "⌉", "\\rceil", !0),
  De(je, Fe, Ze, "\\", "\\backslash"),
  De(je, Fe, Ze, "∣", "|"),
  De(je, Fe, Ze, "∣", "\\vert"),
  De(Le, Fe, Ze, "|", "\\textbar", !0),
  De(je, Fe, Ze, "∥", "\\|"),
  De(je, Fe, Ze, "∥", "\\Vert"),
  De(Le, Fe, Ze, "∥", "\\textbardbl"),
  De(Le, Fe, Ze, "~", "\\textasciitilde"),
  De(Le, Fe, Ze, "\\", "\\textbackslash"),
  De(Le, Fe, Ze, "^", "\\textasciicircum"),
  De(je, Fe, Ye, "↑", "\\uparrow", !0),
  De(je, Fe, Ye, "⇑", "\\Uparrow", !0),
  De(je, Fe, Ye, "↓", "\\downarrow", !0),
  De(je, Fe, Ye, "⇓", "\\Downarrow", !0),
  De(je, Fe, Ye, "↕", "\\updownarrow", !0),
  De(je, Fe, Ye, "⇕", "\\Updownarrow", !0),
  De(je, Fe, Ge, "∐", "\\coprod"),
  De(je, Fe, Ge, "⋁", "\\bigvee"),
  De(je, Fe, Ge, "⋀", "\\bigwedge"),
  De(je, Fe, Ge, "⨄", "\\biguplus"),
  De(je, Fe, Ge, "⋂", "\\bigcap"),
  De(je, Fe, Ge, "⋃", "\\bigcup"),
  De(je, Fe, Ge, "∫", "\\int"),
  De(je, Fe, Ge, "∫", "\\intop"),
  De(je, Fe, Ge, "∬", "\\iint"),
  De(je, Fe, Ge, "∭", "\\iiint"),
  De(je, Fe, Ge, "∏", "\\prod"),
  De(je, Fe, Ge, "∑", "\\sum"),
  De(je, Fe, Ge, "⨂", "\\bigotimes"),
  De(je, Fe, Ge, "⨁", "\\bigoplus"),
  De(je, Fe, Ge, "⨀", "\\bigodot"),
  De(je, Fe, Ge, "∮", "\\oint"),
  De(je, Fe, Ge, "∯", "\\oiint"),
  De(je, Fe, Ge, "∰", "\\oiiint"),
  De(je, Fe, Ge, "⨆", "\\bigsqcup"),
  De(je, Fe, Ge, "∫", "\\smallint"),
  De(Le, Fe, Ve, "…", "\\textellipsis"),
  De(je, Fe, Ve, "…", "\\mathellipsis"),
  De(Le, Fe, Ve, "…", "\\ldots", !0),
  De(je, Fe, Ve, "…", "\\ldots", !0),
  De(je, Fe, Ve, "⋯", "\\@cdots", !0),
  De(je, Fe, Ve, "⋱", "\\ddots", !0),
  De(je, Fe, Ze, "⋮", "\\varvdots"),
  De(Le, Fe, Ze, "⋮", "\\varvdots"),
  De(je, Fe, Be, "ˊ", "\\acute"),
  De(je, Fe, Be, "ˋ", "\\grave"),
  De(je, Fe, Be, "¨", "\\ddot"),
  De(je, Fe, Be, "~", "\\tilde"),
  De(je, Fe, Be, "ˉ", "\\bar"),
  De(je, Fe, Be, "˘", "\\breve"),
  De(je, Fe, Be, "ˇ", "\\check"),
  De(je, Fe, Be, "^", "\\hat"),
  De(je, Fe, Be, "⃗", "\\vec"),
  De(je, Fe, Be, "˙", "\\dot"),
  De(je, Fe, Be, "˚", "\\mathring"),
  De(je, Fe, qe, "", "\\@imath"),
  De(je, Fe, qe, "", "\\@jmath"),
  De(je, Fe, Ze, "ı", "ı"),
  De(je, Fe, Ze, "ȷ", "ȷ"),
  De(Le, Fe, Ze, "ı", "\\i", !0),
  De(Le, Fe, Ze, "ȷ", "\\j", !0),
  De(Le, Fe, Ze, "ß", "\\ss", !0),
  De(Le, Fe, Ze, "æ", "\\ae", !0),
  De(Le, Fe, Ze, "œ", "\\oe", !0),
  De(Le, Fe, Ze, "ø", "\\o", !0),
  De(Le, Fe, Ze, "Æ", "\\AE", !0),
  De(Le, Fe, Ze, "Œ", "\\OE", !0),
  De(Le, Fe, Ze, "Ø", "\\O", !0),
  De(Le, Fe, Be, "ˊ", "\\'"),
  De(Le, Fe, Be, "ˋ", "\\`"),
  De(Le, Fe, Be, "ˆ", "\\^"),
  De(Le, Fe, Be, "˜", "\\~"),
  De(Le, Fe, Be, "ˉ", "\\="),
  De(Le, Fe, Be, "˘", "\\u"),
  De(Le, Fe, Be, "˙", "\\."),
  De(Le, Fe, Be, "¸", "\\c"),
  De(Le, Fe, Be, "˚", "\\r"),
  De(Le, Fe, Be, "ˇ", "\\v"),
  De(Le, Fe, Be, "¨", '\\"'),
  De(Le, Fe, Be, "˝", "\\H"),
  De(Le, Fe, Be, "◯", "\\textcircled");
var Qe = { "--": !0, "---": !0, "``": !0, "''": !0 };
De(Le, Fe, Ze, "–", "--", !0),
  De(Le, Fe, Ze, "–", "\\textendash"),
  De(Le, Fe, Ze, "—", "---", !0),
  De(Le, Fe, Ze, "—", "\\textemdash"),
  De(Le, Fe, Ze, "‘", "`", !0),
  De(Le, Fe, Ze, "‘", "\\textquoteleft"),
  De(Le, Fe, Ze, "’", "'", !0),
  De(Le, Fe, Ze, "’", "\\textquoteright"),
  De(Le, Fe, Ze, "“", "``", !0),
  De(Le, Fe, Ze, "“", "\\textquotedblleft"),
  De(Le, Fe, Ze, "”", "''", !0),
  De(Le, Fe, Ze, "”", "\\textquotedblright"),
  De(je, Fe, Ze, "°", "\\degree", !0),
  De(Le, Fe, Ze, "°", "\\degree"),
  De(Le, Fe, Ze, "°", "\\textdegree", !0),
  De(je, Fe, Ze, "£", "\\pounds"),
  De(je, Fe, Ze, "£", "\\mathsterling", !0),
  De(Le, Fe, Ze, "£", "\\pounds"),
  De(Le, Fe, Ze, "£", "\\textsterling", !0),
  De(je, Ue, Ze, "✠", "\\maltese"),
  De(Le, Ue, Ze, "✠", "\\maltese");
for (var Je = 0; Je < 14; Je++) {
  var Xe = '0123456789/@."'.charAt(Je);
  De(je, Fe, Ze, Xe, Xe);
}
for (var et = 0; et < 25; et++) {
  var tt = '0123456789!@*()-=+";:?/.,'.charAt(et);
  De(Le, Fe, Ze, tt, tt);
}
for (
  var nt, rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", ot = 0;
  ot < 52;
  ot++
) {
  var it = rt.charAt(ot);
  De(je, Fe, qe, it, it), De(Le, Fe, Ze, it, it);
}
De(je, Ue, Ze, "C", "ℂ"),
  De(Le, Ue, Ze, "C", "ℂ"),
  De(je, Ue, Ze, "H", "ℍ"),
  De(Le, Ue, Ze, "H", "ℍ"),
  De(je, Ue, Ze, "N", "ℕ"),
  De(Le, Ue, Ze, "N", "ℕ"),
  De(je, Ue, Ze, "P", "ℙ"),
  De(Le, Ue, Ze, "P", "ℙ"),
  De(je, Ue, Ze, "Q", "ℚ"),
  De(Le, Ue, Ze, "Q", "ℚ"),
  De(je, Ue, Ze, "R", "ℝ"),
  De(Le, Ue, Ze, "R", "ℝ"),
  De(je, Ue, Ze, "Z", "ℤ"),
  De(Le, Ue, Ze, "Z", "ℤ"),
  De(je, Fe, qe, "h", "ℎ"),
  De(Le, Fe, qe, "h", "ℎ");
for (var at = 0; at < 52; at++) {
  var st = rt.charAt(at);
  De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56320 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56372 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56424 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56580 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56684 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56736 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56788 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56840 + at))),
    De(Le, Fe, Ze, st, nt),
    De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56944 + at))),
    De(Le, Fe, Ze, st, nt),
    at < 26 &&
      (De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56632 + at))),
      De(Le, Fe, Ze, st, nt),
      De(je, Fe, qe, st, (nt = String.fromCharCode(55349, 56476 + at))),
      De(Le, Fe, Ze, st, nt));
}
De(je, Fe, qe, "k", (nt = String.fromCharCode(55349, 56668))),
  De(Le, Fe, Ze, "k", nt);
for (var lt = 0; lt < 10; lt++) {
  var ct = lt.toString();
  De(je, Fe, qe, ct, (nt = String.fromCharCode(55349, 57294 + lt))),
    De(Le, Fe, Ze, ct, nt),
    De(je, Fe, qe, ct, (nt = String.fromCharCode(55349, 57314 + lt))),
    De(Le, Fe, Ze, ct, nt),
    De(je, Fe, qe, ct, (nt = String.fromCharCode(55349, 57324 + lt))),
    De(Le, Fe, Ze, ct, nt),
    De(je, Fe, qe, ct, (nt = String.fromCharCode(55349, 57334 + lt))),
    De(Le, Fe, Ze, ct, nt);
}
for (var ut = 0; ut < 3; ut++) {
  var dt = "ÐÞþ".charAt(ut);
  De(je, Fe, qe, dt, dt), De(Le, Fe, Ze, dt, dt);
}
var pt = {
    mathClass: "mathbf",
    textClass: "textbf",
    font: "Main-Bold",
  },
  ft = {
    mathClass: "mathnormal",
    textClass: "textit",
    font: "Math-Italic",
  },
  ht = {
    mathClass: "boldsymbol",
    textClass: "boldsymbol",
    font: "Main-BoldItalic",
  },
  mt = { mathClass: "", textClass: "", font: "" },
  gt = {
    mathClass: "mathfrak",
    textClass: "textfrak",
    font: "Fraktur-Regular",
  },
  yt = {
    mathClass: "mathbb",
    textClass: "textbb",
    font: "AMS-Regular",
  },
  vt = {
    mathClass: "mathboldfrak",
    textClass: "textboldfrak",
    font: "Fraktur-Regular",
  },
  bt = {
    mathClass: "mathsf",
    textClass: "textsf",
    font: "SansSerif-Regular",
  },
  St = {
    mathClass: "mathboldsf",
    textClass: "textboldsf",
    font: "SansSerif-Bold",
  },
  _t = {
    mathClass: "mathitsf",
    textClass: "textitsf",
    font: "SansSerif-Italic",
  },
  xt = {
    mathClass: "mathtt",
    textClass: "texttt",
    font: "Typewriter-Regular",
  },
  wt = [
    pt,
    pt,
    ft,
    ft,
    ht,
    ht,
    {
      mathClass: "mathscr",
      textClass: "textscr",
      font: "Script-Regular",
    },
    mt,
    mt,
    mt,
    gt,
    gt,
    yt,
    yt,
    vt,
    vt,
    bt,
    bt,
    St,
    St,
    _t,
    _t,
    mt,
    mt,
    xt,
    xt,
  ],
  Et = [pt, mt, bt, St, xt],
  Tt = function (e, t, n) {
    if (Ne[n][e]) {
      var r = Ne[n][e].replace;
      r && (e = r);
    }
    return { value: e, metrics: Me(e, t, n) };
  },
  kt = function (e, t, n, r, o) {
    var i,
      a = Tt(e, t, n),
      s = a.metrics;
    if (((e = a.value), s)) {
      var l = s.italic;
      ("text" === n || (r && "mathit" === r.font)) && (l = 0),
        (i = new Te(e, s.height, s.depth, l, s.skew, s.width, o));
    } else i = new Te(e, 0, 0, 0, 0, 0, o);
    if (r) {
      (i.maxFontSize = r.sizeMultiplier),
        r.style.isTight() && i.classes.push("mtight");
      var c = r.getColor();
      c && (i.style.color = c);
    }
    return i;
  },
  Ct = function (e, t, n, r) {
    return (
      void 0 === r && (r = []),
      "boldsymbol" === n.font && Tt(e, "Main-Bold", t).metrics
        ? kt(e, "Main-Bold", t, n, r.concat(["mathbf"]))
        : "\\" === e || "main" === Ne[t][e].font
          ? kt(e, "Main-Regular", t, n, r)
          : kt(e, "AMS-Regular", t, n, r.concat(["amsrm"]))
    );
  },
  It = function (e, t, n) {
    var r = e.mode,
      o = e.text,
      i = ["mord"],
      { font: a, fontFamily: s, fontWeight: l, fontShape: c } = t,
      u = "math" === r || ("text" === r && !!a),
      d = u ? a : s,
      p = "",
      f = "";
    if (55349 === o.charCodeAt(0)) {
      var h = ((e) => {
        var t =
          1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536;
        if (119808 <= t && t < 120484) {
          var n = Math.floor((t - 119808) / 26);
          return wt[n];
        }
        if (120782 <= t && t <= 120831) {
          var r = Math.floor((t - 120782) / 10);
          return Et[r];
        }
        if (120485 === t || 120486 === t) return wt[0];
        if (120486 < t && t < 120782) return mt;
        throw new L("Unsupported character: " + e);
      })(o);
      (p = h.font), (f = h[r + "Class"]);
    }
    if (p) return kt(o, p, r, t, i.concat(f));
    if (d) {
      var m, g;
      if ("boldsymbol" === d) {
        var y = (function (e, t, n) {
          return "textord" !== n && Tt(e, "Math-BoldItalic", t).metrics
            ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" }
            : { fontName: "Main-Bold", fontClass: "mathbf" };
        })(o, r, n);
        (m = y.fontName), (g = [y.fontClass]);
      } else
        u
          ? ((m = Bt[a].fontName), (g = [a]))
          : ((m = Ut(s, l, c)), (g = [s, l, c]));
      if (Tt(o, m, r).metrics) return kt(o, m, r, t, i.concat(g));
      if (Qe.hasOwnProperty(o) && "Typewriter" === m.slice(0, 10)) {
        for (var v = [], b = 0; b < o.length; b++)
          v.push(kt(o[b], m, r, t, i.concat(g)));
        return Dt(v);
      }
    }
    if ("mathord" === n)
      return kt(o, "Math-Italic", r, t, i.concat(["mathnormal"]));
    if ("textord" === n) {
      var S = Ne[r][o] && Ne[r][o].font;
      if ("ams" === S) {
        var _ = Ut("amsrm", l, c);
        return kt(o, _, r, t, i.concat("amsrm", l, c));
      }
      if ("main" !== S && S) {
        var x = Ut(S, l, c);
        return kt(o, x, r, t, i.concat(x, l, c));
      }
      var w = Ut("textrm", l, c);
      return kt(o, w, r, t, i.concat(l, c));
    }
    throw new Error("unexpected type: " + n + " in makeOrd");
  },
  At = (e, t) => {
    if (
      me(e.classes) !== me(t.classes) ||
      e.skew !== t.skew ||
      e.maxFontSize !== t.maxFontSize ||
      (0 !== e.italic && e.hasClass("mathnormal"))
    )
      return !1;
    if (1 === e.classes.length) {
      var n = e.classes[0];
      if ("mbin" === n || "mord" === n) return !1;
    }
    for (var r of Object.keys(e.style))
      if (e.style[r] !== t.style[r]) return !1;
    for (var o of Object.keys(t.style))
      if (e.style[o] !== t.style[o]) return !1;
    return !0;
  },
  Ot = (e) => {
    for (var t = 0; t < e.length - 1; t++) {
      var n = e[t],
        r = e[t + 1];
      n instanceof Te &&
        r instanceof Te &&
        At(n, r) &&
        ((n.text += r.text),
        (n.height = Math.max(n.height, r.height)),
        (n.depth = Math.max(n.depth, r.depth)),
        (n.italic = r.italic),
        e.splice(t + 1, 1),
        t--);
    }
    return e;
  },
  Rt = function (e) {
    for (var t = 0, n = 0, r = 0, o = 0; o < e.children.length; o++) {
      var i = e.children[o];
      i.height > t && (t = i.height),
        i.depth > n && (n = i.depth),
        i.maxFontSize > r && (r = i.maxFontSize);
    }
    (e.height = t), (e.depth = n), (e.maxFontSize = r);
  },
  Mt = function (e, t, n, r) {
    var o = new _e(e, t, n, r);
    return Rt(o), o;
  },
  Pt = (e, t, n, r) => new _e(e, t, n, r),
  Nt = function (e, t, n) {
    var r = Mt([e], [], t);
    return (
      (r.height = Math.max(
        n || t.fontMetrics().defaultRuleThickness,
        t.minRuleThickness,
      )),
      (r.style.borderBottomWidth = he(r.height)),
      (r.maxFontSize = 1),
      r
    );
  },
  Dt = function (e) {
    var t = new ce(e);
    return Rt(t), t;
  },
  jt = function (e, t) {
    return e instanceof ce ? Mt([], [e], t) : e;
  },
  Lt = function (e, t) {
    for (
      var { children: n, depth: r } = (function (e) {
          if ("individualShift" === e.positionType) {
            for (
              var t = e.children,
                n = [t[0]],
                r = -t[0].shift - t[0].elem.depth,
                o = r,
                i = 1;
              i < t.length;
              i++
            ) {
              var a = -t[i].shift - o - t[i].elem.depth,
                s = a - (t[i - 1].elem.height + t[i - 1].elem.depth);
              (o += a), n.push({ type: "kern", size: s }), n.push(t[i]);
            }
            return { children: n, depth: r };
          }
          var l;
          if ("top" === e.positionType) {
            for (var c = e.positionData, u = 0; u < e.children.length; u++) {
              var d = e.children[u];
              c -= "kern" === d.type ? d.size : d.elem.height + d.elem.depth;
            }
            l = c;
          } else if ("bottom" === e.positionType) l = -e.positionData;
          else {
            var p = e.children[0];
            if ("elem" !== p.type)
              throw new Error('First child must have type "elem".');
            if ("shift" === e.positionType) l = -p.elem.depth - e.positionData;
            else {
              if ("firstBaseline" !== e.positionType)
                throw new Error("Invalid positionType " + e.positionType + ".");
              l = -p.elem.depth;
            }
          }
          return { children: e.children, depth: l };
        })(e),
        o = 0,
        i = 0;
      i < n.length;
      i++
    ) {
      var a = n[i];
      if ("elem" === a.type) {
        var s = a.elem;
        o = Math.max(o, s.maxFontSize, s.height);
      }
    }
    o += 2;
    var l = Mt(["pstrut"], []);
    l.style.height = he(o);
    for (var c = [], u = r, d = r, p = r, f = 0; f < n.length; f++) {
      var h = n[f];
      if ("kern" === h.type) p += h.size;
      else {
        var m = h.elem,
          g = h.wrapperClasses || [],
          y = h.wrapperStyle || {},
          v = Mt(g, [l, m], void 0, y);
        (v.style.top = he(-o - p - m.depth)),
          h.marginLeft && (v.style.marginLeft = h.marginLeft),
          h.marginRight && (v.style.marginRight = h.marginRight),
          c.push(v),
          (p += m.height + m.depth);
      }
      (u = Math.min(u, p)), (d = Math.max(d, p));
    }
    var b,
      S = Mt(["vlist"], c);
    if (((S.style.height = he(d)), u < 0)) {
      var _ = Mt([], []),
        x = Mt(["vlist"], [_]);
      x.style.height = he(-u);
      var w = Mt(["vlist-s"], [new Te("​")]);
      b = [Mt(["vlist-r"], [S, w]), Mt(["vlist-r"], [x])];
    } else b = [Mt(["vlist-r"], [S])];
    var E = Mt(["vlist-t"], b);
    return (
      2 === b.length && E.classes.push("vlist-t2"),
      (E.height = d),
      (E.depth = -u),
      E
    );
  },
  Ft = (e, t) => {
    var n = Mt(["mspace"], [], t),
      r = fe(e, t);
    return (n.style.marginRight = he(r)), n;
  },
  Ut = (e, t, n) => {
    var r;
    switch (e) {
      case "amsrm":
        r = "AMS";
        break;
      case "textrm":
        r = "Main";
        break;
      case "textsf":
        r = "SansSerif";
        break;
      case "texttt":
        r = "Typewriter";
        break;
      default:
        r = e;
    }
    return (
      r +
      "-" +
      ("textbf" === t && "textit" === n
        ? "BoldItalic"
        : "textbf" === t
          ? "Bold"
          : "textit" === n
            ? "Italic"
            : "Regular")
    );
  },
  Bt = {
    mathbf: { variant: "bold", fontName: "Main-Bold" },
    mathrm: { variant: "normal", fontName: "Main-Regular" },
    textit: { variant: "italic", fontName: "Main-Italic" },
    mathit: { variant: "italic", fontName: "Main-Italic" },
    mathnormal: { variant: "italic", fontName: "Math-Italic" },
    mathsfit: {
      variant: "sans-serif-italic",
      fontName: "SansSerif-Italic",
    },
    mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
    mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
    mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
    mathscr: { variant: "script", fontName: "Script-Regular" },
    mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
    mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
  },
  zt = {
    vec: ["vec", 0.471, 0.714],
    oiintSize1: ["oiintSize1", 0.957, 0.499],
    oiintSize2: ["oiintSize2", 1.472, 0.659],
    oiiintSize1: ["oiiintSize1", 1.304, 0.499],
    oiiintSize2: ["oiiintSize2", 1.98, 0.659],
  },
  Ht = function (e, t) {
    var [n, r, o] = zt[e],
      i = new Ce(n),
      a = new ke([i], {
        width: he(r),
        height: he(o),
        style: "width:" + he(r),
        viewBox: "0 0 " + 1e3 * r + " " + 1e3 * o,
        preserveAspectRatio: "xMinYMin",
      }),
      s = Pt(["overlay"], [a], t);
    return (s.height = o), (s.style.height = he(o)), (s.style.width = he(r)), s;
  },
  Vt = { number: 3, unit: "mu" },
  qt = { number: 4, unit: "mu" },
  Gt = { number: 5, unit: "mu" },
  Wt = {
    mord: { mop: Vt, mbin: qt, mrel: Gt, minner: Vt },
    mop: { mord: Vt, mop: Vt, mrel: Gt, minner: Vt },
    mbin: { mord: qt, mop: qt, mopen: qt, minner: qt },
    mrel: { mord: Gt, mop: Gt, mopen: Gt, minner: Gt },
    mopen: {},
    mclose: { mop: Vt, mbin: qt, mrel: Gt, minner: Vt },
    mpunct: {
      mord: Vt,
      mop: Vt,
      mrel: Gt,
      mopen: Vt,
      mclose: Vt,
      mpunct: Vt,
      minner: Vt,
    },
    minner: {
      mord: Vt,
      mop: Vt,
      mbin: qt,
      mrel: Gt,
      mopen: Vt,
      mpunct: Vt,
      minner: Vt,
    },
  },
  $t = {
    mord: { mop: Vt },
    mop: { mord: Vt, mop: Vt },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: { mop: Vt },
    mpunct: {},
    minner: { mop: Vt },
  },
  Yt = {},
  Kt = {},
  Zt = {};
function Qt(e) {
  for (
    var {
        type: t,
        names: n,
        props: r,
        handler: o,
        htmlBuilder: i,
        mathmlBuilder: a,
      } = e,
      s = {
        type: t,
        numArgs: r.numArgs,
        argTypes: r.argTypes,
        allowedInArgument: !!r.allowedInArgument,
        allowedInText: !!r.allowedInText,
        allowedInMath: void 0 === r.allowedInMath || r.allowedInMath,
        numOptionalArgs: r.numOptionalArgs || 0,
        infix: !!r.infix,
        primitive: !!r.primitive,
        handler: o,
      },
      l = 0;
    l < n.length;
    ++l
  )
    Yt[n[l]] = s;
  t && (i && (Kt[t] = i), a && (Zt[t] = a));
}
function Jt(e) {
  var { type: t, htmlBuilder: n, mathmlBuilder: r } = e;
  Qt({
    type: t,
    names: [],
    props: { numArgs: 0 },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: n,
    mathmlBuilder: r,
  });
}
var Xt = function (e) {
    return "ordgroup" === e.type && 1 === e.body.length ? e.body[0] : e;
  },
  en = function (e) {
    return "ordgroup" === e.type ? e.body : [e];
  },
  tn = new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]),
  nn = new Set(["rightmost", "mrel", "mclose", "mpunct"]),
  rn = {
    display: re.DISPLAY,
    text: re.TEXT,
    script: re.SCRIPT,
    scriptscript: re.SCRIPTSCRIPT,
  },
  on = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner",
  },
  an = function (e, t, n, r) {
    void 0 === r && (r = [null, null]);
    for (var o = [], i = 0; i < e.length; i++) {
      var a = pn(e[i], t);
      if (a instanceof ce) {
        var s = a.children;
        o.push(...s);
      } else o.push(a);
    }
    if ((Ot(o), !n)) return o;
    var l = t;
    if (1 === e.length) {
      var c = e[0];
      "sizing" === c.type
        ? (l = t.havingSize(c.size))
        : "styling" === c.type && (l = t.havingStyle(rn[c.style]));
    }
    var u = Mt([r[0] || "leftmost"], [], t),
      d = Mt([r[1] || "rightmost"], [], t),
      p = "root" === n;
    return (
      sn(
        o,
        (e, t) => {
          var n = t.classes[0],
            r = e.classes[0];
          "mbin" === n && nn.has(r)
            ? (t.classes[0] = "mord")
            : "mbin" === r && tn.has(n) && (e.classes[0] = "mord");
        },
        { node: u },
        d,
        p,
      ),
      sn(
        o,
        (e, t) => {
          var n,
            r,
            o = un(t),
            i = un(e),
            a =
              o && i
                ? e.hasClass("mtight")
                  ? null == (n = $t[o])
                    ? void 0
                    : n[i]
                  : null == (r = Wt[o])
                    ? void 0
                    : r[i]
                : null;
          if (a) return Ft(a, l);
        },
        { node: u },
        d,
        p,
      ),
      o
    );
  },
  sn = function (e, t, n, r, o) {
    r && e.push(r);
    for (var i = 0; i < e.length; i++) {
      var a = e[i],
        s = ln(a);
      if (s) sn(s.children, t, n, null, o);
      else {
        var l = !a.hasClass("mspace");
        if (l) {
          var c = t(a, n.node);
          c && (n.insertAfter ? n.insertAfter(c) : (e.unshift(c), i++));
        }
        l
          ? (n.node = a)
          : o && a.hasClass("newline") && (n.node = Mt(["leftmost"])),
          (n.insertAfter = ((t) => (n) => {
            e.splice(t + 1, 0, n), i++;
          })(i));
      }
    }
    r && e.pop();
  },
  ln = function (e) {
    return e instanceof ce ||
      e instanceof xe ||
      (e instanceof _e && e.hasClass("enclosing"))
      ? e
      : null;
  },
  cn = function (e, t) {
    var n = ln(e);
    if (n) {
      var r = n.children;
      if (r.length) {
        if ("right" === t) return cn(r[r.length - 1], "right");
        if ("left" === t) return cn(r[0], "left");
      }
    }
    return e;
  },
  un = function (e, t) {
    if (!e) return null;
    t && (e = cn(e, t));
    var n = e.classes[0];
    return on[n] || null;
  },
  dn = function (e, t) {
    var n = ["nulldelimiter"].concat(e.baseSizingClasses());
    return Mt(t.concat(n));
  },
  pn = function (e, t, n) {
    if (!e) return Mt();
    if (Kt[e.type]) {
      var r = Kt[e.type](e, t);
      if (n && t.size !== n.size) {
        r = Mt(t.sizingClasses(n), [r], t);
        var o = t.sizeMultiplier / n.sizeMultiplier;
        (r.height *= o), (r.depth *= o);
      }
      return r;
    }
    throw new L("Got group of unknown type: '" + e.type + "'");
  };
function fn(e, t) {
  var n = Mt(["base"], e, t),
    r = Mt(["strut"]);
  return (
    (r.style.height = he(n.height + n.depth)),
    n.depth && (r.style.verticalAlign = he(-n.depth)),
    n.children.unshift(r),
    n
  );
}
function hn(e, t) {
  var n = null;
  1 === e.length && "tag" === e[0].type && ((n = e[0].tag), (e = e[0].body));
  var r,
    o = an(e, t, "root");
  2 === o.length && o[1].hasClass("tag") && (r = o.pop());
  for (var i, a = [], s = [], l = 0; l < o.length; l++)
    if (
      (s.push(o[l]),
      o[l].hasClass("mbin") ||
        o[l].hasClass("mrel") ||
        o[l].hasClass("allowbreak"))
    ) {
      for (
        var c = !1;
        l < o.length - 1 &&
        o[l + 1].hasClass("mspace") &&
        !o[l + 1].hasClass("newline");

      )
        l++, s.push(o[l]), o[l].hasClass("nobreak") && (c = !0);
      c || (a.push(fn(s, t)), (s = []));
    } else
      o[l].hasClass("newline") &&
        (s.pop(), s.length > 0 && (a.push(fn(s, t)), (s = [])), a.push(o[l]));
  s.length > 0 && a.push(fn(s, t)),
    n
      ? (((i = fn(an(n, t, !0), t)).classes = ["tag"]), a.push(i))
      : r && a.push(r);
  var u = Mt(["katex-html"], a);
  if ((u.setAttribute("aria-hidden", "true"), i)) {
    var d = i.children[0];
    (d.style.height = he(u.height + u.depth)),
      u.depth && (d.style.verticalAlign = he(-u.depth));
  }
  return u;
}
function mn(e) {
  return new ce(e);
}
class gn {
  constructor(e, t, n) {
    (this.type = void 0),
      (this.attributes = void 0),
      (this.children = void 0),
      (this.classes = void 0),
      (this.type = e),
      (this.attributes = {}),
      (this.children = t || []),
      (this.classes = n || []);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  toNode() {
    var e = document.createElementNS(
      "http://www.w3.org/1998/Math/MathML",
      this.type,
    );
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = me(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (
        this.children[n] instanceof yn &&
        this.children[n + 1] instanceof yn
      ) {
        for (
          var r = this.children[n].toText() + this.children[++n].toText();
          this.children[n + 1] instanceof yn;

        )
          r += this.children[++n].toText();
        e.appendChild(new yn(r).toNode());
      } else e.appendChild(this.children[n].toNode());
    return e;
  }
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        ((e += " " + t + '="'), (e += H(this.attributes[t])), (e += '"'));
    this.classes.length > 0 && (e += ' class ="' + H(me(this.classes)) + '"'),
      (e += ">");
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e + "</" + this.type + ">";
  }
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class yn {
  constructor(e) {
    (this.text = void 0), (this.text = e);
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return H(this.toText());
  }
  toText() {
    return this.text;
  }
}
class vn {
  constructor(e) {
    (this.width = void 0),
      (this.character = void 0),
      (this.width = e),
      (this.character =
        e >= 0.05555 && e <= 0.05556
          ? " "
          : e >= 0.1666 && e <= 0.1667
            ? " "
            : e >= 0.2222 && e <= 0.2223
              ? " "
              : e >= 0.2777 && e <= 0.2778
                ? "  "
                : e >= -0.05556 && e <= -0.05555
                  ? " ⁣"
                  : e >= -0.1667 && e <= -0.1666
                    ? " ⁣"
                    : e >= -0.2223 && e <= -0.2222
                      ? " ⁣"
                      : e >= -0.2778 && e <= -0.2777
                        ? " ⁣"
                        : null);
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e = document.createElementNS(
      "http://www.w3.org/1998/Math/MathML",
      "mspace",
    );
    return e.setAttribute("width", he(this.width)), e;
  }
  toMarkup() {
    return this.character
      ? "<mtext>" + this.character + "</mtext>"
      : '<mspace width="' + he(this.width) + '"/>';
  }
  toText() {
    return this.character ? this.character : " ";
  }
}
var bn = new Set(["\\imath", "\\jmath"]),
  Sn = new Set(["mrow", "mtable"]),
  _n = function (e, t, n) {
    return (
      !Ne[t][e] ||
        !Ne[t][e].replace ||
        55349 === e.charCodeAt(0) ||
        (Qe.hasOwnProperty(e) &&
          n &&
          ((n.fontFamily && "tt" === n.fontFamily.slice(4, 6)) ||
            (n.font && "tt" === n.font.slice(4, 6)))) ||
        (e = Ne[t][e].replace),
      new yn(e)
    );
  },
  xn = function (e) {
    return 1 === e.length ? e[0] : new gn("mrow", e);
  },
  wn = {
    mathit: "italic",
    boldsymbol: (e) => ("textord" === e.type ? "bold" : "bold-italic"),
    mathbf: "bold",
    mathbb: "double-struck",
    mathsfit: "sans-serif-italic",
    mathfrak: "fraktur",
    mathscr: "script",
    mathcal: "script",
    mathsf: "sans-serif",
    mathtt: "monospace",
  },
  En = (e, t) => {
    if ("text" === e.mode) {
      if ("texttt" === t.fontFamily) return "monospace";
      if ("textsf" === t.fontFamily)
        return "textit" === t.fontShape && "textbf" === t.fontWeight
          ? "sans-serif-bold-italic"
          : "textit" === t.fontShape
            ? "sans-serif-italic"
            : "textbf" === t.fontWeight
              ? "bold-sans-serif"
              : "sans-serif";
      if ("textit" === t.fontShape && "textbf" === t.fontWeight)
        return "bold-italic";
      if ("textit" === t.fontShape) return "italic";
      if ("textbf" === t.fontWeight) return "bold";
    }
    var n = t.font;
    if (!n || "mathnormal" === n) return null;
    var r = e.mode,
      o = wn[n];
    if (o) return "function" == typeof o ? o(e) : o;
    var i = e.text;
    if (bn.has(i)) return null;
    if (Ne[r][i]) {
      var a = Ne[r][i].replace;
      a && (i = a);
    }
    return Me(i, Bt[n].fontName, r) ? Bt[n].variant : null;
  };
function Tn(e) {
  if (!e) return !1;
  if ("mi" === e.type && 1 === e.children.length) {
    var t = e.children[0];
    return t instanceof yn && "." === t.text;
  }
  if (
    "mo" === e.type &&
    1 === e.children.length &&
    "true" === e.getAttribute("separator") &&
    "0em" === e.getAttribute("lspace") &&
    "0em" === e.getAttribute("rspace")
  ) {
    var n = e.children[0];
    return n instanceof yn && "," === n.text;
  }
  return !1;
}
var kn = function (e, t, n) {
    if (1 === e.length) {
      var r = In(e[0], t);
      return (
        n &&
          r instanceof gn &&
          "mo" === r.type &&
          (r.setAttribute("lspace", "0em"), r.setAttribute("rspace", "0em")),
        [r]
      );
    }
    for (var o, i = [], a = 0; a < e.length; a++) {
      var s = In(e[a], t);
      if (s instanceof gn && o instanceof gn) {
        if (
          "mtext" === s.type &&
          "mtext" === o.type &&
          s.getAttribute("mathvariant") === o.getAttribute("mathvariant")
        ) {
          o.children.push(...s.children);
          continue;
        }
        if ("mn" === s.type && "mn" === o.type) {
          o.children.push(...s.children);
          continue;
        }
        if (Tn(s) && "mn" === o.type) {
          o.children.push(...s.children);
          continue;
        }
        if ("mn" === s.type && Tn(o))
          (s.children = [...o.children, ...s.children]), i.pop();
        else if (
          ("msup" === s.type || "msub" === s.type) &&
          s.children.length >= 1 &&
          ("mn" === o.type || Tn(o))
        ) {
          var l = s.children[0];
          l instanceof gn &&
            "mn" === l.type &&
            ((l.children = [...o.children, ...l.children]), i.pop());
        } else if ("mi" === o.type && 1 === o.children.length) {
          var c = o.children[0];
          if (
            c instanceof yn &&
            "̸" === c.text &&
            ("mo" === s.type || "mi" === s.type || "mn" === s.type)
          ) {
            var u = s.children[0];
            u instanceof yn &&
              u.text.length > 0 &&
              ((u.text = u.text.slice(0, 1) + "̸" + u.text.slice(1)), i.pop());
          }
        }
      }
      i.push(s), (o = s);
    }
    return i;
  },
  Cn = function (e, t, n) {
    return xn(kn(e, t, n));
  },
  In = function (e, t) {
    if (!e) return new gn("mrow");
    if (Zt[e.type]) return Zt[e.type](e, t);
    throw new L("Got group of unknown type: '" + e.type + "'");
  };
function An(e, t, n, r, o) {
  var i,
    a = kn(e, n);
  i =
    1 === a.length && a[0] instanceof gn && Sn.has(a[0].type)
      ? a[0]
      : new gn("mrow", a);
  var s = new gn("annotation", [new yn(t)]);
  s.setAttribute("encoding", "application/x-tex");
  var l = new gn("semantics", [i, s]),
    c = new gn("math", [l]);
  return (
    c.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
    r && c.setAttribute("display", "block"),
    Mt([o ? "katex" : "katex-mathml"], [c])
  );
}
var On = [
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 2, 1],
    [5, 2, 1],
    [6, 3, 1],
    [7, 4, 2],
    [8, 6, 3],
    [9, 7, 6],
    [10, 8, 7],
    [11, 10, 9],
  ],
  Rn = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
  Mn = function (e, t) {
    return t.size < 2 ? e : On[e - 1][t.size - 1];
  };
class Pn {
  constructor(e) {
    (this.style = void 0),
      (this.color = void 0),
      (this.size = void 0),
      (this.textSize = void 0),
      (this.phantom = void 0),
      (this.font = void 0),
      (this.fontFamily = void 0),
      (this.fontWeight = void 0),
      (this.fontShape = void 0),
      (this.sizeMultiplier = void 0),
      (this.maxSize = void 0),
      (this.minRuleThickness = void 0),
      (this._fontMetrics = void 0),
      (this.style = e.style),
      (this.color = e.color),
      (this.size = e.size || Pn.BASESIZE),
      (this.textSize = e.textSize || this.size),
      (this.phantom = !!e.phantom),
      (this.font = e.font || ""),
      (this.fontFamily = e.fontFamily || ""),
      (this.fontWeight = e.fontWeight || ""),
      (this.fontShape = e.fontShape || ""),
      (this.sizeMultiplier = Rn[this.size - 1]),
      (this.maxSize = e.maxSize),
      (this.minRuleThickness = e.minRuleThickness),
      (this._fontMetrics = void 0);
  }
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness,
    };
    return Object.assign(t, e), new Pn(t);
  }
  havingStyle(e) {
    return this.style === e
      ? this
      : this.extend({ style: e, size: Mn(this.textSize, e) });
  }
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  havingSize(e) {
    return this.size === e && this.textSize === e
      ? this
      : this.extend({
          style: this.style.text(),
          size: e,
          textSize: e,
          sizeMultiplier: Rn[e - 1],
        });
  }
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Mn(Pn.BASESIZE, e);
    return this.size === t && this.textSize === Pn.BASESIZE && this.style === e
      ? this
      : this.extend({ style: e, size: t });
  }
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({ style: this.style.text(), size: e });
  }
  withColor(e) {
    return this.extend({ color: e });
  }
  withPhantom() {
    return this.extend({ phantom: !0 });
  }
  withFont(e) {
    return this.extend({ font: e });
  }
  withTextFontFamily(e) {
    return this.extend({ fontFamily: e, font: "" });
  }
  withTextFontWeight(e) {
    return this.extend({ fontWeight: e, font: "" });
  }
  withTextFontShape(e) {
    return this.extend({ fontShape: e, font: "" });
  }
  sizingClasses(e) {
    return e.size !== this.size
      ? ["sizing", "reset-size" + e.size, "size" + this.size]
      : [];
  }
  baseSizingClasses() {
    return this.size !== Pn.BASESIZE
      ? ["sizing", "reset-size" + this.size, "size" + Pn.BASESIZE]
      : [];
  }
  fontMetrics() {
    return (
      this._fontMetrics ||
        (this._fontMetrics = (function (e) {
          var t;
          if (!Pe[(t = e >= 5 ? 0 : e >= 3 ? 1 : 2)]) {
            var n = (Pe[t] = { cssEmPerMu: Oe.quad[t] / 18 });
            for (var r in Oe) Oe.hasOwnProperty(r) && (n[r] = Oe[r][t]);
          }
          return Pe[t];
        })(this.size)),
      this._fontMetrics
    );
  }
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Pn.BASESIZE = 6;
var Nn = {
    widehat: "^",
    widecheck: "ˇ",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "←",
    underleftarrow: "←",
    xleftarrow: "←",
    overrightarrow: "→",
    underrightarrow: "→",
    xrightarrow: "→",
    underbrace: "⏟",
    overbrace: "⏞",
    underbracket: "⎵",
    overbracket: "⎴",
    overgroup: "⏠",
    undergroup: "⏡",
    overleftrightarrow: "↔",
    underleftrightarrow: "↔",
    xleftrightarrow: "↔",
    Overrightarrow: "⇒",
    xRightarrow: "⇒",
    overleftharpoon: "↼",
    xleftharpoonup: "↼",
    overrightharpoon: "⇀",
    xrightharpoonup: "⇀",
    xLeftarrow: "⇐",
    xLeftrightarrow: "⇔",
    xhookleftarrow: "↩",
    xhookrightarrow: "↪",
    xmapsto: "↦",
    xrightharpoondown: "⇁",
    xleftharpoondown: "↽",
    xrightleftharpoons: "⇌",
    xleftrightharpoons: "⇋",
    xtwoheadleftarrow: "↞",
    xtwoheadrightarrow: "↠",
    xlongequal: "=",
    xtofrom: "⇄",
    xrightleftarrows: "⇄",
    xrightequilibrium: "⇌",
    xleftequilibrium: "⇋",
    "\\cdrightarrow": "→",
    "\\cdleftarrow": "←",
    "\\cdlongequal": "=",
  },
  Dn = function (e) {
    var t = new gn("mo", [new yn(Nn[e.replace(/^\\/, "")])]);
    return t.setAttribute("stretchy", "true"), t;
  },
  jn = {
    overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
    xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
    Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
    xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
    overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
    xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
    xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
    xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
    overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    underbrace: [
      ["leftbraceunder", "midbraceunder", "rightbraceunder"],
      1.6,
      548,
    ],
    underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
    xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    xrightleftharpoons: [
      ["leftharpoondownplus", "rightharpoonplus"],
      1.75,
      716,
    ],
    xleftrightharpoons: [
      ["leftharpoonplus", "rightharpoondownplus"],
      1.75,
      716,
    ],
    xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
    xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
    overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440],
    underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410],
    overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
    undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
    xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
    xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
    xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
    xrightequilibrium: [
      ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
      1.75,
      716,
    ],
    xleftequilibrium: [
      ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
      1.75,
      716,
    ],
  },
  Ln = new Set(["widehat", "widecheck", "widetilde", "utilde"]),
  Fn = function (e, t) {
    var {
      span: n,
      minWidth: r,
      height: o,
    } = (function () {
      var n = 4e5,
        r = e.label.slice(1);
      if (Ln.has(r) && "base" in e) {
        var o,
          i,
          a,
          s = "ordgroup" === e.base.type ? e.base.body.length : 1;
        if (s > 5)
          "widehat" === r || "widecheck" === r
            ? ((o = 420), (n = 2364), (a = 0.42), (i = r + "4"))
            : ((o = 312), (n = 2340), (a = 0.34), (i = "tilde4"));
        else {
          var l = [1, 1, 2, 2, 3, 3][s];
          "widehat" === r || "widecheck" === r
            ? ((n = [0, 1062, 2364, 2364, 2364][l]),
              (o = [0, 239, 300, 360, 420][l]),
              (a = [0, 0.24, 0.3, 0.3, 0.36, 0.42][l]),
              (i = r + l))
            : ((n = [0, 600, 1033, 2339, 2340][l]),
              (o = [0, 260, 286, 306, 312][l]),
              (a = [0, 0.26, 0.286, 0.3, 0.306, 0.34][l]),
              (i = "tilde" + l));
        }
        var c = new Ce(i),
          u = new ke([c], {
            width: "100%",
            height: he(a),
            viewBox: "0 0 " + n + " " + o,
            preserveAspectRatio: "none",
          });
        return { span: Pt([], [u], t), minWidth: 0, height: a };
      }
      var d = [],
        p = jn[r];
      if (!p) throw new Error('No SVG data for "' + r + '".');
      var f,
        h,
        [m, g, y] = p,
        v = y / 1e3,
        b = m.length;
      if (1 === b) {
        if (4 !== p.length)
          throw new Error(
            'Expected 4-tuple for single-path SVG data "' + r + '".',
          );
        (f = ["hide-tail"]), (h = [p[3]]);
      } else if (2 === b)
        (f = ["halfarrow-left", "halfarrow-right"]),
          (h = ["xMinYMin", "xMaxYMin"]);
      else {
        if (3 !== b)
          throw new Error(
            "Correct katexImagesData or update code here to support\n                    " +
              b +
              " children.",
          );
        (f = ["brace-left", "brace-center", "brace-right"]),
          (h = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
      }
      for (var S = 0; S < b; S++) {
        var _ = new Ce(m[S]),
          x = new ke([_], {
            width: "400em",
            height: he(v),
            viewBox: "0 0 " + n + " " + y,
            preserveAspectRatio: h[S] + " slice",
          }),
          w = Pt([f[S]], [x], t);
        if (1 === b) return { span: w, minWidth: g, height: v };
        (w.style.height = he(v)), d.push(w);
      }
      return { span: Mt(["stretchy"], d, t), minWidth: g, height: v };
    })();
    return (
      (n.height = o),
      (n.style.height = he(o)),
      r > 0 && (n.style.minWidth = he(r)),
      n
    );
  },
  Un = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
  Bn = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1,
  };
function zn(e, t) {
  if (!e || e.type !== t)
    throw new Error(
      "Expected node of type " +
        t +
        ", but got " +
        (e ? "node of type " + e.type : String(e)),
    );
  return e;
}
function Hn(e) {
  var t = Vn(e);
  if (!t)
    throw new Error(
      "Expected node of symbol group type, but got " +
        (e ? "node of type " + e.type : String(e)),
    );
  return t;
}
function Vn(e) {
  return e && ("atom" === e.type || Bn.hasOwnProperty(e.type)) ? e : null;
}
var qn = (e) => {
    return e instanceof Te
      ? e
      : ((t = e) instanceof _e || t instanceof xe || t instanceof ce) &&
          1 === e.children.length
        ? qn(e.children[0])
        : void 0;
    var t;
  },
  Gn = (e, t) => {
    var n, r, o;
    e && "supsub" === e.type
      ? ((n = (r = zn(e.base, "accent")).base),
        (e.base = n),
        (o = (function (e) {
          if (e instanceof _e) return e;
          throw new Error(
            "Expected span<HtmlDomNode> but got " + String(e) + ".",
          );
        })(pn(e, t))),
        (e.base = r))
      : (n = (r = zn(e, "accent")).base);
    var i,
      a,
      s = pn(n, t.havingCrampedStyle()),
      l = 0;
    r.isShifty &&
      G(n) &&
      (l = null != (i = null == (a = qn(s)) ? void 0 : a.skew) ? i : 0);
    var c,
      u = "\\c" === r.label,
      d = u ? s.height + s.depth : Math.min(s.height, t.fontMetrics().xHeight);
    if (r.isStretchy)
      (c = Fn(r, t)),
        (c = Lt({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: s },
            {
              type: "elem",
              elem: c,
              wrapperClasses: ["svg-align"],
              wrapperStyle:
                l > 0
                  ? {
                      width: "calc(100% - " + he(2 * l) + ")",
                      marginLeft: he(2 * l),
                    }
                  : void 0,
            },
          ],
        }));
    else {
      var p, f;
      "\\vec" === r.label
        ? ((p = Ht("vec", t)), (f = zt.vec[1]))
        : ((p = (function (e) {
            if (e instanceof Te) return e;
            throw new Error("Expected symbolNode but got " + String(e) + ".");
          })(
            (p = It(
              { type: "textord", mode: r.mode, text: r.label },
              t,
              "textord",
            )),
          )),
          (p.italic = 0),
          (f = p.width),
          u && (d += p.depth)),
        (c = Mt(["accent-body"], [p]));
      var h = "\\textcircled" === r.label;
      h && (c.classes.push("accent-full"), (d = s.height));
      var m = l;
      h || (m -= f / 2),
        (c.style.left = he(m)),
        "\\textcircled" === r.label && (c.style.top = ".2em"),
        (c = Lt({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: s },
            { type: "kern", size: -d },
            { type: "elem", elem: c },
          ],
        }));
    }
    var g = Mt(["mord", "accent"], [c], t);
    return o
      ? ((o.children[0] = g),
        (o.height = Math.max(g.height, o.height)),
        (o.classes[0] = "mord"),
        o)
      : g;
  },
  Wn = (e, t) => {
    var n = e.isStretchy ? Dn(e.label) : new gn("mo", [_n(e.label, e.mode)]),
      r = new gn("mover", [In(e.base, t), n]);
    return r.setAttribute("accent", "true"), r;
  },
  $n = new RegExp(
    [
      "\\acute",
      "\\grave",
      "\\ddot",
      "\\tilde",
      "\\bar",
      "\\breve",
      "\\check",
      "\\hat",
      "\\vec",
      "\\dot",
      "\\mathring",
    ]
      .map((e) => "\\" + e)
      .join("|"),
  );
Qt({
  type: "accent",
  names: [
    "\\acute",
    "\\grave",
    "\\ddot",
    "\\tilde",
    "\\bar",
    "\\breve",
    "\\check",
    "\\hat",
    "\\vec",
    "\\dot",
    "\\mathring",
    "\\widecheck",
    "\\widehat",
    "\\widetilde",
    "\\overrightarrow",
    "\\overleftarrow",
    "\\Overrightarrow",
    "\\overleftrightarrow",
    "\\overgroup",
    "\\overlinesegment",
    "\\overleftharpoon",
    "\\overrightharpoon",
  ],
  props: { numArgs: 1 },
  handler: (e, t) => {
    var n = Xt(t[0]),
      r = !$n.test(e.funcName),
      o =
        !r ||
        "\\widehat" === e.funcName ||
        "\\widetilde" === e.funcName ||
        "\\widecheck" === e.funcName;
    return {
      type: "accent",
      mode: e.parser.mode,
      label: e.funcName,
      isStretchy: r,
      isShifty: o,
      base: n,
    };
  },
  htmlBuilder: Gn,
  mathmlBuilder: Wn,
}),
  Qt({
    type: "accent",
    names: [
      "\\'",
      "\\`",
      "\\^",
      "\\~",
      "\\=",
      "\\u",
      "\\.",
      '\\"',
      "\\c",
      "\\r",
      "\\H",
      "\\v",
      "\\textcircled",
    ],
    props: {
      numArgs: 1,
      allowedInText: !0,
      allowedInMath: !0,
      argTypes: ["primitive"],
    },
    handler: (e, t) => {
      var n = t[0],
        r = e.parser.mode;
      return (
        "math" === r &&
          (e.parser.settings.reportNonstrict(
            "mathVsTextAccents",
            "LaTeX's accent " + e.funcName + " works only in text mode",
          ),
          (r = "text")),
        {
          type: "accent",
          mode: r,
          label: e.funcName,
          isStretchy: !1,
          isShifty: !0,
          base: n,
        }
      );
    },
    htmlBuilder: Gn,
    mathmlBuilder: Wn,
  }),
  Qt({
    type: "accentUnder",
    names: [
      "\\underleftarrow",
      "\\underrightarrow",
      "\\underleftrightarrow",
      "\\undergroup",
      "\\underlinesegment",
      "\\utilde",
    ],
    props: { numArgs: 1 },
    handler: (e, t) => {
      var { parser: n, funcName: r } = e,
        o = t[0];
      return { type: "accentUnder", mode: n.mode, label: r, base: o };
    },
    htmlBuilder: (e, t) => {
      var n = pn(e.base, t),
        r = Fn(e, t),
        o = "\\utilde" === e.label ? 0.12 : 0,
        i = Lt({
          positionType: "top",
          positionData: n.height,
          children: [
            { type: "elem", elem: r, wrapperClasses: ["svg-align"] },
            { type: "kern", size: o },
            { type: "elem", elem: n },
          ],
        });
      return Mt(["mord", "accentunder"], [i], t);
    },
    mathmlBuilder: (e, t) => {
      var n = Dn(e.label),
        r = new gn("munder", [In(e.base, t), n]);
      return r.setAttribute("accentunder", "true"), r;
    },
  });
var Yn = (e) => {
  var t = new gn("mpadded", e ? [e] : []);
  return (
    t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t
  );
};
function Kn(e, t) {
  var n = an(e.body, t, !0);
  return Mt([e.mclass], n, t);
}
function Zn(e, t) {
  var n,
    r = kn(e.body, t);
  return (
    "minner" === e.mclass
      ? (n = new gn("mpadded", r))
      : "mord" === e.mclass
        ? e.isCharacterBox
          ? ((n = r[0]).type = "mi")
          : (n = new gn("mi", r))
        : (e.isCharacterBox ? ((n = r[0]).type = "mo") : (n = new gn("mo", r)),
          "mbin" === e.mclass
            ? ((n.attributes.lspace = "0.22em"),
              (n.attributes.rspace = "0.22em"))
            : "mpunct" === e.mclass
              ? ((n.attributes.lspace = "0em"),
                (n.attributes.rspace = "0.17em"))
              : "mopen" === e.mclass || "mclose" === e.mclass
                ? ((n.attributes.lspace = "0em"), (n.attributes.rspace = "0em"))
                : "minner" === e.mclass &&
                  ((n.attributes.lspace = "0.0556em"),
                  (n.attributes.width = "+0.1111em"))),
    n
  );
}
Qt({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal",
  ],
  props: { numArgs: 1, numOptionalArgs: 1 },
  handler(e, t, n) {
    var { parser: r, funcName: o } = e;
    return {
      type: "xArrow",
      mode: r.mode,
      label: o,
      body: t[0],
      below: n[0],
    };
  },
  htmlBuilder(e, t) {
    var n,
      r = t.style,
      o = t.havingStyle(r.sup()),
      i = jt(pn(e.body, o, t), t),
      a = "\\x" === e.label.slice(0, 2) ? "x" : "cd";
    i.classes.push(a + "-arrow-pad"),
      e.below &&
        ((o = t.havingStyle(r.sub())),
        (n = jt(pn(e.below, o, t), t)).classes.push(a + "-arrow-pad"));
    var s,
      l = Fn(e, t),
      c = -t.fontMetrics().axisHeight + 0.5 * l.height,
      u = -t.fontMetrics().axisHeight - 0.5 * l.height - 0.111;
    if (
      ((i.depth > 0.25 || "\\xleftequilibrium" === e.label) && (u -= i.depth),
      n)
    ) {
      var d = -t.fontMetrics().axisHeight + n.height + 0.5 * l.height + 0.111;
      s = Lt({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: i, shift: u },
          {
            type: "elem",
            elem: l,
            shift: c,
            wrapperClasses: ["svg-align"],
          },
          { type: "elem", elem: n, shift: d },
        ],
      });
    } else
      s = Lt({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: i, shift: u },
          {
            type: "elem",
            elem: l,
            shift: c,
            wrapperClasses: ["svg-align"],
          },
        ],
      });
    return Mt(["mrel", "x-arrow"], [s], t);
  },
  mathmlBuilder(e, t) {
    var n,
      r = Dn(e.label);
    if (
      (r.setAttribute(
        "minsize",
        "x" === e.label.charAt(0) ? "1.75em" : "3.0em",
      ),
      e.body)
    ) {
      var o = Yn(In(e.body, t));
      if (e.below) {
        var i = Yn(In(e.below, t));
        n = new gn("munderover", [r, i, o]);
      } else n = new gn("mover", [r, o]);
    } else if (e.below) {
      var a = Yn(In(e.below, t));
      n = new gn("munder", [r, a]);
    } else (n = Yn()), (n = new gn("mover", [r, n]));
    return n;
  },
}),
  Qt({
    type: "mclass",
    names: [
      "\\mathord",
      "\\mathbin",
      "\\mathrel",
      "\\mathopen",
      "\\mathclose",
      "\\mathpunct",
      "\\mathinner",
    ],
    props: { numArgs: 1, primitive: !0 },
    handler(e, t) {
      var { parser: n, funcName: r } = e,
        o = t[0];
      return {
        type: "mclass",
        mode: n.mode,
        mclass: "m" + r.slice(5),
        body: en(o),
        isCharacterBox: G(o),
      };
    },
    htmlBuilder: Kn,
    mathmlBuilder: Zn,
  });
var Qn = (e) => {
  var t = "ordgroup" === e.type && e.body.length ? e.body[0] : e;
  return "atom" !== t.type || ("bin" !== t.family && "rel" !== t.family)
    ? "mord"
    : "m" + t.family;
};
Qt({
  type: "mclass",
  names: ["\\@binrel"],
  props: { numArgs: 2 },
  handler(e, t) {
    var { parser: n } = e;
    return {
      type: "mclass",
      mode: n.mode,
      mclass: Qn(t[0]),
      body: en(t[1]),
      isCharacterBox: G(t[1]),
    };
  },
}),
  Qt({
    type: "mclass",
    names: ["\\stackrel", "\\overset", "\\underset"],
    props: { numArgs: 2 },
    handler(e, t) {
      var n,
        { parser: r, funcName: o } = e,
        i = t[1],
        a = t[0];
      n = "\\stackrel" !== o ? Qn(i) : "mrel";
      var s = {
          type: "op",
          mode: i.mode,
          limits: !0,
          alwaysHandleSupSub: !0,
          parentIsSupSub: !1,
          symbol: !1,
          suppressBaseShift: "\\stackrel" !== o,
          body: en(i),
        },
        l = {
          type: "supsub",
          mode: a.mode,
          base: s,
          sup: "\\underset" === o ? null : a,
          sub: "\\underset" === o ? a : null,
        };
      return {
        type: "mclass",
        mode: r.mode,
        mclass: n,
        body: [l],
        isCharacterBox: G(l),
      };
    },
    htmlBuilder: Kn,
    mathmlBuilder: Zn,
  }),
  Qt({
    type: "pmb",
    names: ["\\pmb"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
      var { parser: n } = e;
      return {
        type: "pmb",
        mode: n.mode,
        mclass: Qn(t[0]),
        body: en(t[0]),
      };
    },
    htmlBuilder(e, t) {
      var n = an(e.body, t, !0),
        r = Mt([e.mclass], n, t);
      return (r.style.textShadow = "0.02em 0.01em 0.04px"), r;
    },
    mathmlBuilder(e, t) {
      var n = kn(e.body, t),
        r = new gn("mstyle", n);
      return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
    },
  });
var Jn = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow",
  },
  Xn = () => ({
    type: "styling",
    body: [],
    mode: "math",
    style: "display",
    resetFont: !0,
  }),
  er = (e) => "textord" === e.type && "@" === e.text,
  tr = (e, t) => ("mathord" === e.type || "atom" === e.type) && e.text === t;
function nr(e, t, n) {
  var r = Jn[e];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return n.callFunction(r, [t[0]], [t[1]]);
    case "\\uparrow":
    case "\\downarrow":
      var o = { type: "atom", text: r, mode: "math", family: "rel" },
        i = {
          type: "ordgroup",
          mode: "math",
          body: [
            n.callFunction("\\\\cdleft", [t[0]], []),
            n.callFunction("\\Big", [o], []),
            n.callFunction("\\\\cdright", [t[1]], []),
          ],
        };
      return n.callFunction("\\\\cdparent", [i], []);
    case "\\\\cdlongequal":
      return n.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert":
      return n.callFunction(
        "\\Big",
        [{ type: "textord", text: "\\Vert", mode: "math" }],
        [],
      );
    default:
      return { type: "textord", text: " ", mode: "math" };
  }
}
Qt({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: { numArgs: 1 },
  handler(e, t) {
    var { parser: n, funcName: r } = e;
    return {
      type: "cdlabel",
      mode: n.mode,
      side: r.slice(4),
      label: t[0],
    };
  },
  htmlBuilder(e, t) {
    var n = t.havingStyle(t.style.sup()),
      r = jt(pn(e.label, n, t), t);
    return (
      r.classes.push("cd-label-" + e.side),
      (r.style.bottom = he(0.8 - r.depth)),
      (r.height = 0),
      (r.depth = 0),
      r
    );
  },
  mathmlBuilder(e, t) {
    var n = new gn("mrow", [In(e.label, t)]);
    return (
      (n = new gn("mpadded", [n])).setAttribute("width", "0"),
      "left" === e.side && n.setAttribute("lspace", "-1width"),
      n.setAttribute("voffset", "0.7em"),
      (n = new gn("mstyle", [n])).setAttribute("displaystyle", "false"),
      n.setAttribute("scriptlevel", "1"),
      n
    );
  },
}),
  Qt({
    type: "cdlabelparent",
    names: ["\\\\cdparent"],
    props: { numArgs: 1 },
    handler(e, t) {
      var { parser: n } = e;
      return { type: "cdlabelparent", mode: n.mode, fragment: t[0] };
    },
    htmlBuilder(e, t) {
      var n = jt(pn(e.fragment, t), t);
      return n.classes.push("cd-vert-arrow"), n;
    },
    mathmlBuilder: (e, t) => new gn("mrow", [In(e.fragment, t)]),
  }),
  Qt({
    type: "textord",
    names: ["\\@char"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
      for (
        var { parser: n } = e, r = zn(t[0], "ordgroup").body, o = "", i = 0;
        i < r.length;
        i++
      )
        o += zn(r[i], "textord").text;
      var a,
        s = parseInt(o);
      if (isNaN(s)) throw new L("\\@char has non-numeric argument " + o);
      if (s < 0 || s >= 1114111)
        throw new L("\\@char with invalid code point " + o);
      return (
        s <= 65535
          ? (a = String.fromCharCode(s))
          : ((s -= 65536),
            (a = String.fromCharCode(55296 + (s >> 10), 56320 + (1023 & s)))),
        { type: "textord", mode: n.mode, text: a }
      );
    },
  });
var rr = (e, t) => {
    var n = an(e.body, t.withColor(e.color), !1);
    return Dt(n);
  },
  or = (e, t) => {
    var n = kn(e.body, t.withColor(e.color)),
      r = new gn("mstyle", n);
    return r.setAttribute("mathcolor", e.color), r;
  };
Qt({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"],
  },
  handler(e, t) {
    var { parser: n } = e,
      r = zn(t[0], "color-token").color,
      o = t[1];
    return { type: "color", mode: n.mode, color: r, body: en(o) };
  },
  htmlBuilder: rr,
  mathmlBuilder: or,
}),
  Qt({
    type: "color",
    names: ["\\color"],
    props: { numArgs: 1, allowedInText: !0, argTypes: ["color"] },
    handler(e, t) {
      var { parser: n, breakOnTokenText: r } = e,
        o = zn(t[0], "color-token").color;
      n.gullet.macros.set("\\current@color", o);
      var i = n.parseExpression(!0, r);
      return { type: "color", mode: n.mode, color: o, body: i };
    },
    htmlBuilder: rr,
    mathmlBuilder: or,
  }),
  Qt({
    type: "cr",
    names: ["\\\\"],
    props: { numArgs: 0, numOptionalArgs: 0, allowedInText: !0 },
    handler(e, t, n) {
      var { parser: r } = e,
        o = "[" === r.gullet.future().text ? r.parseSizeGroup(!0) : null,
        i =
          !r.settings.displayMode ||
          !r.settings.useStrictBehavior(
            "newLineInDisplayMode",
            "In LaTeX, \\\\ or \\newline does nothing in display mode",
          );
      return {
        type: "cr",
        mode: r.mode,
        newLine: i,
        size: o && zn(o, "size").value,
      };
    },
    htmlBuilder(e, t) {
      var n = Mt(["mspace"], [], t);
      return (
        e.newLine &&
          (n.classes.push("newline"),
          e.size && (n.style.marginTop = he(fe(e.size, t)))),
        n
      );
    },
    mathmlBuilder(e, t) {
      var n = new gn("mspace");
      return (
        e.newLine &&
          (n.setAttribute("linebreak", "newline"),
          e.size && n.setAttribute("height", he(fe(e.size, t)))),
        n
      );
    },
  });
var ir = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture",
  },
  ar = (e) => {
    var t = e.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
      throw new L("Expected a control sequence", e);
    return t;
  },
  sr = (e, t, n, r) => {
    var o = e.gullet.macros.get(n.text);
    null == o &&
      ((n.noexpand = !0),
      (o = {
        tokens: [n],
        numArgs: 0,
        unexpandable: !e.gullet.isExpandable(n.text),
      })),
      e.gullet.macros.set(t, o, r);
  };
Qt({
  type: "internal",
  names: ["\\global", "\\long", "\\\\globallong"],
  props: { numArgs: 0, allowedInText: !0 },
  handler(e) {
    var { parser: t, funcName: n } = e;
    t.consumeSpaces();
    var r = t.fetch();
    if (ir[r.text])
      return (
        ("\\global" !== n && "\\\\globallong" !== n) || (r.text = ir[r.text]),
        zn(t.parseFunction(), "internal")
      );
    throw new L("Invalid token after macro prefix", r);
  },
}),
  Qt({
    type: "internal",
    names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e) {
      var { parser: t, funcName: n } = e,
        r = t.gullet.popToken(),
        o = r.text;
      if (/^(?:[\\{}$&#^_]|EOF)$/.test(o))
        throw new L("Expected a control sequence", r);
      for (var i, a = 0, s = [[]]; "{" !== t.gullet.future().text; )
        if ("#" === (r = t.gullet.popToken()).text) {
          if ("{" === t.gullet.future().text) {
            (i = t.gullet.future()), s[a].push("{");
            break;
          }
          if (((r = t.gullet.popToken()), !/^[1-9]$/.test(r.text)))
            throw new L('Invalid argument number "' + r.text + '"');
          if (parseInt(r.text) !== a + 1)
            throw new L('Argument number "' + r.text + '" out of order');
          a++, s.push([]);
        } else {
          if ("EOF" === r.text) throw new L("Expected a macro definition");
          s[a].push(r.text);
        }
      var { tokens: l } = t.gullet.consumeArg();
      return (
        i && l.unshift(i),
        ("\\edef" !== n && "\\xdef" !== n) ||
          (l = t.gullet.expandTokens(l)).reverse(),
        t.gullet.macros.set(
          o,
          { tokens: l, numArgs: a, delimiters: s },
          n === ir[n],
        ),
        { type: "internal", mode: t.mode }
      );
    },
  }),
  Qt({
    type: "internal",
    names: ["\\let", "\\\\globallet"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e) {
      var { parser: t, funcName: n } = e,
        r = ar(t.gullet.popToken());
      t.gullet.consumeSpaces();
      var o = ((e) => {
        var t = e.gullet.popToken();
        return (
          "=" === t.text &&
            " " === (t = e.gullet.popToken()).text &&
            (t = e.gullet.popToken()),
          t
        );
      })(t);
      return (
        sr(t, r, o, "\\\\globallet" === n), { type: "internal", mode: t.mode }
      );
    },
  }),
  Qt({
    type: "internal",
    names: ["\\futurelet", "\\\\globalfuture"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e) {
      var { parser: t, funcName: n } = e,
        r = ar(t.gullet.popToken()),
        o = t.gullet.popToken(),
        i = t.gullet.popToken();
      return (
        sr(t, r, i, "\\\\globalfuture" === n),
        t.gullet.pushToken(i),
        t.gullet.pushToken(o),
        { type: "internal", mode: t.mode }
      );
    },
  });
var lr = function (e, t, n) {
    var r = Me((Ne.math[e] && Ne.math[e].replace) || e, t, n);
    if (!r)
      throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
    return r;
  },
  cr = function (e, t, n, r) {
    var o = n.havingBaseStyle(t),
      i = Mt(r.concat(o.sizingClasses(n)), [e], n),
      a = o.sizeMultiplier / n.sizeMultiplier;
    return (
      (i.height *= a), (i.depth *= a), (i.maxFontSize = o.sizeMultiplier), i
    );
  },
  ur = function (e, t, n) {
    var r = t.havingBaseStyle(n),
      o =
        (1 - t.sizeMultiplier / r.sizeMultiplier) * t.fontMetrics().axisHeight;
    e.classes.push("delimcenter"),
      (e.style.top = he(o)),
      (e.height -= o),
      (e.depth += o);
  },
  dr = function (e, t, n, r, o, i) {
    var a = (function (e, t, n, r) {
        return kt(e, "Size" + t + "-Regular", n, r);
      })(e, t, o, r),
      s = cr(Mt(["delimsizing", "size" + t], [a], r), re.TEXT, r, i);
    return n && ur(s, r, re.TEXT), s;
  },
  pr = function (e, t, n) {
    return {
      type: "elem",
      elem: Mt(
        [
          "delimsizinginner",
          "Size1-Regular" === t ? "delim-size1" : "delim-size4",
        ],
        [Mt([], [kt(e, t, n)])],
      ),
    };
  },
  fr = function (e, t, n) {
    var r = Ae["Size4-Regular"][e.charCodeAt(0)]
        ? Ae["Size4-Regular"][e.charCodeAt(0)][4]
        : Ae["Size1-Regular"][e.charCodeAt(0)][4],
      o = new Ce(
        "inner",
        (function (e, t) {
          switch (e) {
            case "⎜":
              return se("M291 0 H417 V" + t + " H291z");
            case "∣":
              return se("M145 0 H188 V" + t + " H145z");
            case "∥":
              return (
                se("M145 0 H188 V" + t + " H145z") +
                se("M367 0 H410 V" + t + " H367z")
              );
            case "⎟":
              return se("M457 0 H583 V" + t + " H457z");
            case "⎢":
              return se("M319 0 H403 V" + t + " H319z");
            case "⎥":
              return se("M263 0 H347 V" + t + " H263z");
            case "⎪":
              return se("M384 0 H504 V" + t + " H384z");
            case "⏐":
              return se("M312 0 H355 V" + t + " H312z");
            case "‖":
              return (
                se("M257 0 H300 V" + t + " H257z") +
                se("M478 0 H521 V" + t + " H478z")
              );
            default:
              return "";
          }
        })(e, Math.round(1e3 * t)),
      ),
      i = new ke([o], {
        width: he(r),
        height: he(t),
        style: "width:" + he(r),
        viewBox: "0 0 " + 1e3 * r + " " + Math.round(1e3 * t),
        preserveAspectRatio: "xMinYMin",
      }),
      a = Pt([], [i], n);
    return (
      (a.height = t),
      (a.style.height = he(t)),
      (a.style.width = he(r)),
      { type: "elem", elem: a }
    );
  },
  hr = { type: "kern", size: -0.008 },
  mr = new Set(["|", "\\lvert", "\\rvert", "\\vert"]),
  gr = new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]),
  yr = function (e, t, n, r, o, i) {
    var a,
      s,
      l,
      c,
      u = "",
      d = 0;
    (a = l = c = e), (s = null);
    var p = "Size1-Regular";
    "\\uparrow" === e
      ? (l = c = "⏐")
      : "\\Uparrow" === e
        ? (l = c = "‖")
        : "\\downarrow" === e
          ? (a = l = "⏐")
          : "\\Downarrow" === e
            ? (a = l = "‖")
            : "\\updownarrow" === e
              ? ((a = "\\uparrow"), (l = "⏐"), (c = "\\downarrow"))
              : "\\Updownarrow" === e
                ? ((a = "\\Uparrow"), (l = "‖"), (c = "\\Downarrow"))
                : mr.has(e)
                  ? ((l = "∣"), (u = "vert"), (d = 333))
                  : gr.has(e)
                    ? ((l = "∥"), (u = "doublevert"), (d = 556))
                    : "[" === e || "\\lbrack" === e
                      ? ((a = "⎡"),
                        (l = "⎢"),
                        (c = "⎣"),
                        (p = "Size4-Regular"),
                        (u = "lbrack"),
                        (d = 667))
                      : "]" === e || "\\rbrack" === e
                        ? ((a = "⎤"),
                          (l = "⎥"),
                          (c = "⎦"),
                          (p = "Size4-Regular"),
                          (u = "rbrack"),
                          (d = 667))
                        : "\\lfloor" === e || "⌊" === e
                          ? ((l = a = "⎢"),
                            (c = "⎣"),
                            (p = "Size4-Regular"),
                            (u = "lfloor"),
                            (d = 667))
                          : "\\lceil" === e || "⌈" === e
                            ? ((a = "⎡"),
                              (l = c = "⎢"),
                              (p = "Size4-Regular"),
                              (u = "lceil"),
                              (d = 667))
                            : "\\rfloor" === e || "⌋" === e
                              ? ((l = a = "⎥"),
                                (c = "⎦"),
                                (p = "Size4-Regular"),
                                (u = "rfloor"),
                                (d = 667))
                              : "\\rceil" === e || "⌉" === e
                                ? ((a = "⎤"),
                                  (l = c = "⎥"),
                                  (p = "Size4-Regular"),
                                  (u = "rceil"),
                                  (d = 667))
                                : "(" === e || "\\lparen" === e
                                  ? ((a = "⎛"),
                                    (l = "⎜"),
                                    (c = "⎝"),
                                    (p = "Size4-Regular"),
                                    (u = "lparen"),
                                    (d = 875))
                                  : ")" === e || "\\rparen" === e
                                    ? ((a = "⎞"),
                                      (l = "⎟"),
                                      (c = "⎠"),
                                      (p = "Size4-Regular"),
                                      (u = "rparen"),
                                      (d = 875))
                                    : "\\{" === e || "\\lbrace" === e
                                      ? ((a = "⎧"),
                                        (s = "⎨"),
                                        (c = "⎩"),
                                        (l = "⎪"),
                                        (p = "Size4-Regular"))
                                      : "\\}" === e || "\\rbrace" === e
                                        ? ((a = "⎫"),
                                          (s = "⎬"),
                                          (c = "⎭"),
                                          (l = "⎪"),
                                          (p = "Size4-Regular"))
                                        : "\\lgroup" === e || "⟮" === e
                                          ? ((a = "⎧"),
                                            (c = "⎩"),
                                            (l = "⎪"),
                                            (p = "Size4-Regular"))
                                          : "\\rgroup" === e || "⟯" === e
                                            ? ((a = "⎫"),
                                              (c = "⎭"),
                                              (l = "⎪"),
                                              (p = "Size4-Regular"))
                                            : "\\lmoustache" === e || "⎰" === e
                                              ? ((a = "⎧"),
                                                (c = "⎭"),
                                                (l = "⎪"),
                                                (p = "Size4-Regular"))
                                              : ("\\rmoustache" !== e &&
                                                  "⎱" !== e) ||
                                                ((a = "⎫"),
                                                (c = "⎩"),
                                                (l = "⎪"),
                                                (p = "Size4-Regular"));
    var f = lr(a, p, o),
      h = f.height + f.depth,
      m = lr(l, p, o),
      g = m.height + m.depth,
      y = lr(c, p, o),
      v = y.height + y.depth,
      b = 0,
      S = 1;
    if (null !== s) {
      var _ = lr(s, p, o);
      (b = _.height + _.depth), (S = 2);
    }
    var x = h + v + b,
      w = x + Math.max(0, Math.ceil((t - x) / (S * g))) * S * g,
      E = r.fontMetrics().axisHeight;
    n && (E *= r.sizeMultiplier);
    var T = w / 2 - E,
      k = [];
    if (u.length > 0) {
      var C = w - h - v,
        I = Math.round(1e3 * w),
        A = (function (e, t) {
          switch (e) {
            case "lbrack":
              return (
                "M403 1759 V84 H666 V0 H319 V1759 v" +
                t +
                " v1759 v84 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" +
                t +
                " v1759 v84 h84z"
              );
            case "rbrack":
              return (
                "M347 1759 V0 H0 V84 H263 V1759 v" +
                t +
                " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" +
                t +
                " v1759 h84z"
              );
            case "vert":
              return (
                "M145 15 v585 v" +
                t +
                " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
                -t +
                " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" +
                t +
                " v585 h43z"
              );
            case "doublevert":
              return (
                "M145 15 v585 v" +
                t +
                " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
                -t +
                " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" +
                t +
                " v585 h43z\nM367 15 v585 v" +
                t +
                " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
                -t +
                " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" +
                t +
                " v585 h43z"
              );
            case "lfloor":
              return (
                "M319 602 V0 H403 V602 v" +
                t +
                " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" +
                t +
                " v1715 H319z"
              );
            case "rfloor":
              return (
                "M319 602 V0 H403 V602 v" +
                t +
                " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" +
                t +
                " v1715 H319z"
              );
            case "lceil":
              return (
                "M403 1759 V84 H666 V0 H319 V1759 v" +
                t +
                " v602 h84z\nM403 1759 V0 H319 V1759 v" +
                t +
                " v602 h84z"
              );
            case "rceil":
              return (
                "M347 1759 V0 H0 V84 H263 V1759 v" +
                t +
                " v602 h84z\nM347 1759 V0 h-84 V1759 v" +
                t +
                " v602 h84z"
              );
            case "lparen":
              return (
                "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," +
                (t + 84) +
                "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" +
                (t + 92) +
                "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z"
              );
            case "rparen":
              return (
                "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," +
                (t + 9) +
                "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" +
                (t + 144) +
                "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z"
              );
            default:
              throw new Error("Unknown stretchy delimiter.");
          }
        })(u, Math.round(1e3 * C)),
        O = new Ce(u, A),
        R = he(d / 1e3),
        M = he(I / 1e3),
        P = new ke([O], {
          width: R,
          height: M,
          viewBox: "0 0 " + d + " " + I,
        }),
        N = Pt([], [P], r);
      (N.height = I / 1e3),
        (N.style.width = R),
        (N.style.height = M),
        k.push({ type: "elem", elem: N });
    } else {
      if ((k.push(pr(c, p, o)), k.push(hr), null === s)) {
        var D = w - h - v + 0.016;
        k.push(fr(l, D, r));
      } else {
        var j = (w - h - v - b) / 2 + 0.016;
        k.push(fr(l, j, r)),
          k.push(hr),
          k.push(pr(s, p, o)),
          k.push(hr),
          k.push(fr(l, j, r));
      }
      k.push(hr), k.push(pr(a, p, o));
    }
    var L = r.havingBaseStyle(re.TEXT),
      F = Lt({
        positionType: "bottom",
        positionData: T,
        children: k,
      });
    return cr(Mt(["delimsizing", "mult"], [F], L), re.TEXT, r, i);
  },
  vr = 0.08,
  br = function (e, t, n, r, o) {
    var i = (function (e, t, n) {
        t *= 1e3;
        var r = "";
        switch (e) {
          case "sqrtMain":
            r = (function (e) {
              return (
                "M95," +
                (622 + e + 80) +
                "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" +
                e / 2.075 +
                " -" +
                e +
                "\nc5.3,-9.3,12,-14,20,-14\nH400000v" +
                (40 + e) +
                "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" +
                (834 + e) +
                " 80h400000v" +
                (40 + e) +
                "h-400000z"
              );
            })(t);
            break;
          case "sqrtSize1":
            r = (function (e) {
              return (
                "M263," +
                (601 + e + 80) +
                "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" +
                e / 2.084 +
                " -" +
                e +
                "\nc4.7,-7.3,11,-11,19,-11\nH40000v" +
                (40 + e) +
                "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" +
                (1001 + e) +
                " 80h400000v" +
                (40 + e) +
                "h-400000z"
              );
            })(t);
            break;
          case "sqrtSize2":
            r = (function (e) {
              return (
                "M983 " +
                (10 + e + 80) +
                "\nl" +
                e / 3.13 +
                " -" +
                e +
                "\nc4,-6.7,10,-10,18,-10 H400000v" +
                (40 + e) +
                "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" +
                (1001 + e) +
                " 80h400000v" +
                (40 + e) +
                "h-400000z"
              );
            })(t);
            break;
          case "sqrtSize3":
            r = (function (e) {
              return (
                "M424," +
                (2398 + e + 80) +
                "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" +
                e / 4.223 +
                " -" +
                e +
                "c4,-6.7,10,-10,18,-10 H400000\nv" +
                (40 + e) +
                "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" +
                (1001 + e) +
                " 80\nh400000v" +
                (40 + e) +
                "h-400000z"
              );
            })(t);
            break;
          case "sqrtSize4":
            r = (function (e) {
              return (
                "M473," +
                (2713 + e + 80) +
                "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" +
                e / 5.298 +
                " -" +
                e +
                "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" +
                (40 + e) +
                "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" +
                (1001 + e) +
                " 80h400000v" +
                (40 + e) +
                "H1017.7z"
              );
            })(t);
            break;
          case "sqrtTall":
            r = (function (e, t, n) {
              return (
                "M702 " +
                (e + 80) +
                "H400000" +
                (40 + e) +
                "\nH742v" +
                (n - 54 - 80 - e) +
                "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 80H400000v" +
                (40 + e) +
                "H742z"
              );
            })(t, 0, n);
        }
        return r;
      })(e, r, n),
      a = new Ce(e, i),
      s = new ke([a], {
        width: "400em",
        height: he(t),
        viewBox: "0 0 400000 " + n,
        preserveAspectRatio: "xMinYMin slice",
      });
    return Pt(["hide-tail"], [s], o);
  },
  Sr = new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "\\surd",
  ]),
  _r = new Set([
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "|",
    "\\|",
    "\\vert",
    "\\Vert",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
  ]),
  xr = new Set([
    "<",
    ">",
    "\\langle",
    "\\rangle",
    "/",
    "\\backslash",
    "\\lt",
    "\\gt",
  ]),
  wr = [0, 1.2, 1.8, 2.4, 3],
  Er = function (e, t, n, r, o) {
    if (
      ("<" === e || "\\lt" === e || "⟨" === e
        ? (e = "\\langle")
        : (">" !== e && "\\gt" !== e && "⟩" !== e) || (e = "\\rangle"),
      Sr.has(e) || xr.has(e))
    )
      return dr(e, t, !1, n, r, o);
    if (_r.has(e)) return yr(e, wr[t], !1, n, r, o);
    throw new L("Illegal delimiter: '" + e + "'");
  },
  Tr = [
    { type: "small", style: re.SCRIPTSCRIPT },
    { type: "small", style: re.SCRIPT },
    { type: "small", style: re.TEXT },
    { type: "large", size: 1 },
    { type: "large", size: 2 },
    { type: "large", size: 3 },
    { type: "large", size: 4 },
  ],
  kr = [
    { type: "small", style: re.SCRIPTSCRIPT },
    { type: "small", style: re.SCRIPT },
    { type: "small", style: re.TEXT },
    { type: "stack" },
  ],
  Cr = [
    { type: "small", style: re.SCRIPTSCRIPT },
    { type: "small", style: re.SCRIPT },
    { type: "small", style: re.TEXT },
    { type: "large", size: 1 },
    { type: "large", size: 2 },
    { type: "large", size: 3 },
    { type: "large", size: 4 },
    { type: "stack" },
  ],
  Ir = function (e) {
    if ("small" === e.type) return "Main-Regular";
    if ("large" === e.type) return "Size" + e.size + "-Regular";
    if ("stack" === e.type) return "Size4-Regular";
    var t = e.type;
    throw new Error("Add support for delim type '" + t + "' here.");
  },
  Ar = function (e, t, n, r) {
    for (var o = Math.min(2, 3 - r.style.size); o < n.length; o++) {
      var i = n[o];
      if ("stack" === i.type) break;
      var a = lr(e, Ir(i), "math"),
        s = a.height + a.depth;
      if (
        ("small" === i.type && (s *= r.havingBaseStyle(i.style).sizeMultiplier),
        s > t)
      )
        return i;
    }
    return n[n.length - 1];
  },
  Or = function (e, t, n, r, o, i) {
    var a;
    "<" === e || "\\lt" === e || "⟨" === e
      ? (e = "\\langle")
      : (">" !== e && "\\gt" !== e && "⟩" !== e) || (e = "\\rangle"),
      (a = xr.has(e) ? Tr : Sr.has(e) ? Cr : kr);
    var s = Ar(e, t, a, r);
    return "small" === s.type
      ? (function (e, t, n, r, o, i) {
          var a = kt(e, "Main-Regular", o, r),
            s = cr(a, t, r, i);
          return n && ur(s, r, t), s;
        })(e, s.style, n, r, o, i)
      : "large" === s.type
        ? dr(e, s.size, n, r, o, i)
        : yr(e, t, n, r, o, i);
  },
  Rr = function (e, t, n, r, o, i) {
    var a = r.fontMetrics().axisHeight * r.sizeMultiplier,
      s = 5 / r.fontMetrics().ptPerEm,
      l = Math.max(t - a, n + a),
      c = Math.max((l / 500) * 901, 2 * l - s);
    return Or(e, c, !0, r, o, i);
  },
  Mr = {
    "\\bigl": { mclass: "mopen", size: 1 },
    "\\Bigl": { mclass: "mopen", size: 2 },
    "\\biggl": { mclass: "mopen", size: 3 },
    "\\Biggl": { mclass: "mopen", size: 4 },
    "\\bigr": { mclass: "mclose", size: 1 },
    "\\Bigr": { mclass: "mclose", size: 2 },
    "\\biggr": { mclass: "mclose", size: 3 },
    "\\Biggr": { mclass: "mclose", size: 4 },
    "\\bigm": { mclass: "mrel", size: 1 },
    "\\Bigm": { mclass: "mrel", size: 2 },
    "\\biggm": { mclass: "mrel", size: 3 },
    "\\Biggm": { mclass: "mrel", size: 4 },
    "\\big": { mclass: "mord", size: 1 },
    "\\Big": { mclass: "mord", size: 2 },
    "\\bigg": { mclass: "mord", size: 3 },
    "\\Bigg": { mclass: "mord", size: 4 },
  },
  Pr = new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "<",
    ">",
    "\\langle",
    "⟨",
    "\\rangle",
    "⟩",
    "\\lt",
    "\\gt",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
    "/",
    "\\backslash",
    "|",
    "\\vert",
    "\\|",
    "\\Vert",
    "\\uparrow",
    "\\Uparrow",
    "\\downarrow",
    "\\Downarrow",
    "\\updownarrow",
    "\\Updownarrow",
    ".",
  ]);
function Nr(e) {
  return "isMiddle" in e;
}
function Dr(e, t) {
  var n = Vn(e);
  if (n && Pr.has(n.text)) return n;
  throw new L(
    n
      ? "Invalid delimiter '" + n.text + "' after '" + t.funcName + "'"
      : "Invalid delimiter type '" + e.type + "'",
    e,
  );
}
function jr(e) {
  if (!e.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
Qt({
  type: "delimsizing",
  names: [
    "\\bigl",
    "\\Bigl",
    "\\biggl",
    "\\Biggl",
    "\\bigr",
    "\\Bigr",
    "\\biggr",
    "\\Biggr",
    "\\bigm",
    "\\Bigm",
    "\\biggm",
    "\\Biggm",
    "\\big",
    "\\Big",
    "\\bigg",
    "\\Bigg",
  ],
  props: { numArgs: 1, argTypes: ["primitive"] },
  handler: (e, t) => {
    var n = Dr(t[0], e);
    return {
      type: "delimsizing",
      mode: e.parser.mode,
      size: Mr[e.funcName].size,
      mclass: Mr[e.funcName].mclass,
      delim: n.text,
    };
  },
  htmlBuilder: (e, t) =>
    "." === e.delim
      ? Mt([e.mclass])
      : Er(e.delim, e.size, t, e.mode, [e.mclass]),
  mathmlBuilder: (e) => {
    var t = [];
    "." !== e.delim && t.push(_n(e.delim, e.mode));
    var n = new gn("mo", t);
    "mopen" === e.mclass || "mclose" === e.mclass
      ? n.setAttribute("fence", "true")
      : n.setAttribute("fence", "false"),
      n.setAttribute("stretchy", "true");
    var r = he(wr[e.size]);
    return n.setAttribute("minsize", r), n.setAttribute("maxsize", r), n;
  },
}),
  Qt({
    type: "leftright-right",
    names: ["\\right"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
      var n = e.parser.gullet.macros.get("\\current@color");
      if (n && "string" != typeof n)
        throw new L("\\current@color set to non-string in \\right");
      return {
        type: "leftright-right",
        mode: e.parser.mode,
        delim: Dr(t[0], e).text,
        color: n,
      };
    },
  }),
  Qt({
    type: "leftright",
    names: ["\\left"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
      var n = Dr(t[0], e),
        r = e.parser;
      ++r.leftrightDepth;
      var o = r.parseExpression(!1);
      --r.leftrightDepth, r.expect("\\right", !1);
      var i = zn(r.parseFunction(), "leftright-right");
      return {
        type: "leftright",
        mode: r.mode,
        body: o,
        left: n.text,
        right: i.delim,
        rightColor: i.color,
      };
    },
    htmlBuilder: (e, t) => {
      jr(e);
      for (
        var n,
          r,
          o = an(e.body, t, !0, ["mopen", "mclose"]),
          i = 0,
          a = 0,
          s = !1,
          l = 0;
        l < o.length;
        l++
      )
        Nr(o[l])
          ? (s = !0)
          : ((i = Math.max(o[l].height, i)), (a = Math.max(o[l].depth, a)));
      if (
        ((i *= t.sizeMultiplier),
        (a *= t.sizeMultiplier),
        (n =
          "." === e.left
            ? dn(t, ["mopen"])
            : Rr(e.left, i, a, t, e.mode, ["mopen"])),
        o.unshift(n),
        s)
      )
        for (var c = 1; c < o.length; c++) {
          var u = o[c];
          if (Nr(u)) {
            var d = u.isMiddle;
            o[c] = Rr(d.delim, i, a, d.options, e.mode, []);
          }
        }
      if ("." === e.right) r = dn(t, ["mclose"]);
      else {
        var p = e.rightColor ? t.withColor(e.rightColor) : t;
        r = Rr(e.right, i, a, p, e.mode, ["mclose"]);
      }
      return o.push(r), Mt(["minner"], o, t);
    },
    mathmlBuilder: (e, t) => {
      jr(e);
      var n = kn(e.body, t);
      if ("." !== e.left) {
        var r = new gn("mo", [_n(e.left, e.mode)]);
        r.setAttribute("fence", "true"), n.unshift(r);
      }
      if ("." !== e.right) {
        var o = new gn("mo", [_n(e.right, e.mode)]);
        o.setAttribute("fence", "true"),
          e.rightColor && o.setAttribute("mathcolor", e.rightColor),
          n.push(o);
      }
      return xn(n);
    },
  }),
  Qt({
    type: "middle",
    names: ["\\middle"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
      var n = Dr(t[0], e);
      if (!e.parser.leftrightDepth)
        throw new L("\\middle without preceding \\left", n);
      return { type: "middle", mode: e.parser.mode, delim: n.text };
    },
    htmlBuilder: (e, t) => {
      var n;
      return (
        "." === e.delim
          ? (n = dn(t, []))
          : ((n = Er(e.delim, 1, t, e.mode, [])).isMiddle = {
              delim: e.delim,
              options: t,
            }),
        n
      );
    },
    mathmlBuilder: (e, t) => {
      var n =
          "\\vert" === e.delim || "|" === e.delim
            ? _n("|", "text")
            : _n(e.delim, e.mode),
        r = new gn("mo", [n]);
      return (
        r.setAttribute("fence", "true"),
        r.setAttribute("lspace", "0.05em"),
        r.setAttribute("rspace", "0.05em"),
        r
      );
    },
  });
var Lr = (e, t) => {
    var n,
      r,
      o,
      i,
      a = jt(pn(e.body, t), t),
      s = e.label.slice(1),
      l = t.sizeMultiplier,
      c = G(e.body);
    if ("sout" === s)
      ((n = Mt(["stretchy", "sout"])).height =
        t.fontMetrics().defaultRuleThickness / l),
        (r = -0.5 * t.fontMetrics().xHeight);
    else if ("phase" === s) {
      var u = fe({ number: 0.6, unit: "pt" }, t),
        d = fe({ number: 0.35, unit: "ex" }, t);
      l /= t.havingBaseSizing().sizeMultiplier;
      var p = a.height + a.depth + u + d;
      a.style.paddingLeft = he(p / 2 + u);
      var f = Math.floor(1e3 * p * l),
        h =
          "M400000 " +
          (o = f) +
          " H0 L" +
          o / 2 +
          " 0 l65 45 L145 " +
          (o - 80) +
          " H400000z",
        m = new ke([new Ce("phase", h)], {
          width: "400em",
          height: he(f / 1e3),
          viewBox: "0 0 400000 " + f,
          preserveAspectRatio: "xMinYMin slice",
        });
      ((n = Pt(["hide-tail"], [m], t)).style.height = he(p)),
        (r = a.depth + u + d);
    } else {
      var g, y;
      /cancel/.test(s)
        ? c || a.classes.push("cancel-pad")
        : "angl" === s
          ? a.classes.push("anglpad")
          : a.classes.push("boxpad");
      var v = 0;
      /box/.test(s)
        ? ((v = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness)),
          (y = g = t.fontMetrics().fboxsep + ("colorbox" === s ? 0 : v)))
        : "angl" === s
          ? ((g =
              4 *
              (v = Math.max(
                t.fontMetrics().defaultRuleThickness,
                t.minRuleThickness,
              ))),
            (y = Math.max(0, 0.25 - a.depth)))
          : (y = g = c ? 0.2 : 0),
        (n = (function (e, t, n, r, o) {
          var i,
            a = e.height + e.depth + n + r;
          if (/fbox|color|angl/.test(t)) {
            if (((i = Mt(["stretchy", t], [], o)), "fbox" === t)) {
              var s = o.color && o.getColor();
              s && (i.style.borderColor = s);
            }
          } else {
            var l = [];
            /^[bx]cancel$/.test(t) &&
              l.push(
                new Ie({
                  x1: "0",
                  y1: "0",
                  x2: "100%",
                  y2: "100%",
                  "stroke-width": "0.046em",
                }),
              ),
              /^x?cancel$/.test(t) &&
                l.push(
                  new Ie({
                    x1: "0",
                    y1: "100%",
                    x2: "100%",
                    y2: "0",
                    "stroke-width": "0.046em",
                  }),
                );
            var c = new ke(l, { width: "100%", height: he(a) });
            i = Pt([], [c], o);
          }
          return (i.height = a), (i.style.height = he(a)), i;
        })(a, s, g, y, t)),
        /fbox|boxed|fcolorbox/.test(s)
          ? ((n.style.borderStyle = "solid"), (n.style.borderWidth = he(v)))
          : "angl" === s &&
            0.049 !== v &&
            ((n.style.borderTopWidth = he(v)),
            (n.style.borderRightWidth = he(v))),
        (r = a.depth + y),
        e.backgroundColor &&
          ((n.style.backgroundColor = e.backgroundColor),
          e.borderColor && (n.style.borderColor = e.borderColor));
    }
    if (e.backgroundColor)
      i = Lt({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: n, shift: r },
          { type: "elem", elem: a, shift: 0 },
        ],
      });
    else {
      var b = /cancel|phase/.test(s) ? ["svg-align"] : [];
      i = Lt({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: a, shift: 0 },
          { type: "elem", elem: n, shift: r, wrapperClasses: b },
        ],
      });
    }
    return (
      /cancel/.test(s) && ((i.height = a.height), (i.depth = a.depth)),
      /cancel/.test(s) && !c
        ? Mt(["mord", "cancel-lap"], [i], t)
        : Mt(["mord"], [i], t)
    );
  },
  Fr = (e, t) => {
    var n,
      r = new gn(e.label.includes("colorbox") ? "mpadded" : "menclose", [
        In(e.body, t),
      ]);
    switch (e.label) {
      case "\\cancel":
        r.setAttribute("notation", "updiagonalstrike");
        break;
      case "\\bcancel":
        r.setAttribute("notation", "downdiagonalstrike");
        break;
      case "\\phase":
        r.setAttribute("notation", "phasorangle");
        break;
      case "\\sout":
        r.setAttribute("notation", "horizontalstrike");
        break;
      case "\\fbox":
        r.setAttribute("notation", "box");
        break;
      case "\\angl":
        r.setAttribute("notation", "actuarial");
        break;
      case "\\fcolorbox":
      case "\\colorbox":
        if (
          ((n = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm),
          r.setAttribute("width", "+" + 2 * n + "pt"),
          r.setAttribute("height", "+" + 2 * n + "pt"),
          r.setAttribute("lspace", n + "pt"),
          r.setAttribute("voffset", n + "pt"),
          "\\fcolorbox" === e.label)
        ) {
          var o = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
          r.setAttribute(
            "style",
            "border: " + he(o) + " solid " + e.borderColor,
          );
        }
        break;
      case "\\xcancel":
        r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
    }
    return (
      e.backgroundColor && r.setAttribute("mathbackground", e.backgroundColor),
      r
    );
  };
Qt({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "hbox"],
  },
  handler(e, t, n) {
    var { parser: r, funcName: o } = e,
      i = zn(t[0], "color-token").color,
      a = t[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: o,
      backgroundColor: i,
      body: a,
    };
  },
  htmlBuilder: Lr,
  mathmlBuilder: Fr,
}),
  Qt({
    type: "enclose",
    names: ["\\fcolorbox"],
    props: {
      numArgs: 3,
      allowedInText: !0,
      argTypes: ["color", "color", "hbox"],
    },
    handler(e, t, n) {
      var { parser: r, funcName: o } = e,
        i = zn(t[0], "color-token").color,
        a = zn(t[1], "color-token").color,
        s = t[2];
      return {
        type: "enclose",
        mode: r.mode,
        label: o,
        backgroundColor: a,
        borderColor: i,
        body: s,
      };
    },
    htmlBuilder: Lr,
    mathmlBuilder: Fr,
  }),
  Qt({
    type: "enclose",
    names: ["\\fbox"],
    props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !0 },
    handler(e, t) {
      var { parser: n } = e;
      return {
        type: "enclose",
        mode: n.mode,
        label: "\\fbox",
        body: t[0],
      };
    },
  }),
  Qt({
    type: "enclose",
    names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
    props: { numArgs: 1 },
    handler(e, t) {
      var { parser: n, funcName: r } = e,
        o = t[0];
      return { type: "enclose", mode: n.mode, label: r, body: o };
    },
    htmlBuilder: Lr,
    mathmlBuilder: Fr,
  }),
  Qt({
    type: "enclose",
    names: ["\\sout"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
      var { parser: n, funcName: r } = e;
      "math" === n.mode &&
        n.settings.reportNonstrict(
          "mathVsSout",
          "LaTeX's \\sout works only in text mode",
        );
      var o = t[0];
      return { type: "enclose", mode: n.mode, label: r, body: o };
    },
    htmlBuilder: Lr,
    mathmlBuilder: Fr,
  }),
  Qt({
    type: "enclose",
    names: ["\\angl"],
    props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !1 },
    handler(e, t) {
      var { parser: n } = e;
      return {
        type: "enclose",
        mode: n.mode,
        label: "\\angl",
        body: t[0],
      };
    },
  });
var Ur = {};
function Br(e) {
  for (
    var {
        type: t,
        names: n,
        props: r,
        handler: o,
        htmlBuilder: i,
        mathmlBuilder: a,
      } = e,
      s = {
        type: t,
        numArgs: r.numArgs || 0,
        allowedInText: !1,
        numOptionalArgs: 0,
        handler: o,
      },
      l = 0;
    l < n.length;
    ++l
  )
    Ur[n[l]] = s;
  i && (Kt[t] = i), a && (Zt[t] = a);
}
var zr = {};
function Hr(e, t) {
  zr[e] = t;
}
class Vr {
  constructor(e, t, n) {
    (this.lexer = void 0),
      (this.start = void 0),
      (this.end = void 0),
      (this.lexer = e),
      (this.start = t),
      (this.end = n);
  }
  static range(e, t) {
    return t
      ? e && e.loc && t.loc && e.loc.lexer === t.loc.lexer
        ? new Vr(e.loc.lexer, e.loc.start, t.loc.end)
        : null
      : e && e.loc;
  }
}
class qr {
  constructor(e, t) {
    (this.text = void 0),
      (this.loc = void 0),
      (this.noexpand = void 0),
      (this.treatAsRelax = void 0),
      (this.text = e),
      (this.loc = t);
  }
  range(e, t) {
    return new qr(t, Vr.range(this, e));
  }
}
function Gr(e) {
  var t = [];
  e.consumeSpaces();
  var n = e.fetch().text;
  for (
    "\\relax" === n && (e.consume(), e.consumeSpaces(), (n = e.fetch().text));
    "\\hline" === n || "\\hdashline" === n;

  )
    e.consume(),
      t.push("\\hdashline" === n),
      e.consumeSpaces(),
      (n = e.fetch().text);
  return t;
}
var Wr = (e) => {
    if (!e.parser.settings.displayMode)
      throw new L("{" + e.envName + "} can be used only in display mode.");
  },
  $r = new Set(["gather", "gather*"]);
function Yr(e) {
  if (!e.includes("ed")) return !e.includes("*");
}
function Kr(e, t, n) {
  var {
    hskipBeforeAndAfter: r,
    addJot: o,
    cols: i,
    arraystretch: a,
    colSeparationType: s,
    autoTag: l,
    singleRow: c,
    emptySingleRow: u,
    maxNumCols: d,
    leqno: p,
  } = t;
  if (
    (e.gullet.beginGroup(), c || e.gullet.macros.set("\\cr", "\\\\\\relax"), !a)
  ) {
    var f = e.gullet.expandMacroAsText("\\arraystretch");
    if (null == f) a = 1;
    else if (!(a = parseFloat(f)) || a < 0)
      throw new L("Invalid \\arraystretch: " + f);
  }
  e.gullet.beginGroup();
  var h = [],
    m = [h],
    g = [],
    y = [],
    v = null != l ? [] : void 0;
  function b() {
    l && e.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function S() {
    v &&
      (e.gullet.macros.get("\\df@tag")
        ? (v.push(e.subparse([new qr("\\df@tag")])),
          e.gullet.macros.set("\\df@tag", void 0, !0))
        : v.push(Boolean(l) && "1" === e.gullet.macros.get("\\@eqnsw")));
  }
  for (b(), y.push(Gr(e)); ; ) {
    var _ = e.parseExpression(!1, c ? "\\end" : "\\\\");
    e.gullet.endGroup(), e.gullet.beginGroup();
    var x = { type: "ordgroup", mode: e.mode, body: _ };
    n &&
      (x = {
        type: "styling",
        mode: e.mode,
        style: n,
        resetFont: !0,
        body: [x],
      }),
      h.push(x);
    var w = e.fetch().text;
    if ("&" === w) {
      if (d && h.length === d) {
        if (c || s) throw new L("Too many tab characters: &", e.nextToken);
        e.settings.reportNonstrict(
          "textEnv",
          "Too few columns specified in the {array} column argument.",
        );
      }
      e.consume();
    } else {
      if ("\\end" === w) {
        S(),
          1 === h.length &&
            "styling" === x.type &&
            1 === x.body.length &&
            "ordgroup" === x.body[0].type &&
            0 === x.body[0].body.length &&
            (m.length > 1 || !u) &&
            m.pop(),
          y.length < m.length + 1 && y.push([]);
        break;
      }
      if ("\\\\" !== w)
        throw new L("Expected & or \\\\ or \\cr or \\end", e.nextToken);
      e.consume();
      var E = void 0;
      " " !== e.gullet.future().text && (E = e.parseSizeGroup(!0)),
        g.push(E ? E.value : null),
        S(),
        y.push(Gr(e)),
        (h = []),
        m.push(h),
        b();
    }
  }
  return (
    e.gullet.endGroup(),
    e.gullet.endGroup(),
    {
      type: "array",
      mode: e.mode,
      addJot: o,
      arraystretch: a,
      body: m,
      cols: i,
      rowGaps: g,
      hskipBeforeAndAfter: r,
      hLinesBeforeRow: y,
      colSeparationType: s,
      tags: v,
      leqno: p,
    }
  );
}
function Zr(e) {
  return "d" === e.slice(0, 1) ? "display" : "text";
}
var Qr = function (e, t) {
    var n,
      r,
      o = e.body.length,
      i = e.hLinesBeforeRow,
      a = 0,
      s = new Array(o),
      l = [],
      c = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
      u = 1 / t.fontMetrics().ptPerEm,
      d = 5 * u;
    e.colSeparationType &&
      "small" === e.colSeparationType &&
      (d =
        (t.havingStyle(re.SCRIPT).sizeMultiplier / t.sizeMultiplier) * 0.2778);
    var p =
        "CD" === e.colSeparationType
          ? fe({ number: 3, unit: "ex" }, t)
          : 12 * u,
      f = 3 * u,
      h = e.arraystretch * p,
      m = 0.7 * h,
      g = 0.3 * h,
      y = 0;
    function v(e) {
      for (var t = 0; t < e.length; ++t)
        t > 0 && (y += 0.25), l.push({ pos: y, isDashed: e[t] });
    }
    for (v(i[0]), n = 0; n < e.body.length; ++n) {
      var b = e.body[n],
        S = m,
        _ = g;
      a < b.length && (a = b.length);
      var x = {
        cells: new Array(b.length),
        height: 0,
        depth: 0,
        pos: 0,
      };
      for (r = 0; r < b.length; ++r) {
        var w = pn(b[r], t);
        _ < w.depth && (_ = w.depth),
          S < w.height && (S = w.height),
          (x.cells[r] = w);
      }
      var E = e.rowGaps[n],
        T = 0;
      E && (T = fe(E, t)) > 0 && (_ < (T += g) && (_ = T), (T = 0)),
        e.addJot && n < e.body.length - 1 && (_ += f),
        (x.height = S),
        (x.depth = _),
        (y += S),
        (x.pos = y),
        (y += _ + T),
        (s[n] = x),
        v(i[n + 1]);
    }
    var k,
      C,
      I = y / 2 + t.fontMetrics().axisHeight,
      A = e.cols || [],
      O = [],
      R = [];
    if (e.tags && e.tags.some((e) => e))
      for (n = 0; n < o; ++n) {
        var M = s[n],
          P = M.pos - I,
          N = e.tags[n],
          D = void 0;
        ((D =
          !0 === N
            ? Mt(["eqn-num"], [], t)
            : Mt([], !1 === N ? [] : an(N, t, !0), t)).depth = M.depth),
          (D.height = M.height),
          R.push({ type: "elem", elem: D, shift: P });
      }
    for (r = 0, C = 0; r < a || C < A.length; ++r, ++C) {
      for (
        var j, F = A[C], U = !0;
        "separator" === (null == (B = F) ? void 0 : B.type);

      ) {
        var B;
        if (
          (U ||
            (((k = Mt(["arraycolsep"], [])).style.width = he(
              t.fontMetrics().doubleRuleSep,
            )),
            O.push(k)),
          "|" !== F.separator && ":" !== F.separator)
        )
          throw new L("Invalid separator type: " + F.separator);
        var z = "|" === F.separator ? "solid" : "dashed",
          H = Mt(["vertical-separator"], [], t);
        (H.style.height = he(y)),
          (H.style.borderRightWidth = he(c)),
          (H.style.borderRightStyle = z),
          (H.style.margin = "0 " + he(-c / 2));
        var V = y - I;
        V && (H.style.verticalAlign = he(-V)),
          O.push(H),
          (F = A[++C]),
          (U = !1);
      }
      if (!(r >= a)) {
        var q,
          G,
          W = void 0;
        (r > 0 || e.hskipBeforeAndAfter) &&
          0 !==
            (W = null != (q = null == (G = F) ? void 0 : G.pregap) ? q : d) &&
          (((k = Mt(["arraycolsep"], [])).style.width = he(W)), O.push(k));
        var $ = [];
        for (n = 0; n < o; ++n) {
          var Y = s[n],
            K = Y.cells[r];
          if (K) {
            var Z = Y.pos - I;
            (K.depth = Y.depth),
              (K.height = Y.height),
              $.push({ type: "elem", elem: K, shift: Z });
          }
        }
        var Q,
          J,
          X = Lt({ positionType: "individualShift", children: $ }),
          ee = Mt(
            ["col-align-" + ((null == (j = F) ? void 0 : j.align) || "c")],
            [X],
          );
        O.push(ee),
          (r < a - 1 || e.hskipBeforeAndAfter) &&
            0 !==
              (W =
                null != (Q = null == (J = F) ? void 0 : J.postgap) ? Q : d) &&
            (((k = Mt(["arraycolsep"], [])).style.width = he(W)), O.push(k));
      }
    }
    var te = Mt(["mtable"], O);
    if (l.length > 0) {
      for (
        var ne = Nt("hline", t, c),
          oe = Nt("hdashline", t, c),
          ie = [{ type: "elem", elem: te, shift: 0 }];
        l.length > 0;

      ) {
        var ae = l.pop(),
          se = ae.pos - I;
        ae.isDashed
          ? ie.push({ type: "elem", elem: oe, shift: se })
          : ie.push({ type: "elem", elem: ne, shift: se });
      }
      te = Lt({ positionType: "individualShift", children: ie });
    }
    if (0 === R.length) return Mt(["mord"], [te], t);
    var le = Lt({ positionType: "individualShift", children: R }),
      ce = Mt(["tag"], [le], t);
    return Dt([te, ce]);
  },
  Jr = { c: "center ", l: "left ", r: "right " },
  Xr = function (e, t) {
    for (
      var n = [],
        r = new gn("mtd", [], ["mtr-glue"]),
        o = new gn("mtd", [], ["mml-eqn-num"]),
        i = 0;
      i < e.body.length;
      i++
    ) {
      for (var a = e.body[i], s = [], l = 0; l < a.length; l++)
        s.push(new gn("mtd", [In(a[l], t)]));
      e.tags &&
        e.tags[i] &&
        (s.unshift(r), s.push(r), e.leqno ? s.unshift(o) : s.push(o)),
        n.push(new gn("mtr", s));
    }
    var c = new gn("mtable", n),
      u =
        0.5 === e.arraystretch
          ? 0.1
          : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
    c.setAttribute("rowspacing", he(u));
    var d = "",
      p = "";
    if (e.cols && e.cols.length > 0) {
      var f = e.cols,
        h = "",
        m = !1,
        g = 0,
        y = f.length;
      "separator" === f[0].type && ((d += "top "), (g = 1)),
        "separator" === f[f.length - 1].type && ((d += "bottom "), (y -= 1));
      for (var v = g; v < y; v++) {
        var b = f[v];
        "align" === b.type
          ? ((p += Jr[b.align]), m && (h += "none "), (m = !0))
          : "separator" === b.type &&
            m &&
            ((h += "|" === b.separator ? "solid " : "dashed "), (m = !1));
      }
      c.setAttribute("columnalign", p.trim()),
        /[sd]/.test(h) && c.setAttribute("columnlines", h.trim());
    }
    if ("align" === e.colSeparationType) {
      for (var S = e.cols || [], _ = "", x = 1; x < S.length; x++)
        _ += x % 2 ? "0em " : "1em ";
      c.setAttribute("columnspacing", _.trim());
    } else
      "alignat" === e.colSeparationType || "gather" === e.colSeparationType
        ? c.setAttribute("columnspacing", "0em")
        : "small" === e.colSeparationType
          ? c.setAttribute("columnspacing", "0.2778em")
          : "CD" === e.colSeparationType
            ? c.setAttribute("columnspacing", "0.5em")
            : c.setAttribute("columnspacing", "1em");
    var w = "",
      E = e.hLinesBeforeRow;
    (d += E[0].length > 0 ? "left " : ""),
      (d += E[E.length - 1].length > 0 ? "right " : "");
    for (var T = 1; T < E.length - 1; T++)
      w += 0 === E[T].length ? "none " : E[T][0] ? "dashed " : "solid ";
    return (
      /[sd]/.test(w) && c.setAttribute("rowlines", w.trim()),
      "" !== d &&
        (c = new gn("menclose", [c])).setAttribute("notation", d.trim()),
      e.arraystretch &&
        e.arraystretch < 1 &&
        (c = new gn("mstyle", [c])).setAttribute("scriptlevel", "1"),
      c
    );
  },
  eo = function (e, t) {
    e.envName.includes("ed") || Wr(e);
    var n = [],
      r = e.envName.includes("at") ? "alignat" : "align",
      o = "split" === e.envName,
      i = Kr(
        e.parser,
        {
          cols: n,
          addJot: !0,
          autoTag: o ? void 0 : Yr(e.envName),
          emptySingleRow: !0,
          colSeparationType: r,
          maxNumCols: o ? 2 : void 0,
          leqno: e.parser.settings.leqno,
        },
        "display",
      ),
      a = 0,
      s = 0,
      l = { type: "ordgroup", mode: e.mode, body: [] };
    if (t[0] && "ordgroup" === t[0].type) {
      for (var c = "", u = 0; u < t[0].body.length; u++)
        c += zn(t[0].body[u], "textord").text;
      (a = Number(c)), (s = 2 * a);
    }
    var d = !s;
    i.body.forEach(function (e) {
      for (var t = 1; t < e.length; t += 2) {
        var n = zn(e[t], "styling");
        zn(n.body[0], "ordgroup").body.unshift(l);
      }
      if (d) s < e.length && (s = e.length);
      else {
        var r = e.length / 2;
        if (a < r)
          throw new L(
            "Too many math in a row: expected " + a + ", but got " + r,
            e[0],
          );
      }
    });
    for (var p = 0; p < s; ++p) {
      var f = "r",
        h = 0;
      p % 2 == 1 ? (f = "l") : p > 0 && d && (h = 1),
        (n[p] = { type: "align", align: f, pregap: h, postgap: 0 });
    }
    return (i.colSeparationType = d ? "align" : "alignat"), i;
  };
Br({
  type: "array",
  names: ["array", "darray"],
  props: { numArgs: 1 },
  handler(e, t) {
    var n = (Vn(t[0]) ? [t[0]] : zn(t[0], "ordgroup").body).map(function (e) {
        var t = Hn(e).text;
        if ("lcr".includes(t)) return { type: "align", align: t };
        if ("|" === t) return { type: "separator", separator: "|" };
        if (":" === t) return { type: "separator", separator: ":" };
        throw new L("Unknown column alignment: " + t, e);
      }),
      r = { cols: n, hskipBeforeAndAfter: !0, maxNumCols: n.length };
    return Kr(e.parser, r, Zr(e.envName));
  },
  htmlBuilder: Qr,
  mathmlBuilder: Xr,
}),
  Br({
    type: "array",
    names: [
      "matrix",
      "pmatrix",
      "bmatrix",
      "Bmatrix",
      "vmatrix",
      "Vmatrix",
      "matrix*",
      "pmatrix*",
      "bmatrix*",
      "Bmatrix*",
      "vmatrix*",
      "Vmatrix*",
    ],
    props: { numArgs: 0 },
    handler(e) {
      var t = {
          matrix: null,
          pmatrix: ["(", ")"],
          bmatrix: ["[", "]"],
          Bmatrix: ["\\{", "\\}"],
          vmatrix: ["|", "|"],
          Vmatrix: ["\\Vert", "\\Vert"],
        }[e.envName.replace("*", "")],
        n = "c",
        r = {
          hskipBeforeAndAfter: !1,
          cols: [{ type: "align", align: n }],
        };
      if ("*" === e.envName.charAt(e.envName.length - 1)) {
        var o = e.parser;
        if ((o.consumeSpaces(), "[" === o.fetch().text)) {
          if (
            (o.consume(),
            o.consumeSpaces(),
            (n = o.fetch().text),
            !"lcr".includes(n))
          )
            throw new L("Expected l or c or r", o.nextToken);
          o.consume(),
            o.consumeSpaces(),
            o.expect("]"),
            o.consume(),
            (r.cols = [{ type: "align", align: n }]);
        }
      }
      var i = Kr(e.parser, r, Zr(e.envName)),
        a = Math.max(0, ...i.body.map((e) => e.length));
      return (
        (i.cols = new Array(a).fill({ type: "align", align: n })),
        t
          ? {
              type: "leftright",
              mode: e.mode,
              body: [i],
              left: t[0],
              right: t[1],
              rightColor: void 0,
            }
          : i
      );
    },
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["smallmatrix"],
    props: { numArgs: 0 },
    handler(e) {
      var t = Kr(e.parser, { arraystretch: 0.5 }, "script");
      return (t.colSeparationType = "small"), t;
    },
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["subarray"],
    props: { numArgs: 1 },
    handler(e, t) {
      var n = (Vn(t[0]) ? [t[0]] : zn(t[0], "ordgroup").body).map(function (e) {
        var t = Hn(e).text;
        if ("lc".includes(t)) return { type: "align", align: t };
        throw new L("Unknown column alignment: " + t, e);
      });
      if (n.length > 1) throw new L("{subarray} can contain only one column");
      var r = { cols: n, hskipBeforeAndAfter: !1, arraystretch: 0.5 },
        o = Kr(e.parser, r, "script");
      if (o.body.length > 0 && o.body[0].length > 1)
        throw new L("{subarray} can contain only one column");
      return o;
    },
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["cases", "dcases", "rcases", "drcases"],
    props: { numArgs: 0 },
    handler(e) {
      var t = Kr(
        e.parser,
        {
          arraystretch: 1.2,
          cols: [
            { type: "align", align: "l", pregap: 0, postgap: 1 },
            { type: "align", align: "l", pregap: 0, postgap: 0 },
          ],
        },
        Zr(e.envName),
      );
      return {
        type: "leftright",
        mode: e.mode,
        body: [t],
        left: e.envName.includes("r") ? "." : "\\{",
        right: e.envName.includes("r") ? "\\}" : ".",
        rightColor: void 0,
      };
    },
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["align", "align*", "aligned", "split"],
    props: { numArgs: 0 },
    handler: eo,
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["gathered", "gather", "gather*"],
    props: { numArgs: 0 },
    handler(e) {
      $r.has(e.envName) && Wr(e);
      var t = {
        cols: [{ type: "align", align: "c" }],
        addJot: !0,
        colSeparationType: "gather",
        autoTag: Yr(e.envName),
        emptySingleRow: !0,
        leqno: e.parser.settings.leqno,
      };
      return Kr(e.parser, t, "display");
    },
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["alignat", "alignat*", "alignedat"],
    props: { numArgs: 1 },
    handler: eo,
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["equation", "equation*"],
    props: { numArgs: 0 },
    handler(e) {
      Wr(e);
      var t = {
        autoTag: Yr(e.envName),
        emptySingleRow: !0,
        singleRow: !0,
        maxNumCols: 1,
        leqno: e.parser.settings.leqno,
      };
      return Kr(e.parser, t, "display");
    },
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Br({
    type: "array",
    names: ["CD"],
    props: { numArgs: 0 },
    handler: (e) => (
      Wr(e),
      (function (e) {
        var t = [];
        for (
          e.gullet.beginGroup(),
            e.gullet.macros.set("\\cr", "\\\\\\relax"),
            e.gullet.beginGroup();
          ;

        ) {
          t.push(e.parseExpression(!1, "\\\\")),
            e.gullet.endGroup(),
            e.gullet.beginGroup();
          var n = e.fetch().text;
          if ("&" !== n && "\\\\" !== n) {
            if ("\\end" === n) {
              0 === t[t.length - 1].length && t.pop();
              break;
            }
            throw new L("Expected \\\\ or \\cr or \\end", e.nextToken);
          }
          e.consume();
        }
        for (var r = [], o = [r], i = 0; i < t.length; i++) {
          for (var a = t[i], s = Xn(), l = 0; l < a.length; l++)
            if (er(a[l])) {
              r.push(s);
              var c = Hn(a[(l += 1)]).text,
                u = new Array(2);
              if (
                ((u[0] = {
                  type: "ordgroup",
                  mode: "math",
                  body: [],
                }),
                (u[1] = { type: "ordgroup", mode: "math", body: [] }),
                "=|.".includes(c))
              );
              else {
                if (!"<>AV".includes(c))
                  throw new L('Expected one of "<>AV=|." after @', a[l]);
                for (var d = 0; d < 2; d++) {
                  for (var p = !0, f = l + 1; f < a.length; f++) {
                    if (tr(a[f], c)) {
                      (p = !1), (l = f);
                      break;
                    }
                    if (er(a[f]))
                      throw new L(
                        "Missing a " + c + " character to complete a CD arrow.",
                        a[f],
                      );
                    u[d].body.push(a[f]);
                  }
                  if (p)
                    throw new L(
                      "Missing a " + c + " character to complete a CD arrow.",
                      a[l],
                    );
                }
              }
              var h = {
                type: "styling",
                body: [nr(c, u, e)],
                mode: "math",
                style: "display",
                resetFont: !0,
              };
              r.push(h), (s = Xn());
            } else s.body.push(a[l]);
          i % 2 == 0 ? r.push(s) : r.shift(), (r = []), o.push(r);
        }
        return (
          e.gullet.endGroup(),
          e.gullet.endGroup(),
          {
            type: "array",
            mode: "math",
            body: o,
            arraystretch: 1,
            addJot: !0,
            rowGaps: [null],
            cols: new Array(o[0].length).fill({
              type: "align",
              align: "c",
              pregap: 0.25,
              postgap: 0.25,
            }),
            colSeparationType: "CD",
            hLinesBeforeRow: new Array(o.length + 1).fill([]),
          }
        );
      })(e.parser)
    ),
    htmlBuilder: Qr,
    mathmlBuilder: Xr,
  }),
  Hr("\\nonumber", "\\gdef\\@eqnsw{0}"),
  Hr("\\notag", "\\nonumber"),
  Qt({
    type: "text",
    names: ["\\hline", "\\hdashline"],
    props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
    handler(e, t) {
      throw new L(e.funcName + " valid only within array environment");
    },
  });
var to = Ur;
Qt({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: { numArgs: 1, argTypes: ["text"] },
  handler(e, t) {
    var { parser: n, funcName: r } = e,
      o = t[0];
    if ("ordgroup" !== o.type) throw new L("Invalid environment name", o);
    for (var i = "", a = 0; a < o.body.length; ++a)
      i += zn(o.body[a], "textord").text;
    if ("\\begin" === r) {
      if (!to.hasOwnProperty(i)) throw new L("No such environment: " + i, o);
      var s = to[i],
        { args: l, optArgs: c } = n.parseArguments("\\begin{" + i + "}", s),
        u = { mode: n.mode, envName: i, parser: n },
        d = s.handler(u, l, c);
      n.expect("\\end", !1);
      var p = n.nextToken,
        f = zn(n.parseFunction(), "environment");
      if (f.name !== i)
        throw new L(
          "Mismatch: \\begin{" + i + "} matched by \\end{" + f.name + "}",
          p,
        );
      return d;
    }
    return {
      type: "environment",
      mode: n.mode,
      name: i,
      nameGroup: o,
    };
  },
});
var no = (e, t) => {
    var n = e.font,
      r = t.withFont(n);
    return pn(e.body, r);
  },
  ro = (e, t) => {
    var n = e.font,
      r = t.withFont(n);
    return In(e.body, r);
  },
  oo = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
  };
Qt({
  type: "font",
  names: [
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    "\\Bbb",
    "\\bold",
    "\\frak",
  ],
  props: { numArgs: 1, allowedInArgument: !0 },
  handler: (e, t) => {
    var { parser: n, funcName: r } = e,
      o = Xt(t[0]),
      i = r;
    return (
      i in oo && (i = oo[i]),
      { type: "font", mode: n.mode, font: i.slice(1), body: o }
    );
  },
  htmlBuilder: no,
  mathmlBuilder: ro,
}),
  Qt({
    type: "mclass",
    names: ["\\boldsymbol", "\\bm"],
    props: { numArgs: 1 },
    handler: (e, t) => {
      var { parser: n } = e,
        r = t[0];
      return {
        type: "mclass",
        mode: n.mode,
        mclass: Qn(r),
        body: [{ type: "font", mode: n.mode, font: "boldsymbol", body: r }],
        isCharacterBox: G(r),
      };
    },
  }),
  Qt({
    type: "font",
    names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
    props: { numArgs: 0, allowedInText: !0 },
    handler: (e, t) => {
      var { parser: n, funcName: r, breakOnTokenText: o } = e,
        { mode: i } = n,
        a = n.parseExpression(!0, o);
      return {
        type: "font",
        mode: i,
        font: "math" + r.slice(1),
        body: { type: "ordgroup", mode: n.mode, body: a },
      };
    },
    htmlBuilder: no,
    mathmlBuilder: ro,
  });
var io = (e, t) =>
  t ? { type: "styling", mode: e.mode, style: t, body: [e] } : e;
Qt({
  type: "genfrac",
  names: [
    "\\cfrac",
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    "\\\\bracefrac",
    "\\\\brackfrac",
  ],
  props: { numArgs: 2, allowedInArgument: !0 },
  handler: (e, t) => {
    var n,
      { parser: r, funcName: o } = e,
      i = t[0],
      a = t[1],
      s = null,
      l = null;
    switch (o) {
      case "\\cfrac":
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        n = !0;
        break;
      case "\\\\atopfrac":
        n = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        (n = !1), (s = "("), (l = ")");
        break;
      case "\\\\bracefrac":
        (n = !1), (s = "\\{"), (l = "\\}");
        break;
      case "\\\\brackfrac":
        (n = !1), (s = "["), (l = "]");
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    var c = "\\cfrac" === o,
      u = null;
    return (
      c || o.startsWith("\\d")
        ? (u = "display")
        : o.startsWith("\\t") && (u = "text"),
      io(
        {
          type: "genfrac",
          mode: r.mode,
          numer: i,
          denom: a,
          continued: c,
          hasBarLine: n,
          leftDelim: s,
          rightDelim: l,
          barSize: null,
        },
        u,
      )
    );
  },
  htmlBuilder: (e, t) => {
    var n,
      r = t.style,
      o = r.fracNum(),
      i = r.fracDen();
    n = t.havingStyle(o);
    var a = pn(e.numer, n, t);
    if (e.continued) {
      var s = 8.5 / t.fontMetrics().ptPerEm,
        l = 3.5 / t.fontMetrics().ptPerEm;
      (a.height = a.height < s ? s : a.height),
        (a.depth = a.depth < l ? l : a.depth);
    }
    n = t.havingStyle(i);
    var c,
      u,
      d,
      p,
      f,
      h,
      m,
      g,
      y,
      v,
      b = pn(e.denom, n, t);
    if (
      (e.hasBarLine
        ? (e.barSize
            ? ((u = fe(e.barSize, t)), (c = Nt("frac-line", t, u)))
            : (c = Nt("frac-line", t)),
          (u = c.height),
          (d = c.height))
        : ((c = null), (u = 0), (d = t.fontMetrics().defaultRuleThickness)),
      r.size === re.DISPLAY.size
        ? ((p = t.fontMetrics().num1),
          (f = u > 0 ? 3 * d : 7 * d),
          (h = t.fontMetrics().denom1))
        : (u > 0
            ? ((p = t.fontMetrics().num2), (f = d))
            : ((p = t.fontMetrics().num3), (f = 3 * d)),
          (h = t.fontMetrics().denom2)),
      c)
    ) {
      var S = t.fontMetrics().axisHeight;
      p - a.depth - (S + 0.5 * u) < f &&
        (p += f - (p - a.depth - (S + 0.5 * u))),
        S - 0.5 * u - (b.height - h) < f &&
          (h += f - (S - 0.5 * u - (b.height - h))),
        (m = Lt({
          positionType: "individualShift",
          children: [
            { type: "elem", elem: b, shift: h },
            { type: "elem", elem: c, shift: -(S - 0.5 * u) },
            { type: "elem", elem: a, shift: -p },
          ],
        }));
    } else {
      var _ = p - a.depth - (b.height - h);
      _ < f && ((p += 0.5 * (f - _)), (h += 0.5 * (f - _))),
        (m = Lt({
          positionType: "individualShift",
          children: [
            { type: "elem", elem: b, shift: h },
            { type: "elem", elem: a, shift: -p },
          ],
        }));
    }
    return (
      (n = t.havingStyle(r)),
      (m.height *= n.sizeMultiplier / t.sizeMultiplier),
      (m.depth *= n.sizeMultiplier / t.sizeMultiplier),
      (g =
        r.size === re.DISPLAY.size
          ? t.fontMetrics().delim1
          : r.size === re.SCRIPTSCRIPT.size
            ? t.havingStyle(re.SCRIPT).fontMetrics().delim2
            : t.fontMetrics().delim2),
      (y =
        null == e.leftDelim
          ? dn(t, ["mopen"])
          : Or(e.leftDelim, g, !0, t.havingStyle(r), e.mode, ["mopen"])),
      (v = e.continued
        ? Mt([])
        : null == e.rightDelim
          ? dn(t, ["mclose"])
          : Or(e.rightDelim, g, !0, t.havingStyle(r), e.mode, ["mclose"])),
      Mt(["mord"].concat(n.sizingClasses(t)), [y, Mt(["mfrac"], [m]), v], t)
    );
  },
  mathmlBuilder: (e, t) => {
    var n = new gn("mfrac", [In(e.numer, t), In(e.denom, t)]);
    if (e.hasBarLine) {
      if (e.barSize) {
        var r = fe(e.barSize, t);
        n.setAttribute("linethickness", he(r));
      }
    } else n.setAttribute("linethickness", "0px");
    if (null != e.leftDelim || null != e.rightDelim) {
      var o = [];
      if (null != e.leftDelim) {
        var i = new gn("mo", [new yn(e.leftDelim.replace("\\", ""))]);
        i.setAttribute("fence", "true"), o.push(i);
      }
      if ((o.push(n), null != e.rightDelim)) {
        var a = new gn("mo", [new yn(e.rightDelim.replace("\\", ""))]);
        a.setAttribute("fence", "true"), o.push(a);
      }
      return xn(o);
    }
    return n;
  },
}),
  Qt({
    type: "infix",
    names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
    props: { numArgs: 0, infix: !0 },
    handler(e) {
      var t,
        { parser: n, funcName: r, token: o } = e;
      switch (r) {
        case "\\over":
          t = "\\frac";
          break;
        case "\\choose":
          t = "\\binom";
          break;
        case "\\atop":
          t = "\\\\atopfrac";
          break;
        case "\\brace":
          t = "\\\\bracefrac";
          break;
        case "\\brack":
          t = "\\\\brackfrac";
          break;
        default:
          throw new Error("Unrecognized infix genfrac command");
      }
      return {
        type: "infix",
        mode: n.mode,
        replaceWith: t,
        token: o,
      };
    },
  });
var ao = ["display", "text", "script", "scriptscript"],
  so = function (e) {
    var t = null;
    return e.length > 0 && (t = "." === (t = e) ? null : t), t;
  };
Qt({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"],
  },
  handler(e, t) {
    var n,
      { parser: r } = e,
      o = t[4],
      i = t[5],
      a = Xt(t[0]),
      s = "atom" === a.type && "open" === a.family ? so(a.text) : null,
      l = Xt(t[1]),
      c = "atom" === l.type && "close" === l.family ? so(l.text) : null,
      u = zn(t[2], "size"),
      d = null;
    n = !!u.isBlank || (d = u.value).number > 0;
    var p = null,
      f = t[3];
    if ("ordgroup" === f.type) {
      if (f.body.length > 0) {
        var h = zn(f.body[0], "textord");
        p = ao[Number(h.text)];
      }
    } else (f = zn(f, "textord")), (p = ao[Number(f.text)]);
    return io(
      {
        type: "genfrac",
        mode: r.mode,
        numer: o,
        denom: i,
        continued: !1,
        hasBarLine: n,
        barSize: d,
        leftDelim: s,
        rightDelim: c,
      },
      p,
    );
  },
}),
  Qt({
    type: "infix",
    names: ["\\above"],
    props: { numArgs: 1, argTypes: ["size"], infix: !0 },
    handler(e, t) {
      var { parser: n, funcName: r, token: o } = e;
      return {
        type: "infix",
        mode: n.mode,
        replaceWith: "\\\\abovefrac",
        size: zn(t[0], "size").value,
        token: o,
      };
    },
  }),
  Qt({
    type: "genfrac",
    names: ["\\\\abovefrac"],
    props: { numArgs: 3, argTypes: ["math", "size", "math"] },
    handler: (e, t) => {
      var { parser: n, funcName: r } = e,
        o = t[0],
        i = zn(t[1], "infix").size;
      if (!i)
        throw new Error("\\\\abovefrac expected size, but got " + String(i));
      var a = t[2],
        s = i.number > 0;
      return {
        type: "genfrac",
        mode: n.mode,
        numer: o,
        denom: a,
        continued: !1,
        hasBarLine: s,
        barSize: i,
        leftDelim: null,
        rightDelim: null,
      };
    },
  });
var lo = (e, t) => {
  var n,
    r,
    o = t.style;
  "supsub" === e.type
    ? ((n = e.sup
        ? pn(e.sup, t.havingStyle(o.sup()), t)
        : pn(e.sub, t.havingStyle(o.sub()), t)),
      (r = zn(e.base, "horizBrace")))
    : (r = zn(e, "horizBrace"));
  var i,
    a = pn(r.base, t.havingBaseStyle(re.DISPLAY)),
    s = Fn(r, t);
  if (
    ((i = r.isOver
      ? Lt({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: a },
            { type: "kern", size: 0.1 },
            { type: "elem", elem: s, wrapperClasses: ["svg-align"] },
          ],
        })
      : Lt({
          positionType: "bottom",
          positionData: a.depth + 0.1 + s.height,
          children: [
            { type: "elem", elem: s, wrapperClasses: ["svg-align"] },
            { type: "kern", size: 0.1 },
            { type: "elem", elem: a },
          ],
        })),
    n)
  ) {
    var l = Mt(["minner", r.isOver ? "mover" : "munder"], [i], t);
    i = r.isOver
      ? Lt({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: l },
            { type: "kern", size: 0.2 },
            { type: "elem", elem: n },
          ],
        })
      : Lt({
          positionType: "bottom",
          positionData: l.depth + 0.2 + n.height + n.depth,
          children: [
            { type: "elem", elem: n },
            { type: "kern", size: 0.2 },
            { type: "elem", elem: l },
          ],
        });
  }
  return Mt(["minner", r.isOver ? "mover" : "munder"], [i], t);
};
Qt({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
  props: { numArgs: 1 },
  handler(e, t) {
    var { parser: n, funcName: r } = e;
    return {
      type: "horizBrace",
      mode: n.mode,
      label: r,
      isOver: r.includes("\\over"),
      base: t[0],
    };
  },
  htmlBuilder: lo,
  mathmlBuilder: (e, t) => {
    var n = Dn(e.label);
    return new gn(e.isOver ? "mover" : "munder", [In(e.base, t), n]);
  },
}),
  Qt({
    type: "href",
    names: ["\\href"],
    props: {
      numArgs: 2,
      argTypes: ["url", "original"],
      allowedInText: !0,
    },
    handler: (e, t) => {
      var { parser: n } = e,
        r = t[1],
        o = zn(t[0], "url").url;
      return n.settings.isTrusted({ command: "\\href", url: o })
        ? { type: "href", mode: n.mode, href: o, body: en(r) }
        : n.formatUnsupportedCmd("\\href");
    },
    htmlBuilder: (e, t) => {
      var n = an(e.body, t, !1);
      return (function (e, t, n, r) {
        var o = new xe(e, [], n, r);
        return Rt(o), o;
      })(e.href, 0, n, t);
    },
    mathmlBuilder: (e, t) => {
      var n = Cn(e.body, t);
      return (
        n instanceof gn || (n = new gn("mrow", [n])),
        n.setAttribute("href", e.href),
        n
      );
    },
  }),
  Qt({
    type: "href",
    names: ["\\url"],
    props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
    handler: (e, t) => {
      var { parser: n } = e,
        r = zn(t[0], "url").url;
      if (!n.settings.isTrusted({ command: "\\url", url: r }))
        return n.formatUnsupportedCmd("\\url");
      for (var o = [], i = 0; i < r.length; i++) {
        var a = r[i];
        "~" === a && (a = "\\textasciitilde"),
          o.push({ type: "textord", mode: "text", text: a });
      }
      var s = {
        type: "text",
        mode: n.mode,
        font: "\\texttt",
        body: o,
      };
      return { type: "href", mode: n.mode, href: r, body: en(s) };
    },
  }),
  Qt({
    type: "hbox",
    names: ["\\hbox"],
    props: {
      numArgs: 1,
      argTypes: ["text"],
      allowedInText: !0,
      primitive: !0,
    },
    handler(e, t) {
      var { parser: n } = e;
      return { type: "hbox", mode: n.mode, body: en(t[0]) };
    },
    htmlBuilder(e, t) {
      var n = an(e.body, t.withFont(""), !1);
      return Dt(n);
    },
    mathmlBuilder: (e, t) => new gn("mrow", kn(e.body, t.withFont(""))),
  }),
  Qt({
    type: "html",
    names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
    props: {
      numArgs: 2,
      argTypes: ["raw", "original"],
      allowedInText: !0,
    },
    handler: (e, t) => {
      var n,
        { parser: r, funcName: o, token: i } = e,
        a = zn(t[0], "raw").string,
        s = t[1];
      r.settings.strict &&
        r.settings.reportNonstrict(
          "htmlExtension",
          "HTML extension is disabled on strict mode",
        );
      var l = {};
      switch (o) {
        case "\\htmlClass":
          (l.class = a), (n = { command: "\\htmlClass", class: a });
          break;
        case "\\htmlId":
          (l.id = a), (n = { command: "\\htmlId", id: a });
          break;
        case "\\htmlStyle":
          (l.style = a), (n = { command: "\\htmlStyle", style: a });
          break;
        case "\\htmlData":
          for (var c = a.split(","), u = 0; u < c.length; u++) {
            var d = c[u],
              p = d.indexOf("=");
            if (p < 0)
              throw new L(
                "\\htmlData key/value '" + d + "' missing equals sign",
              );
            var f = d.slice(0, p),
              h = d.slice(p + 1);
            l["data-" + f.trim()] = h;
          }
          n = { command: "\\htmlData", attributes: l };
          break;
        default:
          throw new Error("Unrecognized html command");
      }
      return r.settings.isTrusted(n)
        ? { type: "html", mode: r.mode, attributes: l, body: en(s) }
        : r.formatUnsupportedCmd(o);
    },
    htmlBuilder: (e, t) => {
      var n = an(e.body, t, !1),
        r = ["enclosing"];
      e.attributes.class && r.push(...e.attributes.class.trim().split(/\s+/));
      var o = Mt(r, n, t);
      for (var i in e.attributes)
        "class" !== i &&
          e.attributes.hasOwnProperty(i) &&
          o.setAttribute(i, e.attributes[i]);
      return o;
    },
    mathmlBuilder: (e, t) => Cn(e.body, t),
  }),
  Qt({
    type: "htmlmathml",
    names: ["\\html@mathml"],
    props: { numArgs: 2, allowedInArgument: !0, allowedInText: !0 },
    handler: (e, t) => {
      var { parser: n } = e;
      return {
        type: "htmlmathml",
        mode: n.mode,
        html: en(t[0]),
        mathml: en(t[1]),
      };
    },
    htmlBuilder: (e, t) => {
      var n = an(e.html, t, !1);
      return Dt(n);
    },
    mathmlBuilder: (e, t) => Cn(e.mathml, t),
  });
var co = function (e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return { number: +e, unit: "bp" };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t) throw new L("Invalid size: '" + e + "' in \\includegraphics");
  var n = { number: +(t[1] + t[2]), unit: t[3] };
  if (!pe(n))
    throw new L("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
Qt({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1,
  },
  handler: (e, t, n) => {
    var { parser: r } = e,
      o = { number: 0, unit: "em" },
      i = { number: 0.9, unit: "em" },
      a = { number: 0, unit: "em" },
      s = "";
    if (n[0])
      for (
        var l = zn(n[0], "raw").string.split(","), c = 0;
        c < l.length;
        c++
      ) {
        var u = l[c].split("=");
        if (2 === u.length) {
          var d = u[1].trim();
          switch (u[0].trim()) {
            case "alt":
              s = d;
              break;
            case "width":
              o = co(d);
              break;
            case "height":
              i = co(d);
              break;
            case "totalheight":
              a = co(d);
              break;
            default:
              throw new L("Invalid key: '" + u[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = zn(t[0], "url").url;
    return (
      "" === s &&
        (s = (s = (s = p).replace(/^.*[\\/]/, "")).substring(
          0,
          s.lastIndexOf("."),
        )),
      r.settings.isTrusted({ command: "\\includegraphics", url: p })
        ? {
            type: "includegraphics",
            mode: r.mode,
            alt: s,
            width: o,
            height: i,
            totalheight: a,
            src: p,
          }
        : r.formatUnsupportedCmd("\\includegraphics")
    );
  },
  htmlBuilder: (e, t) => {
    var n = fe(e.height, t),
      r = 0;
    e.totalheight.number > 0 && (r = fe(e.totalheight, t) - n);
    var o = 0;
    e.width.number > 0 && (o = fe(e.width, t));
    var i = { height: he(n + r) };
    o > 0 && (i.width = he(o)), r > 0 && (i.verticalAlign = he(-r));
    var a = new we(e.src, e.alt, i);
    return (a.height = n), (a.depth = r), a;
  },
  mathmlBuilder: (e, t) => {
    var n = new gn("mglyph", []);
    n.setAttribute("alt", e.alt);
    var r = fe(e.height, t),
      o = 0;
    if (
      (e.totalheight.number > 0 &&
        ((o = fe(e.totalheight, t) - r), n.setAttribute("valign", he(-o))),
      n.setAttribute("height", he(r + o)),
      e.width.number > 0)
    ) {
      var i = fe(e.width, t);
      n.setAttribute("width", he(i));
    }
    return n.setAttribute("src", e.src), n;
  },
}),
  Qt({
    type: "kern",
    names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
    props: {
      numArgs: 1,
      argTypes: ["size"],
      primitive: !0,
      allowedInText: !0,
    },
    handler(e, t) {
      var { parser: n, funcName: r } = e,
        o = zn(t[0], "size");
      if (n.settings.strict) {
        var i = "m" === r[1],
          a = "mu" === o.value.unit;
        i
          ? (a ||
              n.settings.reportNonstrict(
                "mathVsTextUnits",
                "LaTeX's " +
                  r +
                  " supports only mu units, not " +
                  o.value.unit +
                  " units",
              ),
            "math" !== n.mode &&
              n.settings.reportNonstrict(
                "mathVsTextUnits",
                "LaTeX's " + r + " works only in math mode",
              ))
          : a &&
            n.settings.reportNonstrict(
              "mathVsTextUnits",
              "LaTeX's " + r + " doesn't support mu units",
            );
      }
      return { type: "kern", mode: n.mode, dimension: o.value };
    },
    htmlBuilder: (e, t) => Ft(e.dimension, t),
    mathmlBuilder(e, t) {
      var n = fe(e.dimension, t);
      return new vn(n);
    },
  }),
  Qt({
    type: "lap",
    names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
      var { parser: n, funcName: r } = e,
        o = t[0];
      return {
        type: "lap",
        mode: n.mode,
        alignment: r.slice(5),
        body: o,
      };
    },
    htmlBuilder: (e, t) => {
      var n;
      "clap" === e.alignment
        ? ((n = Mt([], [pn(e.body, t)])), (n = Mt(["inner"], [n], t)))
        : (n = Mt(["inner"], [pn(e.body, t)]));
      var r = Mt(["fix"], []),
        o = Mt([e.alignment], [n, r], t),
        i = Mt(["strut"]);
      return (
        (i.style.height = he(o.height + o.depth)),
        o.depth && (i.style.verticalAlign = he(-o.depth)),
        o.children.unshift(i),
        (o = Mt(["thinbox"], [o], t)),
        Mt(["mord", "vbox"], [o], t)
      );
    },
    mathmlBuilder: (e, t) => {
      var n = new gn("mpadded", [In(e.body, t)]);
      if ("rlap" !== e.alignment) {
        var r = "llap" === e.alignment ? "-1" : "-0.5";
        n.setAttribute("lspace", r + "width");
      }
      return n.setAttribute("width", "0px"), n;
    },
  }),
  Qt({
    type: "styling",
    names: ["\\(", "$"],
    props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
    handler(e, t) {
      var { funcName: n, parser: r } = e,
        o = r.mode;
      r.switchMode("math");
      var i = "\\(" === n ? "\\)" : "$",
        a = r.parseExpression(!1, i);
      return (
        r.expect(i),
        r.switchMode(o),
        {
          type: "styling",
          mode: r.mode,
          style: "text",
          resetFont: !0,
          body: a,
        }
      );
    },
  }),
  Qt({
    type: "text",
    names: ["\\)", "\\]"],
    props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
    handler(e, t) {
      throw new L("Mismatched " + e.funcName);
    },
  });
var uo = (e, t) => {
  switch (t.style.size) {
    case re.DISPLAY.size:
      return e.display;
    case re.TEXT.size:
      return e.text;
    case re.SCRIPT.size:
      return e.script;
    case re.SCRIPTSCRIPT.size:
      return e.scriptscript;
    default:
      return e.text;
  }
};
Qt({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: { numArgs: 4, primitive: !0 },
  handler: (e, t) => {
    var { parser: n } = e;
    return {
      type: "mathchoice",
      mode: n.mode,
      display: en(t[0]),
      text: en(t[1]),
      script: en(t[2]),
      scriptscript: en(t[3]),
    };
  },
  htmlBuilder: (e, t) => {
    var n = uo(e, t),
      r = an(n, t, !1);
    return Dt(r);
  },
  mathmlBuilder: (e, t) => {
    var n = uo(e, t);
    return Cn(n, t);
  },
});
var po = (e, t, n, r, o, i, a) => {
    e = Mt([], [e]);
    var s,
      l,
      c,
      u = n && G(n);
    if (t) {
      var d = pn(t, r.havingStyle(o.sup()), r);
      l = {
        elem: d,
        kern: Math.max(
          r.fontMetrics().bigOpSpacing1,
          r.fontMetrics().bigOpSpacing3 - d.depth,
        ),
      };
    }
    if (n) {
      var p = pn(n, r.havingStyle(o.sub()), r);
      s = {
        elem: p,
        kern: Math.max(
          r.fontMetrics().bigOpSpacing2,
          r.fontMetrics().bigOpSpacing4 - p.height,
        ),
      };
    }
    if (l && s) {
      var f =
        r.fontMetrics().bigOpSpacing5 +
        s.elem.height +
        s.elem.depth +
        s.kern +
        e.depth +
        a;
      c = Lt({
        positionType: "bottom",
        positionData: f,
        children: [
          { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
          { type: "elem", elem: s.elem, marginLeft: he(-i) },
          { type: "kern", size: s.kern },
          { type: "elem", elem: e },
          { type: "kern", size: l.kern },
          { type: "elem", elem: l.elem, marginLeft: he(i) },
          { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
        ],
      });
    } else if (s) {
      var h = e.height - a;
      c = Lt({
        positionType: "top",
        positionData: h,
        children: [
          { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
          { type: "elem", elem: s.elem, marginLeft: he(-i) },
          { type: "kern", size: s.kern },
          { type: "elem", elem: e },
        ],
      });
    } else {
      if (!l) return e;
      var m = e.depth + a;
      c = Lt({
        positionType: "bottom",
        positionData: m,
        children: [
          { type: "elem", elem: e },
          { type: "kern", size: l.kern },
          { type: "elem", elem: l.elem, marginLeft: he(i) },
          { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
        ],
      });
    }
    var g = [c];
    if (s && 0 !== i && !u) {
      var y = Mt(["mspace"], [], r);
      (y.style.marginRight = he(i)), g.unshift(y);
    }
    return Mt(["mop", "op-limits"], g, r);
  },
  fo = new Set(["\\smallint"]),
  ho = (e, t) => {
    var n,
      r,
      o,
      i = !1;
    "supsub" === e.type
      ? ((n = e.sup), (r = e.sub), (o = zn(e.base, "op")), (i = !0))
      : (o = zn(e, "op"));
    var a,
      s,
      l = t.style,
      c = !1;
    if (
      (l.size === re.DISPLAY.size && o.symbol && !fo.has(o.name) && (c = !0),
      o.symbol)
    ) {
      var u = c ? "Size2-Regular" : "Size1-Regular",
        d = "";
      if (
        (("\\oiint" !== o.name && "\\oiiint" !== o.name) ||
          ((d = o.name.slice(1)),
          (o.name = "oiint" === d ? "\\iint" : "\\iiint")),
        (s = (a = kt(o.name, u, "math", t, [
          "mop",
          "op-symbol",
          c ? "large-op" : "small-op",
        ])).italic),
        d.length > 0)
      ) {
        var p = Ht(d + "Size" + (c ? "2" : "1"), t);
        (a = Lt({
          positionType: "individualShift",
          children: [
            { type: "elem", elem: a, shift: 0 },
            { type: "elem", elem: p, shift: c ? 0.08 : 0 },
          ],
        })),
          (o.name = "\\" + d),
          a.classes.unshift("mop"),
          (a.italic = s);
      }
    } else if (o.body) {
      var f = an(o.body, t, !0);
      1 === f.length && f[0] instanceof Te
        ? ((a = f[0]).classes[0] = "mop")
        : (a = Mt(["mop"], f, t));
    } else {
      for (var h = [], m = 1; m < o.name.length; m++)
        h.push(Ct(o.name[m], o.mode, t));
      a = Mt(["mop"], h, t);
    }
    var g,
      y = 0,
      v = 0;
    return (
      (a instanceof Te || "\\oiint" === o.name || "\\oiiint" === o.name) &&
        !o.suppressBaseShift &&
        ((y = (a.height - a.depth) / 2 - t.fontMetrics().axisHeight),
        (v = null != (g = a.italic) ? g : 0)),
      i
        ? po(a, n, r, t, l, v, y)
        : (y && ((a.style.position = "relative"), (a.style.top = he(y))), a)
    );
  },
  mo = (e, t) => {
    var n;
    if (e.symbol)
      (n = new gn("mo", [_n(e.name, e.mode)])),
        fo.has(e.name) && n.setAttribute("largeop", "false");
    else if (e.body) n = new gn("mo", kn(e.body, t));
    else {
      n = new gn("mi", [new yn(e.name.slice(1))]);
      var r = new gn("mo", [_n("⁡", "text")]);
      n = e.parentIsSupSub ? new gn("mrow", [n, r]) : mn([n, r]);
    }
    return n;
  },
  go = {
    "∏": "\\prod",
    "∐": "\\coprod",
    "∑": "\\sum",
    "⋀": "\\bigwedge",
    "⋁": "\\bigvee",
    "⋂": "\\bigcap",
    "⋃": "\\bigcup",
    "⨀": "\\bigodot",
    "⨁": "\\bigoplus",
    "⨂": "\\bigotimes",
    "⨄": "\\biguplus",
    "⨆": "\\bigsqcup",
  };
Qt({
  type: "op",
  names: [
    "\\coprod",
    "\\bigvee",
    "\\bigwedge",
    "\\biguplus",
    "\\bigcap",
    "\\bigcup",
    "\\intop",
    "\\prod",
    "\\sum",
    "\\bigotimes",
    "\\bigoplus",
    "\\bigodot",
    "\\bigsqcup",
    "\\smallint",
    "∏",
    "∐",
    "∑",
    "⋀",
    "⋁",
    "⋂",
    "⋃",
    "⨀",
    "⨁",
    "⨂",
    "⨄",
    "⨆",
  ],
  props: { numArgs: 0 },
  handler: (e, t) => {
    var { parser: n, funcName: r } = e,
      o = r;
    return (
      1 === o.length && (o = go[o]),
      {
        type: "op",
        mode: n.mode,
        limits: !0,
        parentIsSupSub: !1,
        symbol: !0,
        name: o,
      }
    );
  },
  htmlBuilder: ho,
  mathmlBuilder: mo,
}),
  Qt({
    type: "op",
    names: ["\\mathop"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
      var { parser: n } = e,
        r = t[0];
      return {
        type: "op",
        mode: n.mode,
        limits: !1,
        parentIsSupSub: !1,
        symbol: !1,
        body: en(r),
      };
    },
    htmlBuilder: ho,
    mathmlBuilder: mo,
  });
var yo = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint",
};
Qt({
  type: "op",
  names: [
    "\\arcsin",
    "\\arccos",
    "\\arctan",
    "\\arctg",
    "\\arcctg",
    "\\arg",
    "\\ch",
    "\\cos",
    "\\cosec",
    "\\cosh",
    "\\cot",
    "\\cotg",
    "\\coth",
    "\\csc",
    "\\ctg",
    "\\cth",
    "\\deg",
    "\\dim",
    "\\exp",
    "\\hom",
    "\\ker",
    "\\lg",
    "\\ln",
    "\\log",
    "\\sec",
    "\\sin",
    "\\sinh",
    "\\sh",
    "\\tan",
    "\\tanh",
    "\\tg",
    "\\th",
  ],
  props: { numArgs: 0 },
  handler(e) {
    var { parser: t, funcName: n } = e;
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: n,
    };
  },
  htmlBuilder: ho,
  mathmlBuilder: mo,
}),
  Qt({
    type: "op",
    names: [
      "\\det",
      "\\gcd",
      "\\inf",
      "\\lim",
      "\\max",
      "\\min",
      "\\Pr",
      "\\sup",
    ],
    props: { numArgs: 0 },
    handler(e) {
      var { parser: t, funcName: n } = e;
      return {
        type: "op",
        mode: t.mode,
        limits: !0,
        parentIsSupSub: !1,
        symbol: !1,
        name: n,
      };
    },
    htmlBuilder: ho,
    mathmlBuilder: mo,
  }),
  Qt({
    type: "op",
    names: [
      "\\int",
      "\\iint",
      "\\iiint",
      "\\oint",
      "\\oiint",
      "\\oiiint",
      "∫",
      "∬",
      "∭",
      "∮",
      "∯",
      "∰",
    ],
    props: { numArgs: 0, allowedInArgument: !0 },
    handler(e) {
      var { parser: t, funcName: n } = e,
        r = n;
      return (
        1 === r.length && (r = yo[r]),
        {
          type: "op",
          mode: t.mode,
          limits: !1,
          parentIsSupSub: !1,
          symbol: !0,
          name: r,
        }
      );
    },
    htmlBuilder: ho,
    mathmlBuilder: mo,
  });
var vo = (e, t) => {
  var n,
    r,
    o,
    i,
    a = !1;
  if (
    ("supsub" === e.type
      ? ((n = e.sup), (r = e.sub), (o = zn(e.base, "operatorname")), (a = !0))
      : (o = zn(e, "operatorname")),
    o.body.length > 0)
  ) {
    for (
      var s = o.body.map((e) => {
          var t = ("text" in e) ? e.text : void 0;
          return "string" == typeof t
            ? { type: "textord", mode: e.mode, text: t }
            : e;
        }),
        l = an(s, t.withFont("mathrm"), !0),
        c = 0;
      c < l.length;
      c++
    ) {
      var u = l[c];
      u instanceof Te &&
        (u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    i = Mt(["mop"], l, t);
  } else i = Mt(["mop"], [], t);
  return a ? po(i, n, r, t, t.style, 0, 0) : i;
};
function bo(e, t, n) {
  for (
    var r = an(e, t, !1), o = t.sizeMultiplier / n.sizeMultiplier, i = 0;
    i < r.length;
    i++
  ) {
    var a = r[i].classes.indexOf("sizing");
    a < 0
      ? Array.prototype.push.apply(r[i].classes, t.sizingClasses(n))
      : r[i].classes[a + 1] === "reset-size" + t.size &&
        (r[i].classes[a + 1] = "reset-size" + n.size),
      (r[i].height *= o),
      (r[i].depth *= o);
  }
  return Dt(r);
}
Qt({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: { numArgs: 1 },
  handler: (e, t) => {
    var { parser: n, funcName: r } = e,
      o = t[0];
    return {
      type: "operatorname",
      mode: n.mode,
      body: en(o),
      alwaysHandleSupSub: "\\operatornamewithlimits" === r,
      limits: !1,
      parentIsSupSub: !1,
    };
  },
  htmlBuilder: vo,
  mathmlBuilder: (e, t) => {
    for (
      var n = kn(e.body, t.withFont("mathrm")), r = !0, o = 0;
      o < n.length;
      o++
    ) {
      var i = n[o];
      if (i instanceof vn);
      else if (i instanceof gn)
        switch (i.type) {
          case "mi":
          case "mn":
          case "mspace":
          case "mtext":
            break;
          case "mo":
            var a = i.children[0];
            1 === i.children.length && a instanceof yn
              ? (a.text = a.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
              : (r = !1);
            break;
          default:
            r = !1;
        }
      else r = !1;
    }
    if (r) {
      var s = n.map((e) => e.toText()).join("");
      n = [new yn(s)];
    }
    var l = new gn("mi", n);
    l.setAttribute("mathvariant", "normal");
    var c = new gn("mo", [_n("⁡", "text")]);
    return e.parentIsSupSub ? new gn("mrow", [l, c]) : mn([l, c]);
  },
}),
  Hr("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"),
  Jt({
    type: "ordgroup",
    htmlBuilder: (e, t) =>
      e.semisimple ? Dt(an(e.body, t, !1)) : Mt(["mord"], an(e.body, t, !0), t),
    mathmlBuilder: (e, t) => Cn(e.body, t, !0),
  }),
  Qt({
    type: "overline",
    names: ["\\overline"],
    props: { numArgs: 1 },
    handler(e, t) {
      var { parser: n } = e,
        r = t[0];
      return { type: "overline", mode: n.mode, body: r };
    },
    htmlBuilder(e, t) {
      var n = pn(e.body, t.havingCrampedStyle()),
        r = Nt("overline-line", t),
        o = t.fontMetrics().defaultRuleThickness,
        i = Lt({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: n },
            { type: "kern", size: 3 * o },
            { type: "elem", elem: r },
            { type: "kern", size: o },
          ],
        });
      return Mt(["mord", "overline"], [i], t);
    },
    mathmlBuilder(e, t) {
      var n = new gn("mo", [new yn("‾")]);
      n.setAttribute("stretchy", "true");
      var r = new gn("mover", [In(e.body, t), n]);
      return r.setAttribute("accent", "true"), r;
    },
  }),
  Qt({
    type: "phantom",
    names: ["\\phantom"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
      var { parser: n } = e,
        r = t[0];
      return { type: "phantom", mode: n.mode, body: en(r) };
    },
    htmlBuilder: (e, t) => {
      var n = an(e.body, t.withPhantom(), !1);
      return Dt(n);
    },
    mathmlBuilder: (e, t) => {
      var n = kn(e.body, t);
      return new gn("mphantom", n);
    },
  }),
  Hr("\\hphantom", "\\smash{\\phantom{#1}}"),
  Qt({
    type: "vphantom",
    names: ["\\vphantom"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
      var { parser: n } = e,
        r = t[0];
      return { type: "vphantom", mode: n.mode, body: r };
    },
    htmlBuilder: (e, t) => {
      var n = Mt(["inner"], [pn(e.body, t.withPhantom())]),
        r = Mt(["fix"], []);
      return Mt(["mord", "rlap"], [n, r], t);
    },
    mathmlBuilder: (e, t) => {
      var n = kn(en(e.body), t),
        r = new gn("mphantom", n),
        o = new gn("mpadded", [r]);
      return o.setAttribute("width", "0px"), o;
    },
  }),
  Qt({
    type: "raisebox",
    names: ["\\raisebox"],
    props: {
      numArgs: 2,
      argTypes: ["size", "hbox"],
      allowedInText: !0,
    },
    handler(e, t) {
      var { parser: n } = e,
        r = zn(t[0], "size").value,
        o = t[1];
      return { type: "raisebox", mode: n.mode, dy: r, body: o };
    },
    htmlBuilder(e, t) {
      var n = pn(e.body, t),
        r = fe(e.dy, t);
      return Lt({
        positionType: "shift",
        positionData: -r,
        children: [{ type: "elem", elem: n }],
      });
    },
    mathmlBuilder(e, t) {
      var n = new gn("mpadded", [In(e.body, t)]),
        r = e.dy.number + e.dy.unit;
      return n.setAttribute("voffset", r), n;
    },
  }),
  Qt({
    type: "internal",
    names: ["\\relax"],
    props: { numArgs: 0, allowedInText: !0, allowedInArgument: !0 },
    handler(e) {
      var { parser: t } = e;
      return { type: "internal", mode: t.mode };
    },
  }),
  Qt({
    type: "rule",
    names: ["\\rule"],
    props: {
      numArgs: 2,
      numOptionalArgs: 1,
      allowedInText: !0,
      allowedInMath: !0,
      argTypes: ["size", "size", "size"],
    },
    handler(e, t, n) {
      var { parser: r } = e,
        o = n[0],
        i = zn(t[0], "size"),
        a = zn(t[1], "size");
      return {
        type: "rule",
        mode: r.mode,
        shift: o && zn(o, "size").value,
        width: i.value,
        height: a.value,
      };
    },
    htmlBuilder(e, t) {
      var n = Mt(["mord", "rule"], [], t),
        r = fe(e.width, t),
        o = fe(e.height, t),
        i = e.shift ? fe(e.shift, t) : 0;
      return (
        (n.style.borderRightWidth = he(r)),
        (n.style.borderTopWidth = he(o)),
        (n.style.bottom = he(i)),
        (n.width = r),
        (n.height = o + i),
        (n.depth = -i),
        (n.maxFontSize = 1.125 * o * t.sizeMultiplier),
        n
      );
    },
    mathmlBuilder(e, t) {
      var n = fe(e.width, t),
        r = fe(e.height, t),
        o = e.shift ? fe(e.shift, t) : 0,
        i = (t.color && t.getColor()) || "black",
        a = new gn("mspace");
      a.setAttribute("mathbackground", i),
        a.setAttribute("width", he(n)),
        a.setAttribute("height", he(r));
      var s = new gn("mpadded", [a]);
      return (
        o >= 0
          ? s.setAttribute("height", he(o))
          : (s.setAttribute("height", he(o)), s.setAttribute("depth", he(-o))),
        s.setAttribute("voffset", he(o)),
        s
      );
    },
  });
var So = [
  "\\tiny",
  "\\sixptsize",
  "\\scriptsize",
  "\\footnotesize",
  "\\small",
  "\\normalsize",
  "\\large",
  "\\Large",
  "\\LARGE",
  "\\huge",
  "\\Huge",
];
Qt({
  type: "sizing",
  names: So,
  props: { numArgs: 0, allowedInText: !0 },
  handler: (e, t) => {
    var { breakOnTokenText: n, funcName: r, parser: o } = e,
      i = o.parseExpression(!1, n);
    return {
      type: "sizing",
      mode: o.mode,
      size: So.indexOf(r) + 1,
      body: i,
    };
  },
  htmlBuilder: (e, t) => {
    var n = t.havingSize(e.size);
    return bo(e.body, n, t);
  },
  mathmlBuilder: (e, t) => {
    var n = t.havingSize(e.size),
      r = kn(e.body, n),
      o = new gn("mstyle", r);
    return o.setAttribute("mathsize", he(n.sizeMultiplier)), o;
  },
}),
  Qt({
    type: "smash",
    names: ["\\smash"],
    props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
    handler: (e, t, n) => {
      var { parser: r } = e,
        o = !1,
        i = !1,
        a = n[0] && zn(n[0], "ordgroup");
      if (a)
        for (var s, l = 0; l < a.body.length; ++l)
          if ("t" === (s = Hn(a.body[l]).text)) o = !0;
          else {
            if ("b" !== s) {
              (o = !1), (i = !1);
              break;
            }
            i = !0;
          }
      else (o = !0), (i = !0);
      var c = t[0];
      return {
        type: "smash",
        mode: r.mode,
        body: c,
        smashHeight: o,
        smashDepth: i,
      };
    },
    htmlBuilder: (e, t) => {
      var n = Mt([], [pn(e.body, t)]);
      if (!e.smashHeight && !e.smashDepth) return n;
      if (
        (e.smashHeight && (n.height = 0),
        e.smashDepth && (n.depth = 0),
        e.smashHeight && e.smashDepth)
      )
        return Mt(["mord", "smash"], [n], t);
      if (n.children)
        for (var r = 0; r < n.children.length; r++)
          e.smashHeight && (n.children[r].height = 0),
            e.smashDepth && (n.children[r].depth = 0);
      var o = Lt({
        positionType: "firstBaseline",
        children: [{ type: "elem", elem: n }],
      });
      return Mt(["mord"], [o], t);
    },
    mathmlBuilder: (e, t) => {
      var n = new gn("mpadded", [In(e.body, t)]);
      return (
        e.smashHeight && n.setAttribute("height", "0px"),
        e.smashDepth && n.setAttribute("depth", "0px"),
        n
      );
    },
  }),
  Qt({
    type: "sqrt",
    names: ["\\sqrt"],
    props: { numArgs: 1, numOptionalArgs: 1 },
    handler(e, t, n) {
      var { parser: r } = e,
        o = n[0],
        i = t[0];
      return { type: "sqrt", mode: r.mode, body: i, index: o };
    },
    htmlBuilder(e, t) {
      var n = pn(e.body, t.havingCrampedStyle());
      0 === n.height && (n.height = t.fontMetrics().xHeight), (n = jt(n, t));
      var r = t.fontMetrics().defaultRuleThickness,
        o = r;
      t.style.id < re.TEXT.id && (o = t.fontMetrics().xHeight);
      var i = r + o / 4,
        a = n.height + n.depth + i + r,
        {
          span: s,
          ruleWidth: l,
          advanceWidth: c,
        } = (function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = t.havingBaseSizing(),
            l = Ar("\\surd", e * s.sizeMultiplier, Cr, s),
            c = s.sizeMultiplier,
            u = Math.max(
              0,
              t.minRuleThickness - t.fontMetrics().sqrtRuleThickness,
            );
          return (
            "small" === l.type
              ? (e < 1 ? (c = 1) : e < 1.4 && (c = 0.7),
                (o = (1 + u) / c),
                ((n = br(
                  "sqrtMain",
                  (r = (1 + u + vr) / c),
                  (i = 1e3 + 1e3 * u + 80),
                  u,
                  t,
                )).style.minWidth = "0.853em"),
                (a = 0.833 / c))
              : "large" === l.type
                ? ((i = 1080 * wr[l.size]),
                  (o = (wr[l.size] + u) / c),
                  (r = (wr[l.size] + u + vr) / c),
                  ((n = br("sqrtSize" + l.size, r, i, u, t)).style.minWidth =
                    "1.02em"),
                  (a = 1 / c))
                : ((r = e + u + vr),
                  (o = e + u),
                  (i = Math.floor(1e3 * e + u) + 80),
                  ((n = br("sqrtTall", r, i, u, t)).style.minWidth = "0.742em"),
                  (a = 1.056)),
            (n.height = o),
            (n.style.height = he(r)),
            {
              span: n,
              advanceWidth: a,
              ruleWidth: (t.fontMetrics().sqrtRuleThickness + u) * c,
            }
          );
        })(a, t),
        u = s.height - l;
      u > n.height + n.depth + i && (i = (i + u - n.height - n.depth) / 2);
      var d = s.height - n.height - i - l;
      n.style.paddingLeft = he(c);
      var p = Lt({
        positionType: "firstBaseline",
        children: [
          { type: "elem", elem: n, wrapperClasses: ["svg-align"] },
          { type: "kern", size: -(n.height + d) },
          { type: "elem", elem: s },
          { type: "kern", size: l },
        ],
      });
      if (e.index) {
        var f = t.havingStyle(re.SCRIPTSCRIPT),
          h = pn(e.index, f, t),
          m = 0.6 * (p.height - p.depth),
          g = Lt({
            positionType: "shift",
            positionData: -m,
            children: [{ type: "elem", elem: h }],
          }),
          y = Mt(["root"], [g]);
        return Mt(["mord", "sqrt"], [y, p], t);
      }
      return Mt(["mord", "sqrt"], [p], t);
    },
    mathmlBuilder(e, t) {
      var { body: n, index: r } = e;
      return r
        ? new gn("mroot", [In(n, t), In(r, t)])
        : new gn("msqrt", [In(n, t)]);
    },
  });
var _o = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT,
};
Qt({
  type: "styling",
  names: [
    "\\displaystyle",
    "\\textstyle",
    "\\scriptstyle",
    "\\scriptscriptstyle",
  ],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(e, t) {
    var { breakOnTokenText: n, funcName: r, parser: o } = e,
      i = o.parseExpression(!0, n),
      a = r.slice(1, r.length - 5);
    if (
      !(function (e) {
        return e in _o;
      })(a)
    )
      throw new Error("Unknown style: " + a);
    return { type: "styling", mode: o.mode, style: a, body: i };
  },
  htmlBuilder(e, t) {
    var n = _o[e.style],
      r = t.havingStyle(n);
    return e.resetFont && (r = r.withFont("")), bo(e.body, r, t);
  },
  mathmlBuilder(e, t) {
    var n = _o[e.style],
      r = t.havingStyle(n);
    e.resetFont && (r = r.withFont(""));
    var o = kn(e.body, r),
      i = new gn("mstyle", o),
      a = {
        display: ["0", "true"],
        text: ["0", "false"],
        script: ["1", "false"],
        scriptscript: ["2", "false"],
      }[e.style];
    return (
      i.setAttribute("scriptlevel", a[0]),
      i.setAttribute("displaystyle", a[1]),
      i
    );
  },
}),
  Jt({
    type: "supsub",
    htmlBuilder(e, t) {
      var n = (function (e, t) {
        var n = e.base;
        return n
          ? "op" === n.type
            ? n.limits &&
              (t.style.size === re.DISPLAY.size || n.alwaysHandleSupSub)
              ? ho
              : null
            : "operatorname" === n.type
              ? n.alwaysHandleSupSub &&
                (t.style.size === re.DISPLAY.size || n.limits)
                ? vo
                : null
              : "accent" === n.type
                ? G(n.base)
                  ? Gn
                  : null
                : "horizBrace" === n.type && !e.sub === n.isOver
                  ? lo
                  : null
          : null;
      })(e, t);
      if (n) return n(e, t);
      var r,
        o,
        i,
        { base: a, sup: s, sub: l } = e,
        c = pn(a, t),
        u = t.fontMetrics(),
        d = 0,
        p = 0,
        f = a && G(a);
      if (s) {
        var h = t.havingStyle(t.style.sup());
        (r = pn(s, h, t)),
          f ||
            (d =
              c.height -
              (h.fontMetrics().supDrop * h.sizeMultiplier) / t.sizeMultiplier);
      }
      if (l) {
        var m = t.havingStyle(t.style.sub());
        (o = pn(l, m, t)),
          f ||
            (p =
              c.depth +
              (m.fontMetrics().subDrop * m.sizeMultiplier) / t.sizeMultiplier);
      }
      i = t.style === re.DISPLAY ? u.sup1 : t.style.cramped ? u.sup3 : u.sup2;
      var g,
        y = t.sizeMultiplier,
        v = he(0.5 / u.ptPerEm / y),
        b = null;
      if (o) {
        var S,
          _ =
            e.base &&
            "op" === e.base.type &&
            e.base.name &&
            ("\\oiint" === e.base.name || "\\oiiint" === e.base.name);
        (c instanceof Te || _) && (b = he(-(null != (S = c.italic) ? S : 0)));
      }
      if (r && o) {
        (d = Math.max(d, i, r.depth + 0.25 * u.xHeight)),
          (p = Math.max(p, u.sub2));
        var x = 4 * u.defaultRuleThickness;
        if (d - r.depth - (o.height - p) < x) {
          p = x - (d - r.depth) + o.height;
          var w = 0.8 * u.xHeight - (d - r.depth);
          w > 0 && ((d += w), (p -= w));
        }
        g = Lt({
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: o,
              shift: p,
              marginRight: v,
              marginLeft: b,
            },
            { type: "elem", elem: r, shift: -d, marginRight: v },
          ],
        });
      } else if (o)
        (p = Math.max(p, u.sub1, o.height - 0.8 * u.xHeight)),
          (g = Lt({
            positionType: "shift",
            positionData: p,
            children: [
              {
                type: "elem",
                elem: o,
                marginLeft: b,
                marginRight: v,
              },
            ],
          }));
      else {
        if (!r) throw new Error("supsub must have either sup or sub.");
        (d = Math.max(d, i, r.depth + 0.25 * u.xHeight)),
          (g = Lt({
            positionType: "shift",
            positionData: -d,
            children: [{ type: "elem", elem: r, marginRight: v }],
          }));
      }
      var E = un(c, "right") || "mord";
      return Mt([E], [c, Mt(["msupsub"], [g])], t);
    },
    mathmlBuilder(e, t) {
      var n,
        r = !1;
      e.base &&
        "horizBrace" === e.base.type &&
        !!e.sup === e.base.isOver &&
        ((r = !0), (n = e.base.isOver)),
        !e.base ||
          ("op" !== e.base.type && "operatorname" !== e.base.type) ||
          (e.base.parentIsSupSub = !0);
      var o,
        i = [In(e.base, t)];
      if ((e.sub && i.push(In(e.sub, t)), e.sup && i.push(In(e.sup, t)), r))
        o = n ? "mover" : "munder";
      else if (e.sub)
        if (e.sup) {
          var a = e.base;
          o =
            (a && "op" === a.type && a.limits && t.style === re.DISPLAY) ||
            (a &&
              "operatorname" === a.type &&
              a.alwaysHandleSupSub &&
              (t.style === re.DISPLAY || a.limits))
              ? "munderover"
              : "msubsup";
        } else {
          var s = e.base;
          o =
            (s &&
              "op" === s.type &&
              s.limits &&
              (t.style === re.DISPLAY || s.alwaysHandleSupSub)) ||
            (s &&
              "operatorname" === s.type &&
              s.alwaysHandleSupSub &&
              (s.limits || t.style === re.DISPLAY))
              ? "munder"
              : "msub";
        }
      else {
        var l = e.base;
        o =
          (l &&
            "op" === l.type &&
            l.limits &&
            (t.style === re.DISPLAY || l.alwaysHandleSupSub)) ||
          (l &&
            "operatorname" === l.type &&
            l.alwaysHandleSupSub &&
            (l.limits || t.style === re.DISPLAY))
            ? "mover"
            : "msup";
      }
      return new gn(o, i);
    },
  }),
  Jt({
    type: "atom",
    htmlBuilder: (e, t) => Ct(e.text, e.mode, t, ["m" + e.family]),
    mathmlBuilder(e, t) {
      var n = new gn("mo", [_n(e.text, e.mode)]);
      if ("bin" === e.family) {
        var r = En(e, t);
        "bold-italic" === r && n.setAttribute("mathvariant", r);
      } else
        "punct" === e.family
          ? n.setAttribute("separator", "true")
          : ("open" !== e.family && "close" !== e.family) ||
            n.setAttribute("stretchy", "false");
      return n;
    },
  });
var xo = { mi: "italic", mn: "normal", mtext: "normal" };
Jt({
  type: "mathord",
  htmlBuilder: (e, t) => It(e, t, "mathord"),
  mathmlBuilder(e, t) {
    var n = new gn("mi", [_n(e.text, e.mode, t)]),
      r = En(e, t) || "italic";
    return r !== xo[n.type] && n.setAttribute("mathvariant", r), n;
  },
}),
  Jt({
    type: "textord",
    htmlBuilder: (e, t) => It(e, t, "textord"),
    mathmlBuilder(e, t) {
      var n,
        r = _n(e.text, e.mode, t),
        o = En(e, t) || "normal";
      return (
        (n =
          "text" === e.mode
            ? new gn("mtext", [r])
            : /[0-9]/.test(e.text)
              ? new gn("mn", [r])
              : "\\prime" === e.text
                ? new gn("mo", [r])
                : new gn("mi", [r])),
        o !== xo[n.type] && n.setAttribute("mathvariant", o),
        n
      );
    },
  });
var wo = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
  Eo = {
    " ": {},
    "\\ ": {},
    "~": { className: "nobreak" },
    "\\space": {},
    "\\nobreakspace": { className: "nobreak" },
  };
Jt({
  type: "spacing",
  htmlBuilder(e, t) {
    if (Eo.hasOwnProperty(e.text)) {
      var n = Eo[e.text].className || "";
      if ("text" === e.mode) {
        var r = It(e, t, "textord");
        return r.classes.push(n), r;
      }
      return Mt(["mspace", n], [Ct(e.text, e.mode, t)], t);
    }
    if (wo.hasOwnProperty(e.text)) return Mt(["mspace", wo[e.text]], [], t);
    throw new L('Unknown type of space "' + e.text + '"');
  },
  mathmlBuilder(e, t) {
    if (!Eo.hasOwnProperty(e.text)) {
      if (wo.hasOwnProperty(e.text)) return new gn("mspace");
      throw new L('Unknown type of space "' + e.text + '"');
    }
    return new gn("mtext", [new yn(" ")]);
  },
});
var To = () => {
  var e = new gn("mtd", []);
  return e.setAttribute("width", "50%"), e;
};
Jt({
  type: "tag",
  mathmlBuilder(e, t) {
    var n = new gn("mtable", [
      new gn("mtr", [
        To(),
        new gn("mtd", [Cn(e.body, t)]),
        To(),
        new gn("mtd", [Cn(e.tag, t)]),
      ]),
    ]);
    return n.setAttribute("width", "100%"), n;
  },
});
var ko = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm",
  },
  Co = { "\\textbf": "textbf", "\\textmd": "textmd" },
  Io = { "\\textit": "textit", "\\textup": "textup" },
  Ao = (e, t) => {
    var n = e.font;
    return n
      ? ko[n]
        ? t.withTextFontFamily(ko[n])
        : Co[n]
          ? t.withTextFontWeight(Co[n])
          : "\\emph" === n
            ? "textit" === t.fontShape
              ? t.withTextFontShape("textup")
              : t.withTextFontShape("textit")
            : t.withTextFontShape(Io[n])
      : t;
  };
Qt({
  type: "text",
  names: [
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    "\\textbf",
    "\\textmd",
    "\\textit",
    "\\textup",
    "\\emph",
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0,
  },
  handler(e, t) {
    var { parser: n, funcName: r } = e,
      o = t[0];
    return { type: "text", mode: n.mode, body: en(o), font: r };
  },
  htmlBuilder(e, t) {
    var n = Ao(e, t),
      r = an(e.body, n, !0);
    return Mt(["mord", "text"], r, n);
  },
  mathmlBuilder(e, t) {
    var n = Ao(e, t);
    return Cn(e.body, n);
  },
}),
  Qt({
    type: "underline",
    names: ["\\underline"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
      var { parser: n } = e;
      return { type: "underline", mode: n.mode, body: t[0] };
    },
    htmlBuilder(e, t) {
      var n = pn(e.body, t),
        r = Nt("underline-line", t),
        o = t.fontMetrics().defaultRuleThickness,
        i = Lt({
          positionType: "top",
          positionData: n.height,
          children: [
            { type: "kern", size: o },
            { type: "elem", elem: r },
            { type: "kern", size: 3 * o },
            { type: "elem", elem: n },
          ],
        });
      return Mt(["mord", "underline"], [i], t);
    },
    mathmlBuilder(e, t) {
      var n = new gn("mo", [new yn("‾")]);
      n.setAttribute("stretchy", "true");
      var r = new gn("munder", [In(e.body, t), n]);
      return r.setAttribute("accentunder", "true"), r;
    },
  }),
  Qt({
    type: "vcenter",
    names: ["\\vcenter"],
    props: { numArgs: 1, argTypes: ["original"], allowedInText: !1 },
    handler(e, t) {
      var { parser: n } = e;
      return { type: "vcenter", mode: n.mode, body: t[0] };
    },
    htmlBuilder(e, t) {
      var n = pn(e.body, t),
        r = t.fontMetrics().axisHeight,
        o = 0.5 * (n.height - r - (n.depth + r));
      return Lt({
        positionType: "shift",
        positionData: o,
        children: [{ type: "elem", elem: n }],
      });
    },
    mathmlBuilder(e, t) {
      var n = new gn("mpadded", [In(e.body, t)], ["vcenter"]);
      return new gn("mrow", [n]);
    },
  }),
  Qt({
    type: "verb",
    names: ["\\verb"],
    props: { numArgs: 0, allowedInText: !0 },
    handler(e, t, n) {
      throw new L("\\verb ended by end of line instead of matching delimiter");
    },
    htmlBuilder(e, t) {
      for (
        var n = Oo(e), r = [], o = t.havingStyle(t.style.text()), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        "~" === a && (a = "\\textasciitilde"),
          r.push(kt(a, "Typewriter-Regular", e.mode, o, ["mord", "texttt"]));
      }
      return Mt(["mord", "text"].concat(o.sizingClasses(t)), Ot(r), o);
    },
    mathmlBuilder(e, t) {
      var n = new yn(Oo(e)),
        r = new gn("mtext", [n]);
      return r.setAttribute("mathvariant", "monospace"), r;
    },
  });
var Oo = (e) => e.body.replace(/ /g, e.star ? "␣" : " "),
  Ro = Yt,
  Mo = "[ \r\n\t]",
  Po = "(\\\\[a-zA-Z@]+)" + Mo + "*",
  No = "[̀-ͯ]",
  Do = new RegExp(No + "+$"),
  jo =
    "(" +
    Mo +
    "+)|\\\\(\n|[ \r\t]+\n?)[ \r\t]*|([!-\\[\\]-‧‪-퟿豈-￿]" +
    No +
    "*|[\ud800-\udbff][\udc00-\udfff]" +
    No +
    "*|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5|" +
    Po +
    "|\\\\[^\ud800-\udfff])";
class Lo {
  constructor(e, t) {
    (this.input = void 0),
      (this.settings = void 0),
      (this.tokenRegex = void 0),
      (this.catcodes = void 0),
      (this.input = e),
      (this.settings = t),
      (this.tokenRegex = new RegExp(jo, "g")),
      (this.catcodes = { "%": 14, "~": 13 });
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  lex() {
    var e = this.input,
      t = this.tokenRegex.lastIndex;
    if (t === e.length) return new qr("EOF", new Vr(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (null === n || n.index !== t)
      throw new L(
        "Unexpected character: '" + e[t] + "'",
        new qr(e[t], new Vr(this, t, t + 1)),
      );
    var r = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (14 === this.catcodes[r]) {
      var o = e.indexOf("\n", this.tokenRegex.lastIndex);
      return (
        -1 === o
          ? ((this.tokenRegex.lastIndex = e.length),
            this.settings.reportNonstrict(
              "commentAtEnd",
              "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)",
            ))
          : (this.tokenRegex.lastIndex = o + 1),
        this.lex()
      );
    }
    return new qr(r, new Vr(this, t, this.tokenRegex.lastIndex));
  }
}
class Fo {
  constructor(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      (this.current = void 0),
      (this.builtins = void 0),
      (this.undefStack = void 0),
      (this.current = t),
      (this.builtins = e),
      (this.undefStack = []);
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (0 === this.undefStack.length)
      throw new L(
        "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug",
      );
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) &&
        (null == e[t] ? delete this.current[t] : (this.current[t] = e[t]));
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  set(e, t, n) {
    if ((void 0 === n && (n = !1), n)) {
      for (var r = 0; r < this.undefStack.length; r++)
        delete this.undefStack[r][e];
      this.undefStack.length > 0 &&
        (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var o = this.undefStack[this.undefStack.length - 1];
      o && !o.hasOwnProperty(e) && (o[e] = this.current[e]);
    }
    null == t ? delete this.current[e] : (this.current[e] = t);
  }
}
var Uo = zr;
Hr("\\noexpand", function (e) {
  var t = e.popToken();
  return (
    e.isExpandable(t.text) && ((t.noexpand = !0), (t.treatAsRelax = !0)),
    { tokens: [t], numArgs: 0 }
  );
}),
  Hr("\\expandafter", function (e) {
    var t = e.popToken();
    return e.expandOnce(!0), { tokens: [t], numArgs: 0 };
  }),
  Hr("\\@firstoftwo", function (e) {
    return { tokens: e.consumeArgs(2)[0], numArgs: 0 };
  }),
  Hr("\\@secondoftwo", function (e) {
    return { tokens: e.consumeArgs(2)[1], numArgs: 0 };
  }),
  Hr("\\@ifnextchar", function (e) {
    var t = e.consumeArgs(3);
    e.consumeSpaces();
    var n = e.future();
    return 1 === t[0].length && t[0][0].text === n.text
      ? { tokens: t[1], numArgs: 0 }
      : { tokens: t[2], numArgs: 0 };
  }),
  Hr("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"),
  Hr("\\TextOrMath", function (e) {
    var t = e.consumeArgs(2);
    return "text" === e.mode
      ? { tokens: t[0], numArgs: 0 }
      : { tokens: t[1], numArgs: 0 };
  });
var Bo = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15,
};
Hr("\\char", function (e) {
  var t,
    n = e.popToken(),
    r = 0;
  if ("'" === n.text) (t = 8), (n = e.popToken());
  else if ('"' === n.text) (t = 16), (n = e.popToken());
  else if ("`" === n.text)
    if ("\\" === (n = e.popToken()).text[0]) r = n.text.charCodeAt(1);
    else {
      if ("EOF" === n.text) throw new L("\\char` missing argument");
      r = n.text.charCodeAt(0);
    }
  else t = 10;
  if (t) {
    if (null == (r = Bo[n.text]) || r >= t)
      throw new L("Invalid base-" + t + " digit " + n.text);
    for (var o; null != (o = Bo[e.future().text]) && o < t; )
      (r *= t), (r += o), e.popToken();
  }
  return "\\@char{" + r + "}";
});
var zo = (e, t, n, r) => {
  var o = e.consumeArg().tokens;
  if (1 !== o.length)
    throw new L("\\newcommand's first argument must be a macro name");
  var i = o[0].text,
    a = e.isDefined(i);
  if (a && !t)
    throw new L(
      "\\newcommand{" +
        i +
        "} attempting to redefine " +
        i +
        "; use \\renewcommand",
    );
  if (!a && !n)
    throw new L(
      "\\renewcommand{" +
        i +
        "} when command " +
        i +
        " does not yet exist; use \\newcommand",
    );
  var s = 0;
  if (1 === (o = e.consumeArg().tokens).length && "[" === o[0].text) {
    for (
      var l = "", c = e.expandNextToken();
      "]" !== c.text && "EOF" !== c.text;

    )
      (l += c.text), (c = e.expandNextToken());
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new L("Invalid number of arguments: " + l);
    (s = parseInt(l)), (o = e.consumeArg().tokens);
  }
  return (a && r) || e.macros.set(i, { tokens: o, numArgs: s }), "";
};
Hr("\\newcommand", (e) => zo(e, !1, !0, !1)),
  Hr("\\renewcommand", (e) => zo(e, !0, !1, !1)),
  Hr("\\providecommand", (e) => zo(e, !0, !0, !0)),
  Hr("\\message", (e) => (e.consumeArgs(1)[0], "")),
  Hr("\\errmessage", (e) => (e.consumeArgs(1)[0], "")),
  Hr("\\show", (e) => (e.popToken().text, "")),
  Hr("\\bgroup", "{"),
  Hr("\\egroup", "}"),
  Hr("~", "\\nobreakspace"),
  Hr("\\lq", "`"),
  Hr("\\rq", "'"),
  Hr("\\aa", "\\r a"),
  Hr("\\AA", "\\r A"),
  Hr("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"),
  Hr("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"),
  Hr(
    "\\textregistered",
    "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}",
  ),
  Hr("ℬ", "\\mathscr{B}"),
  Hr("ℰ", "\\mathscr{E}"),
  Hr("ℱ", "\\mathscr{F}"),
  Hr("ℋ", "\\mathscr{H}"),
  Hr("ℐ", "\\mathscr{I}"),
  Hr("ℒ", "\\mathscr{L}"),
  Hr("ℳ", "\\mathscr{M}"),
  Hr("ℛ", "\\mathscr{R}"),
  Hr("ℭ", "\\mathfrak{C}"),
  Hr("ℌ", "\\mathfrak{H}"),
  Hr("ℨ", "\\mathfrak{Z}"),
  Hr("\\Bbbk", "\\Bbb{k}"),
  Hr("\\llap", "\\mathllap{\\textrm{#1}}"),
  Hr("\\rlap", "\\mathrlap{\\textrm{#1}}"),
  Hr("\\clap", "\\mathclap{\\textrm{#1}}"),
  Hr("\\mathstrut", "\\vphantom{(}"),
  Hr("\\underbar", "\\underline{\\text{#1}}"),
  Hr(
    "\\not",
    '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}',
  ),
  Hr("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),
  Hr("\\ne", "\\neq"),
  Hr("≠", "\\neq"),
  Hr(
    "\\notin",
    "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}",
  ),
  Hr("∉", "\\notin"),
  Hr(
    "≘",
    "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}",
  ),
  Hr("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),
  Hr("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),
  Hr(
    "≛",
    "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}",
  ),
  Hr(
    "≝",
    "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}",
  ),
  Hr(
    "≞",
    "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}",
  ),
  Hr("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),
  Hr("⟂", "\\perp"),
  Hr("‼", "\\mathclose{!\\mkern-0.8mu!}"),
  Hr("∌", "\\notni"),
  Hr("⌜", "\\ulcorner"),
  Hr("⌝", "\\urcorner"),
  Hr("⌞", "\\llcorner"),
  Hr("⌟", "\\lrcorner"),
  Hr("©", "\\copyright"),
  Hr("®", "\\textregistered"),
  Hr("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'),
  Hr("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'),
  Hr("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'),
  Hr("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'),
  Hr("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}"),
  Hr("⋮", "\\vdots"),
  Hr("\\varGamma", "\\mathit{\\Gamma}"),
  Hr("\\varDelta", "\\mathit{\\Delta}"),
  Hr("\\varTheta", "\\mathit{\\Theta}"),
  Hr("\\varLambda", "\\mathit{\\Lambda}"),
  Hr("\\varXi", "\\mathit{\\Xi}"),
  Hr("\\varPi", "\\mathit{\\Pi}"),
  Hr("\\varSigma", "\\mathit{\\Sigma}"),
  Hr("\\varUpsilon", "\\mathit{\\Upsilon}"),
  Hr("\\varPhi", "\\mathit{\\Phi}"),
  Hr("\\varPsi", "\\mathit{\\Psi}"),
  Hr("\\varOmega", "\\mathit{\\Omega}"),
  Hr("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"),
  Hr(
    "\\colon",
    "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax",
  ),
  Hr("\\boxed", "\\fbox{$\\displaystyle{#1}$}"),
  Hr("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"),
  Hr("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"),
  Hr("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;"),
  Hr("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}"),
  Hr("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var Ho = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx",
  },
  Vo = new Set(["bin", "rel"]);
Hr("\\dots", function (e) {
  var t = "\\dotso",
    n = e.expandAfterFuture().text;
  return (
    n in Ho
      ? (t = Ho[n])
      : ("\\not" === n.slice(0, 4) ||
          (n in Ne.math && Vo.has(Ne.math[n].group))) &&
        (t = "\\dotsb"),
    t
  );
});
var qo = {
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  $: !0,
  ";": !0,
  ".": !0,
  ",": !0,
};
Hr("\\dotso", function (e) {
  return e.future().text in qo ? "\\ldots\\," : "\\ldots";
}),
  Hr("\\dotsc", function (e) {
    var t = e.future().text;
    return t in qo && "," !== t ? "\\ldots\\," : "\\ldots";
  }),
  Hr("\\cdots", function (e) {
    return e.future().text in qo ? "\\@cdots\\," : "\\@cdots";
  }),
  Hr("\\dotsb", "\\cdots"),
  Hr("\\dotsm", "\\cdots"),
  Hr("\\dotsi", "\\!\\cdots"),
  Hr("\\dotsx", "\\ldots\\,"),
  Hr("\\DOTSI", "\\relax"),
  Hr("\\DOTSB", "\\relax"),
  Hr("\\DOTSX", "\\relax"),
  Hr("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),
  Hr("\\,", "\\tmspace+{3mu}{.1667em}"),
  Hr("\\thinspace", "\\,"),
  Hr("\\>", "\\mskip{4mu}"),
  Hr("\\:", "\\tmspace+{4mu}{.2222em}"),
  Hr("\\medspace", "\\:"),
  Hr("\\;", "\\tmspace+{5mu}{.2777em}"),
  Hr("\\thickspace", "\\;"),
  Hr("\\!", "\\tmspace-{3mu}{.1667em}"),
  Hr("\\negthinspace", "\\!"),
  Hr("\\negmedspace", "\\tmspace-{4mu}{.2222em}"),
  Hr("\\negthickspace", "\\tmspace-{5mu}{.277em}"),
  Hr("\\enspace", "\\kern.5em "),
  Hr("\\enskip", "\\hskip.5em\\relax"),
  Hr("\\quad", "\\hskip1em\\relax"),
  Hr("\\qquad", "\\hskip2em\\relax"),
  Hr("\\tag", "\\@ifstar\\tag@literal\\tag@paren"),
  Hr("\\tag@paren", "\\tag@literal{({#1})}"),
  Hr("\\tag@literal", (e) => {
    if (e.macros.get("\\df@tag")) throw new L("Multiple \\tag");
    return "\\gdef\\df@tag{\\text{#1}}";
  }),
  Hr(
    "\\bmod",
    "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}",
  ),
  Hr(
    "\\pod",
    "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)",
  ),
  Hr("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"),
  Hr(
    "\\mod",
    "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1",
  ),
  Hr("\\newline", "\\\\\\relax"),
  Hr(
    "\\TeX",
    "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}",
  );
var Go = he(
  Ae["Main-Regular"]["T".charCodeAt(0)][1] -
    0.7 * Ae["Main-Regular"]["A".charCodeAt(0)][1],
);
Hr(
  "\\LaTeX",
  "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" +
    Go +
    "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}",
),
  Hr(
    "\\KaTeX",
    "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" +
      Go +
      "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}",
  ),
  Hr("\\hspace", "\\@ifstar\\@hspacer\\@hspace"),
  Hr("\\@hspace", "\\hskip #1\\relax"),
  Hr("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"),
  Hr("\\ordinarycolon", ":"),
  Hr("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"),
  Hr(
    "\\dblcolon",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}',
  ),
  Hr(
    "\\coloneqq",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}',
  ),
  Hr(
    "\\Coloneqq",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}',
  ),
  Hr(
    "\\coloneq",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}',
  ),
  Hr(
    "\\Coloneq",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}',
  ),
  Hr(
    "\\eqqcolon",
    '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}',
  ),
  Hr(
    "\\Eqqcolon",
    '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}',
  ),
  Hr(
    "\\eqcolon",
    '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}',
  ),
  Hr(
    "\\Eqcolon",
    '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}',
  ),
  Hr(
    "\\colonapprox",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}',
  ),
  Hr(
    "\\Colonapprox",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}',
  ),
  Hr(
    "\\colonsim",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}',
  ),
  Hr(
    "\\Colonsim",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}',
  ),
  Hr("∷", "\\dblcolon"),
  Hr("∹", "\\eqcolon"),
  Hr("≔", "\\coloneqq"),
  Hr("≕", "\\eqqcolon"),
  Hr("⩴", "\\Coloneqq"),
  Hr("\\ratio", "\\vcentcolon"),
  Hr("\\coloncolon", "\\dblcolon"),
  Hr("\\colonequals", "\\coloneqq"),
  Hr("\\coloncolonequals", "\\Coloneqq"),
  Hr("\\equalscolon", "\\eqqcolon"),
  Hr("\\equalscoloncolon", "\\Eqqcolon"),
  Hr("\\colonminus", "\\coloneq"),
  Hr("\\coloncolonminus", "\\Coloneq"),
  Hr("\\minuscolon", "\\eqcolon"),
  Hr("\\minuscoloncolon", "\\Eqcolon"),
  Hr("\\coloncolonapprox", "\\Colonapprox"),
  Hr("\\coloncolonsim", "\\Colonsim"),
  Hr("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),
  Hr("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"),
  Hr(
    "\\approxcolon",
    "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}",
  ),
  Hr(
    "\\approxcoloncolon",
    "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}",
  ),
  Hr("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),
  Hr("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"),
  Hr("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"),
  Hr("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"),
  Hr("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"),
  Hr("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"),
  Hr("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"),
  Hr("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"),
  Hr("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"),
  Hr("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"),
  Hr("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"),
  Hr("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"),
  Hr("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"),
  Hr("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"),
  Hr("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"),
  Hr("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"),
  Hr("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"),
  Hr("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"),
  Hr("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"),
  Hr("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"),
  Hr("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"),
  Hr("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"),
  Hr("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"),
  Hr("\\imath", "\\html@mathml{\\@imath}{ı}"),
  Hr("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"),
  Hr(
    "\\llbracket",
    "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}",
  ),
  Hr(
    "\\rrbracket",
    "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}",
  ),
  Hr("⟦", "\\llbracket"),
  Hr("⟧", "\\rrbracket"),
  Hr(
    "\\lBrace",
    "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}",
  ),
  Hr(
    "\\rBrace",
    "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}",
  ),
  Hr("⦃", "\\lBrace"),
  Hr("⦄", "\\rBrace"),
  Hr(
    "\\minuso",
    "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}",
  ),
  Hr("⦵", "\\minuso"),
  Hr("\\darr", "\\downarrow"),
  Hr("\\dArr", "\\Downarrow"),
  Hr("\\Darr", "\\Downarrow"),
  Hr("\\lang", "\\langle"),
  Hr("\\rang", "\\rangle"),
  Hr("\\uarr", "\\uparrow"),
  Hr("\\uArr", "\\Uparrow"),
  Hr("\\Uarr", "\\Uparrow"),
  Hr("\\N", "\\mathbb{N}"),
  Hr("\\R", "\\mathbb{R}"),
  Hr("\\Z", "\\mathbb{Z}"),
  Hr("\\alef", "\\aleph"),
  Hr("\\alefsym", "\\aleph"),
  Hr("\\Alpha", "\\mathrm{A}"),
  Hr("\\Beta", "\\mathrm{B}"),
  Hr("\\bull", "\\bullet"),
  Hr("\\Chi", "\\mathrm{X}"),
  Hr("\\clubs", "\\clubsuit"),
  Hr("\\cnums", "\\mathbb{C}"),
  Hr("\\Complex", "\\mathbb{C}"),
  Hr("\\Dagger", "\\ddagger"),
  Hr("\\diamonds", "\\diamondsuit"),
  Hr("\\empty", "\\emptyset"),
  Hr("\\Epsilon", "\\mathrm{E}"),
  Hr("\\Eta", "\\mathrm{H}"),
  Hr("\\exist", "\\exists"),
  Hr("\\harr", "\\leftrightarrow"),
  Hr("\\hArr", "\\Leftrightarrow"),
  Hr("\\Harr", "\\Leftrightarrow"),
  Hr("\\hearts", "\\heartsuit"),
  Hr("\\image", "\\Im"),
  Hr("\\infin", "\\infty"),
  Hr("\\Iota", "\\mathrm{I}"),
  Hr("\\isin", "\\in"),
  Hr("\\Kappa", "\\mathrm{K}"),
  Hr("\\larr", "\\leftarrow"),
  Hr("\\lArr", "\\Leftarrow"),
  Hr("\\Larr", "\\Leftarrow"),
  Hr("\\lrarr", "\\leftrightarrow"),
  Hr("\\lrArr", "\\Leftrightarrow"),
  Hr("\\Lrarr", "\\Leftrightarrow"),
  Hr("\\Mu", "\\mathrm{M}"),
  Hr("\\natnums", "\\mathbb{N}"),
  Hr("\\Nu", "\\mathrm{N}"),
  Hr("\\Omicron", "\\mathrm{O}"),
  Hr("\\plusmn", "\\pm"),
  Hr("\\rarr", "\\rightarrow"),
  Hr("\\rArr", "\\Rightarrow"),
  Hr("\\Rarr", "\\Rightarrow"),
  Hr("\\real", "\\Re"),
  Hr("\\reals", "\\mathbb{R}"),
  Hr("\\Reals", "\\mathbb{R}"),
  Hr("\\Rho", "\\mathrm{P}"),
  Hr("\\sdot", "\\cdot"),
  Hr("\\sect", "\\S"),
  Hr("\\spades", "\\spadesuit"),
  Hr("\\sub", "\\subset"),
  Hr("\\sube", "\\subseteq"),
  Hr("\\supe", "\\supseteq"),
  Hr("\\Tau", "\\mathrm{T}"),
  Hr("\\thetasym", "\\vartheta"),
  Hr("\\weierp", "\\wp"),
  Hr("\\Zeta", "\\mathrm{Z}"),
  Hr("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"),
  Hr("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"),
  Hr("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"),
  Hr("\\bra", "\\mathinner{\\langle{#1}|}"),
  Hr("\\ket", "\\mathinner{|{#1}\\rangle}"),
  Hr("\\braket", "\\mathinner{\\langle{#1}\\rangle}"),
  Hr("\\Bra", "\\left\\langle#1\\right|"),
  Hr("\\Ket", "\\left|#1\\right\\rangle");
var Wo = (e) => (t) => {
  var n = t.consumeArg().tokens,
    r = t.consumeArg().tokens,
    o = t.consumeArg().tokens,
    i = t.consumeArg().tokens,
    a = t.macros.get("|"),
    s = t.macros.get("\\|");
  t.macros.beginGroup();
  var l = (t) => (n) => {
    e && (n.macros.set("|", a), o.length && n.macros.set("\\|", s));
    var i = t;
    return (
      !t && o.length && "|" === n.future().text && (n.popToken(), (i = !0)),
      { tokens: i ? o : r, numArgs: 0 }
    );
  };
  t.macros.set("|", l(!1)), o.length && t.macros.set("\\|", l(!0));
  var c = t.consumeArg().tokens,
    u = t.expandTokens([...i, ...c, ...n]);
  return t.macros.endGroup(), { tokens: u.reverse(), numArgs: 0 };
};
Hr("\\bra@ket", Wo(!1)),
  Hr("\\bra@set", Wo(!0)),
  Hr(
    "\\Braket",
    "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}",
  ),
  Hr(
    "\\Set",
    "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}",
  ),
  Hr("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"),
  Hr("\\angln", "{\\angl n}"),
  Hr("\\blue", "\\textcolor{##6495ed}{#1}"),
  Hr("\\orange", "\\textcolor{##ffa500}{#1}"),
  Hr("\\pink", "\\textcolor{##ff00af}{#1}"),
  Hr("\\red", "\\textcolor{##df0030}{#1}"),
  Hr("\\green", "\\textcolor{##28ae7b}{#1}"),
  Hr("\\gray", "\\textcolor{gray}{#1}"),
  Hr("\\purple", "\\textcolor{##9d38bd}{#1}"),
  Hr("\\blueA", "\\textcolor{##ccfaff}{#1}"),
  Hr("\\blueB", "\\textcolor{##80f6ff}{#1}"),
  Hr("\\blueC", "\\textcolor{##63d9ea}{#1}"),
  Hr("\\blueD", "\\textcolor{##11accd}{#1}"),
  Hr("\\blueE", "\\textcolor{##0c7f99}{#1}"),
  Hr("\\tealA", "\\textcolor{##94fff5}{#1}"),
  Hr("\\tealB", "\\textcolor{##26edd5}{#1}"),
  Hr("\\tealC", "\\textcolor{##01d1c1}{#1}"),
  Hr("\\tealD", "\\textcolor{##01a995}{#1}"),
  Hr("\\tealE", "\\textcolor{##208170}{#1}"),
  Hr("\\greenA", "\\textcolor{##b6ffb0}{#1}"),
  Hr("\\greenB", "\\textcolor{##8af281}{#1}"),
  Hr("\\greenC", "\\textcolor{##74cf70}{#1}"),
  Hr("\\greenD", "\\textcolor{##1fab54}{#1}"),
  Hr("\\greenE", "\\textcolor{##0d923f}{#1}"),
  Hr("\\goldA", "\\textcolor{##ffd0a9}{#1}"),
  Hr("\\goldB", "\\textcolor{##ffbb71}{#1}"),
  Hr("\\goldC", "\\textcolor{##ff9c39}{#1}"),
  Hr("\\goldD", "\\textcolor{##e07d10}{#1}"),
  Hr("\\goldE", "\\textcolor{##a75a05}{#1}"),
  Hr("\\redA", "\\textcolor{##fca9a9}{#1}"),
  Hr("\\redB", "\\textcolor{##ff8482}{#1}"),
  Hr("\\redC", "\\textcolor{##f9685d}{#1}"),
  Hr("\\redD", "\\textcolor{##e84d39}{#1}"),
  Hr("\\redE", "\\textcolor{##bc2612}{#1}"),
  Hr("\\maroonA", "\\textcolor{##ffbde0}{#1}"),
  Hr("\\maroonB", "\\textcolor{##ff92c6}{#1}"),
  Hr("\\maroonC", "\\textcolor{##ed5fa6}{#1}"),
  Hr("\\maroonD", "\\textcolor{##ca337c}{#1}"),
  Hr("\\maroonE", "\\textcolor{##9e034e}{#1}"),
  Hr("\\purpleA", "\\textcolor{##ddd7ff}{#1}"),
  Hr("\\purpleB", "\\textcolor{##c6b9fc}{#1}"),
  Hr("\\purpleC", "\\textcolor{##aa87ff}{#1}"),
  Hr("\\purpleD", "\\textcolor{##7854ab}{#1}"),
  Hr("\\purpleE", "\\textcolor{##543b78}{#1}"),
  Hr("\\mintA", "\\textcolor{##f5f9e8}{#1}"),
  Hr("\\mintB", "\\textcolor{##edf2df}{#1}"),
  Hr("\\mintC", "\\textcolor{##e0e5cc}{#1}"),
  Hr("\\grayA", "\\textcolor{##f6f7f7}{#1}"),
  Hr("\\grayB", "\\textcolor{##f0f1f2}{#1}"),
  Hr("\\grayC", "\\textcolor{##e3e5e6}{#1}"),
  Hr("\\grayD", "\\textcolor{##d6d8da}{#1}"),
  Hr("\\grayE", "\\textcolor{##babec2}{#1}"),
  Hr("\\grayF", "\\textcolor{##888d93}{#1}"),
  Hr("\\grayG", "\\textcolor{##626569}{#1}"),
  Hr("\\grayH", "\\textcolor{##3b3e40}{#1}"),
  Hr("\\grayI", "\\textcolor{##21242c}{#1}"),
  Hr("\\kaBlue", "\\textcolor{##314453}{#1}"),
  Hr("\\kaGreen", "\\textcolor{##71B307}{#1}");
var $o = { "^": !0, _: !0, "\\limits": !0, "\\nolimits": !0 };
class Yo {
  constructor(e, t, n) {
    (this.settings = void 0),
      (this.expansionCount = void 0),
      (this.lexer = void 0),
      (this.macros = void 0),
      (this.stack = void 0),
      (this.mode = void 0),
      (this.settings = t),
      (this.expansionCount = 0),
      this.feed(e),
      (this.macros = new Fo(Uo, t.macros)),
      (this.mode = n),
      (this.stack = []);
  }
  feed(e) {
    this.lexer = new Lo(e, this.settings);
  }
  switchMode(e) {
    this.mode = e;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return (
      0 === this.stack.length && this.pushToken(this.lexer.lex()),
      this.stack[this.stack.length - 1]
    );
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(e) {
    this.stack.push(e);
  }
  pushTokens(e) {
    this.stack.push(...e);
  }
  scanArgument(e) {
    var t, n, r;
    if (e) {
      if ((this.consumeSpaces(), "[" !== this.future().text)) return null;
      (t = this.popToken()), ({ tokens: r, end: n } = this.consumeArg(["]"]));
    } else ({ tokens: r, start: t, end: n } = this.consumeArg());
    return (
      this.pushToken(new qr("EOF", n.loc)),
      this.pushTokens(r),
      new qr("", Vr.range(t, n))
    );
  }
  consumeSpaces() {
    for (; " " === this.future().text; ) this.stack.pop();
  }
  consumeArg(e) {
    var t = [],
      n = e && e.length > 0;
    n || this.consumeSpaces();
    var r,
      o = this.future(),
      i = 0,
      a = 0;
    do {
      if (((r = this.popToken()), t.push(r), "{" === r.text)) ++i;
      else if ("}" === r.text) {
        if (-1 === --i) throw new L("Extra }", r);
      } else if ("EOF" === r.text)
        throw new L(
          "Unexpected end of input in a macro argument, expected '" +
            (e && n ? e[a] : "}") +
            "'",
          r,
        );
      if (e && n)
        if ((0 === i || (1 === i && "{" === e[a])) && r.text === e[a]) {
          if (++a === e.length) {
            t.splice(-a, a);
            break;
          }
        } else a = 0;
    } while (0 !== i || n);
    return (
      "{" === o.text && "}" === t[t.length - 1].text && (t.pop(), t.shift()),
      t.reverse(),
      { tokens: t, start: o, end: r }
    );
  }
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new L(
          "The length of delimiters doesn't match the number of args!",
        );
      for (var n = t[0], r = 0; r < n.length; r++) {
        var o = this.popToken();
        if (n[r] !== o.text)
          throw new L("Use of the macro doesn't match its definition", o);
      }
    }
    for (var i = [], a = 0; a < e; a++)
      i.push(this.consumeArg(t && t[a + 1]).tokens);
    return i;
  }
  countExpansion(e) {
    if (
      ((this.expansionCount += e),
      this.expansionCount > this.settings.maxExpand)
    )
      throw new L(
        "Too many expansions: infinite loop or need to increase maxExpand setting",
      );
  }
  expandOnce(e) {
    var t = this.popToken(),
      n = t.text,
      r = t.noexpand ? null : this._getExpansion(n);
    if (null == r || (e && r.unexpandable)) {
      if (e && null == r && "\\" === n[0] && !this.isDefined(n))
        throw new L("Undefined control sequence: " + n);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var o = r.tokens,
      i = this.consumeArgs(r.numArgs, r.delimiters);
    if (r.numArgs)
      for (var a = (o = o.slice()).length - 1; a >= 0; --a) {
        var s = o[a];
        if ("#" === s.text) {
          if (0 === a)
            throw new L("Incomplete placeholder at end of macro body", s);
          if ("#" === (s = o[--a]).text) o.splice(a + 1, 1);
          else {
            if (!/^[1-9]$/.test(s.text))
              throw new L("Not a valid argument number", s);
            o.splice(a, 2, ...i[+s.text - 1]);
          }
        }
      }
    return this.pushTokens(o), o.length;
  }
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  expandNextToken() {
    for (;;)
      if (!1 === this.expandOnce()) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
  }
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new qr(e)]) : void 0;
  }
  expandTokens(e) {
    var t = [],
      n = this.stack.length;
    for (this.pushTokens(e); this.stack.length > n; )
      if (!1 === this.expandOnce(!0)) {
        var r = this.stack.pop();
        r.treatAsRelax && ((r.noexpand = !1), (r.treatAsRelax = !1)), t.push(r);
      }
    return this.countExpansion(t.length), t;
  }
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t ? t.map((e) => e.text).join("") : t;
  }
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (null == t) return t;
    if (1 === e.length) {
      var n = this.lexer.catcodes[e];
      if (null != n && 13 !== n) return;
    }
    var r = "function" == typeof t ? t(this) : t;
    if ("string" == typeof r) {
      var o = 0;
      if (r.includes("#"))
        for (var i = r.replace(/##/g, ""); i.includes("#" + (o + 1)); ) ++o;
      for (
        var a = new Lo(r, this.settings), s = [], l = a.lex();
        "EOF" !== l.text;

      )
        s.push(l), (l = a.lex());
      return s.reverse(), { tokens: s, numArgs: o };
    }
    return r;
  }
  isDefined(e) {
    return (
      this.macros.has(e) ||
      Ro.hasOwnProperty(e) ||
      Ne.math.hasOwnProperty(e) ||
      Ne.text.hasOwnProperty(e) ||
      $o.hasOwnProperty(e)
    );
  }
  isExpandable(e) {
    var t = this.macros.get(e);
    return null != t
      ? "string" == typeof t || "function" == typeof t || !t.unexpandable
      : Ro.hasOwnProperty(e) && !Ro[e].primitive;
  }
}
var Ko = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
  Zo = Object.freeze({
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    ₐ: "a",
    ₑ: "e",
    ₕ: "h",
    ᵢ: "i",
    ⱼ: "j",
    ₖ: "k",
    ₗ: "l",
    ₘ: "m",
    ₙ: "n",
    ₒ: "o",
    ₚ: "p",
    ᵣ: "r",
    ₛ: "s",
    ₜ: "t",
    ᵤ: "u",
    ᵥ: "v",
    ₓ: "x",
    ᵦ: "β",
    ᵧ: "γ",
    ᵨ: "ρ",
    ᵩ: "ϕ",
    ᵪ: "χ",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    ᴬ: "A",
    ᴮ: "B",
    ᴰ: "D",
    ᴱ: "E",
    ᴳ: "G",
    ᴴ: "H",
    ᴵ: "I",
    ᴶ: "J",
    ᴷ: "K",
    ᴸ: "L",
    ᴹ: "M",
    ᴺ: "N",
    ᴼ: "O",
    ᴾ: "P",
    ᴿ: "R",
    ᵀ: "T",
    ᵁ: "U",
    ⱽ: "V",
    ᵂ: "W",
    ᵃ: "a",
    ᵇ: "b",
    ᶜ: "c",
    ᵈ: "d",
    ᵉ: "e",
    ᶠ: "f",
    ᵍ: "g",
    ʰ: "h",
    ⁱ: "i",
    ʲ: "j",
    ᵏ: "k",
    ˡ: "l",
    ᵐ: "m",
    ⁿ: "n",
    ᵒ: "o",
    ᵖ: "p",
    ʳ: "r",
    ˢ: "s",
    ᵗ: "t",
    ᵘ: "u",
    ᵛ: "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    ᶻ: "z",
    ᵝ: "β",
    ᵞ: "γ",
    ᵟ: "δ",
    ᵠ: "ϕ",
    ᵡ: "χ",
    ᶿ: "θ",
  }),
  Qo = {
    "́": { text: "\\'", math: "\\acute" },
    "̀": { text: "\\`", math: "\\grave" },
    "̈": { text: '\\"', math: "\\ddot" },
    "̃": { text: "\\~", math: "\\tilde" },
    "̄": { text: "\\=", math: "\\bar" },
    "̆": { text: "\\u", math: "\\breve" },
    "̌": { text: "\\v", math: "\\check" },
    "̂": { text: "\\^", math: "\\hat" },
    "̇": { text: "\\.", math: "\\dot" },
    "̊": { text: "\\r", math: "\\mathring" },
    "̋": { text: "\\H" },
    "̧": { text: "\\c" },
  },
  Jo = {
    á: "á",
    à: "à",
    ä: "ä",
    ǟ: "ǟ",
    ã: "ã",
    ā: "ā",
    ă: "ă",
    ắ: "ắ",
    ằ: "ằ",
    ẵ: "ẵ",
    ǎ: "ǎ",
    â: "â",
    ấ: "ấ",
    ầ: "ầ",
    ẫ: "ẫ",
    ȧ: "ȧ",
    ǡ: "ǡ",
    å: "å",
    ǻ: "ǻ",
    ḃ: "ḃ",
    ć: "ć",
    ḉ: "ḉ",
    č: "č",
    ĉ: "ĉ",
    ċ: "ċ",
    ç: "ç",
    ď: "ď",
    ḋ: "ḋ",
    ḑ: "ḑ",
    é: "é",
    è: "è",
    ë: "ë",
    ẽ: "ẽ",
    ē: "ē",
    ḗ: "ḗ",
    ḕ: "ḕ",
    ĕ: "ĕ",
    ḝ: "ḝ",
    ě: "ě",
    ê: "ê",
    ế: "ế",
    ề: "ề",
    ễ: "ễ",
    ė: "ė",
    ȩ: "ȩ",
    ḟ: "ḟ",
    ǵ: "ǵ",
    ḡ: "ḡ",
    ğ: "ğ",
    ǧ: "ǧ",
    ĝ: "ĝ",
    ġ: "ġ",
    ģ: "ģ",
    ḧ: "ḧ",
    ȟ: "ȟ",
    ĥ: "ĥ",
    ḣ: "ḣ",
    ḩ: "ḩ",
    í: "í",
    ì: "ì",
    ï: "ï",
    ḯ: "ḯ",
    ĩ: "ĩ",
    ī: "ī",
    ĭ: "ĭ",
    ǐ: "ǐ",
    î: "î",
    ǰ: "ǰ",
    ĵ: "ĵ",
    ḱ: "ḱ",
    ǩ: "ǩ",
    ķ: "ķ",
    ĺ: "ĺ",
    ľ: "ľ",
    ļ: "ļ",
    ḿ: "ḿ",
    ṁ: "ṁ",
    ń: "ń",
    ǹ: "ǹ",
    ñ: "ñ",
    ň: "ň",
    ṅ: "ṅ",
    ņ: "ņ",
    ó: "ó",
    ò: "ò",
    ö: "ö",
    ȫ: "ȫ",
    õ: "õ",
    ṍ: "ṍ",
    ṏ: "ṏ",
    ȭ: "ȭ",
    ō: "ō",
    ṓ: "ṓ",
    ṑ: "ṑ",
    ŏ: "ŏ",
    ǒ: "ǒ",
    ô: "ô",
    ố: "ố",
    ồ: "ồ",
    ỗ: "ỗ",
    ȯ: "ȯ",
    ȱ: "ȱ",
    ő: "ő",
    ṕ: "ṕ",
    ṗ: "ṗ",
    ŕ: "ŕ",
    ř: "ř",
    ṙ: "ṙ",
    ŗ: "ŗ",
    ś: "ś",
    ṥ: "ṥ",
    š: "š",
    ṧ: "ṧ",
    ŝ: "ŝ",
    ṡ: "ṡ",
    ş: "ş",
    ẗ: "ẗ",
    ť: "ť",
    ṫ: "ṫ",
    ţ: "ţ",
    ú: "ú",
    ù: "ù",
    ü: "ü",
    ǘ: "ǘ",
    ǜ: "ǜ",
    ǖ: "ǖ",
    ǚ: "ǚ",
    ũ: "ũ",
    ṹ: "ṹ",
    ū: "ū",
    ṻ: "ṻ",
    ŭ: "ŭ",
    ǔ: "ǔ",
    û: "û",
    ů: "ů",
    ű: "ű",
    ṽ: "ṽ",
    ẃ: "ẃ",
    ẁ: "ẁ",
    ẅ: "ẅ",
    ŵ: "ŵ",
    ẇ: "ẇ",
    ẘ: "ẘ",
    ẍ: "ẍ",
    ẋ: "ẋ",
    ý: "ý",
    ỳ: "ỳ",
    ÿ: "ÿ",
    ỹ: "ỹ",
    ȳ: "ȳ",
    ŷ: "ŷ",
    ẏ: "ẏ",
    ẙ: "ẙ",
    ź: "ź",
    ž: "ž",
    ẑ: "ẑ",
    ż: "ż",
    Á: "Á",
    À: "À",
    Ä: "Ä",
    Ǟ: "Ǟ",
    Ã: "Ã",
    Ā: "Ā",
    Ă: "Ă",
    Ắ: "Ắ",
    Ằ: "Ằ",
    Ẵ: "Ẵ",
    Ǎ: "Ǎ",
    Â: "Â",
    Ấ: "Ấ",
    Ầ: "Ầ",
    Ẫ: "Ẫ",
    Ȧ: "Ȧ",
    Ǡ: "Ǡ",
    Å: "Å",
    Ǻ: "Ǻ",
    Ḃ: "Ḃ",
    Ć: "Ć",
    Ḉ: "Ḉ",
    Č: "Č",
    Ĉ: "Ĉ",
    Ċ: "Ċ",
    Ç: "Ç",
    Ď: "Ď",
    Ḋ: "Ḋ",
    Ḑ: "Ḑ",
    É: "É",
    È: "È",
    Ë: "Ë",
    Ẽ: "Ẽ",
    Ē: "Ē",
    Ḗ: "Ḗ",
    Ḕ: "Ḕ",
    Ĕ: "Ĕ",
    Ḝ: "Ḝ",
    Ě: "Ě",
    Ê: "Ê",
    Ế: "Ế",
    Ề: "Ề",
    Ễ: "Ễ",
    Ė: "Ė",
    Ȩ: "Ȩ",
    Ḟ: "Ḟ",
    Ǵ: "Ǵ",
    Ḡ: "Ḡ",
    Ğ: "Ğ",
    Ǧ: "Ǧ",
    Ĝ: "Ĝ",
    Ġ: "Ġ",
    Ģ: "Ģ",
    Ḧ: "Ḧ",
    Ȟ: "Ȟ",
    Ĥ: "Ĥ",
    Ḣ: "Ḣ",
    Ḩ: "Ḩ",
    Í: "Í",
    Ì: "Ì",
    Ï: "Ï",
    Ḯ: "Ḯ",
    Ĩ: "Ĩ",
    Ī: "Ī",
    Ĭ: "Ĭ",
    Ǐ: "Ǐ",
    Î: "Î",
    İ: "İ",
    Ĵ: "Ĵ",
    Ḱ: "Ḱ",
    Ǩ: "Ǩ",
    Ķ: "Ķ",
    Ĺ: "Ĺ",
    Ľ: "Ľ",
    Ļ: "Ļ",
    Ḿ: "Ḿ",
    Ṁ: "Ṁ",
    Ń: "Ń",
    Ǹ: "Ǹ",
    Ñ: "Ñ",
    Ň: "Ň",
    Ṅ: "Ṅ",
    Ņ: "Ņ",
    Ó: "Ó",
    Ò: "Ò",
    Ö: "Ö",
    Ȫ: "Ȫ",
    Õ: "Õ",
    Ṍ: "Ṍ",
    Ṏ: "Ṏ",
    Ȭ: "Ȭ",
    Ō: "Ō",
    Ṓ: "Ṓ",
    Ṑ: "Ṑ",
    Ŏ: "Ŏ",
    Ǒ: "Ǒ",
    Ô: "Ô",
    Ố: "Ố",
    Ồ: "Ồ",
    Ỗ: "Ỗ",
    Ȯ: "Ȯ",
    Ȱ: "Ȱ",
    Ő: "Ő",
    Ṕ: "Ṕ",
    Ṗ: "Ṗ",
    Ŕ: "Ŕ",
    Ř: "Ř",
    Ṙ: "Ṙ",
    Ŗ: "Ŗ",
    Ś: "Ś",
    Ṥ: "Ṥ",
    Š: "Š",
    Ṧ: "Ṧ",
    Ŝ: "Ŝ",
    Ṡ: "Ṡ",
    Ş: "Ş",
    Ť: "Ť",
    Ṫ: "Ṫ",
    Ţ: "Ţ",
    Ú: "Ú",
    Ù: "Ù",
    Ü: "Ü",
    Ǘ: "Ǘ",
    Ǜ: "Ǜ",
    Ǖ: "Ǖ",
    Ǚ: "Ǚ",
    Ũ: "Ũ",
    Ṹ: "Ṹ",
    Ū: "Ū",
    Ṻ: "Ṻ",
    Ŭ: "Ŭ",
    Ǔ: "Ǔ",
    Û: "Û",
    Ů: "Ů",
    Ű: "Ű",
    Ṽ: "Ṽ",
    Ẃ: "Ẃ",
    Ẁ: "Ẁ",
    Ẅ: "Ẅ",
    Ŵ: "Ŵ",
    Ẇ: "Ẇ",
    Ẍ: "Ẍ",
    Ẋ: "Ẋ",
    Ý: "Ý",
    Ỳ: "Ỳ",
    Ÿ: "Ÿ",
    Ỹ: "Ỹ",
    Ȳ: "Ȳ",
    Ŷ: "Ŷ",
    Ẏ: "Ẏ",
    Ź: "Ź",
    Ž: "Ž",
    Ẑ: "Ẑ",
    Ż: "Ż",
    ά: "ά",
    ὰ: "ὰ",
    ᾱ: "ᾱ",
    ᾰ: "ᾰ",
    έ: "έ",
    ὲ: "ὲ",
    ή: "ή",
    ὴ: "ὴ",
    ί: "ί",
    ὶ: "ὶ",
    ϊ: "ϊ",
    ΐ: "ΐ",
    ῒ: "ῒ",
    ῑ: "ῑ",
    ῐ: "ῐ",
    ό: "ό",
    ὸ: "ὸ",
    ύ: "ύ",
    ὺ: "ὺ",
    ϋ: "ϋ",
    ΰ: "ΰ",
    ῢ: "ῢ",
    ῡ: "ῡ",
    ῠ: "ῠ",
    ώ: "ώ",
    ὼ: "ὼ",
    Ύ: "Ύ",
    Ὺ: "Ὺ",
    Ϋ: "Ϋ",
    Ῡ: "Ῡ",
    Ῠ: "Ῠ",
    Ώ: "Ώ",
    Ὼ: "Ὼ",
  };
class Xo {
  constructor(e, t) {
    (this.mode = void 0),
      (this.gullet = void 0),
      (this.settings = void 0),
      (this.leftrightDepth = void 0),
      (this.nextToken = void 0),
      (this.mode = "math"),
      (this.gullet = new Yo(e, t, this.mode)),
      (this.settings = t),
      (this.leftrightDepth = 0),
      (this.nextToken = null);
  }
  expect(e, t) {
    if ((void 0 === t && (t = !0), this.fetch().text !== e))
      throw new L(
        "Expected '" + e + "', got '" + this.fetch().text + "'",
        this.fetch(),
      );
    t && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return (
      null == this.nextToken &&
        (this.nextToken = this.gullet.expandNextToken()),
      this.nextToken
    );
  }
  switchMode(e) {
    (this.mode = e), this.gullet.switchMode(e);
  }
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(),
      this.settings.colorIsTextColor &&
        this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return (
        this.expect("EOF"),
        this.settings.globalGroup || this.gullet.endGroup(),
        e
      );
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e) {
    var t = this.nextToken;
    this.consume(),
      this.gullet.pushToken(new qr("}")),
      this.gullet.pushTokens(e);
    var n = this.parseExpression(!1);
    return this.expect("}"), (this.nextToken = t), n;
  }
  parseExpression(e, t) {
    for (var n = []; ; ) {
      "math" === this.mode && this.consumeSpaces();
      var r = this.fetch();
      if (Xo.endOfExpression.has(r.text)) break;
      if (t && r.text === t) break;
      if (e && Ro[r.text] && Ro[r.text].infix) break;
      var o = this.parseAtom(t);
      if (!o) break;
      "internal" !== o.type && n.push(o);
    }
    return (
      "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n)
    );
  }
  handleInfixNodes(e) {
    for (var t, n = -1, r = 0; r < e.length; r++) {
      var o = e[r];
      if ("infix" === o.type) {
        if (-1 !== n) throw new L("only one infix operator per group", o.token);
        (n = r), (t = o.replaceWith);
      }
    }
    if (-1 !== n && t) {
      var i,
        a,
        s = e.slice(0, n),
        l = e.slice(n + 1);
      return (
        (i =
          1 === s.length && "ordgroup" === s[0].type
            ? s[0]
            : { type: "ordgroup", mode: this.mode, body: s }),
        (a =
          1 === l.length && "ordgroup" === l[0].type
            ? l[0]
            : { type: "ordgroup", mode: this.mode, body: l }),
        [
          "\\\\abovefrac" === t
            ? this.callFunction(t, [i, e[n], a], [])
            : this.callFunction(t, [i, a], []),
        ]
      );
    }
    return e;
  }
  handleSupSubscript(e) {
    var t,
      n = this.fetch(),
      r = n.text;
    this.consume(), this.consumeSpaces();
    do {
      var o;
      t = this.parseGroup(e);
    } while ("internal" === (null == (o = t) ? void 0 : o.type));
    if (!t) throw new L("Expected group after '" + r + "'", n);
    return t;
  }
  formatUnsupportedCmd(e) {
    for (var t = [], n = 0; n < e.length; n++)
      t.push({ type: "textord", mode: "text", text: e[n] });
    var r = { type: "text", mode: this.mode, body: t };
    return {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [r],
    };
  }
  parseAtom(e) {
    var t,
      n,
      r = this.parseGroup("atom", e);
    if ("internal" === (null == r ? void 0 : r.type)) return r;
    if ("text" === this.mode) return r;
    for (;;) {
      this.consumeSpaces();
      var o = this.fetch();
      if ("\\limits" === o.text || "\\nolimits" === o.text) {
        if (r && "op" === r.type) {
          var i = "\\limits" === o.text;
          (r.limits = i), (r.alwaysHandleSupSub = !0);
        } else {
          if (!r || "operatorname" !== r.type)
            throw new L("Limit controls must follow a math operator", o);
          r.alwaysHandleSupSub && (r.limits = "\\limits" === o.text);
        }
        this.consume();
      } else if ("^" === o.text) {
        if (t) throw new L("Double superscript", o);
        t = this.handleSupSubscript("superscript");
      } else if ("_" === o.text) {
        if (n) throw new L("Double subscript", o);
        n = this.handleSupSubscript("subscript");
      } else if ("'" === o.text) {
        if (t) throw new L("Double superscript", o);
        var a = { type: "textord", mode: this.mode, text: "\\prime" },
          s = [a];
        for (this.consume(); "'" === this.fetch().text; )
          s.push(a), this.consume();
        "^" === this.fetch().text &&
          s.push(this.handleSupSubscript("superscript")),
          (t = { type: "ordgroup", mode: this.mode, body: s });
      } else {
        if (!Zo[o.text]) break;
        var l = Ko.test(o.text),
          c = [];
        for (c.push(new qr(Zo[o.text])), this.consume(); ; ) {
          var u = this.fetch().text;
          if (!Zo[u]) break;
          if (Ko.test(u) !== l) break;
          c.unshift(new qr(Zo[u])), this.consume();
        }
        var d = this.subparse(c);
        l
          ? (n = { type: "ordgroup", mode: "math", body: d })
          : (t = { type: "ordgroup", mode: "math", body: d });
      }
    }
    return t || n
      ? { type: "supsub", mode: this.mode, base: r, sup: t, sub: n }
      : r;
  }
  parseFunction(e, t) {
    var n = this.fetch(),
      r = n.text,
      o = Ro[r];
    if (!o) return null;
    if ((this.consume(), t && "atom" !== t && !o.allowedInArgument))
      throw new L(
        "Got function '" + r + "' with no arguments" + (t ? " as " + t : ""),
        n,
      );
    if ("text" === this.mode && !o.allowedInText)
      throw new L("Can't use function '" + r + "' in text mode", n);
    if ("math" === this.mode && !1 === o.allowedInMath)
      throw new L("Can't use function '" + r + "' in math mode", n);
    var { args: i, optArgs: a } = this.parseArguments(r, o);
    return this.callFunction(r, i, a, n, e);
  }
  callFunction(e, t, n, r, o) {
    var i = {
        funcName: e,
        parser: this,
        token: r,
        breakOnTokenText: o,
      },
      a = Ro[e];
    if (a && a.handler) return a.handler(i, t, n);
    throw new L("No function handler for " + e);
  }
  parseArguments(e, t) {
    var n = t.numArgs + t.numOptionalArgs;
    if (0 === n) return { args: [], optArgs: [] };
    for (var r = [], o = [], i = 0; i < n; i++) {
      var a = t.argTypes && t.argTypes[i],
        s = i < t.numOptionalArgs;
      (("primitive" in t && t.primitive && null == a) ||
        ("sqrt" === t.type && 1 === i && null == o[0])) &&
        (a = "primitive");
      var l = this.parseGroupOfType("argument to '" + e + "'", a, s);
      if (s) o.push(l);
      else {
        if (null == l)
          throw new L("Null argument, please report this as a bug");
        r.push(l);
      }
    }
    return { args: r, optArgs: o };
  }
  parseGroupOfType(e, t, n) {
    switch (t) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, t);
      case "hbox":
        var r = this.parseArgumentGroup(n, "text");
        return null != r
          ? {
              type: "styling",
              mode: r.mode,
              body: [r],
              style: "text",
              resetFont: !0,
            }
          : null;
      case "raw":
        var o = this.parseStringGroup("raw", n);
        return null != o ? { type: "raw", mode: "text", string: o.text } : null;
      case "primitive":
        if (n) throw new L("A primitive argument cannot be optional");
        var i = this.parseGroup(e);
        if (null == i) throw new L("Expected group as " + e, this.fetch());
        return i;
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new L("Unknown group type as " + e, this.fetch());
    }
  }
  consumeSpaces() {
    for (; " " === this.fetch().text; ) this.consume();
  }
  parseStringGroup(e, t) {
    var n = this.gullet.scanArgument(t);
    if (null == n) return null;
    for (var r, o = ""; "EOF" !== (r = this.fetch()).text; )
      (o += r.text), this.consume();
    return this.consume(), (n.text = o), n;
  }
  parseRegexGroup(e, t) {
    for (
      var n, r = this.fetch(), o = r, i = "";
      "EOF" !== (n = this.fetch()).text && e.test(i + n.text);

    )
      (i += (o = n).text), this.consume();
    if ("" === i) throw new L("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(o, i);
  }
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (null == t) return null;
    var n =
      /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(
        t.text,
      );
    if (!n) throw new L("Invalid color: '" + t.text + "'", t);
    var r = n[0];
    return (
      /^[0-9a-f]{6}$/i.test(r) && (r = "#" + r),
      { type: "color-token", mode: this.mode, color: r }
    );
  }
  parseSizeGroup(e) {
    var t,
      n = !1;
    if (
      (this.gullet.consumeSpaces(),
      !(t =
        e || "{" === this.gullet.future().text
          ? this.parseStringGroup("size", e)
          : this.parseRegexGroup(
              /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
              "size",
            )))
    )
      return null;
    e || 0 !== t.text.length || ((t.text = "0pt"), (n = !0));
    var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!r) throw new L("Invalid size: '" + t.text + "'", t);
    var o = { number: +(r[1] + r[2]), unit: r[3] };
    if (!pe(o)) throw new L("Invalid unit: '" + o.unit + "'", t);
    return { type: "size", mode: this.mode, value: o, isBlank: n };
  }
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13),
      this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (
      (this.gullet.lexer.setCatcode("%", 14),
      this.gullet.lexer.setCatcode("~", 13),
      null == t)
    )
      return null;
    var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return { type: "url", mode: this.mode, url: n };
  }
  parseArgumentGroup(e, t) {
    var n = this.gullet.scanArgument(e);
    if (null == n) return null;
    var r = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var o = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var i = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: o,
    };
    return t && this.switchMode(r), i;
  }
  parseGroup(e, t) {
    var n,
      r = this.fetch(),
      o = r.text;
    if ("{" === o || "\\begingroup" === o) {
      this.consume();
      var i = "{" === o ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var a = this.parseExpression(!1, i),
        s = this.fetch();
      this.expect(i),
        this.gullet.endGroup(),
        (n = {
          type: "ordgroup",
          mode: this.mode,
          loc: Vr.range(r, s),
          body: a,
          semisimple: "\\begingroup" === o || void 0,
        });
    } else if (
      null == (n = this.parseFunction(t, e) || this.parseSymbol()) &&
      "\\" === o[0] &&
      !$o.hasOwnProperty(o)
    ) {
      if (this.settings.throwOnError)
        throw new L("Undefined control sequence: " + o, r);
      (n = this.formatUnsupportedCmd(o)), this.consume();
    }
    return n;
  }
  formLigatures(e) {
    for (var t = e.length - 1, n = 0; n < t; ++n) {
      var r = e[n];
      if ("textord" === r.type) {
        var o = r.text,
          i = e[n + 1];
        if (i && "textord" === i.type) {
          if ("-" === o && "-" === i.text) {
            var a = e[n + 2];
            n + 1 < t && a && "textord" === a.type && "-" === a.text
              ? (e.splice(n, 3, {
                  type: "textord",
                  mode: "text",
                  loc: Vr.range(r, a),
                  text: "---",
                }),
                (t -= 2))
              : (e.splice(n, 2, {
                  type: "textord",
                  mode: "text",
                  loc: Vr.range(r, i),
                  text: "--",
                }),
                (t -= 1));
          }
          ("'" !== o && "`" !== o) ||
            i.text !== o ||
            (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Vr.range(r, i),
              text: o + o,
            }),
            (t -= 1));
        }
      }
    }
  }
  parseSymbol() {
    var e = this.fetch(),
      t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var n = t.slice(5),
        r = "*" === n.charAt(0);
      if ((r && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)))
        throw new L(
          "\\verb assertion failed --\n                    please report what input caused this bug",
        );
      return {
        type: "verb",
        mode: "text",
        body: (n = n.slice(1, -1)),
        star: r,
      };
    }
    Jo.hasOwnProperty(t[0]) &&
      !Ne[this.mode][t[0]] &&
      (this.settings.strict &&
        "math" === this.mode &&
        this.settings.reportNonstrict(
          "unicodeTextInMathMode",
          'Accented Unicode text character "' + t[0] + '" used in math mode',
          e,
        ),
      (t = Jo[t[0]] + t.slice(1)));
    var o,
      i = Do.exec(t);
    if (
      (i &&
        ("i" === (t = t.substring(0, i.index))
          ? (t = "ı")
          : "j" === t && (t = "ȷ")),
      Ne[this.mode][t])
    ) {
      this.settings.strict &&
        "math" === this.mode &&
        "ÐÞþ".includes(t) &&
        this.settings.reportNonstrict(
          "unicodeTextInMathMode",
          'Latin-1/Unicode text character "' + t[0] + '" used in math mode',
          e,
        );
      var a = Ne[this.mode][t].group,
        s = Vr.range(e);
      o =
        a in Un
          ? {
              type: "atom",
              mode: this.mode,
              family: a,
              loc: s,
              text: t,
            }
          : { type: a, mode: this.mode, loc: s, text: t };
    } else {
      if (!(t.charCodeAt(0) >= 128)) return null;
      this.settings.strict &&
        (ae(t.charCodeAt(0))
          ? "math" === this.mode &&
            this.settings.reportNonstrict(
              "unicodeTextInMathMode",
              'Unicode text character "' + t[0] + '" used in math mode',
              e,
            )
          : this.settings.reportNonstrict(
              "unknownSymbol",
              'Unrecognized Unicode character "' +
                t[0] +
                '" (' +
                t.charCodeAt(0) +
                ")",
              e,
            )),
        (o = {
          type: "textord",
          mode: "text",
          loc: Vr.range(e),
          text: t,
        });
    }
    if ((this.consume(), i))
      for (var l = 0; l < i[0].length; l++) {
        var c = i[0][l];
        if (!Qo[c]) throw new L("Unknown accent ' " + c + "'", e);
        var u = Qo[c][this.mode] || Qo[c].text;
        if (!u)
          throw new L(
            "Accent " + c + " unsupported in " + this.mode + " mode",
            e,
          );
        o = {
          type: "accent",
          mode: this.mode,
          loc: Vr.range(e),
          label: u,
          isStretchy: !1,
          isShifty: !0,
          base: o,
        };
      }
    return o;
  }
}
Xo.endOfExpression = new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
"undefined" != typeof document && document.compatMode;
var ei = function (e, t) {
    var n = new Y(t);
    try {
      return (function (e, t, n) {
        var r,
          o = (function (e) {
            return new Pn({
              style: e.displayMode ? re.DISPLAY : re.TEXT,
              maxSize: e.maxSize,
              minRuleThickness: e.minRuleThickness,
            });
          })(n);
        if ("mathml" === n.output) return An(e, t, o, n.displayMode, !0);
        if ("html" === n.output) {
          var i = hn(e, o);
          r = Mt(["katex"], [i]);
        } else {
          var a = An(e, t, o, n.displayMode, !1),
            s = hn(e, o);
          r = Mt(["katex"], [a, s]);
        }
        return (function (e, t) {
          if (t.displayMode) {
            var n = ["katex-display"];
            t.leqno && n.push("leqno"),
              t.fleqn && n.push("fleqn"),
              (e = Mt(n, [e]));
          }
          return e;
        })(r, n);
      })(
        (function (e, t) {
          if (!("string" == typeof e || e instanceof String))
            throw new TypeError("KaTeX can only parse string typed expression");
          var n = new Xo(e, t);
          delete n.gullet.macros.current["\\df@tag"];
          var r = n.parse();
          if (
            (delete n.gullet.macros.current["\\current@color"],
            delete n.gullet.macros.current["\\color"],
            n.gullet.macros.get("\\df@tag"))
          ) {
            if (!t.displayMode)
              throw new L("\\tag works only in display equations");
            r = [
              {
                type: "tag",
                mode: "text",
                body: r,
                tag: n.subparse([new qr("\\df@tag")]),
              },
            ];
          }
          return r;
        })(e, n),
        e,
        n,
      );
    } catch (t) {
      return (function (e, t, n) {
        if (n.throwOnError || !(e instanceof L)) throw e;
        var r = Mt(["katex-error"], [new Te(t)]);
        return (
          r.setAttribute("title", e.toString()),
          r.setAttribute("style", "color:" + n.errorColor),
          r
        );
      })(t, e, n);
    }
  },
  ti = function (e, t) {
    return ei(e, t).toMarkup();
  },
  ni = n(33813 /* vendor/module-33813 */);
const ri = {},
  oi = [];
function ii(e) {
  const t = e || ri;
  return function (e, n) {
    (0, ni.VG)(e, "element", function (e, r) {
      const o = Array.isArray(e.properties.className)
          ? e.properties.className
          : oi,
        i = o.includes("language-math"),
        a = o.includes("math-display"),
        s = o.includes("math-inline");
      let l = a;
      if (!i && !a && !s) return;
      let c = r[r.length - 1],
        u = e;
      if (
        ("code" === e.tagName &&
          i &&
          c &&
          "element" === c.type &&
          "pre" === c.tagName &&
          ((u = c), (c = r[r.length - 2]), (l = !0)),
        !c)
      )
        return;
      const d = (function (e) {
        const t = { whitespace: "pre" } || {},
          n = "children" in e ? e.children : [],
          r = M(e),
          o = j(e, {
            whitespace: t.whitespace || "normal",
            breakBefore: !1,
            breakAfter: !1,
          }),
          i = [];
        ("text" !== e.type && "comment" !== e.type) ||
          i.push(
            ...N(e, {
              whitespace: o,
              breakBefore: !0,
              breakAfter: !0,
            }),
          );
        let a = -1;
        for (; ++a < n.length; )
          i.push(
            ...P(n[a], e, {
              whitespace: o,
              breakBefore: a ? void 0 : r,
              breakAfter: a < n.length - 1 ? C(n[a + 1]) : r,
            }),
          );
        const s = [];
        let l;
        for (a = -1; ++a < i.length; ) {
          const e = i[a];
          "number" == typeof e
            ? void 0 !== l && e > l && (l = e)
            : e &&
              (void 0 !== l && l > -1 && s.push("\n".repeat(l) || " "),
              (l = -1),
              s.push(e));
        }
        return s.join("");
      })(u);
      let p;
      try {
        p = ti(d, { ...t, displayMode: l, throwOnError: !0 });
      } catch (o) {
        const i = o,
          a = i.name.toLowerCase();
        n.message("Could not render math with KaTeX", {
          ancestors: [...r, e],
          cause: i,
          place: e.position,
          ruleId: a,
          source: "rehype-katex",
        });
        try {
          p = ti(d, {
            ...t,
            displayMode: l,
            strict: "ignore",
            throwOnError: !1,
          });
        } catch {
          p = [
            {
              type: "element",
              tagName: "span",
              properties: {
                className: ["katex-error"],
                style: "color:" + (t.errorColor || "#cc0000"),
                title: String(o),
              },
              children: [{ type: "text", value: d }],
            },
          ];
        }
      }
      "string" == typeof p &&
        (p = (function (e, t) {
          return (
            g(
              t?.fragment
                ? (function (e) {
                    const t = document.createElement("template");
                    return (t.innerHTML = e), t.content;
                  })(e)
                : b.parseFromString(e, "text/html"),
              {},
            ) || { type: "root", children: [] }
          );
        })(p, { fragment: !0 }).children);
      const f = c.children.indexOf(u);
      return c.children.splice(f, 1, ...p), ni._Z;
    });
  };
}
