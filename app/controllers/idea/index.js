import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newComment = this.store.createRecord('comment', {
        idea: this.get('model').idea,
        comment: this.get('newComment')
      });
      newComment.save().then(() => {
        this.set('newComment', '');
      }).catch(function() {
      });
    }
  }
});
