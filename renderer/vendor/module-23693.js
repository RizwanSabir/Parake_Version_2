// vendor/module-23693.js — webpack module 23693
// params: (e, t) = (module, exports, require)
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
      a(e) ||
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
function a(e) {
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
const s = "[Blob substitute]",
  l = ["image_url", "data", "content", "b64_json", "result", "uri", "image"];
(t.isContentMedia = n),
  (t.stripInlineMediaFromSingleMessage = function e(t) {
    const c = { ...t };
    n(c.source) && (c.source = e(c.source)),
      o(t) && (c.inlineData = { ...t.inlineData, data: s }),
      r(t) && (c.image_url = { ...t.image_url, url: s }),
      i(t) && (c.input_audio = { ...t.input_audio, data: s }),
      a(t) && (c.file = { ...t.file, file_data: s });
    for (const e of l) "string" == typeof c[e] && (c[e] = s);
    return c;
  });
