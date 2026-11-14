// vendor/module-56422.js — webpack module 56422
// params: (e, t) = (module, exports, require)
t.EventClient = class {
  #t = !0;
  #n;
  #r;
  #o;
  #i;
  #a;
  #s;
  #l;
  #c = 0;
  #u = 5;
  #d = !1;
  #p = !1;
  #f = null;
  #h = () => {
    this.debugLog("Connected to event bus"),
      (this.#a = !0),
      (this.#d = !1),
      this.debugLog("Emitting queued events", this.#i),
      this.#i.forEach((e) => this.emitEventToBus(e)),
      (this.#i = []),
      this.stopConnectLoop(),
      this.#r().removeEventListener("tanstack-connect-success", this.#h);
  };
  #m = () => {
    if (this.#c < this.#u)
      return this.#c++, void this.dispatchCustomEvent("tanstack-connect", {});
    this.#r().removeEventListener("tanstack-connect", this.#m),
      (this.#p = !0),
      this.debugLog("Max retries reached, giving up on connection"),
      this.stopConnectLoop();
  };
  #g = () => {
    this.#d ||
      ((this.#d = !0),
      this.#r().addEventListener("tanstack-connect-success", this.#h),
      this.#m());
  };
  constructor({
    pluginId: e,
    debug: t = !1,
    enabled: n = !0,
    reconnectEveryMs: r = 300,
  }) {
    (this.#n = e),
      (this.#t = n),
      (this.#r = this.getGlobalTarget),
      (this.#o = t),
      this.debugLog(" Initializing event subscription for plugin", this.#n),
      (this.#i = []),
      (this.#a = !1),
      (this.#p = !1),
      (this.#s = null),
      (this.#l = r);
  }
  startConnectLoop() {
    null !== this.#s ||
      this.#a ||
      (this.debugLog(`Starting connect loop (every ${this.#l}ms)`),
      (this.#s = setInterval(this.#m, this.#l)));
  }
  stopConnectLoop() {
    (this.#d = !1),
      null !== this.#s &&
        (clearInterval(this.#s),
        (this.#s = null),
        (this.#i = []),
        this.debugLog("Stopped connect loop"));
  }
  debugLog(...e) {
    this.#o;
  }
  getGlobalTarget() {
    if (
      "undefined" != typeof globalThis &&
      globalThis.__TANSTACK_EVENT_TARGET__
    )
      return (
        this.debugLog("Using global event target"),
        globalThis.__TANSTACK_EVENT_TARGET__
      );
    if ("undefined" != typeof window && void 0 !== window.addEventListener)
      return this.debugLog("Using window as event target"), window;
    const e = "undefined" != typeof EventTarget ? new EventTarget() : void 0;
    return void 0 === e || void 0 === e.addEventListener
      ? (this.debugLog(
          "No event mechanism available, running in non-web environment",
        ),
        {
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => !1,
        })
      : (this.debugLog("Using new EventTarget as fallback"), e);
  }
  getPluginId() {
    return this.#n;
  }
  dispatchCustomEventShim(e, t) {
    try {
      const n = new Event(e, { detail: t });
      this.#r().dispatchEvent(n);
    } catch (e) {
      this.debugLog("Failed to dispatch shim event");
    }
  }
  dispatchCustomEvent(e, t) {
    try {
      this.#r().dispatchEvent(new CustomEvent(e, { detail: t }));
    } catch (n) {
      this.dispatchCustomEventShim(e, t);
    }
  }
  emitEventToBus(e) {
    this.debugLog("Emitting event to client bus", e),
      this.dispatchCustomEvent("tanstack-dispatch-event", e);
  }
  createEventPayload(e, t) {
    return { type: `${this.#n}:${e}`, payload: t, pluginId: this.#n };
  }
  emit(e, t) {
    if (this.#t) {
      if (
        (this.#f &&
          (this.debugLog("Emitting event to internal event target", e, t),
          this.#f.dispatchEvent(
            new CustomEvent(`${this.#n}:${e}`, {
              detail: this.createEventPayload(e, t),
            }),
          )),
        !this.#p)
      )
        return this.#a
          ? this.emitEventToBus(this.createEventPayload(e, t))
          : (this.debugLog(
              "Bus not available, will be pushed as soon as connected",
            ),
            this.#i.push(this.createEventPayload(e, t)),
            void (
              "undefined" == typeof CustomEvent ||
              this.#d ||
              (this.#g(), this.startConnectLoop())
            ));
      this.debugLog("Previously failed to connect, not emitting to bus");
    } else
      this.debugLog("Event bus client is disabled, not emitting event", e, t);
  }
  on(e, t, n) {
    const r = n?.withEventTarget ?? !1,
      o = `${this.#n}:${e}`;
    if (
      (r &&
        (this.#f || (this.#f = new EventTarget()),
        this.#f.addEventListener(o, (e) => {
          t(e.detail);
        })),
      !this.#t)
    )
      return (
        this.debugLog("Event bus client is disabled, not registering event", o),
        () => {}
      );
    const i = (e) => {
      this.debugLog("Received event from bus", e.detail), t(e.detail);
    };
    return (
      this.#r().addEventListener(o, i),
      this.debugLog("Registered event to bus", o),
      () => {
        r && this.#f?.removeEventListener(o, i),
          this.#r().removeEventListener(o, i);
      }
    );
  }
  onAll(e) {
    if (!this.#t)
      return (
        this.debugLog("Event bus client is disabled, not registering event"),
        () => {}
      );
    const t = (t) => {
      const n = t.detail;
      e(n);
    };
    return (
      this.#r().addEventListener("tanstack-devtools-global", t),
      () => this.#r().removeEventListener("tanstack-devtools-global", t)
    );
  }
  onAllPluginEvents(e) {
    if (!this.#t)
      return (
        this.debugLog("Event bus client is disabled, not registering event"),
        () => {}
      );
    const t = (t) => {
      const n = t.detail;
      (this.#n && n.pluginId !== this.#n) || e(n);
    };
    return (
      this.#r().addEventListener("tanstack-devtools-global", t),
      () => this.#r().removeEventListener("tanstack-devtools-global", t)
    );
  }
};
