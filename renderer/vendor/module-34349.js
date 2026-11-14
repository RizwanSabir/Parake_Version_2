// vendor/module-34349.js — webpack module 34349
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.onExit =
    t.onError =
    t.never =
    t.matchEffect =
    t.matchCauseEffect =
    t.matchCause =
    t.match =
    t.mapErrorCause =
    t.mapError =
    t.map =
    t.let =
    t.isMicroExit =
    t.isMicroCause =
    t.isMicro =
    t.interruptible =
    t.interrupt =
    t.ignoreLogged =
    t.ignore =
    t.gen =
    t.fromOption =
    t.fromEither =
    t.forkScoped =
    t.forkIn =
    t.forkDaemon =
    t.fork =
    t.forever =
    t.forEach =
    t.flip =
    t.flatten =
    t.flatMap =
    t.filterOrFailCause =
    t.filterOrFail =
    t.filterMap =
    t.filter =
    t.fiberJoin =
    t.fiberInterruptAll =
    t.fiberInterrupt =
    t.fiberAwait =
    t.failSync =
    t.failCauseSync =
    t.failCause =
    t.fail =
    t.exitVoidAll =
    t.exitVoid =
    t.exitSucceed =
    t.exitIsSuccess =
    t.exitIsInterrupt =
    t.exitIsFailure =
    t.exitIsFail =
    t.exitIsDie =
    t.exitInterrupt =
    t.exitFailCause =
    t.exitFail =
    t.exitDie =
    t.exit =
    t.ensuring =
    t.either =
    t.die =
    t.delay =
    t.context =
    t.causeWithTrace =
    t.causeSquash =
    t.causeIsInterrupt =
    t.causeIsFail =
    t.causeIsDie =
    t.causeInterrupt =
    t.causeFail =
    t.causeDie =
    t.catchTag =
    t.catchIf =
    t.catchCauseIf =
    t.catchAllDefect =
    t.catchAllCause =
    t.catchAll =
    t.bindTo =
    t.bind =
    t.async =
    t.asVoid =
    t.asSome =
    t.as =
    t.andThen =
    t.all =
    t.addFinalizer =
    t.acquireUseRelease =
    t.acquireRelease =
    t.TypeId =
    t.TimeoutException =
    t.TaggedError =
    t.NoSuchElementException =
    t.MicroScopeTypeId =
    t.MicroScope =
    t.MicroSchedulerDefault =
    t.MicroFiberTypeId =
    t.MicroExitTypeId =
    t.MicroCauseTypeId =
    t.MaxOpsBeforeYield =
    t.Error =
    t.Do =
    t.CurrentScheduler =
    t.CurrentConcurrency =
      void 0),
  (t.zipWith =
    t.zip =
    t.yieldNowWith =
    t.yieldNow =
    t.yieldFlush =
    t.withTrace =
    t.withMicroFiber =
    t.withConcurrency =
    t.whileLoop =
    t.when =
    t.void =
    t.updateService =
    t.updateContext =
    t.uninterruptibleMask =
    t.uninterruptible =
    t.tryPromise =
    t.try =
    t.timeoutOrElse =
    t.timeoutOption =
    t.timeout =
    t.tapErrorCauseIf =
    t.tapErrorCause =
    t.tapError =
    t.tapDefect =
    t.tap =
    t.sync =
    t.suspend =
    t.succeedSome =
    t.succeedNone =
    t.succeed =
    t.sleep =
    t.serviceOption =
    t.service =
    t.scoped =
    t.scopeUnsafeMake =
    t.scopeMake =
    t.scope =
    t.scheduleWithMaxElapsed =
    t.scheduleWithMaxDelay =
    t.scheduleUnion =
    t.scheduleSpaced =
    t.scheduleRecurs =
    t.scheduleIntersect =
    t.scheduleExponential =
    t.scheduleAddDelay =
    t.sandbox =
    t.runSyncExit =
    t.runSync =
    t.runPromiseExit =
    t.runPromise =
    t.runFork =
    t.retry =
    t.replicateEffect =
    t.replicate =
    t.repeatExit =
    t.repeat =
    t.raceFirst =
    t.raceAllFirst =
    t.raceAll =
    t.race =
    t.provideServiceEffect =
    t.provideService =
    t.provideScope =
    t.provideContext =
    t.promise =
    t.orElseSucceed =
    t.orDie =
    t.option =
    t.onInterrupt =
    t.onExitIf =
      void 0);
var r = b(n(33044 /* vendor/module-33044 */)),
  o = b(n(426 /* vendor/module-426 */)),
  i = b(n(92012 /* vendor/module-92012 */)),
  a = b(n(77720 /* vendor/module-77720 */)),
  s = b(n(92957 /* vendor/module-92957 */)),
  l = n(74109 /* vendor/module-74109 */),
  c = n(4001 /* vendor/module-4001 */),
  u = b(n(63101 /* vendor/module-63101 */)),
  d = n(96089 /* vendor/module-96089 */),
  p = b(n(31204 /* vendor/module-31204 */)),
  f = b(n(64184 /* vendor/module-64184 */)),
  h = n(76102 /* vendor/module-76102 */),
  m = b(n(37168 /* vendor/module-37168 */)),
  g = n(54281 /* vendor/module-54281 */),
  y = n(84552 /* vendor/module-84552 */),
  v = n(76027 /* vendor/module-76027 */);
function b(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (b = function (e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      a = { __proto__: null, default: e };
    if (null === e || ("object" != typeof e && "function" != typeof e))
      return a;
    if ((o = t ? r : n)) {
      if (o.has(e)) return o.get(e);
      o.set(e, a);
    }
    for (const t in e)
      "default" !== t &&
        {}.hasOwnProperty.call(e, t) &&
        ((i =
          (o = Object.defineProperty) &&
          Object.getOwnPropertyDescriptor(e, t)) &&
        (i.get || i.set)
          ? o(a, t, i)
          : (a[t] = e[t]));
    return a;
  })(e, t);
}
const S = (t.TypeId = Symbol.for("effect/Micro")),
  _ = (t.MicroExitTypeId = Symbol.for("effect/Micro/MicroExit")),
  x = (e) => "object" == typeof e && null !== e && S in e;
t.isMicro = x;
const w = (t.MicroCauseTypeId = Symbol.for("effect/Micro/MicroCause"));
t.isMicroCause = (e) => (0, y.hasProperty)(e, w);
const E = { _E: l.identity };
class T extends globalThis.Error {
  _tag;
  traces;
  [w];
  constructor(e, t, n) {
    const r = `MicroCause.${e}`;
    let o, i, a;
    if (t instanceof globalThis.Error) {
      (o = `(${r}) ${t.name}`), (i = t.message);
      const e = i.split("\n").length;
      a = t.stack
        ? `(${r}) ${t.stack
            .split("\n")
            .slice(0, e + 3)
            .join("\n")}`
        : `${o}: ${i}`;
    } else (o = r), (i = (0, d.toStringUnknown)(t, 0)), (a = `${o}: ${i}`);
    n.length > 0 && (a += `\n    ${n.join("\n    ")}`),
      super(i),
      (this._tag = e),
      (this.traces = n),
      (this[w] = E),
      (this.name = o),
      (this.stack = a);
  }
  pipe() {
    return (0, g.pipeArguments)(this, arguments);
  }
  toString() {
    return this.stack;
  }
  [d.NodeInspectSymbol]() {
    return this.stack;
  }
}
class k extends T {
  error;
  constructor(e, t = []) {
    super("Fail", e, t), (this.error = e);
  }
}
const C = (e, t = []) => new k(e, t);
t.causeFail = C;
class I extends T {
  defect;
  constructor(e, t = []) {
    super("Die", e, t), (this.defect = e);
  }
}
const A = (e, t = []) => new I(e, t);
t.causeDie = A;
class O extends T {
  constructor(e = []) {
    super("Interrupt", "interrupted", e);
  }
}
const R = (e = []) => new O(e);
t.causeInterrupt = R;
const M = (e) => "Fail" === e._tag;
t.causeIsFail = M;
const P = (e) => "Die" === e._tag;
t.causeIsDie = P;
const N = (e) => "Interrupt" === e._tag;
(t.causeIsInterrupt = N),
  (t.causeSquash = (e) =>
    "Fail" === e._tag ? e.error : "Die" === e._tag ? e.defect : e);
const D = (t.causeWithTrace = (0, l.dual)(2, (e, t) => {
    const n = [...e.traces, t];
    switch (e._tag) {
      case "Die":
        return A(e.defect, n);
      case "Interrupt":
        return R(n);
      case "Fail":
        return C(e.error, n);
    }
  })),
  j = (t.MicroFiberTypeId = Symbol.for("effect/Micro/MicroFiber")),
  L = { _A: l.identity, _E: l.identity };
class F {
  context;
  interruptible;
  [j];
  _stack = [];
  _observers = [];
  _exit;
  _children;
  currentOpCount = 0;
  constructor(e, t = !0) {
    (this.context = e), (this.interruptible = t), (this[j] = L);
  }
  getRef(e) {
    return p.unsafeGetReference(this.context, e);
  }
  addObserver(e) {
    return this._exit
      ? (e(this._exit), l.constVoid)
      : (this._observers.push(e),
        () => {
          const t = this._observers.indexOf(e);
          t >= 0 && this._observers.splice(t, 1);
        });
  }
  _interrupted = !1;
  unsafeInterrupt() {
    this._exit ||
      ((this._interrupted = !0), this.interruptible && this.evaluate(Ne));
  }
  unsafePoll() {
    return this._exit;
  }
  evaluate(e) {
    if (this._exit) return;
    if (void 0 !== this._yielded) {
      const e = this._yielded;
      (this._yielded = void 0), e();
    }
    const t = this.runLoop(e);
    if (t === Z) return;
    const n = U.interruptChildren && U.interruptChildren(this);
    if (void 0 !== n) return this.evaluate(Ce(n, () => t));
    this._exit = t;
    for (let e = 0; e < this._observers.length; e++) this._observers[e](t);
    this._observers.length = 0;
  }
  runLoop(e) {
    let t = !1,
      n = e;
    this.currentOpCount = 0;
    try {
      for (;;) {
        if ((this.currentOpCount++, !t && this.getRef(Ye).shouldYield(this))) {
          t = !0;
          const e = n;
          n = Ce(ce, () => e);
        }
        if (((n = n[W](this)), n === Z)) {
          const e = this._yielded;
          return _ in e ? ((this._yielded = void 0), e) : Z;
        }
      }
    } catch (e) {
      return (0, y.hasProperty)(n, W)
        ? De(e)
        : De(`MicroFiber.runLoop: Not a valid effect: ${String(n)}`);
    }
  }
  getCont(e) {
    for (;;) {
      const t = this._stack.pop();
      if (!t) return;
      const n = t[K] && t[K](this);
      if (n) return { [e]: n };
      if (t[e]) return t;
    }
  }
  _yielded = void 0;
  yieldWith(e) {
    return (this._yielded = e), Z;
  }
  children() {
    return (this._children ??= new Set());
  }
}
const U = (0, c.globalValue)("effect/Micro/fiberMiddleware", () => ({
    interruptChildren: void 0,
  })),
  B = (e) => {
    if (void 0 !== e._children && 0 !== e._children.size) return V(e._children);
  },
  z = (e) => ge((t) => ae(e.addObserver((e) => t(re(e)))));
(t.fiberAwait = z), (t.fiberJoin = (e) => Ae(z(e)));
const H = (e) => se(() => (e.unsafeInterrupt(), xe(z(e))));
t.fiberInterrupt = H;
const V = (e) =>
  se(() => {
    for (const t of e) t.unsafeInterrupt();
    const t = e[Symbol.iterator](),
      n = se(() => {
        let e = t.next();
        for (; !e.done; ) {
          if (e.value.unsafePoll()) {
            e = t.next();
            continue;
          }
          const r = e.value;
          return ge((e) => {
            r.addObserver((t) => {
              e(n);
            });
          });
        }
        return Fe;
      });
    return n;
  });
t.fiberInterruptAll = V;
const q = Symbol.for("effect/Micro/identifier"),
  G = Symbol.for("effect/Micro/args"),
  W = Symbol.for("effect/Micro/evaluate"),
  $ = Symbol.for("effect/Micro/successCont"),
  Y = Symbol.for("effect/Micro/failureCont"),
  K = Symbol.for("effect/Micro/ensureCont"),
  Z = Symbol.for("effect/Micro/Yield"),
  Q = { _A: l.identity, _E: l.identity, _R: l.identity },
  J = {
    ...i.EffectPrototype,
    _op: "Micro",
    [S]: Q,
    pipe() {
      return (0, g.pipeArguments)(this, arguments);
    },
    [Symbol.iterator]() {
      return new v.SingleShotGen(new v.YieldWrap(this));
    },
    toJSON() {
      return {
        _id: "Micro",
        op: this[q],
        ...(G in this ? { args: this[G] } : void 0),
      };
    },
    toString() {
      return (0, d.format)(this);
    },
    [d.NodeInspectSymbol]() {
      return (0, d.format)(this);
    },
  };
function X(e) {
  return De("Micro.evaluate: Not implemented");
}
const ee = (e) => ({
    ...J,
    [q]: e.op,
    [W]: e.eval ?? X,
    [$]: e.contA,
    [Y]: e.contE,
    [K]: e.ensure,
  }),
  te = (e) => {
    const t = ee(e);
    return function () {
      const n = Object.create(t);
      return (n[G] = !1 === e.single ? arguments : arguments[0]), n;
    };
  },
  ne = (e) => {
    const t = {
      ...ee(e),
      [_]: _,
      _tag: e.op,
      get [e.prop]() {
        return this[G];
      },
      toJSON() {
        return { _id: "MicroExit", _tag: e.op, [e.prop]: this[G] };
      },
      [s.symbol](t) {
        return Re(t) && t._tag === e.op && s.equals(this[G], t[G]);
      },
      [u.symbol]() {
        return u.cached(this, u.combine(u.string(e.op))(u.hash(this[G])));
      },
    };
    return function (e) {
      const n = Object.create(t);
      return (n[G] = e), (n[$] = void 0), (n[Y] = void 0), (n[K] = void 0), n;
    };
  },
  re = (t.succeed = ne({
    op: "Success",
    prop: "value",
    eval(e) {
      const t = e.getCont($);
      return t ? t[$](this[G], e) : e.yieldWith(this);
    },
  })),
  oe = (t.failCause = ne({
    op: "Failure",
    prop: "cause",
    eval(e) {
      let t = e.getCont(Y);
      for (; N(this[G]) && t && e.interruptible; ) t = e.getCont(Y);
      return t ? t[Y](this[G], e) : e.yieldWith(this);
    },
  })),
  ie = (e) => oe(C(e));
t.fail = ie;
const ae = (t.sync = te({
    op: "Sync",
    eval(e) {
      const t = this[G](),
        n = e.getCont($);
      return n ? n[$](t, e) : e.yieldWith(Me(t));
    },
  })),
  se = (t.suspend = te({
    op: "Suspend",
    eval(e) {
      return this[G]();
    },
  })),
  le = (t.yieldNowWith = te({
    op: "Yield",
    eval(e) {
      let t = !1;
      return (
        e.getRef(Ye).scheduleTask(() => {
          t || e.evaluate(Fe);
        }, this[G] ?? 0),
        e.yieldWith(() => {
          t = !0;
        })
      );
    },
  })),
  ce = (t.yieldNow = le(0));
t.succeedSome = (e) => re(m.some(e));
const ue = (t.succeedNone = re(m.none()));
t.failCauseSync = (e) => se(() => oe(e()));
const de = (e) => De(e);
(t.die = de),
  (t.failSync = (e) => se(() => ie(e()))),
  (t.fromOption = (e) => ("Some" === e._tag ? re(e.value) : ie(new jt({})))),
  (t.fromEither = (e) => ("Right" === e._tag ? re(e.right) : ie(e.left)));
const pe = (t.void = re(void 0));
(t.try = (e) =>
  se(() => {
    try {
      return re(e.try());
    } catch (t) {
      return ie(e.catch(t));
    }
  })),
  (t.promise = (e) =>
    he(function (t, n) {
      e(n).then(
        (e) => t(re(e)),
        (e) => t(de(e)),
      );
    }, 0 !== e.length)),
  (t.tryPromise = (e) =>
    he(function (t, n) {
      try {
        e.try(n).then(
          (e) => t(re(e)),
          (n) => t(ie(e.catch(n))),
        );
      } catch (n) {
        t(ie(e.catch(n)));
      }
    }, 0 !== e.try.length));
const fe = (t.withMicroFiber = te({
    op: "WithMicroFiber",
    eval(e) {
      return this[G](e);
    },
  })),
  he =
    ((t.yieldFlush = fe((e) => (e.getRef(Ye).flush(), Fe))),
    te({
      op: "Async",
      single: !1,
      eval(e) {
        const t = this[G][0];
        let n = !1,
          r = !1;
        const o = this[G][1] ? new AbortController() : void 0,
          i = t((t) => {
            n || ((n = !0), r ? e.evaluate(t) : (r = t));
          }, o?.signal);
        return !1 !== r
          ? r
          : ((r = !0),
            (e._yielded = () => {
              n = !0;
            }),
            (void 0 === o && void 0 === i) ||
              e._stack.push(me(() => ((n = !0), o?.abort(), i ?? Fe))),
            Z);
      },
    })),
  me = te({
    op: "AsyncFinalizer",
    ensure(e) {
      e.interruptible && ((e.interruptible = !1), e._stack.push(St(!0)));
    },
    contE(e, t) {
      return N(e) ? Ce(this[G](), () => oe(e)) : oe(e);
    },
  }),
  ge = (e) => he(e, e.length >= 2);
(t.async = ge),
  (t.never = ge(function () {
    const e = setInterval(l.constVoid, 2147483646);
    return ae(() => clearInterval(e));
  })),
  (t.gen = (...e) => se(() => ye(1 === e.length ? e[0]() : e[1].call(e[0]))));
const ye = te({
    op: "Iterator",
    contA(e, t) {
      const n = this[G].next(e);
      return n.done
        ? re(n.value)
        : (t._stack.push(this), (0, v.yieldWrapGet)(n.value));
    },
    eval(e) {
      return this[$](void 0, e);
    },
  }),
  ve = (t.as = (0, l.dual)(2, (e, t) => Oe(e, (e) => t))),
  be = (e) => Oe(e, m.some);
(t.asSome = be), (t.flip = (e) => lt(e, { onFailure: re, onSuccess: ie }));
const Se = (t.andThen = (0, l.dual)(2, (e, t) =>
    Ce(e, (e) => {
      const n = x(t) ? t : "function" == typeof t ? t(e) : t;
      return x(n) ? n : re(n);
    }),
  )),
  _e = (t.tap = (0, l.dual)(2, (e, t) =>
    Ce(e, (e) => {
      const n = x(t) ? t : "function" == typeof t ? t(e) : t;
      return x(n) ? ve(n, e) : re(e);
    }),
  )),
  xe = (e) => Ce(e, (e) => Fe);
t.asVoid = xe;
const we = (e) => st(e, { onFailure: Pe, onSuccess: Me });
(t.exit = we), (t.sandbox = (e) => Xe(e, ie));
const Ee = (e) =>
  fe((t) =>
    ge((n) => {
      const o = r.fromIterable(e),
        i = o.length;
      let a = 0,
        s = !1;
      const l = new Set(),
        c = [],
        u = (e) => {
          if ((a++, "Failure" === e._tag))
            return c.push(e.cause), void (a >= i && n(oe(c[0])));
          (s = !0), n(0 === l.size ? e : Ce(bt(V(l)), () => e));
        };
      for (let e = 0; e < i && !s; e++) {
        const n = Ct(t, _t(o[e]), !0, !0);
        l.add(n),
          n.addObserver((e) => {
            l.delete(n), u(e);
          });
      }
      return V(l);
    }),
  );
t.raceAll = Ee;
const Te = (e) =>
  fe((t) =>
    ge((n) => {
      let r = !1;
      const o = new Set(),
        i = (e) => {
          (r = !0), n(0 === o.size ? e : Ce(V(o), () => e));
        };
      for (const n of e) {
        if (r) break;
        const e = Ct(t, _t(n), !0, !0);
        o.add(e),
          e.addObserver((t) => {
            o.delete(e), i(t);
          });
      }
      return V(o);
    }),
  );
(t.raceAllFirst = Te), (t.race = (0, l.dual)(2, (e, t) => Ee([e, t])));
const ke = (t.raceFirst = (0, l.dual)(2, (e, t) => Te([e, t]))),
  Ce = (t.flatMap = (0, l.dual)(2, (e, t) => {
    const n = Object.create(Ie);
    return (n[G] = e), (n[$] = t), n;
  })),
  Ie = ee({
    op: "OnSuccess",
    eval(e) {
      return e._stack.push(this), this[G];
    },
  }),
  Ae = (e) => Ce(e, l.identity);
t.flatten = Ae;
const Oe = (t.map = (0, l.dual)(2, (e, t) => Ce(e, (e) => re(t(e))))),
  Re = (e) => (0, y.hasProperty)(e, _);
t.isMicroExit = Re;
const Me = (t.exitSucceed = re),
  Pe = (t.exitFailCause = oe),
  Ne = (t.exitInterrupt = Pe(R()));
t.exitFail = (e) => Pe(C(e));
const De = (e) => Pe(A(e));
(t.exitDie = De), (t.exitIsSuccess = (e) => "Success" === e._tag);
const je = (e) => "Failure" === e._tag;
t.exitIsFailure = je;
const Le = (e) => je(e) && "Interrupt" === e.cause._tag;
(t.exitIsInterrupt = Le),
  (t.exitIsFail = (e) => je(e) && "Fail" === e.cause._tag),
  (t.exitIsDie = (e) => je(e) && "Die" === e.cause._tag);
const Fe = (t.exitVoid = Me(void 0)),
  Ue = (e) => {
    for (const t of e) if ("Failure" === t._tag) return t;
    return Fe;
  };
t.exitVoidAll = Ue;
const Be =
  "setImmediate" in globalThis
    ? globalThis.setImmediate
    : (e) => setTimeout(e, 0);
class ze {
  tasks = [];
  running = !1;
  scheduleTask(e, t) {
    this.tasks.push(e),
      this.running || ((this.running = !0), Be(this.afterScheduled));
  }
  afterScheduled = () => {
    (this.running = !1), this.runTasks();
  };
  runTasks() {
    const e = this.tasks;
    this.tasks = [];
    for (let t = 0, n = e.length; t < n; t++) e[t]();
  }
  shouldYield(e) {
    return e.currentOpCount >= e.getRef(We);
  }
  flush() {
    for (; this.tasks.length > 0; ) this.runTasks();
  }
}
t.MicroSchedulerDefault = ze;
const He = (e) => fe((t) => re(o.unsafeGet(t.context, e)));
(t.service = He),
  (t.serviceOption = (e) => fe((t) => re(o.getOption(t.context, e))));
const Ve = (t.updateContext = (0, l.dual)(2, (e, t) =>
  fe((n) => {
    const r = n.context;
    return (n.context = t(r)), gt(e, () => ((n.context = r), pe));
  }),
));
(t.updateService = (0, l.dual)(3, (e, t, n) =>
  fe((r) => {
    const i = o.unsafeGet(r.context, t);
    return (
      (r.context = o.add(r.context, t, n(i))),
      gt(e, () => ((r.context = o.add(r.context, t, i)), pe))
    );
  }),
)),
  (t.context = () => qe);
const qe = fe((e) => re(e.context)),
  Ge =
    ((t.provideContext = (0, l.dual)(2, (e, t) => Ve(e, o.merge(t)))),
    (t.provideService = (0, l.dual)(3, (e, t, n) => Ve(e, o.add(t, n)))));
t.provideServiceEffect = (0, l.dual)(3, (e, t, n) => Ce(n, (n) => Ge(e, t, n)));
class We extends o.Reference()("effect/Micro/currentMaxOpsBeforeYield", {
  defaultValue: () => 2048,
}) {}
t.MaxOpsBeforeYield = We;
class $e extends o.Reference()("effect/Micro/currentConcurrency", {
  defaultValue: () => "unbounded",
}) {}
t.CurrentConcurrency = $e;
class Ye extends o.Reference()("effect/Micro/currentScheduler", {
  defaultValue: () => new ze(),
}) {}
(t.CurrentScheduler = Ye),
  (t.withConcurrency = (0, l.dual)(2, (e, t) => Ge(e, $e, t))),
  (t.zip = (0, l.dual)(
    (e) => x(e[1]),
    (e, t, n) => Ke(e, t, (e, t) => [e, t], n),
  ));
const Ke = (t.zipWith = (0, l.dual)(
    (e) => x(e[1]),
    (e, t, n, r) =>
      r?.concurrent
        ? Oe(wt([e, t], { concurrency: 2 }), ([e, t]) => n(e, t))
        : Ce(e, (e) => Oe(t, (t) => n(e, t))),
  )),
  Ze =
    ((t.filterOrFailCause = (0, l.dual)(
      (e) => x(e[0]),
      (e, t, n) => Ce(e, (e) => (t(e) ? re(e) : oe(n(e)))),
    )),
    (t.filterOrFail = (0, l.dual)(
      (e) => x(e[0]),
      (e, t, n) => Ce(e, (e) => (t(e) ? re(e) : ie(n(e)))),
    )),
    (t.when = (0, l.dual)(2, (e, t) =>
      Ce(x(t) ? t : ae(t), (t) => (t ? be(e) : ue)),
    )),
    (t.repeatExit = (0, l.dual)(2, (e, t) =>
      se(() => {
        const n = t.schedule ? Date.now() : 0;
        let r = 0;
        const o = Ce(we(e), (e) => {
          if (void 0 !== t.while && !t.while(e)) return e;
          if (void 0 !== t.times && r >= t.times) return e;
          r++;
          let i = ce;
          if (void 0 !== t.schedule) {
            const o = Date.now() - n,
              a = t.schedule(r, o);
            if (m.isNone(a)) return e;
            i = ut(a.value);
          }
          return Ce(i, () => o);
        });
        return o;
      }),
    ))),
  Qe = (t.repeat = (0, l.dual)(
    (e) => x(e[0]),
    (e, t) =>
      Ze(e, {
        ...t,
        while: (e) =>
          "Success" === e._tag && (void 0 === t?.while || t.while(e.value)),
      }),
  )),
  Je = (t.replicate = (0, l.dual)(2, (e, t) =>
    Array.from({ length: t }, () => e),
  ));
(t.replicateEffect = (0, l.dual)(
  (e) => x(e[0]),
  (e, t, n) => wt(Je(e, t), n),
)),
  (t.forever = (e) => Qe(e)),
  (t.scheduleRecurs = (e) => (t) => (t <= e ? m.some(0) : m.none())),
  (t.scheduleSpaced = (e) => () => m.some(e)),
  (t.scheduleExponential =
    (e, t = 2) =>
    (n) =>
      m.some(Math.pow(t, n) * e)),
  (t.scheduleAddDelay = (0, l.dual)(
    2,
    (e, t) => (n, r) => m.map(e(n, r), (e) => e + t()),
  )),
  (t.scheduleWithMaxDelay = (0, l.dual)(
    2,
    (e, t) => (n, r) => m.map(e(n, r), (e) => Math.min(e, t)),
  )),
  (t.scheduleWithMaxElapsed = (0, l.dual)(
    2,
    (e, t) => (n, r) => (r < t ? e(n, r) : m.none()),
  )),
  (t.scheduleUnion = (0, l.dual)(
    2,
    (e, t) => (n, r) => m.zipWith(e(n, r), t(n, r), (e, t) => Math.min(e, t)),
  )),
  (t.scheduleIntersect = (0, l.dual)(
    2,
    (e, t) => (n, r) => m.zipWith(e(n, r), t(n, r), (e, t) => Math.max(e, t)),
  ));
const Xe = (t.catchAllCause = (0, l.dual)(2, (e, t) => {
    const n = Object.create(et);
    return (n[G] = e), (n[Y] = t), n;
  })),
  et = ee({
    op: "OnFailure",
    eval(e) {
      return e._stack.push(this), this[G];
    },
  }),
  tt = (t.catchCauseIf = (0, l.dual)(3, (e, t, n) =>
    Xe(e, (e) => (t(e) ? n(e) : oe(e))),
  )),
  nt = (t.catchAll = (0, l.dual)(2, (e, t) => tt(e, M, (e) => t(e.error)))),
  rt =
    ((t.catchAllDefect = (0, l.dual)(2, (e, t) =>
      tt(e, P, (e) => t(e.defect)),
    )),
    (t.tapErrorCause = (0, l.dual)(2, (e, t) => rt(e, l.constTrue, t))),
    (t.tapErrorCauseIf = (0, l.dual)(3, (e, t, n) =>
      tt(e, t, (e) => Se(n(e), oe(e))),
    ))),
  ot =
    ((t.tapError = (0, l.dual)(2, (e, t) => rt(e, M, (e) => t(e.error)))),
    (t.tapDefect = (0, l.dual)(2, (e, t) => rt(e, P, (e) => t(e.defect)))),
    (t.catchIf = (0, l.dual)(3, (e, t, n) =>
      tt(
        e,
        (e) => M(e) && t(e.error),
        (e) => n(e.error),
      ),
    )));
(t.catchTag = (0, l.dual)(3, (e, t, n) => ot(e, (0, y.isTagged)(t), n))),
  (t.mapErrorCause = (0, l.dual)(2, (e, t) => Xe(e, (e) => oe(t(e))))),
  (t.mapError = (0, l.dual)(2, (e, t) => nt(e, (e) => ie(t(e))))),
  (t.orDie = (e) => nt(e, de)),
  (t.orElseSucceed = (0, l.dual)(2, (e, t) => nt(e, (e) => ae(t)))),
  (t.ignore = (e) => lt(e, { onFailure: (e) => pe, onSuccess: (e) => pe })),
  (t.ignoreLogged = (e) =>
    lt(e, { onFailure: (e) => ae(() => {}), onSuccess: (e) => pe })),
  (t.option = (e) => ct(e, { onFailure: m.none, onSuccess: m.some })),
  (t.either = (e) => ct(e, { onFailure: a.left, onSuccess: a.right })),
  (t.retry = (0, l.dual)(
    (e) => x(e[0]),
    (e, t) =>
      Ze(e, {
        ...t,
        while: (e) =>
          "Failure" === e._tag &&
          "Fail" === e.cause._tag &&
          (void 0 === t?.while || t.while(e.cause.error)),
      }),
  )),
  (t.withTrace = function () {
    const e = globalThis.Error.stackTraceLimit;
    globalThis.Error.stackTraceLimit = 2;
    const t = new globalThis.Error();
    globalThis.Error.stackTraceLimit = e;
    const n = (e) => (n) =>
      vt(n, (n) =>
        oe(
          (function (e, n) {
            const r = t.stack;
            if (!r) return n;
            const o = r.split("\n")[2]?.trim().replace(/^at /, "");
            if (!o) return n;
            const i = o.match(/\((.*)\)$/);
            return D(n, `at ${e} (${i ? i[1] : o})`);
          })(e, n),
        ),
      );
    return 2 === arguments.length
      ? n(arguments[1])(arguments[0])
      : n(arguments[0]);
  });
const it = (t.matchCauseEffect = (0, l.dual)(2, (e, t) => {
    const n = Object.create(at);
    return (n[G] = e), (n[$] = t.onSuccess), (n[Y] = t.onFailure), n;
  })),
  at = ee({
    op: "OnSuccessAndFailure",
    eval(e) {
      return e._stack.push(this), this[G];
    },
  }),
  st = (t.matchCause = (0, l.dual)(2, (e, t) =>
    it(e, {
      onFailure: (e) => ae(() => t.onFailure(e)),
      onSuccess: (e) => ae(() => t.onSuccess(e)),
    }),
  )),
  lt = (t.matchEffect = (0, l.dual)(2, (e, t) =>
    it(e, {
      onFailure: (e) => ("Fail" === e._tag ? t.onFailure(e.error) : oe(e)),
      onSuccess: t.onSuccess,
    }),
  )),
  ct = (t.match = (0, l.dual)(2, (e, t) =>
    lt(e, {
      onFailure: (e) => ae(() => t.onFailure(e)),
      onSuccess: (e) => ae(() => t.onSuccess(e)),
    }),
  )),
  ut = (e) =>
    ge((t) => {
      const n = setTimeout(() => {
        t(pe);
      }, e);
      return ae(() => {
        clearTimeout(n);
      });
    });
(t.sleep = ut), (t.delay = (0, l.dual)(2, (e, t) => Se(ut(t), e)));
const dt = (t.timeoutOrElse = (0, l.dual)(2, (e, t) =>
    ke(e, Se(_t(ut(t.duration)), t.onTimeout)),
  )),
  pt =
    ((t.timeout = (0, l.dual)(2, (e, t) =>
      dt(e, { duration: t, onTimeout: () => ie(new Lt()) }),
    )),
    (t.timeoutOption = (0, l.dual)(2, (e, t) =>
      ke(be(e), ve(_t(ut(t)), m.none())),
    )),
    (t.MicroScopeTypeId = Symbol.for("effect/Micro/MicroScope"))),
  ft = (t.MicroScope = o.GenericTag("effect/Micro/MicroScope"));
class ht {
  [pt];
  state = { _tag: "Open", finalizers: new Set() };
  constructor() {
    this[pt] = pt;
  }
  unsafeAddFinalizer(e) {
    "Open" === this.state._tag && this.state.finalizers.add(e);
  }
  addFinalizer(e) {
    return se(() =>
      "Open" === this.state._tag
        ? (this.state.finalizers.add(e), pe)
        : e(this.state.exit),
    );
  }
  unsafeRemoveFinalizer(e) {
    "Open" === this.state._tag && this.state.finalizers.delete(e);
  }
  close(e) {
    return se(() => {
      if ("Open" === this.state._tag) {
        const t = Array.from(this.state.finalizers).reverse();
        return (
          (this.state = { _tag: "Closed", exit: e }),
          Ce(
            Tt(t, (t) => we(t(e))),
            Ue,
          )
        );
      }
      return pe;
    });
  }
  get fork() {
    return ae(() => {
      const e = new ht();
      if ("Closed" === this.state._tag) return (e.state = this.state), e;
      function t(t) {
        return e.close(t);
      }
      return (
        this.state.finalizers.add(t),
        e.unsafeAddFinalizer((e) => ae(() => this.unsafeRemoveFinalizer(t))),
        e
      );
    });
  }
}
(t.scopeMake = ae(() => new ht())), (t.scopeUnsafeMake = () => new ht());
const mt = (t.scope = He(ft));
(t.provideScope = (0, l.dual)(2, (e, t) => Ge(e, ft, t))),
  (t.scoped = (e) =>
    se(() => {
      const t = new ht();
      return gt(Ge(e, ft, t), (e) => t.close(e));
    })),
  (t.acquireRelease = (e, t) =>
    bt(Ce(mt, (n) => _e(e, (e) => n.addFinalizer((n) => t(e, n)))))),
  (t.addFinalizer = (e) => Ce(mt, (t) => t.addFinalizer(e)));
const gt = (t.onExit = (0, l.dual)(2, (e, t) =>
    xt((n) =>
      it(n(e), {
        onFailure: (e) => Ce(t(Pe(e)), () => oe(e)),
        onSuccess: (e) => Ce(t(Me(e)), () => re(e)),
      }),
    ),
  )),
  yt =
    ((t.ensuring = (0, l.dual)(2, (e, t) => gt(e, (e) => t))),
    (t.onExitIf = (0, l.dual)(3, (e, t, n) =>
      gt(e, (e) => (t(e) ? n(e) : Fe)),
    ))),
  vt = (t.onError = (0, l.dual)(2, (e, t) => yt(e, je, (e) => t(e.cause))));
(t.onInterrupt = (0, l.dual)(2, (e, t) => yt(e, Le, (e) => t))),
  (t.acquireUseRelease = (e, t, n) =>
    xt((r) => Ce(e, (e) => Ce(we(r(t(e))), (t) => Se(n(e, t), t))))),
  (t.interrupt = oe(R()));
const bt = (e) =>
  fe((t) =>
    t.interruptible ? ((t.interruptible = !1), t._stack.push(St(!0)), e) : e,
  );
t.uninterruptible = bt;
const St = te({
    op: "SetInterruptible",
    ensure(e) {
      if (((e.interruptible = this[G]), e._interrupted && e.interruptible))
        return () => Ne;
    },
  }),
  _t = (e) =>
    fe((t) =>
      t.interruptible
        ? e
        : ((t.interruptible = !0),
          t._stack.push(St(!1)),
          t._interrupted ? Ne : e),
    );
t.interruptible = _t;
const xt = (e) =>
  fe((t) =>
    t.interruptible
      ? ((t.interruptible = !1), t._stack.push(St(!0)), e(_t))
      : e(l.identity),
  );
t.uninterruptibleMask = xt;
const wt = (e, t) =>
  Array.isArray(e) || (0, y.isIterable)(e)
    ? Tt(e, l.identity, t)
    : t?.discard
      ? Tt(Object.values(e), l.identity, t)
      : se(() => {
          const n = {};
          return ve(
            Tt(
              Object.entries(e),
              ([e, t]) =>
                Oe(t, (t) => {
                  n[e] = t;
                }),
              { discard: !0, concurrency: t?.concurrency },
            ),
            n,
          );
        });
t.all = wt;
const Et = (t.whileLoop = te({
    op: "While",
    contA(e, t) {
      return (
        this[G].step(e),
        this[G].while() ? (t._stack.push(this), this[G].body()) : Fe
      );
    },
    eval(e) {
      return this[G].while() ? (e._stack.push(this), this[G].body()) : Fe;
    },
  })),
  Tt = (e, t, n) =>
    fe((o) => {
      const i =
          "inherit" === n?.concurrency ? o.getRef($e) : (n?.concurrency ?? 1),
        a = "unbounded" === i ? Number.POSITIVE_INFINITY : Math.max(1, i),
        s = r.fromIterable(e);
      let l = s.length;
      if (0 === l) return n?.discard ? pe : re([]);
      const c = n?.discard ? void 0 : new Array(l);
      let u = 0;
      return 1 === a
        ? ve(
            Et({
              while: () => u < s.length,
              body: () => t(s[u], u),
              step: c ? (e) => (c[u++] = e) : (e) => u++,
            }),
            c,
          )
        : ge((e) => {
            const n = new Set();
            let r,
              i = 0,
              d = 0,
              p = !1,
              f = !1;
            return (
              (function h() {
                for (p = !0; i < a && u < l; ) {
                  const m = u,
                    g = s[m];
                  u++, i++;
                  try {
                    const s = Ct(o, t(g, m), !0, !0);
                    n.add(s),
                      s.addObserver((t) => {
                        n.delete(s),
                          f ||
                            ("Failure" === t._tag
                              ? void 0 === r &&
                                ((r = t),
                                (l = u),
                                n.forEach((e) => e.unsafeInterrupt()))
                              : void 0 !== c && (c[m] = t.value),
                            d++,
                            i--,
                            d === l ? e(r ?? re(c)) : !p && i < a && h());
                      });
                  } catch (e) {
                    (r = De(e)), (l = u), n.forEach((e) => e.unsafeInterrupt());
                  }
                }
                p = !1;
              })(),
              se(() => ((f = !0), (u = l), V(n)))
            );
          });
    });
(t.forEach = Tt),
  (t.filter = (e, t, n) =>
    kt(
      e,
      (e) => Oe(t(e), (t) => ((t = n?.negate ? !t : t) ? m.some(e) : m.none())),
      n,
    ));
const kt = (e, t, n) =>
  se(() => {
    const r = [];
    return ve(
      Tt(
        e,
        (e) =>
          Oe(t(e), (e) => {
            "Some" === e._tag && r.push(e.value);
          }),
        { discard: !0, concurrency: n?.concurrency },
      ),
      r,
    );
  });
(t.filterMap = kt),
  (t.Do = re({})),
  (t.bindTo = f.bindTo(Oe)),
  (t.bind = f.bind(Oe, Ce)),
  (t.let = f.let_(Oe)),
  (t.fork = (e) => fe((t) => ((U.interruptChildren ??= B), re(Ct(t, e)))));
const Ct = (e, t, n = !1, r = !1) => {
    const o = new F(e.context, e.interruptible);
    return (
      r || (e.children().add(o), o.addObserver(() => e.children().delete(o))),
      n ? o.evaluate(t) : e.getRef(Ye).scheduleTask(() => o.evaluate(t), 0),
      o
    );
  },
  It = (e) => fe((t) => re(Ct(t, e, !1, !0)));
t.forkDaemon = It;
const At = (t.forkIn = (0, l.dual)(2, (e, t) =>
  xt((n) =>
    Ce(t.fork, (t) =>
      _e(n(It(gt(e, (e) => t.close(e)))), (e) => t.addFinalizer((t) => H(e))),
    ),
  ),
));
t.forkScoped = (e) => Ce(mt, (t) => At(e, t));
const Ot = (e, t) => {
  const n = new F(Ye.context(t?.scheduler ?? new ze()));
  if ((n.evaluate(e), t?.signal))
    if (t.signal.aborted) n.unsafeInterrupt();
    else {
      const e = () => n.unsafeInterrupt();
      t.signal.addEventListener("abort", e, { once: !0 }),
        n.addObserver(() => t.signal.removeEventListener("abort", e));
    }
  return n;
};
t.runFork = Ot;
const Rt = (e, t) =>
  new Promise((n, r) => {
    Ot(e, t).addObserver(n);
  });
(t.runPromiseExit = Rt),
  (t.runPromise = (e, t) =>
    Rt(e, t).then((e) => {
      if ("Failure" === e._tag) throw e.cause;
      return e.value;
    }));
const Mt = (e) => {
  const t = new ze(),
    n = Ot(e, { scheduler: t });
  return t.flush(), n._exit ?? De(n);
};
(t.runSyncExit = Mt),
  (t.runSync = (e) => {
    const t = Mt(e);
    if ("Failure" === t._tag) throw t.cause;
    return t.value;
  });
const Pt = (function () {
    class e extends globalThis.Error {}
    return (
      Object.assign(e.prototype, J, h.StructuralPrototype, {
        [q]: "Failure",
        [W]() {
          return ie(this);
        },
        toString() {
          return this.message ? `${this.name}: ${this.message}` : this.name;
        },
        toJSON() {
          return { ...this };
        },
        [d.NodeInspectSymbol]() {
          const e = this.stack;
          return e
            ? `${this.toString()}\n${e.split("\n").slice(1).join("\n")}`
            : this.toString();
        },
      }),
      e
    );
  })(),
  Nt = (t.Error = (function () {
    return class extends Pt {
      constructor(e) {
        super(), e && Object.assign(this, e);
      }
    };
  })()),
  Dt = (e) => {
    class t extends Nt {
      _tag = e;
    }
    return (t.prototype.name = e), t;
  };
t.TaggedError = Dt;
class jt extends Dt("NoSuchElementException") {}
t.NoSuchElementException = jt;
class Lt extends Dt("TimeoutException") {}
t.TimeoutException = Lt;
