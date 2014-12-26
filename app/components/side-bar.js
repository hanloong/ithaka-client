import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter: function() {
    if (!Ember.$(".sidebar").hasClass("active")) {
      Ember.$('main').addClass('sidebar-open');
    }
  },
  mouseLeave: function() {
    if (!Ember.$(".sidebar").hasClass("active")) {
      Ember.$('main').removeClass('sidebar-open');
    }
  },
  actions: {
    toggleDropdown: function(target) {
      Ember.$(`#${target}`).toggleClass('active');
    }
  }
});
