import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSectionComponent } from './forgot-password-section.component';

describe('ForgotPasswordSectionComponent', () => {
  let component: ForgotPasswordSectionComponent;
  let fixture: ComponentFixture<ForgotPasswordSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
