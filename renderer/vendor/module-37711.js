// vendor/module-37711.js — webpack module 37711
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(38862 /* vendor/module-38862 */),
  s = o.defineIntegration(() => ({
    name: "ConversationId",
    setup(e) {
      e.on("spanStart", (e) => {
        const t = r.getCurrentScope().getScopeData(),
          n = r.getIsolationScope().getScopeData(),
          o = t.conversationId || n.conversationId;
        if (o) {
          const { op: t, data: n, description: r } = a.spanToJSON(e);
          if (
            !t?.startsWith("gen_ai.") &&
            !n["ai.operationId"] &&
            !r?.startsWith("ai.")
          )
            return;
          e.setAttribute(i.GEN_AI_CONVERSATION_ID_ATTRIBUTE, o);
        }
      });
    },
  }));
t.conversationIdIntegration = s;
