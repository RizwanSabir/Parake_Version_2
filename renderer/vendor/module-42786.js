// vendor/module-42786.js — webpack module 42786
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t),
  n.d(t, {
    MarkdownAsync: () => Le,
    MarkdownHooks: () => Fe,
    default: () => je,
    defaultUrlTransform: () => He,
  });
var r = n(69820 /* vendor/module-69820 */),
  o = n(36469 /* vendor/module-36469 */);
const i = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  a = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  s = {};
function l(e, t) {
  return ((t || s).jsx ? a : i).test(e);
}
const c = /[ \t\n\f\r]/g;
function u(e) {
  return "" === e.replace(c, "");
}
var d = n(19835 /* vendor/module-19835 */),
  p = n(61182 /* vendor/module-61182 */);
const f = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink",
};
var h = n(10010 /* vendor/module-10010 */),
  m = n(51020 /* vendor/module-51020 */),
  g = n(44585 /* vendor/module-44585 */),
  y = n(29993 /* vendor/module-29993 */);
class v extends Error {
  constructor(e, t, n) {
    super(), "string" == typeof t && ((n = t), (t = void 0));
    let r = "",
      o = {},
      i = !1;
    if (
      (t &&
        (o =
          ("line" in t && "column" in t) || ("start" in t && "end" in t)
            ? { place: t }
            : "type" in t
              ? { ancestors: [t], place: t.position }
              : { ...t }),
      "string" == typeof e
        ? (r = e)
        : !o.cause && e && ((i = !0), (r = e.message), (o.cause = e)),
      !o.ruleId && !o.source && "string" == typeof n)
    ) {
      const e = n.indexOf(":");
      -1 === e
        ? (o.ruleId = n)
        : ((o.source = n.slice(0, e)), (o.ruleId = n.slice(e + 1)));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const e = o.ancestors[o.ancestors.length - 1];
      e && (o.place = e.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    (this.ancestors = o.ancestors || void 0),
      (this.cause = o.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = r),
      (this.line = a ? a.line : void 0),
      (this.name = (0, y.L)(o.place) || "1:1"),
      (this.place = o.place || void 0),
      (this.reason = this.message),
      (this.ruleId = o.ruleId || void 0),
      (this.source = o.source || void 0),
      (this.stack =
        i && o.cause && "string" == typeof o.cause.stack ? o.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0);
  }
}
(v.prototype.file = ""),
  (v.prototype.name = ""),
  (v.prototype.reason = ""),
  (v.prototype.message = ""),
  (v.prototype.stack = ""),
  (v.prototype.column = void 0),
  (v.prototype.line = void 0),
  (v.prototype.ancestors = void 0),
  (v.prototype.cause = void 0),
  (v.prototype.fatal = void 0),
  (v.prototype.place = void 0),
  (v.prototype.ruleId = void 0),
  (v.prototype.source = void 0);
const b = {}.hasOwnProperty,
  S = new Map(),
  _ = /[A-Z]/g,
  x = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  w = new Set(["td", "th"]),
  E = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function T(e, t, n) {
  return "element" === t.type
    ? (function (e, t, n) {
        const r = e.schema;
        let o = r;
        "svg" === t.tagName.toLowerCase() &&
          "html" === r.space &&
          ((o = d.JW), (e.schema = o)),
          e.ancestors.push(t);
        const i = O(e, t.tagName, !1),
          a = (function (e, t) {
            const n = {};
            let r, o;
            for (o in t.properties)
              if ("children" !== o && b.call(t.properties, o)) {
                const i = A(e, o, t.properties[o]);
                if (i) {
                  const [o, a] = i;
                  e.tableCellAlignToStyle &&
                  "align" === o &&
                  "string" == typeof a &&
                  w.has(t.tagName)
                    ? (r = a)
                    : (n[o] = a);
                }
              }
            return (
              r &&
                ((n.style || (n.style = {}))[
                  "css" === e.stylePropertyNameCase ? "text-align" : "textAlign"
                ] = r),
              n
            );
          })(e, t);
        let s = I(e, t);
        return (
          x.has(t.tagName) &&
            (s = s.filter(function (e) {
              return (
                "string" != typeof e ||
                !("object" == typeof (t = e)
                  ? "text" === t.type && u(t.value)
                  : u(t))
              );
              var t;
            })),
          k(e, a, i, t),
          C(a, s),
          e.ancestors.pop(),
          (e.schema = r),
          e.create(t, i, a, n)
        );
      })(e, t, n)
    : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
      ? (function (e, t) {
          if (t.data && t.data.estree && e.evaluater) {
            const n = t.data.estree.body[0];
            return (
              (0, r.ok)("ExpressionStatement" === n.type),
              e.evaluater.evaluateExpression(n.expression)
            );
          }
          R(e, t.position);
        })(e, t)
      : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
        ? (function (e, t, n) {
            const o = e.schema;
            let i = o;
            "svg" === t.name &&
              "html" === o.space &&
              ((i = d.JW), (e.schema = i)),
              e.ancestors.push(t);
            const a = null === t.name ? e.Fragment : O(e, t.name, !0),
              s = (function (e, t) {
                const n = {};
                for (const o of t.attributes)
                  if ("mdxJsxExpressionAttribute" === o.type)
                    if (o.data && o.data.estree && e.evaluater) {
                      const t = o.data.estree.body[0];
                      (0, r.ok)("ExpressionStatement" === t.type);
                      const i = t.expression;
                      (0, r.ok)("ObjectExpression" === i.type);
                      const a = i.properties[0];
                      (0, r.ok)("SpreadElement" === a.type),
                        Object.assign(
                          n,
                          e.evaluater.evaluateExpression(a.argument),
                        );
                    } else R(e, t.position);
                  else {
                    const i = o.name;
                    let a;
                    if (o.value && "object" == typeof o.value)
                      if (o.value.data && o.value.data.estree && e.evaluater) {
                        const t = o.value.data.estree.body[0];
                        (0, r.ok)("ExpressionStatement" === t.type),
                          (a = e.evaluater.evaluateExpression(t.expression));
                      } else R(e, t.position);
                    else a = null === o.value || o.value;
                    n[i] = a;
                  }
                return n;
              })(e, t),
              l = I(e, t);
            return (
              k(e, s, a, t),
              C(s, l),
              e.ancestors.pop(),
              (e.schema = o),
              e.create(t, a, s, n)
            );
          })(e, t, n)
        : "mdxjsEsm" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(t.data.estree);
              R(e, t.position);
            })(e, t)
          : "root" === t.type
            ? (function (e, t, n) {
                const r = {};
                return C(r, I(e, t)), e.create(t, e.Fragment, r, n);
              })(e, t, n)
            : "text" === t.type
              ? (function (e, t) {
                  return t.value;
                })(0, t)
              : void 0;
}
function k(e, t, n, r) {
  "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
}
function C(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function I(e, t) {
  const n = [];
  let r = -1;
  const o = e.passKeys ? new Map() : S;
  for (; ++r < t.children.length; ) {
    const i = t.children[r];
    let a;
    if (e.passKeys) {
      const e =
        "element" === i.type
          ? i.tagName
          : "mdxJsxFlowElement" === i.type || "mdxJsxTextElement" === i.type
            ? i.name
            : void 0;
      if (e) {
        const t = o.get(e) || 0;
        (a = e + "-" + t), o.set(e, t + 1);
      }
    }
    const s = T(e, i, a);
    void 0 !== s && n.push(s);
  }
  return n;
}
function A(e, t, n) {
  const r = (0, p.I)(e.schema, t);
  if (!(null == n || ("number" == typeof n && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? (0, o.A)(n) : (0, h.A)(n)),
      "style" === r.property)
    ) {
      let t =
        "object" == typeof n
          ? n
          : (function (e, t) {
              try {
                return m(t, { reactCompat: !0 });
              } catch (t) {
                if (e.ignoreInvalidStyle) return {};
                const n = t,
                  r = new v("Cannot parse `style` attribute", {
                    ancestors: e.ancestors,
                    cause: n,
                    ruleId: "style",
                    source: "hast-util-to-jsx-runtime",
                  });
                throw (
                  ((r.file = e.filePath || void 0),
                  (r.url = E + "#cannot-parse-style-attribute"),
                  r)
                );
              }
            })(e, String(n));
      return (
        "css" === e.stylePropertyNameCase &&
          (t = (function (e) {
            const t = {};
            let n;
            for (n in e) b.call(e, n) && (t[M(n)] = e[n]);
            return t;
          })(t)),
        ["style", t]
      );
    }
    return [
      "react" === e.elementAttributeNameCase && r.space
        ? f[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function O(e, t, n) {
  let o;
  if (n)
    if (t.includes(".")) {
      const e = t.split(".");
      let n,
        i = -1;
      for (; ++i < e.length; ) {
        const t = l(e[i])
          ? { type: "Identifier", name: e[i] }
          : { type: "Literal", value: e[i] };
        n = n
          ? {
              type: "MemberExpression",
              object: n,
              property: t,
              computed: Boolean(i && "Literal" === t.type),
              optional: !1,
            }
          : t;
      }
      (0, r.ok)(n, "always a result"), (o = n);
    } else
      o =
        l(t) && !/^[a-z]/.test(t)
          ? { type: "Identifier", name: t }
          : { type: "Literal", value: t };
  else o = { type: "Literal", value: t };
  if ("Literal" === o.type) {
    const t = o.value;
    return b.call(e.components, t) ? e.components[t] : t;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(o);
  R(e);
}
function R(e, t) {
  const n = new v("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    ((n.file = e.filePath || void 0),
    (n.url = E + "#cannot-handle-mdx-estrees-without-createevaluater"),
    n)
  );
}
function M(e) {
  let t = e.replace(_, P);
  return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
}
function P(e) {
  return "-" + e.toLowerCase();
}
const N = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video",
  ],
};
var D = n(31085 /* vendor/module-31085 */),
  j = n(14041 /* vendor/module-14041 */),
  L = n(26874 /* vendor/module-26874 */);
function F(e) {
  const t = this;
  t.parser = function (n) {
    return (0, L.Y)(n, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  };
}
var U = n(13709 /* vendor/module-13709 */),
  B = n(57949 /* vendor/module-57949 */);
function z(e) {
  const t = [];
  let n = -1,
    r = 0,
    o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let a = "";
    if (
      37 === i &&
      (0, B.lV)(e.charCodeAt(n + 1)) &&
      (0, B.lV)(e.charCodeAt(n + 2))
    )
      o = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) ||
        (a = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const t = e.charCodeAt(n + 1);
      i < 56320 && t > 56319 && t < 57344
        ? ((a = String.fromCharCode(i, t)), (o = 1))
        : (a = "�");
    } else a = String.fromCharCode(i);
    a &&
      (t.push(e.slice(r, n), encodeURIComponent(a)), (r = n + o + 1), (a = "")),
      o && ((n += o), (o = 0));
  }
  return t.join("") + e.slice(r);
}
function H(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function V(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var q = n(74269 /* vendor/module-74269 */);
function G(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    ("collapsed" === n
      ? (r += "[]")
      : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
    "imageReference" === t.type)
  )
    return [{ type: "text", value: "![" + t.alt + r }];
  const o = e.all(t),
    i = o[0];
  i && "text" === i.type
    ? (i.value = "[" + i.value)
    : o.unshift({ type: "text", value: "[" });
  const a = o[o.length - 1];
  return (
    a && "text" === a.type
      ? (a.value += r)
      : o.push({ type: "text", value: r }),
    o
  );
}
function W(e) {
  return e.spread ?? e.children.length > 1;
}
function $(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    o = 0;
  const i = [];
  for (; r; )
    i.push(Y(t.slice(o, r.index), o > 0, !0), r[0]),
      (o = r.index + r[0].length),
      (r = n.exec(t));
  return i.push(Y(t.slice(o), o > 0, !1)), i.join("");
}
function Y(e, t, n) {
  let r = 0,
    o = e.length;
  if (t) {
    let t = e.codePointAt(r);
    for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
  }
  if (n) {
    let t = e.codePointAt(o - 1);
    for (; 9 === t || 32 === t; ) o--, (t = e.codePointAt(o - 1));
  }
  return o > r ? e.slice(r, o) : "";
}
const K = {
  blockquote: function (e, t) {
    const n = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(t), !0),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  break: function (e, t) {
    const n = {
      type: "element",
      tagName: "br",
      properties: {},
      children: [],
    };
    return e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }];
  },
  code: function (e, t) {
    const n = t.value ? t.value + "\n" : "",
      r = {},
      o = t.lang ? t.lang.split(/\s+/) : [];
    o.length > 0 && (r.className = ["language-" + o[0]]);
    let i = {
      type: "element",
      tagName: "code",
      properties: r,
      children: [{ type: "text", value: n }],
    };
    return (
      t.meta && (i.data = { meta: t.meta }),
      e.patch(t, i),
      (i = e.applyData(t, i)),
      (i = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [i],
      }),
      e.patch(t, i),
      i
    );
  },
  delete: function (e, t) {
    const n = {
      type: "element",
      tagName: "del",
      properties: {},
      children: e.all(t),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  emphasis: function (e, t) {
    const n = {
      type: "element",
      tagName: "em",
      properties: {},
      children: e.all(t),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  footnoteReference: function (e, t) {
    const n =
        "string" == typeof e.options.clobberPrefix
          ? e.options.clobberPrefix
          : "user-content-",
      r = String(t.identifier).toUpperCase(),
      o = z(r.toLowerCase()),
      i = e.footnoteOrder.indexOf(r);
    let a,
      s = e.footnoteCounts.get(r);
    void 0 === s
      ? ((s = 0), e.footnoteOrder.push(r), (a = e.footnoteOrder.length))
      : (a = i + 1),
      (s += 1),
      e.footnoteCounts.set(r, s);
    const l = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + n + "fn-" + o,
        id: n + "fnref-" + o + (s > 1 ? "-" + s : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: ["footnote-label"],
      },
      children: [{ type: "text", value: String(a) }],
    };
    e.patch(t, l);
    const c = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [l],
    };
    return e.patch(t, c), e.applyData(t, c);
  },
  heading: function (e, t) {
    const n = {
      type: "element",
      tagName: "h" + t.depth,
      properties: {},
      children: e.all(t),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  html: function (e, t) {
    if (e.options.allowDangerousHtml) {
      const n = { type: "raw", value: t.value };
      return e.patch(t, n), e.applyData(t, n);
    }
  },
  imageReference: function (e, t) {
    const n = String(t.identifier).toUpperCase(),
      r = e.definitionById.get(n);
    if (!r) return G(e, t);
    const o = { src: z(r.url || ""), alt: t.alt };
    null !== r.title && void 0 !== r.title && (o.title = r.title);
    const i = {
      type: "element",
      tagName: "img",
      properties: o,
      children: [],
    };
    return e.patch(t, i), e.applyData(t, i);
  },
  image: function (e, t) {
    const n = { src: z(t.url) };
    null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
      null !== t.title && void 0 !== t.title && (n.title = t.title);
    const r = {
      type: "element",
      tagName: "img",
      properties: n,
      children: [],
    };
    return e.patch(t, r), e.applyData(t, r);
  },
  inlineCode: function (e, t) {
    const n = {
      type: "text",
      value: t.value.replace(/\r?\n|\r/g, " "),
    };
    e.patch(t, n);
    const r = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [n],
    };
    return e.patch(t, r), e.applyData(t, r);
  },
  linkReference: function (e, t) {
    const n = String(t.identifier).toUpperCase(),
      r = e.definitionById.get(n);
    if (!r) return G(e, t);
    const o = { href: z(r.url || "") };
    null !== r.title && void 0 !== r.title && (o.title = r.title);
    const i = {
      type: "element",
      tagName: "a",
      properties: o,
      children: e.all(t),
    };
    return e.patch(t, i), e.applyData(t, i);
  },
  link: function (e, t) {
    const n = { href: z(t.url) };
    null !== t.title && void 0 !== t.title && (n.title = t.title);
    const r = {
      type: "element",
      tagName: "a",
      properties: n,
      children: e.all(t),
    };
    return e.patch(t, r), e.applyData(t, r);
  },
  listItem: function (e, t, n) {
    const r = e.all(t),
      o = n
        ? (function (e) {
            let t = !1;
            if ("list" === e.type) {
              t = e.spread || !1;
              const n = e.children;
              let r = -1;
              for (; !t && ++r < n.length; ) t = W(n[r]);
            }
            return t;
          })(n)
        : W(t),
      i = {},
      a = [];
    if ("boolean" == typeof t.checked) {
      const e = r[0];
      let n;
      e && "element" === e.type && "p" === e.tagName
        ? (n = e)
        : ((n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: [],
          }),
          r.unshift(n)),
        n.children.length > 0 &&
          n.children.unshift({ type: "text", value: " " }),
        n.children.unshift({
          type: "element",
          tagName: "input",
          properties: {
            type: "checkbox",
            checked: t.checked,
            disabled: !0,
          },
          children: [],
        }),
        (i.className = ["task-list-item"]);
    }
    let s = -1;
    for (; ++s < r.length; ) {
      const e = r[s];
      (o || 0 !== s || "element" !== e.type || "p" !== e.tagName) &&
        a.push({ type: "text", value: "\n" }),
        "element" !== e.type || "p" !== e.tagName || o
          ? a.push(e)
          : a.push(...e.children);
    }
    const l = r[r.length - 1];
    l &&
      (o || "element" !== l.type || "p" !== l.tagName) &&
      a.push({ type: "text", value: "\n" });
    const c = {
      type: "element",
      tagName: "li",
      properties: i,
      children: a,
    };
    return e.patch(t, c), e.applyData(t, c);
  },
  list: function (e, t) {
    const n = {},
      r = e.all(t);
    let o = -1;
    for (
      "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
      ++o < r.length;

    ) {
      const e = r[o];
      if (
        "element" === e.type &&
        "li" === e.tagName &&
        e.properties &&
        Array.isArray(e.properties.className) &&
        e.properties.className.includes("task-list-item")
      ) {
        n.className = ["contains-task-list"];
        break;
      }
    }
    const i = {
      type: "element",
      tagName: t.ordered ? "ol" : "ul",
      properties: n,
      children: e.wrap(r, !0),
    };
    return e.patch(t, i), e.applyData(t, i);
  },
  paragraph: function (e, t) {
    const n = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(t),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  root: function (e, t) {
    const n = { type: "root", children: e.wrap(e.all(t)) };
    return e.patch(t, n), e.applyData(t, n);
  },
  strong: function (e, t) {
    const n = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: e.all(t),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  table: function (e, t) {
    const n = e.all(t),
      r = n.shift(),
      o = [];
    if (r) {
      const n = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: e.wrap([r], !0),
      };
      e.patch(t.children[0], n), o.push(n);
    }
    if (n.length > 0) {
      const r = {
          type: "element",
          tagName: "tbody",
          properties: {},
          children: e.wrap(n, !0),
        },
        i = (0, g.PW)(t.children[1]),
        a = (0, g.Y)(t.children[t.children.length - 1]);
      i && a && (r.position = { start: i, end: a }), o.push(r);
    }
    const i = {
      type: "element",
      tagName: "table",
      properties: {},
      children: e.wrap(o, !0),
    };
    return e.patch(t, i), e.applyData(t, i);
  },
  tableCell: function (e, t) {
    const n = {
      type: "element",
      tagName: "td",
      properties: {},
      children: e.all(t),
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  tableRow: function (e, t, n) {
    const r = n ? n.children : void 0,
      o = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
      i = n && "table" === n.type ? n.align : void 0,
      a = i ? i.length : t.children.length;
    let s = -1;
    const l = [];
    for (; ++s < a; ) {
      const n = t.children[s],
        r = {},
        a = i ? i[s] : void 0;
      a && (r.align = a);
      let c = {
        type: "element",
        tagName: o,
        properties: r,
        children: [],
      };
      n && ((c.children = e.all(n)), e.patch(n, c), (c = e.applyData(n, c))),
        l.push(c);
    }
    const c = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: e.wrap(l, !0),
    };
    return e.patch(t, c), e.applyData(t, c);
  },
  text: function (e, t) {
    const n = { type: "text", value: $(String(t.value)) };
    return e.patch(t, n), e.applyData(t, n);
  },
  thematicBreak: function (e, t) {
    const n = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: [],
    };
    return e.patch(t, n), e.applyData(t, n);
  },
  toml: Z,
  yaml: Z,
  definition: Z,
  footnoteDefinition: Z,
};
function Z() {}
const Q = {}.hasOwnProperty,
  J = {};
function X(e, t) {
  e.position && (t.position = (0, g.G1)(e));
}
function ee(e, t) {
  let n = t;
  if (e && e.data) {
    const t = e.data.hName,
      r = e.data.hChildren,
      o = e.data.hProperties;
    "string" == typeof t &&
      ("element" === n.type
        ? (n.tagName = t)
        : (n = {
            type: "element",
            tagName: t,
            properties: {},
            children: "children" in n ? n.children : [n],
          })),
      "element" === n.type && o && Object.assign(n.properties, (0, U.Ay)(o)),
      "children" in n && n.children && null != r && (n.children = r);
  }
  return n;
}
function te(e, t) {
  const n = t.data || {},
    r =
      !("value" in t) || Q.call(n, "hProperties") || Q.call(n, "hChildren")
        ? {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          }
        : { type: "text", value: t.value };
  return e.patch(t, r), e.applyData(t, r);
}
function ne(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
    r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
}
function re(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
  return e.slice(t);
}
function oe(e, t) {
  const n = (function (e, t) {
      const n = t || J,
        r = new Map(),
        o = new Map(),
        i = new Map(),
        a = { ...K, ...n.handlers },
        s = {
          all: function (e) {
            const t = [];
            if ("children" in e) {
              const n = e.children;
              let r = -1;
              for (; ++r < n.length; ) {
                const o = s.one(n[r], e);
                if (o) {
                  if (
                    r &&
                    "break" === n[r - 1].type &&
                    (Array.isArray(o) ||
                      "text" !== o.type ||
                      (o.value = re(o.value)),
                    !Array.isArray(o) && "element" === o.type)
                  ) {
                    const e = o.children[0];
                    e && "text" === e.type && (e.value = re(e.value));
                  }
                  Array.isArray(o) ? t.push(...o) : t.push(o);
                }
              }
            }
            return t;
          },
          applyData: ee,
          definitionById: r,
          footnoteById: o,
          footnoteCounts: i,
          footnoteOrder: [],
          handlers: a,
          one: function (e, t) {
            const n = e.type,
              r = s.handlers[n];
            if (Q.call(s.handlers, n) && r) return r(s, e, t);
            if (s.options.passThrough && s.options.passThrough.includes(n)) {
              if ("children" in e) {
                const { children: t, ...n } = e,
                  r = (0, U.Ay)(n);
                return (r.children = s.all(e)), r;
              }
              return (0, U.Ay)(e);
            }
            return (s.options.unknownHandler || te)(s, e, t);
          },
          options: n,
          patch: X,
          wrap: ne,
        };
      return (
        (0, q.YR)(e, function (e) {
          if ("definition" === e.type || "footnoteDefinition" === e.type) {
            const t = "definition" === e.type ? r : o,
              n = String(e.identifier).toUpperCase();
            t.has(n) || t.set(n, e);
          }
        }),
        s
      );
    })(e, t),
    o = n.one(e, void 0),
    i = (function (e) {
      const t =
          "string" == typeof e.options.clobberPrefix
            ? e.options.clobberPrefix
            : "user-content-",
        n = e.options.footnoteBackContent || H,
        r = e.options.footnoteBackLabel || V,
        o = e.options.footnoteLabel || "Footnotes",
        i = e.options.footnoteLabelTagName || "h2",
        a = e.options.footnoteLabelProperties || {
          className: ["sr-only"],
        },
        s = [];
      let l = -1;
      for (; ++l < e.footnoteOrder.length; ) {
        const o = e.footnoteById.get(e.footnoteOrder[l]);
        if (!o) continue;
        const i = e.all(o),
          a = String(o.identifier).toUpperCase(),
          c = z(a.toLowerCase());
        let u = 0;
        const d = [],
          p = e.footnoteCounts.get(a);
        for (; void 0 !== p && ++u <= p; ) {
          d.length > 0 && d.push({ type: "text", value: " " });
          let e = "string" == typeof n ? n : n(l, u);
          "string" == typeof e && (e = { type: "text", value: e }),
            d.push({
              type: "element",
              tagName: "a",
              properties: {
                href: "#" + t + "fnref-" + c + (u > 1 ? "-" + u : ""),
                dataFootnoteBackref: "",
                ariaLabel: "string" == typeof r ? r : r(l, u),
                className: ["data-footnote-backref"],
              },
              children: Array.isArray(e) ? e : [e],
            });
        }
        const f = i[i.length - 1];
        if (f && "element" === f.type && "p" === f.tagName) {
          const e = f.children[f.children.length - 1];
          e && "text" === e.type
            ? (e.value += " ")
            : f.children.push({ type: "text", value: " " }),
            f.children.push(...d);
        } else i.push(...d);
        const h = {
          type: "element",
          tagName: "li",
          properties: { id: t + "fn-" + c },
          children: e.wrap(i, !0),
        };
        e.patch(o, h), s.push(h);
      }
      if (0 !== s.length)
        return {
          type: "element",
          tagName: "section",
          properties: { dataFootnotes: !0, className: ["footnotes"] },
          children: [
            {
              type: "element",
              tagName: i,
              properties: { ...(0, U.Ay)(a), id: "footnote-label" },
              children: [{ type: "text", value: o }],
            },
            { type: "text", value: "\n" },
            {
              type: "element",
              tagName: "ol",
              properties: {},
              children: e.wrap(s, !0),
            },
            { type: "text", value: "\n" },
          ],
        };
    })(n),
    a = Array.isArray(o)
      ? { type: "root", children: o }
      : o || { type: "root", children: [] };
  return (
    i &&
      ((0, r.ok)("children" in a),
      a.children.push({ type: "text", value: "\n" }, i)),
    a
  );
}
function ie(e, t) {
  return e && "run" in e
    ? async function (n, r) {
        const o = oe(n, { file: r, ...t });
        await e.run(o, r);
      }
    : function (n, r) {
        return oe(n, { file: r, ...(e || t) });
      };
}
function ae(e) {
  if (e) throw e;
}
var se = n(89710 /* vendor/module-89710 */);
function le(e) {
  if ("object" != typeof e || null === e) return !1;
  const t = Object.getPrototypeOf(e);
  return !(
    (null !== t &&
      t !== Object.prototype &&
      null !== Object.getPrototypeOf(t)) ||
    Symbol.toStringTag in e ||
    Symbol.iterator in e
  );
}
const ce = function (e, t) {
    if (void 0 !== t && "string" != typeof t)
      throw new TypeError('"ext" argument must be a string');
    he(e);
    let n,
      r = 0,
      o = -1,
      i = e.length;
    if (void 0 === t || 0 === t.length || t.length > e.length) {
      for (; i--; )
        if (47 === e.codePointAt(i)) {
          if (n) {
            r = i + 1;
            break;
          }
        } else o < 0 && ((n = !0), (o = i + 1));
      return o < 0 ? "" : e.slice(r, o);
    }
    if (t === e) return "";
    let a = -1,
      s = t.length - 1;
    for (; i--; )
      if (47 === e.codePointAt(i)) {
        if (n) {
          r = i + 1;
          break;
        }
      } else
        a < 0 && ((n = !0), (a = i + 1)),
          s > -1 &&
            (e.codePointAt(i) === t.codePointAt(s--)
              ? s < 0 && (o = i)
              : ((s = -1), (o = a)));
    return r === o ? (o = a) : o < 0 && (o = e.length), e.slice(r, o);
  },
  ue = function (e) {
    if ((he(e), 0 === e.length)) return ".";
    let t,
      n = -1,
      r = e.length;
    for (; --r; )
      if (47 === e.codePointAt(r)) {
        if (t) {
          n = r;
          break;
        }
      } else t || (t = !0);
    return n < 0
      ? 47 === e.codePointAt(0)
        ? "/"
        : "."
      : 1 === n && 47 === e.codePointAt(0)
        ? "//"
        : e.slice(0, n);
  },
  de = function (e) {
    he(e);
    let t,
      n = e.length,
      r = -1,
      o = 0,
      i = -1,
      a = 0;
    for (; n--; ) {
      const s = e.codePointAt(n);
      if (47 !== s)
        r < 0 && ((t = !0), (r = n + 1)),
          46 === s
            ? i < 0
              ? (i = n)
              : 1 !== a && (a = 1)
            : i > -1 && (a = -1);
      else if (t) {
        o = n + 1;
        break;
      }
    }
    return i < 0 || r < 0 || 0 === a || (1 === a && i === r - 1 && i === o + 1)
      ? ""
      : e.slice(i, r);
  },
  pe = function (...e) {
    let t,
      n = -1;
    for (; ++n < e.length; )
      he(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
    return void 0 === t
      ? "."
      : (function (e) {
          he(e);
          const t = 47 === e.codePointAt(0);
          let n = (function (e, t) {
            let n,
              r,
              o = "",
              i = 0,
              a = -1,
              s = 0,
              l = -1;
            for (; ++l <= e.length; ) {
              if (l < e.length) n = e.codePointAt(l);
              else {
                if (47 === n) break;
                n = 47;
              }
              if (47 === n) {
                if (a === l - 1 || 1 === s);
                else if (a !== l - 1 && 2 === s) {
                  if (
                    o.length < 2 ||
                    2 !== i ||
                    46 !== o.codePointAt(o.length - 1) ||
                    46 !== o.codePointAt(o.length - 2)
                  )
                    if (o.length > 2) {
                      if (((r = o.lastIndexOf("/")), r !== o.length - 1)) {
                        r < 0
                          ? ((o = ""), (i = 0))
                          : ((o = o.slice(0, r)),
                            (i = o.length - 1 - o.lastIndexOf("/"))),
                          (a = l),
                          (s = 0);
                        continue;
                      }
                    } else if (o.length > 0) {
                      (o = ""), (i = 0), (a = l), (s = 0);
                      continue;
                    }
                  t && ((o = o.length > 0 ? o + "/.." : ".."), (i = 2));
                } else
                  o.length > 0
                    ? (o += "/" + e.slice(a + 1, l))
                    : (o = e.slice(a + 1, l)),
                    (i = l - a - 1);
                (a = l), (s = 0);
              } else 46 === n && s > -1 ? s++ : (s = -1);
            }
            return o;
          })(e, !t);
          return (
            0 !== n.length || t || (n = "."),
            n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += "/"),
            t ? "/" + n : n
          );
        })(t);
  },
  fe = "/";
function he(e) {
  if ("string" != typeof e)
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const me = function () {
  return "/";
};
function ge(e) {
  return Boolean(
    null !== e &&
      "object" == typeof e &&
      "href" in e &&
      e.href &&
      "protocol" in e &&
      e.protocol &&
      void 0 === e.auth,
  );
}
const ye = ["history", "path", "basename", "stem", "extname", "dirname"];
class ve {
  constructor(e) {
    let t;
    (t = e
      ? ge(e)
        ? { path: e }
        : "string" == typeof e ||
            (function (e) {
              return Boolean(
                e &&
                  "object" == typeof e &&
                  "byteLength" in e &&
                  "byteOffset" in e,
              );
            })(e)
          ? { value: e }
          : e
      : {}),
      (this.cwd = "cwd" in t ? "" : me()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let n,
      r = -1;
    for (; ++r < ye.length; ) {
      const e = ye[r];
      e in t &&
        void 0 !== t[e] &&
        null !== t[e] &&
        (this[e] = "history" === e ? [...t[e]] : t[e]);
    }
    for (n in t) ye.includes(n) || (this[n] = t[n]);
  }
  get basename() {
    return "string" == typeof this.path ? ce(this.path) : void 0;
  }
  set basename(e) {
    Se(e, "basename"),
      be(e, "basename"),
      (this.path = pe(this.dirname || "", e));
  }
  get dirname() {
    return "string" == typeof this.path ? ue(this.path) : void 0;
  }
  set dirname(e) {
    _e(this.basename, "dirname"), (this.path = pe(e || "", this.basename));
  }
  get extname() {
    return "string" == typeof this.path ? de(this.path) : void 0;
  }
  set extname(e) {
    if ((be(e, "extname"), _e(this.dirname, "extname"), e)) {
      if (46 !== e.codePointAt(0))
        throw new Error("`extname` must start with `.`");
      if (e.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = pe(this.dirname, this.stem + (e || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(e) {
    ge(e) &&
      (e = (function (e) {
        if ("string" == typeof e) e = new URL(e);
        else if (!ge(e)) {
          const t = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              "`",
          );
          throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
        }
        if ("file:" !== e.protocol) {
          const e = new TypeError("The URL must be of scheme file");
          throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
        }
        return (function (e) {
          if ("" !== e.hostname) {
            const e = new TypeError(
              'File URL host must be "localhost" or empty on darwin',
            );
            throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
          }
          const t = e.pathname;
          let n = -1;
          for (; ++n < t.length; )
            if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
              const e = t.codePointAt(n + 2);
              if (70 === e || 102 === e) {
                const e = new TypeError(
                  "File URL path must not include encoded / characters",
                );
                throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
              }
            }
          return decodeURIComponent(t);
        })(e);
      })(e)),
      Se(e, "path"),
      this.path !== e && this.history.push(e);
  }
  get stem() {
    return "string" == typeof this.path ? ce(this.path, this.extname) : void 0;
  }
  set stem(e) {
    Se(e, "stem"),
      be(e, "stem"),
      (this.path = pe(this.dirname || "", e + (this.extname || "")));
  }
  fail(e, t, n) {
    const r = this.message(e, t, n);
    throw ((r.fatal = !0), r);
  }
  info(e, t, n) {
    const r = this.message(e, t, n);
    return (r.fatal = void 0), r;
  }
  message(e, t, n) {
    const r = new v(e, t, n);
    return (
      this.path && ((r.name = this.path + ":" + r.name), (r.file = this.path)),
      (r.fatal = !1),
      this.messages.push(r),
      r
    );
  }
  toString(e) {
    return void 0 === this.value
      ? ""
      : "string" == typeof this.value
        ? this.value
        : new TextDecoder(e || void 0).decode(this.value);
  }
}
function be(e, t) {
  if (e && e.includes(fe))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + fe + "`",
    );
}
function Se(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function _e(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
const xe = function (e) {
    const t = this.constructor.prototype,
      n = t[e],
      r = function () {
        return n.apply(r, arguments);
      };
    return Object.setPrototypeOf(r, t), r;
  },
  we = {}.hasOwnProperty;
class Ee extends xe {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = (function () {
        const e = [],
          t = {
            run: function (...t) {
              let n = -1;
              const r = t.pop();
              if ("function" != typeof r)
                throw new TypeError(
                  "Expected function as last argument, not " + r,
                );
              !(function o(i, ...a) {
                const s = e[++n];
                let l = -1;
                if (i) r(i);
                else {
                  for (; ++l < t.length; )
                    (null !== a[l] && void 0 !== a[l]) || (a[l] = t[l]);
                  (t = a),
                    s
                      ? (function (e, t) {
                          let n;
                          return function (...t) {
                            const i = e.length > t.length;
                            let a;
                            i && t.push(r);
                            try {
                              a = e.apply(this, t);
                            } catch (e) {
                              if (i && n) throw e;
                              return r(e);
                            }
                            i ||
                              (a && a.then && "function" == typeof a.then
                                ? a.then(o, r)
                                : a instanceof Error
                                  ? r(a)
                                  : o(a));
                          };
                          function r(e, ...r) {
                            n || ((n = !0), t(e, ...r));
                          }
                          function o(e) {
                            r(null, e);
                          }
                        })(
                          s,
                          o,
                        )(...a)
                      : r(null, ...a);
                }
              })(null, ...t);
            },
            use: function (n) {
              if ("function" != typeof n)
                throw new TypeError(
                  "Expected `middelware` to be a function, not " + n,
                );
              return e.push(n), t;
            },
          };
        return t;
      })());
  }
  copy() {
    const e = new Ee();
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const n = this.attachers[t];
      e.use(...n);
    }
    return e.data(se(!0, {}, this.namespace)), e;
  }
  data(e, t) {
    return "string" == typeof e
      ? 2 === arguments.length
        ? (Ie("data", this.frozen), (this.namespace[e] = t), this)
        : (we.call(this.namespace, e) && this.namespace[e]) || void 0
      : e
        ? (Ie("data", this.frozen), (this.namespace = e), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const e = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...n] = this.attachers[this.freezeIndex];
      if (!1 === n[0]) continue;
      !0 === n[0] && (n[0] = void 0);
      const r = t.call(e, ...n);
      "function" == typeof r && this.transformers.use(r);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(e) {
    this.freeze();
    const t = Re(e),
      n = this.parser || this.Parser;
    return ke("parse", n), n(String(t), t);
  }
  process(e, t) {
    const n = this;
    return (
      this.freeze(),
      ke("process", this.parser || this.Parser),
      Ce("process", this.compiler || this.Compiler),
      t ? o(void 0, t) : new Promise(o)
    );
    function o(o, i) {
      const a = Re(e),
        s = n.parse(a);
      function l(e, n) {
        e || !n
          ? i(e)
          : o
            ? o(n)
            : ((0, r.ok)(t, "`done` is defined if `resolve` is not"),
              t(void 0, n));
      }
      n.run(s, a, function (e, t, r) {
        if (e || !t || !r) return l(e);
        const o = t,
          i = n.stringify(o, r);
        var a;
        "string" == typeof (a = i) ||
        (function (e) {
          return Boolean(
            e && "object" == typeof e && "byteLength" in e && "byteOffset" in e,
          );
        })(a)
          ? (r.value = i)
          : (r.result = i),
          l(e, r);
      });
    }
  }
  processSync(e) {
    let t,
      n = !1;
    return (
      this.freeze(),
      ke("processSync", this.parser || this.Parser),
      Ce("processSync", this.compiler || this.Compiler),
      this.process(e, function (e, r) {
        (n = !0), ae(e), (t = r);
      }),
      Oe("processSync", "process", n),
      (0, r.ok)(t, "we either bailed on an error or have a tree"),
      t
    );
  }
  run(e, t, n) {
    Ae(e), this.freeze();
    const o = this.transformers;
    return (
      n || "function" != typeof t || ((n = t), (t = void 0)),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(i, a) {
      (0, r.ok)(
        "function" != typeof t,
        "`file` can’t be a `done` anymore, we checked",
      );
      const s = Re(t);
      o.run(e, s, function (t, o, s) {
        const l = o || e;
        t
          ? a(t)
          : i
            ? i(l)
            : ((0, r.ok)(n, "`done` is defined if `resolve` is not"),
              n(void 0, l, s));
      });
    }
  }
  runSync(e, t) {
    let n,
      o = !1;
    return (
      this.run(e, t, function (e, t) {
        ae(e), (n = t), (o = !0);
      }),
      Oe("runSync", "run", o),
      (0, r.ok)(n, "we either bailed on an error or have a tree"),
      n
    );
  }
  stringify(e, t) {
    this.freeze();
    const n = Re(t),
      r = this.compiler || this.Compiler;
    return Ce("stringify", r), Ae(e), r(e, n);
  }
  use(e, ...t) {
    const n = this.attachers,
      r = this.namespace;
    if ((Ie("use", this.frozen), null == e));
    else if ("function" == typeof e) s(e, t);
    else {
      if ("object" != typeof e)
        throw new TypeError("Expected usable value, not `" + e + "`");
      Array.isArray(e) ? a(e) : i(e);
    }
    return this;
    function o(e) {
      if ("function" == typeof e) s(e, []);
      else {
        if ("object" != typeof e)
          throw new TypeError("Expected usable value, not `" + e + "`");
        if (Array.isArray(e)) {
          const [t, ...n] = e;
          s(t, n);
        } else i(e);
      }
    }
    function i(e) {
      if (!("plugins" in e) && !("settings" in e))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
        );
      a(e.plugins), e.settings && (r.settings = se(!0, r.settings, e.settings));
    }
    function a(e) {
      let t = -1;
      if (null == e);
      else {
        if (!Array.isArray(e))
          throw new TypeError("Expected a list of plugins, not `" + e + "`");
        for (; ++t < e.length; ) o(e[t]);
      }
    }
    function s(e, t) {
      let r = -1,
        o = -1;
      for (; ++r < n.length; )
        if (n[r][0] === e) {
          o = r;
          break;
        }
      if (-1 === o) n.push([e, ...t]);
      else if (t.length > 0) {
        let [r, ...i] = t;
        const a = n[o][1];
        le(a) && le(r) && (r = se(!0, a, r)), (n[o] = [e, r, ...i]);
      }
    }
  }
}
const Te = new Ee().freeze();
function ke(e, t) {
  if ("function" != typeof t)
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ce(e, t) {
  if ("function" != typeof t)
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Ie(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function Ae(e) {
  if (!le(e) || "string" != typeof e.type)
    throw new TypeError("Expected node, got `" + e + "`");
}
function Oe(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Re(e) {
  return (function (e) {
    return Boolean(
      e && "object" == typeof e && "message" in e && "messages" in e,
    );
  })(e)
    ? e
    : new ve(e);
}
const Me = [],
  Pe = { allowDangerousHtml: !0 },
  Ne = /^(https?|ircs?|mailto|xmpp)$/i,
  De = [
    {
      from: "astPlugins",
      id: "remove-buggy-html-in-markdown-parser",
    },
    {
      from: "allowDangerousHtml",
      id: "remove-buggy-html-in-markdown-parser",
    },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    { from: "className", id: "remove-classname" },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    {
      from: "escapeHtml",
      id: "remove-buggy-html-in-markdown-parser",
    },
    {
      from: "includeElementIndex",
      id: "#remove-includeelementindex",
    },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    {
      from: "source",
      id: "change-source-to-children",
      to: "children",
    },
    { from: "sourcePos", id: "#remove-sourcepos" },
    {
      from: "transformImageUri",
      id: "#add-urltransform",
      to: "urlTransform",
    },
    {
      from: "transformLinkUri",
      id: "#add-urltransform",
      to: "urlTransform",
    },
  ];
function je(e) {
  const t = Ue(e),
    n = Be(e);
  return ze(t.runSync(t.parse(n), n), e);
}
async function Le(e) {
  const t = Ue(e),
    n = Be(e);
  return ze(await t.run(t.parse(n), n), e);
}
function Fe(e) {
  const t = Ue(e),
    [n, r] = (0, j.useState)(void 0),
    [o, i] = (0, j.useState)(void 0);
  if (
    ((0, j.useEffect)(
      function () {
        let n = !1;
        const o = Be(e);
        return (
          t.run(t.parse(o), o, function (e, t) {
            n || (r(e), i(t));
          }),
          function () {
            n = !0;
          }
        );
      },
      [e.children, e.rehypePlugins, e.remarkPlugins, e.remarkRehypeOptions],
    ),
    n)
  )
    throw n;
  return o ? ze(o, e) : e.fallback;
}
function Ue(e) {
  const t = e.rehypePlugins || Me,
    n = e.remarkPlugins || Me,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Pe } : Pe;
  return Te().use(F).use(n).use(ie, r).use(t);
}
function Be(e) {
  const t = e.children || "",
    n = new ve();
  return (
    "string" == typeof t
      ? (n.value = t)
      : (0, r.HB)(
          "Unexpected value `" + t + "` for `children` prop, expected `string`",
        ),
    n
  );
}
function ze(e, t) {
  const n = t.allowedElements,
    o = t.allowElement,
    i = t.components,
    a = t.disallowedElements,
    s = t.skipHtml,
    l = t.unwrapDisallowed,
    c = t.urlTransform || He;
  for (const e of De)
    Object.hasOwn(t, e.from) &&
      (0, r.HB)(
        "Unexpected `" +
          e.from +
          "` prop, " +
          (e.to ? "use `" + e.to + "` instead" : "remove it") +
          " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
          e.id +
          "> for more info)",
      );
  return (
    n &&
      a &&
      (0, r.HB)(
        "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other",
      ),
    (0, q.YR)(e, function (e, t, r) {
      if ("raw" === e.type && r && "number" == typeof t)
        return (
          s
            ? r.children.splice(t, 1)
            : (r.children[t] = { type: "text", value: e.value }),
          t
        );
      if ("element" === e.type) {
        let t;
        for (t in N)
          if (Object.hasOwn(N, t) && Object.hasOwn(e.properties, t)) {
            const n = e.properties[t],
              r = N[t];
            (null === r || r.includes(e.tagName)) &&
              (e.properties[t] = c(String(n || ""), t, e));
          }
      }
      if ("element" === e.type) {
        let i = n ? !n.includes(e.tagName) : !!a && a.includes(e.tagName);
        if (
          (!i && o && "number" == typeof t && (i = !o(e, t, r)),
          i && r && "number" == typeof t)
        )
          return (
            l && e.children
              ? r.children.splice(t, 1, ...e.children)
              : r.children.splice(t, 1),
            t
          );
      }
    }),
    (function (e, t) {
      if (!t || void 0 === t.Fragment)
        throw new TypeError("Expected `Fragment` in options");
      const n = t.filePath || void 0;
      let r;
      if (t.development) {
        if ("function" != typeof t.jsxDEV)
          throw new TypeError(
            "Expected `jsxDEV` in options when `development: true`",
          );
        r = (function (e, t) {
          return function (n, r, o, i) {
            const a = Array.isArray(o.children),
              s = (0, g.PW)(n);
            return t(
              r,
              o,
              i,
              a,
              {
                columnNumber: s ? s.column - 1 : void 0,
                fileName: e,
                lineNumber: s ? s.line : void 0,
              },
              void 0,
            );
          };
        })(n, t.jsxDEV);
      } else {
        if ("function" != typeof t.jsx)
          throw new TypeError("Expected `jsx` in production options");
        if ("function" != typeof t.jsxs)
          throw new TypeError("Expected `jsxs` in production options");
        (o = t.jsx),
          (i = t.jsxs),
          (r = function (e, t, n, r) {
            const a = Array.isArray(n.children) ? i : o;
            return r ? a(t, n, r) : a(t, n);
          });
      }
      var o, i;
      const a = {
          Fragment: t.Fragment,
          ancestors: [],
          components: t.components || {},
          create: r,
          elementAttributeNameCase: t.elementAttributeNameCase || "react",
          evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
          filePath: n,
          ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
          passKeys: !1 !== t.passKeys,
          passNode: t.passNode || !1,
          schema: "svg" === t.space ? d.JW : d.qy,
          stylePropertyNameCase: t.stylePropertyNameCase || "dom",
          tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
        },
        s = T(a, e, void 0);
      return s && "string" != typeof s
        ? s
        : a.create(e, a.Fragment, { children: s || void 0 }, void 0);
    })(e, {
      Fragment: D.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: D.jsx,
      jsxs: D.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
}
function He(e) {
  const t = e.indexOf(":"),
    n = e.indexOf("?"),
    r = e.indexOf("#"),
    o = e.indexOf("/");
  return -1 === t ||
    (-1 !== o && t > o) ||
    (-1 !== n && t > n) ||
    (-1 !== r && t > r) ||
    Ne.test(e.slice(0, t))
    ? e
    : "";
}
