import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faSquareUpRight, faUserLarge, faUsers } from '@fortawesome/free-solid-svg-icons';

import { UserSummary } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-summary.component.html',
  styleUrl: './user-summary.component.css'
})
export class UserSummaryComponent implements OnInit {
  userIcon = faUserLarge
  arrowIcon = faSquareUpRight
  requestsIcon = faAddressBook
  leaveRequestsIcon = faUsers

  userService = inject(UserService);

  userSummary?: UserSummary = undefined;

  ngOnInit(): void {
    this.userSummary = this.userService.loggedInUserSummary;
  }
}
