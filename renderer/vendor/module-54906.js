// vendor/module-54906.js — webpack module 54906
// params: (e, t) = (module, exports, require)
"use strict";
t.resolveAiMessagesMinimizeAction = function (e) {
  return 0 === e.messageCount
    ? "minimize"
    : "assistant" === e.lastMessage?.role &&
        "auto-ai-help" === e.lastMessage.metadata?.trigger?.kind &&
        e.isStreamingAiResponse
      ? "open"
      : null;
};
