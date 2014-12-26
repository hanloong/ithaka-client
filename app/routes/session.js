import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('session');
  },
  deactivate: function() {
    Ember.$('body').removeClass('session');
  },
});
