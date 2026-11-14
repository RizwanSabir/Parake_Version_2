// app/lib/handle-client-update-required.js — webpack module 86819
// params: (e, t) = (module, exports, require)
"use strict";
t.handleClientUpdateRequired = void 0;
let n = !1;
t.handleClientUpdateRequired = () => {
  n ||
    ((n = !0),
    window.electron.ipcRendererProxy.invoke(
      "renderer/report-client-update-required",
    ));
};
