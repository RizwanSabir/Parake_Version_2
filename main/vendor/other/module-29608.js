// vendor/other/module-29608.js — webpack module 29608
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
let r;
try {
  r = n(68998 /* vendor/other/module-68998 */);
} catch (e) {
  r = n(79896 /* external/fs */);
}
const o = n(95309 /* vendor/other/module-95309 */),
  { stringify: i, stripBom: s } = n(13393 /* vendor/other/module-13393 */),
  a = o.fromPromise(async function (e, t = {}) {
    "string" == typeof t && (t = { encoding: t });
    const n = t.fs || r,
      i = !("throws" in t) || t.throws;
    let a,
      c = await o.fromCallback(n.readFile)(e, t);
    c = s(c);
    try {
      a = JSON.parse(c, t ? t.reviver : null);
    } catch (t) {
      if (i) throw ((t.message = `${e}: ${t.message}`), t);
      return null;
    }
    return a;
  }),
  c = o.fromPromise(async function (e, t, n = {}) {
    const s = n.fs || r,
      a = i(t, n);
    await o.fromCallback(s.writeFile)(e, a, n);
  });
e.exports = {
  readFile: a,
  readFileSync: function (e, t = {}) {
    "string" == typeof t && (t = { encoding: t });
    const n = t.fs || r,
      o = !("throws" in t) || t.throws;
    try {
      let r = n.readFileSync(e, t);
      return (r = s(r)), JSON.parse(r, t.reviver);
    } catch (t) {
      if (o) throw ((t.message = `${e}: ${t.message}`), t);
      return null;
    }
  },
  writeFile: c,
  writeFileSync: function (e, t, n = {}) {
    const o = n.fs || r,
      s = i(t, n);
    return o.writeFileSync(e, s, n);
  },
};
