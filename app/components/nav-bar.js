import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['navigation'],
  actions: {
    toggleSidebar: function() {
      Ember.$('.sidebar').toggleClass('active');
      Ember.$('main').toggleClass('sidebar-open');
    },
    toggleSearch: function() {
      Ember.$('#site-search').toggleClass('active');
    },
    toggleNotifications: function() {
      Ember.$('#notifications').toggleClass('active');
    }
  }
});
