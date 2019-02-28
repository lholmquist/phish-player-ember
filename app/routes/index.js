import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('https://phish.in/api/v1/years').then(request => {
      return request.json().then(years => {
        return years.data.reverse();
      });
    });
  }
});
