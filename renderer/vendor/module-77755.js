// vendor/module-77755.js — webpack module 77755
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t), n.d(t, { default: () => f });
var r = n(69820 /* vendor/module-69820 */),
  o = n(45344 /* vendor/module-45344 */),
  i = n(77508 /* vendor/module-77508 */),
  a = n(57949 /* vendor/module-57949 */);
const s = {
    tokenize: function (e, t, n) {
      const r = this,
        o = r.events[r.events.length - 1],
        s =
          o && "linePrefix" === o[1].type
            ? o[2].sliceSerialize(o[1], !0).length
            : 0;
      let c = 0;
      return function (t) {
        return (
          e.enter("mathFlow"),
          e.enter("mathFlowFence"),
          e.enter("mathFlowFenceSequence"),
          u(t)
        );
      };
      function u(t) {
        return 36 === t
          ? (e.consume(t), c++, u)
          : c < 2
            ? n(t)
            : (e.exit("mathFlowFenceSequence"),
              (0, i.N)(e, d, "whitespace")(t));
      }
      function d(t) {
        return null === t || (0, a.HP)(t)
          ? f(t)
          : (e.enter("mathFlowFenceMeta"),
            e.enter("chunkString", { contentType: "string" }),
            p(t));
      }
      function p(t) {
        return null === t || (0, a.HP)(t)
          ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), f(t))
          : 36 === t
            ? n(t)
            : (e.consume(t), p);
      }
      function f(n) {
        return (
          e.exit("mathFlowFence"), r.interrupt ? t(n) : e.attempt(l, h, v)(n)
        );
      }
      function h(t) {
        return e.attempt({ tokenize: b, partial: !0 }, v, m)(t);
      }
      function m(t) {
        return (s ? (0, i.N)(e, g, "linePrefix", s + 1) : g)(t);
      }
      function g(t) {
        return null === t
          ? v(t)
          : (0, a.HP)(t)
            ? e.attempt(l, h, v)(t)
            : (e.enter("mathFlowValue"), y(t));
      }
      function y(t) {
        return null === t || (0, a.HP)(t)
          ? (e.exit("mathFlowValue"), g(t))
          : (e.consume(t), y);
      }
      function v(n) {
        return e.exit("mathFlow"), t(n);
      }
      function b(e, t, n) {
        let o = 0;
        return (0, i.N)(
          e,
          function (t) {
            return (
              e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), s(t)
            );
          },
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4,
        );
        function s(t) {
          return 36 === t
            ? (o++, e.consume(t), s)
            : o < c
              ? n(t)
              : (e.exit("mathFlowFenceSequence"),
                (0, i.N)(e, l, "whitespace")(t));
        }
        function l(r) {
          return null === r || (0, a.HP)(r)
            ? (e.exit("mathFlowFence"), t(r))
            : n(r);
        }
      }
    },
    concrete: !0,
    name: "mathFlow",
  },
  l = {
    tokenize: function (e, t, n) {
      const r = this;
      return function (n) {
        return null === n
          ? t(n)
          : (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o);
      };
      function o(e) {
        return r.parser.lazy[r.now().line] ? n(e) : t(e);
      }
    },
    partial: !0,
  };
function c(e) {
  let t = (e || {}).singleDollarTextMath;
  return (
    null == t && (t = !0),
    {
      tokenize: function (e, n, r) {
        let o,
          i,
          s = 0;
        return function (t) {
          return e.enter("mathText"), e.enter("mathTextSequence"), l(t);
        };
        function l(n) {
          return 36 === n
            ? (e.consume(n), s++, l)
            : s < 2 && !t
              ? r(n)
              : (e.exit("mathTextSequence"), c(n));
        }
        function c(t) {
          return null === t
            ? r(t)
            : 36 === t
              ? ((i = e.enter("mathTextSequence")), (o = 0), d(t))
              : 32 === t
                ? (e.enter("space"), e.consume(t), e.exit("space"), c)
                : (0, a.HP)(t)
                  ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    c)
                  : (e.enter("mathTextData"), u(t));
        }
        function u(t) {
          return null === t || 32 === t || 36 === t || (0, a.HP)(t)
            ? (e.exit("mathTextData"), c(t))
            : (e.consume(t), u);
        }
        function d(t) {
          return 36 === t
            ? (e.consume(t), o++, d)
            : o === s
              ? (e.exit("mathTextSequence"), e.exit("mathText"), n(t))
              : ((i.type = "mathTextData"), u(t));
        }
      },
      resolve: u,
      previous: d,
      name: "mathText",
    }
  );
}
function u(e) {
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
      if ("mathTextData" === e[t][1].type) {
        (e[r][1].type = "mathTextPadding"),
          (e[o][1].type = "mathTextPadding"),
          (o += 2),
          (r -= 2);
        break;
      }
  for (t = o - 1, r++; ++t <= r; )
    void 0 === n
      ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
      : (t !== r && "lineEnding" !== e[t][1].type) ||
        ((e[n][1].type = "mathTextData"),
        t !== n + 2 &&
          ((e[n][1].end = e[t - 1][1].end),
          e.splice(n + 2, t - n - 2),
          (r -= t - n - 2),
          (t = n + 2)),
        (n = void 0));
  return e;
}
function d(e) {
  return (
    36 !== e ||
    "characterEscape" === this.events[this.events.length - 1][1].type
  );
}
const p = {};
function f(e) {
  const t = e || p,
    n = this.data(),
    i = n.micromarkExtensions || (n.micromarkExtensions = []),
    a = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
    l = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
  i.push(
    (function (e) {
      return { flow: { 36: s }, text: { 36: c(e) } };
    })(t),
  ),
    a.push(
      (function () {
        return {
          enter: {
            mathFlow: function (e) {
              this.enter(
                {
                  type: "math",
                  meta: null,
                  value: "",
                  data: {
                    hName: "pre",
                    hChildren: [
                      {
                        type: "element",
                        tagName: "code",
                        properties: {
                          className: ["language-math", "math-display"],
                        },
                        children: [],
                      },
                    ],
                  },
                },
                e,
              );
            },
            mathFlowFenceMeta: function () {
              this.buffer();
            },
            mathText: function (e) {
              this.enter(
                {
                  type: "inlineMath",
                  value: "",
                  data: {
                    hName: "code",
                    hProperties: {
                      className: ["language-math", "math-inline"],
                    },
                    hChildren: [],
                  },
                },
                e,
              ),
                this.buffer();
            },
          },
          exit: {
            mathFlow: function (e) {
              const t = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                n = this.stack[this.stack.length - 1];
              (0, r.ok)("math" === n.type), this.exit(e), (n.value = t);
              const o = n.data.hChildren[0];
              (0, r.ok)("element" === o.type),
                (0, r.ok)("code" === o.tagName),
                o.children.push({ type: "text", value: t }),
                (this.data.mathFlowInside = void 0);
            },
            mathFlowFence: function () {
              this.data.mathFlowInside ||
                (this.buffer(), (this.data.mathFlowInside = !0));
            },
            mathFlowFenceMeta: function () {
              const e = this.resume(),
                t = this.stack[this.stack.length - 1];
              (0, r.ok)("math" === t.type), (t.meta = e);
            },
            mathFlowValue: e,
            mathText: function (e) {
              const t = this.resume(),
                n = this.stack[this.stack.length - 1];
              (0, r.ok)("inlineMath" === n.type),
                this.exit(e),
                (n.value = t),
                n.data.hChildren.push({ type: "text", value: t });
            },
            mathTextData: e,
          },
        };
        function e(e) {
          this.config.enter.data.call(this, e),
            this.config.exit.data.call(this, e);
        }
      })(),
    ),
    l.push(
      (function (e) {
        let t = (e || {}).singleDollarTextMath;
        return (
          null == t && (t = !0),
          (n.peek = function () {
            return "$";
          }),
          {
            unsafe: [
              { character: "\r", inConstruct: "mathFlowMeta" },
              { character: "\n", inConstruct: "mathFlowMeta" },
              {
                character: "$",
                after: t ? void 0 : "\\$",
                inConstruct: "phrasing",
              },
              { character: "$", inConstruct: "mathFlowMeta" },
              { atBreak: !0, character: "$", after: "\\$" },
            ],
            handlers: {
              math: function (e, t, n, r) {
                const i = e.value || "",
                  a = n.createTracker(r),
                  s = "$".repeat(Math.max((0, o.D)(i, "$") + 1, 2)),
                  l = n.enter("mathFlow");
                let c = a.move(s);
                if (e.meta) {
                  const t = n.enter("mathFlowMeta");
                  (c += a.move(
                    n.safe(e.meta, {
                      after: "\n",
                      before: c,
                      encode: ["$"],
                      ...a.current(),
                    }),
                  )),
                    t();
                }
                return (
                  (c += a.move("\n")),
                  i && (c += a.move(i + "\n")),
                  (c += a.move(s)),
                  l(),
                  c
                );
              },
              inlineMath: n,
            },
          }
        );
        function n(e, n, r) {
          let o = e.value || "",
            i = 1;
          for (
            t || i++;
            new RegExp("(^|[^$])" + "\\$".repeat(i) + "([^$]|$)").test(o);

          )
            i++;
          const a = "$".repeat(i);
          /[^ \r\n]/.test(o) &&
            ((/^[ \r\n]/.test(o) && /[ \r\n]$/.test(o)) || /^\$|\$$/.test(o)) &&
            (o = " " + o + " ");
          let s = -1;
          for (; ++s < r.unsafe.length; ) {
            const e = r.unsafe[s];
            if (!e.atBreak) continue;
            const t = r.compilePattern(e);
            let n;
            for (; (n = t.exec(o)); ) {
              let e = n.index;
              10 === o.codePointAt(e) && 13 === o.codePointAt(e - 1) && e--,
                (o = o.slice(0, e) + " " + o.slice(n.index + 1));
            }
          }
          return a + o + a;
        }
      })(t),
    );
}
