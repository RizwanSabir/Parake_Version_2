// vendor/module-13046.js — webpack module 13046
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useJobPostScrape = function (e) {
  const t = (0, r.c)(28),
    {
      form: n,
      scrapeJobPost: l,
      onScrapingChange: c,
      onScraped: u,
      onPasteError: d,
    } = e,
    [p, f] = (0, o.useState)(""),
    [h, m] = (0, o.useState)(null),
    [g, y] = (0, o.useState)(0),
    [v, b] = (0, o.useState)(!1),
    S = l.isPending;
  let _, x, w;
  t[0] !== S || t[1] !== c
    ? ((_ = () => (
        c?.(S),
        () => {
          S && c?.(!1);
        }
      )),
      (x = [S, c]),
      (t[0] = S),
      (t[1] = c),
      (t[2] = _),
      (t[3] = x))
    : ((_ = t[2]), (x = t[3])),
    (0, o.useEffect)(_, x),
    t[4] !== p ? ((w = p.trim()), (t[4] = p), (t[5] = w)) : (w = t[5]);
  const E = w,
    T = !!h && h === E,
    k = !S && E.length > 0;
  let C;
  t[6] !== n || t[7] !== u || t[8] !== l
    ? ((C = async (e) => {
        let t;
        try {
          t = await l.mutateAsync({ url: e });
        } catch {
          return;
        }
        m(e),
          n.setFieldValue("title", t.companyName),
          n.setFieldValue("companyDomain", ""),
          n.setFieldValue("description", t.jobDescription),
          n.setFieldValue("jobPostUrl", e),
          y(s),
          b(!0),
          u?.();
      }),
      (t[6] = n),
      (t[7] = u),
      (t[8] = l),
      (t[9] = C))
    : (C = t[9]);
  const I = C;
  let A;
  t[10] !== k || t[11] !== I || t[12] !== E
    ? ((A = async () => {
        k && (await I(E));
      }),
      (t[10] = k),
      (t[11] = I),
      (t[12] = E),
      (t[13] = A))
    : (A = t[13]);
  const O = A;
  let R;
  t[14] !== I || t[15] !== S || t[16] !== d
    ? ((R = async () => {
        if (S) return;
        const e =
          "undefined" == typeof navigator ? void 0 : navigator.clipboard;
        if (!e?.readText) return void d?.(i);
        let t;
        try {
          t = await e.readText();
        } catch {
          return void d?.(i);
        }
        const n = (function (e) {
          const t = e.trim();
          if (!t || /\s/.test(t)) return null;
          let n;
          try {
            n = new URL(/^https?:\/\//i.test(t) ? t : `https://${t}`);
          } catch {
            return null;
          }
          return n.hostname.includes(".") ? n.href : null;
        })(t);
        n ? (f(n), await I(n)) : d?.(a);
      }),
      (t[14] = I),
      (t[15] = S),
      (t[16] = d),
      (t[17] = R))
    : (R = t[17]);
  const M = R;
  let P, N;
  return (
    t[18] === Symbol.for("react.memo_cache_sentinel")
      ? ((P = () => b(!1)), (t[18] = P))
      : (P = t[18]),
    t[19] !== v ||
    t[20] !== k ||
    t[21] !== T ||
    t[22] !== S ||
    t[23] !== M ||
    t[24] !== O ||
    t[25] !== g ||
    t[26] !== p
      ? ((N = {
          url: p,
          setUrl: f,
          isScraping: S,
          hasScrapedCurrentUrl: T,
          canScrape: k,
          scrape: O,
          pasteJobLink: M,
          scrapeGeneration: g,
          autoSearchCompany: v,
          settleCompany: P,
        }),
        (t[19] = v),
        (t[20] = k),
        (t[21] = T),
        (t[22] = S),
        (t[23] = M),
        (t[24] = O),
        (t[25] = g),
        (t[26] = p),
        (t[27] = N))
      : (N = t[27]),
    N
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = "Couldn't read your clipboard. Check your browser's permissions.",
  a = "No link on your clipboard. Copy the job post URL first.";
function s(e) {
  return e + 1;
}
