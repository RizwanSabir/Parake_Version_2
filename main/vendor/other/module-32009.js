// vendor/other/module-32009.js — webpack module 32009
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { tokenChars: r } = n(3977 /* vendor/other/module-3977 */);
function o(e, t, n) {
  void 0 === e[t] ? (e[t] = [n]) : e[t].push(n);
}
e.exports = {
  format: function (e) {
    return Object.keys(e)
      .map((t) => {
        let n = e[t];
        return (
          Array.isArray(n) || (n = [n]),
          n
            .map((e) =>
              [t]
                .concat(
                  Object.keys(e).map((t) => {
                    let n = e[t];
                    return (
                      Array.isArray(n) || (n = [n]),
                      n.map((e) => (!0 === e ? t : `${t}=${e}`)).join("; ")
                    );
                  }),
                )
                .join("; "),
            )
            .join(", ")
        );
      })
      .join(", ");
  },
  parse: function (e) {
    const t = Object.create(null);
    let n,
      i,
      s = Object.create(null),
      a = !1,
      c = !1,
      u = !1,
      l = -1,
      d = -1,
      p = -1,
      f = 0;
    for (; f < e.length; f++)
      if (((d = e.charCodeAt(f)), void 0 === n))
        if (-1 === p && 1 === r[d]) -1 === l && (l = f);
        else if (0 === f || (32 !== d && 9 !== d)) {
          if (59 !== d && 44 !== d)
            throw new SyntaxError(`Unexpected character at index ${f}`);
          {
            if (-1 === l)
              throw new SyntaxError(`Unexpected character at index ${f}`);
            -1 === p && (p = f);
            const r = e.slice(l, p);
            44 === d ? (o(t, r, s), (s = Object.create(null))) : (n = r),
              (l = p = -1);
          }
        } else -1 === p && -1 !== l && (p = f);
      else if (void 0 === i)
        if (-1 === p && 1 === r[d]) -1 === l && (l = f);
        else if (32 === d || 9 === d) -1 === p && -1 !== l && (p = f);
        else if (59 === d || 44 === d) {
          if (-1 === l)
            throw new SyntaxError(`Unexpected character at index ${f}`);
          -1 === p && (p = f),
            o(s, e.slice(l, p), !0),
            44 === d && (o(t, n, s), (s = Object.create(null)), (n = void 0)),
            (l = p = -1);
        } else {
          if (61 !== d || -1 === l || -1 !== p)
            throw new SyntaxError(`Unexpected character at index ${f}`);
          (i = e.slice(l, f)), (l = p = -1);
        }
      else if (c) {
        if (1 !== r[d])
          throw new SyntaxError(`Unexpected character at index ${f}`);
        -1 === l ? (l = f) : a || (a = !0), (c = !1);
      } else if (u)
        if (1 === r[d]) -1 === l && (l = f);
        else if (34 === d && -1 !== l) (u = !1), (p = f);
        else {
          if (92 !== d)
            throw new SyntaxError(`Unexpected character at index ${f}`);
          c = !0;
        }
      else if (34 === d && 61 === e.charCodeAt(f - 1)) u = !0;
      else if (-1 === p && 1 === r[d]) -1 === l && (l = f);
      else if (-1 === l || (32 !== d && 9 !== d)) {
        if (59 !== d && 44 !== d)
          throw new SyntaxError(`Unexpected character at index ${f}`);
        {
          if (-1 === l)
            throw new SyntaxError(`Unexpected character at index ${f}`);
          -1 === p && (p = f);
          let r = e.slice(l, p);
          a && ((r = r.replace(/\\/g, "")), (a = !1)),
            o(s, i, r),
            44 === d && (o(t, n, s), (s = Object.create(null)), (n = void 0)),
            (i = void 0),
            (l = p = -1);
        }
      } else -1 === p && (p = f);
    if (-1 === l || u || 32 === d || 9 === d)
      throw new SyntaxError("Unexpected end of input");
    -1 === p && (p = f);
    const h = e.slice(l, p);
    return (
      void 0 === n
        ? o(t, h, s)
        : (void 0 === i ? o(s, h, !0) : o(s, i, a ? h.replace(/\\/g, "") : h),
          o(t, n, s)),
      t
    );
  },
};
