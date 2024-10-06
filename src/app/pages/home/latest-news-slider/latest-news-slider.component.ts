import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Slide } from '../../../core/models/slide.model';
import { SlidersService } from '../../../core/services/sliders.service';
import { NgClass } from '@angular/common';
import { SlideComponent } from "./slide/slider.component";

@Component({
  selector: 'app-latest-news-slider',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgClass,
    SlideComponent],
  templateUrl: './latest-news-slider.component.html',
  styleUrl: './latest-news-slider.component.css'
})
export class LatestNewsSliderComponent {
  private slidersService = inject(SlidersService);

  get sliders(): Slide[] {
    return this.slidersService.sliders;
  }
}
