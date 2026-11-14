// vendor/other/module-68035.js — webpack module 68035
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.FileWithEmbeddedBlockMapDifferentialDownloader = void 0;
const r = n(28368 /* vendor/other/module-28368 */),
  o = n(29866 /* vendor/other/module-29866 */),
  i = n(43106 /* external/zlib */);
class s extends o.DifferentialDownloader {
  async download() {
    const e = this.blockAwareFileInfo,
      t = e.size,
      n = t - (e.blockMapSize + 4);
    this.fileMetadataBuffer = await this.readRemoteBytes(n, t - 1);
    const o = a(
      this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4),
    );
    await this.doDownload(
      await (async function (e) {
        const t = await (0, r.open)(e, "r");
        try {
          const e = (await (0, r.fstat)(t)).size,
            n = Buffer.allocUnsafe(4);
          await (0, r.read)(t, n, 0, n.length, e - n.length);
          const o = Buffer.allocUnsafe(n.readUInt32BE(0));
          return (
            await (0, r.read)(t, o, 0, o.length, e - n.length - o.length),
            await (0, r.close)(t),
            a(o)
          );
        } catch (e) {
          throw (await (0, r.close)(t), e);
        }
      })(this.options.oldFile),
      o,
    );
  }
}
function a(e) {
  return JSON.parse((0, i.inflateRawSync)(e).toString());
}
t.FileWithEmbeddedBlockMapDifferentialDownloader = s;
