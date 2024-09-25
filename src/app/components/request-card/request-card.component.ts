import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

import { VacationRequest } from '../../core/models/vacation-request.model';
import { HighlightSearchPipe } from '../../core/pipes/highlight-search.pipe';
import { RequestStatus } from '../../core/enums/request-status.enum';


@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [
    NgClass,
    DatePipe,
    CurrencyPipe,
    HighlightSearchPipe
  ],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  RequestStatus = RequestStatus;

  request = input.required<VacationRequest>();
  searchTerm = input<string>();

  onApprove() {
    this.request().status = RequestStatus.Approved;
    //Approve Logic here
  }
  onDecline() {
    this.request().status = RequestStatus.Declined;
    //Decline Logic here
  }

  get isApproveButtonDisabled(): boolean {
    return this.request().status === RequestStatus.Approved || this.request().status === RequestStatus.Declined;
  }

  get isDeclineButtonDisabled(): boolean {
    return this.request().status === RequestStatus.Declined || this.request().status === RequestStatus.Approved;
  }
}
