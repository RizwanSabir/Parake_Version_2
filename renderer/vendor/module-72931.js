// vendor/module-72931.js — webpack module 72931
// params: (e, t, n) = (module, exports, require)
"use strict";
t.mapOutsideMarkdownCode = function (e, t, { inlineCode: n = !0 } = {}) {
  const i = [];
  o((0, r.fromMarkdown)(e), n, i);
  let a = "",
    s = 0;
  for (const [n, r] of i) (a += t(e.slice(s, n)) + e.slice(n, r)), (s = r);
  return a + t(e.slice(s));
};
const r = n(19434 /* vendor/module-19434 */);
function o(e, t, n) {
  if ("code" === e.type || (t && "inlineCode" === e.type)) {
    const t = e.position?.start.offset,
      r = e.position?.end.offset;
    return void (void 0 !== t && void 0 !== r && n.push([t, r]));
  }
  for (const r of e.children ?? []) o(r, t, n);
}
