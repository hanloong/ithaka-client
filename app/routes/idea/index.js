import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var idea = this.modelFor('idea');
    console.log(idea);
    console.log(idea.get('comments'));
    return Ember.RSVP.hash({
      idea: idea,
      comments: idea.get('comments')
    });
  }
});
