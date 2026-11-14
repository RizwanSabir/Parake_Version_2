// vendor/module-916.js — webpack module 916
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.addAutoIpAddressToSession = function (e) {
    "aggregates" in e
      ? void 0 === e.attrs?.ip_address &&
        (e.attrs = { ...e.attrs, ip_address: "{{auto}}" })
      : void 0 === e.ipAddress && (e.ipAddress = "{{auto}}");
  }),
  (t.addAutoIpAddressToUser = function (e) {
    void 0 === e.user?.ip_address &&
      (e.user = { ...e.user, ip_address: "{{auto}}" });
  });
