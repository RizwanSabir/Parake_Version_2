// vendor/other/module-23819.js — webpack module 23819
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = "dataloader",
  a = "auto.db.otel.dataloader";
function c(e) {
  return (function (e) {
    return "Module" === e[Symbol.toStringTag];
  })(e)
    ? e.default
    : e;
}
function u(e, t) {
  const n = e.name;
  return n ? `${s}.${t} ${n}` : `${s}.${t}`;
}
function l(e) {
  if ("load" === e || "loadMany" === e || "batch" === e) return "cache.get";
}
function d(e) {
  return Array.isArray(e)
    ? e.map((e) => String(e))
    : null == e
      ? void 0
      : [String(e)];
}
class p extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-dataloader", i.SDK_VERSION, e);
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        s,
        [">=2.0.0 <3"],
        (e) => {
          const t = c(e);
          return (
            this._patchLoad(t.prototype),
            this._patchLoadMany(t.prototype),
            this._patchPrime(t.prototype),
            this._patchClear(t.prototype),
            this._patchClearAll(t.prototype),
            this._getPatchedConstructor(t)
          );
        },
        (e) => {
          const t = c(e);
          ["load", "loadMany", "prime", "clear", "clearAll"].forEach((e) => {
            r.isWrapped(t.prototype[e]) && this._unwrap(t.prototype, e);
          });
        },
      ),
    ];
  }
  _wrapBatchLoadFn(e) {
    const t = this;
    return function (...n) {
      return t.isEnabled()
        ? i.startSpan(
            {
              name: u(this, "batch"),
              links: this._batch?.spanLinks,
              attributes: {
                [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a,
                [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: l("batch"),
                [o.CACHE_KEY]: d(n[0]),
              },
              onlyIfParent: !0,
            },
            () => e.apply(this, n),
          )
        : e.call(this, ...n);
    };
  }
  _getPatchedConstructor(e) {
    const t = this,
      n = e.prototype;
    if (!t.isEnabled()) return e;
    function o(...n) {
      return (
        "function" == typeof n[0] &&
          (r.isWrapped(n[0]) && t._unwrap(n, 0),
          (n[0] = t._wrapBatchLoadFn(n[0]))),
        e.apply(this, n)
      );
    }
    return (o.prototype = n), o;
  }
  _patchLoad(e) {
    r.isWrapped(e.load) && this._unwrap(e, "load"),
      this._wrap(e, "load", this._getPatchedLoad.bind(this));
  }
  _getPatchedLoad(e) {
    return function (...t) {
      return i.startSpan(
        {
          name: u(this, "load"),
          kind: i.SPAN_KIND.CLIENT,
          attributes: {
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a,
            [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: l("load"),
            [o.CACHE_KEY]: d(t[0]),
          },
          onlyIfParent: !0,
        },
        (n) => {
          const r = e.call(this, ...t);
          return (
            this._batch &&
              n.isRecording() &&
              (this._batch.spanLinks || (this._batch.spanLinks = []),
              this._batch.spanLinks.push({
                context: n.spanContext(),
              })),
            r
          );
        },
      );
    };
  }
  _patchLoadMany(e) {
    r.isWrapped(e.loadMany) && this._unwrap(e, "loadMany"),
      this._wrap(e, "loadMany", this._getPatchedLoadMany.bind(this));
  }
  _getPatchedLoadMany(e) {
    return function (...t) {
      return i.startSpan(
        {
          name: u(this, "loadMany"),
          kind: i.SPAN_KIND.CLIENT,
          attributes: {
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a,
            [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: l("loadMany"),
            [o.CACHE_KEY]: d(t[0]),
          },
          onlyIfParent: !0,
        },
        () => e.call(this, ...t),
      );
    };
  }
  _patchPrime(e) {
    r.isWrapped(e.prime) && this._unwrap(e, "prime"),
      this._wrap(e, "prime", this._getPatchedPrime.bind(this));
  }
  _getPatchedPrime(e) {
    return function (...t) {
      return i.startSpan(
        {
          name: u(this, "prime"),
          kind: i.SPAN_KIND.CLIENT,
          attributes: {
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a,
            [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: l("prime"),
          },
          onlyIfParent: !0,
        },
        () => e.call(this, ...t),
      );
    };
  }
  _patchClear(e) {
    r.isWrapped(e.clear) && this._unwrap(e, "clear"),
      this._wrap(e, "clear", this._getPatchedClear.bind(this));
  }
  _getPatchedClear(e) {
    return function (...t) {
      return i.startSpan(
        {
          name: u(this, "clear"),
          kind: i.SPAN_KIND.CLIENT,
          attributes: {
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a,
            [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: l("clear"),
          },
          onlyIfParent: !0,
        },
        () => e.call(this, ...t),
      );
    };
  }
  _patchClearAll(e) {
    r.isWrapped(e.clearAll) && this._unwrap(e, "clearAll"),
      this._wrap(e, "clearAll", this._getPatchedClearAll.bind(this));
  }
  _getPatchedClearAll(e) {
    return function (...t) {
      return i.startSpan(
        {
          name: u(this, "clearAll"),
          kind: i.SPAN_KIND.CLIENT,
          attributes: {
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a,
            [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: l("clearAll"),
          },
          onlyIfParent: !0,
        },
        () => e.call(this, ...t),
      );
    };
  }
}
t.DataloaderInstrumentation = p;
