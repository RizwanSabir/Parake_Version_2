// vendor/other/module-74350.js — webpack module 74350
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "nestFactoryCreate",
      module: {
        name: "@nestjs/core",
        versionRange: ">=8.0.0 <12",
        filePath: "nest-factory.js",
      },
      functionQuery: {
        className: "NestFactoryStatic",
        methodName: "create",
        kind: "Async",
      },
    },
    {
      channelName: "routerExecutionContextCreate",
      module: {
        name: "@nestjs/core",
        versionRange: ">=8.0.0 <12",
        filePath: "router/router-execution-context.js",
      },
      functionQuery: {
        className: "RouterExecutionContext",
        methodName: "create",
        kind: "Sync",
      },
    },
    {
      channelName: "injectableDecorator",
      module: {
        name: "@nestjs/common",
        versionRange: ">=8.0.0 <12",
        filePath: "decorators/core/injectable.decorator.js",
      },
      astQuery:
        'FunctionDeclaration[id.name="Injectable"] ReturnStatement > ArrowFunctionExpression',
      functionQuery: { kind: "Sync" },
    },
    {
      channelName: "catchDecorator",
      module: {
        name: "@nestjs/common",
        versionRange: ">=8.0.0 <12",
        filePath: "decorators/core/catch.decorator.js",
      },
      astQuery:
        'FunctionDeclaration[id.name="Catch"] ReturnStatement > ArrowFunctionExpression',
      functionQuery: { kind: "Sync" },
    },
    {
      channelName: "cronDecorator",
      module: {
        name: "@nestjs/schedule",
        versionRange: ">=2.0.0",
        filePath: "dist/decorators/cron.decorator.js",
      },
      functionQuery: { functionName: "Cron", kind: "Sync" },
    },
    {
      channelName: "intervalDecorator",
      module: {
        name: "@nestjs/schedule",
        versionRange: ">=2.0.0",
        filePath: "dist/decorators/interval.decorator.js",
      },
      functionQuery: { functionName: "Interval", kind: "Sync" },
    },
    {
      channelName: "timeoutDecorator",
      module: {
        name: "@nestjs/schedule",
        versionRange: ">=2.0.0",
        filePath: "dist/decorators/timeout.decorator.js",
      },
      functionQuery: { functionName: "Timeout", kind: "Sync" },
    },
    {
      channelName: "onEventDecorator",
      module: {
        name: "@nestjs/event-emitter",
        versionRange: ">=2.0.0",
        filePath: "dist/decorators/on-event.decorator.js",
      },
      functionQuery: { expressionName: "OnEvent", kind: "Sync" },
    },
    {
      channelName: "processorDecorator",
      module: {
        name: "@nestjs/bullmq",
        versionRange: ">=10.0.0",
        filePath: "dist/decorators/processor.decorator.js",
      },
      functionQuery: { functionName: "Processor", kind: "Sync" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.nestjsChannels = {
  NESTJS_APP_CREATION: "orchestrion:@nestjs/core:nestFactoryCreate",
  NESTJS_ROUTER_CONTEXT:
    "orchestrion:@nestjs/core:routerExecutionContextCreate",
  NESTJS_INJECTABLE: "orchestrion:@nestjs/common:injectableDecorator",
  NESTJS_CATCH: "orchestrion:@nestjs/common:catchDecorator",
  NESTJS_SCHEDULE_CRON: "orchestrion:@nestjs/schedule:cronDecorator",
  NESTJS_SCHEDULE_INTERVAL: "orchestrion:@nestjs/schedule:intervalDecorator",
  NESTJS_SCHEDULE_TIMEOUT: "orchestrion:@nestjs/schedule:timeoutDecorator",
  NESTJS_ONEVENT: "orchestrion:@nestjs/event-emitter:onEventDecorator",
  NESTJS_PROCESSOR: "orchestrion:@nestjs/bullmq:processorDecorator",
}),
  (t.nestjsConfig = r),
  (t.nestjsSubscribeInjection = o);
