import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHereSectionComponent } from './new-here-section.component';

describe('NewHereSectionComponent', () => {
  let component: NewHereSectionComponent;
  let fixture: ComponentFixture<NewHereSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHereSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHereSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
