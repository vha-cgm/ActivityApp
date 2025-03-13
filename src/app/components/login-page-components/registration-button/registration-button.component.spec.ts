import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationButtonComponent } from './registration-button.component';

describe('RegistrationButtonComponent', () => {
  let component: RegistrationButtonComponent;
  let fixture: ComponentFixture<RegistrationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
