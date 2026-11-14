// vendor/module-4001.js — webpack module 4001
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.globalValue = void 0);
const n = "effect/GlobalValue";
let r;
t.globalValue = (e, t) => (
  r || ((globalThis[n] ??= new Map()), (r = globalThis[n])),
  r.has(e) || r.set(e, t()),
  r.get(e)
);
