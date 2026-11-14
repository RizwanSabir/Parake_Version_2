// vendor/module-90502.js — webpack module 90502
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.discriminatedUnion =
    t.date =
    t.boolean =
    t.bigint =
    t.array =
    t.any =
    t.coerce =
    t.ZodFirstPartyTypeKind =
    t.late =
    t.ZodSchema =
    t.Schema =
    t.ZodReadonly =
    t.ZodPipeline =
    t.ZodBranded =
    t.BRAND =
    t.ZodNaN =
    t.ZodCatch =
    t.ZodDefault =
    t.ZodNullable =
    t.ZodOptional =
    t.ZodTransformer =
    t.ZodEffects =
    t.ZodPromise =
    t.ZodNativeEnum =
    t.ZodEnum =
    t.ZodLiteral =
    t.ZodLazy =
    t.ZodFunction =
    t.ZodSet =
    t.ZodMap =
    t.ZodRecord =
    t.ZodTuple =
    t.ZodIntersection =
    t.ZodDiscriminatedUnion =
    t.ZodUnion =
    t.ZodObject =
    t.ZodArray =
    t.ZodVoid =
    t.ZodNever =
    t.ZodUnknown =
    t.ZodAny =
    t.ZodNull =
    t.ZodUndefined =
    t.ZodSymbol =
    t.ZodDate =
    t.ZodBoolean =
    t.ZodBigInt =
    t.ZodNumber =
    t.ZodString =
    t.ZodType =
      void 0),
  (t.NEVER =
    t.void =
    t.unknown =
    t.union =
    t.undefined =
    t.tuple =
    t.transformer =
    t.symbol =
    t.string =
    t.strictObject =
    t.set =
    t.record =
    t.promise =
    t.preprocess =
    t.pipeline =
    t.ostring =
    t.optional =
    t.onumber =
    t.oboolean =
    t.object =
    t.number =
    t.nullable =
    t.null =
    t.never =
    t.nativeEnum =
    t.nan =
    t.map =
    t.literal =
    t.lazy =
    t.intersection =
    t.instanceof =
    t.function =
    t.enum =
    t.effect =
      void 0),
  (t.datetimeRegex = R),
  (t.custom = we);
const r = n(19920 /* vendor/module-19920 */),
  o = n(74770 /* vendor/module-74770 */),
  i = n(73889 /* vendor/module-73889 */),
  a = n(29218 /* vendor/module-29218 */),
  s = n(22321 /* vendor/module-22321 */);
class l {
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
const c = (e, t) => {
  if ((0, a.isValid)(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const t = new r.ZodError(e.common.issues);
      return (this._error = t), this._error;
    },
  };
};
function u(e) {
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
class d {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return (0, s.getParsedType)(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: (0, s.getParsedType)(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new a.ParseStatus(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: (0, s.getParsedType)(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if ((0, a.isAsync)(t))
      throw new Error("Synchronous parse encountered promise.");
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
        parsedType: (0, s.getParsedType)(e),
      },
      r = this._parseSync({ data: e, path: n.path, parent: n });
    return c(n, r);
  }
  "~validate"(e) {
    const t = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: (0, s.getParsedType)(e),
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return (0, a.isValid)(n)
          ? { value: n.value }
          : { issues: t.common.issues };
      } catch (e) {
        e?.message?.toLowerCase()?.includes("encountered") &&
          (this["~standard"].async = !0),
          (t.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
      (0, a.isValid)(e) ? { value: e.value } : { issues: t.common.issues },
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
        parsedType: (0, s.getParsedType)(e),
      },
      r = this._parse({ data: e, path: n.path, parent: n }),
      o = await ((0, a.isAsync)(r) ? r : Promise.resolve(r));
    return c(n, o);
  }
  refine(e, t) {
    const n = (e) =>
      "string" == typeof t || void 0 === t
        ? { message: t }
        : "function" == typeof t
          ? t(e)
          : t;
    return this._refinement((t, o) => {
      const i = e(t),
        a = () => o.addIssue({ code: r.ZodIssueCode.custom, ...n(t) });
      return "undefined" != typeof Promise && i instanceof Promise
        ? i.then((e) => !!e || (a(), !1))
        : !!i || (a(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement(
      (n, r) =>
        !!e(n) || (r.addIssue("function" == typeof t ? t(n, r) : t), !1),
    );
  }
  _refinement(e) {
    return new fe({
      schema: this,
      typeName: Ee.ZodEffects,
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
    return he.create(this, this._def);
  }
  nullable() {
    return me.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Y.create(this);
  }
  promise() {
    return pe.create(this, this._def);
  }
  or(e) {
    return Q.create([this, e], this._def);
  }
  and(e) {
    return te.create(this, e, this._def);
  }
  transform(e) {
    return new fe({
      ...u(this._def),
      schema: this,
      typeName: Ee.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const t = "function" == typeof e ? e : () => e;
    return new ge({
      ...u(this._def),
      innerType: this,
      defaultValue: t,
      typeName: Ee.ZodDefault,
    });
  }
  brand() {
    return new be({
      typeName: Ee.ZodBranded,
      type: this,
      ...u(this._def),
    });
  }
  catch(e) {
    const t = "function" == typeof e ? e : () => e;
    return new ye({
      ...u(this._def),
      innerType: this,
      catchValue: t,
      typeName: Ee.ZodCatch,
    });
  }
  describe(e) {
    return new (0, this.constructor)({
      ...this._def,
      description: e,
    });
  }
  pipe(e) {
    return Se.create(this, e);
  }
  readonly() {
    return _e.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
(t.ZodType = d), (t.Schema = d), (t.ZodSchema = d);
const p = /^c[^\s-]{8,}$/i,
  f = /^[0-9a-z]+$/,
  h = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  m =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  g = /^[a-z0-9_-]{21}$/i,
  y = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  v =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  b =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let S;
const _ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  x =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  w =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  E =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  T = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  k = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  C =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  I = new RegExp(`^${C}$`);
function A(e) {
  let t = "[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : null == e.precision && (t = `${t}(\\.\\d+)?`),
    `([01]\\d|2[0-3]):[0-5]\\d(:${t})${e.precision ? "+" : "?"}`
  );
}
function O(e) {
  return new RegExp(`^${A(e)}$`);
}
function R(e) {
  let t = `${C}T${A(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function M(e, t) {
  return (
    !(("v4" !== t && t) || !_.test(e)) || !(("v6" !== t && t) || !w.test(e))
  );
}
function P(e, t) {
  if (!y.test(e)) return !1;
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
function N(e, t) {
  return (
    !(("v4" !== t && t) || !x.test(e)) || !(("v6" !== t && t) || !E.test(e))
  );
}
class D extends d {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== s.ZodParsedType.string)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.string,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    const t = new a.ParseStatus();
    let n;
    for (const o of this._def.checks)
      if ("min" === o.kind)
        e.data.length < o.value &&
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            code: r.ZodIssueCode.too_small,
            minimum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          t.dirty());
      else if ("max" === o.kind)
        e.data.length > o.value &&
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            code: r.ZodIssueCode.too_big,
            maximum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          t.dirty());
      else if ("length" === o.kind) {
        const i = e.data.length > o.value,
          s = e.data.length < o.value;
        (i || s) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? (0, a.addIssueToContext)(n, {
                code: r.ZodIssueCode.too_big,
                maximum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : s &&
              (0, a.addIssueToContext)(n, {
                code: r.ZodIssueCode.too_small,
                minimum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          t.dirty());
      } else if ("email" === o.kind)
        b.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            validation: "email",
            code: r.ZodIssueCode.invalid_string,
            message: o.message,
          }),
          t.dirty());
      else if ("emoji" === o.kind)
        S ||
          (S = new RegExp(
            "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
            "u",
          )),
          S.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            (0, a.addIssueToContext)(n, {
              validation: "emoji",
              code: r.ZodIssueCode.invalid_string,
              message: o.message,
            }),
            t.dirty());
      else if ("uuid" === o.kind)
        m.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            validation: "uuid",
            code: r.ZodIssueCode.invalid_string,
            message: o.message,
          }),
          t.dirty());
      else if ("nanoid" === o.kind)
        g.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            validation: "nanoid",
            code: r.ZodIssueCode.invalid_string,
            message: o.message,
          }),
          t.dirty());
      else if ("cuid" === o.kind)
        p.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            validation: "cuid",
            code: r.ZodIssueCode.invalid_string,
            message: o.message,
          }),
          t.dirty());
      else if ("cuid2" === o.kind)
        f.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            validation: "cuid2",
            code: r.ZodIssueCode.invalid_string,
            message: o.message,
          }),
          t.dirty());
      else if ("ulid" === o.kind)
        h.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            validation: "ulid",
            code: r.ZodIssueCode.invalid_string,
            message: o.message,
          }),
          t.dirty());
      else if ("url" === o.kind)
        try {
          new URL(e.data);
        } catch {
          (n = this._getOrReturnCtx(e, n)),
            (0, a.addIssueToContext)(n, {
              validation: "url",
              code: r.ZodIssueCode.invalid_string,
              message: o.message,
            }),
            t.dirty();
        }
      else
        "regex" === o.kind
          ? ((o.regex.lastIndex = 0),
            o.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              (0, a.addIssueToContext)(n, {
                validation: "regex",
                code: r.ZodIssueCode.invalid_string,
                message: o.message,
              }),
              t.dirty()))
          : "trim" === o.kind
            ? (e.data = e.data.trim())
            : "includes" === o.kind
              ? e.data.includes(o.value, o.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                (0, a.addIssueToContext)(n, {
                  code: r.ZodIssueCode.invalid_string,
                  validation: {
                    includes: o.value,
                    position: o.position,
                  },
                  message: o.message,
                }),
                t.dirty())
              : "toLowerCase" === o.kind
                ? (e.data = e.data.toLowerCase())
                : "toUpperCase" === o.kind
                  ? (e.data = e.data.toUpperCase())
                  : "startsWith" === o.kind
                    ? e.data.startsWith(o.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      (0, a.addIssueToContext)(n, {
                        code: r.ZodIssueCode.invalid_string,
                        validation: { startsWith: o.value },
                        message: o.message,
                      }),
                      t.dirty())
                    : "endsWith" === o.kind
                      ? e.data.endsWith(o.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        (0, a.addIssueToContext)(n, {
                          code: r.ZodIssueCode.invalid_string,
                          validation: { endsWith: o.value },
                          message: o.message,
                        }),
                        t.dirty())
                      : "datetime" === o.kind
                        ? R(o).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          (0, a.addIssueToContext)(n, {
                            code: r.ZodIssueCode.invalid_string,
                            validation: "datetime",
                            message: o.message,
                          }),
                          t.dirty())
                        : "date" === o.kind
                          ? I.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            (0, a.addIssueToContext)(n, {
                              code: r.ZodIssueCode.invalid_string,
                              validation: "date",
                              message: o.message,
                            }),
                            t.dirty())
                          : "time" === o.kind
                            ? O(o).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              (0, a.addIssueToContext)(n, {
                                code: r.ZodIssueCode.invalid_string,
                                validation: "time",
                                message: o.message,
                              }),
                              t.dirty())
                            : "duration" === o.kind
                              ? v.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                (0, a.addIssueToContext)(n, {
                                  validation: "duration",
                                  code: r.ZodIssueCode.invalid_string,
                                  message: o.message,
                                }),
                                t.dirty())
                              : "ip" === o.kind
                                ? M(e.data, o.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  (0, a.addIssueToContext)(n, {
                                    validation: "ip",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: o.message,
                                  }),
                                  t.dirty())
                                : "jwt" === o.kind
                                  ? P(e.data, o.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    (0, a.addIssueToContext)(n, {
                                      validation: "jwt",
                                      code: r.ZodIssueCode.invalid_string,
                                      message: o.message,
                                    }),
                                    t.dirty())
                                  : "cidr" === o.kind
                                    ? N(e.data, o.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      (0, a.addIssueToContext)(n, {
                                        validation: "cidr",
                                        code: r.ZodIssueCode.invalid_string,
                                        message: o.message,
                                      }),
                                      t.dirty())
                                    : "base64" === o.kind
                                      ? T.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        (0, a.addIssueToContext)(n, {
                                          validation: "base64",
                                          code: r.ZodIssueCode.invalid_string,
                                          message: o.message,
                                        }),
                                        t.dirty())
                                      : "base64url" === o.kind
                                        ? k.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          (0, a.addIssueToContext)(n, {
                                            validation: "base64url",
                                            code: r.ZodIssueCode.invalid_string,
                                            message: o.message,
                                          }),
                                          t.dirty())
                                        : s.util.assertNever(o);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: r.ZodIssueCode.invalid_string,
      ...i.errorUtil.errToObj(n),
    });
  }
  _addCheck(e) {
    return new D({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...i.errorUtil.errToObj(e),
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...i.errorUtil.errToObj(e),
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...i.errorUtil.errToObj(e),
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...i.errorUtil.errToObj(e),
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...i.errorUtil.errToObj(e),
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...i.errorUtil.errToObj(e),
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...i.errorUtil.errToObj(e),
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...i.errorUtil.errToObj(e),
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...i.errorUtil.errToObj(e),
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...i.errorUtil.errToObj(e),
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...i.errorUtil.errToObj(e),
    });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...i.errorUtil.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...i.errorUtil.errToObj(e),
    });
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
          ...i.errorUtil.errToObj(e?.message),
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
          ...i.errorUtil.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...i.errorUtil.errToObj(e),
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...i.errorUtil.errToObj(t),
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...i.errorUtil.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...i.errorUtil.errToObj(t),
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...i.errorUtil.errToObj(t),
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...i.errorUtil.errToObj(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...i.errorUtil.errToObj(t),
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...i.errorUtil.errToObj(t),
    });
  }
  nonempty(e) {
    return this.min(1, i.errorUtil.errToObj(e));
  }
  trim() {
    return new D({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new D({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new D({
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
function j(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    o = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(o).replace(".", "")) %
      Number.parseInt(t.toFixed(o).replace(".", ""))) /
    10 ** o
  );
}
(t.ZodString = D),
  (D.create = (e) =>
    new D({
      checks: [],
      typeName: Ee.ZodString,
      coerce: e?.coerce ?? !1,
      ...u(e),
    }));
class L extends d {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== s.ZodParsedType.number)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.number,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    let t;
    const n = new a.ParseStatus();
    for (const o of this._def.checks)
      "int" === o.kind
        ? s.util.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          (0, a.addIssueToContext)(t, {
            code: r.ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: o.message,
          }),
          n.dirty())
        : "min" === o.kind
          ? (o.inclusive ? e.data < o.value : e.data <= o.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            (0, a.addIssueToContext)(t, {
              code: r.ZodIssueCode.too_small,
              minimum: o.value,
              type: "number",
              inclusive: o.inclusive,
              exact: !1,
              message: o.message,
            }),
            n.dirty())
          : "max" === o.kind
            ? (o.inclusive ? e.data > o.value : e.data >= o.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              (0, a.addIssueToContext)(t, {
                code: r.ZodIssueCode.too_big,
                maximum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              n.dirty())
            : "multipleOf" === o.kind
              ? 0 !== j(e.data, o.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                (0, a.addIssueToContext)(t, {
                  code: r.ZodIssueCode.not_multiple_of,
                  multipleOf: o.value,
                  message: o.message,
                }),
                n.dirty())
              : "finite" === o.kind
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  (0, a.addIssueToContext)(t, {
                    code: r.ZodIssueCode.not_finite,
                    message: o.message,
                  }),
                  n.dirty())
                : s.util.assertNever(o);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, i.errorUtil.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, i.errorUtil.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, i.errorUtil.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, i.errorUtil.toString(t));
  }
  setLimit(e, t, n, r) {
    return new L({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: i.errorUtil.toString(r),
        },
      ],
    });
  }
  _addCheck(e) {
    return new L({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: i.errorUtil.toString(e),
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: i.errorUtil.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: i.errorUtil.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: i.errorUtil.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: i.errorUtil.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: i.errorUtil.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: i.errorUtil.toString(e),
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: i.errorUtil.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: i.errorUtil.toString(e),
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
        "int" === e.kind ||
        ("multipleOf" === e.kind && s.util.isInteger(e.value)),
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
(t.ZodNumber = L),
  (L.create = (e) =>
    new L({
      checks: [],
      typeName: Ee.ZodNumber,
      coerce: e?.coerce || !1,
      ...u(e),
    }));
class F extends d {
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
    if (this._getType(e) !== s.ZodParsedType.bigint)
      return this._getInvalidInput(e);
    let t;
    const n = new a.ParseStatus();
    for (const o of this._def.checks)
      "min" === o.kind
        ? (o.inclusive ? e.data < o.value : e.data <= o.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          (0, a.addIssueToContext)(t, {
            code: r.ZodIssueCode.too_small,
            type: "bigint",
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          n.dirty())
        : "max" === o.kind
          ? (o.inclusive ? e.data > o.value : e.data >= o.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            (0, a.addIssueToContext)(t, {
              code: r.ZodIssueCode.too_big,
              type: "bigint",
              maximum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            n.dirty())
          : "multipleOf" === o.kind
            ? e.data % o.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              (0, a.addIssueToContext)(t, {
                code: r.ZodIssueCode.not_multiple_of,
                multipleOf: o.value,
                message: o.message,
              }),
              n.dirty())
            : s.util.assertNever(o);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return (
      (0, a.addIssueToContext)(t, {
        code: r.ZodIssueCode.invalid_type,
        expected: s.ZodParsedType.bigint,
        received: t.parsedType,
      }),
      a.INVALID
    );
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, i.errorUtil.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, i.errorUtil.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, i.errorUtil.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, i.errorUtil.toString(t));
  }
  setLimit(e, t, n, r) {
    return new F({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: i.errorUtil.toString(r),
        },
      ],
    });
  }
  _addCheck(e) {
    return new F({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: i.errorUtil.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: i.errorUtil.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: i.errorUtil.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: i.errorUtil.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: i.errorUtil.toString(t),
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
(t.ZodBigInt = F),
  (F.create = (e) =>
    new F({
      checks: [],
      typeName: Ee.ZodBigInt,
      coerce: e?.coerce ?? !1,
      ...u(e),
    }));
class U extends d {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Boolean(e.data)),
      this._getType(e) !== s.ZodParsedType.boolean)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.boolean,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
  }
}
(t.ZodBoolean = U),
  (U.create = (e) =>
    new U({
      typeName: Ee.ZodBoolean,
      coerce: e?.coerce || !1,
      ...u(e),
    }));
class B extends d {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== s.ZodParsedType.date)
    ) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.date,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    if (Number.isNaN(e.data.getTime())) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_date,
        }),
        a.INVALID
      );
    }
    const t = new a.ParseStatus();
    let n;
    for (const o of this._def.checks)
      "min" === o.kind
        ? e.data.getTime() < o.value &&
          ((n = this._getOrReturnCtx(e, n)),
          (0, a.addIssueToContext)(n, {
            code: r.ZodIssueCode.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: "date",
          }),
          t.dirty())
        : "max" === o.kind
          ? e.data.getTime() > o.value &&
            ((n = this._getOrReturnCtx(e, n)),
            (0, a.addIssueToContext)(n, {
              code: r.ZodIssueCode.too_big,
              message: o.message,
              inclusive: !0,
              exact: !1,
              maximum: o.value,
              type: "date",
            }),
            t.dirty())
          : s.util.assertNever(o);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new B({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: i.errorUtil.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: i.errorUtil.toString(t),
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
(t.ZodDate = B),
  (B.create = (e) =>
    new B({
      checks: [],
      coerce: e?.coerce || !1,
      typeName: Ee.ZodDate,
      ...u(e),
    }));
class z extends d {
  _parse(e) {
    if (this._getType(e) !== s.ZodParsedType.symbol) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.symbol,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
  }
}
(t.ZodSymbol = z),
  (z.create = (e) => new z({ typeName: Ee.ZodSymbol, ...u(e) }));
class H extends d {
  _parse(e) {
    if (this._getType(e) !== s.ZodParsedType.undefined) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.undefined,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
  }
}
(t.ZodUndefined = H),
  (H.create = (e) => new H({ typeName: Ee.ZodUndefined, ...u(e) }));
class V extends d {
  _parse(e) {
    if (this._getType(e) !== s.ZodParsedType.null) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.null,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
  }
}
(t.ZodNull = V), (V.create = (e) => new V({ typeName: Ee.ZodNull, ...u(e) }));
class q extends d {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return (0, a.OK)(e.data);
  }
}
(t.ZodAny = q), (q.create = (e) => new q({ typeName: Ee.ZodAny, ...u(e) }));
class G extends d {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return (0, a.OK)(e.data);
  }
}
(t.ZodUnknown = G),
  (G.create = (e) => new G({ typeName: Ee.ZodUnknown, ...u(e) }));
class W extends d {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return (
      (0, a.addIssueToContext)(t, {
        code: r.ZodIssueCode.invalid_type,
        expected: s.ZodParsedType.never,
        received: t.parsedType,
      }),
      a.INVALID
    );
  }
}
(t.ZodNever = W), (W.create = (e) => new W({ typeName: Ee.ZodNever, ...u(e) }));
class $ extends d {
  _parse(e) {
    if (this._getType(e) !== s.ZodParsedType.undefined) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.void,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
  }
}
(t.ZodVoid = $), ($.create = (e) => new $({ typeName: Ee.ZodVoid, ...u(e) }));
class Y extends d {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e),
      o = this._def;
    if (t.parsedType !== s.ZodParsedType.array)
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.array,
          received: t.parsedType,
        }),
        a.INVALID
      );
    if (null !== o.exactLength) {
      const e = t.data.length > o.exactLength.value,
        i = t.data.length < o.exactLength.value;
      (e || i) &&
        ((0, a.addIssueToContext)(t, {
          code: e ? r.ZodIssueCode.too_big : r.ZodIssueCode.too_small,
          minimum: i ? o.exactLength.value : void 0,
          maximum: e ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (null !== o.minLength &&
        t.data.length < o.minLength.value &&
        ((0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        n.dirty()),
      null !== o.maxLength &&
        t.data.length > o.maxLength.value &&
        ((0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => o.type._parseAsync(new l(t, e, t.path, n))),
      ).then((e) => a.ParseStatus.mergeArray(n, e));
    const i = [...t.data].map((e, n) =>
      o.type._parseSync(new l(t, e, t.path, n)),
    );
    return a.ParseStatus.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Y({
      ...this._def,
      minLength: { value: e, message: i.errorUtil.toString(t) },
    });
  }
  max(e, t) {
    return new Y({
      ...this._def,
      maxLength: { value: e, message: i.errorUtil.toString(t) },
    });
  }
  length(e, t) {
    return new Y({
      ...this._def,
      exactLength: { value: e, message: i.errorUtil.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
function K(e) {
  if (e instanceof Z) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = he.create(K(r));
    }
    return new Z({ ...e._def, shape: () => t });
  }
  return e instanceof Y
    ? new Y({ ...e._def, type: K(e.element) })
    : e instanceof he
      ? he.create(K(e.unwrap()))
      : e instanceof me
        ? me.create(K(e.unwrap()))
        : e instanceof ne
          ? ne.create(e.items.map((e) => K(e)))
          : e;
}
(t.ZodArray = Y),
  (Y.create = (e, t) =>
    new Y({
      type: e,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Ee.ZodArray,
      ...u(t),
    }));
class Z extends d {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (null !== this._cached) return this._cached;
    const e = this._def.shape(),
      t = s.util.objectKeys(e);
    return (this._cached = { shape: e, keys: t }), this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== s.ZodParsedType.object) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.object,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    const { status: t, ctx: n } = this._processInputParams(e),
      { shape: o, keys: i } = this._getCached(),
      c = [];
    if (!(this._def.catchall instanceof W && "strip" === this._def.unknownKeys))
      for (const e in n.data) i.includes(e) || c.push(e);
    const u = [];
    for (const e of i) {
      const t = o[e],
        r = n.data[e];
      u.push({
        key: { status: "valid", value: e },
        value: t._parse(new l(n, r, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof W) {
      const e = this._def.unknownKeys;
      if ("passthrough" === e)
        for (const e of c)
          u.push({
            key: { status: "valid", value: e },
            value: { status: "valid", value: n.data[e] },
          });
      else if ("strict" === e)
        c.length > 0 &&
          ((0, a.addIssueToContext)(n, {
            code: r.ZodIssueCode.unrecognized_keys,
            keys: c,
          }),
          t.dirty());
      else if ("strip" !== e)
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const e = this._def.catchall;
      for (const t of c) {
        const r = n.data[t];
        u.push({
          key: { status: "valid", value: t },
          value: e._parse(new l(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            const e = [];
            for (const t of u) {
              const n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => a.ParseStatus.mergeObjectSync(t, e))
      : a.ParseStatus.mergeObjectSync(t, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      i.errorUtil.errToObj,
      new Z({
        ...this._def,
        unknownKeys: "strict",
        ...(void 0 !== e
          ? {
              errorMap: (t, n) => {
                const r = this._def.errorMap?.(t, n).message ?? n.defaultError;
                return "unrecognized_keys" === t.code
                  ? { message: i.errorUtil.errToObj(e).message ?? r }
                  : { message: r };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Z({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Z({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new Z({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new Z({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: Ee.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new Z({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    for (const n of s.util.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new Z({ ...this._def, shape: () => t });
  }
  omit(e) {
    const t = {};
    for (const n of s.util.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new Z({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return K(this);
  }
  partial(e) {
    const t = {};
    for (const n of s.util.objectKeys(this.shape)) {
      const r = this.shape[n];
      e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
    }
    return new Z({ ...this._def, shape: () => t });
  }
  required(e) {
    const t = {};
    for (const n of s.util.objectKeys(this.shape))
      if (e && !e[n]) t[n] = this.shape[n];
      else {
        let e = this.shape[n];
        for (; e instanceof he; ) e = e._def.innerType;
        t[n] = e;
      }
    return new Z({ ...this._def, shape: () => t });
  }
  keyof() {
    return ce(s.util.objectKeys(this.shape));
  }
}
(t.ZodObject = Z),
  (Z.create = (e, t) =>
    new Z({
      shape: () => e,
      unknownKeys: "strip",
      catchall: W.create(),
      typeName: Ee.ZodObject,
      ...u(t),
    })),
  (Z.strictCreate = (e, t) =>
    new Z({
      shape: () => e,
      unknownKeys: "strict",
      catchall: W.create(),
      typeName: Ee.ZodObject,
      ...u(t),
    })),
  (Z.lazycreate = (e, t) =>
    new Z({
      shape: e,
      unknownKeys: "strip",
      catchall: W.create(),
      typeName: Ee.ZodObject,
      ...u(t),
    }));
class Q extends d {
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
        const n = e.map((e) => new r.ZodError(e.ctx.common.issues));
        return (
          (0, a.addIssueToContext)(t, {
            code: r.ZodIssueCode.invalid_union,
            unionErrors: n,
          }),
          a.INVALID
        );
      });
    {
      let e;
      const o = [];
      for (const r of n) {
        const n = {
            ...t,
            common: { ...t.common, issues: [] },
            parent: null,
          },
          i = r._parseSync({ data: t.data, path: t.path, parent: n });
        if ("valid" === i.status) return i;
        "dirty" !== i.status || e || (e = { result: i, ctx: n }),
          n.common.issues.length && o.push(n.common.issues);
      }
      if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
      const i = o.map((e) => new r.ZodError(e));
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_union,
          unionErrors: i,
        }),
        a.INVALID
      );
    }
  }
  get options() {
    return this._def.options;
  }
}
(t.ZodUnion = Q),
  (Q.create = (e, t) => new Q({ options: e, typeName: Ee.ZodUnion, ...u(t) }));
const J = (e) =>
  e instanceof se
    ? J(e.schema)
    : e instanceof fe
      ? J(e.innerType())
      : e instanceof le
        ? [e.value]
        : e instanceof ue
          ? e.options
          : e instanceof de
            ? s.util.objectValues(e.enum)
            : e instanceof ge
              ? J(e._def.innerType)
              : e instanceof H
                ? [void 0]
                : e instanceof V
                  ? [null]
                  : e instanceof he
                    ? [void 0, ...J(e.unwrap())]
                    : e instanceof me
                      ? [null, ...J(e.unwrap())]
                      : e instanceof be || e instanceof _e
                        ? J(e.unwrap())
                        : e instanceof ye
                          ? J(e._def.innerType)
                          : [];
class X extends d {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== s.ZodParsedType.object)
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.object,
          received: t.parsedType,
        }),
        a.INVALID
      );
    const n = this.discriminator,
      o = t.data[n],
      i = this.optionsMap.get(o);
    return i
      ? t.common.async
        ? i._parseAsync({ data: t.data, path: t.path, parent: t })
        : i._parseSync({ data: t.data, path: t.path, parent: t })
      : ((0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n],
        }),
        a.INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, n) {
    const r = new Map();
    for (const n of t) {
      const t = J(n.shape[e]);
      if (!t.length)
        throw new Error(
          `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
        );
      for (const o of t) {
        if (r.has(o))
          throw new Error(
            `Discriminator property ${String(e)} has duplicate value ${String(o)}`,
          );
        r.set(o, n);
      }
    }
    return new X({
      typeName: Ee.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: r,
      ...u(n),
    });
  }
}
function ee(e, t) {
  const n = (0, s.getParsedType)(e),
    r = (0, s.getParsedType)(t);
  if (e === t) return { valid: !0, data: e };
  if (n === s.ZodParsedType.object && r === s.ZodParsedType.object) {
    const n = s.util.objectKeys(t),
      r = s.util.objectKeys(e).filter((e) => -1 !== n.indexOf(e)),
      o = { ...e, ...t };
    for (const n of r) {
      const r = ee(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      o[n] = r.data;
    }
    return { valid: !0, data: o };
  }
  if (n === s.ZodParsedType.array && r === s.ZodParsedType.array) {
    if (e.length !== t.length) return { valid: !1 };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = ee(e[r], t[r]);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return n === s.ZodParsedType.date && r === s.ZodParsedType.date && +e === +t
    ? { valid: !0, data: e }
    : { valid: !1 };
}
t.ZodDiscriminatedUnion = X;
class te extends d {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e),
      o = (e, o) => {
        if ((0, a.isAborted)(e) || (0, a.isAborted)(o)) return a.INVALID;
        const i = ee(e.value, o.value);
        return i.valid
          ? (((0, a.isDirty)(e) || (0, a.isDirty)(o)) && t.dirty(),
            { status: t.value, value: i.data })
          : ((0, a.addIssueToContext)(n, {
              code: r.ZodIssueCode.invalid_intersection_types,
            }),
            a.INVALID);
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
        ]).then(([e, t]) => o(e, t))
      : o(
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
(t.ZodIntersection = te),
  (te.create = (e, t, n) =>
    new te({
      left: e,
      right: t,
      typeName: Ee.ZodIntersection,
      ...u(n),
    }));
class ne extends d {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== s.ZodParsedType.array)
      return (
        (0, a.addIssueToContext)(n, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.array,
          received: n.parsedType,
        }),
        a.INVALID
      );
    if (n.data.length < this._def.items.length)
      return (
        (0, a.addIssueToContext)(n, {
          code: r.ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        a.INVALID
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      ((0, a.addIssueToContext)(n, {
        code: r.ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      t.dirty());
    const o = [...n.data]
      .map((e, t) => {
        const r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new l(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async
      ? Promise.all(o).then((e) => a.ParseStatus.mergeArray(t, e))
      : a.ParseStatus.mergeArray(t, o);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ne({ ...this._def, rest: e });
  }
}
(t.ZodTuple = ne),
  (ne.create = (e, t) => {
    if (!Array.isArray(e))
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ne({
      items: e,
      typeName: Ee.ZodTuple,
      rest: null,
      ...u(t),
    });
  });
class re extends d {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== s.ZodParsedType.object)
      return (
        (0, a.addIssueToContext)(n, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.object,
          received: n.parsedType,
        }),
        a.INVALID
      );
    const o = [],
      i = this._def.keyType,
      c = this._def.valueType;
    for (const e in n.data)
      o.push({
        key: i._parse(new l(n, e, n.path, e)),
        value: c._parse(new l(n, n.data[e], n.path, e)),
        alwaysSet: e in n.data,
      });
    return n.common.async
      ? a.ParseStatus.mergeObjectAsync(t, o)
      : a.ParseStatus.mergeObjectSync(t, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, n) {
    return new re(
      t instanceof d
        ? {
            keyType: e,
            valueType: t,
            typeName: Ee.ZodRecord,
            ...u(n),
          }
        : {
            keyType: D.create(),
            valueType: e,
            typeName: Ee.ZodRecord,
            ...u(t),
          },
    );
  }
}
t.ZodRecord = re;
class oe extends d {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== s.ZodParsedType.map)
      return (
        (0, a.addIssueToContext)(n, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.map,
          received: n.parsedType,
        }),
        a.INVALID
      );
    const o = this._def.keyType,
      i = this._def.valueType,
      c = [...n.data.entries()].map(([e, t], r) => ({
        key: o._parse(new l(n, e, n.path, [r, "key"])),
        value: i._parse(new l(n, t, n.path, [r, "value"])),
      }));
    if (n.common.async) {
      const e = new Map();
      return Promise.resolve().then(async () => {
        for (const n of c) {
          const r = await n.key,
            o = await n.value;
          if ("aborted" === r.status || "aborted" === o.status)
            return a.INVALID;
          ("dirty" !== r.status && "dirty" !== o.status) || t.dirty(),
            e.set(r.value, o.value);
        }
        return { status: t.value, value: e };
      });
    }
    {
      const e = new Map();
      for (const n of c) {
        const r = n.key,
          o = n.value;
        if ("aborted" === r.status || "aborted" === o.status) return a.INVALID;
        ("dirty" !== r.status && "dirty" !== o.status) || t.dirty(),
          e.set(r.value, o.value);
      }
      return { status: t.value, value: e };
    }
  }
}
(t.ZodMap = oe),
  (oe.create = (e, t, n) =>
    new oe({
      valueType: t,
      keyType: e,
      typeName: Ee.ZodMap,
      ...u(n),
    }));
class ie extends d {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== s.ZodParsedType.set)
      return (
        (0, a.addIssueToContext)(n, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.set,
          received: n.parsedType,
        }),
        a.INVALID
      );
    const o = this._def;
    null !== o.minSize &&
      n.data.size < o.minSize.value &&
      ((0, a.addIssueToContext)(n, {
        code: r.ZodIssueCode.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      t.dirty()),
      null !== o.maxSize &&
        n.data.size > o.maxSize.value &&
        ((0, a.addIssueToContext)(n, {
          code: r.ZodIssueCode.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        t.dirty());
    const i = this._def.valueType;
    function c(e) {
      const n = new Set();
      for (const r of e) {
        if ("aborted" === r.status) return a.INVALID;
        "dirty" === r.status && t.dirty(), n.add(r.value);
      }
      return { status: t.value, value: n };
    }
    const u = [...n.data.values()].map((e, t) =>
      i._parse(new l(n, e, n.path, t)),
    );
    return n.common.async ? Promise.all(u).then((e) => c(e)) : c(u);
  }
  min(e, t) {
    return new ie({
      ...this._def,
      minSize: { value: e, message: i.errorUtil.toString(t) },
    });
  }
  max(e, t) {
    return new ie({
      ...this._def,
      maxSize: { value: e, message: i.errorUtil.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
(t.ZodSet = ie),
  (ie.create = (e, t) =>
    new ie({
      valueType: e,
      minSize: null,
      maxSize: null,
      typeName: Ee.ZodSet,
      ...u(t),
    }));
class ae extends d {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== s.ZodParsedType.function)
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.function,
          received: t.parsedType,
        }),
        a.INVALID
      );
    function n(e, n) {
      return (0, a.makeIssue)({
        data: e,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          (0, o.getErrorMap)(),
          o.defaultErrorMap,
        ].filter((e) => !!e),
        issueData: {
          code: r.ZodIssueCode.invalid_arguments,
          argumentsError: n,
        },
      });
    }
    function i(e, n) {
      return (0, a.makeIssue)({
        data: e,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          (0, o.getErrorMap)(),
          o.defaultErrorMap,
        ].filter((e) => !!e),
        issueData: {
          code: r.ZodIssueCode.invalid_return_type,
          returnTypeError: n,
        },
      });
    }
    const l = { errorMap: t.common.contextualErrorMap },
      c = t.data;
    if (this._def.returns instanceof pe) {
      const e = this;
      return (0, a.OK)(async function (...t) {
        const o = new r.ZodError([]),
          a = await e._def.args.parseAsync(t, l).catch((e) => {
            throw (o.addIssue(n(t, e)), o);
          }),
          s = await Reflect.apply(c, this, a);
        return await e._def.returns._def.type.parseAsync(s, l).catch((e) => {
          throw (o.addIssue(i(s, e)), o);
        });
      });
    }
    {
      const e = this;
      return (0, a.OK)(function (...t) {
        const o = e._def.args.safeParse(t, l);
        if (!o.success) throw new r.ZodError([n(t, o.error)]);
        const a = Reflect.apply(c, this, o.data),
          s = e._def.returns.safeParse(a, l);
        if (!s.success) throw new r.ZodError([i(a, s.error)]);
        return s.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ae({
      ...this._def,
      args: ne.create(e).rest(G.create()),
    });
  }
  returns(e) {
    return new ae({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, n) {
    return new ae({
      args: e || ne.create([]).rest(G.create()),
      returns: t || G.create(),
      typeName: Ee.ZodFunction,
      ...u(n),
    });
  }
}
t.ZodFunction = ae;
class se extends d {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
(t.ZodLazy = se),
  (se.create = (e, t) => new se({ getter: e, typeName: Ee.ZodLazy, ...u(t) }));
class le extends d {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          received: t.data,
          code: r.ZodIssueCode.invalid_literal,
          expected: this._def.value,
        }),
        a.INVALID
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
function ce(e, t) {
  return new ue({ values: e, typeName: Ee.ZodEnum, ...u(t) });
}
(t.ZodLiteral = le),
  (le.create = (e, t) =>
    new le({ value: e, typeName: Ee.ZodLiteral, ...u(t) }));
class ue extends d {
  _parse(e) {
    if ("string" != typeof e.data) {
      const t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        (0, a.addIssueToContext)(t, {
          expected: s.util.joinValues(n),
          received: t.parsedType,
          code: r.ZodIssueCode.invalid_type,
        }),
        a.INVALID
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(e.data))
    ) {
      const t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        (0, a.addIssueToContext)(t, {
          received: t.data,
          code: r.ZodIssueCode.invalid_enum_value,
          options: n,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
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
    return ue.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return ue.create(
      this.options.filter((t) => !e.includes(t)),
      { ...this._def, ...t },
    );
  }
}
(t.ZodEnum = ue), (ue.create = ce);
class de extends d {
  _parse(e) {
    const t = s.util.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (
      n.parsedType !== s.ZodParsedType.string &&
      n.parsedType !== s.ZodParsedType.number
    ) {
      const e = s.util.objectValues(t);
      return (
        (0, a.addIssueToContext)(n, {
          expected: s.util.joinValues(e),
          received: n.parsedType,
          code: r.ZodIssueCode.invalid_type,
        }),
        a.INVALID
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(s.util.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      const e = s.util.objectValues(t);
      return (
        (0, a.addIssueToContext)(n, {
          received: n.data,
          code: r.ZodIssueCode.invalid_enum_value,
          options: e,
        }),
        a.INVALID
      );
    }
    return (0, a.OK)(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
(t.ZodNativeEnum = de),
  (de.create = (e, t) =>
    new de({ values: e, typeName: Ee.ZodNativeEnum, ...u(t) }));
class pe extends d {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== s.ZodParsedType.promise && !1 === t.common.async)
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.promise,
          received: t.parsedType,
        }),
        a.INVALID
      );
    const n =
      t.parsedType === s.ZodParsedType.promise
        ? t.data
        : Promise.resolve(t.data);
    return (0, a.OK)(
      n.then((e) =>
        this._def.type.parseAsync(e, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        }),
      ),
    );
  }
}
(t.ZodPromise = pe),
  (pe.create = (e, t) => new pe({ type: e, typeName: Ee.ZodPromise, ...u(t) }));
class fe extends d {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ee.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      o = {
        addIssue: (e) => {
          (0, a.addIssueToContext)(n, e), e.fatal ? t.abort() : t.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), "preprocess" === r.type)) {
      const e = r.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if ("aborted" === t.value) return a.INVALID;
          const r = await this._def.schema._parseAsync({
            data: e,
            path: n.path,
            parent: n,
          });
          return "aborted" === r.status
            ? a.INVALID
            : "dirty" === r.status || "dirty" === t.value
              ? (0, a.DIRTY)(r.value)
              : r;
        });
      {
        if ("aborted" === t.value) return a.INVALID;
        const r = this._def.schema._parseSync({
          data: e,
          path: n.path,
          parent: n,
        });
        return "aborted" === r.status
          ? a.INVALID
          : "dirty" === r.status || "dirty" === t.value
            ? (0, a.DIRTY)(r.value)
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
          ? a.INVALID
          : ("dirty" === r.status && t.dirty(),
            e(r.value),
            { status: t.value, value: r.value });
      }
      return this._def.schema
        ._parseAsync({ data: n.data, path: n.path, parent: n })
        .then((n) =>
          "aborted" === n.status
            ? a.INVALID
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
        if (!(0, a.isValid)(e)) return a.INVALID;
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
          (0, a.isValid)(e)
            ? Promise.resolve(r.transform(e.value, o)).then((e) => ({
                status: t.value,
                value: e,
              }))
            : a.INVALID,
        );
    }
    s.util.assertNever(r);
  }
}
(t.ZodEffects = fe),
  (t.ZodTransformer = fe),
  (fe.create = (e, t, n) =>
    new fe({
      schema: e,
      typeName: Ee.ZodEffects,
      effect: t,
      ...u(n),
    })),
  (fe.createWithPreprocess = (e, t, n) =>
    new fe({
      schema: t,
      effect: { type: "preprocess", transform: e },
      typeName: Ee.ZodEffects,
      ...u(n),
    }));
class he extends d {
  _parse(e) {
    return this._getType(e) === s.ZodParsedType.undefined
      ? (0, a.OK)(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
(t.ZodOptional = he),
  (he.create = (e, t) =>
    new he({ innerType: e, typeName: Ee.ZodOptional, ...u(t) }));
class me extends d {
  _parse(e) {
    return this._getType(e) === s.ZodParsedType.null
      ? (0, a.OK)(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
(t.ZodNullable = me),
  (me.create = (e, t) =>
    new me({ innerType: e, typeName: Ee.ZodNullable, ...u(t) }));
class ge extends d {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return (
      t.parsedType === s.ZodParsedType.undefined &&
        (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
(t.ZodDefault = ge),
  (ge.create = (e, t) =>
    new ge({
      innerType: e,
      typeName: Ee.ZodDefault,
      defaultValue:
        "function" == typeof t.default ? t.default : () => t.default,
      ...u(t),
    }));
class ye extends d {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      o = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return (0, a.isAsync)(o)
      ? o.then((e) => ({
          status: "valid",
          value:
            "valid" === e.status
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new r.ZodError(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            "valid" === o.status
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new r.ZodError(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
(t.ZodCatch = ye),
  (ye.create = (e, t) =>
    new ye({
      innerType: e,
      typeName: Ee.ZodCatch,
      catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
      ...u(t),
    }));
class ve extends d {
  _parse(e) {
    if (this._getType(e) !== s.ZodParsedType.nan) {
      const t = this._getOrReturnCtx(e);
      return (
        (0, a.addIssueToContext)(t, {
          code: r.ZodIssueCode.invalid_type,
          expected: s.ZodParsedType.nan,
          received: t.parsedType,
        }),
        a.INVALID
      );
    }
    return { status: "valid", value: e.data };
  }
}
(t.ZodNaN = ve),
  (ve.create = (e) => new ve({ typeName: Ee.ZodNaN, ...u(e) })),
  (t.BRAND = Symbol("zod_brand"));
class be extends d {
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
t.ZodBranded = be;
class Se extends d {
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
          ? a.INVALID
          : "dirty" === e.status
            ? (t.dirty(), (0, a.DIRTY)(e.value))
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
        ? a.INVALID
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
    return new Se({ in: e, out: t, typeName: Ee.ZodPipeline });
  }
}
t.ZodPipeline = Se;
class _e extends d {
  _parse(e) {
    const t = this._def.innerType._parse(e),
      n = (e) => ((0, a.isValid)(e) && (e.value = Object.freeze(e.value)), e);
    return (0, a.isAsync)(t) ? t.then((e) => n(e)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
function xe(e, t) {
  const n =
    "function" == typeof e ? e(t) : "string" == typeof e ? { message: e } : e;
  return "string" == typeof n ? { message: n } : n;
}
function we(e, t = {}, n) {
  return e
    ? q.create().superRefine((r, o) => {
        const i = e(r);
        if (i instanceof Promise)
          return i.then((e) => {
            if (!e) {
              const e = xe(t, r),
                i = e.fatal ?? n ?? !0;
              o.addIssue({ code: "custom", ...e, fatal: i });
            }
          });
        if (!i) {
          const e = xe(t, r),
            i = e.fatal ?? n ?? !0;
          o.addIssue({ code: "custom", ...e, fatal: i });
        }
      })
    : q.create();
}
var Ee;
(t.ZodReadonly = _e),
  (_e.create = (e, t) =>
    new _e({ innerType: e, typeName: Ee.ZodReadonly, ...u(t) })),
  (t.late = { object: Z.lazycreate }),
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
  })(Ee || (t.ZodFirstPartyTypeKind = Ee = {})),
  (t.instanceof = (e, t = { message: `Input not instance of ${e.name}` }) =>
    we((t) => t instanceof e, t));
const Te = D.create;
t.string = Te;
const ke = L.create;
t.number = ke;
const Ce = ve.create;
t.nan = Ce;
const Ie = F.create;
t.bigint = Ie;
const Ae = U.create;
t.boolean = Ae;
const Oe = B.create;
t.date = Oe;
const Re = z.create;
t.symbol = Re;
const Me = H.create;
t.undefined = Me;
const Pe = V.create;
t.null = Pe;
const Ne = q.create;
t.any = Ne;
const De = G.create;
t.unknown = De;
const je = W.create;
t.never = je;
const Le = $.create;
t.void = Le;
const Fe = Y.create;
t.array = Fe;
const Ue = Z.create;
t.object = Ue;
const Be = Z.strictCreate;
t.strictObject = Be;
const ze = Q.create;
t.union = ze;
const He = X.create;
t.discriminatedUnion = He;
const Ve = te.create;
t.intersection = Ve;
const qe = ne.create;
t.tuple = qe;
const Ge = re.create;
t.record = Ge;
const We = oe.create;
t.map = We;
const $e = ie.create;
t.set = $e;
const Ye = ae.create;
t.function = Ye;
const Ke = se.create;
t.lazy = Ke;
const Ze = le.create;
t.literal = Ze;
const Qe = ue.create;
t.enum = Qe;
const Je = de.create;
t.nativeEnum = Je;
const Xe = pe.create;
t.promise = Xe;
const et = fe.create;
(t.effect = et), (t.transformer = et);
const tt = he.create;
t.optional = tt;
const nt = me.create;
t.nullable = nt;
const rt = fe.createWithPreprocess;
t.preprocess = rt;
const ot = Se.create;
(t.pipeline = ot),
  (t.ostring = () => Te().optional()),
  (t.onumber = () => ke().optional()),
  (t.oboolean = () => Ae().optional()),
  (t.coerce = {
    string: (e) => D.create({ ...e, coerce: !0 }),
    number: (e) => L.create({ ...e, coerce: !0 }),
    boolean: (e) => U.create({ ...e, coerce: !0 }),
    bigint: (e) => F.create({ ...e, coerce: !0 }),
    date: (e) => B.create({ ...e, coerce: !0 }),
  }),
  (t.NEVER = a.INVALID);
