// vendor/module-85860.js — webpack module 85860
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.isEncodeException =
    t.isDecodeException =
    t.encodeUriComponent =
    t.encodeHex =
    t.encodeBase64Url =
    t.encodeBase64 =
    t.decodeUriComponent =
    t.decodeHexString =
    t.decodeHex =
    t.decodeBase64UrlString =
    t.decodeBase64Url =
    t.decodeBase64String =
    t.decodeBase64 =
    t.EncodeExceptionTypeId =
    t.EncodeException =
    t.DecodeExceptionTypeId =
    t.DecodeException =
      void 0);
var r = l(n(77720 /* vendor/module-77720 */)),
  o = l(n(96142 /* vendor/module-96142 */)),
  i = l(n(14537 /* vendor/module-14537 */)),
  a = l(n(12320 /* vendor/module-12320 */)),
  s = l(n(25128 /* vendor/module-25128 */));
function l(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (l = function (e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      a = { __proto__: null, default: e };
    if (null === e || ("object" != typeof e && "function" != typeof e))
      return a;
    if ((o = t ? r : n)) {
      if (o.has(e)) return o.get(e);
      o.set(e, a);
    }
    for (const t in e)
      "default" !== t &&
        {}.hasOwnProperty.call(e, t) &&
        ((i =
          (o = Object.defineProperty) &&
          Object.getOwnPropertyDescriptor(e, t)) &&
        (i.get || i.set)
          ? o(a, t, i)
          : (a[t] = e[t]));
    return a;
  })(e, t);
}
t.encodeBase64 = (e) =>
  "string" == typeof e ? o.encode(a.encoder.encode(e)) : o.encode(e);
const c = (e) => o.decode(e);
(t.decodeBase64 = c),
  (t.decodeBase64String = (e) => r.map(c(e), (e) => a.decoder.decode(e))),
  (t.encodeBase64Url = (e) =>
    "string" == typeof e ? i.encode(a.encoder.encode(e)) : i.encode(e));
const u = (e) => i.decode(e);
(t.decodeBase64Url = u),
  (t.decodeBase64UrlString = (e) => r.map(u(e), (e) => a.decoder.decode(e))),
  (t.encodeHex = (e) =>
    "string" == typeof e ? s.encode(a.encoder.encode(e)) : s.encode(e));
const d = (e) => s.decode(e);
(t.decodeHex = d),
  (t.decodeHexString = (e) => r.map(d(e), (e) => a.decoder.decode(e))),
  (t.encodeUriComponent = (e) =>
    r.try({
      try: () => encodeURIComponent(e),
      catch: (t) => f(e, t instanceof Error ? t.message : "Invalid input"),
    })),
  (t.decodeUriComponent = (e) =>
    r.try({
      try: () => decodeURIComponent(e),
      catch: (t) => p(e, t instanceof Error ? t.message : "Invalid input"),
    })),
  (t.DecodeExceptionTypeId = a.DecodeExceptionTypeId);
const p = (t.DecodeException = a.DecodeException),
  f =
    ((t.isDecodeException = a.isDecodeException),
    (t.EncodeExceptionTypeId = a.EncodeExceptionTypeId),
    (t.EncodeException = a.EncodeException));
t.isEncodeException = a.isEncodeException;
