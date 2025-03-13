import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRightSectionComponent } from './about-right-section.component';

describe('AboutRightSectionComponent', () => {
  let component: AboutRightSectionComponent;
  let fixture: ComponentFixture<AboutRightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRightSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
