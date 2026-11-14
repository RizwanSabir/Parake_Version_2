// vendor/module-44797.js — webpack module 44797
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(29550 /* vendor/module-29550 */),
  o = n(40649 /* vendor/module-40649 */);
class i {
  constructor(e) {
    if (
      ((this.getFormFieldName = (e) => {
        if ("string" == typeof this.fieldsMap)
          return o.concatenatePaths(this.fieldsMap, e);
        const t = o.makePathArray(e)[0];
        if ("string" != typeof t) return "";
        const n = e.slice(t.length),
          r = this.fieldsMap[t];
        return o.concatenatePaths(r, n);
      }),
      (this.getFormFieldOptions = (e) => {
        const t = { ...e },
          n = t.validators;
        if (
          ((t.name = this.getFormFieldName(e.name)),
          n && (n.onChangeListenTo || n.onBlurListenTo))
        ) {
          const e = { ...n },
            r = (e) => {
              if (e) return e.map((e) => this.getFormFieldName(e));
            };
          (e.onChangeListenTo = r(n.onChangeListenTo)),
            (e.onBlurListenTo = r(n.onBlurListenTo)),
            (t.validators = e);
        }
        return t;
      }),
      (this.mount = () => () => {}),
      (this.validateArrayFieldsStartingFrom = async (e, t, n) =>
        this.form.validateArrayFieldsStartingFrom(
          this.getFormFieldName(e),
          t,
          n,
        )),
      (this.validateField = (e, t) =>
        this.form.validateField(this.getFormFieldName(e), t)),
      (this.getFieldValue = (e) =>
        this.form.getFieldValue(this.getFormFieldName(e))),
      (this.getFieldMeta = (e) =>
        this.form.getFieldMeta(this.getFormFieldName(e))),
      (this.setFieldMeta = (e, t) =>
        this.form.setFieldMeta(this.getFormFieldName(e), t)),
      (this.setFieldValue = (e, t, n) =>
        this.form.setFieldValue(this.getFormFieldName(e), t, n)),
      (this.deleteField = (e) =>
        this.form.deleteField(this.getFormFieldName(e))),
      (this.pushFieldValue = (e, t, n) =>
        this.form.pushFieldValue(this.getFormFieldName(e), t, n)),
      (this.insertFieldValue = async (e, t, n, r) =>
        this.form.insertFieldValue(this.getFormFieldName(e), t, n, r)),
      (this.replaceFieldValue = async (e, t, n, r) =>
        this.form.replaceFieldValue(this.getFormFieldName(e), t, n, r)),
      (this.removeFieldValue = async (e, t, n) =>
        this.form.removeFieldValue(this.getFormFieldName(e), t, n)),
      (this.swapFieldValues = (e, t, n, r) =>
        this.form.swapFieldValues(this.getFormFieldName(e), t, n, r)),
      (this.moveFieldValues = (e, t, n, r) =>
        this.form.moveFieldValues(this.getFormFieldName(e), t, n, r)),
      (this.clearFieldValues = (e, t) =>
        this.form.clearFieldValues(this.getFormFieldName(e), t)),
      (this.resetField = (e) => this.form.resetField(this.getFormFieldName(e))),
      (this.validateAllFields = (e) => this.form.validateAllFields(e)),
      e.form instanceof i)
    ) {
      const t = e.form;
      if (((this.form = t.form), "string" == typeof e.fields))
        this.fieldsMap = t.getFormFieldName(e.fields);
      else {
        const n = { ...e.fields };
        for (const e in n) n[e] = t.getFormFieldName(n[e]);
        this.fieldsMap = n;
      }
    } else (this.form = e.form), (this.fieldsMap = e.fields);
    this.store = r.createStore(() => {
      const e = this.form.store.get();
      let t;
      if ("string" == typeof this.fieldsMap)
        t = o.getBy(e.values, this.fieldsMap);
      else {
        t = {};
        const n = this.fieldsMap;
        for (const r in n) t[r] = o.getBy(e.values, n[r]);
      }
      return { values: t };
    });
  }
  get state() {
    return this.store.state;
  }
  async handleSubmit(e) {
    return this.form.handleSubmit(e);
  }
}
t.FieldGroupApi = i;
