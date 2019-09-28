import {Meteor} from 'meteor/meteor';

import {Refills} from '../../../imports/collections/refills';

Meteor.publish('refillList', function() {
  return Refills.find({});
});
