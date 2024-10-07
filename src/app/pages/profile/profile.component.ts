import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClockRotateLeft, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import { Vacation } from '../../core/models/vacation.model';
import { RequestStatus } from '../../core/enums/request-status.enum';
import { VacationRequest } from '../../core/models/vacation-request.model';
import { SectionComponent } from "../../components/section/section.component";
import { VacationsHistoryService } from '../../core/services/vacations-history.service';
import { VacationRequestsService } from '../../core/services/vacation-requests.service';
import { UserFullSummaryComponent } from "./user-full-summary/user-full-summary.component";
import { VacationHistoryCardComponent } from "../../components/vacation-history-card/vacation-history-card.component";
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
  vacationRequestsService = inject(VacationRequestsService);

  vacationHistory?: Vacation[];
  pendingRequests?: VacationRequest[];

  ngOnInit(): void{
    this.vacationHistory = this.vacationHistoryService.getEmployeeVacationHistoryById();
    this.pendingRequests = this.vacationRequestsService.getLoggedInUserVacationRequests(4, RequestStatus.Pending);
    console.log(this.pendingRequests);
  }
}
