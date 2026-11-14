// vendor/module-87093.js — webpack module 87093
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.initMixpanel = function (e, t, n) {
    (i = n),
      l ||
        (o.default.init(e, {
          ...t,
          hooks: { ...t.hooks, before_track: p },
        }),
        (u = !0 === t.track_pageview && o.default.has_opted_out_tracking())),
      o.default.register(n),
      (l = !0),
      void 0 !== s && (f(s), (s = void 0)),
      (function () {
        for (const [e, t] of c) d(e, t);
        c = [];
      })();
  }),
  (t.setMixpanelTrackingAllowed = function (e) {
    l ? f(e) : (s = e);
  }),
  (t.identifyMixpanelUser = function (e) {
    (a = e), o.default.identify(e);
  }),
  (t.resetMixpanelUser = function () {
    (a = void 0), o.default.reset(), i && o.default.register(i);
  }),
  (t.setMixpanelPeopleProperties = function (e) {
    o.default.people.set(e);
  }),
  (t.trackClientEvent = function (e, t) {
    l ? d(e, t) : c.push([e, t]);
  });
const o = r(n(42890 /* vendor/module-42890 */));
let i,
  a,
  s,
  l = !1,
  c = [],
  u = !1;
function d(e, t) {
  o.default.track(e, { ...t, ...i });
}
function p(e, t) {
  return [e, { ...t, brand: i?.brand }];
}
function f(e) {
  e
    ? o.default.has_opted_out_tracking() &&
      (o.default.opt_in_tracking({ track: () => {} }),
      i && o.default.register(i),
      a && o.default.identify(a),
      u && o.default.track_pageview(),
      (u = !1))
    : o.default.has_opted_out_tracking() ||
      o.default.opt_out_tracking({ delete_user: !1 });
}
