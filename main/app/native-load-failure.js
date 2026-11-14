// app/native-load-failure.js — webpack module 63043
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.unpackedDirectory = function (e) {
  return e.replace(/app\.asar(?=[\\/]|$)/, "app.asar.unpacked");
}),
  (t.describeNativeLoadFailure = function (e, t, n, o = r.DESKTOP_BRAND) {
    const i = (function (e) {
        const t = [];
        let n = e;
        for (; n instanceof Error && !t.includes(n); ) t.push(n), (n = n.cause);
        return t;
      })(e),
      { name: s, websiteHost: d } = o,
      p = [
        `${s} couldn't load its audio component: ${c(i)}`,
        "",
        u(t, n),
        `Restore ${s} from your antivirus quarantine or allow it, then reinstall from ${d}. If it still fails, paste this message into the support chat at ${d}/dashboard?support=true (Ctrl+C copies it on Windows).`,
        "",
        `Details: ${n.platform}-${n.arch}; component files: ${l(t)}`,
      ].filter((e) => null !== e);
    return new Error(p.join("\n"), { cause: a(i) });
  });
const r = n(26279 /* app/brand-constants */),
  o = "node-loader:",
  i = /(?:\\\\\?\\)?(?:[A-Za-z]:)?[\\/][^\r\n'"]*?[\\/]([^\\/\r\n'"]+\.node)/g;
function s(e) {
  return e.replace(i, "$1");
}
function a(e) {
  const [t, ...n] = e;
  if (!t) return;
  const r = new Error(s(t.message), { cause: a(n) });
  return (r.name = t.name), (r.stack = t.stack && s(t.stack)), r;
}
function c(e) {
  const t = e.find((e) => e.message.startsWith(o)) ?? e.at(-1);
  return t
    ? s(
        t.message
          .slice(t.message.startsWith(o) ? 12 : 0)
          .replace(/^\s*Error:\s*/, "")
          .split(/\r?\n/)
          .find((e) => "" !== e.trim()) ?? "unknown error",
      ).trim()
    : "unknown error";
}
function u(e, t) {
  return null === e
    ? null
    : e.some((e) =>
          (function (e, t) {
            return e.name.includes(`.${t.platform}-${t.arch}`);
          })(e, t),
        )
      ? "The component's file is installed but didn't load; security software blocking it is the usual reason."
      : "The component's file is missing from the installation; security software removing it is the usual reason.";
}
function l(e) {
  return null === e
    ? "unreadable"
    : 0 === e.length
      ? "none"
      : e.map((e) => `${e.name} (${e.size} bytes)`).join(", ");
}
