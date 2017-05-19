import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  test1: string,
  test2: string
}

const state: State = {
  test1: 'test1',
  test2: 'test2'
};

@Injectable()
export class SharedService {

  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().distinctUntilChanged();

  constructor() { }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  updateState(addState: State) {
    this.subject.next(addState);
  }

}
