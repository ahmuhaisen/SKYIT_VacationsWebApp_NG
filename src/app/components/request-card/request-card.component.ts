import { Component, input } from '@angular/core';
import { VacationRequest } from '../../core/models/vacation-request.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  request = input.required<VacationRequest>();
}
