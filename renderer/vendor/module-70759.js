// vendor/module-70759.js — webpack module 70759
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.describeDocument = function (e) {
  const t = [],
    n = e.mimeType ? (0, r.getExtensionFromMimeType)(e.mimeType) : null;
  return (
    n && t.push(a[n] ?? n.slice(1).toUpperCase()),
    null != e.fileSizeBytes && t.push((0, o.formatFileSize)(e.fileSizeBytes)),
    e.createdAt &&
      t.push(`added ${(0, i.formatRelativeDate)(new Date(e.createdAt))}`),
    t.length > 0 ? t.join(" · ") : void 0
  );
}),
  (t.summarizeDocuments = function (e) {
    const t = e
        .slice(0, 2)
        .map((e) => e.title)
        .join(", "),
      n = e.length - Math.min(e.length, 2);
    return n > 0 ? `${t} +${n}` : t;
  }),
  (t.describeDocuments = function (e) {
    const t = `${e.length} document${1 === e.length ? "" : "s"}`,
      n = e.map((e) => e.fileSizeBytes);
    if (n.some((e) => null == e)) return t;
    const r = n.reduce((e, t) => e + (t ?? 0), 0);
    return `${t} · ${(0, o.formatFileSize)(r)}`;
  });
const r = n(65013 /* vendor/module-65013 */),
  o = n(26960 /* vendor/module-26960 */),
  i = n(76148 /* vendor/module-76148 */),
  a = {
    ".pdf": "PDF",
    ".docx": "DOCX",
    ".xlsx": "XLSX",
    ".txt": "TXT",
    ".md": "Markdown",
  };
