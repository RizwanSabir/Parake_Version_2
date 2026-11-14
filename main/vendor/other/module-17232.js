// vendor/other/module-17232.js — webpack module 17232
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.parseDn = function (e) {
    let t = !1,
      n = null,
      r = "",
      o = 0;
    e = e.trim();
    const i = new Map();
    for (let s = 0; s <= e.length; s++) {
      if (s === e.length) {
        null !== n && i.set(n, r);
        break;
      }
      const a = e[s];
      if (t) {
        if ('"' === a) {
          t = !1;
          continue;
        }
      } else {
        if ('"' === a) {
          t = !0;
          continue;
        }
        if ("\\" === a) {
          s++;
          const t = parseInt(e.slice(s, s + 2), 16);
          Number.isNaN(t) ? (r += e[s]) : (s++, (r += String.fromCharCode(t)));
          continue;
        }
        if (null === n && "=" === a) {
          (n = r), (r = "");
          continue;
        }
        if ("," === a || ";" === a || "+" === a) {
          null !== n && i.set(n, r), (n = null), (r = "");
          continue;
        }
      }
      if (" " === a && !t) {
        if (0 === r.length) continue;
        if (s > o) {
          let t = s;
          for (; " " === e[t]; ) t++;
          o = t;
        }
        if (
          o >= e.length ||
          "," === e[o] ||
          ";" === e[o] ||
          (null === n && "=" === e[o]) ||
          (null !== n && "+" === e[o])
        ) {
          s = o - 1;
          continue;
        }
      }
      r += a;
    }
    return i;
  });
