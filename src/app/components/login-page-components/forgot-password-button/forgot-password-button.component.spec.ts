import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordButtonComponent } from './forgot-password-button.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordButtonComponent;
  let fixture: ComponentFixture<ForgotPasswordButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
