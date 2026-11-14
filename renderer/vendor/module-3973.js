// vendor/module-3973.js — webpack module 3973
// params: (e) = (module, exports, require)
function t(e) {
  return (
    e instanceof Map
      ? (e.clear =
          e.delete =
          e.set =
            function () {
              throw new Error("map is read-only");
            })
      : e instanceof Set &&
        (e.add =
          e.clear =
          e.delete =
            function () {
              throw new Error("set is read-only");
            }),
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach((n) => {
      const r = e[n],
        o = typeof r;
      ("object" !== o && "function" !== o) || Object.isFrozen(r) || t(r);
    }),
    e
  );
}
class n {
  constructor(e) {
    void 0 === e.data && (e.data = {}),
      (this.data = e.data),
      (this.isMatchIgnored = !1);
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function r(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
function o(e, ...t) {
  const n = Object.create(null);
  for (const t in e) n[t] = e[t];
  return (
    t.forEach(function (e) {
      for (const t in e) n[t] = e[t];
    }),
    n
  );
}
const i = (e) => !!e.scope;
class a {
  constructor(e, t) {
    (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
  }
  addText(e) {
    this.buffer += r(e);
  }
  openNode(e) {
    if (!i(e)) return;
    const t = ((e, { prefix: t }) => {
      if (e.startsWith("language:")) return e.replace("language:", "language-");
      if (e.includes(".")) {
        const n = e.split(".");
        return [
          `${t}${n.shift()}`,
          ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`),
        ].join(" ");
      }
      return `${t}${e}`;
    })(e.scope, { prefix: this.classPrefix });
    this.span(t);
  }
  closeNode(e) {
    i(e) && (this.buffer += "</span>");
  }
  value() {
    return this.buffer;
  }
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const s = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class l {
  constructor() {
    (this.rootNode = s()), (this.stack = [this.rootNode]);
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(e) {
    this.top.children.push(e);
  }
  openNode(e) {
    const t = s({ scope: e });
    this.add(t), this.stack.push(t);
  }
  closeNode() {
    if (this.stack.length > 1) return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); );
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  static _walk(e, t) {
    return (
      "string" == typeof t
        ? e.addText(t)
        : t.children &&
          (e.openNode(t),
          t.children.forEach((t) => this._walk(e, t)),
          e.closeNode(t)),
      e
    );
  }
  static _collapse(e) {
    "string" != typeof e &&
      e.children &&
      (e.children.every((e) => "string" == typeof e)
        ? (e.children = [e.children.join("")])
        : e.children.forEach((e) => {
            l._collapse(e);
          }));
  }
}
class c extends l {
  constructor(e) {
    super(), (this.options = e);
  }
  addText(e) {
    "" !== e && this.add(e);
  }
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  __addSublanguage(e, t) {
    const n = e.root;
    t && (n.scope = `language:${t}`), this.add(n);
  }
  toHTML() {
    return new a(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function u(e) {
  return e ? ("string" == typeof e ? e : e.source) : null;
}
function d(e) {
  return h("(?=", e, ")");
}
function p(e) {
  return h("(?:", e, ")*");
}
function f(e) {
  return h("(?:", e, ")?");
}
function h(...e) {
  return e.map((e) => u(e)).join("");
}
function m(...e) {
  const t = (function (e) {
    const t = e[e.length - 1];
    return "object" == typeof t && t.constructor === Object
      ? (e.splice(e.length - 1, 1), t)
      : {};
  })(e);
  return "(" + (t.capture ? "" : "?:") + e.map((e) => u(e)).join("|") + ")";
}
function g(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
const y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function v(e, { joinWith: t }) {
  let n = 0;
  return e
    .map((e) => {
      n += 1;
      const t = n;
      let r = u(e),
        o = "";
      for (; r.length > 0; ) {
        const e = y.exec(r);
        if (!e) {
          o += r;
          break;
        }
        (o += r.substring(0, e.index)),
          (r = r.substring(e.index + e[0].length)),
          "\\" === e[0][0] && e[1]
            ? (o += "\\" + String(Number(e[1]) + t))
            : ((o += e[0]), "(" === e[0] && n++);
      }
      return o;
    })
    .map((e) => `(${e})`)
    .join(t);
}
const b = "[a-zA-Z]\\w*",
  S = "[a-zA-Z_]\\w*",
  _ = "\\b\\d+(\\.\\d+)?",
  x = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
  w = "\\b(0b[01]+)",
  E = { begin: "\\\\[\\s\\S]", relevance: 0 },
  T = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [E],
  },
  k = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [E],
  },
  C = function (e, t, n = {}) {
    const r = o({ scope: "comment", begin: e, end: t, contains: [] }, n);
    r.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0,
    });
    const i = m(
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/,
    );
    return (
      r.contains.push({
        begin: h(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
      }),
      r
    );
  },
  I = C("//", "$"),
  A = C("/\\*", "\\*/"),
  O = C("#", "$"),
  R = { scope: "number", begin: _, relevance: 0 },
  M = { scope: "number", begin: x, relevance: 0 },
  P = { scope: "number", begin: w, relevance: 0 },
  N = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [E, { begin: /\[/, end: /\]/, relevance: 0, contains: [E] }],
  },
  D = { scope: "title", begin: b, relevance: 0 },
  j = { scope: "title", begin: S, relevance: 0 },
  L = { begin: "\\.\\s*" + S, relevance: 0 };
var F = Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: T,
  BACKSLASH_ESCAPE: E,
  BINARY_NUMBER_MODE: P,
  BINARY_NUMBER_RE: w,
  COMMENT: C,
  C_BLOCK_COMMENT_MODE: A,
  C_LINE_COMMENT_MODE: I,
  C_NUMBER_MODE: M,
  C_NUMBER_RE: x,
  END_SAME_AS_BEGIN: function (e) {
    return Object.assign(e, {
      "on:begin": (e, t) => {
        t.data._beginMatch = e[1];
      },
      "on:end": (e, t) => {
        t.data._beginMatch !== e[1] && t.ignoreMatch();
      },
    });
  },
  HASH_COMMENT_MODE: O,
  IDENT_RE: b,
  MATCH_NOTHING_RE: /\b\B/,
  METHOD_GUARD: L,
  NUMBER_MODE: R,
  NUMBER_RE: _,
  PHRASAL_WORDS_MODE: {
    begin:
      /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  },
  QUOTE_STRING_MODE: k,
  REGEXP_MODE: N,
  RE_STARTERS_RE:
    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
  SHEBANG: (e = {}) => {
    const t = /^#![ ]*\//;
    return (
      e.binary && (e.begin = h(t, /.*\b/, e.binary, /\b.*/)),
      o(
        {
          scope: "meta",
          begin: t,
          end: /$/,
          relevance: 0,
          "on:begin": (e, t) => {
            0 !== e.index && t.ignoreMatch();
          },
        },
        e,
      )
    );
  },
  TITLE_MODE: D,
  UNDERSCORE_IDENT_RE: S,
  UNDERSCORE_TITLE_MODE: j,
});
function U(e, t) {
  "." === e.input[e.index - 1] && t.ignoreMatch();
}
function B(e, t) {
  void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function z(e, t) {
  t &&
    e.beginKeywords &&
    ((e.begin =
      "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
    (e.__beforeBegin = U),
    (e.keywords = e.keywords || e.beginKeywords),
    delete e.beginKeywords,
    void 0 === e.relevance && (e.relevance = 0));
}
function H(e, t) {
  Array.isArray(e.illegal) && (e.illegal = m(...e.illegal));
}
function V(e, t) {
  if (e.match) {
    if (e.begin || e.end)
      throw new Error("begin & end are not supported with match");
    (e.begin = e.match), delete e.match;
  }
}
function q(e, t) {
  void 0 === e.relevance && (e.relevance = 1);
}
const G = (e, t) => {
    if (!e.beforeMatch) return;
    if (e.starts) throw new Error("beforeMatch cannot be used with starts");
    const n = Object.assign({}, e);
    Object.keys(e).forEach((t) => {
      delete e[t];
    }),
      (e.keywords = n.keywords),
      (e.begin = h(n.beforeMatch, d(n.begin))),
      (e.starts = {
        relevance: 0,
        contains: [Object.assign(n, { endsParent: !0 })],
      }),
      (e.relevance = 0),
      delete n.beforeMatch;
  },
  W = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value",
  ];
function $(e, t, n = "keyword") {
  const r = Object.create(null);
  return (
    "string" == typeof e
      ? o(n, e.split(" "))
      : Array.isArray(e)
        ? o(n, e)
        : Object.keys(e).forEach(function (n) {
            Object.assign(r, $(e[n], t, n));
          }),
    r
  );
  function o(e, n) {
    t && (n = n.map((e) => e.toLowerCase())),
      n.forEach(function (t) {
        const n = t.split("|");
        r[n[0]] = [e, Y(n[0], n[1])];
      });
  }
}
function Y(e, t) {
  return t
    ? Number(t)
    : (function (e) {
          return W.includes(e.toLowerCase());
        })(e)
      ? 0
      : 1;
}
const K = {},
  Z = (e, t) => {
    K[`${e}/${t}`] || (K[`${e}/${t}`] = !0);
  },
  Q = new Error();
function J(e, t, { key: n }) {
  let r = 0;
  const o = e[n],
    i = {},
    a = {};
  for (let e = 1; e <= t.length; e++)
    (a[e + r] = o[e]), (i[e + r] = !0), (r += g(t[e - 1]));
  (e[n] = a), (e[n]._emit = i), (e[n]._multi = !0);
}
function X(e) {
  !(function (e) {
    e.scope &&
      "object" == typeof e.scope &&
      null !== e.scope &&
      ((e.beginScope = e.scope), delete e.scope);
  })(e),
    "string" == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
    "string" == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
    (function (e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw Q;
        if ("object" != typeof e.beginScope || null === e.beginScope) throw Q;
        J(e, e.begin, { key: "beginScope" }),
          (e.begin = v(e.begin, { joinWith: "" }));
      }
    })(e),
    (function (e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw Q;
        if ("object" != typeof e.endScope || null === e.endScope) throw Q;
        J(e, e.end, { key: "endScope" }), (e.end = v(e.end, { joinWith: "" }));
      }
    })(e);
}
function ee(e) {
  function t(t, n) {
    return new RegExp(
      u(t),
      "m" +
        (e.case_insensitive ? "i" : "") +
        (e.unicodeRegex ? "u" : "") +
        (n ? "g" : ""),
    );
  }
  class n {
    constructor() {
      (this.matchIndexes = {}),
        (this.regexes = []),
        (this.matchAt = 1),
        (this.position = 0);
    }
    addRule(e, t) {
      (t.position = this.position++),
        (this.matchIndexes[this.matchAt] = t),
        this.regexes.push([t, e]),
        (this.matchAt += g(e) + 1);
    }
    compile() {
      0 === this.regexes.length && (this.exec = () => null);
      const e = this.regexes.map((e) => e[1]);
      (this.matcherRe = t(v(e, { joinWith: "|" }), !0)), (this.lastIndex = 0);
    }
    exec(e) {
      this.matcherRe.lastIndex = this.lastIndex;
      const t = this.matcherRe.exec(e);
      if (!t) return null;
      const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
        r = this.matchIndexes[n];
      return t.splice(0, n), Object.assign(t, r);
    }
  }
  class r {
    constructor() {
      (this.rules = []),
        (this.multiRegexes = []),
        (this.count = 0),
        (this.lastIndex = 0),
        (this.regexIndex = 0);
    }
    getMatcher(e) {
      if (this.multiRegexes[e]) return this.multiRegexes[e];
      const t = new n();
      return (
        this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
        t.compile(),
        (this.multiRegexes[e] = t),
        t
      );
    }
    resumingScanAtSamePosition() {
      return 0 !== this.regexIndex;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(e, t) {
      this.rules.push([e, t]), "begin" === t.type && this.count++;
    }
    exec(e) {
      const t = this.getMatcher(this.regexIndex);
      t.lastIndex = this.lastIndex;
      let n = t.exec(e);
      if (this.resumingScanAtSamePosition())
        if (n && n.index === this.lastIndex);
        else {
          const t = this.getMatcher(0);
          (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
        }
      return (
        n &&
          ((this.regexIndex += n.position + 1),
          this.regexIndex === this.count && this.considerAll()),
        n
      );
    }
  }
  if (
    (e.compilerExtensions || (e.compilerExtensions = []),
    e.contains && e.contains.includes("self"))
  )
    throw new Error(
      "ERR: contains `self` is not supported at the top-level of a language.  See documentation.",
    );
  return (
    (e.classNameAliases = o(e.classNameAliases || {})),
    (function n(i, a) {
      const s = i;
      if (i.isCompiled) return s;
      [B, V, X, G].forEach((e) => e(i, a)),
        e.compilerExtensions.forEach((e) => e(i, a)),
        (i.__beforeBegin = null),
        [z, H, q].forEach((e) => e(i, a)),
        (i.isCompiled = !0);
      let l = null;
      return (
        "object" == typeof i.keywords &&
          i.keywords.$pattern &&
          ((i.keywords = Object.assign({}, i.keywords)),
          (l = i.keywords.$pattern),
          delete i.keywords.$pattern),
        (l = l || /\w+/),
        i.keywords && (i.keywords = $(i.keywords, e.case_insensitive)),
        (s.keywordPatternRe = t(l, !0)),
        a &&
          (i.begin || (i.begin = /\B|\b/),
          (s.beginRe = t(s.begin)),
          i.end || i.endsWithParent || (i.end = /\B|\b/),
          i.end && (s.endRe = t(s.end)),
          (s.terminatorEnd = u(s.end) || ""),
          i.endsWithParent &&
            a.terminatorEnd &&
            (s.terminatorEnd += (i.end ? "|" : "") + a.terminatorEnd)),
        i.illegal && (s.illegalRe = t(i.illegal)),
        i.contains || (i.contains = []),
        (i.contains = [].concat(
          ...i.contains.map(function (e) {
            return (function (e) {
              return (
                e.variants &&
                  !e.cachedVariants &&
                  (e.cachedVariants = e.variants.map(function (t) {
                    return o(e, { variants: null }, t);
                  })),
                e.cachedVariants
                  ? e.cachedVariants
                  : te(e)
                    ? o(e, { starts: e.starts ? o(e.starts) : null })
                    : Object.isFrozen(e)
                      ? o(e)
                      : e
              );
            })("self" === e ? i : e);
          }),
        )),
        i.contains.forEach(function (e) {
          n(e, s);
        }),
        i.starts && n(i.starts, a),
        (s.matcher = (function (e) {
          const t = new r();
          return (
            e.contains.forEach((e) =>
              t.addRule(e.begin, { rule: e, type: "begin" }),
            ),
            e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }),
            e.illegal && t.addRule(e.illegal, { type: "illegal" }),
            t
          );
        })(s)),
        s
      );
    })(e)
  );
}
function te(e) {
  return !!e && (e.endsWithParent || te(e.starts));
}
class ne extends Error {
  constructor(e, t) {
    super(e), (this.name = "HTMLInjectionError"), (this.html = t);
  }
}
const re = r,
  oe = o,
  ie = Symbol("nomatch"),
  ae = function (e) {
    const r = Object.create(null),
      o = Object.create(null),
      i = [];
    let a = !0;
    const s =
        "Could not find the language '{}', did you forget to load/include a language module?",
      l = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let u = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: c,
    };
    function g(e) {
      return u.noHighlightRe.test(e);
    }
    function y(e, t, n) {
      let r = "",
        o = "";
      "object" == typeof t
        ? ((r = e), (n = t.ignoreIllegals), (o = t.language))
        : (Z("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
          Z(
            "10.7.0",
            "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277",
          ),
          (o = e),
          (r = t)),
        void 0 === n && (n = !0);
      const i = { code: r, language: o };
      k("before:highlight", i);
      const a = i.result ? i.result : v(i.language, i.code, n);
      return (a.code = i.code), k("after:highlight", a), a;
    }
    function v(e, t, o, i) {
      const l = Object.create(null);
      function c(e, t) {
        return e.keywords[t];
      }
      function d() {
        if (!C.keywords) return void A.addText(O);
        let e = 0;
        C.keywordPatternRe.lastIndex = 0;
        let t = C.keywordPatternRe.exec(O),
          n = "";
        for (; t; ) {
          n += O.substring(e, t.index);
          const r = E.case_insensitive ? t[0].toLowerCase() : t[0],
            o = c(C, r);
          if (o) {
            const [e, i] = o;
            if (
              (A.addText(n),
              (n = ""),
              (l[r] = (l[r] || 0) + 1),
              l[r] <= 7 && (R += i),
              e.startsWith("_"))
            )
              n += t[0];
            else {
              const n = E.classNameAliases[e] || e;
              f(t[0], n);
            }
          } else n += t[0];
          (e = C.keywordPatternRe.lastIndex), (t = C.keywordPatternRe.exec(O));
        }
        (n += O.substring(e)), A.addText(n);
      }
      function p() {
        null != C.subLanguage
          ? (function () {
              if ("" === O) return;
              let e = null;
              if ("string" == typeof C.subLanguage) {
                if (!r[C.subLanguage]) return void A.addText(O);
                (e = v(C.subLanguage, O, !0, I[C.subLanguage])),
                  (I[C.subLanguage] = e._top);
              } else e = b(O, C.subLanguage.length ? C.subLanguage : null);
              C.relevance > 0 && (R += e.relevance),
                A.__addSublanguage(e._emitter, e.language);
            })()
          : d(),
          (O = "");
      }
      function f(e, t) {
        "" !== e && (A.startScope(t), A.addText(e), A.endScope());
      }
      function h(e, t) {
        let n = 1;
        const r = t.length - 1;
        for (; n <= r; ) {
          if (!e._emit[n]) {
            n++;
            continue;
          }
          const r = E.classNameAliases[e[n]] || e[n],
            o = t[n];
          r ? f(o, r) : ((O = o), d(), (O = "")), n++;
        }
      }
      function m(e, t) {
        return (
          e.scope &&
            "string" == typeof e.scope &&
            A.openNode(E.classNameAliases[e.scope] || e.scope),
          e.beginScope &&
            (e.beginScope._wrap
              ? (f(
                  O,
                  E.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap,
                ),
                (O = ""))
              : e.beginScope._multi && (h(e.beginScope, t), (O = ""))),
          (C = Object.create(e, { parent: { value: C } })),
          C
        );
      }
      function g(e, t, r) {
        let o = (function (e, t) {
          const n = e && e.exec(t);
          return n && 0 === n.index;
        })(e.endRe, r);
        if (o) {
          if (e["on:end"]) {
            const r = new n(e);
            e["on:end"](t, r), r.isMatchIgnored && (o = !1);
          }
          if (o) {
            for (; e.endsParent && e.parent; ) e = e.parent;
            return e;
          }
        }
        if (e.endsWithParent) return g(e.parent, t, r);
      }
      function y(e) {
        return 0 === C.matcher.regexIndex ? ((O += e[0]), 1) : ((N = !0), 0);
      }
      function S(e) {
        const n = e[0],
          r = t.substring(e.index),
          o = g(C, e, r);
        if (!o) return ie;
        const i = C;
        C.endScope && C.endScope._wrap
          ? (p(), f(n, C.endScope._wrap))
          : C.endScope && C.endScope._multi
            ? (p(), h(C.endScope, e))
            : i.skip
              ? (O += n)
              : (i.returnEnd || i.excludeEnd || (O += n),
                p(),
                i.excludeEnd && (O = n));
        do {
          C.scope && A.closeNode(),
            C.skip || C.subLanguage || (R += C.relevance),
            (C = C.parent);
        } while (C !== o.parent);
        return o.starts && m(o.starts, e), i.returnEnd ? 0 : n.length;
      }
      let _ = {};
      function x(r, i) {
        const s = i && i[0];
        if (((O += r), null == s)) return p(), 0;
        if (
          "begin" === _.type &&
          "end" === i.type &&
          _.index === i.index &&
          "" === s
        ) {
          if (((O += t.slice(i.index, i.index + 1)), !a)) {
            const t = new Error(`0 width match regex (${e})`);
            throw ((t.languageName = e), (t.badRule = _.rule), t);
          }
          return 1;
        }
        if (((_ = i), "begin" === i.type))
          return (function (e) {
            const t = e[0],
              r = e.rule,
              o = new n(r),
              i = [r.__beforeBegin, r["on:begin"]];
            for (const n of i)
              if (n && (n(e, o), o.isMatchIgnored)) return y(t);
            return (
              r.skip
                ? (O += t)
                : (r.excludeBegin && (O += t),
                  p(),
                  r.returnBegin || r.excludeBegin || (O = t)),
              m(r, e),
              r.returnBegin ? 0 : t.length
            );
          })(i);
        if ("illegal" === i.type && !o) {
          const e = new Error(
            'Illegal lexeme "' +
              s +
              '" for mode "' +
              (C.scope || "<unnamed>") +
              '"',
          );
          throw ((e.mode = C), e);
        }
        if ("end" === i.type) {
          const e = S(i);
          if (e !== ie) return e;
        }
        if ("illegal" === i.type && "" === s) return (O += "\n"), 1;
        if (P > 1e5 && P > 3 * i.index)
          throw new Error(
            "potential infinite loop, way more iterations than matches",
          );
        return (O += s), s.length;
      }
      const E = w(e);
      if (!E)
        throw (s.replace("{}", e), new Error('Unknown language: "' + e + '"'));
      const T = ee(E);
      let k = "",
        C = i || T;
      const I = {},
        A = new u.__emitter(u);
      !(function () {
        const e = [];
        for (let t = C; t !== E; t = t.parent) t.scope && e.unshift(t.scope);
        e.forEach((e) => A.openNode(e));
      })();
      let O = "",
        R = 0,
        M = 0,
        P = 0,
        N = !1;
      try {
        if (E.__emitTokens) E.__emitTokens(t, A);
        else {
          for (C.matcher.considerAll(); ; ) {
            P++,
              N ? (N = !1) : C.matcher.considerAll(),
              (C.matcher.lastIndex = M);
            const e = C.matcher.exec(t);
            if (!e) break;
            const n = x(t.substring(M, e.index), e);
            M = e.index + n;
          }
          x(t.substring(M));
        }
        return (
          A.finalize(),
          (k = A.toHTML()),
          {
            language: e,
            value: k,
            relevance: R,
            illegal: !1,
            _emitter: A,
            _top: C,
          }
        );
      } catch (n) {
        if (n.message && n.message.includes("Illegal"))
          return {
            language: e,
            value: re(t),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: n.message,
              index: M,
              context: t.slice(M - 100, M + 100),
              mode: n.mode,
              resultSoFar: k,
            },
            _emitter: A,
          };
        if (a)
          return {
            language: e,
            value: re(t),
            illegal: !1,
            relevance: 0,
            errorRaised: n,
            _emitter: A,
            _top: C,
          };
        throw n;
      }
    }
    function b(e, t) {
      t = t || u.languages || Object.keys(r);
      const n = (function (e) {
          const t = {
            value: re(e),
            illegal: !1,
            relevance: 0,
            _top: l,
            _emitter: new u.__emitter(u),
          };
          return t._emitter.addText(e), t;
        })(e),
        o = t
          .filter(w)
          .filter(T)
          .map((t) => v(t, e, !1));
      o.unshift(n);
      const i = o.sort((e, t) => {
          if (e.relevance !== t.relevance) return t.relevance - e.relevance;
          if (e.language && t.language) {
            if (w(e.language).supersetOf === t.language) return 1;
            if (w(t.language).supersetOf === e.language) return -1;
          }
          return 0;
        }),
        [a, s] = i,
        c = a;
      return (c.secondBest = s), c;
    }
    function S(e) {
      let t = null;
      const n = (function (e) {
        let t = e.className + " ";
        t += e.parentNode ? e.parentNode.className : "";
        const n = u.languageDetectRe.exec(t);
        if (n) {
          const e = w(n[1]);
          return e || s.replace("{}", n[1]), e ? n[1] : "no-highlight";
        }
        return t.split(/\s+/).find((e) => g(e) || w(e));
      })(e);
      if (g(n)) return;
      if (
        (k("before:highlightElement", { el: e, language: n }),
        e.dataset.highlighted)
      )
        return;
      if (
        e.children.length > 0 &&
        (u.ignoreUnescapedHTML, u.throwUnescapedHTML)
      )
        throw new ne(
          "One of your code blocks includes unescaped HTML.",
          e.innerHTML,
        );
      t = e;
      const r = t.textContent,
        i = n ? y(r, { language: n, ignoreIllegals: !0 }) : b(r);
      (e.innerHTML = i.value),
        (e.dataset.highlighted = "yes"),
        (function (e, t, n) {
          const r = (t && o[t]) || n;
          e.classList.add("hljs"), e.classList.add(`language-${r}`);
        })(e, n, i.language),
        (e.result = {
          language: i.language,
          re: i.relevance,
          relevance: i.relevance,
        }),
        i.secondBest &&
          (e.secondBest = {
            language: i.secondBest.language,
            relevance: i.secondBest.relevance,
          }),
        k("after:highlightElement", { el: e, result: i, text: r });
    }
    let _ = !1;
    function x() {
      if ("loading" === document.readyState)
        return (
          _ ||
            window.addEventListener(
              "DOMContentLoaded",
              function () {
                x();
              },
              !1,
            ),
          void (_ = !0)
        );
      document.querySelectorAll(u.cssSelector).forEach(S);
    }
    function w(e) {
      return (e = (e || "").toLowerCase()), r[e] || r[o[e]];
    }
    function E(e, { languageName: t }) {
      "string" == typeof e && (e = [e]),
        e.forEach((e) => {
          o[e.toLowerCase()] = t;
        });
    }
    function T(e) {
      const t = w(e);
      return t && !t.disableAutodetect;
    }
    function k(e, t) {
      const n = e;
      i.forEach(function (e) {
        e[n] && e[n](t);
      });
    }
    Object.assign(e, {
      highlight: y,
      highlightAuto: b,
      highlightAll: x,
      highlightElement: S,
      highlightBlock: function (e) {
        return (
          Z("10.7.0", "highlightBlock will be removed entirely in v12.0"),
          Z("10.7.0", "Please use highlightElement now."),
          S(e)
        );
      },
      configure: function (e) {
        u = oe(u, e);
      },
      initHighlighting: () => {
        x(),
          Z(
            "10.6.0",
            "initHighlighting() deprecated.  Use highlightAll() now.",
          );
      },
      initHighlightingOnLoad: function () {
        x(),
          Z(
            "10.6.0",
            "initHighlightingOnLoad() deprecated.  Use highlightAll() now.",
          );
      },
      registerLanguage: function (t, n) {
        let o = null;
        try {
          o = n(e);
        } catch (e) {
          if (
            ("Language definition for '{}' could not be registered.".replace(
              "{}",
              t,
            ),
            !a)
          )
            throw e;
          o = l;
        }
        o.name || (o.name = t),
          (r[t] = o),
          (o.rawDefinition = n.bind(null, e)),
          o.aliases && E(o.aliases, { languageName: t });
      },
      unregisterLanguage: function (e) {
        delete r[e];
        for (const t of Object.keys(o)) o[t] === e && delete o[t];
      },
      listLanguages: function () {
        return Object.keys(r);
      },
      getLanguage: w,
      registerAliases: E,
      autoDetection: T,
      inherit: oe,
      addPlugin: function (e) {
        !(function (e) {
          e["before:highlightBlock"] &&
            !e["before:highlightElement"] &&
            (e["before:highlightElement"] = (t) => {
              e["before:highlightBlock"](Object.assign({ block: t.el }, t));
            }),
            e["after:highlightBlock"] &&
              !e["after:highlightElement"] &&
              (e["after:highlightElement"] = (t) => {
                e["after:highlightBlock"](Object.assign({ block: t.el }, t));
              });
        })(e),
          i.push(e);
      },
      removePlugin: function (e) {
        const t = i.indexOf(e);
        -1 !== t && i.splice(t, 1);
      },
    }),
      (e.debugMode = function () {
        a = !1;
      }),
      (e.safeMode = function () {
        a = !0;
      }),
      (e.versionString = "11.11.1"),
      (e.regex = {
        concat: h,
        lookahead: d,
        either: m,
        optional: f,
        anyNumberOfTimes: p,
      });
    for (const e in F) "object" == typeof F[e] && t(F[e]);
    return Object.assign(e, F), e;
  },
  se = ae({});
(se.newInstance = () => ae({})),
  (e.exports = se),
  (se.HighlightJS = se),
  (se.default = se);
