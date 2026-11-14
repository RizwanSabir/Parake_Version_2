// vendor/other/module-40566.js — webpack module 40566
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.ShareLoopbackCapture = void 0),
  (t.ShareLoopbackCapture = class {
    deps;
    #p = null;
    #f = null;
    constructor(e) {
      this.deps = e;
    }
    start(e) {
      if ((this.stop(), !this.#h(e)))
        return {
          ok: !1,
          error: "the selected device is no longer connected",
        };
      try {
        const t = this.deps.createCapture(),
          n = () => this.#p === t,
          r = (e, t) => {
            n() && this.#g(t);
          },
          o = (e, t) => {
            n() &&
              (this.deps.logError("Share loopback capture failed", {
                message: t,
              }),
              this.stop(),
              this.#m(t));
          };
        return t.start(e, r, o), (this.#p = t), this.#_(), { ok: !0 };
      } catch (e) {
        return {
          ok: !1,
          error: e instanceof Error ? e.message : String(e),
        };
      }
    }
    #h(e) {
      try {
        return this.deps.listDevices().some((t) => t.id === e);
      } catch {
        return !0;
      }
    }
    stop() {
      this.#f?.(), (this.#f = null), this.#p?.stop(), (this.#p = null);
    }
    #_() {
      const e = this.deps.getWindow();
      if (!e || e.isDestroyed()) return;
      const { webContents: t } = e,
        n = () => this.stop(),
        r = (e) => {
          e.isSameDocument || this.stop();
        };
      t.on("render-process-gone", n),
        t.on("destroyed", n),
        t.on("did-start-navigation", r),
        (this.#f = () => {
          t.off("render-process-gone", n),
            t.off("destroyed", n),
            t.off("did-start-navigation", r);
        });
    }
    #g(e) {
      const t = this.deps.getWindow();
      t && !t.isDestroyed() ? this.deps.sendAudio(t, e) : this.stop();
    }
    #m(e) {
      const t = this.deps.getWindow();
      t && !t.isDestroyed() ? this.deps.sendError(t, e) : this.stop();
    }
  });
