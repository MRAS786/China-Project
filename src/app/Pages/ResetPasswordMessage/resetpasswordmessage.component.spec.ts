import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordmessageComponent } from './resetpasswordmessage.component';

describe('ResetpasswordmessageComponent', () => {
  let component: ResetpasswordmessageComponent;
  let fixture: ComponentFixture<ResetpasswordmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
