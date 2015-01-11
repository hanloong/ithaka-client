import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var project = this.controller.get('model');
    if (project.get('isNew')) {
      project.destroyRecord();
    }
  },
  model: function() {
    return this.store.createRecord('project');
  }
});
