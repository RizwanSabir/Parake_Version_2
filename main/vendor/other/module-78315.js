// vendor/other/module-78315.js — webpack module 78315
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(32314 /* vendor/other/module-32314 */),
  i = n(88695 /* vendor/other/module-88695 */),
  s = n(98695 /* vendor/other/module-98695 */);
function a(e) {
  if (void 0 !== e)
    return e
      .slice(-10)
      .reduce((e, t) => `${e},${t.function},${t.lineno},${t.colno}`, "");
}
function c(e, t) {
  if (void 0 !== t) return a(e(t, 1));
}
function u(e) {
  let t = [],
    n = !1;
  function r(r) {
    (t = []), n || ((n = !0), e(r));
  }
  return (
    t.push(r),
    {
      add: function (e) {
        t.push(e);
      },
      next: function (e) {
        const n = t.pop() || r;
        try {
          n(e);
        } catch {
          r(e);
        }
      },
    }
  );
}
class l {
  constructor(e) {
    this._session = e;
  }
  static async create(e) {
    if (e) return e;
    const t = await Promise.resolve().then(n.t.bind(n, 86592, 23));
    return new l(new t.Session());
  }
  configureAndConnect(e, t) {
    this._session.connect(),
      this._session.on("Debugger.paused", (t) => {
        e(t, () => {
          this._session.post("Debugger.resume");
        });
      }),
      this._session.post("Debugger.enable"),
      this._session.post("Debugger.setPauseOnExceptions", {
        state: t ? "all" : "uncaught",
      });
  }
  setPauseOnExceptions(e) {
    this._session.post("Debugger.setPauseOnExceptions", {
      state: e ? "all" : "uncaught",
    });
  }
  getLocalVariables(e, t) {
    this._getProperties(e, (e) => {
      const { add: n, next: r } = u(t);
      for (const t of e)
        if (t.value?.objectId && "Array" === t.value.className) {
          const e = t.value.objectId;
          n((n) => this._unrollArray(e, t.name, n, r));
        } else if (t.value?.objectId && "Object" === t.value.className) {
          const e = t.value.objectId;
          n((n) => this._unrollObject(e, t.name, n, r));
        } else t.value && n((e) => this._unrollOther(t, e, r));
      r({});
    });
  }
  _getProperties(e, t) {
    this._session.post(
      "Runtime.getProperties",
      { objectId: e, ownProperties: !0 },
      (e, n) => {
        t(e ? [] : n.result);
      },
    );
  }
  _unrollArray(e, t, n, r) {
    this._getProperties(e, (e) => {
      (n[t] = e
        .filter((e) => "length" !== e.name && !isNaN(parseInt(e.name, 10)))
        .sort((e, t) => parseInt(e.name, 10) - parseInt(t.name, 10))
        .map((e) => e.value?.value)),
        r(n);
    });
  }
  _unrollObject(e, t, n, r) {
    this._getProperties(e, (e) => {
      (n[t] = e
        .map((e) => [e.name, e.value?.value])
        .reduce((e, [t, n]) => ((e[t] = n), e), {})),
        r(n);
    });
  }
  _unrollOther(e, t, n) {
    e.value &&
      ("value" in e.value
        ? void 0 === e.value.value || null === e.value.value
          ? (t[e.name] = `<${e.value.value}>`)
          : (t[e.name] = e.value.value)
        : "description" in e.value && "function" !== e.value.type
          ? (t[e.name] = `<${e.value.description}>`)
          : "undefined" === e.value.type && (t[e.name] = "<undefined>")),
      n(t);
  }
}
const d = r.defineIntegration((e = {}, t) => {
  const n = new r.LRUMap(20);
  let d,
    p,
    f = !1;
  function h(t, r) {
    const o = a(t.stacktrace?.frames);
    if (void 0 === o) return;
    const i = n.remove(o);
    if (void 0 === i || !1 === r) return;
    const c = (t.stacktrace?.frames || []).filter(
      (e) => "new Promise" !== e.function,
    );
    for (let t = 0; t < c.length; t++) {
      const n = c.length - t - 1,
        o = i[t],
        a = c[n];
      if (!a || !o) break;
      void 0 === o.vars ||
        (!1 === a.in_app && !0 !== e.includeOutOfAppFrames) ||
        !s.functionNamesMatch(a.function, o.function) ||
        (a.vars = s.filterFrameVariables(o.vars, r));
    }
  }
  return {
    name: "LocalVariables",
    setupOnce() {
      p = (async function () {
        const a = r.getClient(),
          p = a?.getOptions();
        if (p?.includeLocalVariables)
          if (o.NODE_MAJOR < 18)
            r.debug.log(
              "The `LocalVariables` integration is only supported on Node >= v18.",
            );
          else if (await i.isDebuggerEnabled())
            r.debug.warn(
              "Local variables capture has been disabled because the debugger was already enabled",
            );
          else
            try {
              const o = await l.create(t),
                i = (
                  e,
                  { params: { reason: t, data: r, callFrames: i } },
                  s,
                ) => {
                  if ("exception" !== t && "promiseRejection" !== t)
                    return void s();
                  d?.();
                  const a = c(e, r.description);
                  if (null == a) return void s();
                  const { add: l, next: p } = u((e) => {
                    n.set(a, e), s();
                  });
                  for (let e = 0; e < Math.min(i.length, 5); e++) {
                    const { scopeChain: t, functionName: n, this: r } = i[e],
                      s = t.find((e) => "local" === e.type),
                      a =
                        "global" !== r.className && r.className
                          ? `${r.className}.${n}`
                          : n;
                    if (void 0 === s?.object.objectId)
                      l((t) => {
                        (t[e] = { function: a }), p(t);
                      });
                    else {
                      const t = s.object.objectId;
                      l((n) =>
                        o.getLocalVariables(t, (t) => {
                          (n[e] = { function: a, vars: t }), p(n);
                        }),
                      );
                    }
                  }
                  p([]);
                },
                a = !1 !== e.captureAllExceptions;
              if (
                (o.configureAndConnect((e, t) => i(p.stackParser, e, t), a), a)
              ) {
                const t = e.maxExceptionsPerSecond || 50;
                d = s.createRateLimiter(
                  t,
                  () => {
                    r.debug.log("Local variables rate-limit lifted."),
                      o.setPauseOnExceptions(!0);
                  },
                  (e) => {
                    r.debug.log(
                      `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${e} seconds.`,
                    ),
                      o.setPauseOnExceptions(!1);
                  },
                );
              }
              f = !0;
            } catch (e) {
              r.debug.log(
                "The `LocalVariables` integration failed to start.",
                e,
              );
            }
      })();
    },
    processEvent: async (e) => (
      await p,
      f
        ? (function (e) {
            for (const t of e.exception?.values || [])
              h(
                t,
                r.getClient()?.getDataCollectionOptions().stackFrameVariables ??
                  !0,
              );
            return e;
          })(e)
        : e
    ),
    _getCachedFramesCount: () => n.size,
    _getFirstCachedFrame: () => n.values()[0],
  };
});
(t.createCallbackList = u),
  (t.hashFrames = a),
  (t.hashFromStack = c),
  (t.localVariablesSyncIntegration = d);
