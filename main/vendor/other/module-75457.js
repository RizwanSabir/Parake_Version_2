// vendor/other/module-75457.js — webpack module 75457
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(52889 /* vendor/other/module-52889 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(23295 /* vendor/other/module-23295 */),
  a = n(10627 /* vendor/other/module-10627 */),
  c = n(82615 /* vendor/other/module-82615 */),
  u = n(73802 /* vendor/other/module-73802 */),
  l = n(97190 /* vendor/other/module-97190 */),
  d = n(33836 /* vendor/other/module-33836 */),
  p = n(75122 /* vendor/other/module-75122 */),
  f = n(19410 /* vendor/other/module-19410 */);
class h {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._attributes = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = {
        traceId: u.generateTraceId(),
        sampleRand: l.safeMathRandom(),
      });
  }
  clone() {
    const e = new h();
    return (
      (e._breadcrumbs = [...this._breadcrumbs]),
      (e._tags = { ...this._tags }),
      (e._attributes = { ...this._attributes }),
      (e._extra = { ...this._extra }),
      (e._contexts = { ...this._contexts }),
      this._contexts.flags &&
        (e._contexts.flags = {
          values: [...this._contexts.flags.values],
        }),
      (e._user = this._user),
      (e._level = this._level),
      (e._session = this._session),
      (e._transactionName = this._transactionName),
      (e._fingerprint = this._fingerprint),
      (e._eventProcessors = [...this._eventProcessors]),
      (e._attachments = [...this._attachments]),
      (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (e._propagationContext = { ...this._propagationContext }),
      (e._client = this._client),
      (e._lastEventId = this._lastEventId),
      (e._conversationId = this._conversationId),
      d._setSpanForScope(e, d._getSpanForScope(this)),
      e
    );
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return (
      (this._user = e || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session && o.updateSession(this._session, { user: e }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  setConversationId(e) {
    return (
      (this._conversationId = e || void 0), this._notifyScopeListeners(), this
    );
  }
  setTags(e) {
    return (
      (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
    );
  }
  setTag(e, t) {
    return this.setTags({ [e]: t });
  }
  setAttributes(e) {
    return (
      (this._attributes = { ...this._attributes, ...e }),
      this._notifyScopeListeners(),
      this
    );
  }
  setAttribute(e, t) {
    return this.setAttributes({ [e]: t });
  }
  removeAttribute(e) {
    return (
      e in this._attributes &&
        (delete this._attributes[e], this._notifyScopeListeners()),
      this
    );
  }
  setExtras(e) {
    return (
      (this._extra = { ...this._extra, ...e }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(e, t) {
    return (
      (this._extra = { ...this._extra, [e]: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(e) {
    return (this._fingerprint = e), this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return (this._level = e), this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return (this._transactionName = e), this._notifyScopeListeners(), this;
  }
  setContext(e, t) {
    return (
      null === t ? delete this._contexts[e] : (this._contexts[e] = t),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(e) {
    return (
      e ? (this._session = e) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const t = "function" == typeof e ? e(this) : e,
      n = t instanceof h ? t.getScopeData() : s.isPlainObject(t) ? e : void 0,
      {
        tags: r,
        attributes: o,
        extra: i,
        user: a,
        contexts: c,
        level: u,
        fingerprint: l = [],
        propagationContext: d,
        conversationId: p,
      } = n || {};
    return (
      (this._tags = { ...this._tags, ...r }),
      (this._attributes = { ...this._attributes, ...o }),
      (this._extra = { ...this._extra, ...i }),
      (this._contexts = { ...this._contexts, ...c }),
      a && Object.keys(a).length && (this._user = a),
      u && (this._level = u),
      l.length && (this._fingerprint = l),
      d && (this._propagationContext = d),
      p && (this._conversationId = p),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._attributes = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._session = void 0),
      (this._conversationId = void 0),
      d._setSpanForScope(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({
        traceId: u.generateTraceId(),
        sampleRand: l.safeMathRandom(),
      }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(e, t) {
    const n = "number" == typeof t ? t : 100;
    if (n <= 0) return this;
    const r = {
      timestamp: f.dateTimestampInSeconds(),
      ...e,
      message: e.message ? p.truncate(e.message, 2048) : e.message,
    };
    return (
      this._breadcrumbs.push(r),
      this._breadcrumbs.length > n &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
        this._client?.recordDroppedEvent("buffer_overflow", "log_item")),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: d._getSpanForScope(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(e) {
    return (
      (this._sdkProcessingMetadata = a.merge(
        this._sdkProcessingMetadata,
        e,
        2,
      )),
      this
    );
  }
  setPropagationContext(e) {
    return (this._propagationContext = e), this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, t) {
    const n = t?.event_id || c.uuid4();
    if (!this._client)
      return (
        r.DEBUG_BUILD &&
          i.debug.warn(
            "No client configured on scope - will not capture exception!",
          ),
        n
      );
    const o = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        e,
        {
          originalException: e,
          syntheticException: o,
          ...t,
          event_id: n,
        },
        this,
      ),
      n
    );
  }
  captureMessage(e, t, n) {
    const o = n?.event_id || c.uuid4();
    if (!this._client)
      return (
        r.DEBUG_BUILD &&
          i.debug.warn(
            "No client configured on scope - will not capture message!",
          ),
        o
      );
    const s = n?.syntheticException ?? new Error(e);
    return (
      this._client.captureMessage(
        e,
        t,
        {
          originalException: e,
          syntheticException: s,
          ...n,
          event_id: o,
        },
        this,
      ),
      o
    );
  }
  captureEvent(e, t) {
    const n = e.event_id || t?.event_id || c.uuid4();
    return this._client
      ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
      : (r.DEBUG_BUILD &&
          i.debug.warn(
            "No client configured on scope - will not capture event!",
          ),
        n);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((e) => {
        e(this);
      }),
      (this._notifyingListeners = !1));
  }
}
t.Scope = h;
