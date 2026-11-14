// vendor/module-33476.js — webpack module 33476
// params: (e, t) = (module, exports, require)
function n(e, ...t) {
  const n = new String(String.raw(e, ...t));
  return (
    (n.__sentry_template_string__ = e
      .join("\0")
      .replace(/%/g, "%%")
      .replace(/\0/g, "%s")),
    (n.__sentry_template_values__ = t),
    n
  );
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n;
(t.fmt = r), (t.parameterize = n);
