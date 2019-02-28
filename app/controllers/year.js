import Controller, { inject } from '@ember/controller';

export default Controller.extend({
  application: inject(),
  actions: {
    navigateTo(show) {
      // this.get('application').set('currentNav', )
      this.transitionToRoute('show', show);
    }
  }
});
