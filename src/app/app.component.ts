import { Component } from '@angular/core';
import {QuestionsService} from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'warriorship';

  constructor(private questionsService: QuestionsService) {
  }
}
