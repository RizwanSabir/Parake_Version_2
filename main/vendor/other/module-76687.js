// vendor/other/module-76687.js — webpack module 76687
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(77030 /* external/node_net */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */);
function s(e) {
  let t, n;
  if ("string" == typeof e.host)
    if (e.host.startsWith("[")) {
      if (e.host.endsWith("]")) t = e.host.replace(/^\[|\]$/g, "");
      else if (e.host.includes("]:")) {
        const r = e.host.lastIndexOf(":");
        -1 !== r &&
          ((t = e.host.slice(1, r).replace(/^\[|\]$/g, "")),
          (n = e.host.slice(r + 1)));
      }
    } else if (r.isIPv6(e.host)) t = e.host;
    else {
      const r = e.host.lastIndexOf(":");
      -1 !== r
        ? ((t = e.host.slice(0, r)), (n = e.host.slice(r + 1)))
        : (t = e.host);
    }
  return { address: t, port: n ? parseInt(n, 10) : void 0 };
}
function a(e) {
  const t = e.firestore.app,
    n = t.options,
    r = e.firestore.toJSON()?.settings || {},
    i = {
      [o.DB_COLLECTION_NAME]: e.path,
      [o.DB_NAMESPACE]: t.name,
      [o.DB_SYSTEM_NAME]: "firebase.firestore",
      "firebase.firestore.type": e.type,
      "firebase.firestore.options.projectId": n.projectId,
      "firebase.firestore.options.appId": n.appId,
      "firebase.firestore.options.messagingSenderId": n.messagingSenderId,
      "firebase.firestore.options.storageBucket": n.storageBucket,
    },
    { address: a, port: c } = s(r);
  return a && (i[o.SERVER_ADDRESS] = a), c && (i[o.SERVER_PORT] = c), i;
}
(t.getPortAndAddress = s),
  (t.startFirestoreSpan = function (e, t) {
    return i.startInactiveSpan({
      name: `${e} ${t.path}`,
      op: "db.query",
      kind: i.SPAN_KIND.CLIENT,
      attributes: {
        [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
          "auto.firebase.orchestrion.firestore",
        [o.DB_OPERATION_NAME]: e,
        ...a(t),
      },
    });
  });
