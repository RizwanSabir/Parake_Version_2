// vendor/other/module-93109.js — webpack module 93109
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(60261 /* vendor/other/module-60261 */),
  i = n(15006 /* vendor/other/module-15006 */),
  s = n(83044 /* vendor/other/module-83044 */),
  a = n(11190 /* vendor/other/module-11190 */),
  c = n(30398 /* vendor/other/module-30398 */),
  u = n(77198 /* vendor/other/module-77198 */),
  l = n(96137 /* vendor/other/module-96137 */),
  d = n(5545 /* vendor/other/module-5545 */),
  p = { ignoreResolveSpans: !1 },
  f = [">=14.0.0 <17"];
class h extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-graphql", l.SDK_VERSION, {
      ...p,
      ...e,
    });
  }
  setConfig(e = {}) {
    super.setConfig({ ...p, ...e });
  }
  init() {
    const e = new r.InstrumentationNodeModuleDefinition("graphql", f);
    return (
      e.files.push(this._addPatchingExecute()),
      e.files.push(this._addPatchingParser()),
      e.files.push(this._addPatchingValidate()),
      e
    );
  }
  _addPatchingExecute() {
    return new o.InstrumentationNodeModuleFile(
      "graphql/execution/execute.js",
      f,
      (e) => (
        r.isWrapped(e.execute) && this._unwrap(e, "execute"),
        this._wrap(e, "execute", this._patchExecute(e.defaultFieldResolver)),
        e
      ),
      (e) => {
        e && this._unwrap(e, "execute");
      },
    );
  }
  _addPatchingParser() {
    return new o.InstrumentationNodeModuleFile(
      "graphql/language/parser.js",
      f,
      (e) => (
        r.isWrapped(e.parse) && this._unwrap(e, "parse"),
        this._wrap(e, "parse", this._patchParse()),
        e
      ),
      (e) => {
        e && this._unwrap(e, "parse");
      },
    );
  }
  _addPatchingValidate() {
    return new o.InstrumentationNodeModuleFile(
      "graphql/validation/validate.js",
      f,
      (e) => (
        r.isWrapped(e.validate) && this._unwrap(e, "validate"),
        this._wrap(e, "validate", this._patchValidate()),
        e
      ),
      (e) => {
        e && this._unwrap(e, "validate");
      },
    );
  }
  _patchExecute(e) {
    const t = this;
    return function (n) {
      return function () {
        let o;
        if (arguments.length >= 2) {
          const n = arguments;
          o = t._wrapExecuteArgs(
            n[0],
            n[1],
            n[2],
            n[3],
            n[4],
            n[5],
            n[6],
            n[7],
            e,
          );
        } else {
          const n = arguments[0];
          o = t._wrapExecuteArgs(
            n.schema,
            n.document,
            n.rootValue,
            n.contextValue,
            n.variableValues,
            n.operationName,
            n.fieldResolver,
            n.typeResolver,
            e,
          );
        }
        const i = u.getOperation(o.document, o.operationName),
          s = t._createExecuteSpan(i, o);
        return (
          (o.contextValue[a.OTEL_GRAPHQL_DATA_SYMBOL] = {
            source: o.document
              ? o.document || o.document[a.OTEL_GRAPHQL_DATA_SYMBOL]
              : void 0,
            span: s,
            fields: {},
          }),
          l.withActiveSpan(s, () =>
            r.safeExecuteInTheMiddle(
              () => n.apply(this, [o]),
              (e, n) => {
                t._handleExecutionResult(s, e, n);
              },
            ),
          )
        );
      };
    };
  }
  _handleExecutionResult(e, t, n) {
    void 0 === n || t
      ? u.endSpan(e, t)
      : u.isPromise(n)
        ? n.then(
            (t) => {
              this._updateSpanFromResult(e, t), u.endSpan(e);
            },
            (t) => {
              u.endSpan(e, t);
            },
          )
        : (this._updateSpanFromResult(e, n), u.endSpan(e));
  }
  _updateSpanFromResult(e, t) {
    if (
      (t.errors?.length &&
        !l.spanToJSON(e).status &&
        e.setStatus({ code: l.SPAN_STATUS_ERROR }),
      !this.getConfig().useOperationNameForRootSpan)
    )
      return;
    const n = l.spanToJSON(e).data,
      r = n[s.AttributeNames.OPERATION_TYPE],
      o = n[s.AttributeNames.OPERATION_NAME];
    if (!r) return;
    const i = l.getRootSpan(e),
      a =
        l.spanToJSON(i).data[d.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION] ||
        [],
      c = o ? `${r} ${o}` : `${r}`;
    Array.isArray(a)
      ? (a.push(c),
        i.setAttribute(d.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, a))
      : "string" == typeof a
        ? i.setAttribute(d.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, [a, c])
        : i.setAttribute(d.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, c),
      l.spanToJSON(i).data["original-description"] ||
        i.setAttribute("original-description", l.spanToJSON(i).description),
      i.updateName(
        `${l.spanToJSON(i).data["original-description"]} (${(function (e) {
          if (Array.isArray(e)) {
            const t = e.slice().sort();
            return t.length <= 5
              ? t.join(", ")
              : `${t.slice(0, 5).join(", ")}, +${t.length - 5}`;
          }
          return `${e}`;
        })(a)})`,
      );
  }
  _patchParse() {
    const e = this;
    return function (t) {
      return function (n, r) {
        return e._parse(this, t, n, r);
      };
    };
  }
  _patchValidate() {
    const e = this;
    return function (t) {
      return function (n, r, o, i, s) {
        return e._validate(this, t, n, r, o, s, i);
      };
    };
  }
  _parse(e, t, n, o) {
    const s = l.startInactiveSpan({ name: i.SpanNames.PARSE });
    return l.withActiveSpan(s, () =>
      r.safeExecuteInTheMiddle(
        () => t.call(e, n, o),
        (e, t) => {
          t &&
            (u.getOperation(t)
              ? t.loc && u.addSpanSource(s, t.loc)
              : s.updateName(i.SpanNames.SCHEMA_PARSE)),
            u.endSpan(s, e);
        },
      ),
    );
  }
  _validate(e, t, n, o, s, a, c) {
    const d = l.startInactiveSpan({ name: i.SpanNames.VALIDATE });
    return l.withActiveSpan(d, () =>
      r.safeExecuteInTheMiddle(
        () => t.call(e, n, o, s, c, a),
        (e, t) => {
          o.loc || d.updateName(i.SpanNames.SCHEMA_VALIDATE), u.endSpan(d, e);
        },
      ),
    );
  }
  _createExecuteSpan(e, t) {
    const n = l.startInactiveSpan({
      name: i.SpanNames.EXECUTE,
      attributes: {
        [l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.graphql.otel.graphql",
      },
    });
    if (e) {
      const { operation: t, name: r } = e;
      n.setAttribute(s.AttributeNames.OPERATION_TYPE, t);
      const o = r?.value;
      o
        ? (n.setAttribute(s.AttributeNames.OPERATION_NAME, o),
          n.updateName(`${t} ${o}`))
        : n.updateName(t);
    } else {
      let e = " ";
      t.operationName && (e = ` "${t.operationName}" `),
        (e = c.OPERATION_NOT_SUPPORTED.replace("$operationName$", e)),
        n.setAttribute(s.AttributeNames.OPERATION_NAME, e);
    }
    return t.document?.loc && u.addSpanSource(n, t.document.loc), n;
  }
  _wrapExecuteArgs(e, t, n, r, o, i, s, c, l) {
    if (
      (r || (r = {}),
      r[a.OTEL_GRAPHQL_DATA_SYMBOL] || this.getConfig().ignoreResolveSpans)
    )
      return {
        schema: e,
        document: t,
        rootValue: n,
        contextValue: r,
        variableValues: o,
        operationName: i,
        fieldResolver: s,
        typeResolver: c,
      };
    const d = null == s,
      p = s ?? l;
    return (
      (s = u.wrapFieldResolver(() => this.getConfig(), p, d)),
      e &&
        (u.wrapFields(e.getQueryType(), () => this.getConfig()),
        u.wrapFields(e.getMutationType(), () => this.getConfig())),
      {
        schema: e,
        document: t,
        rootValue: n,
        contextValue: r,
        variableValues: o,
        operationName: i,
        fieldResolver: s,
        typeResolver: c,
      }
    );
  }
}
t.GraphQLInstrumentation = h;
