// vendor/module-25154.js — webpack module 25154
// params: (e, t, n) = (module, exports, require)
"use strict";
function r(e, t) {
  const n = String(e);
  if ("string" != typeof t) throw new TypeError("Expected character");
  let r = 0,
    o = n.indexOf(t);
  for (; -1 !== o; ) r++, (o = n.indexOf(t, o + t.length));
  return r;
}
n.r(t), n.d(t, { default: () => lt });
var o = n(69820 /* vendor/module-69820 */),
  i = n(57949 /* vendor/module-57949 */),
  a = n(33813 /* vendor/module-33813 */),
  s = n(15186 /* vendor/module-15186 */);
function l(e) {
  return "string" == typeof e
    ? new RegExp(
        (function (e) {
          if ("string" != typeof e) throw new TypeError("Expected a string");
          return e
            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            .replace(/-/g, "\\x2d");
        })(e),
        "g",
      )
    : e;
}
function c(e) {
  return "function" == typeof e
    ? e
    : function () {
        return e;
      };
}
const u = "phrasing",
  d = ["autolink", "link", "image", "label"];
function p(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function f(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function h(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function m(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  (0, o.ok)("link" === t.type), (t.url = "http://" + this.sliceSerialize(e));
}
function g(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function y(e) {
  this.exit(e);
}
function v(e) {
  !(function (e, t, n) {
    const r = n || {},
      o = (0, s.C)(r.ignore || []),
      i = (function (e) {
        const t = [];
        if (!Array.isArray(e))
          throw new TypeError(
            "Expected find and replace tuple or list of tuples",
          );
        const n = !e[0] || Array.isArray(e[0]) ? e : [e];
        let r = -1;
        for (; ++r < n.length; ) {
          const e = n[r];
          t.push([l(e[0]), c(e[1])]);
        }
        return t;
      })(t);
    let u = -1;
    for (; ++u < i.length; ) (0, a.VG)(e, "text", d);
    function d(e, t) {
      let n,
        r = -1;
      for (; ++r < t.length; ) {
        const e = t[r],
          i = n ? n.children : void 0;
        if (o(e, i ? i.indexOf(e) : void 0, n)) return;
        n = e;
      }
      if (n)
        return (function (e, t) {
          const n = t[t.length - 1],
            r = i[u][0],
            o = i[u][1];
          let a = 0;
          const s = n.children.indexOf(e);
          let l = !1,
            c = [];
          r.lastIndex = 0;
          let d = r.exec(e.value);
          for (; d; ) {
            const n = d.index,
              i = {
                index: d.index,
                input: d.input,
                stack: [...t, e],
              };
            let s = o(...d, i);
            if (
              ("string" == typeof s &&
                (s = s.length > 0 ? { type: "text", value: s } : void 0),
              !1 === s
                ? (r.lastIndex = n + 1)
                : (a !== n &&
                    c.push({
                      type: "text",
                      value: e.value.slice(a, n),
                    }),
                  Array.isArray(s) ? c.push(...s) : s && c.push(s),
                  (a = n + d[0].length),
                  (l = !0)),
              !r.global)
            )
              break;
            d = r.exec(e.value);
          }
          return (
            l
              ? (a < e.value.length &&
                  c.push({ type: "text", value: e.value.slice(a) }),
                n.children.splice(s, 1, ...c))
              : (c = [e]),
            s + c.length
          );
        })(e, t);
    }
  })(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, b],
      [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, S],
    ],
    { ignore: ["link", "linkReference"] },
  );
}
function b(e, t, n, o, i) {
  let a = "";
  if (!_(i)) return !1;
  if (
    (/^w/i.test(t) && ((n = t + n), (t = ""), (a = "http://")),
    !(function (e) {
      const t = e.split(".");
      return !(
        t.length < 2 ||
        (t[t.length - 1] &&
          (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
        (t[t.length - 2] &&
          (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
      );
    })(n))
  )
    return !1;
  const s = (function (e) {
    const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!t) return [e, void 0];
    e = e.slice(0, t.index);
    let n = t[0],
      o = n.indexOf(")");
    const i = r(e, "(");
    let a = r(e, ")");
    for (; -1 !== o && i > a; )
      (e += n.slice(0, o + 1)), (n = n.slice(o + 1)), (o = n.indexOf(")")), a++;
    return [e, n];
  })(n + o);
  if (!s[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: a + t + s[0],
    children: [{ type: "text", value: t + s[0] }],
  };
  return s[1] ? [l, { type: "text", value: s[1] }] : l;
}
function S(e, t, n, r) {
  return (
    !(!_(r, !0) || /[-\d_]$/.test(n)) && {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }],
    }
  );
}
function _(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (0 === e.index || (0, i.Ny)(n) || (0, i.es)(n)) && (!t || 47 !== n);
}
var x = n(26243 /* vendor/module-26243 */);
function w() {
  this.buffer();
}
function E(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function T() {
  this.buffer();
}
function k(e) {
  this.enter(
    {
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: [],
    },
    e,
  );
}
function C(e) {
  const t = this.resume(),
    n = this.stack[this.stack.length - 1];
  (0, o.ok)("footnoteReference" === n.type),
    (n.identifier = (0, x.B)(this.sliceSerialize(e)).toLowerCase()),
    (n.label = t);
}
function I(e) {
  this.exit(e);
}
function A(e) {
  const t = this.resume(),
    n = this.stack[this.stack.length - 1];
  (0, o.ok)("footnoteDefinition" === n.type),
    (n.identifier = (0, x.B)(this.sliceSerialize(e)).toLowerCase()),
    (n.label = t);
}
function O(e) {
  this.exit(e);
}
function R(e, t, n, r) {
  const o = n.createTracker(r);
  let i = o.move("[^");
  const a = n.enter("footnoteReference"),
    s = n.enter("reference");
  return (
    (i += o.move(n.safe(n.associationId(e), { after: "]", before: i }))),
    s(),
    a(),
    (i += o.move("]")),
    i
  );
}
function M(e) {
  let t = !1;
  return (
    e && e.firstLineBlank && (t = !0),
    {
      handlers: {
        footnoteDefinition: function (e, n, r, o) {
          const i = r.createTracker(o);
          let a = i.move("[^");
          const s = r.enter("footnoteDefinition"),
            l = r.enter("label");
          return (
            (a += i.move(
              r.safe(r.associationId(e), { before: a, after: "]" }),
            )),
            l(),
            (a += i.move("]:")),
            e.children &&
              e.children.length > 0 &&
              (i.shift(4),
              (a += i.move(
                (t ? "\n" : " ") +
                  r.indentLines(r.containerFlow(e, i.current()), t ? N : P),
              ))),
            s(),
            a
          );
        },
        footnoteReference: R,
      },
      unsafe: [
        {
          character: "[",
          inConstruct: ["label", "phrasing", "reference"],
        },
      ],
    }
  );
}
function P(e, t, n) {
  return 0 === t ? e : N(e, 0, n);
}
function N(e, t, n) {
  return (n ? "" : "    ") + e;
}
R.peek = function () {
  return "[";
};
const D = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe",
];
function j(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function L(e) {
  this.exit(e);
}
function F(e, t, n, r) {
  const o = n.createTracker(r),
    i = n.enter("strikethrough");
  let a = o.move("~~");
  return (
    (a += n.containerPhrasing(e, {
      ...o.current(),
      before: a,
      after: "~",
    })),
    (a += o.move("~~")),
    i(),
    a
  );
}
function U(e) {
  return e.length;
}
function B(e) {
  return null == e ? "" : String(e);
}
function z(e) {
  const t = "string" == typeof e ? e.codePointAt(0) : 0;
  return 67 === t || 99 === t
    ? 99
    : 76 === t || 108 === t
      ? 108
      : 82 === t || 114 === t
        ? 114
        : 0;
}
function H(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function V(e, t) {
  return q(e, t.inConstruct, !0) && !q(e, t.notInConstruct, !1);
}
function q(e, t, n) {
  if (("string" == typeof t && (t = [t]), !t || 0 === t.length)) return n;
  let r = -1;
  for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
  return !1;
}
function G(e, t, n, r) {
  let o = -1;
  for (; ++o < n.unsafe.length; )
    if ("\n" === n.unsafe[o].character && V(n.stack, n.unsafe[o]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return "\\\n";
}
F.peek = function () {
  return "~";
};
var W = n(45344 /* vendor/module-45344 */);
function $(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Y(e) {
  const t = e.options.quote || '"';
  if ('"' !== t && "'" !== t)
    throw new Error(
      "Cannot serialize title with `" +
        t +
        "` for `options.quote`, expected `\"`, or `'`",
    );
  return t;
}
function K(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
var Z = n(66990 /* vendor/module-66990 */);
function Q(e, t, n) {
  const r = (0, Z.S)(e),
    o = (0, Z.S)(t);
  return void 0 === r
    ? void 0 === o
      ? "_" === n
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : 1 === o
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : 1 === r
      ? void 0 === o
        ? { inside: !1, outside: !1 }
        : 1 === o
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : void 0 === o
        ? { inside: !1, outside: !1 }
        : 1 === o
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
}
function J(e, t, n, r) {
  const o = (function (e) {
      const t = e.options.emphasis || "*";
      if ("*" !== t && "_" !== t)
        throw new Error(
          "Cannot serialize emphasis with `" +
            t +
            "` for `options.emphasis`, expected `*`, or `_`",
        );
      return t;
    })(n),
    i = n.enter("emphasis"),
    a = n.createTracker(r),
    s = a.move(o);
  let l = a.move(
    n.containerPhrasing(e, { after: o, before: s, ...a.current() }),
  );
  const c = l.charCodeAt(0),
    u = Q(r.before.charCodeAt(r.before.length - 1), c, o);
  u.inside && (l = K(c) + l.slice(1));
  const d = l.charCodeAt(l.length - 1),
    p = Q(r.after.charCodeAt(0), d, o);
  p.inside && (l = l.slice(0, -1) + K(d));
  const f = a.move(o);
  return (
    i(),
    (n.attentionEncodeSurroundingInfo = {
      after: p.outside,
      before: u.outside,
    }),
    s + l + f
  );
}
J.peek = function (e, t, n) {
  return n.options.emphasis || "*";
};
var X = n(74269 /* vendor/module-74269 */),
  ee = n(45305 /* vendor/module-45305 */);
function te(e) {
  return e.value || "";
}
function ne(e, t, n, r) {
  const o = Y(n),
    i = '"' === o ? "Quote" : "Apostrophe",
    a = n.enter("image");
  let s = n.enter("label");
  const l = n.createTracker(r);
  let c = l.move("![");
  return (
    (c += l.move(n.safe(e.alt, { before: c, after: "]", ...l.current() }))),
    (c += l.move("](")),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter("destinationLiteral")),
        (c += l.move("<")),
        (c += l.move(n.safe(e.url, { before: c, after: ">", ...l.current() }))),
        (c += l.move(">")))
      : ((s = n.enter("destinationRaw")),
        (c += l.move(
          n.safe(e.url, {
            before: c,
            after: e.title ? " " : ")",
            ...l.current(),
          }),
        ))),
    s(),
    e.title &&
      ((s = n.enter(`title${i}`)),
      (c += l.move(" " + o)),
      (c += l.move(n.safe(e.title, { before: c, after: o, ...l.current() }))),
      (c += l.move(o)),
      s()),
    (c += l.move(")")),
    a(),
    c
  );
}
function re(e, t, n, r) {
  const o = e.referenceType,
    i = n.enter("imageReference");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let l = s.move("![");
  const c = n.safe(e.alt, { before: l, after: "]", ...s.current() });
  (l += s.move(c + "][")), a();
  const u = n.stack;
  (n.stack = []), (a = n.enter("reference"));
  const d = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...s.current(),
  });
  return (
    a(),
    (n.stack = u),
    i(),
    "full" !== o && c && c === d
      ? "shortcut" === o
        ? (l = l.slice(0, -1))
        : (l += s.move("]"))
      : (l += s.move(d + "]")),
    l
  );
}
function oe(e, t, n) {
  let r = e.value || "",
    o = "`",
    i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); ) o += "`";
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = " " + r + " ");
    ++i < n.unsafe.length;

  ) {
    const e = n.unsafe[i],
      t = n.compilePattern(e);
    let o;
    if (e.atBreak)
      for (; (o = t.exec(r)); ) {
        let e = o.index;
        10 === r.charCodeAt(e) && 13 === r.charCodeAt(e - 1) && e--,
          (r = r.slice(0, e) + " " + r.slice(o.index + 1));
      }
  }
  return o + r + o;
}
function ie(e, t) {
  const n = (0, ee.d)(e);
  return Boolean(
    !t.options.resourceLink &&
      e.url &&
      !e.title &&
      e.children &&
      1 === e.children.length &&
      "text" === e.children[0].type &&
      (n === e.url || "mailto:" + n === e.url) &&
      /^[a-z][a-z+.-]+:/i.test(e.url) &&
      !/[\0- <>\u007F]/.test(e.url),
  );
}
function ae(e, t, n, r) {
  const o = Y(n),
    i = '"' === o ? "Quote" : "Apostrophe",
    a = n.createTracker(r);
  let s, l;
  if (ie(e, n)) {
    const t = n.stack;
    (n.stack = []), (s = n.enter("autolink"));
    let r = a.move("<");
    return (
      (r += a.move(
        n.containerPhrasing(e, {
          before: r,
          after: ">",
          ...a.current(),
        }),
      )),
      (r += a.move(">")),
      s(),
      (n.stack = t),
      r
    );
  }
  (s = n.enter("link")), (l = n.enter("label"));
  let c = a.move("[");
  return (
    (c += a.move(
      n.containerPhrasing(e, {
        before: c,
        after: "](",
        ...a.current(),
      }),
    )),
    (c += a.move("](")),
    l(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((l = n.enter("destinationLiteral")),
        (c += a.move("<")),
        (c += a.move(n.safe(e.url, { before: c, after: ">", ...a.current() }))),
        (c += a.move(">")))
      : ((l = n.enter("destinationRaw")),
        (c += a.move(
          n.safe(e.url, {
            before: c,
            after: e.title ? " " : ")",
            ...a.current(),
          }),
        ))),
    l(),
    e.title &&
      ((l = n.enter(`title${i}`)),
      (c += a.move(" " + o)),
      (c += a.move(n.safe(e.title, { before: c, after: o, ...a.current() }))),
      (c += a.move(o)),
      l()),
    (c += a.move(")")),
    s(),
    c
  );
}
function se(e, t, n, r) {
  const o = e.referenceType,
    i = n.enter("linkReference");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let l = s.move("[");
  const c = n.containerPhrasing(e, {
    before: l,
    after: "]",
    ...s.current(),
  });
  (l += s.move(c + "][")), a();
  const u = n.stack;
  (n.stack = []), (a = n.enter("reference"));
  const d = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...s.current(),
  });
  return (
    a(),
    (n.stack = u),
    i(),
    "full" !== o && c && c === d
      ? "shortcut" === o
        ? (l = l.slice(0, -1))
        : (l += s.move("]"))
      : (l += s.move(d + "]")),
    l
  );
}
function le(e) {
  const t = e.options.bullet || "*";
  if ("*" !== t && "+" !== t && "-" !== t)
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bullet`, expected `*`, `+`, or `-`",
    );
  return t;
}
function ce(e) {
  const t = e.options.rule || "*";
  if ("*" !== t && "-" !== t && "_" !== t)
    throw new Error(
      "Cannot serialize rules with `" +
        t +
        "` for `options.rule`, expected `*`, `-`, or `_`",
    );
  return t;
}
(te.peek = function () {
  return "<";
}),
  (ne.peek = function () {
    return "!";
  }),
  (re.peek = function () {
    return "!";
  }),
  (oe.peek = function () {
    return "`";
  }),
  (ae.peek = function (e, t, n) {
    return ie(e, n) ? "<" : "[";
  }),
  (se.peek = function () {
    return "[";
  });
const ue = (0, s.C)([
  "break",
  "delete",
  "emphasis",
  "footnote",
  "footnoteReference",
  "image",
  "imageReference",
  "inlineCode",
  "inlineMath",
  "link",
  "linkReference",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "strong",
  "text",
  "textDirective",
]);
function de(e, t, n, r) {
  const o = (function (e) {
      const t = e.options.strong || "*";
      if ("*" !== t && "_" !== t)
        throw new Error(
          "Cannot serialize strong with `" +
            t +
            "` for `options.strong`, expected `*`, or `_`",
        );
      return t;
    })(n),
    i = n.enter("strong"),
    a = n.createTracker(r),
    s = a.move(o + o);
  let l = a.move(
    n.containerPhrasing(e, { after: o, before: s, ...a.current() }),
  );
  const c = l.charCodeAt(0),
    u = Q(r.before.charCodeAt(r.before.length - 1), c, o);
  u.inside && (l = K(c) + l.slice(1));
  const d = l.charCodeAt(l.length - 1),
    p = Q(r.after.charCodeAt(0), d, o);
  p.inside && (l = l.slice(0, -1) + K(d));
  const f = a.move(o + o);
  return (
    i(),
    (n.attentionEncodeSurroundingInfo = {
      after: p.outside,
      before: u.outside,
    }),
    s + l + f
  );
}
de.peek = function (e, t, n) {
  return n.options.strong || "*";
};
const pe = {
  blockquote: function (e, t, n, r) {
    const o = n.enter("blockquote"),
      i = n.createTracker(r);
    i.move("> "), i.shift(2);
    const a = n.indentLines(n.containerFlow(e, i.current()), H);
    return o(), a;
  },
  break: G,
  code: function (e, t, n, r) {
    const o = (function (e) {
        const t = e.options.fence || "`";
        if ("`" !== t && "~" !== t)
          throw new Error(
            "Cannot serialize code with `" +
              t +
              "` for `options.fence`, expected `` ` `` or `~`",
          );
        return t;
      })(n),
      i = e.value || "",
      a = "`" === o ? "GraveAccent" : "Tilde";
    if (
      (function (e, t) {
        return Boolean(
          !1 === t.options.fences &&
            e.value &&
            !e.lang &&
            /[^ \r\n]/.test(e.value) &&
            !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value),
        );
      })(e, n)
    ) {
      const e = n.enter("codeIndented"),
        t = n.indentLines(i, $);
      return e(), t;
    }
    const s = n.createTracker(r),
      l = o.repeat(Math.max((0, W.D)(i, o) + 1, 3)),
      c = n.enter("codeFenced");
    let u = s.move(l);
    if (e.lang) {
      const t = n.enter(`codeFencedLang${a}`);
      (u += s.move(
        n.safe(e.lang, {
          before: u,
          after: " ",
          encode: ["`"],
          ...s.current(),
        }),
      )),
        t();
    }
    if (e.lang && e.meta) {
      const t = n.enter(`codeFencedMeta${a}`);
      (u += s.move(" ")),
        (u += s.move(
          n.safe(e.meta, {
            before: u,
            after: "\n",
            encode: ["`"],
            ...s.current(),
          }),
        )),
        t();
    }
    return (
      (u += s.move("\n")),
      i && (u += s.move(i + "\n")),
      (u += s.move(l)),
      c(),
      u
    );
  },
  definition: function (e, t, n, r) {
    const o = Y(n),
      i = '"' === o ? "Quote" : "Apostrophe",
      a = n.enter("definition");
    let s = n.enter("label");
    const l = n.createTracker(r);
    let c = l.move("[");
    return (
      (c += l.move(
        n.safe(n.associationId(e), {
          before: c,
          after: "]",
          ...l.current(),
        }),
      )),
      (c += l.move("]: ")),
      s(),
      !e.url || /[\0- \u007F]/.test(e.url)
        ? ((s = n.enter("destinationLiteral")),
          (c += l.move("<")),
          (c += l.move(
            n.safe(e.url, { before: c, after: ">", ...l.current() }),
          )),
          (c += l.move(">")))
        : ((s = n.enter("destinationRaw")),
          (c += l.move(
            n.safe(e.url, {
              before: c,
              after: e.title ? " " : "\n",
              ...l.current(),
            }),
          ))),
      s(),
      e.title &&
        ((s = n.enter(`title${i}`)),
        (c += l.move(" " + o)),
        (c += l.move(n.safe(e.title, { before: c, after: o, ...l.current() }))),
        (c += l.move(o)),
        s()),
      a(),
      c
    );
  },
  emphasis: J,
  hardBreak: G,
  heading: function (e, t, n, r) {
    const o = Math.max(Math.min(6, e.depth || 1), 1),
      i = n.createTracker(r);
    if (
      (function (e, t) {
        let n = !1;
        return (
          (0, X.YR)(e, function (e) {
            if (
              ("value" in e && /\r?\n|\r/.test(e.value)) ||
              "break" === e.type
            )
              return (n = !0), a.dc;
          }),
          Boolean(
            (!e.depth || e.depth < 3) &&
              (0, ee.d)(e) &&
              (t.options.setext || n),
          )
        );
      })(e, n)
    ) {
      const t = n.enter("headingSetext"),
        r = n.enter("phrasing"),
        a = n.containerPhrasing(e, {
          ...i.current(),
          before: "\n",
          after: "\n",
        });
      return (
        r(),
        t(),
        a +
          "\n" +
          (1 === o ? "=" : "-").repeat(
            a.length - (Math.max(a.lastIndexOf("\r"), a.lastIndexOf("\n")) + 1),
          )
      );
    }
    const s = "#".repeat(o),
      l = n.enter("headingAtx"),
      c = n.enter("phrasing");
    i.move(s + " ");
    let u = n.containerPhrasing(e, {
      before: "# ",
      after: "\n",
      ...i.current(),
    });
    return (
      /^[\t ]/.test(u) && (u = K(u.charCodeAt(0)) + u.slice(1)),
      (u = u ? s + " " + u : s),
      n.options.closeAtx && (u += " " + s),
      c(),
      l(),
      u
    );
  },
  html: te,
  image: ne,
  imageReference: re,
  inlineCode: oe,
  link: ae,
  linkReference: se,
  list: function (e, t, n, r) {
    const o = n.enter("list"),
      i = n.bulletCurrent;
    let a = e.ordered
      ? (function (e) {
          const t = e.options.bulletOrdered || ".";
          if ("." !== t && ")" !== t)
            throw new Error(
              "Cannot serialize items with `" +
                t +
                "` for `options.bulletOrdered`, expected `.` or `)`",
            );
          return t;
        })(n)
      : le(n);
    const s = e.ordered
      ? "." === a
        ? ")"
        : "."
      : (function (e) {
          const t = le(e),
            n = e.options.bulletOther;
          if (!n) return "*" === t ? "-" : "*";
          if ("*" !== n && "+" !== n && "-" !== n)
            throw new Error(
              "Cannot serialize items with `" +
                n +
                "` for `options.bulletOther`, expected `*`, `+`, or `-`",
            );
          if (n === t)
            throw new Error(
              "Expected `bullet` (`" +
                t +
                "`) and `bulletOther` (`" +
                n +
                "`) to be different",
            );
          return n;
        })(n);
    let l = !(!t || !n.bulletLastUsed) && a === n.bulletLastUsed;
    if (!e.ordered) {
      const t = e.children ? e.children[0] : void 0;
      if (
        (("*" !== a && "-" !== a) ||
          !t ||
          (t.children && t.children[0]) ||
          "list" !== n.stack[n.stack.length - 1] ||
          "listItem" !== n.stack[n.stack.length - 2] ||
          "list" !== n.stack[n.stack.length - 3] ||
          "listItem" !== n.stack[n.stack.length - 4] ||
          0 !== n.indexStack[n.indexStack.length - 1] ||
          0 !== n.indexStack[n.indexStack.length - 2] ||
          0 !== n.indexStack[n.indexStack.length - 3] ||
          (l = !0),
        ce(n) === a && t)
      ) {
        let t = -1;
        for (; ++t < e.children.length; ) {
          const n = e.children[t];
          if (
            n &&
            "listItem" === n.type &&
            n.children &&
            n.children[0] &&
            "thematicBreak" === n.children[0].type
          ) {
            l = !0;
            break;
          }
        }
      }
    }
    l && (a = s), (n.bulletCurrent = a);
    const c = n.containerFlow(e, r);
    return (n.bulletLastUsed = a), (n.bulletCurrent = i), o(), c;
  },
  listItem: function (e, t, n, r) {
    const o = (function (e) {
      const t = e.options.listItemIndent || "one";
      if ("tab" !== t && "one" !== t && "mixed" !== t)
        throw new Error(
          "Cannot serialize items with `" +
            t +
            "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
        );
      return t;
    })(n);
    let i = n.bulletCurrent || le(n);
    t &&
      "list" === t.type &&
      t.ordered &&
      (i =
        ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
        (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) +
        i);
    let a = i.length + 1;
    ("tab" === o ||
      ("mixed" === o && ((t && "list" === t.type && t.spread) || e.spread))) &&
      (a = 4 * Math.ceil(a / 4));
    const s = n.createTracker(r);
    s.move(i + " ".repeat(a - i.length)), s.shift(a);
    const l = n.enter("listItem"),
      c = n.indentLines(n.containerFlow(e, s.current()), function (e, t, n) {
        return t
          ? (n ? "" : " ".repeat(a)) + e
          : (n ? i : i + " ".repeat(a - i.length)) + e;
      });
    return l(), c;
  },
  paragraph: function (e, t, n, r) {
    const o = n.enter("paragraph"),
      i = n.enter("phrasing"),
      a = n.containerPhrasing(e, r);
    return i(), o(), a;
  },
  root: function (e, t, n, r) {
    return (
      e.children.some(function (e) {
        return ue(e);
      })
        ? n.containerPhrasing
        : n.containerFlow
    ).call(n, e, r);
  },
  strong: de,
  text: function (e, t, n, r) {
    return n.safe(e.value, r);
  },
  thematicBreak: function (e, t, n) {
    const r = (ce(n) + (n.options.ruleSpaces ? " " : "")).repeat(
      (function (e) {
        const t = e.options.ruleRepetition || 3;
        if (t < 3)
          throw new Error(
            "Cannot serialize rules with repetition `" +
              t +
              "` for `options.ruleRepetition`, expected `3` or more",
          );
        return t;
      })(n),
    );
    return n.options.ruleSpaces ? r.slice(0, -1) : r;
  },
};
function fe(e) {
  const t = e._align;
  (0, o.ok)(t, "expected `_align` on table"),
    this.enter(
      {
        type: "table",
        align: t.map(function (e) {
          return "none" === e ? null : e;
        }),
        children: [],
      },
      e,
    ),
    (this.data.inTable = !0);
}
function he(e) {
  this.exit(e), (this.data.inTable = void 0);
}
function me(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function ge(e) {
  this.exit(e);
}
function ye(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function ve(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, be));
  const n = this.stack[this.stack.length - 1];
  (0, o.ok)("inlineCode" === n.type), (n.value = t), this.exit(e);
}
function be(e, t) {
  return "|" === t ? t : e;
}
function Se(e) {
  const t = e || {},
    n = t.tableCellPadding,
    r = t.tablePipeAlign,
    o = t.stringLength,
    i = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      { atBreak: !0, character: "|", after: "[\t :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" },
    ],
    handlers: {
      inlineCode: function (e, t, n) {
        let r = pe.inlineCode(e, t, n);
        return (
          n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
        );
      },
      table: function (e, t, n, r) {
        return s(
          (function (e, t, n) {
            const r = e.children;
            let o = -1;
            const i = [],
              a = t.enter("table");
            for (; ++o < r.length; ) i[o] = l(r[o], t, n);
            return a(), i;
          })(e, n, r),
          e.align,
        );
      },
      tableCell: a,
      tableRow: function (e, t, n, r) {
        const o = s([l(e, n, r)]);
        return o.slice(0, o.indexOf("\n"));
      },
    },
  };
  function a(e, t, n, r) {
    const o = n.enter("tableCell"),
      a = n.enter("phrasing"),
      s = n.containerPhrasing(e, { ...r, before: i, after: i });
    return a(), o(), s;
  }
  function s(e, t) {
    return (function (e, t) {
      const n = t || {},
        r = (n.align || []).concat(),
        o = n.stringLength || U,
        i = [],
        a = [],
        s = [],
        l = [];
      let c = 0,
        u = -1;
      for (; ++u < e.length; ) {
        const t = [],
          r = [];
        let i = -1;
        for (e[u].length > c && (c = e[u].length); ++i < e[u].length; ) {
          const a = B(e[u][i]);
          if (!1 !== n.alignDelimiters) {
            const e = o(a);
            (r[i] = e), (void 0 === l[i] || e > l[i]) && (l[i] = e);
          }
          t.push(a);
        }
        (a[u] = t), (s[u] = r);
      }
      let d = -1;
      if ("object" == typeof r && "length" in r)
        for (; ++d < c; ) i[d] = z(r[d]);
      else {
        const e = z(r);
        for (; ++d < c; ) i[d] = e;
      }
      d = -1;
      const p = [],
        f = [];
      for (; ++d < c; ) {
        const e = i[d];
        let t = "",
          r = "";
        99 === e
          ? ((t = ":"), (r = ":"))
          : 108 === e
            ? (t = ":")
            : 114 === e && (r = ":");
        let o =
          !1 === n.alignDelimiters
            ? 1
            : Math.max(1, l[d] - t.length - r.length);
        const a = t + "-".repeat(o) + r;
        !1 !== n.alignDelimiters &&
          ((o = t.length + o + r.length), o > l[d] && (l[d] = o), (f[d] = o)),
          (p[d] = a);
      }
      a.splice(1, 0, p), s.splice(1, 0, f), (u = -1);
      const h = [];
      for (; ++u < a.length; ) {
        const e = a[u],
          t = s[u];
        d = -1;
        const r = [];
        for (; ++d < c; ) {
          const o = e[d] || "";
          let a = "",
            s = "";
          if (!1 !== n.alignDelimiters) {
            const e = l[d] - (t[d] || 0),
              n = i[d];
            114 === n
              ? (a = " ".repeat(e))
              : 99 === n
                ? e % 2
                  ? ((a = " ".repeat(e / 2 + 0.5)),
                    (s = " ".repeat(e / 2 - 0.5)))
                  : ((a = " ".repeat(e / 2)), (s = a))
                : (s = " ".repeat(e));
          }
          !1 === n.delimiterStart || d || r.push("|"),
            !1 === n.padding ||
              (!1 === n.alignDelimiters && "" === o) ||
              (!1 === n.delimiterStart && !d) ||
              r.push(" "),
            !1 !== n.alignDelimiters && r.push(a),
            r.push(o),
            !1 !== n.alignDelimiters && r.push(s),
            !1 !== n.padding && r.push(" "),
            (!1 === n.delimiterEnd && d === c - 1) || r.push("|");
        }
        h.push(
          !1 === n.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join(""),
        );
      }
      return h.join("\n");
    })(e, {
      align: t,
      alignDelimiters: r,
      padding: n,
      stringLength: o,
    });
  }
  function l(e, t, n) {
    const r = e.children;
    let o = -1;
    const i = [],
      s = t.enter("tableRow");
    for (; ++o < r.length; ) i[o] = a(r[o], 0, t, n);
    return s(), i;
  }
}
function _e(e) {
  const t = this.stack[this.stack.length - 2];
  (0, o.ok)("listItem" === t.type),
    (t.checked = "taskListCheckValueChecked" === e.type);
}
function xe(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
    const e = this.stack[this.stack.length - 1];
    (0, o.ok)("paragraph" === e.type);
    const n = e.children[0];
    if (n && "text" === n.type) {
      const r = t.children;
      let o,
        i = -1;
      for (; ++i < r.length; ) {
        const e = r[i];
        if ("paragraph" === e.type) {
          o = e;
          break;
        }
      }
      o === e &&
        ((n.value = n.value.slice(1)),
        0 === n.value.length
          ? e.children.shift()
          : e.position &&
            n.position &&
            "number" == typeof n.position.start.offset &&
            (n.position.start.column++,
            n.position.start.offset++,
            (e.position.start = Object.assign({}, n.position.start))));
    }
  }
  this.exit(e);
}
function we(e, t, n, r) {
  const o = e.children[0],
    i = "boolean" == typeof e.checked && o && "paragraph" === o.type,
    a = "[" + (e.checked ? "x" : " ") + "] ",
    s = n.createTracker(r);
  i && s.move(a);
  let l = pe.listItem(e, t, n, { ...r, ...s.current() });
  return (
    i &&
      (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
        return e + a;
      })),
    l
  );
}
var Ee = n(10660 /* vendor/module-10660 */);
const Te = {
    tokenize: function (e, t, n) {
      let r = 0;
      return function t(i) {
        return (87 === i || 119 === i) && r < 3
          ? (r++, e.consume(i), t)
          : 46 === i && 3 === r
            ? (e.consume(i), o)
            : n(i);
      };
      function o(e) {
        return null === e ? n(e) : t(e);
      }
    },
    partial: !0,
  },
  ke = {
    tokenize: function (e, t, n) {
      let r, o, a;
      return s;
      function s(t) {
        return 46 === t || 95 === t
          ? e.check(Ie, c, l)(t)
          : null === t ||
              (0, i.Ee)(t) ||
              (0, i.Ny)(t) ||
              (45 !== t && (0, i.es)(t))
            ? c(t)
            : ((a = !0), e.consume(t), s);
      }
      function l(t) {
        return 95 === t ? (r = !0) : ((o = r), (r = void 0)), e.consume(t), s;
      }
      function c(e) {
        return o || r || !a ? n(e) : t(e);
      }
    },
    partial: !0,
  },
  Ce = {
    tokenize: function (e, t) {
      let n = 0,
        r = 0;
      return o;
      function o(s) {
        return 40 === s
          ? (n++, e.consume(s), o)
          : 41 === s && r < n
            ? a(s)
            : 33 === s ||
                34 === s ||
                38 === s ||
                39 === s ||
                41 === s ||
                42 === s ||
                44 === s ||
                46 === s ||
                58 === s ||
                59 === s ||
                60 === s ||
                63 === s ||
                93 === s ||
                95 === s ||
                126 === s
              ? e.check(Ie, t, a)(s)
              : null === s || (0, i.Ee)(s) || (0, i.Ny)(s)
                ? t(s)
                : (e.consume(s), o);
      }
      function a(t) {
        return 41 === t && r++, e.consume(t), o;
      }
    },
    partial: !0,
  },
  Ie = {
    tokenize: function (e, t, n) {
      return r;
      function r(s) {
        return 33 === s ||
          34 === s ||
          39 === s ||
          41 === s ||
          42 === s ||
          44 === s ||
          46 === s ||
          58 === s ||
          59 === s ||
          63 === s ||
          95 === s ||
          126 === s
          ? (e.consume(s), r)
          : 38 === s
            ? (e.consume(s), a)
            : 93 === s
              ? (e.consume(s), o)
              : 60 === s || null === s || (0, i.Ee)(s) || (0, i.Ny)(s)
                ? t(s)
                : n(s);
      }
      function o(e) {
        return null === e ||
          40 === e ||
          91 === e ||
          (0, i.Ee)(e) ||
          (0, i.Ny)(e)
          ? t(e)
          : r(e);
      }
      function a(e) {
        return (0, i.CW)(e) ? s(e) : n(e);
      }
      function s(t) {
        return 59 === t
          ? (e.consume(t), r)
          : (0, i.CW)(t)
            ? (e.consume(t), s)
            : n(t);
      }
    },
    partial: !0,
  },
  Ae = {
    tokenize: function (e, t, n) {
      return function (t) {
        return e.consume(t), r;
      };
      function r(e) {
        return (0, i.lV)(e) ? n(e) : t(e);
      }
    },
    partial: !0,
  },
  Oe = {
    name: "wwwAutolink",
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return (87 !== t && 119 !== t) ||
          !De.call(r, r.previous) ||
          Ue(r.events)
          ? n(t)
          : (e.enter("literalAutolink"),
            e.enter("literalAutolinkWww"),
            e.check(Te, e.attempt(ke, e.attempt(Ce, o), n), n)(t));
      };
      function o(n) {
        return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
      }
    },
    previous: De,
  },
  Re = {
    name: "protocolAutolink",
    tokenize: function (e, t, n) {
      const r = this;
      let o = "",
        a = !1;
      return function (t) {
        return (72 !== t && 104 !== t) ||
          !je.call(r, r.previous) ||
          Ue(r.events)
          ? n(t)
          : (e.enter("literalAutolink"),
            e.enter("literalAutolinkHttp"),
            (o += String.fromCodePoint(t)),
            e.consume(t),
            s);
      };
      function s(t) {
        if ((0, i.CW)(t) && o.length < 5)
          return (o += String.fromCodePoint(t)), e.consume(t), s;
        if (58 === t) {
          const n = o.toLowerCase();
          if ("http" === n || "https" === n) return e.consume(t), l;
        }
        return n(t);
      }
      function l(t) {
        return 47 === t ? (e.consume(t), a ? c : ((a = !0), l)) : n(t);
      }
      function c(t) {
        return null === t ||
          (0, i.JQ)(t) ||
          (0, i.Ee)(t) ||
          (0, i.Ny)(t) ||
          (0, i.es)(t)
          ? n(t)
          : e.attempt(ke, e.attempt(Ce, u), n)(t);
      }
      function u(n) {
        return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
      }
    },
    previous: je,
  },
  Me = {
    name: "emailAutolink",
    tokenize: function (e, t, n) {
      const r = this;
      let o, a;
      return function (t) {
        return Fe(t) && Le.call(r, r.previous) && !Ue(r.events)
          ? (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t))
          : n(t);
      };
      function s(t) {
        return Fe(t) ? (e.consume(t), s) : 64 === t ? (e.consume(t), l) : n(t);
      }
      function l(t) {
        return 46 === t
          ? e.check(Ae, u, c)(t)
          : 45 === t || 95 === t || (0, i.lV)(t)
            ? ((a = !0), e.consume(t), l)
            : u(t);
      }
      function c(t) {
        return e.consume(t), (o = !0), l;
      }
      function u(s) {
        return a && o && (0, i.CW)(r.previous)
          ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(s))
          : n(s);
      }
    },
    previous: Le,
  },
  Pe = {};
let Ne = 48;
for (; Ne < 123; )
  (Pe[Ne] = Me), Ne++, 58 === Ne ? (Ne = 65) : 91 === Ne && (Ne = 97);
function De(e) {
  return (
    null === e ||
    40 === e ||
    42 === e ||
    95 === e ||
    91 === e ||
    93 === e ||
    126 === e ||
    (0, i.Ee)(e)
  );
}
function je(e) {
  return !(0, i.CW)(e);
}
function Le(e) {
  return !(47 === e || Fe(e));
}
function Fe(e) {
  return 43 === e || 45 === e || 46 === e || 95 === e || (0, i.lV)(e);
}
function Ue(e) {
  let t = e.length,
    n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return (
    e.length > 0 &&
      !n &&
      (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    n
  );
}
(Pe[43] = Me),
  (Pe[45] = Me),
  (Pe[46] = Me),
  (Pe[95] = Me),
  (Pe[72] = [Me, Re]),
  (Pe[104] = [Me, Re]),
  (Pe[87] = [Me, Oe]),
  (Pe[119] = [Me, Oe]);
var Be = n(35460 /* vendor/module-35460 */),
  ze = n(77508 /* vendor/module-77508 */);
const He = {
  tokenize: function (e, t, n) {
    const r = this;
    return (0, ze.N)(
      e,
      function (e) {
        const o = r.events[r.events.length - 1];
        return o &&
          "gfmFootnoteDefinitionIndent" === o[1].type &&
          4 === o[2].sliceSerialize(o[1], !0).length
          ? t(e)
          : n(e);
      },
      "gfmFootnoteDefinitionIndent",
      5,
    );
  },
  partial: !0,
};
function Ve(e, t, n) {
  const r = this;
  let o = r.events.length;
  const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; o--; ) {
    const e = r.events[o][1];
    if ("labelImage" === e.type) {
      a = e;
      break;
    }
    if (
      "gfmFootnoteCall" === e.type ||
      "labelLink" === e.type ||
      "label" === e.type ||
      "image" === e.type ||
      "link" === e.type
    )
      break;
  }
  return function (o) {
    if (!a || !a._balanced) return n(o);
    const s = (0, x.B)(r.sliceSerialize({ start: a.end, end: r.now() }));
    return 94 === s.codePointAt(0) && i.includes(s.slice(1))
      ? (e.enter("gfmFootnoteCallLabelMarker"),
        e.consume(o),
        e.exit("gfmFootnoteCallLabelMarker"),
        t(o))
      : n(o);
  };
}
function qe(e, t) {
  let n,
    r = e.length;
  for (; r--; )
    if ("labelImage" === e[r][1].type && "enter" === e[r][0]) {
      n = e[r][1];
      break;
    }
  (e[r + 1][1].type = "data"),
    (e[r + 3][1].type = "gfmFootnoteCallLabelMarker");
  const o = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[r + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    i = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[r + 3][1].end),
      end: Object.assign({}, e[r + 3][1].end),
    };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const a = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    s = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, a.start),
      end: Object.assign({}, a.end),
    },
    l = [
      e[r + 1],
      e[r + 2],
      ["enter", o, t],
      e[r + 3],
      e[r + 4],
      ["enter", i, t],
      ["exit", i, t],
      ["enter", a, t],
      ["enter", s, t],
      ["exit", s, t],
      ["exit", a, t],
      e[e.length - 2],
      e[e.length - 1],
      ["exit", o, t],
    ];
  return e.splice(r, e.length - r + 1, ...l), e;
}
function Ge(e, t, n) {
  const r = this,
    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a,
    s = 0;
  return function (t) {
    return (
      e.enter("gfmFootnoteCall"),
      e.enter("gfmFootnoteCallLabelMarker"),
      e.consume(t),
      e.exit("gfmFootnoteCallLabelMarker"),
      l
    );
  };
  function l(t) {
    return 94 !== t
      ? n(t)
      : (e.enter("gfmFootnoteCallMarker"),
        e.consume(t),
        e.exit("gfmFootnoteCallMarker"),
        e.enter("gfmFootnoteCallString"),
        (e.enter("chunkString").contentType = "string"),
        c);
  }
  function c(l) {
    if (s > 999 || (93 === l && !a) || null === l || 91 === l || (0, i.Ee)(l))
      return n(l);
    if (93 === l) {
      e.exit("chunkString");
      const i = e.exit("gfmFootnoteCallString");
      return o.includes((0, x.B)(r.sliceSerialize(i)))
        ? (e.enter("gfmFootnoteCallLabelMarker"),
          e.consume(l),
          e.exit("gfmFootnoteCallLabelMarker"),
          e.exit("gfmFootnoteCall"),
          t)
        : n(l);
    }
    return (0, i.Ee)(l) || (a = !0), s++, e.consume(l), 92 === l ? u : c;
  }
  function u(t) {
    return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t);
  }
}
function We(e, t, n) {
  const r = this,
    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a,
    s,
    l = 0;
  return function (t) {
    return (
      (e.enter("gfmFootnoteDefinition")._container = !0),
      e.enter("gfmFootnoteDefinitionLabel"),
      e.enter("gfmFootnoteDefinitionLabelMarker"),
      e.consume(t),
      e.exit("gfmFootnoteDefinitionLabelMarker"),
      c
    );
  };
  function c(t) {
    return 94 === t
      ? (e.enter("gfmFootnoteDefinitionMarker"),
        e.consume(t),
        e.exit("gfmFootnoteDefinitionMarker"),
        e.enter("gfmFootnoteDefinitionLabelString"),
        (e.enter("chunkString").contentType = "string"),
        u)
      : n(t);
  }
  function u(t) {
    if (l > 999 || (93 === t && !s) || null === t || 91 === t || (0, i.Ee)(t))
      return n(t);
    if (93 === t) {
      e.exit("chunkString");
      const n = e.exit("gfmFootnoteDefinitionLabelString");
      return (
        (a = (0, x.B)(r.sliceSerialize(n))),
        e.enter("gfmFootnoteDefinitionLabelMarker"),
        e.consume(t),
        e.exit("gfmFootnoteDefinitionLabelMarker"),
        e.exit("gfmFootnoteDefinitionLabel"),
        p
      );
    }
    return (0, i.Ee)(t) || (s = !0), l++, e.consume(t), 92 === t ? d : u;
  }
  function d(t) {
    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, u) : u(t);
  }
  function p(t) {
    return 58 === t
      ? (e.enter("definitionMarker"),
        e.consume(t),
        e.exit("definitionMarker"),
        o.includes(a) || o.push(a),
        (0, ze.N)(e, f, "gfmFootnoteDefinitionWhitespace"))
      : n(t);
  }
  function f(e) {
    return t(e);
  }
}
function $e(e, t, n) {
  return e.check(Be.B, t, e.attempt(He, t, n));
}
function Ye(e) {
  e.exit("gfmFootnoteDefinition");
}
var Ke = n(43890 /* vendor/module-43890 */),
  Ze = n(23796 /* vendor/module-23796 */);
function Qe(e) {
  let t = (e || {}).singleTilde;
  const n = {
    name: "strikethrough",
    tokenize: function (e, n, r) {
      const o = this.previous,
        i = this.events;
      let a = 0;
      return function (t) {
        return 126 === o && "characterEscape" !== i[i.length - 1][1].type
          ? r(t)
          : (e.enter("strikethroughSequenceTemporary"), s(t));
      };
      function s(i) {
        const l = (0, Z.S)(o);
        if (126 === i) return a > 1 ? r(i) : (e.consume(i), a++, s);
        if (a < 2 && !t) return r(i);
        const c = e.exit("strikethroughSequenceTemporary"),
          u = (0, Z.S)(i);
        return (
          (c._open = !u || (2 === u && Boolean(l))),
          (c._close = !l || (2 === l && Boolean(u))),
          n(i)
        );
      }
    },
    resolveAll: function (e, t) {
      let n = -1;
      for (; ++n < e.length; )
        if (
          "enter" === e[n][0] &&
          "strikethroughSequenceTemporary" === e[n][1].type &&
          e[n][1]._close
        ) {
          let r = n;
          for (; r--; )
            if (
              "exit" === e[r][0] &&
              "strikethroughSequenceTemporary" === e[r][1].type &&
              e[r][1]._open &&
              e[n][1].end.offset - e[n][1].start.offset ===
                e[r][1].end.offset - e[r][1].start.offset
            ) {
              (e[n][1].type = "strikethroughSequence"),
                (e[r][1].type = "strikethroughSequence");
              const o = {
                  type: "strikethrough",
                  start: Object.assign({}, e[r][1].start),
                  end: Object.assign({}, e[n][1].end),
                },
                i = {
                  type: "strikethroughText",
                  start: Object.assign({}, e[r][1].end),
                  end: Object.assign({}, e[n][1].start),
                },
                a = [
                  ["enter", o, t],
                  ["enter", e[r][1], t],
                  ["exit", e[r][1], t],
                  ["enter", i, t],
                ],
                s = t.parser.constructs.insideSpan.null;
              s &&
                (0, Ke.m)(a, a.length, 0, (0, Ze.W)(s, e.slice(r + 1, n), t)),
                (0, Ke.m)(a, a.length, 0, [
                  ["exit", i, t],
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                  ["exit", o, t],
                ]),
                (0, Ke.m)(e, r - 1, n - r + 3, a),
                (n = r + a.length - 2);
              break;
            }
        }
      for (n = -1; ++n < e.length; )
        "strikethroughSequenceTemporary" === e[n][1].type &&
          (e[n][1].type = "data");
      return e;
    },
  };
  return (
    null == t && (t = !0),
    {
      text: { 126: n },
      insideSpan: { null: [n] },
      attentionMarkers: { null: [126] },
    }
  );
}
class Je {
  constructor() {
    this.map = [];
  }
  add(e, t, n) {
    !(function (e, t, n, r) {
      let o = 0;
      if (0 !== n || 0 !== r.length) {
        for (; o < e.map.length; ) {
          if (e.map[o][0] === t)
            return (e.map[o][1] += n), void e.map[o][2].push(...r);
          o += 1;
        }
        e.map.push([t, n, r]);
      }
    })(this, e, t, n);
  }
  consume(e) {
    if (
      (this.map.sort(function (e, t) {
        return e[0] - t[0];
      }),
      0 === this.map.length)
    )
      return;
    let t = this.map.length;
    const n = [];
    for (; t > 0; )
      (t -= 1),
        n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
        (e.length = this.map[t][0]);
    n.push(e.slice()), (e.length = 0);
    let r = n.pop();
    for (; r; ) {
      for (const t of r) e.push(t);
      r = n.pop();
    }
    this.map.length = 0;
  }
}
function Xe(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const o = e[t];
    if (n) {
      if ("enter" === o[0])
        "tableContent" === o[1].type &&
          r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
      else if ("tableContent" === o[1].type) {
        if ("tableDelimiterMarker" === e[t - 1][1].type) {
          const e = r.length - 1;
          r[e] = "left" === r[e] ? "center" : "right";
        }
      } else if ("tableDelimiterRow" === o[1].type) break;
    } else "enter" === o[0] && "tableDelimiterRow" === o[1].type && (n = !0);
    t += 1;
  }
  return r;
}
function et(e, t, n) {
  const r = this;
  let o,
    a = 0,
    s = 0;
  return function (e) {
    let t = r.events.length - 1;
    for (; t > -1; ) {
      const e = r.events[t][1].type;
      if ("lineEnding" !== e && "linePrefix" !== e) break;
      t--;
    }
    const o = t > -1 ? r.events[t][1].type : null,
      i = "tableHead" === o || "tableRow" === o ? _ : l;
    return i === _ && r.parser.lazy[r.now().line] ? n(e) : i(e);
  };
  function l(t) {
    return (
      e.enter("tableHead"),
      e.enter("tableRow"),
      (function (e) {
        return 124 === e || ((o = !0), (s += 1)), c(e);
      })(t)
    );
  }
  function c(t) {
    return null === t
      ? n(t)
      : (0, i.HP)(t)
        ? s > 1
          ? ((s = 0),
            (r.interrupt = !0),
            e.exit("tableRow"),
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            p)
          : n(t)
        : (0, i.On)(t)
          ? (0, ze.N)(e, c, "whitespace")(t)
          : ((s += 1),
            o && ((o = !1), (a += 1)),
            124 === t
              ? (e.enter("tableCellDivider"),
                e.consume(t),
                e.exit("tableCellDivider"),
                (o = !0),
                c)
              : (e.enter("data"), u(t)));
  }
  function u(t) {
    return null === t || 124 === t || (0, i.Ee)(t)
      ? (e.exit("data"), c(t))
      : (e.consume(t), 92 === t ? d : u);
  }
  function d(t) {
    return 92 === t || 124 === t ? (e.consume(t), u) : u(t);
  }
  function p(t) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? n(t)
        : (e.enter("tableDelimiterRow"),
          (o = !1),
          (0, i.On)(t)
            ? (0, ze.N)(
                e,
                f,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4,
              )(t)
            : f(t))
    );
  }
  function f(t) {
    return 45 === t || 58 === t
      ? m(t)
      : 124 === t
        ? ((o = !0),
          e.enter("tableCellDivider"),
          e.consume(t),
          e.exit("tableCellDivider"),
          h)
        : S(t);
  }
  function h(t) {
    return (0, i.On)(t) ? (0, ze.N)(e, m, "whitespace")(t) : m(t);
  }
  function m(t) {
    return 58 === t
      ? ((s += 1),
        (o = !0),
        e.enter("tableDelimiterMarker"),
        e.consume(t),
        e.exit("tableDelimiterMarker"),
        g)
      : 45 === t
        ? ((s += 1), g(t))
        : null === t || (0, i.HP)(t)
          ? b(t)
          : S(t);
  }
  function g(t) {
    return 45 === t ? (e.enter("tableDelimiterFiller"), y(t)) : S(t);
  }
  function y(t) {
    return 45 === t
      ? (e.consume(t), y)
      : 58 === t
        ? ((o = !0),
          e.exit("tableDelimiterFiller"),
          e.enter("tableDelimiterMarker"),
          e.consume(t),
          e.exit("tableDelimiterMarker"),
          v)
        : (e.exit("tableDelimiterFiller"), v(t));
  }
  function v(t) {
    return (0, i.On)(t) ? (0, ze.N)(e, b, "whitespace")(t) : b(t);
  }
  function b(n) {
    return 124 === n
      ? f(n)
      : (null === n || (0, i.HP)(n)) && o && a === s
        ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n))
        : S(n);
  }
  function S(e) {
    return n(e);
  }
  function _(t) {
    return e.enter("tableRow"), x(t);
  }
  function x(n) {
    return 124 === n
      ? (e.enter("tableCellDivider"),
        e.consume(n),
        e.exit("tableCellDivider"),
        x)
      : null === n || (0, i.HP)(n)
        ? (e.exit("tableRow"), t(n))
        : (0, i.On)(n)
          ? (0, ze.N)(e, x, "whitespace")(n)
          : (e.enter("data"), w(n));
  }
  function w(t) {
    return null === t || 124 === t || (0, i.Ee)(t)
      ? (e.exit("data"), x(t))
      : (e.consume(t), 92 === t ? E : w);
  }
  function E(t) {
    return 92 === t || 124 === t ? (e.consume(t), w) : w(t);
  }
}
function tt(e, t) {
  let n,
    r,
    o,
    i = -1,
    a = !0,
    s = 0,
    l = [0, 0, 0, 0],
    c = [0, 0, 0, 0],
    u = !1,
    d = 0;
  const p = new Je();
  for (; ++i < e.length; ) {
    const f = e[i],
      h = f[1];
    "enter" === f[0]
      ? "tableHead" === h.type
        ? ((u = !1),
          0 !== d && (rt(p, t, d, n, r), (r = void 0), (d = 0)),
          (n = {
            type: "table",
            start: Object.assign({}, h.start),
            end: Object.assign({}, h.end),
          }),
          p.add(i, 0, [["enter", n, t]]))
        : "tableRow" === h.type || "tableDelimiterRow" === h.type
          ? ((a = !0),
            (o = void 0),
            (l = [0, 0, 0, 0]),
            (c = [0, i + 1, 0, 0]),
            u &&
              ((u = !1),
              (r = {
                type: "tableBody",
                start: Object.assign({}, h.start),
                end: Object.assign({}, h.end),
              }),
              p.add(i, 0, [["enter", r, t]])),
            (s = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1))
          : !s ||
              ("data" !== h.type &&
                "tableDelimiterMarker" !== h.type &&
                "tableDelimiterFiller" !== h.type)
            ? "tableCellDivider" === h.type &&
              (a
                ? (a = !1)
                : (0 !== l[1] &&
                    ((c[0] = c[1]), (o = nt(p, t, l, s, void 0, o))),
                  (l = c),
                  (c = [l[1], i, 0, 0])))
            : ((a = !1),
              0 === c[2] &&
                (0 !== l[1] &&
                  ((c[0] = c[1]),
                  (o = nt(p, t, l, s, void 0, o)),
                  (l = [0, 0, 0, 0])),
                (c[2] = i)))
      : "tableHead" === h.type
        ? ((u = !0), (d = i))
        : "tableRow" === h.type || "tableDelimiterRow" === h.type
          ? ((d = i),
            0 !== l[1]
              ? ((c[0] = c[1]), (o = nt(p, t, l, s, i, o)))
              : 0 !== c[1] && (o = nt(p, t, c, s, i, o)),
            (s = 0))
          : !s ||
            ("data" !== h.type &&
              "tableDelimiterMarker" !== h.type &&
              "tableDelimiterFiller" !== h.type) ||
            (c[3] = i);
  }
  for (
    0 !== d && rt(p, t, d, n, r), p.consume(t.events), i = -1;
    ++i < t.events.length;

  ) {
    const e = t.events[i];
    "enter" === e[0] &&
      "table" === e[1].type &&
      (e[1]._align = Xe(t.events, i));
  }
  return e;
}
function nt(e, t, n, r, o, i) {
  const a = 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData";
  0 !== n[0] &&
    ((i.end = Object.assign({}, ot(t.events, n[0]))),
    e.add(n[0], 0, [["exit", i, t]]));
  const s = ot(t.events, n[1]);
  if (
    ((i = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, s),
    }),
    e.add(n[1], 0, [["enter", i, t]]),
    0 !== n[2])
  ) {
    const o = ot(t.events, n[2]),
      i = ot(t.events, n[3]),
      a = {
        type: "tableContent",
        start: Object.assign({}, o),
        end: Object.assign({}, i),
      };
    if ((e.add(n[2], 0, [["enter", a, t]]), 2 !== r)) {
      const r = t.events[n[2]],
        o = t.events[n[3]];
      if (
        ((r[1].end = Object.assign({}, o[1].end)),
        (r[1].type = "chunkText"),
        (r[1].contentType = "text"),
        n[3] > n[2] + 1)
      ) {
        const t = n[2] + 1,
          r = n[3] - n[2] - 1;
        e.add(t, r, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", a, t]]);
  }
  return (
    void 0 !== o &&
      ((i.end = Object.assign({}, ot(t.events, o))),
      e.add(o, 0, [["exit", i, t]]),
      (i = void 0)),
    i
  );
}
function rt(e, t, n, r, o) {
  const i = [],
    a = ot(t.events, n);
  o && ((o.end = Object.assign({}, a)), i.push(["exit", o, t])),
    (r.end = Object.assign({}, a)),
    i.push(["exit", r, t]),
    e.add(n + 1, 0, i);
}
function ot(e, t) {
  const n = e[t],
    r = "enter" === n[0] ? "start" : "end";
  return n[1][r];
}
const it = {
  name: "tasklistCheck",
  tokenize: function (e, t, n) {
    const r = this;
    return function (t) {
      return null === r.previous && r._gfmTasklistFirstContentOfListItem
        ? (e.enter("taskListCheck"),
          e.enter("taskListCheckMarker"),
          e.consume(t),
          e.exit("taskListCheckMarker"),
          o)
        : n(t);
    };
    function o(t) {
      return (0, i.Ee)(t)
        ? (e.enter("taskListCheckValueUnchecked"),
          e.consume(t),
          e.exit("taskListCheckValueUnchecked"),
          a)
        : 88 === t || 120 === t
          ? (e.enter("taskListCheckValueChecked"),
            e.consume(t),
            e.exit("taskListCheckValueChecked"),
            a)
          : n(t);
    }
    function a(t) {
      return 93 === t
        ? (e.enter("taskListCheckMarker"),
          e.consume(t),
          e.exit("taskListCheckMarker"),
          e.exit("taskListCheck"),
          s)
        : n(t);
    }
    function s(r) {
      return (0, i.HP)(r)
        ? t(r)
        : (0, i.On)(r)
          ? e.check({ tokenize: at }, t, n)(r)
          : n(r);
    }
  },
};
function at(e, t, n) {
  return (0, ze.N)(
    e,
    function (e) {
      return null === e ? n(e) : t(e);
    },
    "whitespace",
  );
}
const st = {};
function lt(e) {
  const t = e || st,
    n = this.data(),
    r = n.micromarkExtensions || (n.micromarkExtensions = []),
    o = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
    i = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
  r.push(
    (function (e) {
      return (0, Ee.y)([
        { text: Pe },
        {
          document: {
            91: {
              name: "gfmFootnoteDefinition",
              tokenize: We,
              continuation: { tokenize: $e },
              exit: Ye,
            },
          },
          text: {
            91: { name: "gfmFootnoteCall", tokenize: Ge },
            93: {
              name: "gfmPotentialFootnoteCall",
              add: "after",
              tokenize: Ve,
              resolveTo: qe,
            },
          },
        },
        Qe(e),
        {
          flow: {
            null: { name: "table", tokenize: et, resolveAll: tt },
          },
        },
        { text: { 91: it } },
      ]);
    })(t),
  ),
    o.push([
      {
        transforms: [v],
        enter: {
          literalAutolink: p,
          literalAutolinkEmail: f,
          literalAutolinkHttp: f,
          literalAutolinkWww: f,
        },
        exit: {
          literalAutolink: y,
          literalAutolinkEmail: g,
          literalAutolinkHttp: h,
          literalAutolinkWww: m,
        },
      },
      {
        enter: {
          gfmFootnoteCallString: w,
          gfmFootnoteCall: E,
          gfmFootnoteDefinitionLabelString: T,
          gfmFootnoteDefinition: k,
        },
        exit: {
          gfmFootnoteCallString: C,
          gfmFootnoteCall: I,
          gfmFootnoteDefinitionLabelString: A,
          gfmFootnoteDefinition: O,
        },
      },
      {
        canContainEols: ["delete"],
        enter: { strikethrough: j },
        exit: { strikethrough: L },
      },
      {
        enter: {
          table: fe,
          tableData: ye,
          tableHeader: ye,
          tableRow: me,
        },
        exit: {
          codeText: ve,
          table: he,
          tableData: ge,
          tableHeader: ge,
          tableRow: ge,
        },
      },
      {
        exit: {
          taskListCheckValueChecked: _e,
          taskListCheckValueUnchecked: _e,
          paragraph: xe,
        },
      },
    ]),
    i.push(
      (function (e) {
        return {
          extensions: [
            {
              unsafe: [
                {
                  character: "@",
                  before: "[+\\-.\\w]",
                  after: "[\\-.\\w]",
                  inConstruct: u,
                  notInConstruct: d,
                },
                {
                  character: ".",
                  before: "[Ww]",
                  after: "[\\-.\\w]",
                  inConstruct: u,
                  notInConstruct: d,
                },
                {
                  character: ":",
                  before: "[ps]",
                  after: "\\/",
                  inConstruct: u,
                  notInConstruct: d,
                },
              ],
            },
            M(e),
            {
              unsafe: [
                {
                  character: "~",
                  inConstruct: "phrasing",
                  notInConstruct: D,
                },
              ],
              handlers: { delete: F },
            },
            Se(e),
            {
              unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
              handlers: { listItem: we },
            },
          ],
        };
      })(t),
    );
}
