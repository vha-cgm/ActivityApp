import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLeftSectionComponent } from './about-left-section.component';

describe('AboutLeftSectionComponent', () => {
  let component: AboutLeftSectionComponent;
  let fixture: ComponentFixture<AboutLeftSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLeftSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLeftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
