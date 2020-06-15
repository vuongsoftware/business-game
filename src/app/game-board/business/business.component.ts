import { Component, OnInit, Input, ChangeDetectorRef, KeyValueDiffers, KeyValueChanges, KeyValueDiffer, HostListener } from '@angular/core';
import { businesses, Business } from 'src/app/app.struct';
import { interval, of } from 'rxjs';
import { GameService } from '../game.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  static totalBalance: number;

  @Input()
  currentIndex;

  isActive = false;
  isBuyable = false;
  value = 0;
  time: any;
  currentBalance: number;
  isIncreaseRevenueButtonDisable = false;
  business: Business;
  automationDiffer: KeyValueDiffer<string, any>;
  lastTimestamp: string;

  constructor(private gameService: GameService,
              private cdRef: ChangeDetectorRef,
              private differs: KeyValueDiffers,
              private cookieService: CookieService) {
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event) {
    this.cookieService.set(`currentBusiness${this.currentIndex}`, JSON.stringify(this.business));
    BusinessComponent.totalBalance = 0;
    // To remove the state management, Uncomment the next line and restart the server
    // this.cookieService.deleteAll();
  }

  valueChanged(changes: KeyValueChanges<string, any>) {
    console.log(changes);
  }

  ngOnInit(): void {
    /* Initializing the current business, detecting Change in object from other components
       and updating it in the current business itself
    */

    // Managing Last Logged In State
    this.business = JSON.parse(this.cookieService.get(`currentBusiness${this.currentIndex}`)
     ? this.cookieService.get(`currentBusiness${this.currentIndex}`) : '{}');
    if (Object.keys(this.business).length === 0) {
      this.business = businesses[this.currentIndex];
    }

    // tslint:disable-next-line: radix
    this.currentBalance = parseInt(this.cookieService.get('currentBalance')) || this.gameService.getCurrentBalance();
    this.gameService.getMoney().subscribe((balance) => {
      this.currentBalance = balance;
    });

    // Managing timestamp data
    this.lastTimestamp = this.cookieService.get('timestamp');
    if (this.lastTimestamp && this.business.isAutomated) {
      // tslint:disable-next-line: radix
      const addedBalance = (Date.now() - parseInt(this.lastTimestamp)) / 1000 * this.business.currentPrice;
      console.log(`Added balance from the business ${this.business.name}:` + addedBalance);
      this.gameService.updateMoney(this.currentBalance + addedBalance);
      BusinessComponent.totalBalance += addedBalance;
      this.automate();
    }


    this.gameService.automationChangedEvent().subscribe((index) => {
      if (index === this.currentIndex && !this.business.isAutomated) {
        this.automate();
      }
    });

    this.gameService.buyableChangeEvent().subscribe((obj) => {
      if (obj.index === this.currentIndex) {
        this.business.isBuyable = obj.isBuyable;
      }
    });

    this.time = this.business.timeForRevenue;
    // this.automationDiffer = this.differs.find(this.business).create();
  }

  increaseRevenue() {
    // Increasing Current Revenue when the user clicks the revenue button
    this.startTimer(this.business.timeForRevenue * 1000);
    this.isIncreaseRevenueButtonDisable = true;
  }

  startBusiness() {
    // Whenever a new business is initialized, it is being initialized with initial applicable rates
    if (!this.business.isBuyable) {
      return;
    }
    const currentPrice = this.business.currentPrice;
    this.business.isActive = true;
    this.currentBalance -= this.business.buyPrice;
    this.business.buyPrice *= (1 + this.business.increasePercentage / 100);
    // this.startTimer(3000);
    this.gameService.updateMoney(this.currentBalance);
    this.cdRef.detectChanges();
    // this.cdRef.detectChanges();
  }

  startTimer(seconds: number) {

    // Progress Bar
    const timer$ = interval(seconds / 100);
    const sub = timer$.subscribe((sec) => {
      this.value = sec;
      if (sec === 100) {
        sub.unsubscribe();
        this.currentBalance += this.business.currentPrice;
        if (!this.business.isAutomated) {
          this.isIncreaseRevenueButtonDisable = false;
        }
        this.gameService.updateMoney(this.currentBalance);
        setTimeout(() => {
          this.value = 0;
        }, 500);
      }
    });

    // Clock timer runs every second
    const clockTimer = interval(1000);
    const clockTimerSubscription = clockTimer.subscribe((sec) => {
      this.time = (seconds / 1000) - sec;
      if (this.time === 0) {
        clockTimerSubscription.unsubscribe();
        this.time = this.business.timeForRevenue;
      }
    });
  }


  buyBranch() {
    this.currentBalance -= this.business.buyPrice;
    this.gameService.updateMoney(this.currentBalance);
    this.business.buyPrice *= (1 + this.business.increasePercentage / 100);
    this.business.currentBusinessCount++;
    this.business.currentPrice += this.business.increasedRevenueRate;
    this.cdRef.detectChanges();
  }

  automate() {
    this.business.isAutomated = true;
    this.increaseRevenue();
    const timer$ = interval(this.business.timeForRevenue * 1000);
    timer$.subscribe((sec) => {
      this.increaseRevenue();
      this.cdRef.detectChanges();
    });
  }

 }
