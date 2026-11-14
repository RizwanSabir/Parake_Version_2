// vendor/other/module-57694.js — webpack module 57694
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84018 /* vendor/other/module-84018 */);
function o(e, t, n, r, o) {
  let i = "",
    s = "";
  const a = Math.floor(o / 2) - 1;
  return (
    r - t > a && ((i = " ... "), (t = r - a + i.length)),
    n - r > a && ((s = " ..."), (n = r + a - s.length)),
    {
      str: i + e.slice(t, n).replace(/\t/g, "→") + s,
      pos: r - t + i.length,
    }
  );
}
function i(e, t) {
  return r.repeat(" ", t - e.length) + e;
}
e.exports = function (e, t) {
  if (((t = Object.create(t || null)), !e.buffer)) return null;
  t.maxLength || (t.maxLength = 79),
    "number" != typeof t.indent && (t.indent = 1),
    "number" != typeof t.linesBefore && (t.linesBefore = 3),
    "number" != typeof t.linesAfter && (t.linesAfter = 2);
  const n = /\r?\n|\r|\0/g,
    s = [0],
    a = [];
  let c,
    u = -1;
  for (; (c = n.exec(e.buffer)); )
    a.push(c.index),
      s.push(c.index + c[0].length),
      e.position <= c.index && u < 0 && (u = s.length - 2);
  u < 0 && (u = s.length - 1);
  let l = "";
  const d = Math.min(e.line + t.linesAfter, a.length).toString().length,
    p = t.maxLength - (t.indent + d + 3);
  for (let n = 1; n <= t.linesBefore && !(u - n < 0); n++) {
    const c = o(
      e.buffer,
      s[u - n],
      a[u - n],
      e.position - (s[u] - s[u - n]),
      p,
    );
    l =
      r.repeat(" ", t.indent) +
      i((e.line - n + 1).toString(), d) +
      " | " +
      c.str +
      "\n" +
      l;
  }
  const f = o(e.buffer, s[u], a[u], e.position, p);
  (l +=
    r.repeat(" ", t.indent) +
    i((e.line + 1).toString(), d) +
    " | " +
    f.str +
    "\n"),
    (l += r.repeat("-", t.indent + d + 3 + f.pos) + "^\n");
  for (let n = 1; n <= t.linesAfter && !(u + n >= a.length); n++) {
    const c = o(
      e.buffer,
      s[u + n],
      a[u + n],
      e.position - (s[u] - s[u + n]),
      p,
    );
    l +=
      r.repeat(" ", t.indent) +
      i((e.line + n + 1).toString(), d) +
      " | " +
      c.str +
      "\n";
  }
  return l.replace(/\n$/, "");
};
