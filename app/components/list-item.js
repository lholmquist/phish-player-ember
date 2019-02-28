import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['list-group-item list-group-item-action'],
  click () {
    if (this.onClick) {
      this.onClick();
    }
  }
});
