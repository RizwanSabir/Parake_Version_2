// app/hooks/use-pointer-pass-through.js — webpack module 63764
// params: (e, t, n) = (module, exports, require)
"use strict";
t.usePointerPassThrough = function () {
  const e = (0, r.c)(4),
    t = (0, o.useRef)(0),
    n = (0, o.useRef)(!1),
    { dragState: a } = (0, i.useLocationOnScreen)(),
    s = (0, o.useRef)(null !== a);
  let l, c, u;
  e[0] !== a
    ? ((l = () => {
        s.current = null !== a;
      }),
      (e[0] = a),
      (e[1] = l))
    : (l = e[1]),
    (0, o.useLayoutEffect)(l),
    e[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((c = () => {
          const e = (e) => {
              if (s.current) return;
              const n = performance.now();
              if (n - t.current < 40) return;
              t.current = n;
              const r = e.target;
              o(!r.matches("[data-transparent='true']"));
            },
            r = () => {
              s.current || o(!1);
            },
            o = (e) => {
              n.current !== e &&
                ((n.current = e),
                window.electron.ipcRendererProxy.invoke(
                  "renderer/set-ignore-mouse-events",
                  !e,
                ));
            };
          return (
            window.addEventListener("mousemove", e),
            window.addEventListener("mouseleave", r),
            () => {
              window.removeEventListener("mousemove", e),
                window.removeEventListener("mouseleave", r);
            }
          );
        }),
        (u = []),
        (e[2] = c),
        (e[3] = u))
      : ((c = e[2]), (u = e[3])),
    (0, o.useEffect)(c, u);
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(63324 /* app/components/location-on-screen-provider */);
