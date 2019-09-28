import {MongoObservable} from 'meteor-rxjs';

import {Refill} from '../models/refill';

export const Refills = new MongoObservable.Collection<Refill>('refills');
