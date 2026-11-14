// vendor/module-42811.js — webpack module 42811
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CONNECTIVITY_CONTEXT_KEY = void 0;
const r = n(511 /* vendor/module-511 */);
r.z.object({
  errorName: r.z.string().min(1).max(500),
  message: r.z.string().min(1).max(5e3),
  source: r.z.string().min(1).max(255),
  cause: r.z.string().max(5e3).optional(),
  stack: r.z.string().max(5e3).optional(),
  callSessionId: r.z.string().min(1),
  expected: r.z.boolean().optional().default(!1),
  severity: r.z.enum(["info", "warning", "error"]).optional().default("error"),
  contextData: r.z.record(r.z.string(), r.z.unknown()).optional().default({}),
}),
  (t.CONNECTIVITY_CONTEXT_KEY = "connectivity");
