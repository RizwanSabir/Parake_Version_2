// app/crypto.js — webpack module 35558
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.encrypt = function (e) {
    return o.safeStorage.isEncryptionAvailable()
      ? o.safeStorage.encryptString(e).toString("base64")
      : (i.default.warn(
          "safeStorage.encrypt: encryption is unavailable; cannot encrypt value.",
        ),
        null);
  }),
  (t.decrypt = function (e) {
    if (!e.trim()) return null;
    if (!o.safeStorage.isEncryptionAvailable())
      return (
        i.default.warn(
          "safeStorage.decrypt: encryption is unavailable; cannot decrypt stored value.",
        ),
        null
      );
    try {
      return o.safeStorage.decryptString(Buffer.from(e, "base64"));
    } catch (e) {
      return (
        i.default.warn(
          "safeStorage.decrypt: failed to decode or decrypt stored value.",
          e,
        ),
        null
      );
    }
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */));
