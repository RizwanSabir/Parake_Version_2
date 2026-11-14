// vendor/other/module-80795.js — webpack module 80795
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = /[^\s(,;)]+/.source,
  r = new RegExp(
    `^\\s*(?<operation>(?:CREATE|DROP)\\s+(?:TABLE|INDEX)|ALTER\\s+TABLE)(?:\\s+IF\\s+(?:NOT\\s+)?EXISTS)?\\s+(?<table>${n})`,
    "i",
  ),
  o = new RegExp(
    `^\\s*(?<operation>INSERT|REPLACE)(?:\\s+OR\\s+(?:ROLLBACK|ABORT|FAIL|IGNORE|REPLACE))?\\s+INTO\\s+(?<table>${n})`,
    "i",
  ),
  i = new RegExp(
    `^\\s*(?<operation>UPDATE)(?:\\s+OR\\s+(?:ROLLBACK|ABORT|FAIL|IGNORE|REPLACE))?\\s+(?<table>${n})`,
    "i",
  ),
  s = new RegExp(`^\\s*(?<operation>DELETE)\\s+FROM\\s+(?<table>${n})`, "i"),
  a = /^\s*\(?\s*(?<operation>SELECT)\b/i,
  c = /^\s*(?<operation>PRAGMA)\s+(?<command>\S+)/i,
  u =
    /\b(?:FROM|JOIN)\s+|\(\s*(SELECT)\b|\b(?:UNION|INTERSECT|EXCEPT|MINUS)\s+(?:ALL\s+)?(SELECT)\b/gi,
  l = /^(?:"[^"]*"|'[^']*'|[^\s(,;)]+)/,
  d = /^\s*,\s*((?:"[^"]*"|'[^']*'|[^\s(,;)]+))/,
  p = /^\(\s*(SELECT)\b/i;
function f(e) {
  const t = [];
  let n;
  for (u.lastIndex = 0; null !== (n = u.exec(e)); ) {
    if (n[1] || n[2]) {
      t.push(n[1] || n[2]);
      continue;
    }
    const r = e.slice(n.index + n[0].length),
      o = p.exec(r);
    if (o?.[1]) {
      t.push(o[1]), (u.lastIndex = n.index + n[0].length + o[0].length);
      continue;
    }
    const i = l.exec(r);
    if (!i) continue;
    t.push(i[0]);
    let s,
      a = r.slice(i[0].length);
    for (; null !== (s = d.exec(a)) && s[1]; )
      t.push(s[1]), (a = a.slice(s[0].length));
  }
  return t;
}
function h(e) {
  if (e.length <= 255) return e;
  const t = e.substring(0, 255),
    n = t.lastIndexOf(" ");
  return n > 0 ? t.substring(0, n) : t;
}
t.getSqlQuerySummary = function (e) {
  if (!e) return;
  const t = c.exec(e);
  if (t?.groups?.operation && t.groups.command) {
    const e = t.groups.operation,
      n = t.groups.command,
      r = n.indexOf("(");
    return h(`${e} ${r >= 0 ? n.substring(0, r) : n}`);
  }
  const n = r.exec(e);
  if (n?.groups?.operation && n.groups.table)
    return h(`${n.groups.operation} ${n.groups.table}`);
  const u = o.exec(e);
  if (u?.groups?.operation && u.groups.table) {
    const t = [u.groups.operation, u.groups.table],
      n = e.slice(u[0].length),
      r = /\b(SELECT)\b/i.exec(n);
    if (r?.[1]) {
      t.push(r[1]);
      const e = f(n.slice(r.index));
      t.push(...e);
    }
    return h(t.join(" "));
  }
  const l = i.exec(e);
  if (l?.groups?.operation && l.groups.table)
    return h(`${l.groups.operation} ${l.groups.table}`);
  const d = s.exec(e);
  if (d?.groups?.operation && d.groups.table)
    return h(`${d.groups.operation} ${d.groups.table}`);
  const p = a.exec(e);
  if (p?.groups?.operation) {
    const t = f(e.slice(p[0].length));
    return t.length > 0
      ? h(`${p.groups.operation} ${t.join(" ")}`)
      : p.groups.operation;
  }
  return h(e.trim().split(/\s+/)[0] ?? e);
};
