// vendor/module-44306.js — webpack module 44306
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.transitionStatusMapping = t.TransitionStatusDataAttributes = void 0);
let n = (t.TransitionStatusDataAttributes = (function (e) {
  return (
    (e.startingStyle = "data-starting-style"),
    (e.endingStyle = "data-ending-style"),
    e
  );
})({}));
const r = { [n.startingStyle]: "" },
  o = { [n.endingStyle]: "" };
t.transitionStatusMapping = {
  transitionStatus: (e) => ("starting" === e ? r : "ending" === e ? o : null),
};
