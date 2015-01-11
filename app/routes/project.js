import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      project: this.store.find('project', params.id),
      ideas: this.store.find('idea', { project_id: params.id })
    });
  }
});
