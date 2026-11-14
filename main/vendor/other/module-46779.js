// vendor/other/module-46779.js — webpack module 46779
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = class {
  disposers = [];
  format = "{eventSource}#{eventName}:";
  formatters = {
    app: {
      "certificate-error": ({ args: e }) =>
        this.arrayToObject(e.slice(1, 4), ["url", "error", "certificate"]),
      "child-process-gone": ({ args: e }) => (1 === e.length ? e[0] : e),
      "render-process-gone": ({ args: [e, t] }) =>
        t && "object" == typeof t
          ? { ...t, ...this.getWebContentsDetails(e) }
          : [],
    },
    webContents: {
      "console-message": ({ args: [e, t, n, r] }) => {
        if (!(e < 3)) return { message: t, source: `${r}:${n}` };
      },
      "did-fail-load": ({ args: e }) =>
        this.arrayToObject(e, [
          "errorCode",
          "errorDescription",
          "validatedURL",
          "isMainFrame",
          "frameProcessId",
          "frameRoutingId",
        ]),
      "did-fail-provisional-load": ({ args: e }) =>
        this.arrayToObject(e, [
          "errorCode",
          "errorDescription",
          "validatedURL",
          "isMainFrame",
          "frameProcessId",
          "frameRoutingId",
        ]),
      "plugin-crashed": ({ args: e }) =>
        this.arrayToObject(e, ["name", "version"]),
      "preload-error": ({ args: e }) =>
        this.arrayToObject(e, ["preloadPath", "error"]),
    },
  };
  events = {
    app: {
      "certificate-error": !0,
      "child-process-gone": !0,
      "render-process-gone": !0,
    },
    webContents: {
      "did-fail-load": !0,
      "did-fail-provisional-load": !0,
      "plugin-crashed": !0,
      "preload-error": !0,
      unresponsive: !0,
    },
  };
  externalApi = void 0;
  level = "error";
  scope = "";
  constructor(e = {}) {
    this.setOptions(e);
  }
  setOptions({
    events: e,
    externalApi: t,
    level: n,
    logger: r,
    format: o,
    formatters: i,
    scope: s,
  }) {
    "object" == typeof e && (this.events = e),
      "object" == typeof t && (this.externalApi = t),
      "string" == typeof n && (this.level = n),
      "object" == typeof r && (this.logger = r),
      ("string" != typeof o && "function" != typeof o) || (this.format = o),
      "object" == typeof i && (this.formatters = i),
      "string" == typeof s && (this.scope = s);
  }
  startLogging(e = {}) {
    this.setOptions(e), this.disposeListeners();
    for (const e of this.getEventNames(this.events.app))
      this.disposers.push(
        this.externalApi.onAppEvent(e, (...t) => {
          this.handleEvent({
            eventSource: "app",
            eventName: e,
            handlerArgs: t,
          });
        }),
      );
    for (const e of this.getEventNames(this.events.webContents))
      this.disposers.push(
        this.externalApi.onEveryWebContentsEvent(e, (...t) => {
          this.handleEvent({
            eventSource: "webContents",
            eventName: e,
            handlerArgs: t,
          });
        }),
      );
  }
  stopLogging() {
    this.disposeListeners();
  }
  arrayToObject(e, t) {
    const n = {};
    return (
      t.forEach((t, r) => {
        n[t] = e[r];
      }),
      e.length > t.length && (n.unknownArgs = e.slice(t.length)),
      n
    );
  }
  disposeListeners() {
    this.disposers.forEach((e) => e()), (this.disposers = []);
  }
  formatEventLog({ eventName: e, eventSource: t, handlerArgs: n }) {
    const [r, ...o] = n;
    if ("function" == typeof this.format)
      return this.format({
        args: o,
        event: r,
        eventName: e,
        eventSource: t,
      });
    const i = this.formatters[t]?.[e];
    let s = o;
    if (
      ("function" == typeof i &&
        (s = i({ args: o, event: r, eventName: e, eventSource: t })),
      !s)
    )
      return;
    const a = {};
    return (
      Array.isArray(s)
        ? (a.args = s)
        : "object" == typeof s && Object.assign(a, s),
      "webContents" === t &&
        Object.assign(a, this.getWebContentsDetails(r?.sender)),
      [
        this.format
          .replace("{eventSource}", "app" === t ? "App" : "WebContents")
          .replace("{eventName}", e),
        a,
      ]
    );
  }
  getEventNames(e) {
    return e && "object" == typeof e
      ? Object.entries(e)
          .filter(([e, t]) => t)
          .map(([e]) => e)
      : [];
  }
  getWebContentsDetails(e) {
    if (!e?.loadURL) return {};
    try {
      return { webContents: { id: e.id, url: e.getURL() } };
    } catch {
      return {};
    }
  }
  handleEvent({ eventName: e, eventSource: t, handlerArgs: n }) {
    const r = this.formatEventLog({
      eventName: e,
      eventSource: t,
      handlerArgs: n,
    });
    if (r) {
      const e = this.scope ? this.logger.scope(this.scope) : this.logger;
      e?.[this.level]?.(...r);
    }
  }
};
