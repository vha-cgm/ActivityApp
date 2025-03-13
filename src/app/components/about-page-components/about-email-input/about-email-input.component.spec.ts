import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEmailInputComponent } from './about-email-input.component';

describe('AboutEmailInputComponent', () => {
  let component: AboutEmailInputComponent;
  let fixture: ComponentFixture<AboutEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEmailInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
