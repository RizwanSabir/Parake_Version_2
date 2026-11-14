// vendor/other/module-86135.js — webpack module 86135
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = [
  { regex: /^ECHO/i, args: 0 },
  {
    regex: /^(LPUSH|MSET|PFA|PUBLISH|RPUSH|SADD|SET|SPUBLISH|XADD|ZADD)/i,
    args: 1,
  },
  { regex: /^(HSET|HMSET|LSET|LINSERT)/i, args: 2 },
  {
    regex:
      /^(ACL|BIT|B[LRZ]|CLIENT|CLUSTER|CONFIG|COMMAND|DECR|DEL|EVAL|EX|FUNCTION|GEO|GET|HINCR|HMGET|HSCAN|INCR|L[TRLM]|MEMORY|P[EFISTU]|RPOP|S[CDIMORSU]|XACK|X[CDGILPRT]|Z[CDILMPRS])/i,
    args: -1,
  },
];
t.defaultDbStatementSerializer = (e, t) => {
  if (Array.isArray(t) && t.length) {
    const r = n.find(({ regex: t }) => t.test(e))?.args ?? 0,
      o = r >= 0 ? t.slice(0, r) : t.slice();
    return (
      t.length > o.length && o.push(`[${t.length - r} other arguments]`),
      `${e} ${o.join(" ")}`
    );
  }
  return e;
};
