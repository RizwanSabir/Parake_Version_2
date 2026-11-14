// vendor/module-74865.js — webpack module 74865
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
  o =
    (this && this.__exportStar) ||
    function (e, t) {
      for (var n in e)
        "default" === n ||
          Object.prototype.hasOwnProperty.call(t, n) ||
          r(t, e, n);
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Allow = t.MalformedJSON = t.PartialJSON = t.parseJSON = t.parse = void 0);
const i = n(17643 /* vendor/module-17643 */);
Object.defineProperty(t, "Allow", {
  enumerable: !0,
  get: function () {
    return i.Allow;
  },
}),
  o(n(17643 /* vendor/module-17643 */), t);
class a extends Error {}
t.PartialJSON = a;
class s extends Error {}
function l(e, t = i.Allow.ALL) {
  if ("string" != typeof e)
    throw new TypeError("expecting str, got " + typeof e);
  if (!e.trim()) throw new Error(`${e} is empty`);
  return c(e.trim(), t);
}
(t.MalformedJSON = s), (t.parseJSON = l);
const c = (e, t) => {
    const n = e.length;
    let r = 0;
    const o = (e) => {
        throw new a(`${e} at position ${r}`);
      },
      l = (e) => {
        throw new s(`${e} at position ${r}`);
      },
      c = () => (
        h(),
        r >= n && o("Unexpected end of input"),
        '"' === e[r]
          ? u()
          : "{" === e[r]
            ? d()
            : "[" === e[r]
              ? p()
              : "null" === e.substring(r, r + 4) ||
                  (i.Allow.NULL & t &&
                    n - r < 4 &&
                    "null".startsWith(e.substring(r)))
                ? ((r += 4), null)
                : "true" === e.substring(r, r + 4) ||
                    (i.Allow.BOOL & t &&
                      n - r < 4 &&
                      "true".startsWith(e.substring(r)))
                  ? ((r += 4), !0)
                  : "false" === e.substring(r, r + 5) ||
                      (i.Allow.BOOL & t &&
                        n - r < 5 &&
                        "false".startsWith(e.substring(r)))
                    ? ((r += 5), !1)
                    : "Infinity" === e.substring(r, r + 8) ||
                        (i.Allow.INFINITY & t &&
                          n - r < 8 &&
                          "Infinity".startsWith(e.substring(r)))
                      ? ((r += 8), 1 / 0)
                      : "-Infinity" === e.substring(r, r + 9) ||
                          (i.Allow._INFINITY & t &&
                            1 < n - r &&
                            n - r < 9 &&
                            "-Infinity".startsWith(e.substring(r)))
                        ? ((r += 9), -1 / 0)
                        : "NaN" === e.substring(r, r + 3) ||
                            (i.Allow.NAN & t &&
                              n - r < 3 &&
                              "NaN".startsWith(e.substring(r)))
                          ? ((r += 3), NaN)
                          : f()
      ),
      u = () => {
        const a = r;
        let s = !1;
        for (r++; r < n && ('"' !== e[r] || (s && "\\" === e[r - 1])); )
          (s = "\\" === e[r] && !s), r++;
        if ('"' == e.charAt(r))
          try {
            return JSON.parse(e.substring(a, ++r - Number(s)));
          } catch (e) {
            l(String(e));
          }
        else if (i.Allow.STR & t)
          try {
            return JSON.parse(e.substring(a, r - Number(s)) + '"');
          } catch (t) {
            return JSON.parse(e.substring(a, e.lastIndexOf("\\")) + '"');
          }
        o("Unterminated string literal");
      },
      d = () => {
        r++, h();
        const a = {};
        try {
          for (; "}" !== e[r]; ) {
            if ((h(), r >= n && i.Allow.OBJ & t)) return a;
            const o = u();
            h(), r++;
            try {
              const e = c();
              a[o] = e;
            } catch (e) {
              if (i.Allow.OBJ & t) return a;
              throw e;
            }
            h(), "," === e[r] && r++;
          }
        } catch (e) {
          if (i.Allow.OBJ & t) return a;
          o("Expected '}' at end of object");
        }
        return r++, a;
      },
      p = () => {
        r++;
        const n = [];
        try {
          for (; "]" !== e[r]; ) n.push(c()), h(), "," === e[r] && r++;
        } catch (e) {
          if (i.Allow.ARR & t) return n;
          o("Expected ']' at end of array");
        }
        return r++, n;
      },
      f = () => {
        if (0 === r) {
          "-" === e && l("Not sure what '-' is");
          try {
            return JSON.parse(e);
          } catch (n) {
            if (i.Allow.NUM & t)
              try {
                return JSON.parse(e.substring(0, e.lastIndexOf("e")));
              } catch (e) {}
            l(String(n));
          }
        }
        const a = r;
        for ("-" === e[r] && r++; e[r] && -1 === ",]}".indexOf(e[r]); ) r++;
        r != n || i.Allow.NUM & t || o("Unterminated number literal");
        try {
          return JSON.parse(e.substring(a, r));
        } catch (t) {
          "-" === e.substring(a, r) && o("Not sure what '-' is");
          try {
            return JSON.parse(e.substring(a, e.lastIndexOf("e")));
          } catch (e) {
            l(String(e));
          }
        }
      },
      h = () => {
        for (; r < n && " \n\r\t".includes(e[r]); ) r++;
      };
    return c();
  },
  u = l;
t.parse = u;
