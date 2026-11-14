// vendor/module-77754.js — webpack module 77754
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.K = void 0),
  (t.flushTranscriptEntries = async function ({
    callSessionId: e,
    entries: t,
    apiUrl: n,
    headers: r = {},
    mode: o,
    fetchImpl: a,
  }) {
    const l = { sent: 0, dropped: 0, failed: 0, requests: 0 };
    if (0 === t.length) return l;
    const c = a ?? globalThis.fetch,
      u = [];
    if ("unload" === o) {
      const { taken: n, rest: r } = s(e, [...t].reverse());
      u.push(n), (l.dropped = r.length);
    } else {
      let n = t;
      for (; n.length > 0; ) {
        const { taken: t, rest: r } = s(e, n);
        u.push(t), (n = r);
      }
    }
    for (const t of u) {
      l.requests += 1;
      try {
        if (
          !(
            await c(n, {
              method: "POST",
              keepalive: !0,
              headers: { "Content-Type": "application/json", ...r },
              body: i(e, t),
            })
          ).ok
        ) {
          l.failed += t.length;
          continue;
        }
        l.sent += t.length;
      } catch {
        l.failed += t.length;
      }
    }
    return l;
  });
const r = n(45482 /* vendor/module-45482 */);
t.K = 65536;
const o = new TextEncoder(),
  i = (e, t) => JSON.stringify({ callSessionId: e, transcripts: t }),
  a = (e) => o.encode(e).length;
function s(e, n) {
  const o = [];
  let s = 0;
  for (; s < n.length && o.length < r.TRANSCRIPT_ENTRIES_MAX; ) {
    const r = [...o, n[s]];
    if (o.length > 0 && a(i(e, r)) > t.K) break;
    o.push(n[s]), (s += 1);
  }
  return { taken: o, rest: n.slice(s) };
}
