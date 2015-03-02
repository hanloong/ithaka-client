import DS from 'ember-data';

export default DS.Model.extend({
  comment:              DS.attr('string'),
  anonymous:            DS.attr('boolean'),
  user:                 DS.belongsTo('user'),
  idea:                 DS.belongsTo('idea')
});
