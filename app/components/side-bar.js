import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDropdown: function(target) {
      Ember.$(`#${target}`).toggleClass('active');
    }
  }
});
