import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    return fetch(`https://phish.in/api/v1/years/${params.year_id}`).then(response => {
      return response.json();
    });
  }
});
