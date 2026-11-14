// vendor/other/module-92762.js — webpack module 92762
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
var o = Object.defineProperty,
  i = (e, t, n) =>
    ((e, t, n) =>
      t in e
        ? o(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n))(e, "symbol" != typeof t ? t + "" : t, n);
function s(e, t, n = 1 / 0, r = 0) {
  return e
    ? e.nodeType !== e.ELEMENT_NODE || r > n
      ? -1
      : t(e)
        ? r
        : s(e.parentNode, t, n, r + 1)
    : -1;
}
function a(e, t) {
  return (n) => {
    const r = n;
    if (null === r) return !1;
    try {
      if (e)
        if ("string" == typeof e) {
          if (r.matches(`.${e}`)) return !0;
        } else if (
          (function (e, t) {
            for (let n = e.classList.length; n--; ) {
              const r = e.classList[n];
              if (t.test(r)) return !0;
            }
            return !1;
          })(r, e)
        )
          return !0;
      return !(!t || !r.matches(t));
    } catch {
      return !1;
    }
  };
}
let c = {
  map: {},
  getId: () => -1,
  getNode: () => null,
  removeNodeFromMap() {},
  has: () => !1,
  reset() {},
};
function u(e, t, n, r, o = window) {
  const i = o.Object.getOwnPropertyDescriptor(e, t);
  return (
    o.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set(e) {
              g(() => {
                n.set.call(this, e);
              }, 0),
                i && i.set && i.set.call(this, e);
            },
          },
    ),
    () => u(e, t, i || {}, !0)
  );
}
function l(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const r = e[t],
      o = n(r);
    return (
      "function" == typeof o &&
        ((o.prototype = o.prototype || {}),
        Object.defineProperties(o, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = o),
      () => {
        e[t] = r;
      }
    );
  } catch {
    return () => {};
  }
}
function d(e, t, n, r, o) {
  if (!e) return !1;
  const i = (function (e) {
    if (!e) return null;
    try {
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    } catch (e) {
      return null;
    }
  })(e);
  if (!i) return !1;
  const c = a(t, n);
  if (!o) {
    const e = r && i.matches(r);
    return c(i) && !e;
  }
  const u = s(i, c);
  let l = -1;
  return !(u < 0) && (r && (l = s(i, a(null, r))), (u > -1 && l < 0) || u < l);
}
"undefined" != typeof window &&
  window.Proxy &&
  window.Reflect &&
  (c = new Proxy(c, { get: (e, t, n) => Reflect.get(e, t, n) })),
  Date.now().toString();
const p = {};
function f(e) {
  const t = p[e];
  if (t) return t;
  const n = window.document;
  let r = window[e];
  if (n && "function" == typeof n.createElement)
    try {
      const t = n.createElement("iframe");
      (t.hidden = !0), n.head.appendChild(t);
      const o = t.contentWindow;
      o && o[e] && (r = o[e]), n.head.removeChild(t);
    } catch (e) {}
  return (p[e] = r.bind(window));
}
function h(...e) {
  return f("requestAnimationFrame")(...e);
}
function g(...e) {
  return f("setTimeout")(...e);
}
var m = ((e) => (
  (e[(e["2D"] = 0)] = "2D"),
  (e[(e.WebGL = 1)] = "WebGL"),
  (e[(e.WebGL2 = 2)] = "WebGL2"),
  e
))(m || {});
let _;
const S = (e) =>
  _
    ? (...t) => {
        try {
          return e(...t);
        } catch (e) {
          if (_ && !0 === _(e)) return () => {};
          throw e;
        }
      }
    : e;
for (
  var E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    y = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
    T = 0;
  T < 64;
  T++
)
  y[E.charCodeAt(T)] = T;
const b = new Map(),
  I = (e, t, n) => {
    if (!e || (!N(e, t) && "object" != typeof e)) return;
    const r = (function (e, t) {
      let n = b.get(e);
      return (
        n || ((n = new Map()), b.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
      );
    })(n, e.constructor.name);
    let o = r.indexOf(e);
    return -1 === o && ((o = r.length), r.push(e)), o;
  };
function v(e, t, n) {
  if (e instanceof Array) return e.map((e) => v(e, t, n));
  if (null === e) return e;
  if (
    e instanceof Float32Array ||
    e instanceof Float64Array ||
    e instanceof Int32Array ||
    e instanceof Uint32Array ||
    e instanceof Uint8Array ||
    e instanceof Uint16Array ||
    e instanceof Int16Array ||
    e instanceof Int8Array ||
    e instanceof Uint8ClampedArray
  )
    return { rr_type: e.constructor.name, args: [Object.values(e)] };
  if (e instanceof ArrayBuffer)
    return {
      rr_type: e.constructor.name,
      base64: (function (e) {
        var t,
          n = new Uint8Array(e),
          r = n.length,
          o = "";
        for (t = 0; t < r; t += 3)
          (o += E[n[t] >> 2]),
            (o += E[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
            (o += E[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
            (o += E[63 & n[t + 2]]);
        return (
          r % 3 == 2
            ? (o = o.substring(0, o.length - 1) + "=")
            : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
          o
        );
      })(e),
    };
  if (e instanceof DataView)
    return {
      rr_type: e.constructor.name,
      args: [v(e.buffer, t, n), e.byteOffset, e.byteLength],
    };
  if (e instanceof HTMLImageElement) {
    const t = e.constructor.name,
      { src: n } = e;
    return { rr_type: t, src: n };
  }
  return e instanceof HTMLCanvasElement
    ? { rr_type: "HTMLImageElement", src: e.toDataURL() }
    : e instanceof ImageData
      ? {
          rr_type: e.constructor.name,
          args: [v(e.data, t, n), e.width, e.height],
        }
      : N(e, t) || "object" == typeof e
        ? { rr_type: e.constructor.name, index: I(e, t, n) }
        : e;
}
const A = (e, t, n) => e.map((e) => v(e, t, n)),
  N = (e, t) => {
    const n = [
      "WebGLActiveInfo",
      "WebGLBuffer",
      "WebGLFramebuffer",
      "WebGLProgram",
      "WebGLRenderbuffer",
      "WebGLShader",
      "WebGLShaderPrecisionFormat",
      "WebGLTexture",
      "WebGLUniformLocation",
      "WebGLVertexArrayObject",
      "WebGLVertexArrayObjectOES",
    ].filter((e) => "function" == typeof t[e]);
    return Boolean(n.find((n) => e instanceof t[n]));
  };
function R(e, t, n, r, o) {
  const i = [];
  try {
    const s = l(e.HTMLCanvasElement.prototype, "getContext", function (e) {
      return function (i, ...s) {
        if (!d(this, t, n, r, !0)) {
          const e = (function (e) {
            return "experimental-webgl" === e ? "webgl" : e;
          })(i);
          if (
            ("__context" in this || (this.__context = e),
            o && ["webgl", "webgl2"].includes(e))
          )
            if (s[0] && "object" == typeof s[0]) {
              const e = s[0];
              e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
            } else s.splice(0, 1, { preserveDrawingBuffer: !0 });
        }
        return e.apply(this, [i, ...s]);
      };
    });
    i.push(s);
  } catch {}
  return () => {
    i.forEach((e) => e());
  };
}
function C(e, t, n, r, o, i, s, a) {
  const c = [],
    p = Object.getOwnPropertyNames(e);
  for (const s of p)
    if (
      ![
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight",
      ].includes(s)
    )
      try {
        if ("function" != typeof e[s]) continue;
        const u = l(e, s, function (e) {
          return function (...c) {
            const u = e.apply(this, c);
            if (
              (I(u, a, this),
              "tagName" in this.canvas && !d(this.canvas, r, o, i, !0))
            ) {
              const e = A(c, a, this),
                r = { type: t, property: s, args: e };
              n(this.canvas, r);
            }
            return u;
          };
        });
        c.push(u);
      } catch {
        const r = u(e, s, {
          set(e) {
            n(this.canvas, {
              type: t,
              property: s,
              args: [e],
              setter: !0,
            });
          },
        });
        c.push(r);
      }
  return c;
}
class O {
  constructor(e) {
    (this.pendingCanvasMutations = new Map()),
      (this.rafStamps = { latestId: 0, invokeId: null }),
      (this.shadowDoms = new Set()),
      (this.windowsSet = new WeakSet()),
      (this.windows = []),
      (this.restoreHandlers = []),
      (this.frozen = !1),
      (this.locked = !1),
      (this.snapshotInProgressMap = new Map()),
      (this.worker = null),
      (this.lastSnapshotTime = 0),
      (this.processMutation = (e, t) => {
        (!(
          this.rafStamps.invokeId &&
          this.rafStamps.latestId !== this.rafStamps.invokeId
        ) &&
          this.rafStamps.invokeId) ||
          (this.rafStamps.invokeId = this.rafStamps.latestId),
          this.pendingCanvasMutations.has(e) ||
            this.pendingCanvasMutations.set(e, []),
          this.pendingCanvasMutations.get(e).push(t);
      });
    const {
      enableManualSnapshot: t,
      sampling: n = "all",
      win: r,
      recordCanvas: o,
      errorHandler: i,
    } = e;
    (e.sampling = n),
      (this.mutationCb = e.mutationCb),
      (this.mirror = e.mirror),
      (this.options = e),
      i && (_ = i),
      ((o && "number" == typeof n) || t) &&
        (this.worker = this.initFPSWorker()),
      this.addWindow(r),
      t ||
        S(() => {
          o &&
            "all" === n &&
            (this.startRAFTimestamping(),
            this.startPendingCanvasMutationFlusher()),
            o && "number" == typeof n && this.initCanvasFPSObserver();
        })();
  }
  reset() {
    this.pendingCanvasMutations.clear(),
      this.restoreHandlers.forEach((e) => {
        try {
          e();
        } catch (e) {}
      }),
      (this.restoreHandlers = []),
      (this.windowsSet = new WeakSet()),
      (this.windows = []),
      (this.shadowDoms = new Set()),
      this.worker?.terminate(),
      (this.worker = null),
      (this.snapshotInProgressMap = new Map());
  }
  freeze() {
    this.frozen = !0;
  }
  unfreeze() {
    this.frozen = !1;
  }
  lock() {
    this.locked = !0;
  }
  unlock() {
    this.locked = !1;
  }
  addWindow(e) {
    const {
      sampling: t = "all",
      blockClass: n,
      blockSelector: r,
      unblockSelector: o,
      recordCanvas: i,
      enableManualSnapshot: s,
    } = this.options;
    if (!this.windowsSet.has(e)) {
      if (s)
        return this.windowsSet.add(e), void this.windows.push(new WeakRef(e));
      S(() => {
        if (
          (i && "all" === t && this.initCanvasMutationObserver(e, n, r, o),
          i && "number" == typeof t)
        ) {
          const t = R(e, n, r, o, !0);
          this.restoreHandlers.push(() => {
            t();
          });
        }
      })(),
        this.windowsSet.add(e),
        this.windows.push(new WeakRef(e));
    }
  }
  addShadowRoot(e) {
    this.shadowDoms.add(new WeakRef(e));
  }
  resetShadowRoots() {
    this.shadowDoms = new Set();
  }
  snapshot(e, t) {
    t?.skipRequestAnimationFrame
      ? this.takeSnapshot(performance.now(), !0, e)
      : h((t) => this.takeSnapshot(t, !0, e));
  }
  initFPSWorker() {
    const e = new Worker(
      (function () {
        const e = new Blob([
          'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};',
        ]);
        return URL.createObjectURL(e);
      })(),
    );
    return (
      (e.onmessage = (e) => {
        const t = e.data,
          { id: n } = t;
        if ((this.snapshotInProgressMap.set(n, !1), !("base64" in t))) return;
        const { base64: r, type: o, width: i, height: s } = t;
        this.mutationCb({
          id: n,
          type: m["2D"],
          commands: [
            { property: "clearRect", args: [0, 0, i, s] },
            {
              property: "drawImage",
              args: [
                {
                  rr_type: "ImageBitmap",
                  args: [
                    {
                      rr_type: "Blob",
                      data: [{ rr_type: "ArrayBuffer", base64: r }],
                      type: o,
                    },
                  ],
                },
                0,
                0,
                i,
                s,
              ],
            },
          ],
        });
      }),
      e
    );
  }
  initCanvasFPSObserver() {
    let e;
    if (!this.windows.length && !this.shadowDoms.size) return;
    const t = (n) => {
      this.takeSnapshot(n, !1), (e = h(t));
    };
    (e = h(t)),
      this.restoreHandlers.push(() => {
        e && cancelAnimationFrame(e);
      });
  }
  initCanvasMutationObserver(e, t, n, r) {
    const o = R(e, t, n, r, !1),
      i = (function (e, t, n, r, o) {
        const i = [],
          s = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
        for (const a of s)
          try {
            if ("function" != typeof t.CanvasRenderingContext2D.prototype[a])
              continue;
            const s = l(t.CanvasRenderingContext2D.prototype, a, function (i) {
              return function (...s) {
                return (
                  d(this.canvas, n, r, o, !0) ||
                    g(() => {
                      const n = A(s, t, this);
                      e(this.canvas, {
                        type: m["2D"],
                        property: a,
                        args: n,
                      });
                    }, 0),
                  i.apply(this, s)
                );
              };
            });
            i.push(s);
          } catch {
            const n = u(t.CanvasRenderingContext2D.prototype, a, {
              set(t) {
                e(this.canvas, {
                  type: m["2D"],
                  property: a,
                  args: [t],
                  setter: !0,
                });
              },
            });
            i.push(n);
          }
        return () => {
          i.forEach((e) => e());
        };
      })(this.processMutation.bind(this), e, t, n, r),
      s = (function (e, t, n, r, o) {
        const i = [];
        return (
          i.push(
            ...C(t.WebGLRenderingContext.prototype, m.WebGL, e, n, r, o, 0, t),
          ),
          void 0 !== t.WebGL2RenderingContext &&
            i.push(
              ...C(
                t.WebGL2RenderingContext.prototype,
                m.WebGL2,
                e,
                n,
                r,
                o,
                0,
                t,
              ),
            ),
          () => {
            i.forEach((e) => e());
          }
        );
      })(this.processMutation.bind(this), e, t, n, r, this.mirror);
    this.restoreHandlers.push(() => {
      o(), i(), s();
    });
  }
  getCanvasElements(e, t, n) {
    const r = [],
      o = (o) => {
        o.querySelectorAll("canvas").forEach((o) => {
          d(o, e, t, n, !0) || r.push(o);
        });
      };
    for (const e of this.windows) {
      const t = e.deref();
      let n;
      try {
        n = t && t.document;
      } catch {}
      n && o(n);
    }
    for (const e of this.shadowDoms) {
      const t = e.deref();
      t && o(t);
    }
    return r;
  }
  takeSnapshot(e, t, n) {
    const {
        sampling: r,
        blockClass: o,
        blockSelector: i,
        unblockSelector: s,
        dataURLOptions: a,
        maxCanvasSize: c,
      } = this.options,
      u = 1e3 / ("all" === r ? 2 : r || 2);
    return (
      !(this.lastSnapshotTime && e - this.lastSnapshotTime < u) &&
      ((this.lastSnapshotTime = e),
      (n ? [n] : this.getCanvasElements(o, i, s)).forEach((e) => {
        const n = this.mirror.getId(e);
        if (
          this.mirror.hasNode(e) &&
          e.width &&
          e.height &&
          !this.snapshotInProgressMap.get(n)
        ) {
          if (
            (this.snapshotInProgressMap.set(n, !0),
            !t && ["webgl", "webgl2"].includes(e.__context))
          ) {
            const t = e.getContext(e.__context);
            !1 === t?.getContextAttributes()?.preserveDrawingBuffer &&
              t.clear(t.COLOR_BUFFER_BIT);
          }
          createImageBitmap(e)
            .then((t) => {
              this.worker?.postMessage(
                {
                  id: n,
                  bitmap: t,
                  width: e.width,
                  height: e.height,
                  dataURLOptions: a,
                  maxCanvasSize: c,
                },
                [t],
              );
            })
            .catch((e) => {
              S(() => {
                throw (this.snapshotInProgressMap.delete(n), e);
              })();
            });
        }
      }),
      !0)
    );
  }
  startPendingCanvasMutationFlusher() {
    h(() => this.flushPendingCanvasMutations());
  }
  startRAFTimestamping() {
    const e = (t) => {
      (this.rafStamps.latestId = t), h(e);
    };
    h(e);
  }
  flushPendingCanvasMutations() {
    this.pendingCanvasMutations.forEach((e, t) => {
      const n = this.mirror.getId(t);
      this.flushPendingCanvasMutationFor(t, n);
    }),
      h(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(e, t) {
    if (this.frozen || this.locked) return;
    const n = this.pendingCanvasMutations.get(e);
    if (!n || -1 === t) return;
    const r = n.map((e) => {
        const { type: t, ...n } = e;
        return n;
      }),
      { type: o } = n[0];
    this.mutationCb({ id: t, type: o, commands: r }),
      this.pendingCanvasMutations.delete(e);
  }
}
try {
  if (2 !== Array.from([1], (e) => 2 * e)[0]) {
    const e = document.createElement("iframe");
    document.body.appendChild(e),
      (Array.from = e.contentWindow?.Array.from || Array.from),
      document.body.removeChild(e);
  }
} catch (e) {}
var w, k;
new (class {
  constructor() {
    i(this, "idNodeMap", new Map()), i(this, "nodeMetaMap", new WeakMap());
  }
  getId(e) {
    if (!e) return -1;
    const t = this.getMeta(e)?.id;
    return t ?? -1;
  }
  getNode(e) {
    return this.idNodeMap.get(e) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(e) {
    return this.nodeMetaMap.get(e) || null;
  }
  removeNodeFromMap(e) {
    const t = this.getId(e);
    this.idNodeMap.delete(t),
      e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
  }
  has(e) {
    return this.idNodeMap.has(e);
  }
  hasNode(e) {
    return this.nodeMetaMap.has(e);
  }
  add(e, t) {
    const n = t.id;
    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
  }
  replace(e, t) {
    const n = this.getNode(e);
    if (n) {
      const e = this.nodeMetaMap.get(n);
      e && this.nodeMetaMap.set(t, e);
    }
    this.idNodeMap.set(e, t);
  }
  reset() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
})(),
  ((k = w || (w = {}))[(k.NotStarted = 0)] = "NotStarted"),
  (k[(k.Running = 1)] = "Running"),
  (k[(k.Stopped = 2)] = "Stopped");
const P = {
    low: {
      sampling: { canvas: 1 },
      dataURLOptions: { type: "image/webp", quality: 0.25 },
    },
    medium: {
      sampling: { canvas: 2 },
      dataURLOptions: { type: "image/webp", quality: 0.4 },
    },
    high: {
      sampling: { canvas: 4 },
      dataURLOptions: { type: "image/webp", quality: 0.5 },
    },
  },
  L = 1280,
  x = r.defineIntegration((e = {}) => {
    const [t, n] = e.maxCanvasSize || [],
      r = {
        quality: e.quality || "medium",
        enableManualSnapshot: e.enableManualSnapshot,
        maxCanvasSize: [t ? Math.min(t, L) : L, n ? Math.min(n, L) : L],
      };
    let o, i;
    const s = new Promise((e) => (i = e));
    return {
      name: "ReplayCanvas",
      getOptions() {
        const { quality: e, enableManualSnapshot: t, maxCanvasSize: n } = r;
        return {
          enableManualSnapshot: t,
          recordCanvas: !0,
          getCanvasManager: (e) => {
            const r = new O({
              ...e,
              enableManualSnapshot: t,
              maxCanvasSize: n,
              errorHandler: (e) => {
                try {
                  "object" == typeof e && (e.__rrweb__ = !0);
                } catch {}
              },
            });
            return (o = r), i(r), r;
          },
          ...(P[e] || P.medium),
        };
      },
      async snapshot(e, t) {
        (o || (await s)).snapshot(e, t);
      },
    };
  });
t.replayCanvasIntegration = x;
