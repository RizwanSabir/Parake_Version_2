// vendor/other/module-28955.js — webpack module 28955
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23693 /* vendor/other/module-23693 */),
  o = 2e4,
  i = (e) => new TextEncoder().encode(e).length,
  s = (e) => i(JSON.stringify(e));
function a(e, t) {
  if (i(e) <= t) return e;
  let n = 0,
    r = e.length,
    o = "";
  for (; n <= r; ) {
    const s = Math.floor((n + r) / 2),
      a = e.slice(0, s);
    i(a) <= t ? ((o = a), (n = s + 1)) : (r = s - 1);
  }
  return o;
}
function c(e) {
  return "string" == typeof e
    ? e
    : "text" in e && "string" == typeof e.text
      ? e.text
      : "";
}
function u(e, t) {
  return "string" == typeof e ? t : { ...e, text: t };
}
function l(e) {
  return (
    null !== e &&
    "object" == typeof e &&
    "content" in e &&
    Array.isArray(e.content)
  );
}
function d(e) {
  return (
    null !== e &&
    "object" == typeof e &&
    "parts" in e &&
    Array.isArray(e.parts) &&
    e.parts.length > 0
  );
}
function p(e, t) {
  if (!e) return [];
  if ("string" == typeof e) {
    const n = a(e, t);
    return n ? [n] : [];
  }
  return "object" != typeof e
    ? []
    : (function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "content" in e &&
            "string" == typeof e.content
          );
        })(e)
      ? (function (e, t) {
          const n = { ...e, content: "" },
            r = t - s(n);
          if (r <= 0) return [];
          const o = a(e.content, r);
          return [{ ...e, content: o }];
        })(e, t)
      : l(e) || d(e)
        ? (function (e, t) {
            const { key: n, items: r } = (function (e) {
              return "parts" in e && Array.isArray(e.parts)
                ? { key: "parts", items: e.parts }
                : "content" in e && Array.isArray(e.content)
                  ? { key: "content", items: e.content }
                  : { key: null, items: [] };
            })(e);
            if (null === n || 0 === r.length) return [];
            const o = r.map((e) => u(e, ""));
            let l = t - s({ ...e, [n]: o });
            if (l <= 0) return [];
            const d = [];
            for (const e of r) {
              const t = c(e),
                n = i(t);
              if (!(n <= l)) {
                if (0 === d.length) {
                  const n = a(t, l);
                  n && d.push(u(e, n));
                  break;
                }
                break;
              }
              d.push(e), (l -= n);
            }
            return d.length <= 0 ? [] : [{ ...e, [n]: d }];
          })(e, t)
        : [];
}
function f(e) {
  return e.map((e) => {
    let t;
    return (
      e &&
        "object" == typeof e &&
        (l(e)
          ? (t = { ...e, content: f(e.content) })
          : "content" in e &&
            r.isContentMedia(e.content) &&
            (t = {
              ...e,
              content: r.stripInlineMediaFromSingleMessage(e.content),
            }),
        d(e) && (t = { ...(t ?? e), parts: f(e.parts) }),
        r.isContentMedia(t)
          ? (t = r.stripInlineMediaFromSingleMessage(t))
          : r.isContentMedia(e) &&
            (t = r.stripInlineMediaFromSingleMessage(e))),
      t ?? e
    );
  });
}
function h(e, t) {
  if (!Array.isArray(e) || 0 === e.length) return e;
  const n = t - 2,
    r = f([e[e.length - 1]]),
    o = r[0];
  return s(o) <= n ? r : p(o, n);
}
(t.DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = o),
  (t.truncateGenAiMessages = function (e) {
    return h(e, o);
  }),
  (t.truncateGenAiStringInput = function (e) {
    return a(e, o);
  });
