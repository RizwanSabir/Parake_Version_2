// vendor/module-22909.js — webpack module 22909
// params: (e, t) = (module, exports, require)
"use strict";
t.getDocumentSelectionLabel = function ({
  selectedIds: e,
  totalCount: t,
  getTitleById: n,
}) {
  return 0 === e.length
    ? null
    : t > 0 && e.length === t
      ? "All documents"
      : 1 === e.length
        ? n(e[0]) || "Document"
        : `${e.length} documents`;
};
