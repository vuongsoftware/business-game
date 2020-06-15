import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-investor-dialog',
  templateUrl: './investor-dialog.component.html',
  styleUrls: ['./investor-dialog.component.scss']
})
export class InvestorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InvestorDialogComponent>) {}

  ngOnInit(): void {
  }

}
