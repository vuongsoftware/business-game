import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestorDialogComponent } from '../investor-dialog/investor-dialog.component';
import { ManagerDialogComponent } from '../manager-dialog/manager-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openInvestorsDialog(): void {
    const dialogRef = this.dialog.open(InvestorDialogComponent, {
      width: '500px'
    });
  }
  openManagersDialog() {
    const dialogRef = this.dialog.open(ManagerDialogComponent, {
      width: '900px'
    });
  }
}
