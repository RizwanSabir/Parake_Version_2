// vendor/other/module-7191.js — webpack module 7191
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { create: r } = n(46850 /* vendor/other/module-46850 */),
  o = n(98995 /* external/node_module */),
  i = n(79280 /* vendor/other/module-79280 */),
  { pathToFileURL: s } = n(73136 /* external/node_url */),
  a = n(56859 /* vendor/other/module-56859 */),
  { emitDiagnostics: c } = n(95951 /* vendor/other/module-95951 */),
  u = n(3680 /* vendor/other/module-3680 */)(
    "@apm-js-collab/tracing-hooks:module-patch",
  );
e.exports = class {
  constructor({ instrumentations: e = [] } = {}) {
    (this.packages = new Set(e.map((e) => e.module.name))),
      (this.instrumentator = r(e)),
      (this.compile = o.prototype._compile);
  }
  patch() {
    const e = this;
    o.prototype._compile = function (...t) {
      const [r, o] = t,
        l = i(o);
      if (l && e.packages.has(l.name)) {
        u("found resolved module, checking if there is a transformer %s", o);
        const i = a(l.basedir, l.name),
          d = e.instrumentator.getTransformer(l.name, i, l.path);
        if (d) {
          u("transforming file %s", o);
          try {
            const e = d.transform(r, "cjs");
            (t[0] = e?.code),
              c({ url: s(o).href, moduleName: d.moduleName }),
              process.env.TRACING_DUMP &&
                (function (e, t) {
                  const r = n(48161 /* external/node_os */),
                    o = n(76760 /* external/node_path */),
                    i = n(73024 /* external/node_fs */),
                    s = process.env.TRACING_DUMP_DIR ?? r.tmpdir(),
                    a = o.dirname(t),
                    c = o.basename(t),
                    l = o.join(s, a),
                    d = o.join(l, c);
                  u("Dumping patched code to: %s", d),
                    i.mkdirSync(l, { recursive: !0 }),
                    i.writeFileSync(d, e);
                })(t[0], o);
          } catch (e) {
            u("Error transforming module %s: %o", o, e),
              c({
                url: s(o).href,
                moduleName: d.moduleName,
                error: e,
              });
          } finally {
            d.free();
          }
        }
      }
      return e.compile.apply(this, t);
    };
  }
  unpatch() {
    o.prototype._compile = this.compile;
  }
};
