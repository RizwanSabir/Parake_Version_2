// vendor/other/module-12202.js — webpack module 12202
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.contentUnionToMessages = function e(t, n = "user") {
    return "string" == typeof t
      ? [{ role: n, content: t }]
      : Array.isArray(t)
        ? t.flatMap((t) => e(t, n))
        : "object" == typeof t && t
          ? "role" in t && "string" == typeof t.role
            ? [t]
            : "parts" in t
              ? [{ ...t, role: n }]
              : [{ role: n, content: t }]
          : [];
  });
