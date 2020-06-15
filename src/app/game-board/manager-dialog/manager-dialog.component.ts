import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { businesses } from 'src/app/app.struct';
import { GameService } from '../game.service';
import { managers, Manager } from './manager.struct';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-manager-dialog',
  templateUrl: './manager-dialog.component.html',
  styleUrls: ['./manager-dialog.component.scss']
})
export class ManagerDialogComponent implements OnInit {
  managers: Manager[];
  currentBalance: any;
  buttonLabel = 'Hire';
  hiring = [true, true, true, true, true, true, true, true];

  constructor(
    private gamingService: GameService,
    public dialogRef: MatDialogRef<ManagerDialogComponent>,
    private cookieService: CookieService,
    private cdRef: ChangeDetectorRef) { }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event) {
    // Saving Managers hired status
    this.cookieService.set('hired-managers', JSON.stringify(this.hiring));
    // To remove the state management, Uncomment the next line and restart the server
    // this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.managers = managers;
    this.currentBalance = this.gamingService.getCurrentBalance();
    this.gamingService.getMoney().subscribe((currentBalance) => {
      this.currentBalance = currentBalance;
    });
    if (this.cookieService.check('hired-managers')) {
      this.hiring = JSON.parse(this.cookieService.get('hired-managers'));
    }
    this.dialogRef.beforeClosed().subscribe(() => {
      this.cookieService.set('hired-managers', JSON.stringify(this.hiring));
      // To remove the state management, Uncomment the next line and restart the server
      // this.cookieService.deleteAll();
    });
  }

  automateBusiness(index) {
    this.hiring[index] = false;
    this.buttonLabel = 'Hired';
    this.gamingService.emitAutomateBusiness(index);
    this.gamingService.updateMoney(this.currentBalance - this.managers[index].fees)
    this.dialogRef.close();
  }

}
