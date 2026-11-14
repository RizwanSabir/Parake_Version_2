// vendor/other/module-7609.js — webpack module 7609
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(79896 /* external/fs */),
  o = n(70857 /* external/os */),
  i = n(16928 /* external/path */),
  s = n(76688 /* vendor/other/module-76688 */),
  { transform: a } = n(83748 /* vendor/other/module-83748 */),
  { removeStyles: c } = n(82501 /* vendor/other/module-82501 */),
  { format: u, concatFirstStringElements: l } = n(
    41961 /* vendor/other/module-41961 */,
  ),
  { toString: d } = n(62710 /* vendor/other/module-62710 */);
e.exports = function (e, { registry: t = p, externalApi: n } = {}) {
  let s;
  return (
    t.listenerCount("error") < 1 &&
      t.on("error", (e, t) => {
        m(`Can't write to ${t}`, e);
      }),
    Object.assign(h, {
      fileName: f(e.variables.processType),
      format: "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",
      getFile: _,
      inspectOptions: { depth: 5 },
      level: "silly",
      maxSize: 1048576,
      readAllLogs: function ({
        fileFilter: e = (e) => e.endsWith(".log"),
      } = {}) {
        g();
        const t = i.dirname(h.resolvePathFn(s));
        return r.existsSync(t)
          ? r
              .readdirSync(t)
              .map((e) => i.join(t, e))
              .filter(e)
              .map((e) => {
                try {
                  return {
                    path: e,
                    lines: r.readFileSync(e, "utf8").split(o.EOL),
                  };
                } catch {
                  return null;
                }
              })
              .filter(Boolean)
          : [];
      },
      sync: !0,
      transforms: [c, u, l, d],
      writeOptions: { flag: "a", mode: 438, encoding: "utf8" },
      archiveLogFn(e) {
        const t = e.toString(),
          n = i.parse(t);
        try {
          r.renameSync(t, i.join(n.dir, `${n.name}.old${n.ext}`));
        } catch (t) {
          m("Could not rotate log", t);
          const n = Math.round(h.maxSize / 4);
          e.crop(Math.min(n, 262144));
        }
      },
      resolvePathFn: (e) => i.join(e.libraryDefaultDir, e.fileName),
      setAppName(t) {
        e.dependencies.externalApi.setAppName(t);
      },
    })
  );
  function h(t) {
    const n = _(t);
    h.maxSize > 0 && n.size > h.maxSize && (h.archiveLogFn(n), n.reset());
    const r = a({ logger: e, message: t, transport: h });
    n.writeLine(r);
  }
  function g() {
    s ||
      ((s = Object.create(Object.prototype, {
        ...Object.getOwnPropertyDescriptors(n.getPathVariables()),
        fileName: { get: () => h.fileName, enumerable: !0 },
      })),
      "function" == typeof h.archiveLog &&
        ((h.archiveLogFn = h.archiveLog),
        m("archiveLog is deprecated. Use archiveLogFn instead")),
      "function" == typeof h.resolvePath &&
        ((h.resolvePathFn = h.resolvePath),
        m("resolvePath is deprecated. Use resolvePathFn instead")));
  }
  function m(t, n = null, r = "error") {
    const o = [`electron-log.transports.file: ${t}`];
    n && o.push(n),
      e.transports.console({ data: o, date: new Date(), level: r });
  }
  function _(e) {
    g();
    const n = h.resolvePathFn(s, e);
    return t.provide({
      filePath: n,
      writeAsync: !h.sync,
      writeOptions: h.writeOptions,
    });
  }
};
const p = new s();
function f(e = "browser") {
  switch (e) {
    case "renderer":
      return "renderer.log";
    case "worker":
      return "worker.log";
    default:
      return "main.log";
  }
}
