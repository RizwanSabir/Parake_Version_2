// vendor/other/module-94977.js — webpack module 94977
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(49009 /* vendor/other/module-49009 */),
  o = n(31538 /* vendor/other/module-31538 */),
  i = n(76403 /* vendor/other/module-76403 */),
  s = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
function a(e, t) {
  let n;
  return (
    i.forEachEnvelopeItem(
      e,
      (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n),
    ),
    n
  );
}
function c(e, t) {
  return i.createEnvelope(t ? { ...e[0], dsn: t } : e[0], e[1]);
}
(t.MULTIPLEXED_TRANSPORT_EXTRA_KEY = s),
  (t.eventFromEnvelope = a),
  (t.makeMultiplexedTransport = function (e, t) {
    return (n) => {
      const i = e(n),
        u = new Map(),
        l =
          t ||
          ((e) => {
            const t = e.getEvent();
            return t?.extra?.[s] && Array.isArray(t.extra[s]) ? t.extra[s] : [];
          });
      function d(t, i) {
        const s = i ? `${t}:${i}` : t;
        let c = u.get(s);
        if (!c) {
          const l = o.dsnFromString(t);
          if (!l) return;
          const d = r.getEnvelopeEndpointWithUrlEncodedAuth(l, n.tunnel);
          (c = i
            ? (function (e, t) {
                return (n) => {
                  const r = e(n);
                  return {
                    ...r,
                    send: async (e) => {
                      const n = a(e, [
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
            u.set(s, c);
        }
        return [t, c];
      }
      return {
        send: async function (e) {
          const t = l({
              envelope: e,
              getEvent: function (t) {
                return a(e, t?.length ? t : ["event"]);
              },
            })
              .map((e) =>
                "string" == typeof e ? d(e, void 0) : d(e.dsn, e.release),
              )
              .filter((e) => !!e),
            n = t.length ? t : [["", i]],
            r = await Promise.all(n.map(([t, n]) => n.send(c(e, t))));
          return r[0];
        },
        flush: async function (e) {
          const t = [...u.values(), i];
          return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e);
        },
      };
    };
  });
