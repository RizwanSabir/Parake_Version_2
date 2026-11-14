// vendor/module-60115.js — webpack module 60115
// params: (t, e, r) = (module, exports, require)
"use strict";
function i(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  var i = Array.from("string" == typeof t ? [t] : t);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = i.reduce(function (t, e) {
    var r = e.match(/\n([\t ]+|(?!\s).)/g);
    return r
      ? t.concat(
          r.map(function (t) {
            var e, r;
            return null !==
              (r =
                null === (e = t.match(/[\t ]/g)) || void 0 === e
                  ? void 0
                  : e.length) && void 0 !== r
              ? r
              : 0;
          }),
        )
      : t;
  }, []);
  if (o.length) {
    var n = new RegExp("\n[\t ]{".concat(Math.min.apply(Math, o), "}"), "g");
    i = i.map(function (t) {
      return t.replace(n, "\n");
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return (
    e.forEach(function (t, e) {
      var r = a.match(/(?:^|\n)( *)$/),
        o = r ? r[1] : "",
        n = t;
      "string" == typeof t &&
        t.includes("\n") &&
        (n = String(t)
          .split("\n")
          .map(function (t, e) {
            return 0 === e ? t : "".concat(o).concat(t);
          })
          .join("\n")),
        (a += n + i[e + 1]);
    }),
    a
  );
}
r.d(e, { T: () => i });
