// vendor/other/module-6044.js — webpack module 6044
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(93348 /* vendor/other/module-93348 */);
function s(e) {
  return Array.isArray(e) ? e : [e];
}
t.DynamodbServiceExtension = class {
  requestPreSpanHook(e) {
    const t = e.commandName,
      n = e.commandInput?.TableName,
      a = {};
    return (
      (a[o.DB_SYSTEM] = i.DB_SYSTEM_VALUE_DYNAMODB),
      (a[o.DB_NAME] = n),
      (a[o.DB_OPERATION] = t),
      e.commandInput?.TableName
        ? (a[o.AWS_DYNAMODB_TABLE_NAMES] = [e.commandInput.TableName])
        : e.commandInput?.RequestItems &&
          (a[o.AWS_DYNAMODB_TABLE_NAMES] = Object.keys(
            e.commandInput.RequestItems,
          )),
      ("CreateTable" !== t && "UpdateTable" !== t) ||
        (e.commandInput?.ProvisionedThroughput &&
          ((a[o.AWS_DYNAMODB_PROVISIONED_READ_CAPACITY] =
            e.commandInput.ProvisionedThroughput.ReadCapacityUnits),
          (a[o.AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY] =
            e.commandInput.ProvisionedThroughput.WriteCapacityUnits))),
      ("GetItem" !== t && "Scan" !== t && "Query" !== t) ||
        (e.commandInput?.ConsistentRead &&
          (a[o.AWS_DYNAMODB_CONSISTENT_READ] = e.commandInput.ConsistentRead)),
      ("Query" !== t && "Scan" !== t) ||
        (e.commandInput?.ProjectionExpression &&
          (a[o.AWS_DYNAMODB_PROJECTION] = e.commandInput.ProjectionExpression)),
      "CreateTable" === t &&
        (e.commandInput?.GlobalSecondaryIndexes &&
          (a[o.AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES] = s(
            e.commandInput.GlobalSecondaryIndexes,
          ).map((e) => JSON.stringify(e))),
        e.commandInput?.LocalSecondaryIndexes &&
          (a[o.AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES] = s(
            e.commandInput.LocalSecondaryIndexes,
          ).map((e) => JSON.stringify(e)))),
      ("ListTables" !== t && "Query" !== t && "Scan" !== t) ||
        (e.commandInput?.Limit &&
          (a[o.AWS_DYNAMODB_LIMIT] = e.commandInput.Limit)),
      "ListTables" === t &&
        e.commandInput?.ExclusiveStartTableName &&
        (a[o.AWS_DYNAMODB_EXCLUSIVE_START_TABLE] =
          e.commandInput.ExclusiveStartTableName),
      "Query" === t &&
        (e.commandInput?.ScanIndexForward &&
          (a[o.AWS_DYNAMODB_SCAN_FORWARD] = e.commandInput.ScanIndexForward),
        e.commandInput?.IndexName &&
          (a[o.AWS_DYNAMODB_INDEX_NAME] = e.commandInput.IndexName),
        e.commandInput?.Select &&
          (a[o.AWS_DYNAMODB_SELECT] = e.commandInput.Select)),
      "Scan" === t &&
        (e.commandInput?.Segment &&
          (a[o.AWS_DYNAMODB_SEGMENT] = e.commandInput?.Segment),
        e.commandInput?.TotalSegments &&
          (a[o.AWS_DYNAMODB_TOTAL_SEGMENTS] = e.commandInput?.TotalSegments),
        e.commandInput?.IndexName &&
          (a[o.AWS_DYNAMODB_INDEX_NAME] = e.commandInput.IndexName),
        e.commandInput?.Select &&
          (a[o.AWS_DYNAMODB_SELECT] = e.commandInput.Select)),
      "UpdateTable" === t &&
        (e.commandInput?.AttributeDefinitions &&
          (a[o.AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS] = s(
            e.commandInput.AttributeDefinitions,
          ).map((e) => JSON.stringify(e))),
        e.commandInput?.GlobalSecondaryIndexUpdates &&
          (a[o.AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES] = s(
            e.commandInput.GlobalSecondaryIndexUpdates,
          ).map((e) => JSON.stringify(e)))),
      {
        spanAttributes: a,
        spanKind: r.SPAN_KIND.CLIENT,
        spanOp: "db",
      }
    );
  }
  responseHook(e, t) {
    e.data?.ConsumedCapacity &&
      t.setAttribute(
        o.AWS_DYNAMODB_CONSUMED_CAPACITY,
        s(e.data.ConsumedCapacity).map((e) => JSON.stringify(e)),
      ),
      e.data?.ItemCollectionMetrics &&
        t.setAttribute(
          o.AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
          s(e.data.ItemCollectionMetrics).map((e) => JSON.stringify(e)),
        ),
      e.data?.TableNames &&
        t.setAttribute(o.AWS_DYNAMODB_TABLE_COUNT, e.data?.TableNames.length),
      e.data?.Count && t.setAttribute(o.AWS_DYNAMODB_COUNT, e.data?.Count),
      e.data?.ScannedCount &&
        t.setAttribute(o.AWS_DYNAMODB_SCANNED_COUNT, e.data?.ScannedCount);
  }
};
