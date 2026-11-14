// vendor/other/module-37711.js — webpack module 37711
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(82579 /* vendor/other/module-82579 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(38862 /* vendor/other/module-38862 */),
  a = o.defineIntegration(() => ({
    name: "ConversationId",
    setup(e) {
      e.on("spanStart", (e) => {
        const t = r.getCurrentScope().getScopeData(),
          n = r.getIsolationScope().getScopeData(),
          o = t.conversationId || n.conversationId;
        if (o) {
          const { op: t, data: n, description: r } = s.spanToJSON(e);
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
t.conversationIdIntegration = a;
