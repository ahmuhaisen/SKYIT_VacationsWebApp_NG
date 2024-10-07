import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgClass,
    NgFor,
    RouterLink
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  leftArrowIcon = faChevronLeft;
  rightArrowIcon = faChevronRight;

  pageIndex = input.required<number>();
  totalPages = input.required<number>();
}
