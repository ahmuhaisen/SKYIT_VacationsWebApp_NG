import { Component, input } from '@angular/core';
import { VacationRequest } from '../../core/models/vacation-request.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HighlightSearchPipe } from '../../core/pipes/highlight-search.pipe';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [
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
}
