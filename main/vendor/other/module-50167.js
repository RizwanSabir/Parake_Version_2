// vendor/other/module-50167.js — webpack module 50167
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: o,
    MAX_LENGTH: i,
  } = n(62101 /* vendor/other/module-62101 */),
  s = n(16287 /* vendor/other/module-16287 */),
  a = ((t = e.exports = {}).re = []),
  c = (t.safeRe = []),
  u = (t.src = []),
  l = (t.safeSrc = []),
  d = (t.t = {});
let p = 0;
const f = "[a-zA-Z0-9-]",
  h = [
    ["\\s", 1],
    ["\\d", i],
    [f, o],
  ],
  g = (e, t, n) => {
    const r = ((e) => {
        for (const [t, n] of h)
          e = e
            .split(`${t}*`)
            .join(`${t}{0,${n}}`)
            .split(`${t}+`)
            .join(`${t}{1,${n}}`);
        return e;
      })(t),
      o = p++;
    s(e, o, t),
      (d[e] = o),
      (u[o] = t),
      (l[o] = r),
      (a[o] = new RegExp(t, n ? "g" : void 0)),
      (c[o] = new RegExp(r, n ? "g" : void 0));
  };
g("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
  g("NUMERICIDENTIFIERLOOSE", "\\d+"),
  g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`),
  g(
    "MAINVERSION",
    `(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})`,
  ),
  g(
    "MAINVERSIONLOOSE",
    `(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})`,
  ),
  g(
    "PRERELEASEIDENTIFIER",
    `(?:${u[d.NONNUMERICIDENTIFIER]}|${u[d.NUMERICIDENTIFIER]})`,
  ),
  g(
    "PRERELEASEIDENTIFIERLOOSE",
    `(?:${u[d.NONNUMERICIDENTIFIER]}|${u[d.NUMERICIDENTIFIERLOOSE]})`,
  ),
  g(
    "PRERELEASE",
    `(?:-(${u[d.PRERELEASEIDENTIFIER]}(?:\\.${u[d.PRERELEASEIDENTIFIER]})*))`,
  ),
  g(
    "PRERELEASELOOSE",
    `(?:-?(${u[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[d.PRERELEASEIDENTIFIERLOOSE]})*))`,
  ),
  g("BUILDIDENTIFIER", `${f}+`),
  g("BUILD", `(?:\\+(${u[d.BUILDIDENTIFIER]}(?:\\.${u[d.BUILDIDENTIFIER]})*))`),
  g("FULLPLAIN", `v?${u[d.MAINVERSION]}${u[d.PRERELEASE]}?${u[d.BUILD]}?`),
  g("FULL", `^${u[d.FULLPLAIN]}$`),
  g(
    "LOOSEPLAIN",
    `[v=\\s]*${u[d.MAINVERSIONLOOSE]}${u[d.PRERELEASELOOSE]}?${u[d.BUILD]}?`,
  ),
  g("LOOSE", `^${u[d.LOOSEPLAIN]}$`),
  g("GTLT", "((?:<|>)?=?)"),
  g("XRANGEIDENTIFIERLOOSE", `${u[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
  g("XRANGEIDENTIFIER", `${u[d.NUMERICIDENTIFIER]}|x|X|\\*`),
  g(
    "XRANGEPLAIN",
    `[v=\\s]*(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:${u[d.PRERELEASE]})?${u[d.BUILD]}?)?)?`,
  ),
  g(
    "XRANGEPLAINLOOSE",
    `[v=\\s]*(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:${u[d.PRERELEASELOOSE]})?${u[d.BUILD]}?)?)?`,
  ),
  g("XRANGE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAIN]}$`),
  g("XRANGELOOSE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAINLOOSE]}$`),
  g(
    "COERCEPLAIN",
    `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`,
  ),
  g("COERCE", `${u[d.COERCEPLAIN]}(?:$|[^\\d])`),
  g(
    "COERCEFULL",
    u[d.COERCEPLAIN] +
      `(?:${u[d.PRERELEASE]})?` +
      `(?:${u[d.BUILD]})?(?:$|[^\\d])`,
  ),
  g("COERCERTL", u[d.COERCE], !0),
  g("COERCERTLFULL", u[d.COERCEFULL], !0),
  g("LONETILDE", "(?:~>?)"),
  g("TILDETRIM", `(\\s*)${u[d.LONETILDE]}\\s+`, !0),
  (t.tildeTrimReplace = "$1~"),
  g("TILDE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAIN]}$`),
  g("TILDELOOSE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAINLOOSE]}$`),
  g("LONECARET", "(?:\\^)"),
  g("CARETTRIM", `(\\s*)${u[d.LONECARET]}\\s+`, !0),
  (t.caretTrimReplace = "$1^"),
  g("CARET", `^${u[d.LONECARET]}${u[d.XRANGEPLAIN]}$`),
  g("CARETLOOSE", `^${u[d.LONECARET]}${u[d.XRANGEPLAINLOOSE]}$`),
  g("COMPARATORLOOSE", `^${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]})$|^$`),
  g("COMPARATOR", `^${u[d.GTLT]}\\s*(${u[d.FULLPLAIN]})$|^$`),
  g(
    "COMPARATORTRIM",
    `(\\s*)${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]}|${u[d.XRANGEPLAIN]})`,
    !0,
  ),
  (t.comparatorTrimReplace = "$1$2$3"),
  g(
    "HYPHENRANGE",
    `^\\s*(${u[d.XRANGEPLAIN]})\\s+-\\s+(${u[d.XRANGEPLAIN]})\\s*$`,
  ),
  g(
    "HYPHENRANGELOOSE",
    `^\\s*(${u[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[d.XRANGEPLAINLOOSE]})\\s*$`,
  ),
  g("STAR", "(<|>)?=?\\s*\\*"),
  g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
  g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
