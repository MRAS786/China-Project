import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteraccountmessageComponent } from './registeraccountmessage.component';

describe('RegisteraccountmessageComponent', () => {
  let component: RegisteraccountmessageComponent;
  let fixture: ComponentFixture<RegisteraccountmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteraccountmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteraccountmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
