// vendor/other/module-30690.js — webpack module 30690
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.UpdaterSignal =
    t.UPDATE_DOWNLOADED =
    t.DOWNLOAD_PROGRESS =
    t.CancellationToken =
      void 0),
  (t.addHandler = o);
const r = n(53674 /* vendor/other/module-53674 */);
function o(e, t, n) {
  e.on(t, n);
}
Object.defineProperty(t, "CancellationToken", {
  enumerable: !0,
  get: function () {
    return r.CancellationToken;
  },
}),
  (t.DOWNLOAD_PROGRESS = "download-progress"),
  (t.UPDATE_DOWNLOADED = "update-downloaded"),
  (t.UpdaterSignal = class {
    constructor(e) {
      this.emitter = e;
    }
    login(e) {
      o(this.emitter, "login", e);
    }
    progress(e) {
      o(this.emitter, t.DOWNLOAD_PROGRESS, e);
    }
    updateDownloaded(e) {
      o(this.emitter, t.UPDATE_DOWNLOADED, e);
    }
    updateCancelled(e) {
      o(this.emitter, "update-cancelled", e);
    }
  });
