import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('app');
  },
  deactivate: function() {
    Ember.$('body').removeClass('app');
  },
  model: function() {
    return Ember.RSVP.hash({
      projects: this.store.find('project'),
      current_user: Ember.$.getJSON('/api/v1/current_user', (data) => {
        this.store.push('user', data.user);
        return this.store.find('user', data.user.id);
      })
    });
  }
});
