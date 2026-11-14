// vendor/module-991.js — webpack module 991
// params: (t, e, i) = (module, exports, require)
var n = i(551 /* vendor/module-551 */).FDLayoutNode,
  r = i(551 /* vendor/module-551 */).IMath;
function o(t, e, i, r) {
  n.call(this, t, e, i, r);
}
for (var s in ((o.prototype = Object.create(n.prototype)), n)) o[s] = n[s];
(o.prototype.calculateDisplacement = function () {
  var t = this.graphManager.getLayout();
  null != this.getChild() && this.fixedNodeWeight
    ? ((this.displacementX +=
        (t.coolingFactor *
          (this.springForceX + this.repulsionForceX + this.gravitationForceX)) /
        this.fixedNodeWeight),
      (this.displacementY +=
        (t.coolingFactor *
          (this.springForceY + this.repulsionForceY + this.gravitationForceY)) /
        this.fixedNodeWeight))
    : ((this.displacementX +=
        (t.coolingFactor *
          (this.springForceX + this.repulsionForceX + this.gravitationForceX)) /
        this.noOfChildren),
      (this.displacementY +=
        (t.coolingFactor *
          (this.springForceY + this.repulsionForceY + this.gravitationForceY)) /
        this.noOfChildren)),
    Math.abs(this.displacementX) > t.coolingFactor * t.maxNodeDisplacement &&
      (this.displacementX =
        t.coolingFactor * t.maxNodeDisplacement * r.sign(this.displacementX)),
    Math.abs(this.displacementY) > t.coolingFactor * t.maxNodeDisplacement &&
      (this.displacementY =
        t.coolingFactor * t.maxNodeDisplacement * r.sign(this.displacementY)),
    this.child &&
      this.child.getNodes().length > 0 &&
      this.propogateDisplacementToChildren(
        this.displacementX,
        this.displacementY,
      );
}),
  (o.prototype.propogateDisplacementToChildren = function (t, e) {
    for (var i, n = this.getChild().getNodes(), r = 0; r < n.length; r++)
      null == (i = n[r]).getChild()
        ? ((i.displacementX += t), (i.displacementY += e))
        : i.propogateDisplacementToChildren(t, e);
  }),
  (o.prototype.move = function () {
    var t = this.graphManager.getLayout();
    (null != this.child && 0 != this.child.getNodes().length) ||
      (this.moveBy(this.displacementX, this.displacementY),
      (t.totalDisplacement +=
        Math.abs(this.displacementX) + Math.abs(this.displacementY))),
      (this.springForceX = 0),
      (this.springForceY = 0),
      (this.repulsionForceX = 0),
      (this.repulsionForceY = 0),
      (this.gravitationForceX = 0),
      (this.gravitationForceY = 0),
      (this.displacementX = 0),
      (this.displacementY = 0);
  }),
  (o.prototype.setPred1 = function (t) {
    this.pred1 = t;
  }),
  (o.prototype.getPred1 = function () {
    return pred1;
  }),
  (o.prototype.getPred2 = function () {
    return pred2;
  }),
  (o.prototype.setNext = function (t) {
    this.next = t;
  }),
  (o.prototype.getNext = function () {
    return next;
  }),
  (o.prototype.setProcessed = function (t) {
    this.processed = t;
  }),
  (o.prototype.isProcessed = function () {
    return processed;
  }),
  (t.exports = o);
