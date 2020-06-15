import { Injectable, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
    private subject = new Subject<number>();
    private automationChanged = new Subject<number>();
    private isBuyable = new Subject<any>();

    currentBalance = 0;

    constructor() {
        this.subject.subscribe((value) => {
            this.currentBalance = value;
        });
    }
    updateMoney(value)  {
        this.subject.next(value);
    }

    getMoney(): Observable<any> {
        return this.subject.asObservable();
    }

    getCurrentBalance() {
        return this.currentBalance;
    }

    automationChangedEvent() {
        return this.automationChanged;
    }

    emitAutomateBusiness(index) {
        return this.automationChanged.next(index);
    }

    buyableChangeEvent() {
        return this.isBuyable;
    }

    emitBuyableChange(obj) {
        return this.isBuyable.next({index: obj.index, isBuyable: obj.isBuyable});
    }
 }
