/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ithaka-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiURL = 'http://localhost:5000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.apiURL = '';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV.apiURL = 'https://ithaka.io';
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'img-src': "'self' gravatar.com",
    'style-src': "'self' 'unsafe-inline'",
    'report-uri': "'self'",
    'connect-src': ENV.apiURL
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    authenticationRoute: 'session.login',
    crossOriginWhitelist: [ENV.apiURL]
  };


  ENV['simple-auth-devise'] = {
    serverTokenEndpoint:  ENV.apiURL + '/users/sign_in',
    resourceName:         'user'
  };

  return ENV;
};
