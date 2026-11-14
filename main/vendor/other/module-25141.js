// vendor/other/module-25141.js — webpack module 25141
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(79896 /* external/fs */),
  i = n(16928 /* external/path */),
  s = n(80519 /* vendor/other/module-80519 */),
  a = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.*\d{0,10}Z$/;
function c(e, t) {
  return "string" == typeof t && a.test(t) ? new Date(t) : t;
}
class u {
  constructor(e, t, n) {
    (this._lock = new s.Mutex()),
      (this._path = i.join(e, `${t}.json`)),
      (this._initial = n);
  }
  async set(e) {
    await this._lock.runExclusive(async () => {
      this._data = e;
      try {
        if (void 0 === e)
          try {
            await o.promises.unlink(this._path);
          } catch {}
        else
          await o.promises.mkdir(i.dirname(this._path), {
            recursive: !0,
          }),
            await o.promises.writeFile(this._path, JSON.stringify(e));
      } catch (e) {
        r.debug.warn("Failed to write to store", e);
      }
    });
  }
  async get() {
    return this._lock.runExclusive(async () => {
      if (void 0 === this._data)
        try {
          this._data = JSON.parse(
            await o.promises.readFile(this._path, "utf8"),
            c,
          );
        } catch {
          this._data = this._initial;
        }
      return this._data;
    });
  }
  async update(e) {
    await this.set(e(await this.get()));
  }
  async clear() {
    await this.set(this._initial);
  }
  async getModifiedDate() {
    try {
      return (await o.promises.stat(this._path))?.mtime;
    } catch {
      return;
    }
  }
}
(t.BufferedWriteStore = class extends u {
  constructor(e, t, n, r = 500) {
    super(e, t, n), (this._throttleTime = r);
  }
  async set(e) {
    (this._data = e),
      (this._pendingWrite = {
        data: e,
        timeout:
          this._pendingWrite?.timeout ||
          setTimeout(() => this._writePending(), this._throttleTime),
      });
  }
  _writePending() {
    if (this._pendingWrite) {
      const e = this._pendingWrite.data;
      (this._pendingWrite = void 0), super.set(e).catch(() => {});
    }
  }
}),
  (t.Store = u);
