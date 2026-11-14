// vendor/other/module-77999.js — webpack module 77999
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
t.addHeaderToSession = function (e, t, n) {
  e.webRequest.onHeadersReceived((e, r) => {
    r(
      (function (e = {}, t, n) {
        if (e[t]) {
          const r = e[t];
          Array.isArray(r) ? r.push(n) : (e[t] = [r, n]);
        } else e[t] = n;
        return { responseHeaders: e };
      })(e.responseHeaders, t, n),
    );
  });
};
