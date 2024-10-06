import { Component, input } from '@angular/core';

import { VacationRequest } from '../../../core/models/vacation-request.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pending-request-card',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './pending-request-card.component.html',
  styleUrl: './pending-request-card.component.css'
})
export class PendingRequestCardComponent {
  request = input.required<VacationRequest>();
}
