// vendor/electron-updater/linux-updater.js — webpack module 10876
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.LinuxUpdater = void 0;
const r = n(55125 /* vendor/electron-updater/base-updater */),
  o = /^[a-zA-Z0-9_-]+$/;
class i extends r.BaseUpdater {
  constructor(e, t) {
    super(e, t);
  }
  isRunningAsRoot() {
    var e;
    return (
      0 ===
      (null === (e = process.getuid) || void 0 === e ? void 0 : e.call(process))
    );
  }
  get installerPath() {
    const e = super.installerPath;
    return null == e
      ? null
      : e
          .replace(/\\/g, "\\\\")
          .replace(/([`$!" ;|&()<>])/g, "\\$1")
          .replace(/[\n\r]/g, "");
  }
  runCommandWithSudoIfNeeded(e) {
    if (this.isRunningAsRoot())
      return (
        this._logger.info("Running as root, no need to use sudo"),
        this.spawnSyncLog(e[0], e.slice(1))
      );
    const { name: t } = this.app,
      n = `"${t.replace(/["`$\\!\n\r;|&<>(){}*?[\]#~]/g, "")} would like to update"`,
      r = this.sudoWithArgs(n);
    this._logger.info(`Running as non-root user, using sudo to install: ${r}`);
    let o = '"';
    return (
      (/pkexec/i.test(r[0]) || "sudo" === r[0]) && (o = ""),
      this.spawnSyncLog(r[0], [
        ...(r.length > 1 ? r.slice(1) : []),
        `${o}/bin/bash`,
        "-c",
        `'${e.join(" ")}'${o}`,
      ])
    );
  }
  sudoWithArgs(e) {
    const t = this.determineSudoCommand(),
      n = [t];
    return (
      /kdesudo/i.test(t)
        ? (n.push("--comment", e), n.push("-c"))
        : /gksudo/i.test(t)
          ? n.push("--message", e)
          : /pkexec/i.test(t) && n.push("--disable-internal-agent"),
      n
    );
  }
  hasCommand(e) {
    try {
      return this.spawnSyncLog("command", ["-v", e]), !0;
    } catch {
      return !1;
    }
  }
  determineSudoCommand() {
    const e = ["gksudo", "kdesudo", "pkexec", "beesu"];
    for (const t of e) if (this.hasCommand(t)) return t;
    return "sudo";
  }
  detectPackageManager(e) {
    var t;
    let n = e;
    const r =
      null === (t = process.env.ELECTRON_BUILDER_LINUX_PACKAGE_MANAGER) ||
      void 0 === t
        ? void 0
        : t.trim();
    r &&
      (o.test(r)
        ? (n = [r])
        : this._logger.warn(
            `ELECTRON_BUILDER_LINUX_PACKAGE_MANAGER "${r}" contains unsafe characters. Ignoring override.`,
          ));
    for (const e of n) if (this.hasCommand(e)) return e;
    const i = r
        ? `ELECTRON_BUILDER_LINUX_PACKAGE_MANAGER override "${r}", `
        : "",
      s = e[0];
    return (
      this._logger.warn(
        `No package manager found in the list: ${i}${e.join(", ")}. Utilizing default: ${s}`,
      ),
      s
    );
  }
}
t.LinuxUpdater = i;
