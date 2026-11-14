// vendor/module-44114.js — webpack module 44114
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(29550 /* vendor/module-29550 */),
  o = n(42594 /* vendor/module-42594 */),
  i = n(36485 /* vendor/module-36485 */),
  a = n(40649 /* vendor/module-40649 */),
  s = n(56027 /* vendor/module-56027 */);
class l {
  constructor(e) {
    (this.options = {}),
      (this.mount = () => {
        void 0 === this.options.defaultValue ||
          this.getMeta().isTouched ||
          this.form.setFieldValue(this.name, this.options.defaultValue, {
            dontUpdateMeta: !0,
          }),
          (this.getInfo().instance = this),
          this.update(this.options);
        const { onMount: e } = this.options.validators || {};
        if (e) {
          const t = this.runValidator({
            validate: e,
            value: {
              value: this.state.value,
              fieldApi: this,
              validationSource: "field",
            },
            type: "validate",
          });
          t &&
            this.setMeta((e) => ({
              ...e,
              errorMap: { ...e?.errorMap, onMount: t },
              errorSourceMap: {
                ...e?.errorSourceMap,
                onMount: "field",
              },
            }));
        }
        return (
          this.options.listeners?.onMount?.({
            value: this.state.value,
            fieldApi: this,
          }),
          () => {
            for (const [e, t] of Object.entries(this.timeoutIds.validations))
              t && (clearTimeout(t), (this.timeoutIds.validations[e] = null));
            for (const [e, t] of Object.entries(this.timeoutIds.listeners))
              t && (clearTimeout(t), (this.timeoutIds.listeners[e] = null));
            for (const [e, t] of Object.entries(this.timeoutIds.formListeners))
              t && (clearTimeout(t), (this.timeoutIds.formListeners[e] = null));
            const e = this.form.fieldInfo[this.name];
            if (e && e.instance === this) {
              for (const [t, n] of Object.entries(e.validationMetaMap))
                n?.lastAbortController.abort(),
                  (e.validationMetaMap[t] = void 0);
              this.form.baseStore.setState((e) => ({
                ...e,
                fieldMetaBase: {
                  ...e.fieldMetaBase,
                  [this.name]: {
                    ...i.defaultFieldMeta,
                    isTouched:
                      e.fieldMetaBase[this.name]?.isTouched ??
                      i.defaultFieldMeta.isTouched,
                    isBlurred:
                      e.fieldMetaBase[this.name]?.isBlurred ??
                      i.defaultFieldMeta.isBlurred,
                    isDirty:
                      e.fieldMetaBase[this.name]?.isDirty ??
                      i.defaultFieldMeta.isDirty,
                  },
                },
              })),
                (e.instance = null),
                this.options.listeners?.onUnmount?.({
                  value: this.state.value,
                  fieldApi: this,
                }),
                this.form.options.listeners?.onFieldUnmount?.({
                  formApi: this.form,
                  fieldApi: this,
                });
            }
          }
        );
      }),
      (this.update = (e) => {
        if (
          ((this.options = e),
          (this.name = e.name),
          !this.state.meta.isTouched && void 0 !== this.options.defaultValue)
        ) {
          const t = this.form.getFieldValue(this.name);
          a.evaluate(t, e.defaultValue) ||
            this.form.setFieldValue(this.name, e.defaultValue, {
              dontUpdateMeta: !0,
              dontValidate: !0,
              dontRunListeners: !0,
            });
        }
        this.form.getFieldMeta(this.name) ||
          this.form.setFieldMeta(this.name, this.state.meta);
      }),
      (this.getValue = () => this.form.getFieldValue(this.name)),
      (this.setValue = (e, t) => {
        this.form.setFieldValue(
          this.name,
          e,
          a.mergeOpts(t, { dontRunListeners: !0, dontValidate: !0 }),
        ),
          t?.dontRunListeners || this.triggerOnChangeListener(),
          t?.dontValidate || this.validate("change");
      }),
      (this.getMeta = () => this.store.state.meta),
      (this.setMeta = (e) => this.form.setFieldMeta(this.name, e)),
      (this.getInfo = () => this.form.getFieldInfo(this.name)),
      (this.pushValue = (e, t) => {
        this.form.pushFieldValue(
          this.name,
          e,
          a.mergeOpts(t, { dontRunListeners: !0 }),
        ),
          t?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.insertValue = (e, t, n) => {
        this.form.insertFieldValue(
          this.name,
          e,
          t,
          a.mergeOpts(n, { dontRunListeners: !0 }),
        ),
          n?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.replaceValue = (e, t, n) => {
        this.form.replaceFieldValue(
          this.name,
          e,
          t,
          a.mergeOpts(n, { dontRunListeners: !0 }),
        ),
          n?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.removeValue = (e, t) => {
        this.form.removeFieldValue(
          this.name,
          e,
          a.mergeOpts(t, { dontRunListeners: !0 }),
        ),
          t?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.swapValues = (e, t, n) => {
        this.form.swapFieldValues(
          this.name,
          e,
          t,
          a.mergeOpts(n, { dontRunListeners: !0 }),
        ),
          n?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.moveValue = (e, t, n) => {
        this.form.moveFieldValues(
          this.name,
          e,
          t,
          a.mergeOpts(n, { dontRunListeners: !0 }),
        ),
          n?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.clearValues = (e) => {
        this.form.clearFieldValues(
          this.name,
          a.mergeOpts(e, { dontRunListeners: !0 }),
        ),
          e?.dontRunListeners || this.triggerOnChangeListener();
      }),
      (this.getLinkedFields = (e) => {
        const t = Object.values(this.form.fieldInfo),
          n = [];
        for (const r of t) {
          if (!r.instance) continue;
          if (!(r.instance instanceof l)) continue;
          const { onChangeListenTo: t, onBlurListenTo: o } =
            r.instance.options.validators || {};
          "change" === e && t?.includes(this.name) && n.push(r.instance),
            "blur" === e && o?.includes(this.name) && n.push(r.instance);
        }
        return n;
      }),
      (this.validateSync = (e, t) => {
        const n = a.getSyncValidatorArray(e, {
            ...this.options,
            form: this.form,
            fieldName: this.name,
            validationLogic:
              this.form.options.validationLogic || s.defaultValidationLogic,
          }),
          o = this.getLinkedFields(e).reduce((t, n) => {
            const r = a.getSyncValidatorArray(e, {
              ...n.options,
              form: n.form,
              fieldName: n.name,
              validationLogic:
                n.form.options.validationLogic || s.defaultValidationLogic,
            });
            return (
              r.forEach((e) => {
                e.field = n;
              }),
              t.concat(r)
            );
          }, []);
        let i = !1;
        r.batch(() => {
          const e = (e, n) => {
            const r = u(n.cause),
              o = n.validate
                ? c(
                    e.runValidator({
                      validate: n.validate,
                      value: {
                        value: e.store.state.value,
                        validationSource: "field",
                        fieldApi: e,
                      },
                      type: "validate",
                    }),
                  )
                : void 0,
              s = t[r],
              { newErrorValue: l, newSource: d } =
                a.determineFieldLevelErrorSourceAndValue({
                  formLevelError: s,
                  fieldLevelError: o,
                });
            e.state.meta.errorMap?.[r] !== l &&
              e.setMeta((e) => ({
                ...e,
                errorMap: { ...e.errorMap, [r]: l },
                errorSourceMap: { ...e.errorSourceMap, [r]: d },
              })),
              l && (i = !0);
          };
          for (const t of n) e(this, t);
          for (const t of o) t.validate && e(t.field, t);
        });
        const l = u("submit");
        return (
          this.state.meta.errorMap?.[l] &&
            "submit" !== e &&
            !i &&
            this.setMeta((e) => ({
              ...e,
              errorMap: { ...e.errorMap, [l]: void 0 },
              errorSourceMap: { ...e.errorSourceMap, [l]: void 0 },
            })),
          { hasErrored: i }
        );
      }),
      (this.validateAsync = async (e, t) => {
        const n = a.getAsyncValidatorArray(e, {
            ...this.options,
            form: this.form,
            fieldName: this.name,
            validationLogic:
              this.form.options.validationLogic || s.defaultValidationLogic,
          }),
          o = await t,
          i = this.getLinkedFields(e).reduce((t, n) => {
            const r = a.getAsyncValidatorArray(e, {
              ...n.options,
              form: n.form,
              fieldName: n.name,
              validationLogic:
                n.form.options.validationLogic || s.defaultValidationLogic,
            });
            return (
              r.forEach((e) => {
                e.field = n;
              }),
              t.concat(r)
            );
          }, []),
          l = [],
          d = [],
          p = n.some((e) => e.validate),
          f = Array.from(
            new Set(i.filter((e) => e.validate).map((e) => e.field)),
          );
        r.batch(() => {
          p && this.startValidation();
          for (const e of f) e.startValidation();
        });
        const h = (e, t, n) => {
          const r = u(t.cause),
            i = e.getInfo(),
            s = i.validationMetaMap[r];
          s?.lastAbortController.abort();
          const l = new AbortController();
          (i.validationMetaMap[r] = { lastAbortController: l }),
            n.push(
              new Promise(async (n) => {
                let i;
                try {
                  i = await new Promise((n, r) => {
                    e.timeoutIds.validations[t.cause] &&
                      (clearTimeout(e.timeoutIds.validations[t.cause]),
                      e.endValidation()),
                      (e.timeoutIds.validations[t.cause] = setTimeout(
                        async () => {
                          if (l.signal.aborted) return n(void 0);
                          try {
                            n(
                              await this.runValidator({
                                validate: t.validate,
                                value: {
                                  value: e.store.state.value,
                                  fieldApi: e,
                                  signal: l.signal,
                                  validationSource: "field",
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
                const s = c(i),
                  u = o[e.name]?.[r],
                  { newErrorValue: d, newSource: p } =
                    a.determineFieldLevelErrorSourceAndValue({
                      formLevelError: u,
                      fieldLevelError: s,
                    });
                if (e.getInfo().instance !== e) return n(void 0);
                e.setMeta((e) => ({
                  ...e,
                  errorMap: { ...e?.errorMap, [r]: d },
                  errorSourceMap: { ...e.errorSourceMap, [r]: p },
                })),
                  n(d);
              }),
            );
        };
        for (const e of n) e.validate && h(this, e, l);
        for (const e of i) e.validate && h(e.field, e, d);
        let m = [];
        return (
          (l.length || d.length) &&
            ((m = await Promise.all(l)), await Promise.all(d)),
          r.batch(() => {
            p && this.endValidation();
            for (const e of f) e.endValidation();
          }),
          m.filter(Boolean)
        );
      }),
      (this.validate = (e, t) => {
        if (!this.state.meta.isTouched) return [];
        const n = t?.skipGroupValidation
          ? []
          : Array.from(this.form.formGroupApis).filter((e) =>
              this.name.startsWith(e.name),
            );
        let r =
          (t?.skipFormValidation
            ? { fieldsErrorMap: {} }
            : this.form.validateSync(e)
          ).fieldsErrorMap[this.name] ?? {};
        if (!t?.skipFormValidation)
          for (const t of n) {
            if (0 === t.state.meta.submissionAttempts) continue;
            const { fieldsErrorMap: n } = this.form.validateSync(e, {
              group: t,
              dontUpdateFormErrorMap: !0,
              filterFieldNames: (e) => a.isFieldInGroup(t.name, e),
            });
            r = { ...r, ...(n[this.name] ?? {}) };
          }
        const { hasErrored: o } = this.validateSync(e, r),
          i = new WeakMap();
        for (const t of n) {
          const { hasErrored: n } = t.validateSync(
            e,
            {},
            { skipRelatedFieldValidation: !0 },
          );
          i.set(t, n);
        }
        if (o && !this.options.asyncAlways) {
          this.getInfo().validationMetaMap[u(e)]?.lastAbortController.abort();
          const t = [];
          for (const r of n)
            r.getInfo().validationMetaMap[u(e)]?.lastAbortController.abort(),
              t.push(r.state.meta.errors);
          return [...this.state.meta.errors, ...t.flat()];
        }
        const s = t?.skipFormValidation
            ? Promise.resolve({})
            : this.form.validateAsync(e),
          l = this.validateAsync(e, s),
          c = [];
        for (const t of n)
          (i.get(t) && !t.options.asyncAlways) ||
            c.push(
              t.validateAsync(e, s, {
                skipRelatedFieldValidation: !0,
              }),
            );
        return 0 === c.length
          ? l
          : Promise.all([l, ...c]).then((e) => e.flat());
      }),
      (this.handleChange = (e) => {
        this.setValue(e);
      }),
      (this.handleBlur = () => {
        this.state.meta.isTouched ||
          this.setMeta((e) => ({ ...e, isTouched: !0 })),
          this.state.meta.isBlurred ||
            this.setMeta((e) => ({ ...e, isBlurred: !0 })),
          this.validate("blur"),
          this.triggerOnBlurListener();
      }),
      (this.setErrorMap = (e) => {
        this.setMeta((t) => ({
          ...t,
          errorMap: { ...t.errorMap, ...e },
        }));
      }),
      (this.parseValueWithSchema = (e) =>
        o.standardSchemaValidators.validate(
          { value: this.state.value, validationSource: "field" },
          e,
        )),
      (this.parseValueWithSchemaAsync = (e) =>
        o.standardSchemaValidators.validateAsync(
          { value: this.state.value, validationSource: "field" },
          e,
        )),
      (this.triggerOnBlurListener = () => {
        const e = this.form.options.listeners?.onBlurDebounceMs;
        e && e > 0
          ? (this.timeoutIds.formListeners.blur &&
              clearTimeout(this.timeoutIds.formListeners.blur),
            (this.timeoutIds.formListeners.blur = setTimeout(() => {
              this.form.options.listeners?.onBlur?.({
                formApi: this.form,
                fieldApi: this,
              });
            }, e)))
          : this.form.options.listeners?.onBlur?.({
              formApi: this.form,
              fieldApi: this,
            });
        const t = this.options.listeners?.onBlurDebounceMs;
        t && t > 0
          ? (this.timeoutIds.listeners.blur &&
              clearTimeout(this.timeoutIds.listeners.blur),
            (this.timeoutIds.listeners.blur = setTimeout(() => {
              this.options.listeners?.onBlur?.({
                value: this.state.value,
                fieldApi: this,
              });
            }, t)))
          : this.options.listeners?.onBlur?.({
              value: this.state.value,
              fieldApi: this,
            });
      }),
      (this.triggerOnChangeListener = () => {
        const e = this.form.options.listeners?.onChangeDebounceMs;
        e && e > 0
          ? (this.timeoutIds.formListeners.change &&
              clearTimeout(this.timeoutIds.formListeners.change),
            (this.timeoutIds.formListeners.change = setTimeout(() => {
              this.form.options.listeners?.onChange?.({
                formApi: this.form,
                fieldApi: this,
              });
            }, e)))
          : this.form.options.listeners?.onChange?.({
              formApi: this.form,
              fieldApi: this,
            });
        const t = this.options.listeners?.onChangeDebounceMs;
        t && t > 0
          ? (this.timeoutIds.listeners.change &&
              clearTimeout(this.timeoutIds.listeners.change),
            (this.timeoutIds.listeners.change = setTimeout(() => {
              this.options.listeners?.onChange?.({
                value: this.state.value,
                fieldApi: this,
              });
            }, t)))
          : this.options.listeners?.onChange?.({
              value: this.state.value,
              fieldApi: this,
            });
        for (const e of this.form.formGroupApis)
          a.isFieldInGroup(e.name, this.name) && e.triggerOnChangeListener();
      }),
      (this.triggerOnSubmitListener = () => {
        this.options.listeners?.onSubmit?.({
          value: this.state.value,
          fieldApi: this,
        });
      }),
      (this.form = e.form),
      (this.name = e.name),
      (this.options = e),
      (this.timeoutIds = {
        validations: {},
        listeners: {},
        formListeners: {},
      }),
      (this.store = r.createStore((t) => {
        this.form.store.get();
        const n = this.form.getFieldMeta(this.name) ?? {
          ...i.defaultFieldMeta,
          ...e.defaultMeta,
        };
        let r = this.form.getFieldValue(this.name);
        return (
          n.isTouched ||
            void 0 !== r ||
            void 0 === this.options.defaultValue ||
            a.evaluate(r, this.options.defaultValue) ||
            (r = this.options.defaultValue),
          t && t.value === r && t.meta === n ? t : { value: r, meta: n }
        );
      }));
  }
  get state() {
    return this.store.state;
  }
  runValidator(e) {
    return o.isStandardSchemaValidator(e.validate)
      ? o.standardSchemaValidators[e.type](e.value, e.validate)
      : e.validate(e.value);
  }
  startValidation() {
    this.setMeta((e) => {
      const t = e._pendingValidationsCount + 1;
      return {
        ...e,
        _pendingValidationsCount: t,
        isValidating: (t > 0 && !e.isValidating) || e.isValidating,
      };
    });
  }
  endValidation() {
    this.setMeta((e) => {
      const t = Math.max(0, e._pendingValidationsCount - 1);
      return {
        ...e,
        _pendingValidationsCount: t,
        isValidating: (0 !== t || !e.isValidating) && e.isValidating,
      };
    });
  }
}
function c(e) {
  if (e) return e;
}
function u(e) {
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
t.FieldApi = l;
