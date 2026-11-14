// vendor/other/module-63973.js — webpack module 63973
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(49009 /* vendor/other/module-49009 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(31538 /* vendor/other/module-31538 */),
  s = n(76403 /* vendor/other/module-76403 */);
t.handleTunnelRequest = async function (e) {
  const { request: t, allowedDsns: n } = e;
  if (0 === n.length)
    return new Response("Tunnel not configured", { status: 500 });
  const a = new Uint8Array(await t.arrayBuffer());
  let c;
  try {
    [c] = s.parseEnvelope(a);
  } catch {
    return new Response("Invalid envelope", { status: 400 });
  }
  if (!c)
    return new Response("Invalid envelope: missing header", {
      status: 400,
    });
  const u = c.dsn;
  if (!u)
    return new Response("Invalid envelope: missing DSN", {
      status: 400,
    });
  if (!n.some((e) => e === u))
    return (
      o.debug.warn(
        `Sentry tunnel: rejected request with unauthorized DSN (${u})`,
      ),
      new Response("DSN not allowed", { status: 403 })
    );
  const l = i.makeDsn(u);
  if (!l)
    return (
      o.debug.warn(`Could not extract DSN Components from: ${u}`),
      new Response("Invalid DSN", { status: 403 })
    );
  const d = r.getEnvelopeEndpointWithUrlEncodedAuth(l);
  try {
    return await fetch(d, {
      method: "POST",
      headers: { "Content-Type": "application/x-sentry-envelope" },
      body: a,
    });
  } catch (e) {
    return (
      o.debug.error("Sentry tunnel: failed to forward envelope", e),
      new Response("Failed to forward envelope to Sentry", {
        status: 500,
      })
    );
  }
};
