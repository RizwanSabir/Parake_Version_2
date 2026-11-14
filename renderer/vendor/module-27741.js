// vendor/module-27741.js — webpack module 27741
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { W6: () => Xt, GZ: () => te, lT: () => Pt, O6: () => At });
var i = r(50320 /* vendor/module-50320 */),
  o = r(72514 /* vendor/module-72514 */),
  n = r(8679 /* vendor/module-8679 */),
  a = r(27166 /* vendor/module-27166 */),
  s = r(79456 /* vendor/module-79456 */);
var l = {
  async: !1,
  breaks: !1,
  extensions: null,
  gfm: !0,
  hooks: null,
  pedantic: !1,
  renderer: null,
  silent: !1,
  tokenizer: null,
  walkTokens: null,
};
function h(t) {
  l = t;
}
var c = { exec: () => null };
function d(t, e = "") {
  let r = "string" == typeof t ? t : t.source,
    i = {
      replace: (t, e) => {
        let o = "string" == typeof e ? e : e.source;
        return (o = o.replace(p.caret, "$1")), (r = r.replace(t, o)), i;
      },
      getRegex: () => new RegExp(r, e),
    };
  return i;
}
var u = (() => {
    try {
      return !!new RegExp("(?<=1)(?<!1)");
    } catch {
      return !1;
    }
  })(),
  p = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (t) =>
      new RegExp(`^( {0,3}${t})((?:[\t ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (t) =>
      new RegExp(
        `^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`,
      ),
    hrRegex: (t) =>
      new RegExp(
        `^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
      ),
    fencesBeginRegex: (t) =>
      new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
    htmlBeginRegex: (t) =>
      new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i"),
  },
  g = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  f = /(?:[*+-]|\d{1,9}[.)])/,
  y =
    /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  m = d(y)
    .replace(/bull/g, f)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/\|table/g, "")
    .getRegex(),
  x = d(y)
    .replace(/bull/g, f)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
    .getRegex(),
  C =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  b = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  k = d(
    /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
  )
    .replace("label", b)
    .replace(
      "title",
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    )
    .getRegex(),
  w = d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, f)
    .getRegex(),
  S =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  T = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  B = d(
    "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))",
    "i",
  )
    .replace("comment", T)
    .replace("tag", S)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  v = d(C)
    .replace("hr", g)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("|lheading", "")
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
    )
    .replace("tag", S)
    .getRegex(),
  _ = {
    blockquote: d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", v)
      .getRegex(),
    code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    def: k,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    hr: g,
    html: B,
    lheading: m,
    list: w,
    newline: /^(?:[ \t]*(?:\n|$))+/,
    paragraph: v,
    table: c,
    text: /^[^\n]+/,
  },
  A = d(
    "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  )
    .replace("hr", g)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("blockquote", " {0,3}>")
    .replace("code", "(?: {4}| {0,3}\t)[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
    )
    .replace("tag", S)
    .getRegex(),
  F = {
    ..._,
    lheading: x,
    table: A,
    paragraph: d(C)
      .replace("hr", g)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("table", A)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
      )
      .replace("tag", S)
      .getRegex(),
  },
  L = {
    ..._,
    html: d(
      "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
    )
      .replace("comment", T)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: c,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: d(C)
      .replace("hr", g)
      .replace("heading", " *#{1,6} *[^\n]")
      .replace("lheading", m)
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .replace("|tag", "")
      .getRegex(),
  },
  M = /^( {2,}|\\)\n(?!\s*$)/,
  $ = /[\p{P}\p{S}]/u,
  E = /[\s\p{P}\p{S}]/u,
  O = /[^\s\p{P}\p{S}]/u,
  D = d(/^((?![*_])punctSpace)/, "u")
    .replace(/punctSpace/g, E)
    .getRegex(),
  I = /(?!~)[\p{P}\p{S}]/u,
  K = d(/link|precode-code|html/, "g")
    .replace(
      "link",
      /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
    )
    .replace("precode-", u ? "(?<!`)()" : "(^^|[^`])")
    .replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/)
    .replace("html", /<(?! )[^<>]*?>/)
    .getRegex(),
  q = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
  P = d(q, "u").replace(/punct/g, $).getRegex(),
  R = d(q, "u").replace(/punct/g, I).getRegex(),
  z =
    "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  N = d(z, "gu")
    .replace(/notPunctSpace/g, O)
    .replace(/punctSpace/g, E)
    .replace(/punct/g, $)
    .getRegex(),
  W = d(z, "gu")
    .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
    .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
    .replace(/punct/g, I)
    .getRegex(),
  j = d(
    "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
    "gu",
  )
    .replace(/notPunctSpace/g, O)
    .replace(/punctSpace/g, E)
    .replace(/punct/g, $)
    .getRegex(),
  H = d(/\\(punct)/, "gu")
    .replace(/punct/g, $)
    .getRegex(),
  U = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      "email",
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    )
    .getRegex(),
  Y = d(T).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
  G = d(
    "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  )
    .replace("comment", Y)
    .replace(
      "attribute",
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  X = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,
  V = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/)
    .replace("label", X)
    .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
    .replace(
      "title",
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
    )
    .getRegex(),
  Z = d(/^!?\[(label)\]\[(ref)\]/)
    .replace("label", X)
    .replace("ref", b)
    .getRegex(),
  Q = d(/^!?\[(ref)\](?:\[\])?/)
    .replace("ref", b)
    .getRegex(),
  J = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  tt = {
    _backpedal: c,
    anyPunctuation: H,
    autolink: U,
    blockSkip: K,
    br: M,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    del: c,
    emStrongLDelim: P,
    emStrongRDelimAst: N,
    emStrongRDelimUnd: j,
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    link: V,
    nolink: Q,
    punctuation: D,
    reflink: Z,
    reflinkSearch: d("reflink|nolink(?!\\()", "g")
      .replace("reflink", Z)
      .replace("nolink", Q)
      .getRegex(),
    tag: G,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    url: c,
  },
  et = {
    ...tt,
    link: d(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", X)
      .getRegex(),
    reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", X)
      .getRegex(),
  },
  rt = {
    ...tt,
    emStrongRDelimAst: W,
    emStrongLDelim: R,
    url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
      .replace("protocol", J)
      .replace(
        "email",
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      )
      .getRegex(),
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: d(
      /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    )
      .replace("protocol", J)
      .getRegex(),
  },
  it = {
    ...rt,
    br: d(M).replace("{2,}", "*").getRegex(),
    text: d(rt.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  },
  ot = { normal: _, gfm: F, pedantic: L },
  nt = { normal: tt, gfm: rt, breaks: it, pedantic: et },
  at = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  st = (t) => at[t];
function lt(t, e) {
  if (e) {
    if (p.escapeTest.test(t)) return t.replace(p.escapeReplace, st);
  } else if (p.escapeTestNoEncode.test(t))
    return t.replace(p.escapeReplaceNoEncode, st);
  return t;
}
function ht(t) {
  try {
    t = encodeURI(t).replace(p.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function ct(t, e) {
  let r = t
      .replace(p.findPipe, (t, e, r) => {
        let i = !1,
          o = e;
        for (; --o >= 0 && "\\" === r[o]; ) i = !i;
        return i ? "|" : " |";
      })
      .split(p.splitPipe),
    i = 0;
  if (
    (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), e)
  )
    if (r.length > e) r.splice(e);
    else for (; r.length < e; ) r.push("");
  for (; i < r.length; i++) r[i] = r[i].trim().replace(p.slashPipe, "|");
  return r;
}
function dt(t, e, r) {
  let i = t.length;
  if (0 === i) return "";
  let o = 0;
  for (; o < i; ) {
    let n = t.charAt(i - o - 1);
    if (n !== e || r) {
      if (n === e || !r) break;
      o++;
    } else o++;
  }
  return t.slice(0, i - o);
}
function ut(t, e, r, i, o) {
  let n = e.href,
    a = e.title || null,
    s = t[1].replace(o.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = {
    type: "!" === t[0].charAt(0) ? "image" : "link",
    raw: r,
    href: n,
    title: a,
    text: s,
    tokens: i.inlineTokens(s),
  };
  return (i.state.inLink = !1), l;
}
var pt = class {
    options;
    rules;
    lexer;
    constructor(t) {
      this.options = t || l;
    }
    space(t) {
      let e = this.rules.block.newline.exec(t);
      if (e && e[0].length > 0) return { type: "space", raw: e[0] };
    }
    code(t) {
      let e = this.rules.block.code.exec(t);
      if (e) {
        let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: e[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? t : dt(t, "\n"),
        };
      }
    }
    fences(t) {
      let e = this.rules.block.fences.exec(t);
      if (e) {
        let t = e[0],
          r = (function (t, e, r) {
            let i = t.match(r.other.indentCodeCompensation);
            if (null === i) return e;
            let o = i[1];
            return e
              .split("\n")
              .map((t) => {
                let e = t.match(r.other.beginningSpace);
                if (null === e) return t;
                let [i] = e;
                return i.length >= o.length ? t.slice(o.length) : t;
              })
              .join("\n");
          })(t, e[3] || "", this.rules);
        return {
          type: "code",
          raw: t,
          lang: e[2]
            ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
            : e[2],
          text: r,
        };
      }
    }
    heading(t) {
      let e = this.rules.block.heading.exec(t);
      if (e) {
        let t = e[2].trim();
        if (this.rules.other.endingHash.test(t)) {
          let e = dt(t, "#");
          (this.options.pedantic ||
            !e ||
            this.rules.other.endingSpaceChar.test(e)) &&
            (t = e.trim());
        }
        return {
          type: "heading",
          raw: e[0],
          depth: e[1].length,
          text: t,
          tokens: this.lexer.inline(t),
        };
      }
    }
    hr(t) {
      let e = this.rules.block.hr.exec(t);
      if (e) return { type: "hr", raw: dt(e[0], "\n") };
    }
    blockquote(t) {
      let e = this.rules.block.blockquote.exec(t);
      if (e) {
        let t = dt(e[0], "\n").split("\n"),
          r = "",
          i = "",
          o = [];
        for (; t.length > 0; ) {
          let e,
            n = !1,
            a = [];
          for (e = 0; e < t.length; e++)
            if (this.rules.other.blockquoteStart.test(t[e]))
              a.push(t[e]), (n = !0);
            else {
              if (n) break;
              a.push(t[e]);
            }
          t = t.slice(e);
          let s = a.join("\n"),
            l = s
              .replace(this.rules.other.blockquoteSetextReplace, "\n    $1")
              .replace(this.rules.other.blockquoteSetextReplace2, "");
          (r = r ? `${r}\n${s}` : s), (i = i ? `${i}\n${l}` : l);
          let h = this.lexer.state.top;
          if (
            ((this.lexer.state.top = !0),
            this.lexer.blockTokens(l, o, !0),
            (this.lexer.state.top = h),
            0 === t.length)
          )
            break;
          let c = o.at(-1);
          if ("code" === c?.type) break;
          if ("blockquote" === c?.type) {
            let e = c,
              n = e.raw + "\n" + t.join("\n"),
              a = this.blockquote(n);
            (o[o.length - 1] = a),
              (r = r.substring(0, r.length - e.raw.length) + a.raw),
              (i = i.substring(0, i.length - e.text.length) + a.text);
            break;
          }
          if ("list" === c?.type) {
            let e = c,
              n = e.raw + "\n" + t.join("\n"),
              a = this.list(n);
            (o[o.length - 1] = a),
              (r = r.substring(0, r.length - c.raw.length) + a.raw),
              (i = i.substring(0, i.length - e.raw.length) + a.raw),
              (t = n.substring(o.at(-1).raw.length).split("\n"));
            continue;
          }
        }
        return { type: "blockquote", raw: r, tokens: o, text: i };
      }
    }
    list(t) {
      let e = this.rules.block.list.exec(t);
      if (e) {
        let r = e[1].trim(),
          i = r.length > 1,
          o = {
            type: "list",
            raw: "",
            ordered: i,
            start: i ? +r.slice(0, -1) : "",
            loose: !1,
            items: [],
          };
        (r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
          this.options.pedantic && (r = i ? r : "[*+-]");
        let n = this.rules.other.listItemRegex(r),
          a = !1;
        for (; t; ) {
          let r = !1,
            i = "",
            s = "";
          if (!(e = n.exec(t)) || this.rules.block.hr.test(t)) break;
          (i = e[0]), (t = t.substring(i.length));
          let l = e[2]
              .split("\n", 1)[0]
              .replace(this.rules.other.listReplaceTabs, (t) =>
                " ".repeat(3 * t.length),
              ),
            h = t.split("\n", 1)[0],
            c = !l.trim(),
            d = 0;
          if (
            (this.options.pedantic
              ? ((d = 2), (s = l.trimStart()))
              : c
                ? (d = e[1].length + 1)
                : ((d = e[2].search(this.rules.other.nonSpaceChar)),
                  (d = d > 4 ? 1 : d),
                  (s = l.slice(d)),
                  (d += e[1].length)),
            c &&
              this.rules.other.blankLine.test(h) &&
              ((i += h + "\n"), (t = t.substring(h.length + 1)), (r = !0)),
            !r)
          ) {
            let e = this.rules.other.nextBulletRegex(d),
              r = this.rules.other.hrRegex(d),
              o = this.rules.other.fencesBeginRegex(d),
              n = this.rules.other.headingBeginRegex(d),
              a = this.rules.other.htmlBeginRegex(d);
            for (; t; ) {
              let u,
                p = t.split("\n", 1)[0];
              if (
                ((h = p),
                this.options.pedantic
                  ? ((h = h.replace(this.rules.other.listReplaceNesting, "  ")),
                    (u = h))
                  : (u = h.replace(this.rules.other.tabCharGlobal, "    ")),
                o.test(h) || n.test(h) || a.test(h) || e.test(h) || r.test(h))
              )
                break;
              if (u.search(this.rules.other.nonSpaceChar) >= d || !h.trim())
                s += "\n" + u.slice(d);
              else {
                if (
                  c ||
                  l
                    .replace(this.rules.other.tabCharGlobal, "    ")
                    .search(this.rules.other.nonSpaceChar) >= 4 ||
                  o.test(l) ||
                  n.test(l) ||
                  r.test(l)
                )
                  break;
                s += "\n" + h;
              }
              !c && !h.trim() && (c = !0),
                (i += p + "\n"),
                (t = t.substring(p.length + 1)),
                (l = u.slice(d));
            }
          }
          o.loose ||
            (a
              ? (o.loose = !0)
              : this.rules.other.doubleBlankLine.test(i) && (a = !0));
          let u,
            p = null;
          this.options.gfm &&
            ((p = this.rules.other.listIsTask.exec(s)),
            p &&
              ((u = "[ ] " !== p[0]),
              (s = s.replace(this.rules.other.listReplaceTask, "")))),
            o.items.push({
              type: "list_item",
              raw: i,
              task: !!p,
              checked: u,
              loose: !1,
              text: s,
              tokens: [],
            }),
            (o.raw += i);
        }
        let s = o.items.at(-1);
        if (!s) return;
        (s.raw = s.raw.trimEnd()),
          (s.text = s.text.trimEnd()),
          (o.raw = o.raw.trimEnd());
        for (let t = 0; t < o.items.length; t++)
          if (
            ((this.lexer.state.top = !1),
            (o.items[t].tokens = this.lexer.blockTokens(o.items[t].text, [])),
            !o.loose)
          ) {
            let e = o.items[t].tokens.filter((t) => "space" === t.type),
              r =
                e.length > 0 &&
                e.some((t) => this.rules.other.anyLine.test(t.raw));
            o.loose = r;
          }
        if (o.loose)
          for (let t = 0; t < o.items.length; t++) o.items[t].loose = !0;
        return o;
      }
    }
    html(t) {
      let e = this.rules.block.html.exec(t);
      if (e)
        return {
          type: "html",
          block: !0,
          raw: e[0],
          pre: "pre" === e[1] || "script" === e[1] || "style" === e[1],
          text: e[0],
        };
    }
    def(t) {
      let e = this.rules.block.def.exec(t);
      if (e) {
        let t = e[1]
            .toLowerCase()
            .replace(this.rules.other.multipleSpaceGlobal, " "),
          r = e[2]
            ? e[2]
                .replace(this.rules.other.hrefBrackets, "$1")
                .replace(this.rules.inline.anyPunctuation, "$1")
            : "",
          i = e[3]
            ? e[3]
                .substring(1, e[3].length - 1)
                .replace(this.rules.inline.anyPunctuation, "$1")
            : e[3];
        return { type: "def", tag: t, raw: e[0], href: r, title: i };
      }
    }
    table(t) {
      let e = this.rules.block.table.exec(t);
      if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
      let r = ct(e[1]),
        i = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
        o = e[3]?.trim()
          ? e[3].replace(this.rules.other.tableRowBlankLine, "").split("\n")
          : [],
        n = { type: "table", raw: e[0], header: [], align: [], rows: [] };
      if (r.length === i.length) {
        for (let t of i)
          this.rules.other.tableAlignRight.test(t)
            ? n.align.push("right")
            : this.rules.other.tableAlignCenter.test(t)
              ? n.align.push("center")
              : this.rules.other.tableAlignLeft.test(t)
                ? n.align.push("left")
                : n.align.push(null);
        for (let t = 0; t < r.length; t++)
          n.header.push({
            text: r[t],
            tokens: this.lexer.inline(r[t]),
            header: !0,
            align: n.align[t],
          });
        for (let t of o)
          n.rows.push(
            ct(t, n.header.length).map((t, e) => ({
              text: t,
              tokens: this.lexer.inline(t),
              header: !1,
              align: n.align[e],
            })),
          );
        return n;
      }
    }
    lheading(t) {
      let e = this.rules.block.lheading.exec(t);
      if (e)
        return {
          type: "heading",
          raw: e[0],
          depth: "=" === e[2].charAt(0) ? 1 : 2,
          text: e[1],
          tokens: this.lexer.inline(e[1]),
        };
    }
    paragraph(t) {
      let e = this.rules.block.paragraph.exec(t);
      if (e) {
        let t =
          "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1];
        return {
          type: "paragraph",
          raw: e[0],
          text: t,
          tokens: this.lexer.inline(t),
        };
      }
    }
    text(t) {
      let e = this.rules.block.text.exec(t);
      if (e)
        return {
          type: "text",
          raw: e[0],
          text: e[0],
          tokens: this.lexer.inline(e[0]),
        };
    }
    escape(t) {
      let e = this.rules.inline.escape.exec(t);
      if (e) return { type: "escape", raw: e[0], text: e[1] };
    }
    tag(t) {
      let e = this.rules.inline.tag.exec(t);
      if (e)
        return (
          !this.lexer.state.inLink && this.rules.other.startATag.test(e[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              this.rules.other.endATag.test(e[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock &&
          this.rules.other.startPreScriptTag.test(e[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              this.rules.other.endPreScriptTag.test(e[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: "html",
            raw: e[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: e[0],
          }
        );
    }
    link(t) {
      let e = this.rules.inline.link.exec(t);
      if (e) {
        let t = e[2].trim();
        if (
          !this.options.pedantic &&
          this.rules.other.startAngleBracket.test(t)
        ) {
          if (!this.rules.other.endAngleBracket.test(t)) return;
          let e = dt(t.slice(0, -1), "\\");
          if ((t.length - e.length) % 2 == 0) return;
        } else {
          let t = (function (t, e) {
            if (-1 === t.indexOf(e[1])) return -1;
            let r = 0;
            for (let i = 0; i < t.length; i++)
              if ("\\" === t[i]) i++;
              else if (t[i] === e[0]) r++;
              else if (t[i] === e[1] && (r--, r < 0)) return i;
            return r > 0 ? -2 : -1;
          })(e[2], "()");
          if (-2 === t) return;
          if (t > -1) {
            let r = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + t;
            (e[2] = e[2].substring(0, t)),
              (e[0] = e[0].substring(0, r).trim()),
              (e[3] = "");
          }
        }
        let r = e[2],
          i = "";
        if (this.options.pedantic) {
          let t = this.rules.other.pedanticHrefTitle.exec(r);
          t && ((r = t[1]), (i = t[3]));
        } else i = e[3] ? e[3].slice(1, -1) : "";
        return (
          (r = r.trim()),
          this.rules.other.startAngleBracket.test(r) &&
            (r =
              this.options.pedantic && !this.rules.other.endAngleBracket.test(t)
                ? r.slice(1)
                : r.slice(1, -1)),
          ut(
            e,
            {
              href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
              title: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
            },
            e[0],
            this.lexer,
            this.rules,
          )
        );
      }
    }
    reflink(t, e) {
      let r;
      if (
        (r = this.rules.inline.reflink.exec(t)) ||
        (r = this.rules.inline.nolink.exec(t))
      ) {
        let t =
          e[
            (r[2] || r[1])
              .replace(this.rules.other.multipleSpaceGlobal, " ")
              .toLowerCase()
          ];
        if (!t) {
          let t = r[0].charAt(0);
          return { type: "text", raw: t, text: t };
        }
        return ut(r, t, r[0], this.lexer, this.rules);
      }
    }
    emStrong(t, e, r = "") {
      let i = this.rules.inline.emStrongLDelim.exec(t);
      if (
        !(!i || (i[3] && r.match(this.rules.other.unicodeAlphaNumeric))) &&
        ((!i[1] && !i[2]) || !r || this.rules.inline.punctuation.exec(r))
      ) {
        let r,
          o,
          n = [...i[0]].length - 1,
          a = n,
          s = 0,
          l =
            "*" === i[0][0]
              ? this.rules.inline.emStrongRDelimAst
              : this.rules.inline.emStrongRDelimUnd;
        for (
          l.lastIndex = 0, e = e.slice(-1 * t.length + n);
          null != (i = l.exec(e));

        ) {
          if (((r = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !r))
            continue;
          if (((o = [...r].length), i[3] || i[4])) {
            a += o;
            continue;
          }
          if ((i[5] || i[6]) && n % 3 && !((n + o) % 3)) {
            s += o;
            continue;
          }
          if (((a -= o), a > 0)) continue;
          o = Math.min(o, o + a + s);
          let e = [...i[0]][0].length,
            l = t.slice(0, n + i.index + e + o);
          if (Math.min(n, o) % 2) {
            let t = l.slice(1, -1);
            return {
              type: "em",
              raw: l,
              text: t,
              tokens: this.lexer.inlineTokens(t),
            };
          }
          let h = l.slice(2, -2);
          return {
            type: "strong",
            raw: l,
            text: h,
            tokens: this.lexer.inlineTokens(h),
          };
        }
      }
    }
    codespan(t) {
      let e = this.rules.inline.code.exec(t);
      if (e) {
        let t = e[2].replace(this.rules.other.newLineCharGlobal, " "),
          r = this.rules.other.nonSpaceChar.test(t),
          i =
            this.rules.other.startingSpaceChar.test(t) &&
            this.rules.other.endingSpaceChar.test(t);
        return (
          r && i && (t = t.substring(1, t.length - 1)),
          { type: "codespan", raw: e[0], text: t }
        );
      }
    }
    br(t) {
      let e = this.rules.inline.br.exec(t);
      if (e) return { type: "br", raw: e[0] };
    }
    del(t) {
      let e = this.rules.inline.del.exec(t);
      if (e)
        return {
          type: "del",
          raw: e[0],
          text: e[2],
          tokens: this.lexer.inlineTokens(e[2]),
        };
    }
    autolink(t) {
      let e = this.rules.inline.autolink.exec(t);
      if (e) {
        let t, r;
        return (
          "@" === e[2]
            ? ((t = e[1]), (r = "mailto:" + t))
            : ((t = e[1]), (r = t)),
          {
            type: "link",
            raw: e[0],
            text: t,
            href: r,
            tokens: [{ type: "text", raw: t, text: t }],
          }
        );
      }
    }
    url(t) {
      let e;
      if ((e = this.rules.inline.url.exec(t))) {
        let t, r;
        if ("@" === e[2]) (t = e[0]), (r = "mailto:" + t);
        else {
          let i;
          do {
            (i = e[0]),
              (e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "");
          } while (i !== e[0]);
          (t = e[0]), (r = "www." === e[1] ? "http://" + e[0] : e[0]);
        }
        return {
          type: "link",
          raw: e[0],
          text: t,
          href: r,
          tokens: [{ type: "text", raw: t, text: t }],
        };
      }
    }
    inlineText(t) {
      let e = this.rules.inline.text.exec(t);
      if (e) {
        let t = this.lexer.state.inRawBlock;
        return { type: "text", raw: e[0], text: e[0], escaped: t };
      }
    }
  },
  gt = class t {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(t) {
      (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = t || l),
        (this.options.tokenizer = this.options.tokenizer || new pt()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      let e = { other: p, block: ot.normal, inline: nt.normal };
      this.options.pedantic
        ? ((e.block = ot.pedantic), (e.inline = nt.pedantic))
        : this.options.gfm &&
          ((e.block = ot.gfm),
          this.options.breaks ? (e.inline = nt.breaks) : (e.inline = nt.gfm)),
        (this.tokenizer.rules = e);
    }
    static get rules() {
      return { block: ot, inline: nt };
    }
    static lex(e, r) {
      return new t(r).lex(e);
    }
    static lexInline(e, r) {
      return new t(r).inlineTokens(e);
    }
    lex(t) {
      (t = t.replace(p.carriageReturn, "\n")), this.blockTokens(t, this.tokens);
      for (let t = 0; t < this.inlineQueue.length; t++) {
        let e = this.inlineQueue[t];
        this.inlineTokens(e.src, e.tokens);
      }
      return (this.inlineQueue = []), this.tokens;
    }
    blockTokens(t, e = [], r = !1) {
      for (
        this.options.pedantic &&
        (t = t.replace(p.tabCharGlobal, "    ").replace(p.spaceLine, ""));
        t;

      ) {
        let i;
        if (
          this.options.extensions?.block?.some(
            (r) =>
              !!(i = r.call({ lexer: this }, t, e)) &&
              ((t = t.substring(i.raw.length)), e.push(i), !0),
          )
        )
          continue;
        if ((i = this.tokenizer.space(t))) {
          t = t.substring(i.raw.length);
          let r = e.at(-1);
          1 === i.raw.length && void 0 !== r ? (r.raw += "\n") : e.push(i);
          continue;
        }
        if ((i = this.tokenizer.code(t))) {
          t = t.substring(i.raw.length);
          let r = e.at(-1);
          "paragraph" === r?.type || "text" === r?.type
            ? ((r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw),
              (r.text += "\n" + i.text),
              (this.inlineQueue.at(-1).src = r.text))
            : e.push(i);
          continue;
        }
        if ((i = this.tokenizer.fences(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.heading(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.hr(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.blockquote(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.list(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.html(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.def(t))) {
          t = t.substring(i.raw.length);
          let r = e.at(-1);
          "paragraph" === r?.type || "text" === r?.type
            ? ((r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw),
              (r.text += "\n" + i.raw),
              (this.inlineQueue.at(-1).src = r.text))
            : this.tokens.links[i.tag] ||
              ((this.tokens.links[i.tag] = {
                href: i.href,
                title: i.title,
              }),
              e.push(i));
          continue;
        }
        if ((i = this.tokenizer.table(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        if ((i = this.tokenizer.lheading(t))) {
          (t = t.substring(i.raw.length)), e.push(i);
          continue;
        }
        let o = t;
        if (this.options.extensions?.startBlock) {
          let e,
            r = 1 / 0,
            i = t.slice(1);
          this.options.extensions.startBlock.forEach((t) => {
            (e = t.call({ lexer: this }, i)),
              "number" == typeof e && e >= 0 && (r = Math.min(r, e));
          }),
            r < 1 / 0 && r >= 0 && (o = t.substring(0, r + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(o))) {
          let n = e.at(-1);
          r && "paragraph" === n?.type
            ? ((n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw),
              (n.text += "\n" + i.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = n.text))
            : e.push(i),
            (r = o.length !== t.length),
            (t = t.substring(i.raw.length));
          continue;
        }
        if ((i = this.tokenizer.text(t))) {
          t = t.substring(i.raw.length);
          let r = e.at(-1);
          "text" === r?.type
            ? ((r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw),
              (r.text += "\n" + i.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = r.text))
            : e.push(i);
          continue;
        }
        if (t) {
          let e = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) break;
          throw new Error(e);
        }
      }
      return (this.state.top = !0), e;
    }
    inline(t, e = []) {
      return this.inlineQueue.push({ src: t, tokens: e }), e;
    }
    inlineTokens(t, e = []) {
      let r,
        i = t,
        o = null;
      if (this.tokens.links) {
        let t = Object.keys(this.tokens.links);
        if (t.length > 0)
          for (
            ;
            null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(i));

          )
            t.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) &&
              (i =
                i.slice(0, o.index) +
                "[" +
                "a".repeat(o[0].length - 2) +
                "]" +
                i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (o = this.tokenizer.rules.inline.anyPunctuation.exec(i)); )
        i =
          i.slice(0, o.index) +
          "++" +
          i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(i)); )
        (r = o[2] ? o[2].length : 0),
          (i =
            i.slice(0, o.index + r) +
            "[" +
            "a".repeat(o[0].length - r - 2) +
            "]" +
            i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex));
      i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
      let n = !1,
        a = "";
      for (; t; ) {
        let r;
        if (
          (n || (a = ""),
          (n = !1),
          this.options.extensions?.inline?.some(
            (i) =>
              !!(r = i.call({ lexer: this }, t, e)) &&
              ((t = t.substring(r.raw.length)), e.push(r), !0),
          ))
        )
          continue;
        if ((r = this.tokenizer.escape(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.tag(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.link(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.reflink(t, this.tokens.links))) {
          t = t.substring(r.raw.length);
          let i = e.at(-1);
          "text" === r.type && "text" === i?.type
            ? ((i.raw += r.raw), (i.text += r.text))
            : e.push(r);
          continue;
        }
        if ((r = this.tokenizer.emStrong(t, i, a))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.codespan(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.br(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.del(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if ((r = this.tokenizer.autolink(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(t))) {
          (t = t.substring(r.raw.length)), e.push(r);
          continue;
        }
        let o = t;
        if (this.options.extensions?.startInline) {
          let e,
            r = 1 / 0,
            i = t.slice(1);
          this.options.extensions.startInline.forEach((t) => {
            (e = t.call({ lexer: this }, i)),
              "number" == typeof e && e >= 0 && (r = Math.min(r, e));
          }),
            r < 1 / 0 && r >= 0 && (o = t.substring(0, r + 1));
        }
        if ((r = this.tokenizer.inlineText(o))) {
          (t = t.substring(r.raw.length)),
            "_" !== r.raw.slice(-1) && (a = r.raw.slice(-1)),
            (n = !0);
          let i = e.at(-1);
          "text" === i?.type
            ? ((i.raw += r.raw), (i.text += r.text))
            : e.push(r);
          continue;
        }
        if (t) {
          let e = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) break;
          throw new Error(e);
        }
      }
      return e;
    }
  },
  ft = class {
    options;
    parser;
    constructor(t) {
      this.options = t || l;
    }
    space(t) {
      return "";
    }
    code({ text: t, lang: e, escaped: r }) {
      let i = (e || "").match(p.notSpaceStart)?.[0],
        o = t.replace(p.endingNewline, "") + "\n";
      return i
        ? '<pre><code class="language-' +
            lt(i) +
            '">' +
            (r ? o : lt(o, !0)) +
            "</code></pre>\n"
        : "<pre><code>" + (r ? o : lt(o, !0)) + "</code></pre>\n";
    }
    blockquote({ tokens: t }) {
      return `<blockquote>\n${this.parser.parse(t)}</blockquote>\n`;
    }
    html({ text: t }) {
      return t;
    }
    def(t) {
      return "";
    }
    heading({ tokens: t, depth: e }) {
      return `<h${e}>${this.parser.parseInline(t)}</h${e}>\n`;
    }
    hr(t) {
      return "<hr>\n";
    }
    list(t) {
      let e = t.ordered,
        r = t.start,
        i = "";
      for (let e = 0; e < t.items.length; e++) {
        let r = t.items[e];
        i += this.listitem(r);
      }
      let o = e ? "ol" : "ul";
      return (
        "<" +
        o +
        (e && 1 !== r ? ' start="' + r + '"' : "") +
        ">\n" +
        i +
        "</" +
        o +
        ">\n"
      );
    }
    listitem(t) {
      let e = "";
      if (t.task) {
        let r = this.checkbox({ checked: !!t.checked });
        t.loose
          ? "paragraph" === t.tokens[0]?.type
            ? ((t.tokens[0].text = r + " " + t.tokens[0].text),
              t.tokens[0].tokens &&
                t.tokens[0].tokens.length > 0 &&
                "text" === t.tokens[0].tokens[0].type &&
                ((t.tokens[0].tokens[0].text =
                  r + " " + lt(t.tokens[0].tokens[0].text)),
                (t.tokens[0].tokens[0].escaped = !0)))
            : t.tokens.unshift({
                type: "text",
                raw: r + " ",
                text: r + " ",
                escaped: !0,
              })
          : (e += r + " ");
      }
      return (e += this.parser.parse(t.tokens, !!t.loose)), `<li>${e}</li>\n`;
    }
    checkbox({ checked: t }) {
      return (
        "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
      );
    }
    paragraph({ tokens: t }) {
      return `<p>${this.parser.parseInline(t)}</p>\n`;
    }
    table(t) {
      let e = "",
        r = "";
      for (let e = 0; e < t.header.length; e++)
        r += this.tablecell(t.header[e]);
      e += this.tablerow({ text: r });
      let i = "";
      for (let e = 0; e < t.rows.length; e++) {
        let o = t.rows[e];
        r = "";
        for (let t = 0; t < o.length; t++) r += this.tablecell(o[t]);
        i += this.tablerow({ text: r });
      }
      return (
        i && (i = `<tbody>${i}</tbody>`),
        "<table>\n<thead>\n" + e + "</thead>\n" + i + "</table>\n"
      );
    }
    tablerow({ text: t }) {
      return `<tr>\n${t}</tr>\n`;
    }
    tablecell(t) {
      let e = this.parser.parseInline(t.tokens),
        r = t.header ? "th" : "td";
      return (
        (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>\n`
      );
    }
    strong({ tokens: t }) {
      return `<strong>${this.parser.parseInline(t)}</strong>`;
    }
    em({ tokens: t }) {
      return `<em>${this.parser.parseInline(t)}</em>`;
    }
    codespan({ text: t }) {
      return `<code>${lt(t, !0)}</code>`;
    }
    br(t) {
      return "<br>";
    }
    del({ tokens: t }) {
      return `<del>${this.parser.parseInline(t)}</del>`;
    }
    link({ href: t, title: e, tokens: r }) {
      let i = this.parser.parseInline(r),
        o = ht(t);
      if (null === o) return i;
      let n = '<a href="' + (t = o) + '"';
      return e && (n += ' title="' + lt(e) + '"'), (n += ">" + i + "</a>"), n;
    }
    image({ href: t, title: e, text: r, tokens: i }) {
      i && (r = this.parser.parseInline(i, this.parser.textRenderer));
      let o = ht(t);
      if (null === o) return lt(r);
      let n = `<img src="${(t = o)}" alt="${r}"`;
      return e && (n += ` title="${lt(e)}"`), (n += ">"), n;
    }
    text(t) {
      return "tokens" in t && t.tokens
        ? this.parser.parseInline(t.tokens)
        : "escaped" in t && t.escaped
          ? t.text
          : lt(t.text);
    }
  },
  yt = class {
    strong({ text: t }) {
      return t;
    }
    em({ text: t }) {
      return t;
    }
    codespan({ text: t }) {
      return t;
    }
    del({ text: t }) {
      return t;
    }
    html({ text: t }) {
      return t;
    }
    text({ text: t }) {
      return t;
    }
    link({ text: t }) {
      return "" + t;
    }
    image({ text: t }) {
      return "" + t;
    }
    br() {
      return "";
    }
  },
  mt = class t {
    options;
    renderer;
    textRenderer;
    constructor(t) {
      (this.options = t || l),
        (this.options.renderer = this.options.renderer || new ft()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new yt());
    }
    static parse(e, r) {
      return new t(r).parse(e);
    }
    static parseInline(e, r) {
      return new t(r).parseInline(e);
    }
    parse(t, e = !0) {
      let r = "";
      for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (this.options.extensions?.renderers?.[o.type]) {
          let t = o,
            e = this.options.extensions.renderers[t.type].call(
              { parser: this },
              t,
            );
          if (
            !1 !== e ||
            ![
              "space",
              "hr",
              "heading",
              "code",
              "table",
              "blockquote",
              "list",
              "html",
              "def",
              "paragraph",
              "text",
            ].includes(t.type)
          ) {
            r += e || "";
            continue;
          }
        }
        let n = o;
        switch (n.type) {
          case "space":
            r += this.renderer.space(n);
            continue;
          case "hr":
            r += this.renderer.hr(n);
            continue;
          case "heading":
            r += this.renderer.heading(n);
            continue;
          case "code":
            r += this.renderer.code(n);
            continue;
          case "table":
            r += this.renderer.table(n);
            continue;
          case "blockquote":
            r += this.renderer.blockquote(n);
            continue;
          case "list":
            r += this.renderer.list(n);
            continue;
          case "html":
            r += this.renderer.html(n);
            continue;
          case "def":
            r += this.renderer.def(n);
            continue;
          case "paragraph":
            r += this.renderer.paragraph(n);
            continue;
          case "text": {
            let o = n,
              a = this.renderer.text(o);
            for (; i + 1 < t.length && "text" === t[i + 1].type; )
              (o = t[++i]), (a += "\n" + this.renderer.text(o));
            r += e
              ? this.renderer.paragraph({
                  type: "paragraph",
                  raw: a,
                  text: a,
                  tokens: [{ type: "text", raw: a, text: a, escaped: !0 }],
                })
              : a;
            continue;
          }
          default: {
            let t = 'Token with "' + n.type + '" type was not found.';
            if (this.options.silent) return "";
            throw new Error(t);
          }
        }
      }
      return r;
    }
    parseInline(t, e = this.renderer) {
      let r = "";
      for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (this.options.extensions?.renderers?.[o.type]) {
          let t = this.options.extensions.renderers[o.type].call(
            { parser: this },
            o,
          );
          if (
            !1 !== t ||
            ![
              "escape",
              "html",
              "link",
              "image",
              "strong",
              "em",
              "codespan",
              "br",
              "del",
              "text",
            ].includes(o.type)
          ) {
            r += t || "";
            continue;
          }
        }
        let n = o;
        switch (n.type) {
          case "escape":
          case "text":
            r += e.text(n);
            break;
          case "html":
            r += e.html(n);
            break;
          case "link":
            r += e.link(n);
            break;
          case "image":
            r += e.image(n);
            break;
          case "strong":
            r += e.strong(n);
            break;
          case "em":
            r += e.em(n);
            break;
          case "codespan":
            r += e.codespan(n);
            break;
          case "br":
            r += e.br(n);
            break;
          case "del":
            r += e.del(n);
            break;
          default: {
            let t = 'Token with "' + n.type + '" type was not found.';
            if (this.options.silent) return "";
            throw new Error(t);
          }
        }
      }
      return r;
    }
  },
  xt = class {
    options;
    block;
    constructor(t) {
      this.options = t || l;
    }
    static passThroughHooks = new Set([
      "preprocess",
      "postprocess",
      "processAllTokens",
      "emStrongMask",
    ]);
    static passThroughHooksRespectAsync = new Set([
      "preprocess",
      "postprocess",
      "processAllTokens",
    ]);
    preprocess(t) {
      return t;
    }
    postprocess(t) {
      return t;
    }
    processAllTokens(t) {
      return t;
    }
    emStrongMask(t) {
      return t;
    }
    provideLexer() {
      return this.block ? gt.lex : gt.lexInline;
    }
    provideParser() {
      return this.block ? mt.parse : mt.parseInline;
    }
  },
  Ct = new (class {
    defaults = {
      async: !1,
      breaks: !1,
      extensions: null,
      gfm: !0,
      hooks: null,
      pedantic: !1,
      renderer: null,
      silent: !1,
      tokenizer: null,
      walkTokens: null,
    };
    options = this.setOptions;
    parse = this.parseMarkdown(!0);
    parseInline = this.parseMarkdown(!1);
    Parser = mt;
    Renderer = ft;
    TextRenderer = yt;
    Lexer = gt;
    Tokenizer = pt;
    Hooks = xt;
    constructor(...t) {
      this.use(...t);
    }
    walkTokens(t, e) {
      let r = [];
      for (let i of t)
        switch (((r = r.concat(e.call(this, i))), i.type)) {
          case "table": {
            let t = i;
            for (let i of t.header) r = r.concat(this.walkTokens(i.tokens, e));
            for (let i of t.rows)
              for (let t of i) r = r.concat(this.walkTokens(t.tokens, e));
            break;
          }
          case "list": {
            let t = i;
            r = r.concat(this.walkTokens(t.items, e));
            break;
          }
          default: {
            let t = i;
            this.defaults.extensions?.childTokens?.[t.type]
              ? this.defaults.extensions.childTokens[t.type].forEach((i) => {
                  let o = t[i].flat(1 / 0);
                  r = r.concat(this.walkTokens(o, e));
                })
              : t.tokens && (r = r.concat(this.walkTokens(t.tokens, e)));
          }
        }
      return r;
    }
    use(...t) {
      let e = this.defaults.extensions || {
        renderers: {},
        childTokens: {},
      };
      return (
        t.forEach((t) => {
          let r = { ...t };
          if (
            ((r.async = this.defaults.async || r.async || !1),
            t.extensions &&
              (t.extensions.forEach((t) => {
                if (!t.name) throw new Error("extension name required");
                if ("renderer" in t) {
                  let r = e.renderers[t.name];
                  e.renderers[t.name] = r
                    ? function (...e) {
                        let i = t.renderer.apply(this, e);
                        return !1 === i && (i = r.apply(this, e)), i;
                      }
                    : t.renderer;
                }
                if ("tokenizer" in t) {
                  if (!t.level || ("block" !== t.level && "inline" !== t.level))
                    throw new Error(
                      "extension level must be 'block' or 'inline'",
                    );
                  let r = e[t.level];
                  r ? r.unshift(t.tokenizer) : (e[t.level] = [t.tokenizer]),
                    t.start &&
                      ("block" === t.level
                        ? e.startBlock
                          ? e.startBlock.push(t.start)
                          : (e.startBlock = [t.start])
                        : "inline" === t.level &&
                          (e.startInline
                            ? e.startInline.push(t.start)
                            : (e.startInline = [t.start])));
                }
                "childTokens" in t &&
                  t.childTokens &&
                  (e.childTokens[t.name] = t.childTokens);
              }),
              (r.extensions = e)),
            t.renderer)
          ) {
            let e = this.defaults.renderer || new ft(this.defaults);
            for (let r in t.renderer) {
              if (!(r in e)) throw new Error(`renderer '${r}' does not exist`);
              if (["options", "parser"].includes(r)) continue;
              let i = r,
                o = t.renderer[i],
                n = e[i];
              e[i] = (...t) => {
                let r = o.apply(e, t);
                return !1 === r && (r = n.apply(e, t)), r || "";
              };
            }
            r.renderer = e;
          }
          if (t.tokenizer) {
            let e = this.defaults.tokenizer || new pt(this.defaults);
            for (let r in t.tokenizer) {
              if (!(r in e)) throw new Error(`tokenizer '${r}' does not exist`);
              if (["options", "rules", "lexer"].includes(r)) continue;
              let i = r,
                o = t.tokenizer[i],
                n = e[i];
              e[i] = (...t) => {
                let r = o.apply(e, t);
                return !1 === r && (r = n.apply(e, t)), r;
              };
            }
            r.tokenizer = e;
          }
          if (t.hooks) {
            let e = this.defaults.hooks || new xt();
            for (let r in t.hooks) {
              if (!(r in e)) throw new Error(`hook '${r}' does not exist`);
              if (["options", "block"].includes(r)) continue;
              let i = r,
                o = t.hooks[i],
                n = e[i];
              xt.passThroughHooks.has(r)
                ? (e[i] = (t) => {
                    if (
                      this.defaults.async &&
                      xt.passThroughHooksRespectAsync.has(r)
                    )
                      return (async () => {
                        let r = await o.call(e, t);
                        return n.call(e, r);
                      })();
                    let i = o.call(e, t);
                    return n.call(e, i);
                  })
                : (e[i] = (...t) => {
                    if (this.defaults.async)
                      return (async () => {
                        let r = await o.apply(e, t);
                        return !1 === r && (r = await n.apply(e, t)), r;
                      })();
                    let r = o.apply(e, t);
                    return !1 === r && (r = n.apply(e, t)), r;
                  });
            }
            r.hooks = e;
          }
          if (t.walkTokens) {
            let e = this.defaults.walkTokens,
              i = t.walkTokens;
            r.walkTokens = function (t) {
              let r = [];
              return (
                r.push(i.call(this, t)), e && (r = r.concat(e.call(this, t))), r
              );
            };
          }
          this.defaults = { ...this.defaults, ...r };
        }),
        this
      );
    }
    setOptions(t) {
      return (this.defaults = { ...this.defaults, ...t }), this;
    }
    lexer(t, e) {
      return gt.lex(t, e ?? this.defaults);
    }
    parser(t, e) {
      return mt.parse(t, e ?? this.defaults);
    }
    parseMarkdown(t) {
      return (e, r) => {
        let i = { ...r },
          o = { ...this.defaults, ...i },
          n = this.onError(!!o.silent, !!o.async);
        if (!0 === this.defaults.async && !1 === i.async)
          return n(
            new Error(
              "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
            ),
          );
        if (typeof e > "u" || null === e)
          return n(new Error("marked(): input parameter is undefined or null"));
        if ("string" != typeof e)
          return n(
            new Error(
              "marked(): input parameter is of type " +
                Object.prototype.toString.call(e) +
                ", string expected",
            ),
          );
        if ((o.hooks && ((o.hooks.options = o), (o.hooks.block = t)), o.async))
          return (async () => {
            let r = o.hooks ? await o.hooks.preprocess(e) : e,
              i = await (
                o.hooks
                  ? await o.hooks.provideLexer()
                  : t
                    ? gt.lex
                    : gt.lexInline
              )(r, o),
              n = o.hooks ? await o.hooks.processAllTokens(i) : i;
            o.walkTokens &&
              (await Promise.all(this.walkTokens(n, o.walkTokens)));
            let a = await (
              o.hooks
                ? await o.hooks.provideParser()
                : t
                  ? mt.parse
                  : mt.parseInline
            )(n, o);
            return o.hooks ? await o.hooks.postprocess(a) : a;
          })().catch(n);
        try {
          o.hooks && (e = o.hooks.preprocess(e));
          let r = (
            o.hooks ? o.hooks.provideLexer() : t ? gt.lex : gt.lexInline
          )(e, o);
          o.hooks && (r = o.hooks.processAllTokens(r)),
            o.walkTokens && this.walkTokens(r, o.walkTokens);
          let i = (
            o.hooks ? o.hooks.provideParser() : t ? mt.parse : mt.parseInline
          )(r, o);
          return o.hooks && (i = o.hooks.postprocess(i)), i;
        } catch (t) {
          return n(t);
        }
      };
    }
    onError(t, e) {
      return (r) => {
        if (
          ((r.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          t)
        ) {
          let t =
            "<p>An error occurred:</p><pre>" +
            lt(r.message + "", !0) +
            "</pre>";
          return e ? Promise.resolve(t) : t;
        }
        if (e) return Promise.reject(r);
        throw r;
      };
    }
  })();
function bt(t, e) {
  return Ct.parse(t, e);
}
(bt.options = bt.setOptions =
  function (t) {
    return Ct.setOptions(t), (bt.defaults = Ct.defaults), h(bt.defaults), bt;
  }),
  (bt.getDefaults = function () {
    return {
      async: !1,
      breaks: !1,
      extensions: null,
      gfm: !0,
      hooks: null,
      pedantic: !1,
      renderer: null,
      silent: !1,
      tokenizer: null,
      walkTokens: null,
    };
  }),
  (bt.defaults = l),
  (bt.use = function (...t) {
    return Ct.use(...t), (bt.defaults = Ct.defaults), h(bt.defaults), bt;
  }),
  (bt.walkTokens = function (t, e) {
    return Ct.walkTokens(t, e);
  }),
  (bt.parseInline = Ct.parseInline),
  (bt.Parser = mt),
  (bt.parser = mt.parse),
  (bt.Renderer = ft),
  (bt.TextRenderer = yt),
  (bt.Lexer = gt),
  (bt.lexer = gt.lex),
  (bt.Tokenizer = pt),
  (bt.Hooks = xt),
  (bt.parse = bt),
  bt.options,
  bt.setOptions,
  bt.use,
  bt.walkTokens,
  bt.parseInline,
  mt.parse,
  gt.lex;
var kt = r(60115 /* vendor/module-60115 */),
  wt = r(27197 /* vendor/module-27197 */),
  St =
    "undefined" != typeof performance && "function" == typeof performance.now,
  Tt = (0, s.K)(() => (St ? performance.now() : 0), "now"),
  Bt = {
    parse: "tertiary",
    prepare: "secondary",
    measure: "primary",
    layout: "primary-dark",
    layoutCore: "error",
    draw: "primary-light",
    paint: "secondary-dark",
    serialize: "tertiary-dark",
    render: "primary-light",
  };
function vt(t, { markdownAutoWrap: e }) {
  const r = t.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n");
  return (0, kt.T)(r);
}
function _t(t) {
  return t.split(/\\n|\n|<br\s*\/?>/gi).map(
    (t) =>
      t
        .trim()
        .match(/<[^>]+>|[^\s<>]+/g)
        ?.map((t) => ({ content: t, type: "normal" })) ?? [],
  );
}
function At(t, e = {}) {
  const r = vt(t, e),
    i = bt.lexer(r),
    o = [[]];
  let n = 0;
  function a(t, e = "normal") {
    "text" === t.type
      ? t.text.split("\n").forEach((t, r) => {
          0 !== r && (n++, o.push([])),
            t.split(" ").forEach((t) => {
              (t = t.replace(/&#39;/g, "'")) &&
                o[n].push({ content: t, type: e });
            });
        })
      : "strong" === t.type || "em" === t.type
        ? t.tokens.forEach((e) => {
            a(e, t.type);
          })
        : "html" === t.type && o[n].push({ content: t.text, type: "normal" });
  }
  return (
    (0, s.K)(a, "processNode"),
    i.forEach((t) => {
      "paragraph" === t.type
        ? t.tokens?.forEach((t) => {
            a(t);
          })
        : "html" === t.type
          ? o[n].push({ content: t.text, type: "normal" })
          : o[n].push({ content: t.raw, type: "normal" });
    }),
    o
  );
}
function Ft(t) {
  return t ? `<p>${t.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
function Lt(t, { markdownAutoWrap: e } = {}) {
  const r = bt.lexer(t);
  function i(t) {
    return "text" === t.type
      ? !1 === e
        ? t.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;")
        : t.text.replace(/\n */g, "<br/>")
      : "strong" === t.type
        ? `<strong>${t.tokens?.map(i).join("")}</strong>`
        : "em" === t.type
          ? `<em>${t.tokens?.map(i).join("")}</em>`
          : "paragraph" === t.type
            ? `<p>${t.tokens?.map(i).join("")}</p>`
            : "space" === t.type
              ? ""
              : "html" === t.type
                ? `${t.text}`
                : "escape" === t.type
                  ? t.text
                  : (a.R.warn(`Unsupported markdown: ${t.type}`), t.raw);
  }
  return (0, s.K)(i, "output"), r.map(i).join("");
}
(class {
  constructor() {
    (this.enabled = !1),
      (this.autoPrint = !0),
      (this.records = []),
      (this.maxRecords = 200),
      (this.roots = []),
      (this.stack = []),
      (this.buckets = {});
  }
  static {
    (0, s.K)(this, "Profiler");
  }
  enable() {
    return (this.enabled = !0), this;
  }
  disable() {
    return (this.enabled = !1), this;
  }
  start(t) {
    this.enabled &&
      ((this.roots = []),
      (this.stack = []),
      (this.buckets = {}),
      this.begin(t));
  }
  tickSync(t, e) {
    if (!this.enabled) return e();
    const r = Tt();
    try {
      return e();
    } finally {
      this.buckets[t] = (this.buckets[t] ?? 0) + (Tt() - r);
    }
  }
  async tick(t, e) {
    if (!this.enabled) return e();
    const r = Tt();
    try {
      return await e();
    } finally {
      this.buckets[t] = (this.buckets[t] ?? 0) + (Tt() - r);
    }
  }
  stop() {
    if (!this.enabled) return;
    for (; this.stack.length > 0; ) this.end();
    const t = this.roots.at(-1),
      e = this.runLabel ?? t?.name;
    return (
      t &&
        (this.records.push({
          label: e ?? t.name,
          tree: t,
          buckets: { ...this.buckets },
        }),
        this.records.length > this.maxRecords &&
          this.records.splice(0, this.records.length - this.maxRecords),
        this.autoPrint && this.printSummary(t, e)),
      (this.runLabel = void 0),
      t
    );
  }
  begin(t) {
    if (!this.enabled) return;
    const e = { name: t, start: Tt(), duration: -1, children: [] },
      r = this.stack.at(-1);
    if (
      (r ? r.children.push(e) : this.roots.push(e),
      this.stack.push(e),
      St && "function" == typeof performance.mark)
    )
      try {
        performance.mark(`🧜 ${t} ▶`);
      } catch {}
  }
  end() {
    if (!this.enabled) return;
    const t = this.stack.pop();
    if (!t) return;
    const e = Tt();
    if (
      ((t.duration = e - t.start),
      St && "function" == typeof performance.measure)
    )
      try {
        performance.measure(`🧜 ${t.name}`, {
          start: t.start,
          end: e,
          detail: {
            devtools: {
              dataType: "track-entry",
              track: "Mermaid render",
              trackGroup: "Mermaid",
              color: Bt[t.name] ?? "primary",
              tooltipText: `${t.name} — ${t.duration.toFixed(1)} ms`,
            },
          },
        });
      } catch {}
  }
  async span(t, e) {
    if (!this.enabled) return e();
    this.begin(t);
    try {
      return await e();
    } finally {
      this.end();
    }
  }
  report() {
    return this.records.at(-1)?.tree ?? this.roots.at(-1);
  }
  clear() {
    (this.records.length = 0),
      (this.roots = []),
      (this.stack = []),
      (this.runLabel = void 0);
  }
  reset() {
    (this.roots = []), (this.stack = []);
  }
  printSummary(t = this.report(), e) {
    if (!t) return;
    const r = t.duration,
      i = (e && t.name, t.name, ["ms        %    phase"]),
      o = (0, s.K)((t, e) => {
        const n = "  ".repeat(e),
          a = t.duration.toFixed(1).padStart(8),
          s =
            r > 0
              ? `${((t.duration / r) * 100).toFixed(0).padStart(3)}%`
              : "   -";
        i.push(`${a}  ${s}  ${n}${t.name}`);
        for (const r of t.children) o(r, e + 1);
        if (t.children.length > 0) {
          const e = t.children.reduce((t, e) => t + e.duration, 0),
            r = t.duration - e;
          if (r > 0.5) {
            const t = r.toFixed(1).padStart(8);
            i.push(`${t}       ${n}  (self)`);
          }
        }
      }, "walk");
    o(t, 0);
    const n = Object.keys(this.buckets);
    if (n.length > 0) {
      i.push("—— buckets (summed) ——");
      for (const t of n)
        i.push(`${this.buckets[t].toFixed(1).padStart(8)}       ${t}`);
    }
  }
}),
  (globalThis.injected ??= {
    includeLargeFeatures: !0,
    profiling: !1,
    version: "0.0.0",
  }),
  (0, s.K)(vt, "preprocessMarkdown"),
  (0, s.K)(_t, "nonMarkdownToLines"),
  (0, s.K)(At, "markdownToLines"),
  (0, s.K)(Ft, "nonMarkdownToHTML"),
  (0, s.K)(Lt, "markdownToHTML");
var Mt = (function (t) {
    var e =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (t) {
        return setTimeout(t, 16);
      };
    function r() {
      var r = this;
      (r.reads = []), (r.writes = []), (r.raf = e.bind(t));
    }
    function i(t) {
      t.scheduled || ((t.scheduled = !0), t.raf(o.bind(null, t)));
    }
    function o(t) {
      var e,
        r = t.writes,
        o = t.reads;
      try {
        o.length, t.runTasks(o), r.length, t.runTasks(r);
      } catch (t) {
        e = t;
      }
      if (((t.scheduled = !1), (o.length || r.length) && i(t), e)) {
        if ((e.message, !t.catch)) throw e;
        t.catch(e);
      }
    }
    function n(t, e) {
      var r = t.indexOf(e);
      return !!~r && !!t.splice(r, 1);
    }
    function a(t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    }
    return (
      (0, s.K)(r, "FastDom"),
      (r.prototype = {
        constructor: r,
        runTasks: (0, s.K)(function (t) {
          for (var e; (e = t.shift()); ) e();
        }, "runTasks"),
        measure: (0, s.K)(function (t, e) {
          var r = e ? t.bind(e) : t;
          return this.reads.push(r), i(this), r;
        }, "measure"),
        mutate: (0, s.K)(function (t, e) {
          var r = e ? t.bind(e) : t;
          return this.writes.push(r), i(this), r;
        }, "mutate"),
        clear: (0, s.K)(function (t) {
          return n(this.reads, t) || n(this.writes, t);
        }, "clear"),
        extend: (0, s.K)(function (t) {
          if ("object" != typeof t) throw new Error("expected object");
          var e = Object.create(this);
          return a(e, t), (e.fastdom = this), e.initialize && e.initialize(), e;
        }, "extend"),
        catch: null,
      }),
      (0, s.K)(i, "scheduleFlush"),
      (0, s.K)(o, "flush"),
      (0, s.K)(n, "remove"),
      (0, s.K)(a, "mixin"),
      (t.fastdom = t.fastdom || new r())
    );
  })("undefined" != typeof window ? window : globalThis),
  $t = {
    initialize: (0, s.K)(function () {
      this._tasks = new Map();
    }, "initialize"),
    mutate: (0, s.K)(function (t, e) {
      return Et(this, "mutate", t, e);
    }, "mutate"),
    measure: (0, s.K)(function (t, e) {
      return Et(this, "measure", t, e);
    }, "measure"),
    clear: (0, s.K)(function (t) {
      var e = this._tasks,
        r = e.get(t);
      this.fastdom.clear(r), e.delete(t);
    }, "clear"),
  };
function Et(t, e, r, i) {
  var o,
    n = t._tasks,
    a = t.fastdom,
    s = new Promise(function (t, l) {
      o = a[e](function () {
        n.delete(s);
        try {
          t(i ? r.call(i) : r());
        } catch (t) {
          l(t);
        }
      }, i);
    });
  return n.set(s, o), s;
}
(0, s.K)(Et, "create");
var { initialize: Ot, mutate: Dt, measure: It, clear: Kt } = $t,
  qt = $t,
  Pt = Mt.extend({
    raf(t) {
      "function" == typeof queueMicrotask
        ? queueMicrotask(t)
        : setTimeout(t, 0);
    },
  }).extend(qt);
function Rt(t) {
  return Intl.Segmenter
    ? [...new Intl.Segmenter().segment(t)].map((t) => t.segment)
    : [...t];
}
function zt(t, e) {
  return Nt(t, [], Rt(e.content), e.type);
}
function Nt(t, e, r, i) {
  if (0 === r.length)
    return [
      { content: e.join(""), type: i },
      { content: "", type: i },
    ];
  const [o, ...n] = r,
    a = [...e, o];
  return t([{ content: a.join(""), type: i }])
    ? Nt(t, a, n, i)
    : (0 === e.length && o && (e.push(o), r.shift()),
      [
        { content: e.join(""), type: i },
        { content: r.join(""), type: i },
      ]);
}
function Wt(t, e) {
  if (t.some(({ content: t }) => t.includes("\n")))
    throw new Error(
      "splitLineToFitWidth does not support newlines in the line",
    );
  return jt(t, e);
}
function jt(t, e, r = [], i = []) {
  if (0 === t.length) return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let o = "";
  " " === t[0].content && ((o = " "), t.shift());
  const n = t.shift() ?? { content: " ", type: "normal" },
    a = [...i];
  if (("" !== o && a.push({ content: o, type: "normal" }), a.push(n), e(a)))
    return jt(t, e, r, a);
  if (i.length > 0) r.push(i), t.unshift(n);
  else if (n.content) {
    const [i, o] = zt(e, n);
    r.push([i]), o.content && t.unshift(o);
  }
  return jt(t, e, r);
}
function Ht(t, e) {
  e && t.attr("style", e);
}
async function Ut(t, e, r, i, o = !1, a = (0, n.zj)(), s = 0) {
  const l = t.append("foreignObject");
  l.attr("width", `${Math.min(10 * r, 16384)}px`),
    l.attr("height", `${Math.min(10 * r, 16384)}px`);
  const h = l.append("xhtml:div"),
    c = (0, n.Wi)(e.label)
      ? await (0, n.dj)(e.label.replace(n.Y2.lineBreakRegex, "\n"), a)
      : (0, n.jZ)(e.label, a),
    d = e.isNode ? "nodeLabel" : "edgeLabel",
    u = h.append("span");
  u.html(c),
    Ht(u, e.labelStyle),
    u.attr("class", `${d} ${i}`),
    Ht(h, e.labelStyle),
    h.style("display", "table-cell"),
    h.style("white-space", "nowrap"),
    h.style("line-height", "1.5"),
    r !== Number.POSITIVE_INFINITY &&
      (h.style("max-width", r + "px"), h.style("text-align", "center")),
    h.attr("xmlns", "http://www.w3.org/1999/xhtml"),
    o && h.attr("class", "labelBkg");
  const p = await Pt.measure(() => h.node().getBoundingClientRect());
  return (
    p.width === r
      ? (h.style("display", "table"),
        h.style("white-space", "break-spaces"),
        h.style("width", r + "px"))
      : p.width < s &&
        (h.style("display", "table"),
        h.style("width", s + "px"),
        h.style("text-align", "center")),
    l.node()
  );
}
function Yt(t, e, r, i = !1) {
  const o = t
    .append("tspan")
    .attr("class", "text-outer-tspan")
    .attr("x", 0)
    .attr("y", e * r - 0.1 + "em")
    .attr("dy", r + "em");
  return i && o.attr("text-anchor", "middle"), o;
}
function Gt(t, e, r) {
  const i = t.append("text"),
    o = Yt(i, 1, e);
  Qt(o, r);
  const n = o.node().getComputedTextLength();
  return i.remove(), n;
}
function Xt(t, e, r) {
  const i = t.append("text"),
    o = Yt(i, 1, e);
  Qt(o, [{ content: r, type: "normal" }]);
  const n = o.node()?.getBoundingClientRect();
  return n && i.remove(), n;
}
function Vt(t, e, r, i = !1, o = !1) {
  const n = e.append("g"),
    a = n
      .insert("rect")
      .attr("class", "background")
      .attr("style", "stroke: none"),
    l = n.append("text").attr("y", "-10.1");
  o && l.attr("text-anchor", "middle");
  let h = 0;
  for (const e of r) {
    const r = (0, s.K)((e) => Gt(n, 1.1, e) <= t, "checkWidth"),
      i = r(e) ? [e] : Wt(e, r);
    for (const t of i) Qt(Yt(l, h, 1.1, o), t), h++;
  }
  if (i) {
    const t = l.node().getBBox(),
      e = 2;
    return (
      a
        .attr("x", t.x - e)
        .attr("y", t.y - e)
        .attr("width", t.width + 2 * e)
        .attr("height", t.height + 2 * e),
      n.node()
    );
  }
  return l.node();
}
function Zt(t) {
  return t.replace(/&(amp|lt|gt);/g, (t, e) => {
    switch (e) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      default:
        return t;
    }
  });
}
function Qt(t, e) {
  t.text(""),
    e.forEach((e, r) => {
      const i = t
        .append("tspan")
        .attr("font-style", "em" === e.type ? "italic" : "normal")
        .attr("class", "text-inner-tspan")
        .attr("font-weight", "strong" === e.type ? "bold" : "normal");
      0 === r ? i.text(Zt(e.content)) : i.text(" " + Zt(e.content));
    });
}
async function Jt(t, e = {}) {
  const r = [];
  t.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    (t, o, a) => (
      r.push(
        (async () => {
          const r = `${o}:${a}`;
          return (await (0, i.dn)(r))
            ? await (0, i.WY)(r, void 0, { class: "label-icon" })
            : `<i class='${(0, n.jZ)(t, e).replace(":", " ")}'></i>`;
        })(),
      ),
      t
    ),
  );
  const o = await Promise.all(r);
  return t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => o.shift() ?? "");
}
(0, s.K)(Rt, "splitTextToChars"),
  (0, s.K)(zt, "splitWordToFitWidth"),
  (0, s.K)(Nt, "splitWordToFitWidthRecursion"),
  (0, s.K)(Wt, "splitLineToFitWidth"),
  (0, s.K)(jt, "splitLineToFitWidthRecursion"),
  (0, s.K)(Ht, "applyStyle"),
  (0, s.K)(Ut, "addHtmlSpan"),
  (0, s.K)(Yt, "createTspan"),
  (0, s.K)(Gt, "computeWidthOfText"),
  (0, s.K)(Xt, "computeDimensionOfText"),
  (0, s.K)(Vt, "createFormattedText"),
  (0, s.K)(Zt, "decodeHTMLEntities"),
  (0, s.K)(Qt, "updateTextContentAndStyles"),
  (0, s.K)(Jt, "replaceIconSubstring");
var te = (0, s.K)(
  async (
    t,
    e = "",
    {
      style: r = "",
      isTitle: i = !1,
      classes: s = "",
      useHtmlLabels: l = !0,
      markdown: h = !0,
      isNode: c = !0,
      width: d = 200,
      minWidth: u = 0,
      addSvgBackground: p = !1,
    } = {},
    g,
  ) => {
    if (
      (a.R.debug("XYZ createText", e, r, i, s, l, c, "addSvgBackground: ", p),
      l)
    ) {
      const i = h ? Lt(e, g) : Ft(e),
        a = await Jt((0, o.Sm)(i), g),
        l = e.replace(/\\\\/g, "\\"),
        f = {
          isNode: c,
          label: (0, n.Wi)(e) ? l : a,
          labelStyle: r.replace("fill:", "color:"),
        };
      return await Ut(t, f, d, s, p, g, u);
    }
    {
      const n = (0, o.Sm)(e.replace(/<br\s*\/?>/g, "<br/>")),
        a = Vt(
          d,
          t,
          h ? At(n.replace("<br>", "<br/>"), g) : _t(n),
          !!e && p,
          !c,
        );
      if (c) {
        /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
        const t = r
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/color:/g, "fill:");
        (0, wt.Ltv)(a).attr("style", t);
      } else {
        const t = r
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/background:/g, "fill:");
        (0, wt.Ltv)(a)
          .select("rect")
          .attr("style", t.replace(/background:/g, "fill:"));
        const e = r
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/color:/g, "fill:");
        (0, wt.Ltv)(a).select("text").attr("style", e);
      }
      return (
        i
          ? (0, wt.Ltv)(a)
              .selectAll("tspan.text-outer-tspan")
              .classed("title-row", !0)
          : (0, wt.Ltv)(a)
              .selectAll("tspan.text-outer-tspan")
              .classed("row", !0),
        a
      );
    }
  },
  "createText",
);
