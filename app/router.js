import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('invites-module');
  this.route('invite-module', function() {
    this.route('find-users');
    this.route('show-invites');
  });
});

export default Router;
