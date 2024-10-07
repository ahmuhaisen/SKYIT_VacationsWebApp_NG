import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { VacationsService } from '../../core/services/vacations.service';
import { RequestCardComponent } from "../../components/request-card/request-card.component";
import { PaginatorComponent } from "../../components/paginator/paginator.component";
import { HighlightSearchPipe } from '../../core/pipes/highlight-search.pipe';

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
    RequestCardComponent,
    PaginatorComponent,
    HighlightSearchPipe
],
  templateUrl: './all-requests.component.html',
  styleUrl: './all-requests.component.css'
})
export class AllRequestsComponent {
  addressBookIcon = faAddressBook;
  searchIcon = faMagnifyingGlass;
  filterIcon = faFilter;

  private noOfRequestsPerPage = 4;
  pageIndex = signal(1);
  searchTerm = signal('');

  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef<HTMLInputElement>;

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

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(500), // Wait for 0.5 second after typing stops
        distinctUntilChanged()
      )
      .subscribe((searchValue: string) => {
        this.searchTerm.set(searchValue);
      });

  }

  private tryUpdatePageNumber(newValue: number) {
    if (newValue) {
      newValue > this.totalPages || newValue < 1 ?
      this.pageIndex.set(1) :
      this.pageIndex.set(newValue);
    }
    else {
      this.pageIndex.set(1);
    }
  }

  onSelectChange(target: EventTarget) {
    this.isSelectAllTriggered.set((target as HTMLInputElement).checked);
  }
}
