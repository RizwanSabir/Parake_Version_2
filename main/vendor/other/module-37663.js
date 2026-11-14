// vendor/other/module-37663.js — webpack module 37663
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.nil = t.UUID = void 0);
const r = n(76982 /* external/crypto */),
  o = n(93776 /* vendor/other/module-93776 */),
  i = (0, r.randomBytes)(16);
i[0] = 1 | i[0];
const s = {},
  a = [];
for (let e = 0; e < 256; e++) {
  const t = (e + 256).toString(16).substr(1);
  (s[t] = e), (a[e] = t);
}
class c {
  constructor(e) {
    (this.ascii = null), (this.binary = null);
    const t = c.check(e);
    if (!t) throw new Error("not a UUID");
    (this.version = t.version),
      "ascii" === t.format ? (this.ascii = e) : (this.binary = e);
  }
  static v5(e, t) {
    return (function (e, t, n, i, s = l.ASCII) {
      const u = (0, r.createHash)(t);
      if ("string" != typeof e && !Buffer.isBuffer(e))
        throw (0, o.newError)(
          "options.name must be either a string or a Buffer",
          "ERR_INVALID_UUID_NAME",
        );
      u.update(i), u.update(e);
      const d = u.digest();
      let p;
      switch (s) {
        case l.BINARY:
          (d[6] = (15 & d[6]) | n), (d[8] = (63 & d[8]) | 128), (p = d);
          break;
        case l.OBJECT:
          (d[6] = (15 & d[6]) | n), (d[8] = (63 & d[8]) | 128), (p = new c(d));
          break;
        default:
          p =
            a[d[0]] +
            a[d[1]] +
            a[d[2]] +
            a[d[3]] +
            "-" +
            a[d[4]] +
            a[d[5]] +
            "-" +
            a[(15 & d[6]) | n] +
            a[d[7]] +
            "-" +
            a[(63 & d[8]) | 128] +
            a[d[9]] +
            "-" +
            a[d[10]] +
            a[d[11]] +
            a[d[12]] +
            a[d[13]] +
            a[d[14]] +
            a[d[15]];
      }
      return p;
    })(e, "sha1", 80, t);
  }
  toString() {
    var e;
    return (
      null == this.ascii &&
        (this.ascii =
          ((e = this.binary),
          a[e[0]] +
            a[e[1]] +
            a[e[2]] +
            a[e[3]] +
            "-" +
            a[e[4]] +
            a[e[5]] +
            "-" +
            a[e[6]] +
            a[e[7]] +
            "-" +
            a[e[8]] +
            a[e[9]] +
            "-" +
            a[e[10]] +
            a[e[11]] +
            a[e[12]] +
            a[e[13]] +
            a[e[14]] +
            a[e[15]])),
      this.ascii
    );
  }
  inspect() {
    return `UUID v${this.version} ${this.toString()}`;
  }
  static check(e, t = 0) {
    if ("string" == typeof e)
      return (
        (e = e.toLowerCase()),
        !!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(e) &&
          ("00000000-0000-0000-0000-000000000000" === e
            ? { version: void 0, variant: "nil", format: "ascii" }
            : {
                version: (240 & s[e[14] + e[15]]) >> 4,
                variant: u((224 & s[e[19] + e[20]]) >> 5),
                format: "ascii",
              })
      );
    if (Buffer.isBuffer(e)) {
      if (e.length < t + 16) return !1;
      let n = 0;
      for (; n < 16 && 0 === e[t + n]; n++);
      return 16 === n
        ? { version: void 0, variant: "nil", format: "binary" }
        : {
            version: (240 & e[t + 6]) >> 4,
            variant: u((224 & e[t + 8]) >> 5),
            format: "binary",
          };
    }
    throw (0, o.newError)("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE");
  }
  static parse(e) {
    const t = Buffer.allocUnsafe(16);
    let n = 0;
    for (let r = 0; r < 16; r++)
      (t[r] = s[e[n++] + e[n++]]),
        (3 !== r && 5 !== r && 7 !== r && 9 !== r) || (n += 1);
    return t;
  }
}
function u(e) {
  switch (e) {
    case 0:
    case 1:
    case 3:
      return "ncs";
    case 4:
    case 5:
      return "rfc4122";
    case 6:
      return "microsoft";
    default:
      return "future";
  }
}
var l;
(t.UUID = c),
  (c.OID = c.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8")),
  (function (e) {
    (e[(e.ASCII = 0)] = "ASCII"),
      (e[(e.BINARY = 1)] = "BINARY"),
      (e[(e.OBJECT = 2)] = "OBJECT");
  })(l || (l = {})),
  (t.nil = new c("00000000-0000-0000-0000-000000000000"));
