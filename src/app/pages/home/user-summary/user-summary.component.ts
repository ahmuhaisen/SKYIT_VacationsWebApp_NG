import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faSquareUpRight, faUserLarge, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-summary.component.html',
  styleUrl: './user-summary.component.css'
})
export class UserSummaryComponent {
  userIcon = faUserLarge
  arrowIcon = faSquareUpRight
  requestsIcon = faAddressBook
  leaveRequestsIcon = faUsers
}
