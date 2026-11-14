// vendor/other/module-23920.js — webpack module 23920
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var n;
(t.OperationKind = void 0),
  (t.computeOperations = function (e, t, r) {
    const s = i(e.files),
      a = i(t.files);
    let c = null;
    const u = t.files[0],
      l = [],
      d = u.name,
      p = s.get(d);
    if (null == p) throw new Error(`no file ${d} in old blockmap`);
    const f = a.get(d);
    let h = 0;
    const { checksumToOffset: g, checksumToOldSize: m } = (function (e, t, n) {
      const r = new Map(),
        o = new Map();
      let i = t;
      for (let t = 0; t < e.checksums.length; t++) {
        const s = e.checksums[t],
          a = e.sizes[t],
          c = o.get(s);
        if (void 0 === c) r.set(s, i), o.set(s, a);
        else if (null != n.debug) {
          const e = c === a ? "(same size)" : `(size: ${c}, this size: ${a})`;
          n.debug(
            `${s} duplicated in blockmap ${e}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`,
          );
        }
        i += a;
      }
      return { checksumToOffset: r, checksumToOldSize: o };
    })(s.get(d), p.offset, r);
    let _ = u.offset;
    for (let e = 0; e < f.checksums.length; _ += f.sizes[e], e++) {
      const t = f.sizes[e],
        i = f.checksums[e];
      let s = g.get(i);
      null != s &&
        m.get(i) !== t &&
        (r.warn(
          `Checksum ("${i}") matches, but size differs (old: ${m.get(i)}, new: ${t})`,
        ),
        (s = void 0)),
        void 0 === s
          ? (h++,
            null != c && c.kind === n.DOWNLOAD && c.end === _
              ? (c.end += t)
              : ((c = { kind: n.DOWNLOAD, start: _, end: _ + t }),
                o(c, l, i, e)))
          : null != c && c.kind === n.COPY && c.end === s
            ? (c.end += t)
            : ((c = { kind: n.COPY, start: s, end: s + t }), o(c, l, i, e));
    }
    return (
      h > 0 &&
        r.info(
          `File${"file" === u.name ? "" : " " + u.name} has ${h} changed blocks`,
        ),
      l
    );
  }),
  (function (e) {
    (e[(e.COPY = 0)] = "COPY"), (e[(e.DOWNLOAD = 1)] = "DOWNLOAD");
  })(n || (t.OperationKind = n = {}));
const r =
  "true" === process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES;
function o(e, t, o, i) {
  if (r && 0 !== t.length) {
    const r = t[t.length - 1];
    if (r.kind === e.kind && e.start < r.end && e.start > r.start) {
      const t = [r.start, r.end, e.start, e.end].reduce((e, t) =>
        e < t ? e : t,
      );
      throw new Error(
        `operation (block index: ${i}, checksum: ${o}, kind: ${n[e.kind]}) overlaps previous operation (checksum: ${o}):\nabs: ${r.start} until ${r.end} and ${e.start} until ${e.end}\nrel: ${r.start - t} until ${r.end - t} and ${e.start - t} until ${e.end - t}`,
      );
    }
  }
  t.push(e);
}
function i(e) {
  const t = new Map();
  for (const n of e) t.set(n.name, n);
  return t;
}
