// vendor/module-83706.js — webpack module 83706
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getBreadcrumbLogLevelFromHttpStatusCode = function (e) {
    return void 0 === e
      ? void 0
      : e >= 400 && e < 500
        ? "warning"
        : e >= 500
          ? "error"
          : void 0;
  });
