// vendor/other/module-64198.js — webpack module 64198
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(77030 /* external/node_net */),
  o = n(47702 /* vendor/other/module-47702 */),
  i = n(60261 /* vendor/other/module-60261 */),
  s = n(88516 /* vendor/other/module-88516 */),
  a = n(96137 /* vendor/other/module-96137 */);
function c(e, t, n) {
  return (
    u(e, n),
    t(e, "addDoc", function (e) {
      return function (t, n) {
        return l("addDoc", t, () => e(t, n));
      };
    }),
    t(e, "getDocs", function (e) {
      return function (t) {
        return l("getDocs", t, () => e(t));
      };
    }),
    t(e, "setDoc", function (e) {
      return function (t, n, r) {
        return l("setDoc", t.parent || t, () =>
          void 0 !== r ? e(t, n, r) : e(t, n),
        );
      };
    }),
    t(e, "deleteDoc", function (e) {
      return function (t) {
        return l("deleteDoc", t.parent || t, () => e(t));
      };
    }),
    e
  );
}
function u(e, t) {
  for (const n of ["addDoc", "getDocs", "setDoc", "deleteDoc"])
    o.isWrapped(e[n]) && t(e, n);
  return e;
}
function l(e, t, n) {
  return a.startSpan(
    {
      name: `${e} ${t.path}`,
      op: "db.query",
      kind: a.SPAN_KIND.CLIENT,
      attributes: {
        [a.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.firebase.otel.firestore",
        [s.DB_OPERATION_NAME]: e,
        ...p(t),
      },
    },
    n,
  );
}
function d(e) {
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
function p(e) {
  const t = e.firestore.app,
    n = t.options,
    r = (e.firestore.toJSON() || {}).settings || {},
    o = {
      [s.DB_COLLECTION_NAME]: e.path,
      [s.DB_NAMESPACE]: t.name,
      [s.DB_SYSTEM_NAME]: "firebase.firestore",
      "firebase.firestore.type": e.type,
      "firebase.firestore.options.projectId": n.projectId,
      "firebase.firestore.options.appId": n.appId,
      "firebase.firestore.options.messagingSenderId": n.messagingSenderId,
      "firebase.firestore.options.storageBucket": n.storageBucket,
    },
    { address: i, port: a } = d(r);
  return i && (o[s.SERVER_ADDRESS] = i), a && (o[s.SERVER_PORT] = a), o;
}
(t.getPortAndAddress = d),
  (t.patchFirestore = function (e, t, n) {
    const r = new o.InstrumentationNodeModuleDefinition(
        "@firebase/firestore",
        e,
        (e) => c(e, t, n),
      ),
      s = [
        "@firebase/firestore/dist/lite/index.node.cjs.js",
        "@firebase/firestore/dist/lite/index.node.mjs.js",
        "@firebase/firestore/dist/lite/index.rn.esm2017.js",
        "@firebase/firestore/dist/lite/index.cjs.js",
      ];
    for (const o of s)
      r.files.push(
        new i.InstrumentationNodeModuleFile(
          o,
          e,
          (e) => c(e, t, n),
          (e) => u(e, n),
        ),
      );
    return r;
  });
