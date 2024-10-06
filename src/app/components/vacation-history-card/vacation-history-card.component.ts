import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { Vacation } from '../../core/models/vacation.model';

@Component({
  selector: 'app-vacation-history-card',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './vacation-history-card.component.html',
  styleUrl: './vacation-history-card.component.css'
})
export class VacationHistoryCardComponent {
  vacation = input.required<Vacation>();
}
