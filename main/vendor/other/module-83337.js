// vendor/other/module-83337.js — webpack module 83337
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(27864 /* vendor/other/module-27864 */),
  { parse: o } = n(16315 /* vendor/other/module-16315 */),
  i = (e) =>
    "tr_ch_apm_tracingChannel" ===
    e.declarations?.[0]?.id?.properties?.[0]?.value?.name,
  s = /[^\w]/g,
  a = (e) => `tr_ch_apm$${e.replace(s, "_")}`;
function c(e, t, n, r) {
  const i = r[r.length - 1];
  "ClassDeclaration" === t.type || "ClassExpression" === t.type
    ? (function (e, t, n) {
        const { functionQuery: r, operator: i, channelName: s } = e,
          { methodName: c } = r;
        if (!c) return;
        const u = t.body;
        if (u.body.some(({ key: e }) => e?.name === c)) return;
        let l = u.body.find(({ kind: e }) => "constructor" === e);
        const f = `${a(s)}$${c}`;
        if (
          l &&
          (function (e, t) {
            const n = e?.value?.body?.body;
            return (
              !!Array.isArray(n) &&
              n.some(
                (e) =>
                  "VariableDeclaration" === e.type &&
                  e.declarations.some((e) => e.id?.name === t),
              )
            );
          })(l, f)
        )
          return;
        e.transforms.tracingChannelDeclaration(e, n),
          l ||
            ((l = o(
              t.superClass
                ? "class A extends Object { constructor (...args) { super(...args) } }"
                : "class A { constructor () {} }",
            ).body[0].body.body[0]),
            u.body.unshift(l));
        const h = o(
            `\n    const ${f} = this["${c}"]\n    this["${c}"] = function () {}\n    if (typeof ${f} === 'function') {\n      Object.defineProperty(this["${c}"], 'length', {\n        value: ${f}.length,\n        configurable: true\n      })\n    }\n  `,
          ).body,
          g = h[1].expression.right;
        (g.params = [
          {
            type: "RestElement",
            argument: { type: "Identifier", name: "__apm$args" },
          },
        ]),
          (g.async = "tracePromise" === i),
          (g.body = d(e, { type: "Identifier", name: f }, n)),
          p(0, g),
          l.value.body.body.push(...h);
      })(e, t, i)
    : (function (e, t, n) {
        if (
          (function (e, t) {
            const n = new Set();
            let r = e;
            for (; r && !n.has(r); ) {
              n.add(r);
              const e = r.body?.body;
              if (!Array.isArray(e)) return !1;
              if (e.some((e) => u(e, t))) return !0;
              r = l(e);
            }
            return !1;
          })(t, a(e.channelName))
        )
          return;
        e.transforms.tracingChannelDeclaration(e, n);
        const {
            functionQuery: {
              methodName: r,
              privateMethodName: o,
              functionName: i,
              expressionName: s,
              propertyName: c,
            },
          } = e,
          f =
            "constructor" !== r && (r || o || i || s || c)
              ? t.type
              : "ArrowFunctionExpression",
          h = t.params;
        (t.body = d(
          e,
          {
            type: f,
            params: h,
            body: t.body,
            async: t.async,
            expression: !1,
            generator: t.generator,
          },
          n,
        )),
          (t.params = (function (e) {
            return [
              ...(e || [])
                .filter(
                  (e) =>
                    "RestElement" !== e.type && "AssignmentPattern" !== e.type,
                )
                .map((e, t) => ({
                  type: "Identifier",
                  name: `__apm$arg${t}`,
                })),
              {
                type: "RestElement",
                argument: { type: "Identifier", name: "__apm$args" },
              },
            ];
          })(h)),
          (t.generator = !1),
          (t.async = !1),
          p(0, t);
      })(e, t, i);
}
function u(e, t) {
  if ("ReturnStatement" !== e.type) return !1;
  const n = "CallExpression" === e.argument?.type ? e.argument.callee : null;
  return (
    "MemberExpression" === n?.type &&
    "runStores" === n.property?.name &&
    "MemberExpression" === n.object?.type &&
    "start" === n.object.property?.name &&
    "Identifier" === n.object.object?.type &&
    n.object.object.name === t
  );
}
function l(e) {
  const t = (e, t) => {
      const n = e?.find(
        (e) =>
          "VariableDeclaration" === e.type &&
          e.declarations.some((e) => e.id?.name === t),
      );
      return n?.declarations.find((e) => e.id?.name === t)?.init ?? null;
    },
    n = t(e, "__apm$traced"),
    r = t(n?.body?.body, "__apm$wrapped"),
    o = r?.type;
  return "FunctionExpression" === o ||
    "ArrowFunctionExpression" === o ||
    "FunctionDeclaration" === o
    ? r
    : null;
}
function d(e, t, n) {
  const { operator: i, moduleVersion: s } = e,
    { returnKind: c } = e.functionQuery,
    u = c
      ? (function (e, t, n) {
          const { channelName: r } = e,
            i = "Iterator" === t ? "traceSync" : "tracePromise",
            s = a(r + ":next");
          return (
            (function (e, t) {
              const {
                  channelName: n,
                  module: { name: r },
                } = e,
                i = a(n + ":next");
              if (t.body.some((e) => e.declarations?.[0]?.id?.name === i))
                return;
              const s = a(n),
                c = t.body.findIndex(
                  (e) => e.declarations?.[0]?.id?.name === s,
                ),
                u = `const ${i} = tr_ch_apm_tracingChannel("orchestrion:${r}:${n}:next")`;
              t.body.splice(c + 1, 0, o(u).body[0]);
            })(e, n),
            `\n    const __apm$iter = __apm$ctx.result;\n    if (__apm$iter != null && typeof __apm$iter.next === 'function') {\n      const __apm$patchIter = function (method) {\n        const __apm$orig = __apm$iter[method];\n        if (typeof __apm$orig !== 'function') return;\n        __apm$iter[method] = function () {\n          const __apm$iterArgs = Array.prototype.slice.call(arguments);\n          if (!tr_ch_apm_hasSubscribers(${s})) return __apm$orig.apply(this, __apm$iterArgs);\n          __apm$ctx.method = method;\n          __apm$ctx.arguments = __apm$iterArgs;\n          return ${s}.${i}(__apm$orig, __apm$ctx, this, ...__apm$iterArgs);\n        };\n      };\n      __apm$patchIter('next');\n      __apm$patchIter('throw');\n      __apm$patchIter('return');\n    }\n  `
          );
        })(e, c, n)
      : "";
  let l;
  "traceCallback" === i && (l = f(e, 0, u)),
    "tracePromise" === i && (l = h(e, 0, u)),
    "traceSync" === i &&
      (l = (function (e, t, n = "") {
        const { channelName: r } = e,
          i = a(r);
        return o(
          `\n    function wrapper () {\n      if (!tr_ch_apm_hasSubscribers(${i})) return __apm$traced();\n\n      return ${i}.start.runStores(__apm$ctx, () => {\n        try {\n          __apm$ctx.result = __apm$traced();\n          ${n}\n        } catch (err) {\n          __apm$ctx.error = err;\n          ${i}.error.publish(__apm$ctx);\n          throw err;\n        } finally {\n         __apm$ctx.self ??= this;\n          ${i}.end.publish(__apm$ctx);\n        }\n        return __apm$ctx.result;\n      });\n    }\n  `,
        );
      })(e, 0, u)),
    "traceAuto" === i &&
      (l = (function (e, t, n = "") {
        const r = f(e, 0, n),
          o = h(e, 0, n),
          [i, s, a, c, u, l] = r.body[0].body.body,
          d = {
            type: "IfStatement",
            test: c.test,
            consequent: {
              type: "BlockStatement",
              body: o.body[0].body.body,
            },
            alternate: null,
          };
        return (r.body[0].body.body = [i, d, s, a, u, l]), r;
      })(e, 0, u));
  const d = (t.params || [])
      .filter((e) => "RestElement" !== e.type && "AssignmentPattern" !== e.type)
      .map((e, t) => `__apm$arg${t}`)
      .concat("...__apm$args")
      .join(", "),
    p = l.body[0].body,
    g = o(
      "ArrowFunctionExpression" === t.type
        ? `\n    const __apm$arguments = [${d}];\n    const __apm$ctx = {\n      arguments: __apm$arguments,\n      moduleVersion: ${JSON.stringify(s)}\n    };\n    const __apm$traced = () => {\n      const __apm$wrapped = () => {};\n      return __apm$wrapped(...__apm$arguments);\n    };\n  `
        : `\n    const __apm$arguments = [${d}].slice(0, arguments.length);\n    const __apm$ctx = {\n      arguments: __apm$arguments,\n      self: this,\n      moduleVersion: ${JSON.stringify(s)}\n    };\n    const __apm$traced = () => {\n      const __apm$wrapped = () => {};\n      return __apm$wrapped.apply(this, __apm$arguments);\n    };\n  `,
    ).body;
  return (
    p.body.unshift(...g), (r.query(p, "[id.name=__apm$wrapped]")[0].init = t), p
  );
}
function p(e, t) {
  const n = new Set();
  r.traverse(t.body, r.parse("[object.type=Super]"), (e, t) => {
    const { name: r } = e.property;
    let i;
    if (t.callee) {
      const { expression: e } = o(`__apm$super['${r}'].call(this)`).body[0];
      (t.callee = i = e.callee), t.arguments.unshift(...e.arguments);
    } else t.expression = i = o(`__apm$super['${r}']`).body[0];
    (i.computed = t.callee.computed),
      (i.optional = t.callee.optional),
      n.add(r);
  });
  for (const e of n) {
    const n = o(
      `\n      class Wrapper {\n        wrapper () {\n          __apm$super['${e}'] = super['${e}']\n        }\n      }\n    `,
    ).body[0].body.body[0].value.body.body[0];
    t.body.body.unshift(n);
  }
  n.size > 0 && t.body.body.unshift(o("const __apm$super = {}").body[0]);
}
function f(e, t, n = "") {
  const {
      channelName: r,
      functionQuery: { callbackIndex: i = -1 },
    } = e,
    s = a(r);
  return o(
    `\n    function wrapper () {\n      const __apm$cb = Array.prototype.at.call(__apm$arguments, ${i});\n\n      if (!${s}.start.hasSubscribers) return __apm$traced();\n\n      function __apm$wrappedCb(err, res) {\n        if (err) {\n          __apm$ctx.error = err;\n          ${s}.error.publish(__apm$ctx);\n        } else {\n          __apm$ctx.result = res;\n          ${n}\n        }\n\n        ${s}.asyncStart.runStores(__apm$ctx, () => {\n          try {\n            if (__apm$cb) {\n              return __apm$cb.apply(this, arguments);\n            }\n          } finally {\n            ${s}.asyncEnd.publish(__apm$ctx);\n          }\n        });\n      }\n\n      if (typeof __apm$cb !== 'function') {\n        return __apm$traced();\n      }\n      Array.prototype.splice.call(__apm$arguments, ${i}, 1, __apm$wrappedCb);\n\n      return ${s}.start.runStores(__apm$ctx, () => {\n        try {\n          return __apm$traced();\n        } catch (err) {\n          __apm$ctx.error = err;\n          ${s}.error.publish(__apm$ctx);\n          throw err;\n        } finally {\n         __apm$ctx.self ??= this;\n          ${s}.end.publish(__apm$ctx);\n        }\n      });\n    }\n  `,
  );
}
function h(e, t, n = "") {
  const { channelName: r } = e,
    i = a(r);
  return o(
    `\n    function wrapper () {\n      if (!tr_ch_apm_hasSubscribers(${i})) return __apm$traced();\n\n      return ${i}.start.runStores(__apm$ctx, () => {\n        try {\n          let promise = __apm$traced();\n          if (typeof promise?.then !== 'function') {\n            __apm$ctx.result = promise;\n            ${n}\n            return __apm$ctx.result;\n          }\n          // Mirror Node.js core diagnostics_channel behaviour: for native Promise\n          // instances, chain normally (safe since there is no subclass API to\n          // preserve). For Promise subclasses and other thenables, side-chain the\n          // callbacks for event publishing and return the original so that any\n          // subclass-specific methods (e.g. APIPromise.withResponse()) remain\n          // accessible to the caller.\n          if (promise instanceof Promise && promise.constructor === Promise) {\n            return promise.then(\n              result => {\n                __apm$ctx.result = result;\n                ${n}\n                ${i}.asyncStart.publish(__apm$ctx);\n                ${i}.asyncEnd.publish(__apm$ctx);\n                return __apm$ctx.result;\n              },\n              err => {\n                __apm$ctx.error = err;\n                ${i}.error.publish(__apm$ctx);\n                ${i}.asyncStart.publish(__apm$ctx);\n                ${i}.asyncEnd.publish(__apm$ctx);\n                throw err;\n              }\n            );\n          }\n          promise.then(\n            result => {\n              __apm$ctx.result = result;\n              ${n}\n              ${i}.asyncStart.publish(__apm$ctx);\n              ${i}.asyncEnd.publish(__apm$ctx);\n            },\n            err => {\n              __apm$ctx.error = err;\n              ${i}.error.publish(__apm$ctx);\n              ${i}.asyncStart.publish(__apm$ctx);\n              ${i}.asyncEnd.publish(__apm$ctx);\n            }\n          );\n          return promise;\n        } catch (err) {\n          __apm$ctx.error = err;\n          ${i}.error.publish(__apm$ctx);\n          throw err;\n        } finally {\n          __apm$ctx.self ??= this;\n          ${i}.end.publish(__apm$ctx);\n        }\n      });\n    }\n  `,
  );
}
e.exports = {
  tracingChannelImport({ dcModule: e, moduleType: t }, n) {
    if (n.body.some(i)) return;
    const r = { module: "esm" === t },
      s = n.body.findIndex((e) => "use strict" === e.directive),
      a =
        "esm" === t
          ? `import tr_ch_apm_dc from "${e}"`
          : `const tr_ch_apm_dc = require("${e}")`;
    n.body.splice(
      s + 1,
      0,
      o(a, r).body[0],
      o("const { tracingChannel: tr_ch_apm_tracingChannel } = tr_ch_apm_dc", r)
        .body[0],
      o(
        "const tr_ch_apm_hasSubscribers = ch => ch.start.hasSubscribers\n      || ch.end.hasSubscribers\n      || ch.asyncStart.hasSubscribers\n      || ch.asyncEnd.hasSubscribers\n      || ch.error.hasSubscribers",
        r,
      ).body[0],
    );
  },
  tracingChannelDeclaration(e, t) {
    const {
        channelName: n,
        module: { name: r },
      } = e,
      s = a(n);
    if (t.body.some((e) => e.declarations?.[0]?.id?.name === s)) return;
    e.transforms.tracingChannelImport(e, t);
    const c = t.body.findIndex(i),
      u = `\n      const ${s} = tr_ch_apm_tracingChannel("orchestrion:${r}:${n}")\n    `;
    t.body.splice(c + 1, 0, o(u).body[0]);
  },
  traceCallback: c,
  tracePromise: c,
  traceSync: c,
  traceAuto: c,
};
