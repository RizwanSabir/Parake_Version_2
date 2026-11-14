// vendor/other/module-73749.js — webpack module 73749
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(27864 /* vendor/other/module-27864 */),
  { parse: o } = n(16315 /* vendor/other/module-16315 */),
  { generate: i } = n(14891 /* vendor/other/module-14891 */),
  s = n(83337 /* vendor/other/module-83337 */);
let a, c;
e.exports = {
  Transformer: class {
    #o = null;
    #i = null;
    #s = null;
    #e = [];
    #t = null;
    #r = {};
    constructor(e, t, n, r, o, i = {}) {
      (this.#o = e),
        (this.#i = t),
        (this.#s = n),
        (this.#e = r),
        (this.#t = o),
        (this.#r = i);
    }
    free() {}
    get moduleName() {
      return this.#o;
    }
    get filePath() {
      return this.#s;
    }
    transform(e, t, u) {
      if ((Buffer.isBuffer(e) && (e = e.toString()), !e)) return { code: e };
      let l,
        d = {},
        p = 0;
      const f = { ...s, ...this.#r, defaults: { ...s } };
      for (const n of this.#e) {
        const { astQuery: i, functionQuery: s = {} } = n;
        if (!l) {
          const n = {
            loc: !0,
            ranges: !0,
            raw: !0,
            module: "esm" === t,
          };
          try {
            l = o(e, n);
          } catch {
            l = o(e, { ...n, module: !n.module });
          }
          "esm" === t && (d = this.#a(l));
        }
        const a = this.#c(s, d),
          c = i || this.#u(a),
          u = {
            ...n,
            dcModule: this.#t,
            moduleType: t,
            moduleVersion: this.#i,
            functionQuery: a,
            transforms: f,
          };
        (u.operator = this.#l(u)),
          r.traverse(l, r.parse(c), (...e) => {
            p++, this.#d(u, ...e);
          });
      }
      if (0 === p && this.#e.length > 0) {
        const e = this.#e.map(({ astQuery: e, functionQuery: t = {} }) => {
          if (e) return e;
          const n = this.#c(t, d),
            r =
              (o = t).methodName ||
              o.privateMethodName ||
              o.functionName ||
              o.expressionName ||
              "constructor";
          var o;
          const i = t.className || t.functionName || t.expressionName,
            s = n.className || n.functionName || n.expressionName;
          return i && i !== s ? `${i} (local name: ${s})` : r;
        });
        throw new Error(
          `Failed to find injection points for: ${JSON.stringify(e)}`,
        );
      }
      if (l) {
        (a ??= n(29768 /* vendor/other/module-29768 */).SourceMapConsumer),
          (c ??= n(29768 /* vendor/other/module-29768 */).SourceMapGenerator);
        const e = `${this.#o}/${this.#s}`;
        let t;
        if (u) {
          const n = new a(u);
          (n.file = e), (t = c.fromSourceMap(n));
        } else t = new c({ file: e });
        return { code: i(l, { sourceMap: t }), map: t.toString() };
      }
      return { code: e };
    }
    #d(e, ...t) {
      const n = e.transforms[e.operator],
        { index: r = 0 } = e.functionQuery,
        [o] = t,
        i = o.init?.type || o.type;
      if ("ClassDeclaration" !== i && "ClassExpression" !== i) {
        if ("VariableDeclarator" === o.type) return;
        if (
          ((e.functionIndex = ++e.functionIndex || 0),
          null !== r && r !== e.functionIndex)
        )
          return;
      }
      n(e, ...t);
    }
    #l({ transform: e, functionQuery: { kind: t } }) {
      if (e) return e;
      switch (t) {
        case "Async":
          return "tracePromise";
        case "Auto":
          return "traceAuto";
        case "Callback":
          return "traceCallback";
        default:
          return "traceSync";
      }
    }
    #a(e) {
      const t = {};
      for (const n of e.body)
        if ("ExportNamedDeclaration" === n.type && !n.source)
          for (const e of n.specifiers)
            if (e.exported && e.local) {
              const n = e.exported.name ?? e.exported.value,
                r = e.local.name ?? e.local.value;
              n && r && (t[n] = r);
            }
      return t;
    }
    #c(e, t) {
      if (!e.isExportAlias) return e;
      const { functionName: n, expressionName: r, className: o } = e;
      return n && t[n]
        ? { ...e, functionName: t[n] }
        : r && t[r]
          ? { ...e, expressionName: t[r] }
          : o && t[o]
            ? { ...e, className: t[o] }
            : e;
    }
    #u(e) {
      const {
          functionName: t,
          expressionName: n,
          className: r,
          objectName: o,
          propertyName: i,
        } = e,
        s = e.privateMethodName ? "PrivateIdentifier" : "Identifier",
        a = [];
      let c = e.methodName || e.privateMethodName;
      if (
        (r
          ? ((c ??= "constructor"),
            a.push(
              `[id.name="${r}"]`,
              `[id.name="${r}"] > ClassExpression`,
              `[id.name="${r}"] > ClassBody > [key.name="${c}"][key.type=${s}] > [async]`,
              `[id.name="${r}"] > ClassExpression > ClassBody > [key.name="${c}"][key.type=${s}] > [async]`,
            ))
          : c &&
            a.push(
              `ClassBody > [key.name="${c}"][key.type=${s}] > [async]`,
              `Property[key.name="${c}"][key.type=${s}] > [async]`,
            ),
        t
          ? a.push(`FunctionDeclaration[id.name="${t}"][async]`)
          : n &&
            a.push(
              `FunctionExpression[id.name="${n}"][async]`,
              `ArrowFunctionExpression[id.name="${n}"][async]`,
              `VariableDeclarator[id.name="${n}"] > FunctionExpression[async]`,
              `VariableDeclarator[id.name="${n}"] > ArrowFunctionExpression[async]`,
              `AssignmentExpression[left.property.name="${n}"] > FunctionExpression[async]`,
              `AssignmentExpression[left.property.name="${n}"] > ArrowFunctionExpression[async]`,
              `AssignmentExpression[left.name="${n}"] > FunctionExpression[async]`,
              `AssignmentExpression[left.name="${n}"] > ArrowFunctionExpression[async]`,
            ),
        o || i)
      ) {
        if (!o || !i)
          throw new Error(
            `functionQuery: 'objectName' and 'propertyName' must be used together (got objectName=${o}, propertyName=${i})`,
          );
        const e =
          "this" === o
            ? "left.object.type=ThisExpression"
            : `left.object.name="${o}"`;
        a.push(
          `AssignmentExpression[${e}][left.property.name="${i}"] > [async]`,
        );
      }
      return a.join(", ");
    }
  },
};
