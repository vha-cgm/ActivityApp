import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirstNameInputComponent } from './about-first-name-input.component';

describe('AboutFirstNameInputComponent', () => {
  let component: AboutFirstNameInputComponent;
  let fixture: ComponentFixture<AboutFirstNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFirstNameInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFirstNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
