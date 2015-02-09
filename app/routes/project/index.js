import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var project = this.modelFor('project');
    return Ember.RSVP.hash({
      project: project,
      ideas: project.get('ideas')
    });
  }
});
