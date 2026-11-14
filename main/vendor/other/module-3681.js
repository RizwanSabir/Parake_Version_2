// vendor/other/module-3681.js — webpack module 3681
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */);
t.StepFunctionsServiceExtension = class {
  requestPreSpanHook(e) {
    const t = e.commandInput?.stateMachineArn,
      n = e.commandInput?.activityArn,
      i = {};
    return (
      t && (i[o.AWS_STEP_FUNCTIONS_STATE_MACHINE_ARN] = t),
      n && (i[o.AWS_STEP_FUNCTIONS_ACTIVITY_ARN] = n),
      { spanAttributes: i, spanKind: r.SPAN_KIND.CLIENT }
    );
  }
};
