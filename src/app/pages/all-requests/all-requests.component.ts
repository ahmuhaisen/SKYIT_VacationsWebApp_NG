import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faChevronLeft, faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { VacationsService } from '../../core/services/vacations.service';
import { RequestCardComponent } from "../../components/request-card/request-card.component";

@Component({
  selector: 'app-all-requests',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgFor,
    NgClass,
    RouterLink,
    DatePipe,
    CurrencyPipe,
    RequestCardComponent
],
  templateUrl: './all-requests.component.html',
  styleUrl: './all-requests.component.css'
})
export class AllRequestsComponent {
  addressBookIcon = faAddressBook;
  searchIcon = faMagnifyingGlass;
  filterIcon = faFilter;
  leftArrowIcon = faChevronLeft;
  rightArrowIcon = faChevronRight;

  private noOfRequestsPerPage = 4;
  pageIndex = signal(1);


  vacationsService = inject(VacationsService);
  route = inject(ActivatedRoute);

  requests = computed(() => {
    return this.vacationsService.getAllVacationRequests(this.noOfRequestsPerPage, this.pageIndex())
  });

  isSelectAllTriggered = signal(false);

  get totalPages() {
    return this.vacationsService.getVacationRequestsTotalPages(this.noOfRequestsPerPage);
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      let temp = +params['pageIndex'];
      this.tryUpdatePageNumber(temp);
    });
  
  }

  onSearch(target: EventTarget) {
  }


  private tryUpdatePageNumber(newValue: number) {
    if (newValue) {
      newValue > this.totalPages || newValue < 1 ? this.pageIndex.set(1): this.pageIndex.set(newValue);
    }
    else {
      this.pageIndex.set(1);
    }
  }

  onSelectChange(target: EventTarget) {
    this.isSelectAllTriggered.set((target as HTMLInputElement).checked);
  }
}
