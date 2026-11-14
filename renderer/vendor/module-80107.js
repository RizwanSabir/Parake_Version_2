// vendor/module-80107.js — webpack module 80107
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(20216 /* vendor/module-20216 */),
  o = n(93593 /* vendor/module-93593 */);
t.filterQueryParams = function (e, t) {
  if (!1 === t) return {};
  try {
    const n = new URLSearchParams(e),
      r = {};
    return (
      n.forEach((e, t) => {
        r[t] = e;
      }),
      0 === Object.keys(r).length ? {} : o.filterKeyValueData(r, t)
    );
  } catch {
    return r.FILTERED_VALUE;
  }
};
