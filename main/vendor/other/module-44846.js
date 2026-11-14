// vendor/other/module-44846.js — webpack module 44846
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { BasicTracerProvider: () => Ee, SamplingDecision: () => S });
const r = Function.prototype.toString,
  o = r.call(Object),
  i = Object.getPrototypeOf,
  s = Object.prototype,
  a = s.hasOwnProperty,
  c = Symbol ? Symbol.toStringTag : void 0,
  u = s.toString;
function l(e) {
  if (
    !(function (e) {
      return null != e && "object" == typeof e;
    })(e) ||
    "[object Object]" !==
      (function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : c && c in Object(e)
            ? (function (e) {
                const t = a.call(e, c),
                  n = e[c];
                let r = !1;
                try {
                  (e[c] = void 0), (r = !0);
                } catch {}
                const o = u.call(e);
                return r && (t ? (e[c] = n) : delete e[c]), o;
              })(e)
            : (function (e) {
                return u.call(e);
              })(e);
      })(e)
  )
    return !1;
  const t = i(e);
  if (null === t) return !0;
  const n = a.call(t, "constructor") && t.constructor;
  return "function" == typeof n && n instanceof n && r.call(n) === o;
}
function d(e) {
  return h(e) ? e.slice() : e;
}
function p(e, t, n = 0, r) {
  let o;
  if (!(n > 20)) {
    if ((n++, _(e) || _(t) || g(t))) o = d(t);
    else if (h(e)) {
      if (((o = e.slice()), h(t)))
        for (let e = 0, n = t.length; e < n; e++) o.push(d(t[e]));
      else if (m(t)) {
        const e = Object.keys(t);
        for (let n = 0, r = e.length; n < r; n++) {
          const r = e[n];
          "__proto__" !== r &&
            "constructor" !== r &&
            "prototype" !== r &&
            (o[r] = d(t[r]));
        }
      }
    } else if (m(e))
      if (m(t)) {
        if (
          !(function (e, t) {
            return !(!l(e) || !l(t));
          })(e, t)
        )
          return t;
        o = Object.assign({}, e);
        const i = Object.keys(t);
        for (let s = 0, a = i.length; s < a; s++) {
          const a = i[s];
          if ("__proto__" === a || "constructor" === a || "prototype" === a)
            continue;
          const c = t[a];
          if (_(c)) void 0 === c ? delete o[a] : (o[a] = c);
          else {
            const i = o[a],
              s = c;
            if (f(e, a, r) || f(t, a, r)) delete o[a];
            else {
              if (m(i) && m(s)) {
                const n = r.get(i) || [],
                  o = r.get(s) || [];
                n.push({ obj: e, key: a }),
                  o.push({ obj: t, key: a }),
                  r.set(i, n),
                  r.set(s, o);
              }
              o[a] = p(o[a], c, n, r);
            }
          }
        }
      } else o = t;
    return o;
  }
}
function f(e, t, n) {
  const r = n.get(e[t]) || [];
  for (let n = 0, o = r.length; n < o; n++) {
    const o = r[n];
    if (o.key === t && o.obj === e) return !0;
  }
  return !1;
}
function h(e) {
  return Array.isArray(e);
}
function g(e) {
  return "function" == typeof e;
}
function m(e) {
  return !_(e) && !h(e) && !g(e) && "object" == typeof e;
}
function _(e) {
  return (
    "string" == typeof e ||
    "number" == typeof e ||
    "boolean" == typeof e ||
    void 0 === e ||
    e instanceof Date ||
    e instanceof RegExp ||
    null === e
  );
}
var S,
  E = n(2339 /* vendor/other/module-2339 */),
  y = n(39023 /* external/util */);
function T(e) {
  const t = process.env[e];
  if (null == t || "" === t.trim()) return;
  const n = Number(t);
  if (!isNaN(n)) return n;
  E.s.warn(
    `Unknown value ${(0, y.inspect)(t)} for ${e}, expected a number, using defaults`,
  );
}
!(function (e) {
  (e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
    (e[(e.RECORD = 1)] = "RECORD"),
    (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED");
})(S || (S = {}));
class b {
  shouldSample() {
    return { decision: S.RECORD_AND_SAMPLED };
  }
  toString() {
    return "AlwaysOnSampler";
  }
}
class I {
  shouldSample() {
    return { decision: S.NOT_RECORD };
  }
  toString() {
    return "AlwaysOffSampler";
  }
}
var v = n(7353 /* vendor/other/module-7353 */),
  A = n(71664 /* vendor/other/module-71664 */),
  N = n(14138 /* vendor/other/module-14138 */);
function R(e) {
  try {
    ((e) => {
      E.s.error(
        (function (e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(
                (function (e) {
                  const t = {};
                  let n = e;
                  for (; null !== n; )
                    Object.getOwnPropertyNames(n).forEach((e) => {
                      if (t[e]) return;
                      const r = n[e];
                      r && (t[e] = String(r));
                    }),
                      (n = Object.getPrototypeOf(n));
                  return t;
                })(e),
              );
        })(e),
      );
    })(e);
  } catch {}
}
class C {
  _root;
  _remoteParentSampled;
  _remoteParentNotSampled;
  _localParentSampled;
  _localParentNotSampled;
  constructor(e) {
    (this._root = e.root),
      this._root ||
        (R(new Error("ParentBasedSampler must have a root sampler configured")),
        (this._root = new b())),
      (this._remoteParentSampled = e.remoteParentSampled ?? new b()),
      (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new I()),
      (this._localParentSampled = e.localParentSampled ?? new b()),
      (this._localParentNotSampled = e.localParentNotSampled ?? new I());
  }
  shouldSample(e, t, n, r, o, i) {
    const s = v.u.getSpanContext(e);
    return s && (0, A.YA)(s)
      ? s.isRemote
        ? s.traceFlags & N.X.SAMPLED
          ? this._remoteParentSampled.shouldSample(e, t, n, r, o, i)
          : this._remoteParentNotSampled.shouldSample(e, t, n, r, o, i)
        : s.traceFlags & N.X.SAMPLED
          ? this._localParentSampled.shouldSample(e, t, n, r, o, i)
          : this._localParentNotSampled.shouldSample(e, t, n, r, o, i)
      : this._root.shouldSample(e, t, n, r, o, i);
  }
  toString() {
    return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
  }
}
class O {
  _ratio;
  _upperBound;
  constructor(e = 0) {
    (this._ratio = this._normalize(e)),
      (this._upperBound =
        1 === this._ratio ? 4294967296 : Math.floor(4294967295 * this._ratio));
  }
  shouldSample(e, t) {
    return {
      decision:
        (0, A.hX)(t) && this._accumulate(t) < this._upperBound
          ? S.RECORD_AND_SAMPLED
          : S.NOT_RECORD,
    };
  }
  toString() {
    return `TraceIdRatioBased{${this._ratio}}`;
  }
  _normalize(e) {
    return "number" != typeof e || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
  }
  _accumulate(e) {
    let t = 0;
    for (let n = 0; n < 32; n += 8) {
      let r = 0;
      for (let t = 0; t < 8; t++) {
        const o = e.charCodeAt(n + t);
        r = (r << 4) | (o < 58 ? o - 48 : o < 71 ? o - 55 : o - 87);
      }
      t = (t ^ r) >>> 0;
    }
    return t;
  }
}
var w;
function k() {
  const e =
    (function (e) {
      const t = process.env[e];
      if (null != t && "" !== t.trim()) return t;
    })("OTEL_TRACES_SAMPLER") ?? w.ParentBasedAlwaysOn;
  switch (e) {
    case w.AlwaysOn:
      return new b();
    case w.AlwaysOff:
      return new I();
    case w.ParentBasedAlwaysOn:
      return new C({ root: new b() });
    case w.ParentBasedAlwaysOff:
      return new C({ root: new I() });
    case w.TraceIdRatio:
      return new O(P());
    case w.ParentBasedTraceIdRatio:
      return new C({ root: new O(P()) });
    default:
      return (
        E.s.error(
          `OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${w.ParentBasedAlwaysOn}".`,
        ),
        new C({ root: new b() })
      );
  }
}
function P() {
  const e = T("OTEL_TRACES_SAMPLER_ARG");
  return null == e
    ? (E.s.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1."), 1)
    : e < 0 || e > 1
      ? (E.s.error(
          `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to 1.`,
        ),
        1)
      : e;
}
!(function (e) {
  (e.AlwaysOff = "always_off"),
    (e.AlwaysOn = "always_on"),
    (e.ParentBasedAlwaysOff = "parentbased_always_off"),
    (e.ParentBasedAlwaysOn = "parentbased_always_on"),
    (e.ParentBasedTraceIdRatio = "parentbased_traceidratio"),
    (e.TraceIdRatio = "traceidratio");
})(w || (w = {}));
const L = 1 / 0;
var x = n(36182 /* vendor/other/module-36182 */),
  M = n(17422 /* vendor/other/module-17422 */),
  D = n(13241 /* vendor/other/module-13241 */);
let U;
function B() {
  if (void 0 === U)
    try {
      const e = globalThis.process.argv0;
      U = e ? `unknown_service:${e}` : "unknown_service";
    } catch {
      U = "unknown_service";
    }
  return U;
}
const G = (e) =>
  null !== e && "object" == typeof e && "function" == typeof e.then;
class F {
  _rawAttributes;
  _asyncAttributesPending = !1;
  _schemaUrl;
  _memoizedAttributes;
  static FromAttributeList(e, t) {
    const n = new F({}, t);
    return (
      (n._rawAttributes = j(e)),
      (n._asyncAttributesPending = e.filter(([e, t]) => G(t)).length > 0),
      n
    );
  }
  constructor(e, t) {
    const n = e.attributes ?? {};
    (this._rawAttributes = Object.entries(n).map(
      ([e, t]) => (G(t) && (this._asyncAttributesPending = !0), [e, t]),
    )),
      (this._rawAttributes = j(this._rawAttributes)),
      (this._schemaUrl = (function (e) {
        if ("string" == typeof e || void 0 === e) return e;
        E.s.warn(
          "Schema URL must be string or undefined, got %s. Schema URL will be ignored.",
          e,
        );
      })(t?.schemaUrl));
  }
  get asyncAttributesPending() {
    return this._asyncAttributesPending;
  }
  async waitForAsyncAttributes() {
    if (this.asyncAttributesPending) {
      for (let e = 0; e < this._rawAttributes.length; e++) {
        const [t, n] = this._rawAttributes[e];
        this._rawAttributes[e] = [t, G(n) ? await n : n];
      }
      this._asyncAttributesPending = !1;
    }
  }
  get attributes() {
    if (
      (this.asyncAttributesPending &&
        E.s.error(
          "Accessing resource attributes before async attributes settled",
        ),
      this._memoizedAttributes)
    )
      return this._memoizedAttributes;
    const e = {};
    for (const [t, n] of this._rawAttributes)
      G(n)
        ? E.s.debug(`Unsettled resource attribute ${t} skipped`)
        : null != n && (e[t] ??= n);
    return this._asyncAttributesPending || (this._memoizedAttributes = e), e;
  }
  getRawAttributes() {
    return this._rawAttributes;
  }
  get schemaUrl() {
    return this._schemaUrl;
  }
  merge(e) {
    if (null == e) return this;
    const t = (function (e, t) {
        const n = e?.schemaUrl,
          r = t?.schemaUrl;
        return void 0 === n || "" === n
          ? r
          : void 0 === r || "" === r || n === r
            ? n
            : void E.s.warn(
                'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
                n,
                r,
              );
      })(this, e),
      n = t ? { schemaUrl: t } : void 0;
    return F.FromAttributeList(
      [...e.getRawAttributes(), ...this.getRawAttributes()],
      n,
    );
  }
}
function j(e) {
  return e.map(([e, t]) =>
    G(t)
      ? [
          e,
          t.catch((t) => {
            E.s.debug(
              "promise rejection for resource attribute: %s - %s",
              e,
              t,
            );
          }),
        ]
      : [e, t],
  );
}
var H,
  W = n(33835 /* vendor/other/module-33835 */),
  V = n(67177 /* vendor/other/module-67177 */),
  $ = n(51244 /* vendor/other/module-51244 */);
!(function (e) {
  (e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
    (e[(e.RECORD = 1)] = "RECORD"),
    (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED");
})(H || (H = {}));
var Y = n(65890 /* vendor/other/module-65890 */);
function q(e) {
  const t = {};
  if ("object" != typeof e || null == e) return t;
  for (const n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    if (!K(n)) {
      E.s.warn(`Invalid attribute key: ${n}`);
      continue;
    }
    const r = e[n];
    X(r)
      ? Array.isArray(r)
        ? (t[n] = r.slice())
        : (t[n] = r)
      : E.s.warn(`Invalid attribute value set for key: ${n}`);
  }
  return t;
}
function K(e) {
  return "string" == typeof e && "" !== e;
}
function X(e) {
  return (
    null == e ||
    (Array.isArray(e)
      ? (function (e) {
          let t;
          for (const n of e) {
            if (null == n) continue;
            const e = typeof n;
            if (e !== t) {
              if (!t) {
                if (Z(e)) {
                  t = e;
                  continue;
                }
                return !1;
              }
              return !1;
            }
          }
          return !0;
        })(e)
      : Z(typeof e))
  );
}
function Z(e) {
  switch (e) {
    case "number":
    case "boolean":
    case "string":
      return !0;
  }
  return !1;
}
var z = n(45185 /* vendor/other/module-45185 */);
const J = performance,
  Q = Math.pow(10, 6),
  ee = Math.pow(10, 9);
function te(e) {
  const t = e / 1e3;
  return [Math.trunc(t), Math.round((e % 1e3) * Q)];
}
function ne(e) {
  return (
    Array.isArray(e) &&
    2 === e.length &&
    "number" == typeof e[0] &&
    "number" == typeof e[1]
  );
}
function re(e) {
  return ne(e) || "number" == typeof e || e instanceof Date;
}
function oe(e, t) {
  const n = [e[0] + t[0], e[1] + t[1]];
  return n[1] >= ee && ((n[1] -= ee), (n[0] += 1)), n;
}
const ie = Symbol.for("nodejs.util.inspect.custom");
function se(e) {
  const t = {};
  for (const [n, r] of e.getRawAttributes())
    "function" != typeof r?.then && null != r && (t[n] ??= r);
  return t;
}
function ae(e, t, n, r, o) {
  if ("number" == typeof n && n < 0) {
    const t = `[${e}]`;
    return r?.stylize ? r.stylize(t, "special") : t;
  }
  return "function" == typeof o && r
    ? `${e} ${o(t, { ...r, depth: null == r.depth ? r.depth : r.depth - 1 })}`
    : t;
}
class ce {
  _spanContext;
  kind;
  parentSpanContext;
  attributes = {};
  links = [];
  events = [];
  startTime;
  resource;
  instrumentationScope;
  _droppedAttributesCount = 0;
  _droppedEventsCount = 0;
  _droppedLinksCount = 0;
  _attributesCount = 0;
  name;
  status = { code: z.s.UNSET };
  endTime = [0, 0];
  _ended = !1;
  _duration = [-1, -1];
  _spanProcessor;
  _spanLimits;
  _attributeValueLengthLimit;
  _recordEndMetrics;
  _performanceStartTime;
  _performanceOffset;
  _startTimeProvided;
  constructor(e) {
    const t = Date.now();
    if (
      ((this._spanContext = e.spanContext),
      (this._performanceStartTime = J.now()),
      (this._performanceOffset =
        t - (this._performanceStartTime + J.timeOrigin)),
      (this._startTimeProvided = null != e.startTime),
      (this._spanLimits = e.spanLimits),
      (this._attributeValueLengthLimit =
        this._spanLimits.attributeValueLengthLimit ?? 0),
      (this._spanProcessor = e.spanProcessor),
      (this.name = e.name),
      (this.parentSpanContext = e.parentSpanContext),
      (this.kind = e.kind),
      e.links)
    )
      for (const t of e.links) this.addLink(t);
    (this.startTime = this._getTime(e.startTime ?? t)),
      (this.resource = e.resource),
      (this.instrumentationScope = e.scope),
      (this._recordEndMetrics = e.recordEndMetrics),
      null != e.attributes && this.setAttributes(e.attributes),
      this._spanProcessor.onStart(this, e.context);
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(e, t) {
    if (null == t || this._isSpanEnded()) return this;
    if (0 === e.length) return E.s.warn(`Invalid attribute key: ${e}`), this;
    if (!X(t))
      return E.s.warn(`Invalid attribute value set for key: ${e}`), this;
    const { attributeCountLimit: n } = this._spanLimits,
      r = !Object.prototype.hasOwnProperty.call(this.attributes, e);
    return void 0 !== n && this._attributesCount >= n && r
      ? (this._droppedAttributesCount++, this)
      : ((this.attributes[e] = this._truncateToSize(t)),
        r && this._attributesCount++,
        this);
  }
  setAttributes(e) {
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && this.setAttribute(t, e[t]);
    return this;
  }
  addEvent(e, t, n) {
    if (this._isSpanEnded()) return this;
    const { eventCountLimit: r } = this._spanLimits;
    if (0 === r)
      return E.s.warn("No events allowed."), this._droppedEventsCount++, this;
    void 0 !== r &&
      this.events.length >= r &&
      (0 === this._droppedEventsCount && E.s.debug("Dropping extra events."),
      this.events.shift(),
      this._droppedEventsCount++),
      re(t) && (re(n) || (n = t), (t = void 0));
    const o = q(t),
      { attributePerEventCountLimit: i } = this._spanLimits,
      s = {};
    let a = 0,
      c = 0;
    for (const e in o) {
      if (!Object.prototype.hasOwnProperty.call(o, e)) continue;
      const t = o[e];
      void 0 !== i && c >= i ? a++ : ((s[e] = this._truncateToSize(t)), c++);
    }
    return (
      this.events.push({
        name: e,
        attributes: s,
        time: this._getTime(n),
        droppedAttributesCount: a,
      }),
      this
    );
  }
  addLink(e) {
    if (this._isSpanEnded()) return this;
    const { linkCountLimit: t } = this._spanLimits;
    if (0 === t) return this._droppedLinksCount++, this;
    void 0 !== t &&
      this.links.length >= t &&
      (0 === this._droppedLinksCount && E.s.debug("Dropping extra links."),
      this.links.shift(),
      this._droppedLinksCount++);
    const { attributePerLinkCountLimit: n } = this._spanLimits,
      r = q(e.attributes),
      o = {};
    let i = 0,
      s = 0;
    for (const e in r) {
      if (!Object.prototype.hasOwnProperty.call(r, e)) continue;
      const t = r[e];
      void 0 !== n && s >= n ? i++ : ((o[e] = this._truncateToSize(t)), s++);
    }
    const a = { context: e.context };
    return (
      s > 0 && (a.attributes = o),
      i > 0 && (a.droppedAttributesCount = i),
      this.links.push(a),
      this
    );
  }
  addLinks(e) {
    for (const t of e) this.addLink(t);
    return this;
  }
  setStatus(e) {
    if (this._isSpanEnded()) return this;
    if (e.code === z.s.UNSET) return this;
    if (this.status.code === z.s.OK) return this;
    const t = { code: e.code };
    return (
      e.code === z.s.ERROR &&
        ("string" == typeof e.message
          ? (t.message = e.message)
          : null != e.message &&
            E.s.warn(
              `Dropping invalid status.message of type '${typeof e.message}', expected 'string'`,
            )),
      (this.status = t),
      this
    );
  }
  updateName(e) {
    return this._isSpanEnded() || (this.name = e), this;
  }
  end(e) {
    this._isSpanEnded()
      ? E.s.error(
          `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
        )
      : ((this.endTime = this._getTime(e)),
        (this._duration = (function (e, t) {
          let n = t[0] - e[0],
            r = t[1] - e[1];
          return r < 0 && ((n -= 1), (r += ee)), [n, r];
        })(this.startTime, this.endTime)),
        this._duration[0] < 0 &&
          (E.s.warn(
            "Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.",
            this.startTime,
            this.endTime,
          ),
          (this.endTime = this.startTime.slice()),
          (this._duration = [0, 0])),
        this._droppedEventsCount > 0 &&
          E.s.warn(
            `Dropped ${this._droppedEventsCount} events because eventCountLimit reached`,
          ),
        this._droppedLinksCount > 0 &&
          E.s.warn(
            `Dropped ${this._droppedLinksCount} links because linkCountLimit reached`,
          ),
        this._spanProcessor.onEnding && this._spanProcessor.onEnding(this),
        this._recordEndMetrics?.(),
        (this._ended = !0),
        this._spanProcessor.onEnd(this));
  }
  _getTime(e) {
    if ("number" == typeof e && e <= J.now())
      return (
        (t = e + this._performanceOffset),
        oe(te(J.timeOrigin), te("number" == typeof t ? t : J.now()))
      );
    var t;
    if ("number" == typeof e) return te(e);
    if (e instanceof Date) return te(e.getTime());
    if (ne(e)) return e;
    if (this._startTimeProvided) return te(Date.now());
    const n = J.now() - this._performanceStartTime;
    return oe(this.startTime, te(n));
  }
  isRecording() {
    return !1 === this._ended;
  }
  recordException(e, t) {
    const n = {};
    "string" == typeof e
      ? (n[D.wLW] = e)
      : e &&
        (e.code
          ? (n[D.d62] = e.code.toString())
          : e.name && (n[D.d62] = e.name),
        e.message && (n[D.wLW] = e.message),
        e.stack && (n[D.MbS] = e.stack)),
      n[D.d62] || n[D.wLW]
        ? this.addEvent("exception", n, t)
        : E.s.warn(`Failed to record an exception ${e}`);
  }
  get duration() {
    return this._duration;
  }
  get ended() {
    return this._ended;
  }
  get droppedAttributesCount() {
    return this._droppedAttributesCount;
  }
  get droppedEventsCount() {
    return this._droppedEventsCount;
  }
  get droppedLinksCount() {
    return this._droppedLinksCount;
  }
  _isSpanEnded() {
    if (this._ended) {
      const e = new Error(
        `Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
      );
      E.s.warn(
        `Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
        e,
      );
    }
    return this._ended;
  }
  _truncateToLimitUtil(e, t) {
    return e.length <= t ? e : e.substring(0, t);
  }
  _truncateToSize(e) {
    const t = this._attributeValueLengthLimit;
    return t <= 0
      ? (E.s.warn(`Attribute value limit must be positive, got ${t}`), e)
      : "string" == typeof e
        ? this._truncateToLimitUtil(e, t)
        : Array.isArray(e)
          ? e.map((e) =>
              "string" == typeof e ? this._truncateToLimitUtil(e, t) : e,
            )
          : e;
  }
  [ie](e, t, n) {
    return ae(
      "SpanImpl",
      {
        name: this.name,
        kind: this.kind,
        spanContext: this._spanContext,
        parentSpanContext: this.parentSpanContext,
        status: this.status,
        startTime: this.startTime,
        endTime: this.endTime,
        duration: this._duration,
        ended: this._ended,
        attributes: this.attributes,
        events: this.events,
        links: this.links,
        droppedAttributesCount: this._droppedAttributesCount,
        droppedEventsCount: this._droppedEventsCount,
        droppedLinksCount: this._droppedLinksCount,
        instrumentationScope: this.instrumentationScope,
        resource: { attributes: se(this.resource) },
      },
      e,
      t,
      n,
    );
  }
}
const ue = "otel.span.parent.origin",
  le = "otel.span.sampling_result";
class de {
  startedSpans;
  liveSpans;
  constructor(e) {
    (this.startedSpans = e.createCounter("otel.sdk.span.started", {
      unit: "{span}",
      description: "The number of created spans.",
    })),
      (this.liveSpans = e.createUpDownCounter("otel.sdk.span.live", {
        unit: "{span}",
        description: "The number of currently live spans.",
      }));
  }
  startSpan(e, t) {
    const n = (function (e) {
      switch (e) {
        case S.RECORD_AND_SAMPLED:
          return "RECORD_AND_SAMPLE";
        case S.RECORD:
          return "RECORD_ONLY";
        case S.NOT_RECORD:
          return "DROP";
      }
    })(t);
    if (
      (this.startedSpans.add(1, {
        [ue]: ((r = e), r ? (r.isRemote ? "remote" : "local") : "none"),
        [le]: n,
      }),
      t === S.NOT_RECORD)
    )
      return () => {};
    var r;
    const o = { [le]: n };
    return (
      this.liveSpans.add(1, o),
      () => {
        this.liveSpans.add(-1, o);
      }
    );
  }
}
class pe {
  _sampler;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  _tracerMetrics;
  constructor(e, t) {
    (this.instrumentationScope = e),
      (this._sampler = t.sampler),
      (this._spanLimits = t.spanLimits),
      (this._resource = t.resource),
      (this._idGenerator = t.idGenerator),
      (this._spanProcessor = t.spanProcessor);
    const n = t.meterProvider.getMeter("@opentelemetry/sdk-trace", "2.10.0");
    this._tracerMetrics = new de(n);
  }
  startSpan(e, t = {}, n = W._.active()) {
    t.root && (n = v.u.deleteSpan(n));
    const r = v.u.getSpan(n);
    if ((0, Y.Zf)(n))
      return (
        E.s.debug("Instrumentation suppressed, returning Noop Span"),
        v.u.wrapSpanContext(V.dM)
      );
    const o = r?.spanContext(),
      i = this._idGenerator.generateSpanId();
    let s, a, c;
    o && v.u.isSpanContextValid(o)
      ? ((a = o.traceId), (c = o.traceState), (s = o))
      : (a = this._idGenerator.generateTraceId());
    const u = t.kind ?? $.v.INTERNAL,
      l = (t.links ?? []).map((e) => ({
        context: e.context,
        attributes: q(e.attributes),
      })),
      d = q(t.attributes),
      p = this._sampler.shouldSample(n, a, e, u, d, l),
      f = this._tracerMetrics.startSpan(o, p.decision);
    c = p.traceState ?? c;
    const h = {
      traceId: a,
      spanId: i,
      traceFlags: p.decision === H.RECORD_AND_SAMPLED ? N.X.SAMPLED : N.X.NONE,
      traceState: c,
    };
    if (p.decision === H.NOT_RECORD)
      return (
        E.s.debug(
          "Recording is off, propagating context in a non-recording span",
        ),
        v.u.wrapSpanContext(h)
      );
    const g = q(Object.assign(d, p.attributes));
    return new ce({
      resource: this._resource,
      scope: this.instrumentationScope,
      context: n,
      spanContext: h,
      name: e,
      kind: u,
      links: l,
      parentSpanContext: s,
      attributes: g,
      startTime: t.startTime,
      spanProcessor: this._spanProcessor,
      spanLimits: this._spanLimits,
      recordEndMetrics: f,
    });
  }
  startActiveSpan(e, t, n, r) {
    let o, i, s;
    if (arguments.length < 2) return;
    2 === arguments.length
      ? (s = t)
      : 3 === arguments.length
        ? ((o = t), (s = n))
        : ((o = t), (i = n), (s = r));
    const a = i ?? W._.active(),
      c = this.startSpan(e, o, a),
      u = v.u.setSpan(a, c);
    return W._.with(u, s, void 0, c);
  }
  [ie](e, t, n) {
    return ae(
      "Tracer",
      {
        instrumentationScope: this.instrumentationScope,
        resource: { attributes: se(this._resource) },
        spanLimits: this._spanLimits,
      },
      e,
      t,
      n,
    );
  }
}
class fe {
  _spanProcessors;
  constructor(e) {
    this._spanProcessors = e;
  }
  forceFlush() {
    const e = [];
    for (const t of this._spanProcessors) e.push(t.forceFlush());
    return new Promise((t) => {
      Promise.all(e)
        .then(() => {
          t();
        })
        .catch((e) => {
          R(e || new Error("MultiSpanProcessor: forceFlush failed")), t();
        });
    });
  }
  onStart(e, t) {
    for (const n of this._spanProcessors) n.onStart(e, t);
  }
  onEnding(e) {
    for (const t of this._spanProcessors) t.onEnding && t.onEnding(e);
  }
  onEnd(e) {
    for (const t of this._spanProcessors) t.onEnd(e);
  }
  shutdown() {
    const e = [];
    for (const t of this._spanProcessors) e.push(t.shutdown());
    return new Promise((t, n) => {
      Promise.all(e).then(() => {
        t();
      }, n);
    });
  }
}
class he {
  generateTraceId = me(16);
  generateSpanId = me(8);
}
const ge = Buffer.allocUnsafe(16);
function me(e) {
  return function () {
    for (let t = 0; t < e / 4; t++)
      ge.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, 4 * t);
    for (let t = 0; t < e && !(ge[t] > 0); t++) t === e - 1 && (ge[e - 1] = 1);
    return ge.toString("hex", 0, e);
  };
}
var _e;
!(function (e) {
  (e[(e.resolved = 0)] = "resolved"),
    (e[(e.timeout = 1)] = "timeout"),
    (e[(e.error = 2)] = "error"),
    (e[(e.unresolved = 3)] = "unresolved");
})(_e || (_e = {}));
class Se {
  _resource;
  _activeSpanProcessor;
  _forceFlushTimeoutMillis;
  _tracerOptions;
  _tracers = new Map();
  constructor(e = {}) {
    (this._forceFlushTimeoutMillis = e.forceFlushTimeoutMillis ?? 3e4),
      (this._resource =
        e.resource ??
        (function (e, t) {
          return F.FromAttributeList(Object.entries(e), t);
        })({
          [D.UX4]: B(),
          [D.E$0]: M.q[D.E$0],
          [D.Jqu]: M.q[D.Jqu],
          [D.aJA]: M.q[D.aJA],
        }));
    const t = e.spanProcessors ?? [];
    (this._activeSpanProcessor = new fe(t)),
      (this._tracerOptions = {
        resource: this._resource,
        sampler: e.sampler ?? new C({ root: new b() }),
        spanLimits: {
          attributeCountLimit: e.spanLimits?.attributeCountLimit ?? 128,
          attributeValueLengthLimit:
            e.spanLimits?.attributeValueLengthLimit ?? 1 / 0,
          eventCountLimit: e.spanLimits?.eventCountLimit ?? 128,
          linkCountLimit: e.spanLimits?.linkCountLimit ?? 128,
          attributePerEventCountLimit:
            e.spanLimits?.attributePerEventCountLimit ?? 128,
          attributePerLinkCountLimit:
            e.spanLimits?.attributePerLinkCountLimit ?? 128,
        },
        idGenerator: e.idGenerator || new he(),
        spanProcessor: this._activeSpanProcessor,
        meterProvider: e.meterProvider ?? {
          getMeter: () => (0, x.Ac)(),
        },
      });
  }
  getTracer(e, t, n) {
    const r = `${e}@${t || ""}:${n?.schemaUrl || ""}`;
    return (
      this._tracers.has(r) ||
        this._tracers.set(
          r,
          new pe(
            { name: e, version: t, schemaUrl: n?.schemaUrl },
            this._tracerOptions,
          ),
        ),
      this._tracers.get(r)
    );
  }
  forceFlush() {
    const e = this._forceFlushTimeoutMillis,
      t = this._activeSpanProcessor._spanProcessors.map(
        (t) =>
          new Promise((n) => {
            let r;
            const o = setTimeout(() => {
              n(
                new Error(
                  `Span processor did not completed within timeout period of ${e} ms`,
                ),
              ),
                (r = _e.timeout);
            }, e);
            t.forceFlush()
              .then(() => {
                clearTimeout(o), r !== _e.timeout && ((r = _e.resolved), n(r));
              })
              .catch((e) => {
                clearTimeout(o), (r = _e.error), n(e);
              });
          }),
      );
    return new Promise((e, n) => {
      Promise.all(t)
        .then((t) => {
          const r = t.filter((e) => e !== _e.resolved);
          r.length > 0 ? n(r) : e();
        })
        .catch((e) => n([e]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
  [ie](e, t, n) {
    const r = this._activeSpanProcessor._spanProcessors;
    return ae(
      "TracerProvider",
      {
        resource: { attributes: se(this._resource) },
        tracers: Array.from(this._tracers.keys()),
        spanProcessors: r.map((e) => e.constructor?.name ?? "SpanProcessor"),
      },
      e,
      t,
      n,
    );
  }
}
class Ee extends Se {
  constructor(e = {}) {
    const t = (function (...e) {
      let t = e.shift();
      const n = new WeakMap();
      for (; e.length > 0; ) t = p(t, e.shift(), 0, n);
      return t;
    })(
      {},
      {
        sampler: k(),
        forceFlushTimeoutMillis: 3e4,
        generalLimits: {
          attributeValueLengthLimit:
            T("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
          attributeCountLimit: T("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128,
        },
        spanLimits: {
          attributeValueLengthLimit:
            T("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
          attributeCountLimit: T("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
          linkCountLimit: T("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
          eventCountLimit: T("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
          attributePerEventCountLimit:
            T("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
          attributePerLinkCountLimit:
            T("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128,
        },
      },
      (function (e) {
        const t = Object.assign({}, e.spanLimits);
        return (
          (t.attributeCountLimit =
            e.spanLimits?.attributeCountLimit ??
            e.generalLimits?.attributeCountLimit ??
            T("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ??
            T("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
            128),
          (t.attributeValueLengthLimit =
            e.spanLimits?.attributeValueLengthLimit ??
            e.generalLimits?.attributeValueLengthLimit ??
            T("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
            T("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
            L),
          Object.assign({}, e, { spanLimits: t })
        );
      })(e),
    );
    delete t.generalLimits, super(t);
  }
}
