// vendor/other/module-3977.js — webpack module 3977
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { isUtf8: r } = n(20181 /* external/buffer */),
  { hasBlob: o } = n(74033 /* vendor/other/module-74033 */);
function i(e) {
  const t = e.length;
  let n = 0;
  for (; n < t; )
    if (128 & e[n])
      if (192 == (224 & e[n])) {
        if (n + 1 === t || 128 != (192 & e[n + 1]) || 192 == (254 & e[n]))
          return !1;
        n += 2;
      } else if (224 == (240 & e[n])) {
        if (
          n + 2 >= t ||
          128 != (192 & e[n + 1]) ||
          128 != (192 & e[n + 2]) ||
          (224 === e[n] && 128 == (224 & e[n + 1])) ||
          (237 === e[n] && 160 == (224 & e[n + 1]))
        )
          return !1;
        n += 3;
      } else {
        if (240 != (248 & e[n])) return !1;
        if (
          n + 3 >= t ||
          128 != (192 & e[n + 1]) ||
          128 != (192 & e[n + 2]) ||
          128 != (192 & e[n + 3]) ||
          (240 === e[n] && 128 == (240 & e[n + 1])) ||
          (244 === e[n] && e[n + 1] > 143) ||
          e[n] > 244
        )
          return !1;
        n += 4;
      }
    else n++;
  return !0;
}
if (
  ((e.exports = {
    isBlob: function (e) {
      return (
        o &&
        "object" == typeof e &&
        "function" == typeof e.arrayBuffer &&
        "string" == typeof e.type &&
        "function" == typeof e.stream &&
        ("Blob" === e[Symbol.toStringTag] || "File" === e[Symbol.toStringTag])
      );
    },
    isValidStatusCode: function (e) {
      return (
        (e >= 1e3 && e <= 1014 && 1004 !== e && 1005 !== e && 1006 !== e) ||
        (e >= 3e3 && e <= 4999)
      );
    },
    isValidUTF8: i,
    tokenChars: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      0, 1, 0,
    ],
  }),
  r)
)
  e.exports.isValidUTF8 = function (e) {
    return e.length < 24 ? i(e) : r(e);
  };
else if (!process.env.WS_NO_UTF_8_VALIDATE)
  try {
    const t = n(
      Object(
        (function () {
          var e = new Error("Cannot find module 'utf-8-validate'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })(),
      ),
    );
    e.exports.isValidUTF8 = function (e) {
      return e.length < 32 ? i(e) : t(e);
    };
  } catch (e) {}
