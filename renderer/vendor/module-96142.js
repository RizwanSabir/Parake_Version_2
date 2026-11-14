// vendor/module-96142.js — webpack module 96142
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.stripCrlf = t.encode = t.decode = void 0);
var r = (function (e) {
    if ("function" == typeof WeakMap) {
      var t = new WeakMap();
      new WeakMap();
    }
    return (function (e) {
      if (e && e.__esModule) return e;
      var n,
        r,
        o = { __proto__: null, default: e };
      if (null === e || ("object" != typeof e && "function" != typeof e))
        return o;
      if ((n = t)) {
        if (n.has(e)) return n.get(e);
        n.set(e, o);
      }
      for (const t in e)
        "default" !== t &&
          {}.hasOwnProperty.call(e, t) &&
          ((r =
            (n = Object.defineProperty) &&
            Object.getOwnPropertyDescriptor(e, t)) &&
          (r.get || r.set)
            ? n(o, t, r)
            : (o[t] = e[t]));
      return o;
    })(e);
  })(n(77720 /* vendor/module-77720 */)),
  o = n(12320 /* vendor/module-12320 */);
(t.encode = (e) => {
  const t = e.length;
  let n,
    r = "";
  for (n = 2; n < t; n += 3)
    (r += s[e[n - 2] >> 2]),
      (r += s[((3 & e[n - 2]) << 4) | (e[n - 1] >> 4)]),
      (r += s[((15 & e[n - 1]) << 2) | (e[n] >> 6)]),
      (r += s[63 & e[n]]);
  return (
    n === t + 1 &&
      ((r += s[e[n - 2] >> 2]), (r += s[(3 & e[n - 2]) << 4]), (r += "==")),
    n === t &&
      ((r += s[e[n - 2] >> 2]),
      (r += s[((3 & e[n - 2]) << 4) | (e[n - 1] >> 4)]),
      (r += s[(15 & e[n - 1]) << 2]),
      (r += "=")),
    r
  );
}),
  (t.decode = (e) => {
    const t = i(e),
      n = t.length;
    if (n % 4 != 0)
      return r.left(
        (0, o.DecodeException)(
          t,
          `Length must be a multiple of 4, but is ${n}`,
        ),
      );
    const s = t.indexOf("=");
    if (-1 !== s && (s < n - 2 || (s === n - 2 && "=" !== t[n - 1])))
      return r.left(
        (0, o.DecodeException)(
          t,
          "Found a '=' character, but it is not at the end",
        ),
      );
    try {
      const e = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0,
        o = new Uint8Array((n / 4) * 3 - e);
      for (let e = 0, r = 0; e < n; e += 4, r += 3) {
        const n =
          (a(t.charCodeAt(e)) << 18) |
          (a(t.charCodeAt(e + 1)) << 12) |
          (a(t.charCodeAt(e + 2)) << 6) |
          a(t.charCodeAt(e + 3));
        (o[r] = n >> 16), (o[r + 1] = (n >> 8) & 255), (o[r + 2] = 255 & n);
      }
      return r.right(o);
    } catch (e) {
      return r.left(
        (0, o.DecodeException)(
          t,
          e instanceof Error ? e.message : "Invalid input",
        ),
      );
    }
  });
const i = (e) => e.replace(/[\n\r]/g, "");
function a(e) {
  if (e >= l.length)
    throw new TypeError(`Invalid character ${String.fromCharCode(e)}`);
  const t = l[e];
  if (255 === t)
    throw new TypeError(`Invalid character ${String.fromCharCode(e)}`);
  return t;
}
t.stripCrlf = i;
const s = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/",
  ],
  l = [
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255,
    255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255,
    255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51,
  ];
