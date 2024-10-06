import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faSquareUpRight, faUserLarge, faUsers } from '@fortawesome/free-solid-svg-icons';

import { UserSummary } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { UserSummaryCountComponent } from "./user-summary-count/user-summary-count.component";
import { UserShortSummaryComponent } from "./user-short-summary/user-short-summary.component";

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [
    RouterLink,
    FontAwesomeModule,
    UserSummaryCountComponent,
    UserShortSummaryComponent
],
  templateUrl: './home-user-info.component.html'
})
export class HomeUserInfoComponent implements OnInit {
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
