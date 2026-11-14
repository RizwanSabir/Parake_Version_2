// vendor/other/module-26895.js — webpack module 26895
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(57786 /* vendor/other/module-57786 */),
  o = n(27352 /* vendor/other/module-27352 */);
let i, s, a, c;
function u(e) {
  const t = o.GLOBAL_OBJ._sentryDebugIds,
    n = o.GLOBAL_OBJ._debugIds;
  if (!t && !n) return {};
  const r = t ? Object.keys(t) : [],
    u = n ? Object.keys(n) : [];
  if (c && r.length === s && u.length === a) return c;
  (s = r.length), (a = u.length), (c = {}), i || (i = {});
  const l = (t, n) => {
    for (const r of t) {
      const t = n[r],
        o = i?.[r];
      if (o && c && t) (c[o[0]] = t), i && (i[r] = [o[0], t]);
      else if (t) {
        const n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          const o = n[e],
            s = o?.filename;
          if (s && c && i) {
            (c[s] = t), (i[r] = [s, t]);
            break;
          }
        }
      }
    }
  };
  return t && l(r, t), n && l(u, n), c;
}
(t.getDebugImagesForResources = function (e, t) {
  const n = u(e);
  if (!n) return [];
  const o = [];
  for (const e of t) {
    const t = r.normalizeStackTracePath(e);
    t && n[t] && o.push({ type: "sourcemap", code_file: e, debug_id: n[t] });
  }
  return o;
}),
  (t.getFilenameToDebugIdMap = u);
