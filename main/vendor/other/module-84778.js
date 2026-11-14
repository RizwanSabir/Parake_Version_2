// vendor/other/module-84778.js — webpack module 84778
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(21044 /* vendor/other/module-21044 */),
  o = n(3586 /* vendor/other/module-3586 */);
class i {
  static instances = {};
  dependencies = {};
  errorHandler = null;
  eventLogger = null;
  functions = {};
  hooks = [];
  isDev = !1;
  levels = null;
  logId = null;
  scope = null;
  transports = {};
  variables = {};
  constructor({
    allowUnknownLevel: e = !1,
    dependencies: t = {},
    errorHandler: n,
    eventLogger: s,
    initializeFn: a,
    isDev: c = !1,
    levels: u = ["error", "warn", "info", "verbose", "debug", "silly"],
    logId: l,
    transportFactories: d = {},
    variables: p,
  } = {}) {
    (this.addLevel = this.addLevel.bind(this)),
      (this.create = this.create.bind(this)),
      (this.initialize = this.initialize.bind(this)),
      (this.logData = this.logData.bind(this)),
      (this.processMessage = this.processMessage.bind(this)),
      (this.allowUnknownLevel = e),
      (this.buffering = new o(this)),
      (this.dependencies = t),
      (this.initializeFn = a),
      (this.isDev = c),
      (this.levels = u),
      (this.logId = l),
      (this.scope = r(this)),
      (this.transportFactories = d),
      (this.variables = p || {});
    for (const e of this.levels) this.addLevel(e, !1);
    (this.log = this.info),
      (this.functions.log = this.log),
      (this.errorHandler = n),
      n?.setOptions({ ...t, logFn: this.error }),
      (this.eventLogger = s),
      s?.setOptions({ ...t, logger: this });
    for (const [e, n] of Object.entries(d)) this.transports[e] = n(this, t);
    i.instances[l] = this;
  }
  static getInstance({ logId: e }) {
    return this.instances[e] || this.instances.default;
  }
  addLevel(e, t = this.levels.length) {
    !1 !== t && this.levels.splice(t, 0, e),
      (this[e] = (...t) => this.logData(t, { level: e })),
      (this.functions[e] = this[e]);
  }
  catchErrors(e) {
    return (
      this.processMessage(
        {
          data: ["log.catchErrors is deprecated. Use log.errorHandler instead"],
          level: "warn",
        },
        { transports: ["console"] },
      ),
      this.errorHandler.startCatching(e)
    );
  }
  create(e) {
    return (
      "string" == typeof e && (e = { logId: e }),
      new i({
        dependencies: this.dependencies,
        errorHandler: this.errorHandler,
        initializeFn: this.initializeFn,
        isDev: this.isDev,
        transportFactories: this.transportFactories,
        variables: { ...this.variables },
        ...e,
      })
    );
  }
  compareLevels(e, t, n = this.levels) {
    const r = n.indexOf(e),
      o = n.indexOf(t);
    return -1 === o || -1 === r || o <= r;
  }
  initialize(e = {}) {
    this.initializeFn({ logger: this, ...this.dependencies, ...e });
  }
  logData(e, t = {}) {
    this.buffering.enabled
      ? this.buffering.addMessage({ data: e, date: new Date(), ...t })
      : this.processMessage({ data: e, ...t });
  }
  processMessage(e, { transports: t = this.transports } = {}) {
    if ("errorHandler" === e.cmd)
      return void this.errorHandler.handle(e.error, {
        errorName: e.errorName,
        processType: "renderer",
        showDialog: Boolean(e.showDialog),
      });
    let n = e.level;
    this.allowUnknownLevel ||
      (n = this.levels.includes(e.level) ? e.level : "info");
    const r = {
      date: new Date(),
      logId: this.logId,
      ...e,
      level: n,
      variables: { ...this.variables, ...e.variables },
    };
    for (const [n, o] of this.transportEntries(t))
      if (
        "function" == typeof o &&
        !1 !== o.level &&
        this.compareLevels(o.level, e.level)
      )
        try {
          const e = this.hooks.reduce((e, t) => (e ? t(e, o, n) : e), r);
          e && o({ ...e, data: [...e.data] });
        } catch (e) {
          this.processInternalErrorFn(e);
        }
  }
  processInternalErrorFn(e) {}
  transportEntries(e = this.transports) {
    return (Array.isArray(e) ? e : Object.entries(e))
      .map((e) => {
        switch (typeof e) {
          case "string":
            return this.transports[e] ? [e, this.transports[e]] : null;
          case "function":
            return [e.name, e];
          default:
            return Array.isArray(e) ? e : null;
        }
      })
      .filter(Boolean);
  }
}
e.exports = i;
