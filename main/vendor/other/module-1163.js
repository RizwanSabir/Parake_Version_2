// vendor/other/module-1163.js — webpack module 1163
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/other/module-82579 */),
  o = n(23295 /* vendor/other/module-23295 */),
  i = n(75122 /* vendor/other/module-75122 */);
function s(e) {
  return {
    ...e,
    path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
    keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
    unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0,
  };
}
function a(e) {
  return e.map((e) => ("number" == typeof e ? "<array>" : e)).join(".");
}
function c(e) {
  const t = new Set();
  for (const n of e.issues) {
    const e = a(n.path);
    e.length > 0 && t.add(e);
  }
  const n = Array.from(t);
  if (0 === n.length) {
    let t = "variable";
    if (e.issues.length > 0) {
      const n = e.issues[0];
      void 0 !== n &&
        "expected" in n &&
        "string" == typeof n.expected &&
        (t = n.expected);
    }
    return `Failed to validate ${t}`;
  }
  return `Failed to validate keys: ${i.truncate(n.join(", "), 100)}`;
}
function u(e, t = !1, n, r) {
  if (
    !(
      n.exception?.values &&
      r.originalException &&
      ((i = r.originalException),
      o.isError(i) && "ZodError" === i.name && Array.isArray(i.issues)) &&
      0 !== r.originalException.issues.length
    )
  )
    return n;
  var i;
  try {
    const o = (
      t ? r.originalException.issues : r.originalException.issues.slice(0, e)
    ).map(s);
    return (
      t &&
        (Array.isArray(r.attachments) || (r.attachments = []),
        r.attachments.push({
          filename: "zod_issues.json",
          data: JSON.stringify({ issues: o }),
        })),
      {
        ...n,
        exception: {
          ...n.exception,
          values: [
            {
              ...n.exception.values[0],
              value: c(r.originalException),
            },
            ...n.exception.values.slice(1),
          ],
        },
        extra: { ...n.extra, "zoderror.issues": o.slice(0, e) },
      }
    );
  } catch (e) {
    return {
      ...n,
      extra: {
        ...n.extra,
        "zoderrors sentry integration parse error": {
          message:
            "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
          error:
            e instanceof Error
              ? `${e.name}: ${e.message}\n${e.stack}`
              : "unknown",
        },
      },
    };
  }
}
const l = r.defineIntegration((e = {}) => {
  const t = e.limit ?? 10;
  return {
    name: "ZodErrors",
    processEvent: (n, r) => u(t, e.saveZodIssuesAsAttachment, n, r),
  };
});
(t.applyZodErrorsToEvent = u),
  (t.flattenIssue = s),
  (t.flattenIssuePath = a),
  (t.formatIssueMessage = c),
  (t.zodErrorsIntegration = l);
