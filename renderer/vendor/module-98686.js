// vendor/module-98686.js — webpack module 98686
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t), n.d(t, { default: () => h, defaultSchema: () => o });
const r = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"],
  o = {
    ancestors: {
      tbody: ["table"],
      td: ["table"],
      th: ["table"],
      thead: ["table"],
      tfoot: ["table"],
      tr: ["table"],
    },
    attributes: {
      a: [
        ...r,
        "dataFootnoteBackref",
        "dataFootnoteRef",
        ["className", "data-footnote-backref"],
        "href",
      ],
      blockquote: ["cite"],
      code: [["className", /^language-./]],
      del: ["cite"],
      div: ["itemScope", "itemType"],
      dl: [...r],
      h2: [["className", "sr-only"]],
      img: [...r, "longDesc", "src"],
      input: [
        ["disabled", !0],
        ["type", "checkbox"],
      ],
      ins: ["cite"],
      li: [["className", "task-list-item"]],
      ol: [...r, ["className", "contains-task-list"]],
      q: ["cite"],
      section: ["dataFootnotes", ["className", "footnotes"]],
      source: ["srcSet"],
      summary: [...r],
      table: [...r],
      ul: [...r, ["className", "contains-task-list"]],
      "*": [
        "abbr",
        "accept",
        "acceptCharset",
        "accessKey",
        "action",
        "align",
        "alt",
        "axis",
        "border",
        "cellPadding",
        "cellSpacing",
        "char",
        "charOff",
        "charSet",
        "checked",
        "clear",
        "colSpan",
        "color",
        "cols",
        "compact",
        "coords",
        "dateTime",
        "dir",
        "encType",
        "frame",
        "hSpace",
        "headers",
        "height",
        "hrefLang",
        "htmlFor",
        "id",
        "isMap",
        "itemProp",
        "label",
        "lang",
        "maxLength",
        "media",
        "method",
        "multiple",
        "name",
        "noHref",
        "noShade",
        "noWrap",
        "open",
        "prompt",
        "readOnly",
        "rev",
        "rowSpan",
        "rows",
        "rules",
        "scope",
        "selected",
        "shape",
        "size",
        "span",
        "start",
        "summary",
        "tabIndex",
        "title",
        "useMap",
        "vAlign",
        "value",
        "width",
      ],
    },
    clobber: ["ariaDescribedBy", "ariaLabelledBy", "id", "name"],
    clobberPrefix: "user-content-",
    protocols: {
      cite: ["http", "https"],
      href: ["http", "https", "irc", "ircs", "mailto", "xmpp"],
      longDesc: ["http", "https"],
      src: ["http", "https"],
    },
    required: { input: { disabled: !0, type: "checkbox" } },
    strip: ["script"],
    tagNames: [
      "a",
      "b",
      "blockquote",
      "br",
      "code",
      "dd",
      "del",
      "details",
      "div",
      "dl",
      "dt",
      "em",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "li",
      "ol",
      "p",
      "picture",
      "pre",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "source",
      "span",
      "strike",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr",
      "tt",
      "ul",
      "var",
    ],
  };
var i = n(13709 /* vendor/module-13709 */),
  a = n(44585 /* vendor/module-44585 */);
const s = {}.hasOwnProperty;
function l(e, t) {
  if (t && "object" == typeof t) {
    const n = t;
    switch ("string" == typeof n.type ? n.type : "") {
      case "comment":
        return (function (e, t) {
          if (e.schema.allowComments) {
            const e = "string" == typeof t.value ? t.value : "",
              n = e.indexOf("--\x3e"),
              r = {
                type: "comment",
                value: n < 0 ? e : e.slice(0, n),
              };
            return p(r, t), r;
          }
        })(e, n);
      case "doctype":
        return (function (e, t) {
          if (e.schema.allowDoctypes) {
            const e = { type: "doctype" };
            return p(e, t), e;
          }
        })(e, n);
      case "element":
        return (function (e, t) {
          const n = "string" == typeof t.tagName ? t.tagName : "";
          e.stack.push(n);
          const r = c(e, t.children),
            o = (function (e, t) {
              const n = e.stack[e.stack.length - 1],
                r = e.schema.attributes,
                o = e.schema.required,
                i = r && s.call(r, n) ? r[n] : void 0,
                a = r && s.call(r, "*") ? r["*"] : void 0,
                l = t && "object" == typeof t ? t : {},
                c = {};
              let d;
              for (d in l)
                if (s.call(l, d)) {
                  const t = l[d];
                  let n = u(e, f(i, d), d, t);
                  null == n && (n = u(e, f(a, d), d, t)),
                    null != n && (c[d] = n);
                }
              if (o && s.call(o, n)) {
                const e = o[n];
                for (d in e) s.call(e, d) && !s.call(c, d) && (c[d] = e[d]);
              }
              return c;
            })(e, t.properties);
          e.stack.pop();
          let i = !1;
          if (
            n &&
            "*" !== n &&
            (!e.schema.tagNames || e.schema.tagNames.includes(n)) &&
            ((i = !0), e.schema.ancestors && s.call(e.schema.ancestors, n))
          ) {
            const t = e.schema.ancestors[n];
            let r = -1;
            for (i = !1; ++r < t.length; ) e.stack.includes(t[r]) && (i = !0);
          }
          if (!i)
            return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
          const a = {
            type: "element",
            tagName: n,
            properties: o,
            children: r,
          };
          return p(a, t), a;
        })(e, n);
      case "root":
        return (function (e, t) {
          const n = { type: "root", children: c(e, t.children) };
          return p(n, t), n;
        })(e, n);
      case "text":
        return (function (e, t) {
          const n = {
            type: "text",
            value: "string" == typeof t.value ? t.value : "",
          };
          return p(n, t), n;
        })(0, n);
    }
  }
}
function c(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = t;
    let o = -1;
    for (; ++o < r.length; ) {
      const t = l(e, r[o]);
      t && (Array.isArray(t) ? n.push(...t) : n.push(t));
    }
  }
  return n;
}
function u(e, t, n, r) {
  return t
    ? Array.isArray(r)
      ? (function (e, t, n, r) {
          let o = -1;
          const i = [];
          for (; ++o < r.length; ) {
            const a = d(e, t, n, r[o]);
            ("number" != typeof a && "string" != typeof a) || i.push(a);
          }
          return i;
        })(e, t, n, r)
      : d(e, t, n, r)
    : void 0;
}
function d(e, t, n, r) {
  if (
    ("boolean" == typeof r || "number" == typeof r || "string" == typeof r) &&
    (function (e, t, n) {
      const r =
        e.schema.protocols && s.call(e.schema.protocols, t)
          ? e.schema.protocols[t]
          : void 0;
      if (!r || 0 === r.length) return !0;
      const o = String(n),
        i = o.indexOf(":"),
        a = o.indexOf("?"),
        l = o.indexOf("#"),
        c = o.indexOf("/");
      if (i < 0 || (c > -1 && i > c) || (a > -1 && i > a) || (l > -1 && i > l))
        return !0;
      let u = -1;
      for (; ++u < r.length; ) {
        const e = r[u];
        if (i === e.length && o.slice(0, e.length) === e) return !0;
      }
      return !1;
    })(e, n, r)
  ) {
    if ("object" == typeof t && t.length > 1) {
      let e = !1,
        n = 0;
      for (; ++n < t.length; ) {
        const o = t[n];
        if (o && "object" == typeof o && "flags" in o) {
          if (o.test(String(r))) {
            e = !0;
            break;
          }
        } else if (o === r) {
          e = !0;
          break;
        }
      }
      if (!e) return;
    }
    return e.schema.clobber &&
      e.schema.clobberPrefix &&
      e.schema.clobber.includes(n)
      ? e.schema.clobberPrefix + r
      : r;
  }
}
function p(e, t) {
  const n = (0, a.G1)(t);
  t.data && (e.data = (0, i.Ay)(t.data)), n && (e.position = n);
}
function f(e, t) {
  let n,
    r = -1;
  if (e)
    for (; ++r < e.length; ) {
      const o = e[r],
        i = "string" == typeof o ? o : o[0];
      if (i === t) return o;
      "data*" === i && (n = o);
    }
  if (t.length > 4 && "data" === t.slice(0, 4).toLowerCase()) return n;
}
function h(e) {
  return function (t) {
    const n = (function (e, t) {
      let n = { type: "root", children: [] };
      const r = l({ schema: t ? { ...o, ...t } : o, stack: [] }, e);
      return (
        r &&
          (Array.isArray(r)
            ? 1 === r.length
              ? (n = r[0])
              : (n.children = r)
            : (n = r)),
        n
      );
    })(t, e);
    return n;
  };
}
