// vendor/module-60982.js — webpack module 60982
// params: (e, t) = (module, exports, require)
"use strict";
(t.W = t.PROBE_URLS = void 0),
  (t.pingEndpoint = async function (e) {
    const n = Date.now();
    try {
      return (
        await fetch(e, {
          mode: "no-cors",
          cache: "no-store",
          signal: AbortSignal.timeout(t.W),
        }),
        Date.now() - n
      );
    } catch {
      return null;
    }
  }),
  (t.PROBE_URLS = [
    "https://www.google.com/generate_204",
    "https://cp.cloudflare.com/generate_204",
  ]),
  (t.W = 3e3);
