import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('year', {path: '/years/:year_id'});
  this.route('show', {path: '/shows/:show_id'});
});

export default Router;
