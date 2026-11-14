// vendor/other/module-4664.js — webpack module 4664
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(41538 /* vendor/other/module-41538 */),
  o = n(56623 /* vendor/other/module-56623 */);
function i(e, t) {
  const n = [];
  return (
    e[t].forEach(function (e) {
      let t = n.length;
      n.forEach(function (n, r) {
        n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = r);
      }),
        (n[t] = e);
    }),
    n
  );
}
function s(e) {
  return this.extend(e);
}
(s.prototype.extend = function (e) {
  let t = [],
    n = [];
  if (e instanceof o) n.push(e);
  else if (Array.isArray(e)) n = n.concat(e);
  else {
    if (!e || (!Array.isArray(e.implicit) && !Array.isArray(e.explicit)))
      throw new r(
        "Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })",
      );
    e.implicit && (t = t.concat(e.implicit)),
      e.explicit && (n = n.concat(e.explicit));
  }
  t.forEach(function (e) {
    if (!(e instanceof o))
      throw new r(
        "Specified list of YAML types (or a single Type object) contains a non-Type object.",
      );
    if (e.loadKind && "scalar" !== e.loadKind)
      throw new r(
        "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.",
      );
    if (e.multi)
      throw new r(
        "There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.",
      );
  }),
    n.forEach(function (e) {
      if (!(e instanceof o))
        throw new r(
          "Specified list of YAML types (or a single Type object) contains a non-Type object.",
        );
    });
  const a = Object.create(s.prototype);
  return (
    (a.implicit = (this.implicit || []).concat(t)),
    (a.explicit = (this.explicit || []).concat(n)),
    (a.compiledImplicit = i(a, "implicit")),
    (a.compiledExplicit = i(a, "explicit")),
    (a.compiledTypeMap = (function () {
      const e = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: [],
        },
      };
      function t(t) {
        t.multi
          ? (e.multi[t.kind].push(t), e.multi.fallback.push(t))
          : (e[t.kind][t.tag] = e.fallback[t.tag] = t);
      }
      for (let e = 0, n = arguments.length; e < n; e += 1)
        arguments[e].forEach(t);
      return e;
    })(a.compiledImplicit, a.compiledExplicit)),
    a
  );
}),
  (e.exports = s);
