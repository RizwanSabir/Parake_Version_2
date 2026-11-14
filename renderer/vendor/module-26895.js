// vendor/module-26895.js — webpack module 26895
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(57786 /* vendor/module-57786 */),
  o = n(27352 /* vendor/module-27352 */);
let i, a, s, l;
function c(e) {
  const t = o.GLOBAL_OBJ._sentryDebugIds,
    n = o.GLOBAL_OBJ._debugIds;
  if (!t && !n) return {};
  const r = t ? Object.keys(t) : [],
    c = n ? Object.keys(n) : [];
  if (l && r.length === a && c.length === s) return l;
  (a = r.length), (s = c.length), (l = {}), i || (i = {});
  const u = (t, n) => {
    for (const r of t) {
      const t = n[r],
        o = i?.[r];
      if (o && l && t) (l[o[0]] = t), i && (i[r] = [o[0], t]);
      else if (t) {
        const n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          const o = n[e],
            a = o?.filename;
          if (a && l && i) {
            (l[a] = t), (i[r] = [a, t]);
            break;
          }
        }
      }
    }
  };
  return t && u(r, t), n && u(c, n), l;
}
(t.getDebugImagesForResources = function (e, t) {
  const n = c(e);
  if (!n) return [];
  const o = [];
  for (const e of t) {
    const t = r.normalizeStackTracePath(e);
    t && n[t] && o.push({ type: "sourcemap", code_file: e, debug_id: n[t] });
  }
  return o;
}),
  (t.getFilenameToDebugIdMap = c);
