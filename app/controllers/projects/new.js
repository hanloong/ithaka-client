import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get('model').save().then((project) => {
        this.transitionToRoute('project', project.id);
      }).catch(function() {
      });
    }
  }
});
