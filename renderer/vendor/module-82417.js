// vendor/module-82417.js — webpack module 82417
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCallSessionForm = void 0;
const r = n(54005 /* vendor/module-54005 */),
  o = n(51366 /* vendor/module-51366 */),
  i = n(21692 /* vendor/module-21692 */),
  a = n(63892 /* vendor/module-63892 */);
function s(e) {
  const [, t] = e;
  return t;
}
t.useCallSessionForm = (e) => {
  const t = (0, r.c)(7),
    { defaultValues: n, onSubmit: l, onInvalidSubmit: c, mock: u } = e;
  let d, p;
  return (
    t[0] !== u?.hideDescription || t[1] !== c || t[2] !== l
      ? ((d = async (e) => {
          const { value: t, formApi: n } = e,
            r = n.parseValuesWithSchema(a.callSessionFormSchema),
            o = !!u?.hideDescription && 0 === t.description.trim().length,
            [d] = Object.entries(r?.fields ?? {})
              .filter((e) => {
                const [t] = e;
                return !(o && "description" === t);
              })
              .flatMap(s);
          if (d) c?.(d.message);
          else
            try {
              await l({ value: t });
            } catch (e) {
              const t = e;
              if (!(t instanceof i.TRPCClientError)) throw t;
            }
        }),
        (t[0] = u?.hideDescription),
        (t[1] = c),
        (t[2] = l),
        (t[3] = d))
      : (d = t[3]),
    t[4] !== n || t[5] !== d
      ? ((p = { defaultValues: n, onSubmit: d }),
        (t[4] = n),
        (t[5] = d),
        (t[6] = p))
      : (p = t[6]),
    (0, o.useForm)(p)
  );
};
