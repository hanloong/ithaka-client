import Ember from 'ember';
import config from '../config/environment';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  activate: function() {
    Ember.$('body').addClass('app');
  },
  deactivate: function() {
    Ember.$('body').removeClass('app');
  },
  model: function() {
    return Ember.RSVP.hash({
      projects: this.store.find('project'),
      current_user: Ember.$.getJSON(`${config.apiURL}/api/v1/current_user`, (data) => {
        this.store.push('user', data.user);
        return this.store.find('user', data.user.id);
      })
    });
  }
});
