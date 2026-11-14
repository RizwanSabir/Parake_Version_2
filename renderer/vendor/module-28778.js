// vendor/module-28778.js — webpack module 28778
// params: (e, t) = (module, exports, require)
"use strict";
function n(e, t) {
  e.children &&
    (e.children = e.children.map((e) => {
      if ((n(e, t), "inlineMath" !== e.type)) return e;
      const r = e.position?.start.offset,
        o = e.position?.end.offset;
      if (void 0 === r || void 0 === o) return e;
      if (t.startsWith("$$", r)) return e;
      const i = t.slice(r + 1, o - 1);
      return /^[\s{]|\s$/.test(i) || /\d/.test(t.charAt(o))
        ? { type: "text", value: t.slice(r, o) }
        : e;
    }));
}
t.remarkStrictInlineMath = function () {
  return (e, t) => {
    n(e, "string" == typeof t.value ? t.value : "");
  };
};
