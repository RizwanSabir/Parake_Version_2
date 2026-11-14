// vendor/module-40054.js — webpack module 40054
// params: (e, t, n) = (module, exports, require)
"use strict";
t.callSessionKindDisplay = function (e) {
  return o[
    (function (e) {
      return e.isMock
        ? "mock"
        : "interview" === e.mode
          ? "interview"
          : "regular";
    })(e)
  ];
};
const r = n(87952 /* vendor/module-87952 */),
  o = {
    interview: {
      label: "Interview",
      longLabel: "Interview",
      Icon: r.BriefcaseBusiness,
    },
    regular: {
      label: "Regular",
      longLabel: "Regular call",
      Icon: r.Phone,
    },
    mock: { label: "Mock", longLabel: "Mock", Icon: r.Bot },
  };
