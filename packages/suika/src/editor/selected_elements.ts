import { Rect } from '../scene/rect';
import { getRectCenterPoint } from '../utils/graphics';


class SelectedElements {
  private value: Rect[] = [];
  setItems(items: Rect[]) {
    this.value = items;
  }
  getItems() {
    return [...this.value];
  }
  clear() {
    this.value = [];
  }
  toggleElement(item: Rect) {
    const idx = this.value.indexOf(item);
    if (idx !== -1) {
      this.value.splice(idx, 1);
    } else {
      this.value.push(item);
    }
  }
  getCenterPoint() {
    if (this.value.length === 1) {
      return getRectCenterPoint(this.value[0]);
    } else {
      throw new Error('还没实现，敬请期待');
    }
  }
  isEmpty() {
    return this.value.length === 0;
  }
}

export default SelectedElements;