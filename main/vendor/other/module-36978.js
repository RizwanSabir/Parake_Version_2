// vendor/other/module-36978.js — webpack module 36978
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(43106 /* external/zlib */),
  o = n(77213 /* vendor/other/module-77213 */),
  i = n(65348 /* vendor/other/module-65348 */),
  { kStatusCode: s } = n(74033 /* vendor/other/module-74033 */),
  a = Buffer[Symbol.species],
  c = Buffer.from([0, 0, 255, 255]),
  u = Symbol("permessage-deflate"),
  l = Symbol("total-length"),
  d = Symbol("callback"),
  p = Symbol("buffers"),
  f = Symbol("error");
let h;
function g(e) {
  this[p].push(e), (this[l] += e.length);
}
function m(e) {
  (this[l] += e.length),
    this[u]._maxPayload < 1 || this[l] <= this[u]._maxPayload
      ? this[p].push(e)
      : ((this[f] = new RangeError("Max payload size exceeded")),
        (this[f].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"),
        (this[f][s] = 1009),
        this.removeListener("data", m),
        this.reset());
}
function _(e) {
  (this[u]._inflate = null),
    this[f] ? this[d](this[f]) : ((e[s] = 1007), this[d](e));
}
e.exports = class {
  constructor(e) {
    if (
      ((this._options = e || {}),
      (this._threshold =
        void 0 !== this._options.threshold ? this._options.threshold : 1024),
      (this._maxPayload = 0 | this._options.maxPayload),
      (this._isServer = !!this._options.isServer),
      (this._deflate = null),
      (this._inflate = null),
      (this.params = null),
      !h)
    ) {
      const e =
        void 0 !== this._options.concurrencyLimit
          ? this._options.concurrencyLimit
          : 10;
      h = new i(e);
    }
  }
  static get extensionName() {
    return "permessage-deflate";
  }
  offer() {
    const e = {};
    return (
      this._options.serverNoContextTakeover &&
        (e.server_no_context_takeover = !0),
      this._options.clientNoContextTakeover &&
        (e.client_no_context_takeover = !0),
      this._options.serverMaxWindowBits &&
        (e.server_max_window_bits = this._options.serverMaxWindowBits),
      this._options.clientMaxWindowBits
        ? (e.client_max_window_bits = this._options.clientMaxWindowBits)
        : null == this._options.clientMaxWindowBits &&
          (e.client_max_window_bits = !0),
      e
    );
  }
  accept(e) {
    return (
      (e = this.normalizeParams(e)),
      (this.params = this._isServer
        ? this.acceptAsServer(e)
        : this.acceptAsClient(e)),
      this.params
    );
  }
  cleanup() {
    if (
      (this._inflate && (this._inflate.close(), (this._inflate = null)),
      this._deflate)
    ) {
      const e = this._deflate[d];
      this._deflate.close(),
        (this._deflate = null),
        e &&
          e(
            new Error(
              "The deflate stream was closed while data was being processed",
            ),
          );
    }
  }
  acceptAsServer(e) {
    const t = this._options,
      n = e.find(
        (e) =>
          !(
            (!1 === t.serverNoContextTakeover &&
              e.server_no_context_takeover) ||
            (e.server_max_window_bits &&
              (!1 === t.serverMaxWindowBits ||
                ("number" == typeof t.serverMaxWindowBits &&
                  t.serverMaxWindowBits > e.server_max_window_bits))) ||
            ("number" == typeof t.clientMaxWindowBits &&
              ("number" == typeof e.client_max_window_bits
                ? t.clientMaxWindowBits > e.client_max_window_bits
                : !e.client_max_window_bits))
          ),
      );
    if (!n) throw new Error("None of the extension offers can be accepted");
    return (
      t.serverNoContextTakeover && (n.server_no_context_takeover = !0),
      t.clientNoContextTakeover && (n.client_no_context_takeover = !0),
      "number" == typeof t.serverMaxWindowBits &&
        (n.server_max_window_bits = t.serverMaxWindowBits),
      "number" == typeof t.clientMaxWindowBits
        ? (n.client_max_window_bits = t.clientMaxWindowBits)
        : (!0 !== n.client_max_window_bits && !1 !== t.clientMaxWindowBits) ||
          delete n.client_max_window_bits,
      n
    );
  }
  acceptAsClient(e) {
    const t = e[0];
    if (
      !1 === this._options.clientNoContextTakeover &&
      t.client_no_context_takeover
    )
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    if (t.client_max_window_bits) {
      if (
        !1 === this._options.clientMaxWindowBits ||
        ("number" == typeof this._options.clientMaxWindowBits &&
          t.client_max_window_bits > this._options.clientMaxWindowBits)
      )
        throw new Error(
          'Unexpected or invalid parameter "client_max_window_bits"',
        );
    } else
      "number" == typeof this._options.clientMaxWindowBits &&
        (t.client_max_window_bits = this._options.clientMaxWindowBits);
    return t;
  }
  normalizeParams(e) {
    return (
      e.forEach((e) => {
        Object.keys(e).forEach((t) => {
          let n = e[t];
          if (n.length > 1)
            throw new Error(`Parameter "${t}" must have only a single value`);
          if (((n = n[0]), "client_max_window_bits" === t)) {
            if (!0 !== n) {
              const e = +n;
              if (!Number.isInteger(e) || e < 8 || e > 15)
                throw new TypeError(`Invalid value for parameter "${t}": ${n}`);
              n = e;
            } else if (!this._isServer)
              throw new TypeError(`Invalid value for parameter "${t}": ${n}`);
          } else if ("server_max_window_bits" === t) {
            const e = +n;
            if (!Number.isInteger(e) || e < 8 || e > 15)
              throw new TypeError(`Invalid value for parameter "${t}": ${n}`);
            n = e;
          } else {
            if (
              "client_no_context_takeover" !== t &&
              "server_no_context_takeover" !== t
            )
              throw new Error(`Unknown parameter "${t}"`);
            if (!0 !== n)
              throw new TypeError(`Invalid value for parameter "${t}": ${n}`);
          }
          e[t] = n;
        });
      }),
      e
    );
  }
  decompress(e, t, n) {
    h.add((r) => {
      this._decompress(e, t, (e, t) => {
        r(), n(e, t);
      });
    });
  }
  compress(e, t, n) {
    h.add((r) => {
      this._compress(e, t, (e, t) => {
        r(), n(e, t);
      });
    });
  }
  _decompress(e, t, n) {
    const i = this._isServer ? "client" : "server";
    if (!this._inflate) {
      const e = `${i}_max_window_bits`,
        t =
          "number" != typeof this.params[e]
            ? r.Z_DEFAULT_WINDOWBITS
            : this.params[e];
      (this._inflate = r.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits: t,
      })),
        (this._inflate[u] = this),
        (this._inflate[l] = 0),
        (this._inflate[p] = []),
        this._inflate.on("error", _),
        this._inflate.on("data", m);
    }
    (this._inflate[d] = n),
      this._inflate.write(e),
      t && this._inflate.write(c),
      this._inflate.flush(() => {
        const e = this._inflate[f];
        if (e) return this._inflate.close(), (this._inflate = null), void n(e);
        const r = o.concat(this._inflate[p], this._inflate[l]);
        this._inflate._readableState.endEmitted
          ? (this._inflate.close(), (this._inflate = null))
          : ((this._inflate[l] = 0),
            (this._inflate[p] = []),
            t &&
              this.params[`${i}_no_context_takeover`] &&
              this._inflate.reset()),
          n(null, r);
      });
  }
  _compress(e, t, n) {
    const i = this._isServer ? "server" : "client";
    if (!this._deflate) {
      const e = `${i}_max_window_bits`,
        t =
          "number" != typeof this.params[e]
            ? r.Z_DEFAULT_WINDOWBITS
            : this.params[e];
      (this._deflate = r.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits: t,
      })),
        (this._deflate[l] = 0),
        (this._deflate[p] = []),
        this._deflate.on("data", g);
    }
    (this._deflate[d] = n),
      this._deflate.write(e),
      this._deflate.flush(r.Z_SYNC_FLUSH, () => {
        if (!this._deflate) return;
        let e = o.concat(this._deflate[p], this._deflate[l]);
        t && (e = new a(e.buffer, e.byteOffset, e.length - 4)),
          (this._deflate[d] = null),
          (this._deflate[l] = 0),
          (this._deflate[p] = []),
          t && this.params[`${i}_no_context_takeover`] && this._deflate.reset(),
          n(null, e);
      });
  }
};
