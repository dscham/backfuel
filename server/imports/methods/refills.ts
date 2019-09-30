import {Meteor} from 'meteor/meteor';

import {Refills} from '../../../imports/collections/refills';
import {Refill} from "../../../imports/models/refill";

Meteor.methods({
  addRefill(refill: Refill) {
    Refills.insert(refill);
  },
  removeRefill(_id: string) {
    Refills.remove({
      _id
    })
  }
});
