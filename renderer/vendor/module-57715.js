// vendor/module-57715.js — webpack module 57715
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, { QueryCache: () => f }),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(26036 /* vendor/module-26036 */),
  u = n(51523 /* vendor/module-51523 */),
  d = n(46783 /* vendor/module-46783 */),
  p = n(67650 /* vendor/module-67650 */),
  f = class extends p.Subscribable {
    constructor(e = {}) {
      super(), (this.config = e), (this.#D = new Map());
    }
    #D;
    build(e, t, n) {
      const r = t.queryKey,
        o = t.queryHash ?? (0, c.hashQueryKeyByOptions)(r, t);
      let i = this.get(o);
      return (
        i ||
          ((i = new u.Query({
            client: e,
            queryKey: r,
            queryHash: o,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(i)),
        i
      );
    }
    add(e) {
      this.#D.has(e.queryHash) ||
        (this.#D.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      const t = this.#D.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#D.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      d.notifyManager.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#D.get(e);
    }
    getAll() {
      return [...this.#D.values()];
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((e) => (0, c.matchQuery)(t, e));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0
        ? t.filter((t) => (0, c.matchQuery)(e, t))
        : t;
    }
    notify(e) {
      d.notifyManager.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      d.notifyManager.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      d.notifyManager.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  };
