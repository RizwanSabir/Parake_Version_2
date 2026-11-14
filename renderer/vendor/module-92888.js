// vendor/module-92888.js — webpack module 92888
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => h });
var n = r(4044 /* vendor/module-4044 */),
  o = r(47893 /* vendor/module-47893 */),
  i = r(47313 /* vendor/module-47313 */),
  s = {};
(s["[object Float32Array]"] =
  s["[object Float64Array]"] =
  s["[object Int8Array]"] =
  s["[object Int16Array]"] =
  s["[object Int32Array]"] =
  s["[object Uint8Array]"] =
  s["[object Uint8ClampedArray]"] =
  s["[object Uint16Array]"] =
  s["[object Uint32Array]"] =
    !0),
  (s["[object Arguments]"] =
    s["[object Array]"] =
    s["[object ArrayBuffer]"] =
    s["[object Boolean]"] =
    s["[object DataView]"] =
    s["[object Date]"] =
    s["[object Error]"] =
    s["[object Function]"] =
    s["[object Map]"] =
    s["[object Number]"] =
    s["[object Object]"] =
    s["[object RegExp]"] =
    s["[object Set]"] =
    s["[object String]"] =
    s["[object WeakMap]"] =
      !1);
var u = r(58126 /* vendor/module-58126 */),
  a = r(10248 /* vendor/module-10248 */),
  c = a.A && a.A.isTypedArray;
const h = c
  ? (0, u.A)(c)
  : function (t) {
      return (0, i.A)(t) && (0, o.A)(t.length) && !!s[(0, n.A)(t)];
    };
