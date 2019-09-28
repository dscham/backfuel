import {Meteor} from 'meteor/meteor';

import {Refills} from '../../../imports/collections/refills';

Meteor.methods({
  addRefill(content: string) {
    Refills.insert({
      content
    });
  },
  removeRefill(_id: string) {
    Refills.remove({
      _id
    })
  }
});
