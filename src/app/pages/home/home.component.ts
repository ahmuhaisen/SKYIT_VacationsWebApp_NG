import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserSummaryComponent } from "./user-summary/user-summary.component";
import { LatestNewsSliderComponent } from './latest-news-slider/latest-news-slider.component';
import { SectionComponent } from "../../components/section/section.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { RequestCardComponent } from "../../components/request-card/request-card.component";
import { VacationsService } from '../../core/services/vacations.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
    HeaderComponent,
    UserSummaryComponent,
    LatestNewsSliderComponent,
    SectionComponent,
    RequestCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  requestsIcon = faAddressBook;

  private vacationRequestsService = inject(VacationsService);

  vacationRequests = this.vacationRequestsService.getLoggedInUserVacationRequests(4);

  searchTerm = '';

  onSearch($event: string) {
    this.searchTerm = $event;
  }
}
