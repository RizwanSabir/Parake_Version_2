// vendor/module-83453.js — webpack module 83453
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(20216 /* vendor/module-20216 */);
t.defaultPiiToCollectionOptions = function (e) {
  return !0 === e
    ? {
        userInfo: !0,
        cookies: !0,
        httpHeaders: { request: !0, response: !0 },
        httpBodies: [
          "incomingRequest",
          "outgoingRequest",
          "incomingResponse",
          "outgoingResponse",
        ],
        urlQueryParams: !0,
        graphQL: { document: !0, variables: !0 },
        genAI: { inputs: !0, outputs: !0 },
        databaseQueryData: !0,
        stackFrameVariables: !0,
        frameContextLines: 7,
      }
    : {
        userInfo: !1,
        cookies: { deny: r.PII_HEADER_SNIPPETS },
        httpHeaders: {
          request: { deny: r.PII_HEADER_SNIPPETS },
          response: { deny: r.PII_HEADER_SNIPPETS },
        },
        httpBodies: [],
        urlQueryParams: { deny: r.PII_HEADER_SNIPPETS },
        graphQL: { document: !0, variables: !0 },
        genAI: { inputs: !1, outputs: !1 },
        databaseQueryData: !1,
        stackFrameVariables: !0,
        frameContextLines: 7,
      };
};
