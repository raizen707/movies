import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSlideshow } from './cast-slideshow';

describe('CastSlideshow', () => {
  let component: CastSlideshow;
  let fixture: ComponentFixture<CastSlideshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastSlideshow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastSlideshow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
