import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserSummaryComponent } from "./user-summary/user-summary.component";
import { LatestNewsSliderComponent } from './latest-news-slider/latest-news-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    UserSummaryComponent,
    LatestNewsSliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
