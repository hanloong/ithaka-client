import DS from 'ember-data';

export default DS.Model.extend({
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  public:               DS.attr('boolean'),
  sandbox:              DS.attr('boolean'),
  allow_anonymous:      DS.attr('boolean'),
  expires_at:           DS.attr('date'),
  ideas:                DS.hasMany('idea', {async: true}),
  user:                 DS.belongsTo('user'),
});
