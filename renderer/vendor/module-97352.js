// vendor/module-97352.js — webpack module 97352
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.addUserAgentToTransportHeaders = function (e) {
    const t = e._metadata?.sdk,
      n = t?.name && t?.version ? `${t?.name}/${t?.version}` : void 0;
    e.transportOptions = {
      ...e.transportOptions,
      headers: {
        ...(n && { "user-agent": n }),
        ...e.transportOptions?.headers,
      },
    };
  });
