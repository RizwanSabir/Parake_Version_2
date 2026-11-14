// vendor/other/module-77577.js — webpack module 77577
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const n = "MDMP";
function r(e, t) {
  return { dataSize: e.readUInt32LE(t), rva: e.readUInt32LE(t + 4) };
}
function o(e, t) {
  return { streamType: e.readUInt32LE(t), location: r(e, t + 4) };
}
function i(e, t) {
  return e.subarray(t.rva, t.rva + t.dataSize);
}
function s(e, t) {
  const n = e.readUInt32LE(t);
  if (n > 102400)
    throw new Error(`String length ${n} exceeds maximum allowed 102400`);
  const r = t + 4 + n;
  if (r > e.length)
    throw new Error(`String extends beyond buffer bounds (${r} > ${e.length})`);
  return e.toString("utf8", t + 4, r);
}
function a(e, t, n) {
  const r = e.readUInt32LE(n),
    o = e.readUInt16LE(n + 4),
    i = e.readUInt32LE(n + 8);
  if (1 === o) return { name: s(t, r), value: s(t, i) };
}
function c(e, t) {
  const n = e.subarray(t.rva, t.rva + t.dataSize);
  if (0 === n.length) return {};
  const o = (function (e) {
      return r(e, 20);
    })(n),
    i = e.subarray(o.rva, o.rva + o.dataSize),
    s = i.readUInt32LE(0);
  if (s > 1e3)
    throw new Error(`Annotation count ${s} exceeds maximum allowed 1000`);
  let c = 4;
  const u = {};
  for (let t = 0; t < s; t++) {
    const t = a(i, e, c);
    if (t) {
      const { name: e, value: n } = t;
      u[e] = n;
    }
    c += 12;
  }
  return u;
}
function u(e, t) {
  return (function (e, t) {
    const n = e.subarray(t.rva, t.rva + t.dataSize);
    if (0 === n.length) return {};
    const o = n.readUInt32LE(0);
    if (o > 1e3)
      throw new Error(`Module count ${o} exceeds maximum allowed 1000`);
    let i = 4,
      s = {};
    for (let t = 0; t < o; t++) {
      const t = r(n, i + 4);
      (s = { ...s, ...c(e, t) }), (i += 12);
    }
    return s;
  })(e, r(t, 44));
}
const l = ["electron.v8-oom.stack"];
(t.parseMinidump = function (e) {
  if (e.length < 1e4)
    throw new Error("Minidump was less than 10KB so likely incomplete.");
  let t;
  try {
    t = (function (e) {
      return {
        signature: e.subarray(0, 4).toString(),
        version: e.readUInt32LE(4),
        streamCount: e.readUInt32LE(8),
        streamDirectoryRva: e.readUInt32LE(12),
        checksum: e.readUInt32LE(16),
        timeDateStamp: new Date(1e3 * e.readUInt32LE(20)),
        flags: e.readBigUInt64LE(24),
      };
    })(e);
  } catch {
    throw new Error("Failed to parse minidump header");
  }
  if (t.signature !== n) throw new Error(`Minidump signature was not '${n}'`);
  try {
    for (let n = 0; n < t.streamCount; n++) {
      const r = o(e, t.streamDirectoryRva + 12 * n);
      if (1129316353 === r.streamType) {
        return {
          header: t,
          crashpadAnnotations: u(e, i(e, r.location)),
        };
      }
    }
  } catch {}
  return { header: t };
}),
  (t.shouldDropMinidump = function (e) {
    return (
      !!(function (e) {
        return (
          !!e &&
          ("DumpWithoutCrashing-file" in e || "DumpWithoutCrashing-line" in e)
        );
      })(e) && !l.some((t) => !!e && t in e)
    );
  });
