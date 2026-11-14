// vendor/module-18433.js — webpack module 18433
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.parseCookie = function (e) {
    const t = {};
    let n = 0;
    for (; n < e.length; ) {
      const r = e.indexOf("=", n);
      if (-1 === r) break;
      let o = e.indexOf(";", n);
      if (-1 === o) o = e.length;
      else if (o < r) {
        n = e.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      const i = e.slice(n, r).trim();
      if (void 0 === t[i]) {
        let n = e.slice(r + 1, o).trim();
        34 === n.charCodeAt(0) && (n = n.slice(1, -1));
        try {
          t[i] = -1 !== n.indexOf("%") ? decodeURIComponent(n) : n;
        } catch {
          t[i] = n;
        }
      }
      n = o + 1;
    }
    return t;
  });
