import { Component } from '@angular/core';
import {QuestionsService} from './questions.service';
import {RouterOutlet} from '@angular/router';
import {fadeInAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class AppComponent {
  title = 'warriorship';

  constructor(private questionsService: QuestionsService) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
