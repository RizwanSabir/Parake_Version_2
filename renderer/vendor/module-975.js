// vendor/module-975.js — webpack module 975
// params: (e) = (module, exports, require)
function t(e) {
  if ("string" != typeof e)
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
function r(e, t) {
  for (var r, n = "", i = 0, a = -1, s = 0, o = 0; o <= e.length; ++o) {
    if (o < e.length) r = e.charCodeAt(o);
    else {
      if (47 === r) break;
      r = 47;
    }
    if (47 === r) {
      if (a === o - 1 || 1 === s);
      else if (a !== o - 1 && 2 === s) {
        if (
          n.length < 2 ||
          2 !== i ||
          46 !== n.charCodeAt(n.length - 1) ||
          46 !== n.charCodeAt(n.length - 2)
        )
          if (n.length > 2) {
            var l = n.lastIndexOf("/");
            if (l !== n.length - 1) {
              -1 === l
                ? ((n = ""), (i = 0))
                : (i = (n = n.slice(0, l)).length - 1 - n.lastIndexOf("/")),
                (a = o),
                (s = 0);
              continue;
            }
          } else if (2 === n.length || 1 === n.length) {
            (n = ""), (i = 0), (a = o), (s = 0);
            continue;
          }
        t && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
      } else
        n.length > 0 ? (n += "/" + e.slice(a + 1, o)) : (n = e.slice(a + 1, o)),
          (i = o - a - 1);
      (a = o), (s = 0);
    } else 46 === r && -1 !== s ? ++s : (s = -1);
  }
  return n;
}
Ue(t, "e"), Ue(r, "r");
var n = {
  resolve: Ue(function () {
    for (var e, n = "", i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
      var s;
      a >= 0
        ? (s = arguments[a])
        : (void 0 === e && (e = process.cwd()), (s = e)),
        t(s),
        0 !== s.length && ((n = s + "/" + n), (i = 47 === s.charCodeAt(0)));
    }
    return (
      (n = r(n, !i)),
      i ? (n.length > 0 ? "/" + n : "/") : n.length > 0 ? n : "."
    );
  }, "resolve"),
  normalize: Ue(function (e) {
    if ((t(e), 0 === e.length)) return ".";
    var n = 47 === e.charCodeAt(0),
      i = 47 === e.charCodeAt(e.length - 1);
    return (
      0 !== (e = r(e, !n)).length || n || (e = "."),
      e.length > 0 && i && (e += "/"),
      n ? "/" + e : e
    );
  }, "normalize"),
  isAbsolute: Ue(function (e) {
    return t(e), e.length > 0 && 47 === e.charCodeAt(0);
  }, "isAbsolute"),
  join: Ue(function () {
    if (0 === arguments.length) return ".";
    for (var e, r = 0; r < arguments.length; ++r) {
      var i = arguments[r];
      t(i), i.length > 0 && (void 0 === e ? (e = i) : (e += "/" + i));
    }
    return void 0 === e ? "." : n.normalize(e);
  }, "join"),
  relative: Ue(function (e, r) {
    if ((t(e), t(r), e === r)) return "";
    if ((e = n.resolve(e)) === (r = n.resolve(r))) return "";
    for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
    for (
      var a = e.length, s = a - i, o = 1;
      o < r.length && 47 === r.charCodeAt(o);
      ++o
    );
    for (var l = r.length - o, u = s < l ? s : l, c = -1, p = 0; p <= u; ++p) {
      if (p === u) {
        if (l > u) {
          if (47 === r.charCodeAt(o + p)) return r.slice(o + p + 1);
          if (0 === p) return r.slice(o + p);
        } else
          s > u && (47 === e.charCodeAt(i + p) ? (c = p) : 0 === p && (c = 0));
        break;
      }
      var d = e.charCodeAt(i + p);
      if (d !== r.charCodeAt(o + p)) break;
      47 === d && (c = p);
    }
    var f = "";
    for (p = i + c + 1; p <= a; ++p)
      (p !== a && 47 !== e.charCodeAt(p)) ||
        (0 === f.length ? (f += "..") : (f += "/.."));
    return f.length > 0
      ? f + r.slice(o + c)
      : ((o += c), 47 === r.charCodeAt(o) && ++o, r.slice(o));
  }, "relative"),
  _makeLong: Ue(function (e) {
    return e;
  }, "_makeLong"),
  dirname: Ue(function (e) {
    if ((t(e), 0 === e.length)) return ".";
    for (
      var r = e.charCodeAt(0), n = 47 === r, i = -1, a = !0, s = e.length - 1;
      s >= 1;
      --s
    )
      if (47 === (r = e.charCodeAt(s))) {
        if (!a) {
          i = s;
          break;
        }
      } else a = !1;
    return -1 === i ? (n ? "/" : ".") : n && 1 === i ? "//" : e.slice(0, i);
  }, "dirname"),
  basename: Ue(function (e, r) {
    if (void 0 !== r && "string" != typeof r)
      throw new TypeError('"ext" argument must be a string');
    t(e);
    var n,
      i = 0,
      a = -1,
      s = !0;
    if (void 0 !== r && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e) return "";
      var o = r.length - 1,
        l = -1;
      for (n = e.length - 1; n >= 0; --n) {
        var u = e.charCodeAt(n);
        if (47 === u) {
          if (!s) {
            i = n + 1;
            break;
          }
        } else
          -1 === l && ((s = !1), (l = n + 1)),
            o >= 0 &&
              (u === r.charCodeAt(o)
                ? -1 == --o && (a = n)
                : ((o = -1), (a = l)));
      }
      return i === a ? (a = l) : -1 === a && (a = e.length), e.slice(i, a);
    }
    for (n = e.length - 1; n >= 0; --n)
      if (47 === e.charCodeAt(n)) {
        if (!s) {
          i = n + 1;
          break;
        }
      } else -1 === a && ((s = !1), (a = n + 1));
    return -1 === a ? "" : e.slice(i, a);
  }, "basename"),
  extname: Ue(function (e) {
    t(e);
    for (
      var r = -1, n = 0, i = -1, a = !0, s = 0, o = e.length - 1;
      o >= 0;
      --o
    ) {
      var l = e.charCodeAt(o);
      if (47 !== l)
        -1 === i && ((a = !1), (i = o + 1)),
          46 === l
            ? -1 === r
              ? (r = o)
              : 1 !== s && (s = 1)
            : -1 !== r && (s = -1);
      else if (!a) {
        n = o + 1;
        break;
      }
    }
    return -1 === r ||
      -1 === i ||
      0 === s ||
      (1 === s && r === i - 1 && r === n + 1)
      ? ""
      : e.slice(r, i);
  }, "extname"),
  format: Ue(function (e) {
    if (null === e || "object" != typeof e)
      throw new TypeError(
        'The "pathObject" argument must be of type Object. Received type ' +
          typeof e,
      );
    return (
      (r = (t = e).dir || t.root),
      (n = t.base || (t.name || "") + (t.ext || "")),
      r ? (r === t.root ? r + n : r + "/" + n) : n
    );
    var t, r, n;
  }, "format"),
  parse: Ue(function (e) {
    t(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (0 === e.length) return r;
    var n,
      i = e.charCodeAt(0),
      a = 47 === i;
    a ? ((r.root = "/"), (n = 1)) : (n = 0);
    for (
      var s = -1, o = 0, l = -1, u = !0, c = e.length - 1, p = 0;
      c >= n;
      --c
    )
      if (47 !== (i = e.charCodeAt(c)))
        -1 === l && ((u = !1), (l = c + 1)),
          46 === i
            ? -1 === s
              ? (s = c)
              : 1 !== p && (p = 1)
            : -1 !== s && (p = -1);
      else if (!u) {
        o = c + 1;
        break;
      }
    return (
      -1 === s || -1 === l || 0 === p || (1 === p && s === l - 1 && s === o + 1)
        ? -1 !== l &&
          (r.base = r.name = 0 === o && a ? e.slice(1, l) : e.slice(o, l))
        : (0 === o && a
            ? ((r.name = e.slice(1, s)), (r.base = e.slice(1, l)))
            : ((r.name = e.slice(o, s)), (r.base = e.slice(o, l))),
          (r.ext = e.slice(s, l))),
      o > 0 ? (r.dir = e.slice(0, o - 1)) : a && (r.dir = "/"),
      r
    );
  }, "parse"),
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null,
};
(n.posix = n), (e.exports = n);
