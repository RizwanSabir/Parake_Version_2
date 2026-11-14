// vendor/other/module-91711.js — webpack module 91711
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.ke = t.Ev = void 0),
  (t.scrub = s),
  (t.createBeforeSend = function ({ appFramePatterns: e }) {
    return function (t) {
      return (e &&
        !r(t.tags?.code) &&
        (function (e, t) {
          const n = (function (e) {
            return (e.exception?.values ?? []).flatMap(
              (e) => e.stacktrace?.frames ?? [],
            );
          })(e);
          return (
            n.length > 0 &&
            n.every(
              ({ filename: e }) =>
                "string" == typeof e &&
                !e.startsWith("node:") &&
                !t.some((t) => t.test(e)),
            )
          );
        })(t, e)) ||
        i(
          "issue",
          (function (e) {
            const t = r(e.tags?.code);
            if (t) return JSON.stringify([t, ...(e.fingerprint ?? [])]);
            const [n] = e.exception?.values ?? [],
              o = n?.stacktrace?.frames ?? [],
              i = o[o.length - 1],
              s = [n?.type, i?.function, i?.filename, i?.lineno, i?.colno]
                .filter((e) => void 0 !== e)
                .map(String);
            return s.length > 0 ? s.join("|") : e.message;
          })(t),
        )
        ? null
        : (t.extra && (t.extra = s(t.extra)), t.request && u(t.request), t);
    };
  }),
  (t.beforeSendTransaction = function (e) {
    e.request && u(e.request), h(e.contexts?.trace?.data);
    for (const t of e.spans ?? []) h(t.data);
    return e;
  }),
  (t.beforeSendLog = function (e) {
    const t = r(e.attributes?.code);
    return t
      ? i("log", t)
        ? null
        : (e.attributes && (e.attributes = s(e.attributes)), e)
      : null;
  }),
  (t.beforeBreadcrumb = function (e) {
    if ("console" === e.category) return null;
    if (e.data) {
      e.data = s(e.data);
      for (const t of d) {
        const n = c(e.data[t]);
        void 0 !== n && (e.data[t] = n);
      }
      f(e.data);
    }
    return e;
  });
const n = new Set([
  "transcript",
  "transcripts",
  "content",
  "transcriptFormatted",
  "transcriptEvents",
  "question",
  "answer",
  "prompt",
  "resume",
  "resumes",
]);
function r(e) {
  return "string" == typeof e ? e : void 0;
}
(t.Ev = 5), (t.ke = 6e4);
const o = new Map();
function i(e, n) {
  if (!n) return !1;
  const r = `${e}:${n}`,
    i = Date.now(),
    s = o.get(r);
  return (
    s ||
      (function (e) {
        for (const [n, r] of o) e - r.windowStart >= t.ke && o.delete(n);
      })(i),
    !s || i - s.windowStart >= t.ke
      ? (o.set(r, { count: 1, windowStart: i }), !1)
      : ((s.count += 1), s.count > t.Ev)
  );
}
function s(e, t = 0) {
  return null === e || "object" != typeof e
    ? e
    : t >= 8
      ? "[truncated]"
      : Array.isArray(e)
        ? e.map((e) => s(e, t + 1))
        : Object.fromEntries(
            Object.entries(e).map(([e, r]) => [
              e,
              n.has(e) ? "[redacted]" : s(r, t + 1),
            ]),
          );
}
const a = new Set(["user-agent", "referer", "content-type", "content-length"]);
function c(e) {
  if ("string" != typeof e) return;
  const t = e.search(/[?#]/);
  return -1 === t ? e : e.slice(0, t);
}
function u(e) {
  const t = c(e.url);
  void 0 !== t && (e.url = t),
    delete e.query_string,
    delete e.data,
    delete e.cookies,
    e.headers &&
      (e.headers = Object.fromEntries(
        Object.entries(e.headers)
          .filter(([e]) => a.has(e.toLowerCase()))
          .map(([e, t]) =>
            "referer" === e.toLowerCase() ? [e, c(t) ?? t] : [e, t],
          ),
      ));
}
const l = ["url.full", "http.url", "http.target"],
  d = ["url", "from", "to"],
  p = ["url.query", "url.fragment", "http.query", "http.fragment"];
function f(e) {
  for (const t of p) delete e[t];
}
function h(e) {
  if (e) {
    for (const t of l) {
      const n = c(e[t]);
      void 0 !== n && (e[t] = n);
    }
    f(e);
  }
}
