// vendor/module-84557.js — webpack module 84557
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.selectors = void 0);
var r = n(78207 /* vendor/module-78207 */),
  o = n(68323 /* vendor/module-68323 */),
  i = n(25411 /* vendor/module-25411 */);
t.selectors = {
  id: (0, r.createSelector)((e) => e.id),
  labelId: (0, r.createSelector)((e) => e.labelId),
  modal: (0, r.createSelector)((e) => e.modal),
  multiple: (0, r.createSelector)((e) => e.multiple),
  items: (0, r.createSelector)((e) => e.items),
  itemToStringLabel: (0, r.createSelector)((e) => e.itemToStringLabel),
  itemToStringValue: (0, r.createSelector)((e) => e.itemToStringValue),
  isItemEqualToValue: (0, r.createSelector)((e) => e.isItemEqualToValue),
  value: (0, r.createSelector)((e) => e.value),
  hasSelectedValue: (0, r.createSelector)((e) => {
    const { value: t, multiple: n, itemToStringValue: r } = e;
    return (
      null != t &&
      (n && Array.isArray(t)
        ? t.length > 0
        : "" !== (0, i.stringifyAsValue)(t, r))
    );
  }),
  hasNullItemLabel: (0, r.createSelector)(
    (e, t) => !!t && (0, i.hasNullItemLabel)(e.items),
  ),
  open: (0, r.createSelector)((e) => e.open),
  mounted: (0, r.createSelector)((e) => e.mounted),
  forceMount: (0, r.createSelector)((e) => e.forceMount),
  transitionStatus: (0, r.createSelector)((e) => e.transitionStatus),
  openMethod: (0, r.createSelector)((e) => e.openMethod),
  activeIndex: (0, r.createSelector)((e) => e.activeIndex),
  selectedIndex: (0, r.createSelector)((e) => e.selectedIndex),
  isActive: (0, r.createSelector)((e, t) => e.activeIndex === t),
  isSelected: (0, r.createSelector)((e, t) => {
    const n = e.isItemEqualToValue,
      r = e.value;
    return e.multiple
      ? Array.isArray(r) && r.some((e) => (0, o.compareItemEquality)(t, e, n))
      : (0, o.compareItemEquality)(t, r, n);
  }),
  isSelectedByFocus: (0, r.createSelector)((e, t) => e.selectedIndex === t),
  popupProps: (0, r.createSelector)((e) => e.popupProps),
  triggerProps: (0, r.createSelector)((e) => e.triggerProps),
  triggerElement: (0, r.createSelector)((e) => e.triggerElement),
  positionerElement: (0, r.createSelector)((e) => e.positionerElement),
  listElement: (0, r.createSelector)((e) => e.listElement),
  popupSide: (0, r.createSelector)((e) => e.popupSide),
  scrollUpArrowVisible: (0, r.createSelector)((e) => e.scrollUpArrowVisible),
  scrollDownArrowVisible: (0, r.createSelector)(
    (e) => e.scrollDownArrowVisible,
  ),
  hasScrollArrows: (0, r.createSelector)((e) => e.hasScrollArrows),
};
