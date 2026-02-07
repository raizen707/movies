import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  constructor() {}
  transform(image: string): string {
    if (!image) {
      return 'assets/no-image-banner.jpg';
    }
    if(image.length > 0) {
      return 'https://image.tmdb.org/t/p/w500' + image;
    }
    else {
        return 'assets/no-image-banner.jpg';
    }
  }

}
