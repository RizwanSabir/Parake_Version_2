// vendor/module-70258.js — webpack module 70258
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCallSessionDetailsGate = function (e) {
  const t = (0, r.c)(12),
    { form: n, disabled: c, isScraping: u, isLoadingDocuments: d, mock: p } = e,
    f = void 0 !== c && c,
    h = (0, o.useSelector)(n.store, l),
    m = "interview" === h.sessionMode,
    g = !p?.hideDescription;
  let y, v;
  t[0] !== m || t[1] !== g || t[2] !== h.description || t[3] !== h.title
    ? ((y = m
        ? [
            ["title", 0 === h.title.trim().length],
            ["description", g && 0 === h.description.trim().length],
          ]
            .filter(s)
            .map(a)
        : []),
      (v =
        0 === y.length
          ? void 0
          : `${(function (e) {
              const t = e.map((e) => i[e]);
              return t.length <= 1
                ? t.join("")
                : `${t.slice(0, -1).join(", ")} and ${t[t.length - 1]}`;
            })(y)} ${1 === y.length ? "is" : "are"} required.`),
      (t[0] = m),
      (t[1] = g),
      (t[2] = h.description),
      (t[3] = h.title),
      (t[4] = y),
      (t[5] = v))
    : ((y = t[4]), (v = t[5]));
  const b = v,
    S = "all" === h.documentSelectionMode && d,
    _ = f
      ? "Please wait for your settings to load."
      : u
        ? "Please wait for the interview post to finish scraping."
        : S
          ? "Please wait for your documents to load."
          : void 0,
    x = _ ?? b,
    w = void 0 === x;
  let E;
  return (
    t[6] !== x || t[7] !== _ || t[8] !== y || t[9] !== b || t[10] !== w
      ? ((E = {
          canProceed: w,
          blockedReason: x,
          holdReason: _,
          missing: y,
          missingReason: b,
        }),
        (t[6] = x),
        (t[7] = _),
        (t[8] = y),
        (t[9] = b),
        (t[10] = w),
        (t[11] = E))
      : (E = t[11]),
    E
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(51366 /* vendor/module-51366 */),
  i = { title: "Company", description: "Job Description" };
function a(e) {
  const [t] = e;
  return t;
}
function s(e) {
  const [, t] = e;
  return t;
}
function l(e) {
  return {
    sessionMode: e.values.sessionMode,
    title: e.values.title,
    description: e.values.description,
    documentSelectionMode: e.values.documentSelectionMode,
  };
}
