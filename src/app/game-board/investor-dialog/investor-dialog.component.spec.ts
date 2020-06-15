import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorDialogComponent } from './investor-dialog.component';

describe('InvestorDialogComponent', () => {
  let component: InvestorDialogComponent;
  let fixture: ComponentFixture<InvestorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
