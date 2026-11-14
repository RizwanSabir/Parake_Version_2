// vendor/module-31385.js — webpack module 31385
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31085 /* vendor/module-31085 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(99313 /* vendor/module-99313 */),
  a = n(7518 /* vendor/module-7518 */),
  s = o.createContext(null),
  l = o.createContext(null);
function c() {
  const e = o.useContext(l);
  if (!e)
    throw new Error(
      "`formContext` only works when within a `formComponent` passed to `createFormHook`",
    );
  return e;
}
(t.createFormHook = function e({
  fieldComponents: t,
  fieldContext: n,
  formContext: s,
  formComponents: l,
}) {
  return {
    useAppForm: function (e) {
      const a = i.useForm(e),
        c = o.useMemo(
          () =>
            ({ children: e }) =>
              r.jsx(s.Provider, { value: a, children: e }),
          [a],
        ),
        u = o.useMemo(
          () =>
            ({ children: e, ...o }) =>
              r.jsx(a.Field, {
                ...o,
                children: (o) =>
                  r.jsx(n.Provider, {
                    value: o,
                    children: e(Object.assign(o, t)),
                  }),
              }),
          [a],
        );
      return o.useMemo(
        () => Object.assign(a, { AppField: u, AppForm: c, ...l }),
        [a, u, c],
      );
    },
    withForm: function ({ render: e, props: t }) {
      return function (n) {
        return e({ ...t, ...n });
      };
    },
    withFieldGroup: function ({ render: e, props: t, defaultValues: n }) {
      return function (r) {
        const i = o.useMemo(
            () => ({
              form: r.form,
              fields: r.fields,
              defaultValues: n,
              formComponents: l,
            }),
            [r.form, r.fields],
          ),
          s = a.useFieldGroup(i);
        return e({ ...t, ...r, group: s });
      };
    },
    useTypedAppFormContext: function (e) {
      return c();
    },
    extendForm: function (r) {
      return e({
        fieldContext: n,
        formContext: s,
        fieldComponents: { ...t, ...r.fieldComponents },
        formComponents: { ...l, ...r.formComponents },
      });
    },
  };
}),
  (t.createFormHookContexts = function () {
    return {
      fieldContext: s,
      useFieldContext: function () {
        const e = o.useContext(s);
        if (!e)
          throw new Error(
            "`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`",
          );
        return e;
      },
      useFormContext: c,
      formContext: l,
    };
  });
