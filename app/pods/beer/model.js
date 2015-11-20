import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  description: DS.attr('string'),
  notes: DS.attr('string'),
  count: DS.attr('number')
});
