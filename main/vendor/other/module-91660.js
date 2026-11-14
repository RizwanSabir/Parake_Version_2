// vendor/other/module-91660.js — webpack module 91660
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = n(42072 /* vendor/other/module-42072 */).SourceMapGenerator,
  o = n(40370 /* vendor/other/module-40370 */),
  i = /(\r?\n)/,
  s = "$$$isSourceNode$$$";
function a(e, t, n, r, o) {
  (this.children = []),
    (this.sourceContents = {}),
    (this.line = e ?? null),
    (this.column = t ?? null),
    (this.source = n ?? null),
    (this.name = o ?? null),
    (this[s] = !0),
    null != r && this.add(r);
}
(a.fromStringWithSourceMap = function (e, t, n) {
  var r = new a(),
    s = e.split(i),
    c = 0,
    u = function () {
      return e() + (e() || "");
      function e() {
        return c < s.length ? s[c++] : void 0;
      }
    },
    l = 1,
    d = 0,
    p = null;
  return (
    t.eachMapping(function (e) {
      if (null !== p) {
        if (!(l < e.generatedLine)) {
          var t = (n = s[c] || "").substr(0, e.generatedColumn - d);
          return (
            (s[c] = n.substr(e.generatedColumn - d)),
            (d = e.generatedColumn),
            f(p, t),
            void (p = e)
          );
        }
        f(p, u()), l++, (d = 0);
      }
      for (; l < e.generatedLine; ) r.add(u()), l++;
      if (d < e.generatedColumn) {
        var n = s[c] || "";
        r.add(n.substr(0, e.generatedColumn)),
          (s[c] = n.substr(e.generatedColumn)),
          (d = e.generatedColumn);
      }
      p = e;
    }, this),
    c < s.length && (p && f(p, u()), r.add(s.splice(c).join(""))),
    t.sources.forEach(function (e) {
      var i = t.sourceContentFor(e);
      null != i && (null != n && (e = o.join(n, e)), r.setSourceContent(e, i));
    }),
    r
  );
  function f(e, t) {
    if (null === e || void 0 === e.source) r.add(t);
    else {
      var i = n ? o.join(n, e.source) : e.source;
      r.add(new a(e.originalLine, e.originalColumn, i, t, e.name));
    }
  }
}),
  (a.prototype.add = function (e) {
    if (Array.isArray(e))
      e.forEach(function (e) {
        this.add(e);
      }, this);
    else {
      if (!e[s] && "string" != typeof e)
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            e,
        );
      e && this.children.push(e);
    }
    return this;
  }),
  (a.prototype.prepend = function (e) {
    if (Array.isArray(e))
      for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
    else {
      if (!e[s] && "string" != typeof e)
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            e,
        );
      this.children.unshift(e);
    }
    return this;
  }),
  (a.prototype.walk = function (e) {
    for (var t, n = 0, r = this.children.length; n < r; n++)
      (t = this.children[n])[s]
        ? t.walk(e)
        : "" !== t &&
          e(t, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name,
          });
  }),
  (a.prototype.join = function (e) {
    var t,
      n,
      r = this.children.length;
    if (r > 0) {
      for (t = [], n = 0; n < r - 1; n++) t.push(this.children[n]), t.push(e);
      t.push(this.children[n]), (this.children = t);
    }
    return this;
  }),
  (a.prototype.replaceRight = function (e, t) {
    var n = this.children[this.children.length - 1];
    return (
      n[s]
        ? n.replaceRight(e, t)
        : "string" == typeof n
          ? (this.children[this.children.length - 1] = n.replace(e, t))
          : this.children.push("".replace(e, t)),
      this
    );
  }),
  (a.prototype.setSourceContent = function (e, t) {
    this.sourceContents[o.toSetString(e)] = t;
  }),
  (a.prototype.walkSourceContents = function (e) {
    for (var t = 0, n = this.children.length; t < n; t++)
      this.children[t][s] && this.children[t].walkSourceContents(e);
    var r = Object.keys(this.sourceContents);
    for (t = 0, n = r.length; t < n; t++)
      e(o.fromSetString(r[t]), this.sourceContents[r[t]]);
  }),
  (a.prototype.toString = function () {
    var e = "";
    return (
      this.walk(function (t) {
        e += t;
      }),
      e
    );
  }),
  (a.prototype.toStringWithSourceMap = function (e) {
    var t = { code: "", line: 1, column: 0 },
      n = new r(e),
      o = !1,
      i = null,
      s = null,
      a = null,
      c = null;
    return (
      this.walk(function (e, r) {
        (t.code += e),
          null !== r.source && null !== r.line && null !== r.column
            ? ((i === r.source &&
                s === r.line &&
                a === r.column &&
                c === r.name) ||
                n.addMapping({
                  source: r.source,
                  original: { line: r.line, column: r.column },
                  generated: { line: t.line, column: t.column },
                  name: r.name,
                }),
              (i = r.source),
              (s = r.line),
              (a = r.column),
              (c = r.name),
              (o = !0))
            : o &&
              (n.addMapping({
                generated: { line: t.line, column: t.column },
              }),
              (i = null),
              (o = !1));
        for (var u = 0, l = e.length; u < l; u++)
          10 === e.charCodeAt(u)
            ? (t.line++,
              (t.column = 0),
              u + 1 === l
                ? ((i = null), (o = !1))
                : o &&
                  n.addMapping({
                    source: r.source,
                    original: { line: r.line, column: r.column },
                    generated: { line: t.line, column: t.column },
                    name: r.name,
                  }))
            : t.column++;
      }),
      this.walkSourceContents(function (e, t) {
        n.setSourceContent(e, t);
      }),
      { code: t.code, map: n }
    );
  });
