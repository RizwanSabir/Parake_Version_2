// vendor/module-92776.js — webpack module 92776
// params: (e) = (module, exports, require)
"use strict";
var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  n = /\n/g,
  r = /^\s*/,
  o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  i = /^:\s*/,
  a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  s = /^[;\s]*/,
  l = /^\s+|\s+$/g,
  c = "";
function u(e) {
  return e ? e.replace(l, c) : c;
}
e.exports = function (e, l) {
  if ("string" != typeof e)
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  l = l || {};
  var d = 1,
    p = 1;
  function f(e) {
    var t = e.match(n);
    t && (d += t.length);
    var r = e.lastIndexOf("\n");
    p = ~r ? e.length - r : p + e.length;
  }
  function h() {
    var e = { line: d, column: p };
    return function (t) {
      return (t.position = new m(e)), v(), t;
    };
  }
  function m(e) {
    (this.start = e),
      (this.end = { line: d, column: p }),
      (this.source = l.source);
  }
  function g(t) {
    var n = new Error(l.source + ":" + d + ":" + p + ": " + t);
    if (
      ((n.reason = t),
      (n.filename = l.source),
      (n.line = d),
      (n.column = p),
      (n.source = e),
      !l.silent)
    )
      throw n;
  }
  function y(t) {
    var n = t.exec(e);
    if (n) {
      var r = n[0];
      return f(r), (e = e.slice(r.length)), n;
    }
  }
  function v() {
    y(r);
  }
  function b(e) {
    var t;
    for (e = e || []; (t = S()); ) !1 !== t && e.push(t);
    return e;
  }
  function S() {
    var t = h();
    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
      for (
        var n = 2;
        c != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

      )
        ++n;
      if (((n += 2), c === e.charAt(n - 1))) return g("End of comment missing");
      var r = e.slice(2, n - 2);
      return (
        (p += 2),
        f(r),
        (e = e.slice(n)),
        (p += 2),
        t({ type: "comment", comment: r })
      );
    }
  }
  function _() {
    var e = h(),
      n = y(o);
    if (n) {
      if ((S(), !y(i))) return g("property missing ':'");
      var r = y(a),
        l = e({
          type: "declaration",
          property: u(n[0].replace(t, c)),
          value: r ? u(r[0].replace(t, c)) : c,
        });
      return y(s), l;
    }
  }
  return (
    (m.prototype.content = e),
    v(),
    (function () {
      var e,
        t = [];
      for (b(t); (e = _()); ) !1 !== e && (t.push(e), b(t));
      return t;
    })()
  );
};
