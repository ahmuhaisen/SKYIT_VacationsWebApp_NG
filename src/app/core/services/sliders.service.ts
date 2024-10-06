import { Injectable } from '@angular/core';
import { Slide } from '../models/slide.model';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  get sliders(): Slide[] {
    return [
      {
        imageUrl: 'slider-0.png',
        title: 'ahmuhaisen has published a new API project 🔥',
        description: 'An ASP.NET 8 Restful API project designed to mimic the basic functionalities of Good Reads website!'
      },
      {
        imageUrl: 'slider-1.png',
        title: 'Best Spots For A Summer Vacation',
        description: 'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!'
      },
      {
        imageUrl: 'slider-2.png',
        title: 'Best Spots For A Summer Vacation',
        description: 'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!'
      }
    ];
  }
}
