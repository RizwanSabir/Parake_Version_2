// vendor/module-18395.js — webpack module 18395
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.styleDisableScrollbar = void 0);
var r = n(31085 /* vendor/module-31085 */);
const o = "base-ui-disable-scrollbar";
t.styleDisableScrollbar = {
  className: o,
  getElement: (e) =>
    (0, r.jsx)("style", {
      nonce: e,
      href: o,
      precedence: "base-ui:low",
      children: `.${o}{scrollbar-width:none}.${o}::-webkit-scrollbar{display:none}`,
    }),
};
