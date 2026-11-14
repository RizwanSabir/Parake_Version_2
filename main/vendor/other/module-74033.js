// vendor/other/module-74033.js — webpack module 74033
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const t = ["nodebuffer", "arraybuffer", "fragments"],
  n = "undefined" != typeof Blob;
n && t.push("blob"),
  (e.exports = {
    BINARY_TYPES: t,
    CLOSE_TIMEOUT: 3e4,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob: n,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {},
  });
