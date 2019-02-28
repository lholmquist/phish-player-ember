import Controller, { inject } from '@ember/controller';

export default Controller.extend({
  application: inject(),
  actions: {
    navigateTo (years) {
      this.transitionToRoute('year', years);
    }
  }
});
