// vendor/module-94977.js — webpack module 94977
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(49009 /* vendor/module-49009 */),
  o = n(31538 /* vendor/module-31538 */),
  i = n(76403 /* vendor/module-76403 */),
  a = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
function s(e, t) {
  let n;
  return (
    i.forEachEnvelopeItem(
      e,
      (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n),
    ),
    n
  );
}
function l(e, t) {
  return i.createEnvelope(t ? { ...e[0], dsn: t } : e[0], e[1]);
}
(t.MULTIPLEXED_TRANSPORT_EXTRA_KEY = a),
  (t.eventFromEnvelope = s),
  (t.makeMultiplexedTransport = function (e, t) {
    return (n) => {
      const i = e(n),
        c = new Map(),
        u =
          t ||
          ((e) => {
            const t = e.getEvent();
            return t?.extra?.[a] && Array.isArray(t.extra[a]) ? t.extra[a] : [];
          });
      function d(t, i) {
        const a = i ? `${t}:${i}` : t;
        let l = c.get(a);
        if (!l) {
          const u = o.dsnFromString(t);
          if (!u) return;
          const d = r.getEnvelopeEndpointWithUrlEncodedAuth(u, n.tunnel);
          (l = i
            ? (function (e, t) {
                return (n) => {
                  const r = e(n);
                  return {
                    ...r,
                    send: async (e) => {
                      const n = s(e, [
                        "event",
                        "transaction",
                        "profile",
                        "replay_event",
                      ]);
                      return n && (n.release = t), r.send(e);
                    },
                  };
                };
              })(
                e,
                i,
              )({ ...n, url: d })
            : e({ ...n, url: d })),
            c.set(a, l);
        }
        return [t, l];
      }
      return {
        send: async function (e) {
          const t = u({
              envelope: e,
              getEvent: function (t) {
                return s(e, t?.length ? t : ["event"]);
              },
            })
              .map((e) =>
                "string" == typeof e ? d(e, void 0) : d(e.dsn, e.release),
              )
              .filter((e) => !!e),
            n = t.length ? t : [["", i]],
            r = await Promise.all(n.map(([t, n]) => n.send(l(e, t))));
          return r[0];
        },
        flush: async function (e) {
          const t = [...c.values(), i];
          return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e);
        },
      };
    };
  });
