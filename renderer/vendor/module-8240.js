// vendor/module-8240.js — webpack module 8240
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  return e[0].value;
}
(t.LIST_SORT_VALUES = t.LIST_SORT_OPTIONS = void 0),
  (t.defaultSortOf = n),
  (t.isDefaultSort = function (e, t) {
    return 0 === t.length || e === n(t);
  }),
  (t.parseSort = function (e) {
    const t = /^(.+)_(asc|desc)$/.exec(e);
    return t ? { field: t[1], direction: t[2] } : { field: e, direction: null };
  }),
  (t.LIST_SORT_OPTIONS = [
    { value: "createdAt_desc", label: "Newest" },
    { value: "createdAt_asc", label: "Oldest" },
    { value: "title_asc", label: "Name A – Z" },
    { value: "title_desc", label: "Name Z – A" },
  ]),
  (t.LIST_SORT_VALUES = t.LIST_SORT_OPTIONS.map((e) => e.value));
