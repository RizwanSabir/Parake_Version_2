// vendor/module-75684.js — webpack module 75684
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(94918 /* vendor/module-94918 */);
let o = 0;
t.InteractionManager = class {
  constructor() {
    (this._longestInteractionList = []),
      (this._longestInteractionMap = new Map());
  }
  _resetInteractions() {
    (o = r.getInteractionCount()),
      (this._longestInteractionList.length = 0),
      this._longestInteractionMap.clear();
  }
  _estimateP98LongestInteraction() {
    const e = Math.min(
      this._longestInteractionList.length - 1,
      Math.floor((r.getInteractionCount() - o) / 50),
    );
    return this._longestInteractionList[e];
  }
  _processEntry(e) {
    if (
      (this._onBeforeProcessingEntry?.(e),
      !e.interactionId && "first-input" !== e.entryType)
    )
      return;
    const t = this._longestInteractionList.at(-1);
    let n = this._longestInteractionMap.get(e.interactionId);
    if (
      n ||
      this._longestInteractionList.length < 10 ||
      e.duration > t._latency
    ) {
      if (
        (n
          ? e.duration > n._latency
            ? ((n.entries = [e]), (n._latency = e.duration))
            : e.duration === n._latency &&
              e.startTime === n.entries[0].startTime &&
              n.entries.push(e)
          : ((n = {
              id: e.interactionId,
              entries: [e],
              _latency: e.duration,
            }),
            this._longestInteractionMap.set(n.id, n),
            this._longestInteractionList.push(n)),
        this._longestInteractionList.sort((e, t) => t._latency - e._latency),
        this._longestInteractionList.length > 10)
      ) {
        const e = this._longestInteractionList.splice(10);
        for (const t of e) this._longestInteractionMap.delete(t.id);
      }
      this._onAfterProcessingINPCandidate?.(n);
    }
  }
};
