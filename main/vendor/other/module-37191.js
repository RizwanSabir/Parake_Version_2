// vendor/other/module-37191.js — webpack module 37191
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(39053 /* vendor/other/module-39053 */),
  i = r.defineIntegration((e = {}) => {
    const t = ["script"];
    function n(o, i, s = 0) {
      if (!o) return;
      const a =
        "shadowRoot" in o && o.shadowRoot ? o.shadowRoot.children : o.children;
      for (const o of a) {
        if (!(o instanceof HTMLElement)) continue;
        const a = r.getComponentName(o, 1) || void 0,
          c = o.tagName.toLowerCase();
        if (t.includes(c)) continue;
        const u =
          e.onElement?.({
            element: o,
            componentName: a,
            tagName: c,
            depth: s,
          }) || {};
        if ("skip" === u) continue;
        if ("children" === u) {
          n(o, i, s + 1);
          continue;
        }
        const { x: l, y: d, width: p, height: f } = o.getBoundingClientRect(),
          h = {
            identifier: o.id || void 0,
            type: a || c,
            visible: !0,
            alpha: 1,
            height: f,
            width: p,
            x: l,
            y: d,
            ...u,
          },
          g = [];
        (h.children = g), n(o, h.children, s + 1), i.push(h);
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
        const s = {
          filename: "view-hierarchy.json",
          attachmentType: "event.view_hierarchy",
          contentType: "application/json",
          data: JSON.stringify(i),
        };
        return (r.attachments = r.attachments || []), r.attachments.push(s), t;
      },
    };
  });
t.viewHierarchyIntegration = i;
