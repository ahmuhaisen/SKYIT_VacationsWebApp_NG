import { Component, input } from '@angular/core';

import { NgClass } from '@angular/common';
import { Slide } from '../../../../core/models/slide.model';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './slide.component.html',
})
export class SlideComponent {
  slider = input.required<Slide>();
  isActive = input.required<boolean>();
}
