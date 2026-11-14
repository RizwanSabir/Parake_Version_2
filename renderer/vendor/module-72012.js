// vendor/module-72012.js — webpack module 72012
// params: (t, e, s) = (module, exports, require)
s.d(e, { A: () => r });
var i = s(79456 /* vendor/module-79456 */),
  n = s(27197 /* vendor/module-27197 */),
  r = (0, i.K)((t, e) => {
    let s;
    return (
      "sandbox" === e && (s = (0, n.Ltv)("#i" + t)),
      ("sandbox" === e
        ? (0, n.Ltv)(s.nodes()[0].contentDocument.body)
        : (0, n.Ltv)("body")
      ).select(`[id="${t}"]`)
    );
  }, "getDiagramElement");
