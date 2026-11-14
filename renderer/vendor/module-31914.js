// vendor/module-31914.js — webpack module 31914
// params: (e) = (module, exports, require)
e.exports = function (e) {
  const t = e.regex,
    n = {
      className: "subst",
      variants: [{ begin: "\\$[A-Za-z0-9_]+" }, { begin: /\$\{/, end: /\}/ }],
    },
    r = {
      className: "string",
      variants: [
        { begin: '"""', end: '"""' },
        {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        },
        {
          begin: '[a-z]+"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE, n],
        },
        {
          className: "string",
          begin: '[a-z]+"""',
          end: '"""',
          contains: [n],
          relevance: 10,
        },
      ],
    },
    o = {
      className: "type",
      begin: "\\b[A-Z][A-Za-z0-9_]*",
      relevance: 0,
    },
    i = {
      className: "title",
      begin:
        /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      relevance: 0,
    },
    a = {
      className: "class",
      beginKeywords: "class object trait type",
      end: /[:={\[\n;]/,
      excludeEnd: !0,
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        { beginKeywords: "extends with", relevance: 10 },
        {
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        i,
      ],
    },
    s = {
      className: "function",
      beginKeywords: "def",
      end: t.lookahead(/[:={\[(\n;]/),
      contains: [i],
    };
  return {
    name: "Scala",
    keywords: {
      literal: "true false null",
      keyword:
        "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent",
    },
    contains: [
      {
        begin: ["//>", /\s+/, /using/, /\s+/, /\S+/],
        beginScope: { 1: "comment", 3: "keyword", 5: "type" },
        end: /$/,
        contains: [{ className: "string", begin: /\S+/ }],
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      r,
      o,
      s,
      a,
      e.C_NUMBER_MODE,
      {
        begin: [/^\s*/, "extension", /\s+(?=[[(])/],
        beginScope: { 2: "keyword" },
      },
      {
        begin: [/^\s*/, /end/, /\s+/, /(extension\b)?/],
        beginScope: { 2: "keyword", 4: "keyword" },
      },
      { match: /\.inline\b/ },
      { begin: /\binline(?=\s)/, keywords: "inline" },
      {
        begin: [/\(\s*/, /using/, /\s+(?!\))/],
        beginScope: { 2: "keyword" },
      },
      { className: "meta", begin: "@[A-Za-z]+" },
    ],
  };
};
