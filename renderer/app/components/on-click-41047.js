// app/components/on-click-41047.js — webpack module 41047
// params: (e, t, n) = (module, exports, require)
"use strict";
t.InterviewCallDetails = function (e) {
  const t = (0, o.c)(26),
    {
      form: n,
      title: g,
      description: y,
      onScrapingChange: v,
      scrapeJobPost: b,
      searchCompanies: S,
      companyDomain: _,
      getLogoUrl: x,
      disabled: w,
      hideDescription: E,
    } = e,
    T = void 0 !== E && E,
    [k, C] = (0, a.useState)(!1),
    [I, A] = (0, a.useState)(!1);
  let O, R;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((O = () => {
        A(!0), C(!1);
      }),
      (t[0] = O))
    : (O = t[0]),
    t[1] !== n || t[2] !== v || t[3] !== b
      ? ((R = {
          form: n,
          scrapeJobPost: b,
          onScrapingChange: v,
          onScraped: O,
        }),
        (t[1] = n),
        (t[2] = v),
        (t[3] = b),
        (t[4] = R))
      : (R = t[4]);
  const {
      url: M,
      setUrl: P,
      isScraping: N,
      hasScrapedCurrentUrl: D,
      canScrape: j,
      scrape: L,
    } = (0, m.useJobPostScrape)(R),
    F = w || N,
    U = F || !j,
    B = D ? "Retry" : "Fill fields";
  let z;
  t[5] !== D
    ? ((z = D
        ? (0, r.jsx)(i.RefreshCcw, { className: "size-4" })
        : (0, r.jsx)(i.ArrowRight, { className: "size-4" })),
      (t[5] = D),
      (t[6] = z))
    : (z = t[6]);
  const H = z;
  let V;
  return (
    t[7] !== _ ||
    t[8] !== y ||
    t[9] !== w ||
    t[10] !== n ||
    t[11] !== x ||
    t[12] !== T ||
    t[13] !== F ||
    t[14] !== k ||
    t[15] !== N ||
    t[16] !== M ||
    t[17] !== I ||
    t[18] !== L ||
    t[19] !== H ||
    t[20] !== B ||
    t[21] !== U ||
    t[22] !== S ||
    t[23] !== P ||
    t[24] !== g
      ? ((V = (0, r.jsx)(r.Fragment, {
          children: k
            ? (0, r.jsxs)("div", {
                className: "flex flex-col gap-y-2",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, r.jsx)(c.LabelWithTooltip, {
                        tooltip:
                          "Paste an interview post URL and we'll auto-fill the company name and interview description.",
                        children: (0, r.jsxs)("span", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, r.jsx)(i.Link2, {
                              className: "h-4 w-4",
                            }),
                            "Interview Post URL",
                          ],
                        }),
                      }),
                      (0, r.jsxs)("button", {
                        type: "button",
                        className:
                          "text-muted-foreground flex cursor-pointer items-center gap-1 text-xs leading-none hover:underline disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:no-underline",
                        onClick: () => C(!1),
                        disabled: N,
                        children: [
                          (0, r.jsx)(i.Pencil, {
                            className: "h-3.5 w-3.5 shrink-0",
                          }),
                          "Fill fields manually",
                          (0, r.jsx)(i.ArrowRight, {
                            className: "h-3.5 w-3.5 shrink-0",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-x-2",
                    children: [
                      (0, r.jsx)(d.Input, {
                        placeholder: "https://company.com/jobs/123",
                        value: M,
                        onChange: (e) => P(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" === e.key &&
                            (e.preventDefault(), e.stopPropagation(), L());
                        },
                        disabled: F,
                        autoFocus: !0,
                      }),
                      (0, r.jsxs)(u.Button, {
                        type: "button",
                        variant: "outline",
                        onClick: () => {
                          L();
                        },
                        disabled: U,
                        children: [
                          B,
                          N
                            ? (0, r.jsx)(p.Spinner, {
                                className: "size-4",
                              })
                            : H,
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(l.FieldWithCount, {
                    label: (0, r.jsx)(c.LabelWithTooltip, {
                      tooltip:
                        "Enter the name of the company you're interviewing. This helps the AI provide relevant suggestions and answers.",
                      children: (0, r.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, r.jsx)(i.Briefcase, {
                            className: "h-4 w-4",
                          }),
                          "Company",
                        ],
                      }),
                    }),
                    labelEnd: (0, r.jsxs)("button", {
                      type: "button",
                      className:
                        "text-muted-foreground flex cursor-pointer items-center gap-1 text-xs leading-none hover:underline disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:no-underline",
                      onClick: () => {
                        A(!1), C(!0);
                      },
                      disabled: w,
                      children: [
                        (0, r.jsx)(i.Sparkles, {
                          className: "h-3.5 w-3.5 shrink-0",
                        }),
                        "Fill fields from Interview Post URL",
                        (0, r.jsx)(i.ArrowRight, {
                          className: "h-3.5 w-3.5 shrink-0",
                        }),
                      ],
                    }),
                    value: g,
                    limit: s.limits.sessionTitle,
                    children: (0, r.jsx)(h.CompanyCombobox, {
                      value: g,
                      onValueChange: (e) => n.setFieldValue("title", e),
                      onSelect: (e) => {
                        n.setFieldValue("title", e.name),
                          n.setFieldValue("companyDomain", e.domain);
                      },
                      onClearDomain: () => n.setFieldValue("companyDomain", ""),
                      selectedDomain: _,
                      getLogoUrl: x,
                      searchCompanies: S,
                      autoSearchOnMount: I,
                      disabled: w,
                      placeholder: "Acme...",
                      maxLength: s.limits.sessionTitle.max,
                    }),
                  }),
                  !T &&
                    (0, r.jsx)(l.FieldWithCount, {
                      label: (0, r.jsx)(c.LabelWithTooltip, {
                        tooltip:
                          "Description of the interview you're preparing for. This provides additional context for the AI.",
                        children: (0, r.jsxs)("span", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, r.jsx)(i.FileText, {
                              className: "h-4 w-4",
                            }),
                            "Interview Description",
                          ],
                        }),
                      }),
                      value: y,
                      limit: s.limits.jobDescription,
                      children: (0, r.jsx)(f.Textarea, {
                        placeholder:
                          "Software Engineer versed in Python, SQL, and AWS...",
                        value: y,
                        onChange: (e) =>
                          n.setFieldValue("description", e.target.value),
                        className: "max-h-35",
                        disabled: w,
                        required: !0,
                      }),
                    }),
                ],
              }),
        })),
        (t[7] = _),
        (t[8] = y),
        (t[9] = w),
        (t[10] = n),
        (t[11] = x),
        (t[12] = T),
        (t[13] = F),
        (t[14] = k),
        (t[15] = N),
        (t[16] = M),
        (t[17] = I),
        (t[18] = L),
        (t[19] = H),
        (t[20] = B),
        (t[21] = U),
        (t[22] = S),
        (t[23] = P),
        (t[24] = g),
        (t[25] = V))
      : (V = t[25]),
    V
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(45482 /* vendor/module-45482 */),
  l = n(7696 /* app/components/field-with-count */),
  c = n(63110 /* app/components/label-with-tooltip */),
  u = n(66244 /* app/components/button-variants */),
  d = n(91722 /* app/components/input */),
  p = n(15201 /* app/components/spinner */),
  f = n(6826 /* app/components/textarea */),
  h = n(58784 /* app/components/on-click-58784 */),
  m = n(13046 /* vendor/module-13046 */);
