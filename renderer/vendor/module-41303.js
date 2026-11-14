// vendor/module-41303.js — webpack module 41303
// params: (e, t) = (module, exports, require)
"use strict";
t.resolveListBodyState = function ({
  loading: e,
  error: t,
  totalCount: n,
  isFiltered: r,
}) {
  return t && void 0 === n
    ? "error"
    : e
      ? "loading"
      : 0 !== n
        ? "list"
        : r
          ? "no-results"
          : "empty";
};
