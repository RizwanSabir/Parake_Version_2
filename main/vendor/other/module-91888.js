// vendor/other/module-91888.js — webpack module 91888
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
(e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"]),
  "win32" !== process.platform &&
    e.exports.push(
      "SIGVTALRM",
      "SIGXCPU",
      "SIGXFSZ",
      "SIGUSR2",
      "SIGTRAP",
      "SIGSYS",
      "SIGQUIT",
      "SIGIOT",
    ),
  "linux" === process.platform &&
    e.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
