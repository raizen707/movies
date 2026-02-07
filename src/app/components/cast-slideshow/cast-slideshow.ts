import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PosterPipe } from '../../pipes/poster-pipe';

@Component({
  selector: 'app-cast-slideshow',
  imports: [RouterModule, CommonModule, PosterPipe],
  templateUrl: './cast-slideshow.html',
  styleUrl: './cast-slideshow.css',
})
export class CastSlideshow implements OnInit  {
  constructor() {}
  @Input() cast: Cast[] = [];
  ngOnInit(): void {
    console.log('CastSlideshow');
  }
}
