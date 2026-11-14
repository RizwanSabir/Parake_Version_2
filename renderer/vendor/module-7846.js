// vendor/module-7846.js — webpack module 7846
// params: (e) = (module, exports, require)
e.exports = function (e) {
  return {
    name: "Shell Session",
    aliases: ["console", "shellsession"],
    contains: [
      {
        className: "meta.prompt",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
      },
    ],
  };
};
