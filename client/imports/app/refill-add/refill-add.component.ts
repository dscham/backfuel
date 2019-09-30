import {Component} from '@angular/core';

import {Meteor} from 'meteor/meteor';
import {Refill} from "../../../../imports/models/refill";

@Component({
  selector: 'refill-add',
  templateUrl: 'refill-add.component.html',
  styleUrls: ['refill-add.component.scss']
})
export class RefillAddComponent {
  private refill: Refill = {
    amount: null,
    price: null,
    kilometers: null
  };

  addRefill() {
    console.log(this.refill);
    Meteor.call('addRefill', this.refill);
    this.refill = {
      amount: null,
      price: null,
      kilometers: null
    };
  }
}
