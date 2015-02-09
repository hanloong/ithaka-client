import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get('model').save().then((idea) => {
        this.transitionToRoute('project', idea.get('project').id);
      }).catch(function() {
      });
    }
  }
});
