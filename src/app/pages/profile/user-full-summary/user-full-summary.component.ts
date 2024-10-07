import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserService } from '../../../core/services/user.service';
import { faCalendarMinus, faHourglassHalf, faPills, faSquareUpRight, faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-full-summary',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './user-full-summary.component.html',
  styleUrl: './user-full-summary.component.css'
})
export class UserFullSummaryComponent {
  userIcon = faUserLarge;
  arrowIcon = faSquareUpRight;
  hourglassHalfIcon = faHourglassHalf;
  calenderMinusIcon = faCalendarMinus;
  pillsIcon = faPills;

  private userService = inject(UserService);

  userSummary = this.userService.loggedInUserSummary;

  sickDaysLeft = this.userService.loggedInUserSickDaysLeft;
  vacationDaysLeft = this.userService.loggedInUserVacationDaysLeft;
}
