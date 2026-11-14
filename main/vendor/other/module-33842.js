// vendor/other/module-33842.js — webpack module 33842
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { tokenChars: r } = n(3977 /* vendor/other/module-3977 */);
e.exports = {
  parse: function (e) {
    const t = new Set();
    let n = -1,
      o = -1,
      i = 0;
    for (; i < e.length; i++) {
      const s = e.charCodeAt(i);
      if (-1 === o && 1 === r[s]) -1 === n && (n = i);
      else if (0 === i || (32 !== s && 9 !== s)) {
        if (44 !== s)
          throw new SyntaxError(`Unexpected character at index ${i}`);
        {
          if (-1 === n)
            throw new SyntaxError(`Unexpected character at index ${i}`);
          -1 === o && (o = i);
          const r = e.slice(n, o);
          if (t.has(r))
            throw new SyntaxError(`The "${r}" subprotocol is duplicated`);
          t.add(r), (n = o = -1);
        }
      } else -1 === o && -1 !== n && (o = i);
    }
    if (-1 === n || -1 !== o) throw new SyntaxError("Unexpected end of input");
    const s = e.slice(n, i);
    if (t.has(s)) throw new SyntaxError(`The "${s}" subprotocol is duplicated`);
    return t.add(s), t;
  },
};
