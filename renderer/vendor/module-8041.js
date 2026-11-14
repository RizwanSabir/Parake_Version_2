// vendor/module-8041.js — webpack module 8041
// params: (t, e, r) = (module, exports, require)
"use strict";
e.J = function (t) {
  if (!t) return i.BLANK_URL;
  var e,
    r = n(t.trim());
  do {
    e =
      (r = n(
        (r = o(r)
          .replace(i.htmlCtrlEntityRegex, "")
          .replace(i.ctrlCharactersRegex, "")
          .replace(i.whitespaceEscapeCharsRegex, "")
          .trim()),
      )).match(i.ctrlCharactersRegex) ||
      r.match(i.htmlEntitiesRegex) ||
      r.match(i.htmlCtrlEntityRegex) ||
      r.match(i.whitespaceEscapeCharsRegex);
  } while (e && e.length > 0);
  var a = r;
  if (!a) return i.BLANK_URL;
  if (
    (function (t) {
      return i.relativeFirstCharacters.indexOf(t[0]) > -1;
    })(a)
  )
    return a;
  var s = a.trimStart(),
    l = s.match(i.urlSchemeRegex);
  if (!l) return a;
  var h = l[0].toLowerCase().trim();
  if (i.invalidProtocolRegex.test(h)) return i.BLANK_URL;
  var c = s.replace(/\\/g, "/");
  if ("mailto:" === h || h.includes("://")) return c;
  if ("http:" === h || "https:" === h) {
    if (
      !(function (t) {
        return URL.canParse(t);
      })(c)
    )
      return i.BLANK_URL;
    var d = new URL(c);
    return (
      (d.protocol = d.protocol.toLowerCase()),
      (d.hostname = d.hostname.toLowerCase()),
      d.toString()
    );
  }
  return c;
};
var i = r(25552 /* vendor/module-25552 */);
function o(t) {
  return t
    .replace(i.ctrlCharactersRegex, "")
    .replace(i.htmlEntitiesRegex, function (t, e) {
      return String.fromCharCode(e);
    });
}
function n(t) {
  try {
    return decodeURIComponent(t);
  } catch (e) {
    return t;
  }
}
