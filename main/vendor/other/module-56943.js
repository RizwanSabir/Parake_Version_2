// vendor/other/module-56943.js — webpack module 56943
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(32517 /* vendor/other/module-32517 */);
(t._redisOptions = {}),
  (t.cacheResponseHook = (e, n, i, s) => {
    const a = o.getCacheKeySafely(n, i),
      c = o.getCacheOperation(n);
    if (
      !(
        a &&
        c &&
        t._redisOptions.cachePrefixes &&
        o.shouldConsiderForCache(n, a, t._redisOptions.cachePrefixes)
      )
    )
      return;
    const u = r.spanToJSON(e).data,
      l = u["net.peer.name"] ?? u["server.address"],
      d = u["net.peer.port"] ?? u["server.port"];
    d &&
      l &&
      e.setAttributes({
        "network.peer.address": l,
        "network.peer.port": d,
      });
    const p = o.isInCommands(o.REMOVE_COMMANDS, n)
      ? void 0
      : o.calculateCacheItemSize(s);
    p && e.setAttribute(r.SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, p),
      o.isInCommands(o.GET_COMMANDS, n) &&
        void 0 !== p &&
        e.setAttribute(r.SEMANTIC_ATTRIBUTE_CACHE_HIT, p > 0),
      e.setAttributes({
        [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: c,
        [r.SEMANTIC_ATTRIBUTE_CACHE_KEY]: a,
      });
    const f = a.join(", ");
    e.updateName(
      t._redisOptions.maxCacheKeyLength
        ? r.truncate(f, t._redisOptions.maxCacheKeyLength)
        : f,
    );
  }),
  (t.setRedisOptions = function (e) {
    t._redisOptions = e;
  });
