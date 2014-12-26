import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});



import { setCsrfUrl } from 'rails-csrf/config';
setCsrfUrl('/api/v1/csrf');

loadInitializers(App, config.modulePrefix);
loadInitializers(App, 'rails-csrf');

Ember.Application.initializer({
  name:       'authentication',
  after:      'simple-auth',
  initialize: function(container) {
    var applicationRoute = container.lookup('route:application');
    var session          = container.lookup('simple-auth-session:main');
    // handle the session events
    session.on('sessionAuthenticationSucceeded', function() {
      applicationRoute.transitionTo('app.index');
    });
    session.on('sessionInvalidationSucceeded', function() {
      applicationRoute.transitionTo('public');
    });
  }
});

export default App;
