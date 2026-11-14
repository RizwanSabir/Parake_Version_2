// vendor/module-73113.js — webpack module 73113
// params: (e) = (module, exports, require)
const t = "[A-Za-z$_][0-9A-Za-z$_]*",
  n = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    "using",
  ],
  r = ["true", "false", "null", "undefined", "NaN", "Infinity"],
  o = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly",
  ],
  i = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
  ],
  a = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
  ],
  s = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global",
  ],
  l = [].concat(a, o, i);
e.exports = function (e) {
  const c = e.regex,
    u = t,
    d = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (e, t) => {
        const n = e[0].length + e.index,
          r = e.input[n];
        if ("<" === r || "," === r) return void t.ignoreMatch();
        let o;
        ">" === r &&
          (((e, { after: t }) => {
            const n = "</" + e[0].slice(1);
            return -1 !== e.input.indexOf(n, t);
          })(e, { after: n }) ||
            t.ignoreMatch());
        const i = e.input.substring(n);
        ((o = i.match(/^\s*=/)) ||
          ((o = i.match(/^\s+extends\s+/)) && 0 === o.index)) &&
          t.ignoreMatch();
      },
    },
    p = {
      $pattern: t,
      keyword: n,
      literal: r,
      built_in: l,
      "variable.language": s,
    },
    f = "[0-9](_?[0-9])*",
    h = `\\.(${f})`,
    m = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
    g = {
      className: "number",
      variants: [
        {
          begin: `(\\b(${m})((${h})|\\.)?|(${h}))[eE][+-]?(${f})\\b`,
        },
        { begin: `\\b(${m})\\b((${h})\\b|\\.)?|(${h})\\b` },
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        { begin: "\\b0[0-7]+n?\\b" },
      ],
      relevance: 0,
    },
    y = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: p,
      contains: [],
    },
    v = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, y],
        subLanguage: "xml",
      },
    },
    b = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, y],
        subLanguage: "css",
      },
    },
    S = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, y],
        subLanguage: "graphql",
      },
    },
    _ = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, y],
    },
    x = {
      className: "comment",
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                { className: "doctag", begin: "@[A-Za-z]+" },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: "variable",
                  begin: u + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    w = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      v,
      b,
      S,
      _,
      { match: /\$\d+/ },
      g,
    ];
  y.contains = w.concat({
    begin: /\{/,
    end: /\}/,
    keywords: p,
    contains: ["self"].concat(w),
  });
  const E = [].concat(x, y.contains),
    T = E.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: p,
        contains: ["self"].concat(E),
      },
    ]),
    k = {
      className: "params",
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: p,
      contains: T,
    },
    C = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            u,
            /\s+/,
            /extends/,
            /\s+/,
            c.concat(u, "(", c.concat(/\./, u), ")*"),
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited",
          },
        },
        {
          match: [/class/, /\s+/, u],
          scope: { 1: "keyword", 3: "title.class" },
        },
      ],
    },
    I = {
      relevance: 0,
      match: c.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: "title.class",
      keywords: { _: [...o, ...i] },
    },
    A = {
      variants: [
        { match: [/function/, /\s+/, u, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: "keyword", 3: "title.function" },
      label: "func.def",
      contains: [k],
      illegal: /%/,
    },
    O = {
      match: c.concat(
        /\b/,
        ((R = [...a, "super", "import"].map((e) => `${e}\\s*\\(`)),
        c.concat("(?!", R.join("|"), ")")),
        u,
        c.lookahead(/\s*\(/),
      ),
      className: "title.function",
      relevance: 0,
    };
  var R;
  const M = {
      begin: c.concat(/\./, c.lookahead(c.concat(u, /(?![0-9A-Za-z$_(])/))),
      end: u,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0,
    },
    P = {
      match: [/get|set/, /\s+/, u, /(?=\()/],
      className: { 1: "keyword", 3: "title.function" },
      contains: [{ begin: /\(\)/ }, k],
    },
    N =
      "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
      e.UNDERSCORE_IDENT_RE +
      ")\\s*=>",
    D = {
      match: [
        /const|var|let/,
        /\s+/,
        u,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        c.lookahead(N),
      ],
      keywords: "async",
      className: { 1: "keyword", 3: "title.function" },
      contains: [k],
    };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: p,
    exports: { PARAMS_CONTAINS: T, CLASS_REFERENCE: I },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
      {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/,
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      v,
      b,
      S,
      _,
      x,
      { match: /\$\d+/ },
      g,
      I,
      { scope: "attr", match: u + c.lookahead(":"), relevance: 0 },
      D,
      {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          x,
          e.REGEXP_MODE,
          {
            className: "function",
            begin: N,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: p,
                    contains: T,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: "<>", end: "</>" },
              { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
              {
                begin: d.begin,
                "on:begin": d.isTrulyOpeningTag,
                end: d.end,
              },
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: d.begin,
                end: d.end,
                skip: !0,
                contains: ["self"],
              },
            ],
          },
        ],
      },
      A,
      { beginKeywords: "while if switch catch for" },
      {
        begin:
          "\\b(?!function)" +
          e.UNDERSCORE_IDENT_RE +
          "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        label: "func.def",
        contains: [
          k,
          e.inherit(e.TITLE_MODE, {
            begin: u,
            className: "title.function",
          }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      M,
      { match: "\\$" + u, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [k],
      },
      O,
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant",
      },
      C,
      P,
      { match: /\$[(.]/ },
    ],
  };
};
