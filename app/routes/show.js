import Route from '@ember/routing/route';

// Hacky. TODO: make better
function parseCurrentYear (yearAsString) {
    return yearAsString.substr(0,4);
}

export default Route.extend({
  model (params) {
    return fetch(`https://phish.in/api/v1/shows/${params.show_id}`).then(response => {
      return response.json();
    });
  },
  setupController (controller, model) {
    controller.set('model', model);
    const currentYear = parseCurrentYear(model.data.date);
    this.controllerFor('application').set('currentYear', currentYear);
    this.controllerFor('application').set('currentShow', model.data);
    }
});
