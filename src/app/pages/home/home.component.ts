import { Component, inject } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from "./header/header.component";
import { VacationRequestsService } from '../../core/services/vacation-requests.service';
import { SectionComponent } from "../../components/section/section.component";
import { RequestCardComponent } from "../../components/request-card/request-card.component";
import { LatestNewsSliderComponent } from './latest-news-slider/latest-news-slider.component';
import { HomeUserInfoComponent } from './home-info/home-user-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
    HeaderComponent,
    HomeUserInfoComponent,
    LatestNewsSliderComponent,
    SectionComponent,
    RequestCardComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  requestsIcon = faAddressBook;

  private vacationRequestsService = inject(VacationRequestsService);

  vacationRequests = this.vacationRequestsService.getLoggedInUserVacationRequests(4);

  searchTerm = '';

  onSearch($event: string) {
    this.searchTerm = $event;
  }
}
