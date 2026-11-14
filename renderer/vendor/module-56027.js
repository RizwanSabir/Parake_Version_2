// vendor/module-56027.js — webpack module 56027
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = (e) => {
  if (!e.validators) return e.runValidation({ validators: [], form: e.form });
  const t = e.event.async,
    n = t ? void 0 : { fn: e.validators.onMount, cause: "mount" },
    r = {
      fn: t ? e.validators.onChangeAsync : e.validators.onChange,
      cause: "change",
    },
    o = {
      fn: t ? e.validators.onBlurAsync : e.validators.onBlur,
      cause: "blur",
    },
    i = {
      fn: t ? e.validators.onSubmitAsync : e.validators.onSubmit,
      cause: "submit",
    },
    a = t ? void 0 : { fn: () => {}, cause: "server" };
  switch (e.event.type) {
    case "mount":
      return e.runValidation({ validators: [n], form: e.form });
    case "submit":
      return e.runValidation({
        validators: [r, o, i, a],
        form: e.form,
      });
    case "server":
      return e.runValidation({ validators: [], form: e.form });
    case "blur":
      return e.runValidation({ validators: [o, a], form: e.form });
    case "change":
      return e.runValidation({ validators: [r, a], form: e.form });
    default:
      throw new Error(`Unknown validation event type: ${e.event.type}`);
  }
};
(t.defaultValidationLogic = n),
  (t.revalidateLogic =
    ({ mode: e = "submit", modeAfterSubmission: t = "change" } = {}) =>
    (r) => {
      if (0 === Object.keys(r.validators ?? {}).length)
        return r.runValidation({ validators: [], form: r.form });
      const o = {
          fn: r.event.async
            ? r.validators.onDynamicAsync
            : r.validators.onDynamic,
          cause: "dynamic",
        },
        i = [];
      [
        0 ===
        (r.group
          ? r.group.state.meta.submissionAttempts
          : r.form.state.submissionAttempts)
          ? e
          : t,
        "submit",
      ].includes(r.event.type) && i.push(o);
      let a = [];
      return (
        n({
          ...r,
          runValidation: (e) => {
            a = e.validators;
          },
        }),
        0 === i.length
          ? r.runValidation({ validators: a, form: r.form })
          : r.runValidation({
              validators: [...a, ...i],
              form: r.form,
            })
      );
    });
