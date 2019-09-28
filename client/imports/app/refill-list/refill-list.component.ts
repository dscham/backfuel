import {Component, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';

import {Refills} from '../../../../imports/collections/refills';
import {Refill} from '../../../../imports/models/refill';

@Component({
  selector: 'refill-list',
  templateUrl: 'refill-list.html',
  styleUrls: ['refill-list.scss']
})
export class RefillListComponent implements OnInit, OnDestroy {
  refills: Observable<Refill[]>;
  refillListSubscription: Subscription;
  ngOnInit() {
    this.refillListSubscription = MeteorObservable.subscribe('refillList').subscribe(() => {
      this.refills = Refills.find();
    });
  }
  ngOnDestroy() {
    if (this.refillListSubscription) {
      this.refillListSubscription.unsubscribe();
    }
  }
  removeRefill(_id: string) {
    Meteor.call('removeRefill', _id);
  }
}
