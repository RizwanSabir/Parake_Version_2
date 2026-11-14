// app/lib/show-error-toast.js — webpack module 95741
// params: (e, t, n) = (module, exports, require)
"use strict";
t.showErrorToast = function (e) {
  (0, o.showErrorToast)(e, {
    toastError: r.toast.error,
    writeClipboard: (e) => {
      window.electron.ipcRendererProxy.invoke("renderer/write-clipboard", e);
    },
  });
};
const r = n(44572 /* vendor/module-44572 */),
  o = n(79048 /* vendor/module-79048 */);
