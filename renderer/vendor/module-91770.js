// vendor/module-91770.js — webpack module 91770
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(24499 /* vendor/module-24499 */);
t.applySdkMetadata = function (e, t, n = [t], o = "npm") {
  const i = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});
  i.name ||
    ((i.name = `sentry.javascript.${t}`),
    (i.packages = n.map((e) => ({
      name: `${o}:@sentry/${e}`,
      version: r.SDK_VERSION,
    }))),
    (i.version = r.SDK_VERSION));
};
