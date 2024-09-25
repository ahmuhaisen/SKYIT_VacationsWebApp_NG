import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

import { VacationRequest } from '../../core/models/vacation-request.model';
import { HighlightSearchPipe } from '../../core/pipes/highlight-search.pipe';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [
    NgClass,
    DatePipe,
    CurrencyPipe,
    HighlightSearchPipe
  ],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {

  request = input.required<VacationRequest>();
  searchTerm = input<string>();

  isApproved = false;
  isDeclined = false;

  onApprove() {
    this.isApproved = true;
  }
  onDecline() {
    this.isApproved = false;
    this.isDeclined = true;
  }
}
