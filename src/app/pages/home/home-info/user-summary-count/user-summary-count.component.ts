import { Component, input } from '@angular/core';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-user-summary-count',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './user-summary-count.component.html'
})
export class UserSummaryCountComponent {
  icon = input.required<IconDefinition>();
  title = input.required<string>();
  value = input<number>();
}
