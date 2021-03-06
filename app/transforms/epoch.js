import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize(serialized) {
    return moment.unix(serialized);
  },

  serialize(deserialized) {
    return deserialized;
  }
});
