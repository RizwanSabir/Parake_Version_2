// vendor/module-37191.js — webpack module 37191
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(39053 /* vendor/module-39053 */),
  i = r.defineIntegration((e = {}) => {
    const t = ["script"];
    function n(o, i, a = 0) {
      if (!o) return;
      const s =
        "shadowRoot" in o && o.shadowRoot ? o.shadowRoot.children : o.children;
      for (const o of s) {
        if (!(o instanceof HTMLElement)) continue;
        const s = r.getComponentName(o, 1) || void 0,
          l = o.tagName.toLowerCase();
        if (t.includes(l)) continue;
        const c =
          e.onElement?.({
            element: o,
            componentName: s,
            tagName: l,
            depth: a,
          }) || {};
        if ("skip" === c) continue;
        if ("children" === c) {
          n(o, i, a + 1);
          continue;
        }
        const { x: u, y: d, width: p, height: f } = o.getBoundingClientRect(),
          h = {
            identifier: o.id || void 0,
            type: s || l,
            visible: !0,
            alpha: 1,
            height: f,
            width: p,
            x: u,
            y: d,
            ...c,
          },
          m = [];
        (h.children = m), n(o, h.children, a + 1), i.push(h);
      }
    }
    return {
      name: "ViewHierarchy",
      processEvent: (t, r) => {
        if (void 0 !== t.type || !1 === e.shouldAttach?.(t, r)) return t;
        const i = {
          rendering_system: "DOM",
          positioning: "absolute",
          windows: [],
        };
        n(e.rootElement?.() || o.WINDOW.document.body, i.windows);
        const a = {
          filename: "view-hierarchy.json",
          attachmentType: "event.view_hierarchy",
          contentType: "application/json",
          data: JSON.stringify(i),
        };
        return (r.attachments = r.attachments || []), r.attachments.push(a), t;
      },
    };
  });
t.viewHierarchyIntegration = i;
