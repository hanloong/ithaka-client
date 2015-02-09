import DS from 'ember-data';

export default DS.Model.extend({
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  score:                DS.attr('number'),
  anonymous:            DS.attr('boolean'),
  favourites_count:     DS.attr('number'),
  comments_count:       DS.attr('number'),
  project:              DS.belongsTo('project'),
  user:                 DS.belongsTo('user'),
  comments:             DS.hasMany('comment', {async: true})
});
