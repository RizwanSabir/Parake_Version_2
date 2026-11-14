// vendor/module-36826.js — webpack module 36826
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.selectors = void 0);
var r = n(78207 /* vendor/module-78207 */),
  o = n(68323 /* vendor/module-68323 */),
  i = n(25411 /* vendor/module-25411 */);
t.selectors = {
  id: (0, r.createSelector)((e) => e.id),
  labelId: (0, r.createSelector)((e) => e.labelId),
  items: (0, r.createSelector)((e) => e.items),
  selectedValue: (0, r.createSelector)((e) => e.selectedValue),
  hasSelectionChips: (0, r.createSelector)((e) => {
    const t = e.selectedValue;
    return Array.isArray(t) && t.length > 0;
  }),
  hasSelectedValue: (0, r.createSelector)((e) => {
    const { selectedValue: t, selectionMode: n } = e;
    return null != t && ("multiple" !== n || !Array.isArray(t) || t.length > 0);
  }),
  hasNullItemLabel: (0, r.createSelector)(
    (e, t) => !!t && (0, i.hasNullItemLabel)(e.items),
  ),
  open: (0, r.createSelector)((e) => e.open),
  mounted: (0, r.createSelector)((e) => e.mounted),
  forceMounted: (0, r.createSelector)((e) => e.forceMounted),
  inline: (0, r.createSelector)((e) => e.inline),
  activeIndex: (0, r.createSelector)((e) => e.activeIndex),
  selectedIndex: (0, r.createSelector)((e) => e.selectedIndex),
  isActive: (0, r.createSelector)((e, t) => e.activeIndex === t),
  isSelected: (0, r.createSelector)((e, t) => {
    const n = e.isItemEqualToValue,
      r = e.selectedValue;
    return Array.isArray(r)
      ? r.some((e) => (0, o.compareItemEquality)(t, e, n))
      : (0, o.compareItemEquality)(t, r, n);
  }),
  transitionStatus: (0, r.createSelector)((e) => e.transitionStatus),
  popupProps: (0, r.createSelector)((e) => e.popupProps),
  inputProps: (0, r.createSelector)((e) => e.inputProps),
  triggerProps: (0, r.createSelector)((e) => e.triggerProps),
  itemProps: (0, r.createSelector)((e) => e.itemProps),
  positionerElement: (0, r.createSelector)((e) => e.positionerElement),
  listElement: (0, r.createSelector)((e) => e.listElement),
  popupId: (0, r.createSelector)((e) => e.popupId),
  triggerElement: (0, r.createSelector)((e) => e.triggerElement),
  inputElement: (0, r.createSelector)((e) => e.inputElement),
  inputGroupElement: (0, r.createSelector)((e) => e.inputGroupElement),
  popupSide: (0, r.createSelector)((e) => e.popupSide),
  openMethod: (0, r.createSelector)((e) => e.openMethod),
  inputInsidePopup: (0, r.createSelector)((e) => e.inputInsidePopup),
  inputOwnsFormValue: (0, r.createSelector)((e) => e.inputOwnsFormValue),
  selectionMode: (0, r.createSelector)((e) => e.selectionMode),
  name: (0, r.createSelector)((e) => e.name),
  form: (0, r.createSelector)((e) => e.form),
  disabled: (0, r.createSelector)((e) => e.disabled),
  readOnly: (0, r.createSelector)((e) => e.readOnly),
  required: (0, r.createSelector)((e) => e.required),
  grid: (0, r.createSelector)((e) => e.grid),
  virtualized: (0, r.createSelector)((e) => e.virtualized),
  itemToStringLabel: (0, r.createSelector)((e) => e.itemToStringLabel),
  isItemEqualToValue: (0, r.createSelector)((e) => e.isItemEqualToValue),
  modal: (0, r.createSelector)((e) => e.modal),
  autoHighlight: (0, r.createSelector)((e) => e.autoHighlight),
  submitOnItemClick: (0, r.createSelector)((e) => e.submitOnItemClick),
};
