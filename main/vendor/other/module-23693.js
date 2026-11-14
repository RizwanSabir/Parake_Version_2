// vendor/other/module-23693.js — webpack module 23693
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e) {
  return (
    !(!e || "object" != typeof e) &&
    ((function (e) {
      return (
        "type" in e && "string" == typeof e.type && "source" in e && n(e.source)
      );
    })(e) ||
      o(e) ||
      (function (e) {
        return (
          "image_url" in e &&
          ("string" == typeof e.image_url
            ? e.image_url.startsWith("data:")
            : r(e))
        );
      })(e) ||
      i(e) ||
      s(e) ||
      (function (e) {
        return (
          "media_type" in e && "string" == typeof e.media_type && "data" in e
        );
      })(e) ||
      (function (e) {
        return (
          "type" in e &&
          "file" === e.type &&
          "mediaType" in e &&
          "string" == typeof e.mediaType &&
          "data" in e &&
          "string" == typeof e.data &&
          !e.data.startsWith("http://") &&
          !e.data.startsWith("https://")
        );
      })(e) ||
      (function (e) {
        return (
          "type" in e &&
          "image" === e.type &&
          "image" in e &&
          "string" == typeof e.image &&
          !e.image.startsWith("http://") &&
          !e.image.startsWith("https://")
        );
      })(e) ||
      (function (e) {
        return "type" in e && ("blob" === e.type || "base64" === e.type);
      })(e) ||
      (function (e) {
        return "b64_json" in e;
      })(e) ||
      (function (e) {
        return "type" in e && "result" in e && "image_generation" === e.type;
      })(e) ||
      (function (e) {
        return (
          "uri" in e && "string" == typeof e.uri && e.uri.startsWith("data:")
        );
      })(e))
  );
}
function r(e) {
  return (
    "image_url" in e &&
    !!e.image_url &&
    "object" == typeof e.image_url &&
    "url" in e.image_url &&
    "string" == typeof e.image_url.url &&
    e.image_url.url.startsWith("data:")
  );
}
function o(e) {
  return (
    "inlineData" in e &&
    !!e.inlineData &&
    "object" == typeof e.inlineData &&
    "data" in e.inlineData &&
    "string" == typeof e.inlineData.data
  );
}
function i(e) {
  return (
    "type" in e &&
    "input_audio" === e.type &&
    "input_audio" in e &&
    !!e.input_audio &&
    "object" == typeof e.input_audio &&
    "data" in e.input_audio &&
    "string" == typeof e.input_audio.data
  );
}
function s(e) {
  return (
    "type" in e &&
    "file" === e.type &&
    "file" in e &&
    !!e.file &&
    "object" == typeof e.file &&
    "file_data" in e.file &&
    "string" == typeof e.file.file_data
  );
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const a = "[Blob substitute]",
  c = ["image_url", "data", "content", "b64_json", "result", "uri", "image"];
(t.isContentMedia = n),
  (t.stripInlineMediaFromSingleMessage = function e(t) {
    const u = { ...t };
    n(u.source) && (u.source = e(u.source)),
      o(t) && (u.inlineData = { ...t.inlineData, data: a }),
      r(t) && (u.image_url = { ...t.image_url, url: a }),
      i(t) && (u.input_audio = { ...t.input_audio, data: a }),
      s(t) && (u.file = { ...t.file, file_data: a });
    for (const e of c) "string" == typeof u[e] && (u[e] = a);
    return u;
  });
