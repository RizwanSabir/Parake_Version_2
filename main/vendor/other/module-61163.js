// vendor/other/module-61163.js — webpack module 61163
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { createFile: r, createFileSync: o } = n(
    88305 /* vendor/other/module-88305 */,
  ),
  { createLink: i, createLinkSync: s } = n(
    76087 /* vendor/other/module-76087 */,
  ),
  { createSymlink: a, createSymlinkSync: c } = n(
    46472 /* vendor/other/module-46472 */,
  );
e.exports = {
  createFile: r,
  createFileSync: o,
  ensureFile: r,
  ensureFileSync: o,
  createLink: i,
  createLinkSync: s,
  ensureLink: i,
  ensureLinkSync: s,
  createSymlink: a,
  createSymlinkSync: c,
  ensureSymlink: a,
  ensureSymlinkSync: c,
};
