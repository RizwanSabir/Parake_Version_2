// vendor/module-40417.js — webpack module 40417
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(83453 /* vendor/module-83453 */),
  o = {
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
    frameContextLines: 5,
  };
t.resolveDataCollectionOptions = function (e) {
  const t =
      null != e.dataCollection
        ? o
        : r.defaultPiiToCollectionOptions(e.sendDefaultPii),
    n = e.dataCollection ?? {};
  return {
    userInfo: n.userInfo ?? t.userInfo,
    cookies: n.cookies ?? t.cookies,
    httpHeaders: {
      request: n.httpHeaders?.request ?? t.httpHeaders.request,
      response: n.httpHeaders?.response ?? t.httpHeaders.response,
    },
    httpBodies: n.httpBodies ?? t.httpBodies,
    urlQueryParams: n.urlQueryParams ?? n.queryParams ?? t.urlQueryParams,
    graphQL: {
      document: n.graphQL?.document ?? t.graphQL.document,
      variables: n.graphQL?.variables ?? t.graphQL.variables,
    },
    genAI: {
      inputs: n.genAI?.inputs ?? t.genAI.inputs,
      outputs: n.genAI?.outputs ?? t.genAI.outputs,
    },
    databaseQueryData: n.databaseQueryData ?? t.databaseQueryData,
    stackFrameVariables: n.stackFrameVariables ?? t.stackFrameVariables,
    frameContextLines: n.frameContextLines ?? t.frameContextLines,
  };
};
