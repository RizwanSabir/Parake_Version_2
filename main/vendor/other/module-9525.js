// vendor/other/module-9525.js — webpack module 9525
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.GenericDifferentialDownloader = void 0;
const r = n(29866 /* vendor/other/module-29866 */);
class o extends r.DifferentialDownloader {
  download(e, t) {
    return this.doDownload(e, t);
  }
}
t.GenericDifferentialDownloader = o;
