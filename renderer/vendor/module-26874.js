// vendor/module-26874.js — webpack module 26874
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { Y: () => Oe });
var r = {};
n.r(r),
  n.d(r, {
    attentionMarkers: () => _e,
    contentInitial: () => me,
    disable: () => xe,
    document: () => he,
    flow: () => ye,
    flowInitial: () => ge,
    insideSpan: () => Se,
    string: () => ve,
    text: () => be,
  });
var o = n(45305 /* vendor/module-45305 */),
  i = n(43890 /* vendor/module-43890 */);
class a {
  constructor(e) {
    (this.left = e ? [...e] : []), (this.right = []);
  }
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          e +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`",
      );
    return e < this.left.length
      ? this.left[e]
      : this.right[this.right.length - e + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(e, t) {
    const n = t ?? Number.POSITIVE_INFINITY;
    return n < this.left.length
      ? this.left.slice(e, n)
      : e > this.left.length
        ? this.right
            .slice(
              this.right.length - n + this.left.length,
              this.right.length - e + this.left.length,
            )
            .reverse()
        : this.left
            .slice(e)
            .concat(
              this.right
                .slice(this.right.length - n + this.left.length)
                .reverse(),
            );
  }
  splice(e, t, n) {
    const r = t || 0;
    this.setCursor(Math.trunc(e));
    const o = this.right.splice(
      this.right.length - r,
      Number.POSITIVE_INFINITY,
    );
    return n && s(this.left, n), o.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(e) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
  }
  pushMany(e) {
    this.setCursor(Number.POSITIVE_INFINITY), s(this.left, e);
  }
  unshift(e) {
    this.setCursor(0), this.right.push(e);
  }
  unshiftMany(e) {
    this.setCursor(0), s(this.right, e.reverse());
  }
  setCursor(e) {
    if (
      !(
        e === this.left.length ||
        (e > this.left.length && 0 === this.right.length) ||
        (e < 0 && 0 === this.left.length)
      )
    )
      if (e < this.left.length) {
        const t = this.left.splice(e, Number.POSITIVE_INFINITY);
        s(this.right, t.reverse());
      } else {
        const t = this.right.splice(
          this.left.length + this.right.length - e,
          Number.POSITIVE_INFINITY,
        );
        s(this.left, t.reverse());
      }
  }
}
function s(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
}
function l(e) {
  const t = {};
  let n,
    r,
    o,
    s,
    l,
    u,
    d,
    p = -1;
  const f = new a(e);
  for (; ++p < f.length; ) {
    for (; p in t; ) p = t[p];
    if (
      ((n = f.get(p)),
      p &&
        "chunkFlow" === n[1].type &&
        "listItemPrefix" === f.get(p - 1)[1].type &&
        ((u = n[1]._tokenizer.events),
        (o = 0),
        o < u.length && "lineEndingBlank" === u[o][1].type && (o += 2),
        o < u.length && "content" === u[o][1].type))
    )
      for (; ++o < u.length && "content" !== u[o][1].type; )
        "chunkText" === u[o][1].type &&
          ((u[o][1]._isInFirstContentOfListItem = !0), o++);
    if ("enter" === n[0])
      n[1].contentType && (Object.assign(t, c(f, p)), (p = t[p]), (d = !0));
    else if (n[1]._container) {
      for (o = p, r = void 0; o--; )
        if (
          ((s = f.get(o)),
          "lineEnding" === s[1].type || "lineEndingBlank" === s[1].type)
        )
          "enter" === s[0] &&
            (r && (f.get(r)[1].type = "lineEndingBlank"),
            (s[1].type = "lineEnding"),
            (r = o));
        else if ("linePrefix" !== s[1].type && "listItemIndent" !== s[1].type)
          break;
      r &&
        ((n[1].end = { ...f.get(r)[1].start }),
        (l = f.slice(r, p)),
        l.unshift(n),
        f.splice(r, p - r + 1, l));
    }
  }
  return (0, i.m)(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !d;
}
function c(e, t) {
  const n = e.get(t)[1],
    r = e.get(t)[2];
  let o = t - 1;
  const i = [];
  let a = n._tokenizer;
  a ||
    ((a = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const s = a.events,
    l = [],
    c = {};
  let u,
    d,
    p = -1,
    f = n,
    h = 0,
    m = 0;
  const g = [m];
  for (; f; ) {
    for (; e.get(++o)[1] !== f; );
    i.push(o),
      f._tokenizer ||
        ((u = r.sliceStream(f)),
        f.next || u.push(null),
        d && a.defineSkip(f.start),
        f._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = !0),
        a.write(u),
        f._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = void 0)),
      (d = f),
      (f = f.next);
  }
  for (f = n; ++p < s.length; )
    "exit" === s[p][0] &&
      "enter" === s[p - 1][0] &&
      s[p][1].type === s[p - 1][1].type &&
      s[p][1].start.line !== s[p][1].end.line &&
      ((m = p + 1),
      g.push(m),
      (f._tokenizer = void 0),
      (f.previous = void 0),
      (f = f.next));
  for (
    a.events = [],
      f ? ((f._tokenizer = void 0), (f.previous = void 0)) : g.pop(),
      p = g.length;
    p--;

  ) {
    const t = s.slice(g[p], g[p + 1]),
      n = i.pop();
    l.push([n, n + t.length - 1]), e.splice(n, 2, t);
  }
  for (l.reverse(), p = -1; ++p < l.length; )
    (c[h + l[p][0]] = h + l[p][1]), (h += l[p][1] - l[p][0] - 1);
  return c;
}
var u = n(10660 /* vendor/module-10660 */),
  d = n(77508 /* vendor/module-77508 */),
  p = n(57949 /* vendor/module-57949 */);
const f = {
    tokenize: function (e) {
      const t = e.attempt(
        this.parser.constructs.contentInitial,
        function (n) {
          if (null !== n)
            return (
              e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              (0, d.N)(e, t, "linePrefix")
            );
          e.consume(n);
        },
        function (t) {
          return e.enter("paragraph"), r(t);
        },
      );
      let n;
      return t;
      function r(t) {
        const r = e.enter("chunkText", {
          contentType: "text",
          previous: n,
        });
        return n && (n.next = r), (n = r), o(t);
      }
      function o(t) {
        return null === t
          ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t))
          : (0, p.HP)(t)
            ? (e.consume(t), e.exit("chunkText"), r)
            : (e.consume(t), o);
      }
    },
  },
  h = {
    tokenize: function (e) {
      const t = this,
        n = [];
      let r,
        o,
        a,
        s = 0;
      return l;
      function l(r) {
        if (s < n.length) {
          const o = n[s];
          return (
            (t.containerState = o[1]), e.attempt(o[0].continuation, c, u)(r)
          );
        }
        return u(r);
      }
      function c(e) {
        if ((s++, t.containerState._closeFlow)) {
          (t.containerState._closeFlow = void 0), r && _();
          const n = t.events.length;
          let o,
            a = n;
          for (; a--; )
            if (
              "exit" === t.events[a][0] &&
              "chunkFlow" === t.events[a][1].type
            ) {
              o = t.events[a][1].end;
              break;
            }
          S(s);
          let l = n;
          for (; l < t.events.length; ) (t.events[l][1].end = { ...o }), l++;
          return (
            (0, i.m)(t.events, a + 1, 0, t.events.slice(n)),
            (t.events.length = l),
            u(e)
          );
        }
        return l(e);
      }
      function u(o) {
        if (s === n.length) {
          if (!r) return h(o);
          if (r.currentConstruct && r.currentConstruct.concrete) return y(o);
          t.interrupt = Boolean(
            r.currentConstruct && !r._gfmTableDynamicInterruptHack,
          );
        }
        return (t.containerState = {}), e.check(m, d, f)(o);
      }
      function d(e) {
        return r && _(), S(s), h(e);
      }
      function f(e) {
        return (
          (t.parser.lazy[t.now().line] = s !== n.length),
          (a = t.now().offset),
          y(e)
        );
      }
      function h(n) {
        return (t.containerState = {}), e.attempt(m, g, y)(n);
      }
      function g(e) {
        return s++, n.push([t.currentConstruct, t.containerState]), h(e);
      }
      function y(n) {
        return null === n
          ? (r && _(), S(0), void e.consume(n))
          : ((r = r || t.parser.flow(t.now())),
            e.enter("chunkFlow", {
              _tokenizer: r,
              contentType: "flow",
              previous: o,
            }),
            v(n));
      }
      function v(n) {
        return null === n
          ? (b(e.exit("chunkFlow"), !0), S(0), void e.consume(n))
          : (0, p.HP)(n)
            ? (e.consume(n),
              b(e.exit("chunkFlow")),
              (s = 0),
              (t.interrupt = void 0),
              l)
            : (e.consume(n), v);
      }
      function b(e, n) {
        const l = t.sliceStream(e);
        if (
          (n && l.push(null),
          (e.previous = o),
          o && (o.next = e),
          (o = e),
          r.defineSkip(e.start),
          r.write(l),
          t.parser.lazy[e.start.line])
        ) {
          let e = r.events.length;
          for (; e--; )
            if (
              r.events[e][1].start.offset < a &&
              (!r.events[e][1].end || r.events[e][1].end.offset > a)
            )
              return;
          const n = t.events.length;
          let o,
            l,
            c = n;
          for (; c--; )
            if (
              "exit" === t.events[c][0] &&
              "chunkFlow" === t.events[c][1].type
            ) {
              if (o) {
                l = t.events[c][1].end;
                break;
              }
              o = !0;
            }
          for (S(s), e = n; e < t.events.length; )
            (t.events[e][1].end = { ...l }), e++;
          (0, i.m)(t.events, c + 1, 0, t.events.slice(n)),
            (t.events.length = e);
        }
      }
      function S(r) {
        let o = n.length;
        for (; o-- > r; ) {
          const r = n[o];
          (t.containerState = r[1]), r[0].exit.call(t, e);
        }
        n.length = r;
      }
      function _() {
        r.write([null]),
          (o = void 0),
          (r = void 0),
          (t.containerState._closeFlow = void 0);
      }
    },
  },
  m = {
    tokenize: function (e, t, n) {
      return (0, d.N)(
        e,
        e.attempt(this.parser.constructs.document, t, n),
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented")
          ? void 0
          : 4,
      );
    },
  };
var g = n(35460 /* vendor/module-35460 */);
const y = {
    resolve: function (e) {
      return l(e), e;
    },
    tokenize: function (e, t) {
      let n;
      return function (t) {
        return (
          e.enter("content"),
          (n = e.enter("chunkContent", { contentType: "content" })),
          r(t)
        );
      };
      function r(t) {
        return null === t
          ? o(t)
          : (0, p.HP)(t)
            ? e.check(v, i, o)(t)
            : (e.consume(t), r);
      }
      function o(n) {
        return e.exit("chunkContent"), e.exit("content"), t(n);
      }
      function i(t) {
        return (
          e.consume(t),
          e.exit("chunkContent"),
          (n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n,
          })),
          (n = n.next),
          r
        );
      }
    },
  },
  v = {
    partial: !0,
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return (
          e.exit("chunkContent"),
          e.enter("lineEnding"),
          e.consume(t),
          e.exit("lineEnding"),
          (0, d.N)(e, o, "linePrefix")
        );
      };
      function o(o) {
        if (null === o || (0, p.HP)(o)) return n(o);
        const i = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") &&
          i &&
          "linePrefix" === i[1].type &&
          i[2].sliceSerialize(i[1], !0).length >= 4
          ? t(o)
          : e.interrupt(r.parser.constructs.flow, n, t)(o);
      }
    },
  },
  b = {
    tokenize: function (e) {
      const t = this,
        n = e.attempt(
          g.B,
          function (r) {
            if (null !== r)
              return (
                e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                (t.currentConstruct = void 0),
                n
              );
            e.consume(r);
          },
          e.attempt(
            this.parser.constructs.flowInitial,
            r,
            (0, d.N)(
              e,
              e.attempt(this.parser.constructs.flow, r, e.attempt(y, r)),
              "linePrefix",
            ),
          ),
        );
      return n;
      function r(r) {
        if (null !== r)
          return (
            e.enter("lineEnding"),
            e.consume(r),
            e.exit("lineEnding"),
            (t.currentConstruct = void 0),
            n
          );
        e.consume(r);
      }
    },
  },
  S = { resolveAll: E() },
  _ = w("string"),
  x = w("text");
function w(e) {
  return {
    resolveAll: E("text" === e ? T : void 0),
    tokenize: function (t) {
      const n = this,
        r = this.parser.constructs[e],
        o = t.attempt(r, i, a);
      return i;
      function i(e) {
        return l(e) ? o(e) : a(e);
      }
      function a(e) {
        if (null !== e) return t.enter("data"), t.consume(e), s;
        t.consume(e);
      }
      function s(e) {
        return l(e) ? (t.exit("data"), o(e)) : (t.consume(e), s);
      }
      function l(e) {
        if (null === e) return !0;
        const t = r[e];
        let o = -1;
        if (t)
          for (; ++o < t.length; ) {
            const e = t[o];
            if (!e.previous || e.previous.call(n, n.previous)) return !0;
          }
        return !1;
      }
    },
  };
}
function E(e) {
  return function (t, n) {
    let r,
      o = -1;
    for (; ++o <= t.length; )
      void 0 === r
        ? t[o] && "data" === t[o][1].type && ((r = o), o++)
        : (t[o] && "data" === t[o][1].type) ||
          (o !== r + 2 &&
            ((t[r][1].end = t[o - 1][1].end),
            t.splice(r + 2, o - r - 2),
            (o = r + 2)),
          (r = void 0));
    return e ? e(t, n) : t;
  };
}
function T(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || "lineEnding" === e[n][1].type) &&
      "data" === e[n - 1][1].type
    ) {
      const r = e[n - 1][1],
        o = t.sliceStream(r);
      let i,
        a = o.length,
        s = -1,
        l = 0;
      for (; a--; ) {
        const e = o[a];
        if ("string" == typeof e) {
          for (s = e.length; 32 === e.charCodeAt(s - 1); ) l++, s--;
          if (s) break;
          s = -1;
        } else if (-2 === e) (i = !0), l++;
        else if (-1 !== e) {
          a++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (l = 0), l)) {
        const o = {
          type:
            n === e.length || i || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? s : r.start._bufferIndex + s,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l,
          },
          end: { ...r.end },
        };
        (r.end = { ...o.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, o)
            : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), (n += 2));
      }
      n++;
    }
  return e;
}
const k = {
    name: "thematicBreak",
    tokenize: function (e, t, n) {
      let r,
        o = 0;
      return function (t) {
        return (
          e.enter("thematicBreak"),
          (function (e) {
            return (r = e), i(e);
          })(t)
        );
      };
      function i(i) {
        return i === r
          ? (e.enter("thematicBreakSequence"), a(i))
          : o >= 3 && (null === i || (0, p.HP)(i))
            ? (e.exit("thematicBreak"), t(i))
            : n(i);
      }
      function a(t) {
        return t === r
          ? (e.consume(t), o++, a)
          : (e.exit("thematicBreakSequence"),
            (0, p.On)(t) ? (0, d.N)(e, i, "whitespace")(t) : i(t));
      }
    },
  },
  C = {
    continuation: {
      tokenize: function (e, t, n) {
        const r = this;
        return (
          (r.containerState._closeFlow = void 0),
          e.check(
            g.B,
            function (n) {
              return (
                (r.containerState.furtherBlankLines =
                  r.containerState.furtherBlankLines ||
                  r.containerState.initialBlankLine),
                (0, d.N)(e, t, "listItemIndent", r.containerState.size + 1)(n)
              );
            },
            function (n) {
              return r.containerState.furtherBlankLines || !(0, p.On)(n)
                ? ((r.containerState.furtherBlankLines = void 0),
                  (r.containerState.initialBlankLine = void 0),
                  o(n))
                : ((r.containerState.furtherBlankLines = void 0),
                  (r.containerState.initialBlankLine = void 0),
                  e.attempt(A, t, o)(n));
            },
          )
        );
        function o(o) {
          return (
            (r.containerState._closeFlow = !0),
            (r.interrupt = void 0),
            (0, d.N)(
              e,
              e.attempt(C, t, n),
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4,
            )(o)
          );
        }
      },
    },
    exit: function (e) {
      e.exit(this.containerState.type);
    },
    name: "list",
    tokenize: function (e, t, n) {
      const r = this,
        o = r.events[r.events.length - 1];
      let i =
          o && "linePrefix" === o[1].type
            ? o[2].sliceSerialize(o[1], !0).length
            : 0,
        a = 0;
      return function (t) {
        const o =
          r.containerState.type ||
          (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
        if (
          "listUnordered" === o
            ? !r.containerState.marker || t === r.containerState.marker
            : (0, p.BM)(t)
        ) {
          if (
            (r.containerState.type ||
              ((r.containerState.type = o), e.enter(o, { _container: !0 })),
            "listUnordered" === o)
          )
            return (
              e.enter("listItemPrefix"),
              42 === t || 45 === t ? e.check(k, n, l)(t) : l(t)
            );
          if (!r.interrupt || 49 === t)
            return e.enter("listItemPrefix"), e.enter("listItemValue"), s(t);
        }
        return n(t);
      };
      function s(t) {
        return (0, p.BM)(t) && ++a < 10
          ? (e.consume(t), s)
          : (!r.interrupt || a < 2) &&
              (r.containerState.marker
                ? t === r.containerState.marker
                : 41 === t || 46 === t)
            ? (e.exit("listItemValue"), l(t))
            : n(t);
      }
      function l(t) {
        return (
          e.enter("listItemMarker"),
          e.consume(t),
          e.exit("listItemMarker"),
          (r.containerState.marker = r.containerState.marker || t),
          e.check(g.B, r.interrupt ? n : c, e.attempt(I, d, u))
        );
      }
      function c(e) {
        return (r.containerState.initialBlankLine = !0), i++, d(e);
      }
      function u(t) {
        return (0, p.On)(t)
          ? (e.enter("listItemPrefixWhitespace"),
            e.consume(t),
            e.exit("listItemPrefixWhitespace"),
            d)
          : n(t);
      }
      function d(n) {
        return (
          (r.containerState.size =
            i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
          t(n)
        );
      }
    },
  },
  I = {
    partial: !0,
    tokenize: function (e, t, n) {
      const r = this;
      return (0, d.N)(
        e,
        function (e) {
          const o = r.events[r.events.length - 1];
          return !(0, p.On)(e) && o && "listItemPrefixWhitespace" === o[1].type
            ? t(e)
            : n(e);
        },
        "listItemPrefixWhitespace",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5,
      );
    },
  },
  A = {
    partial: !0,
    tokenize: function (e, t, n) {
      const r = this;
      return (0, d.N)(
        e,
        function (e) {
          const o = r.events[r.events.length - 1];
          return o &&
            "listItemIndent" === o[1].type &&
            o[2].sliceSerialize(o[1], !0).length === r.containerState.size
            ? t(e)
            : n(e);
        },
        "listItemIndent",
        r.containerState.size + 1,
      );
    },
  },
  O = {
    continuation: {
      tokenize: function (e, t, n) {
        const r = this;
        return function (t) {
          return (0, p.On)(t)
            ? (0, d.N)(
                e,
                o,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4,
              )(t)
            : o(t);
        };
        function o(r) {
          return e.attempt(O, t, n)(r);
        }
      },
    },
    exit: function (e) {
      e.exit("blockQuote");
    },
    name: "blockQuote",
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        if (62 === t) {
          const n = r.containerState;
          return (
            n.open ||
              (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
            e.enter("blockQuotePrefix"),
            e.enter("blockQuoteMarker"),
            e.consume(t),
            e.exit("blockQuoteMarker"),
            o
          );
        }
        return n(t);
      };
      function o(n) {
        return (0, p.On)(n)
          ? (e.enter("blockQuotePrefixWhitespace"),
            e.consume(n),
            e.exit("blockQuotePrefixWhitespace"),
            e.exit("blockQuotePrefix"),
            t)
          : (e.exit("blockQuotePrefix"), t(n));
      }
    },
  };
function R(e, t, n, r, o, i, a, s, l) {
  const c = l || Number.POSITIVE_INFINITY;
  let u = 0;
  return function (t) {
    return 60 === t
      ? (e.enter(r), e.enter(o), e.enter(i), e.consume(t), e.exit(i), d)
      : null === t || 32 === t || 41 === t || (0, p.JQ)(t)
        ? n(t)
        : (e.enter(r),
          e.enter(a),
          e.enter(s),
          e.enter("chunkString", { contentType: "string" }),
          m(t));
  };
  function d(n) {
    return 62 === n
      ? (e.enter(i), e.consume(n), e.exit(i), e.exit(o), e.exit(r), t)
      : (e.enter(s), e.enter("chunkString", { contentType: "string" }), f(n));
  }
  function f(t) {
    return 62 === t
      ? (e.exit("chunkString"), e.exit(s), d(t))
      : null === t || 60 === t || (0, p.HP)(t)
        ? n(t)
        : (e.consume(t), 92 === t ? h : f);
  }
  function h(t) {
    return 60 === t || 62 === t || 92 === t ? (e.consume(t), f) : f(t);
  }
  function m(o) {
    return u || (null !== o && 41 !== o && !(0, p.Ee)(o))
      ? u < c && 40 === o
        ? (e.consume(o), u++, m)
        : 41 === o
          ? (e.consume(o), u--, m)
          : null === o || 32 === o || 40 === o || (0, p.JQ)(o)
            ? n(o)
            : (e.consume(o), 92 === o ? g : m)
      : (e.exit("chunkString"), e.exit(s), e.exit(a), e.exit(r), t(o));
  }
  function g(t) {
    return 40 === t || 41 === t || 92 === t ? (e.consume(t), m) : m(t);
  }
}
function M(e, t, n, r, o, i) {
  const a = this;
  let s,
    l = 0;
  return function (t) {
    return e.enter(r), e.enter(o), e.consume(t), e.exit(o), e.enter(i), c;
  };
  function c(d) {
    return l > 999 ||
      null === d ||
      91 === d ||
      (93 === d && !s) ||
      (94 === d && !l && "_hiddenFootnoteSupport" in a.parser.constructs)
      ? n(d)
      : 93 === d
        ? (e.exit(i), e.enter(o), e.consume(d), e.exit(o), e.exit(r), t)
        : (0, p.HP)(d)
          ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c)
          : (e.enter("chunkString", { contentType: "string" }), u(d));
  }
  function u(t) {
    return null === t || 91 === t || 93 === t || (0, p.HP)(t) || l++ > 999
      ? (e.exit("chunkString"), c(t))
      : (e.consume(t), s || (s = !(0, p.On)(t)), 92 === t ? d : u);
  }
  function d(t) {
    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, u) : u(t);
  }
}
function P(e, t, n, r, o, i) {
  let a;
  return function (t) {
    return 34 === t || 39 === t || 40 === t
      ? (e.enter(r),
        e.enter(o),
        e.consume(t),
        e.exit(o),
        (a = 40 === t ? 41 : t),
        s)
      : n(t);
  };
  function s(n) {
    return n === a
      ? (e.enter(o), e.consume(n), e.exit(o), e.exit(r), t)
      : (e.enter(i), l(n));
  }
  function l(t) {
    return t === a
      ? (e.exit(i), s(a))
      : null === t
        ? n(t)
        : (0, p.HP)(t)
          ? (e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            (0, d.N)(e, l, "linePrefix"))
          : (e.enter("chunkString", { contentType: "string" }), c(t));
  }
  function c(t) {
    return t === a || null === t || (0, p.HP)(t)
      ? (e.exit("chunkString"), l(t))
      : (e.consume(t), 92 === t ? u : c);
  }
  function u(t) {
    return t === a || 92 === t ? (e.consume(t), c) : c(t);
  }
}
function N(e, t) {
  let n;
  return function r(o) {
    return (0, p.HP)(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), (n = !0), r)
      : (0, p.On)(o)
        ? (0, d.N)(e, r, n ? "linePrefix" : "lineSuffix")(o)
        : t(o);
  };
}
var D = n(26243 /* vendor/module-26243 */);
const j = {
    name: "definition",
    tokenize: function (e, t, n) {
      const r = this;
      let o;
      return function (t) {
        return (
          e.enter("definition"),
          (function (t) {
            return M.call(
              r,
              e,
              i,
              n,
              "definitionLabel",
              "definitionLabelMarker",
              "definitionLabelString",
            )(t);
          })(t)
        );
      };
      function i(t) {
        return (
          (o = (0, D.B)(
            r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1),
          )),
          58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              a)
            : n(t)
        );
      }
      function a(t) {
        return (0, p.Ee)(t) ? N(e, s)(t) : s(t);
      }
      function s(t) {
        return R(
          e,
          l,
          n,
          "definitionDestination",
          "definitionDestinationLiteral",
          "definitionDestinationLiteralMarker",
          "definitionDestinationRaw",
          "definitionDestinationString",
        )(t);
      }
      function l(t) {
        return e.attempt(L, c, c)(t);
      }
      function c(t) {
        return (0, p.On)(t) ? (0, d.N)(e, u, "whitespace")(t) : u(t);
      }
      function u(i) {
        return null === i || (0, p.HP)(i)
          ? (e.exit("definition"), r.parser.defined.push(o), t(i))
          : n(i);
      }
    },
  },
  L = {
    partial: !0,
    tokenize: function (e, t, n) {
      return function (t) {
        return (0, p.Ee)(t) ? N(e, r)(t) : n(t);
      };
      function r(t) {
        return P(
          e,
          o,
          n,
          "definitionTitle",
          "definitionTitleMarker",
          "definitionTitleString",
        )(t);
      }
      function o(t) {
        return (0, p.On)(t) ? (0, d.N)(e, i, "whitespace")(t) : i(t);
      }
      function i(e) {
        return null === e || (0, p.HP)(e) ? t(e) : n(e);
      }
    },
  },
  F = {
    name: "codeIndented",
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return e.enter("codeIndented"), (0, d.N)(e, o, "linePrefix", 5)(t);
      };
      function o(e) {
        const t = r.events[r.events.length - 1];
        return t &&
          "linePrefix" === t[1].type &&
          t[2].sliceSerialize(t[1], !0).length >= 4
          ? i(e)
          : n(e);
      }
      function i(t) {
        return null === t
          ? s(t)
          : (0, p.HP)(t)
            ? e.attempt(U, i, s)(t)
            : (e.enter("codeFlowValue"), a(t));
      }
      function a(t) {
        return null === t || (0, p.HP)(t)
          ? (e.exit("codeFlowValue"), i(t))
          : (e.consume(t), a);
      }
      function s(n) {
        return e.exit("codeIndented"), t(n);
      }
    },
  },
  U = {
    partial: !0,
    tokenize: function (e, t, n) {
      const r = this;
      return o;
      function o(t) {
        return r.parser.lazy[r.now().line]
          ? n(t)
          : (0, p.HP)(t)
            ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o)
            : (0, d.N)(e, i, "linePrefix", 5)(t);
      }
      function i(e) {
        const i = r.events[r.events.length - 1];
        return i &&
          "linePrefix" === i[1].type &&
          i[2].sliceSerialize(i[1], !0).length >= 4
          ? t(e)
          : (0, p.HP)(e)
            ? o(e)
            : n(e);
      }
    },
  },
  B = {
    name: "headingAtx",
    resolve: function (e, t) {
      let n,
        r,
        o = e.length - 2,
        a = 3;
      return (
        "whitespace" === e[a][1].type && (a += 2),
        o - 2 > a && "whitespace" === e[o][1].type && (o -= 2),
        "atxHeadingSequence" === e[o][1].type &&
          (a === o - 1 || (o - 4 > a && "whitespace" === e[o - 2][1].type)) &&
          (o -= a + 1 === o ? 2 : 4),
        o > a &&
          ((n = {
            type: "atxHeadingText",
            start: e[a][1].start,
            end: e[o][1].end,
          }),
          (r = {
            type: "chunkText",
            start: e[a][1].start,
            end: e[o][1].end,
            contentType: "text",
          }),
          (0, i.m)(e, a, o - a + 1, [
            ["enter", n, t],
            ["enter", r, t],
            ["exit", r, t],
            ["exit", n, t],
          ])),
        e
      );
    },
    tokenize: function (e, t, n) {
      let r = 0;
      return function (t) {
        return (
          e.enter("atxHeading"),
          (function (t) {
            return e.enter("atxHeadingSequence"), o(t);
          })(t)
        );
      };
      function o(t) {
        return 35 === t && r++ < 6
          ? (e.consume(t), o)
          : null === t || (0, p.Ee)(t)
            ? (e.exit("atxHeadingSequence"), i(t))
            : n(t);
      }
      function i(n) {
        return 35 === n
          ? (e.enter("atxHeadingSequence"), a(n))
          : null === n || (0, p.HP)(n)
            ? (e.exit("atxHeading"), t(n))
            : (0, p.On)(n)
              ? (0, d.N)(e, i, "whitespace")(n)
              : (e.enter("atxHeadingText"), s(n));
      }
      function a(t) {
        return 35 === t
          ? (e.consume(t), a)
          : (e.exit("atxHeadingSequence"), i(t));
      }
      function s(t) {
        return null === t || 35 === t || (0, p.Ee)(t)
          ? (e.exit("atxHeadingText"), i(t))
          : (e.consume(t), s);
      }
    },
  },
  z = {
    name: "setextUnderline",
    resolveTo: function (e, t) {
      let n,
        r,
        o,
        i = e.length;
      for (; i--; )
        if ("enter" === e[i][0]) {
          if ("content" === e[i][1].type) {
            n = i;
            break;
          }
          "paragraph" === e[i][1].type && (r = i);
        } else
          "content" === e[i][1].type && e.splice(i, 1),
            o || "definition" !== e[i][1].type || (o = i);
      const a = {
        type: "setextHeading",
        start: { ...e[n][1].start },
        end: { ...e[e.length - 1][1].end },
      };
      return (
        (e[r][1].type = "setextHeadingText"),
        o
          ? (e.splice(r, 0, ["enter", a, t]),
            e.splice(o + 1, 0, ["exit", e[n][1], t]),
            (e[n][1].end = { ...e[o][1].end }))
          : (e[n][1] = a),
        e.push(["exit", a, t]),
        e
      );
    },
    tokenize: function (e, t, n) {
      const r = this;
      let o;
      return function (t) {
        let a,
          s = r.events.length;
        for (; s--; )
          if (
            "lineEnding" !== r.events[s][1].type &&
            "linePrefix" !== r.events[s][1].type &&
            "content" !== r.events[s][1].type
          ) {
            a = "paragraph" === r.events[s][1].type;
            break;
          }
        return r.parser.lazy[r.now().line] || (!r.interrupt && !a)
          ? n(t)
          : (e.enter("setextHeadingLine"),
            (o = t),
            (function (t) {
              return e.enter("setextHeadingLineSequence"), i(t);
            })(t));
      };
      function i(t) {
        return t === o
          ? (e.consume(t), i)
          : (e.exit("setextHeadingLineSequence"),
            (0, p.On)(t) ? (0, d.N)(e, a, "lineSuffix")(t) : a(t));
      }
      function a(r) {
        return null === r || (0, p.HP)(r)
          ? (e.exit("setextHeadingLine"), t(r))
          : n(r);
      }
    },
  },
  H = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  V = ["pre", "script", "style", "textarea"],
  q = {
    concrete: !0,
    name: "htmlFlow",
    resolveTo: function (e) {
      let t = e.length;
      for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type); );
      return (
        t > 1 &&
          "linePrefix" === e[t - 2][1].type &&
          ((e[t][1].start = e[t - 2][1].start),
          (e[t + 1][1].start = e[t - 2][1].start),
          e.splice(t - 2, 2)),
        e
      );
    },
    tokenize: function (e, t, n) {
      const r = this;
      let o, i, a, s, l;
      return function (t) {
        return (function (t) {
          return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), c;
        })(t);
      };
      function c(s) {
        return 33 === s
          ? (e.consume(s), u)
          : 47 === s
            ? (e.consume(s), (i = !0), h)
            : 63 === s
              ? (e.consume(s), (o = 3), r.interrupt ? t : D)
              : (0, p.CW)(s)
                ? (e.consume(s), (a = String.fromCharCode(s)), m)
                : n(s);
      }
      function u(i) {
        return 45 === i
          ? (e.consume(i), (o = 2), d)
          : 91 === i
            ? (e.consume(i), (o = 5), (s = 0), f)
            : (0, p.CW)(i)
              ? (e.consume(i), (o = 4), r.interrupt ? t : D)
              : n(i);
      }
      function d(o) {
        return 45 === o ? (e.consume(o), r.interrupt ? t : D) : n(o);
      }
      function f(o) {
        return o === "CDATA[".charCodeAt(s++)
          ? (e.consume(o), 6 === s ? (r.interrupt ? t : C) : f)
          : n(o);
      }
      function h(t) {
        return (0, p.CW)(t)
          ? (e.consume(t), (a = String.fromCharCode(t)), m)
          : n(t);
      }
      function m(s) {
        if (null === s || 47 === s || 62 === s || (0, p.Ee)(s)) {
          const l = 47 === s,
            c = a.toLowerCase();
          return l || i || !V.includes(c)
            ? H.includes(a.toLowerCase())
              ? ((o = 6), l ? (e.consume(s), g) : r.interrupt ? t(s) : C(s))
              : ((o = 7),
                r.interrupt && !r.parser.lazy[r.now().line]
                  ? n(s)
                  : i
                    ? y(s)
                    : v(s))
            : ((o = 1), r.interrupt ? t(s) : C(s));
        }
        return 45 === s || (0, p.lV)(s)
          ? (e.consume(s), (a += String.fromCharCode(s)), m)
          : n(s);
      }
      function g(o) {
        return 62 === o ? (e.consume(o), r.interrupt ? t : C) : n(o);
      }
      function y(t) {
        return (0, p.On)(t) ? (e.consume(t), y) : T(t);
      }
      function v(t) {
        return 47 === t
          ? (e.consume(t), T)
          : 58 === t || 95 === t || (0, p.CW)(t)
            ? (e.consume(t), b)
            : (0, p.On)(t)
              ? (e.consume(t), v)
              : T(t);
      }
      function b(t) {
        return 45 === t || 46 === t || 58 === t || 95 === t || (0, p.lV)(t)
          ? (e.consume(t), b)
          : S(t);
      }
      function S(t) {
        return 61 === t
          ? (e.consume(t), _)
          : (0, p.On)(t)
            ? (e.consume(t), S)
            : v(t);
      }
      function _(t) {
        return null === t || 60 === t || 61 === t || 62 === t || 96 === t
          ? n(t)
          : 34 === t || 39 === t
            ? (e.consume(t), (l = t), x)
            : (0, p.On)(t)
              ? (e.consume(t), _)
              : w(t);
      }
      function x(t) {
        return t === l
          ? (e.consume(t), (l = null), E)
          : null === t || (0, p.HP)(t)
            ? n(t)
            : (e.consume(t), x);
      }
      function w(t) {
        return null === t ||
          34 === t ||
          39 === t ||
          47 === t ||
          60 === t ||
          61 === t ||
          62 === t ||
          96 === t ||
          (0, p.Ee)(t)
          ? S(t)
          : (e.consume(t), w);
      }
      function E(e) {
        return 47 === e || 62 === e || (0, p.On)(e) ? v(e) : n(e);
      }
      function T(t) {
        return 62 === t ? (e.consume(t), k) : n(t);
      }
      function k(t) {
        return null === t || (0, p.HP)(t)
          ? C(t)
          : (0, p.On)(t)
            ? (e.consume(t), k)
            : n(t);
      }
      function C(t) {
        return 45 === t && 2 === o
          ? (e.consume(t), R)
          : 60 === t && 1 === o
            ? (e.consume(t), M)
            : 62 === t && 4 === o
              ? (e.consume(t), j)
              : 63 === t && 3 === o
                ? (e.consume(t), D)
                : 93 === t && 5 === o
                  ? (e.consume(t), N)
                  : !(0, p.HP)(t) || (6 !== o && 7 !== o)
                    ? null === t || (0, p.HP)(t)
                      ? (e.exit("htmlFlowData"), I(t))
                      : (e.consume(t), C)
                    : (e.exit("htmlFlowData"), e.check(G, L, I)(t));
      }
      function I(t) {
        return e.check(W, A, L)(t);
      }
      function A(t) {
        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), O;
      }
      function O(t) {
        return null === t || (0, p.HP)(t)
          ? I(t)
          : (e.enter("htmlFlowData"), C(t));
      }
      function R(t) {
        return 45 === t ? (e.consume(t), D) : C(t);
      }
      function M(t) {
        return 47 === t ? (e.consume(t), (a = ""), P) : C(t);
      }
      function P(t) {
        if (62 === t) {
          const n = a.toLowerCase();
          return V.includes(n) ? (e.consume(t), j) : C(t);
        }
        return (0, p.CW)(t) && a.length < 8
          ? (e.consume(t), (a += String.fromCharCode(t)), P)
          : C(t);
      }
      function N(t) {
        return 93 === t ? (e.consume(t), D) : C(t);
      }
      function D(t) {
        return 62 === t
          ? (e.consume(t), j)
          : 45 === t && 2 === o
            ? (e.consume(t), D)
            : C(t);
      }
      function j(t) {
        return null === t || (0, p.HP)(t)
          ? (e.exit("htmlFlowData"), L(t))
          : (e.consume(t), j);
      }
      function L(n) {
        return e.exit("htmlFlow"), t(n);
      }
    },
  },
  G = {
    partial: !0,
    tokenize: function (e, t, n) {
      return function (r) {
        return (
          e.enter("lineEnding"),
          e.consume(r),
          e.exit("lineEnding"),
          e.attempt(g.B, t, n)
        );
      };
    },
  },
  W = {
    partial: !0,
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return (0, p.HP)(t)
          ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o)
          : n(t);
      };
      function o(e) {
        return r.parser.lazy[r.now().line] ? n(e) : t(e);
      }
    },
  },
  $ = {
    partial: !0,
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return null === t
          ? n(t)
          : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o);
      };
      function o(e) {
        return r.parser.lazy[r.now().line] ? n(e) : t(e);
      }
    },
  },
  Y = {
    concrete: !0,
    name: "codeFenced",
    tokenize: function (e, t, n) {
      const r = this,
        o = {
          partial: !0,
          tokenize: function (e, t, n) {
            let o = 0;
            return function (t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a
              );
            };
            function a(t) {
              return (
                e.enter("codeFencedFence"),
                (0, p.On)(t)
                  ? (0, d.N)(
                      e,
                      l,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4,
                    )(t)
                  : l(t)
              );
            }
            function l(t) {
              return t === i
                ? (e.enter("codeFencedFenceSequence"), c(t))
                : n(t);
            }
            function c(t) {
              return t === i
                ? (o++, e.consume(t), c)
                : o >= s
                  ? (e.exit("codeFencedFenceSequence"),
                    (0, p.On)(t) ? (0, d.N)(e, u, "whitespace")(t) : u(t))
                  : n(t);
            }
            function u(r) {
              return null === r || (0, p.HP)(r)
                ? (e.exit("codeFencedFence"), t(r))
                : n(r);
            }
          },
        };
      let i,
        a = 0,
        s = 0;
      return function (t) {
        return (function (t) {
          const n = r.events[r.events.length - 1];
          return (
            (a =
              n && "linePrefix" === n[1].type
                ? n[2].sliceSerialize(n[1], !0).length
                : 0),
            (i = t),
            e.enter("codeFenced"),
            e.enter("codeFencedFence"),
            e.enter("codeFencedFenceSequence"),
            l(t)
          );
        })(t);
      };
      function l(t) {
        return t === i
          ? (s++, e.consume(t), l)
          : s < 3
            ? n(t)
            : (e.exit("codeFencedFenceSequence"),
              (0, p.On)(t) ? (0, d.N)(e, c, "whitespace")(t) : c(t));
      }
      function c(n) {
        return null === n || (0, p.HP)(n)
          ? (e.exit("codeFencedFence"),
            r.interrupt ? t(n) : e.check($, m, S)(n))
          : (e.enter("codeFencedFenceInfo"),
            e.enter("chunkString", { contentType: "string" }),
            u(n));
      }
      function u(t) {
        return null === t || (0, p.HP)(t)
          ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(t))
          : (0, p.On)(t)
            ? (e.exit("chunkString"),
              e.exit("codeFencedFenceInfo"),
              (0, d.N)(e, f, "whitespace")(t))
            : 96 === t && t === i
              ? n(t)
              : (e.consume(t), u);
      }
      function f(t) {
        return null === t || (0, p.HP)(t)
          ? c(t)
          : (e.enter("codeFencedFenceMeta"),
            e.enter("chunkString", { contentType: "string" }),
            h(t));
      }
      function h(t) {
        return null === t || (0, p.HP)(t)
          ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(t))
          : 96 === t && t === i
            ? n(t)
            : (e.consume(t), h);
      }
      function m(t) {
        return e.attempt(o, S, g)(t);
      }
      function g(t) {
        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), y;
      }
      function y(t) {
        return a > 0 && (0, p.On)(t)
          ? (0, d.N)(e, v, "linePrefix", a + 1)(t)
          : v(t);
      }
      function v(t) {
        return null === t || (0, p.HP)(t)
          ? e.check($, m, S)(t)
          : (e.enter("codeFlowValue"), b(t));
      }
      function b(t) {
        return null === t || (0, p.HP)(t)
          ? (e.exit("codeFlowValue"), v(t))
          : (e.consume(t), b);
      }
      function S(n) {
        return e.exit("codeFenced"), t(n);
      }
    },
  },
  K = document.createElement("i");
function Z(e) {
  const t = "&" + e + ";";
  K.innerHTML = t;
  const n = K.textContent;
  return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
}
const Q = {
    name: "characterReference",
    tokenize: function (e, t, n) {
      const r = this;
      let o,
        i,
        a = 0;
      return function (t) {
        return (
          e.enter("characterReference"),
          e.enter("characterReferenceMarker"),
          e.consume(t),
          e.exit("characterReferenceMarker"),
          s
        );
      };
      function s(t) {
        return 35 === t
          ? (e.enter("characterReferenceMarkerNumeric"),
            e.consume(t),
            e.exit("characterReferenceMarkerNumeric"),
            l)
          : (e.enter("characterReferenceValue"), (o = 31), (i = p.lV), c(t));
      }
      function l(t) {
        return 88 === t || 120 === t
          ? (e.enter("characterReferenceMarkerHexadecimal"),
            e.consume(t),
            e.exit("characterReferenceMarkerHexadecimal"),
            e.enter("characterReferenceValue"),
            (o = 6),
            (i = p.ok),
            c)
          : (e.enter("characterReferenceValue"), (o = 7), (i = p.BM), c(t));
      }
      function c(s) {
        if (59 === s && a) {
          const o = e.exit("characterReferenceValue");
          return i !== p.lV || Z(r.sliceSerialize(o))
            ? (e.enter("characterReferenceMarker"),
              e.consume(s),
              e.exit("characterReferenceMarker"),
              e.exit("characterReference"),
              t)
            : n(s);
        }
        return i(s) && a++ < o ? (e.consume(s), c) : n(s);
      }
    },
  },
  J = {
    name: "characterEscape",
    tokenize: function (e, t, n) {
      return function (t) {
        return (
          e.enter("characterEscape"),
          e.enter("escapeMarker"),
          e.consume(t),
          e.exit("escapeMarker"),
          r
        );
      };
      function r(r) {
        return (0, p.ol)(r)
          ? (e.enter("characterEscapeValue"),
            e.consume(r),
            e.exit("characterEscapeValue"),
            e.exit("characterEscape"),
            t)
          : n(r);
      }
    },
  },
  X = {
    name: "lineEnding",
    tokenize: function (e, t) {
      return function (n) {
        return (
          e.enter("lineEnding"),
          e.consume(n),
          e.exit("lineEnding"),
          (0, d.N)(e, t, "linePrefix")
        );
      };
    },
  };
var ee = n(23796 /* vendor/module-23796 */);
const te = {
    name: "labelEnd",
    resolveAll: function (e) {
      let t = -1;
      const n = [];
      for (; ++t < e.length; ) {
        const r = e[t][1];
        if (
          (n.push(e[t]),
          "labelImage" === r.type ||
            "labelLink" === r.type ||
            "labelEnd" === r.type)
        ) {
          const e = "labelImage" === r.type ? 4 : 2;
          (r.type = "data"), (t += e);
        }
      }
      return e.length !== n.length && (0, i.m)(e, 0, e.length, n), e;
    },
    resolveTo: function (e, t) {
      let n,
        r,
        o,
        a,
        s = e.length,
        l = 0;
      for (; s--; )
        if (((n = e[s][1]), r)) {
          if ("link" === n.type || ("labelLink" === n.type && n._inactive))
            break;
          "enter" === e[s][0] && "labelLink" === n.type && (n._inactive = !0);
        } else if (o) {
          if (
            "enter" === e[s][0] &&
            ("labelImage" === n.type || "labelLink" === n.type) &&
            !n._balanced &&
            ((r = s), "labelLink" !== n.type)
          ) {
            l = 2;
            break;
          }
        } else "labelEnd" === n.type && (o = s);
      const c = {
          type: "labelLink" === e[r][1].type ? "link" : "image",
          start: { ...e[r][1].start },
          end: { ...e[e.length - 1][1].end },
        },
        u = {
          type: "label",
          start: { ...e[r][1].start },
          end: { ...e[o][1].end },
        },
        d = {
          type: "labelText",
          start: { ...e[r + l + 2][1].end },
          end: { ...e[o - 2][1].start },
        };
      return (
        (a = [
          ["enter", c, t],
          ["enter", u, t],
        ]),
        (a = (0, i.V)(a, e.slice(r + 1, r + l + 3))),
        (a = (0, i.V)(a, [["enter", d, t]])),
        (a = (0, i.V)(
          a,
          (0, ee.W)(
            t.parser.constructs.insideSpan.null,
            e.slice(r + l + 4, o - 3),
            t,
          ),
        )),
        (a = (0, i.V)(a, [["exit", d, t], e[o - 2], e[o - 1], ["exit", u, t]])),
        (a = (0, i.V)(a, e.slice(o + 1))),
        (a = (0, i.V)(a, [["exit", c, t]])),
        (0, i.m)(e, r, e.length, a),
        e
      );
    },
    tokenize: function (e, t, n) {
      const r = this;
      let o,
        i,
        a = r.events.length;
      for (; a--; )
        if (
          ("labelImage" === r.events[a][1].type ||
            "labelLink" === r.events[a][1].type) &&
          !r.events[a][1]._balanced
        ) {
          o = r.events[a][1];
          break;
        }
      return function (t) {
        return o
          ? o._inactive
            ? u(t)
            : ((i = r.parser.defined.includes(
                (0, D.B)(r.sliceSerialize({ start: o.end, end: r.now() })),
              )),
              e.enter("labelEnd"),
              e.enter("labelMarker"),
              e.consume(t),
              e.exit("labelMarker"),
              e.exit("labelEnd"),
              s)
          : n(t);
      };
      function s(t) {
        return 40 === t
          ? e.attempt(ne, c, i ? c : u)(t)
          : 91 === t
            ? e.attempt(re, c, i ? l : u)(t)
            : i
              ? c(t)
              : u(t);
      }
      function l(t) {
        return e.attempt(oe, c, u)(t);
      }
      function c(e) {
        return t(e);
      }
      function u(e) {
        return (o._balanced = !0), n(e);
      }
    },
  },
  ne = {
    tokenize: function (e, t, n) {
      return function (t) {
        return (
          e.enter("resource"),
          e.enter("resourceMarker"),
          e.consume(t),
          e.exit("resourceMarker"),
          r
        );
      };
      function r(t) {
        return (0, p.Ee)(t) ? N(e, o)(t) : o(t);
      }
      function o(t) {
        return 41 === t
          ? c(t)
          : R(
              e,
              i,
              a,
              "resourceDestination",
              "resourceDestinationLiteral",
              "resourceDestinationLiteralMarker",
              "resourceDestinationRaw",
              "resourceDestinationString",
              32,
            )(t);
      }
      function i(t) {
        return (0, p.Ee)(t) ? N(e, s)(t) : c(t);
      }
      function a(e) {
        return n(e);
      }
      function s(t) {
        return 34 === t || 39 === t || 40 === t
          ? P(
              e,
              l,
              n,
              "resourceTitle",
              "resourceTitleMarker",
              "resourceTitleString",
            )(t)
          : c(t);
      }
      function l(t) {
        return (0, p.Ee)(t) ? N(e, c)(t) : c(t);
      }
      function c(r) {
        return 41 === r
          ? (e.enter("resourceMarker"),
            e.consume(r),
            e.exit("resourceMarker"),
            e.exit("resource"),
            t)
          : n(r);
      }
    },
  },
  re = {
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return M.call(
          r,
          e,
          o,
          i,
          "reference",
          "referenceMarker",
          "referenceString",
        )(t);
      };
      function o(e) {
        return r.parser.defined.includes(
          (0, D.B)(
            r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1),
          ),
        )
          ? t(e)
          : n(e);
      }
      function i(e) {
        return n(e);
      }
    },
  },
  oe = {
    tokenize: function (e, t, n) {
      return function (t) {
        return (
          e.enter("reference"),
          e.enter("referenceMarker"),
          e.consume(t),
          e.exit("referenceMarker"),
          r
        );
      };
      function r(r) {
        return 93 === r
          ? (e.enter("referenceMarker"),
            e.consume(r),
            e.exit("referenceMarker"),
            e.exit("reference"),
            t)
          : n(r);
      }
    },
  },
  ie = {
    name: "labelStartImage",
    resolveAll: te.resolveAll,
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return (
          e.enter("labelImage"),
          e.enter("labelImageMarker"),
          e.consume(t),
          e.exit("labelImageMarker"),
          o
        );
      };
      function o(t) {
        return 91 === t
          ? (e.enter("labelMarker"),
            e.consume(t),
            e.exit("labelMarker"),
            e.exit("labelImage"),
            i)
          : n(t);
      }
      function i(e) {
        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
          ? n(e)
          : t(e);
      }
    },
  };
var ae = n(66990 /* vendor/module-66990 */);
const se = {
  name: "attention",
  resolveAll: function (e, t) {
    let n,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      d = -1;
    for (; ++d < e.length; )
      if (
        "enter" === e[d][0] &&
        "attentionSequence" === e[d][1].type &&
        e[d][1]._close
      )
        for (n = d; n--; )
          if (
            "exit" === e[n][0] &&
            "attentionSequence" === e[n][1].type &&
            e[n][1]._open &&
            t.sliceSerialize(e[n][1]).charCodeAt(0) ===
              t.sliceSerialize(e[d][1]).charCodeAt(0)
          ) {
            if (
              (e[n][1]._close || e[d][1]._open) &&
              (e[d][1].end.offset - e[d][1].start.offset) % 3 &&
              !(
                (e[n][1].end.offset -
                  e[n][1].start.offset +
                  e[d][1].end.offset -
                  e[d][1].start.offset) %
                3
              )
            )
              continue;
            l =
              e[n][1].end.offset - e[n][1].start.offset > 1 &&
              e[d][1].end.offset - e[d][1].start.offset > 1
                ? 2
                : 1;
            const p = { ...e[n][1].end },
              f = { ...e[d][1].start };
            le(p, -l),
              le(f, l),
              (a = {
                type: l > 1 ? "strongSequence" : "emphasisSequence",
                start: p,
                end: { ...e[n][1].end },
              }),
              (s = {
                type: l > 1 ? "strongSequence" : "emphasisSequence",
                start: { ...e[d][1].start },
                end: f,
              }),
              (o = {
                type: l > 1 ? "strongText" : "emphasisText",
                start: { ...e[n][1].end },
                end: { ...e[d][1].start },
              }),
              (r = {
                type: l > 1 ? "strong" : "emphasis",
                start: { ...a.start },
                end: { ...s.end },
              }),
              (e[n][1].end = { ...a.start }),
              (e[d][1].start = { ...s.end }),
              (c = []),
              e[n][1].end.offset - e[n][1].start.offset &&
                (c = (0, i.V)(c, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])),
              (c = (0, i.V)(c, [
                ["enter", r, t],
                ["enter", a, t],
                ["exit", a, t],
                ["enter", o, t],
              ])),
              (c = (0, i.V)(
                c,
                (0, ee.W)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(n + 1, d),
                  t,
                ),
              )),
              (c = (0, i.V)(c, [
                ["exit", o, t],
                ["enter", s, t],
                ["exit", s, t],
                ["exit", r, t],
              ])),
              e[d][1].end.offset - e[d][1].start.offset
                ? ((u = 2),
                  (c = (0, i.V)(c, [
                    ["enter", e[d][1], t],
                    ["exit", e[d][1], t],
                  ])))
                : (u = 0),
              (0, i.m)(e, n - 1, d - n + 3, c),
              (d = n + c.length - u - 2);
            break;
          }
    for (d = -1; ++d < e.length; )
      "attentionSequence" === e[d][1].type && (e[d][1].type = "data");
    return e;
  },
  tokenize: function (e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      o = (0, ae.S)(r);
    let i;
    return function (t) {
      return (i = t), e.enter("attentionSequence"), a(t);
    };
    function a(s) {
      if (s === i) return e.consume(s), a;
      const l = e.exit("attentionSequence"),
        c = (0, ae.S)(s),
        u = !c || (2 === c && o) || n.includes(s),
        d = !o || (2 === o && c) || n.includes(r);
      return (
        (l._open = Boolean(42 === i ? u : u && (o || !d))),
        (l._close = Boolean(42 === i ? d : d && (c || !u))),
        t(s)
      );
    }
  },
};
function le(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const ce = {
    name: "autolink",
    tokenize: function (e, t, n) {
      let r = 0;
      return function (t) {
        return (
          e.enter("autolink"),
          e.enter("autolinkMarker"),
          e.consume(t),
          e.exit("autolinkMarker"),
          e.enter("autolinkProtocol"),
          o
        );
      };
      function o(t) {
        return (0, p.CW)(t) ? (e.consume(t), i) : 64 === t ? n(t) : l(t);
      }
      function i(e) {
        return 43 === e || 45 === e || 46 === e || (0, p.lV)(e)
          ? ((r = 1), a(e))
          : l(e);
      }
      function a(t) {
        return 58 === t
          ? (e.consume(t), (r = 0), s)
          : (43 === t || 45 === t || 46 === t || (0, p.lV)(t)) && r++ < 32
            ? (e.consume(t), a)
            : ((r = 0), l(t));
      }
      function s(r) {
        return 62 === r
          ? (e.exit("autolinkProtocol"),
            e.enter("autolinkMarker"),
            e.consume(r),
            e.exit("autolinkMarker"),
            e.exit("autolink"),
            t)
          : null === r || 32 === r || 60 === r || (0, p.JQ)(r)
            ? n(r)
            : (e.consume(r), s);
      }
      function l(t) {
        return 64 === t
          ? (e.consume(t), c)
          : (0, p.cx)(t)
            ? (e.consume(t), l)
            : n(t);
      }
      function c(e) {
        return (0, p.lV)(e) ? u(e) : n(e);
      }
      function u(n) {
        return 46 === n
          ? (e.consume(n), (r = 0), c)
          : 62 === n
            ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
              e.enter("autolinkMarker"),
              e.consume(n),
              e.exit("autolinkMarker"),
              e.exit("autolink"),
              t)
            : d(n);
      }
      function d(t) {
        if ((45 === t || (0, p.lV)(t)) && r++ < 63) {
          const n = 45 === t ? d : u;
          return e.consume(t), n;
        }
        return n(t);
      }
    },
  },
  ue = {
    name: "htmlText",
    tokenize: function (e, t, n) {
      const r = this;
      let o, i, a;
      return function (t) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), s;
      };
      function s(t) {
        return 33 === t
          ? (e.consume(t), l)
          : 47 === t
            ? (e.consume(t), x)
            : 63 === t
              ? (e.consume(t), S)
              : (0, p.CW)(t)
                ? (e.consume(t), T)
                : n(t);
      }
      function l(t) {
        return 45 === t
          ? (e.consume(t), c)
          : 91 === t
            ? (e.consume(t), (i = 0), m)
            : (0, p.CW)(t)
              ? (e.consume(t), b)
              : n(t);
      }
      function c(t) {
        return 45 === t ? (e.consume(t), h) : n(t);
      }
      function u(t) {
        return null === t
          ? n(t)
          : 45 === t
            ? (e.consume(t), f)
            : (0, p.HP)(t)
              ? ((a = u), N(t))
              : (e.consume(t), u);
      }
      function f(t) {
        return 45 === t ? (e.consume(t), h) : u(t);
      }
      function h(e) {
        return 62 === e ? P(e) : 45 === e ? f(e) : u(e);
      }
      function m(t) {
        return t === "CDATA[".charCodeAt(i++)
          ? (e.consume(t), 6 === i ? g : m)
          : n(t);
      }
      function g(t) {
        return null === t
          ? n(t)
          : 93 === t
            ? (e.consume(t), y)
            : (0, p.HP)(t)
              ? ((a = g), N(t))
              : (e.consume(t), g);
      }
      function y(t) {
        return 93 === t ? (e.consume(t), v) : g(t);
      }
      function v(t) {
        return 62 === t ? P(t) : 93 === t ? (e.consume(t), v) : g(t);
      }
      function b(t) {
        return null === t || 62 === t
          ? P(t)
          : (0, p.HP)(t)
            ? ((a = b), N(t))
            : (e.consume(t), b);
      }
      function S(t) {
        return null === t
          ? n(t)
          : 63 === t
            ? (e.consume(t), _)
            : (0, p.HP)(t)
              ? ((a = S), N(t))
              : (e.consume(t), S);
      }
      function _(e) {
        return 62 === e ? P(e) : S(e);
      }
      function x(t) {
        return (0, p.CW)(t) ? (e.consume(t), w) : n(t);
      }
      function w(t) {
        return 45 === t || (0, p.lV)(t) ? (e.consume(t), w) : E(t);
      }
      function E(t) {
        return (0, p.HP)(t)
          ? ((a = E), N(t))
          : (0, p.On)(t)
            ? (e.consume(t), E)
            : P(t);
      }
      function T(t) {
        return 45 === t || (0, p.lV)(t)
          ? (e.consume(t), T)
          : 47 === t || 62 === t || (0, p.Ee)(t)
            ? k(t)
            : n(t);
      }
      function k(t) {
        return 47 === t
          ? (e.consume(t), P)
          : 58 === t || 95 === t || (0, p.CW)(t)
            ? (e.consume(t), C)
            : (0, p.HP)(t)
              ? ((a = k), N(t))
              : (0, p.On)(t)
                ? (e.consume(t), k)
                : P(t);
      }
      function C(t) {
        return 45 === t || 46 === t || 58 === t || 95 === t || (0, p.lV)(t)
          ? (e.consume(t), C)
          : I(t);
      }
      function I(t) {
        return 61 === t
          ? (e.consume(t), A)
          : (0, p.HP)(t)
            ? ((a = I), N(t))
            : (0, p.On)(t)
              ? (e.consume(t), I)
              : k(t);
      }
      function A(t) {
        return null === t || 60 === t || 61 === t || 62 === t || 96 === t
          ? n(t)
          : 34 === t || 39 === t
            ? (e.consume(t), (o = t), O)
            : (0, p.HP)(t)
              ? ((a = A), N(t))
              : (0, p.On)(t)
                ? (e.consume(t), A)
                : (e.consume(t), R);
      }
      function O(t) {
        return t === o
          ? (e.consume(t), (o = void 0), M)
          : null === t
            ? n(t)
            : (0, p.HP)(t)
              ? ((a = O), N(t))
              : (e.consume(t), O);
      }
      function R(t) {
        return null === t ||
          34 === t ||
          39 === t ||
          60 === t ||
          61 === t ||
          96 === t
          ? n(t)
          : 47 === t || 62 === t || (0, p.Ee)(t)
            ? k(t)
            : (e.consume(t), R);
      }
      function M(e) {
        return 47 === e || 62 === e || (0, p.Ee)(e) ? k(e) : n(e);
      }
      function P(r) {
        return 62 === r
          ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t)
          : n(r);
      }
      function N(t) {
        return (
          e.exit("htmlTextData"),
          e.enter("lineEnding"),
          e.consume(t),
          e.exit("lineEnding"),
          D
        );
      }
      function D(t) {
        return (0, p.On)(t)
          ? (0, d.N)(
              e,
              j,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4,
            )(t)
          : j(t);
      }
      function j(t) {
        return e.enter("htmlTextData"), a(t);
      }
    },
  },
  de = {
    name: "labelStartLink",
    resolveAll: te.resolveAll,
    tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
        return (
          e.enter("labelLink"),
          e.enter("labelMarker"),
          e.consume(t),
          e.exit("labelMarker"),
          e.exit("labelLink"),
          o
        );
      };
      function o(e) {
        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
          ? n(e)
          : t(e);
      }
    },
  },
  pe = {
    name: "hardBreakEscape",
    tokenize: function (e, t, n) {
      return function (t) {
        return e.enter("hardBreakEscape"), e.consume(t), r;
      };
      function r(r) {
        return (0, p.HP)(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
      }
    },
  },
  fe = {
    name: "codeText",
    previous: function (e) {
      return (
        96 !== e ||
        "characterEscape" === this.events[this.events.length - 1][1].type
      );
    },
    resolve: function (e) {
      let t,
        n,
        r = e.length - 4,
        o = 3;
      if (
        !(
          ("lineEnding" !== e[o][1].type && "space" !== e[o][1].type) ||
          ("lineEnding" !== e[r][1].type && "space" !== e[r][1].type)
        )
      )
        for (t = o; ++t < r; )
          if ("codeTextData" === e[t][1].type) {
            (e[o][1].type = "codeTextPadding"),
              (e[r][1].type = "codeTextPadding"),
              (o += 2),
              (r -= 2);
            break;
          }
      for (t = o - 1, r++; ++t <= r; )
        void 0 === n
          ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
          : (t !== r && "lineEnding" !== e[t][1].type) ||
            ((e[n][1].type = "codeTextData"),
            t !== n + 2 &&
              ((e[n][1].end = e[t - 1][1].end),
              e.splice(n + 2, t - n - 2),
              (r -= t - n - 2),
              (t = n + 2)),
            (n = void 0));
      return e;
    },
    tokenize: function (e, t, n) {
      let r,
        o,
        i = 0;
      return function (t) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(t);
      };
      function a(t) {
        return 96 === t
          ? (e.consume(t), i++, a)
          : (e.exit("codeTextSequence"), s(t));
      }
      function s(t) {
        return null === t
          ? n(t)
          : 32 === t
            ? (e.enter("space"), e.consume(t), e.exit("space"), s)
            : 96 === t
              ? ((o = e.enter("codeTextSequence")), (r = 0), c(t))
              : (0, p.HP)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s)
                : (e.enter("codeTextData"), l(t));
      }
      function l(t) {
        return null === t || 32 === t || 96 === t || (0, p.HP)(t)
          ? (e.exit("codeTextData"), s(t))
          : (e.consume(t), l);
      }
      function c(n) {
        return 96 === n
          ? (e.consume(n), r++, c)
          : r === i
            ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n))
            : ((o.type = "codeTextData"), l(n));
      }
    },
  },
  he = {
    42: C,
    43: C,
    45: C,
    48: C,
    49: C,
    50: C,
    51: C,
    52: C,
    53: C,
    54: C,
    55: C,
    56: C,
    57: C,
    62: O,
  },
  me = { 91: j },
  ge = { [-2]: F, [-1]: F, 32: F },
  ye = {
    35: B,
    42: k,
    45: [z, k],
    60: q,
    61: z,
    95: k,
    96: Y,
    126: Y,
  },
  ve = { 38: Q, 92: J },
  be = {
    [-5]: X,
    [-4]: X,
    [-3]: X,
    33: ie,
    38: Q,
    42: se,
    60: [ce, ue],
    91: de,
    92: [pe, J],
    93: te,
    95: se,
    96: fe,
  },
  Se = { null: [se, S] },
  _e = { null: [42, 95] },
  xe = { null: [] };
function we(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (n && n.line) || 1,
    column: (n && n.column) || 1,
    offset: (n && n.offset) || 0,
  };
  const o = {},
    a = [];
  let s = [],
    l = [],
    c = !0;
  const u = {
      attempt: b(function (e, t) {
        S(e, t.from);
      }),
      check: b(v),
      consume: function (e) {
        (0, p.HP)(e)
          ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), _())
          : -1 !== e && (r.column++, r.offset++),
          r._bufferIndex < 0
            ? r._index++
            : (r._bufferIndex++,
              r._bufferIndex === s[r._index].length &&
                ((r._bufferIndex = -1), r._index++)),
          (d.previous = e),
          (c = !0);
      },
      enter: function (e, t) {
        const n = t || {};
        return (
          (n.type = e),
          (n.start = g()),
          d.events.push(["enter", n, d]),
          l.push(n),
          n
        );
      },
      exit: function (e) {
        const t = l.pop();
        return (t.end = g()), d.events.push(["exit", t, d]), t;
      },
      interrupt: b(v, { interrupt: !0 }),
    },
    d = {
      code: null,
      containerState: {},
      defineSkip: function (e) {
        (o[e.line] = e.column), _();
      },
      events: [],
      now: g,
      parser: e,
      previous: null,
      sliceSerialize: function (e, t) {
        return (function (e, t) {
          let n = -1;
          const r = [];
          let o;
          for (; ++n < e.length; ) {
            const i = e[n];
            let a;
            if ("string" == typeof i) a = i;
            else
              switch (i) {
                case -5:
                  a = "\r";
                  break;
                case -4:
                  a = "\n";
                  break;
                case -3:
                  a = "\r\n";
                  break;
                case -2:
                  a = t ? " " : "\t";
                  break;
                case -1:
                  if (!t && o) continue;
                  a = " ";
                  break;
                default:
                  a = String.fromCharCode(i);
              }
            (o = -2 === i), r.push(a);
          }
          return r.join("");
        })(m(e), t);
      },
      sliceStream: m,
      write: function (e) {
        return (
          (s = (0, i.V)(s, e)),
          (function () {
            let e;
            for (; r._index < s.length; ) {
              const t = s[r._index];
              if ("string" == typeof t)
                for (
                  e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                  r._index === e && r._bufferIndex < t.length;

                )
                  y(t.charCodeAt(r._bufferIndex));
              else y(t);
            }
          })(),
          null !== s[s.length - 1]
            ? []
            : (S(t, 0), (d.events = (0, ee.W)(a, d.events, d)), d.events)
        );
      },
    };
  let f,
    h = t.tokenize.call(d, u);
  return t.resolveAll && a.push(t), d;
  function m(e) {
    return (function (e, t) {
      const n = t.start._index,
        r = t.start._bufferIndex,
        o = t.end._index,
        i = t.end._bufferIndex;
      let a;
      if (n === o) a = [e[n].slice(r, i)];
      else {
        if (((a = e.slice(n, o)), r > -1)) {
          const e = a[0];
          "string" == typeof e ? (a[0] = e.slice(r)) : a.shift();
        }
        i > 0 && a.push(e[o].slice(0, i));
      }
      return a;
    })(s, e);
  }
  function g() {
    const { _bufferIndex: e, _index: t, line: n, column: o, offset: i } = r;
    return {
      _bufferIndex: e,
      _index: t,
      line: n,
      column: o,
      offset: i,
    };
  }
  function y(e) {
    (c = void 0), (f = e), (h = h(e));
  }
  function v(e, t) {
    t.restore();
  }
  function b(e, t) {
    return function (n, o, i) {
      let a, s, p, f;
      return Array.isArray(n)
        ? m(n)
        : "tokenize" in n
          ? m([n])
          : ((h = n),
            function (e) {
              const t = null !== e && h[e],
                n = null !== e && h.null;
              return m([
                ...(Array.isArray(t) ? t : t ? [t] : []),
                ...(Array.isArray(n) ? n : n ? [n] : []),
              ])(e);
            });
      var h;
      function m(e) {
        return (a = e), (s = 0), 0 === e.length ? i : y(e[s]);
      }
      function y(e) {
        return function (n) {
          return (
            (f = (function () {
              const e = g(),
                t = d.previous,
                n = d.currentConstruct,
                o = d.events.length,
                i = Array.from(l);
              return {
                from: o,
                restore: function () {
                  (r = e),
                    (d.previous = t),
                    (d.currentConstruct = n),
                    (d.events.length = o),
                    (l = i),
                    _();
                },
              };
            })()),
            (p = e),
            e.partial || (d.currentConstruct = e),
            e.name && d.parser.constructs.disable.null.includes(e.name)
              ? b()
              : e.tokenize.call(
                  t ? Object.assign(Object.create(d), t) : d,
                  u,
                  v,
                  b,
                )(n)
          );
        };
      }
      function v(t) {
        return (c = !0), e(p, f), o;
      }
      function b(e) {
        return (c = !0), f.restore(), ++s < a.length ? y(a[s]) : i;
      }
    };
  }
  function S(e, t) {
    e.resolveAll && !a.includes(e) && a.push(e),
      e.resolve &&
        (0, i.m)(
          d.events,
          t,
          d.events.length - t,
          e.resolve(d.events.slice(t), d),
        ),
      e.resolveTo && (d.events = e.resolveTo(d.events, d));
  }
  function _() {
    r.line in o &&
      r.column < 2 &&
      ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
  }
}
const Ee = /[\0\t\n\r]/g;
function Te(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    11 === n ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    !(65535 & ~n) ||
    65534 == (65535 & n) ||
    n > 1114111
    ? "�"
    : String.fromCodePoint(n);
}
const ke = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ce(e, t, n) {
  if (t) return t;
  if (35 === n.charCodeAt(0)) {
    const e = n.charCodeAt(1),
      t = 120 === e || 88 === e;
    return Te(n.slice(t ? 2 : 1), t ? 16 : 10);
  }
  return Z(n) || e;
}
var Ie = n(29993 /* vendor/module-29993 */);
const Ae = {}.hasOwnProperty;
function Oe(e, t, n) {
  return (
    t && "object" == typeof t && ((n = t), (t = void 0)),
    (function (e) {
      const t = {
        transforms: [],
        canContainEols: [
          "emphasis",
          "fragment",
          "heading",
          "paragraph",
          "strong",
        ],
        enter: {
          autolink: i(b),
          autolinkProtocol: d,
          autolinkEmail: d,
          atxHeading: i(g),
          blockQuote: i(function () {
            return { type: "blockquote", children: [] };
          }),
          characterEscape: d,
          characterReference: d,
          codeFenced: i(m),
          codeFencedFenceInfo: a,
          codeFencedFenceMeta: a,
          codeIndented: i(m, a),
          codeText: i(function () {
            return { type: "inlineCode", value: "" };
          }, a),
          codeTextData: d,
          data: d,
          codeFlowValue: d,
          definition: i(function () {
            return {
              type: "definition",
              identifier: "",
              label: null,
              title: null,
              url: "",
            };
          }),
          definitionDestinationString: a,
          definitionLabelString: a,
          definitionTitleString: a,
          emphasis: i(function () {
            return { type: "emphasis", children: [] };
          }),
          hardBreakEscape: i(y),
          hardBreakTrailing: i(y),
          htmlFlow: i(v, a),
          htmlFlowData: d,
          htmlText: i(v, a),
          htmlTextData: d,
          image: i(function () {
            return { type: "image", title: null, url: "", alt: null };
          }),
          label: a,
          link: i(b),
          listItem: i(function (e) {
            return {
              type: "listItem",
              spread: e._spread,
              checked: null,
              children: [],
            };
          }),
          listItemValue: function (e) {
            this.data.expectingFirstListItemValue &&
              ((this.stack[this.stack.length - 2].start = Number.parseInt(
                this.sliceSerialize(e),
                10,
              )),
              (this.data.expectingFirstListItemValue = void 0));
          },
          listOrdered: i(S, function () {
            this.data.expectingFirstListItemValue = !0;
          }),
          listUnordered: i(S),
          paragraph: i(function () {
            return { type: "paragraph", children: [] };
          }),
          reference: function () {
            this.data.referenceType = "collapsed";
          },
          referenceString: a,
          resourceDestinationString: a,
          resourceTitleString: a,
          setextHeading: i(g),
          strong: i(function () {
            return { type: "strong", children: [] };
          }),
          thematicBreak: i(function () {
            return { type: "thematicBreak" };
          }),
        },
        exit: {
          atxHeading: l(),
          atxHeadingSequence: function (e) {
            const t = this.stack[this.stack.length - 1];
            if (!t.depth) {
              const n = this.sliceSerialize(e).length;
              t.depth = n;
            }
          },
          autolink: l(),
          autolinkEmail: function (e) {
            p.call(this, e),
              (this.stack[this.stack.length - 1].url =
                "mailto:" + this.sliceSerialize(e));
          },
          autolinkProtocol: function (e) {
            p.call(this, e),
              (this.stack[this.stack.length - 1].url = this.sliceSerialize(e));
          },
          blockQuote: l(),
          characterEscapeValue: p,
          characterReferenceMarkerHexadecimal: h,
          characterReferenceMarkerNumeric: h,
          characterReferenceValue: function (e) {
            const t = this.sliceSerialize(e),
              n = this.data.characterReferenceType;
            let r;
            n
              ? ((r = Te(t, "characterReferenceMarkerNumeric" === n ? 10 : 16)),
                (this.data.characterReferenceType = void 0))
              : (r = Z(t));
            this.stack[this.stack.length - 1].value += r;
          },
          characterReference: function (e) {
            this.stack.pop().position.end = Re(e.end);
          },
          codeFenced: l(function () {
            const e = this.resume();
            (this.stack[this.stack.length - 1].value = e.replace(
              /^(\r?\n|\r)|(\r?\n|\r)$/g,
              "",
            )),
              (this.data.flowCodeInside = void 0);
          }),
          codeFencedFence: function () {
            this.data.flowCodeInside ||
              (this.buffer(), (this.data.flowCodeInside = !0));
          },
          codeFencedFenceInfo: function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].lang = e;
          },
          codeFencedFenceMeta: function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].meta = e;
          },
          codeFlowValue: p,
          codeIndented: l(function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].value = e.replace(
              /(\r?\n|\r)$/g,
              "",
            );
          }),
          codeText: l(function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }),
          codeTextData: p,
          data: p,
          definition: l(),
          definitionDestinationString: function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].url = e;
          },
          definitionLabelString: function (e) {
            const t = this.resume(),
              n = this.stack[this.stack.length - 1];
            (n.label = t),
              (n.identifier = (0, D.B)(this.sliceSerialize(e)).toLowerCase());
          },
          definitionTitleString: function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].title = e;
          },
          emphasis: l(),
          hardBreakEscape: l(f),
          hardBreakTrailing: l(f),
          htmlFlow: l(function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }),
          htmlFlowData: p,
          htmlText: l(function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }),
          htmlTextData: p,
          image: l(function () {
            const e = this.stack[this.stack.length - 1];
            if (this.data.inReference) {
              const t = this.data.referenceType || "shortcut";
              (e.type += "Reference"),
                (e.referenceType = t),
                delete e.url,
                delete e.title;
            } else delete e.identifier, delete e.label;
            this.data.referenceType = void 0;
          }),
          label: function () {
            const e = this.stack[this.stack.length - 1],
              t = this.resume(),
              n = this.stack[this.stack.length - 1];
            if (((this.data.inReference = !0), "link" === n.type)) {
              const t = e.children;
              n.children = t;
            } else n.alt = t;
          },
          labelText: function (e) {
            const t = this.sliceSerialize(e),
              n = this.stack[this.stack.length - 2];
            (n.label = (function (e) {
              return e.replace(ke, Ce);
            })(t)),
              (n.identifier = (0, D.B)(t).toLowerCase());
          },
          lineEnding: function (e) {
            const n = this.stack[this.stack.length - 1];
            if (this.data.atHardBreak)
              return (
                (n.children[n.children.length - 1].position.end = Re(e.end)),
                void (this.data.atHardBreak = void 0)
              );
            !this.data.setextHeadingSlurpLineEnding &&
              t.canContainEols.includes(n.type) &&
              (d.call(this, e), p.call(this, e));
          },
          link: l(function () {
            const e = this.stack[this.stack.length - 1];
            if (this.data.inReference) {
              const t = this.data.referenceType || "shortcut";
              (e.type += "Reference"),
                (e.referenceType = t),
                delete e.url,
                delete e.title;
            } else delete e.identifier, delete e.label;
            this.data.referenceType = void 0;
          }),
          listItem: l(),
          listOrdered: l(),
          listUnordered: l(),
          paragraph: l(),
          referenceString: function (e) {
            const t = this.resume(),
              n = this.stack[this.stack.length - 1];
            (n.label = t),
              (n.identifier = (0, D.B)(this.sliceSerialize(e)).toLowerCase()),
              (this.data.referenceType = "full");
          },
          resourceDestinationString: function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].url = e;
          },
          resourceTitleString: function () {
            const e = this.resume();
            this.stack[this.stack.length - 1].title = e;
          },
          resource: function () {
            this.data.inReference = void 0;
          },
          setextHeading: l(function () {
            this.data.setextHeadingSlurpLineEnding = void 0;
          }),
          setextHeadingLineSequence: function (e) {
            this.stack[this.stack.length - 1].depth =
              61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
          },
          setextHeadingText: function () {
            this.data.setextHeadingSlurpLineEnding = !0;
          },
          strong: l(),
          thematicBreak: l(),
        },
      };
      Me(t, (e || {}).mdastExtensions || []);
      const n = {};
      return function (e) {
        let o = { type: "root", children: [] };
        const i = {
            stack: [o],
            tokenStack: [],
            config: t,
            enter: s,
            exit: c,
            buffer: a,
            resume: u,
            data: n,
          },
          l = [];
        let d = -1;
        for (; ++d < e.length; )
          ("listOrdered" !== e[d][1].type &&
            "listUnordered" !== e[d][1].type) ||
            ("enter" === e[d][0] ? l.push(d) : (d = r(e, l.pop(), d)));
        for (d = -1; ++d < e.length; ) {
          const n = t[e[d][0]];
          Ae.call(n, e[d][1].type) &&
            n[e[d][1].type].call(
              Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, i),
              e[d][1],
            );
        }
        if (i.tokenStack.length > 0) {
          const e = i.tokenStack[i.tokenStack.length - 1];
          (e[1] || Ne).call(i, void 0, e[0]);
        }
        for (
          o.position = {
            start: Re(
              e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 },
            ),
            end: Re(
              e.length > 0
                ? e[e.length - 2][1].end
                : { line: 1, column: 1, offset: 0 },
            ),
          },
            d = -1;
          ++d < t.transforms.length;

        )
          o = t.transforms[d](o) || o;
        return o;
      };
      function r(e, t, n) {
        let r,
          o,
          i,
          a,
          s = t - 1,
          l = -1,
          c = !1;
        for (; ++s <= n; ) {
          const t = e[s];
          switch (t[1].type) {
            case "listUnordered":
            case "listOrdered":
            case "blockQuote":
              "enter" === t[0] ? l++ : l--, (a = void 0);
              break;
            case "lineEndingBlank":
              "enter" === t[0] && (!r || a || l || i || (i = s), (a = void 0));
              break;
            case "linePrefix":
            case "listItemValue":
            case "listItemMarker":
            case "listItemPrefix":
            case "listItemPrefixWhitespace":
              break;
            default:
              a = void 0;
          }
          if (
            (!l && "enter" === t[0] && "listItemPrefix" === t[1].type) ||
            (-1 === l &&
              "exit" === t[0] &&
              ("listUnordered" === t[1].type || "listOrdered" === t[1].type))
          ) {
            if (r) {
              let a = s;
              for (o = void 0; a--; ) {
                const t = e[a];
                if (
                  "lineEnding" === t[1].type ||
                  "lineEndingBlank" === t[1].type
                ) {
                  if ("exit" === t[0]) continue;
                  o && ((e[o][1].type = "lineEndingBlank"), (c = !0)),
                    (t[1].type = "lineEnding"),
                    (o = a);
                } else if (
                  "linePrefix" !== t[1].type &&
                  "blockQuotePrefix" !== t[1].type &&
                  "blockQuotePrefixWhitespace" !== t[1].type &&
                  "blockQuoteMarker" !== t[1].type &&
                  "listItemIndent" !== t[1].type
                )
                  break;
              }
              i && (!o || i < o) && (r._spread = !0),
                (r.end = Object.assign({}, o ? e[o][1].start : t[1].end)),
                e.splice(o || s, 0, ["exit", r, t[2]]),
                s++,
                n++;
            }
            if ("listItemPrefix" === t[1].type) {
              const o = {
                type: "listItem",
                _spread: !1,
                start: Object.assign({}, t[1].start),
                end: void 0,
              };
              (r = o),
                e.splice(s, 0, ["enter", o, t[2]]),
                s++,
                n++,
                (i = void 0),
                (a = !0);
            }
          }
        }
        return (e[t][1]._spread = c), n;
      }
      function i(e, t) {
        return function (n) {
          s.call(this, e(n), n), t && t.call(this, n);
        };
      }
      function a() {
        this.stack.push({ type: "fragment", children: [] });
      }
      function s(e, t, n) {
        this.stack[this.stack.length - 1].children.push(e),
          this.stack.push(e),
          this.tokenStack.push([t, n || void 0]),
          (e.position = { start: Re(t.start), end: void 0 });
      }
      function l(e) {
        return function (t) {
          e && e.call(this, t), c.call(this, t);
        };
      }
      function c(e, t) {
        const n = this.stack.pop(),
          r = this.tokenStack.pop();
        if (!r)
          throw new Error(
            "Cannot close `" +
              e.type +
              "` (" +
              (0, Ie.L)({ start: e.start, end: e.end }) +
              "): it’s not open",
          );
        r[0].type !== e.type &&
          (t ? t.call(this, e, r[0]) : (r[1] || Ne).call(this, e, r[0])),
          (n.position.end = Re(e.end));
      }
      function u() {
        return (0, o.d)(this.stack.pop());
      }
      function d(e) {
        const t = this.stack[this.stack.length - 1].children;
        let n = t[t.length - 1];
        (n && "text" === n.type) ||
          ((n = { type: "text", value: "" }),
          (n.position = { start: Re(e.start), end: void 0 }),
          t.push(n)),
          this.stack.push(n);
      }
      function p(e) {
        const t = this.stack.pop();
        (t.value += this.sliceSerialize(e)), (t.position.end = Re(e.end));
      }
      function f() {
        this.data.atHardBreak = !0;
      }
      function h(e) {
        this.data.characterReferenceType = e.type;
      }
      function m() {
        return { type: "code", lang: null, meta: null, value: "" };
      }
      function g() {
        return { type: "heading", depth: 0, children: [] };
      }
      function y() {
        return { type: "break" };
      }
      function v() {
        return { type: "html", value: "" };
      }
      function b() {
        return { type: "link", title: null, url: "", children: [] };
      }
      function S(e) {
        return {
          type: "list",
          ordered: "listOrdered" === e.type,
          start: null,
          spread: e._spread,
          children: [],
        };
      }
    })(n)(
      (function (e) {
        for (; !l(e); );
        return e;
      })(
        (function (e) {
          const t = e || {},
            n = {
              constructs: (0, u.y)([r, ...(t.extensions || [])]),
              content: o(f),
              defined: [],
              document: o(h),
              flow: o(b),
              lazy: {},
              string: o(_),
              text: o(x),
            };
          return n;
          function o(e) {
            return function (t) {
              return we(n, e, t);
            };
          }
        })(n)
          .document()
          .write(
            (function () {
              let e,
                t = 1,
                n = "",
                r = !0;
              return function (o, i, a) {
                const s = [];
                let l, c, u, d, p;
                for (
                  o =
                    n +
                    ("string" == typeof o
                      ? o.toString()
                      : new TextDecoder(i || void 0).decode(o)),
                    u = 0,
                    n = "",
                    r && (65279 === o.charCodeAt(0) && u++, (r = void 0));
                  u < o.length;

                ) {
                  if (
                    ((Ee.lastIndex = u),
                    (l = Ee.exec(o)),
                    (d = l && void 0 !== l.index ? l.index : o.length),
                    (p = o.charCodeAt(d)),
                    !l)
                  ) {
                    n = o.slice(u);
                    break;
                  }
                  if (10 === p && u === d && e) s.push(-3), (e = void 0);
                  else
                    switch (
                      (e && (s.push(-5), (e = void 0)),
                      u < d && (s.push(o.slice(u, d)), (t += d - u)),
                      p)
                    ) {
                      case 0:
                        s.push(65533), t++;
                        break;
                      case 9:
                        for (c = 4 * Math.ceil(t / 4), s.push(-2); t++ < c; )
                          s.push(-1);
                        break;
                      case 10:
                        s.push(-4), (t = 1);
                        break;
                      default:
                        (e = !0), (t = 1);
                    }
                  u = d + 1;
                }
                return a && (e && s.push(-5), n && s.push(n), s.push(null)), s;
              };
            })()(e, t, !0),
          ),
      ),
    )
  );
}
function Re(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function Me(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Me(e, r) : Pe(e, r);
  }
}
function Pe(e, t) {
  let n;
  for (n in t)
    if (Ae.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Ne(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          (0, Ie.L)({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          (0, Ie.L)({ start: t.start, end: t.end }) +
          ") is open",
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          (0, Ie.L)({ start: t.start, end: t.end }) +
          ") is still open",
      );
}
