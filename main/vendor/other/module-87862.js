// vendor/other/module-87862.js — webpack module 87862
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(60261 /* vendor/other/module-60261 */),
  s = n(84526 /* vendor/other/module-84526 */);
class a extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-mongodb", o.SDK_VERSION, e);
  }
  init() {
    const { v3PatchConnection: e, v3UnpatchConnection: t } =
        this._getV3ConnectionPatches(),
      {
        v4PatchConnectionCallback: n,
        v4PatchConnectionPromise: o,
        v4UnpatchConnection: s,
      } = this._getV4ConnectionPatches(),
      { v4PatchConnectionPool: a, v4UnpatchConnectionPool: c } =
        this._getV4ConnectionPoolPatches();
    return [
      new r.InstrumentationNodeModuleDefinition(
        "mongodb",
        [">=3.3.0 <4"],
        void 0,
        void 0,
        [
          new i.InstrumentationNodeModuleFile(
            "mongodb/lib/core/wireprotocol/index.js",
            [">=3.3.0 <4"],
            e,
            t,
          ),
        ],
      ),
      new r.InstrumentationNodeModuleDefinition(
        "mongodb",
        [">=4.0.0 <8"],
        void 0,
        void 0,
        [
          new i.InstrumentationNodeModuleFile(
            "mongodb/lib/cmap/connection.js",
            [">=4.0.0 <6.4"],
            n,
            s,
          ),
          new i.InstrumentationNodeModuleFile(
            "mongodb/lib/cmap/connection.js",
            [">=6.4.0 <8"],
            o,
            s,
          ),
          new i.InstrumentationNodeModuleFile(
            "mongodb/lib/cmap/connection_pool.js",
            [">=4.0.0 <6.4"],
            a,
            c,
          ),
        ],
      ),
    ];
  }
  _getV3ConnectionPatches() {
    return {
      v3PatchConnection: (e) => (
        r.isWrapped(e.insert) && this._unwrap(e, "insert"),
        this._wrap(e, "insert", s.getV3PatchOperation("insert")),
        r.isWrapped(e.remove) && this._unwrap(e, "remove"),
        this._wrap(e, "remove", s.getV3PatchOperation("remove")),
        r.isWrapped(e.update) && this._unwrap(e, "update"),
        this._wrap(e, "update", s.getV3PatchOperation("update")),
        r.isWrapped(e.command) && this._unwrap(e, "command"),
        this._wrap(e, "command", s.getV3PatchCommand()),
        r.isWrapped(e.query) && this._unwrap(e, "query"),
        this._wrap(e, "query", s.getV3PatchFind()),
        r.isWrapped(e.getMore) && this._unwrap(e, "getMore"),
        this._wrap(e, "getMore", s.getV3PatchCursor()),
        e
      ),
      v3UnpatchConnection: (e) => {
        void 0 !== e &&
          (this._unwrap(e, "insert"),
          this._unwrap(e, "remove"),
          this._unwrap(e, "update"),
          this._unwrap(e, "command"),
          this._unwrap(e, "query"),
          this._unwrap(e, "getMore"));
      },
    };
  }
  _getV4ConnectionPoolPatches() {
    return {
      v4PatchConnectionPool: (e) => {
        const t = e.ConnectionPool.prototype;
        return (
          r.isWrapped(t.checkOut) && this._unwrap(t, "checkOut"),
          this._wrap(t, "checkOut", s.getV4ConnectionPoolCheckOut()),
          e
        );
      },
      v4UnpatchConnectionPool: (e) => {
        void 0 !== e && this._unwrap(e.ConnectionPool.prototype, "checkOut");
      },
    };
  }
  _getV4ConnectionPatches() {
    return {
      v4PatchConnectionCallback: (e) => (
        r.isWrapped(e.Connection.prototype.command) &&
          this._unwrap(e.Connection.prototype, "command"),
        this._wrap(
          e.Connection.prototype,
          "command",
          s.getV4PatchCommandCallback(),
        ),
        e
      ),
      v4PatchConnectionPromise: (e) => (
        r.isWrapped(e.Connection.prototype.command) &&
          this._unwrap(e.Connection.prototype, "command"),
        this._wrap(
          e.Connection.prototype,
          "command",
          s.getV4PatchCommandPromise(),
        ),
        e
      ),
      v4UnpatchConnection: (e) => {
        void 0 !== e && this._unwrap(e.Connection.prototype, "command");
      },
    };
  }
}
t.MongoDBInstrumentation = a;
