// vendor/module-12320.js — webpack module 12320
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.isEncodeException =
    t.isDecodeException =
    t.encoder =
    t.decoder =
    t.EncodeExceptionTypeId =
    t.EncodeException =
    t.DecodeExceptionTypeId =
    t.DecodeException =
      void 0);
var r = n(84552 /* vendor/module-84552 */);
const o = (t.DecodeExceptionTypeId = Symbol.for(
  "effect/Encoding/errors/Decode",
));
(t.DecodeException = (e, t) => {
  const n = { _tag: "DecodeException", [o]: o, input: e };
  return (0, r.isString)(t) && (n.message = t), n;
}),
  (t.isDecodeException = (e) => (0, r.hasProperty)(e, o));
const i = (t.EncodeExceptionTypeId = Symbol.for(
  "effect/Encoding/errors/Encode",
));
(t.EncodeException = (e, t) => {
  const n = { _tag: "EncodeException", [i]: i, input: e };
  return (0, r.isString)(t) && (n.message = t), n;
}),
  (t.isEncodeException = (e) => (0, r.hasProperty)(e, i)),
  (t.encoder = new TextEncoder()),
  (t.decoder = new TextDecoder());
