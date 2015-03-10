import Ember from 'ember';

export default Ember.Route.extend({
  newComment: '',
  model: function() {
    var idea = this.modelFor('idea');
    return Ember.RSVP.hash({
      idea: idea,
      comments: idea.get('comments')
    });
  }
});
