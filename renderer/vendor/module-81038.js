// vendor/module-81038.js — webpack module 81038
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
})(l, { MutationCache: () => f }),
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
var c = n(46783 /* vendor/module-46783 */),
  u = n(95080 /* vendor/module-95080 */),
  d = n(26036 /* vendor/module-26036 */),
  p = n(67650 /* vendor/module-67650 */),
  f = class extends p.Subscribable {
    constructor(e = {}) {
      super(),
        (this.config = e),
        (this.#T = new Set()),
        (this.#k = new Map()),
        (this.#C = 0);
    }
    #T;
    #k;
    #C;
    build(e, t, n) {
      const r = new u.Mutation({
        client: e,
        mutationCache: this,
        mutationId: ++this.#C,
        options: e.defaultMutationOptions(t),
        state: n,
      });
      return this.add(r), r;
    }
    add(e) {
      this.#T.add(e);
      const t = h(e);
      if ("string" == typeof t) {
        const n = this.#k.get(t);
        n ? n.push(e) : this.#k.set(t, [e]);
      }
      this.notify({ type: "added", mutation: e });
    }
    remove(e) {
      if (this.#T.delete(e)) {
        const t = h(e);
        if ("string" == typeof t) {
          const n = this.#k.get(t);
          if (n)
            if (n.length > 1) {
              const t = n.indexOf(e);
              -1 !== t && n.splice(t, 1);
            } else n[0] === e && this.#k.delete(t);
        }
      }
      this.notify({ type: "removed", mutation: e });
    }
    canRun(e) {
      const t = h(e);
      if ("string" == typeof t) {
        const n = this.#k.get(t),
          r = n?.find((e) => "pending" === e.state.status);
        return !r || r === e;
      }
      return !0;
    }
    runNext(e) {
      const t = h(e);
      if ("string" == typeof t) {
        const n = this.#k.get(t)?.find((t) => t !== e && t.state.isPaused);
        return n?.continue() ?? Promise.resolve();
      }
      return Promise.resolve();
    }
    clear() {
      c.notifyManager.batch(() => {
        this.#T.forEach((e) => {
          this.notify({ type: "removed", mutation: e });
        }),
          this.#T.clear(),
          this.#k.clear();
      });
    }
    getAll() {
      return Array.from(this.#T);
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((e) => (0, d.matchMutation)(t, e));
    }
    findAll(e = {}) {
      return this.getAll().filter((t) => (0, d.matchMutation)(e, t));
    }
    notify(e) {
      c.notifyManager.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    resumePausedMutations() {
      const e = this.getAll().filter((e) => e.state.isPaused);
      return c.notifyManager.batch(() =>
        Promise.all(e.map((e) => e.continue().catch(d.noop))),
      );
    }
  };
function h(e) {
  return e.options.scope?.id;
}
