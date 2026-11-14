// vendor/other/module-15462.js — webpack module 15462
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = /dist\/lite\/(index|common-[^/]+)\.node\.(cjs\.js|mjs)$/,
  i = [
    ...[
      { functionName: "addDoc", channelName: "add-doc" },
      { functionName: "getDocs", channelName: "get-docs" },
      { functionName: "setDoc", channelName: "set-doc" },
      { functionName: "deleteDoc", channelName: "delete-doc" },
    ].map(({ functionName: e, channelName: t }) => ({
      channelName: t,
      module: {
        name: "@firebase/firestore",
        versionRange: ">=3.0.0 <5",
        filePath: o,
      },
      functionQuery: { functionName: e, kind: "Auto" },
    })),
    ...[
      {
        file: "lib/v2/providers/https.js",
        functionName: "onRequest",
        channelName: "http-request",
      },
      {
        file: "lib/v2/providers/https.js",
        functionName: "onCall",
        channelName: "http-call",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentCreated",
        channelName: "firestore-created",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentCreatedWithAuthContext",
        channelName: "firestore-created",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentUpdated",
        channelName: "firestore-updated",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentUpdatedWithAuthContext",
        channelName: "firestore-updated",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentDeleted",
        channelName: "firestore-deleted",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentDeletedWithAuthContext",
        channelName: "firestore-deleted",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentWritten",
        channelName: "firestore-written",
      },
      {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentWrittenWithAuthContext",
        channelName: "firestore-written",
      },
      {
        file: "lib/v2/providers/scheduler.js",
        functionName: "onSchedule",
        channelName: "scheduler",
      },
      {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectFinalized",
        channelName: "storage-finalized",
      },
      {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectArchived",
        channelName: "storage-archived",
      },
      {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectDeleted",
        channelName: "storage-deleted",
      },
      {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectMetadataUpdated",
        channelName: "storage-metadata-updated",
      },
    ].map(({ file: e, functionName: t, channelName: n }) => ({
      channelName: n,
      module: {
        name: "firebase-functions",
        versionRange: ">=6.0.0 <7",
        filePath: e,
      },
      functionQuery: { functionName: t, kind: "Sync" },
    })),
  ],
  s = r.toSubscribeInjections(i);
(t.firebaseChannels = {
  FIREBASE_FIRESTORE_ADD_DOC: "orchestrion:@firebase/firestore:add-doc",
  FIREBASE_FIRESTORE_GET_DOCS: "orchestrion:@firebase/firestore:get-docs",
  FIREBASE_FIRESTORE_SET_DOC: "orchestrion:@firebase/firestore:set-doc",
  FIREBASE_FIRESTORE_DELETE_DOC: "orchestrion:@firebase/firestore:delete-doc",
  FIREBASE_FUNCTIONS_HTTP_REQUEST:
    "orchestrion:firebase-functions:http-request",
  FIREBASE_FUNCTIONS_HTTP_CALL: "orchestrion:firebase-functions:http-call",
  FIREBASE_FUNCTIONS_FIRESTORE_CREATED:
    "orchestrion:firebase-functions:firestore-created",
  FIREBASE_FUNCTIONS_FIRESTORE_UPDATED:
    "orchestrion:firebase-functions:firestore-updated",
  FIREBASE_FUNCTIONS_FIRESTORE_DELETED:
    "orchestrion:firebase-functions:firestore-deleted",
  FIREBASE_FUNCTIONS_FIRESTORE_WRITTEN:
    "orchestrion:firebase-functions:firestore-written",
  FIREBASE_FUNCTIONS_SCHEDULER: "orchestrion:firebase-functions:scheduler",
  FIREBASE_FUNCTIONS_STORAGE_FINALIZED:
    "orchestrion:firebase-functions:storage-finalized",
  FIREBASE_FUNCTIONS_STORAGE_ARCHIVED:
    "orchestrion:firebase-functions:storage-archived",
  FIREBASE_FUNCTIONS_STORAGE_DELETED:
    "orchestrion:firebase-functions:storage-deleted",
  FIREBASE_FUNCTIONS_STORAGE_METADATA_UPDATED:
    "orchestrion:firebase-functions:storage-metadata-updated",
}),
  (t.firebaseConfig = i),
  (t.firebaseSubscribeInjection = s);
