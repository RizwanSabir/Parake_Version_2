// vendor/other/module-67441.js — webpack module 67441
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = class {
  externalApi = void 0;
  isActive = !1;
  logFn = void 0;
  onError = void 0;
  showDialog = !0;
  constructor({ externalApi: e, logFn: t, onError: n, showDialog: r } = {}) {
    (this.createIssue = this.createIssue.bind(this)),
      (this.handleError = this.handleError.bind(this)),
      (this.handleRejection = this.handleRejection.bind(this)),
      this.setOptions({
        externalApi: e,
        logFn: t,
        onError: n,
        showDialog: r,
      }),
      (this.startCatching = this.startCatching.bind(this)),
      (this.stopCatching = this.stopCatching.bind(this));
  }
  handle(
    e,
    {
      logFn: t = this.logFn,
      onError: n = this.onError,
      processType: r = "browser",
      showDialog: o = this.showDialog,
      errorName: i = "",
    } = {},
  ) {
    e = (function (e) {
      if (e instanceof Error) return e;
      if (e && "object" == typeof e) {
        if (e.message) return Object.assign(new Error(e.message), e);
        try {
          return new Error(JSON.stringify(e));
        } catch (t) {
          return new Error(`Couldn't normalize error ${String(e)}: ${t}`);
        }
      }
      return new Error(`Can't normalize error ${String(e)}`);
    })(e);
    try {
      if ("function" == typeof n) {
        const t = this.externalApi?.getVersions() || {};
        if (
          !1 ===
          n({
            createIssue: this.createIssue,
            error: e,
            errorName: i,
            processType: r,
            versions: t,
          })
        )
          return;
      }
      i ? t(i, e) : t(e),
        o &&
          !i.includes("rejection") &&
          this.externalApi &&
          this.externalApi.showErrorBox(
            `A JavaScript error occurred in the ${r} process`,
            e.stack,
          );
    } catch {}
  }
  setOptions({ externalApi: e, logFn: t, onError: n, showDialog: r }) {
    "object" == typeof e && (this.externalApi = e),
      "function" == typeof t && (this.logFn = t),
      "function" == typeof n && (this.onError = n),
      "boolean" == typeof r && (this.showDialog = r);
  }
  startCatching({ onError: e, showDialog: t } = {}) {
    this.isActive ||
      ((this.isActive = !0),
      this.setOptions({ onError: e, showDialog: t }),
      process.on("uncaughtException", this.handleError),
      process.on("unhandledRejection", this.handleRejection));
  }
  stopCatching() {
    (this.isActive = !1),
      process.removeListener("uncaughtException", this.handleError),
      process.removeListener("unhandledRejection", this.handleRejection);
  }
  createIssue(e, t) {
    this.externalApi?.openUrl(`${e}?${new URLSearchParams(t).toString()}`);
  }
  handleError(e) {
    this.handle(e, { errorName: "Unhandled" });
  }
  handleRejection(e) {
    const t = e instanceof Error ? e : new Error(JSON.stringify(e));
    this.handle(t, { errorName: "Unhandled rejection" });
  }
};
