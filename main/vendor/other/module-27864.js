// vendor/other/module-27864.js — webpack module 27864
// params: () = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function e(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function t(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (null != n) {
        var r,
          o,
          i,
          s,
          a = [],
          c = !0,
          u = !1;
        try {
          if (((i = (n = n.call(e)).next), 0 === t)) {
            if (Object(n) !== n) return;
            c = !1;
          } else
            for (
              ;
              !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== t);
              c = !0
            );
        } catch (e) {
          (u = !0), (o = e);
        } finally {
          try {
            if (!c && null != n.return && ((s = n.return()), Object(s) !== s))
              return;
          } finally {
            if (u) throw o;
          }
        }
        return a;
      }
    })(e, t) ||
    o(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function n(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return e(t);
    })(t) ||
    (function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    })(t) ||
    o(t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function r(e) {
  return (r =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function o(t, n) {
  if (t) {
    if ("string" == typeof t) return e(t, n);
    var r = {}.toString.call(t).slice(8, -1);
    return (
      "Object" === r && t.constructor && (r = t.constructor.name),
      "Map" === r || "Set" === r
        ? Array.from(t)
        : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? e(t, n)
          : void 0
    );
  }
}
function i(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
"undefined" != typeof globalThis
  ? globalThis
  : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
var s = i(function (e, t) {
    !(function e(t) {
      var n, r, o, i, s, a;
      function c(e) {
        var t,
          n,
          r = {};
        for (t in e)
          e.hasOwnProperty(t) &&
            ((n = e[t]),
            (r[t] = "object" == typeof n && null !== n ? c(n) : n));
        return r;
      }
      function u(e, t) {
        (this.parent = e), (this.key = t);
      }
      function l(e, t, n, r) {
        (this.node = e), (this.path = t), (this.wrap = n), (this.ref = r);
      }
      function d() {}
      function p(e) {
        return null != e && "object" == typeof e && "string" == typeof e.type;
      }
      function f(e, t) {
        return (
          (e === n.ObjectExpression || e === n.ObjectPattern) &&
          "properties" === t
        );
      }
      function h(e, t) {
        for (var n = e.length - 1; n >= 0; --n) if (e[n].node === t) return !0;
        return !1;
      }
      function g(e, t) {
        return new d().traverse(e, t);
      }
      function m(e, t) {
        var n;
        return (
          (n = (function (e, t) {
            var n, r, o, i;
            for (r = e.length, o = 0; r; )
              t(e[(i = o + (n = r >>> 1))])
                ? (r = n)
                : ((o = i + 1), (r -= n + 1));
            return o;
          })(t, function (t) {
            return t.range[0] > e.range[0];
          })),
          (e.extendedRange = [e.range[0], e.range[1]]),
          n !== t.length && (e.extendedRange[1] = t[n].range[0]),
          (n -= 1) >= 0 && (e.extendedRange[0] = t[n].range[1]),
          e
        );
      }
      return (
        (n = {
          AssignmentExpression: "AssignmentExpression",
          AssignmentPattern: "AssignmentPattern",
          ArrayExpression: "ArrayExpression",
          ArrayPattern: "ArrayPattern",
          ArrowFunctionExpression: "ArrowFunctionExpression",
          AwaitExpression: "AwaitExpression",
          BlockStatement: "BlockStatement",
          BinaryExpression: "BinaryExpression",
          BreakStatement: "BreakStatement",
          CallExpression: "CallExpression",
          CatchClause: "CatchClause",
          ChainExpression: "ChainExpression",
          ClassBody: "ClassBody",
          ClassDeclaration: "ClassDeclaration",
          ClassExpression: "ClassExpression",
          ComprehensionBlock: "ComprehensionBlock",
          ComprehensionExpression: "ComprehensionExpression",
          ConditionalExpression: "ConditionalExpression",
          ContinueStatement: "ContinueStatement",
          DebuggerStatement: "DebuggerStatement",
          DirectiveStatement: "DirectiveStatement",
          DoWhileStatement: "DoWhileStatement",
          EmptyStatement: "EmptyStatement",
          ExportAllDeclaration: "ExportAllDeclaration",
          ExportDefaultDeclaration: "ExportDefaultDeclaration",
          ExportNamedDeclaration: "ExportNamedDeclaration",
          ExportSpecifier: "ExportSpecifier",
          ExpressionStatement: "ExpressionStatement",
          ForStatement: "ForStatement",
          ForInStatement: "ForInStatement",
          ForOfStatement: "ForOfStatement",
          FunctionDeclaration: "FunctionDeclaration",
          FunctionExpression: "FunctionExpression",
          GeneratorExpression: "GeneratorExpression",
          Identifier: "Identifier",
          IfStatement: "IfStatement",
          ImportExpression: "ImportExpression",
          ImportDeclaration: "ImportDeclaration",
          ImportDefaultSpecifier: "ImportDefaultSpecifier",
          ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
          ImportSpecifier: "ImportSpecifier",
          Literal: "Literal",
          LabeledStatement: "LabeledStatement",
          LogicalExpression: "LogicalExpression",
          MemberExpression: "MemberExpression",
          MetaProperty: "MetaProperty",
          MethodDefinition: "MethodDefinition",
          ModuleSpecifier: "ModuleSpecifier",
          NewExpression: "NewExpression",
          ObjectExpression: "ObjectExpression",
          ObjectPattern: "ObjectPattern",
          PrivateIdentifier: "PrivateIdentifier",
          Program: "Program",
          Property: "Property",
          PropertyDefinition: "PropertyDefinition",
          RestElement: "RestElement",
          ReturnStatement: "ReturnStatement",
          SequenceExpression: "SequenceExpression",
          SpreadElement: "SpreadElement",
          Super: "Super",
          SwitchStatement: "SwitchStatement",
          SwitchCase: "SwitchCase",
          TaggedTemplateExpression: "TaggedTemplateExpression",
          TemplateElement: "TemplateElement",
          TemplateLiteral: "TemplateLiteral",
          ThisExpression: "ThisExpression",
          ThrowStatement: "ThrowStatement",
          TryStatement: "TryStatement",
          UnaryExpression: "UnaryExpression",
          UpdateExpression: "UpdateExpression",
          VariableDeclaration: "VariableDeclaration",
          VariableDeclarator: "VariableDeclarator",
          WhileStatement: "WhileStatement",
          WithStatement: "WithStatement",
          YieldExpression: "YieldExpression",
        }),
        (o = {
          AssignmentExpression: ["left", "right"],
          AssignmentPattern: ["left", "right"],
          ArrayExpression: ["elements"],
          ArrayPattern: ["elements"],
          ArrowFunctionExpression: ["params", "body"],
          AwaitExpression: ["argument"],
          BlockStatement: ["body"],
          BinaryExpression: ["left", "right"],
          BreakStatement: ["label"],
          CallExpression: ["callee", "arguments"],
          CatchClause: ["param", "body"],
          ChainExpression: ["expression"],
          ClassBody: ["body"],
          ClassDeclaration: ["id", "superClass", "body"],
          ClassExpression: ["id", "superClass", "body"],
          ComprehensionBlock: ["left", "right"],
          ComprehensionExpression: ["blocks", "filter", "body"],
          ConditionalExpression: ["test", "consequent", "alternate"],
          ContinueStatement: ["label"],
          DebuggerStatement: [],
          DirectiveStatement: [],
          DoWhileStatement: ["body", "test"],
          EmptyStatement: [],
          ExportAllDeclaration: ["source"],
          ExportDefaultDeclaration: ["declaration"],
          ExportNamedDeclaration: ["declaration", "specifiers", "source"],
          ExportSpecifier: ["exported", "local"],
          ExpressionStatement: ["expression"],
          ForStatement: ["init", "test", "update", "body"],
          ForInStatement: ["left", "right", "body"],
          ForOfStatement: ["left", "right", "body"],
          FunctionDeclaration: ["id", "params", "body"],
          FunctionExpression: ["id", "params", "body"],
          GeneratorExpression: ["blocks", "filter", "body"],
          Identifier: [],
          IfStatement: ["test", "consequent", "alternate"],
          ImportExpression: ["source"],
          ImportDeclaration: ["specifiers", "source"],
          ImportDefaultSpecifier: ["local"],
          ImportNamespaceSpecifier: ["local"],
          ImportSpecifier: ["imported", "local"],
          Literal: [],
          LabeledStatement: ["label", "body"],
          LogicalExpression: ["left", "right"],
          MemberExpression: ["object", "property"],
          MetaProperty: ["meta", "property"],
          MethodDefinition: ["key", "value"],
          ModuleSpecifier: [],
          NewExpression: ["callee", "arguments"],
          ObjectExpression: ["properties"],
          ObjectPattern: ["properties"],
          PrivateIdentifier: [],
          Program: ["body"],
          Property: ["key", "value"],
          PropertyDefinition: ["key", "value"],
          RestElement: ["argument"],
          ReturnStatement: ["argument"],
          SequenceExpression: ["expressions"],
          SpreadElement: ["argument"],
          Super: [],
          SwitchStatement: ["discriminant", "cases"],
          SwitchCase: ["test", "consequent"],
          TaggedTemplateExpression: ["tag", "quasi"],
          TemplateElement: [],
          TemplateLiteral: ["quasis", "expressions"],
          ThisExpression: [],
          ThrowStatement: ["argument"],
          TryStatement: ["block", "handler", "finalizer"],
          UnaryExpression: ["argument"],
          UpdateExpression: ["argument"],
          VariableDeclaration: ["declarations"],
          VariableDeclarator: ["id", "init"],
          WhileStatement: ["test", "body"],
          WithStatement: ["object", "body"],
          YieldExpression: ["argument"],
        }),
        (r = { Break: (i = {}), Skip: (s = {}), Remove: (a = {}) }),
        (u.prototype.replace = function (e) {
          this.parent[this.key] = e;
        }),
        (u.prototype.remove = function () {
          return Array.isArray(this.parent)
            ? (this.parent.splice(this.key, 1), !0)
            : (this.replace(null), !1);
        }),
        (d.prototype.path = function () {
          var e, t, n, r, o;
          function i(e, t) {
            if (Array.isArray(t))
              for (n = 0, r = t.length; n < r; ++n) e.push(t[n]);
            else e.push(t);
          }
          if (!this.__current.path) return null;
          for (o = [], e = 2, t = this.__leavelist.length; e < t; ++e)
            i(o, this.__leavelist[e].path);
          return i(o, this.__current.path), o;
        }),
        (d.prototype.type = function () {
          return this.current().type || this.__current.wrap;
        }),
        (d.prototype.parents = function () {
          var e, t, n;
          for (n = [], e = 1, t = this.__leavelist.length; e < t; ++e)
            n.push(this.__leavelist[e].node);
          return n;
        }),
        (d.prototype.current = function () {
          return this.__current.node;
        }),
        (d.prototype.__execute = function (e, t) {
          var n, r;
          return (
            (r = void 0),
            (n = this.__current),
            (this.__current = t),
            (this.__state = null),
            e &&
              (r = e.call(
                this,
                t.node,
                this.__leavelist[this.__leavelist.length - 1].node,
              )),
            (this.__current = n),
            r
          );
        }),
        (d.prototype.notify = function (e) {
          this.__state = e;
        }),
        (d.prototype.skip = function () {
          this.notify(s);
        }),
        (d.prototype.break = function () {
          this.notify(i);
        }),
        (d.prototype.remove = function () {
          this.notify(a);
        }),
        (d.prototype.__initialize = function (e, t) {
          (this.visitor = t),
            (this.root = e),
            (this.__worklist = []),
            (this.__leavelist = []),
            (this.__current = null),
            (this.__state = null),
            (this.__fallback = null),
            "iteration" === t.fallback
              ? (this.__fallback = Object.keys)
              : "function" == typeof t.fallback &&
                (this.__fallback = t.fallback),
            (this.__keys = o),
            t.keys &&
              (this.__keys = Object.assign(Object.create(this.__keys), t.keys));
        }),
        (d.prototype.traverse = function (e, t) {
          var n, r, o, a, c, u, d, g, m, _, S, E;
          for (
            this.__initialize(e, t),
              E = {},
              n = this.__worklist,
              r = this.__leavelist,
              n.push(new l(e, null, null, null)),
              r.push(new l(null, null, null, null));
            n.length;

          )
            if ((o = n.pop()) !== E) {
              if (o.node) {
                if (
                  ((u = this.__execute(t.enter, o)),
                  this.__state === i || u === i)
                )
                  return;
                if ((n.push(E), r.push(o), this.__state === s || u === s))
                  continue;
                if (
                  ((c = (a = o.node).type || o.wrap), !(_ = this.__keys[c]))
                ) {
                  if (!this.__fallback)
                    throw new Error("Unknown node type " + c + ".");
                  _ = this.__fallback(a);
                }
                for (g = _.length; (g -= 1) >= 0; )
                  if ((S = a[(d = _[g])]))
                    if (Array.isArray(S)) {
                      for (m = S.length; (m -= 1) >= 0; )
                        if (S[m] && !h(r, S[m])) {
                          if (f(c, _[g]))
                            o = new l(S[m], [d, m], "Property", null);
                          else {
                            if (!p(S[m])) continue;
                            o = new l(S[m], [d, m], null, null);
                          }
                          n.push(o);
                        }
                    } else if (p(S)) {
                      if (h(r, S)) continue;
                      n.push(new l(S, d, null, null));
                    }
              }
            } else if (
              ((o = r.pop()),
              (u = this.__execute(t.leave, o)),
              this.__state === i || u === i)
            )
              return;
        }),
        (d.prototype.replace = function (e, t) {
          var n, r, o, c, d, h, g, m, _, S, E, y, T;
          function b(e) {
            var t, r, o, i;
            if (e.ref.remove())
              for (r = e.ref.key, i = e.ref.parent, t = n.length; t--; )
                if ((o = n[t]).ref && o.ref.parent === i) {
                  if (o.ref.key < r) break;
                  --o.ref.key;
                }
          }
          for (
            this.__initialize(e, t),
              E = {},
              n = this.__worklist,
              r = this.__leavelist,
              h = new l(e, null, null, new u((y = { root: e }), "root")),
              n.push(h),
              r.push(h);
            n.length;

          )
            if ((h = n.pop()) !== E) {
              if (
                (void 0 !== (d = this.__execute(t.enter, h)) &&
                  d !== i &&
                  d !== s &&
                  d !== a &&
                  (h.ref.replace(d), (h.node = d)),
                (this.__state !== a && d !== a) || (b(h), (h.node = null)),
                this.__state === i || d === i)
              )
                return y.root;
              if (
                (o = h.node) &&
                (n.push(E), r.push(h), this.__state !== s && d !== s)
              ) {
                if (((c = o.type || h.wrap), !(_ = this.__keys[c]))) {
                  if (!this.__fallback)
                    throw new Error("Unknown node type " + c + ".");
                  _ = this.__fallback(o);
                }
                for (g = _.length; (g -= 1) >= 0; )
                  if ((S = o[(T = _[g])]))
                    if (Array.isArray(S)) {
                      for (m = S.length; (m -= 1) >= 0; )
                        if (S[m]) {
                          if (f(c, _[g]))
                            h = new l(S[m], [T, m], "Property", new u(S, m));
                          else {
                            if (!p(S[m])) continue;
                            h = new l(S[m], [T, m], null, new u(S, m));
                          }
                          n.push(h);
                        }
                    } else p(S) && n.push(new l(S, T, null, new u(o, T)));
              }
            } else if (
              ((h = r.pop()),
              void 0 !== (d = this.__execute(t.leave, h)) &&
                d !== i &&
                d !== s &&
                d !== a &&
                h.ref.replace(d),
              (this.__state !== a && d !== a) || b(h),
              this.__state === i || d === i)
            )
              return y.root;
          return y.root;
        }),
        (t.Syntax = n),
        (t.traverse = g),
        (t.replace = function (e, t) {
          return new d().replace(e, t);
        }),
        (t.attachComments = function (e, t, n) {
          var o,
            i,
            s,
            a,
            u = [];
          if (!e.range)
            throw new Error("attachComments needs range information");
          if (!n.length) {
            if (t.length) {
              for (s = 0, i = t.length; s < i; s += 1)
                ((o = c(t[s])).extendedRange = [0, e.range[0]]), u.push(o);
              e.leadingComments = u;
            }
            return e;
          }
          for (s = 0, i = t.length; s < i; s += 1) u.push(m(c(t[s]), n));
          return (
            (a = 0),
            g(e, {
              enter: function (e) {
                for (
                  var t;
                  a < u.length && !((t = u[a]).extendedRange[1] > e.range[0]);

                )
                  t.extendedRange[1] === e.range[0]
                    ? (e.leadingComments || (e.leadingComments = []),
                      e.leadingComments.push(t),
                      u.splice(a, 1))
                    : (a += 1);
                return a === u.length
                  ? r.Break
                  : u[a].extendedRange[0] > e.range[1]
                    ? r.Skip
                    : void 0;
              },
            }),
            (a = 0),
            g(e, {
              leave: function (e) {
                for (
                  var t;
                  a < u.length &&
                  ((t = u[a]), !(e.range[1] < t.extendedRange[0]));

                )
                  e.range[1] === t.extendedRange[0]
                    ? (e.trailingComments || (e.trailingComments = []),
                      e.trailingComments.push(t),
                      u.splice(a, 1))
                    : (a += 1);
                return a === u.length
                  ? r.Break
                  : u[a].extendedRange[0] > e.range[1]
                    ? r.Skip
                    : void 0;
              },
            }),
            e
          );
        }),
        (t.VisitorKeys = o),
        (t.VisitorOption = r),
        (t.Controller = d),
        (t.cloneEnvironment = function () {
          return e({});
        }),
        t
      );
    })(t);
  }),
  a = i(function (e) {
    e.exports &&
      (e.exports = (function () {
        function e(t, n, r, o) {
          (this.message = t),
            (this.expected = n),
            (this.found = r),
            (this.location = o),
            (this.name = "SyntaxError"),
            "function" == typeof Error.captureStackTrace &&
              Error.captureStackTrace(this, e);
        }
        return (
          (function (e, t) {
            function n() {
              this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
          })(e, Error),
          (e.buildMessage = function (e, t) {
            var n = {
              literal: function (e) {
                return '"' + o(e.text) + '"';
              },
              class: function (e) {
                var t,
                  n = "";
                for (t = 0; t < e.parts.length; t++)
                  n +=
                    e.parts[t] instanceof Array
                      ? i(e.parts[t][0]) + "-" + i(e.parts[t][1])
                      : i(e.parts[t]);
                return "[" + (e.inverted ? "^" : "") + n + "]";
              },
              any: function (e) {
                return "any character";
              },
              end: function (e) {
                return "end of input";
              },
              other: function (e) {
                return e.description;
              },
            };
            function r(e) {
              return e.charCodeAt(0).toString(16).toUpperCase();
            }
            function o(e) {
              return e
                .replace(/\\/g, "\\\\")
                .replace(/"/g, '\\"')
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, function (e) {
                  return "\\x0" + r(e);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                  return "\\x" + r(e);
                });
            }
            function i(e) {
              return e
                .replace(/\\/g, "\\\\")
                .replace(/\]/g, "\\]")
                .replace(/\^/g, "\\^")
                .replace(/-/g, "\\-")
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, function (e) {
                  return "\\x0" + r(e);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                  return "\\x" + r(e);
                });
            }
            return (
              "Expected " +
              (function (e) {
                var t,
                  r,
                  o,
                  i = new Array(e.length);
                for (t = 0; t < e.length; t++)
                  i[t] = ((o = e[t]), n[o.type](o));
                if ((i.sort(), i.length > 0)) {
                  for (t = 1, r = 1; t < i.length; t++)
                    i[t - 1] !== i[t] && ((i[r] = i[t]), r++);
                  i.length = r;
                }
                switch (i.length) {
                  case 1:
                    return i[0];
                  case 2:
                    return i[0] + " or " + i[1];
                  default:
                    return (
                      i.slice(0, -1).join(", ") + ", or " + i[i.length - 1]
                    );
                }
              })(e) +
              " but " +
              (function (e) {
                return e ? '"' + o(e) + '"' : "end of input";
              })(t) +
              " found."
            );
          }),
          {
            SyntaxError: e,
            parse: function (t, n) {
              n = void 0 !== n ? n : {};
              var r,
                o,
                i,
                s,
                a = {},
                c = { start: ye },
                u = ye,
                l = ge(" ", !1),
                d = /^[^ [\],():#!=><~+.]/,
                p = me(
                  [
                    " ",
                    "[",
                    "]",
                    ",",
                    "(",
                    ")",
                    ":",
                    "#",
                    "!",
                    "=",
                    ">",
                    "<",
                    "~",
                    "+",
                    ".",
                  ],
                  !0,
                  !1,
                ),
                f = ge(">", !1),
                h = ge("~", !1),
                g = ge("+", !1),
                m = ge(",", !1),
                _ = function (e, t) {
                  return [e].concat(
                    t.map(function (e) {
                      return e[3];
                    }),
                  );
                },
                S = ge("!", !1),
                E = ge("*", !1),
                y = ge("#", !1),
                T = ge("[", !1),
                b = ge("]", !1),
                I = /^[><!]/,
                v = me([">", "<", "!"], !1, !1),
                A = ge("=", !1),
                N = function (e) {
                  return (e || "") + "=";
                },
                R = /^[><]/,
                C = me([">", "<"], !1, !1),
                O = ge(".", !1),
                w = function (e, t, n) {
                  return {
                    type: "attribute",
                    name: e,
                    operator: t,
                    value: n,
                  };
                },
                k = ge('"', !1),
                P = /^[^\\"]/,
                L = me(["\\", '"'], !0, !1),
                x = ge("\\", !1),
                M = { type: "any" },
                D = function (e, t) {
                  return e + t;
                },
                U = function (e) {
                  return {
                    type: "literal",
                    value:
                      ((t = e.join("")),
                      t.replace(/\\(.)/g, function (e, t) {
                        switch (t) {
                          case "b":
                            return "\b";
                          case "f":
                            return "\f";
                          case "n":
                            return "\n";
                          case "r":
                            return "\r";
                          case "t":
                            return "\t";
                          case "v":
                            return "\v";
                          default:
                            return t;
                        }
                      })),
                  };
                  var t;
                },
                B = ge("'", !1),
                G = /^[^\\']/,
                F = me(["\\", "'"], !0, !1),
                j = /^[0-9]/,
                H = me([["0", "9"]], !1, !1),
                W = ge("type(", !1),
                V = /^[^ )]/,
                $ = me([" ", ")"], !0, !1),
                Y = ge(")", !1),
                q = /^[imsu]/,
                K = me(["i", "m", "s", "u"], !1, !1),
                X = ge("/", !1),
                Z = /^[^\]\\]/,
                z = me(["]", "\\"], !0, !1),
                J = /^[^\/\\[]/,
                Q = me(["/", "\\", "["], !0, !1),
                ee = ge(":not(", !1),
                te = ge(":matches(", !1),
                ne = function (e) {
                  return { type: "matches", selectors: e };
                },
                re = ge(":is(", !1),
                oe = ge(":has(", !1),
                ie = ge(":first-child", !1),
                se = ge(":last-child", !1),
                ae = ge(":nth-child(", !1),
                ce = ge(":nth-last-child(", !1),
                ue = ge(":", !1),
                le = 0,
                de = [{ line: 1, column: 1 }],
                pe = 0,
                fe = [],
                he = {};
              if ("startRule" in n) {
                if (!(n.startRule in c))
                  throw new Error(
                    "Can't start parsing from rule \"" + n.startRule + '".',
                  );
                u = c[n.startRule];
              }
              function ge(e, t) {
                return { type: "literal", text: e, ignoreCase: t };
              }
              function me(e, t, n) {
                return {
                  type: "class",
                  parts: e,
                  inverted: t,
                  ignoreCase: n,
                };
              }
              function _e(e) {
                var n,
                  r = de[e];
                if (r) return r;
                for (n = e - 1; !de[n]; ) n--;
                for (r = { line: (r = de[n]).line, column: r.column }; n < e; )
                  10 === t.charCodeAt(n)
                    ? (r.line++, (r.column = 1))
                    : r.column++,
                    n++;
                return (de[e] = r), r;
              }
              function Se(e, t) {
                var n = _e(e),
                  r = _e(t);
                return {
                  start: {
                    offset: e,
                    line: n.line,
                    column: n.column,
                  },
                  end: { offset: t, line: r.line, column: r.column },
                };
              }
              function Ee(e) {
                le < pe || (le > pe && ((pe = le), (fe = [])), fe.push(e));
              }
              function ye() {
                var e,
                  t,
                  n,
                  r,
                  o = 36 * le + 0,
                  i = he[o];
                return i
                  ? ((le = i.nextPos), i.result)
                  : ((e = le),
                    (t = Te()) !== a && (n = ve()) !== a && Te() !== a
                      ? (e = t =
                          1 === (r = n).length
                            ? r[0]
                            : { type: "matches", selectors: r })
                      : ((le = e), (e = a)),
                    e === a &&
                      ((e = le), (t = Te()) !== a && (t = void 0), (e = t)),
                    (he[o] = { nextPos: le, result: e }),
                    e);
              }
              function Te() {
                var e,
                  n,
                  r = 36 * le + 1,
                  o = he[r];
                if (o) return (le = o.nextPos), o.result;
                for (
                  e = [],
                    32 === t.charCodeAt(le)
                      ? ((n = " "), le++)
                      : ((n = a), Ee(l));
                  n !== a;

                )
                  e.push(n),
                    32 === t.charCodeAt(le)
                      ? ((n = " "), le++)
                      : ((n = a), Ee(l));
                return (he[r] = { nextPos: le, result: e }), e;
              }
              function be() {
                var e,
                  n,
                  r,
                  o = 36 * le + 2,
                  i = he[o];
                if (i) return (le = i.nextPos), i.result;
                if (
                  ((n = []),
                  d.test(t.charAt(le))
                    ? ((r = t.charAt(le)), le++)
                    : ((r = a), Ee(p)),
                  r !== a)
                )
                  for (; r !== a; )
                    n.push(r),
                      d.test(t.charAt(le))
                        ? ((r = t.charAt(le)), le++)
                        : ((r = a), Ee(p));
                else n = a;
                return (
                  n !== a && (n = n.join("")),
                  (e = n),
                  (he[o] = { nextPos: le, result: e }),
                  e
                );
              }
              function Ie() {
                var e,
                  n,
                  r,
                  o = 36 * le + 3,
                  i = he[o];
                return i
                  ? ((le = i.nextPos), i.result)
                  : ((e = le),
                    (n = Te()) !== a
                      ? (62 === t.charCodeAt(le)
                          ? ((r = ">"), le++)
                          : ((r = a), Ee(f)),
                        r !== a && Te() !== a
                          ? (e = n = "child")
                          : ((le = e), (e = a)))
                      : ((le = e), (e = a)),
                    e === a &&
                      ((e = le),
                      (n = Te()) !== a
                        ? (126 === t.charCodeAt(le)
                            ? ((r = "~"), le++)
                            : ((r = a), Ee(h)),
                          r !== a && Te() !== a
                            ? (e = n = "sibling")
                            : ((le = e), (e = a)))
                        : ((le = e), (e = a)),
                      e === a &&
                        ((e = le),
                        (n = Te()) !== a
                          ? (43 === t.charCodeAt(le)
                              ? ((r = "+"), le++)
                              : ((r = a), Ee(g)),
                            r !== a && Te() !== a
                              ? (e = n = "adjacent")
                              : ((le = e), (e = a)))
                          : ((le = e), (e = a)),
                        e === a &&
                          ((e = le),
                          32 === t.charCodeAt(le)
                            ? ((n = " "), le++)
                            : ((n = a), Ee(l)),
                          n !== a && (r = Te()) !== a
                            ? (e = n = "descendant")
                            : ((le = e), (e = a))))),
                    (he[o] = { nextPos: le, result: e }),
                    e);
              }
              function ve() {
                var e,
                  n,
                  r,
                  o,
                  i,
                  s,
                  c,
                  u,
                  l = 36 * le + 5,
                  d = he[l];
                if (d) return (le = d.nextPos), d.result;
                if (((e = le), (n = Ne()) !== a)) {
                  for (
                    r = [],
                      o = le,
                      (i = Te()) !== a
                        ? (44 === t.charCodeAt(le)
                            ? ((s = ","), le++)
                            : ((s = a), Ee(m)),
                          s !== a && (c = Te()) !== a && (u = Ne()) !== a
                            ? (o = i = [i, s, c, u])
                            : ((le = o), (o = a)))
                        : ((le = o), (o = a));
                    o !== a;

                  )
                    r.push(o),
                      (o = le),
                      (i = Te()) !== a
                        ? (44 === t.charCodeAt(le)
                            ? ((s = ","), le++)
                            : ((s = a), Ee(m)),
                          s !== a && (c = Te()) !== a && (u = Ne()) !== a
                            ? (o = i = [i, s, c, u])
                            : ((le = o), (o = a)))
                        : ((le = o), (o = a));
                  r !== a ? (e = n = _(n, r)) : ((le = e), (e = a));
                } else (le = e), (e = a);
                return (he[l] = { nextPos: le, result: e }), e;
              }
              function Ae() {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i = 36 * le + 6,
                  s = he[i];
                return s
                  ? ((le = s.nextPos), s.result)
                  : ((e = le),
                    (t = Ie()) === a && (t = null),
                    t !== a && (n = Ne()) !== a
                      ? ((o = n),
                        (e = t =
                          (r = t)
                            ? {
                                type: r,
                                left: { type: "exactNode" },
                                right: o,
                              }
                            : o))
                      : ((le = e), (e = a)),
                    (he[i] = { nextPos: le, result: e }),
                    e);
              }
              function Ne() {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  c = 36 * le + 7,
                  u = he[c];
                if (u) return (le = u.nextPos), u.result;
                if (((e = le), (t = Re()) !== a)) {
                  for (
                    n = [],
                      r = le,
                      (o = Ie()) !== a && (i = Re()) !== a
                        ? (r = o = [o, i])
                        : ((le = r), (r = a));
                    r !== a;

                  )
                    n.push(r),
                      (r = le),
                      (o = Ie()) !== a && (i = Re()) !== a
                        ? (r = o = [o, i])
                        : ((le = r), (r = a));
                  n !== a
                    ? ((s = t),
                      (e = t =
                        n.reduce(function (e, t) {
                          return { type: t[0], left: e, right: t[1] };
                        }, s)))
                    : ((le = e), (e = a));
                } else (le = e), (e = a);
                return (he[c] = { nextPos: le, result: e }), e;
              }
              function Re() {
                var e,
                  n,
                  r,
                  o,
                  i,
                  s,
                  c,
                  u = 36 * le + 8,
                  l = he[u];
                if (l) return (le = l.nextPos), l.result;
                if (
                  ((e = le),
                  33 === t.charCodeAt(le)
                    ? ((n = "!"), le++)
                    : ((n = a), Ee(S)),
                  n === a && (n = null),
                  n !== a)
                ) {
                  if (((r = []), (o = Ce()) !== a))
                    for (; o !== a; ) r.push(o), (o = Ce());
                  else r = a;
                  r !== a
                    ? ((i = n),
                      (c =
                        1 === (s = r).length
                          ? s[0]
                          : { type: "compound", selectors: s }),
                      i && (c.subject = !0),
                      (e = n = c))
                    : ((le = e), (e = a));
                } else (le = e), (e = a);
                return (he[u] = { nextPos: le, result: e }), e;
              }
              function Ce() {
                var e,
                  n = 36 * le + 9,
                  r = he[n];
                return r
                  ? ((le = r.nextPos), r.result)
                  : ((e = (function () {
                      var e,
                        n,
                        r = 36 * le + 10,
                        o = he[r];
                      return o
                        ? ((le = o.nextPos), o.result)
                        : (42 === t.charCodeAt(le)
                            ? ((n = "*"), le++)
                            : ((n = a), Ee(E)),
                          n !== a && (n = { type: "wildcard", value: n }),
                          (e = n),
                          (he[r] = { nextPos: le, result: e }),
                          e);
                    })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o = 36 * le + 11,
                          i = he[o];
                        return i
                          ? ((le = i.nextPos), i.result)
                          : ((e = le),
                            35 === t.charCodeAt(le)
                              ? ((n = "#"), le++)
                              : ((n = a), Ee(y)),
                            n === a && (n = null),
                            n !== a && (r = be()) !== a
                              ? (e = n = { type: "identifier", value: r })
                              : ((le = e), (e = a)),
                            (he[o] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i = 36 * le + 12,
                          s = he[i];
                        return s
                          ? ((le = s.nextPos), s.result)
                          : ((e = le),
                            91 === t.charCodeAt(le)
                              ? ((n = "["), le++)
                              : ((n = a), Ee(T)),
                            n !== a &&
                            Te() !== a &&
                            (r = (function () {
                              var e,
                                n,
                                r,
                                o,
                                i = 36 * le + 16,
                                s = he[i];
                              return s
                                ? ((le = s.nextPos), s.result)
                                : ((e = le),
                                  (n = Oe()) !== a &&
                                  Te() !== a &&
                                  (r = (function () {
                                    var e,
                                      n,
                                      r,
                                      o = 36 * le + 14,
                                      i = he[o];
                                    return i
                                      ? ((le = i.nextPos), i.result)
                                      : ((e = le),
                                        33 === t.charCodeAt(le)
                                          ? ((n = "!"), le++)
                                          : ((n = a), Ee(S)),
                                        n === a && (n = null),
                                        n !== a
                                          ? (61 === t.charCodeAt(le)
                                              ? ((r = "="), le++)
                                              : ((r = a), Ee(A)),
                                            r !== a
                                              ? (e = n = N(n))
                                              : ((le = e), (e = a)))
                                          : ((le = e), (e = a)),
                                        (he[o] = {
                                          nextPos: le,
                                          result: e,
                                        }),
                                        e);
                                  })()) !== a &&
                                  Te() !== a
                                    ? ((o = (function () {
                                        var e,
                                          n,
                                          r,
                                          o,
                                          i,
                                          s = 36 * le + 20,
                                          c = he[s];
                                        if (c)
                                          return (le = c.nextPos), c.result;
                                        if (
                                          ((e = le),
                                          "type(" === t.substr(le, 5)
                                            ? ((n = "type("), (le += 5))
                                            : ((n = a), Ee(W)),
                                          n !== a)
                                        )
                                          if (Te() !== a) {
                                            if (
                                              ((r = []),
                                              V.test(t.charAt(le))
                                                ? ((o = t.charAt(le)), le++)
                                                : ((o = a), Ee($)),
                                              o !== a)
                                            )
                                              for (; o !== a; )
                                                r.push(o),
                                                  V.test(t.charAt(le))
                                                    ? ((o = t.charAt(le)), le++)
                                                    : ((o = a), Ee($));
                                            else r = a;
                                            r !== a && (o = Te()) !== a
                                              ? (41 === t.charCodeAt(le)
                                                  ? ((i = ")"), le++)
                                                  : ((i = a), Ee(Y)),
                                                i !== a
                                                  ? (e = n =
                                                      {
                                                        type: "type",
                                                        value: r.join(""),
                                                      })
                                                  : ((le = e), (e = a)))
                                              : ((le = e), (e = a));
                                          } else (le = e), (e = a);
                                        else (le = e), (e = a);
                                        return (
                                          (he[s] = {
                                            nextPos: le,
                                            result: e,
                                          }),
                                          e
                                        );
                                      })()) === a &&
                                        (o = (function () {
                                          var e,
                                            n,
                                            r,
                                            o,
                                            i,
                                            s,
                                            c = 36 * le + 22,
                                            u = he[c];
                                          if (u)
                                            return (le = u.nextPos), u.result;
                                          if (
                                            ((e = le),
                                            47 === t.charCodeAt(le)
                                              ? ((n = "/"), le++)
                                              : ((n = a), Ee(X)),
                                            n !== a)
                                          ) {
                                            if (
                                              ((r = []),
                                              (o = we()) === a &&
                                                (o = ke()) === a &&
                                                (o = Pe()),
                                              o !== a)
                                            )
                                              for (; o !== a; )
                                                r.push(o),
                                                  (o = we()) === a &&
                                                    (o = ke()) === a &&
                                                    (o = Pe());
                                            else r = a;
                                            r !== a
                                              ? (47 === t.charCodeAt(le)
                                                  ? ((o = "/"), le++)
                                                  : ((o = a), Ee(X)),
                                                o !== a
                                                  ? ((i = (function () {
                                                      var e,
                                                        n,
                                                        r = 36 * le + 21,
                                                        o = he[r];
                                                      if (o)
                                                        return (
                                                          (le = o.nextPos),
                                                          o.result
                                                        );
                                                      if (
                                                        ((e = []),
                                                        q.test(t.charAt(le))
                                                          ? ((n = t.charAt(le)),
                                                            le++)
                                                          : ((n = a), Ee(K)),
                                                        n !== a)
                                                      )
                                                        for (; n !== a; )
                                                          e.push(n),
                                                            q.test(t.charAt(le))
                                                              ? ((n =
                                                                  t.charAt(le)),
                                                                le++)
                                                              : ((n = a),
                                                                Ee(K));
                                                      else e = a;
                                                      return (
                                                        (he[r] = {
                                                          nextPos: le,
                                                          result: e,
                                                        }),
                                                        e
                                                      );
                                                    })()) === a && (i = null),
                                                    i !== a
                                                      ? ((s = i),
                                                        (e = n =
                                                          {
                                                            type: "regexp",
                                                            value: new RegExp(
                                                              r.join(""),
                                                              s
                                                                ? s.join("")
                                                                : "",
                                                            ),
                                                          }))
                                                      : ((le = e), (e = a)))
                                                  : ((le = e), (e = a)))
                                              : ((le = e), (e = a));
                                          } else (le = e), (e = a);
                                          return (
                                            (he[c] = {
                                              nextPos: le,
                                              result: e,
                                            }),
                                            e
                                          );
                                        })()),
                                      o !== a
                                        ? (e = n = w(n, r, o))
                                        : ((le = e), (e = a)))
                                    : ((le = e), (e = a)),
                                  e === a &&
                                    ((e = le),
                                    (n = Oe()) !== a &&
                                    Te() !== a &&
                                    (r = (function () {
                                      var e,
                                        n,
                                        r,
                                        o = 36 * le + 13,
                                        i = he[o];
                                      return i
                                        ? ((le = i.nextPos), i.result)
                                        : ((e = le),
                                          I.test(t.charAt(le))
                                            ? ((n = t.charAt(le)), le++)
                                            : ((n = a), Ee(v)),
                                          n === a && (n = null),
                                          n !== a
                                            ? (61 === t.charCodeAt(le)
                                                ? ((r = "="), le++)
                                                : ((r = a), Ee(A)),
                                              r !== a
                                                ? (e = n = N(n))
                                                : ((le = e), (e = a)))
                                            : ((le = e), (e = a)),
                                          e === a &&
                                            (R.test(t.charAt(le))
                                              ? ((e = t.charAt(le)), le++)
                                              : ((e = a), Ee(C))),
                                          (he[o] = {
                                            nextPos: le,
                                            result: e,
                                          }),
                                          e);
                                    })()) !== a &&
                                    Te() !== a
                                      ? ((o = (function () {
                                          var e,
                                            n,
                                            r,
                                            o,
                                            i,
                                            s,
                                            c = 36 * le + 17,
                                            u = he[c];
                                          if (u)
                                            return (le = u.nextPos), u.result;
                                          if (
                                            ((e = le),
                                            34 === t.charCodeAt(le)
                                              ? ((n = '"'), le++)
                                              : ((n = a), Ee(k)),
                                            n !== a)
                                          ) {
                                            for (
                                              r = [],
                                                P.test(t.charAt(le))
                                                  ? ((o = t.charAt(le)), le++)
                                                  : ((o = a), Ee(L)),
                                                o === a &&
                                                  ((o = le),
                                                  92 === t.charCodeAt(le)
                                                    ? ((i = "\\"), le++)
                                                    : ((i = a), Ee(x)),
                                                  i !== a
                                                    ? (t.length > le
                                                        ? ((s = t.charAt(le)),
                                                          le++)
                                                        : ((s = a), Ee(M)),
                                                      s !== a
                                                        ? (o = i = D(i, s))
                                                        : ((le = o), (o = a)))
                                                    : ((le = o), (o = a)));
                                              o !== a;

                                            )
                                              r.push(o),
                                                P.test(t.charAt(le))
                                                  ? ((o = t.charAt(le)), le++)
                                                  : ((o = a), Ee(L)),
                                                o === a &&
                                                  ((o = le),
                                                  92 === t.charCodeAt(le)
                                                    ? ((i = "\\"), le++)
                                                    : ((i = a), Ee(x)),
                                                  i !== a
                                                    ? (t.length > le
                                                        ? ((s = t.charAt(le)),
                                                          le++)
                                                        : ((s = a), Ee(M)),
                                                      s !== a
                                                        ? (o = i = D(i, s))
                                                        : ((le = o), (o = a)))
                                                    : ((le = o), (o = a)));
                                            r !== a
                                              ? (34 === t.charCodeAt(le)
                                                  ? ((o = '"'), le++)
                                                  : ((o = a), Ee(k)),
                                                o !== a
                                                  ? (e = n = U(r))
                                                  : ((le = e), (e = a)))
                                              : ((le = e), (e = a));
                                          } else (le = e), (e = a);
                                          if (e === a)
                                            if (
                                              ((e = le),
                                              39 === t.charCodeAt(le)
                                                ? ((n = "'"), le++)
                                                : ((n = a), Ee(B)),
                                              n !== a)
                                            ) {
                                              for (
                                                r = [],
                                                  G.test(t.charAt(le))
                                                    ? ((o = t.charAt(le)), le++)
                                                    : ((o = a), Ee(F)),
                                                  o === a &&
                                                    ((o = le),
                                                    92 === t.charCodeAt(le)
                                                      ? ((i = "\\"), le++)
                                                      : ((i = a), Ee(x)),
                                                    i !== a
                                                      ? (t.length > le
                                                          ? ((s = t.charAt(le)),
                                                            le++)
                                                          : ((s = a), Ee(M)),
                                                        s !== a
                                                          ? (o = i = D(i, s))
                                                          : ((le = o), (o = a)))
                                                      : ((le = o), (o = a)));
                                                o !== a;

                                              )
                                                r.push(o),
                                                  G.test(t.charAt(le))
                                                    ? ((o = t.charAt(le)), le++)
                                                    : ((o = a), Ee(F)),
                                                  o === a &&
                                                    ((o = le),
                                                    92 === t.charCodeAt(le)
                                                      ? ((i = "\\"), le++)
                                                      : ((i = a), Ee(x)),
                                                    i !== a
                                                      ? (t.length > le
                                                          ? ((s = t.charAt(le)),
                                                            le++)
                                                          : ((s = a), Ee(M)),
                                                        s !== a
                                                          ? (o = i = D(i, s))
                                                          : ((le = o), (o = a)))
                                                      : ((le = o), (o = a)));
                                              r !== a
                                                ? (39 === t.charCodeAt(le)
                                                    ? ((o = "'"), le++)
                                                    : ((o = a), Ee(B)),
                                                  o !== a
                                                    ? (e = n = U(r))
                                                    : ((le = e), (e = a)))
                                                : ((le = e), (e = a));
                                            } else (le = e), (e = a);
                                          return (
                                            (he[c] = {
                                              nextPos: le,
                                              result: e,
                                            }),
                                            e
                                          );
                                        })()) === a &&
                                          (o = (function () {
                                            var e,
                                              n,
                                              r,
                                              o,
                                              i,
                                              s,
                                              c,
                                              u = 36 * le + 18,
                                              l = he[u];
                                            if (l)
                                              return (le = l.nextPos), l.result;
                                            for (
                                              e = le,
                                                n = le,
                                                r = [],
                                                j.test(t.charAt(le))
                                                  ? ((o = t.charAt(le)), le++)
                                                  : ((o = a), Ee(H));
                                              o !== a;

                                            )
                                              r.push(o),
                                                j.test(t.charAt(le))
                                                  ? ((o = t.charAt(le)), le++)
                                                  : ((o = a), Ee(H));
                                            if (
                                              (r !== a
                                                ? (46 === t.charCodeAt(le)
                                                    ? ((o = "."), le++)
                                                    : ((o = a), Ee(O)),
                                                  o !== a
                                                    ? (n = r = [r, o])
                                                    : ((le = n), (n = a)))
                                                : ((le = n), (n = a)),
                                              n === a && (n = null),
                                              n !== a)
                                            ) {
                                              if (
                                                ((r = []),
                                                j.test(t.charAt(le))
                                                  ? ((o = t.charAt(le)), le++)
                                                  : ((o = a), Ee(H)),
                                                o !== a)
                                              )
                                                for (; o !== a; )
                                                  r.push(o),
                                                    j.test(t.charAt(le))
                                                      ? ((o = t.charAt(le)),
                                                        le++)
                                                      : ((o = a), Ee(H));
                                              else r = a;
                                              r !== a
                                                ? ((s = r),
                                                  (c = (i = n)
                                                    ? [].concat
                                                        .apply([], i)
                                                        .join("")
                                                    : ""),
                                                  (e = n =
                                                    {
                                                      type: "literal",
                                                      value: parseFloat(
                                                        c + s.join(""),
                                                      ),
                                                    }))
                                                : ((le = e), (e = a));
                                            } else (le = e), (e = a);
                                            return (
                                              (he[u] = {
                                                nextPos: le,
                                                result: e,
                                              }),
                                              e
                                            );
                                          })()) === a &&
                                          (o = (function () {
                                            var e,
                                              t,
                                              n = 36 * le + 19,
                                              r = he[n];
                                            return r
                                              ? ((le = r.nextPos), r.result)
                                              : ((t = be()) !== a &&
                                                  (t = {
                                                    type: "literal",
                                                    value: t,
                                                  }),
                                                (e = t),
                                                (he[n] = {
                                                  nextPos: le,
                                                  result: e,
                                                }),
                                                e);
                                          })()),
                                        o !== a
                                          ? (e = n = w(n, r, o))
                                          : ((le = e), (e = a)))
                                      : ((le = e), (e = a)),
                                    e === a &&
                                      ((e = le),
                                      (n = Oe()) !== a &&
                                        (n = {
                                          type: "attribute",
                                          name: n,
                                        }),
                                      (e = n))),
                                  (he[i] = {
                                    nextPos: le,
                                    result: e,
                                  }),
                                  e);
                            })()) !== a &&
                            Te() !== a
                              ? (93 === t.charCodeAt(le)
                                  ? ((o = "]"), le++)
                                  : ((o = a), Ee(b)),
                                o !== a ? (e = n = r) : ((le = e), (e = a)))
                              : ((le = e), (e = a)),
                            (he[i] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i,
                          s,
                          c,
                          u,
                          l = 36 * le + 26,
                          d = he[l];
                        if (d) return (le = d.nextPos), d.result;
                        if (
                          ((e = le),
                          46 === t.charCodeAt(le)
                            ? ((n = "."), le++)
                            : ((n = a), Ee(O)),
                          n !== a)
                        )
                          if ((r = be()) !== a) {
                            for (
                              o = [],
                                i = le,
                                46 === t.charCodeAt(le)
                                  ? ((s = "."), le++)
                                  : ((s = a), Ee(O)),
                                s !== a && (c = be()) !== a
                                  ? (i = s = [s, c])
                                  : ((le = i), (i = a));
                              i !== a;

                            )
                              o.push(i),
                                (i = le),
                                46 === t.charCodeAt(le)
                                  ? ((s = "."), le++)
                                  : ((s = a), Ee(O)),
                                s !== a && (c = be()) !== a
                                  ? (i = s = [s, c])
                                  : ((le = i), (i = a));
                            o !== a
                              ? ((u = r),
                                (n = {
                                  type: "field",
                                  name: o.reduce(function (e, t) {
                                    return e + t[0] + t[1];
                                  }, u),
                                }),
                                (e = n))
                              : ((le = e), (e = a));
                          } else (le = e), (e = a);
                        else (le = e), (e = a);
                        return (he[l] = { nextPos: le, result: e }), e;
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i = 36 * le + 27,
                          s = he[i];
                        return s
                          ? ((le = s.nextPos), s.result)
                          : ((e = le),
                            ":not(" === t.substr(le, 5)
                              ? ((n = ":not("), (le += 5))
                              : ((n = a), Ee(ee)),
                            n !== a &&
                            Te() !== a &&
                            (r = ve()) !== a &&
                            Te() !== a
                              ? (41 === t.charCodeAt(le)
                                  ? ((o = ")"), le++)
                                  : ((o = a), Ee(Y)),
                                o !== a
                                  ? (e = n = { type: "not", selectors: r })
                                  : ((le = e), (e = a)))
                              : ((le = e), (e = a)),
                            (he[i] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i = 36 * le + 28,
                          s = he[i];
                        return s
                          ? ((le = s.nextPos), s.result)
                          : ((e = le),
                            ":matches(" === t.substr(le, 9)
                              ? ((n = ":matches("), (le += 9))
                              : ((n = a), Ee(te)),
                            n !== a &&
                            Te() !== a &&
                            (r = ve()) !== a &&
                            Te() !== a
                              ? (41 === t.charCodeAt(le)
                                  ? ((o = ")"), le++)
                                  : ((o = a), Ee(Y)),
                                o !== a ? (e = n = ne(r)) : ((le = e), (e = a)))
                              : ((le = e), (e = a)),
                            (he[i] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i = 36 * le + 29,
                          s = he[i];
                        return s
                          ? ((le = s.nextPos), s.result)
                          : ((e = le),
                            ":is(" === t.substr(le, 4)
                              ? ((n = ":is("), (le += 4))
                              : ((n = a), Ee(re)),
                            n !== a &&
                            Te() !== a &&
                            (r = ve()) !== a &&
                            Te() !== a
                              ? (41 === t.charCodeAt(le)
                                  ? ((o = ")"), le++)
                                  : ((o = a), Ee(Y)),
                                o !== a ? (e = n = ne(r)) : ((le = e), (e = a)))
                              : ((le = e), (e = a)),
                            (he[i] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i = 36 * le + 30,
                          s = he[i];
                        return s
                          ? ((le = s.nextPos), s.result)
                          : ((e = le),
                            ":has(" === t.substr(le, 5)
                              ? ((n = ":has("), (le += 5))
                              : ((n = a), Ee(oe)),
                            n !== a &&
                            Te() !== a &&
                            (r = (function () {
                              var e,
                                n,
                                r,
                                o,
                                i,
                                s,
                                c,
                                u,
                                l = 36 * le + 4,
                                d = he[l];
                              if (d) return (le = d.nextPos), d.result;
                              if (((e = le), (n = Ae()) !== a)) {
                                for (
                                  r = [],
                                    o = le,
                                    (i = Te()) !== a
                                      ? (44 === t.charCodeAt(le)
                                          ? ((s = ","), le++)
                                          : ((s = a), Ee(m)),
                                        s !== a &&
                                        (c = Te()) !== a &&
                                        (u = Ae()) !== a
                                          ? (o = i = [i, s, c, u])
                                          : ((le = o), (o = a)))
                                      : ((le = o), (o = a));
                                  o !== a;

                                )
                                  r.push(o),
                                    (o = le),
                                    (i = Te()) !== a
                                      ? (44 === t.charCodeAt(le)
                                          ? ((s = ","), le++)
                                          : ((s = a), Ee(m)),
                                        s !== a &&
                                        (c = Te()) !== a &&
                                        (u = Ae()) !== a
                                          ? (o = i = [i, s, c, u])
                                          : ((le = o), (o = a)))
                                      : ((le = o), (o = a));
                                r !== a
                                  ? (e = n = _(n, r))
                                  : ((le = e), (e = a));
                              } else (le = e), (e = a);
                              return (he[l] = { nextPos: le, result: e }), e;
                            })()) !== a &&
                            Te() !== a
                              ? (41 === t.charCodeAt(le)
                                  ? ((o = ")"), le++)
                                  : ((o = a), Ee(Y)),
                                o !== a
                                  ? (e = n = { type: "has", selectors: r })
                                  : ((le = e), (e = a)))
                              : ((le = e), (e = a)),
                            (he[i] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r = 36 * le + 31,
                          o = he[r];
                        return o
                          ? ((le = o.nextPos), o.result)
                          : (":first-child" === t.substr(le, 12)
                              ? ((n = ":first-child"), (le += 12))
                              : ((n = a), Ee(ie)),
                            n !== a && (n = Le(1)),
                            (e = n),
                            (he[r] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r = 36 * le + 32,
                          o = he[r];
                        return o
                          ? ((le = o.nextPos), o.result)
                          : (":last-child" === t.substr(le, 11)
                              ? ((n = ":last-child"), (le += 11))
                              : ((n = a), Ee(se)),
                            n !== a && (n = xe(1)),
                            (e = n),
                            (he[r] = { nextPos: le, result: e }),
                            e);
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i,
                          s = 36 * le + 33,
                          c = he[s];
                        if (c) return (le = c.nextPos), c.result;
                        if (
                          ((e = le),
                          ":nth-child(" === t.substr(le, 11)
                            ? ((n = ":nth-child("), (le += 11))
                            : ((n = a), Ee(ae)),
                          n !== a)
                        )
                          if (Te() !== a) {
                            if (
                              ((r = []),
                              j.test(t.charAt(le))
                                ? ((o = t.charAt(le)), le++)
                                : ((o = a), Ee(H)),
                              o !== a)
                            )
                              for (; o !== a; )
                                r.push(o),
                                  j.test(t.charAt(le))
                                    ? ((o = t.charAt(le)), le++)
                                    : ((o = a), Ee(H));
                            else r = a;
                            r !== a && (o = Te()) !== a
                              ? (41 === t.charCodeAt(le)
                                  ? ((i = ")"), le++)
                                  : ((i = a), Ee(Y)),
                                i !== a
                                  ? (e = n = Le(parseInt(r.join(""), 10)))
                                  : ((le = e), (e = a)))
                              : ((le = e), (e = a));
                          } else (le = e), (e = a);
                        else (le = e), (e = a);
                        return (he[s] = { nextPos: le, result: e }), e;
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o,
                          i,
                          s = 36 * le + 34,
                          c = he[s];
                        if (c) return (le = c.nextPos), c.result;
                        if (
                          ((e = le),
                          ":nth-last-child(" === t.substr(le, 16)
                            ? ((n = ":nth-last-child("), (le += 16))
                            : ((n = a), Ee(ce)),
                          n !== a)
                        )
                          if (Te() !== a) {
                            if (
                              ((r = []),
                              j.test(t.charAt(le))
                                ? ((o = t.charAt(le)), le++)
                                : ((o = a), Ee(H)),
                              o !== a)
                            )
                              for (; o !== a; )
                                r.push(o),
                                  j.test(t.charAt(le))
                                    ? ((o = t.charAt(le)), le++)
                                    : ((o = a), Ee(H));
                            else r = a;
                            r !== a && (o = Te()) !== a
                              ? (41 === t.charCodeAt(le)
                                  ? ((i = ")"), le++)
                                  : ((i = a), Ee(Y)),
                                i !== a
                                  ? (e = n = xe(parseInt(r.join(""), 10)))
                                  : ((le = e), (e = a)))
                              : ((le = e), (e = a));
                          } else (le = e), (e = a);
                        else (le = e), (e = a);
                        return (he[s] = { nextPos: le, result: e }), e;
                      })()) === a &&
                      (e = (function () {
                        var e,
                          n,
                          r,
                          o = 36 * le + 35,
                          i = he[o];
                        return i
                          ? ((le = i.nextPos), i.result)
                          : ((e = le),
                            58 === t.charCodeAt(le)
                              ? ((n = ":"), le++)
                              : ((n = a), Ee(ue)),
                            n !== a && (r = be()) !== a
                              ? (e = n = { type: "class", name: r })
                              : ((le = e), (e = a)),
                            (he[o] = { nextPos: le, result: e }),
                            e);
                      })()),
                    (he[n] = { nextPos: le, result: e }),
                    e);
              }
              function Oe() {
                var e,
                  n,
                  r,
                  o,
                  i,
                  s,
                  c,
                  u,
                  l = 36 * le + 15,
                  d = he[l];
                if (d) return (le = d.nextPos), d.result;
                if (((e = le), (n = be()) !== a)) {
                  for (
                    r = [],
                      o = le,
                      46 === t.charCodeAt(le)
                        ? ((i = "."), le++)
                        : ((i = a), Ee(O)),
                      i !== a && (s = be()) !== a
                        ? (o = i = [i, s])
                        : ((le = o), (o = a));
                    o !== a;

                  )
                    r.push(o),
                      (o = le),
                      46 === t.charCodeAt(le)
                        ? ((i = "."), le++)
                        : ((i = a), Ee(O)),
                      i !== a && (s = be()) !== a
                        ? (o = i = [i, s])
                        : ((le = o), (o = a));
                  r !== a
                    ? ((c = n),
                      (u = r),
                      (e = n = [].concat.apply([c], u).join("")))
                    : ((le = e), (e = a));
                } else (le = e), (e = a);
                return (he[l] = { nextPos: le, result: e }), e;
              }
              function we() {
                var e,
                  n,
                  r,
                  o,
                  i = 36 * le + 23,
                  s = he[i];
                if (s) return (le = s.nextPos), s.result;
                if (
                  ((e = le),
                  91 === t.charCodeAt(le)
                    ? ((n = "["), le++)
                    : ((n = a), Ee(T)),
                  n !== a)
                ) {
                  if (
                    ((r = []),
                    Z.test(t.charAt(le))
                      ? ((o = t.charAt(le)), le++)
                      : ((o = a), Ee(z)),
                    o === a && (o = ke()),
                    o !== a)
                  )
                    for (; o !== a; )
                      r.push(o),
                        Z.test(t.charAt(le))
                          ? ((o = t.charAt(le)), le++)
                          : ((o = a), Ee(z)),
                        o === a && (o = ke());
                  else r = a;
                  r !== a
                    ? (93 === t.charCodeAt(le)
                        ? ((o = "]"), le++)
                        : ((o = a), Ee(b)),
                      o !== a
                        ? (e = n = "[" + r.join("") + "]")
                        : ((le = e), (e = a)))
                    : ((le = e), (e = a));
                } else (le = e), (e = a);
                return (he[i] = { nextPos: le, result: e }), e;
              }
              function ke() {
                var e,
                  n,
                  r,
                  o = 36 * le + 24,
                  i = he[o];
                return i
                  ? ((le = i.nextPos), i.result)
                  : ((e = le),
                    92 === t.charCodeAt(le)
                      ? ((n = "\\"), le++)
                      : ((n = a), Ee(x)),
                    n !== a
                      ? (t.length > le
                          ? ((r = t.charAt(le)), le++)
                          : ((r = a), Ee(M)),
                        r !== a ? (e = n = "\\" + r) : ((le = e), (e = a)))
                      : ((le = e), (e = a)),
                    (he[o] = { nextPos: le, result: e }),
                    e);
              }
              function Pe() {
                var e,
                  n,
                  r,
                  o = 36 * le + 25,
                  i = he[o];
                if (i) return (le = i.nextPos), i.result;
                if (
                  ((n = []),
                  J.test(t.charAt(le))
                    ? ((r = t.charAt(le)), le++)
                    : ((r = a), Ee(Q)),
                  r !== a)
                )
                  for (; r !== a; )
                    n.push(r),
                      J.test(t.charAt(le))
                        ? ((r = t.charAt(le)), le++)
                        : ((r = a), Ee(Q));
                else n = a;
                return (
                  n !== a && (n = n.join("")),
                  (e = n),
                  (he[o] = { nextPos: le, result: e }),
                  e
                );
              }
              function Le(e) {
                return {
                  type: "nth-child",
                  index: { type: "literal", value: e },
                };
              }
              function xe(e) {
                return {
                  type: "nth-last-child",
                  index: { type: "literal", value: e },
                };
              }
              if ((r = u()) !== a && le === t.length) return r;
              throw (
                (r !== a && le < t.length && Ee({ type: "end" }),
                (o = fe),
                (i = pe < t.length ? t.charAt(pe) : null),
                (s = pe < t.length ? Se(pe, pe + 1) : Se(pe, pe)),
                new e(e.buildMessage(o, i), o, i, s))
              );
            },
          }
        );
      })());
  });
function c(e, t) {
  for (var n = 0; n < t.length; ++n) {
    if (null == e) return e;
    e = e[t[n]];
  }
  return e;
}
var u = "function" == typeof WeakMap ? new WeakMap() : null;
function l(e) {
  if (null == e)
    return function () {
      return !0;
    };
  if (null != u) {
    var t = u.get(e);
    return null != t || ((t = d(e)), u.set(e, t)), t;
  }
  return d(e);
}
function d(e) {
  switch (e.type) {
    case "wildcard":
      return function () {
        return !0;
      };
    case "identifier":
      var t = e.value.toLowerCase();
      return function (e, n, r) {
        var o = (r && r.nodeTypeKey) || "type";
        return t === e[o].toLowerCase();
      };
    case "exactNode":
      return function (e, t) {
        return 0 === t.length;
      };
    case "field":
      var n = e.name.split(".");
      return function (e, t) {
        return (function e(t, n, r, o) {
          for (var i = n, s = o; s < r.length; ++s) {
            if (null == i) return !1;
            var a = i[r[s]];
            if (Array.isArray(a)) {
              for (var c = 0; c < a.length; ++c)
                if (e(t, a[c], r, s + 1)) return !0;
              return !1;
            }
            i = a;
          }
          return t === i;
        })(e, t[n.length - 1], n, 0);
      };
    case "matches":
      var o = e.selectors.map(l);
      return function (e, t, n) {
        for (var r = 0; r < o.length; ++r) if (o[r](e, t, n)) return !0;
        return !1;
      };
    case "compound":
      var i = e.selectors.map(l);
      return function (e, t, n) {
        for (var r = 0; r < i.length; ++r) if (!i[r](e, t, n)) return !1;
        return !0;
      };
    case "not":
      var a = e.selectors.map(l);
      return function (e, t, n) {
        for (var r = 0; r < a.length; ++r) if (a[r](e, t, n)) return !1;
        return !0;
      };
    case "has":
      var u = e.selectors.map(l);
      return function (e, t, n) {
        var r = !1,
          o = [];
        return (
          s.traverse(e, {
            enter: function (e, t) {
              null != t && o.unshift(t);
              for (var i = 0; i < u.length; ++i)
                if (u[i](e, o, n)) return (r = !0), void this.break();
            },
            leave: function () {
              o.shift();
            },
            keys: n && n.visitorKeys,
            fallback: (n && n.fallback) || "iteration",
          }),
          r
        );
      };
    case "child":
      var d = l(e.left),
        p = l(e.right);
      return function (e, t, n) {
        return !!(t.length > 0 && p(e, t, n)) && d(t[0], t.slice(1), n);
      };
    case "descendant":
      var f = l(e.left),
        _ = l(e.right);
      return function (e, t, n) {
        if (_(e, t, n))
          for (var r = 0, o = t.length; r < o; ++r)
            if (f(t[r], t.slice(r + 1), n)) return !0;
        return !1;
      };
    case "attribute":
      var S = e.name.split(".");
      switch (e.operator) {
        case void 0:
          return function (e) {
            return null != c(e, S);
          };
        case "=":
          switch (e.value.type) {
            case "regexp":
              return function (t) {
                var n = c(t, S);
                return "string" == typeof n && e.value.value.test(n);
              };
            case "literal":
              var E = "".concat(e.value.value);
              return function (e) {
                return E === "".concat(c(e, S));
              };
            case "type":
              return function (t) {
                return e.value.value === r(c(t, S));
              };
          }
          throw new Error("Unknown selector value type: ".concat(e.value.type));
        case "!=":
          switch (e.value.type) {
            case "regexp":
              return function (t) {
                return !e.value.value.test(c(t, S));
              };
            case "literal":
              var y = "".concat(e.value.value);
              return function (e) {
                return y !== "".concat(c(e, S));
              };
            case "type":
              return function (t) {
                return e.value.value !== r(c(t, S));
              };
          }
          throw new Error("Unknown selector value type: ".concat(e.value.type));
        case "<=":
          return function (t) {
            return c(t, S) <= e.value.value;
          };
        case "<":
          return function (t) {
            return c(t, S) < e.value.value;
          };
        case ">":
          return function (t) {
            return c(t, S) > e.value.value;
          };
        case ">=":
          return function (t) {
            return c(t, S) >= e.value.value;
          };
      }
      throw new Error("Unknown operator: ".concat(e.operator));
    case "sibling":
      var T = l(e.left),
        b = l(e.right);
      return function (t, n, r) {
        return (
          (b(t, n, r) && h(t, T, n, "LEFT_SIDE", r)) ||
          (e.left.subject && T(t, n, r) && h(t, b, n, "RIGHT_SIDE", r))
        );
      };
    case "adjacent":
      var I = l(e.left),
        v = l(e.right);
      return function (t, n, r) {
        return (
          (v(t, n, r) && g(t, I, n, "LEFT_SIDE", r)) ||
          (e.right.subject && I(t, n, r) && g(t, v, n, "RIGHT_SIDE", r))
        );
      };
    case "nth-child":
      var A = e.index.value,
        N = l(e.right);
      return function (e, t, n) {
        return N(e, t, n) && m(e, t, A, n);
      };
    case "nth-last-child":
      var R = -e.index.value,
        C = l(e.right);
      return function (e, t, n) {
        return C(e, t, n) && m(e, t, R, n);
      };
    case "class":
      var O = e.name.toLowerCase();
      return function (t, n, r) {
        if (r && r.matchClass) return r.matchClass(e.name, t, n);
        if (r && r.nodeTypeKey) return !1;
        switch (O) {
          case "statement":
            if ("Statement" === t.type.slice(-9)) return !0;
          case "declaration":
            return "Declaration" === t.type.slice(-11);
          case "pattern":
            if ("Pattern" === t.type.slice(-7)) return !0;
          case "expression":
            return (
              "Expression" === t.type.slice(-10) ||
              "Literal" === t.type.slice(-7) ||
              ("Identifier" === t.type &&
                (0 === n.length || "MetaProperty" !== n[0].type)) ||
              "MetaProperty" === t.type
            );
          case "function":
            return (
              "FunctionDeclaration" === t.type ||
              "FunctionExpression" === t.type ||
              "ArrowFunctionExpression" === t.type
            );
        }
        throw new Error("Unknown class name: ".concat(e.name));
      };
  }
  throw new Error("Unknown selector type: ".concat(e.type));
}
function p(e, t) {
  var n = (t && t.nodeTypeKey) || "type",
    r = e[n];
  return t && t.visitorKeys && t.visitorKeys[r]
    ? t.visitorKeys[r]
    : s.VisitorKeys[r]
      ? s.VisitorKeys[r]
      : t && "function" == typeof t.fallback
        ? t.fallback(e)
        : Object.keys(e).filter(function (e) {
            return e !== n;
          });
}
function f(e, t) {
  var n = (t && t.nodeTypeKey) || "type";
  return null !== e && "object" === r(e) && "string" == typeof e[n];
}
function h(e, n, r, o, i) {
  var s = t(r, 1)[0];
  if (!s) return !1;
  for (var a = p(s, i), c = 0; c < a.length; ++c) {
    var u = s[a[c]];
    if (Array.isArray(u)) {
      var l = u.indexOf(e);
      if (l < 0) continue;
      var d = void 0,
        h = void 0;
      "LEFT_SIDE" === o ? ((d = 0), (h = l)) : ((d = l + 1), (h = u.length));
      for (var g = d; g < h; ++g) if (f(u[g], i) && n(u[g], r, i)) return !0;
    }
  }
  return !1;
}
function g(e, n, r, o, i) {
  var s = t(r, 1)[0];
  if (!s) return !1;
  for (var a = p(s, i), c = 0; c < a.length; ++c) {
    var u = s[a[c]];
    if (Array.isArray(u)) {
      var l = u.indexOf(e);
      if (l < 0) continue;
      if ("LEFT_SIDE" === o && l > 0 && f(u[l - 1], i) && n(u[l - 1], r, i))
        return !0;
      if (
        "RIGHT_SIDE" === o &&
        l < u.length - 1 &&
        f(u[l + 1], i) &&
        n(u[l + 1], r, i)
      )
        return !0;
    }
  }
  return !1;
}
function m(e, n, r, o) {
  if (0 === r) return !1;
  var i = t(n, 1)[0];
  if (!i) return !1;
  for (var s = p(i, o), a = 0; a < s.length; ++a) {
    var c = i[s[a]];
    if (Array.isArray(c)) {
      var u = r < 0 ? c.length + r : r - 1;
      if (u >= 0 && u < c.length && c[u] === e) return !0;
    }
  }
  return !1;
}
function _(e, t, o, i) {
  if (t) {
    var a = [],
      c = l(t),
      u = (function e(t, o) {
        if (null == t || "object" != r(t)) return [];
        null == o && (o = t);
        for (
          var i = t.subject ? [o] : [], s = Object.keys(t), a = 0;
          a < s.length;
          ++a
        ) {
          var c = s[a],
            u = t[c];
          i.push.apply(i, n(e(u, "left" === c ? u : o)));
        }
        return i;
      })(t).map(l);
    s.traverse(e, {
      enter: function (e, t) {
        if ((null != t && a.unshift(t), c(e, a, i)))
          if (u.length)
            for (var n = 0, r = u.length; n < r; ++n) {
              u[n](e, a, i) && o(e, t, a);
              for (var s = 0, l = a.length; s < l; ++s) {
                var d = a.slice(s + 1);
                u[n](a[s], d, i) && o(a[s], t, d);
              }
            }
          else o(e, t, a);
      },
      leave: function () {
        a.shift();
      },
      keys: i && i.visitorKeys,
      fallback: (i && i.fallback) || "iteration",
    });
  }
}
function S(e, t, n) {
  var r = [];
  return (
    _(
      e,
      t,
      function (e) {
        r.push(e);
      },
      n,
    ),
    r
  );
}
function E(e) {
  return a.parse(e);
}
function y(e, t, n) {
  return S(e, E(t), n);
}
(y.parse = E),
  (y.match = S),
  (y.traverse = _),
  (y.matches = function (e, t, n, r) {
    return !t || (!!e && (n || (n = []), l(t)(e, n, r)));
  }),
  (y.query = y);
