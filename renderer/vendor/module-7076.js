// vendor/module-7076.js — webpack module 7076
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.progressStateAttributesMapping = void 0);
var r = n(86788 /* vendor/module-86788 */);
t.progressStateAttributesMapping = {
  status: (e) =>
    "progressing" === e
      ? { [r.ProgressRootDataAttributes.progressing]: "" }
      : "complete" === e
        ? { [r.ProgressRootDataAttributes.complete]: "" }
        : "indeterminate" === e
          ? { [r.ProgressRootDataAttributes.indeterminate]: "" }
          : null,
};
