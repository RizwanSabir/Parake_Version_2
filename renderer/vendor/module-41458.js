// vendor/module-41458.js — webpack module 41458
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useSelectedDocumentsSync = function (e) {
  const t = (0, r.c)(11);
  let n, l, c;
  t[0] !== e
    ? (({ form: c, documents: l, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = l),
      (t[3] = c))
    : ((n = t[1]), (l = t[2]), (c = t[3]));
  const u = !n.hasSavedSelection && n.hasLibraryError,
    { documentSelectionMode: d, selectedDocumentIds: p } = (0, o.useSelector)(
      c.store,
      s,
    );
  let f, h;
  t[4] !== d || t[5] !== l || t[6] !== c || t[7] !== u || t[8] !== p
    ? ((f = () => {
        if ("all" !== d) return;
        if (u && !l)
          return (
            c.setFieldValue("documentSelectionMode", "none"),
            void c.setFieldValue("selectedDocumentIds", [])
          );
        if (!l) return;
        const e = l.map(a);
        (e.length === p.length && e.every((e) => p.includes(e))) ||
          c.setFieldValue("selectedDocumentIds", e);
      }),
      (h = [d, p, l, u, c]),
      (t[4] = d),
      (t[5] = l),
      (t[6] = c),
      (t[7] = u),
      (t[8] = p),
      (t[9] = f),
      (t[10] = h))
    : ((f = t[9]), (h = t[10])),
    (0, i.useEffect)(f, h);
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(51366 /* vendor/module-51366 */),
  i = n(14041 /* vendor/module-14041 */);
function a(e) {
  return e.id;
}
function s(e) {
  return {
    documentSelectionMode: e.values.documentSelectionMode,
    selectedDocumentIds: e.values.selectedDocumentIds,
  };
}
