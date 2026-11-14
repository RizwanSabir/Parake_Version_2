// vendor/other/module-37689.js — webpack module 37689
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e) {
  const t = e.split(".");
  if (t.length > 1) {
    if (2 !== t.length) throw Error(`Invalid member function name ${e}`);
    return t;
  }
  return [e];
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.indexFs = function (e, t) {
    if (!t) throw new Error(JSON.stringify({ member: t }));
    const r = n(t),
      [o, i] = r;
    return i
      ? { objectToPatch: e[o], functionNameToPatch: i }
      : { objectToPatch: e, functionNameToPatch: o };
  }),
  (t.splitTwoLevels = n);
