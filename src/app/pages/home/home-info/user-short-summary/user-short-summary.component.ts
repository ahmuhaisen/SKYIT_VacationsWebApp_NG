import { RouterLink } from '@angular/router';
import { Component, input } from '@angular/core';

import { UserSummary } from '../../../../core/models/user.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareUpRight, faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-short-summary',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './user-short-summary.component.html',
})
export class UserShortSummaryComponent {
  userIcon = faUserLarge
  arrowIcon = faSquareUpRight

  userSummary = input.required<UserSummary>();
}
