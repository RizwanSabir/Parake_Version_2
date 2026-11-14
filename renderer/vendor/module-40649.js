// vendor/module-40649.js — webpack module 40649
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37027 /* vendor/module-37027 */),
  o = n(38971 /* vendor/module-38971 */);
function i(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function a(e) {
  if (Array.isArray(e)) return [...e];
  if ("string" != typeof e) throw new Error("Path must be a string.");
  const t = e.length,
    n = [];
  let r = t > 0 && 91 === e.charCodeAt(0) ? 1 : 0,
    o = !0,
    i = -1;
  for (let a = r; a <= t; a++) {
    const s = a < t ? e.charCodeAt(a) : -1;
    if (a === t || 46 === s || 91 === s || 93 === s) {
      const t = a - r;
      if (t > 0) {
        const i = o && (1 === t || 48 !== e.charCodeAt(r)),
          s = e.slice(r, a);
        if (i) {
          const e = parseInt(s, 10);
          t <= 15 || String(e) === s ? n.push(e) : n.push(s);
        } else n.push(s);
      } else
        93 === i ||
          (-1 === i && 93 === s) ||
          (i === s && (46 === s || 91 === s)) ||
          n.push("");
      (r = a + 1), (o = !0);
    } else (s < 48 || s > 57) && (o = !1);
    i = s;
  }
  return n.length || n.push(""), n;
}
let s = 256;
const l = [];
let c;
for (; s--; ) l[s] = (s + 256).toString(16).substring(1);
const u = r.liteThrottle(
  (e) =>
    o.formEventClient.emit("form-state", {
      id: e.formId,
      state: e.store.state,
    }),
  { wait: 300 },
);
(t.concatenatePaths = function (e, t) {
  return 0 === e.length
    ? t
    : 0 === t.length
      ? e
      : t.startsWith("[") || t.startsWith(".")
        ? e + t
        : `${e}.${t}`;
}),
  (t.createFieldMap = function (e) {
    const t = {};
    for (const n in e) t[n] = n;
    return t;
  }),
  (t.deepCopy = function e(t) {
    if (null === t || "object" != typeof t) return t;
    if (t instanceof Date) return new Date(t.getTime());
    if (Array.isArray(t)) {
      const n = [];
      for (let r = 0; r < t.length; r++) n[r] = e(t[r]);
      return n;
    }
    if (t instanceof Map) {
      const n = new Map();
      return (
        t.forEach((t, r) => {
          n.set(r, e(t));
        }),
        n
      );
    }
    if (t instanceof Set) {
      const n = new Set();
      return (
        t.forEach((t) => {
          n.add(e(t));
        }),
        n
      );
    }
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = e(t[r]));
    return n;
  }),
  (t.deleteBy = function (e, t) {
    const n = a(t);
    return (function e(t) {
      if (!t) return;
      if (1 === n.length) {
        const e = n[0];
        if (Array.isArray(t) && "number" == typeof e)
          return t.filter((t, n) => n !== e);
        const { [e]: r, ...o } = t;
        return o;
      }
      const r = n.shift();
      if (
        ("string" == typeof r || ("number" == typeof r && !Array.isArray(t))) &&
        "object" == typeof t
      )
        return { ...t, [r]: e(t[r]) };
      if ("number" == typeof r && Array.isArray(t)) {
        if (r >= t.length) return t;
        const n = t.slice(0, r);
        return [...(n.length ? n : new Array(r)), e(t[r]), ...t.slice(r + 1)];
      }
      throw new Error(
        "It seems we have created an infinite loop in deleteBy. ",
      );
    })(e);
  }),
  (t.determineFieldLevelErrorSourceAndValue = ({
    formLevelError: e,
    fieldLevelError: t,
  }) =>
    t
      ? { newErrorValue: t, newSource: "field" }
      : e
        ? { newErrorValue: e, newSource: "form" }
        : { newErrorValue: void 0, newSource: void 0 }),
  (t.determineFormLevelErrorSourceAndValue = ({
    newFormValidatorError: e,
    isPreviousErrorFromFormValidator: t,
    previousErrorValue: n,
  }) =>
    e
      ? { newErrorValue: e, newSource: "form" }
      : t
        ? { newErrorValue: void 0, newSource: void 0 }
        : n
          ? { newErrorValue: n, newSource: "field" }
          : { newErrorValue: void 0, newSource: void 0 }),
  (t.evaluate = function e(t, n) {
    if (Object.is(t, n)) return !0;
    if (
      "object" != typeof t ||
      null === t ||
      "object" != typeof n ||
      null === n
    )
      return !1;
    if (t instanceof Date && n instanceof Date)
      return t.getTime() === n.getTime();
    if (t instanceof Map && n instanceof Map) {
      if (t.size !== n.size) return !1;
      for (const [e, r] of t)
        if (!n.has(e) || !Object.is(r, n.get(e))) return !1;
      return !0;
    }
    if (t instanceof Set && n instanceof Set) {
      if (t.size !== n.size) return !1;
      for (const e of t) if (!n.has(e)) return !1;
      return !0;
    }
    const r = Object.keys(t),
      o = Object.keys(n);
    if (r.length !== o.length) return !1;
    if (
      !(
        0 !== r.length ||
        Array.isArray(t) ||
        Array.isArray(n) ||
        (Object.getPrototypeOf(t) === Object.prototype &&
          Object.getPrototypeOf(n) === Object.prototype)
      )
    )
      return !1;
    for (const i of r) if (!o.includes(i) || !e(t[i], n[i])) return !1;
    return !0;
  }),
  (t.functionalUpdate = i),
  (t.getAsyncValidatorArray = function (e, t) {
    const { asyncDebounceMs: n } = t,
      {
        onBlurAsyncDebounceMs: r,
        onChangeAsyncDebounceMs: o,
        onDynamicAsyncDebounceMs: i,
      } = t.validators || {},
      a = n ?? 0;
    return t.validationLogic({
      form: t.form,
      group: t.group,
      validators: t.validators,
      event: { type: e, fieldName: t.fieldName, async: !0 },
      runValidation: (t) =>
        t.validators.filter(Boolean).map((t) => {
          const n = t?.cause || e;
          let s = a;
          switch (n) {
            case "change":
              s = o ?? a;
              break;
            case "blur":
              s = r ?? a;
              break;
            case "dynamic":
              s = i ?? a;
              break;
            case "submit":
              s = 0;
          }
          return (
            "submit" === e && (s = 0),
            { cause: n, validate: t.fn, debounceMs: s }
          );
        }),
    });
  }),
  (t.getBy = function (e, t) {
    return a(t).reduce(
      (e, t) => (null === e ? null : void 0 !== e ? e[t] : void 0),
      e,
    );
  }),
  (t.getSyncValidatorArray = function (e, t) {
    return t.validationLogic({
      form: t.form,
      group: t.group,
      validators: t.validators,
      event: { type: e, fieldName: t.fieldName, async: !1 },
      runValidation: (e) =>
        e.validators
          .filter(Boolean)
          .map((e) => ({ cause: e.cause, validate: e.fn })),
    });
  }),
  (t.isFieldInGroup = function (e, t) {
    return t === e || t.startsWith(`${e}.`) || t.startsWith(`${e}[`);
  }),
  (t.isGlobalFormValidationError = (e) =>
    !!e && "object" == typeof e && "fields" in e),
  (t.isNonEmptyArray = function (e) {
    return !(Array.isArray(e) && 0 === e.length);
  }),
  (t.makePathArray = a),
  (t.mergeOpts = function (e, t) {
    return null == e ? t : { ...e, ...t };
  }),
  (t.setBy = function (e, t, n) {
    const r = a(t);
    return (function e(t) {
      if (!r.length) return i(n, t);
      const o = r.shift();
      if ("string" == typeof o || ("number" == typeof o && !Array.isArray(t)))
        return "object" == typeof t
          ? (null === t && (t = {}), { ...t, [o]: e(t[o]) })
          : { [o]: e() };
      if (Array.isArray(t) && "number" == typeof o) {
        const n = t.slice(0, o);
        return [...(n.length ? n : new Array(o)), e(t[o]), ...t.slice(o + 1)];
      }
      return [...new Array(o), e()];
    })(e);
  }),
  (t.throttleFormState = u),
  (t.uuid = function () {
    let e,
      t = 0,
      n = "";
    if (!c || s + 16 > 256) {
      for (c = new Array(256), t = 256; t--; ) c[t] = (256 * Math.random()) | 0;
      (t = 0), (s = 0);
    }
    for (; t < 16; t++)
      (e = c[s + t]),
        (n += 6 === t ? l[(15 & e) | 64] : 8 === t ? l[(63 & e) | 128] : l[e]),
        1 & t && t > 1 && t < 11 && (n += "-");
    return s++, n;
  });
