// vendor/other/module-71796.js — webpack module 71796
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(60261 /* vendor/other/module-60261 */),
  s = n(57940 /* vendor/other/module-57940 */),
  a = n(6607 /* vendor/other/module-6607 */),
  c = [">=0.5.5 <2"];
class u extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-amqplib", o.SDK_VERSION, e);
  }
  init() {
    const e = new i.InstrumentationNodeModuleFile(
        "amqplib/lib/channel_model.js",
        c,
        this.patchChannelModel.bind(this),
        this.unpatchChannelModel.bind(this),
      ),
      t = new i.InstrumentationNodeModuleFile(
        "amqplib/lib/callback_model.js",
        c,
        this.patchChannelModel.bind(this),
        this.unpatchChannelModel.bind(this),
      ),
      n = new i.InstrumentationNodeModuleFile(
        "amqplib/lib/connect.js",
        c,
        this.patchConnect.bind(this),
        this.unpatchConnect.bind(this),
      );
    return new r.InstrumentationNodeModuleDefinition(
      "amqplib",
      c,
      void 0,
      void 0,
      [e, n, t],
    );
  }
  patchConnect(e) {
    const t = this.unpatchConnect(e);
    return (
      r.isWrapped(t.connect) || this._wrap(t, "connect", s.getConnectPatch), t
    );
  }
  unpatchConnect(e) {
    return r.isWrapped(e.connect) && this._unwrap(e, "connect"), e;
  }
  patchChannelModel(e) {
    return (
      r.isWrapped(e.Channel.prototype.publish) ||
        this._wrap(e.Channel.prototype, "publish", s.getPublishPatch),
      r.isWrapped(e.Channel.prototype.consume) ||
        this._wrap(e.Channel.prototype, "consume", s.getConsumePatch),
      r.isWrapped(e.Channel.prototype.ack) ||
        this._wrap(
          e.Channel.prototype,
          "ack",
          s.getAckPatch(!1, a.EndOperation.Ack),
        ),
      r.isWrapped(e.Channel.prototype.nack) ||
        this._wrap(
          e.Channel.prototype,
          "nack",
          s.getAckPatch(!0, a.EndOperation.Nack),
        ),
      r.isWrapped(e.Channel.prototype.reject) ||
        this._wrap(
          e.Channel.prototype,
          "reject",
          s.getAckPatch(!0, a.EndOperation.Reject),
        ),
      r.isWrapped(e.Channel.prototype.ackAll) ||
        this._wrap(
          e.Channel.prototype,
          "ackAll",
          s.getAckAllPatch(!1, a.EndOperation.AckAll),
        ),
      r.isWrapped(e.Channel.prototype.nackAll) ||
        this._wrap(
          e.Channel.prototype,
          "nackAll",
          s.getAckAllPatch(!0, a.EndOperation.NackAll),
        ),
      r.isWrapped(e.Channel.prototype.emit) ||
        this._wrap(e.Channel.prototype, "emit", s.getChannelEmitPatch),
      r.isWrapped(e.ConfirmChannel.prototype.publish) ||
        this._wrap(
          e.ConfirmChannel.prototype,
          "publish",
          s.getConfirmedPublishPatch,
        ),
      e
    );
  }
  unpatchChannelModel(e) {
    return (
      r.isWrapped(e.Channel.prototype.publish) &&
        this._unwrap(e.Channel.prototype, "publish"),
      r.isWrapped(e.Channel.prototype.consume) &&
        this._unwrap(e.Channel.prototype, "consume"),
      r.isWrapped(e.Channel.prototype.ack) &&
        this._unwrap(e.Channel.prototype, "ack"),
      r.isWrapped(e.Channel.prototype.nack) &&
        this._unwrap(e.Channel.prototype, "nack"),
      r.isWrapped(e.Channel.prototype.reject) &&
        this._unwrap(e.Channel.prototype, "reject"),
      r.isWrapped(e.Channel.prototype.ackAll) &&
        this._unwrap(e.Channel.prototype, "ackAll"),
      r.isWrapped(e.Channel.prototype.nackAll) &&
        this._unwrap(e.Channel.prototype, "nackAll"),
      r.isWrapped(e.Channel.prototype.emit) &&
        this._unwrap(e.Channel.prototype, "emit"),
      r.isWrapped(e.ConfirmChannel.prototype.publish) &&
        this._unwrap(e.ConfirmChannel.prototype, "publish"),
      e
    );
  }
}
t.AmqplibInstrumentation = u;
