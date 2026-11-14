// vendor/other/module-26806.js — webpack module 26806
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(64673 /* vendor/other/module-64673 */),
  s = n(69390 /* vendor/other/module-69390 */),
  a = "auto.db.otel.mongoose",
  c = [
    "deleteOne",
    "deleteMany",
    "find",
    "findOne",
    "estimatedDocumentCount",
    "countDocuments",
    "distinct",
    "where",
    "$where",
    "findOneAndUpdate",
    "findOneAndDelete",
    "findOneAndReplace",
  ],
  u = ["remove", "count", "findOneAndRemove", ...c],
  l = ["count", "findOneAndRemove", ...c],
  d = [...c];
function p(e) {
  return e
    ? e.startsWith("6.") || e.startsWith("5.")
      ? u
      : e.startsWith("7.")
        ? l
        : d
    : c;
}
function f(e) {
  return (e && (e.startsWith("5.") || e.startsWith("6."))) || !1;
}
function h(e) {
  return !(!e || !e.startsWith("8.")) && parseInt(e.split(".")[1], 10) >= 21;
}
const g = Symbol("stored-parent-span"),
  m = Symbol("already-instrumented");
class _ extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-mongoose", o.SDK_VERSION, e);
  }
  init() {
    return new r.InstrumentationNodeModuleDefinition(
      "mongoose",
      [">=5.9.7 <9.7.0"],
      this.patch.bind(this),
      this.unpatch.bind(this),
    );
  }
  patch(e, t) {
    const n = "Module" === e[Symbol.toStringTag] && e.default ? e.default : e;
    return (
      this._wrap(n.Model.prototype, "save", this.patchOnModelMethods("save")),
      (n.Model.prototype.$save = n.Model.prototype.save),
      f(t) &&
        this._wrap(
          n.Model.prototype,
          "remove",
          this.patchOnModelMethods("remove"),
        ),
      h(t) &&
        (this._wrap(
          n.Model.prototype,
          "updateOne",
          this._patchDocumentUpdateMethods("updateOne"),
        ),
        this._wrap(
          n.Model.prototype,
          "deleteOne",
          this._patchDocumentUpdateMethods("deleteOne"),
        )),
      this._wrap(n.Query.prototype, "exec", this.patchQueryExec()),
      this._wrap(n.Aggregate.prototype, "exec", this.patchAggregateExec()),
      p(t).forEach((e) => {
        this._wrap(n.Query.prototype, e, this.patchAndCaptureSpanContext(e));
      }),
      this._wrap(n.Model, "aggregate", this.patchModelAggregate()),
      this._wrap(n.Model, "insertMany", this.patchModelStatic("insertMany")),
      this._wrap(n.Model, "bulkWrite", this.patchModelStatic("bulkWrite")),
      n
    );
  }
  unpatch(e, t) {
    const n = "Module" === e[Symbol.toStringTag] && e.default ? e.default : e,
      r = p(t);
    this._unwrap(n.Model.prototype, "save"),
      (n.Model.prototype.$save = n.Model.prototype.save),
      f(t) && this._unwrap(n.Model.prototype, "remove"),
      h(t) &&
        (this._unwrap(n.Model.prototype, "updateOne"),
        this._unwrap(n.Model.prototype, "deleteOne")),
      this._unwrap(n.Query.prototype, "exec"),
      this._unwrap(n.Aggregate.prototype, "exec"),
      r.forEach((e) => {
        this._unwrap(n.Query.prototype, e);
      }),
      this._unwrap(n.Model, "aggregate"),
      this._unwrap(n.Model, "insertMany"),
      this._unwrap(n.Model, "bulkWrite");
  }
  patchAggregateExec() {
    const e = this;
    return (t) =>
      function (n) {
        const r = this[g],
          o = i.startMongooseLegacySpan({
            collection: this._model.collection,
            modelName: this._model?.modelName,
            operation: "aggregate",
            origin: a,
            parentSpan: r,
          });
        return e._handleResponse(o, t, this, arguments, n);
      };
  }
  patchQueryExec() {
    const e = this;
    return (t) =>
      function (n) {
        if (this[m]) return t.apply(this, arguments);
        const r = this[g],
          o = i.startMongooseLegacySpan({
            collection: this.mongooseCollection,
            modelName: this.model.modelName,
            operation: this.op,
            origin: a,
            parentSpan: r,
          });
        return e._handleResponse(o, t, this, arguments, n);
      };
  }
  patchOnModelMethods(e) {
    const t = this;
    return (n) =>
      function (r, o) {
        const s = i.startMongooseLegacySpan({
          collection: this.constructor.collection,
          modelName: this.constructor.modelName,
          operation: e,
          origin: a,
        });
        return (
          r instanceof Function && (o = r),
          t._handleResponse(s, n, this, arguments, o)
        );
      };
  }
  _patchDocumentUpdateMethods(e) {
    const t = this;
    return (n) =>
      function (r, o, s) {
        let c = s;
        "function" == typeof r ? (c = r) : "function" == typeof o && (c = o);
        const u = i.startMongooseLegacySpan({
            collection: this.constructor.collection,
            modelName: this.constructor.modelName,
            operation: e,
            origin: a,
          }),
          l = t._handleResponse(u, n, this, arguments, c);
        return l && "object" == typeof l && (l[m] = !0), l;
      };
  }
  patchModelStatic(e) {
    const t = this;
    return (n) =>
      function (r, o, s) {
        "function" == typeof o && (s = o);
        const c = i.startMongooseLegacySpan({
          collection: this.collection,
          modelName: this.modelName,
          operation: e,
          origin: a,
        });
        return t._handleResponse(c, n, this, arguments, s);
      };
  }
  patchModelAggregate() {
    return (e) =>
      function () {
        const t = o.getActiveSpan(),
          n = e.apply(this, arguments);
        return n && (n[g] = t), n;
      };
  }
  patchAndCaptureSpanContext(e) {
    return (e) =>
      function () {
        return (this[g] = o.getActiveSpan()), e.apply(this, arguments);
      };
  }
  _handleResponse(e, t, n, r, i) {
    return o.withActiveSpan(e, () => {
      if (i instanceof Function) return s.handleCallbackResponse(i, t, n, e, r);
      {
        const o = t.apply(n, r);
        return s.handlePromiseResponse(o, e);
      }
    });
  }
}
(t.MongooseInstrumentation = _),
  (t._ALREADY_INSTRUMENTED = m),
  (t._STORED_PARENT_SPAN = g);
