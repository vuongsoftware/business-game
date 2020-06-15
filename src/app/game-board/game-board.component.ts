import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Business, businesses } from '../app.struct';
import { GameService } from './game.service';
import { of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  businesses: Business[];
  currentBalance = 0;
  constructor(
    private gameService: GameService,
    private cdRef: ChangeDetectorRef,
    private cookieService: CookieService) {
    this.businesses = JSON.parse(this.cookieService.get('currentState') ? this.cookieService.get('currentState') : '{}');
    if (Object.keys(this.businesses).length === 0) {
      this.businesses = businesses;
    }
  }


  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event) {
    this.cookieService.set('currentState', JSON.stringify(this.businesses));
    this.cookieService.set('currentBalance', this.currentBalance + '');
    this.cookieService.set('timestamp', Date.now().toString());
    // To remove the state management, Uncomment the next line and restart the server
    // this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.currentBalance = this.gameService.getCurrentBalance();
    this.businesses = JSON.parse(this.cookieService.get('currentState') ? this.cookieService.get('currentState') : '{}');
    if (Object.keys(this.businesses).length === 0) {
      this.businesses = businesses;
    }
    // tslint:disable-next-line: radix
    this.currentBalance = parseInt(this.cookieService.get('currentBalance')) ? parseInt(this.cookieService.get('currentBalance')) : 0;
    this.gameService.updateMoney(this.currentBalance);
    this.cdRef.detectChanges();
    this.gameService.getMoney().subscribe((balance) => {
      this.currentBalance = balance;
      this.businesses.forEach((business, index) => {
        if (this.currentBalance > business.buyPrice) {
          business.isBuyable = true;
          this.gameService.emitBuyableChange({index, isBuyable: true});
        } else {
          business.isBuyable = false;
          this.gameService.emitBuyableChange({index, isBuyable: false});
        }
      });
    });
  }

}
