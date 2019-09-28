import {Component} from '@angular/core';

import {Meteor} from 'meteor/meteor';

@Component({
  selector: 'refill-add',
  templateUrl: 'refill-add.html'
})
export class RefillAddComponent {
  content: string;
  addRefill() {
    Meteor.call('addRefill', this.content);
    this.content = null;
  }
}
