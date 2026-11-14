// vendor/module-9137.js — webpack module 9137
// params: (e, t, n) = (module, exports, require)
"use strict";
t.trackManualModelSelection = function ({
  model: e,
  previousModel: t,
  surface: n,
  sessionMode: i,
}) {
  e !== t &&
    (0, r.trackClientEvent)(o.mixpanelEvents.interviewSession.model_selected, {
      model: e,
      previousModel: t,
      surface: n,
      sessionMode: i,
    });
};
const r = n(87093 /* vendor/module-87093 */),
  o = n(22764 /* vendor/module-22764 */);
