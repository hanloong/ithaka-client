import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('app', function() {
    this.resource('projects', function() {
      this.route('new');
    });

    this.resource('ideas', function() {
      this.route('new');
    });
  });

  this.route('public', {path: '/' }, function() {
    this.route('how-it-works');
    this.route('login');
    this.route('register');
    this.route('reset-password');
  });

});

export default Router;
