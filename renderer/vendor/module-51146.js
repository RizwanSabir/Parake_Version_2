// vendor/module-51146.js — webpack module 51146
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.triggerOpenStateMapping =
    t.pressableTriggerOpenStateMapping =
    t.popupStateMapping =
    t.CommonTriggerDataAttributes =
    t.CommonPopupDataAttributes =
      void 0);
var r = n(44306 /* vendor/module-44306 */);
let o = (t.CommonPopupDataAttributes = (function (e) {
    return (
      (e.open = "data-open"),
      (e.closed = "data-closed"),
      (e[(e.startingStyle = r.TransitionStatusDataAttributes.startingStyle)] =
        "startingStyle"),
      (e[(e.endingStyle = r.TransitionStatusDataAttributes.endingStyle)] =
        "endingStyle"),
      (e.anchorHidden = "data-anchor-hidden"),
      (e.side = "data-side"),
      (e.align = "data-align"),
      e
    );
  })({})),
  i = (t.CommonTriggerDataAttributes = (function (e) {
    return (e.popupOpen = "data-popup-open"), (e.pressed = "data-pressed"), e;
  })({}));
const a = { [i.popupOpen]: "" },
  s = { [i.popupOpen]: "", [i.pressed]: "" },
  l = { [o.open]: "" },
  c = { [o.closed]: "" },
  u = { [o.anchorHidden]: "" };
(t.triggerOpenStateMapping = { open: (e) => (e ? a : null) }),
  (t.pressableTriggerOpenStateMapping = {
    open: (e) => (e ? s : null),
  }),
  (t.popupStateMapping = {
    open: (e) => (e ? l : c),
    anchorHidden: (e) => (e ? u : null),
  });
