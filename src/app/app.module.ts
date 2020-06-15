import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GameBoardComponent } from './game-board/game-board.component';
import { NavbarComponent } from './game-board/navbar/navbar.component';
import { BusinessComponent } from './game-board/business/business.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InvestorDialogComponent } from './game-board/investor-dialog/investor-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ManagerDialogComponent } from './game-board/manager-dialog/manager-dialog.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    NavbarComponent,
    BusinessComponent,
    InvestorDialogComponent,
    ManagerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
