// vendor/module-48622.js — webpack module 48622
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.INITIAL_LIVE_REGION_TEXT_MUTATION_RESET_DELAY = void 0),
  (t.useInitialLiveRegionTextMutation = function () {
    const e = (0, a.useTimeout)(),
      t = o.useRef(null);
    return (
      o.useEffect(() => {
        if (i.platform.os.ios) return;
        const n = t.current;
        if (null == n) return;
        const r = (function (e) {
          const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT);
          let n = null;
          for (; t.nextNode(); ) {
            const e = t.currentNode;
            "" !== e.nodeValue && (n = e);
          }
          return n;
        })(n);
        if (null == r) return;
        const o = r.nodeValue ?? "",
          a = `${o}⁠`;
        return (
          (r.nodeValue = a),
          e.start(s, () => {
            r.nodeValue === a && (r.nodeValue = o);
          }),
          () => {
            e.clear(), r.nodeValue === a && (r.nodeValue = o);
          }
        );
      }, [t, e]),
      t
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(87177 /* vendor/module-87177 */),
  a = n(54807 /* vendor/module-54807 */);
const s = (t.INITIAL_LIVE_REGION_TEXT_MUTATION_RESET_DELAY = 200);
