import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponentComponent } from './home-page-component';

describe('HomePageComponentComponent', () => {
  let component: HomePageComponentComponent;
  let fixture: ComponentFixture<HomePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
