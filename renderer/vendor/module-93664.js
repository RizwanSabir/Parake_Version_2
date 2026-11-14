// vendor/module-93664.js — webpack module 93664
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(29550 /* vendor/module-29550 */),
  o = n(40649 /* vendor/module-40649 */),
  i = n(56027 /* vendor/module-56027 */),
  a = n(42594 /* vendor/module-42594 */),
  s = n(36485 /* vendor/module-36485 */),
  l = n(38971 /* vendor/module-38971 */);
function c(e) {
  return {
    values: e.values ?? {},
    errorMap: e.errorMap ?? {},
    fieldMetaBase: e.fieldMetaBase ?? {},
    formGroupStateBase: e.formGroupStateBase ?? {},
    isSubmitted: e.isSubmitted ?? !1,
    isSubmitting: e.isSubmitting ?? !1,
    isValidating: e.isValidating ?? !1,
    submissionAttempts: e.submissionAttempts ?? 0,
    isSubmitSuccessful: e.isSubmitSuccessful ?? !1,
    validationMetaMap: e.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
      onDynamic: void 0,
    },
  };
}
function u(e) {
  return e
    ? o.isGlobalFormValidationError(e)
      ? { formError: u(e.form).formError, fieldErrors: e.fields }
      : { formError: e }
    : { formError: void 0 };
}
function d(e) {
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
t.FormApi = class {
  constructor(e) {
    (this.options = {}),
      (this.fieldInfo = {}),
      (this.formGroupApis = new Set()),
      (this.mount = () => {
        const e = this.store.subscribe(() => {
            o.throttleFormState(this);
          }),
          t = l.formEventClient.on("request-form-state", (e) => {
            e.payload.id === this._formId &&
              l.formEventClient.emit("form-api", {
                id: this._formId,
                state: this.store.state,
                options: this.options,
              });
          }),
          n = l.formEventClient.on("request-form-reset", (e) => {
            e.payload.id === this._formId && this.reset();
          }),
          r = l.formEventClient.on("request-form-force-submit", (e) => {
            e.payload.id === this._formId &&
              ((this._devtoolsSubmissionOverride = !0),
              this.handleSubmit(),
              (this._devtoolsSubmissionOverride = !1));
          }),
          i = () => {
            r(),
              n(),
              t(),
              e.unsubscribe(),
              l.formEventClient.emit("form-unmounted", {
                id: this._formId,
              });
          };
        this.options.listeners?.onMount?.({ formApi: this });
        const { onMount: a } = this.options.validators || {};
        return (
          l.formEventClient.emit("form-api", {
            id: this._formId,
            state: this.store.state,
            options: this.options,
          }),
          a ? (this.validateSync("mount"), i) : i
        );
      }),
      (this.update = (e) => {
        if (!e) return;
        const t = this.options;
        this.options = e;
        const n =
            e.defaultValues &&
            !o.evaluate(e.defaultValues, t.defaultValues) &&
            !this.state.isTouched,
          i =
            !o.evaluate(e.defaultState, t.defaultState) &&
            !this.state.isTouched;
        if (n || i) {
          if (
            (r.batch(() => {
              this.baseStore.setState(() =>
                c(
                  Object.assign(
                    {},
                    this.state,
                    i ? e.defaultState : {},
                    n ? { values: e.defaultValues } : {},
                  ),
                ),
              );
            }),
            n)
          ) {
            const e = s.metaHelper(this);
            for (const t of Object.keys(this.fieldInfo))
              Array.isArray(this.getFieldValue(t)) && e.bumpArrayVersion(t);
          }
          l.formEventClient.emit("form-api", {
            id: this._formId,
            state: this.store.state,
            options: this.options,
          });
        }
      }),
      (this.reset = (e, t) => {
        const { fieldMeta: n } = this.state,
          r = this.resetFieldMeta(n);
        e &&
          !t?.keepDefaultValues &&
          (this.options = { ...this.options, defaultValues: e }),
          this.baseStore.setState(() => {
            let t =
              e ??
              this.options.defaultValues ??
              this.options.defaultState?.values;
            return (
              e ||
                Object.values(this.fieldInfo).forEach((e) => {
                  e.instance &&
                    void 0 !== e.instance.options.defaultValue &&
                    (t = o.setBy(
                      t,
                      e.instance.name,
                      e.instance.options.defaultValue,
                    ));
                }),
              c({
                ...this.options.defaultState,
                values: t,
                fieldMetaBase: r,
              })
            );
          });
      }),
      (this.validateAllFields = async (e) => {
        const t = [];
        return (
          r.batch(() => {
            Object.values(this.fieldInfo).forEach((n) => {
              if (!n.instance) return;
              const r = n.instance;
              t.push(
                Promise.resolve().then(() =>
                  r.validate(e, {
                    skipFormValidation: !0,
                    skipGroupValidation: !0,
                  }),
                ),
              ),
                n.instance.store.state.meta.isTouched ||
                  n.instance.setMeta((e) => ({
                    ...e,
                    isTouched: !0,
                  }));
            });
          }),
          (await Promise.all(t)).flat()
        );
      }),
      (this.validateArrayFieldsStartingFrom = async (e, t, n) => {
        const o = this.getFieldValue(e),
          i = Array.isArray(o) ? Math.max(o.length - 1, 0) : null,
          a = [`${e}[${t}]`];
        for (let n = t + 1; n <= (i ?? 0); n++) a.push(`${e}[${n}]`);
        const s = Object.keys(this.fieldInfo).filter((e) =>
            a.some((t) => e.startsWith(t)),
          ),
          l = [];
        return (
          r.batch(() => {
            s.forEach((e) => {
              l.push(Promise.resolve().then(() => this.validateField(e, n)));
            });
          }),
          (await Promise.all(l)).flat()
        );
      }),
      (this.validateField = (e, t) => {
        const n = this.fieldInfo[e]?.instance;
        if (!n) {
          const { hasErrored: n } = this.validateSync(t);
          return n && !this.options.asyncAlways
            ? (this.getFieldMeta(e)?.errors ?? [])
            : this.validateAsync(t).then(
                () => this.getFieldMeta(e)?.errors ?? [],
              );
        }
        return (
          n.store.state.meta.isTouched ||
            n.setMeta((e) => ({ ...e, isTouched: !0 })),
          n.validate(t)
        );
      }),
      (this.validateSync = (e, t) => {
        const n = o.getSyncValidatorArray(e, {
          ...this.options,
          form: this,
          group: t?.group,
          validationLogic:
            this.options.validationLogic || i.defaultValidationLogic,
        });
        let a = !1;
        const l = {};
        return (
          r.batch(() => {
            for (const e of n) {
              if (!e.validate) continue;
              const n = this.runValidator({
                  validate: e.validate,
                  value: {
                    value: this.state.values,
                    formApi: this,
                    validationSource: "form",
                  },
                  type: "validate",
                }),
                { formError: r, fieldErrors: i } = u(n),
                c = d(e.cause);
              let p = new Set([
                ...Object.keys(this.state.fieldMeta),
                ...Object.keys(i || {}),
              ]);
              t?.filterFieldNames &&
                (p = new Set([...p].filter(t.filterFieldNames)));
              for (const e of p) {
                if (void 0 === this.baseStore.state.fieldMetaBase[e] && !i?.[e])
                  continue;
                const t = this.getFieldMeta(e) ?? s.defaultFieldMeta,
                  { errorMap: n, errorSourceMap: r } = t,
                  a = i?.[e],
                  { newErrorValue: u, newSource: d } =
                    o.determineFormLevelErrorSourceAndValue({
                      newFormValidatorError: a,
                      isPreviousErrorFromFormValidator: "form" === r?.[c],
                      previousErrorValue: n?.[c],
                    });
                "form" === d && (l[e] = { ...l[e], [c]: a }),
                  n?.[c] !== u &&
                    this.setFieldMeta(e, (e = s.defaultFieldMeta) => ({
                      ...e,
                      errorMap: { ...e.errorMap, [c]: u },
                      errorSourceMap: {
                        ...e.errorSourceMap,
                        [c]: d,
                      },
                    }));
              }
              t?.dontUpdateFormErrorMap ||
                (this.state.errorMap?.[c] !== r &&
                  this.baseStore.setState((e) => ({
                    ...e,
                    errorMap: { ...e.errorMap, [c]: r },
                  }))),
                (r || i) && (a = !0);
            }
            if (t?.dontUpdateFormErrorMap) return;
            const r = d("submit");
            this.state.errorMap?.[r] &&
              "submit" !== e &&
              !a &&
              this.baseStore.setState((e) => ({
                ...e,
                errorMap: { ...e.errorMap, [r]: void 0 },
              }));
            const i = d("server");
            this.state.errorMap?.[i] &&
              "server" !== e &&
              !a &&
              this.baseStore.setState((e) => ({
                ...e,
                errorMap: { ...e.errorMap, [i]: void 0 },
              }));
          }),
          { hasErrored: a, fieldsErrorMap: l }
        );
      }),
      (this.validateAsync = async (e, t) => {
        const n = o.getAsyncValidatorArray(e, {
          ...this.options,
          form: this,
          group: t?.group,
          validationLogic:
            this.options.validationLogic || i.defaultValidationLogic,
        });
        this.state.isFormValidating ||
          this.baseStore.setState((e) => ({
            ...e,
            isFormValidating: !0,
          }));
        const r = [];
        let a;
        for (const e of n) {
          if (!e.validate) continue;
          const n = d(e.cause),
            i = this.state.validationMetaMap[n];
          i?.lastAbortController.abort();
          const l = new AbortController();
          (this.state.validationMetaMap[n] = {
            lastAbortController: l,
          }),
            r.push(
              new Promise(async (n) => {
                let r;
                try {
                  r = await new Promise((t, n) => {
                    setTimeout(async () => {
                      if (l.signal.aborted) return t(void 0);
                      try {
                        t(
                          await this.runValidator({
                            validate: e.validate,
                            value: {
                              value: this.state.values,
                              formApi: this,
                              validationSource: "form",
                              signal: l.signal,
                            },
                            type: "validateAsync",
                          }),
                        );
                      } catch (e) {
                        n(e);
                      }
                    }, e.debounceMs);
                  });
                } catch (e) {
                  r = e;
                }
                const { formError: i, fieldErrors: c } = u(r);
                c && (a = a ? { ...a, ...c } : c);
                const p = d(e.cause),
                  f = new Set([
                    ...Object.keys(this.state.fieldMeta),
                    ...Object.keys(a || {}),
                  ]);
                let h = Array.from(f);
                t?.filterFieldNames && (h = h.filter(t.filterFieldNames));
                for (const e of h) {
                  if (
                    void 0 === this.baseStore.state.fieldMetaBase[e] &&
                    !a?.[e]
                  )
                    continue;
                  const t = this.getFieldMeta(e) ?? s.defaultFieldMeta,
                    { errorMap: n, errorSourceMap: r } = t,
                    i = a?.[e],
                    { newErrorValue: l, newSource: c } =
                      o.determineFormLevelErrorSourceAndValue({
                        newFormValidatorError: i,
                        isPreviousErrorFromFormValidator: "form" === r?.[p],
                        previousErrorValue: n?.[p],
                      });
                  n?.[p] !== l &&
                    this.setFieldMeta(e, (e = s.defaultFieldMeta) => ({
                      ...e,
                      errorMap: { ...e.errorMap, [p]: l },
                      errorSourceMap: {
                        ...e.errorSourceMap,
                        [p]: c,
                      },
                    }));
                }
                t?.dontUpdateFormErrorMap ||
                  this.baseStore.setState((e) => ({
                    ...e,
                    errorMap: { ...e.errorMap, [p]: i },
                  })),
                  n(a ? { fieldErrors: a, errorMapKey: p } : void 0);
              }),
            );
        }
        let l = [];
        const c = {};
        if (r.length) {
          l = await Promise.all(r);
          for (const e of l)
            if (e?.fieldErrors) {
              const { errorMapKey: t } = e;
              for (const [n, r] of Object.entries(e.fieldErrors)) {
                const e = { ...(c[n] || {}), [t]: r };
                c[n] = e;
              }
            }
        }
        return (
          this.baseStore.setState((e) => ({
            ...e,
            isFormValidating: !1,
          })),
          c
        );
      }),
      (this.validate = (e, t) => {
        const { hasErrored: n, fieldsErrorMap: r } = this.validateSync(e, t);
        return n && !this.options.asyncAlways ? r : this.validateAsync(e, t);
      }),
      (this._handleSubmit = async (e) => {
        this.baseStore.setState((e) => ({
          ...e,
          isSubmitted: !1,
          submissionAttempts: e.submissionAttempts + 1,
          isSubmitSuccessful: !1,
        })),
          r.batch(() => {
            Object.values(this.fieldInfo).forEach((e) => {
              e.instance &&
                (e.instance.store.state.meta.isTouched ||
                  e.instance.setMeta((e) => ({
                    ...e,
                    isTouched: !0,
                  })));
            });
          });
        const t = e ?? this.options.onSubmitMeta;
        if (
          !this.state.canSubmit &&
          !this._devtoolsSubmissionOverride &&
          this.baseStore.state.submissionAttempts <= 1
        )
          return void this.options.onSubmitInvalid?.({
            value: this.state.values,
            formApi: this,
            meta: t,
          });
        this.baseStore.setState((e) => ({ ...e, isSubmitting: !0 }));
        const n = () => {
          this.baseStore.setState((e) => ({
            ...e,
            isSubmitting: !1,
          }));
        };
        if ((await this.validateAllFields("submit"), !this.state.isFieldsValid))
          return (
            n(),
            this.options.onSubmitInvalid?.({
              value: this.state.values,
              formApi: this,
              meta: t,
            }),
            void l.formEventClient.emit("form-submission", {
              id: this._formId,
              submissionAttempt: this.state.submissionAttempts,
              successful: !1,
              stage: "validateAllFields",
              errors: Object.values(this.state.fieldMeta)
                .map((e) => e.errors)
                .flat(),
            })
          );
        if ((await this.validate("submit"), !this.state.isValid))
          return (
            n(),
            this.options.onSubmitInvalid?.({
              value: this.state.values,
              formApi: this,
              meta: t,
            }),
            void l.formEventClient.emit("form-submission", {
              id: this._formId,
              submissionAttempt: this.state.submissionAttempts,
              successful: !1,
              stage: "validate",
              errors: this.state.errors,
            })
          );
        r.batch(() => {
          Object.values(this.fieldInfo).forEach((e) => {
            e.instance?.triggerOnSubmitListener();
          });
        }),
          this.options.listeners?.onSubmit?.({
            formApi: this,
            meta: t,
          });
        try {
          await this.options.onSubmit?.({
            value: this.state.values,
            formApi: this,
            meta: t,
          }),
            r.batch(() => {
              this.baseStore.setState((e) => ({
                ...e,
                isSubmitted: !0,
                isSubmitSuccessful: !0,
              })),
                l.formEventClient.emit("form-submission", {
                  id: this._formId,
                  submissionAttempt: this.state.submissionAttempts,
                  successful: !0,
                }),
                n();
            });
        } catch (e) {
          throw (
            (this.baseStore.setState((e) => ({
              ...e,
              isSubmitSuccessful: !1,
            })),
            l.formEventClient.emit("form-submission", {
              id: this._formId,
              submissionAttempt: this.state.submissionAttempts,
              successful: !1,
              stage: "inflight",
              onError: e,
            }),
            n(),
            e)
          );
        }
      }),
      (this.getFieldValue = (e) => o.getBy(this.state.values, e)),
      (this.getFieldMeta = (e) => this.state.fieldMeta[e]),
      (this.getFormGroupMeta = (e) => this.formGroupMetaDerived.state[e]),
      (this.getFieldInfo = (e) =>
        (this.fieldInfo[e] ||= {
          instance: null,
          validationMetaMap: {
            onChange: void 0,
            onBlur: void 0,
            onSubmit: void 0,
            onMount: void 0,
            onServer: void 0,
            onDynamic: void 0,
          },
        })),
      (this.setFieldMeta = (e, t) => {
        this.baseStore.setState((n) => ({
          ...n,
          fieldMetaBase: {
            ...n.fieldMetaBase,
            [e]: o.functionalUpdate(t, n.fieldMetaBase[e]),
          },
        }));
      }),
      (this.resetFieldMeta = (e) =>
        Object.keys(e).reduce((e, t) => ((e[t] = s.defaultFieldMeta), e), {})),
      (this.setFieldValue = (e, t, n) => {
        const i = n?.dontUpdateMeta ?? !1,
          a = n?.dontRunListeners ?? !1,
          s = n?.dontValidate ?? !1;
        r.batch(() => {
          i ||
            this.setFieldMeta(e, (e) => ({
              ...e,
              isTouched: !0,
              isDirty: !0,
              errorMap: { ...e?.errorMap, onMount: void 0 },
            })),
            this.baseStore.setState((n) => ({
              ...n,
              values: o.setBy(n.values, e, t),
            }));
        }),
          a || this.getFieldInfo(e).instance?.triggerOnChangeListener(),
          s || this.validateField(e, "change");
      }),
      (this.deleteField = (e) => {
        const t = [
          ...Object.keys(this.fieldInfo).filter((t) => {
            const n = e.toString();
            return t.startsWith(`${n}.`) || t.startsWith(`${n}[`);
          }),
          e,
        ];
        this.baseStore.setState((e) => {
          const n = { ...e };
          return (
            t.forEach((e) => {
              (n.values = o.deleteBy(n.values, e)),
                delete this.fieldInfo[e],
                delete n.fieldMetaBase[e];
            }),
            n
          );
        });
      }),
      (this.pushFieldValue = (e, t, n) => {
        this.setFieldValue(e, (e) => [...(Array.isArray(e) ? e : []), t], n),
          s.metaHelper(this).bumpArrayVersion(e);
      }),
      (this.insertFieldValue = async (e, t, n, r) => {
        this.setFieldValue(
          e,
          (e) => [...e.slice(0, t), n, ...e.slice(t)],
          o.mergeOpts(r, { dontValidate: !0 }),
        );
        const i = r?.dontValidate ?? !1;
        i || (await this.validateField(e, "change")),
          s.metaHelper(this).handleArrayInsert(e, t),
          i || (await this.validateArrayFieldsStartingFrom(e, t, "change"));
      }),
      (this.replaceFieldValue = async (e, t, n, r) => {
        this.setFieldValue(
          e,
          (e) => e.map((e, r) => (r === t ? n : e)),
          o.mergeOpts(r, { dontValidate: !0 }),
        ),
          s.metaHelper(this).bumpArrayVersion(e),
          r?.dontValidate ||
            (await this.validateField(e, "change"),
            await this.validateArrayFieldsStartingFrom(e, t, "change"));
      }),
      (this.removeFieldValue = async (e, t, n) => {
        const r = this.getFieldValue(e),
          i = Array.isArray(r) ? Math.max(r.length - 1, 0) : null;
        if (
          (this.setFieldValue(
            e,
            (e) => e.filter((e, n) => n !== t),
            o.mergeOpts(n, { dontValidate: !0 }),
          ),
          s.metaHelper(this).handleArrayRemove(e, t),
          null !== i)
        ) {
          const t = `${e}[${i}]`;
          this.deleteField(t);
        }
        n?.dontValidate ||
          (await this.validateField(e, "change"),
          await this.validateArrayFieldsStartingFrom(e, t, "change"));
      }),
      (this.swapFieldValues = (e, t, n, r) => {
        this.setFieldValue(
          e,
          (e) => {
            const r = e[t],
              i = e[n];
            return o.setBy(o.setBy(e, `${t}`, i), `${n}`, r);
          },
          o.mergeOpts(r, { dontValidate: !0 }),
        ),
          s.metaHelper(this).handleArraySwap(e, t, n),
          r?.dontValidate ||
            (this.validateField(e, "change"),
            this.validateField(`${e}[${t}]`, "change"),
            this.validateField(`${e}[${n}]`, "change"));
      }),
      (this.moveFieldValues = (e, t, n, r) => {
        this.setFieldValue(
          e,
          (e) => {
            const r = [...e];
            return r.splice(n, 0, r.splice(t, 1)[0]), r;
          },
          o.mergeOpts(r, { dontValidate: !0 }),
        ),
          s.metaHelper(this).handleArrayMove(e, t, n),
          r?.dontValidate ||
            (this.validateField(e, "change"),
            this.validateField(`${e}[${t}]`, "change"),
            this.validateField(`${e}[${n}]`, "change"));
      }),
      (this.clearFieldValues = (e, t) => {
        const n = this.getFieldValue(e),
          r = Array.isArray(n) ? Math.max(n.length - 1, 0) : null;
        if (
          (this.setFieldValue(e, [], o.mergeOpts(t, { dontValidate: !0 })),
          s.metaHelper(this).bumpArrayVersion(e),
          null !== r)
        )
          for (let t = 0; t <= r; t++) {
            const n = `${e}[${t}]`;
            this.deleteField(n);
          }
        t?.dontValidate || this.validateField(e, "change");
      }),
      (this.resetField = (e) => {
        this.baseStore.setState((t) => {
          const n = this.getFieldInfo(e).instance?.options.defaultValue,
            r = o.getBy(this.options.defaultValues, e),
            i = n ?? r;
          return {
            ...t,
            fieldMetaBase: {
              ...t.fieldMetaBase,
              [e]: s.defaultFieldMeta,
            },
            values: void 0 !== i ? o.setBy(t.values, e, i) : t.values,
          };
        });
      }),
      (this.setErrorMap = (e) => {
        r.batch(() => {
          Object.entries(e).forEach(([e, t]) => {
            const n = e;
            if (o.isGlobalFormValidationError(t)) {
              const { formError: e, fieldErrors: r } = u(t);
              for (const e of Object.keys(this.fieldInfo))
                this.getFieldMeta(e) &&
                  this.setFieldMeta(e, (t) => ({
                    ...t,
                    errorMap: { ...t.errorMap, [n]: r?.[e] },
                    errorSourceMap: {
                      ...t.errorSourceMap,
                      [n]: "form",
                    },
                  }));
              this.baseStore.setState((t) => ({
                ...t,
                errorMap: { ...t.errorMap, [n]: e },
              }));
            } else
              this.baseStore.setState((e) => ({
                ...e,
                errorMap: { ...e.errorMap, [n]: t },
              }));
          });
        });
      }),
      (this.getAllErrors = () => ({
        form: {
          errors: this.state.errors,
          errorMap: this.state.errorMap,
        },
        fields: Object.entries(this.state.fieldMeta).reduce(
          (e, [t, n]) => (
            Object.keys(n).length &&
              n.errors.length &&
              (e[t] = { errors: n.errors, errorMap: n.errorMap }),
            e
          ),
          {},
        ),
      })),
      (this.parseValuesWithSchema = (e) =>
        a.standardSchemaValidators.validate(
          { value: this.state.values, validationSource: "form" },
          e,
        )),
      (this.parseValuesWithSchemaAsync = (e) =>
        a.standardSchemaValidators.validateAsync(
          { value: this.state.values, validationSource: "form" },
          e,
        )),
      (this.timeoutIds = {
        validations: {},
        listeners: {},
        formListeners: {},
      }),
      (this._formId = e?.formId ?? o.uuid()),
      (this._devtoolsSubmissionOverride = !1);
    let t,
      n,
      p = c({
        ...e?.defaultState,
        values: e?.defaultValues ?? e?.defaultState?.values,
      });
    if (e?.transform) {
      p = e.transform({ state: p }).state;
      for (const e of Object.keys(p.errorMap)) {
        const t = p.errorMap[e];
        if (void 0 !== t && o.isGlobalFormValidationError(t))
          for (const n of Object.keys(t.fields)) {
            const r = t.fields[n];
            if (void 0 === r) continue;
            const o = p.fieldMetaBase[n];
            p.fieldMetaBase[n] = {
              isTouched: !1,
              isValidating: !1,
              isBlurred: !1,
              isDirty: !1,
              _arrayVersion: 0,
              _pendingValidationsCount: 0,
              ...(o ?? {}),
              errorSourceMap: {
                ...(o?.errorSourceMap ?? {}),
                onChange: "form",
              },
              errorMap: { ...(o?.errorMap ?? {}), [e]: r },
            };
          }
      }
    }
    (this.baseStore = r.createStore(p)),
      (this.fieldMetaDerived = r.createStore((e) => {
        const n = this.baseStore.get();
        let r = 0;
        const i = {};
        for (const a of Object.keys(n.fieldMetaBase)) {
          const s = n.fieldMetaBase[a],
            l = t?.fieldMetaBase[a],
            c = e?.[a],
            u = o.getBy(n.values, a);
          let d = c?.errors;
          if (!l || s.errorMap !== l.errorMap) {
            d = Object.values(s.errorMap ?? {}).filter((e) => void 0 !== e);
            const e = this.getFieldInfo(a)?.instance;
            (e && e.options.disableErrorFlat) || (d = d.flat(1));
          }
          const p = !o.isNonEmptyArray(d),
            f = !s.isDirty,
            h = o.evaluate(
              u,
              this.getFieldInfo(a)?.instance?.options.defaultValue ??
                o.getBy(this.options.defaultValues, a),
            );
          c &&
          c.isPristine === f &&
          c.isValid === p &&
          c.isDefaultValue === h &&
          c.errors === d &&
          s === l
            ? ((i[a] = c), r++)
            : (i[a] = {
                ...s,
                errors: d ?? [],
                isPristine: f,
                isValid: p,
                isDefaultValue: h,
              });
        }
        return Object.keys(n.fieldMetaBase).length
          ? e && r === Object.keys(n.fieldMetaBase).length
            ? e
            : ((t = this.baseStore.get()), i)
          : i;
      })),
      (this.formGroupMetaDerived = r.createStore((e) => {
        const t = this.baseStore.get(),
          n = this.fieldMetaDerived.get(),
          r = {};
        for (const i of this.formGroupApis) {
          const a = i.name,
            s = t.formGroupStateBase[a] ?? {
              isSubmitted: !1,
              isSubmitting: !1,
              isValidating: !1,
              submissionAttempts: 0,
              isSubmitSuccessful: !1,
            },
            l = n[a];
          let c = !1,
            u = !0,
            d = !1,
            p = !1,
            f = !0,
            h = !1;
          for (const e in n) {
            if (e === a) continue;
            if (!o.isFieldInGroup(a, e)) continue;
            const t = n[e];
            t &&
              (t.isValidating && (c = !0),
              t.isValid || (u = !1),
              t.isTouched && (d = !0),
              t.isBlurred && (p = !0),
              t.isDefaultValue || (f = !1),
              t.isDirty && (h = !0));
          }
          const m = !h,
            g = !!c || s.isValidating,
            y = l?.errorMap ?? {},
            v = l?.errorSourceMap ?? {},
            b = Boolean(
              y.onMount ||
                Object.entries(n).some(
                  ([e, t]) =>
                    t &&
                    e !== a &&
                    o.isFieldInGroup(a, e) &&
                    t.errorMap.onMount,
                ),
            ),
            S = e?.[a];
          let _ = S?.errors ?? [];
          (S && S.__srcErrorMap === y) ||
            (_ = Object.values(y).reduce((e, t) => {
              if (void 0 === t) return e;
              if (t && "object" == typeof t && "fields" in t) {
                const n = t.group;
                return void 0 !== n && e.push(n), e;
              }
              return e.push(t), e;
            }, []));
          const x = 0 === _.length,
            w = u && x,
            E = i.options.canSubmitWhenInvalid ?? !1,
            T =
              (0 === s.submissionAttempts && !d && !b) ||
              (!g && !s.isSubmitting && w) ||
              E;
          if (
            S &&
            S.errorMap === y &&
            S.errorSourceMap === v &&
            S.errors === _ &&
            S.isFieldsValidating === c &&
            S.isFieldsValid === u &&
            S.isGroupValid === x &&
            S.isValid === w &&
            S.canSubmit === T &&
            S.isTouched === d &&
            S.isBlurred === p &&
            S.isPristine === m &&
            S.isDefaultValue === f &&
            S.isDirty === h &&
            S.isValidating === g &&
            S.isSubmitting === s.isSubmitting &&
            S.isSubmitted === s.isSubmitted &&
            S.submissionAttempts === s.submissionAttempts &&
            S.isSubmitSuccessful === s.isSubmitSuccessful
          ) {
            r[a] = S;
            continue;
          }
          const k = {
            ...s,
            errorMap: y,
            errorSourceMap: v,
            _arrayVersion: l?._arrayVersion ?? 0,
            isTouched: d,
            isBlurred: p,
            isDirty: h,
            isPristine: m,
            isDefaultValue: f,
            isValid: w,
            errors: _,
            isValidating: g,
            isFieldsValidating: c,
            isFieldsValid: u,
            isGroupValid: x,
            canSubmit: T,
          };
          Object.defineProperty(k, "__srcErrorMap", {
            value: y,
            enumerable: !1,
            configurable: !0,
          }),
            (r[a] = k);
        }
        return r;
      })),
      (this.store = r.createStore((e) => {
        const t = this.baseStore.get(),
          r = this.fieldMetaDerived.get(),
          i = Object.values(r).filter(Boolean),
          a = i.some((e) => e.isValidating),
          s = i.every((e) => e.isValid),
          l = i.some((e) => e.isTouched),
          c = i.some((e) => e.isBlurred),
          u = i.every((e) => e.isDefaultValue),
          d = l && t.errorMap?.onMount,
          p = i.some((e) => e.isDirty),
          f = !p,
          h = Boolean(
            t.errorMap?.onMount || i.some((e) => e?.errorMap?.onMount),
          ),
          m = !!a;
        let g = e?.errors ?? [];
        (n && t.errorMap === n.errorMap) ||
          (g = Object.values(t.errorMap).reduce(
            (e, t) =>
              void 0 === t
                ? e
                : t && o.isGlobalFormValidationError(t)
                  ? (e.push(t.form), e)
                  : (e.push(t), e),
            [],
          ));
        const y = 0 === g.length,
          v = s && y,
          b = this.options.canSubmitWhenInvalid ?? !1,
          S =
            (0 === t.submissionAttempts && !l && !h) ||
            (!m && !t.isSubmitting && v) ||
            b;
        let _ = t.errorMap;
        if (
          (d &&
            ((g = g.filter((e) => e !== t.errorMap.onMount)),
            (_ = Object.assign(_, { onMount: void 0 }))),
          e &&
            n &&
            e.errorMap === _ &&
            e.fieldMeta === this.fieldMetaDerived.state &&
            e.errors === g &&
            e.isFieldsValidating === a &&
            e.isFieldsValid === s &&
            e.isFormValid === y &&
            e.isValid === v &&
            e.canSubmit === S &&
            e.isTouched === l &&
            e.isBlurred === c &&
            e.isPristine === f &&
            e.isDefaultValue === u &&
            e.isDirty === p &&
            o.evaluate(n, t))
        )
          return e;
        const x = {
          ...t,
          errorMap: _,
          fieldMeta: this.fieldMetaDerived.state,
          errors: g,
          isFieldsValidating: a,
          isFieldsValid: s,
          isFormValid: y,
          isValid: v,
          canSubmit: S,
          isTouched: l,
          isBlurred: c,
          isPristine: f,
          isDefaultValue: u,
          isDirty: p,
        };
        return (n = this.baseStore.get()), x;
      })),
      (this.handleSubmit = this.handleSubmit.bind(this)),
      this.update(e || {});
  }
  get state() {
    return this.store.state;
  }
  get formId() {
    return this._formId;
  }
  runValidator(e) {
    return a.isStandardSchemaValidator(e.validate)
      ? a.standardSchemaValidators[e.type](e.value, e.validate)
      : e.validate(e.value);
  }
  handleSubmit(e) {
    return this._handleSubmit(e);
  }
};
