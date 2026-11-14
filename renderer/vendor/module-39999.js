// vendor/module-39999.js — webpack module 39999
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(2084 /* vendor/module-2084 */);
t.estimateSerializedSpanSizeInBytes = function (e) {
  let t = 156;
  if (
    ((t += 2 * e.name.length),
    (t += r.estimateTypedAttributesSizeInBytes(e.attributes)),
    e.links && e.links.length > 0)
  ) {
    const n = e.links[0],
      o = n?.attributes;
    t +=
      (100 + (o ? r.estimateTypedAttributesSizeInBytes(o) : 0)) *
      e.links.length;
  }
  return t;
};
