// vendor/module-69018.js — webpack module 69018
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(29550 /* vendor/module-29550 */),
  o = n(40649 /* vendor/module-40649 */);
t.mergeAndUpdate = function (e, t) {
  if (!t) return;
  const n = Object.assign({}, e, { state: o.deepCopy(e.state) });
  t(n),
    n.fieldInfo !== e.fieldInfo && (e.fieldInfo = n.fieldInfo),
    n.options !== e.options && (e.options = n.options);
  const i = Object.keys({
    values: null,
    validationMetaMap: null,
    fieldMetaBase: null,
    formGroupStateBase: null,
    isSubmitting: null,
    isSubmitted: null,
    isValidating: null,
    submissionAttempts: null,
    isSubmitSuccessful: null,
    _force_re_eval: null,
  }).reduce(
    (t, r) => (e.state[r] !== n.state[r] && (t[r] = n.state[r]), t),
    {},
  );
  return (
    r.batch(() => {
      Object.keys(i).length && e.baseStore.setState((e) => ({ ...e, ...i })),
        n.state.errorMap !== e.state.errorMap &&
          e.setErrorMap(n.state.errorMap);
    }),
    n
  );
};
