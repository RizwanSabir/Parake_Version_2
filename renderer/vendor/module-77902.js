// vendor/module-77902.js — webpack module 77902
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, {
  vl: () => cl,
  DefaultChatTransport: () => ll,
  lW: () => al,
});
var r,
  o,
  i = "vercel.ai.error",
  a = Symbol.for(i),
  s = class e extends ((o = Error), (r = a), o) {
    constructor({ name: e, message: t, cause: n }) {
      super(t), (this[r] = !0), (this.name = e), (this.cause = n);
    }
    static isInstance(t) {
      return e.hasMarker(t, i);
    }
    static hasMarker(e, t) {
      const n = Symbol.for(t);
      return (
        null != e &&
        "object" == typeof e &&
        n in e &&
        "boolean" == typeof e[n] &&
        !0 === e[n]
      );
    }
  },
  l = Symbol.for("vercel.ai.error.AI_APICallError"),
  c = `vercel.ai.error.${"AI_EmptyResponseBodyError"}`,
  u = Symbol.for(c);
function d(e) {
  return null == e
    ? "unknown error"
    : "string" == typeof e
      ? e
      : e instanceof Error
        ? e.toString()
        : JSON.stringify(e);
}
var p,
  f,
  h,
  m,
  g,
  y,
  v = "AI_InvalidArgumentError",
  b = `vercel.ai.error.${v}`,
  S = Symbol.for(b),
  _ = class extends ((f = s), (p = S), f) {
    constructor({ message: e, cause: t, argument: n }) {
      super({ name: v, message: e, cause: t }),
        (this[p] = !0),
        (this.argument = n);
    }
    static isInstance(e) {
      return s.hasMarker(e, b);
    }
  },
  x = Symbol.for("vercel.ai.error.AI_InvalidPromptError"),
  w = `vercel.ai.error.${"AI_InvalidResponseDataError"}`,
  E = Symbol.for(w),
  T = "AI_JSONParseError",
  k = `vercel.ai.error.${T}`,
  C = Symbol.for(k),
  I = class extends ((m = s), (h = C), m) {
    constructor({ text: e, cause: t }) {
      super({
        name: T,
        message: `JSON parsing failed: Text: ${e}.\nError message: ${d(t)}`,
        cause: t,
      }),
        (this[h] = !0),
        (this.text = e);
    }
    static isInstance(e) {
      return s.hasMarker(e, k);
    }
  },
  A = Symbol.for("vercel.ai.error.AI_LoadAPIKeyError"),
  O = `vercel.ai.error.${"AI_LoadSettingError"}`,
  R = Symbol.for(O),
  M = `vercel.ai.error.${"AI_NoContentGeneratedError"}`,
  P = Symbol.for(M),
  N = `vercel.ai.error.${"AI_NoSuchModelError"}`,
  D = Symbol.for(N),
  j = `vercel.ai.error.${"AI_NoSuchProviderReferenceError"}`,
  L = Symbol.for(j),
  F = `vercel.ai.error.${"AI_TooManyEmbeddingValuesForCallError"}`,
  U = Symbol.for(F),
  B = "AI_TypeValidationError",
  z = `vercel.ai.error.${B}`,
  H = Symbol.for(z),
  V = class e extends ((y = s), (g = H), y) {
    constructor({ value: e, cause: t, context: n }) {
      let r = "Type validation failed";
      if (
        ((null == n ? void 0 : n.field) && (r += ` for ${n.field}`),
        (null == n ? void 0 : n.entityName) ||
          (null == n ? void 0 : n.entityId))
      ) {
        r += " (";
        const e = [];
        n.entityName && e.push(n.entityName),
          n.entityId && e.push(`id: "${n.entityId}"`),
          (r += e.join(", ")),
          (r += ")");
      }
      super({
        name: B,
        message: `${r}: Value: ${JSON.stringify(e)}.\nError message: ${d(t)}`,
        cause: t,
      }),
        (this[g] = !0),
        (this.value = e),
        (this.context = n);
    }
    static isInstance(e) {
      return s.hasMarker(e, z);
    }
    static wrap({ value: t, cause: n, context: r }) {
      var o, i, a;
      return e.isInstance(n) &&
        n.value === t &&
        (null == (o = n.context) ? void 0 : o.field) ===
          (null == r ? void 0 : r.field) &&
        (null == (i = n.context) ? void 0 : i.entityName) ===
          (null == r ? void 0 : r.entityName) &&
        (null == (a = n.context) ? void 0 : a.entityId) ===
          (null == r ? void 0 : r.entityId)
        ? n
        : new e({ value: t, cause: n, context: r });
    }
  },
  q = Symbol.for("vercel.ai.error.AI_UnsupportedFunctionalityError");
Symbol("ZodOutput"), Symbol("ZodInput");
class G {
  constructor() {
    (this._map = new Map()), (this._idmap = new Map());
  }
  add(e, ...t) {
    const n = t[0];
    if ((this._map.set(e, n), n && "object" == typeof n && "id" in n)) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, e);
    }
    return this;
  }
  clear() {
    return (this._map = new Map()), (this._idmap = new Map()), this;
  }
  remove(e) {
    const t = this._map.get(e);
    return (
      t && "object" == typeof t && "id" in t && this._idmap.delete(t.id),
      this._map.delete(e),
      this
    );
  }
  get(e) {
    const t = e._zod.parent;
    if (t) {
      const n = { ...(this.get(t) ?? {}) };
      return delete n.id, { ...n, ...this._map.get(e) };
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function W() {
  return new G();
}
const $ = W();
function Y(e) {
  const t = Object.values(e).filter((e) => "number" == typeof e);
  return Object.entries(e)
    .filter(([e, n]) => -1 === t.indexOf(+e))
    .map(([e, t]) => t);
}
function K(e, t) {
  return "bigint" == typeof t ? t.toString() : t;
}
function Z(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    },
  };
}
function Q(e) {
  return null == e;
}
function J(e) {
  const t = e.startsWith("^") ? 1 : 0,
    n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function X(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      {
        const r = n();
        return (e[t] = r), r;
      }
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: !0,
  });
}
function ee(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function te(e) {
  return JSON.stringify(e);
}
const ne = Error.captureStackTrace ? Error.captureStackTrace : (...e) => {};
function re(e) {
  return "object" == typeof e && null !== e && !Array.isArray(e);
}
const oe = Z(() => {
  if (
    "undefined" != typeof navigator &&
    navigator?.userAgent?.includes("Cloudflare")
  )
    return !1;
  try {
    return new Function(""), !0;
  } catch (e) {
    return !1;
  }
});
function ie(e) {
  if (!1 === re(e)) return !1;
  const t = e.constructor;
  if (void 0 === t) return !0;
  const n = t.prototype;
  return (
    !1 !== re(n) &&
    !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
  );
}
const ae = new Set(["string", "number", "symbol"]);
function se(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function le(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (t && !n?.parent) || (r._zod.parent = e), r;
}
function ce(e) {
  const t = e;
  if (!t) return {};
  if ("string" == typeof t) return { error: () => t };
  if (void 0 !== t?.message) {
    if (void 0 !== t?.error)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    "string" == typeof t.error ? { ...t, error: () => t.error } : t
  );
}
new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
const ue = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};
function de(e, t = 0) {
  for (let n = t; n < e.issues.length; n++)
    if (!0 !== e.issues[n]?.continue) return !0;
  return !1;
}
function pe(e, t) {
  return t.map((t) => {
    var n;
    return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
  });
}
function fe(e) {
  return "string" == typeof e ? e : e?.message;
}
function he(e, t, n) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o =
      fe(e.inst?._zod.def?.error?.(e)) ??
      fe(t?.error?.(e)) ??
      fe(n.customError?.(e)) ??
      fe(n.localeError?.(e)) ??
      "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function me(e) {
  return Array.isArray(e)
    ? "array"
    : "string" == typeof e
      ? "string"
      : "unknown";
}
function ge(...e) {
  const [t, n, r] = e;
  return "string" == typeof t
    ? { message: t, code: "custom", input: n, inst: r }
    : { ...t };
}
class ye {
  constructor(e) {
    (this.counter = 0),
      (this.metadataRegistry = e?.metadata ?? $),
      (this.target = e?.target ?? "draft-2020-12"),
      (this.unrepresentable = e?.unrepresentable ?? "throw"),
      (this.override = e?.override ?? (() => {})),
      (this.io = e?.io ?? "output"),
      (this.seen = new Map());
  }
  process(e, t = { path: [], schemaPath: [] }) {
    var n;
    const r = e._zod.def,
      o = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      i = this.seen.get(e);
    if (i)
      return (
        i.count++, t.schemaPath.includes(e) && (i.cycle = t.path), i.schema
      );
    const a = { schema: {}, count: 1, cycle: void 0, path: t.path };
    this.seen.set(e, a);
    const s = e._zod.toJSONSchema?.();
    if (s) a.schema = s;
    else {
      const n = {
          ...t,
          schemaPath: [...t.schemaPath, e],
          path: t.path,
        },
        i = e._zod.parent;
      if (i) (a.ref = i), this.process(i, n), (this.seen.get(i).isParent = !0);
      else {
        const t = a.schema;
        switch (r.type) {
          case "string": {
            const n = t;
            n.type = "string";
            const {
              minimum: r,
              maximum: i,
              format: s,
              patterns: l,
              contentEncoding: c,
            } = e._zod.bag;
            if (
              ("number" == typeof r && (n.minLength = r),
              "number" == typeof i && (n.maxLength = i),
              s && ((n.format = o[s] ?? s), "" === n.format && delete n.format),
              c && (n.contentEncoding = c),
              l && l.size > 0)
            ) {
              const e = [...l];
              1 === e.length
                ? (n.pattern = e[0].source)
                : e.length > 1 &&
                  (a.schema.allOf = [
                    ...e.map((e) => ({
                      ...("draft-7" === this.target ? { type: "string" } : {}),
                      pattern: e.source,
                    })),
                  ]);
            }
            break;
          }
          case "number": {
            const n = t,
              {
                minimum: r,
                maximum: o,
                format: i,
                multipleOf: a,
                exclusiveMaximum: s,
                exclusiveMinimum: l,
              } = e._zod.bag;
            "string" == typeof i && i.includes("int")
              ? (n.type = "integer")
              : (n.type = "number"),
              "number" == typeof l && (n.exclusiveMinimum = l),
              "number" == typeof r &&
                ((n.minimum = r),
                "number" == typeof l &&
                  (l >= r ? delete n.minimum : delete n.exclusiveMinimum)),
              "number" == typeof s && (n.exclusiveMaximum = s),
              "number" == typeof o &&
                ((n.maximum = o),
                "number" == typeof s &&
                  (s <= o ? delete n.maximum : delete n.exclusiveMaximum)),
              "number" == typeof a && (n.multipleOf = a);
            break;
          }
          case "boolean":
          case "success":
            t.type = "boolean";
            break;
          case "bigint":
            if ("throw" === this.unrepresentable)
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          case "symbol":
            if ("throw" === this.unrepresentable)
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          case "null":
            t.type = "null";
            break;
          case "any":
          case "unknown":
            break;
          case "undefined":
            if ("throw" === this.unrepresentable)
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          case "void":
            if ("throw" === this.unrepresentable)
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          case "never":
            t.not = {};
            break;
          case "date":
            if ("throw" === this.unrepresentable)
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          case "array": {
            const o = t,
              { minimum: i, maximum: a } = e._zod.bag;
            "number" == typeof i && (o.minItems = i),
              "number" == typeof a && (o.maxItems = a),
              (o.type = "array"),
              (o.items = this.process(r.element, {
                ...n,
                path: [...n.path, "items"],
              }));
            break;
          }
          case "object": {
            const e = t;
            (e.type = "object"), (e.properties = {});
            const o = r.shape;
            for (const t in o)
              e.properties[t] = this.process(o[t], {
                ...n,
                path: [...n.path, "properties", t],
              });
            const i = new Set(Object.keys(o)),
              a = new Set(
                [...i].filter((e) => {
                  const t = r.shape[e]._zod;
                  return "input" === this.io
                    ? void 0 === t.optin
                    : void 0 === t.optout;
                }),
              );
            a.size > 0 && (e.required = Array.from(a)),
              "never" === r.catchall?._zod.def.type
                ? (e.additionalProperties = !1)
                : r.catchall
                  ? r.catchall &&
                    (e.additionalProperties = this.process(r.catchall, {
                      ...n,
                      path: [...n.path, "additionalProperties"],
                    }))
                  : "output" === this.io && (e.additionalProperties = !1);
            break;
          }
          case "union":
            t.anyOf = r.options.map((e, t) =>
              this.process(e, {
                ...n,
                path: [...n.path, "anyOf", t],
              }),
            );
            break;
          case "intersection": {
            const e = t,
              o = this.process(r.left, {
                ...n,
                path: [...n.path, "allOf", 0],
              }),
              i = this.process(r.right, {
                ...n,
                path: [...n.path, "allOf", 1],
              }),
              a = (e) => "allOf" in e && 1 === Object.keys(e).length,
              s = [...(a(o) ? o.allOf : [o]), ...(a(i) ? i.allOf : [i])];
            e.allOf = s;
            break;
          }
          case "tuple": {
            const o = t;
            o.type = "array";
            const i = r.items.map((e, t) =>
              this.process(e, {
                ...n,
                path: [...n.path, "prefixItems", t],
              }),
            );
            if (
              ("draft-2020-12" === this.target
                ? (o.prefixItems = i)
                : (o.items = i),
              r.rest)
            ) {
              const e = this.process(r.rest, {
                ...n,
                path: [...n.path, "items"],
              });
              "draft-2020-12" === this.target
                ? (o.items = e)
                : (o.additionalItems = e);
            }
            r.rest &&
              (o.items = this.process(r.rest, {
                ...n,
                path: [...n.path, "items"],
              }));
            const { minimum: a, maximum: s } = e._zod.bag;
            "number" == typeof a && (o.minItems = a),
              "number" == typeof s && (o.maxItems = s);
            break;
          }
          case "record": {
            const e = t;
            (e.type = "object"),
              (e.propertyNames = this.process(r.keyType, {
                ...n,
                path: [...n.path, "propertyNames"],
              })),
              (e.additionalProperties = this.process(r.valueType, {
                ...n,
                path: [...n.path, "additionalProperties"],
              }));
            break;
          }
          case "map":
            if ("throw" === this.unrepresentable)
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          case "set":
            if ("throw" === this.unrepresentable)
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          case "enum": {
            const e = t,
              n = Y(r.entries);
            n.every((e) => "number" == typeof e) && (e.type = "number"),
              n.every((e) => "string" == typeof e) && (e.type = "string"),
              (e.enum = n);
            break;
          }
          case "literal": {
            const e = t,
              n = [];
            for (const e of r.values)
              if (void 0 === e) {
                if ("throw" === this.unrepresentable)
                  throw new Error(
                    "Literal `undefined` cannot be represented in JSON Schema",
                  );
              } else if ("bigint" == typeof e) {
                if ("throw" === this.unrepresentable)
                  throw new Error(
                    "BigInt literals cannot be represented in JSON Schema",
                  );
                n.push(Number(e));
              } else n.push(e);
            if (0 === n.length);
            else if (1 === n.length) {
              const t = n[0];
              (e.type = null === t ? "null" : typeof t), (e.const = t);
            } else
              n.every((e) => "number" == typeof e) && (e.type = "number"),
                n.every((e) => "string" == typeof e) && (e.type = "string"),
                n.every((e) => "boolean" == typeof e) && (e.type = "string"),
                n.every((e) => null === e) && (e.type = "null"),
                (e.enum = n);
            break;
          }
          case "file": {
            const n = t,
              r = {
                type: "string",
                format: "binary",
                contentEncoding: "binary",
              },
              { minimum: o, maximum: i, mime: a } = e._zod.bag;
            void 0 !== o && (r.minLength = o),
              void 0 !== i && (r.maxLength = i),
              a
                ? 1 === a.length
                  ? ((r.contentMediaType = a[0]), Object.assign(n, r))
                  : (n.anyOf = a.map((e) => ({
                      ...r,
                      contentMediaType: e,
                    })))
                : Object.assign(n, r);
            break;
          }
          case "transform":
            if ("throw" === this.unrepresentable)
              throw new Error(
                "Transforms cannot be represented in JSON Schema",
              );
            break;
          case "nullable": {
            const e = this.process(r.innerType, n);
            t.anyOf = [e, { type: "null" }];
            break;
          }
          case "nonoptional":
          case "promise":
          case "optional":
            this.process(r.innerType, n), (a.ref = r.innerType);
            break;
          case "default":
            this.process(r.innerType, n),
              (a.ref = r.innerType),
              (t.default = JSON.parse(JSON.stringify(r.defaultValue)));
            break;
          case "prefault":
            this.process(r.innerType, n),
              (a.ref = r.innerType),
              "input" === this.io &&
                (t._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
            break;
          case "catch": {
            let e;
            this.process(r.innerType, n), (a.ref = r.innerType);
            try {
              e = r.catchValue(void 0);
            } catch {
              throw new Error(
                "Dynamic catch values are not supported in JSON Schema",
              );
            }
            t.default = e;
            break;
          }
          case "nan":
            if ("throw" === this.unrepresentable)
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          case "template_literal": {
            const n = t,
              r = e._zod.pattern;
            if (!r) throw new Error("Pattern not found in template literal");
            (n.type = "string"), (n.pattern = r.source);
            break;
          }
          case "pipe": {
            const e =
              "input" === this.io
                ? "transform" === r.in._zod.def.type
                  ? r.out
                  : r.in
                : r.out;
            this.process(e, n), (a.ref = e);
            break;
          }
          case "readonly":
            this.process(r.innerType, n),
              (a.ref = r.innerType),
              (t.readOnly = !0);
            break;
          case "lazy": {
            const t = e._zod.innerType;
            this.process(t, n), (a.ref = t);
            break;
          }
          case "custom":
            if ("throw" === this.unrepresentable)
              throw new Error(
                "Custom types cannot be represented in JSON Schema",
              );
        }
      }
    }
    const l = this.metadataRegistry.get(e);
    return (
      l && Object.assign(a.schema, l),
      "input" === this.io &&
        ve(e) &&
        (delete a.schema.examples, delete a.schema.default),
      "input" === this.io &&
        a.schema._prefault &&
        ((n = a.schema).default ?? (n.default = a.schema._prefault)),
      delete a.schema._prefault,
      this.seen.get(e).schema
    );
  }
  emit(e, t) {
    const n = {
        cycles: t?.cycles ?? "ref",
        reused: t?.reused ?? "inline",
        external: t?.external ?? void 0,
      },
      r = this.seen.get(e);
    if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const o = (e) => {
        const t = "draft-2020-12" === this.target ? "$defs" : "definitions";
        if (n.external) {
          const r = n.external.registry.get(e[0])?.id,
            o = n.external.uri ?? ((e) => e);
          if (r) return { ref: o(r) };
          const i = e[1].defId ?? e[1].schema.id ?? "schema" + this.counter++;
          return (
            (e[1].defId = i), { defId: i, ref: `${o("__shared")}#/${t}/${i}` }
          );
        }
        if (e[1] === r) return { ref: "#" };
        const o = `#/${t}/`,
          i = e[1].schema.id ?? "__schema" + this.counter++;
        return { defId: i, ref: o + i };
      },
      i = (e) => {
        if (e[1].schema.$ref) return;
        const t = e[1],
          { ref: n, defId: r } = o(e);
        (t.def = { ...t.schema }), r && (t.defId = r);
        const i = t.schema;
        for (const e in i) delete i[e];
        i.$ref = n;
      };
    if ("throw" === n.cycles)
      for (const e of this.seen.entries()) {
        const t = e[1];
        if (t.cycle)
          throw new Error(
            `Cycle detected: #/${t.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`,
          );
      }
    for (const t of this.seen.entries()) {
      const r = t[1];
      if (e === t[0]) {
        i(t);
        continue;
      }
      if (n.external) {
        const r = n.external.registry.get(t[0])?.id;
        if (e !== t[0] && r) {
          i(t);
          continue;
        }
      }
      const o = this.metadataRegistry.get(t[0])?.id;
      (o || r.cycle || (r.count > 1 && "ref" === n.reused)) && i(t);
    }
    const a = (e, t) => {
      const n = this.seen.get(e),
        r = n.def ?? n.schema,
        o = { ...r };
      if (null === n.ref) return;
      const i = n.ref;
      if (((n.ref = null), i)) {
        a(i, t);
        const e = this.seen.get(i).schema;
        e.$ref && "draft-7" === t.target
          ? ((r.allOf = r.allOf ?? []), r.allOf.push(e))
          : (Object.assign(r, e), Object.assign(r, o));
      }
      n.isParent ||
        this.override({
          zodSchema: e,
          jsonSchema: r,
          path: n.path ?? [],
        });
    };
    for (const e of [...this.seen.entries()].reverse())
      a(e[0], { target: this.target });
    const s = {};
    if (
      ("draft-2020-12" === this.target
        ? (s.$schema = "https://json-schema.org/draft/2020-12/schema")
        : "draft-7" === this.target &&
          (s.$schema = "http://json-schema.org/draft-07/schema#"),
      n.external?.uri)
    ) {
      const t = n.external.registry.get(e)?.id;
      if (!t) throw new Error("Schema is missing an `id` property");
      s.$id = n.external.uri(t);
    }
    Object.assign(s, r.def);
    const l = n.external?.defs ?? {};
    for (const e of this.seen.entries()) {
      const t = e[1];
      t.def && t.defId && (l[t.defId] = t.def);
    }
    n.external ||
      (Object.keys(l).length > 0 &&
        ("draft-2020-12" === this.target
          ? (s.$defs = l)
          : (s.definitions = l)));
    try {
      return JSON.parse(JSON.stringify(s));
    } catch (e) {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function ve(e, t) {
  const n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  const r = e._zod.def;
  switch (r.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
    case "custom":
    case "success":
    case "catch":
      return !1;
    case "array":
      return ve(r.element, n);
    case "object":
      for (const e in r.shape) if (ve(r.shape[e], n)) return !0;
      return !1;
    case "union":
      for (const e of r.options) if (ve(e, n)) return !0;
      return !1;
    case "intersection":
      return ve(r.left, n) || ve(r.right, n);
    case "tuple":
      for (const e of r.items) if (ve(e, n)) return !0;
      return !(!r.rest || !ve(r.rest, n));
    case "record":
    case "map":
      return ve(r.keyType, n) || ve(r.valueType, n);
    case "set":
      return ve(r.valueType, n);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
    case "default":
    case "prefault":
      return ve(r.innerType, n);
    case "lazy":
      return ve(r.getter(), n);
    case "transform":
      return !0;
    case "pipe":
      return ve(r.in, n) || ve(r.out, n);
  }
  throw new Error(`Unknown schema type: ${r.type}`);
}
function be(e, t, n) {
  function r(n, r) {
    var o;
    Object.defineProperty(n, "_zod", {
      value: n._zod ?? {},
      enumerable: !1,
    }),
      (o = n._zod).traits ?? (o.traits = new Set()),
      n._zod.traits.add(e),
      t(n, r);
    for (const e in a.prototype)
      e in n ||
        Object.defineProperty(n, e, {
          value: a.prototype[e].bind(n),
        });
    (n._zod.constr = a), (n._zod.def = r);
  }
  const o = n?.Parent ?? Object;
  class i extends o {}
  function a(e) {
    var t;
    const o = n?.Parent ? new i() : this;
    r(o, e), (t = o._zod).deferred ?? (t.deferred = []);
    for (const e of o._zod.deferred) e();
    return o;
  }
  return (
    Object.defineProperty(i, "name", { value: e }),
    Object.defineProperty(a, "init", { value: r }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (t) =>
        !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
Object.freeze({ status: "aborted" }), Symbol("zod_brand");
class Se extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
const _e = {};
function xe(e) {
  return e && Object.assign(_e, e), _e;
}
const we = (e, t) => {
    (e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1,
      }),
      Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1,
      }),
      Object.defineProperty(e, "message", {
        get: () => JSON.stringify(t, K, 2),
        enumerable: !0,
      }),
      Object.defineProperty(e, "toString", {
        value: () => e.message,
        enumerable: !1,
      });
  },
  Ee = be("$ZodError", we),
  Te = be("$ZodError", we, { Parent: Error }),
  ke = (e) => (t, n, r, o) => {
    const i = r ? Object.assign(r, { async: !1 }) : { async: !1 },
      a = t._zod.run({ value: n, issues: [] }, i);
    if (a instanceof Promise) throw new Se();
    if (a.issues.length) {
      const t = new (o?.Err ?? e)(a.issues.map((e) => he(e, i, xe())));
      throw (ne(t, o?.callee), t);
    }
    return a.value;
  },
  Ce = (e) => async (t, n, r, o) => {
    const i = r ? Object.assign(r, { async: !0 }) : { async: !0 };
    let a = t._zod.run({ value: n, issues: [] }, i);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      const t = new (o?.Err ?? e)(a.issues.map((e) => he(e, i, xe())));
      throw (ne(t, o?.callee), t);
    }
    return a.value;
  },
  Ie = (e) => (t, n, r) => {
    const o = r ? { ...r, async: !1 } : { async: !1 },
      i = t._zod.run({ value: n, issues: [] }, o);
    if (i instanceof Promise) throw new Se();
    return i.issues.length
      ? {
          success: !1,
          error: new (e ?? Ee)(i.issues.map((e) => he(e, o, xe()))),
        }
      : { success: !0, data: i.value };
  },
  Ae = Ie(Te),
  Oe = (e) => async (t, n, r) => {
    const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
    let i = t._zod.run({ value: n, issues: [] }, o);
    return (
      i instanceof Promise && (i = await i),
      i.issues.length
        ? {
            success: !1,
            error: new e(i.issues.map((e) => he(e, o, xe()))),
          }
        : { success: !0, data: i.value }
    );
  },
  Re = Oe(Te),
  Me = (e, t) => {
    Ee.init(e, t),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: {
          value: (t) =>
            (function (e, t) {
              const n =
                  t ||
                  function (e) {
                    return e.message;
                  },
                r = { _errors: [] },
                o = (e) => {
                  for (const t of e.issues)
                    if ("invalid_union" === t.code && t.errors.length)
                      t.errors.map((e) => o({ issues: e }));
                    else if ("invalid_key" === t.code) o({ issues: t.issues });
                    else if ("invalid_element" === t.code)
                      o({ issues: t.issues });
                    else if (0 === t.path.length) r._errors.push(n(t));
                    else {
                      let e = r,
                        o = 0;
                      for (; o < t.path.length; ) {
                        const r = t.path[o];
                        o === t.path.length - 1
                          ? ((e[r] = e[r] || { _errors: [] }),
                            e[r]._errors.push(n(t)))
                          : (e[r] = e[r] || { _errors: [] }),
                          (e = e[r]),
                          o++;
                      }
                    }
                };
              return o(e), r;
            })(e, t),
        },
        flatten: {
          value: (t) =>
            (function (e, t = (e) => e.message) {
              const n = {},
                r = [];
              for (const o of e.issues)
                o.path.length > 0
                  ? ((n[o.path[0]] = n[o.path[0]] || []),
                    n[o.path[0]].push(t(o)))
                  : r.push(t(o));
              return { formErrors: r, fieldErrors: n };
            })(e, t),
        },
        addIssue: { value: (t) => e.issues.push(t) },
        addIssues: { value: (t) => e.issues.push(...t) },
        isEmpty: { get: () => 0 === e.issues.length },
      });
  },
  Pe = (be("ZodError", Me), be("ZodError", Me, { Parent: Error })),
  Ne = ke(Pe),
  De = Ce(Pe),
  je = Ie(Pe),
  Le = Oe(Pe);
var Fe, Ue;
!(function (e) {
  (e.assertEqual = (e) => {}),
    (e.assertIs = function (e) {}),
    (e.assertNever = function (e) {
      throw new Error();
    }),
    (e.arrayToEnum = (e) => {
      const t = {};
      for (const n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      const n = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
        r = {};
      for (const e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      "function" == typeof Object.keys
        ? (e) => Object.keys(e)
        : (e) => {
            const t = [];
            for (const n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (const n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      "function" == typeof Number.isInteger
        ? (e) => Number.isInteger(e)
        : (e) =>
            "number" == typeof e && Number.isFinite(e) && Math.floor(e) === e),
    (e.joinValues = function (e, t = " | ") {
      return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
    }),
    (e.jsonStringifyReplacer = (e, t) =>
      "bigint" == typeof t ? t.toString() : t);
})(Fe || (Fe = {})),
  (function (e) {
    e.mergeShapes = (e, t) => ({ ...e, ...t });
  })(Ue || (Ue = {}));
const Be = Fe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  ze = (e) => {
    switch (typeof e) {
      case "undefined":
        return Be.undefined;
      case "string":
        return Be.string;
      case "number":
        return Number.isNaN(e) ? Be.nan : Be.number;
      case "boolean":
        return Be.boolean;
      case "function":
        return Be.function;
      case "bigint":
        return Be.bigint;
      case "symbol":
        return Be.symbol;
      case "object":
        return Array.isArray(e)
          ? Be.array
          : null === e
            ? Be.null
            : e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              ? Be.promise
              : "undefined" != typeof Map && e instanceof Map
                ? Be.map
                : "undefined" != typeof Set && e instanceof Set
                  ? Be.set
                  : "undefined" != typeof Date && e instanceof Date
                    ? Be.date
                    : Be.object;
      default:
        return Be.unknown;
    }
  },
  He = Fe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class Ve extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (e) => {
        this.issues = [...this.issues, e];
      }),
      (this.addIssues = (e = []) => {
        this.issues = [...this.issues, ...e];
      });
    const t = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, t)
      : (this.__proto__ = t),
      (this.name = "ZodError"),
      (this.issues = e);
  }
  format(e) {
    const t =
        e ||
        function (e) {
          return e.message;
        },
      n = { _errors: [] },
      r = (e) => {
        for (const o of e.issues)
          if ("invalid_union" === o.code) o.unionErrors.map(r);
          else if ("invalid_return_type" === o.code) r(o.returnTypeError);
          else if ("invalid_arguments" === o.code) r(o.argumentsError);
          else if (0 === o.path.length) n._errors.push(t(o));
          else {
            let e = n,
              r = 0;
            for (; r < o.path.length; ) {
              const n = o.path[r];
              r === o.path.length - 1
                ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(o)))
                : (e[n] = e[n] || { _errors: [] }),
                (e = e[n]),
                r++;
            }
          }
      };
    return r(this), n;
  }
  static assert(e) {
    if (!(e instanceof Ve)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Fe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return 0 === this.issues.length;
  }
  flatten(e = (e) => e.message) {
    const t = {},
      n = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const n = r.path[0];
        (t[n] = t[n] || []), t[n].push(e(r));
      } else n.push(e(r));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ve.create = (e) => new Ve(e);
const qe = (e, t) => {
  let n;
  switch (e.code) {
    case He.invalid_type:
      n =
        e.received === Be.undefined
          ? "Required"
          : `Expected ${e.expected}, received ${e.received}`;
      break;
    case He.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Fe.jsonStringifyReplacer)}`;
      break;
    case He.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Fe.joinValues(e.keys, ", ")}`;
      break;
    case He.invalid_union:
      n = "Invalid input";
      break;
    case He.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Fe.joinValues(e.options)}`;
      break;
    case He.invalid_enum_value:
      n = `Invalid enum value. Expected ${Fe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case He.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case He.invalid_return_type:
      n = "Invalid function return type";
      break;
    case He.invalid_date:
      n = "Invalid date";
      break;
    case He.invalid_string:
      "object" == typeof e.validation
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            "number" == typeof e.validation.position &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
            ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
            : "endsWith" in e.validation
              ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
              : Fe.assertNever(e.validation)
        : (n =
            "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid");
      break;
    case He.too_small:
      n =
        "array" === e.type
          ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`
          : "string" === e.type
            ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`
            : "number" === e.type || "bigint" === e.type
              ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`
              : "date" === e.type
                ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`
                : "Invalid input";
      break;
    case He.too_big:
      n =
        "array" === e.type
          ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`
          : "string" === e.type
            ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`
            : "number" === e.type
              ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
              : "bigint" === e.type
                ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
                : "date" === e.type
                  ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`
                  : "Invalid input";
      break;
    case He.custom:
      n = "Invalid input";
      break;
    case He.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case He.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case He.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), Fe.assertNever(e);
  }
  return { message: n };
};
let Ge = qe;
var We;
!(function (e) {
  (e.errToObj = (e) => ("string" == typeof e ? { message: e } : e || {})),
    (e.toString = (e) => ("string" == typeof e ? e : e?.message));
})(We || (We = {}));
function $e(e, t) {
  const n = Ge,
    r = ((e) => {
      const { data: t, path: n, errorMaps: r, issueData: o } = e,
        i = [...n, ...(o.path || [])],
        a = { ...o, path: i };
      if (void 0 !== o.message) return { ...o, path: i, message: o.message };
      let s = "";
      const l = r
        .filter((e) => !!e)
        .slice()
        .reverse();
      for (const e of l) s = e(a, { data: t, defaultError: s }).message;
      return { ...o, path: i, message: s };
    })({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === qe ? void 0 : qe,
      ].filter((e) => !!e),
    });
  e.common.issues.push(r);
}
class Ye {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    "valid" === this.value && (this.value = "dirty");
  }
  abort() {
    "aborted" !== this.value && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const n = [];
    for (const r of t) {
      if ("aborted" === r.status) return Ke;
      "dirty" === r.status && e.dirty(), n.push(r.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const e of t) {
      const t = await e.key,
        r = await e.value;
      n.push({ key: t, value: r });
    }
    return Ye.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const r of t) {
      const { key: t, value: o } = r;
      if ("aborted" === t.status) return Ke;
      if ("aborted" === o.status) return Ke;
      "dirty" === t.status && e.dirty(),
        "dirty" === o.status && e.dirty(),
        "__proto__" === t.value ||
          (void 0 === o.value && !r.alwaysSet) ||
          (n[t.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const Ke = Object.freeze({ status: "aborted" }),
  Ze = (e) => ({ status: "dirty", value: e }),
  Qe = (e) => ({ status: "valid", value: e }),
  Je = (e) => "aborted" === e.status,
  Xe = (e) => "dirty" === e.status,
  et = (e) => "valid" === e.status,
  tt = (e) => "undefined" != typeof Promise && e instanceof Promise;
class nt {
  constructor(e, t, n, r) {
    (this._cachedPath = []),
      (this.parent = e),
      (this.data = t),
      (this._path = n),
      (this._key = r);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const rt = (e, t) => {
  if (et(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const t = new Ve(e.common.issues);
      return (this._error = t), this._error;
    },
  };
};
function ot(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: o,
  } = e;
  if (t && (n || r))
    throw new Error(
      'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
    );
  return t
    ? { errorMap: t, description: o }
    : {
        errorMap: (t, o) => {
          const { message: i } = e;
          return "invalid_enum_value" === t.code
            ? { message: i ?? o.defaultError }
            : void 0 === o.data
              ? { message: i ?? r ?? o.defaultError }
              : "invalid_type" !== t.code
                ? { message: o.defaultError }
                : { message: i ?? n ?? o.defaultError };
        },
        description: o,
      };
}
class it {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return ze(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: ze(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new Ye(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: ze(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (tt(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const n = this.safeParse(e, t);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    const n = {
        common: {
          issues: [],
          async: t?.async ?? !1,
          contextualErrorMap: t?.errorMap,
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: ze(e),
      },
      r = this._parseSync({ data: e, path: n.path, parent: n });
    return rt(n, r);
  }
  "~validate"(e) {
    const t = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: ze(e),
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return et(n) ? { value: n.value } : { issues: t.common.issues };
      } catch (e) {
        e?.message?.toLowerCase()?.includes("encountered") &&
          (this["~standard"].async = !0),
          (t.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
      et(e) ? { value: e.value } : { issues: t.common.issues },
    );
  }
  async parseAsync(e, t) {
    const n = await this.safeParseAsync(e, t);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    const n = {
        common: {
          issues: [],
          contextualErrorMap: t?.errorMap,
          async: !0,
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: ze(e),
      },
      r = this._parse({ data: e, path: n.path, parent: n }),
      o = await (tt(r) ? r : Promise.resolve(r));
    return rt(n, o);
  }
  refine(e, t) {
    const n = (e) =>
      "string" == typeof t || void 0 === t
        ? { message: t }
        : "function" == typeof t
          ? t(e)
          : t;
    return this._refinement((t, r) => {
      const o = e(t),
        i = () => r.addIssue({ code: He.custom, ...n(t) });
      return "undefined" != typeof Promise && o instanceof Promise
        ? o.then((e) => !!e || (i(), !1))
        : !!o || (i(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement(
      (n, r) =>
        !!e(n) || (r.addIssue("function" == typeof t ? t(n, r) : t), !1),
    );
  }
  _refinement(e) {
    return new rn({
      schema: this,
      typeName: fn.ZodEffects,
      effect: { type: "refinement", refinement: e },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    (this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (e) => this["~validate"](e),
      });
  }
  optional() {
    return on.create(this, this._def);
  }
  nullable() {
    return an.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ht.create(this);
  }
  promise() {
    return nn.create(this, this._def);
  }
  or(e) {
    return Gt.create([this, e], this._def);
  }
  and(e) {
    return $t.create(this, e, this._def);
  }
  transform(e) {
    return new rn({
      ...ot(this._def),
      schema: this,
      typeName: fn.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const t = "function" == typeof e ? e : () => e;
    return new sn({
      ...ot(this._def),
      innerType: this,
      defaultValue: t,
      typeName: fn.ZodDefault,
    });
  }
  brand() {
    return new un({
      typeName: fn.ZodBranded,
      type: this,
      ...ot(this._def),
    });
  }
  catch(e) {
    const t = "function" == typeof e ? e : () => e;
    return new ln({
      ...ot(this._def),
      innerType: this,
      catchValue: t,
      typeName: fn.ZodCatch,
    });
  }
  describe(e) {
    return new (0, this.constructor)({
      ...this._def,
      description: e,
    });
  }
  pipe(e) {
    return dn.create(this, e);
  }
  readonly() {
    return pn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const at = /^c[^\s-]{8,}$/i,
  st = /^[0-9a-z]+$/,
  lt = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  ct =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  ut = /^[a-z0-9_-]{21}$/i,
  dt = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  pt =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  ft =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let ht;
const mt =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  gt =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  yt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  vt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  bt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  St = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  _t =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  xt = new RegExp(`^${_t}$`);
function wt(e) {
  let t = "[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : null == e.precision && (t = `${t}(\\.\\d+)?`),
    `([01]\\d|2[0-3]):[0-5]\\d(:${t})${e.precision ? "+" : "?"}`
  );
}
function Et(e) {
  return new RegExp(`^${wt(e)}$`);
}
function Tt(e) {
  let t = `${_t}T${wt(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function kt(e, t) {
  return (
    !(("v4" !== t && t) || !mt.test(e)) || !(("v6" !== t && t) || !yt.test(e))
  );
}
function Ct(e, t) {
  if (!dt.test(e)) return !1;
  try {
    const [n] = e.split(".");
    if (!n) return !1;
    const r = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      o = JSON.parse(atob(r));
    return !(
      "object" != typeof o ||
      null === o ||
      ("typ" in o && "JWT" !== o?.typ) ||
      !o.alg ||
      (t && o.alg !== t)
    );
  } catch {
    return !1;
  }
}
function It(e, t) {
  return (
    !(("v4" !== t && t) || !gt.test(e)) || !(("v6" !== t && t) || !vt.test(e))
  );
}
class At extends it {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== Be.string)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.string,
          received: t.parsedType,
        }),
        Ke
      );
    }
    const t = new Ye();
    let n;
    for (const r of this._def.checks)
      if ("min" === r.kind)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            code: He.too_small,
            minimum: r.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if ("max" === r.kind)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            code: He.too_big,
            maximum: r.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if ("length" === r.kind) {
        const o = e.data.length > r.value,
          i = e.data.length < r.value;
        (o || i) &&
          ((n = this._getOrReturnCtx(e, n)),
          o
            ? $e(n, {
                code: He.too_big,
                maximum: r.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : i &&
              $e(n, {
                code: He.too_small,
                minimum: r.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if ("email" === r.kind)
        ft.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            validation: "email",
            code: He.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if ("emoji" === r.kind)
        ht ||
          (ht = new RegExp(
            "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
            "u",
          )),
          ht.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            $e(n, {
              validation: "emoji",
              code: He.invalid_string,
              message: r.message,
            }),
            t.dirty());
      else if ("uuid" === r.kind)
        ct.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            validation: "uuid",
            code: He.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if ("nanoid" === r.kind)
        ut.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            validation: "nanoid",
            code: He.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if ("cuid" === r.kind)
        at.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            validation: "cuid",
            code: He.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if ("cuid2" === r.kind)
        st.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            validation: "cuid2",
            code: He.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if ("ulid" === r.kind)
        lt.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            validation: "ulid",
            code: He.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if ("url" === r.kind)
        try {
          new URL(e.data);
        } catch {
          (n = this._getOrReturnCtx(e, n)),
            $e(n, {
              validation: "url",
              code: He.invalid_string,
              message: r.message,
            }),
            t.dirty();
        }
      else
        "regex" === r.kind
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              $e(n, {
                validation: "regex",
                code: He.invalid_string,
                message: r.message,
              }),
              t.dirty()))
          : "trim" === r.kind
            ? (e.data = e.data.trim())
            : "includes" === r.kind
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                $e(n, {
                  code: He.invalid_string,
                  validation: {
                    includes: r.value,
                    position: r.position,
                  },
                  message: r.message,
                }),
                t.dirty())
              : "toLowerCase" === r.kind
                ? (e.data = e.data.toLowerCase())
                : "toUpperCase" === r.kind
                  ? (e.data = e.data.toUpperCase())
                  : "startsWith" === r.kind
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      $e(n, {
                        code: He.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : "endsWith" === r.kind
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        $e(n, {
                          code: He.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : "datetime" === r.kind
                        ? Tt(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          $e(n, {
                            code: He.invalid_string,
                            validation: "datetime",
                            message: r.message,
                          }),
                          t.dirty())
                        : "date" === r.kind
                          ? xt.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            $e(n, {
                              code: He.invalid_string,
                              validation: "date",
                              message: r.message,
                            }),
                            t.dirty())
                          : "time" === r.kind
                            ? Et(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              $e(n, {
                                code: He.invalid_string,
                                validation: "time",
                                message: r.message,
                              }),
                              t.dirty())
                            : "duration" === r.kind
                              ? pt.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                $e(n, {
                                  validation: "duration",
                                  code: He.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : "ip" === r.kind
                                ? kt(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  $e(n, {
                                    validation: "ip",
                                    code: He.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : "jwt" === r.kind
                                  ? Ct(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    $e(n, {
                                      validation: "jwt",
                                      code: He.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : "cidr" === r.kind
                                    ? It(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      $e(n, {
                                        validation: "cidr",
                                        code: He.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : "base64" === r.kind
                                      ? bt.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        $e(n, {
                                          validation: "base64",
                                          code: He.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : "base64url" === r.kind
                                        ? St.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          $e(n, {
                                            validation: "base64url",
                                            code: He.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : Fe.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: He.invalid_string,
      ...We.errToObj(n),
    });
  }
  _addCheck(e) {
    return new At({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...We.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...We.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...We.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...We.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...We.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...We.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...We.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...We.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...We.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...We.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...We.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...We.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...We.errToObj(e) });
  }
  datetime(e) {
    return "string" == typeof e
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision: void 0 === e?.precision ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...We.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return "string" == typeof e
      ? this._addCheck({ kind: "time", precision: null, message: e })
      : this._addCheck({
          kind: "time",
          precision: void 0 === e?.precision ? null : e?.precision,
          ...We.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...We.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...We.errToObj(t),
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...We.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...We.errToObj(t),
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...We.errToObj(t),
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...We.errToObj(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...We.errToObj(t),
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...We.errToObj(t),
    });
  }
  nonempty(e) {
    return this.min(1, We.errToObj(e));
  }
  trim() {
    return new At({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new At({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new At({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => "datetime" === e.kind);
  }
  get isDate() {
    return !!this._def.checks.find((e) => "date" === e.kind);
  }
  get isTime() {
    return !!this._def.checks.find((e) => "time" === e.kind);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => "duration" === e.kind);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => "email" === e.kind);
  }
  get isURL() {
    return !!this._def.checks.find((e) => "url" === e.kind);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => "emoji" === e.kind);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => "uuid" === e.kind);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => "nanoid" === e.kind);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => "cuid" === e.kind);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => "cuid2" === e.kind);
  }
  get isULID() {
    return !!this._def.checks.find((e) => "ulid" === e.kind);
  }
  get isIP() {
    return !!this._def.checks.find((e) => "ip" === e.kind);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => "cidr" === e.kind);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => "base64" === e.kind);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => "base64url" === e.kind);
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      "min" === t.kind && (null === e || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      "max" === t.kind && (null === e || t.value < e) && (e = t.value);
    return e;
  }
}
function Ot(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    o = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(o).replace(".", "")) %
      Number.parseInt(t.toFixed(o).replace(".", ""))) /
    10 ** o
  );
}
At.create = (e) =>
  new At({
    checks: [],
    typeName: fn.ZodString,
    coerce: e?.coerce ?? !1,
    ...ot(e),
  });
class Rt extends it {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== Be.number)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.number,
          received: t.parsedType,
        }),
        Ke
      );
    }
    let t;
    const n = new Ye();
    for (const r of this._def.checks)
      "int" === r.kind
        ? Fe.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          $e(t, {
            code: He.invalid_type,
            expected: "integer",
            received: "float",
            message: r.message,
          }),
          n.dirty())
        : "min" === r.kind
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            $e(t, {
              code: He.too_small,
              minimum: r.value,
              type: "number",
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : "max" === r.kind
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              $e(t, {
                code: He.too_big,
                maximum: r.value,
                type: "number",
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : "multipleOf" === r.kind
              ? 0 !== Ot(e.data, r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                $e(t, {
                  code: He.not_multiple_of,
                  multipleOf: r.value,
                  message: r.message,
                }),
                n.dirty())
              : "finite" === r.kind
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  $e(t, { code: He.not_finite, message: r.message }),
                  n.dirty())
                : Fe.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, We.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, We.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, We.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, We.toString(t));
  }
  setLimit(e, t, n, r) {
    return new Rt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: n, message: We.toString(r) },
      ],
    });
  }
  _addCheck(e) {
    return new Rt({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: We.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: We.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: We.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: We.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: We.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: We.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: We.toString(e),
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: We.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: We.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      "min" === t.kind && (null === e || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      "max" === t.kind && (null === e || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        "int" === e.kind || ("multipleOf" === e.kind && Fe.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (const n of this._def.checks) {
      if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind)
        return !0;
      "min" === n.kind
        ? (null === t || n.value > t) && (t = n.value)
        : "max" === n.kind && (null === e || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
Rt.create = (e) =>
  new Rt({
    checks: [],
    typeName: fn.ZodNumber,
    coerce: e?.coerce || !1,
    ...ot(e),
  });
class Mt extends it {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== Be.bigint) return this._getInvalidInput(e);
    let t;
    const n = new Ye();
    for (const r of this._def.checks)
      "min" === r.kind
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          $e(t, {
            code: He.too_small,
            type: "bigint",
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : "max" === r.kind
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            $e(t, {
              code: He.too_big,
              type: "bigint",
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : "multipleOf" === r.kind
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              $e(t, {
                code: He.not_multiple_of,
                multipleOf: r.value,
                message: r.message,
              }),
              n.dirty())
            : Fe.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return (
      $e(t, {
        code: He.invalid_type,
        expected: Be.bigint,
        received: t.parsedType,
      }),
      Ke
    );
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, We.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, We.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, We.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, We.toString(t));
  }
  setLimit(e, t, n, r) {
    return new Mt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: n, message: We.toString(r) },
      ],
    });
  }
  _addCheck(e) {
    return new Mt({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: We.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: We.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: We.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: We.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: We.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      "min" === t.kind && (null === e || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      "max" === t.kind && (null === e || t.value < e) && (e = t.value);
    return e;
  }
}
Mt.create = (e) =>
  new Mt({
    checks: [],
    typeName: fn.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...ot(e),
  });
class Pt extends it {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Boolean(e.data)),
      this._getType(e) !== Be.boolean)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.boolean,
          received: t.parsedType,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
}
Pt.create = (e) =>
  new Pt({
    typeName: fn.ZodBoolean,
    coerce: e?.coerce || !1,
    ...ot(e),
  });
class Nt extends it {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== Be.date)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.date,
          received: t.parsedType,
        }),
        Ke
      );
    }
    if (Number.isNaN(e.data.getTime()))
      return $e(this._getOrReturnCtx(e), { code: He.invalid_date }), Ke;
    const t = new Ye();
    let n;
    for (const r of this._def.checks)
      "min" === r.kind
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          $e(n, {
            code: He.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: "date",
          }),
          t.dirty())
        : "max" === r.kind
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            $e(n, {
              code: He.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: "date",
            }),
            t.dirty())
          : Fe.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new Nt({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: We.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: We.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      "min" === t.kind && (null === e || t.value > e) && (e = t.value);
    return null != e ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      "max" === t.kind && (null === e || t.value < e) && (e = t.value);
    return null != e ? new Date(e) : null;
  }
}
Nt.create = (e) =>
  new Nt({
    checks: [],
    coerce: e?.coerce || !1,
    typeName: fn.ZodDate,
    ...ot(e),
  });
class Dt extends it {
  _parse(e) {
    if (this._getType(e) !== Be.symbol) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.symbol,
          received: t.parsedType,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
}
Dt.create = (e) => new Dt({ typeName: fn.ZodSymbol, ...ot(e) });
class jt extends it {
  _parse(e) {
    if (this._getType(e) !== Be.undefined) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.undefined,
          received: t.parsedType,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
}
jt.create = (e) => new jt({ typeName: fn.ZodUndefined, ...ot(e) });
class Lt extends it {
  _parse(e) {
    if (this._getType(e) !== Be.null) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.null,
          received: t.parsedType,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
}
Lt.create = (e) => new Lt({ typeName: fn.ZodNull, ...ot(e) });
class Ft extends it {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return Qe(e.data);
  }
}
Ft.create = (e) => new Ft({ typeName: fn.ZodAny, ...ot(e) });
class Ut extends it {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return Qe(e.data);
  }
}
Ut.create = (e) => new Ut({ typeName: fn.ZodUnknown, ...ot(e) });
class Bt extends it {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return (
      $e(t, {
        code: He.invalid_type,
        expected: Be.never,
        received: t.parsedType,
      }),
      Ke
    );
  }
}
Bt.create = (e) => new Bt({ typeName: fn.ZodNever, ...ot(e) });
class zt extends it {
  _parse(e) {
    if (this._getType(e) !== Be.undefined) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.void,
          received: t.parsedType,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
}
zt.create = (e) => new zt({ typeName: fn.ZodVoid, ...ot(e) });
class Ht extends it {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== Be.array)
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.array,
          received: t.parsedType,
        }),
        Ke
      );
    if (null !== r.exactLength) {
      const e = t.data.length > r.exactLength.value,
        o = t.data.length < r.exactLength.value;
      (e || o) &&
        ($e(t, {
          code: e ? He.too_big : He.too_small,
          minimum: o ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (null !== r.minLength &&
        t.data.length < r.minLength.value &&
        ($e(t, {
          code: He.too_small,
          minimum: r.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      null !== r.maxLength &&
        t.data.length > r.maxLength.value &&
        ($e(t, {
          code: He.too_big,
          maximum: r.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new nt(t, e, t.path, n))),
      ).then((e) => Ye.mergeArray(n, e));
    const o = [...t.data].map((e, n) =>
      r.type._parseSync(new nt(t, e, t.path, n)),
    );
    return Ye.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ht({
      ...this._def,
      minLength: { value: e, message: We.toString(t) },
    });
  }
  max(e, t) {
    return new Ht({
      ...this._def,
      maxLength: { value: e, message: We.toString(t) },
    });
  }
  length(e, t) {
    return new Ht({
      ...this._def,
      exactLength: { value: e, message: We.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
function Vt(e) {
  if (e instanceof qt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = on.create(Vt(r));
    }
    return new qt({ ...e._def, shape: () => t });
  }
  return e instanceof Ht
    ? new Ht({ ...e._def, type: Vt(e.element) })
    : e instanceof on
      ? on.create(Vt(e.unwrap()))
      : e instanceof an
        ? an.create(Vt(e.unwrap()))
        : e instanceof Yt
          ? Yt.create(e.items.map((e) => Vt(e)))
          : e;
}
Ht.create = (e, t) =>
  new Ht({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: fn.ZodArray,
    ...ot(t),
  });
class qt extends it {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (null !== this._cached) return this._cached;
    const e = this._def.shape(),
      t = Fe.objectKeys(e);
    return (this._cached = { shape: e, keys: t }), this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== Be.object) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.object,
          received: t.parsedType,
        }),
        Ke
      );
    }
    const { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: o } = this._getCached(),
      i = [];
    if (
      !(this._def.catchall instanceof Bt && "strip" === this._def.unknownKeys)
    )
      for (const e in n.data) o.includes(e) || i.push(e);
    const a = [];
    for (const e of o) {
      const t = r[e],
        o = n.data[e];
      a.push({
        key: { status: "valid", value: e },
        value: t._parse(new nt(n, o, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof Bt) {
      const e = this._def.unknownKeys;
      if ("passthrough" === e)
        for (const e of i)
          a.push({
            key: { status: "valid", value: e },
            value: { status: "valid", value: n.data[e] },
          });
      else if ("strict" === e)
        i.length > 0 &&
          ($e(n, { code: He.unrecognized_keys, keys: i }), t.dirty());
      else if ("strip" !== e)
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const e = this._def.catchall;
      for (const t of i) {
        const r = n.data[t];
        a.push({
          key: { status: "valid", value: t },
          value: e._parse(new nt(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            const e = [];
            for (const t of a) {
              const n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => Ye.mergeObjectSync(t, e))
      : Ye.mergeObjectSync(t, a);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      We.errToObj,
      new qt({
        ...this._def,
        unknownKeys: "strict",
        ...(void 0 !== e
          ? {
              errorMap: (t, n) => {
                const r = this._def.errorMap?.(t, n).message ?? n.defaultError;
                return "unrecognized_keys" === t.code
                  ? { message: We.errToObj(e).message ?? r }
                  : { message: r };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new qt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new qt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new qt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new qt({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: fn.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new qt({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    for (const n of Fe.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new qt({ ...this._def, shape: () => t });
  }
  omit(e) {
    const t = {};
    for (const n of Fe.objectKeys(this.shape)) e[n] || (t[n] = this.shape[n]);
    return new qt({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return Vt(this);
  }
  partial(e) {
    const t = {};
    for (const n of Fe.objectKeys(this.shape)) {
      const r = this.shape[n];
      e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
    }
    return new qt({ ...this._def, shape: () => t });
  }
  required(e) {
    const t = {};
    for (const n of Fe.objectKeys(this.shape))
      if (e && !e[n]) t[n] = this.shape[n];
      else {
        let e = this.shape[n];
        for (; e instanceof on; ) e = e._def.innerType;
        t[n] = e;
      }
    return new qt({ ...this._def, shape: () => t });
  }
  keyof() {
    return Xt(Fe.objectKeys(this.shape));
  }
}
(qt.create = (e, t) =>
  new qt({
    shape: () => e,
    unknownKeys: "strip",
    catchall: Bt.create(),
    typeName: fn.ZodObject,
    ...ot(t),
  })),
  (qt.strictCreate = (e, t) =>
    new qt({
      shape: () => e,
      unknownKeys: "strict",
      catchall: Bt.create(),
      typeName: fn.ZodObject,
      ...ot(t),
    })),
  (qt.lazycreate = (e, t) =>
    new qt({
      shape: e,
      unknownKeys: "strip",
      catchall: Bt.create(),
      typeName: fn.ZodObject,
      ...ot(t),
    }));
class Gt extends it {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          const n = {
            ...t,
            common: { ...t.common, issues: [] },
            parent: null,
          };
          return {
            result: await e._parseAsync({
              data: t.data,
              path: t.path,
              parent: n,
            }),
            ctx: n,
          };
        }),
      ).then(function (e) {
        for (const t of e) if ("valid" === t.result.status) return t.result;
        for (const n of e)
          if ("dirty" === n.result.status)
            return t.common.issues.push(...n.ctx.common.issues), n.result;
        const n = e.map((e) => new Ve(e.ctx.common.issues));
        return $e(t, { code: He.invalid_union, unionErrors: n }), Ke;
      });
    {
      let e;
      const r = [];
      for (const o of n) {
        const n = {
            ...t,
            common: { ...t.common, issues: [] },
            parent: null,
          },
          i = o._parseSync({ data: t.data, path: t.path, parent: n });
        if ("valid" === i.status) return i;
        "dirty" !== i.status || e || (e = { result: i, ctx: n }),
          n.common.issues.length && r.push(n.common.issues);
      }
      if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
      const o = r.map((e) => new Ve(e));
      return $e(t, { code: He.invalid_union, unionErrors: o }), Ke;
    }
  }
  get options() {
    return this._def.options;
  }
}
function Wt(e, t) {
  const n = ze(e),
    r = ze(t);
  if (e === t) return { valid: !0, data: e };
  if (n === Be.object && r === Be.object) {
    const n = Fe.objectKeys(t),
      r = Fe.objectKeys(e).filter((e) => -1 !== n.indexOf(e)),
      o = { ...e, ...t };
    for (const n of r) {
      const r = Wt(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      o[n] = r.data;
    }
    return { valid: !0, data: o };
  }
  if (n === Be.array && r === Be.array) {
    if (e.length !== t.length) return { valid: !1 };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = Wt(e[r], t[r]);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return n === Be.date && r === Be.date && +e === +t
    ? { valid: !0, data: e }
    : { valid: !1 };
}
Gt.create = (e, t) => new Gt({ options: e, typeName: fn.ZodUnion, ...ot(t) });
class $t extends it {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (Je(e) || Je(r)) return Ke;
        const o = Wt(e.value, r.value);
        return o.valid
          ? ((Xe(e) || Xe(r)) && t.dirty(), { status: t.value, value: o.data })
          : ($e(n, { code: He.invalid_intersection_types }), Ke);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
          this._def.right._parseSync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        );
  }
}
$t.create = (e, t, n) =>
  new $t({
    left: e,
    right: t,
    typeName: fn.ZodIntersection,
    ...ot(n),
  });
class Yt extends it {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Be.array)
      return (
        $e(n, {
          code: He.invalid_type,
          expected: Be.array,
          received: n.parsedType,
        }),
        Ke
      );
    if (n.data.length < this._def.items.length)
      return (
        $e(n, {
          code: He.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Ke
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      ($e(n, {
        code: He.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      t.dirty());
    const r = [...n.data]
      .map((e, t) => {
        const r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new nt(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async
      ? Promise.all(r).then((e) => Ye.mergeArray(t, e))
      : Ye.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Yt({ ...this._def, rest: e });
  }
}
Yt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Yt({
    items: e,
    typeName: fn.ZodTuple,
    rest: null,
    ...ot(t),
  });
};
class Kt extends it {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Be.map)
      return (
        $e(n, {
          code: He.invalid_type,
          expected: Be.map,
          received: n.parsedType,
        }),
        Ke
      );
    const r = this._def.keyType,
      o = this._def.valueType,
      i = [...n.data.entries()].map(([e, t], i) => ({
        key: r._parse(new nt(n, e, n.path, [i, "key"])),
        value: o._parse(new nt(n, t, n.path, [i, "value"])),
      }));
    if (n.common.async) {
      const e = new Map();
      return Promise.resolve().then(async () => {
        for (const n of i) {
          const r = await n.key,
            o = await n.value;
          if ("aborted" === r.status || "aborted" === o.status) return Ke;
          ("dirty" !== r.status && "dirty" !== o.status) || t.dirty(),
            e.set(r.value, o.value);
        }
        return { status: t.value, value: e };
      });
    }
    {
      const e = new Map();
      for (const n of i) {
        const r = n.key,
          o = n.value;
        if ("aborted" === r.status || "aborted" === o.status) return Ke;
        ("dirty" !== r.status && "dirty" !== o.status) || t.dirty(),
          e.set(r.value, o.value);
      }
      return { status: t.value, value: e };
    }
  }
}
Kt.create = (e, t, n) =>
  new Kt({ valueType: t, keyType: e, typeName: fn.ZodMap, ...ot(n) });
class Zt extends it {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Be.set)
      return (
        $e(n, {
          code: He.invalid_type,
          expected: Be.set,
          received: n.parsedType,
        }),
        Ke
      );
    const r = this._def;
    null !== r.minSize &&
      n.data.size < r.minSize.value &&
      ($e(n, {
        code: He.too_small,
        minimum: r.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      null !== r.maxSize &&
        n.data.size > r.maxSize.value &&
        ($e(n, {
          code: He.too_big,
          maximum: r.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty());
    const o = this._def.valueType;
    function i(e) {
      const n = new Set();
      for (const r of e) {
        if ("aborted" === r.status) return Ke;
        "dirty" === r.status && t.dirty(), n.add(r.value);
      }
      return { status: t.value, value: n };
    }
    const a = [...n.data.values()].map((e, t) =>
      o._parse(new nt(n, e, n.path, t)),
    );
    return n.common.async ? Promise.all(a).then((e) => i(e)) : i(a);
  }
  min(e, t) {
    return new Zt({
      ...this._def,
      minSize: { value: e, message: We.toString(t) },
    });
  }
  max(e, t) {
    return new Zt({
      ...this._def,
      maxSize: { value: e, message: We.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Zt.create = (e, t) =>
  new Zt({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: fn.ZodSet,
    ...ot(t),
  });
class Qt extends it {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Qt.create = (e, t) => new Qt({ getter: e, typeName: fn.ZodLazy, ...ot(t) });
class Jt extends it {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          received: t.data,
          code: He.invalid_literal,
          expected: this._def.value,
        }),
        Ke
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
function Xt(e, t) {
  return new en({ values: e, typeName: fn.ZodEnum, ...ot(t) });
}
Jt.create = (e, t) => new Jt({ value: e, typeName: fn.ZodLiteral, ...ot(t) });
class en extends it {
  _parse(e) {
    if ("string" != typeof e.data) {
      const t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        $e(t, {
          expected: Fe.joinValues(n),
          received: t.parsedType,
          code: He.invalid_type,
        }),
        Ke
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(e.data))
    ) {
      const t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        $e(t, {
          received: t.data,
          code: He.invalid_enum_value,
          options: n,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return en.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return en.create(
      this.options.filter((t) => !e.includes(t)),
      { ...this._def, ...t },
    );
  }
}
en.create = Xt;
class tn extends it {
  _parse(e) {
    const t = Fe.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== Be.string && n.parsedType !== Be.number) {
      const e = Fe.objectValues(t);
      return (
        $e(n, {
          expected: Fe.joinValues(e),
          received: n.parsedType,
          code: He.invalid_type,
        }),
        Ke
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(Fe.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      const e = Fe.objectValues(t);
      return (
        $e(n, {
          received: n.data,
          code: He.invalid_enum_value,
          options: e,
        }),
        Ke
      );
    }
    return Qe(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
tn.create = (e, t) =>
  new tn({ values: e, typeName: fn.ZodNativeEnum, ...ot(t) });
class nn extends it {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== Be.promise && !1 === t.common.async)
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.promise,
          received: t.parsedType,
        }),
        Ke
      );
    const n = t.parsedType === Be.promise ? t.data : Promise.resolve(t.data);
    return Qe(
      n.then((e) =>
        this._def.type.parseAsync(e, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        }),
      ),
    );
  }
}
nn.create = (e, t) => new nn({ type: e, typeName: fn.ZodPromise, ...ot(t) });
class rn extends it {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === fn.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      o = {
        addIssue: (e) => {
          $e(n, e), e.fatal ? t.abort() : t.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), "preprocess" === r.type)) {
      const e = r.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if ("aborted" === t.value) return Ke;
          const r = await this._def.schema._parseAsync({
            data: e,
            path: n.path,
            parent: n,
          });
          return "aborted" === r.status
            ? Ke
            : "dirty" === r.status || "dirty" === t.value
              ? Ze(r.value)
              : r;
        });
      {
        if ("aborted" === t.value) return Ke;
        const r = this._def.schema._parseSync({
          data: e,
          path: n.path,
          parent: n,
        });
        return "aborted" === r.status
          ? Ke
          : "dirty" === r.status || "dirty" === t.value
            ? Ze(r.value)
            : r;
      }
    }
    if ("refinement" === r.type) {
      const e = (e) => {
        const t = r.refinement(e, o);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return e;
      };
      if (!1 === n.common.async) {
        const r = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return "aborted" === r.status
          ? Ke
          : ("dirty" === r.status && t.dirty(),
            e(r.value),
            { status: t.value, value: r.value });
      }
      return this._def.schema
        ._parseAsync({ data: n.data, path: n.path, parent: n })
        .then((n) =>
          "aborted" === n.status
            ? Ke
            : ("dirty" === n.status && t.dirty(),
              e(n.value).then(() => ({
                status: t.value,
                value: n.value,
              }))),
        );
    }
    if ("transform" === r.type) {
      if (!1 === n.common.async) {
        const e = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!et(e)) return Ke;
        const i = r.transform(e.value, o);
        if (i instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: t.value, value: i };
      }
      return this._def.schema
        ._parseAsync({ data: n.data, path: n.path, parent: n })
        .then((e) =>
          et(e)
            ? Promise.resolve(r.transform(e.value, o)).then((e) => ({
                status: t.value,
                value: e,
              }))
            : Ke,
        );
    }
    Fe.assertNever(r);
  }
}
(rn.create = (e, t, n) =>
  new rn({
    schema: e,
    typeName: fn.ZodEffects,
    effect: t,
    ...ot(n),
  })),
  (rn.createWithPreprocess = (e, t, n) =>
    new rn({
      schema: t,
      effect: { type: "preprocess", transform: e },
      typeName: fn.ZodEffects,
      ...ot(n),
    }));
class on extends it {
  _parse(e) {
    return this._getType(e) === Be.undefined
      ? Qe(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
on.create = (e, t) =>
  new on({ innerType: e, typeName: fn.ZodOptional, ...ot(t) });
class an extends it {
  _parse(e) {
    return this._getType(e) === Be.null
      ? Qe(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
an.create = (e, t) =>
  new an({ innerType: e, typeName: fn.ZodNullable, ...ot(t) });
class sn extends it {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return (
      t.parsedType === Be.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
sn.create = (e, t) =>
  new sn({
    innerType: e,
    typeName: fn.ZodDefault,
    defaultValue: "function" == typeof t.default ? t.default : () => t.default,
    ...ot(t),
  });
class ln extends it {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return tt(r)
      ? r.then((e) => ({
          status: "valid",
          value:
            "valid" === e.status
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new Ve(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            "valid" === r.status
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new Ve(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ln.create = (e, t) =>
  new ln({
    innerType: e,
    typeName: fn.ZodCatch,
    catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
    ...ot(t),
  });
class cn extends it {
  _parse(e) {
    if (this._getType(e) !== Be.nan) {
      const t = this._getOrReturnCtx(e);
      return (
        $e(t, {
          code: He.invalid_type,
          expected: Be.nan,
          received: t.parsedType,
        }),
        Ke
      );
    }
    return { status: "valid", value: e.data };
  }
}
(cn.create = (e) => new cn({ typeName: fn.ZodNaN, ...ot(e) })),
  Symbol("zod_brand");
class un extends it {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t,
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class dn extends it {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const e = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return "aborted" === e.status
          ? Ke
          : "dirty" === e.status
            ? (t.dirty(), Ze(e.value))
            : this._def.out._parseAsync({
                data: e.value,
                path: n.path,
                parent: n,
              });
      })();
    {
      const e = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n,
      });
      return "aborted" === e.status
        ? Ke
        : "dirty" === e.status
          ? (t.dirty(), { status: "dirty", value: e.value })
          : this._def.out._parseSync({
              data: e.value,
              path: n.path,
              parent: n,
            });
    }
  }
  static create(e, t) {
    return new dn({ in: e, out: t, typeName: fn.ZodPipeline });
  }
}
class pn extends it {
  _parse(e) {
    const t = this._def.innerType._parse(e),
      n = (e) => (et(e) && (e.value = Object.freeze(e.value)), e);
    return tt(t) ? t.then((e) => n(e)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
var fn;
(pn.create = (e, t) =>
  new pn({ innerType: e, typeName: fn.ZodReadonly, ...ot(t) })),
  qt.lazycreate,
  (function (e) {
    (e.ZodString = "ZodString"),
      (e.ZodNumber = "ZodNumber"),
      (e.ZodNaN = "ZodNaN"),
      (e.ZodBigInt = "ZodBigInt"),
      (e.ZodBoolean = "ZodBoolean"),
      (e.ZodDate = "ZodDate"),
      (e.ZodSymbol = "ZodSymbol"),
      (e.ZodUndefined = "ZodUndefined"),
      (e.ZodNull = "ZodNull"),
      (e.ZodAny = "ZodAny"),
      (e.ZodUnknown = "ZodUnknown"),
      (e.ZodNever = "ZodNever"),
      (e.ZodVoid = "ZodVoid"),
      (e.ZodArray = "ZodArray"),
      (e.ZodObject = "ZodObject"),
      (e.ZodUnion = "ZodUnion"),
      (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
      (e.ZodIntersection = "ZodIntersection"),
      (e.ZodTuple = "ZodTuple"),
      (e.ZodRecord = "ZodRecord"),
      (e.ZodMap = "ZodMap"),
      (e.ZodSet = "ZodSet"),
      (e.ZodFunction = "ZodFunction"),
      (e.ZodLazy = "ZodLazy"),
      (e.ZodLiteral = "ZodLiteral"),
      (e.ZodEnum = "ZodEnum"),
      (e.ZodEffects = "ZodEffects"),
      (e.ZodNativeEnum = "ZodNativeEnum"),
      (e.ZodOptional = "ZodOptional"),
      (e.ZodNullable = "ZodNullable"),
      (e.ZodDefault = "ZodDefault"),
      (e.ZodCatch = "ZodCatch"),
      (e.ZodPromise = "ZodPromise"),
      (e.ZodBranded = "ZodBranded"),
      (e.ZodPipeline = "ZodPipeline"),
      (e.ZodReadonly = "ZodReadonly");
  })(fn || (fn = {})),
  At.create,
  Rt.create,
  cn.create,
  Mt.create,
  Pt.create,
  Nt.create,
  Dt.create,
  jt.create,
  Lt.create,
  Ft.create,
  Ut.create,
  Bt.create,
  zt.create,
  Ht.create,
  qt.create,
  qt.strictCreate,
  Gt.create,
  $t.create,
  Yt.create,
  Kt.create,
  Zt.create,
  Qt.create,
  Jt.create,
  en.create,
  tn.create,
  nn.create,
  rn.create,
  on.create,
  an.create,
  rn.createWithPreprocess,
  dn.create;
class hn extends Error {
  constructor(e, t) {
    super(e),
      (this.name = "ParseError"),
      (this.type = t.type),
      (this.field = t.field),
      (this.value = t.value),
      (this.line = t.line);
  }
}
const mn = 32;
function gn(e) {}
function yn(e, t, n) {
  return (
    100 === n &&
    97 === e.charCodeAt(t + 1) &&
    116 === e.charCodeAt(t + 2) &&
    97 === e.charCodeAt(t + 3) &&
    58 === e.charCodeAt(t + 4)
  );
}
function vn(e, t, n) {
  return (
    101 === n &&
    118 === e.charCodeAt(t + 1) &&
    101 === e.charCodeAt(t + 2) &&
    110 === e.charCodeAt(t + 3) &&
    116 === e.charCodeAt(t + 4) &&
    58 === e.charCodeAt(t + 5)
  );
}
class bn extends TransformStream {
  constructor({ onError: e, onRetry: t, onComment: n, maxBufferSize: r } = {}) {
    let o;
    super({
      start(i) {
        o = (function (e) {
          if ("function" == typeof e)
            throw new TypeError(
              "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?",
            );
          const {
              onEvent: t = gn,
              onError: n = gn,
              onRetry: r = gn,
              onComment: o,
              maxBufferSize: i,
            } = e,
            a = [];
          let s,
            l,
            c = 0,
            u = !0,
            d = "",
            p = 0,
            f = !1;
          function h() {
            void 0 !== i &&
              (c + d.length <= i ||
                ((f = !0),
                (a.length = 0),
                (c = 0),
                (s = void 0),
                (d = ""),
                (p = 0),
                (l = void 0),
                n(
                  new hn(
                    `Buffered data exceeded max buffer size of ${i} characters`,
                    { type: "max-buffer-size-exceeded" },
                  ),
                )));
          }
          function m(e) {
            let n = 0;
            if (-1 === e.indexOf("\r")) {
              let r = e.indexOf("\n", n);
              for (; -1 !== r; ) {
                if (n === r) {
                  p > 0 && t({ id: s, event: l, data: d }),
                    (s = void 0),
                    (d = ""),
                    (p = 0),
                    (l = void 0),
                    (n = r + 1),
                    (r = e.indexOf("\n", n));
                  continue;
                }
                const o = e.charCodeAt(n);
                if (yn(e, n, o)) {
                  const o = e.charCodeAt(n + 5) === mn ? n + 6 : n + 5,
                    i = e.slice(o, r);
                  if (0 === p && 10 === e.charCodeAt(r + 1)) {
                    t({ id: s, event: l, data: i }),
                      (s = void 0),
                      (d = ""),
                      (l = void 0),
                      (n = r + 2),
                      (r = e.indexOf("\n", n));
                    continue;
                  }
                  (d = 0 === p ? i : `${d}\n${i}`), p++;
                } else
                  vn(e, n, o)
                    ? (l =
                        e.slice(
                          e.charCodeAt(n + 6) === mn ? n + 7 : n + 6,
                          r,
                        ) || void 0)
                    : g(e, n, r);
                (n = r + 1), (r = e.indexOf("\n", n));
              }
              return e.slice(n);
            }
            for (; n < e.length; ) {
              const t = e.indexOf("\r", n),
                r = e.indexOf("\n", n);
              let o = -1;
              if (
                (-1 !== t && -1 !== r
                  ? (o = t < r ? t : r)
                  : -1 !== t
                    ? (o = t === e.length - 1 ? -1 : t)
                    : -1 !== r && (o = r),
                -1 === o)
              )
                break;
              g(e, n, o),
                (n = o + 1),
                13 === e.charCodeAt(n - 1) && 10 === e.charCodeAt(n) && n++;
            }
            return e.slice(n);
          }
          function g(e, n, r) {
            if (n === r)
              return (
                p > 0 && t({ id: s, event: l, data: d }),
                (s = void 0),
                (d = ""),
                (p = 0),
                void (l = void 0)
              );
            const i = e.charCodeAt(n);
            if (yn(e, n, i)) {
              const t = e.charCodeAt(n + 5) === mn ? n + 6 : n + 5,
                o = e.slice(t, r);
              return (d = 0 === p ? o : `${d}\n${o}`), void p++;
            }
            if (vn(e, n, i))
              return void (l =
                e.slice(e.charCodeAt(n + 6) === mn ? n + 7 : n + 6, r) ||
                void 0);
            if (
              105 === i &&
              100 === e.charCodeAt(n + 1) &&
              58 === e.charCodeAt(n + 2)
            ) {
              const t = e.slice(e.charCodeAt(n + 3) === mn ? n + 4 : n + 3, r);
              return void (s = t.includes("\0") ? void 0 : t);
            }
            if (58 === i) {
              if (o) {
                const t = e.slice(n, r);
                o(t.slice(e.charCodeAt(n + 1) === mn ? 2 : 1));
              }
              return;
            }
            const a = e.slice(n, r),
              c = a.indexOf(":");
            if (-1 === c) return void y(a, "", a);
            const u = a.slice(0, c),
              f = a.charCodeAt(c + 1) === mn ? 2 : 1;
            y(u, a.slice(c + f), a);
          }
          function y(e, t, o) {
            switch (e) {
              case "event":
                l = t || void 0;
                break;
              case "data":
                (d = 0 === p ? t : `${d}\n${t}`), p++;
                break;
              case "id":
                s = t.includes("\0") ? void 0 : t;
                break;
              case "retry":
                /^\d+$/.test(t)
                  ? r(parseInt(t, 10))
                  : n(
                      new hn(`Invalid \`retry\` value: "${t}"`, {
                        type: "invalid-retry",
                        value: t,
                        line: o,
                      }),
                    );
                break;
              default:
                n(
                  new hn(
                    `Unknown field "${e.length > 20 ? `${e.slice(0, 20)}…` : e}"`,
                    {
                      type: "unknown-field",
                      field: e,
                      value: t,
                      line: o,
                    },
                  ),
                );
            }
          }
          return {
            feed: function (e) {
              if (f)
                throw new Error(
                  "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.",
                );
              if (
                (u &&
                  ((u = !1),
                  239 === e.charCodeAt(0) &&
                    187 === e.charCodeAt(1) &&
                    191 === e.charCodeAt(2) &&
                    (e = e.slice(3))),
                0 === a.length)
              ) {
                const t = m(e);
                return "" !== t && (a.push(t), (c = t.length)), void h();
              }
              if (-1 === e.indexOf("\n") && -1 === e.indexOf("\r"))
                return a.push(e), (c += e.length), void h();
              a.push(e);
              const t = a.join("");
              (a.length = 0), (c = 0);
              const n = m(t);
              "" !== n && (a.push(n), (c = n.length)), h();
            },
            reset: function (e = {}) {
              if (e.consume && a.length > 0) {
                const e = a.join("");
                g(e, 0, e.length);
              }
              (u = !0),
                (s = void 0),
                (d = ""),
                (p = 0),
                (l = void 0),
                (a.length = 0),
                (c = 0),
                (f = !1);
            },
          };
        })({
          onEvent: (e) => {
            i.enqueue(e);
          },
          onError(t) {
            "function" == typeof e && e(t),
              ("terminate" === e || "max-buffer-size-exceeded" === t.type) &&
                i.error(t);
          },
          onRetry: t,
          onComment: n,
          maxBufferSize: r,
        });
      },
      transform(e) {
        o.feed(e);
      },
    });
  }
}
Symbol.for("workflow-serialize"), Symbol.for("workflow-deserialize");
var { btoa: Sn, atob: _n } = globalThis;
async function xn(e) {
  var t;
  try {
    await (null == (t = e.body) ? void 0 : t.cancel());
  } catch (e) {}
}
var wn,
  En,
  Tn = "AI_DownloadError",
  kn = `vercel.ai.error.${Tn}`,
  Cn = Symbol.for(kn),
  In = class extends ((En = s), (wn = Cn), En) {
    constructor({
      url: e,
      statusCode: t,
      statusText: n,
      cause: r,
      message: o = null == r
        ? `Failed to download ${e}: ${t} ${n}`
        : `Failed to download ${e}: ${r}`,
    }) {
      super({ name: Tn, message: o, cause: r }),
        (this[wn] = !0),
        (this.url = e),
        (this.statusCode = t),
        (this.statusText = n);
    }
    static isInstance(e) {
      return s.hasMarker(e, kn);
    }
  };
function An(e = globalThis) {
  return null != e.window;
}
function On(e) {
  let t;
  try {
    t = new URL(e);
  } catch (t) {
    throw new In({ url: e, message: `Invalid URL: ${e}` });
  }
  if ("data:" === t.protocol) return;
  if ("http:" !== t.protocol && "https:" !== t.protocol)
    throw new In({
      url: e,
      message: `URL scheme must be http, https, or data, got ${t.protocol}`,
    });
  const n = t.hostname.toLowerCase().replace(/\.+$/, "");
  if (!n) throw new In({ url: e, message: "URL must have a hostname" });
  if ("localhost" === n || n.endsWith(".local") || n.endsWith(".localhost"))
    throw new In({
      url: e,
      message: `URL with hostname ${n} is not allowed`,
    });
  if (n.startsWith("[") && n.endsWith("]")) {
    if (
      (function (e) {
        const t = (function (e) {
          let t = e.toLowerCase();
          const n = t.indexOf("%");
          -1 !== n && (t = t.slice(0, n));
          const r = t.split("::");
          if (r.length > 2) return null;
          const o = (e) => {
              if ("" === e) return [];
              const t = [],
                n = e.split(":");
              for (let e = 0; e < n.length; e++) {
                const r = n[e];
                if (r.includes(".")) {
                  if (e !== n.length - 1 || !Rn(r)) return null;
                  const [o, i, a, s] = r.split(".").map(Number);
                  t.push((o << 8) | i, (a << 8) | s);
                  continue;
                }
                if (!/^[0-9a-f]{1,4}$/.test(r)) return null;
                t.push(parseInt(r, 16));
              }
              return t;
            },
            i = o(r[0]);
          if (null === i) return null;
          if (2 === r.length) {
            const e = o(r[1]);
            if (null === e) return null;
            const t = 8 - i.length - e.length;
            return t < 0 ? null : [...i, ...new Array(t).fill(0), ...e];
          }
          return 8 === i.length ? i : null;
        })(e);
        if (null === t) return !0;
        const n = (e) => t.slice(0, e).every((e) => 0 === e);
        return (
          !(!n(7 /* vendor/module-7 */) || (0 !== t[7] && 1 !== t[7])) ||
          64512 == (65024 & t[0]) ||
          65152 == (65472 & t[0]) ||
          65216 == (65472 & t[0]) ||
          !(65280 & ~t[0]) ||
          (!!(
            n(6) ||
            (n(5) && 65535 === t[5]) ||
            (n(4) && 65535 === t[4] && 0 === t[5]) ||
            (100 === t[0] &&
              65435 === t[1] &&
              0 === t[2] &&
              0 === t[3] &&
              0 === t[4] &&
              0 === t[5]) ||
            (100 === t[0] && 65435 === t[1] && 1 === t[2])
          ) &&
            Mn(
              `${(t[6] >> 8) & 255}.${255 & t[6]}.${(t[7] >> 8) & 255}.${255 & t[7]}`,
            ))
        );
      })(n.slice(1, -1))
    )
      throw new In({
        url: e,
        message: `URL with IPv6 address ${n} is not allowed`,
      });
  } else if (Rn(n) && Mn(n))
    throw new In({
      url: e,
      message: `URL with IP address ${n} is not allowed`,
    });
}
function Rn(e) {
  const t = e.split(".");
  return (
    4 === t.length &&
    t.every((e) => {
      const t = Number(e);
      return Number.isInteger(t) && t >= 0 && t <= 255 && String(t) === e;
    })
  );
}
function Mn(e) {
  const t = e.split(".").map(Number),
    [n, r, o] = t;
  return (
    0 === n ||
    10 === n ||
    (100 === n && r >= 64 && r <= 127) ||
    127 === n ||
    (169 === n && 254 === r) ||
    (172 === n && r >= 16 && r <= 31) ||
    (192 === n && 0 === r && 0 === o) ||
    (192 === n && 168 === r) ||
    (198 === n && (18 === r || 19 === r)) ||
    n >= 240
  );
}
async function Pn({ response: e, url: t, maxBytes: n = 2147483648 }) {
  const r = e.headers.get("content-length");
  if (null != r) {
    const o = parseInt(r, 10);
    if (!isNaN(o) && o > n)
      throw (
        (await xn(e),
        new In({
          url: t,
          message: `Download of ${t} exceeded maximum size of ${n} bytes (Content-Length: ${o}).`,
        }))
      );
  }
  const o = e.body;
  if (null == o) return new Uint8Array(0);
  const i = o.getReader(),
    a = [];
  let s = 0;
  try {
    for (;;) {
      const { done: e, value: r } = await i.read();
      if (e) break;
      if (((s += r.length), s > n))
        throw new In({
          url: t,
          message: `Download of ${t} exceeded maximum size of ${n} bytes.`,
        });
      a.push(r);
    }
  } finally {
    try {
      await i.cancel();
    } finally {
      i.releaseLock();
    }
  }
  const l = new Uint8Array(s);
  let c = 0;
  for (const e of a) l.set(e, c), (c += e.length);
  return l;
}
var Nn = ({
    prefix: e,
    size: t = 16,
    alphabet:
      n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    separator: r = "-",
  } = {}) => {
    const o = () => {
      const e = n.length,
        r = new Array(t);
      for (let o = 0; o < t; o++) r[o] = n[(Math.random() * e) | 0];
      return r.join("");
    };
    if (null == e) return o;
    if (n.includes(r))
      throw new _({
        argument: "separator",
        message: `The separator "${r}" must not be part of the alphabet "${n}".`,
      });
    return () => `${e}${r}${o()}`;
  },
  Dn = Nn();
function jn(e) {
  if (null == e) return {};
  const t = {};
  if (e instanceof Headers)
    e.forEach((e, n) => {
      t[n.toLowerCase()] = e;
    });
  else {
    Array.isArray(e) || (e = Object.entries(e));
    for (const [n, r] of e) null != r && (t[n.toLowerCase()] = r);
  }
  return t;
}
var Ln =
    /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
  Fn =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Un(e) {
  const t = JSON.parse(e);
  return null === t ||
    "object" != typeof t ||
    (!1 === Ln.test(e) && !1 === Fn.test(e))
    ? t
    : (function (e) {
        let t = [e];
        for (; t.length; ) {
          const e = t;
          t = [];
          for (const n of e) {
            if (Object.prototype.hasOwnProperty.call(n, "__proto__"))
              throw new SyntaxError(
                "Object contains forbidden prototype property",
              );
            if (
              Object.prototype.hasOwnProperty.call(n, "constructor") &&
              null !== n.constructor &&
              "object" == typeof n.constructor &&
              Object.prototype.hasOwnProperty.call(n.constructor, "prototype")
            )
              throw new SyntaxError(
                "Object contains forbidden prototype property",
              );
            for (const e in n) {
              const r = n[e];
              r && "object" == typeof r && t.push(r);
            }
          }
        }
        return e;
      })(t);
}
function Bn(e) {
  if (
    "object" === e.type ||
    (Array.isArray(e.type) && e.type.includes("object"))
  ) {
    e.additionalProperties = !1;
    const { properties: t } = e;
    if (null != t) for (const e of Object.keys(t)) t[e] = zn(t[e]);
  }
  null != e.items &&
    (e.items = Array.isArray(e.items) ? e.items.map(zn) : zn(e.items)),
    null != e.anyOf && (e.anyOf = e.anyOf.map(zn)),
    null != e.allOf && (e.allOf = e.allOf.map(zn)),
    null != e.oneOf && (e.oneOf = e.oneOf.map(zn));
  const { definitions: t } = e;
  if (null != t) for (const e of Object.keys(t)) t[e] = zn(t[e]);
  return e;
}
function zn(e) {
  return "boolean" == typeof e ? e : Bn(e);
}
var Hn = Symbol("Let zodToJsonSchema decide on which parser to use"),
  Vn = {
    name: void 0,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: !0,
    rejectedAdditionalProperties: !1,
    definitionPath: "definitions",
    strictUnions: !1,
    definitions: {},
    errorMessages: !1,
    patternStrategy: "escape",
    applyRegexFlags: !1,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
  };
function qn(e, t) {
  return gr(e.type._def, t);
}
function Gn(e, t, n) {
  const r = null != n ? n : t.dateStrategy;
  if (Array.isArray(r)) return { anyOf: r.map((n) => Gn(e, t, n)) };
  switch (r) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return Wn(e);
  }
}
var Wn = (e) => {
    const t = { type: "integer", format: "unix-time" };
    for (const n of e.checks)
      switch (n.kind) {
        case "min":
          t.minimum = n.value;
          break;
        case "max":
          t.maximum = n.value;
      }
    return t;
  },
  $n = void 0,
  Yn = /^[cC][^\s-]{8,}$/,
  Kn = /^[0-9a-z]+$/,
  Zn = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Qn =
    /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  Jn = () => (
    void 0 === $n &&
      ($n = RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u",
      )),
    $n
  ),
  Xn =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  er =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  tr = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  nr = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  rr = /^[a-zA-Z0-9_-]{21}$/,
  or = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
function ir(e, t) {
  const n = { type: "string" };
  if (e.checks)
    for (const r of e.checks)
      switch (r.kind) {
        case "min":
          n.minLength =
            "number" == typeof n.minLength
              ? Math.max(n.minLength, r.value)
              : r.value;
          break;
        case "max":
          n.maxLength =
            "number" == typeof n.maxLength
              ? Math.min(n.maxLength, r.value)
              : r.value;
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              lr(n, "email", r.message, t);
              break;
            case "format:idn-email":
              lr(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              cr(n, Qn, r.message, t);
          }
          break;
        case "url":
          lr(n, "uri", r.message, t);
          break;
        case "uuid":
          lr(n, "uuid", r.message, t);
          break;
        case "regex":
          cr(n, r.regex, r.message, t);
          break;
        case "cuid":
          cr(n, Yn, r.message, t);
          break;
        case "cuid2":
          cr(n, Kn, r.message, t);
          break;
        case "startsWith":
          cr(n, RegExp(`^${ar(r.value, t)}`), r.message, t);
          break;
        case "endsWith":
          cr(n, RegExp(`${ar(r.value, t)}$`), r.message, t);
          break;
        case "datetime":
          lr(n, "date-time", r.message, t);
          break;
        case "date":
          lr(n, "date", r.message, t);
          break;
        case "time":
          lr(n, "time", r.message, t);
          break;
        case "duration":
          lr(n, "duration", r.message, t);
          break;
        case "length":
          (n.minLength =
            "number" == typeof n.minLength
              ? Math.max(n.minLength, r.value)
              : r.value),
            (n.maxLength =
              "number" == typeof n.maxLength
                ? Math.min(n.maxLength, r.value)
                : r.value);
          break;
        case "includes":
          cr(n, RegExp(ar(r.value, t)), r.message, t);
          break;
        case "ip":
          "v6" !== r.version && lr(n, "ipv4", r.message, t),
            "v4" !== r.version && lr(n, "ipv6", r.message, t);
          break;
        case "base64url":
          cr(n, nr, r.message, t);
          break;
        case "jwt":
          cr(n, or, r.message, t);
          break;
        case "cidr":
          "v6" !== r.version && cr(n, Xn, r.message, t),
            "v4" !== r.version && cr(n, er, r.message, t);
          break;
        case "emoji":
          cr(n, Jn(), r.message, t);
          break;
        case "ulid":
          cr(n, Zn, r.message, t);
          break;
        case "base64":
          switch (t.base64Strategy) {
            case "format:binary":
              lr(n, "binary", r.message, t);
              break;
            case "contentEncoding:base64":
              n.contentEncoding = "base64";
              break;
            case "pattern:zod":
              cr(n, tr, r.message, t);
          }
          break;
        case "nanoid":
          cr(n, rr, r.message, t);
      }
  return n;
}
function ar(e, t) {
  return "escape" === t.patternStrategy
    ? (function (e) {
        let t = "";
        for (let n = 0; n < e.length; n++)
          sr.has(e[n]) || (t += "\\"), (t += e[n]);
        return t;
      })(e)
    : e;
}
var sr = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789",
);
function lr(e, t, n, r) {
  var o;
  e.format || (null == (o = e.anyOf) ? void 0 : o.some((e) => e.format))
    ? (e.anyOf || (e.anyOf = []),
      e.format && (e.anyOf.push({ format: e.format }), delete e.format),
      e.anyOf.push({
        format: t,
        ...(n && r.errorMessages && { errorMessage: { format: n } }),
      }))
    : (e.format = t);
}
function cr(e, t, n, r) {
  var o;
  e.pattern || (null == (o = e.allOf) ? void 0 : o.some((e) => e.pattern))
    ? (e.allOf || (e.allOf = []),
      e.pattern && (e.allOf.push({ pattern: e.pattern }), delete e.pattern),
      e.allOf.push({
        pattern: ur(t, r),
        ...(n && r.errorMessages && { errorMessage: { pattern: n } }),
      }))
    : (e.pattern = ur(t, r));
}
function ur(e, t) {
  var n;
  if (!t.applyRegexFlags || !e.flags) return e.source;
  const r = e.flags.includes("i"),
    o = e.flags.includes("m"),
    i = e.flags.includes("s"),
    a = r ? e.source.toLowerCase() : e.source;
  let s = "",
    l = !1,
    c = !1,
    u = !1;
  for (let e = 0; e < a.length; e++)
    if (l) (s += a[e]), (l = !1);
    else {
      if (r)
        if (c) {
          if (a[e].match(/[a-z]/)) {
            u
              ? ((s += a[e]),
                (s += `${a[e - 2]}-${a[e]}`.toUpperCase()),
                (u = !1))
              : "-" === a[e + 1] &&
                  (null == (n = a[e + 2]) ? void 0 : n.match(/[a-z]/))
                ? ((s += a[e]), (u = !0))
                : (s += `${a[e]}${a[e].toUpperCase()}`);
            continue;
          }
        } else if (a[e].match(/[a-z]/)) {
          s += `[${a[e]}${a[e].toUpperCase()}]`;
          continue;
        }
      if (o) {
        if ("^" === a[e]) {
          s += "(^|(?<=[\r\n]))";
          continue;
        }
        if ("$" === a[e]) {
          s += "($|(?=[\r\n]))";
          continue;
        }
      }
      i && "." === a[e]
        ? (s += c ? `${a[e]}\r\n` : `[${a[e]}\r\n]`)
        : ((s += a[e]),
          "\\" === a[e]
            ? (l = !0)
            : c && "]" === a[e]
              ? (c = !1)
              : c || "[" !== a[e] || (c = !0));
    }
  try {
    new RegExp(s);
  } catch (t) {
    return e.source;
  }
  return s;
}
function dr(e, t) {
  var n, r, o, i, a, s;
  const l = {
    type: "object",
    additionalProperties:
      null !=
      (n = gr(e.valueType._def, {
        ...t,
        currentPath: [...t.currentPath, "additionalProperties"],
      }))
        ? n
        : t.allowedAdditionalProperties,
  };
  if (
    (null == (r = e.keyType) ? void 0 : r._def.typeName) === fn.ZodString &&
    (null == (o = e.keyType._def.checks) ? void 0 : o.length)
  ) {
    const { type: n, ...r } = ir(e.keyType._def, t);
    return { ...l, propertyNames: r };
  }
  if ((null == (i = e.keyType) ? void 0 : i._def.typeName) === fn.ZodEnum)
    return { ...l, propertyNames: { enum: e.keyType._def.values } };
  if (
    (null == (a = e.keyType) ? void 0 : a._def.typeName) === fn.ZodBranded &&
    e.keyType._def.type._def.typeName === fn.ZodString &&
    (null == (s = e.keyType._def.type._def.checks) ? void 0 : s.length)
  ) {
    const { type: n, ...r } = qn(e.keyType._def, t);
    return { ...l, propertyNames: r };
  }
  return l;
}
var pr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
function fr(e) {
  try {
    return e.isOptional();
  } catch (e) {
    return !0;
  }
}
var hr = (e, t, n) => {
    switch (t) {
      case fn.ZodString:
        return ir(e, n);
      case fn.ZodNumber:
        return (function (e) {
          const t = { type: "number" };
          if (!e.checks) return t;
          for (const n of e.checks)
            switch (n.kind) {
              case "int":
                t.type = "integer";
                break;
              case "min":
                n.inclusive
                  ? (t.minimum = n.value)
                  : (t.exclusiveMinimum = n.value);
                break;
              case "max":
                n.inclusive
                  ? (t.maximum = n.value)
                  : (t.exclusiveMaximum = n.value);
                break;
              case "multipleOf":
                t.multipleOf = n.value;
            }
          return t;
        })(e);
      case fn.ZodObject:
        return (function (e, t) {
          const n = { type: "object", properties: {} },
            r = [],
            o = e.shape();
          for (const e in o) {
            let i = o[e];
            if (void 0 === i || void 0 === i._def) continue;
            const a = fr(i),
              s = gr(i._def, {
                ...t,
                currentPath: [...t.currentPath, "properties", e],
                propertyPath: [...t.currentPath, "properties", e],
              });
            void 0 !== s && ((n.properties[e] = s), a || r.push(e));
          }
          r.length && (n.required = r);
          const i = (function (e, t) {
            if ("ZodNever" !== e.catchall._def.typeName)
              return gr(e.catchall._def, {
                ...t,
                currentPath: [...t.currentPath, "additionalProperties"],
              });
            switch (e.unknownKeys) {
              case "passthrough":
                return t.allowedAdditionalProperties;
              case "strict":
                return t.rejectedAdditionalProperties;
              case "strip":
                return "strict" === t.removeAdditionalStrategy
                  ? t.allowedAdditionalProperties
                  : t.rejectedAdditionalProperties;
            }
          })(e, t);
          return void 0 !== i && (n.additionalProperties = i), n;
        })(e, n);
      case fn.ZodBigInt:
        return (function (e) {
          const t = { type: "integer", format: "int64" };
          if (!e.checks) return t;
          for (const n of e.checks)
            switch (n.kind) {
              case "min":
                n.inclusive
                  ? (t.minimum = n.value)
                  : (t.exclusiveMinimum = n.value);
                break;
              case "max":
                n.inclusive
                  ? (t.maximum = n.value)
                  : (t.exclusiveMaximum = n.value);
                break;
              case "multipleOf":
                t.multipleOf = n.value;
            }
          return t;
        })(e);
      case fn.ZodBoolean:
        return { type: "boolean" };
      case fn.ZodDate:
        return Gn(e, n);
      case fn.ZodUndefined:
        return { not: {} };
      case fn.ZodNull:
        return { type: "null" };
      case fn.ZodArray:
        return (function (e, t) {
          var n, r, o;
          const i = { type: "array" };
          return (
            (null == (n = e.type) ? void 0 : n._def) &&
              (null == (o = null == (r = e.type) ? void 0 : r._def)
                ? void 0
                : o.typeName) !== fn.ZodAny &&
              (i.items = gr(e.type._def, {
                ...t,
                currentPath: [...t.currentPath, "items"],
              })),
            e.minLength && (i.minItems = e.minLength.value),
            e.maxLength && (i.maxItems = e.maxLength.value),
            e.exactLength &&
              ((i.minItems = e.exactLength.value),
              (i.maxItems = e.exactLength.value)),
            i
          );
        })(e, n);
      case fn.ZodUnion:
      case fn.ZodDiscriminatedUnion:
        return (function (e, t) {
          const n =
            e.options instanceof Map
              ? Array.from(e.options.values())
              : e.options;
          if (
            n.every(
              (e) =>
                e._def.typeName in pr &&
                (!e._def.checks || !e._def.checks.length),
            )
          ) {
            const e = n.reduce((e, t) => {
              const n = pr[t._def.typeName];
              return n && !e.includes(n) ? [...e, n] : e;
            }, []);
            return { type: e.length > 1 ? e : e[0] };
          }
          if (
            n.every((e) => "ZodLiteral" === e._def.typeName && !e.description)
          ) {
            const e = n.reduce((e, t) => {
              const n = typeof t._def.value;
              switch (n) {
                case "string":
                case "number":
                case "boolean":
                  return [...e, n];
                case "bigint":
                  return [...e, "integer"];
                case "object":
                  if (null === t._def.value) return [...e, "null"];
                default:
                  return e;
              }
            }, []);
            if (e.length === n.length) {
              const t = e.filter((e, t, n) => n.indexOf(e) === t);
              return {
                type: t.length > 1 ? t : t[0],
                enum: n.reduce(
                  (e, t) =>
                    e.includes(t._def.value) ? e : [...e, t._def.value],
                  [],
                ),
              };
            }
          } else if (n.every((e) => "ZodEnum" === e._def.typeName))
            return {
              type: "string",
              enum: n.reduce(
                (e, t) => [
                  ...e,
                  ...t._def.values.filter((t) => !e.includes(t)),
                ],
                [],
              ),
            };
          return ((e, t) => {
            const n = (
              e.options instanceof Map
                ? Array.from(e.options.values())
                : e.options
            )
              .map((e, n) =>
                gr(e._def, {
                  ...t,
                  currentPath: [...t.currentPath, "anyOf", `${n}`],
                }),
              )
              .filter(
                (e) =>
                  !!e &&
                  (!t.strictUnions ||
                    ("object" == typeof e && Object.keys(e).length > 0)),
              );
            return n.length ? { anyOf: n } : void 0;
          })(e, t);
        })(e, n);
      case fn.ZodIntersection:
        return (function (e, t) {
          const n = [
              gr(e.left._def, {
                ...t,
                currentPath: [...t.currentPath, "allOf", "0"],
              }),
              gr(e.right._def, {
                ...t,
                currentPath: [...t.currentPath, "allOf", "1"],
              }),
            ].filter((e) => !!e),
            r = [];
          return (
            n.forEach((e) => {
              if (
                ("type" in (t = e) && "string" === t.type) ||
                !("allOf" in t)
              ) {
                let t = e;
                if (
                  "additionalProperties" in e &&
                  !1 === e.additionalProperties
                ) {
                  const { additionalProperties: n, ...r } = e;
                  t = r;
                }
                r.push(t);
              } else r.push(...e.allOf);
              var t;
            }),
            r.length ? { allOf: r } : void 0
          );
        })(e, n);
      case fn.ZodTuple:
        return (function (e, t) {
          return e.rest
            ? {
                type: "array",
                minItems: e.items.length,
                items: e.items
                  .map((e, n) =>
                    gr(e._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items", `${n}`],
                    }),
                  )
                  .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                additionalItems: gr(e.rest._def, {
                  ...t,
                  currentPath: [...t.currentPath, "additionalItems"],
                }),
              }
            : {
                type: "array",
                minItems: e.items.length,
                maxItems: e.items.length,
                items: e.items
                  .map((e, n) =>
                    gr(e._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items", `${n}`],
                    }),
                  )
                  .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
              };
        })(e, n);
      case fn.ZodRecord:
        return dr(e, n);
      case fn.ZodLiteral:
        return (function (e) {
          const t = typeof e.value;
          return "bigint" !== t &&
            "number" !== t &&
            "boolean" !== t &&
            "string" !== t
            ? { type: Array.isArray(e.value) ? "array" : "object" }
            : {
                type: "bigint" === t ? "integer" : t,
                const: e.value,
              };
        })(e);
      case fn.ZodEnum:
        return (function (e) {
          return { type: "string", enum: Array.from(e.values) };
        })(e);
      case fn.ZodNativeEnum:
        return (function (e) {
          const t = e.values,
            n = Object.keys(e.values)
              .filter((e) => "number" != typeof t[t[e]])
              .map((e) => t[e]),
            r = Array.from(new Set(n.map((e) => typeof e)));
          return {
            type:
              1 === r.length
                ? "string" === r[0]
                  ? "string"
                  : "number"
                : ["string", "number"],
            enum: n,
          };
        })(e);
      case fn.ZodNullable:
        return (function (e, t) {
          if (
            [
              "ZodString",
              "ZodNumber",
              "ZodBigInt",
              "ZodBoolean",
              "ZodNull",
            ].includes(e.innerType._def.typeName) &&
            (!e.innerType._def.checks || !e.innerType._def.checks.length)
          )
            return { type: [pr[e.innerType._def.typeName], "null"] };
          const n = gr(e.innerType._def, {
            ...t,
            currentPath: [...t.currentPath, "anyOf", "0"],
          });
          return n && { anyOf: [n, { type: "null" }] };
        })(e, n);
      case fn.ZodOptional:
        return ((e, t) => {
          var n;
          if (
            t.currentPath.toString() ===
            (null == (n = t.propertyPath) ? void 0 : n.toString())
          )
            return gr(e.innerType._def, t);
          const r = gr(e.innerType._def, {
            ...t,
            currentPath: [...t.currentPath, "anyOf", "1"],
          });
          return r ? { anyOf: [{ not: {} }, r] } : {};
        })(e, n);
      case fn.ZodMap:
        return (function (e, t) {
          return "record" === t.mapStrategy
            ? dr(e, t)
            : {
                type: "array",
                maxItems: 125,
                items: {
                  type: "array",
                  items: [
                    gr(e.keyType._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items", "items", "0"],
                    }) || {},
                    gr(e.valueType._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items", "items", "1"],
                    }) || {},
                  ],
                  minItems: 2,
                  maxItems: 2,
                },
              };
        })(e, n);
      case fn.ZodSet:
        return (function (e, t) {
          const n = {
            type: "array",
            uniqueItems: !0,
            items: gr(e.valueType._def, {
              ...t,
              currentPath: [...t.currentPath, "items"],
            }),
          };
          return (
            e.minSize && (n.minItems = e.minSize.value),
            e.maxSize && (n.maxItems = e.maxSize.value),
            n
          );
        })(e, n);
      case fn.ZodLazy:
        return () => e.getter()._def;
      case fn.ZodPromise:
        return (function (e, t) {
          return gr(e.type._def, t);
        })(e, n);
      case fn.ZodNaN:
      case fn.ZodNever:
        return { not: {} };
      case fn.ZodEffects:
        return (function (e, t) {
          return "input" === t.effectStrategy ? gr(e.schema._def, t) : {};
        })(e, n);
      case fn.ZodAny:
      case fn.ZodUnknown:
        return {};
      case fn.ZodDefault:
        return (function (e, t) {
          return {
            ...gr(e.innerType._def, t),
            default: e.defaultValue(),
          };
        })(e, n);
      case fn.ZodBranded:
        return qn(e, n);
      case fn.ZodReadonly:
      case fn.ZodCatch:
        return ((e, t) => gr(e.innerType._def, t))(e, n);
      case fn.ZodPipeline:
        return ((e, t) => {
          if ("input" === t.pipeStrategy) return gr(e.in._def, t);
          if ("output" === t.pipeStrategy) return gr(e.out._def, t);
          const n = gr(e.in._def, {
            ...t,
            currentPath: [...t.currentPath, "allOf", "0"],
          });
          return {
            allOf: [
              n,
              gr(e.out._def, {
                ...t,
                currentPath: [...t.currentPath, "allOf", n ? "1" : "0"],
              }),
            ].filter((e) => void 0 !== e),
          };
        })(e, n);
      case fn.ZodFunction:
      case fn.ZodVoid:
      case fn.ZodSymbol:
      default:
        return;
    }
  },
  mr = (e, t) => {
    let n = 0;
    for (; n < e.length && n < t.length && e[n] === t[n]; n++);
    return [(e.length - n).toString(), ...t.slice(n)].join("/");
  };
function gr(e, t, n = !1) {
  var r;
  const o = t.seen.get(e);
  if (t.override) {
    const i = null == (r = t.override) ? void 0 : r.call(t, e, t, o, n);
    if (i !== Hn) return i;
  }
  if (o && !n) {
    const e = yr(o, t);
    if (void 0 !== e) return e;
  }
  const i = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, i);
  const a = hr(e, e.typeName, t),
    s = "function" == typeof a ? gr(a(), t) : a;
  if ((s && vr(e, t, s), t.postProcess)) {
    const n = t.postProcess(s, e, t);
    return (i.jsonSchema = s), n;
  }
  return (i.jsonSchema = s), s;
}
var yr = (e, t) => {
    switch (t.$refStrategy) {
      case "root":
        return { $ref: e.path.join("/") };
      case "relative":
        return { $ref: mr(t.currentPath, e.path) };
      case "none":
      case "seen":
        return (e.path.length < t.currentPath.length &&
          e.path.every((e, n) => t.currentPath[n] === e)) ||
          "seen" === t.$refStrategy
          ? {}
          : void 0;
    }
  },
  vr = (e, t, n) => (e.description && (n.description = e.description), n),
  br = Symbol.for("vercel.ai.schema");
function Sr(e) {
  let t;
  return () => (null == t && (t = e()), t);
}
function _r(e, { validate: t } = {}) {
  return {
    [br]: !0,
    _type: void 0,
    get jsonSchema() {
      return "function" == typeof e && (e = e()), e;
    },
    validate: t,
  };
}
function xr(e) {
  return null == e
    ? _r({ type: "object", properties: {}, additionalProperties: !1 })
    : "object" == typeof (n = e) &&
        null !== n &&
        br in n &&
        !0 === n[br] &&
        "jsonSchema" in n &&
        "validate" in n
      ? e
      : "~standard" in e
        ? "zod" === e["~standard"].vendor
          ? Er(e)
          : ((t = e),
            _r(
              () =>
                Bn(
                  t["~standard"].jsonSchema.input({
                    target: "draft-07",
                  }),
                ),
              {
                validate: async (e) => {
                  const n = await t["~standard"].validate(e);
                  return "value" in n
                    ? { success: !0, value: n.value }
                    : {
                        success: !1,
                        error: new V({ value: e, cause: n.issues }),
                      };
                },
              },
            ))
        : e();
  var t, n;
}
function wr(e, t) {
  var n;
  const r = null != (n = null == t ? void 0 : t.useReferences) && n;
  return _r(
    () =>
      ((e, t) => {
        var n;
        const r = ((e) => {
          const t = ((e) =>
              "string" == typeof e ? { ...Vn, name: e } : { ...Vn, ...e })(e),
            n =
              void 0 !== t.name
                ? [...t.basePath, t.definitionPath, t.name]
                : t.basePath;
          return {
            ...t,
            currentPath: n,
            propertyPath: void 0,
            seen: new Map(
              Object.entries(t.definitions).map(([e, n]) => [
                n._def,
                {
                  def: n._def,
                  path: [...t.basePath, t.definitionPath, e],
                  jsonSchema: void 0,
                },
              ]),
            ),
          };
        })(t);
        let o = t.definitions
          ? Object.entries(t.definitions).reduce((e, [t, n]) => {
              var o;
              return {
                ...e,
                [t]:
                  null !=
                  (o = gr(
                    n._def,
                    {
                      ...r,
                      currentPath: [...r.basePath, r.definitionPath, t],
                    },
                    !0,
                  ))
                    ? o
                    : {},
              };
            }, {})
          : void 0;
        const i =
            "title" === (null == t ? void 0 : t.nameStrategy) || null == t
              ? void 0
              : t.name,
          a =
            null !=
            (n = gr(
              e._def,
              void 0 === i
                ? r
                : {
                    ...r,
                    currentPath: [...r.basePath, r.definitionPath, i],
                  },
              !1,
            ))
              ? n
              : {},
          s = void 0 !== t.name && "title" === t.nameStrategy ? t.name : void 0;
        void 0 !== s && (a.title = s);
        const l =
          void 0 === i
            ? o
              ? { ...a, [r.definitionPath]: o }
              : a
            : {
                $ref: [
                  ...("relative" === r.$refStrategy ? [] : r.basePath),
                  r.definitionPath,
                  i,
                ].join("/"),
                [r.definitionPath]: { ...o, [i]: a },
              };
        return (l.$schema = "http://json-schema.org/draft-07/schema#"), l;
      })(e, { $refStrategy: r ? "root" : "none" }),
    {
      validate: async (t) => {
        const n = await e.safeParseAsync(t);
        return n.success
          ? { success: !0, value: n.data }
          : { success: !1, error: n.error };
      },
    },
  );
}
function Er(e, t) {
  return (function (e) {
    return "_zod" in e;
  })(e)
    ? (function (e, t) {
        var n;
        const r = null != (n = null == t ? void 0 : t.useReferences) && n;
        return _r(
          () =>
            Bn(
              (function (e, t) {
                if (e instanceof G) {
                  const n = new ye(t),
                    r = {};
                  for (const t of e._idmap.entries()) {
                    const [e, r] = t;
                    n.process(r);
                  }
                  const o = {},
                    i = { registry: e, uri: t?.uri, defs: r };
                  for (const r of e._idmap.entries()) {
                    const [e, a] = r;
                    o[e] = n.emit(a, { ...t, external: i });
                  }
                  if (Object.keys(r).length > 0) {
                    const e =
                      "draft-2020-12" === n.target ? "$defs" : "definitions";
                    o.__shared = { [e]: r };
                  }
                  return { schemas: o };
                }
                const n = new ye(t);
                return n.process(e), n.emit(e, t);
              })(e, {
                target: "draft-7",
                io: "input",
                reused: r ? "ref" : "inline",
              }),
            ),
          {
            validate: async (t) => {
              const n = await Le(e, t);
              return n.success
                ? { success: !0, value: n.data }
                : { success: !1, error: n.error };
            },
          },
        );
      })(e, t)
    : wr(e, t);
}
async function Tr({ value: e, schema: t, context: n }) {
  const r = await kr({ value: e, schema: t, context: n });
  if (!r.success) throw V.wrap({ value: e, cause: r.error, context: n });
  return r.value;
}
async function kr({ value: e, schema: t, context: n }) {
  const r = xr(t);
  try {
    if (null == r.validate) return { success: !0, value: e, rawValue: e };
    const t = await r.validate(e);
    return t.success
      ? { success: !0, value: t.value, rawValue: e }
      : {
          success: !1,
          error: V.wrap({ value: e, cause: t.error, context: n }),
          rawValue: e,
        };
  } catch (t) {
    return {
      success: !1,
      error: V.wrap({ value: e, cause: t, context: n }),
      rawValue: e,
    };
  }
}
async function Cr({ text: e, schema: t }) {
  try {
    const n = (function (e) {
      const { stackTraceLimit: t } = Error;
      try {
        Error.stackTraceLimit = 0;
      } catch (t) {
        return Un(e);
      }
      try {
        return Un(e);
      } finally {
        Error.stackTraceLimit = t;
      }
    })(e);
    return null == t
      ? { success: !0, value: n, rawValue: n }
      : await kr({ value: n, schema: t });
  } catch (t) {
    return {
      success: !1,
      error: I.isInstance(t) ? t : new I({ text: e, cause: t }),
      rawValue: void 0,
    };
  }
}
async function Ir(e) {
  return "function" == typeof e && (e = e()), Promise.resolve(e);
}
new TextDecoder();
const Ar = /^[cC][^\s-]{8,}$/,
  Or = /^[0-9a-z]+$/,
  Rr = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  Mr = /^[0-9a-vA-V]{20}$/,
  Pr = /^[A-Za-z0-9]{27}$/,
  Nr = /^[a-zA-Z0-9_-]{21}$/,
  Dr =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  jr =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Lr = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  Fr =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Ur =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Br =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  zr =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Hr =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Vr =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  qr = /^[A-Za-z0-9_-]*$/,
  Gr = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  Wr = /^\+(?:[0-9]){6,14}[0-9]$/,
  $r =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  Yr = new RegExp(`^${$r}$`);
function Kr(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return "number" == typeof e.precision
    ? -1 === e.precision
      ? `${t}`
      : 0 === e.precision
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const Zr = /^\d+$/,
  Qr = /^-?\d+(?:\.\d+)?/i,
  Jr = /true|false/i,
  Xr = /null/i,
  eo = /^[^A-Z]*$/,
  to = /^[^a-z]*$/,
  no = be("$ZodCheck", (e, t) => {
    var n;
    e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []);
  }),
  ro = { number: "number", bigint: "bigint", object: "date" },
  oo = be("$ZodCheckLessThan", (e, t) => {
    no.init(e, t);
    const n = ro[typeof t.value];
    e._zod.onattach.push((e) => {
      const n = e._zod.bag,
        r =
          (t.inclusive ? n.maximum : n.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      t.value < r &&
        (t.inclusive ? (n.maximum = t.value) : (n.exclusiveMaximum = t.value));
    }),
      (e._zod.check = (r) => {
        (t.inclusive ? r.value <= t.value : r.value < t.value) ||
          r.issues.push({
            origin: n,
            code: "too_big",
            maximum: t.value,
            input: r.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  io = be("$ZodCheckGreaterThan", (e, t) => {
    no.init(e, t);
    const n = ro[typeof t.value];
    e._zod.onattach.push((e) => {
      const n = e._zod.bag,
        r =
          (t.inclusive ? n.minimum : n.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      t.value > r &&
        (t.inclusive ? (n.minimum = t.value) : (n.exclusiveMinimum = t.value));
    }),
      (e._zod.check = (r) => {
        (t.inclusive ? r.value >= t.value : r.value > t.value) ||
          r.issues.push({
            origin: n,
            code: "too_small",
            minimum: t.value,
            input: r.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  ao = be("$ZodCheckMultipleOf", (e, t) => {
    no.init(e, t),
      e._zod.onattach.push((e) => {
        var n;
        (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
      }),
      (e._zod.check = (n) => {
        if (typeof n.value != typeof t.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof n.value
          ? n.value % t.value === BigInt(0)
          : 0 ===
            (function (e, t) {
              const n = (e.toString().split(".")[1] || "").length,
                r = (t.toString().split(".")[1] || "").length,
                o = n > r ? n : r;
              return (
                (Number.parseInt(e.toFixed(o).replace(".", "")) %
                  Number.parseInt(t.toFixed(o).replace(".", ""))) /
                10 ** o
              );
            })(n.value, t.value)) ||
          n.issues.push({
            origin: typeof n.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  so = be("$ZodCheckNumberFormat", (e, t) => {
    no.init(e, t), (t.format = t.format || "float64");
    const n = t.format?.includes("int"),
      r = n ? "int" : "number",
      [o, i] = ue[t.format];
    e._zod.onattach.push((e) => {
      const r = e._zod.bag;
      (r.format = t.format),
        (r.minimum = o),
        (r.maximum = i),
        n && (r.pattern = Zr);
    }),
      (e._zod.check = (a) => {
        const s = a.value;
        if (n) {
          if (!Number.isInteger(s))
            return void a.issues.push({
              expected: r,
              format: t.format,
              code: "invalid_type",
              input: s,
              inst: e,
            });
          if (!Number.isSafeInteger(s))
            return void (s > 0
              ? a.issues.push({
                  input: s,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: r,
                  continue: !t.abort,
                })
              : a.issues.push({
                  input: s,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: r,
                  continue: !t.abort,
                }));
        }
        s < o &&
          a.issues.push({
            origin: "number",
            input: s,
            code: "too_small",
            minimum: o,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }),
          s > i &&
            a.issues.push({
              origin: "number",
              input: s,
              code: "too_big",
              maximum: i,
              inst: e,
            });
      });
  }),
  lo = be("$ZodCheckMaxLength", (e, t) => {
    var n;
    no.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          const t = e.value;
          return !Q(t) && void 0 !== t.length;
        }),
      e._zod.onattach.push((e) => {
        const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < n && (e._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        const r = n.value;
        if (r.length <= t.maximum) return;
        const o = me(r);
        n.issues.push({
          origin: o,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  co = be("$ZodCheckMinLength", (e, t) => {
    var n;
    no.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          const t = e.value;
          return !Q(t) && void 0 !== t.length;
        }),
      e._zod.onattach.push((e) => {
        const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > n && (e._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        const r = n.value;
        if (r.length >= t.minimum) return;
        const o = me(r);
        n.issues.push({
          origin: o,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  uo = be("$ZodCheckLengthEquals", (e, t) => {
    var n;
    no.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          const t = e.value;
          return !Q(t) && void 0 !== t.length;
        }),
      e._zod.onattach.push((e) => {
        const n = e._zod.bag;
        (n.minimum = t.length), (n.maximum = t.length), (n.length = t.length);
      }),
      (e._zod.check = (n) => {
        const r = n.value,
          o = r.length;
        if (o === t.length) return;
        const i = me(r),
          a = o > t.length;
        n.issues.push({
          origin: i,
          ...(a
            ? { code: "too_big", maximum: t.length }
            : { code: "too_small", minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  po = be("$ZodCheckStringFormat", (e, t) => {
    var n, r;
    no.init(e, t),
      e._zod.onattach.push((e) => {
        const n = e._zod.bag;
        (n.format = t.format),
          t.pattern &&
            (n.patterns ?? (n.patterns = new Set()), n.patterns.add(t.pattern));
      }),
      t.pattern
        ? ((n = e._zod).check ??
          (n.check = (n) => {
            (t.pattern.lastIndex = 0),
              t.pattern.test(n.value) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: t.format,
                  input: n.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                });
          }))
        : ((r = e._zod).check ?? (r.check = () => {}));
  }),
  fo = be("$ZodCheckRegex", (e, t) => {
    po.init(e, t),
      (e._zod.check = (n) => {
        (t.pattern.lastIndex = 0),
          t.pattern.test(n.value) ||
            n.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            });
      });
  }),
  ho = be("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = eo), po.init(e, t);
  }),
  mo = be("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = to), po.init(e, t);
  }),
  go = be("$ZodCheckIncludes", (e, t) => {
    no.init(e, t);
    const n = se(t.includes),
      r = new RegExp(
        "number" == typeof t.position ? `^.{${t.position}}${n}` : n,
      );
    (t.pattern = r),
      e._zod.onattach.push((e) => {
        const t = e._zod.bag;
        t.patterns ?? (t.patterns = new Set()), t.patterns.add(r);
      }),
      (e._zod.check = (n) => {
        n.value.includes(t.includes, t.position) ||
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  yo = be("$ZodCheckStartsWith", (e, t) => {
    no.init(e, t);
    const n = new RegExp(`^${se(t.prefix)}.*`);
    t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((e) => {
        const t = e._zod.bag;
        t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
      }),
      (e._zod.check = (n) => {
        n.value.startsWith(t.prefix) ||
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  vo = be("$ZodCheckEndsWith", (e, t) => {
    no.init(e, t);
    const n = new RegExp(`.*${se(t.suffix)}$`);
    t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((e) => {
        const t = e._zod.bag;
        t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
      }),
      (e._zod.check = (n) => {
        n.value.endsWith(t.suffix) ||
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  bo = be("$ZodCheckOverwrite", (e, t) => {
    no.init(e, t),
      (e._zod.check = (e) => {
        e.value = t.tx(e.value);
      });
  });
class So {
  constructor(e = []) {
    (this.content = []), (this.indent = 0), this && (this.args = e);
  }
  indented(e) {
    (this.indent += 1), e(this), (this.indent -= 1);
  }
  write(e) {
    if ("function" == typeof e)
      return (
        e(this, { execution: "sync" }), void e(this, { execution: "async" })
      );
    const t = e.split("\n").filter((e) => e),
      n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
      r = t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e);
    for (const e of r) this.content.push(e);
  }
  compile() {
    const e = Function,
      t = this?.args;
    return new e(
      ...t,
      [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"),
    );
  }
}
const _o = { major: 4, minor: 0, patch: 0 },
  xo = be("$ZodType", (e, t) => {
    var n;
    e ?? (e = {}),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = _o);
    const r = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && r.unshift(e);
    for (const t of r) for (const n of t._zod.onattach) n(e);
    if (0 === r.length)
      (n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        });
    else {
      const t = (e, t, n) => {
        let r,
          o = de(e);
        for (const i of t) {
          if (i._zod.def.when) {
            if (!i._zod.def.when(e)) continue;
          } else if (o) continue;
          const t = e.issues.length,
            a = i._zod.check(e);
          if (a instanceof Promise && !1 === n?.async) throw new Se();
          if (r || a instanceof Promise)
            r = (r ?? Promise.resolve()).then(async () => {
              await a, e.issues.length !== t && (o || (o = de(e, t)));
            });
          else {
            if (e.issues.length === t) continue;
            o || (o = de(e, t));
          }
        }
        return r ? r.then(() => e) : e;
      };
      e._zod.run = (n, o) => {
        const i = e._zod.parse(n, o);
        if (i instanceof Promise) {
          if (!1 === o.async) throw new Se();
          return i.then((e) => t(e, r, o));
        }
        return t(i, r, o);
      };
    }
    e["~standard"] = {
      validate: (t) => {
        try {
          const n = Ae(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch (n) {
          return Re(e, t).then((e) =>
            e.success ? { value: e.data } : { issues: e.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  wo = be("$ZodString", (e, t) => {
    var n;
    xo.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ??
        ((n = e._zod.bag),
        new RegExp(
          `^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`,
        ))),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch (r) {}
        return (
          "string" == typeof n.value ||
            n.issues.push({
              expected: "string",
              code: "invalid_type",
              input: n.value,
              inst: e,
            }),
          n
        );
      });
  }),
  Eo = be("$ZodStringFormat", (e, t) => {
    po.init(e, t), wo.init(e, t);
  }),
  To = be("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = jr), Eo.init(e, t);
  }),
  ko = be("$ZodUUID", (e, t) => {
    if (t.version) {
      const e = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8,
      }[t.version];
      if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Lr(e));
    } else t.pattern ?? (t.pattern = Lr());
    Eo.init(e, t);
  }),
  Co = be("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = Fr), Eo.init(e, t);
  }),
  Io = be("$ZodURL", (e, t) => {
    Eo.init(e, t),
      (e._zod.check = (n) => {
        try {
          const r = n.value,
            o = new URL(r),
            i = o.href;
          return (
            t.hostname &&
              ((t.hostname.lastIndex = 0),
              t.hostname.test(o.hostname) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid hostname",
                  pattern: Gr.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol,
              ) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: t.protocol.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })),
            void (!r.endsWith("/") && i.endsWith("/")
              ? (n.value = i.slice(0, -1))
              : (n.value = i))
          );
        } catch (r) {
          n.issues.push({
            code: "invalid_format",
            format: "url",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      });
  }),
  Ao = be("$ZodEmoji", (e, t) => {
    t.pattern ??
      (t.pattern = new RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u",
      )),
      Eo.init(e, t);
  }),
  Oo = be("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = Nr), Eo.init(e, t);
  }),
  Ro = be("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = Ar), Eo.init(e, t);
  }),
  Mo = be("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = Or), Eo.init(e, t);
  }),
  Po = be("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = Rr), Eo.init(e, t);
  }),
  No = be("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = Mr), Eo.init(e, t);
  }),
  Do = be("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = Pr), Eo.init(e, t);
  }),
  jo = be("$ZodISODateTime", (e, t) => {
    t.pattern ??
      (t.pattern = (function (e) {
        const t = Kr({ precision: e.precision }),
          n = ["Z"];
        e.local && n.push(""), e.offset && n.push("([+-]\\d{2}:\\d{2})");
        const r = `${t}(?:${n.join("|")})`;
        return new RegExp(`^${$r}T(?:${r})$`);
      })(t)),
      Eo.init(e, t);
  }),
  Lo = be("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = Yr), Eo.init(e, t);
  }),
  Fo = be("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = new RegExp(`^${Kr(t)}$`)), Eo.init(e, t);
  }),
  Uo = be("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = Dr), Eo.init(e, t);
  }),
  Bo = be("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = Ur),
      Eo.init(e, t),
      e._zod.onattach.push((e) => {
        e._zod.bag.format = "ipv4";
      });
  }),
  zo = be("$ZodIPv6", (e, t) => {
    t.pattern ?? (t.pattern = Br),
      Eo.init(e, t),
      e._zod.onattach.push((e) => {
        e._zod.bag.format = "ipv6";
      }),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      });
  }),
  Ho = be("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = zr), Eo.init(e, t);
  }),
  Vo = be("$ZodCIDRv6", (e, t) => {
    t.pattern ?? (t.pattern = Hr),
      Eo.init(e, t),
      (e._zod.check = (n) => {
        const [r, o] = n.value.split("/");
        try {
          if (!o) throw new Error();
          const e = Number(o);
          if (`${e}` !== o) throw new Error();
          if (e < 0 || e > 128) throw new Error();
          new URL(`http://[${r}]`);
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      });
  });
function qo(e) {
  if ("" === e) return !0;
  if (e.length % 4 != 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Go = be("$ZodBase64", (e, t) => {
    t.pattern ?? (t.pattern = Vr),
      Eo.init(e, t),
      e._zod.onattach.push((e) => {
        e._zod.bag.contentEncoding = "base64";
      }),
      (e._zod.check = (n) => {
        qo(n.value) ||
          n.issues.push({
            code: "invalid_format",
            format: "base64",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  Wo = be("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = qr),
      Eo.init(e, t),
      e._zod.onattach.push((e) => {
        e._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (n) => {
        (function (e) {
          if (!qr.test(e)) return !1;
          const t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
          return qo(t.padEnd(4 * Math.ceil(t.length / 4), "="));
        })(n.value) ||
          n.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  $o = be("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = Wr), Eo.init(e, t);
  }),
  Yo = be("$ZodJWT", (e, t) => {
    Eo.init(e, t),
      (e._zod.check = (n) => {
        (function (e, t = null) {
          try {
            const n = e.split(".");
            if (3 !== n.length) return !1;
            const [r] = n;
            if (!r) return !1;
            const o = JSON.parse(atob(r));
            return !(
              ("typ" in o && "JWT" !== o?.typ) ||
              !o.alg ||
              (t && (!("alg" in o) || o.alg !== t))
            );
          } catch {
            return !1;
          }
        })(n.value, t.alg) ||
          n.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      });
  }),
  Ko = be("$ZodNumber", (e, t) => {
    xo.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? Qr),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = Number(n.value);
          } catch (e) {}
        const o = n.value;
        if ("number" == typeof o && !Number.isNaN(o) && Number.isFinite(o))
          return n;
        const i =
          "number" == typeof o
            ? Number.isNaN(o)
              ? "NaN"
              : Number.isFinite(o)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          n.issues.push({
            expected: "number",
            code: "invalid_type",
            input: o,
            inst: e,
            ...(i ? { received: i } : {}),
          }),
          n
        );
      });
  }),
  Zo = be("$ZodNumber", (e, t) => {
    so.init(e, t), Ko.init(e, t);
  }),
  Qo = be("$ZodBoolean", (e, t) => {
    xo.init(e, t),
      (e._zod.pattern = Jr),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = Boolean(n.value);
          } catch (e) {}
        const o = n.value;
        return (
          "boolean" == typeof o ||
            n.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: o,
              inst: e,
            }),
          n
        );
      });
  }),
  Jo = be("$ZodNull", (e, t) => {
    xo.init(e, t),
      (e._zod.pattern = Xr),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (t, n) => {
        const r = t.value;
        return (
          null === r ||
            t.issues.push({
              expected: "null",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          t
        );
      });
  }),
  Xo = be("$ZodUnknown", (e, t) => {
    xo.init(e, t), (e._zod.parse = (e) => e);
  }),
  ei = be("$ZodNever", (e, t) => {
    xo.init(e, t),
      (e._zod.parse = (t, n) => (
        t.issues.push({
          expected: "never",
          code: "invalid_type",
          input: t.value,
          inst: e,
        }),
        t
      ));
  });
function ti(e, t, n) {
  e.issues.length && t.issues.push(...pe(n, e.issues)), (t.value[n] = e.value);
}
const ni = be("$ZodArray", (e, t) => {
  xo.init(e, t),
    (e._zod.parse = (n, r) => {
      const o = n.value;
      if (!Array.isArray(o))
        return (
          n.issues.push({
            expected: "array",
            code: "invalid_type",
            input: o,
            inst: e,
          }),
          n
        );
      n.value = Array(o.length);
      const i = [];
      for (let e = 0; e < o.length; e++) {
        const a = o[e],
          s = t.element._zod.run({ value: a, issues: [] }, r);
        s instanceof Promise ? i.push(s.then((t) => ti(t, n, e))) : ti(s, n, e);
      }
      return i.length ? Promise.all(i).then(() => n) : n;
    });
});
function ri(e, t, n) {
  e.issues.length && t.issues.push(...pe(n, e.issues)), (t.value[n] = e.value);
}
function oi(e, t, n, r) {
  e.issues.length
    ? void 0 === r[n]
      ? (t.value[n] = n in r ? void 0 : e.value)
      : t.issues.push(...pe(n, e.issues))
    : void 0 === e.value
      ? n in r && (t.value[n] = void 0)
      : (t.value[n] = e.value);
}
const ii = be("$ZodObject", (e, t) => {
  xo.init(e, t);
  const n = Z(() => {
    const e = Object.keys(t.shape);
    for (const n of e)
      if (!(t.shape[n] instanceof xo))
        throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
    const n =
      ((r = t.shape),
      Object.keys(r).filter(
        (e) =>
          "optional" === r[e]._zod.optin && "optional" === r[e]._zod.optout,
      ));
    var r;
    return {
      shape: t.shape,
      keys: e,
      keySet: new Set(e),
      numKeys: e.length,
      optionalKeys: new Set(n),
    };
  });
  let r;
  X(e._zod, "propValues", () => {
    const e = t.shape,
      n = {};
    for (const t in e) {
      const r = e[t]._zod;
      if (r.values) {
        n[t] ?? (n[t] = new Set());
        for (const e of r.values) n[t].add(e);
      }
    }
    return n;
  });
  const o = re,
    i = !_e.jitless,
    a = i && oe.value,
    s = t.catchall;
  let l;
  e._zod.parse = (c, u) => {
    l ?? (l = n.value);
    const d = c.value;
    if (!o(d))
      return (
        c.issues.push({
          expected: "object",
          code: "invalid_type",
          input: d,
          inst: e,
        }),
        c
      );
    const p = [];
    if (i && a && !1 === u?.async && !0 !== u.jitless)
      r ||
        (r = ((e) => {
          const t = new So(["shape", "payload", "ctx"]),
            r = n.value,
            o = (e) => {
              const t = te(e);
              return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
            };
          t.write("const input = payload.value;");
          const i = Object.create(null);
          let a = 0;
          for (const e of r.keys) i[e] = "key_" + a++;
          t.write("const newResult = {}");
          for (const e of r.keys)
            if (r.optionalKeys.has(e)) {
              const n = i[e];
              t.write(`const ${n} = ${o(e)};`);
              const r = te(e);
              t.write(
                `\n        if (${n}.issues.length) {\n          if (input[${r}] === undefined) {\n            if (${r} in input) {\n              newResult[${r}] = undefined;\n            }\n          } else {\n            payload.issues = payload.issues.concat(\n              ${n}.issues.map((iss) => ({\n                ...iss,\n                path: iss.path ? [${r}, ...iss.path] : [${r}],\n              }))\n            );\n          }\n        } else if (${n}.value === undefined) {\n          if (${r} in input) newResult[${r}] = undefined;\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        `,
              );
            } else {
              const n = i[e];
              t.write(`const ${n} = ${o(e)};`),
                t.write(
                  `\n          if (${n}.issues.length) payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${te(e)}, ...iss.path] : [${te(e)}]\n          })));`,
                ),
                t.write(`newResult[${te(e)}] = ${n}.value`);
            }
          t.write("payload.value = newResult;"), t.write("return payload;");
          const s = t.compile();
          return (t, n) => s(e, t, n);
        })(t.shape)),
        (c = r(c, u));
    else {
      c.value = {};
      const e = l.shape;
      for (const t of l.keys) {
        const n = e[t],
          r = n._zod.run({ value: d[t], issues: [] }, u),
          o = "optional" === n._zod.optin && "optional" === n._zod.optout;
        r instanceof Promise
          ? p.push(r.then((e) => (o ? oi(e, c, t, d) : ri(e, c, t))))
          : o
            ? oi(r, c, t, d)
            : ri(r, c, t);
      }
    }
    if (!s) return p.length ? Promise.all(p).then(() => c) : c;
    const f = [],
      h = l.keySet,
      m = s._zod,
      g = m.def.type;
    for (const e of Object.keys(d)) {
      if (h.has(e)) continue;
      if ("never" === g) {
        f.push(e);
        continue;
      }
      const t = m.run({ value: d[e], issues: [] }, u);
      t instanceof Promise ? p.push(t.then((t) => ri(t, c, e))) : ri(t, c, e);
    }
    return (
      f.length &&
        c.issues.push({
          code: "unrecognized_keys",
          keys: f,
          input: d,
          inst: e,
        }),
      p.length ? Promise.all(p).then(() => c) : c
    );
  };
});
function ai(e, t, n, r) {
  for (const n of e) if (0 === n.issues.length) return (t.value = n.value), t;
  return (
    t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: n,
      errors: e.map((e) => e.issues.map((e) => he(e, r, xe()))),
    }),
    t
  );
}
const si = be("$ZodUnion", (e, t) => {
    xo.init(e, t),
      X(e._zod, "optin", () =>
        t.options.some((e) => "optional" === e._zod.optin)
          ? "optional"
          : void 0,
      ),
      X(e._zod, "optout", () =>
        t.options.some((e) => "optional" === e._zod.optout)
          ? "optional"
          : void 0,
      ),
      X(e._zod, "values", () => {
        if (t.options.every((e) => e._zod.values))
          return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
      }),
      X(e._zod, "pattern", () => {
        if (t.options.every((e) => e._zod.pattern)) {
          const e = t.options.map((e) => e._zod.pattern);
          return new RegExp(`^(${e.map((e) => J(e.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (n, r) => {
        let o = !1;
        const i = [];
        for (const e of t.options) {
          const t = e._zod.run({ value: n.value, issues: [] }, r);
          if (t instanceof Promise) i.push(t), (o = !0);
          else {
            if (0 === t.issues.length) return t;
            i.push(t);
          }
        }
        return o ? Promise.all(i).then((t) => ai(t, n, e, r)) : ai(i, n, e, r);
      });
  }),
  li = be("$ZodDiscriminatedUnion", (e, t) => {
    si.init(e, t);
    const n = e._zod.parse;
    X(e._zod, "propValues", () => {
      const e = {};
      for (const n of t.options) {
        const r = n._zod.propValues;
        if (!r || 0 === Object.keys(r).length)
          throw new Error(
            `Invalid discriminated union option at index "${t.options.indexOf(n)}"`,
          );
        for (const [t, n] of Object.entries(r)) {
          e[t] || (e[t] = new Set());
          for (const r of n) e[t].add(r);
        }
      }
      return e;
    });
    const r = Z(() => {
      const e = t.options,
        n = new Map();
      for (const r of e) {
        const e = r._zod.propValues[t.discriminator];
        if (!e || 0 === e.size)
          throw new Error(
            `Invalid discriminated union option at index "${t.options.indexOf(r)}"`,
          );
        for (const t of e) {
          if (n.has(t))
            throw new Error(`Duplicate discriminator value "${String(t)}"`);
          n.set(t, r);
        }
      }
      return n;
    });
    e._zod.parse = (o, i) => {
      const a = o.value;
      if (!re(a))
        return (
          o.issues.push({
            code: "invalid_type",
            expected: "object",
            input: a,
            inst: e,
          }),
          o
        );
      const s = r.value.get(a?.[t.discriminator]);
      return s
        ? s._zod.run(o, i)
        : t.unionFallback
          ? n(o, i)
          : (o.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [t.discriminator],
              inst: e,
            }),
            o);
    };
  }),
  ci = be("$ZodIntersection", (e, t) => {
    xo.init(e, t),
      (e._zod.parse = (e, n) => {
        const r = e.value,
          o = t.left._zod.run({ value: r, issues: [] }, n),
          i = t.right._zod.run({ value: r, issues: [] }, n);
        return o instanceof Promise || i instanceof Promise
          ? Promise.all([o, i]).then(([t, n]) => di(e, t, n))
          : di(e, o, i);
      });
  });
function ui(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e === +t)
    return { valid: !0, data: e };
  if (ie(e) && ie(t)) {
    const n = Object.keys(t),
      r = Object.keys(e).filter((e) => -1 !== n.indexOf(e)),
      o = { ...e, ...t };
    for (const n of r) {
      const r = ui(e[n], t[n]);
      if (!r.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...r.mergeErrorPath],
        };
      o[n] = r.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = ui(e[r], t[r]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...o.mergeErrorPath],
        };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function di(e, t, n) {
  if (
    (t.issues.length && e.issues.push(...t.issues),
    n.issues.length && e.issues.push(...n.issues),
    de(e))
  )
    return e;
  const r = ui(t.value, n.value);
  if (!r.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`,
    );
  return (e.value = r.data), e;
}
const pi = be("$ZodRecord", (e, t) => {
    xo.init(e, t),
      (e._zod.parse = (n, r) => {
        const o = n.value;
        if (!ie(o))
          return (
            n.issues.push({
              expected: "record",
              code: "invalid_type",
              input: o,
              inst: e,
            }),
            n
          );
        const i = [];
        if (t.keyType._zod.values) {
          const a = t.keyType._zod.values;
          n.value = {};
          for (const e of a)
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "symbol" == typeof e
            ) {
              const a = t.valueType._zod.run({ value: o[e], issues: [] }, r);
              a instanceof Promise
                ? i.push(
                    a.then((t) => {
                      t.issues.length && n.issues.push(...pe(e, t.issues)),
                        (n.value[e] = t.value);
                    }),
                  )
                : (a.issues.length && n.issues.push(...pe(e, a.issues)),
                  (n.value[e] = a.value));
            }
          let s;
          for (const e in o) a.has(e) || ((s = s ?? []), s.push(e));
          s &&
            s.length > 0 &&
            n.issues.push({
              code: "unrecognized_keys",
              input: o,
              inst: e,
              keys: s,
            });
        } else {
          n.value = {};
          for (const a of Reflect.ownKeys(o)) {
            if ("__proto__" === a) continue;
            const s = t.keyType._zod.run({ value: a, issues: [] }, r);
            if (s instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (s.issues.length) {
              n.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: s.issues.map((e) => he(e, r, xe())),
                input: a,
                path: [a],
                inst: e,
              }),
                (n.value[s.value] = s.value);
              continue;
            }
            const l = t.valueType._zod.run({ value: o[a], issues: [] }, r);
            l instanceof Promise
              ? i.push(
                  l.then((e) => {
                    e.issues.length && n.issues.push(...pe(a, e.issues)),
                      (n.value[s.value] = e.value);
                  }),
                )
              : (l.issues.length && n.issues.push(...pe(a, l.issues)),
                (n.value[s.value] = l.value));
          }
        }
        return i.length ? Promise.all(i).then(() => n) : n;
      });
  }),
  fi = be("$ZodEnum", (e, t) => {
    xo.init(e, t);
    const n = Y(t.entries);
    (e._zod.values = new Set(n)),
      (e._zod.pattern = new RegExp(
        `^(${n
          .filter((e) => ae.has(typeof e))
          .map((e) => ("string" == typeof e ? se(e) : e.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (t, r) => {
        const o = t.value;
        return (
          e._zod.values.has(o) ||
            t.issues.push({
              code: "invalid_value",
              values: n,
              input: o,
              inst: e,
            }),
          t
        );
      });
  }),
  hi = be("$ZodLiteral", (e, t) => {
    xo.init(e, t),
      (e._zod.values = new Set(t.values)),
      (e._zod.pattern = new RegExp(
        `^(${t.values.map((e) => ("string" == typeof e ? se(e) : e ? e.toString() : String(e))).join("|")})$`,
      )),
      (e._zod.parse = (n, r) => {
        const o = n.value;
        return (
          e._zod.values.has(o) ||
            n.issues.push({
              code: "invalid_value",
              values: t.values,
              input: o,
              inst: e,
            }),
          n
        );
      });
  }),
  mi = be("$ZodTransform", (e, t) => {
    xo.init(e, t),
      (e._zod.parse = (e, n) => {
        const r = t.transform(e.value, e);
        if (n.async)
          return (r instanceof Promise ? r : Promise.resolve(r)).then(
            (t) => ((e.value = t), e),
          );
        if (r instanceof Promise) throw new Se();
        return (e.value = r), e;
      });
  }),
  gi = be("$ZodOptional", (e, t) => {
    xo.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      X(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0,
      ),
      X(e._zod, "pattern", () => {
        const e = t.innerType._zod.pattern;
        return e ? new RegExp(`^(${J(e.source)})?$`) : void 0;
      }),
      (e._zod.parse = (e, n) =>
        "optional" === t.innerType._zod.optin
          ? t.innerType._zod.run(e, n)
          : void 0 === e.value
            ? e
            : t.innerType._zod.run(e, n));
  }),
  yi = be("$ZodNullable", (e, t) => {
    xo.init(e, t),
      X(e._zod, "optin", () => t.innerType._zod.optin),
      X(e._zod, "optout", () => t.innerType._zod.optout),
      X(e._zod, "pattern", () => {
        const e = t.innerType._zod.pattern;
        return e ? new RegExp(`^(${J(e.source)}|null)$`) : void 0;
      }),
      X(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (e, n) =>
        null === e.value ? e : t.innerType._zod.run(e, n));
  }),
  vi = be("$ZodDefault", (e, t) => {
    xo.init(e, t),
      (e._zod.optin = "optional"),
      X(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (void 0 === e.value) return (e.value = t.defaultValue), e;
        const r = t.innerType._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => bi(e, t)) : bi(r, t);
      });
  });
function bi(e, t) {
  return void 0 === e.value && (e.value = t.defaultValue), e;
}
const Si = be("$ZodPrefault", (e, t) => {
    xo.init(e, t),
      (e._zod.optin = "optional"),
      X(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => (
        void 0 === e.value && (e.value = t.defaultValue),
        t.innerType._zod.run(e, n)
      ));
  }),
  _i = be("$ZodNonOptional", (e, t) => {
    xo.init(e, t),
      X(e._zod, "values", () => {
        const e = t.innerType._zod.values;
        return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
      }),
      (e._zod.parse = (n, r) => {
        const o = t.innerType._zod.run(n, r);
        return o instanceof Promise ? o.then((t) => xi(t, e)) : xi(o, e);
      });
  });
function xi(e, t) {
  return (
    e.issues.length ||
      void 0 !== e.value ||
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: t,
      }),
    e
  );
}
const wi = be("$ZodCatch", (e, t) => {
    xo.init(e, t),
      (e._zod.optin = "optional"),
      X(e._zod, "optout", () => t.innerType._zod.optout),
      X(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        const r = t.innerType._zod.run(e, n);
        return r instanceof Promise
          ? r.then(
              (r) => (
                (e.value = r.value),
                r.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: {
                      issues: r.issues.map((e) => he(e, n, xe())),
                    },
                    input: e.value,
                  })),
                  (e.issues = [])),
                e
              ),
            )
          : ((e.value = r.value),
            r.issues.length &&
              ((e.value = t.catchValue({
                ...e,
                error: {
                  issues: r.issues.map((e) => he(e, n, xe())),
                },
                input: e.value,
              })),
              (e.issues = [])),
            e);
      });
  }),
  Ei = be("$ZodPipe", (e, t) => {
    xo.init(e, t),
      X(e._zod, "values", () => t.in._zod.values),
      X(e._zod, "optin", () => t.in._zod.optin),
      X(e._zod, "optout", () => t.out._zod.optout),
      (e._zod.parse = (e, n) => {
        const r = t.in._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => Ti(e, t, n)) : Ti(r, t, n);
      });
  });
function Ti(e, t, n) {
  return de(e) ? e : t.out._zod.run({ value: e.value, issues: e.issues }, n);
}
const ki = be("$ZodReadonly", (e, t) => {
  xo.init(e, t),
    X(e._zod, "propValues", () => t.innerType._zod.propValues),
    X(e._zod, "values", () => t.innerType._zod.values),
    X(e._zod, "optin", () => t.innerType._zod.optin),
    X(e._zod, "optout", () => t.innerType._zod.optout),
    (e._zod.parse = (e, n) => {
      const r = t.innerType._zod.run(e, n);
      return r instanceof Promise ? r.then(Ci) : Ci(r);
    });
});
function Ci(e) {
  return (e.value = Object.freeze(e.value)), e;
}
const Ii = be("$ZodLazy", (e, t) => {
    xo.init(e, t),
      X(e._zod, "innerType", () => t.getter()),
      X(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      X(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      X(e._zod, "optin", () => e._zod.innerType._zod.optin),
      X(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n));
  }),
  Ai = be("$ZodCustom", (e, t) => {
    no.init(e, t),
      xo.init(e, t),
      (e._zod.parse = (e, t) => e),
      (e._zod.check = (n) => {
        const r = n.value,
          o = t.fn(r);
        if (o instanceof Promise) return o.then((t) => Oi(t, n, r, e));
        Oi(o, n, r, e);
      });
  });
function Oi(e, t, n, r) {
  if (!e) {
    const e = {
      code: "custom",
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ge(e));
  }
}
function Ri(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ce(t),
  });
}
function Mi(e, t) {
  return new oo({
    check: "less_than",
    ...ce(t),
    value: e,
    inclusive: !1,
  });
}
function Pi(e, t) {
  return new oo({
    check: "less_than",
    ...ce(t),
    value: e,
    inclusive: !0,
  });
}
function Ni(e, t) {
  return new io({
    check: "greater_than",
    ...ce(t),
    value: e,
    inclusive: !1,
  });
}
function Di(e, t) {
  return new io({
    check: "greater_than",
    ...ce(t),
    value: e,
    inclusive: !0,
  });
}
function ji(e, t) {
  return new ao({ check: "multiple_of", ...ce(t), value: e });
}
function Li(e, t) {
  return new lo({ check: "max_length", ...ce(t), maximum: e });
}
function Fi(e, t) {
  return new co({ check: "min_length", ...ce(t), minimum: e });
}
function Ui(e, t) {
  return new uo({ check: "length_equals", ...ce(t), length: e });
}
function Bi(e) {
  return new bo({ check: "overwrite", tx: e });
}
const zi = be("ZodISODateTime", (e, t) => {
  jo.init(e, t), Ki.init(e, t);
});
const Hi = be("ZodISODate", (e, t) => {
  Lo.init(e, t), Ki.init(e, t);
});
const Vi = be("ZodISOTime", (e, t) => {
  Fo.init(e, t), Ki.init(e, t);
});
const qi = be("ZodISODuration", (e, t) => {
  Uo.init(e, t), Ki.init(e, t);
});
const Gi = be(
    "ZodType",
    (e, t) => (
      xo.init(e, t),
      (e.def = t),
      Object.defineProperty(e, "_def", { value: t }),
      (e.check = (...n) =>
        e.clone({
          ...t,
          checks: [
            ...(t.checks ?? []),
            ...n.map((e) =>
              "function" == typeof e
                ? {
                    _zod: {
                      check: e,
                      def: { check: "custom" },
                      onattach: [],
                    },
                  }
                : e,
            ),
          ],
        })),
      (e.clone = (t, n) => le(e, t, n)),
      (e.brand = () => e),
      (e.register = (t, n) => (t.add(e, n), e)),
      (e.parse = (t, n) => Ne(e, t, n, { callee: e.parse })),
      (e.safeParse = (t, n) => je(e, t, n)),
      (e.parseAsync = async (t, n) => De(e, t, n, { callee: e.parseAsync })),
      (e.safeParseAsync = async (t, n) => Le(e, t, n)),
      (e.spa = e.safeParseAsync),
      (e.refine = (t, n) =>
        e.check(
          (function (e, t = {}) {
            return (function (e, t, n) {
              return new e({
                type: "custom",
                check: "custom",
                fn: t,
                ...ce(n),
              });
            })(ts, e, t);
          })(t, n),
        )),
      (e.superRefine = (t) =>
        e.check(
          (function (e) {
            const t = (function (e) {
              const t = new no({ check: "custom" });
              return (t._zod.check = e), t;
            })(
              (n) => (
                (n.addIssue = (e) => {
                  if ("string" == typeof e)
                    n.issues.push(ge(e, n.value, t._zod.def));
                  else {
                    const r = e;
                    r.fatal && (r.continue = !1),
                      r.code ?? (r.code = "custom"),
                      r.input ?? (r.input = n.value),
                      r.inst ?? (r.inst = t),
                      r.continue ?? (r.continue = !t._zod.def.abort),
                      n.issues.push(ge(r));
                  }
                }),
                e(n.value, n)
              ),
            );
            return t;
          })(t),
        )),
      (e.overwrite = (t) => e.check(Bi(t))),
      (e.optional = () => qa(e)),
      (e.nullable = () => Wa(e)),
      (e.nullish = () => qa(Wa(e))),
      (e.nonoptional = (t) =>
        (function (e, t) {
          return new Ka({
            type: "nonoptional",
            innerType: e,
            ...ce(t),
          });
        })(e, t)),
      (e.array = () => Ca(e)),
      (e.or = (t) => Ma([e, t])),
      (e.and = (t) => new Da({ type: "intersection", left: e, right: t })),
      (e.transform = (t) => Ja(e, new Ha({ type: "transform", transform: t }))),
      (e.default = (t) => {
        return (
          (n = t),
          new $a({
            type: "default",
            innerType: e,
            get defaultValue() {
              return "function" == typeof n ? n() : n;
            },
          })
        );
        var n;
      }),
      (e.prefault = (t) => {
        return (
          (n = t),
          new Ya({
            type: "prefault",
            innerType: e,
            get defaultValue() {
              return "function" == typeof n ? n() : n;
            },
          })
        );
        var n;
      }),
      (e.catch = (t) => {
        return new Za({
          type: "catch",
          innerType: e,
          catchValue: "function" == typeof (n = t) ? n : () => n,
        });
        var n;
      }),
      (e.pipe = (t) => Ja(e, t)),
      (e.readonly = () => new Xa({ type: "readonly", innerType: e })),
      (e.describe = (t) => {
        const n = e.clone();
        return $.add(n, { description: t }), n;
      }),
      Object.defineProperty(e, "description", {
        get: () => $.get(e)?.description,
        configurable: !0,
      }),
      (e.meta = (...t) => {
        if (0 === t.length) return $.get(e);
        const n = e.clone();
        return $.add(n, t[0]), n;
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Wi = be("_ZodString", (e, t) => {
    wo.init(e, t), Gi.init(e, t);
    const n = e._zod.bag;
    (e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      (e.regex = (...t) =>
        e.check(
          (function (e, t) {
            return new fo({
              check: "string_format",
              format: "regex",
              ...ce(t),
              pattern: e,
            });
          })(...t),
        )),
      (e.includes = (...t) =>
        e.check(
          (function (e, t) {
            return new go({
              check: "string_format",
              format: "includes",
              ...ce(t),
              includes: e,
            });
          })(...t),
        )),
      (e.startsWith = (...t) =>
        e.check(
          (function (e, t) {
            return new yo({
              check: "string_format",
              format: "starts_with",
              ...ce(t),
              prefix: e,
            });
          })(...t),
        )),
      (e.endsWith = (...t) =>
        e.check(
          (function (e, t) {
            return new vo({
              check: "string_format",
              format: "ends_with",
              ...ce(t),
              suffix: e,
            });
          })(...t),
        )),
      (e.min = (...t) => e.check(Fi(...t))),
      (e.max = (...t) => e.check(Li(...t))),
      (e.length = (...t) => e.check(Ui(...t))),
      (e.nonempty = (...t) => e.check(Fi(1, ...t))),
      (e.lowercase = (t) =>
        e.check(
          (function (e) {
            return new ho({
              check: "string_format",
              format: "lowercase",
              ...ce(e),
            });
          })(t),
        )),
      (e.uppercase = (t) =>
        e.check(
          (function (e) {
            return new mo({
              check: "string_format",
              format: "uppercase",
              ...ce(e),
            });
          })(t),
        )),
      (e.trim = () => e.check(Bi((e) => e.trim()))),
      (e.normalize = (...t) =>
        e.check(
          (function (e) {
            return Bi((t) => t.normalize(e));
          })(...t),
        )),
      (e.toLowerCase = () => e.check(Bi((e) => e.toLowerCase()))),
      (e.toUpperCase = () => e.check(Bi((e) => e.toUpperCase())));
  }),
  $i = be("ZodString", (e, t) => {
    wo.init(e, t),
      Wi.init(e, t),
      (e.email = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "email",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(Zi, t),
        )),
      (e.url = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "url",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(Xi, t),
        )),
      (e.jwt = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "jwt",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ha, t),
        )),
      (e.emoji = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "emoji",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ea, t),
        )),
      (e.guid = (t) => e.check(Ri(Qi, t))),
      (e.uuid = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "uuid",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(Ji, t),
        )),
      (e.uuidv4 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "uuid",
              check: "string_format",
              abort: !1,
              version: "v4",
              ...ce(t),
            });
          })(Ji, t),
        )),
      (e.uuidv6 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "uuid",
              check: "string_format",
              abort: !1,
              version: "v6",
              ...ce(t),
            });
          })(Ji, t),
        )),
      (e.uuidv7 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "uuid",
              check: "string_format",
              abort: !1,
              version: "v7",
              ...ce(t),
            });
          })(Ji, t),
        )),
      (e.nanoid = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "nanoid",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ta, t),
        )),
      (e.guid = (t) => e.check(Ri(Qi, t))),
      (e.cuid = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "cuid",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(na, t),
        )),
      (e.cuid2 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "cuid2",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ra, t),
        )),
      (e.ulid = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "ulid",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(oa, t),
        )),
      (e.base64 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "base64",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(da, t),
        )),
      (e.base64url = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "base64url",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(pa, t),
        )),
      (e.xid = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "xid",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ia, t),
        )),
      (e.ksuid = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "ksuid",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(aa, t),
        )),
      (e.ipv4 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "ipv4",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(sa, t),
        )),
      (e.ipv6 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "ipv6",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(la, t),
        )),
      (e.cidrv4 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "cidrv4",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ca, t),
        )),
      (e.cidrv6 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "cidrv6",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(ua, t),
        )),
      (e.e164 = (t) =>
        e.check(
          (function (e, t) {
            return new e({
              type: "string",
              format: "e164",
              check: "string_format",
              abort: !1,
              ...ce(t),
            });
          })(fa, t),
        )),
      (e.datetime = (t) =>
        e.check(
          (function (e) {
            return (function (e, t) {
              return new e({
                type: "string",
                format: "datetime",
                check: "string_format",
                offset: !1,
                local: !1,
                precision: null,
                ...ce(t),
              });
            })(zi, e);
          })(t),
        )),
      (e.date = (t) =>
        e.check(
          (function (e) {
            return (function (e, t) {
              return new e({
                type: "string",
                format: "date",
                check: "string_format",
                ...ce(t),
              });
            })(Hi, e);
          })(t),
        )),
      (e.time = (t) =>
        e.check(
          (function (e) {
            return (function (e, t) {
              return new e({
                type: "string",
                format: "time",
                check: "string_format",
                precision: null,
                ...ce(t),
              });
            })(Vi, e);
          })(t),
        )),
      (e.duration = (t) =>
        e.check(
          (function (e) {
            return (function (e, t) {
              return new e({
                type: "string",
                format: "duration",
                check: "string_format",
                ...ce(t),
              });
            })(qi, e);
          })(t),
        ));
  });
function Yi(e) {
  return (function (e, t) {
    return new e({ type: "string", ...ce(t) });
  })($i, e);
}
const Ki = be("ZodStringFormat", (e, t) => {
    Eo.init(e, t), Wi.init(e, t);
  }),
  Zi = be("ZodEmail", (e, t) => {
    Co.init(e, t), Ki.init(e, t);
  }),
  Qi = be("ZodGUID", (e, t) => {
    To.init(e, t), Ki.init(e, t);
  }),
  Ji = be("ZodUUID", (e, t) => {
    ko.init(e, t), Ki.init(e, t);
  }),
  Xi = be("ZodURL", (e, t) => {
    Io.init(e, t), Ki.init(e, t);
  }),
  ea = be("ZodEmoji", (e, t) => {
    Ao.init(e, t), Ki.init(e, t);
  }),
  ta = be("ZodNanoID", (e, t) => {
    Oo.init(e, t), Ki.init(e, t);
  }),
  na = be("ZodCUID", (e, t) => {
    Ro.init(e, t), Ki.init(e, t);
  }),
  ra = be("ZodCUID2", (e, t) => {
    Mo.init(e, t), Ki.init(e, t);
  }),
  oa = be("ZodULID", (e, t) => {
    Po.init(e, t), Ki.init(e, t);
  }),
  ia = be("ZodXID", (e, t) => {
    No.init(e, t), Ki.init(e, t);
  }),
  aa = be("ZodKSUID", (e, t) => {
    Do.init(e, t), Ki.init(e, t);
  }),
  sa = be("ZodIPv4", (e, t) => {
    Bo.init(e, t), Ki.init(e, t);
  }),
  la = be("ZodIPv6", (e, t) => {
    zo.init(e, t), Ki.init(e, t);
  }),
  ca = be("ZodCIDRv4", (e, t) => {
    Ho.init(e, t), Ki.init(e, t);
  }),
  ua = be("ZodCIDRv6", (e, t) => {
    Vo.init(e, t), Ki.init(e, t);
  }),
  da = be("ZodBase64", (e, t) => {
    Go.init(e, t), Ki.init(e, t);
  }),
  pa = be("ZodBase64URL", (e, t) => {
    Wo.init(e, t), Ki.init(e, t);
  }),
  fa = be("ZodE164", (e, t) => {
    $o.init(e, t), Ki.init(e, t);
  }),
  ha = be("ZodJWT", (e, t) => {
    Yo.init(e, t), Ki.init(e, t);
  }),
  ma = be("ZodNumber", (e, t) => {
    Ko.init(e, t),
      Gi.init(e, t),
      (e.gt = (t, n) => e.check(Ni(t, n))),
      (e.gte = (t, n) => e.check(Di(t, n))),
      (e.min = (t, n) => e.check(Di(t, n))),
      (e.lt = (t, n) => e.check(Mi(t, n))),
      (e.lte = (t, n) => e.check(Pi(t, n))),
      (e.max = (t, n) => e.check(Pi(t, n))),
      (e.int = (t) => e.check(va(t))),
      (e.safe = (t) => e.check(va(t))),
      (e.positive = (t) => e.check(Ni(0, t))),
      (e.nonnegative = (t) => e.check(Di(0, t))),
      (e.negative = (t) => e.check(Mi(0, t))),
      (e.nonpositive = (t) => e.check(Pi(0, t))),
      (e.multipleOf = (t, n) => e.check(ji(t, n))),
      (e.step = (t, n) => e.check(ji(t, n))),
      (e.finite = () => e);
    const n = e._zod.bag;
    (e.minValue =
      Math.max(
        n.minimum ?? Number.NEGATIVE_INFINITY,
        n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
      ) ?? null),
      (e.maxValue =
        Math.min(
          n.maximum ?? Number.POSITIVE_INFINITY,
          n.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
        ) ?? null),
      (e.isInt =
        (n.format ?? "").includes("int") ||
        Number.isSafeInteger(n.multipleOf ?? 0.5)),
      (e.isFinite = !0),
      (e.format = n.format ?? null);
  });
function ga(e) {
  return (function (e, t) {
    return new e({ type: "number", checks: [], ...ce(t) });
  })(ma, e);
}
const ya = be("ZodNumberFormat", (e, t) => {
  Zo.init(e, t), ma.init(e, t);
});
function va(e) {
  return (function (e, t) {
    return new e({
      type: "number",
      check: "number_format",
      abort: !1,
      format: "safeint",
      ...ce(t),
    });
  })(ya, e);
}
const ba = be("ZodBoolean", (e, t) => {
  Qo.init(e, t), Gi.init(e, t);
});
function Sa(e) {
  return (function (e, t) {
    return new e({ type: "boolean", ...ce(t) });
  })(ba, e);
}
const _a = be("ZodNull", (e, t) => {
  Jo.init(e, t), Gi.init(e, t);
});
const xa = be("ZodUnknown", (e, t) => {
  Xo.init(e, t), Gi.init(e, t);
});
function wa() {
  return new xa({ type: "unknown" });
}
const Ea = be("ZodNever", (e, t) => {
  ei.init(e, t), Gi.init(e, t);
});
function Ta(e) {
  return (function (e, t) {
    return new e({ type: "never", ...ce(t) });
  })(Ea, e);
}
const ka = be("ZodArray", (e, t) => {
  ni.init(e, t),
    Gi.init(e, t),
    (e.element = t.element),
    (e.min = (t, n) => e.check(Fi(t, n))),
    (e.nonempty = (t) => e.check(Fi(1, t))),
    (e.max = (t, n) => e.check(Li(t, n))),
    (e.length = (t, n) => e.check(Ui(t, n))),
    (e.unwrap = () => e.element);
});
function Ca(e, t) {
  return (function (e, t, n) {
    return new e({ type: "array", element: t, ...ce(n) });
  })(ka, e, t);
}
const Ia = be("ZodObject", (e, t) => {
  ii.init(e, t),
    Gi.init(e, t),
    X(e, "shape", () => t.shape),
    (e.keyof = () => Ua(Object.keys(e._zod.def.shape))),
    (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: wa() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: wa() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: Ta() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (t) =>
      (function (e, t) {
        if (!ie(t))
          throw new Error("Invalid input to extend: expected a plain object");
        const n = {
          ...e._zod.def,
          get shape() {
            const n = { ...e._zod.def.shape, ...t };
            return ee(this, "shape", n), n;
          },
          checks: [],
        };
        return le(e, n);
      })(e, t)),
    (e.merge = (t) => {
      return (
        (r = t),
        le((n = e), {
          ...n._zod.def,
          get shape() {
            const e = { ...n._zod.def.shape, ...r._zod.def.shape };
            return ee(this, "shape", e), e;
          },
          catchall: r._zod.def.catchall,
          checks: [],
        })
      );
      var n, r;
    }),
    (e.pick = (t) =>
      (function (e, t) {
        const n = {},
          r = e._zod.def;
        for (const e in t) {
          if (!(e in r.shape)) throw new Error(`Unrecognized key: "${e}"`);
          t[e] && (n[e] = r.shape[e]);
        }
        return le(e, { ...e._zod.def, shape: n, checks: [] });
      })(e, t)),
    (e.omit = (t) =>
      (function (e, t) {
        const n = { ...e._zod.def.shape },
          r = e._zod.def;
        for (const e in t) {
          if (!(e in r.shape)) throw new Error(`Unrecognized key: "${e}"`);
          t[e] && delete n[e];
        }
        return le(e, { ...e._zod.def, shape: n, checks: [] });
      })(e, t)),
    (e.partial = (...t) =>
      (function (e, t, n) {
        const r = t._zod.def.shape,
          o = { ...r };
        if (n)
          for (const t in n) {
            if (!(t in r)) throw new Error(`Unrecognized key: "${t}"`);
            n[t] &&
              (o[t] = e ? new e({ type: "optional", innerType: r[t] }) : r[t]);
          }
        else
          for (const t in r)
            o[t] = e ? new e({ type: "optional", innerType: r[t] }) : r[t];
        return le(t, { ...t._zod.def, shape: o, checks: [] });
      })(Va, e, t[0])),
    (e.required = (...t) =>
      (function (e, t, n) {
        const r = t._zod.def.shape,
          o = { ...r };
        if (n)
          for (const t in n) {
            if (!(t in o)) throw new Error(`Unrecognized key: "${t}"`);
            n[t] &&
              (o[t] = new e({
                type: "nonoptional",
                innerType: r[t],
              }));
          }
        else
          for (const t in r)
            o[t] = new e({ type: "nonoptional", innerType: r[t] });
        return le(t, { ...t._zod.def, shape: o, checks: [] });
      })(Ka, e, t[0]));
});
function Aa(e, t) {
  const n = {
    type: "object",
    get shape() {
      return ee(this, "shape", { ...e }), this.shape;
    },
    ...ce(t),
  };
  return new Ia(n);
}
function Oa(e, t) {
  return new Ia({
    type: "object",
    get shape() {
      return ee(this, "shape", { ...e }), this.shape;
    },
    catchall: Ta(),
    ...ce(t),
  });
}
const Ra = be("ZodUnion", (e, t) => {
  si.init(e, t), Gi.init(e, t), (e.options = t.options);
});
function Ma(e, t) {
  return new Ra({ type: "union", options: e, ...ce(t) });
}
const Pa = be("ZodDiscriminatedUnion", (e, t) => {
  Ra.init(e, t), li.init(e, t);
});
function Na(e, t, n) {
  return new Pa({
    type: "union",
    options: t,
    discriminator: e,
    ...ce(n),
  });
}
const Da = be("ZodIntersection", (e, t) => {
    ci.init(e, t), Gi.init(e, t);
  }),
  ja = be("ZodRecord", (e, t) => {
    pi.init(e, t),
      Gi.init(e, t),
      (e.keyType = t.keyType),
      (e.valueType = t.valueType);
  });
function La(e, t, n) {
  return new ja({
    type: "record",
    keyType: e,
    valueType: t,
    ...ce(n),
  });
}
const Fa = be("ZodEnum", (e, t) => {
  fi.init(e, t),
    Gi.init(e, t),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries));
  const n = new Set(Object.keys(t.entries));
  (e.extract = (e, r) => {
    const o = {};
    for (const r of e) {
      if (!n.has(r)) throw new Error(`Key ${r} not found in enum`);
      o[r] = t.entries[r];
    }
    return new Fa({ ...t, checks: [], ...ce(r), entries: o });
  }),
    (e.exclude = (e, r) => {
      const o = { ...t.entries };
      for (const t of e) {
        if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
        delete o[t];
      }
      return new Fa({ ...t, checks: [], ...ce(r), entries: o });
    });
});
function Ua(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
  return new Fa({ type: "enum", entries: n, ...ce(t) });
}
const Ba = be("ZodLiteral", (e, t) => {
  hi.init(e, t),
    Gi.init(e, t),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return t.values[0];
      },
    });
});
function za(e, t) {
  return new Ba({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...ce(t),
  });
}
const Ha = be("ZodTransform", (e, t) => {
  mi.init(e, t),
    Gi.init(e, t),
    (e._zod.parse = (n, r) => {
      n.addIssue = (r) => {
        if ("string" == typeof r) n.issues.push(ge(r, n.value, t));
        else {
          const t = r;
          t.fatal && (t.continue = !1),
            t.code ?? (t.code = "custom"),
            t.input ?? (t.input = n.value),
            t.inst ?? (t.inst = e),
            t.continue ?? (t.continue = !0),
            n.issues.push(ge(t));
        }
      };
      const o = t.transform(n.value, n);
      return o instanceof Promise
        ? o.then((e) => ((n.value = e), n))
        : ((n.value = o), n);
    });
});
const Va = be("ZodOptional", (e, t) => {
  gi.init(e, t), Gi.init(e, t), (e.unwrap = () => e._zod.def.innerType);
});
function qa(e) {
  return new Va({ type: "optional", innerType: e });
}
const Ga = be("ZodNullable", (e, t) => {
  yi.init(e, t), Gi.init(e, t), (e.unwrap = () => e._zod.def.innerType);
});
function Wa(e) {
  return new Ga({ type: "nullable", innerType: e });
}
const $a = be("ZodDefault", (e, t) => {
    vi.init(e, t),
      Gi.init(e, t),
      (e.unwrap = () => e._zod.def.innerType),
      (e.removeDefault = e.unwrap);
  }),
  Ya = be("ZodPrefault", (e, t) => {
    Si.init(e, t), Gi.init(e, t), (e.unwrap = () => e._zod.def.innerType);
  }),
  Ka = be("ZodNonOptional", (e, t) => {
    _i.init(e, t), Gi.init(e, t), (e.unwrap = () => e._zod.def.innerType);
  }),
  Za = be("ZodCatch", (e, t) => {
    wi.init(e, t),
      Gi.init(e, t),
      (e.unwrap = () => e._zod.def.innerType),
      (e.removeCatch = e.unwrap);
  }),
  Qa = be("ZodPipe", (e, t) => {
    Ei.init(e, t), Gi.init(e, t), (e.in = t.in), (e.out = t.out);
  });
function Ja(e, t) {
  return new Qa({ type: "pipe", in: e, out: t });
}
const Xa = be("ZodReadonly", (e, t) => {
    ki.init(e, t), Gi.init(e, t);
  }),
  es = be("ZodLazy", (e, t) => {
    Ii.init(e, t), Gi.init(e, t), (e.unwrap = () => e._zod.def.getter());
  });
const ts = be("ZodCustom", (e, t) => {
  Ai.init(e, t), Gi.init(e, t);
});
function ns(e, t) {
  return (function (e, t, n) {
    const r = ce(n);
    return (
      r.abort ?? (r.abort = !0),
      new e({ type: "custom", check: "custom", fn: t, ...r })
    );
  })(ts, e ?? (() => !0), t);
}
function rs(e, t = { error: `Input not instance of ${e.name}` }) {
  const n = new ts({
    type: "custom",
    check: "custom",
    fn: (t) => t instanceof e,
    abort: !0,
    ...ce(t),
  });
  return (n._zod.bag.Class = e), n;
}
var os,
  is = Object.defineProperty,
  as =
    (Symbol.for("vercel.ai.error.AI_InvalidArgumentError"),
    Symbol.for("vercel.ai.error.AI_InvalidStreamPartError"),
    Symbol.for("vercel.ai.error.AI_InvalidToolApprovalError"),
    Symbol.for("vercel.ai.error.AI_InvalidToolApprovalSignatureError"),
    Symbol.for("vercel.ai.error.AI_InvalidToolInputError"),
    Symbol.for("vercel.ai.error.AI_ToolCallNotFoundForApprovalError"),
    Symbol.for("vercel.ai.error.AI_MissingToolResultsError"),
    Symbol.for("vercel.ai.error.AI_NoImageGeneratedError"),
    "AI_NoObjectGeneratedError"),
  ss = `vercel.ai.error.${as}`,
  ls = Symbol.for(ss),
  cs = class extends s {
    constructor({
      message: e = "No object generated.",
      cause: t,
      text: n,
      response: r,
      usage: o,
      finishReason: i,
    }) {
      super({ name: as, message: e, cause: t }),
        (this[os] = !0),
        (this.text = n),
        (this.response = r),
        (this.usage = o),
        (this.finishReason = i);
    }
    static isInstance(e) {
      return s.hasMarker(e, ss);
    }
  };
os = ls;
Symbol.for("vercel.ai.error.AI_NoOutputGeneratedError"),
  Symbol.for("vercel.ai.error.AI_NoSpeechGeneratedError"),
  Symbol.for("vercel.ai.error.AI_NoTranscriptGeneratedError"),
  Symbol.for("vercel.ai.error.AI_NoVideoGeneratedError"),
  Symbol.for("vercel.ai.error.AI_NoSuchToolError"),
  Symbol.for("vercel.ai.error.AI_ToolCallRepairError");
var us,
  ds = "AI_UIMessageStreamError",
  ps = `vercel.ai.error.${ds}`,
  fs = Symbol.for(ps),
  hs = class extends s {
    constructor({ chunkType: e, chunkId: t, message: n }) {
      super({ name: ds, message: n }),
        (this[us] = !0),
        (this.chunkType = e),
        (this.chunkId = t);
    }
    static isInstance(e) {
      return s.hasMarker(e, ps);
    }
  };
us = fs;
Symbol.for("vercel.ai.error.AI_InvalidDataContentError"),
  Symbol.for("vercel.ai.error.AI_InvalidMessageRoleError"),
  Symbol.for("vercel.ai.error.AI_MessageConversionError"),
  Symbol.for("vercel.ai.error.AI_RetryError");
var ms = async ({ url: e, maxBytes: t, abortSignal: n }) => {
    var r;
    const o = e.toString();
    try {
      const e = (function (e, ...t) {
          const n = new Headers(jn(e)),
            r = n.get("user-agent") || "";
          return (
            n.set("user-agent", [r, ...t].filter(Boolean).join(" ")),
            Object.fromEntries(n.entries())
          );
        })(
          {},
          "ai-sdk/7.0.11",
          (function (e = globalThis) {
            var t, n, r;
            return e.window
              ? "runtime/browser"
              : (null == (t = e.navigator) ? void 0 : t.userAgent)
                ? `runtime/${e.navigator.userAgent.toLowerCase()}`
                : (
                      null ==
                      (r = null == (n = e.process) ? void 0 : n.versions)
                        ? void 0
                        : r.node
                    )
                  ? `runtime/node.js/${e.process.version.substring(0)}`
                  : e.EdgeRuntime
                    ? "runtime/vercel-edge"
                    : "runtime/unknown";
          })(),
        ),
        i = await (async function ({
          url: e,
          headers: t,
          abortSignal: n,
          maxRedirects: r = 10,
        }) {
          const o = { signal: n };
          void 0 !== t && (o.headers = t);
          let i = e;
          for (let t = 0; t <= r; t++) {
            On(i);
            const t = await fetch(i, { ...o, redirect: "manual" });
            if ("opaqueredirect" === t.type) {
              if (!An())
                throw new In({
                  url: e,
                  message: `Redirect from ${i} could not be validated and was blocked`,
                });
              return await fetch(i, { ...o, redirect: "follow" });
            }
            const n = t.headers.get("location");
            if (!(t.status >= 300 && t.status < 400 && n)) return t;
            await xn(t), (i = new URL(n, i).toString());
          }
          throw new In({
            url: e,
            message: `Too many redirects (max ${r})`,
          });
        })({ url: o, headers: e, abortSignal: n });
      if (!i.ok)
        throw (
          (await xn(i),
          new In({
            url: o,
            statusCode: i.status,
            statusText: i.statusText,
          }))
        );
      return {
        data: await Pn({
          response: i,
          url: o,
          maxBytes: null != t ? t : 2147483648,
        }),
        mediaType: null != (r = i.headers.get("content-type")) ? r : void 0,
      };
    } catch (e) {
      if (In.isInstance(e)) throw e;
      throw new In({ url: o, cause: e });
    }
  },
  gs = new es({
    type: "lazy",
    getter: () => {
      return Ma([
        (function (e, t) {
          return new e({ type: "null", ...ce(t) });
        })(_a, e),
        Yi(),
        ga(),
        Sa(),
        La(Yi(), gs.optional()),
        Ca(gs),
      ]);
      var e;
    },
  }),
  ys = La(Yi(), La(Yi(), gs.optional())),
  vs = Ma([
    Yi(),
    rs(Uint8Array),
    rs(ArrayBuffer),
    ns(
      function (e) {
        var t, n;
        return (
          null !=
            (n = null == (t = globalThis.Buffer) ? void 0 : t.isBuffer(e)) && n
        );
      },
      { message: "Must be a Buffer" },
    ),
  ]),
  bs = La(Yi(), Yi()),
  Ss = Aa({
    type: za("text"),
    text: Yi(),
    providerOptions: ys.optional(),
  }),
  _s = Aa({
    type: za("image"),
    image: Ma([vs, rs(URL), bs]),
    mediaType: Yi().optional(),
    providerOptions: ys.optional(),
  }),
  xs = Na("type", [
    Aa({ type: za("data"), data: vs }),
    Aa({ type: za("url"), url: rs(URL) }),
    Aa({ type: za("reference"), reference: bs }),
    Aa({ type: za("text"), text: Yi() }),
  ]),
  ws = Na("type", [
    Aa({ type: za("data"), data: vs }),
    Aa({ type: za("url"), url: rs(URL) }),
  ]),
  Es = Aa({
    type: za("file"),
    data: Ma([xs, vs, rs(URL), bs]),
    filename: Yi().optional(),
    mediaType: Yi(),
    providerOptions: ys.optional(),
  }),
  Ts = Aa({
    type: za("reasoning"),
    text: Yi(),
    providerOptions: ys.optional(),
  }),
  ks = Aa({
    type: za("custom"),
    kind: Yi().transform((e) => e),
    providerOptions: ys.optional(),
  }),
  Cs = Aa({
    type: za("reasoning-file"),
    data: Ma([ws, vs, rs(URL)]),
    mediaType: Yi(),
    providerOptions: ys.optional(),
  }),
  Is = Aa({
    type: za("tool-call"),
    toolCallId: Yi(),
    toolName: Yi(),
    input: wa(),
    providerOptions: ys.optional(),
    providerExecuted: Sa().optional(),
  }),
  As = Na("type", [
    Aa({
      type: za("text"),
      value: Yi(),
      providerOptions: ys.optional(),
    }),
    Aa({
      type: za("json"),
      value: gs,
      providerOptions: ys.optional(),
    }),
    Aa({
      type: za("execution-denied"),
      reason: Yi().optional(),
      providerOptions: ys.optional(),
    }),
    Aa({
      type: za("error-text"),
      value: Yi(),
      providerOptions: ys.optional(),
    }),
    Aa({
      type: za("error-json"),
      value: gs,
      providerOptions: ys.optional(),
    }),
    Aa({
      type: za("content"),
      value: Ca(
        Ma([
          Aa({
            type: za("text"),
            text: Yi(),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("file"),
            data: xs,
            mediaType: Yi(),
            filename: Yi().optional(),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("file-data"),
            data: Yi(),
            mediaType: Yi(),
            filename: Yi().optional(),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("file-url"),
            url: Yi(),
            mediaType: Yi().optional(),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("file-id"),
            fileId: Ma([Yi(), La(Yi(), Yi())]),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("file-reference"),
            providerReference: La(Yi(), Yi()),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("image-data"),
            data: Yi(),
            mediaType: Yi(),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("image-url"),
            url: Yi(),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("image-file-id"),
            fileId: Ma([Yi(), La(Yi(), Yi())]),
            providerOptions: ys.optional(),
          }),
          Aa({
            type: za("image-file-reference"),
            providerReference: La(Yi(), Yi()),
            providerOptions: ys.optional(),
          }),
          Aa({ type: za("custom"), providerOptions: ys.optional() }),
        ]),
      ),
    }),
  ]),
  Os = Aa({
    type: za("tool-result"),
    toolCallId: Yi(),
    toolName: Yi(),
    output: As,
    providerOptions: ys.optional(),
  }),
  Rs = Aa({
    type: za("tool-approval-request"),
    approvalId: Yi(),
    toolCallId: Yi(),
  }),
  Ms = Aa({
    type: za("tool-approval-response"),
    approvalId: Yi(),
    approved: Sa(),
    reason: Yi().optional(),
  }),
  Ps = Aa({
    role: za("system"),
    content: Yi(),
    providerOptions: ys.optional(),
  }),
  Ns = Aa({
    role: za("user"),
    content: Ma([Yi(), Ca(Ma([Ss, _s, Es]))]),
    providerOptions: ys.optional(),
  }),
  Ds = Aa({
    role: za("assistant"),
    content: Ma([Yi(), Ca(Ma([Ss, ks, Es, Ts, Cs, Is, Os, Rs]))]),
    providerOptions: ys.optional(),
  }),
  js = Aa({
    role: za("tool"),
    content: Ca(Ma([Os, Ms])),
    providerOptions: ys.optional(),
  });
function Ls(e, t) {
  if (void 0 === e && void 0 === t) return;
  if (void 0 === e) return t;
  if (void 0 === t) return e;
  const n = { ...e };
  for (const r in t)
    if (
      "__proto__" !== r &&
      "constructor" !== r &&
      "prototype" !== r &&
      Object.prototype.hasOwnProperty.call(t, r)
    ) {
      const o = t[r];
      if (void 0 === o) continue;
      const i = r in e ? e[r] : void 0,
        a = !(
          null === o ||
          "object" != typeof o ||
          Array.isArray(o) ||
          o instanceof Date ||
          o instanceof RegExp
        ),
        s = !(
          null == i ||
          "object" != typeof i ||
          Array.isArray(i) ||
          i instanceof Date ||
          i instanceof RegExp
        );
      n[r] = a && s ? Ls(i, o) : o;
    }
  return n;
}
function Fs(e) {
  const t = ["ROOT"];
  let n = -1,
    r = null,
    o = 0;
  function i(e) {
    return (
      (e >= "0" && e <= "9") || (e >= "A" && e <= "F") || (e >= "a" && e <= "f")
    );
  }
  function a(e, o, i) {
    switch (e) {
      case '"':
        (n = o), t.pop(), t.push(i), t.push("INSIDE_STRING");
        break;
      case "f":
      case "t":
      case "n":
        (n = o), (r = o), t.pop(), t.push(i), t.push("INSIDE_LITERAL");
        break;
      case "-":
        t.pop(), t.push(i), t.push("INSIDE_NUMBER");
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (n = o), t.pop(), t.push(i), t.push("INSIDE_NUMBER");
        break;
      case "{":
        (n = o), t.pop(), t.push(i), t.push("INSIDE_OBJECT_START");
        break;
      case "[":
        (n = o), t.pop(), t.push(i), t.push("INSIDE_ARRAY_START");
    }
  }
  function s(e, r) {
    switch (e) {
      case ",":
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      case "}":
        (n = r), t.pop();
    }
  }
  function l(e, r) {
    switch (e) {
      case ",":
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      case "]":
        (n = r), t.pop();
    }
  }
  for (let c = 0; c < e.length; c++) {
    const u = e[c];
    switch (t[t.length - 1]) {
      case "ROOT":
        a(u, c, "FINISH");
        break;
      case "INSIDE_OBJECT_START":
        switch (u) {
          case '"':
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          case "}":
            (n = c), t.pop();
        }
        break;
      case "INSIDE_OBJECT_AFTER_COMMA":
        '"' === u && (t.pop(), t.push("INSIDE_OBJECT_KEY"));
        break;
      case "INSIDE_OBJECT_KEY":
        '"' === u && (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
        break;
      case "INSIDE_OBJECT_AFTER_KEY":
        ":" === u && (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
        break;
      case "INSIDE_OBJECT_BEFORE_VALUE":
        a(u, c, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      case "INSIDE_OBJECT_AFTER_VALUE":
        s(u, c);
        break;
      case "INSIDE_STRING":
        switch (u) {
          case '"':
            t.pop(), (n = c);
            break;
          case "\\":
            t.push("INSIDE_STRING_ESCAPE");
            break;
          default:
            n = c;
        }
        break;
      case "INSIDE_ARRAY_START":
        "]" === u
          ? ((n = c), t.pop())
          : ((n = c), a(u, c, "INSIDE_ARRAY_AFTER_VALUE"));
        break;
      case "INSIDE_ARRAY_AFTER_VALUE":
        switch (u) {
          case ",":
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          case "]":
            (n = c), t.pop();
            break;
          default:
            n = c;
        }
        break;
      case "INSIDE_ARRAY_AFTER_COMMA":
        a(u, c, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      case "INSIDE_STRING_ESCAPE":
        t.pop(),
          "u" === u
            ? ((o = 0), t.push("INSIDE_STRING_UNICODE_ESCAPE"))
            : (n = c);
        break;
      case "INSIDE_STRING_UNICODE_ESCAPE":
        i(u) && (o++, 4 === o && (t.pop(), (n = c)));
        break;
      case "INSIDE_NUMBER":
        switch (u) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            n = c;
            break;
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",":
            t.pop(),
              "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && l(u, c),
              "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] && s(u, c);
            break;
          case "}":
            t.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] && s(u, c);
            break;
          case "]":
            t.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && l(u, c);
            break;
          default:
            t.pop();
        }
        break;
      case "INSIDE_LITERAL": {
        const o = e.substring(r, c + 1);
        "false".startsWith(o) || "true".startsWith(o) || "null".startsWith(o)
          ? (n = c)
          : (t.pop(),
            "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1]
              ? s(u, c)
              : "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && l(u, c));
        break;
      }
    }
  }
  let c = e.slice(0, n + 1);
  for (let n = t.length - 1; n >= 0; n--)
    switch (t[n]) {
      case "INSIDE_STRING":
        c += '"';
        break;
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE":
        c += "}";
        break;
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE":
        c += "]";
        break;
      case "INSIDE_LITERAL": {
        const t = e.substring(r, e.length);
        "true".startsWith(t)
          ? (c += "true".slice(t.length))
          : "false".startsWith(t)
            ? (c += "false".slice(t.length))
            : "null".startsWith(t) && (c += "null".slice(t.length));
      }
    }
  return c;
}
async function Us(e) {
  if (void 0 === e) return { value: void 0, state: "undefined-input" };
  let t = await Cr({ text: e });
  return t.success
    ? { value: t.value, state: "successful-parse" }
    : ((t = await Cr({ text: Fs(e) })),
      t.success
        ? { value: t.value, state: "repaired-parse" }
        : { value: void 0, state: "failed-parse" });
}
Ma([Ps, Ns, Ds, js]),
  ((e, t) => {
    for (var n in t) is(e, n, { get: t[n], enumerable: !0 });
  })(
    {},
    {
      array: () => Hs,
      choice: () => Vs,
      json: () => qs,
      object: () => zs,
      text: () => Bs,
    },
  );
var Bs = () => ({
    name: "text",
    responseFormat: Promise.resolve({ type: "text" }),
    parseCompleteOutput: async ({ text: e }) => e,
    parsePartialOutput: async ({ text: e }) => ({ partial: e }),
    createElementStreamTransform() {},
  }),
  zs = ({ schema: e, name: t, description: n }) => {
    const r = xr(e);
    return {
      name: "object",
      responseFormat: Ir(r.jsonSchema).then((e) => ({
        type: "json",
        schema: e,
        ...(null != t && { name: t }),
        ...(null != n && { description: n }),
      })),
      async parseCompleteOutput({ text: e }, t) {
        const n = await Cr({ text: e });
        if (!n.success)
          throw new cs({
            message: "No object generated: could not parse the response.",
            cause: n.error,
            text: e,
            response: t.response,
            usage: t.usage,
            finishReason: t.finishReason,
          });
        const o = await kr({ value: n.value, schema: r });
        if (!o.success)
          throw new cs({
            message: "No object generated: response did not match schema.",
            cause: o.error,
            text: e,
            response: t.response,
            usage: t.usage,
            finishReason: t.finishReason,
          });
        return o.value;
      },
      async parsePartialOutput({ text: e }) {
        const t = await Us(e);
        switch (t.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse":
            return { partial: t.value };
        }
      },
      createElementStreamTransform() {},
    };
  },
  Hs = ({ element: e, name: t, description: n }) => {
    const r = xr(e);
    return {
      name: "array",
      responseFormat: Ir(r.jsonSchema).then((e) => {
        const { $schema: r, ...o } = e;
        return {
          type: "json",
          schema: {
            $schema: "http://json-schema.org/draft-07/schema#",
            type: "object",
            properties: { elements: { type: "array", items: o } },
            required: ["elements"],
            additionalProperties: !1,
          },
          ...(null != t && { name: t }),
          ...(null != n && { description: n }),
        };
      }),
      async parseCompleteOutput({ text: e }, t) {
        const n = await Cr({ text: e });
        if (!n.success)
          throw new cs({
            message: "No object generated: could not parse the response.",
            cause: n.error,
            text: e,
            response: t.response,
            usage: t.usage,
            finishReason: t.finishReason,
          });
        const o = n.value;
        if (
          null == o ||
          "object" != typeof o ||
          !("elements" in o) ||
          !Array.isArray(o.elements)
        )
          throw new cs({
            message: "No object generated: response did not match schema.",
            cause: new V({
              value: o,
              cause: "response must be an object with an elements array",
            }),
            text: e,
            response: t.response,
            usage: t.usage,
            finishReason: t.finishReason,
          });
        const i = [];
        for (const n of o.elements) {
          const o = await kr({ value: n, schema: r });
          if (!o.success)
            throw new cs({
              message: "No object generated: response did not match schema.",
              cause: o.error,
              text: e,
              response: t.response,
              usage: t.usage,
              finishReason: t.finishReason,
            });
          i.push(o.value);
        }
        return i;
      },
      async parsePartialOutput({ text: e }) {
        const t = await Us(e);
        switch (t.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse": {
            const e = t.value;
            if (
              null == e ||
              "object" != typeof e ||
              !("elements" in e) ||
              !Array.isArray(e.elements)
            )
              return;
            const n =
                "repaired-parse" === t.state && e.elements.length > 0
                  ? e.elements.slice(0, -1)
                  : e.elements,
              o = [];
            for (const e of n) {
              const t = await kr({ value: e, schema: r });
              t.success && o.push(t.value);
            }
            return { partial: o };
          }
        }
      },
      createElementStreamTransform() {
        let e = 0;
        return new TransformStream({
          transform({ partialOutput: t }, n) {
            if (null != t) for (; e < t.length; e++) n.enqueue(t[e]);
          },
        });
      },
    };
  },
  Vs = ({ options: e, name: t, description: n }) => ({
    name: "choice",
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: { result: { type: "string", enum: e } },
        required: ["result"],
        additionalProperties: !1,
      },
      ...(null != t && { name: t }),
      ...(null != n && { description: n }),
    }),
    async parseCompleteOutput({ text: t }, n) {
      const r = await Cr({ text: t });
      if (!r.success)
        throw new cs({
          message: "No object generated: could not parse the response.",
          cause: r.error,
          text: t,
          response: n.response,
          usage: n.usage,
          finishReason: n.finishReason,
        });
      const o = r.value;
      if (
        null == o ||
        "object" != typeof o ||
        !("result" in o) ||
        "string" != typeof o.result ||
        !e.includes(o.result)
      )
        throw new cs({
          message: "No object generated: response did not match schema.",
          cause: new V({
            value: o,
            cause: "response must be an object that contains a choice value.",
          }),
          text: t,
          response: n.response,
          usage: n.usage,
          finishReason: n.finishReason,
        });
      return o.result;
    },
    async parsePartialOutput({ text: t }) {
      const n = await Us(t);
      switch (n.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse": {
          const t = n.value;
          if (
            null == t ||
            "object" != typeof t ||
            !("result" in t) ||
            "string" != typeof t.result
          )
            return;
          const r = e.filter((e) => e.startsWith(t.result));
          return "successful-parse" === n.state
            ? r.includes(t.result)
              ? { partial: t.result }
              : void 0
            : 1 === r.length
              ? { partial: r[0] }
              : void 0;
        }
      }
    },
    createElementStreamTransform() {},
  }),
  qs = ({ name: e, description: t } = {}) => ({
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...(null != e && { name: e }),
      ...(null != t && { description: t }),
    }),
    async parseCompleteOutput({ text: e }, t) {
      const n = await Cr({ text: e });
      if (!n.success)
        throw new cs({
          message: "No object generated: could not parse the response.",
          cause: n.error,
          text: e,
          response: t.response,
          usage: t.usage,
          finishReason: t.finishReason,
        });
      return n.value;
    },
    async parsePartialOutput({ text: e }) {
      const t = await Us(e);
      switch (t.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return void 0 === t.value ? void 0 : { partial: t.value };
      }
    },
    createElementStreamTransform() {},
  });
new TextEncoder(),
  Nn({ prefix: "aitxt", size: 24 }),
  Nn({ prefix: "call", size: 24 }),
  TransformStream;
var Gs = La(Yi(), gs.optional()),
  Ws = Sr(() =>
    Er(
      Ma([
        Oa({
          type: za("text-start"),
          id: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("text-delta"),
          id: Yi(),
          delta: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("text-end"),
          id: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({ type: za("error"), errorText: Yi() }),
        Oa({
          type: za("tool-input-start"),
          toolCallId: Yi(),
          toolName: Yi(),
          providerExecuted: Sa().optional(),
          providerMetadata: ys.optional(),
          toolMetadata: Gs.optional(),
          dynamic: Sa().optional(),
          title: Yi().optional(),
        }),
        Oa({
          type: za("tool-input-delta"),
          toolCallId: Yi(),
          inputTextDelta: Yi(),
        }),
        Oa({
          type: za("tool-input-available"),
          toolCallId: Yi(),
          toolName: Yi(),
          input: wa(),
          providerExecuted: Sa().optional(),
          providerMetadata: ys.optional(),
          toolMetadata: Gs.optional(),
          dynamic: Sa().optional(),
          title: Yi().optional(),
        }),
        Oa({
          type: za("tool-input-error"),
          toolCallId: Yi(),
          toolName: Yi(),
          input: wa(),
          providerExecuted: Sa().optional(),
          providerMetadata: ys.optional(),
          toolMetadata: Gs.optional(),
          dynamic: Sa().optional(),
          errorText: Yi(),
          title: Yi().optional(),
        }),
        Oa({
          type: za("tool-approval-request"),
          approvalId: Yi(),
          toolCallId: Yi(),
          isAutomatic: Sa().optional(),
          signature: Yi().optional(),
        }),
        Oa({
          type: za("tool-approval-response"),
          approvalId: Yi(),
          approved: Sa(),
          reason: Yi().optional(),
          providerExecuted: Sa().optional(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("tool-output-available"),
          toolCallId: Yi(),
          output: wa(),
          providerExecuted: Sa().optional(),
          providerMetadata: ys.optional(),
          toolMetadata: Gs.optional(),
          dynamic: Sa().optional(),
          preliminary: Sa().optional(),
        }),
        Oa({
          type: za("tool-output-error"),
          toolCallId: Yi(),
          errorText: Yi(),
          providerExecuted: Sa().optional(),
          providerMetadata: ys.optional(),
          toolMetadata: Gs.optional(),
          dynamic: Sa().optional(),
        }),
        Oa({ type: za("tool-output-denied"), toolCallId: Yi() }),
        Oa({
          type: za("reasoning-start"),
          id: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("reasoning-delta"),
          id: Yi(),
          delta: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("reasoning-end"),
          id: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("custom"),
          kind: Yi().transform((e) => e),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("source-url"),
          sourceId: Yi(),
          url: Yi(),
          title: Yi().optional(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("source-document"),
          sourceId: Yi(),
          mediaType: Yi(),
          title: Yi(),
          filename: Yi().optional(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("file"),
          url: Yi(),
          mediaType: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: za("reasoning-file"),
          url: Yi(),
          mediaType: Yi(),
          providerMetadata: ys.optional(),
        }),
        Oa({
          type: ns((e) => "string" == typeof e && e.startsWith("data-"), {
            message: 'Type must start with "data-"',
          }),
          id: Yi().optional(),
          data: wa(),
          transient: Sa().optional(),
        }),
        Oa({ type: za("start-step") }),
        Oa({ type: za("finish-step") }),
        Oa({
          type: za("start"),
          messageId: Yi().optional(),
          messageMetadata: wa().optional(),
        }),
        Oa({
          type: za("finish"),
          finishReason: Ua([
            "stop",
            "length",
            "content-filter",
            "tool-calls",
            "error",
            "other",
          ]).optional(),
          messageMetadata: wa().optional(),
        }),
        Oa({ type: za("abort"), reason: Yi().optional() }),
        Oa({ type: za("message-metadata"), messageMetadata: wa() }),
      ]),
    ),
  );
function $s() {
  return Object.create(null);
}
function Ys(e) {
  return e.type.startsWith("tool-");
}
function Ks(e) {
  return (
    Ys(e) ||
    (function (e) {
      return "dynamic-tool" === e.type;
    })(e)
  );
}
function Zs(e) {
  return e.type.split("-").slice(1).join("-");
}
function Qs({ lastMessage: e, messageId: t }) {
  return {
    message:
      "assistant" === (null == e ? void 0 : e.role)
        ? e
        : { id: t, metadata: void 0, role: "assistant", parts: [] },
    activeTextParts: $s(),
    activeReasoningParts: $s(),
    partialToolCalls: $s(),
  };
}
function Js({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: n,
  runUpdateMessageJob: r,
  onError: o,
  onToolCall: i,
  onData: a,
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(e, s) {
        await r(async ({ state: r, write: l }) => {
          var c, u, d, p;
          function f(e) {
            const t = r.message.parts
              .filter(Ks)
              .find((t) => t.toolCallId === e);
            if (null == t)
              throw new hs({
                chunkType: "tool-invocation",
                chunkId: e,
                message: `No tool invocation found for tool call ID "${e}".`,
              });
            return t;
          }
          function h(e) {
            var t;
            const n = r.message.parts.find(
                (t) => Ys(t) && t.toolCallId === e.toolCallId,
              ),
              o = e,
              i = n;
            if (null != n) {
              (n.state = e.state),
                (i.input = o.input),
                (i.output = o.output),
                (i.errorText = o.errorText),
                (i.rawInput = o.rawInput),
                (i.preliminary = o.preliminary),
                void 0 !== e.title && (i.title = e.title),
                void 0 !== e.toolMetadata && (i.toolMetadata = e.toolMetadata),
                (i.providerExecuted =
                  null != (t = o.providerExecuted) ? t : n.providerExecuted);
              const r = o.providerMetadata;
              null != r &&
                ("output-available" === e.state || "output-error" === e.state
                  ? (n.resultProviderMetadata = r)
                  : (n.callProviderMetadata = r));
            } else
              r.message.parts.push({
                type: `tool-${e.toolName}`,
                toolCallId: e.toolCallId,
                state: e.state,
                title: e.title,
                ...(void 0 !== e.toolMetadata
                  ? { toolMetadata: e.toolMetadata }
                  : {}),
                input: o.input,
                output: o.output,
                rawInput: o.rawInput,
                errorText: o.errorText,
                providerExecuted: o.providerExecuted,
                preliminary: o.preliminary,
                ...(null == o.providerMetadata ||
                ("output-available" !== e.state && "output-error" !== e.state)
                  ? {}
                  : { resultProviderMetadata: o.providerMetadata }),
                ...(null != o.providerMetadata &&
                "output-available" !== e.state &&
                "output-error" !== e.state
                  ? { callProviderMetadata: o.providerMetadata }
                  : {}),
              });
          }
          function m(e) {
            var t, n;
            const o = r.message.parts.find(
                (t) =>
                  "dynamic-tool" === t.type && t.toolCallId === e.toolCallId,
              ),
              i = e,
              a = o;
            if (null != o) {
              (o.state = e.state),
                (a.toolName = e.toolName),
                (a.input = i.input),
                (a.output = i.output),
                (a.errorText = i.errorText),
                (a.rawInput = null != (t = i.rawInput) ? t : a.rawInput),
                (a.preliminary = i.preliminary),
                void 0 !== e.title && (a.title = e.title),
                void 0 !== e.toolMetadata && (a.toolMetadata = e.toolMetadata),
                (a.providerExecuted =
                  null != (n = i.providerExecuted) ? n : o.providerExecuted);
              const r = i.providerMetadata;
              null != r &&
                ("output-available" === e.state || "output-error" === e.state
                  ? (o.resultProviderMetadata = r)
                  : (o.callProviderMetadata = r));
            } else
              r.message.parts.push({
                type: "dynamic-tool",
                toolName: e.toolName,
                toolCallId: e.toolCallId,
                state: e.state,
                input: i.input,
                output: i.output,
                errorText: i.errorText,
                preliminary: i.preliminary,
                providerExecuted: i.providerExecuted,
                title: e.title,
                ...(void 0 !== e.toolMetadata
                  ? { toolMetadata: e.toolMetadata }
                  : {}),
                ...(null == i.providerMetadata ||
                ("output-available" !== e.state && "output-error" !== e.state)
                  ? {}
                  : { resultProviderMetadata: i.providerMetadata }),
                ...(null != i.providerMetadata &&
                "output-available" !== e.state &&
                "output-error" !== e.state
                  ? { callProviderMetadata: i.providerMetadata }
                  : {}),
              });
          }
          async function g(e) {
            if (null != e) {
              const n =
                null != r.message.metadata ? Ls(r.message.metadata, e) : e;
              null != t &&
                (await Tr({
                  value: n,
                  schema: t,
                  context: {
                    field: "message.metadata",
                    entityId: r.message.id,
                  },
                })),
                (r.message.metadata = n);
            }
          }
          switch (e.type) {
            case "text-start": {
              const t = {
                type: "text",
                text: "",
                providerMetadata: e.providerMetadata,
                state: "streaming",
              };
              (r.activeTextParts[e.id] = t), r.message.parts.push(t), l();
              break;
            }
            case "text-delta": {
              const t = r.activeTextParts[e.id];
              if (null == t)
                throw new hs({
                  chunkType: "text-delta",
                  chunkId: e.id,
                  message: `Received text-delta for missing text part with ID "${e.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`,
                });
              (t.text += e.delta),
                (t.providerMetadata =
                  null != (c = e.providerMetadata) ? c : t.providerMetadata),
                l();
              break;
            }
            case "text-end": {
              const t = r.activeTextParts[e.id];
              if (null == t)
                throw new hs({
                  chunkType: "text-end",
                  chunkId: e.id,
                  message: `Received text-end for missing text part with ID "${e.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`,
                });
              (t.state = "done"),
                (t.providerMetadata =
                  null != (u = e.providerMetadata) ? u : t.providerMetadata),
                delete r.activeTextParts[e.id],
                l();
              break;
            }
            case "custom": {
              const t = {
                type: "custom",
                kind: e.kind,
                providerMetadata: e.providerMetadata,
              };
              r.message.parts.push(t), l();
              break;
            }
            case "reasoning-start": {
              const t = {
                type: "reasoning",
                text: "",
                providerMetadata: e.providerMetadata,
                state: "streaming",
              };
              (r.activeReasoningParts[e.id] = t), r.message.parts.push(t), l();
              break;
            }
            case "reasoning-delta": {
              const t = r.activeReasoningParts[e.id];
              if (null == t)
                throw new hs({
                  chunkType: "reasoning-delta",
                  chunkId: e.id,
                  message: `Received reasoning-delta for missing reasoning part with ID "${e.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`,
                });
              (t.text += e.delta),
                (t.providerMetadata =
                  null != (d = e.providerMetadata) ? d : t.providerMetadata),
                l();
              break;
            }
            case "reasoning-end": {
              const t = r.activeReasoningParts[e.id];
              if (null == t)
                throw new hs({
                  chunkType: "reasoning-end",
                  chunkId: e.id,
                  message: `Received reasoning-end for missing reasoning part with ID "${e.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`,
                });
              (t.providerMetadata =
                null != (p = e.providerMetadata) ? p : t.providerMetadata),
                (t.state = "done"),
                delete r.activeReasoningParts[e.id],
                l();
              break;
            }
            case "file":
            case "reasoning-file":
              r.message.parts.push({
                type: e.type,
                mediaType: e.mediaType,
                url: e.url,
                ...(null != e.providerMetadata
                  ? { providerMetadata: e.providerMetadata }
                  : {}),
              }),
                l();
              break;
            case "source-url":
              r.message.parts.push({
                type: "source-url",
                sourceId: e.sourceId,
                url: e.url,
                title: e.title,
                providerMetadata: e.providerMetadata,
              }),
                l();
              break;
            case "source-document":
              r.message.parts.push({
                type: "source-document",
                sourceId: e.sourceId,
                mediaType: e.mediaType,
                title: e.title,
                filename: e.filename,
                providerMetadata: e.providerMetadata,
              }),
                l();
              break;
            case "tool-input-start": {
              const t = r.message.parts.filter(Ys);
              (r.partialToolCalls[e.toolCallId] = {
                text: "",
                toolName: e.toolName,
                index: t.length,
                dynamic: e.dynamic,
                title: e.title,
                toolMetadata: e.toolMetadata,
              }),
                e.dynamic
                  ? m({
                      toolCallId: e.toolCallId,
                      toolName: e.toolName,
                      state: "input-streaming",
                      input: void 0,
                      providerExecuted: e.providerExecuted,
                      title: e.title,
                      toolMetadata: e.toolMetadata,
                      providerMetadata: e.providerMetadata,
                    })
                  : h({
                      toolCallId: e.toolCallId,
                      toolName: e.toolName,
                      state: "input-streaming",
                      input: void 0,
                      providerExecuted: e.providerExecuted,
                      title: e.title,
                      toolMetadata: e.toolMetadata,
                      providerMetadata: e.providerMetadata,
                    }),
                l();
              break;
            }
            case "tool-input-delta": {
              const t = r.partialToolCalls[e.toolCallId];
              if (null == t)
                throw new hs({
                  chunkType: "tool-input-delta",
                  chunkId: e.toolCallId,
                  message: `Received tool-input-delta for missing tool call with ID "${e.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`,
                });
              t.text += e.inputTextDelta;
              const { value: n } = await Us(t.text);
              t.dynamic
                ? m({
                    toolCallId: e.toolCallId,
                    toolName: t.toolName,
                    state: "input-streaming",
                    input: n,
                    title: t.title,
                    toolMetadata: t.toolMetadata,
                  })
                : h({
                    toolCallId: e.toolCallId,
                    toolName: t.toolName,
                    state: "input-streaming",
                    input: n,
                    title: t.title,
                    toolMetadata: t.toolMetadata,
                  }),
                l();
              break;
            }
            case "tool-input-available":
              e.dynamic
                ? m({
                    toolCallId: e.toolCallId,
                    toolName: e.toolName,
                    state: "input-available",
                    input: e.input,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    title: e.title,
                    toolMetadata: e.toolMetadata,
                  })
                : h({
                    toolCallId: e.toolCallId,
                    toolName: e.toolName,
                    state: "input-available",
                    input: e.input,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    title: e.title,
                    toolMetadata: e.toolMetadata,
                  }),
                l(),
                i && !e.providerExecuted && (await i({ toolCall: e }));
              break;
            case "tool-input-error": {
              const t = r.message.parts
                .filter(Ks)
                .find((t) => t.toolCallId === e.toolCallId);
              (null != t ? "dynamic-tool" === t.type : e.dynamic)
                ? m({
                    toolCallId: e.toolCallId,
                    toolName: e.toolName,
                    state: "output-error",
                    input: e.input,
                    errorText: e.errorText,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    toolMetadata: e.toolMetadata,
                  })
                : h({
                    toolCallId: e.toolCallId,
                    toolName: e.toolName,
                    state: "output-error",
                    input: void 0,
                    rawInput: e.input,
                    errorText: e.errorText,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    toolMetadata: e.toolMetadata,
                  }),
                l();
              break;
            }
            case "tool-approval-request": {
              const t = f(e.toolCallId);
              (t.state = "approval-requested"),
                (t.approval = {
                  id: e.approvalId,
                  ...(!0 === e.isAutomatic ? { isAutomatic: !0 } : {}),
                  ...(null != e.signature ? { signature: e.signature } : {}),
                }),
                l();
              break;
            }
            case "tool-approval-response": {
              const t = (function (e) {
                  const t = r.message.parts.filter(Ks).find((t) => {
                    var n;
                    return (null == (n = t.approval) ? void 0 : n.id) === e;
                  });
                  if (null == t)
                    throw new hs({
                      chunkType: "tool-approval-response",
                      chunkId: e,
                      message: `No tool invocation found for approval ID "${e}".`,
                    });
                  return t;
                })(e.approvalId),
                n = null == t.approval ? { id: e.approvalId } : t.approval;
              (t.state = "approval-responded"),
                (t.approval = {
                  id: e.approvalId,
                  approved: e.approved,
                  ...(null != e.reason ? { reason: e.reason } : {}),
                  ...(!0 === n.isAutomatic ? { isAutomatic: !0 } : {}),
                }),
                null != e.providerExecuted &&
                  (t.providerExecuted = e.providerExecuted),
                null != e.providerMetadata &&
                  (t.callProviderMetadata = e.providerMetadata),
                l();
              break;
            }
            case "tool-output-denied":
              (f(e.toolCallId).state = "output-denied"), l();
              break;
            case "tool-output-available": {
              const t = f(e.toolCallId);
              "dynamic-tool" === t.type
                ? m({
                    toolCallId: e.toolCallId,
                    toolName: t.toolName,
                    state: "output-available",
                    input: t.input,
                    output: e.output,
                    preliminary: e.preliminary,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    title: t.title,
                    toolMetadata: t.toolMetadata,
                  })
                : h({
                    toolCallId: e.toolCallId,
                    toolName: Zs(t),
                    state: "output-available",
                    input: t.input,
                    output: e.output,
                    providerExecuted: e.providerExecuted,
                    preliminary: e.preliminary,
                    providerMetadata: e.providerMetadata,
                    title: t.title,
                    toolMetadata: t.toolMetadata,
                  }),
                l();
              break;
            }
            case "tool-output-error": {
              const t = f(e.toolCallId);
              "dynamic-tool" === t.type
                ? m({
                    toolCallId: e.toolCallId,
                    toolName: t.toolName,
                    state: "output-error",
                    input: t.input,
                    errorText: e.errorText,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    title: t.title,
                    toolMetadata: t.toolMetadata,
                  })
                : h({
                    toolCallId: e.toolCallId,
                    toolName: Zs(t),
                    state: "output-error",
                    input: t.input,
                    rawInput: t.rawInput,
                    errorText: e.errorText,
                    providerExecuted: e.providerExecuted,
                    providerMetadata: e.providerMetadata,
                    title: t.title,
                    toolMetadata: t.toolMetadata,
                  }),
                l();
              break;
            }
            case "start-step":
              r.message.parts.push({ type: "step-start" });
              break;
            case "finish-step":
              (r.activeTextParts = $s()), (r.activeReasoningParts = $s());
              break;
            case "start":
              null != e.messageId && (r.message.id = e.messageId),
                await g(e.messageMetadata),
                (null == e.messageId && null == e.messageMetadata) || l();
              break;
            case "finish":
              null != e.finishReason && (r.finishReason = e.finishReason),
                await g(e.messageMetadata),
                null != e.messageMetadata && l();
              break;
            case "message-metadata":
              await g(e.messageMetadata), null != e.messageMetadata && l();
              break;
            case "error":
              null == o || o(new Error(e.errorText));
              break;
            default:
              if (
                (function (e) {
                  return e.type.startsWith("data-");
                })(e)
              ) {
                if (null != (null == n ? void 0 : n[e.type])) {
                  const t = r.message.parts.findIndex(
                      (t) =>
                        "id" in t &&
                        "data" in t &&
                        t.id === e.id &&
                        t.type === e.type,
                    ),
                    o = t >= 0 ? t : r.message.parts.length;
                  await Tr({
                    value: e.data,
                    schema: n[e.type],
                    context: {
                      field: `message.parts[${o}].data`,
                      entityName: e.type,
                      entityId: e.id,
                    },
                  });
                }
                const t = e;
                if (t.transient) {
                  null == a || a(t);
                  break;
                }
                const o =
                  null != t.id
                    ? r.message.parts.find(
                        (e) => t.type === e.type && t.id === e.id,
                      )
                    : void 0;
                null != o ? (o.data = t.data) : r.message.parts.push(t),
                  null == a || a(t),
                  l();
              }
          }
          s.enqueue(e);
        });
      },
    }),
  );
}
Nn({ prefix: "aitxt", size: 24 }),
  Nn({ prefix: "call", size: 24 }),
  Nn({ prefix: "aitxt", size: 24 }),
  Nn({ prefix: "call", size: 24 });
var Xs = La(Yi(), gs.optional()),
  el = La(Yi(), Yi());
function tl(e) {
  return ({ url: t, abortSignal: n }) =>
    ms({
      url: t,
      maxBytes: null == e ? void 0 : e.maxBytes,
      abortSignal: n,
    });
}
Sr(() =>
  Er(
    Ca(
      Aa({
        id: Yi(),
        role: Ua(["system", "user", "assistant"]),
        metadata: wa().optional(),
        parts: Ca(
          Ma([
            Aa({
              type: za("text"),
              text: Yi(),
              state: Ua(["streaming", "done"]).optional(),
              providerMetadata: ys.optional(),
            }),
            Aa({
              type: za("reasoning"),
              text: Yi(),
              state: Ua(["streaming", "done"]).optional(),
              providerMetadata: ys.optional(),
            }),
            Aa({
              type: za("custom"),
              kind: Yi(),
              providerMetadata: ys.optional(),
            }),
            Aa({
              type: za("source-url"),
              sourceId: Yi(),
              url: Yi(),
              title: Yi().optional(),
              providerMetadata: ys.optional(),
            }),
            Aa({
              type: za("source-document"),
              sourceId: Yi(),
              mediaType: Yi(),
              title: Yi(),
              filename: Yi().optional(),
              providerMetadata: ys.optional(),
            }),
            Aa({
              type: za("file"),
              mediaType: Yi(),
              filename: Yi().optional(),
              url: Yi(),
              providerReference: el.optional(),
              providerMetadata: ys.optional(),
            }),
            Aa({
              type: za("reasoning-file"),
              mediaType: Yi(),
              url: Yi(),
              providerMetadata: ys.optional(),
            }),
            Aa({ type: za("step-start") }),
            Aa({
              type: Yi().startsWith("data-"),
              id: Yi().optional(),
              data: wa(),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("input-streaming"),
              input: wa().optional(),
              providerExecuted: Sa().optional(),
              callProviderMetadata: ys.optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              approval: Ta().optional(),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("input-available"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Ta().optional(),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("approval-requested"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: Ta().optional(),
                reason: Ta().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("approval-responded"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: Sa(),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("output-available"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: wa(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              resultProviderMetadata: ys.optional(),
              preliminary: Sa().optional(),
              approval: Aa({
                id: Yi(),
                approved: za(!0),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }).optional(),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("output-error"),
              input: wa().optional(),
              rawInput: wa().optional(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Yi(),
              callProviderMetadata: ys.optional(),
              resultProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: za(!0),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }).optional(),
            }),
            Aa({
              type: za("dynamic-tool"),
              toolName: Yi(),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("output-denied"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: za(!1),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("input-streaming"),
              providerExecuted: Sa().optional(),
              callProviderMetadata: ys.optional(),
              input: wa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              approval: Ta().optional(),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("input-available"),
              providerExecuted: Sa().optional(),
              input: wa(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Ta().optional(),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("approval-requested"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: Ta().optional(),
                reason: Ta().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("approval-responded"),
              input: wa(),
              providerExecuted: Sa().optional(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: Sa(),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("output-available"),
              providerExecuted: Sa().optional(),
              input: wa(),
              output: wa(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              resultProviderMetadata: ys.optional(),
              preliminary: Sa().optional(),
              approval: Aa({
                id: Yi(),
                approved: za(!0),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }).optional(),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("output-error"),
              providerExecuted: Sa().optional(),
              input: wa().optional(),
              rawInput: wa().optional(),
              output: Ta().optional(),
              errorText: Yi(),
              callProviderMetadata: ys.optional(),
              resultProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: za(!0),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }).optional(),
            }),
            Aa({
              type: Yi().startsWith("tool-"),
              toolCallId: Yi(),
              toolMetadata: Xs.optional(),
              state: za("output-denied"),
              providerExecuted: Sa().optional(),
              input: wa(),
              output: Ta().optional(),
              errorText: Ta().optional(),
              callProviderMetadata: ys.optional(),
              approval: Aa({
                id: Yi(),
                approved: za(!1),
                reason: Yi().optional(),
                isAutomatic: Sa().optional(),
                signature: Yi().optional(),
              }),
            }),
          ]),
        ).nonempty("Message must contain at least one part"),
      }),
    ).nonempty("Messages array must not be empty"),
  ),
),
  Nn({ prefix: "call", size: 24 }),
  Nn({ prefix: "call", size: 24 }),
  Nn({ prefix: "aiobj", size: 24 });
var nl = class {
  constructor() {
    (this.queue = []), (this.isProcessing = !1);
  }
  async processQueue() {
    if (!this.isProcessing) {
      for (this.isProcessing = !0; this.queue.length > 0; )
        await this.queue[0](), this.queue.shift();
      this.isProcessing = !1;
    }
  }
  async run(e) {
    return new Promise((t, n) => {
      this.queue.push(async () => {
        try {
          await e(), t();
        } catch (e) {
          n(e);
        }
      }),
        this.processQueue();
    });
  }
};
Nn({ prefix: "aiobj", size: 24 }), tl();
var rl = class {
    constructor(e) {
      (this.captureContext = null),
        (this.captureProcessor = null),
        (this.captureSource = null),
        (this.captureStream = null),
        (this.playbackContext = null),
        (this.playbackQueue = []),
        (this.playbackTime = 0),
        (this.playbackStartTime = 0),
        (this.activeSources = new Set()),
        (this.isPlaying = !1),
        (this.captureSampleRate = e.captureSampleRate),
        (this.playbackSampleRate = e.playbackSampleRate),
        (this.onAudio = e.onAudio),
        (this.onPlayingChange = e.onPlayingChange),
        (this.onCapturingChange = e.onCapturingChange);
    }
    ensurePlaybackContext() {
      null == this.playbackContext &&
        (this.playbackContext = new AudioContext({
          sampleRate: this.playbackSampleRate,
        }));
    }
    startCapture(e) {
      const t = new AudioContext({
        sampleRate: this.captureSampleRate,
      });
      (this.captureContext = t), (this.captureStream = e);
      const n = t.createMediaStreamSource(e);
      this.captureSource = n;
      const r = t.createScriptProcessor(4096, 1, 1);
      (this.captureProcessor = r),
        (r.onaudioprocess = (e) => {
          const n = e.inputBuffer.getChannelData(0),
            r = (function (e, t, n) {
              if (t === n) return e;
              const r = t / n,
                o = Math.round(e.length / r),
                i = new Float32Array(o);
              for (let t = 0; t < o; t++) {
                const n = t * r,
                  o = Math.floor(n),
                  a = Math.min(o + 1, e.length - 1),
                  s = n - o;
                i[t] = e[o] * (1 - s) + e[a] * s;
              }
              return i;
            })(new Float32Array(n), t.sampleRate, this.captureSampleRate);
          this.onAudio(
            (function (e) {
              const t = new ArrayBuffer(2 * e.length),
                n = new DataView(t);
              for (let t = 0; t < e.length; t++) {
                const r = Math.max(-1, Math.min(1, e[t]));
                n.setInt16(2 * t, r < 0 ? 32768 * r : 32767 * r, !0);
              }
              const r = new Uint8Array(t);
              let o = "";
              for (let e = 0; e < r.length; e += 32768) {
                const t = r.subarray(e, e + 32768);
                o += String.fromCharCode(...t);
              }
              return btoa(o);
            })(r),
          );
        }),
        n.connect(r),
        r.connect(t.destination),
        this.onCapturingChange(!0);
    }
    stopCapture() {
      var e, t, n, r;
      null == (e = this.captureProcessor) || e.disconnect(),
        null == (t = this.captureSource) || t.disconnect(),
        null == (n = this.captureContext) || n.close(),
        null == (r = this.captureStream) ||
          r.getTracks().forEach((e) => e.stop()),
        (this.captureProcessor = null),
        (this.captureSource = null),
        (this.captureContext = null),
        (this.captureStream = null),
        this.onCapturingChange(!1);
    }
    playAudio(e) {
      this.ensurePlaybackContext(),
        this.playbackQueue.push(
          (function (e) {
            const t = atob(e),
              n = new Uint8Array(t.length);
            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
            const r = new Int16Array(n.buffer),
              o = new Float32Array(r.length);
            for (let e = 0; e < r.length; e++) o[e] = r[e] / 32768;
            return o;
          })(e),
        ),
        this.schedulePlayback();
    }
    stopPlayback() {
      this.playbackQueue = [];
      for (const e of this.activeSources)
        try {
          e.stop();
        } catch (e) {}
      this.activeSources.clear(),
        null != this.playbackContext &&
          (this.playbackTime = this.playbackContext.currentTime),
        this.setPlaying(!1);
    }
    getPlaybackOffsetMs() {
      const e = this.playbackContext;
      return null == e ? 0 : 1e3 * (e.currentTime - this.playbackStartTime);
    }
    dispose() {
      var e;
      this.stopCapture(),
        this.stopPlayback(),
        null == (e = this.playbackContext) || e.close(),
        (this.playbackContext = null);
    }
    setPlaying(e) {
      var t, n;
      e &&
        !this.isPlaying &&
        (this.playbackStartTime =
          null !=
          (n = null == (t = this.playbackContext) ? void 0 : t.currentTime)
            ? n
            : 0),
        this.isPlaying !== e && ((this.isPlaying = e), this.onPlayingChange(e));
    }
    schedulePlayback() {
      const e = this.playbackContext;
      if (null != e && 0 !== this.playbackQueue.length)
        for (; this.playbackQueue.length > 0; ) {
          const t = this.playbackQueue.shift(),
            n = e.createBuffer(1, t.length, this.playbackSampleRate);
          n.getChannelData(0).set(t);
          const r = e.createBufferSource();
          (r.buffer = n), r.connect(e.destination);
          const o = Math.max(this.playbackTime, e.currentTime);
          r.start(o),
            (this.playbackTime = o + n.duration),
            this.activeSources.add(r),
            this.setPlaying(!0),
            (r.onended = () => {
              this.activeSources.delete(r),
                0 === this.playbackQueue.length &&
                  0 === this.activeSources.size &&
                  this.setPlaying(!1);
            });
        }
    }
  },
  ol = class {
    constructor(e) {
      (this.ws = null),
        (this.sendQueue = Promise.resolve()),
        (this.model = e.model),
        (this.onServerEvent = e.onServerEvent),
        (this.onError = e.onError),
        (this.onClose = e.onClose);
    }
    connect({ token: e, url: t, onOpen: n }) {
      var r;
      null == (r = this.ws) || r.close(), (this.ws = null);
      const o = this.model.getWebSocketConfig({ token: e, url: t }),
        i = new WebSocket(o.url, o.protocols);
      (this.ws = i),
        (i.onopen = () => {
          this.ws === i && n();
        }),
        (i.onmessage = (e) => {
          this.handleMessage(e);
        }),
        (i.onerror = () => {
          this.onError(new Error("WebSocket connection error"));
        }),
        (i.onclose = () => {
          this.ws === i && ((this.ws = null), this.onClose());
        });
    }
    disconnect() {
      var e;
      null == (e = this.ws) || e.close(), (this.ws = null);
    }
    sendEvent(e) {
      this.sendQueue = this.sendQueue
        .then(async () => {
          const t = await this.model.serializeClientEvent(e);
          null != t && this.sendRaw(t);
        })
        .catch((e) => {
          this.onError(
            e instanceof Error
              ? e
              : new Error(`Failed to send realtime event: ${String(e)}`),
          );
        });
    }
    sendRaw(e) {
      var t;
      (null == (t = this.ws) ? void 0 : t.readyState) === WebSocket.OPEN &&
        this.ws.send(JSON.stringify(e));
    }
    dispose() {
      this.disconnect();
    }
    async handleMessage(e) {
      let t;
      t =
        "string" == typeof e.data
          ? e.data
          : e.data instanceof Blob
            ? await e.data.text()
            : new TextDecoder().decode(e.data);
      const n = await Cr({ text: t });
      if (!n.success) return;
      const r = n.value;
      if (null != this.model.getHealthCheckResponse) {
        const e = this.model.getHealthCheckResponse(r);
        null != e && this.sendRaw(e);
      }
      const o = this.model.parseServerEvent(r),
        i = Array.isArray(o) ? o : [o];
      for (const e of i) await this.onServerEvent(e);
    }
  },
  il = class {
    constructor(e = 500) {
      (this.maxEvents = e),
        (this.currentAssistantMessageId = null),
        (this.textAccumulators = new Map()),
        (this.toolArgAccumulators = new Map()),
        (this.toolCallIdToMessageId = new Map()),
        (this.toolCallIdToName = new Map()),
        (this.inputAudioMessageInsertIndex = new Map()),
        (this.itemIdToPartLocation = new Map());
    }
    setStatus(e, t) {
      return { ...e, status: t };
    }
    setCapturing(e, t) {
      return { ...e, isCapturing: t };
    }
    setPlaying(e, t) {
      return { ...e, isPlaying: t };
    }
    addUserTextMessage(e, t) {
      return {
        ...e,
        messages: [
          ...e.messages,
          {
            id: `user-${Date.now()}`,
            role: "user",
            parts: [{ type: "text", text: t, state: "done" }],
          },
        ],
      };
    }
    addToolOutput(e, t, n) {
      return {
        state: this.updateToolPartState(e, t, n),
        output: {
          callId: t,
          name: this.toolCallIdToName.get(t),
          output: JSON.stringify(n),
        },
      };
    }
    async reduceServerEvent(e, t) {
      var n;
      let r = this.pushEvent(e, t);
      const o = [];
      switch (t.type) {
        case "session-created":
        case "session-updated":
          "connecting" === r.status && (r = this.setStatus(r, "connected"));
          break;
        case "audio-delta":
          o.push({
            type: "play-audio",
            itemId: t.itemId,
            delta: t.delta,
          });
          break;
        case "audio-committed":
          null != t.itemId &&
            this.inputAudioMessageInsertIndex.set(t.itemId, r.messages.length);
          break;
        case "audio-transcript-delta":
        case "text-delta":
          r = this.appendTextDelta(r, t.itemId, t.delta);
          break;
        case "audio-transcript-done":
          r = this.finalizeText(r, t.itemId, t.transcript);
          break;
        case "text-done":
          r = this.finalizeText(r, t.itemId, t.text);
          break;
        case "input-transcription-completed":
          r = this.addInputTranscriptionMessage(r, t.itemId, t.transcript);
          break;
        case "response-created":
        case "response-done":
          this.currentAssistantMessageId = null;
          break;
        case "speech-started":
          (this.currentAssistantMessageId = null),
            o.push({ type: "speech-started" });
          break;
        case "function-call-arguments-delta": {
          const { state: e, messageId: o } =
            this.getOrCreateAssistantMessage(r);
          (r = e), this.toolCallIdToMessageId.set(t.callId, o);
          const i =
            null != (n = this.toolArgAccumulators.get(t.callId)) ? n : "";
          this.toolArgAccumulators.set(t.callId, i + t.delta),
            (r = this.ensureToolPart(r, o, t.callId));
          break;
        }
        case "function-call-arguments-done": {
          this.toolArgAccumulators.delete(t.callId),
            this.toolCallIdToName.set(t.callId, t.name);
          const e = await Cr({ text: t.arguments }),
            n = e.success ? e.value : {},
            i = this.toolCallIdToMessageId.get(t.callId);
          null != i &&
            (r = this.markToolInputAvailable(r, i, t.callId, t.name, n)),
            e.success
              ? o.push({
                  type: "tool-call",
                  callId: t.callId,
                  name: t.name,
                  args: n,
                  rawArguments: t.arguments,
                })
              : o.push({
                  type: "error",
                  error: new Error(
                    `Failed to parse tool arguments: ${t.arguments}`,
                  ),
                });
          break;
        }
        case "error":
          o.push({ type: "error", error: new Error(t.message) });
      }
      return { state: r, effects: o };
    }
    pushEvent(e, t) {
      const n = [...e.events, t];
      return {
        ...e,
        events: n.length > this.maxEvents ? n.slice(-this.maxEvents) : n,
      };
    }
    getOrCreateAssistantMessage(e) {
      if (null != this.currentAssistantMessageId)
        return {
          state: e,
          messageId: this.currentAssistantMessageId,
        };
      const t = `assistant-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      return (
        (this.currentAssistantMessageId = t),
        {
          state: {
            ...e,
            messages: [...e.messages, { id: t, role: "assistant", parts: [] }],
          },
          messageId: t,
        }
      );
    }
    addInputTranscriptionMessage(e, t, n) {
      var r;
      const o = `user-${t}`;
      if (null != e.messages.find((e) => e.id === o))
        return {
          ...e,
          messages: e.messages.map((e) =>
            e.id === o
              ? {
                  ...e,
                  parts: [{ type: "text", text: n, state: "done" }],
                }
              : e,
          ),
        };
      const i = Math.min(
          null != (r = this.inputAudioMessageInsertIndex.get(t))
            ? r
            : e.messages.length,
          e.messages.length,
        ),
        a = [...e.messages];
      return (
        a.splice(i, 0, {
          id: o,
          role: "user",
          parts: [{ type: "text", text: n, state: "done" }],
        }),
        { ...e, messages: a }
      );
    }
    appendTextDelta(e, t, n) {
      var r;
      const { state: o, messageId: i } = this.getOrCreateAssistantMessage(e),
        a = (null != (r = this.textAccumulators.get(t)) ? r : "") + n;
      this.textAccumulators.set(t, a);
      const s = this.itemIdToPartLocation.get(t);
      return null != s
        ? this.updateMessagePart(o, s.messageId, s.partIndex, {
            type: "text",
            text: a,
            state: "streaming",
          })
        : {
            ...o,
            messages: o.messages.map((e) => {
              if (e.id !== i) return e;
              const n = e.parts.length;
              return (
                this.itemIdToPartLocation.set(t, {
                  messageId: i,
                  partIndex: n,
                }),
                {
                  ...e,
                  parts: [
                    ...e.parts,
                    { type: "text", text: a, state: "streaming" },
                  ],
                }
              );
            }),
          };
    }
    finalizeText(e, t, n) {
      var r;
      const o =
        null != (r = null != n ? n : this.textAccumulators.get(t)) ? r : "";
      this.textAccumulators.delete(t);
      const i = this.itemIdToPartLocation.get(t);
      return null == i
        ? e
        : (this.itemIdToPartLocation.delete(t),
          this.updateMessagePart(e, i.messageId, i.partIndex, {
            type: "text",
            text: o,
            state: "done",
          }));
    }
    ensureToolPart(e, t, n) {
      return {
        ...e,
        messages: e.messages.map((e) =>
          e.id !== t ||
          null !=
            e.parts.find((e) => "dynamic-tool" === e.type && e.toolCallId === n)
            ? e
            : {
                ...e,
                parts: [
                  ...e.parts,
                  {
                    type: "dynamic-tool",
                    toolName: "",
                    toolCallId: n,
                    state: "input-streaming",
                    input: void 0,
                  },
                ],
              },
        ),
      };
    }
    markToolInputAvailable(e, t, n, r, o) {
      return {
        ...e,
        messages: e.messages.map((e) =>
          e.id !== t
            ? e
            : {
                ...e,
                parts: e.parts.map((e) => {
                  if ("dynamic-tool" !== e.type) return e;
                  const t = e;
                  return t.toolCallId !== n
                    ? e
                    : {
                        ...t,
                        toolName: r,
                        state: "input-available",
                        input: o,
                      };
                }),
              },
        ),
      };
    }
    updateToolPartState(e, t, n) {
      const r = this.toolCallIdToMessageId.get(t);
      return null == r
        ? e
        : {
            ...e,
            messages: e.messages.map((e) =>
              e.id !== r
                ? e
                : {
                    ...e,
                    parts: e.parts.map((e) => {
                      if ("dynamic-tool" !== e.type) return e;
                      const r = e;
                      return r.toolCallId !== t
                        ? e
                        : {
                            ...r,
                            state: "output-available",
                            output: n,
                          };
                    }),
                  },
            ),
          };
    }
    updateMessagePart(e, t, n, r) {
      return {
        ...e,
        messages: e.messages.map((e) => {
          if (e.id !== t) return e;
          const o = [...e.parts];
          return (o[n] = r), { ...e, parts: o };
        }),
      };
    }
  },
  al = class {
    constructor(e) {
      var t, n, r, o, i, a, s, l;
      (this.state = {
        status: "disconnected",
        messages: [],
        events: [],
        isCapturing: !1,
        isPlaying: !1,
      }),
        (this.currentResponseItemId = null),
        (this.toolCallsInResponse = new Set()),
        (this.submittedToolOutputs = new Set()),
        (this.responseToolCallsClosed = !1),
        (this.model = e.model),
        (this.api = e.api),
        (this.sessionConfig = e.sessionConfig),
        (this.maxEvents = null != (t = e.maxEvents) ? t : 500),
        (this.reducer = new il(this.maxEvents)),
        (this.onToolCall = e.onToolCall),
        (this.onEvent = e.onEvent),
        (this.onError = e.onError);
      const c = null != (n = e.sampleRate) ? n : 24e3,
        u =
          null !=
          (i =
            null ==
            (o = null == (r = e.sessionConfig) ? void 0 : r.inputAudioFormat)
              ? void 0
              : o.rate)
            ? i
            : c,
        d =
          null !=
          (l =
            null ==
            (s = null == (a = e.sessionConfig) ? void 0 : a.outputAudioFormat)
              ? void 0
              : s.rate)
            ? l
            : c;
      (this.transport = new ol({
        model: this.model,
        onServerEvent: (e) => this.handleServerEvent(e),
        onError: (e) => {
          var t;
          this.applyState(this.reducer.setStatus(this.state, "error")),
            null == (t = this.onError) || t.call(this, e);
        },
        onClose: () => {
          this.applyState(this.reducer.setStatus(this.state, "disconnected"));
        },
      })),
        (this.audio = new rl({
          captureSampleRate: u,
          playbackSampleRate: d,
          onAudio: (e) => this.sendAudio(e),
          onCapturingChange: (e) => {
            this.applyState(this.reducer.setCapturing(this.state, e));
          },
          onPlayingChange: (e) => {
            this.applyState(this.reducer.setPlaying(this.state, e));
          },
        }));
    }
    async connect() {
      var e;
      this.applyState(this.reducer.setStatus(this.state, "connecting"));
      try {
        const e = await fetch(this.api.token, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionConfig: this.sessionConfig }),
        });
        if (!e.ok)
          throw new Error(`Failed to fetch realtime setup: ${e.status}`);
        const t = await e.json(),
          { token: n, url: r, tools: o } = t,
          i = { ...this.sessionConfig, tools: o };
        this.audio.ensurePlaybackContext(),
          this.transport.connect({
            token: n,
            url: r,
            onOpen: () => {
              this.sendEvent({ type: "session-update", config: i });
            },
          });
      } catch (t) {
        this.applyState(this.reducer.setStatus(this.state, "error")),
          null == (e = this.onError) ||
            e.call(
              this,
              t instanceof Error
                ? t
                : new Error(`Connection failed: ${String(t)}`),
            );
      }
    }
    disconnect() {
      this.transport.disconnect(),
        this.applyState(this.reducer.setStatus(this.state, "disconnected"));
    }
    sendEvent(e) {
      this.transport.sendEvent(e);
    }
    sendTextMessage(e) {
      this.sendEvent({
        type: "conversation-item-create",
        item: { type: "text-message", role: "user", text: e },
      }),
        this.sendEvent({ type: "response-create" }),
        this.applyState(this.reducer.addUserTextMessage(this.state, e));
    }
    sendAudio(e) {
      this.sendEvent({ type: "input-audio-append", audio: e });
    }
    commitAudio() {
      this.sendEvent({ type: "input-audio-commit" });
    }
    clearAudioBuffer() {
      this.sendEvent({ type: "input-audio-clear" });
    }
    requestResponse(e) {
      this.sendEvent({
        type: "response-create",
        ...(null != e ? { options: e } : {}),
      });
    }
    cancelResponse() {
      this.sendEvent({ type: "response-cancel" });
    }
    addToolOutput(e, t) {
      const { state: n, output: r } = this.reducer.addToolOutput(
        this.state,
        e,
        t,
      );
      this.applyState(n),
        this.sendEvent({
          type: "conversation-item-create",
          item: {
            type: "function-call-output",
            callId: r.callId,
            name: r.name,
            output: r.output,
          },
        }),
        this.submittedToolOutputs.add(e),
        this.maybeRequestToolResponse();
    }
    maybeRequestToolResponse() {
      if (this.responseToolCallsClosed && 0 !== this.toolCallsInResponse.size) {
        for (const e of this.toolCallsInResponse)
          if (!this.submittedToolOutputs.has(e)) return;
        this.sendEvent({ type: "response-create" }),
          this.toolCallsInResponse.clear(),
          this.submittedToolOutputs.clear(),
          (this.responseToolCallsClosed = !1);
      }
    }
    startAudioCapture(e) {
      this.audio.startCapture(e);
    }
    stopAudioCapture() {
      this.audio.stopCapture();
    }
    stopPlayback() {
      this.audio.stopPlayback();
    }
    dispose() {
      this.transport.dispose(),
        this.audio.dispose(),
        this.applyState(
          this.reducer.setStatus(
            this.reducer.setPlaying(
              this.reducer.setCapturing(this.state, !1),
              !1,
            ),
            "disconnected",
          ),
        );
    }
    applyState(e) {
      const t = this.state;
      (this.state = e),
        t.status !== e.status && this.setState("status", e.status),
        t.messages !== e.messages && this.setState("messages", e.messages),
        t.events !== e.events && this.setState("events", e.events),
        t.isCapturing !== e.isCapturing &&
          this.setState("isCapturing", e.isCapturing),
        t.isPlaying !== e.isPlaying && this.setState("isPlaying", e.isPlaying);
    }
    async executeToolCall({ name: e, args: t, callId: n }) {
      var r, o;
      if (null != this.onToolCall)
        try {
          const r = await this.onToolCall({
            toolCall: { toolCallId: n, toolName: e, args: t },
          });
          void 0 !== r && this.addToolOutput(n, r);
        } catch (e) {
          null == (o = this.onError) ||
            o.call(
              this,
              e instanceof Error
                ? e
                : new Error(`Client tool execution failed: ${String(e)}`),
            );
        }
      else
        null == (r = this.onError) ||
          r.call(this, new Error(`No handler provided for tool "${e}"`));
    }
    async handleServerEvent(e) {
      var t;
      const n = await this.reducer.reduceServerEvent(this.state, e);
      this.applyState(n.state), null == (t = this.onEvent) || t.call(this, e);
      for (const e of n.effects) this.handleReducerEffect(e);
      "response-done" === e.type &&
        this.toolCallsInResponse.size > 0 &&
        ((this.responseToolCallsClosed = !0), this.maybeRequestToolResponse());
    }
    handleReducerEffect(e) {
      var t;
      switch (e.type) {
        case "play-audio":
          (this.currentResponseItemId = e.itemId),
            this.audio.playAudio(e.delta);
          break;
        case "speech-started":
          if (this.state.isPlaying) {
            const e = this.audio.getPlaybackOffsetMs();
            this.audio.stopPlayback(),
              null != this.currentResponseItemId &&
                this.sendEvent({
                  type: "conversation-item-truncate",
                  itemId: this.currentResponseItemId,
                  contentIndex: 0,
                  audioEndMs: Math.round(e),
                });
          }
          break;
        case "tool-call":
          this.toolCallsInResponse.add(e.callId),
            this.executeToolCall({
              name: e.name,
              args: e.args,
              callId: e.callId,
            });
          break;
        case "error":
          null == (t = this.onError) || t.call(this, e.error);
      }
    }
  };
Symbol.for("vercel.ai.error.AI_NoSuchProviderError");
Nn({ prefix: "call", size: 24 }), tl();
var sl = class {
    constructor({
      api: e = "/api/chat",
      credentials: t,
      headers: n,
      body: r,
      fetch: o,
      prepareSendMessagesRequest: i,
      prepareReconnectToStreamRequest: a,
    }) {
      (this.api = e),
        (this.credentials = t),
        (this.headers = n),
        (this.body = r),
        (this.fetch = o),
        (this.prepareSendMessagesRequest = i),
        (this.prepareReconnectToStreamRequest = a);
    }
    async sendMessages({ abortSignal: e, ...t }) {
      var n, r, o, i, a;
      const s = await Ir(this.body),
        l = await Ir(this.headers),
        c = await Ir(this.credentials),
        u = { ...jn(l), ...jn(t.headers) },
        d = await (null == (n = this.prepareSendMessagesRequest)
          ? void 0
          : n.call(this, {
              api: this.api,
              id: t.chatId,
              messages: t.messages,
              body: { ...s, ...t.body },
              headers: u,
              credentials: c,
              requestMetadata: t.metadata,
              trigger: t.trigger,
              messageId: t.messageId,
            })),
        p = null != (r = null == d ? void 0 : d.api) ? r : this.api,
        f = void 0 !== (null == d ? void 0 : d.headers) ? jn(d.headers) : u,
        h =
          void 0 !== (null == d ? void 0 : d.body)
            ? d.body
            : {
                ...s,
                ...t.body,
                id: t.chatId,
                messages: t.messages,
                trigger: t.trigger,
                messageId: t.messageId,
              },
        m = null != (o = null == d ? void 0 : d.credentials) ? o : c,
        g = null != (i = this.fetch) ? i : globalThis.fetch,
        y = await g(p, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...f },
          body: JSON.stringify(h),
          credentials: m,
          signal: e,
        });
      if (!y.ok)
        throw new Error(
          null != (a = await y.text())
            ? a
            : "Failed to fetch the chat response.",
        );
      if (!y.body) throw new Error("The response body is empty.");
      return this.processResponseStream(y.body);
    }
    async reconnectToStream(e) {
      var t, n, r, o, i;
      const a = await Ir(this.body),
        s = await Ir(this.headers),
        l = await Ir(this.credentials),
        c = { ...jn(s), ...jn(e.headers) },
        u = await (null == (t = this.prepareReconnectToStreamRequest)
          ? void 0
          : t.call(this, {
              api: this.api,
              id: e.chatId,
              body: { ...a, ...e.body },
              headers: c,
              credentials: l,
              requestMetadata: e.metadata,
            })),
        d =
          null != (n = null == u ? void 0 : u.api)
            ? n
            : `${this.api}/${e.chatId}/stream`,
        p = void 0 !== (null == u ? void 0 : u.headers) ? jn(u.headers) : c,
        f = null != (r = null == u ? void 0 : u.credentials) ? r : l,
        h = null != (o = this.fetch) ? o : globalThis.fetch,
        m = await h(d, { method: "GET", headers: p, credentials: f });
      if (204 === m.status) return null;
      if (!m.ok)
        throw new Error(
          null != (i = await m.text())
            ? i
            : "Failed to fetch the chat response.",
        );
      if (!m.body) throw new Error("The response body is empty.");
      return this.processResponseStream(m.body);
    }
  },
  ll = class extends sl {
    constructor(e = {}) {
      super(e);
    }
    processResponseStream(e) {
      return (function ({ stream: e, schema: t }) {
        return e
          .pipeThrough(new TextDecoderStream())
          .pipeThrough(new bn())
          .pipeThrough(
            new TransformStream({
              async transform({ data: e }, n) {
                "[DONE]" !== e && n.enqueue(await Cr({ text: e, schema: t }));
              },
            }),
          );
      })({ stream: e, schema: Ws }).pipeThrough(
        new TransformStream({
          async transform(e, t) {
            if (!e.success) throw e.error;
            t.enqueue(e.value);
          },
        }),
      );
    }
  },
  cl = class {
    constructor({
      generateId: e = Dn,
      id: t = e(),
      transport: n = new ll(),
      messageMetadataSchema: r,
      dataPartSchemas: o,
      state: i,
      onError: a,
      onToolCall: s,
      onFinish: l,
      onData: c,
      sendAutomaticallyWhen: u,
    }) {
      (this.activeResponse = void 0),
        (this.jobExecutor = new nl()),
        (this.sendMessage = async (e, t) => {
          var n, r, o, i;
          if (null == e)
            return void (await this.makeRequest({
              trigger: "submit-message",
              messageId: null == (n = this.lastMessage) ? void 0 : n.id,
              ...t,
            }));
          let a;
          if ("text" in e || "files" in e) {
            const t = Array.isArray(e.files)
              ? e.files
              : await (async function (e) {
                  if (null == e) return [];
                  if (
                    !(globalThis.FileList && e instanceof globalThis.FileList)
                  )
                    throw new Error(
                      "FileList is not supported in the current environment",
                    );
                  return Promise.all(
                    Array.from(e).map(async (e) => {
                      const { name: t, type: n } = e;
                      return {
                        type: "file",
                        mediaType: n,
                        filename: t,
                        url: await new Promise((t, n) => {
                          const r = new FileReader();
                          (r.onload = (e) => {
                            var n;
                            t(null == (n = e.target) ? void 0 : n.result);
                          }),
                            (r.onerror = (e) => n(e)),
                            r.readAsDataURL(e);
                        }),
                      };
                    }),
                  );
                })(e.files);
            a = {
              parts: [
                ...t,
                ...("text" in e && null != e.text
                  ? [{ type: "text", text: e.text }]
                  : []),
              ],
            };
          } else a = e;
          if (null != e.messageId) {
            const t = this.state.messages.findIndex(
              (t) => t.id === e.messageId,
            );
            if (-1 === t)
              throw new Error(`message with id ${e.messageId} not found`);
            if ("user" !== this.state.messages[t].role)
              throw new Error(
                `message with id ${e.messageId} is not a user message`,
              );
            (this.state.messages = this.state.messages.slice(0, t + 1)),
              this.state.replaceMessage(t, {
                ...a,
                id: e.messageId,
                role: null != (r = a.role) ? r : "user",
                metadata: e.metadata,
              });
          } else
            this.state.pushMessage({
              ...a,
              id: null != (o = a.id) ? o : this.generateId(),
              role: null != (i = a.role) ? i : "user",
              metadata: e.metadata,
            });
          await this.makeRequest({
            trigger: "submit-message",
            messageId: e.messageId,
            ...t,
          });
        }),
        (this.regenerate = async ({ messageId: e, ...t } = {}) => {
          const n =
            null == e
              ? this.state.messages.length - 1
              : this.state.messages.findIndex((t) => t.id === e);
          if (-1 === n) throw new Error(`message ${e} not found`);
          (this.state.messages = this.state.messages.slice(
            0,
            "assistant" === this.messages[n].role ? n : n + 1,
          )),
            await this.makeRequest({
              trigger: "regenerate-message",
              messageId: e,
              ...t,
            });
        }),
        (this.resumeStream = async (e = {}) => {
          await this.makeRequest({ trigger: "resume-stream", ...e });
        }),
        (this.clearError = () => {
          "error" === this.status &&
            ((this.state.error = void 0), this.setStatus({ status: "ready" }));
        }),
        (this.addToolApprovalResponse = async ({
          id: e,
          approved: t,
          reason: n,
          options: r,
        }) =>
          this.jobExecutor.run(async () => {
            const o = this.state.messages,
              i = o[o.length - 1],
              a = (r) =>
                Ks(r) && "approval-requested" === r.state && r.approval.id === e
                  ? {
                      ...r,
                      state: "approval-responded",
                      approval: { id: e, approved: t, reason: n },
                    }
                  : r;
            this.state.replaceMessage(o.length - 1, {
              ...i,
              parts: i.parts.map(a),
            }),
              this.activeResponse &&
                (this.activeResponse.state.message.parts =
                  this.activeResponse.state.message.parts.map(a)),
              "streaming" !== this.status &&
                "submitted" !== this.status &&
                this.sendAutomaticallyWhen &&
                this.shouldSendAutomatically().then((e) => {
                  var t;
                  e &&
                    this.makeRequest({
                      trigger: "submit-message",
                      messageId: null == (t = this.lastMessage) ? void 0 : t.id,
                      ...r,
                    });
                });
          })),
        (this.addToolOutput = async ({
          state: e = "output-available",
          toolCallId: t,
          output: n,
          errorText: r,
          options: o,
        }) =>
          this.jobExecutor.run(async () => {
            const i = this.state.messages,
              a = i[i.length - 1],
              s = (o) =>
                Ks(o) && o.toolCallId === t
                  ? { ...o, state: e, output: n, errorText: r }
                  : o;
            this.state.replaceMessage(i.length - 1, {
              ...a,
              parts: a.parts.map(s),
            }),
              this.activeResponse &&
                (this.activeResponse.state.message.parts =
                  this.activeResponse.state.message.parts.map(s)),
              "streaming" !== this.status &&
                "submitted" !== this.status &&
                this.sendAutomaticallyWhen &&
                this.shouldSendAutomatically().then((e) => {
                  var t;
                  e &&
                    this.makeRequest({
                      trigger: "submit-message",
                      messageId: null == (t = this.lastMessage) ? void 0 : t.id,
                      ...o,
                    });
                });
          })),
        (this.addToolResult = this.addToolOutput),
        (this.stop = async () => {
          var e;
          ("streaming" !== this.status && "submitted" !== this.status) ||
            ((null == (e = this.activeResponse) ? void 0 : e.abortController) &&
              this.activeResponse.abortController.abort());
        }),
        (this.id = t),
        (this.transport = n),
        (this.generateId = e),
        (this.messageMetadataSchema = r),
        (this.dataPartSchemas = o),
        (this.state = i),
        (this.onError = a),
        (this.onToolCall = s),
        (this.onFinish = l),
        (this.onData = c),
        (this.sendAutomaticallyWhen = u);
    }
    get status() {
      return this.state.status;
    }
    setStatus({ status: e, error: t }) {
      this.status !== e && ((this.state.status = e), (this.state.error = t));
    }
    get error() {
      return this.state.error;
    }
    get messages() {
      return this.state.messages;
    }
    get lastMessage() {
      return this.state.messages[this.state.messages.length - 1];
    }
    set messages(e) {
      this.state.messages = e;
    }
    async shouldSendAutomatically() {
      if (!this.sendAutomaticallyWhen) return !1;
      const e = this.sendAutomaticallyWhen({
        messages: this.state.messages,
      });
      return e && "object" == typeof e && "then" in e ? await e : e;
    }
    async makeRequest({
      trigger: e,
      metadata: t,
      headers: n,
      body: r,
      messageId: o,
    }) {
      var i, a, s;
      let l;
      if ("resume-stream" === e)
        try {
          const e = await this.transport.reconnectToStream({
            chatId: this.id,
            metadata: t,
            headers: n,
            body: r,
          });
          if (null == e) return;
          l = e;
        } catch (e) {
          return (
            this.onError && e instanceof Error && this.onError(e),
            void this.setStatus({ status: "error", error: e })
          );
        }
      this.setStatus({ status: "submitted", error: void 0 });
      const c = this.lastMessage;
      let u = !1,
        d = !1,
        p = !1;
      try {
        const i = {
          state: Qs({
            lastMessage: this.state.snapshot(c),
            messageId: this.generateId(),
          }),
          abortController: new AbortController(),
        };
        let a;
        i.abortController.signal.addEventListener("abort", () => {
          u = !0;
        }),
          (this.activeResponse = i),
          (a =
            "resume-stream" === e
              ? l
              : await this.transport.sendMessages({
                  chatId: this.id,
                  messages: this.state.messages,
                  abortSignal: i.abortController.signal,
                  metadata: t,
                  headers: n,
                  body: r,
                  trigger: e,
                  messageId: o,
                }));
        const s = (e) =>
          this.jobExecutor.run(() =>
            e({
              state: i.state,
              write: () => {
                var e;
                this.setStatus({ status: "streaming" }),
                  i.state.message.id ===
                  (null == (e = this.lastMessage) ? void 0 : e.id)
                    ? this.state.replaceMessage(
                        this.state.messages.length - 1,
                        i.state.message,
                      )
                    : this.state.pushMessage(i.state.message);
              },
            }),
          );
        await (async function ({ stream: e, onError: t }) {
          const n = e.getReader();
          try {
            for (;;) {
              const { done: e } = await n.read();
              if (e) break;
            }
          } catch (e) {
            null == t || t(e);
          } finally {
            n.releaseLock();
          }
        })({
          stream: Js({
            stream: a,
            onToolCall: this.onToolCall,
            onData: this.onData,
            messageMetadataSchema: this.messageMetadataSchema,
            dataPartSchemas: this.dataPartSchemas,
            runUpdateMessageJob: s,
            onError: (e) => {
              throw e;
            },
          }),
          onError: (e) => {
            throw e;
          },
        }),
          this.setStatus({ status: "ready" });
      } catch (e) {
        if (u || "AbortError" === e.name)
          return (u = !0), this.setStatus({ status: "ready" }), null;
        (p = !0),
          e instanceof TypeError &&
            (e.message.toLowerCase().includes("fetch") ||
              e.message.toLowerCase().includes("network")) &&
            (d = !0),
          this.onError && e instanceof Error && this.onError(e),
          this.setStatus({ status: "error", error: e });
      } finally {
        try {
          null == (a = this.onFinish) ||
            a.call(this, {
              message: this.activeResponse.state.message,
              messages: this.state.messages,
              isAbort: u,
              isDisconnect: d,
              isError: p,
              finishReason:
                null == (i = this.activeResponse)
                  ? void 0
                  : i.state.finishReason,
            });
        } catch (e) {}
        this.activeResponse = void 0;
      }
      !p &&
        (await this.shouldSendAutomatically()) &&
        (await this.makeRequest({
          trigger: "submit-message",
          messageId: null == (s = this.lastMessage) ? void 0 : s.id,
          metadata: t,
          headers: n,
          body: r,
        }));
    }
  };
