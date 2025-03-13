import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLastNameInputComponent } from './about-last-name-input.component';

describe('AboutLastNameInputComponent', () => {
  let component: AboutLastNameInputComponent;
  let fixture: ComponentFixture<AboutLastNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLastNameInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLastNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
