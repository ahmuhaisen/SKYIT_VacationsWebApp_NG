import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClockRotateLeft, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import { UserFullSummaryComponent } from "./user-full-summary/user-full-summary.component";
import { SectionComponent } from "../../components/section/section.component";
import { VacationHistoryCardComponent } from "../../components/vacation-history-card/vacation-history-card.component";
import { VacationsHistoryService } from '../../core/services/vacations-history.service';
import { UserService } from '../../core/services/user.service';
import { Vacation } from '../../core/models/vacation.model';
import { VacationRequest } from '../../core/models/vacation-request.model';
import { VacationsService } from '../../core/services/vacations.service';
import { RequestStatus } from '../../core/enums/request-status.enum';
import { PendingRequestCardComponent } from "./pending-request-card/pending-request-card.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FontAwesomeModule,
    UserFullSummaryComponent,
    SectionComponent,
    VacationHistoryCardComponent,
    PendingRequestCardComponent
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  clockRotateIcon = faClockRotateLeft;
  pauseIcon = faPauseCircle;

  vacationHistoryService = inject(VacationsHistoryService);
  vacationsService = inject(VacationsService);

  vacationHistory?: Vacation[];
  pendingRequests?: VacationRequest[];

  ngOnInit(): void{
    this.vacationHistory = this.vacationHistoryService.getEmployeeVacationHistoryById();
    this.pendingRequests = this.vacationsService.getLoggedInUserVacationRequests(4, RequestStatus.Pending);
    console.log(this.pendingRequests);
  }
}
