// vendor/module-76731.js — webpack module 76731
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(29550 /* vendor/module-29550 */),
  o = n(40649 /* vendor/module-40649 */),
  i = n(56027 /* vendor/module-56027 */),
  a = n(42594 /* vendor/module-42594 */),
  s = n(36485 /* vendor/module-36485 */),
  l = n(44114 /* vendor/module-44114 */);
function c(e) {
  return {
    isSubmitted: e.isSubmitted ?? !1,
    isSubmitting: e.isSubmitting ?? !1,
    isValidating: e.isValidating ?? !1,
    submissionAttempts: e.submissionAttempts ?? 0,
    isSubmitSuccessful: e.isSubmitSuccessful ?? !1,
  };
}
function u(e) {
  return {
    ...s.defaultFieldMeta,
    ...e,
    errors: [],
    isPristine: !0,
    isValid: !0,
    isDefaultValue: !0,
    isFieldsValidating: !1,
    isFieldsValid: !0,
    isGroupValid: !0,
    canSubmit: !0,
    isSubmitting: !1,
    isSubmitted: !1,
    isValidating: !1,
    submissionAttempts: 0,
    isSubmitSuccessful: !1,
  };
}
class d {
  constructor(e) {
    (this.options = {}),
      (this.setFormGroupState = (e) => {
        this.form.baseStore.setState((t) => {
          const n = t.formGroupStateBase[this.name] ?? c({});
          return {
            ...t,
            formGroupStateBase: {
              ...t.formGroupStateBase,
              [this.name]: e(n),
            },
          };
        });
      }),
      (this._lastDistributedFieldNames = {}),
      (this.update = (e) => {
        if (
          ((this.options = e),
          (this.name = e.name),
          !this.state.meta.isTouched && void 0 !== this.options.defaultValue)
        ) {
          const t = this.form.getFieldValue(this.name);
          o.evaluate(t, e.defaultValue) ||
            this.form.setFieldValue(this.name, e.defaultValue, {
              dontUpdateMeta: !0,
              dontValidate: !0,
              dontRunListeners: !0,
            });
        }
        this.form.getFieldMeta(this.name) ||
          this.form.setFieldMeta(this.name, {
            ...s.defaultFieldMeta,
            ...this.options.defaultMeta,
          });
      }),
      (this.mount = () => {
        this.update(this.options),
          this.form.formGroupApis.add(this),
          (this.fieldInfo.instance = this),
          this.form.baseStore.setState((e) => ({
            ...e,
            formGroupStateBase: {
              ...e.formGroupStateBase,
              [this.name]:
                e.formGroupStateBase[this.name] ??
                c({ ...this.options.defaultState }),
            },
          }));
        const { onMount: e } = this.options.validators || {};
        if (e) {
          const t = this.runValidator({
            validate: e,
            value: {
              value: this.state.value,
              groupApi: this,
              validationSource: "form",
            },
            type: "validate",
          });
          let n,
            r = t;
          f(t) && ((r = t.group), (n = t.fields));
          const o = p(r);
          o &&
            this.setMeta((e) => ({
              ...e,
              errorMap: { ...e.errorMap, onMount: o },
              errorSourceMap: {
                ...e.errorSourceMap,
                onMount: "field",
              },
            })),
            this.distributeFieldErrors("onMount", n);
        }
        return (
          this.options.listeners?.onMount?.({
            value: this.state.value,
            groupApi: this,
          }),
          () => {
            for (const [e, t] of Object.entries(this.timeoutIds.validations))
              t && (clearTimeout(t), (this.timeoutIds.validations[e] = null));
            for (const [e, t] of Object.entries(this.timeoutIds.listeners))
              t && (clearTimeout(t), (this.timeoutIds.listeners[e] = null));
            for (const [e, t] of Object.entries(this.timeoutIds.formListeners))
              t && (clearTimeout(t), (this.timeoutIds.formListeners[e] = null));
            if (this.fieldInfo.instance === this) {
              for (const [e, t] of Object.entries(
                this.fieldInfo.validationMetaMap,
              ))
                t?.lastAbortController.abort(),
                  (this.fieldInfo.validationMetaMap[e] = void 0);
              this.form.formGroupApis.delete(this),
                this.form.baseStore.setState((e) => ({
                  ...e,
                  formGroupStateBase: {
                    ...e.formGroupStateBase,
                    [this.name]: c({}),
                  },
                })),
                (this.fieldInfo.instance = null),
                this.options.listeners?.onUnmount?.({
                  value: this.state.value,
                  groupApi: this,
                });
            }
          }
        );
      }),
      (this.setValue = (e, t) => {
        this.form.setFieldValue(
          this.name,
          e,
          o.mergeOpts(t, { dontRunListeners: !0, dontValidate: !0 }),
        ),
          t?.dontRunListeners || this.triggerOnChangeListener(),
          t?.dontValidate || this.validate("change");
      }),
      (this.getMeta = () => this.store.state.meta),
      (this.setMeta = (e) => this.form.setFieldMeta(this.name, e)),
      (this.getInfo = () => this.fieldInfo),
      (this.getRelatedFields = () => {
        const e = Object.values(this.form.fieldInfo),
          t = [];
        for (const n of e)
          n.instance &&
            n.instance instanceof l.FieldApi &&
            n.instance.name.startsWith(this.name) &&
            t.push(n.instance);
        return t;
      }),
      (this.getRelatedFieldMetasDerived = () => {
        const e = Object.entries(this.form.fieldMetaDerived.state),
          t = [];
        for (const [n, r] of e)
          n !== this.name &&
            o.isFieldInGroup(this.name, n) &&
            t.push({ ...r, name: n });
        return t;
      }),
      (this.buildChildFieldName = (e) =>
        "" === e
          ? this.name
          : e.startsWith("[")
            ? `${this.name}${e}`
            : `${this.name}.${e}`),
      (this.distributeFieldErrors = (e, t) => {
        const n = this._lastDistributedFieldNames[e] ?? new Set(),
          r = new Set();
        if (t)
          for (const [e, n] of Object.entries(t))
            null != n && !1 !== n && r.add(this.buildChildFieldName(e));
        const i = new Set([...n, ...r]);
        let a = !1;
        for (const n of i) {
          const r = n.startsWith(this.name + "[")
              ? n.slice(this.name.length)
              : n.slice(this.name.length + 1),
            i = t?.[r],
            l = this.form.getFieldMeta(n);
          if (!l && !i) continue;
          const c = l?.errorMap[e],
            u = "form" === l?.errorSourceMap[e],
            { newErrorValue: d, newSource: p } =
              o.determineFormLevelErrorSourceAndValue({
                newFormValidatorError: i,
                isPreviousErrorFromFormValidator: u,
                previousErrorValue: c,
              });
          d && (a = !0),
            (c === d && l?.errorSourceMap[e] === p) ||
              this.form.setFieldMeta(n, (t = s.defaultFieldMeta) => ({
                ...t,
                errorMap: { ...t.errorMap, [e]: d },
                errorSourceMap: { ...t.errorSourceMap, [e]: p },
              }));
        }
        return (this._lastDistributedFieldNames[e] = r), a;
      }),
      (this.validateSync = (e, t, n = {}) => {
        const a = o.getSyncValidatorArray(e, {
            ...this.options,
            form: this.form,
            group: this,
            validationLogic:
              this.options.validationLogic ||
              this.form.options.validationLogic ||
              i.defaultValidationLogic,
          }),
          s = (
            n.skipRelatedFieldValidation ? [] : this.getRelatedFields()
          ).reduce((t, n) => {
            const r = o.getSyncValidatorArray(e, {
              ...n.options,
              form: n.form,
              validationLogic:
                n.form.options.validationLogic || i.defaultValidationLogic,
            });
            return (
              r.forEach((e) => {
                e.field = n;
              }),
              t.concat(r)
            );
          }, []);
        let l = !1;
        r.batch(() => {
          const e = (e, n) => {
            const r = m(n.cause),
              i = e === this;
            let a;
            n.validate &&
              (a = e.runValidator({
                validate: n.validate,
                value: {
                  value: e.store.state.value,
                  validationSource: i ? "form" : "field",
                  ...(e instanceof d ? { groupApi: e } : { fieldApi: e }),
                },
                type: "validate",
              }));
            let s,
              c = a;
            i && f(a) && ((c = a.group), (s = a.fields));
            const u = p(c),
              h = t[r],
              { newErrorValue: g, newSource: y } =
                o.determineFieldLevelErrorSourceAndValue({
                  formLevelError: h,
                  fieldLevelError: u,
                });
            e.state.meta.errorMap?.[r] !== g &&
              e.setMeta((e) => ({
                ...e,
                errorMap: { ...e.errorMap, [r]: g },
                errorSourceMap: { ...e.errorSourceMap, [r]: y },
              })),
              g && (l = !0),
              i && this.distributeFieldErrors(r, s) && (l = !0);
          };
          for (const t of a) e(this, t);
          for (const t of s) t.validate && e(t.field, t);
        });
        const c = m("submit");
        return (
          this.state.meta.errorMap?.[c] &&
            "submit" !== e &&
            !l &&
            this.setMeta((e) => ({
              ...e,
              errorMap: { ...e.errorMap, [c]: void 0 },
              errorSourceMap: { ...e.errorSourceMap, [c]: void 0 },
            })),
          { hasErrored: l }
        );
      }),
      (this.validateAsync = async (e, t, n = {}) => {
        const r = o.getAsyncValidatorArray(e, {
            ...this.options,
            form: this.form,
            group: this,
            validationLogic:
              this.options.validationLogic ||
              this.form.options.validationLogic ||
              i.defaultValidationLogic,
          }),
          a = await t,
          s = n.skipRelatedFieldValidation ? [] : this.getRelatedFields(),
          l = s.reduce((t, n) => {
            const r = o.getAsyncValidatorArray(e, {
              ...n.options,
              form: n.form,
              validationLogic:
                n.form.options.validationLogic || i.defaultValidationLogic,
            });
            return (
              r.forEach((e) => {
                e.field = n;
              }),
              t.concat(r)
            );
          }, []),
          c = [],
          u = [],
          h = r.some((e) => e.validate) || l.some((e) => e.validate);
        if (h) {
          this.state.meta.isValidating ||
            this.setMeta((e) => ({ ...e, isValidating: !0 }));
          for (const e of s) e.setMeta((e) => ({ ...e, isValidating: !0 }));
        }
        const g = (e, t, n) => {
          const r = m(t.cause),
            i = e.getInfo(),
            s = i.validationMetaMap[r];
          s?.lastAbortController.abort();
          const l = new AbortController();
          i.validationMetaMap[r] = { lastAbortController: l };
          const c = e === this;
          n.push(
            new Promise(async (n) => {
              let i;
              try {
                i = await new Promise((n, r) => {
                  e.timeoutIds.validations[t.cause] &&
                    clearTimeout(e.timeoutIds.validations[t.cause]),
                    (e.timeoutIds.validations[t.cause] = setTimeout(
                      async () => {
                        if (l.signal.aborted) return n(void 0);
                        try {
                          n(
                            await this.runValidator({
                              validate: t.validate,
                              value: {
                                value: e.store.state.value,
                                signal: l.signal,
                                validationSource: c ? "form" : "field",
                                ...(e instanceof d
                                  ? { groupApi: e }
                                  : { fieldApi: e }),
                              },
                              type: "validateAsync",
                            }),
                          );
                        } catch (e) {
                          r(e);
                        }
                      },
                      t.debounceMs,
                    ));
                });
              } catch (e) {
                i = e;
              }
              if (l.signal.aborted) return n(void 0);
              let s,
                u = i;
              c && f(i) && ((u = i.group), (s = i.fields));
              const h = p(u),
                m = a[e.name]?.[r],
                { newErrorValue: g, newSource: y } =
                  o.determineFieldLevelErrorSourceAndValue({
                    formLevelError: m,
                    fieldLevelError: h,
                  });
              if (e.getInfo().instance !== e) return n(void 0);
              e.setMeta((e) => ({
                ...e,
                errorMap: { ...e?.errorMap, [r]: g },
                errorSourceMap: { ...e.errorSourceMap, [r]: y },
              })),
                c && this.distributeFieldErrors(r, s),
                n(g);
            }),
          );
        };
        for (const e of r) e.validate && g(this, e, c);
        for (const e of l) e.validate && g(e.field, e, u);
        let y = [];
        if (
          ((c.length || u.length) &&
            ((y = await Promise.all(c)), await Promise.all(u)),
          h)
        ) {
          this.setMeta((e) => ({ ...e, isValidating: !1 }));
          for (const e of s) e.setMeta((e) => ({ ...e, isValidating: !1 }));
        }
        return y.filter(Boolean);
      }),
      (this.validateAllFields = async (e) => {
        const t = [];
        return (
          r.batch(() => {
            Object.values(this.getRelatedFields()).forEach((n) => {
              t.push(
                Promise.resolve().then(() =>
                  n.validate(e, {
                    skipFormValidation: !0,
                    skipGroupValidation: !0,
                  }),
                ),
              ),
                n.store.state.meta.isTouched ||
                  n.setMeta((e) => ({ ...e, isTouched: !0 }));
            });
          }),
          (await Promise.all(t)).flat()
        );
      }),
      (this.validateArrayFieldsStartingFrom = (e, t, n) =>
        this.form.validateArrayFieldsStartingFrom(e, t, n)),
      (this.validateField = (e, t) => this.form.validateField(e, t)),
      (this.getFieldValue = (e) => this.form.getFieldValue(e)),
      (this.getFieldMeta = (e) => this.form.getFieldMeta(e)),
      (this.setFieldMeta = (e, t) => this.form.setFieldMeta(e, t)),
      (this.setFieldValue = (e, t) => this.form.setFieldValue(e, t)),
      (this.deleteField = (e) => this.form.deleteField(e)),
      (this.pushFieldValue = (e, t) => this.form.pushFieldValue(e, t)),
      (this.insertFieldValue = (e, t, n) =>
        this.form.insertFieldValue(e, t, n)),
      (this.replaceFieldValue = (e, t, n) =>
        this.form.replaceFieldValue(e, t, n)),
      (this.swapFieldValues = (e, t, n) => this.form.swapFieldValues(e, t, n)),
      (this.moveFieldValues = (e, t, n) => this.form.moveFieldValues(e, t, n)),
      (this.clearFieldValues = (e) => this.form.clearFieldValues(e)),
      (this.resetField = (e) => this.form.resetField(e)),
      (this.removeFieldValue = (e, t) => this.form.removeFieldValue(e, t)),
      (this.areRelatedFieldsValid = () =>
        Object.values(this.getRelatedFields()).every(
          (e) => e.state.meta.isValid,
        )),
      (this.validate = (e, t) => {
        const { fieldsErrorMap: n } = t?.skipFormValidation
            ? { fieldsErrorMap: {} }
            : this.form.validateSync(e, {
                dontUpdateFormErrorMap: !0,
                filterFieldNames: (e) => o.isFieldInGroup(this.name, e),
              }),
          { hasErrored: r } = this.validateSync(e, n[this.name] ?? {}, {
            skipRelatedFieldValidation: t?.skipRelatedFieldValidation,
          });
        if (r && !this.options.asyncAlways)
          return (
            this.getInfo().validationMetaMap[m(e)]?.lastAbortController.abort(),
            this.state.meta.errors
          );
        const i = t?.skipFormValidation
          ? Promise.resolve({})
          : this.form.validateAsync(e, {
              dontUpdateFormErrorMap: !0,
              filterFieldNames: (e) => o.isFieldInGroup(this.name, e),
            });
        return this.validateAsync(e, i, {
          skipRelatedFieldValidation: t?.skipRelatedFieldValidation,
        });
      }),
      (this.triggerOnChangeListener = () => {
        const e = this.form.options.listeners?.onChangeGroupDebounceMs;
        e && e > 0
          ? (this.timeoutIds.formListeners.change &&
              clearTimeout(this.timeoutIds.formListeners.change),
            (this.timeoutIds.formListeners.change = setTimeout(() => {
              this.form.options.listeners?.onChangeGroup?.({
                formApi: this.form,
                groupApi: this,
              });
            }, e)))
          : this.form.options.listeners?.onChangeGroup?.({
              formApi: this.form,
              groupApi: this,
            });
        const t = this.options.listeners?.onChangeDebounceMs;
        t && t > 0
          ? (this.timeoutIds.listeners.change &&
              clearTimeout(this.timeoutIds.listeners.change),
            (this.timeoutIds.listeners.change = setTimeout(() => {
              this.options.listeners?.onChange?.({
                value: this.state.value,
                groupApi: this,
              });
            }, t)))
          : this.options.listeners?.onChange?.({
              value: this.state.value,
              groupApi: this,
            });
      }),
      (this.triggerOnSubmitListener = () => {
        this.options.listeners?.onSubmit?.({
          value: this.state.value,
          groupApi: this,
        });
      }),
      (this._handleSubmit = async (e) => {
        this.setFormGroupState((e) => ({
          ...e,
          isSubmitted: !1,
          submissionAttempts: e.submissionAttempts + 1,
          isSubmitSuccessful: !1,
        })),
          r.batch(() => {
            Object.values(this.getRelatedFields()).forEach((e) => {
              e.state.meta.isTouched ||
                e.setMeta((e) => ({ ...e, isTouched: !0 }));
            });
          });
        const t = e ?? this.options.onSubmitMeta;
        this.setFormGroupState((e) => ({ ...e, isSubmitting: !0 }));
        const n = () => {
          this.setFormGroupState((e) => ({ ...e, isSubmitting: !1 }));
        };
        if (
          (await this.validateAllFields("submit"),
          !this.areRelatedFieldsValid())
        )
          return (
            n(),
            void this.options.onGroupSubmitInvalid?.({
              value: this.state.value,
              groupApi: this,
              meta: t,
            })
          );
        if (
          (await this.validate("submit", {
            skipRelatedFieldValidation: !0,
          }),
          !this.areRelatedFieldsValid() || !this.state.meta.isValid)
        )
          return (
            n(),
            void this.options.onGroupSubmitInvalid?.({
              value: this.state.value,
              groupApi: this,
              meta: t,
            })
          );
        r.batch(() => {
          Object.values(this.getRelatedFields()).forEach((e) => {
            e.options.listeners?.onGroupSubmit?.({
              value: e.state.value,
              fieldApi: e,
            });
          });
        }),
          this.options.listeners?.onSubmit?.({
            groupApi: this,
            value: this.state.value,
          });
        try {
          await this.options.onGroupSubmit?.({
            value: this.state.value,
            groupApi: this,
            meta: t,
          }),
            r.batch(() => {
              this.setFormGroupState((e) => ({
                ...e,
                isSubmitted: !0,
                isSubmitSuccessful: !0,
              })),
                n();
            });
        } catch (e) {
          throw (
            (this.setFormGroupState((e) => ({
              ...e,
              isSubmitSuccessful: !1,
            })),
            n(),
            e)
          );
        }
      }),
      (this.form = e.form),
      (this.name = e.name),
      (this.options = e),
      (this.timeoutIds = {
        validations: {},
        listeners: {},
        formListeners: {},
      }),
      (this.fieldInfo = {
        instance: null,
        validationMetaMap: {
          onChange: void 0,
          onBlur: void 0,
          onSubmit: void 0,
          onMount: void 0,
          onServer: void 0,
          onDynamic: void 0,
        },
      }),
      (this.store = r.createStore((t) => {
        this.form.formGroupMetaDerived.get(), this.form.baseStore.get();
        const n = this.form.getFormGroupMeta(this.name) ?? u(e.defaultMeta);
        let r = this.form.getFieldValue(this.name);
        return (
          n.isTouched ||
            void 0 !== r ||
            void 0 === this.options.defaultValue ||
            o.evaluate(r, this.options.defaultValue) ||
            (r = this.options.defaultValue),
          t && t.value === r && t.meta === n ? t : { value: r, meta: n }
        );
      })),
      (this.handleSubmit = this.handleSubmit.bind(this));
  }
  get state() {
    return this.store.state;
  }
  runValidator(e) {
    if (a.isStandardSchemaValidator(e.validate)) {
      const t = a.standardSchemaValidators[e.type](e.value, e.validate);
      return "validate" === e.type ? h(t) : t.then(h);
    }
    return e.validate(e.value);
  }
  handleSubmit(e) {
    return this._handleSubmit(e);
  }
}
function p(e) {
  if (e) return e;
}
function f(e) {
  return !!e && "object" == typeof e && "fields" in e;
}
function h(e) {
  if (!e || "object" != typeof e) return e;
  if (!("form" in e) && !("fields" in e)) return e;
  const { form: t, fields: n, ...r } = e;
  return { ...r, group: t, fields: n };
}
function m(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    default:
      return "onChange";
  }
}
(t.FormGroupApi = d), (t.getDefaultFormGroupMeta = u);
