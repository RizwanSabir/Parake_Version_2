// vendor/module-2084.js — webpack module 2084
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */);
function o(e) {
  return (
    "object" == typeof e &&
    null != e &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function i(e, t) {
  const { value: n, unit: r } = o(e) ? e : { value: e, unit: void 0 },
    i = (function (e) {
      if (Array.isArray(e)) return { value: e, type: "array" };
      const t =
        "string" == typeof e
          ? "string"
          : "boolean" == typeof e
            ? "boolean"
            : "number" != typeof e || Number.isNaN(e)
              ? null
              : Number.isInteger(e)
                ? "integer"
                : "double";
      return t ? { value: e, type: t } : void 0;
    })(n),
    a = r && "string" == typeof r ? { unit: r } : {};
  if (i) return { ...i, ...a };
  if (!t || ("skip-undefined" === t && void 0 === n)) return;
  let s = "";
  try {
    s = JSON.stringify(n) ?? "";
  } catch {}
  return { value: s, type: "string", ...a };
}
function a(e) {
  return "string" == typeof e
    ? 2 * e.length
    : "boolean" == typeof e
      ? 4
      : "number" == typeof e
        ? 8
        : 0;
}
(t.attributeValueToTypedAttributeValue = i),
  (t.estimateTypedAttributesSizeInBytes = function (e) {
    if (!e) return 0;
    let t = 0;
    for (const [n, o] of Object.entries(e)) {
      (t += 2 * n.length),
        (t += 2 * o.type.length),
        (t += 2 * (o.unit?.length ?? 0));
      const e = o.value;
      Array.isArray(e)
        ? (t += a(e[0]) * e.length)
        : r.isPrimitive(e)
          ? (t += a(e))
          : (t += 100);
    }
    return t;
  }),
  (t.isAttributeObject = o),
  (t.serializeAttributes = function (e, t = !1) {
    const n = {};
    for (const [r, o] of Object.entries(e ?? {})) {
      const e = i(o, t);
      e && (n[r] = e);
    }
    return n;
  });
