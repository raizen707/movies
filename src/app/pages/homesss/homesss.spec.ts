import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesss } from './homesss';

describe('Homesss', () => {
  let component: Homesss;
  let fixture: ComponentFixture<Homesss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homesss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homesss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
