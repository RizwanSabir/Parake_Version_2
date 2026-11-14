// vendor/module-92587.js — webpack module 92587
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.highlightCode = function (e, t) {
    return t && o.default.getLanguage(t)
      ? o.default.highlight(e, { language: t }).value
      : o.default.highlightAuto(e).value;
  });
const o = r(n(3973 /* vendor/module-3973 */)),
  i = r(n(46760 /* vendor/module-46760 */)),
  a = r(n(33089 /* vendor/module-33089 */)),
  s = r(n(68049 /* vendor/module-68049 */)),
  l = r(n(17025 /* vendor/module-17025 */)),
  c = r(n(63355 /* vendor/module-63355 */)),
  u = r(n(51468 /* vendor/module-51468 */)),
  d = r(n(26418 /* vendor/module-26418 */)),
  p = r(n(73113 /* vendor/module-73113 */)),
  f = r(n(90020 /* vendor/module-90020 */)),
  h = r(n(44063 /* vendor/module-44063 */)),
  m = r(n(50687 /* vendor/module-50687 */)),
  g = r(n(37592 /* vendor/module-37592 */)),
  y = r(n(50619 /* vendor/module-50619 */)),
  v = r(n(90944 /* vendor/module-90944 */)),
  b = r(n(79386 /* vendor/module-79386 */)),
  S = r(n(8368 /* vendor/module-8368 */)),
  _ = r(n(31914 /* vendor/module-31914 */)),
  x = r(n(7846 /* vendor/module-7846 */)),
  w = r(n(90984 /* vendor/module-90984 */)),
  E = r(n(72723 /* vendor/module-72723 */)),
  T = r(n(45745 /* vendor/module-45745 */)),
  k = r(n(21869 /* vendor/module-21869 */)),
  C = r(n(98005 /* vendor/module-98005 */)),
  I = {
    bash: i.default,
    c: a.default,
    cpp: s.default,
    csharp: l.default,
    css: c.default,
    go: u.default,
    java: d.default,
    javascript: p.default,
    json: f.default,
    kotlin: h.default,
    markdown: m.default,
    php: g.default,
    plaintext: y.default,
    python: v.default,
    ruby: b.default,
    rust: S.default,
    scala: _.default,
    shell: x.default,
    sql: w.default,
    swift: E.default,
    typescript: T.default,
    xml: k.default,
    yaml: C.default,
  };
for (const [e, t] of Object.entries(I)) o.default.registerLanguage(e, t);
