// vendor/other/module-26748.js — webpack module 26748
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37067 /* external/node_http */);
var o;
n(44708 /* external/node_https */);
const i = Symbol("AgentBaseInternalState");
class s extends ((o = r.Agent), o) {
  constructor(e) {
    super(e), (this[i] = {});
  }
  isSecureEndpoint(e) {
    if (e) {
      if ("boolean" == typeof e.secureEndpoint) return e.secureEndpoint;
      if ("string" == typeof e.protocol) return "https:" === e.protocol;
    }
    const { stack: t } = new Error();
    return (
      "string" == typeof t &&
      t
        .split("\n")
        .some(
          (e) =>
            -1 !== e.indexOf("(https.js:") || -1 !== e.indexOf("node:https:"),
        )
    );
  }
  createSocket(e, t, n) {
    const o = { ...t, secureEndpoint: this.isSecureEndpoint(t) };
    Promise.resolve()
      .then(() => this.connect(e, o))
      .then((s) => {
        if (s instanceof r.Agent) return s.addRequest(e, o);
        (this[i].currentSocket = s), super.createSocket(e, t, n);
      }, n);
  }
  createConnection() {
    const e = this[i].currentSocket;
    if (((this[i].currentSocket = void 0), !e))
      throw new Error("No socket was returned in the `connect()` function");
    return e;
  }
  get defaultPort() {
    return this[i].defaultPort ?? ("https:" === this.protocol ? 443 : 80);
  }
  set defaultPort(e) {
    this[i] && (this[i].defaultPort = e);
  }
  get protocol() {
    return this[i].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
  }
  set protocol(e) {
    this[i] && (this[i].protocol = e);
  }
}
t.Agent = s;
