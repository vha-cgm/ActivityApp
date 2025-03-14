import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterYourWayToFunButtonComponent } from './filter-your-way-to-fun-button.component';

describe('FilterYourWayToFunButtonComponent', () => {
  let component: FilterYourWayToFunButtonComponent;
  let fixture: ComponentFixture<FilterYourWayToFunButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterYourWayToFunButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterYourWayToFunButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
