import { Component, input } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  arrowRightIcon = faArrowRight;
  searchIcon = faMagnifyingGlass;

  icon = input.required<IconDefinition>();
  title = input.required<string>();
}
