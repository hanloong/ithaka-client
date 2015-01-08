import Ember from 'ember';

export default Ember.ObjectController.extend({
  name: '',
  description: '',
  actions: {
    save: function() {
      var newProject = this.store.createRecord('project', {
        name: this.name,
        description: this.description
      });
      newProject.save();
      this.transitionToRoute('projects');
    }
  }
});
