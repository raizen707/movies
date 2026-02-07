import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPosterGrid } from './peliculas-poster-grid';

describe('PeliculasPosterGrid', () => {
  let component: PeliculasPosterGrid;
  let fixture: ComponentFixture<PeliculasPosterGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasPosterGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPosterGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
