// vendor/module-87230.js — webpack module 87230
// params: (e, t) = (module, exports, require)
"use strict";
t.pressedOnControl = function (e) {
  return (
    e instanceof Element &&
    null !==
      e.closest(
        "button, a, input, select, textarea, label, summary, [role='button'], [role='combobox'], [role='menuitem'], [role='switch'], [role='checkbox'], [role='option'], [role='tab'], [role='slider']",
      )
  );
};
