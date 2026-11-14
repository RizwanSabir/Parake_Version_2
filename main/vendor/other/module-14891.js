// vendor/other/module-14891.js — webpack module 14891
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
t.generate = function (e, t) {
  var n = new T(t);
  return n.generator[e.type](e, n), n.output;
};
var r = JSON.stringify;
if (!String.prototype.repeat)
  throw new Error(
    "String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation",
  );
if (!String.prototype.endsWith)
  throw new Error(
    "String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation",
  );
var o,
  i,
  s,
  a,
  c,
  u,
  l = {
    "||": 2,
    "??": 3,
    "&&": 4,
    "|": 5,
    "^": 6,
    "&": 7,
    "==": 8,
    "!=": 8,
    "===": 8,
    "!==": 8,
    "<": 9,
    ">": 9,
    "<=": 9,
    ">=": 9,
    in: 9,
    instanceof: 9,
    "<<": 10,
    ">>": 10,
    ">>>": 10,
    "+": 11,
    "-": 11,
    "*": 12,
    "%": 12,
    "/": 12,
    "**": 13,
  },
  d = 17,
  p = {
    ArrayExpression: 20,
    TaggedTemplateExpression: 20,
    ThisExpression: 20,
    Identifier: 20,
    PrivateIdentifier: 20,
    Literal: 18,
    TemplateLiteral: 20,
    Super: 20,
    SequenceExpression: 20,
    MemberExpression: 19,
    ChainExpression: 19,
    CallExpression: 19,
    NewExpression: 19,
    ArrowFunctionExpression: d,
    ClassExpression: d,
    FunctionExpression: d,
    ObjectExpression: d,
    UpdateExpression: 16,
    UnaryExpression: 15,
    AwaitExpression: 15,
    BinaryExpression: 14,
    LogicalExpression: 13,
    ConditionalExpression: 4,
    AssignmentExpression: 3,
    YieldExpression: 2,
    RestElement: 1,
  };
function f(e, t) {
  var n = e.generator;
  if ((e.write("("), null != t && t.length > 0)) {
    n[t[0].type](t[0], e);
    for (var r = t.length, o = 1; o < r; o++) {
      var i = t[o];
      e.write(", "), n[i.type](i, e);
    }
  }
  e.write(")");
}
function h(e, t, n, r) {
  var o = e.expressionsPrecedence[t.type];
  if (o === d) return !0;
  var i = e.expressionsPrecedence[n.type];
  return o !== i
    ? (!r && 15 === o && 14 === i && "**" === n.operator) || o < i
    : (13 === o || 14 === o) &&
        ("**" === t.operator && "**" === n.operator
          ? !r
          : (13 === o &&
              13 === i &&
              ("??" === t.operator || "??" === n.operator)) ||
            (r
              ? l[t.operator] <= l[n.operator]
              : l[t.operator] < l[n.operator]));
}
function g(e, t, n, r) {
  var o = e.generator;
  h(e, t, n, r)
    ? (e.write("("), o[t.type](t, e), e.write(")"))
    : o[t.type](t, e);
}
function m(e, t, n, r) {
  var o = t.split("\n"),
    i = o.length - 1;
  if ((e.write(o[0].trim()), i > 0)) {
    e.write(r);
    for (var s = 1; s < i; s++) e.write(n + o[s].trim() + r);
    e.write(n + o[i].trim());
  }
}
function _(e, t, n, r) {
  for (var o = t.length, i = 0; i < o; i++) {
    var s = t[i];
    e.write(n),
      "L" === s.type[0]
        ? e.write("// " + s.value.trim() + "\n", s)
        : (e.write("/*"), m(e, s.value, n, r), e.write("*/" + r));
  }
}
function S(e, t) {
  var n = e.generator,
    r = t.declarations;
  e.write(t.kind + " ");
  var o = r.length;
  if (o > 0) {
    n.VariableDeclarator(r[0], e);
    for (var i = 1; i < o; i++) e.write(", "), n.VariableDeclarator(r[i], e);
  }
}
var E = {
    Program: function (e, t) {
      var n = t.indent.repeat(t.indentLevel),
        r = t.lineEnd,
        o = t.writeComments;
      o && null != e.comments && _(t, e.comments, n, r);
      for (var i = e.body, s = i.length, a = 0; a < s; a++) {
        var c = i[a];
        o && null != c.comments && _(t, c.comments, n, r),
          t.write(n),
          this[c.type](c, t),
          t.write(r);
      }
      o && null != e.trailingComments && _(t, e.trailingComments, n, r);
    },
    BlockStatement: (u = function (e, t) {
      var n = t.indent.repeat(t.indentLevel++),
        r = t.lineEnd,
        o = t.writeComments,
        i = n + t.indent;
      t.write("{");
      var s = e.body;
      if (null != s && s.length > 0) {
        t.write(r), o && null != e.comments && _(t, e.comments, i, r);
        for (var a = s.length, c = 0; c < a; c++) {
          var u = s[c];
          o && null != u.comments && _(t, u.comments, i, r),
            t.write(i),
            this[u.type](u, t),
            t.write(r);
        }
        t.write(n);
      } else
        o &&
          null != e.comments &&
          (t.write(r), _(t, e.comments, i, r), t.write(n));
      o && null != e.trailingComments && _(t, e.trailingComments, i, r),
        t.write("}"),
        t.indentLevel--;
    }),
    ClassBody: u,
    StaticBlock: function (e, t) {
      t.write("static "), this.BlockStatement(e, t);
    },
    EmptyStatement: function (e, t) {
      t.write(";");
    },
    ExpressionStatement: function (e, t) {
      var n = t.expressionsPrecedence[e.expression.type];
      n === d || (3 === n && "O" === e.expression.left.type[0])
        ? (t.write("("), this[e.expression.type](e.expression, t), t.write(")"))
        : this[e.expression.type](e.expression, t),
        t.write(";");
    },
    IfStatement: function (e, t) {
      t.write("if ("),
        this[e.test.type](e.test, t),
        t.write(") "),
        this[e.consequent.type](e.consequent, t),
        null != e.alternate &&
          (t.write(" else "), this[e.alternate.type](e.alternate, t));
    },
    LabeledStatement: function (e, t) {
      this[e.label.type](e.label, t),
        t.write(": "),
        this[e.body.type](e.body, t);
    },
    BreakStatement: function (e, t) {
      t.write("break"),
        null != e.label && (t.write(" "), this[e.label.type](e.label, t)),
        t.write(";");
    },
    ContinueStatement: function (e, t) {
      t.write("continue"),
        null != e.label && (t.write(" "), this[e.label.type](e.label, t)),
        t.write(";");
    },
    WithStatement: function (e, t) {
      t.write("with ("),
        this[e.object.type](e.object, t),
        t.write(") "),
        this[e.body.type](e.body, t);
    },
    SwitchStatement: function (e, t) {
      var n = t.indent.repeat(t.indentLevel++),
        r = t.lineEnd,
        o = t.writeComments;
      t.indentLevel++;
      var i = n + t.indent,
        s = i + t.indent;
      t.write("switch ("),
        this[e.discriminant.type](e.discriminant, t),
        t.write(") {" + r);
      for (var a = e.cases, c = a.length, u = 0; u < c; u++) {
        var l = a[u];
        o && null != l.comments && _(t, l.comments, i, r),
          l.test
            ? (t.write(i + "case "),
              this[l.test.type](l.test, t),
              t.write(":" + r))
            : t.write(i + "default:" + r);
        for (var d = l.consequent, p = d.length, f = 0; f < p; f++) {
          var h = d[f];
          o && null != h.comments && _(t, h.comments, s, r),
            t.write(s),
            this[h.type](h, t),
            t.write(r);
        }
      }
      (t.indentLevel -= 2), t.write(n + "}");
    },
    ReturnStatement: function (e, t) {
      t.write("return"),
        e.argument && (t.write(" "), this[e.argument.type](e.argument, t)),
        t.write(";");
    },
    ThrowStatement: function (e, t) {
      t.write("throw "), this[e.argument.type](e.argument, t), t.write(";");
    },
    TryStatement: function (e, t) {
      if ((t.write("try "), this[e.block.type](e.block, t), e.handler)) {
        var n = e.handler;
        null == n.param
          ? t.write(" catch ")
          : (t.write(" catch ("),
            this[n.param.type](n.param, t),
            t.write(") ")),
          this[n.body.type](n.body, t);
      }
      e.finalizer &&
        (t.write(" finally "), this[e.finalizer.type](e.finalizer, t));
    },
    WhileStatement: function (e, t) {
      t.write("while ("),
        this[e.test.type](e.test, t),
        t.write(") "),
        this[e.body.type](e.body, t);
    },
    DoWhileStatement: function (e, t) {
      t.write("do "),
        this[e.body.type](e.body, t),
        t.write(" while ("),
        this[e.test.type](e.test, t),
        t.write(");");
    },
    ForStatement: function (e, t) {
      if ((t.write("for ("), null != e.init)) {
        var n = e.init;
        "V" === n.type[0] ? S(t, n) : this[n.type](n, t);
      }
      t.write("; "),
        e.test && this[e.test.type](e.test, t),
        t.write("; "),
        e.update && this[e.update.type](e.update, t),
        t.write(") "),
        this[e.body.type](e.body, t);
    },
    ForInStatement: (o = function (e, t) {
      t.write("for ".concat(e.await ? "await " : "", "("));
      var n = e.left;
      "V" === n.type[0] ? S(t, n) : this[n.type](n, t),
        t.write("I" === e.type[3] ? " in " : " of "),
        this[e.right.type](e.right, t),
        t.write(") "),
        this[e.body.type](e.body, t);
    }),
    ForOfStatement: o,
    DebuggerStatement: function (e, t) {
      t.write("debugger;", e);
    },
    FunctionDeclaration: (i = function (e, t) {
      t.write(
        (e.async ? "async " : "") +
          (e.generator ? "function* " : "function ") +
          (e.id ? e.id.name : ""),
        e,
      ),
        f(t, e.params),
        t.write(" "),
        this[e.body.type](e.body, t);
    }),
    FunctionExpression: i,
    VariableDeclaration: function (e, t) {
      S(t, e), t.write(";");
    },
    VariableDeclarator: function (e, t) {
      this[e.id.type](e.id, t),
        null != e.init && (t.write(" = "), this[e.init.type](e.init, t));
    },
    ClassDeclaration: function (e, t) {
      if (
        (t.write("class " + (e.id ? "".concat(e.id.name, " ") : ""), e),
        e.superClass)
      ) {
        t.write("extends ");
        var n = e.superClass,
          r = n.type,
          o = t.expressionsPrecedence[r];
        ("C" === r[0] && "l" === r[1] && "E" === r[5]) ||
        !(o === d || o < t.expressionsPrecedence.ClassExpression)
          ? this[n.type](n, t)
          : (t.write("("), this[e.superClass.type](n, t), t.write(")")),
          t.write(" ");
      }
      this.ClassBody(e.body, t);
    },
    ImportDeclaration: function (e, t) {
      t.write("import ");
      var n = e.specifiers,
        r = e.attributes,
        o = n.length,
        i = 0;
      if (o > 0) {
        for (; i < o; ) {
          i > 0 && t.write(", ");
          var s = n[i],
            a = s.type[6];
          if ("D" === a) t.write(s.local.name, s), i++;
          else {
            if ("N" !== a) break;
            t.write("* as " + s.local.name, s), i++;
          }
        }
        if (i < o) {
          for (t.write("{"); ; ) {
            var c = n[i],
              u = c.imported.name;
            if (
              (t.write(u, c),
              u !== c.local.name && t.write(" as " + c.local.name),
              !(++i < o))
            )
              break;
            t.write(", ");
          }
          t.write("}");
        }
        t.write(" from ");
      }
      if ((this.Literal(e.source, t), r && r.length > 0)) {
        t.write(" with { ");
        for (var l = 0; l < r.length; l++)
          this.ImportAttribute(r[l], t), l < r.length - 1 && t.write(", ");
        t.write(" }");
      }
      t.write(";");
    },
    ImportAttribute: function (e, t) {
      this.Identifier(e.key, t), t.write(": "), this.Literal(e.value, t);
    },
    ImportExpression: function (e, t) {
      t.write("import("), this[e.source.type](e.source, t), t.write(")");
    },
    ExportDefaultDeclaration: function (e, t) {
      t.write("export default "),
        this[e.declaration.type](e.declaration, t),
        null != t.expressionsPrecedence[e.declaration.type] &&
          "F" !== e.declaration.type[0] &&
          t.write(";");
    },
    ExportNamedDeclaration: function (e, t) {
      if ((t.write("export "), e.declaration))
        this[e.declaration.type](e.declaration, t);
      else {
        t.write("{");
        var n = e.specifiers,
          r = n.length;
        if (r > 0)
          for (var o = 0; ; ) {
            var i = n[o],
              s = i.local.name;
            if (
              (t.write(s, i),
              s !== i.exported.name && t.write(" as " + i.exported.name),
              !(++o < r))
            )
              break;
            t.write(", ");
          }
        if (
          (t.write("}"),
          e.source && (t.write(" from "), this.Literal(e.source, t)),
          e.attributes && e.attributes.length > 0)
        ) {
          t.write(" with { ");
          for (var a = 0; a < e.attributes.length; a++)
            this.ImportAttribute(e.attributes[a], t),
              a < e.attributes.length - 1 && t.write(", ");
          t.write(" }");
        }
        t.write(";");
      }
    },
    ExportAllDeclaration: function (e, t) {
      if (
        (null != e.exported
          ? t.write("export * as " + e.exported.name + " from ")
          : t.write("export * from "),
        this.Literal(e.source, t),
        e.attributes && e.attributes.length > 0)
      ) {
        t.write(" with { ");
        for (var n = 0; n < e.attributes.length; n++)
          this.ImportAttribute(e.attributes[n], t),
            n < e.attributes.length - 1 && t.write(", ");
        t.write(" }");
      }
      t.write(";");
    },
    MethodDefinition: function (e, t) {
      e.static && t.write("static ");
      var n = e.kind[0];
      ("g" !== n && "s" !== n) || t.write(e.kind + " "),
        e.value.async && t.write("async "),
        e.value.generator && t.write("*"),
        e.computed
          ? (t.write("["), this[e.key.type](e.key, t), t.write("]"))
          : this[e.key.type](e.key, t),
        f(t, e.value.params),
        t.write(" "),
        this[e.value.body.type](e.value.body, t);
    },
    ClassExpression: function (e, t) {
      this.ClassDeclaration(e, t);
    },
    ArrowFunctionExpression: function (e, t) {
      t.write(e.async ? "async " : "", e);
      var n = e.params;
      null != n &&
        (1 === n.length && "I" === n[0].type[0]
          ? t.write(n[0].name, n[0])
          : f(t, e.params)),
        t.write(" => "),
        "O" === e.body.type[0]
          ? (t.write("("), this.ObjectExpression(e.body, t), t.write(")"))
          : this[e.body.type](e.body, t);
    },
    ThisExpression: function (e, t) {
      t.write("this", e);
    },
    Super: function (e, t) {
      t.write("super", e);
    },
    RestElement: (s = function (e, t) {
      t.write("..."), this[e.argument.type](e.argument, t);
    }),
    SpreadElement: s,
    YieldExpression: function (e, t) {
      t.write(e.delegate ? "yield*" : "yield"),
        e.argument && (t.write(" "), this[e.argument.type](e.argument, t));
    },
    AwaitExpression: function (e, t) {
      t.write("await ", e), g(t, e.argument, e);
    },
    TemplateLiteral: function (e, t) {
      var n = e.quasis,
        r = e.expressions;
      t.write("`");
      for (var o = r.length, i = 0; i < o; i++) {
        var s = r[i],
          a = n[i];
        t.write(a.value.raw, a),
          t.write("${"),
          this[s.type](s, t),
          t.write("}");
      }
      var c = n[n.length - 1];
      t.write(c.value.raw, c), t.write("`");
    },
    TemplateElement: function (e, t) {
      t.write(e.value.raw, e);
    },
    TaggedTemplateExpression: function (e, t) {
      g(t, e.tag, e), this[e.quasi.type](e.quasi, t);
    },
    ArrayExpression: (c = function (e, t) {
      if ((t.write("["), e.elements.length > 0))
        for (var n = e.elements, r = n.length, o = 0; ; ) {
          var i = n[o];
          if ((null != i && this[i.type](i, t), !(++o < r))) {
            null == i && t.write(", ");
            break;
          }
          t.write(", ");
        }
      t.write("]");
    }),
    ArrayPattern: c,
    ObjectExpression: function (e, t) {
      var n = t.indent.repeat(t.indentLevel++),
        r = t.lineEnd,
        o = t.writeComments,
        i = n + t.indent;
      if ((t.write("{"), e.properties.length > 0)) {
        t.write(r), o && null != e.comments && _(t, e.comments, i, r);
        for (var s = "," + r, a = e.properties, c = a.length, u = 0; ; ) {
          var l = a[u];
          if (
            (o && null != l.comments && _(t, l.comments, i, r),
            t.write(i),
            this[l.type](l, t),
            !(++u < c))
          )
            break;
          t.write(s);
        }
        t.write(r),
          o && null != e.trailingComments && _(t, e.trailingComments, i, r),
          t.write(n + "}");
      } else
        o
          ? null != e.comments
            ? (t.write(r),
              _(t, e.comments, i, r),
              null != e.trailingComments && _(t, e.trailingComments, i, r),
              t.write(n + "}"))
            : null != e.trailingComments
              ? (t.write(r), _(t, e.trailingComments, i, r), t.write(n + "}"))
              : t.write("}")
          : t.write("}");
      t.indentLevel--;
    },
    Property: function (e, t) {
      e.method || "i" !== e.kind[0]
        ? this.MethodDefinition(e, t)
        : (e.shorthand ||
            (e.computed
              ? (t.write("["), this[e.key.type](e.key, t), t.write("]"))
              : this[e.key.type](e.key, t),
            t.write(": ")),
          this[e.value.type](e.value, t));
    },
    PropertyDefinition: function (e, t) {
      e.static && t.write("static "),
        e.computed && t.write("["),
        this[e.key.type](e.key, t),
        e.computed && t.write("]"),
        null != e.value
          ? (t.write(" = "), this[e.value.type](e.value, t), t.write(";"))
          : "F" !== e.key.type[0] && t.write(";");
    },
    ObjectPattern: function (e, t) {
      if ((t.write("{"), e.properties.length > 0))
        for (
          var n = e.properties, r = n.length, o = 0;
          this[n[o].type](n[o], t), ++o < r;

        )
          t.write(", ");
      t.write("}");
    },
    SequenceExpression: function (e, t) {
      f(t, e.expressions);
    },
    UnaryExpression: function (e, t) {
      if (e.prefix) {
        var n = e.operator,
          r = e.argument,
          o = e.argument.type;
        t.write(n);
        var i = h(t, r, e);
        i ||
          (!(n.length > 1) &&
            ("U" !== o[0] ||
              ("n" !== o[1] && "p" !== o[1]) ||
              !r.prefix ||
              r.operator[0] !== n ||
              ("+" !== n && "-" !== n))) ||
          t.write(" "),
          i
            ? (t.write(n.length > 1 ? " (" : "("), this[o](r, t), t.write(")"))
            : this[o](r, t);
      } else this[e.argument.type](e.argument, t), t.write(e.operator);
    },
    UpdateExpression: function (e, t) {
      e.prefix
        ? (t.write(e.operator), this[e.argument.type](e.argument, t))
        : (this[e.argument.type](e.argument, t), t.write(e.operator));
    },
    AssignmentExpression: function (e, t) {
      this[e.left.type](e.left, t),
        t.write(" " + e.operator + " "),
        this[e.right.type](e.right, t);
    },
    AssignmentPattern: function (e, t) {
      this[e.left.type](e.left, t),
        t.write(" = "),
        this[e.right.type](e.right, t);
    },
    BinaryExpression: (a = function (e, t) {
      var n = "in" === e.operator;
      n && t.write("("),
        g(t, e.left, e, !1),
        t.write(" " + e.operator + " "),
        g(t, e.right, e, !0),
        n && t.write(")");
    }),
    LogicalExpression: a,
    ConditionalExpression: function (e, t) {
      var n = e.test,
        r = t.expressionsPrecedence[n.type];
      r === d || r <= t.expressionsPrecedence.ConditionalExpression
        ? (t.write("("), this[n.type](n, t), t.write(")"))
        : this[n.type](n, t),
        t.write(" ? "),
        this[e.consequent.type](e.consequent, t),
        t.write(" : "),
        this[e.alternate.type](e.alternate, t);
    },
    NewExpression: function (e, t) {
      t.write("new ");
      var n = t.expressionsPrecedence[e.callee.type];
      n === d ||
      n < t.expressionsPrecedence.CallExpression ||
      (function (e) {
        for (var t = e; null != t; ) {
          var n = t.type;
          if ("C" === n[0] && "a" === n[1]) return !0;
          if ("M" !== n[0] || "e" !== n[1] || "m" !== n[2]) return !1;
          t = t.object;
        }
      })(e.callee)
        ? (t.write("("), this[e.callee.type](e.callee, t), t.write(")"))
        : this[e.callee.type](e.callee, t),
        f(t, e.arguments);
    },
    CallExpression: function (e, t) {
      var n = t.expressionsPrecedence[e.callee.type];
      n === d || n < t.expressionsPrecedence.CallExpression
        ? (t.write("("), this[e.callee.type](e.callee, t), t.write(")"))
        : this[e.callee.type](e.callee, t),
        e.optional && t.write("?."),
        f(t, e.arguments);
    },
    ChainExpression: function (e, t) {
      this[e.expression.type](e.expression, t);
    },
    MemberExpression: function (e, t) {
      var n = t.expressionsPrecedence[e.object.type];
      n === d || n < t.expressionsPrecedence.MemberExpression
        ? (t.write("("), this[e.object.type](e.object, t), t.write(")"))
        : this[e.object.type](e.object, t),
        e.computed
          ? (e.optional && t.write("?."),
            t.write("["),
            this[e.property.type](e.property, t),
            t.write("]"))
          : (e.optional ? t.write("?.") : t.write("."),
            this[e.property.type](e.property, t));
    },
    MetaProperty: function (e, t) {
      t.write(e.meta.name + "." + e.property.name, e);
    },
    Identifier: function (e, t) {
      t.write(e.name, e);
    },
    PrivateIdentifier: function (e, t) {
      t.write("#".concat(e.name), e);
    },
    Literal: function (e, t) {
      null != e.raw
        ? t.write(e.raw, e)
        : null != e.regex
          ? this.RegExpLiteral(e, t)
          : null != e.bigint
            ? t.write(e.bigint + "n", e)
            : t.write(r(e.value), e);
    },
    RegExpLiteral: function (e, t) {
      var n = e.regex;
      t.write("/".concat(n.pattern, "/").concat(n.flags), e);
    },
  },
  y = {},
  T = (function () {
    function e(t) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e);
      var n = t ?? y;
      (this.output = ""),
        null != n.output
          ? ((this.output = n.output), (this.write = this.writeToStream))
          : (this.output = ""),
        (this.generator = null != n.generator ? n.generator : E),
        (this.expressionsPrecedence =
          null != n.expressionsPrecedence ? n.expressionsPrecedence : p),
        (this.indent = null != n.indent ? n.indent : "  "),
        (this.lineEnd = null != n.lineEnd ? n.lineEnd : "\n"),
        (this.indentLevel =
          null != n.startingIndentLevel ? n.startingIndentLevel : 0),
        (this.writeComments = !!n.comments && n.comments),
        null != n.sourceMap &&
          ((this.write =
            null == n.output ? this.writeAndMap : this.writeToStreamAndMap),
          (this.sourceMap = n.sourceMap),
          (this.line = 1),
          (this.column = 0),
          (this.lineEndSize = this.lineEnd.split("\n").length - 1),
          (this.mapping = {
            original: null,
            generated: this,
            name: void 0,
            source: n.sourceMap.file || n.sourceMap._file,
          }));
    }
    var t, r;
    return (
      (t = e),
      (r = [
        {
          key: "write",
          value: function (e) {
            this.output += e;
          },
        },
        {
          key: "writeToStream",
          value: function (e) {
            this.output.write(e);
          },
        },
        {
          key: "writeAndMap",
          value: function (e, t) {
            (this.output += e), this.map(e, t);
          },
        },
        {
          key: "writeToStreamAndMap",
          value: function (e, t) {
            this.output.write(e), this.map(e, t);
          },
        },
        {
          key: "map",
          value: function (e, t) {
            if (null != t) {
              var n = t.type;
              if ("L" === n[0] && "n" === n[2])
                return (this.column = 0), void this.line++;
              if (null != t.loc) {
                var r = this.mapping;
                (r.original = t.loc.start),
                  (r.name = t.name),
                  this.sourceMap.addMapping(r);
              }
              if (
                ("T" === n[0] && "E" === n[8]) ||
                ("L" === n[0] && "i" === n[1] && "string" == typeof t.value)
              ) {
                for (
                  var o = e.length, i = this.column, s = this.line, a = 0;
                  a < o;
                  a++
                )
                  "\n" === e[a] ? ((i = 0), s++) : i++;
                return (this.column = i), void (this.line = s);
              }
            }
            var c = e.length,
              u = this.lineEnd;
            c > 0 &&
              (this.lineEndSize > 0 &&
              (1 === u.length ? e[c - 1] === u : e.endsWith(u))
                ? ((this.line += this.lineEndSize), (this.column = 0))
                : (this.column += c));
          },
        },
        {
          key: "toString",
          value: function () {
            return this.output;
          },
        },
      ]) && n(t.prototype, r),
      e
    );
  })();
